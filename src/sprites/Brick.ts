import { Vector } from '../types';

export default class Brick {
  private brickColor: string;

  constructor(
    private _brickWidth: number,
    private _brickHeight: number,
    private _position: Vector,
    private _brickEnergy: number,
    color: string
  ) {
    this._brickWidth = _brickWidth;
    this._brickHeight = _brickHeight;
    this._position = _position;
    this._brickEnergy = _brickEnergy;
    this.brickColor = color;
  }

  // Getters
  get width(): number {
    return this._brickWidth;
  }

  get height(): number {
    return this._brickHeight;
  }

  get position(): Vector {
    return this.position;
  }

  get color(): string {
    return this.brickColor;
  }

  get energy(): number {
    return this._brickEnergy;
  }

  // Setter
  set energy(energy: number) {
    this._brickEnergy = energy;
  }
}