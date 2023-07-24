import { Platform, Brick, Ball } from "./sprites";
import { MainView } from "./mainView";

export class Collision {
    isCollidingBrick(ball: Ball, brick: Brick): boolean {

      return !(
        
        ((ball.position.y + ball.radius) <= brick.position.y)
     || ((ball.position.y - ball.radius) >= (brick.position.y + brick.height))
     || ((ball.position.x + ball.radius) <= brick.position.x)
     || ((ball.position.x - ball.radius) >= (brick.position.x + brick.width))
      );
    }
  
    // Check ball collision with bricks
    isCollidingBricks(ball: Ball, bricks: Brick[]): boolean {
      let colliding = false;
  
      bricks.forEach((brick, i) => {
        if (this.isCollidingBrick(ball, brick)) {
          ball.changeYDirection();
  
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
  
    checkBallCollision(ball: Ball, platform: Platform, view: MainView): void {
      // 1. Check ball collision with platform
      if (
        (ball.position.x - ball.radius) >= platform.position.x 
        && (ball.position.x + ball.radius) <= (platform.position.x + platform.width) 
        && (ball.position.y + ball.radius) >= platform.position.y
        && (ball.position.y + ball.radius) <= platform.position.y + 2
      ) {
        ball.changeYDirection();
      }
      // 2. Check ball collision with walls
      // Ball movement X constraints
      if (ball.position.x  >= (view.canvas.width - ball.radius) 
       || ball.position.x - ball.radius <= 0) {
        ball.changeXDirection();
      }
      // Ball movement Y constraints
      if (ball.position.y - ball.radius <= 0) {
        ball.changeYDirection();
      }
    }
  }