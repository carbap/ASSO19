import { Kernel } from './model/Kernel';
import { UI } from './view/UI';
import * as UIs from './view';
import { Controller } from './controller/Controller';
import { Problem } from './model/Problem';
import { Rectangle, Path, Color, Point, Size } from 'paper';
import * as Shapes from './model/shapes';

//PARA JA NAO É PRECISO, MAS NUNCA SE SABE NO FUTURO COM COISAS EM FICHEIROS DIFERENTES
//paper.install(window); // Make the paper scope global, by injecting it into window (É importante fazer quando a apalicaçao abre)

var problems: Array<Problem> = defineProblems();

var model: Kernel = new Kernel();
var controller: Controller;

window.onload = () => {
    console.log("BOASSSS");

    //paper.project.clear();  //so faz clear do canvas atual (nest caso myCanvas2)
    
    //PARA JA NAO É PRECISO, MAS NUNCA SE SABE NO FUTURO COM COISAS EM FICHEIROS DIFERENTES
    //paper.view.draw()

    //TODO: ADICIONAR INSTRUCAO DE WAIT/SIGNAL

    var drawCanvas = <HTMLCanvasElement>document.getElementById('drawCanvas');
    var problemCanvas = <HTMLCanvasElement>document.getElementById('problemCanvas');

    var view: UI = new UIs.PaperUI(drawCanvas, problemCanvas);
    controller = new Controller(model, view);

    model.setProblems(problems); //TO DO: passar os problems pelo construtor do Kernel
    controller.drawProblem();
    
    var compileButton = <HTMLElement>document.getElementById('compile');
    var nextButton = <HTMLElement>document.getElementById('next');
    var runButton = <HTMLElement>document.getElementById('run');

    if(compileButton) 
        compileButton.onclick = controller.compile.bind(controller);

    if(nextButton)
        nextButton.onclick = controller.next.bind(controller);

    if(runButton)
        runButton.onclick = controller.run.bind(controller);
}

function defineProblems(): Array<Problem> {
    let square1 = new Shapes.Square("square1", 200, 200, 40);
    let circle1 = new Shapes.Circle("circle1", 220, 220, 20);
    var prob1 = new Problem(square1, circle1);

    let circle2 = new Shapes.Circle("circle1", 220, 220, 40);
    var prob2 = new Problem(square1, circle2);

    return [prob1, prob2];
}

//EXAMPLE PAPER STUFF FOR QUICK ACCESS
/*
paper.setup('drawCanvas'); // É importante fazer quando a apalicaçao abre, para o paperjs saber em que canvas vai desenhar

var rectangle = new Rectangle(new Point(0, 0), new Size(50, 50));
var path = new Path.Rectangle(rectangle);
path.strokeColor = 'black';

var myCircle = new Path.Circle(new Point(100, 70), 50);
myCircle.strokeColor = 'black';
myCircle.selected = true;

paper.setup('problemCanvas');

var path = new Path();
path.strokeColor = new Color('black');
var start = new Point(100, 100);
path.moveTo(start);
path.lineTo(start.add(new Point(200, -50 )));
*/