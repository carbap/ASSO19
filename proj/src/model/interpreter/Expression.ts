import { Command } from '../commands/Command';
import { CreateShapeExpression } from './CreateShapeExpression';
import { TranslateExpression } from './TranslateExpression';
import { ScaleExpression } from './ScaleExpression';
import { DrawExpression } from './DrawExpression';

export class Expression {
    protected errors: Array<string> = [];
    protected command: Command = null;

    protected addError(error: string) {
        this.errors.push(error);
    }

    protected setCommand(command: Command) {
        this.command = command;
    }

    public getErrors(): Array<string> {
        return this.errors;
    }

    public getCommand(): Command {
        return this.command;
    }

    public interpret(context: string): boolean {
        let instruction: string = context.split(' ')[0];

        let expression: Expression;
        switch(instruction) {
            case 'create':
                expression = new CreateShapeExpression(this);
                break;
            case 'translate':
                expression = new TranslateExpression(this);
                break;
            case 'scale':
                expression = new ScaleExpression(this);
                break;
            case 'draw':
                expression = new DrawExpression(this);
                break;
            default:
                this.addError("There's no instruction called " + instruction);
                return false;
        }

        let contextArguments = context.substr(context.indexOf(' ') + 1);
        return expression.interpret(contextArguments);
    }
}