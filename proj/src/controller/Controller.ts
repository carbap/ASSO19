import { Kernel } from '../model/Kernel';
import { UI } from '../view/UI';

export class Controller {

    private model: Kernel;
    private view: UI;

    constructor(model: Kernel, view: UI) {
        this.model = model;
        this.view = view;
    }
    
    public compile(core1Instructions: string[], core2Instructions: string[], core3Instructions: string[]) {
        this.model.setCores(core1Instructions, core2Instructions, core3Instructions);

        if(this.model.compile()) {
            this.view.compileSuccessful();
        } else {
            this.view.compileFailed(this.model.getErrors());
        }
    }

    public next() {
        this.model.runNext();
        
        this.view.draw(this.model.getDrawnShapes(), true);

        if(!this.model.hasNext()) {
            this.checkSolved();
        }
    }

    public run() {
        this.model.runAll();
        this.view.draw(this.model.getDrawnShapes(), true);

        if(!this.model.hasNext()) {
            this.checkSolved();
        }
    }

    public async checkSolved(){
        this.view.hideInstructionButtons();
        
        if(await this.view.compare()) {
            this.view.drawingsMatch(true);
            this.view.completionTime(this.model.getProgramExecutionTime(), this.model.getCurrentProblem().getMaximumCompletionTime());
        } 
        else {
            this.view.drawingsMatch(false);
        }
    }

    public coreChanged() {
        this.view.activateCompilation();
    }

    public nextProblem() {
        this.model.nextProblem();
        this.view.updateProblem(this.model.getProblemIterator(), this.model.getProblems());
        this.view.initializeButtons();
    }

    public drawProblem(){
        this.view.drawProblem(this.model.getCurrentProblem());
    }
}