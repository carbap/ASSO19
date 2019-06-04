import { Kernel } from '../Kernel';
import { Command } from './Command';

export class TranslateCommand extends Command {
    private translationX: number;
    private translationY: number;

    constructor(kernel: Kernel, shapeID: string, duration: number, translationX: number, translationY: number){
        super(kernel, shapeID, duration);
        this.translationX = translationX;
        this.translationY = translationY;
    }

    public execute(){
        //Invoce kernel methods to manipulate shapes
    }
}