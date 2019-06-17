import { Kernel } from '../Kernel';
import { Shape } from '../shapes/Shape';
import { Command } from './Command';

export class RotateCommand extends Command {
    private rotation: number;

    constructor(kernel: Kernel, shape: Shape, rotation: number) {
        const DURATION = 3;
        super(kernel, shape, DURATION);
        this.rotation = rotation;
    }

    public execute() {
        console.log("Executou rotate")
        this.shape.rotate(this.rotation);
    }
}