import { PaperShape } from './PaperShape';
import * as Shapes from '../../../model/shapes';
import * as PaperShapes from './';
import { Shape } from '../../../model/shapes/Shape';
import { Path } from 'paper';
import { PaperFactory } from '../PaperFactory';

export class PaperIntersection extends PaperShape {
    
    private firstShape : boolean = true;
    private paperShapeFactory: PaperFactory = new PaperFactory();

    constructor(intersection : Shapes.Intersection) {
        super();
        var shapes : Shape[] = intersection.getIntersectedShapes();
        
        for(var i = 0; i < shapes.length; i++) {
            var temp = this.paperShapeFactory.createPaperShape(shapes[i]);

            if(!(temp instanceof PaperShapes.PaperEmpty)) {
                if(this.firstShape) {
                    this.shape = temp.getShape();
                    this.firstShape = false;
                }      
                else {
                    var int = this.shape.intersect(temp.getShape());
                    this.shape.remove();
                    temp.getShape().remove();
                    this.shape = <Path>int;
                    
                }
            }         
        }

        this.shape.fillColor = 'blue';
        this.shape.rotate(intersection.getRotation());
    }
}