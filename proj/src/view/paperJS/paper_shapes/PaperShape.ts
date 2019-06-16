import { Path } from 'paper';

export class PaperShape {
    protected shape : Path = new Path();

    public getShape() : Path {
        return this.shape;
    }
}