import * as PaperShapes from './paper_shapes';
import { Shape } from '../../model/shapes/Shape';
import * as Shapes from '../../model/shapes';

export class PaperFactory {
    constructor() {

    }

    public createPaperShape(shapeItem : Shape) : void {
        var ret;
        if(shapeItem instanceof Shapes.Circle) {
            ret = new PaperShapes.PaperCircle(<Shapes.Circle>shapeItem);
        }
        else if(shapeItem instanceof Shapes.Square) {
            ret = new PaperShapes.PaperSquare(<Shapes.Square>shapeItem);
        }
        else if(shapeItem instanceof Shapes.Triangle) {
            ret = new PaperShapes.PaperTriangle(<Shapes.Triangle>shapeItem);
        }
        else if(shapeItem instanceof Shapes.Intersection) {
            ret = new PaperShapes.PaperIntersection(<Shapes.Intersection>shapeItem);
        }
    }
}