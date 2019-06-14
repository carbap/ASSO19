import { PaperShape } from './PaperShape';
import { Square } from '../../../model/shapes/Square';
import { PathItem, Path, Point, Size } from 'paper';

export class PaperSquare extends PaperShape {
    
    constructor(square : Square) {
        super();
        var point = new Point(square.getCenter().getX(), square.getCenter().getY());
        var size = new Size(square.getSize(), square.getSize());
        this.shape = new Path.Rectangle(point, size);
    }
}