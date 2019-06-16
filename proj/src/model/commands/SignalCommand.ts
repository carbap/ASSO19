import { Kernel } from '../Kernel';
import { NullShape } from '../shapes/NullShape';
import { Command } from './Command';

export class SignalCommand extends Command {

    private coreID: number;

    constructor(kernel: Kernel) {
        const DURATION = 0;
        super(kernel, new NullShape(), DURATION);
        this.coreID = kernel.getCurrentInstructionCore();
    }

    public execute() {
        this.kernel.signal(this.coreID);
    }
}