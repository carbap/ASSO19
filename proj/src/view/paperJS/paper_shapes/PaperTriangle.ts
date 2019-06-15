import { PaperShape } from './PaperShape';
import { Triangle } from '../../../model/shapes/Triangle';
import { Path, Point } from 'paper';

export class PaperTriangle extends PaperShape {
    
    constructor(triangle : Triangle) {
        super();
        var point1 = new Point(triangle.getPoint1().getX(), triangle.getPoint1().getY());
        var point2 = new Point(triangle.getPoint2().getX(), triangle.getPoint2().getY());
        var point3 = new Point(triangle.getPoint3().getX(), triangle.getPoint3().getY());
        this.shape = new Path.Line(point1, point2);
        var temp : Path = new Path.Line(point2, point3);
        this.shape = this.shape.unite(temp);
        var temp2 : Path = new Path.Line(point3, point1);
        this.shape = this.shape.unite(temp2);
    }
}