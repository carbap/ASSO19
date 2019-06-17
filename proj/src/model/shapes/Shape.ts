export abstract class Shape {
    protected ID: string;
    protected center: Vector2;
    private readonly centerOG: Vector2;
    protected angle: number = 45; // para rotaçao????

    public constructor(ID: string, centerX: number, centerY: number) {
        this.ID = ID;
        this.center = new Vector2(centerX, centerY);
        this.centerOG = new Vector2(centerX, centerY);
    }

    public reset() {
        this.center = new Vector2(this.centerOG.getX(), this.centerOG.getY());
    }
    
    public getID(): string {
        return this.ID;
    }

    public translate(offsetX: number, offsetY: number) {
        this.center.incX(offsetX);
        this.center.incY(offsetY);
    }

    public getCenter(): Vector2 {
        return this.center;
    }

    public getRotation(): number {
        return this.angle;
    }

    public rotate(degrees: number) {
        this.angle += degrees;
        this.angle %= 360;
    }

    abstract scale(factor: number): void;

    //abstract draw(): Path; // mudar para classe do paper.js quando tivermos   // TO DO: remove?

    abstract copy(): Shape; // Return a deep copy object of the current shape

    // NOTE: shapes should not know to draw themselves, that should be dependant of a view
    // so draw should be the execute of a command, that knows the existing shapes and the view on which to draw
}

export class Vector2 {
    private x: number = 0;
    private y: number = 0;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }

    setX(x: number): void {
        this.x = x;
    }

    setY(y: number): void {
        this.y = y;
    }

    incX(incX: number) {
        this.x += incX;
    }

    incY(incY: number) {
        this.y += incY;
    }
}