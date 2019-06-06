import { Command } from '../commands/Command';
import { Expression } from './Expression';
import * as Create from './create_expressions';

export class GeneralCreateExpression extends Expression {
    constructor(private rootExpression: Expression){ super(null); }

    public interpret(context: string): boolean {
        let args: string[] = context.split(' ');
        let creationSubject: string = args[0];

        let expression: Expression;
        switch(creationSubject) {
            case 'circle':
                expression = new Create.CreateCircleExpression(this.rootExpression);
                break;
            case 'triangle':
                expression = new Create.CreateTriangleExpression(this.rootExpression);
                break;
            case 'intersection':
                expression = new Create.CreateIntersectionExpression(this.rootExpression);
                break;
            default:
                (<any> this.rootExpression).addError("There's no shape called `" + creationSubject + "` that can be created");
                return false;
        }

        if(args.length == 1) {
            (<any> this.rootExpression).addError("ID must be specified for the created shape");
            return false;
        }

        let ID: string = args[2];
        if(this.rootExpression.getKernel().existsShape(ID)) {
            (<any> this.rootExpression).addError("Duplicated ID. Shape has already been created with ID `" + ID + "`");
            return false;
        }

        let contextArguments = context.substr(context.indexOf(' ') + 1);
        return expression.interpret(contextArguments);
    }
}