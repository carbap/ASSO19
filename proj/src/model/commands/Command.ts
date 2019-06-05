import { Kernel } from '../Kernel';

export abstract class Command {
    protected kernel: Kernel;
    protected shapeID: string; // Id of the shape being passed as the first argument of every command
    protected duration: number;

    constructor(kernel: Kernel, shapeID: string, duration: number){ 
        this.kernel = kernel;
        this.shapeID = shapeID;
        this.duration = duration;
    }

    abstract execute(): void; // Operates on kernel
}