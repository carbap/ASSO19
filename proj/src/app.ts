//import {Command} from './command'

//var app = new Command();

function instructionSubmission(event: any){
    event.preventDefault();
    let instruction = (<HTMLInputElement> document.getElementById('instruction')).value;
    // app.qualquerCoisaQueQueremosChamarAqui()
    console.log("EXECUTOUUUUU");
}


window.onload = () => {
    
    var formElem = document.getElementById('REPL_form');
    if(formElem) {
        formElem.addEventListener("submit", instructionSubmission, false);
    }
}