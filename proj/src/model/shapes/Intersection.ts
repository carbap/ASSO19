import { Path, Size } from 'paper';
import { Shape } from './Shape';

export class Intersection extends Shape {
    private intersectedShapes: Shape[];

    public constructor(ID: string, intersectedShapes: Shape[]) {
        // An intersection doesn't have a center
        super(ID, 0, 0);
        this.intersectedShapes = intersectedShapes;
    }

    public reset() {
        for(var shape of this.intersectedShapes){
            shape.reset();
        }
    }

    public translate(offsetX: number, offsetY: number) {
        for(var shape of this.intersectedShapes){
            shape.translate(offsetX, offsetY);
        }
    }

    public scale(factor: number): void {
        for(var shape of this.intersectedShapes){
            shape.scale(factor);
        }
    }

    public draw(): Path.Rectangle {
        // averiguar como retornar paperjs intersecao de figuras
        // provavelmente vamos ter de ir buscar o path das varias shapes e UNION delas
        return new Path();
    }
}