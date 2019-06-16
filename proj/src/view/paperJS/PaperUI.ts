import { UI } from '../UI';
import { PaperScope, } from 'paper';

export class PaperUI extends UI {
        
    private scope: PaperScope;

    constructor(drawingCanvas: HTMLCanvasElement, problemCanvas: HTMLCanvasElement) {
        super(drawingCanvas, problemCanvas);
        this.scope = new PaperScope();
        
    }

    public compare(): boolean {
        throw new Error("Method not implemented.");
    }
    public draw(): void {
        throw new Error("Method not implemented.");
    }
}