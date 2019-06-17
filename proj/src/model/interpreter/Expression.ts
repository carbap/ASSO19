import { Kernel } from '../Kernel';
import { Command } from '../commands/Command';
import * as Commands from '../commands';
import * as Shapes from '../shapes';

export class Expression {
    private kernel: Kernel;
    private errors: Array<string> = [];
    private command: Command | null = null;

    constructor(kernel: Kernel = new Kernel()) {
        this.kernel = kernel;
    }

    protected addError(error: string) {
        this.errors.push(error);
    }

    protected setCommand(command: Command) {
        this.command = command;
    }

    public getErrors(): Array<string> {
        return this.errors;
    }

    public getCommand(): Command | null{
        return this.command;
    }

    public getKernel(): Kernel {
        return this.kernel;
    }

    public interpret(context: string): boolean {
        let instruction: string = context.split(' ')[0];
        let expression: Expression;
        switch(instruction) {
            case 'create':
                expression = new GeneralCreateExpression(this);
                break;
            case 'translate':
                expression = new TranslateExpression(this);
                break;
            case 'scale':
                expression = new ScaleExpression(this);
                break;
            case 'draw':
                expression = new DrawExpression(this);
                break;
            case 'wait':
                expression = new WaitExpression(this);
                break;
            case 'signal':
                expression = new SignalExpression(this);
                break;
            case 'rotate':
                expression = new RotateExpression(this);
                break;
            default:
                this.addError("There's no instruction called " + instruction);
                return false;
        }

        let contextArguments = context.substr(context.indexOf(' ') + 1);
        return expression.interpret(contextArguments);
    }
}

/**
 * MAIN EXPRESSIONS
 * - draw
 * - scale
 * - translate
 * - rotate
 * - wait
 * - signal
 * - create shape
 */
class DrawExpression extends Expression {
    constructor(private rootExpression: Expression){ super(); }

    public interpret(context: string): boolean {
        // <ID>

        let ID: string = context.split(' ')[0];
        let shape = this.rootExpression.getKernel().getShape(ID);

        if(shape == null) {
            (<any> this.rootExpression).addError("There's no shape with ID `" + ID + "` to be drawn");
            return false;
        }

        let command = new Commands.DrawCommand(this.rootExpression.getKernel(), shape);
        (<any> this.rootExpression).setCommand(command);

        return true;
    }
}

class ScaleExpression extends Expression {
    constructor(private rootExpression: Expression){ super(); }

    public interpret(context: string): boolean {
        // <ID> <scaleFactor>

        let args: string[] = context.split(' ');

        if(args.length != 2) {
            (<any> this.rootExpression).addError("Invalid amount of arguments to scale shape. Should be: [ID] [scaleFactor]");
            return false;
        }

        let ID: string = args[0];
        let scaleFactor: number = Number(args[1]);

        if(isNaN(scaleFactor)) {
            (<any> this.rootExpression).addError("[scaleFactor] must be a number");
            return false;
        }

        let shape = this.rootExpression.getKernel().getShape(ID);

        if(shape == null) {
            (<any> this.rootExpression).addError("There's no shape with ID `" + ID + "` to be scaled");
            return false;
        }

        let command = new Commands.ScaleCommand(this.rootExpression.getKernel(), shape, scaleFactor);
        (<any> this.rootExpression).setCommand(command);

        return true;
    }
}

class TranslateExpression extends Expression {
    constructor(private rootExpression: Expression){ super(); }

    public interpret(context: string): boolean {
        // <ID> <translateX> <translateY>

        let args: string[] = context.split(' ');

        if(args.length != 3) {
            (<any> this.rootExpression).addError("Invalid amount of arguments to translate shape. Should be: [ID] [translateX] [translateY]");
            return false;
        }

        let ID: string = args[0];
        let translateX: number = Number(args[1]);
        let translateY: number = Number(args[2]);

        if(isNaN(translateX) || isNaN(translateY)) {
            (<any> this.rootExpression).addError("[translateX] and [translateY] must all be numbers");
            return false;
        }

        let shape = this.rootExpression.getKernel().getShape(ID);

        if(shape == null) {
            (<any> this.rootExpression).addError("There's no shape with ID `" + ID + "` to be translated");
            return false;
        }

        let command = new Commands.TranslateCommand(this.rootExpression.getKernel(), shape, translateX, translateY);
        (<any> this.rootExpression).setCommand(command);

        return true;
    }
}

class RotateExpression extends Expression {
    constructor(private rootExpression: Expression){ super(); }

