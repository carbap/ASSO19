import { Shape } from '../model/shapes/Shape';

export abstract class UI {
    protected drawingCanvas: any;
    protected problemCanvas: any;
    private compileButton: HTMLElement;
    private stepButton: HTMLElement;
    private runButton: HTMLElement;
    
    protected drawingShapes: Array<Shape> = [];
    protected problemShapes : Array<Shape> = [];

    constructor(drawingCanvas: any, problemCanvas: any, 
                compileButton: HTMLElement, stepButton: HTMLElement, runButton: HTMLElement) {
        this.drawingCanvas = drawingCanvas;
        this.problemCanvas = problemCanvas;
        this.compileButton = compileButton;
        this.stepButton = stepButton;
        this.runButton = runButton;        
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

    public abstract compare(): boolean;

    public abstract draw(): void;
}