import { type IVector, type IRectangle } from '../types';

export default class Platform implements IRectangle {
    private moveLeft: boolean;
    private moveRight: boolean;
    private readonly _color: string;

    constructor (
        private readonly speed: number,
        private readonly platformWidth: number,
        private readonly platformHeight: number,
        private readonly _position: IVector,
        color: string
    ) {
        this.speed = speed;
        this.platformWidth = platformWidth;
        this.platformHeight = platformHeight;
        this._position = _position;
        this.moveLeft = false;
        this.moveRight = false;
        this._color = color;

        // Event Listeners
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp);
    }

    // Getters
    get width (): number {
        return this.platformWidth;
    }

    get height (): number {
        return this.platformHeight;
    }

    get position (): IVector {
        return this._position;
    }

    get isMovingLeft (): boolean {
        return this.moveLeft;
    }

    get isMovingRight (): boolean {
        return this.moveRight;
    }

    get color (): string {
        return this._color;
    }

    move (): void {
        if (this.moveLeft) {
            this.position.x -= this.speed;
        }

        if (this.moveRight) {
            this.position.x += this.speed;
        }
    }

    handleKeyUp = (e: KeyboardEvent): void => {
        if (e.code === 'ArrowLeft' || e.key === 'ArrowLeft' ||
        e.code === 'KeyA' || e.key.toUpperCase() === 'A') {
            this.moveLeft = false;
        }

        if (e.code === 'ArrowRight' || e.key === 'ArrowRight' ||
        e.code === 'KeyD' || e.key.toUpperCase() === 'D') {
            this.moveRight = false;
        }
    };

    handleKeyDown = (e: KeyboardEvent): void => {
        if (e.code === 'ArrowLeft' || e.key === 'ArrowLeft' ||
        e.code === 'KeyA' || e.key.toUpperCase() === 'A') {
            this.moveLeft = true;
        }

        if (e.code === 'ArrowRight' || e.key === 'ArrowRight' ||
        e.code === 'KeyD' || e.key.toUpperCase() === 'D') {
            this.moveRight = true;
        }
    };
}
