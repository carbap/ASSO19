import { Intersection } from '../../shapes/Intersection';
import { CreateShapeCommand } from '../../commands/CreateShapeCommand';
import { Expression } from '../Expression';

export class CreateIntersectionExpression extends Expression {
    constructor(private rootExpression: Expression){ super(null); }

    public interpret(context: string): boolean {
        // <newShapeID> <existingShape1ID> <existingShape2ID> ... <existingShapeNID>

        let args: string[] = context.split(' ');

        if(args.length < 3) {
            (<any> this.rootExpression).addError("Not enough arguments to create intersection. You need at least 3 arguments. Should be: <newShapeID> <existingShape1ID> <existingShape2ID> ... <existingShapeNID>");
            return false;
        }

        let ID: string = args[0];
        let shapesToIntersect = [];

        let IDsToIntersect: string[] = context.substr(context.indexOf(' ') + 1).split(' ');
        for(var id of IDsToIntersect) {
            let shape = this.rootExpression.getKernel().getShape(id);

            if(shape == null) {
                (<any> this.rootExpression).addError("There's no shape with ID `" + id + "` to be intersected");
                return false;
            }

            shapesToIntersect.push(shape);
        }

        let intersection = new Intersection(ID, shapesToIntersect);
        let command = new CreateShapeCommand(this.rootExpression.getKernel(), intersection);
        (<any> this.rootExpression).setCommand(command);

        return true;
    }
}