import { Point, Path } from 'paper';

export abstract class Shape {
    private ID: string;
    protected center: Point;
    private angle: number = 0; // para rotaçao????

    public constructor(ID: string, centerX: number, centerY: number) {
        this.ID = ID;
        this.center = new Point(centerX, centerY);
    }

    public translate(offsetX: number, offsetY: number) {
        this.center.x += offsetX;
        this.center.y += offsetY;
    }

    abstract scale(factor: number): void;

    abstract draw(): Path; // mudar para classe do paper.js quando tivermos   // TO DO: remove?

    // NOTE: shapes should not know to draw themselves, that should be dependant of a view
    // so draw should be the execute of a command, that knows the existing shapes and the view on which to draw
}