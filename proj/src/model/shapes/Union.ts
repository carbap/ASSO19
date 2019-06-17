import { Shape } from './Shape';

export class Union extends Shape {
    private unitedShapes: Shape[];

    public constructor(ID: string, unitedShapes: Shape[]) {
        // An intersection doesn't have a center
        super(ID, 0, 0);
        this.unitedShapes = unitedShapes;
    }

    public reset() {
        for(var shape of this.unitedShapes){
            shape.reset();
        }
    }

    public translate(offsetX: number, offsetY: number) {
        for(var shape of this.unitedShapes){
            shape.translate(offsetX, offsetY);
        }
    }

    public scale(factor: number): void {
        for(var shape of this.unitedShapes){
            shape.scale(factor);
        }
    }

    public getUnitedShapes() : Shape[] {
        return this.unitedShapes;
    }

    public copy(): Union {
        let unitedShapesCopy: Shape[] = this.unitedShapes.map(shape => { return shape.copy(); });
        return new Union(this.ID, unitedShapesCopy);
    }
}