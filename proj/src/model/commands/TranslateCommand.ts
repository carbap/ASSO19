import { Kernel } from '../Kernel';
import { Shape } from '../shapes/Shape';
import { Command } from './Command';

export class TranslateCommand extends Command {
    private translationX: number;
    private translationY: number;

    constructor(kernel: Kernel, shape: Shape, translationX: number, translationY: number){
        const DURATION = 2;
        super(kernel, shape, DURATION);
        this.translationX = translationX;
        this.translationY = translationY;
    }

    public execute() {
        this.shape.translate(this.translationX, this.translationY);
    }
}