// Types
import { Brick, Ball, Platform } from './sprites';
import { drawRect, drawCircle } from './helpers';

export class MainView {
  canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D | null;
  private scoreDisplay: HTMLObjectElement | null;
  private start: HTMLObjectElement | null;
  private info: HTMLObjectElement | null;

  constructor(canvasName: string) {
    this.canvas = document.querySelector(canvasName) as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d');
    this.scoreDisplay = document.querySelector('#score');
    this.start = document.querySelector('#start');
    this.info = document.querySelector('#info');
  }

  clear(): void {
    this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  initStartButton(startFunction: (view: MainView) => void): void {
    this.start?.addEventListener('click', () => startFunction(this));
  }

  drawScore(score: number): void {
    if (this.scoreDisplay) this.scoreDisplay.innerHTML = score.toString();
  }

  drawInfo(text: string): void {
    if (this.info) this.info.innerHTML = text;
  }

//   drawSprite(brick: Brick | Platform | Ball): void {
//     if (!brick) return;

//     this.context?.drawImage(
//       brick.image,
//       brick.pos.x,
//       brick.pos.y,
//       brick.width,
//       brick.height
//     );
//   }

  drawPlatform(platform: Platform): void {
    drawRect(
        this.context,
        platform.color,
        platform.position.x,
        platform.position.y,
        platform.width,
        platform.height
    )
  }

  drawBall(ball: Ball): void {
    drawCircle(
        this.context,
        ball.color,
        ball.position.x,
        ball.position.y,
        ball.radius
    )
  }

  drawBrick(brick: Brick): void {
    drawRect(
        this.context,
        brick.color,
        brick.position.x,
        brick.position.y,
        brick.width,
        brick.height)
  }

  drawBricks(bricks: Brick[]): void {
    bricks.forEach(brick => this.drawBrick(brick));
  }
}