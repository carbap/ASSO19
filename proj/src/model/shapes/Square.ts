import { Path, Size } from 'paper';
import { Shape } from './Shape';

export class Square extends Shape {
    private size: number;
    private sizeOG: number;

    public constructor(ID: string, centerX: number, centerY: number, size: number) {
        super(ID, centerX, centerY);
        this.size = size;
        this.sizeOG = size;
    }

    public reset() {
        this.size = this.sizeOG;
        super.reset();
    }

    public scale(factor: number): void {
        this.size *= factor;
    }

    public draw(): Path.Rectangle {
        // retornar paperjs quadrado
        return new Path();
    }

    public copy(): Square {
        return new Square(this.ID, this.center.x, this.center.y, this.size);
    }
}