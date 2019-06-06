import { Point, Path } from 'paper';
import { Shape } from './Shape';

export class Triangle extends Shape {
    private point1: Point;
    private point2: Point;
    private point3: Point;

    public constructor(ID: string, p1X: number, p1Y: number, p2X: number, p2Y: number, p3X: number, p3Y: number) {
        // A triangle center is the average of its 3 points
        let centerX = (p1X + p2X + p3X)/3;
        let centerY = (p1Y + p2Y + p3Y)/3;
        super(ID, centerX, centerY);

        this.point1 = new Point(p1X, p1Y);
        this.point2 = new Point(p2X, p2Y);
        this.point3 = new Point(p3X, p3Y);
    }

    public translate(offsetX: number, offsetY: number) {
        this.point1.x += offsetX;
        this.point1.y += offsetY;

        this.point2.x += offsetX;
        this.point2.y += offsetY;

        this.point3.x += offsetX;
        this.point3.y += offsetY;

        super.translate(offsetX, offsetY);
    }

    public scale(factor: number): void {
        // To every point, apply a scale on origin and then bring it to the triangle center again
        this.point1.x = factor * (this.point1.x - this.center.x) + this.center.x;
        this.point1.y += factor * (this.point1.y - this.center.y) + this.center.y;

        this.point2.x += factor * (this.point2.x - this.center.x) + this.center.x;
        this.point2.y += factor * (this.point2.y - this.center.y) + this.center.y;

        this.point3.x += factor * (this.point3.x - this.center.x) + this.center.x;
        this.point3.y += factor * (this.point3.y - this.center.y) + this.center.y;
    }

    public draw(): Path {
        // retornar paperjs triangulo
        /*
        var myPath = new Path();
        myPath.strokeColor = 'black';
        myPath.add(new Point(40, 90));
        myPath.add(new Point(90, 40));
        myPath.add(new Point(140, 90));

        myPath.closed = true;
        */
        return new Path();
    }
}