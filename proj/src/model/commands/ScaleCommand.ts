import { Kernel } from '../Kernel';
import { Shape } from '../shapes/Shape';
import { Command } from './Command';

export class ScaleCommand extends Command {
    private scaleFactor: number;

    constructor(kernel: Kernel, shape: Shape, scaleFactor: number) {
        const DURATION = 3;
        super(kernel, shape, DURATION);
        this.scaleFactor = this.scaleFactor;
    }

    public execute() {
        this.shape.scale(this.scaleFactor);
    }
}