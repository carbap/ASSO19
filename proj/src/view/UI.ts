import { Shape } from '../model/shapes/Shape';
import { Problem } from '../model/Problem';
import { Rectangle, Path, Color, Point, Size } from 'paper';

export abstract class UI {
    protected drawingCanvas: any;
    protected problemCanvas: any;

    private compileButton: HTMLElement;
    private nextButton: HTMLElement;
    private runButton: HTMLElement;
    private nextProblemButton: HTMLElement;

    private infoDiv: HTMLElement;

    protected drawingShapes: Array<Shape> = [];
    protected problemShapes : Array<Shape> = [];

    constructor(drawingCanvas: any, problemCanvas: any, 
        compileButton: HTMLElement, nextButton: HTMLElement, runButton: HTMLElement, nextProblemButton: HTMLElement,
        infoDiv: HTMLElement) {

        this.drawingCanvas = drawingCanvas;
        this.problemCanvas = problemCanvas;

        this.compileButton = compileButton;
        this.nextButton = nextButton;
        this.runButton = runButton;
        this.nextProblemButton = nextProblemButton;
        this.initializeButtons();
        
        this.infoDiv = infoDiv;

        this.drawGrids(drawingCanvas);
        this.drawGrids(problemCanvas);
    }

    public abstract compare(): boolean;

    public abstract draw(shapeList : Shape[], isDrawCanvas: boolean): void;

    public abstract drawGrids(canvas: any): void;

    public initializeButtons() {
        this.compileButton.style.visibility = 'visible';
        this.nextButton.style.visibility = 'hidden';
        this.runButton.style.visibility = 'hidden';
        this.nextProblemButton.style.visibility = 'hidden';
    }

    public activateCompilation() {
        this.compileButton.style.visibility = 'visible';
        this.nextButton.style.visibility = 'hidden';
        this.runButton.style.visibility = 'hidden';
    }

    public compileSuccessful() {
        this.compileButton.style.visibility = 'hidden';
        this.nextButton.style.visibility = 'visible';
        this.runButton.style.visibility = 'visible';

        this.infoDiv.innerHTML = "Compilation successful";
        this.infoDiv.style.color = 'green';
    }

    public compileFailed(errors: Array<string>) {
        let info: string = "Compilation failed <br/>";
        for(let error of errors) {
            info += error + "<br/>";
        }

        this.infoDiv.innerHTML = info;
        this.infoDiv.style.color = 'red';
    }

    public async buildSuspense() {
        for(let i = 1; i < 3; i++) {
            let timeBetweenUpdate = 200;
            this.infoDiv.innerHTML = "Checking solution"; let promise = new Promise((resolve, reject) => {setTimeout(() => resolve(), 200)}); await promise;
            this.infoDiv.innerHTML = "Checking solution."; let promise2 = new Promise((resolve, reject) => {setTimeout(() => resolve(), 200)}); await promise;
            this.infoDiv.innerHTML = "Checking solution.."; let promise3 = new Promise((resolve, reject) => {setTimeout(() => resolve(), 200)}); await promise;
            this.infoDiv.innerHTML = "Checking solution..."; let promise4 = new Promise((resolve, reject) => {setTimeout(() => resolve(), 200)}); await promise;
        }
        //ESTA A FALHAR
    }

    private hideInstructionButtons() {
        this.nextButton.style.visibility = 'hidden';
        this.runButton.style.visibility = 'hidden';
    }

    public async problemSolved() {
        await this.buildSuspense();

        this.hideInstructionButtons();
        this.nextProblemButton.style.visibility = 'visible';
        this.infoDiv.innerHTML = "IT'S A MATCH!!!"
        this.infoDiv.style.color = 'green';
    }

    public async problemNotSolved() {
        await this.buildSuspense();

        this.hideInstructionButtons();
        this.infoDiv.innerHTML = "DRAWING DON'T MATCH"
        this.infoDiv.style.color = 'red';
    }

    public drawProblem(problem: Problem){
        this.draw(problem.getShapes(), false);
    }

    public abstract updateProblem(problemIterator: number, problems: Array<Problem>): void;
}