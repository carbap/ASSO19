import { Kernel } from '../Kernel';
import { Shape } from '../shapes/Shape';

export abstract class Command {
    protected kernel: Kernel;
    protected shape: Shape;
    protected duration: number;

    constructor(kernel: Kernel, shape: Shape, duration: number) { 
        this.kernel = kernel;
        this.shape = shape;
        this.duration = duration;
    }

    abstract execute(): void; // Operates on kernel
}