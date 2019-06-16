import { Shape } from './Shape';

/**
 * Null Object pattern
 * Used for signal and wait commands because they dont act on a shape. However, Command base class must always receive a Shape
 */
export class NullShape extends Shape {

    public constructor() {
        super('', 0, 0);
    }

    public scale(factor: number): void { }

    public copy(): NullShape {
        return new NullShape();
    }
}