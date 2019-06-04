import * as c from './command'
import * as s from './shape'

export class Model {
    private core1: string;
    private core2: string;
    private core3: string;

    private errors: Array<string> = [];
    private commands: Array<c.Command> = []; //use Iterator
    private buildSucceeded: boolean = false;

    private runtimeShapes: Array<s.Shape> = [];

    constructor(core1: string, core2: string, core3: string) {
        this.core1 = core1;
        this.core2 = core2;
        this.core3 = core3;
    }

    public compile(): boolean{
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

    public next(): c.Command{
        // return the next command
        return new c.CreateShapeCommand(2); //TO DO: change
    }

    public run(): Array<c.Command>{
        // return all commands from the current point (Iterator)
        return [];
    }

    public getRuntimeShapes(): s.Shape[] {
        return this.runtimeShapes;
    }
}