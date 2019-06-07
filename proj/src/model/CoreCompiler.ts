import { Command } from './commands/Command';
import { Expression } from './interpreter/Expression';

export class CoreCompiler {
    private instructions: Array<string> = [];
    private instructionIterator: number = 0; // Index of the next command to be executed

    /** 
     * Everytime we compile an instruction, 
     * its duration will tell us how much time we need to wait until the next core instruction can be executed
     *
     * This is helpful to know which of the kernel 3 cores will be executing the next instruction,
     * because the one with the least timeUntilNextInst will be the one executing the next instruction
     * And whenever a core executes and instruction, we need to reduce the instruction duration on all cores (to simulate time passing by)
    **/
    private timeUntilNextInst: number = 0;

    public constructor(instructions: string[]) {
        this.instructions = instructions;
    }

    public getTimeUntilNextInst(): number {
        return this.timeUntilNextInst;
    }

    public advanceTime(elapsedTime: number): void {
        this.timeUntilNextInst = this.timeUntilNextInst - elapsedTime >= 0 ? this.timeUntilNextInst - elapsedTime : 0;
    }

    public hasInstructionsToCompile(): boolean {
        return this.instructionIterator >= this.instructions.length;
    }

    public compileNext(interpreter: Expression): Command | null {
        // kernel passes the interpreter to the core compiler
        if(!this.hasInstructionsToCompile())
            return null;
        
        let instruction: string = this.instructions[this.instructionIterator];
        interpreter.interpret(instruction);
        let command = interpreter.getCommand();

        if(command == null)
            return null;

        this.timeUntilNextInst = command.getDuration();
        return command;
    }
}