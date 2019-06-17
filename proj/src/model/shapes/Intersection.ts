import { Shape } from './Shape';

export class Intersection extends Shape {
    private intersectedShapes: Shape[];

    public constructor(ID: string, intersectedShapes: Shape[], rotation: number = 0) {
        // An intersection doesn't have a center
        super(ID, 0, 0, rotation);
        this.intersectedShapes = intersectedShapes;
    }

    public reset() {
        for(var shape of this.intersectedShapes){
            shape.reset();
        }
        super.reset();
    }

    public translate(offsetX: number, offsetY: number) {
        for(var shape of this.intersectedShapes){
            shape.translate(offsetX, offsetY);
        }
    }

    public scale(factor: number): void {
        for(var shape of this.intersectedShapes){
            shape.scale(factor);
        }
    }

    public getIntersectedShapes() : Shape[] {
        return this.intersectedShapes;
    }

    public copy(): Intersection {
        let intersectedShapesCopy: Shape[] = this.intersectedShapes.map(shape => { return shape.copy(); });
        return new Intersection(this.ID, intersectedShapesCopy, this.angle);
    }
}