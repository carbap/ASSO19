import { PaperShape } from './PaperShape';
import * as Shapes from '../../../model/shapes';
import * as PaperShapes from './';
import { Shape } from '../../../model/shapes/Shape';
import { Path } from 'paper';
import { PaperFactory } from '../PaperFactory';

export class PaperUnion extends PaperShape {
    
    private firstShape : boolean = true;
    private paperShapeFactory: PaperFactory = new PaperFactory();

    constructor(union : Shapes.Union) {
        super();
        var shapes : Shape[] = union.getUnitedShapes();
        
        for(var i = 0; i < shapes.length; i++) {
            var temp = this.paperShapeFactory.createPaperShape(shapes[i]);

            if(!(temp instanceof PaperShapes.PaperEmpty)) {
                if(this.firstShape) {
                    this.shape = temp.getShape();
                    this.firstShape = false;
                }      
                else {
                    var uni = this.shape.unite(temp.getShape());
                    this.shape.remove();
                    temp.getShape().remove();
                    this.shape = <Path>uni;
                    
                }
            }         
        }

        this.shape.fillColor = 'purple';
        this.shape.rotate(union.getRotation());
    }
}