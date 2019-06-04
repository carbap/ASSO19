import { Kernel } from '../Kernel';
import { Command } from './Command';
import { Shape } from '../shapes/Shape';

export class CreateIntersectionCommand extends Command {
    private intersectedShapes: Shape[];

    constructor(kernel: Kernel, shapeID: string, duration: number, intersectedShapes: Shape[]){
        super(kernel, shapeID, duration);
        this.intersectedShapes = intersectedShapes;
    }

    public execute(){
        //Invoce kernel methods to manipulate shapes
    }
}
