import { Platform, Brick, Ball } from "./sprites";
import { MainView } from "./mainView";

export class Collision {
    isCollidingBrick(ball: Ball, brick: Brick): boolean {
      if (
        ball.position.x < brick.position.x + brick.width 
        && ball.position.x + ball.width > brick.position.x 
        && ball.position.y < brick.position.y + brick.height 
        && ball.position.y + ball.height > brick.position.y
      ) {
        console.log(`ball.position.x=${ball.position.x}`);
        console.log(`ball.position.y=${ball.position.y}`);        
        console.log(`ball.height=${ball.height}`);
        console.log(`ball.width=${ball.width}`);           
        console.log(`brick.position.x=${brick.position.x}`);
        console.log(`brick.position.y=${brick.position.y}`);        
        console.log(`brick.height=${brick.height}`);
        console.log(`brick.width=${brick.width}`);              
        return true;
      }

      return false;
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
      // 1. Check ball collision with paddle
      if (
        ball.position.x + ball.width > platform.position.x &&
        ball.position.x < platform.position.x + platform.width &&
        ball.position.y + ball.height === platform.position.y
      ) {
        ball.changeYDirection();
      }
      // 2. Check ball collision with walls
      // Ball movement X constraints
      if (ball.position.x > view.canvas.width - ball.width || ball.position.x < 0) {
        ball.changeXDirection();
      }
      // Ball movement Y constraints
      if (ball.position.y < 0) {
        ball.changeYDirection();
      }
    }
  }