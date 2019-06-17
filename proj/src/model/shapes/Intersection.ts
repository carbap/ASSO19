import { Shape } from './Shape';

export class Intersection extends Shape {
    private intersectedShapes: Shape[];

    public constructor(ID: string, intersectedShapes: Shape[]) {
        // An intersection doesn't have a center
        super(ID, 0, 0);
        this.intersectedShapes = intersectedShapes;
    }

    public reset() {
        for(var shape of this.intersectedShapes){
            shape.reset();
        }
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
        return new Intersection(this.ID, intersectedShapesCopy);
    }
}