import { Kernel } from '../model/Kernel';
import { UI } from '../view/UI';

export class Controller {

    private model: Kernel;
    private view: UI;

    constructor(model: Kernel, view: UI) {
        this.model = model;
        this.view = view;
    }
    
    public compile() {
        let core1Text = <HTMLTextAreaElement> document.getElementById('core1_instructions');
        let core2Text = <HTMLTextAreaElement> document.getElementById('core2_instructions');
        let core3Text = <HTMLTextAreaElement> document.getElementById('core3_instructions');

        if(core1Text && core2Text && core3Text) {
            let core1Instructions: string[] = core1Text.value.split("\n");
            let core2Instructions: string[] = core2Text.value.split("\n");
            let core3Instructions: string[] = core3Text.value.split("\n");
            //this.model.setCores(core1Instructions, core2Instructions, core3Instructions);
            console.log("CORE 1", core1Instructions);
            console.log("CORE 2", core2Instructions);
            console.log("CORE 3", core3Instructions);
        } else {
            console.log("PROBLEMAS A IR BUSCAR TEXT AREAS DOS CORES");
        }

        return;

        if(this.model.compile()) {
            // this.view.activate step and run buttons
        } else {
            // this.view.disactivate step and run buttons
        }
    }

    public next() {
        this.model.runNext();
    }

    public run() {
        this.model.runAll();
    }
}

/*window.onload = () => {
    var core1Text = document.getElementById('run');
    var runButton = document.getElementById('run');
    if(runButton) {
        runButton.addEventListener("click", instructionSubmission, false);
    }
}*/