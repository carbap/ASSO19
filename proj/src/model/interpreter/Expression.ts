import { Command } from '../commands/Command';

export class Expression {
    protected errors: Array<string> = [];
    protected command: Command = null;

    public interpret(context: string): boolean {
        return false;
    }
}