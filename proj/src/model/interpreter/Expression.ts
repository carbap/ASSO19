import { Command } from '../commands/Command';
import { NullCommand } from '../commands/NullCommand';

export class Expression {
    protected errors: Array<string> = [];
    protected command: Command = new NullCommand();

    public interpret(context: string): boolean {
        return false;
    }
}