import { Path, Size } from "paper";
import { Shape } from "./Shape";

export class Square extends Shape {
    
    public constructor(centerX: number, centerY: number, private size: number) {
        super(centerX, centerY);
    }

    public scale(factor: number): void {
        this.size *= factor;
    }

    public draw(): Path.Rectangle {
        // retornar paperjs quadrado
        return new Path();
    }
}