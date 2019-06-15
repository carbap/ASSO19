import { Kernel } from './model/Kernel';
import { UI } from './view/UI';
import { Controller } from './controller/Controller';
import { Rectangle, Path, Color, Point, Size } from 'paper';

//paper.install(window); // Make the paper scope global, by injecting it into window

var model: Kernel = new Kernel();
var controller: Controller;

window.onload = () => {
    console.log("BOASSSS");

    /*var rectangle = new Rectangle(new Point(0, 0), new Size(10, 10));
    var path = new Path.Rectangle(rectangle);
    path.strokeColor = new Color('black');*/

    // Setup directly from canvas id:
	paper.setup('myCanvas');
	var path = new Path();
	path.strokeColor = new Color('black');
	var start = new Point(100, 100);
	path.moveTo(start);
    path.lineTo(start.add(new Point(200, -50 )));
    paper.view.update();
    //view.draw();
    
    //TODO: ADICIONAR INSTRUCAO DE WAIT/SIGNAL

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