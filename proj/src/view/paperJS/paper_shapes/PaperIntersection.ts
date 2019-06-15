import { PaperShape } from './PaperShape';
import * as Shapes from '../../../model/shapes';
import * as PaperShapes from './';
import { Shape } from '../../../model/shapes/Shape';
import { Path, Point } from 'paper';

export class PaperIntersection extends PaperShape {
    
    constructor(intersection : Shapes.Intersection) {
        super();
        var shapes : Shape[] = intersection.getIntersectedShapes()
        
        for(var i = 0; i < shapes.length; i++) {
            var temp
            if(shapes[i] instanceof Shapes.Circle) {
                temp = new PaperShapes.PaperCircle(<Shapes.Circle>shapes[i]);
            }
            else if(shapes[i] instanceof Shapes.Square) {
                temp = new PaperShapes.PaperSquare(<Shapes.Square>shapes[i]);
            }
            else if(shapes[i] instanceof Shapes.Triangle) {
                temp = new PaperShapes.PaperTriangle(<Shapes.Triangle>shapes[i]);
            }

            if(this.shape == null)
                    this.shape = temp;
                else
                    this.shape = this.shape.intersect(temp);
        }
    }
}