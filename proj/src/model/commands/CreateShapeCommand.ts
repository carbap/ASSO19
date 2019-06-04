import { Kernel } from '../Kernel';
import { Command } from './Command';

export class CreateShapeCommand extends Command {
    constructor(kernel: Kernel, shapeID: string, duration: number){
        super(kernel, shapeID, duration);
    }

    public execute(){
        //Invoce kernel methods to manipulate shapes
    }
}