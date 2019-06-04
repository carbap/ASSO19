import { Kernel } from '../Kernel';
import { Command } from './Command';

export class ScaleCommand extends Command {
    private scaleFactor: number;

    constructor(kernel: Kernel, shapeID: string, duration: number, scaleFactor: number){
        super(kernel, shapeID, duration);
        this.scaleFactor = this.scaleFactor;
    }

    public execute(){
        //Invoce kernel methods to manipulate shapes
    }
}