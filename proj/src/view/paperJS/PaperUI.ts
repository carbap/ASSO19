import { UI } from '../UI';
import { PaperScope, } from 'paper';

export class PaperUI extends UI {
    
    private scope: PaperScope;

    constructor(canvas: any, compileButton: HTMLElement | null, stepButton: HTMLElement | null, runButton: HTMLElement | null) {
        super(canvas, compileButton, stepButton, runButton);
        this.scope = new PaperScope();
        
    }
}