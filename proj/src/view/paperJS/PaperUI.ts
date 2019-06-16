import { UI } from '../UI';
import { PaperScope, } from 'paper';
import * as Shapes from '../../model/shapes';
import * as PaperShapes from './paper_shapes';
import { Shape } from '../../model/shapes/Shape';

export class PaperUI extends UI {
        
    private scope: PaperScope;

    constructor(drawingCanvas: HTMLCanvasElement, problemCanvas: HTMLCanvasElement, compileButton: HTMLElement, stepButton: HTMLElement, runButton: HTMLElement) {
        super(drawingCanvas, problemCanvas, compileButton, stepButton, runButton);
        this.scope = new PaperScope();
        
    }

    public compare(): boolean {
        throw new Error("Method not implemented.");
    }
    public draw(shapeList : Shape[]): void {
        console.log("PaperUI.draw()");
        this.scope.setup(this.drawingCanvas);

        //clear canvas
        this.scope.project.clear();

        //redraw grid in bg
        super.drawGrids();
        
        for(var i = 0; i < shapeList.length; i++) {
            var temp
            if(shapeList[i] instanceof Shapes.Circle) {
                temp = new PaperShapes.PaperCircle(<Shapes.Circle>shapeList[i]);
            }
            else if(shapeList[i] instanceof Shapes.Square) {
                console.log("PaperUI.draw() PaperSquare");
                temp = new PaperShapes.PaperSquare(<Shapes.Square>shapeList[i]);
            }
            else if(shapeList[i] instanceof Shapes.Triangle) {
                temp = new PaperShapes.PaperTriangle(<Shapes.Triangle>shapeList[i]);
            }
            else if(shapeList[i] instanceof Shapes.Intersection) {
                temp = new PaperShapes.PaperIntersection(<Shapes.Intersection>shapeList[i]);
            }
        }
    }
}