    public interpret(context: string): boolean {
        // <ID> <rotationDegrees>

        let args: string[] = context.split(' ');

        if(args.length != 2) {
            (<any> this.rootExpression).addError("Invalid amount of arguments to translate shape. Should be: [ID] [rotationDegrees]");
            return false;
        }

        let ID: string = args[0];
        let rotationDegrees: number = Number(args[1]);

        if(isNaN(rotationDegrees)) {
            (<any> this.rootExpression).addError("[rotationDegrees] must be a number");
            return false;
        }

        let shape = this.rootExpression.getKernel().getShape(ID);

        if(shape == null) {
            (<any> this.rootExpression).addError("There's no shape with ID `" + ID + "` to be rotate");
            return false;
        }

        let command = new Commands.RotateCommand(this.rootExpression.getKernel(), shape, rotationDegrees);
        (<any> this.rootExpression).setCommand(command);

        return true;
    }
}

class WaitExpression extends Expression {
    constructor(private rootExpression: Expression){ super(); }

    public interpret(context: string): boolean {
        // <coreID>

        let args: string[] = context.split(' ');

        if(args.length != 1) {
            (<any> this.rootExpression).addError("Invalid amount of arguments for wait instruction. Should be: [coreID (1, 2 or 3)]");
            return false;
        }

        let coreID: number = Number(args[0]);

        if(isNaN(coreID) || coreID < 1 || coreID > 3) {
            (<any> this.rootExpression).addError("[coreID] in wait isntruction must a number between 1 and 3");
            return false;
        }

        let command = new Commands.WaitCommand(this.rootExpression.getKernel(), coreID);
        (<any> this.rootExpression).setCommand(command);

        return true;
    }
}

class SignalExpression extends Expression {
    constructor(private rootExpression: Expression){ super(); }

    public interpret(context: string): boolean {
        // takes no arguments

        let args: string[] = context.split(' ');
        if(args.length > 1 || (args.length == 1 && args[0] != 'signal')) {
            (<any> this.rootExpression).addError("Signal instruction takes no arguments");
            return false;
        }

        let command = new Commands.SignalCommand(this.rootExpression.getKernel());
        (<any> this.rootExpression).setCommand(command);

        return true;
    }
}

class GeneralCreateExpression extends Expression {
    constructor(private rootExpression: Expression){ super(); }

    public interpret(context: string): boolean {
        let args: string[] = context.split(' ');
        let creationSubject: string = args[0];

        let expression: Expression;
        switch(creationSubject) {
            case 'circle':
                expression = new CreateCircleExpression(this.rootExpression);
                break;
            case 'square':
                expression = new CreateSquareExpression(this.rootExpression);
                break;
            case 'triangle':
                expression = new CreateTriangleExpression(this.rootExpression);
                break;
            case 'intersection':
                expression = new CreateIntersectionExpression(this.rootExpression);
                break;
            case 'union':
                expression = new CreateUnionExpression(this.rootExpression);
                break;
            default:
                (<any> this.rootExpression).addError("There's no shape called `" + creationSubject + "` that can be created");
                return false;
        }

        if(args.length == 1) {
            (<any> this.rootExpression).addError("ID must be specified for the created shape");
            return false;
        }

        let ID: string = args[1];
        if(this.rootExpression.getKernel().existsShape(ID)) {
            (<any> this.rootExpression).addError("Duplicated ID. Shape has already been created with ID `" + ID + "`");
            return false;
        }

        let contextArguments = context.substr(context.indexOf(' ') + 1);
        return expression.interpret(contextArguments);
    }
}

/**
 * CREATE SHAPES EXPRESSIONS
 * - circle
 * - intersection
 * - square
 * - triangle
 */
class CreateCircleExpression extends Expression {
    constructor(private rootExpression: Expression){ super(); }

    public interpret(context: string): boolean {
        // <ID> <centerX> <centerY> <radius>
        
        let args: string[] = context.split(' ');

        if(args.length != 4) {
            (<any> this.rootExpression).addError("Invalid amount of arguments to create circle. Should be: [ID] [centerX] [centerY] [radius]");
            return false;
        }

        let ID: string = args[0];
        let centerX: number = Number(args[1]);
        let centerY: number = Number(args[2]);
        let radius: number = Number(args[3]);

        if(isNaN(centerX) || isNaN(centerY) || isNaN(radius)) {
            (<any> this.rootExpression).addError("[centerX] [centerY] and [radius] must all be numbers");
            return false;
        }

        let circle = new Shapes.Circle(ID, centerX, centerY, radius);
        let command = new Commands.CreateShapeCommand(this.rootExpression.getKernel(), circle);
        (<any> this.rootExpression).setCommand(command);

        return true;
    }
}

class CreateIntersectionExpression extends Expression {
    constructor(private rootExpression: Expression){ super(); }

