import { TranslateCommand } from '../commands/TranslateCommand';
import { Expression } from './Expression';

export class TranslateExpression extends Expression {
    constructor(private rootExpression: Expression){ super(null); }

    public interpret(context: string): boolean {
        // <ID> <translateX> <translateY>

        let args: string[] = context.split(' ');

        if(args.length != 3) {
            (<any> this.rootExpression).addError("Invalid amount of arguments to translate shape. Should be: <ID> <translateX> <translateY>");
            return false;
        }

        let ID: string = args[0];
        let translateX: number = Number(args[1]);
        let translateY: number = Number(args[2]);

        if(isNaN(translateX) || isNaN(translateY)) {
            (<any> this.rootExpression).addError("<translateX> and <translateY> must all be numbers");
            return false;
        }

        let shape = this.rootExpression.getKernel().getShape(ID);

        if(shape == null) {
            (<any> this.rootExpression).addError("There's no shape with ID `" + ID + "` to be scaled");
            return false;
        }

        let command = new TranslateCommand(this.rootExpression.getKernel(), shape, translateX, translateY);
        (<any> this.rootExpression).setCommand(command);

        return true;
    }
}