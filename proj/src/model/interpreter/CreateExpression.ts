import { Command } from '../commands/Command';
import { Expression } from './Expression';

export class CreateExpression extends Expression {
    constructor(private rootExpression: Expression){ super(); }

    public interpret(context: string): boolean {
        //algures rootExpression.addError()
        //rootExpression.setCommand()

        //verificar os varios tipos de create (create shape, create intersection, etc.)
        return false;
    }
}