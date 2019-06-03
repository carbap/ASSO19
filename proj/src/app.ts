import {Command} from './command'
import {AppInfo} from './singleton'

var app = new Command();

function draw() {
    var canvas = <HTMLCanvasElement> document.getElementById('canvas');
    if (canvas.getContext) {
        let ctx = <CanvasRenderingContext2D> canvas.getContext('2d');
        ctx.fillRect(25, 25, 100, 100);
    }
}

function test(str : String){
    app.execute(str);
}

function instructionSubmission(event: any){
    event.preventDefault();
    let instruction = (<HTMLInputElement> document.getElementById('instruction')).value;
    app.execute(instruction);
}

function changeToCanvas(event: any){
    event.preventDefault();
    AppInfo.setCanvas();
    app.redraw();
}

function changeToSVG(event: any){
    event.preventDefault();
    AppInfo.setSVG();
    app.redraw();
}

function undoAction(event: any){
    event.preventDefault();
    app.undo();
}

function redoAction(event: any){
    event.preventDefault();
    app.redo();
}

window.onload = () => {
    
    var formElem = document.getElementById('REPL_form');
    if(formElem) {
        formElem.addEventListener("submit", instructionSubmission, false);
    }

    var canvasButtonElem = document.getElementById('canvas_button');
    if(canvasButtonElem) {
        canvasButtonElem.addEventListener("click", changeToCanvas, false);
    }
    
    var SVGButtonElem = document.getElementById('SVG_button');
    if(SVGButtonElem) {
        SVGButtonElem.addEventListener("click", changeToSVG, false);
    }

    var undoButtonElem = document.getElementById('undo_button');
    if(undoButtonElem) {
        undoButtonElem.addEventListener("click", undoAction, false);
    }

    var redoButtonElem = document.getElementById('redo_button');
    if(redoButtonElem) {
        redoButtonElem.addEventListener("click", redoAction, false);
    }
}