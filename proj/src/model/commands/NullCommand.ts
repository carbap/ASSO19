import { Command } from './Command';

export class NullCommand extends Command{
    constructor(){ super(null, '', 0); }
    public execute() {}
}