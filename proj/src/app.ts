import { Kernel } from './model/Kernel';
import { UI } from './view/UI';
import { Controller } from './controller/Controller';

window.onload = () => {

    var core1 = "code from core1"; // TO DO: replace by document.getElementById
    var core2 = "code from core2";
    var core3 = "code from core3";
    var model = new Kernel(core1, core2, core3);

    var canvas = null;
    var compileButton = document.getElementById('compile');
    var nextButton = document.getElementById('next');
    var runButton = document.getElementById('run');
    var view = new UI(canvas, compileButton, nextButton, runButton);

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