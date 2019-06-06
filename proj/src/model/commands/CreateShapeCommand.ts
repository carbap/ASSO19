import { Kernel } from '../Kernel';
import { Shape } from '../shapes/Shape';
import { Command } from './Command';

export class CreateShapeCommand extends Command {

    constructor(kernel: Kernel, shape: Shape) {
        const DURATION = 5;
        super(kernel, shape, DURATION);
    }

    public execute() {
        this.kernel.createShape(this.shape);
    }
}