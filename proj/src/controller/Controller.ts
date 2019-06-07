import { Kernel } from '../model/Kernel';
import { UI } from '../view/UI';

export class Controller {

    private model: Kernel;
    private view: UI;

    constructor(model: Kernel, view: UI) {
        this.model = model;
        this.view = view;
    }
    
    public compile(){
        if(this.model.compile())
        {
            // this.view.activate step and run buttons
        } else {
            // this.view.disactivate step and run buttons
        }
    }

    public next(){
        this.model.runNext();
    }

    public run(){
        this.model.runAll();
    }
}

/*
window.onload = () => {
    
    var runButton = document.getElementById('run');
    if(runButton) {
        runButton.addEventListener("click", instructionSubmission, false);
    }
}*/