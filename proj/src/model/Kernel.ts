import { Command } from './commands/Command';
import { Shape } from './shapes/Shape';

export class Kernel {
    private core1: string;
    private core2: string;
    private core3: string;

    private errors: Array<string> = [];
    private commands: Array<Command> = []; //use Iterator
    private commandIterator: number = 0; // Index of the next command to be executed
    private buildSucceeded: boolean = false;

    private runtimeShapes: Array<Shape> = []; // shapes CREATED by the user and their current state (might have suffered translates, rotations, etc...)
    private drawnShapes: Array<Shape> = []; // shapes who have been in a DRAW instruction (the shape state is the one at the time of the DRAW instruction, NOT the updated one)

    constructor(core1: string, core2: string, core3: string) {
        this.core1 = core1;
        this.core2 = core2;
        this.core3 = core3;
    }

    public compile(): boolean {
        // clear errors and commands

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
        //TODO: verificar se existe alguma shape com este ID
    }
    
    public getRuntimeShapes(): Shape[] {
        return this.runtimeShapes;
    }

    public getDrawnShapes(): Shape[] {
        return this.runtimeShapes;
    }
}