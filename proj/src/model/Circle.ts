import { Path } from "paper";
import { Shape } from "./Shape";

export class Circle extends Shape {
    
    public constructor(centerX: number, centerY: number, private radius: number) {
        super(centerX, centerY);
    }

    public scale(factor: number): void {
        this.radius *= factor;
    }

    public draw(): Path.Circle {
        // retornar paperjs circulo
        return new Path.Circle(this.center, this.radius);
    }
}