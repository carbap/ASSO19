import * as c from './command'
import * as s from './shape'

export abstract class Expression {
    protected errors: Array<string>;
    protected commands: Array<c.Command>;
    protected runtimeShapes: Array<s.Shape>;

    constructor(errors: Array<string>, commands: Array<c.Command>, runtimeShapes: Array<s.Shape>){
        this.errors = errors;
        this.commands = commands;
        this.runtimeShapes = runtimeShapes;
    }

    abstract interpret(context: string): boolean;
}

export class CreateShapeExpression extends Expression {
    constructor(errors: Array<string>, commands: Array<c.Command>, runtimeShapes: Array<s.Shape>){
        super(errors, commands, runtimeShapes);
    }

    public interpret(context: string): boolean {
        return false;
    }
}

export class CreateIntersectionExpression extends Expression {
    constructor(errors: Array<string>, commands: Array<c.Command>, runtimeShapes: Array<s.Shape>){
        super(errors, commands, runtimeShapes);
    }

    public interpret(context: string): boolean {
        return false;
    }
}

export class TranslateExpression extends Expression {
    constructor(errors: Array<string>, commands: Array<c.Command>, runtimeShapes: Array<s.Shape>){
        super(errors, commands, runtimeShapes);
    }

    public interpret(context: string): boolean {
        return false;
    }
}

export class ScaleExpression extends Expression {
    constructor(errors: Array<string>, commands: Array<c.Command>, runtimeShapes: Array<s.Shape>){
        super(errors, commands, runtimeShapes);
    }

    public interpret(context: string): boolean {
        return false;
    }
}

export class DrawExpression extends Expression {
    constructor(errors: Array<string>, commands: Array<c.Command>, runtimeShapes: Array<s.Shape>){
        super(errors, commands, runtimeShapes);
    }

    public interpret(context: string): boolean {
        return false;
    }
}