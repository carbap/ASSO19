import { Shape } from './shapes/Shape';

export class Problem {

    private shapes: Array<Shape>;

    constructor(... shapes: Array<Shape>) {
        this.shapes = shapes;
    }

    public getShapes(): Array<Shape>{
        return this.shapes;
    }

}
