import { PaperShape } from './PaperShape';
import { Triangle } from '../../../model/shapes/Triangle';
import { Path, Point } from 'paper';

export class PaperTriangle extends PaperShape {
    
    constructor(triangle : Triangle) {
        super();
        var point1 = new Point(triangle.getPoint1().getX(), triangle.getPoint1().getY());
        var point2 = new Point(triangle.getPoint2().getX(), triangle.getPoint2().getY());
        var point3 = new Point(triangle.getPoint3().getX(), triangle.getPoint3().getY());
        this.shape = new Path();
        this.shape.add(point1);
        this.shape.add(point2);
        this.shape.add(point3);
        this.shape.closed = true;
        this.shape.fillColor = 'red';
        this.shape.rotate(triangle.getRotation());
    }
}