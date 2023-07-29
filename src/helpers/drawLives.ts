import { LIVES_HEARTS, INITIAL_LIVES, LIVES_HEART_SIZE } from '../setup';
import drawHeart from './drawHeart';

export default function drawLives (
    context: CanvasRenderingContext2D | null,
    countLives: number,
    x: number,
    y: number): void {
    if (context == null) {
        return;
    }

    const padding: number = Math.round(context.canvas.width / 100);

    for (let i = 0; i < INITIAL_LIVES; i++) {
        const imagePath: string = countLives > i
            ? LIVES_HEARTS[1]
            : LIVES_HEARTS[0];

        drawHeart(
            context,
            imagePath,
            x,
            y,
            LIVES_HEART_SIZE,
            LIVES_HEART_SIZE);

        x += (LIVES_HEART_SIZE + padding);
    }
}
