import { type IRectangle } from './types';
import { type Platform, type Brick, type Ball } from './sprites';
import { type MainView } from './mainView';

export class Collision {
    // check circle collision with rectangle
    checkCollisionCircleWithRect (ball: Ball, rect: IRectangle): boolean {
        const x = Math.max(
            rect.position.x,
            Math.min(ball.position.x, rect.position.x + rect.width)
        );
        const y = Math.max(
            rect.position.y,
            Math.min(ball.position.y, rect.position.y + rect.height)
        );

        const distanceSquare = (x - ball.position.x) ** 2 + (y - ball.position.y) ** 2;

        const isCollision = distanceSquare < ball.radiusSquare;

        return isCollision;
    }

    // check ball collision by side
    isSideColliding (ball: Ball, rect: IRectangle): boolean {
        if (ball.position.y > rect.position.y &&
            ball.position.y < rect.position.y + rect.height) {
            if (ball.position.x < rect.position.x ||
                ball.position.x > rect.position.x + rect.width) {
                return true;
            }
        }

        return false;
    }

    // Check ball collision with bricks
    isCollidingBricks (ball: Ball, bricks: Brick[]): boolean {
        let colliding = false;

        bricks.forEach((brick, i) => {
            if (this.checkCollisionCircleWithRect(ball, brick)) {
                ball.changeYDirection();

                if (this.isSideColliding(ball, brick)) {
                    ball.changeXDirection();
                }

                if (brick.energy === 1) {
                    bricks.splice(i, 1);
                } else {
                    brick.energy -= 1;
                }

                colliding = true;
            }
        });

        return colliding;
    }

    checkBallCollision (ball: Ball, platform: Platform, view: MainView): void {
        // 1. Check ball collision with platform
        if (this.checkCollisionCircleWithRect(ball, platform)) {
            ball.changeYDirection();

            if (this.isSideColliding(ball, platform)) {
                ball.changeXDirection();
            }
        }
        // 2. Check ball collision with walls
        // Ball movement X constraints
        if (ball.position.x > (view.canvas.width - ball.radius) ||
       ball.position.x - ball.radius <= 0) {
            ball.changeXDirection();
        }
        // Ball movement Y constraints
        if (ball.position.y - ball.radius <= 0) {
            ball.changeYDirection();
        }
    }
}
