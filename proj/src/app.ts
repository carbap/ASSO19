import { Model } from './model'
import { View } from './view'
import { Controller } from './controller'

window.onload = () => {

    var core1 = "code from core1"; // TO DO: replace by document.getElementById
    var core2 = "code from core2";
    var core3 = "code from core3";
    var model = new Model(core1, core2, core3);

    var canvas = null;
    var compileButton = document.getElementById('compile');
    var nextButton = document.getElementById('next');
    var runButton = document.getElementById('run');
    var view = new View(canvas, compileButton, nextButton, runButton);

    var controller = new Controller(model, view);
    
    if(compileButton)
        compileButton.addEventListener("click", controller.compile);
    
    if(nextButton)
        nextButton.addEventListener("click", controller.next);

    if(runButton)
        runButton.addEventListener("click", controller.run);
}

/*function instructionSubmission(event: any){
    event.preventDefault();
    let instruction = (<HTMLInputElement> document.getElementById('instruction')).value;
    // app.qualquerCoisaQueQueremosChamarAqui()
    console.log("EXECUTOUUUUU");
}*/