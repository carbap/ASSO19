import { Kernel } from '../Kernel';
import { NullShape } from '../shapes/NullShape';
import { Command } from './Command';

export class SignalCommand extends Command {

    constructor(kernel: Kernel) {
        const DURATION = 0;
        super(kernel, new NullShape(), DURATION);
    }

    public execute() {
        
    }
}