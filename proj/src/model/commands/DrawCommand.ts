import { Kernel } from '../Kernel';
import { Shape } from '../shapes/Shape';
import { Command } from './Command';

export class DrawCommand extends Command {

    constructor(kernel: Kernel, shape: Shape){
        const DURATION = 1;
        super(kernel, shape, DURATION);
    }

    public execute(){
        //Invoce kernel methods to manipulate shapes
    }
}