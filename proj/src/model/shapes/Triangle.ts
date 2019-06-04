import { Path } from 'paper';
import { Shape } from './Shape';

export class Triangle extends Shape {
    
    public constructor(ID: string, centerX: number, centerY: number) {
        super(ID, centerX, centerY);
    }

    public scale(factor: number): void {
        // TODO
    }

    public draw(): Path {
        // retornar paperjs triangulo
        return new Path();
    }
}