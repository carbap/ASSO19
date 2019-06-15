import { Kernel } from './model/Kernel';
import { UI } from './view/UI';
import { Controller } from './controller/Controller';
import { Rectangle, Path, Color, Point, Size } from 'paper';

//PARA JA NAO É PRECISO, MAS NUNCA SE SABE NO FUTURO COM COISAS EM FICHEIROS DIFERENTES
//paper.install(window); // Make the paper scope global, by injecting it into window (É importante fazer quando a apalicaçao abre)

var model: Kernel = new Kernel();
var controller: Controller;

window.onload = () => {
    console.log("BOASSSS");

    paper.setup('myCanvas'); // É importante fazer quando a apalicaçao abre, para o paperjs saber em que canvas vai desenhar

    var rectangle = new Rectangle(new Point(0, 0), new Size(50, 50));
    var path = new Path.Rectangle(rectangle);
    path.strokeColor = 'black';

    var myCircle = new Path.Circle(new Point(100, 70), 50);
    myCircle.strokeColor = 'black';
    myCircle.selected = true;

    paper.setup('myCanvas2');

	var path = new Path();
	path.strokeColor = new Color('black');
	var start = new Point(100, 100);
	path.moveTo(start);
    path.lineTo(start.add(new Point(200, -50 )));

    //paper.project.clear();  //so faz clear do canvas atual (nest caso myCanvas2)
    
    //PARA JA NAO É PRECISO, MAS NUNCA SE SABE NO FUTURO COM COISAS EM FICHEIROS DIFERENTES
    //paper.view.draw()

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