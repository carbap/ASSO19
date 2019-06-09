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
    private programExecutionTime = 0; // Check the core with the biggest duration of all its instructions
    private commands: Array<Command> = []; //use Iterator
    private commandIterator: number = 0; // Index of the next command to be executed
    private buildSucceeded: boolean = false;

    private runtimeShapes: Array<Shape> = []; // shapes CREATED by the user and their current state (might have suffered translates, rotations, etc...)
    private drawnShapes: Array<Shape> = []; // shapes who have been in a DRAW instruction (the shape state is the one at the time of the DRAW instruction, NOT the updated one). Drawn shapes têm de ser cópias, porque se forem referencias, como so desenhamos no final, todas vao ter o estado final
    
    constructor(core1: string[] = [], core2: string[] = [], core3: string[] = []) {
        this.core1 = core1;
        this.core2 = core2;
        this.core3 = core3;
        this.coreCompilers = [new CoreCompiler(this.core1), new CoreCompiler(this.core2), new CoreCompiler(this.core3)];
    }

    private clearBuild() {
        this.coreCompilers = [new CoreCompiler(this.core1), new CoreCompiler(this.core2), new CoreCompiler(this.core3)];
        this.errors = [];
        this.programExecutionTime = 0;
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
                if(compiler.getTimeUntilNextInst() < timeUntilNextCompiler && compiler.hasInstructionsToCompile()) {
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
                console.log("ERRO: ", interpreter.getErrors());
                this.errors = this.errors.concat(interpreter.getErrors());
                break;
            } else { // If no errors occurred. store and execute command (command needs to be executed because certain instructions require shapes already created for the interpreter to work)
                nextCommand.execute();
                this.commands.push(nextCommand);
                console.log("EXECUTOU ", nextCommand);
            }
        }

        if(this.errors.length == 0) {
            // If no errors occured, just clean the generated shapes during commands execution because we are just compiling the code
            // and we don't intend to draw them. The objective of compilation is just to get the commands that will be excuted when
            // the instructions are run
            this.buildSucceeded = true;

            let coreDurations = this.coreCompilers.map(core => { return core.getTotalCoreDuration(); });
            this.programExecutionTime = Math.max(...coreDurations);
            console.log("EXECUTION TIME ", this.programExecutionTime);
        } else {
            //console.log("ERROS COMPILACAO: ", this.errors);
        }

        this.resetShapes();

        return this.buildSucceeded;
    }

    private hasNext(): boolean {
        return this.commandIterator < this.commands.length;
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

    public resetShapes(): void {
        for(var shape of this.runtimeShapes) {
            console.log("a limpar ", shape);
            shape.reset();
        }
        this.runtimeShapes = [];
        this.drawnShapes = [];
    }

    public getShape(shapeID: string): Shape | null {
        for(var shape of this.runtimeShapes) {
            if(shape.getID() === shapeID)
                return shape;
        }
        return null;
    }

    public setCores(core1: string[], core2: string[], core3: string[]) {
        console.log("entrou set cores");
        this.core1 = core1;
        this.core2 = core2;
        this.core3 = core3;
    }

    public getRuntimeShapes(): Shape[] {
        return this.runtimeShapes;
    }

    public getDrawnShapes(): Shape[] {
        return this.runtimeShapes;
    }
}