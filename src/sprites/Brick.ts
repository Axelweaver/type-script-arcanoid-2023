import { type IVector, type IRectangle } from '../types';
import { BRICK_BLINK_COLOR } from '../setup';

export default class Brick implements IRectangle {
    private brickColor: string;

    constructor (
        private readonly _brickWidth: number,
        private readonly _brickHeight: number,
        private readonly _position: IVector,
        private _brickEnergy: number,
        color: string
    ) {
        this._brickWidth = _brickWidth;
        this._brickHeight = _brickHeight;
        this._position = _position;
        this._brickEnergy = _brickEnergy;
        this.brickColor = color;
    }

    private blink (): void {
        if (this._brickEnergy <= 0) {
            return;
        }

        const oldColor = this.brickColor;
        this.brickColor = BRICK_BLINK_COLOR;
        setTimeout(() => { this.brickColor = oldColor; }, 70);
    }

    // Getters
    get width (): number {
        return this._brickWidth;
    }

    get height (): number {
        return this._brickHeight;
    }

    get position (): IVector {
        return this._position;
    }

    get color (): string {
        return this.brickColor;
    }

    get energy (): number {
        return this._brickEnergy;
    }

    // Setter
    set energy (energy: number) {
        this._brickEnergy = energy;
        this.blink();
    }
}
