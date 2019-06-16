import { PaperShape } from './PaperShape';
import { Circle } from '../../../model/shapes/Circle';
import { Path, Point } from 'paper';

export class PaperCircle extends PaperShape {
    
    constructor(circle : Circle) {
        super();
        var center = new Point(circle.getCenter().getX(), circle.getCenter().getY());
        var radius = circle.getRadius();
        this.shape = new Path.Circle(center, radius);
        this.shape.fillColor = 'green';
        console.log("Instancing PaperCircle");
    }
}