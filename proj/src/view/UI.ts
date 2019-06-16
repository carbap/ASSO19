import { Shape } from '../model/shapes/Shape';
import { Problem } from '../model/Problem';
import { Rectangle, Path, Color, Point, Size } from 'paper';

export abstract class UI {
    protected drawingCanvas: any;
    protected problemCanvas: any;

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

    public abstract updateProblem(problemIterator: number, numProblems: number): void;
}