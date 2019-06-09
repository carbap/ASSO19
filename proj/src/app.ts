import { Kernel } from './model/Kernel';
import { UI } from './view/UI';
import { Controller } from './controller/Controller';

var model: Kernel = new Kernel();
var controller: Controller;

window.onload = () => {
    console.log("BOASSSS");
    var core1 = "code from core1"; // TO DO: replace by document.getElementById
    var core2 = "code from core2";
    var core3 = "code from core3";

    var canvas = null;
    var compileButton = document.getElementById('compile');
    var nextButton = document.getElementById('next');
    var runButton = document.getElementById('run');
    var view: UI = new UI(canvas, compileButton, nextButton, runButton);

    var core1Text = document.getElementById('core1_instructions');
    var core2Text = document.getElementById('core2_instructions');
    var core3Text = document.getElementById('core3_instructions');

    controller = new Controller(model, view);
    
    if(compileButton) 
        compileButton.onclick = controller.compile.bind(controller);

    if(nextButton)
        nextButton.onclick = controller.next.bind(controller);

    if(runButton)
        runButton.onclick = controller.run.bind(controller);
}

/*function instructionSubmission(event: any){
    event.preventDefault();
    let instruction = (<HTMLInputElement> document.getElementById('instruction')).value;
    // app.qualquerCoisaQueQueremosChamarAqui()
    console.log("EXECUTOUUUUU");
}*/