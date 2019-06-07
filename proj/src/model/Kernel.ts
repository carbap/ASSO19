import { Command } from './commands/Command';
import { Shape } from './shapes/Shape';
import { Expression } from './interpreter/Expression';
import { CoreCompiler } from './CoreCompiler';

export class Kernel {
    private core1: string[];
    private core2: string[];
    private core3: string[];

    private coreCompilers: [CoreCompiler, CoreCompiler, CoreCompiler]; // Contains a compiler for each core

    private errors: Array<string> = [];
    private commands: Array<Command> = []; //use Iterator
    private commandIterator: number = 0; // Index of the next command to be executed
    private buildSucceeded: boolean = false;

    private runtimeShapes: Array<Shape> = []; // shapes CREATED by the user and their current state (might have suffered translates, rotations, etc...)
    private drawnShapes: Array<Shape> = []; // shapes who have been in a DRAW instruction (the shape state is the one at the time of the DRAW instruction, NOT the updated one)

    constructor(core1: string[], core2: string[], core3: string[]) {
        this.core1 = core1;
        this.core2 = core2;
        this.core3 = core3;
        this.clearBuild();
    }

    private clearBuild() {
        this.coreCompilers = [new CoreCompiler(this.core1), new CoreCompiler(this.core2), new CoreCompiler(this.core3)];
        this.errors = [];
        this.commands = [];
        this.commandIterator = 0;
        this.buildSucceeded = false;
    }

    public hasInstructionsToCompile() {
        for(var compiler of this.coreCompilers) {
            if(compiler.hasInstructionsToCompile())
                return true;
        }
        return false;
    }

    public compile(): boolean {
        this.clearBuild();

        while(this.hasInstructionsToCompile()) {
            
            // Check what compiler will be available sooner
            let nextCompiler: CoreCompiler = this.coreCompilers[0];
            let timeUntilNextCompiler: number = 9999;
            for(var compiler of this.coreCompilers) {
                if(compiler.getTimeUntilNextInst() < timeUntilNextCompiler || compiler.hasInstructionsToCompile()) {
                    nextCompiler = compiler;
                    timeUntilNextCompiler = compiler.getTimeUntilNextInst();
                }
            }

            // Simulate time passing, by deducting nextCompiler current instruction duration on all compilers, before compiling the next instruction on nextCompiler
            for(var compiler of this.coreCompilers) {
                compiler.advanceTime(timeUntilNextCompiler);
            }

            // Compile next instruction
            let interpreter: Expression = new Expression(this);
            let nextCommand = nextCompiler.compileNext(interpreter);

            // Check if compilation generated errors (Command is null)
            if(nextCommand == null) {
                this.errors = this.errors.concat(interpreter.getErrors());
            } else { // If no errors appeared, add command
                this.commands.push(nextCommand);
            }
            // TODO: averiguar se não é melhor para a compilaçao mal aparece o primeiro erro, 
            // porque provavelmente vai dar problemas porque a duracao do comando nao é incrementada se der erro
        }

        // interpret core1, core2 and core3
        // var expression = new MasterExpression(this.core1)
        // expression.interpret()

        // this will set errors and/or commands
        // example: core1 has errors but core2 hasn't, so both 'errors' and 'commands' will be non-empty

        // if there are errors
            // buildSucceeded = false
        // else (no errors)
            // buildSucceeded = true;
            // sort commands (NOTE: maybe commands should know what core they are from and what line)

        return this.buildSucceeded;
    }

    private hasNext(): boolean {
        return this.commandIterator >= this.commands.length;
    }

    public runNext(): void {
        // Execute next command
        if(!this.hasNext())
            return;

        this.commands[this.commandIterator].execute();
        this.commandIterator++;
    }

    public runAll(): void {
        // Run all commands from the current point (Iterator)
        while(this.hasNext()) {
            this.runNext();
        }
    }

    public existsShape(shapeID: string): boolean {
        for(var shape of this.runtimeShapes) {
            if(shape.getID() === shapeID)
                return true;
        }
        return false;
    }
    
    public createShape(shape: Shape): void {
        this.runtimeShapes.push(shape);
    }

    public drawShape(shape: Shape): void {
        this.drawnShapes.push(shape);
    }

    public getShape(shapeID: string): Shape | null {
        for(var shape of this.runtimeShapes) {
            if(shape.getID() === shapeID)
                return shape;
        }
        return null;
    }

    public getRuntimeShapes(): Shape[] {
        return this.runtimeShapes;
    }

    public getDrawnShapes(): Shape[] {
        return this.runtimeShapes;
    }
}