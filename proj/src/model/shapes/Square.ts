import { Path, Size } from 'paper';
import { Shape } from './Shape';

export class Square extends Shape {
    private size: number;

    public constructor(ID: string, centerX: number, centerY: number, size: number) {
        super(ID, centerX, centerY);
        this.size = size;
    }

    public scale(factor: number): void {
        this.size *= factor;
    }

    public draw(): Path.Rectangle {
        // retornar paperjs quadrado
        return new Path();
    }
}