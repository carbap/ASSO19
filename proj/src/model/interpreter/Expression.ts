import { Kernel } from '../Kernel';
import { Command } from '../commands/Command';
import * as MainExpressions from '.';


export class Expression {
    private kernel: Kernel;
    private errors: Array<string> = [];
    private command: Command = null;

    constructor(kernel: Kernel) {
        this.kernel = kernel;
    }

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

    public getKernel(): Kernel {
        return this.kernel;
    }

    public interpret(context: string): boolean {
        let instruction: string = context.split(' ')[0];

        let expression: Expression;
        switch(instruction) {
            case 'create':
                expression = new MainExpressions.GeneralCreateExpression(this);
                break;
            case 'translate':
                expression = new MainExpressions.TranslateExpression(this);
                break;
            case 'scale':
                expression = new MainExpressions.ScaleExpression(this);
                break;
            case 'draw':
                expression = new MainExpressions.DrawExpression(this);
                break;
            default:
                this.addError("There's no instruction called " + instruction);
                return false;
        }

        let contextArguments = context.substr(context.indexOf(' ') + 1);
        return expression.interpret(contextArguments);
    }
}