import { Kernel } from '../model/Kernel';

var model: Kernel = new Kernel();

var core1 = ["code", "from", "core1"]; // TO DO: replace by document.getElementById
var core2 = ["code", "from", "core2"];
var core3 = ["code", "from", "core3"];

model.setCores(core1, core2, core3);
if(!model.compile())
    console.log("Test failed to compile")
    //tbm comparar array de instruçoes resultantes

