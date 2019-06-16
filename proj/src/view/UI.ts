import { Shape } from '../model/shapes/Shape';
import { Problem } from '../model/Problem';
import { Rectangle, Path, Color, Point, Size } from 'paper';

export abstract class UI {
    protected drawingCanvas: any;
    protected problemCanvas: any;
    
    protected drawingShapes: Array<Shape> = [];
    protected problemShapes : Array<Shape> = [];

    constructor(drawingCanvas: any, problemCanvas: any) {
        this.drawingCanvas = drawingCanvas;
        this.problemCanvas = problemCanvas;  
        this.drawGrids(drawingCanvas);
        this.drawGrids(problemCanvas);
    }

    public abstract compare(): boolean;

    public abstract draw(shapeList : Shape[], isDrawCanvas: boolean): void;

    public abstract drawGrids(canvas: any): void;

    public drawProblem(problem: Problem){
        this.draw(problem.getShapes(), false);
    }

    /*public getDrawingCanvas(): UI {
        return this.canvas;
    }*/

    public setDrawingShapes(shapeArray : Shape[]) : void
    {
        this.drawingShapes = shapeArray;
    }

    public setProblemShapes(shapeArray : Shape[]) : void
    {
        this.problemShapes = shapeArray;
    }
}