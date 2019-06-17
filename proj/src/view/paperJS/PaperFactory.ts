import * as PaperShapes from './paper_shapes';
import { PaperShape } from './paper_shapes/PaperShape';
import { Shape } from '../../model/shapes/Shape';
import * as Shapes from '../../model/shapes';

export class PaperFactory {
    constructor() {

    }

    public createPaperShape(shapeItem : Shape) : PaperShape {
        var ret : PaperShape = new PaperShapes.PaperEmpty();
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
        else if(shapeItem instanceof Shapes.Union) {
            ret = new PaperShapes.PaperUnion(<Shapes.Union>shapeItem);
        }

        return ret;
    }
}