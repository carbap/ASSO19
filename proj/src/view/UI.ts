import { Shape } from '../model/shapes/Shape';
import { Problem } from '../model/Problem';

export abstract class UI {
    protected drawingCanvas: any;
    protected problemCanvas: any;

    private compileButton: HTMLElement;
    private compileBtnHandler: any;
    private nextButton: HTMLElement;
    private runButton: HTMLElement;
    private nextProblemButton: HTMLElement;

    private infoDiv: HTMLElement;

    private coresText: Array<HTMLElement>

    protected drawingShapes: Array<Shape> = [];
    protected problemShapes : Array<Shape> = [];

    constructor(drawingCanvas: any, problemCanvas: any, 
        compileButton: HTMLElement, nextButton: HTMLElement, runButton: HTMLElement, nextProblemButton: HTMLElement,
        infoDiv: HTMLElement, coresText: Array<HTMLElement>) {

        this.drawingCanvas = drawingCanvas;
        this.problemCanvas = problemCanvas;

        this.compileButton = compileButton;
        this.nextButton = nextButton;
        this.runButton = runButton;
        this.nextProblemButton = nextProblemButton;
        
        this.infoDiv = infoDiv;

        this.coresText = coresText;

        this.initializeButtons();

        this.drawGrids(drawingCanvas);
        this.drawGrids(problemCanvas);
    }

    public abstract compare(): Promise<boolean>;

    public abstract draw(shapeList : Shape[], isDrawCanvas: boolean): void;

    public abstract drawGrids(canvas: any): void;

    public initializeButtons() {
        (<HTMLButtonElement> this.compileButton).disabled = false;
        (<HTMLButtonElement> this.nextButton).disabled = true;
        (<HTMLButtonElement> this.runButton).disabled = true;
        (<HTMLButtonElement> this.nextProblemButton).disabled = true;

        this.infoDiv.innerHTML = "Information related to program compilation and solution verification";
        this.infoDiv.style.color = 'black';
    }

    public activateCompilation() {
        (<HTMLButtonElement> this.compileButton).disabled = false;
        (<HTMLButtonElement> this.nextButton).disabled = true;
        (<HTMLButtonElement> this.runButton).disabled = true;

        this.infoDiv.innerHTML = "Information related to program compilation and solution verification";
        this.infoDiv.style.color = 'black';
    }

    public compileSuccessful() {
        (<HTMLButtonElement> this.compileButton).disabled = true;
        (<HTMLButtonElement> this.nextButton).disabled = false;
        (<HTMLButtonElement> this.runButton).disabled = false;

        this.infoDiv.innerHTML = "Compilation successful";
        this.infoDiv.style.color = 'green';
    }

    public compileFailed(errors: Array<string>) {
        let info: string = "Compilation failed <br/>";
        for(let error of errors) {
            info += `${error}` + "<br/>";
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

    public hideInstructionButtons() {
        (<HTMLButtonElement> this.nextButton).disabled = true;
        (<HTMLButtonElement> this.runButton).disabled = true;
    }

    public drawingsMatch(match: boolean) {
        this.hideInstructionButtons();
        if(match){
            this.infoDiv.innerHTML = "IT'S A MATCH!!! <br/>";
            this.infoDiv.style.color = 'green';
        }
        else{
            this.infoDiv.innerHTML = "DRAWINGS DON'T MATCH <br/>"
            this.infoDiv.style.color = 'red';
        }
    }

    public completionTime(time: number, maximumTime: number){
        this.infoDiv.innerHTML += "Completion time: " + time + "s. Maximum allowed time: " + maximumTime + "s.";
        if(time <= maximumTime) {
            (<HTMLButtonElement> this.nextProblemButton).disabled = false;
            this.infoDiv.style.color = 'green';
        } else {
            this.infoDiv.style.color = 'red';
        }
    }

    public drawProblem(problem: Problem){
        this.draw(problem.getShapes(), false);
    }

    public abstract updateProblem(problemIterator: number, problems: Array<Problem>): void;

    private removeEmpty(arr: string[]) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === "") {
                arr.splice(i, 1);
                i--;
            } else {
                arr[i] = arr[i].trim();
                arr[i] = arr[i].replace(/\s+/g, " ");
            }
        }
    }

    public filterInstructions() {
        let processedCoresText = [];

        for(let coreText of this.coresText) {
            let processedInstructions: string[] = (<HTMLTextAreaElement> coreText).value.split("\n");
            this.removeEmpty(processedInstructions);
            processedCoresText.push(processedInstructions);
        }

        this.compileBtnHandler(... processedCoresText);
    }

    public setHandlers(compileBtnHandler: any, nextBtnHandler: any, runBtnHandler: any, nextProblemBtnHandler: any, coresTextHandler: any) {
        this.compileBtnHandler = compileBtnHandler;
        this.compileButton.onclick = this.filterInstructions.bind(this);

        this.nextButton.onclick = nextBtnHandler;
        this.runButton.onclick = runBtnHandler;
        this.nextProblemButton.onclick = nextProblemBtnHandler;
        for(let coreText of this.coresText) {
            coreText.onkeydown = coresTextHandler;
        }
    }
}