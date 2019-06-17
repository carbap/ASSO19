import { Kernel } from './model/Kernel';
import { UI } from './view/UI';
import * as UIs from './view';
import { Controller } from './controller/Controller';
import { Problem } from './model/Problem';
import { Rectangle, Path, Color, Point, Size } from 'paper';
import * as Shapes from './model/shapes';

//PARA JA NAO É PRECISO, MAS NUNCA SE SABE NO FUTURO COM COISAS EM FICHEIROS DIFERENTES
//paper.install(window); // Make the paper scope global, by injecting it into window (É importante fazer quando a apalicaçao abre)

var model: Kernel = new Kernel();
var controller: Controller;

window.onload = () => {
    console.log("BOASSSS");

    //paper.project.clear();  //so faz clear do canvas atual (nest caso myCanvas2)
    
    //PARA JA NAO É PRECISO, MAS NUNCA SE SABE NO FUTURO COM COISAS EM FICHEIROS DIFERENTES
    //paper.view.draw()

    var drawCanvas = <HTMLCanvasElement>document.getElementById('drawCanvas');
    var problemCanvas = <HTMLCanvasElement>document.getElementById('problemCanvas');
    var currentProblem = <HTMLLabelElement>document.getElementById('currentProblem');

    var compileButton = <HTMLElement>document.getElementById('compile');
    var nextButton = <HTMLElement>document.getElementById('step');
    var runButton = <HTMLElement>document.getElementById('run');
    var nextProblemButton = <HTMLElement>document.getElementById('nextProblem');
    var infoZone = <HTMLElement>document.getElementById('info');
    
    let core1 = <HTMLTextAreaElement> document.getElementById('core1_instructions');
    let core2 = <HTMLTextAreaElement> document.getElementById('core2_instructions');
    let core3 = <HTMLTextAreaElement> document.getElementById('core3_instructions');

    var view: UI = new UIs.PaperUI(drawCanvas, problemCanvas, currentProblem, 
                                    compileButton, nextButton, runButton, nextProblemButton, 
                                    infoZone, [core1, core2, core3]);

    controller = new Controller(model, view);

    view.setHandlers(controller.compile.bind(controller), controller.next.bind(controller), 
                    controller.run.bind(controller), controller.nextProblem.bind(controller), 
                    controller.coreChanged.bind(controller));

    var problems: Array<Problem> = defineProblems();
    model.setProblems(problems); //TO DO: passar os problems pelo construtor do Kernel
    view.updateProblem(model.getProblemIterator(), model.getProblems());
    controller.drawProblem(); 
}

function defineProblems(): Array<Problem> {
    return [problem1(), problem2(), problem3(), problem4()];
}

function problem1(){
    let square = new Shapes.Square("square", 0, 0, 50);
    let circle = new Shapes.Circle("circle", 25, 25, 25);
    return new Problem(15, square, circle);
}

function problem2(){
    let square1 = new Shapes.Square("square1", 100, 100, 150);
    let square2 = new Shapes.Square("square2", 300, 100, 150);
    let circle = new Shapes.Circle("circle", 275, 175, 25);
    return new Problem(15, square1, square2, circle);
}

function problem3(){
    let triangle1 = new Shapes.Triangle("triangle1", 100, 100, 400, 100, 100, 450);
    let triangle2 = new Shapes.Triangle("triangle1", 150, 450, 450, 450, 450, 100);
    let square = new Shapes.Square("square", 200, 200, 150);
    let inter1 = new Shapes.Intersection("inter", [square, triangle1]);
    let inter2 = new Shapes.Intersection("inter", [square, triangle2]);
    return new Problem(35, square, triangle1, triangle2, inter1, inter2);
}

function problem4(){
    let triangle = new Shapes.Triangle("triangle", 100, 350, 450, 350, 275, 50);
    let circle1 = new Shapes.Circle("circle1", 275, 275, 100);
    let circle2 = new Shapes.Circle("circle2", 275, 175, 75);
    let inter = new Shapes.Intersection("inter", [circle1, circle2]);
    return new Problem(20, triangle, inter);
}
/**
 * DEAD LOCK EXCELENT EXAMPLE
 * Core 1
 * create square s1 0 0 50
 * signal
 * 
 * Core 2
 * create circle c1 25    25      25    
 * signal
 * 
 * Core 3
 * wait 1
 * wait 2
 * draw s1
 * draw c1
 */
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