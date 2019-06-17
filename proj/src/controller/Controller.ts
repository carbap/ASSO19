import { Kernel } from '../model/Kernel';
import { UI } from '../view/UI';

export class Controller {

    private model: Kernel;
    private view: UI;

    constructor(model: Kernel, view: UI) {
        this.model = model;
        this.view = view;
    }
    
    private removeEmpty(arr: string[]) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === "") {
                arr.splice(i, 1);
                i--;
            }
        }
    }
    
    public compile() {
        let core1Text = <HTMLTextAreaElement> document.getElementById('core1_instructions');
        let core2Text = <HTMLTextAreaElement> document.getElementById('core2_instructions');
        let core3Text = <HTMLTextAreaElement> document.getElementById('core3_instructions');

        if(core1Text && core2Text && core3Text) {
            let core1Instructions: string[] = core1Text.value.split("\n");
            let core2Instructions: string[] = core2Text.value.split("\n");
            let core3Instructions: string[] = core3Text.value.split("\n");
            this.removeEmpty(core1Instructions);
            this.removeEmpty(core2Instructions);
            this.removeEmpty(core3Instructions);
            console.log("CORE 1", core1Instructions);
            console.log("CORE 2", core2Instructions);
            console.log("CORE 3", core3Instructions);
            this.model.setCores(core1Instructions, core2Instructions, core3Instructions);
        } else {
            console.log("PROBLEMAS A IR BUSCAR TEXT AREAS DOS CORES");
        }

        if(this.model.compile()) {
            console.log("COMPILOU");
            this.view.compileSuccessful();
        } else {
            console.log("ERROS");
            this.view.compileFailed(this.model.getErrors());
        }
    }

    public next() {
        console.log("Running next instruction");
        
        this.model.runNext();
        
        this.view.draw(this.model.getDrawnShapes(), true);

        if(!this.model.hasNext()) {
            console.log("Finished running");
            console.log(this.view.compare());

            this.checkSolved();
        }
    }

    public run() {
        this.model.runAll();
        this.view.draw(this.model.getDrawnShapes(), true);
        console.log("Finished running");

        if(!this.model.hasNext()) {
            this.checkSolved();
        }
    }

    public checkSolved(){
        if(this.view.compare()) {

            this.view.drawingsMatch(true);
            
            if(this.model.checkTime()){
                this.model.nextProblem();
                this.view.updateProblem(this.model.getProblemIterator(), this.model.getProblems());
            }
        } 
        else {
            this.view.drawingsMatch(false);
        }

        this.view.completionTime(this.model.getProgramExecutionTime(), this.model.getCurrentProblem().getMaximumCompletionTime());
    }

    public nextProblem() {
        //TODO: apresentar proximo problema
    }

    public drawProblem(){
        this.view.drawProblem(this.model.getCurrentProblem());
    }
}