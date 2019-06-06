import { DrawCommand } from '../commands/DrawCommand';
import { Expression } from './Expression';

export class DrawExpression extends Expression {
    constructor(private rootExpression: Expression){ 
        super(null);
    }

    public interpret(context: string): boolean {
        // <ID>

        let ID: string = context.split(' ')[0];
        let shape = this.rootExpression.getKernel().getShape(ID);

        if(shape == null) {
            (<any> this.rootExpression).addError("There's no shape with ID `" + ID + "` to be drawn");
            return false;
        }

        let command = new DrawCommand(this.rootExpression.getKernel(), shape);
        (<any> this.rootExpression).setCommand(command);

        return true;
    }
}