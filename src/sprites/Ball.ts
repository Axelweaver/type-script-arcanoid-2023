import { type IVector } from '../types';

export default class Ball {
    private readonly speed: IVector;
    private readonly _color: string;
    private readonly _radius: number;
    private readonly _radiusSquare: number;
    constructor (
        speed: number,
        private readonly _ballSize: number,
        private readonly _position: IVector,
        color: string
    ) {
        this._ballSize = _ballSize;
        this._position = _position;
        this.speed = {
            x: speed,
            y: -speed
        };
        this._color = color;
        this._radius = Math.round(this._ballSize / 2);
        this._radiusSquare = this._radius * this._radius;
    }

    // Getters
    get width (): number {
        return this._ballSize;
    }

    get height (): number {
        return this._ballSize;
    }

    get radius (): number {
        return this._radius;
    }

    get radiusSquare (): number {
        return this._radiusSquare;
    }

    get position (): IVector {
        return this._position;
    }

    get color (): string {
        return this._color;
    }

    // Methods
    changeYDirection (): void {
        this.speed.y = -this.speed.y;
    }

    changeXDirection (): void {
        this.speed.x = -this.speed.x;
    }

    moveBall (): void {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    }
}
