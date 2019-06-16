import { Shape } from './shapes/Shape';

export class Problem {

    private shapes: Array<Shape>;
    private maximumCompletionTime: number;

    constructor(maximumCompletionTime: number, ... shapes: Array<Shape>) {
        this.shapes = shapes;
        this.maximumCompletionTime = maximumCompletionTime;
    }

    public getShapes(): Array<Shape>{
        return this.shapes;
    }

    public getMaximumCompletionTime(): number{
        return this.maximumCompletionTime;
    }

}
