import { Model } from './model'
import { View } from './view'
import * as c from './command'

export class Controller {

    private model: Model;
    private view: View;

    constructor(model: Model, view: View) {
        this.model = model;
        this.view = view;
    }
    
    public compile(){
        if(this.model.compile())
        {
            // this.view.activate step and run buttons
        }
        else{
            // this.view.disactivate step and run buttons
        }
    }

    public next(){
        var nextCommand: c.Command = this.model.next();
        nextCommand.execute(this.model.getRuntimeShapes(), this.view.getCanvas());
    }

    public run(){
        var commands: Array<c.Command> = this.model.run();
        for (let command of commands){
            command.execute(this.model.getRuntimeShapes(), this.view.getCanvas());
        }
    }
}

/*
window.onload = () => {
    
    var runButton = document.getElementById('run');
    if(runButton) {
        runButton.addEventListener("click", instructionSubmission, false);
    }
}*/