    public interpret(context: string): boolean {
        // <newShapeID> <existingShape1ID> <existingShape2ID> ... <existingShapeNID>

        let args: string[] = context.split(' ');

        if(args.length < 3) {
            (<any> this.rootExpression).addError("Not enough arguments to create intersection. You need at least 3 arguments. Should be: [newShapeID] [existingShape1ID] [existingShape2ID] ... [existingShapeNID]");
            return false;
        }

        let ID: string = args[0];
        let shapesToIntersect = [];

        let IDsToIntersect: string[] = context.substr(context.indexOf(' ') + 1).split(' ');
        for(var id of IDsToIntersect) {
            let shape = this.rootExpression.getKernel().getShape(id);

            if(shape == null) {
                (<any> this.rootExpression).addError("There's no shape with ID `" + id + "` to be intersected");
                return false;
            }

            shapesToIntersect.push(shape.copy());
        }

        let intersection = new Shapes.Intersection(ID, shapesToIntersect);
        let command = new Commands.CreateShapeCommand(this.rootExpression.getKernel(), intersection);
        (<any> this.rootExpression).setCommand(command);

        return true;
    }
}

class CreateUnionExpression extends Expression {
    constructor(private rootExpression: Expression){ super(); }

    public interpret(context: string): boolean {
        // <newShapeID> <existingShape1ID> <existingShape2ID> ... <existingShapeNID>

        let args: string[] = context.split(' ');

        if(args.length < 3) {
            (<any> this.rootExpression).addError("Not enough arguments to create union. You need at least 3 arguments. Should be: [newShapeID] [existingShape1ID] [existingShape2ID] ... [existingShapeNID]");
            return false;
        }

        let ID: string = args[0];
        let shapesToUnite = [];

        let IDsToUnite: string[] = context.substr(context.indexOf(' ') + 1).split(' ');
        for(var id of IDsToUnite) {
            let shape = this.rootExpression.getKernel().getShape(id);

            if(shape == null) {
                (<any> this.rootExpression).addError("There's no shape with ID `" + id + "` to be united");
                return false;
            }

            shapesToUnite.push(shape.copy());
        }

        let union = new Shapes.Union(ID, shapesToUnite);
        let command = new Commands.CreateShapeCommand(this.rootExpression.getKernel(), union);
        (<any> this.rootExpression).setCommand(command);

        return true;
    }
}

class CreateSquareExpression extends Expression {
    constructor(private rootExpression: Expression){ super(); }

    public interpret(context: string): boolean {
        // <ID> <topLeftX> <topLeftY> <size>
        
        let args: string[] = context.split(' ');

        if(args.length != 4) {
            (<any> this.rootExpression).addError("Invalid amount of arguments to create square. Should be: [ID] [topLeftX] [topLeftY] [size]");
            return false;
        }

        let ID: string = args[0];
        let topLeftX: number = Number(args[1]);
        let topLeftY: number = Number(args[2]);
        let size: number = Number(args[3]);

        if(isNaN(topLeftX) || isNaN(topLeftY) || isNaN(size)) {
            (<any> this.rootExpression).addError("[topLeftX] [topLeftY] and [size] must all be numbers");
            return false;
        }

        let circle = new Shapes.Square(ID, topLeftX, topLeftY, size);
        let command = new Commands.CreateShapeCommand(this.rootExpression.getKernel(), circle);
        (<any> this.rootExpression).setCommand(command);

        return true;
    }
}

class CreateTriangleExpression extends Expression {
    constructor(private rootExpression: Expression){ super(); }

    public interpret(context: string): boolean {
        // <ID> <p1X> <p1Y> <p2X> <p2Y> <p3X> <p3Y>
        
        let args: string[] = context.split(' ');

        if(args.length != 7) {
            (<any> this.rootExpression).addError("Invalid amount of arguments to create triangle. Should be: [ID] [p1X] [p1Y] [p2X] [p2Y] [p3X] [p3Y]");
            return false;
        }

        let ID: string = args[0];
        let p1X: number = Number(args[1]);
        let p1Y: number = Number(args[2]);
        let p2X: number = Number(args[3]);
        let p2Y: number = Number(args[4]);
        let p3X: number = Number(args[5]);
        let p3Y: number = Number(args[6]);

        if(isNaN(p1X) || isNaN(p1Y) ||
        isNaN(p2X) || isNaN(p2Y) ||
        isNaN(p3X) || isNaN(p3Y)) {
            (<any> this.rootExpression).addError("[p1X] [p1Y] [p2X] [p2Y] [p3X] and [p3Y] must all be numbers");
            return false;
        }

        let triangle = new Shapes.Triangle(ID, p1X, p1Y, p2X, p2Y, p3X, p3Y);
        let command = new Commands.CreateShapeCommand(this.rootExpression.getKernel(), triangle);
        (<any> this.rootExpression).setCommand(command);

        return true;
    }
}