import { Point, Path } from "paper";

export abstract class Shape {
    protected center: Point;
    private angle: number; // para rotaçao????

    public constructor(centerX: number, centerY: number) {
        this.center = new Point(centerX, centerY);
    }

    public translate(offsetX: number, offsetY: number) {
        this.center.x += offsetX;
        this.center.y += offsetY;
    }

    abstract scale(factor: number): void;

    abstract draw(): Path; // mudar para classe do paper.js quando tivermos
}