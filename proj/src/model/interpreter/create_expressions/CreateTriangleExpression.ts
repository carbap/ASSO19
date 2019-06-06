import { Command } from '../../commands/Command';
import { Expression } from '../Expression';

export class CreateTriangleExpression extends Expression {
    constructor(private rootExpression: Expression){ super(null); }

    public interpret(context: string): boolean {
        //algures rootExpression.addError()
        //rootExpression.setCommand()
        return false;
    }
}