import { Kernel } from '../Kernel';
import { NullShape } from '../shapes/NullShape';
import { Command } from './Command';

export class WaitCommand extends Command {
    /**
     * waitingCore is waiting for a signal from signalingCoreID
     */
    private waitingCoreID: number;
    private signalingCoreID: number;

    constructor(kernel: Kernel, signalingCoreID: number) {
        const DURATION = 0;
        super(kernel, new NullShape(), DURATION);
        this.signalingCoreID = signalingCoreID;
        this.waitingCoreID = kernel.getCurrentInstructionCore();
    }

    public execute() {
        this.kernel.wait(this.waitingCoreID, this.signalingCoreID);
    }
}