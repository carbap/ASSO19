//AND e UNION operator proxima aula 

import {AppInfo} from './singleton'

interface AbstractExpression {
    interpret(context: String): boolean;
}

class TemporaryExpression implements AbstractExpression {
    interpret(context: String): boolean {
        return false;
    }
}

export class MasterExpression implements AbstractExpression {
    
    private expression : AbstractExpression;

    constructor() {
        this.expression = new TemporaryExpression();
    }

    public interpret(context: String): boolean {
        console.log("`interpret` method of MasterExpression is being called!");

        var contextParts : String[] = context.split(" AND ");

        if(contextParts.length == 1) {
            this.expression = new InstructionExpression();
        }
        else {
            this.expression = new AndExpression();
        }

        return this.expression.interpret(context);
    }
}

class InstructionExpression implements AbstractExpression {
    
    private expression : AbstractExpression; 

    constructor(){
        this.expression = new TemporaryExpression();
    }

    public interpret(context: String): boolean {
        console.log("`interpret` method of InstructionExpression is being called!");

        var contextParts : String[] = context.split(" ");
        var unionParts : String[] = context.split(" UNION ");

        console.log("union parts " + unionParts);

        if(unionParts.length != 1) {

            this.expression = new UnionExpression();
            return this.expression.interpret(context);
        }

        switch(contextParts[0])
        {
            case "draw":
                this.expression = new DrawExpression();
                break;
            default: 
                return false;
    
        }
        
        var rest : String = context.substring(context.indexOf(" ") + 1);
        
        return this.expression.interpret(rest);
    }
}

class AndExpression implements AbstractExpression {

    private lhsExpression : AbstractExpression;
    private rhsExpression : AbstractExpression;

    constructor(){
        this.lhsExpression = new TemporaryExpression();
        this.rhsExpression = new TemporaryExpression();
    }

    public interpret(context: String): boolean {
        console.log("`interpret` method of AndExpression is being called!");

        var contextParts : String[] = context.split(" AND ");
        var restContext : String = context.substr(context.indexOf(" AND ") + " AND ".length);

        this.lhsExpression = new InstructionExpression();
        this.rhsExpression = new MasterExpression();

        return this.lhsExpression.interpret(contextParts[0]) && this.rhsExpression.interpret(restContext);
    }
}

class DrawExpression implements AbstractExpression {

    public interpret(context: String): boolean {
        console.log("`interpret` method of DrawExpression is being called!");

        var contextParts : String[] = context.split(" ");
        
        switch(contextParts[0])
        {
            case "square":
                AppInfo.getRenderingSystem().drawSquare(contextParts);
                return contextParts.length == 3; //drawSquare tira 'square' do contextParts, portanto o length e 3
            case "rect":
                AppInfo.getRenderingSystem().drawRectangle(contextParts);
                return contextParts.length == 4; //drawRectangle tira 'rect' do contextParts, portanto o length e 4
            default: 
                return false;
        }
    }
}

class UnionExpression implements AbstractExpression {

    public interpret(context: String): boolean {
        console.log("`interpret` method of UnionExpression is being called!");

        console.log("context: " + context);

        var contextParts : String[] = context.split(" UNION ");
        
        var i : number;
        var parcels : String[] = [];

        for(i = 0; i < contextParts.length; i++)
        {
            let parcel : UnionParcel = new UnionParcel();

            if(!parcel.interpret(contextParts[i])){
                console.log("Invalid UNION EXPRESSION");
                return false;
            }
             
            parcels.push(contextParts[i]);
        }

        AppInfo.getRenderingSystem().drawUnion(parcels);

        return true;
    }
}

class UnionParcel implements AbstractExpression {

    public interpret(context: String): boolean {
        console.log("`interpret` method of DrawExpression is being called!");

        var contextParts : String[] = context.split(" ");

        if(contextParts[0] != "draw")
            return false;
        
        switch(contextParts[1])
        {
            case "square":
                return contextParts.length == 5; 
            case "rect":
                return contextParts.length == 6;
            default: 
                return false;
        }
    }
}