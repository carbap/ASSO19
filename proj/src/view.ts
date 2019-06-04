export class View {
    private canvas: any;
    private compileButton: HTMLElement | null;
    private stepButton: HTMLElement | null;
    private runButton: HTMLElement | null;

    constructor(canvas: any, compileButton: HTMLElement | null, stepButton: HTMLElement | null, runButton: HTMLElement | null) {
        this.canvas = canvas;
        this.compileButton = compileButton;
        this.stepButton = stepButton;
        this.runButton = runButton;        
    }

    public getCanvas(): View {
        return this.canvas;
    }
}