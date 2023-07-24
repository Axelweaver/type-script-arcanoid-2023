// Types
import { Brick, Ball, Platform } from './sprites';
import { drawRect, drawCircle, drawText } from './helpers';
import { SCORE_COLOR } from './setup';

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
    if (this.scoreDisplay) {
      let textPositionY = Math.round(this.canvas.height / 24);
      let textPositionX = this.canvas.width - Math.round(this.canvas.width / 10) 
      let scoreText = `score: ${score}`;
      const fontSize = Math.round(this.canvas.height / 33);
      const font = `bold ${fontSize}px Verdana`;

      drawText(
        this.context,
        SCORE_COLOR,
        font,
        textPositionX,
        textPositionY,
        scoreText,
        'left');
    }
  }

  drawInfo(text: string, color: string): void {
    if(!this.info){
      return;
    }

    let textPositionY = Math.round(this.canvas.height / 2);
    let textPositionX = Math.round(this.canvas.width / 2) 
    const fontSize = Math.round(this.canvas.width / 18);
    const font = `bold ${fontSize}px Verdana`;

    drawText(
      this.context,
      color,
      font,
      textPositionX,
      textPositionY,
      text,
      'center');
  }

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