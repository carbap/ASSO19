import { Shape, Vector2 } from './Shape';

export class Triangle extends Shape {
    private point1: Vector2;
    private point2: Vector2;
    private point3: Vector2;
    private point1OG: Vector2;
    private point2OG: Vector2;
    private point3OG: Vector2;

    public constructor(ID: string, p1X: number, p1Y: number, p2X: number, p2Y: number, p3X: number, p3Y: number) {
        // A triangle center is the average of its 3 points
        let centerX = (p1X + p2X + p3X)/3;
        let centerY = (p1Y + p2Y + p3Y)/3;
        super(ID, centerX, centerY);

        this.point1 = new Vector2(p1X, p1Y);
        this.point2 = new Vector2(p2X, p2Y);
        this.point3 = new Vector2(p3X, p3Y);
        this.point1OG = new Vector2(p1X, p1Y);
        this.point2OG = new Vector2(p2X, p2Y);
        this.point3OG = new Vector2(p3X, p3Y);
    }

    public reset() {
        this.point1 = new Vector2(this.point1OG.getX(), this.point1OG.getY());
        this.point2 = new Vector2(this.point2OG.getX(), this.point2OG.getY());
        this.point3 = new Vector2(this.point3OG.getX(), this.point3OG.getY());
        super.reset();
    }

    public translate(offsetX: number, offsetY: number) {
        this.point1.incX(offsetX);
        this.point1.incY(offsetY);

        this.point2.incX(offsetX);
        this.point2.incY(offsetY);

        this.point3.incX(offsetX);
        this.point3.incY(offsetY);

        super.translate(offsetX, offsetY);
    }

    public scale(factor: number): void {
        // To every point, apply a scale on origin and then bring it to the triangle center again
        this.point1.setX(factor * (this.point1.getX() - this.center.getX()) + this.center.getX());
        this.point1.setY(factor * (this.point1.getY() - this.center.getY()) + this.center.getY());

        this.point2.setX(factor * (this.point2.getX() - this.center.getX()) + this.center.getX());
        this.point2.setY(factor * (this.point2.getY() - this.center.getY()) + this.center.getY());

        this.point3.setX(factor * (this.point3.getX() - this.center.getX()) + this.center.getX());
        this.point3.setY(factor * (this.point3.getY() - this.center.getY()) + this.center.getY());
    }

    public getPoint1() : Vector2 {
        return this.point1;        
    }

    public getPoint2() : Vector2 {
        return this.point2;        
    }

    public getPoint3() : Vector2 {
        return this.point3;        
    }

    //public draw(): Path {
        // retornar paperjs triangulo
        /*
        var myPath = new Path();
        myPath.strokeColor = 'black';
        myPath.add(new Point(40, 90));
        myPath.add(new Point(90, 40));
        myPath.add(new Point(140, 90));

        myPath.closed = true;
        */
       // return new Path();
    //}

    public copy(): Triangle {
        return new Triangle(this.ID, this.point1.getX(), this.point1.getY(),
            this.point2.getX(), this.point2.getY(),
            this.point3.getX(), this.point3.getY());
    }
}