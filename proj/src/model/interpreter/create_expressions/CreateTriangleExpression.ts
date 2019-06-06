import { Triangle } from '../../shapes/Triangle';
import { CreateShapeCommand } from '../../commands/CreateShapeCommand';
import { Expression } from '../Expression';

export class CreateTriangleExpression extends Expression {
    constructor(private rootExpression: Expression){ super(null); }

    public interpret(context: string): boolean {
        // <ID> <p1X> <p1Y> <p2X> <p2Y> <p3X> <p3Y>
        
        let args: string[] = context.split(' ');

        if(args.length != 7) {
            (<any> this.rootExpression).addError("Invalid amount of arguments to create triangle. Should be: <ID> <p1X> <p1Y> <p2X> <p2Y> <p3X> <p3Y>");
            return false;
        }

        let ID: string = args[0];
        let p1X: number = Number(args[1]);
        let p1Y: number = Number(args[2]);
        let p2X: number = Number(args[3]);
        let p2Y: number = Number(args[4]);
        let p3X: number = Number(args[5]);
        let p3Y: number = Number(args[6]);

        if(isNaN(p1X) || isNaN(p1Y) ||
        isNaN(p2X) || isNaN(p2Y) ||
        isNaN(p3X) || isNaN(p3Y)) {
            (<any> this.rootExpression).addError("<p1X> <p1Y> <p2X> <p2Y> <p3X> and <p3Y> must all be numbers");
            return false;
        }

        let triangle = new Triangle(ID, p1X, p1Y, p2X, p2Y, p3X, p3Y);
        let command = new CreateShapeCommand(this.rootExpression.getKernel(), triangle);
        (<any> this.rootExpression).setCommand(command);

        return true;
    }
}