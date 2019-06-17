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

        this.infoDiv.innerHTML = "Information related to program compilation and solution verification";
        this.infoDiv.style.color = 'black';
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
        this.infoDiv.style.color = 'black';
        for(let i = 1; i < 5; i++) {
            let timeBetweenUpdate = 200;
            this.infoDiv.innerHTML = "Checking solution"; let promise = new Promise((resolve, reject) => {setTimeout(() => resolve(), timeBetweenUpdate)}); await promise;
            this.infoDiv.innerHTML = "Checking solution."; let promise2 = new Promise((resolve, reject) => {setTimeout(() => resolve(), timeBetweenUpdate)}); await promise2;
            this.infoDiv.innerHTML = "Checking solution.."; let promise3 = new Promise((resolve, reject) => {setTimeout(() => resolve(), timeBetweenUpdate)}); await promise3;
            this.infoDiv.innerHTML = "Checking solution..."; let promise4 = new Promise((resolve, reject) => {setTimeout(() => resolve(), timeBetweenUpdate)}); await promise4;
        }
    }

    private hideInstructionButtons() {
        this.nextButton.style.visibility = 'hidden';
        this.runButton.style.visibility = 'hidden';
    }

    public drawingsMatch(match: boolean) {
        this.hideInstructionButtons();
        if(match){
            this.nextProblemButton.style.visibility = 'visible';
            this.infoDiv.innerHTML = "IT'S A MATCH!!!\n";
            this.infoDiv.style.color = 'green';
        }
        else{
            this.infoDiv.innerHTML = "DRAWINGS DON'T MATCH\n"
            this.infoDiv.style.color = 'red';
        }
    }

    public completionTime(time: number, maximumTime: number){
        this.infoDiv.innerHTML += "Completion time: " + time + "s. Maximum allowed time: " + maximumTime + "s.";
        if(time <= maximumTime)
            this.infoDiv.style.color = 'green';
        else
            this.infoDiv.style.color = 'red';
    }

    public drawProblem(problem: Problem){
        this.draw(problem.getShapes(), false);
    }

    public abstract updateProblem(problemIterator: number, problems: Array<Problem>): void;
}