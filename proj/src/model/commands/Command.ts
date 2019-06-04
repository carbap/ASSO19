import { Kernel } from '../Kernel';

export abstract class Command {
    protected kernel: Kernel;
    protected shapeID: string; // Id of the shape being passed as the first argument of every command
    protected duration: number;

    constructor(protected kernel: Kernel, protected shapeID: string, protected duration: number){ }

    abstract execute(): void; // Operates on kernel
}