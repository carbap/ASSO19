import { View } from './view'
import * as s from './shape'

export abstract class Command {
    protected duration: number;

    constructor(duration: number){
        this.duration = duration;
    }

    abstract execute(runtimeShapes: Array<s.Shape>, view: View): void;
}

export class CreateShapeCommand extends Command {
    constructor(duration: number){
        super(duration);
    }

    public execute(runtimeShapes: Array<s.Shape>, view: View){

    }
}

export class CreateIntersectionCommand extends Command {
    constructor(duration: number){
        super(duration);
    }

    public execute(runtimeShapes: Array<s.Shape>, view: View){

    }
}

export class TranslateCommand extends Command {
    constructor(duration: number){
        super(duration);
    }

    public execute(runtimeShapes: Array<s.Shape>, view: View){
        
    }
}

export class ScaleCommand extends Command {
    constructor(duration: number){
        super(duration);
    }

    public execute(runtimeShapes: Array<s.Shape>, view: View){
        
    }
}

export class DrawCommand extends Command {
    constructor(duration: number){
        super(duration);
    }

    public execute(runtimeShapes: Array<s.Shape>, view: View){
        
    }
}