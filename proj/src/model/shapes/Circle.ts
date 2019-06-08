import { Path } from 'paper';
import { Shape } from './Shape';

export class Circle extends Shape {
    private radius: number;
    private radiusOG: number;

    public constructor(ID: string, centerX: number, centerY: number, radius: number) {
        super(ID, centerX, centerY);
        this.radius = radius;
        this.radiusOG = radius;
    }

    public reset() {
        this.radius = this.radiusOG;
        super.reset();
    }

    public scale(factor: number): void {
        this.radius *= factor;
    }

    public draw(): Path.Circle {
        // retornar paperjs circulo
        return new Path.Circle(this.center, this.radius);
    }
}