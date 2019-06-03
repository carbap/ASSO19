import { LinkedList } from 'linked-list-typescript';
import {MasterExpression} from './interpreter'
import { AppInfo } from './singleton';

export class Command {
    private commandStack : LinkedList<Memento> = new LinkedList<Memento>();
    private redoStack : LinkedList<Memento> = new LinkedList<Memento>();
 
    public execute(context: String) : void{
        var me = new MasterExpression();
        if(!me.interpret(context)) {
            this.redraw();
            console.log("Error interpreting command! Redrawing previous state");
            return;
        }
        var currentCommand: Memento;
        if(this.commandStack.length == 0)
            currentCommand = new Memento(context);
        else
            currentCommand = new Memento(context, this.commandStack.head);

        this.commandStack.prepend(currentCommand);
        this.redoStack = new LinkedList<Memento>();
    }
 
    public undo() : void {
       if (this.commandStack.length == 0)
          return;

        var m : Memento = this.commandStack.removeHead();
        this.redoStack.prepend(m);
        this.redraw();
    }
 
    public redo() : void {
       if (this.redoStack.length == 0)
          return;
        var m : Memento = this.redoStack.removeHead();
        this.commandStack.prepend(m);
        this.redraw();
    }

    public getCurrentState() : Memento {
        return this.commandStack.head;
    }

    public redraw() : void {
        //limpar o canvas primeiro
        AppInfo.getRenderingSystem().cleanDrawBoard();

        if(this.commandStack.length == 0)
            return;
        var m : Memento = this.commandStack.head;
        var me = new MasterExpression();
        for(var context of m.getContextList()) {
            me.interpret(context);
        }
    }
}

class Memento {
    private contextList : String[] = [];

    public constructor(context: String, previous?: Memento) {
        if(previous != null)
            for(var command of previous.getContextList())
                this.contextList.push(command);
        this.contextList.push(context);
    }
 
    public getContextList() : String[] {
       return this.contextList;
    }
}