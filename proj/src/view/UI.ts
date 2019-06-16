import { Shape } from '../model/shapes/Shape';
import { Rectangle, Path, Color, Point, Size } from 'paper';

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

    public abstract compare(): boolean;

    public abstract draw(): void;

    public drawGrids(){

        var all_canvas: HTMLCanvasElement[] = [this.problemCanvas, this.drawingCanvas];

        for(let canvas of all_canvas){
            paper.setup(canvas.id);
    
            var unit = 20; // size of each square of the grid
            var num_squares_x = Math.floor(canvas.width/unit);
            var num_squares_y = Math.floor(canvas.height/unit);
            var padding_x = (canvas.width - unit*num_squares_x)/2;
            var padding_y = (canvas.height - unit*num_squares_y)/2
            
            var path;
            var start;
        
            for(var i = 0; i < num_squares_x + 1; i++){
                path = new Path();
                path.strokeColor = 'grey';
                path.strokeWidth = 1;
                start = new Point(padding_x + unit*i, padding_y);
                path.moveTo(start);
                path.lineTo(start.add(new Point(0, num_squares_y*unit)));
            }
        
            for(var i = 0; i < num_squares_y + 1; i++){
                path = new Path();
                path.strokeColor = 'grey';
                path.strokeWidth = 1;
                start = new Point(padding_x, padding_y + unit*i);
                path.moveTo(start);
                path.lineTo(start.add(new Point(num_squares_x*unit, 0)));
            }
        }
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