import { PaperShape } from './PaperShape';
import { Square } from '../../../model/shapes/Square';
import { Path, Point, Size } from 'paper';

export class PaperSquare extends PaperShape {
    
    constructor(square : Square) {
        super();
        var topLeftCorner = new Point(square.getCenter().getX(), square.getCenter().getY());
        var size = new Size(square.getSize(), square.getSize());
        this.shape = new Path.Rectangle(topLeftCorner, size);
        this.shape.fillColor = 'black';
        console.log("Instancing PaperSquare");
    }
}