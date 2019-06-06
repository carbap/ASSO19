import { ScaleCommand } from '../commands/ScaleCommand';
import { Expression } from './Expression';

export class ScaleExpression extends Expression {
    constructor(private rootExpression: Expression){ super(null); }

    public interpret(context: string): boolean {
        // <ID> <scaleFactor>

        let args: string[] = context.split(' ');

        if(args.length != 2) {
            (<any> this.rootExpression).addError("Invalid amount of arguments to scale shape. Should be: <ID> <scaleFactor>");
            return false;
        }

        let ID: string = args[0];
        let scaleFactor: number = Number(args[1]);

        if(isNaN(scaleFactor)) {
            (<any> this.rootExpression).addError("<scaleFactor> must be a number");
            return false;
        }

        let shape = this.rootExpression.getKernel().getShape(ID);

        if(shape == null) {
            (<any> this.rootExpression).addError("There's no shape with ID `" + ID + "` to be scaled");
            return false;
        }

        let command = new ScaleCommand(this.rootExpression.getKernel(), shape, scaleFactor);
        (<any> this.rootExpression).setCommand(command);

        return true;
    }
}