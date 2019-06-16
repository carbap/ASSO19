import { Command } from './commands/Command';
import { Shape } from './shapes/Shape';
import { Expression } from './interpreter/Expression';
import { CoreCompiler } from './CoreCompiler';
import { Problem } from './Problem';

const NOT_WAITING: number = 0;

export class Kernel {
    private core1: string[];
    private core2: string[];
    private core3: string[];

    private coreCompilers: [CoreCompiler, CoreCompiler, CoreCompiler]; // Contains a compiler for each core
    /**
     * Each array position represents a core waiting status 
     * 0 - not waiting. 1, 2 or 3 - core whose signal we are waiting for
     */
    private waitings: [number, number, number] = [NOT_WAITING, NOT_WAITING, NOT_WAITING];
    /**
     * Indicates to which core the instruction being currently compiled belongs to
     * This variable is only used during compilation
     */
    private currentInstructionCore: number = 1;

    private errors: Array<string> = [];
    private programExecutionTime = 0; // Check the core with the biggest duration of all its instructions
    private commands: Array<Command> = []; //use Iterator
    private commandIterator: number = 0; // Index of the next command to be executed
    private buildSucceeded: boolean = false;

    private runtimeShapes: Array<Shape> = []; // shapes CREATED by the user and their current state (might have suffered translates, rotations, etc...)
    private drawnShapes: Array<Shape> = []; // shapes who have been in a DRAW instruction (the shape state is the one at the time of the DRAW instruction, NOT the updated one). Drawn shapes têm de ser cópias, porque se forem referencias, como so desenhamos no final, todas vao ter o estado final
    
    private problems: Array<Problem> = [];
    private currentProblem: number = 0;

    constructor(core1: string[] = [], core2: string[] = [], core3: string[] = []) {
        this.core1 = core1;
        this.core2 = core2;
        this.core3 = core3;
        this.coreCompilers = [new CoreCompiler(this.core1), new CoreCompiler(this.core2), new CoreCompiler(this.core3)];
    }

    private clearBuild() {
        this.resetShapes();
        this.coreCompilers = [new CoreCompiler(this.core1), new CoreCompiler(this.core2), new CoreCompiler(this.core3)];
        this.waitings = [NOT_WAITING, NOT_WAITING, NOT_WAITING];
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
            for(let compilerIdx in this.coreCompilers) {
                let compiler = this.coreCompilers[compilerIdx];
                let coreWaiting: boolean = this.isCoreWaiting(Number(compilerIdx) + 1);

                if(compiler.getTimeUntilNextInst() < timeUntilNextCompiler && 
                    compiler.hasInstructionsToCompile() &&
                    !coreWaiting) {
                    nextCompiler = compiler;
                    this.currentInstructionCore = Number(compilerIdx) + 1;
                    timeUntilNextCompiler = compiler.getTimeUntilNextInst();
                }
            }

            // Check if no compiler was selected to compile next instruction, despite existing instructions to compile (this can happen due to deadlock unsignalled waits)
            if(timeUntilNextCompiler === 9999) {
                this.errors.push("Wait Dead Lock preventing program from running");
                break;
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
            console.log("ERROS COMPILACAO: ", this.errors);
        }

        this.resetShapes();

        return this.buildSucceeded;
    }

    public wait(waitingCoreID: number, coreSignalID: number) {
        if(waitingCoreID < 1 || waitingCoreID > this.coreCompilers.length ||
            coreSignalID < 1 || coreSignalID > this.coreCompilers.length)
            return;

        this.waitings[waitingCoreID - 1] = coreSignalID;
    }

    public signal(signalingCoreID: number) {
        for(let coreIdx in this.waitings) {
            if(this.waitings[coreIdx] === signalingCoreID)
                this.waitings[coreIdx] = NOT_WAITING;
        }
    }

    private isCoreWaiting(coreID: number): boolean {
        if(coreID < 1 || coreID > this.coreCompilers.length)
            return false;

        return Boolean(this.waitings[coreID - 1]);
    }

    public getCurrentInstructionCore(): number {
        return this.currentInstructionCore;
    }
    public hasNext(): boolean {
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

    public getCurrentProblem(): Problem{
        return this.problems[this.currentProblem];
    }

    public setProblems(problems: Array<Problem>){
        this.problems = problems;
    }

    public getRuntimeShapes(): Shape[] {
        return this.runtimeShapes;
    }

    public getDrawnShapes(): Shape[] {
        return this.drawnShapes;
    }
}