import { Path } from "paper";
import { Shape } from "./Shape";

export class Triangle extends Shape {
    
    public constructor(centerX: number, centerY: number) {
        super(centerX, centerY);
    }

    public scale(factor: number): void {
        // TODO
    }

    public draw(): Path {
        // retornar paperjs triangulo
        return new Path();
    }
}