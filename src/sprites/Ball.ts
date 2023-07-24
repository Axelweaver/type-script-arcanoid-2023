import { Vector } from '../types';

export default class Ball {
  private speed: Vector;
  private _color: string;

  constructor(
    speed: number,
    private _ballSize: number,
    private _position: Vector,
    color: string
  ) {
    this._ballSize = _ballSize;
    this._position = _position;
    this.speed = {
      x: speed,
      y: -speed
    };
    this._color = color;

  }

  // Getters
  get width(): number {
    return this._ballSize;
  }

  get height(): number {
    return this._ballSize;
  }

  get radius(): number {
    return Math.round(this._ballSize / 2);
  }
  
  get position(): Vector {
    return this._position;
  }

  get color(): string {
    return this._color;
  }

  // Methods
  changeYDirection(): void {
    this.speed.y = -this.speed.y;
  }

  changeXDirection(): void {
    this.speed.x = -this.speed.x;
  }

  moveBall(): void {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
  }
}