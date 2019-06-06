import { Circle } from '../../shapes/Circle';
import { CreateShapeCommand } from '../../commands/CreateShapeCommand';
import { Expression } from '../Expression';

export class CreateCircleExpression extends Expression {
    constructor(private rootExpression: Expression){ super(null); }

    public interpret(context: string): boolean {
        // <ID> <centerX> <centerY> <radius>
        let args: string[] = context.split(' ');

        if(args.length != 4) {
            (<any> this.rootExpression).addError("Invalid amount of arguments to create circle. Should be: <ID> <centerX> <centerY> <radius>");
            return false;
        }

        let ID: string = args[0];
        let centerX: number = Number(args[1]);
        let centerY: number = Number(args[2]);
        let radius: number = Number(args[3]);

        if(isNaN(centerX) || isNaN(centerY) || isNaN(radius)) {
            (<any> this.rootExpression).addError("<centerX> <centerY> and <radius> must all be numbers");
            return false;
        }

        let circle = new Circle(ID, centerX, centerY, radius);
        let command = new CreateShapeCommand(this.rootExpression.getKernel(), circle);

        return true;
    }
}