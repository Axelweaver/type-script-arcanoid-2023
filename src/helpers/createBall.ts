import { Ball } from '../sprites';
import {
    BALL_SPEED,
    BALL_SIZE,
    BALL_STARTX,
    BALL_STARTY,
    BALL_COLOR
} from '../setup';

export default function createBall (): Ball {
    // Create a Ball
    const ball = new Ball(
        BALL_SPEED,
        BALL_SIZE,
        { x: BALL_STARTX, y: BALL_STARTY },
        BALL_COLOR
    );

    return ball;
}
