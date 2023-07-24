
import { Ball, Brick, Platform } from './sprites';
import { MainView }  from './mainView';
import { Collision } from './Collision';
import {
    PLATFORM_SPEED,
    PLATFORM_WIDTH,
    PLATFORM_HEIGHT,
    PLATFORM_STARTX,
    PLATFORM_COLOR,
    BALL_SPEED,
    BALL_SIZE,
    BALL_STARTX,
    BALL_STARTY,
    BALL_COLOR,
    GAME_OVER_COLOR,
    GAME_WON_COLOR,
    GAME_START_COLOR
  } from './setup';

  // Helpers
import { createBricks } from './helpers';


let gameOver = false;
let score = 0;

function setGameOver(view: MainView) {
  view.drawInfo('Game Over!', GAME_OVER_COLOR);
  gameOver = false;
}

function setGameWin(view: MainView) {
  view.drawInfo('Game Won!', GAME_WON_COLOR);
  gameOver = false;
}

function gameLoop(
  view: MainView,
  bricks: Brick[],
  platfrom: Platform,
  ball: Ball,
  collision: Collision
) {

  console.log('draw!');

  view.clear();
  view.drawScore(score);

  view.drawBricks(bricks);
  view.drawPlatform(platfrom);


  // Move Ball
  ball.moveBall();

  view.drawBall(ball);

  // Move paddle and check so it won't exit the playfield
  if (
    (platfrom.isMovingLeft && platfrom.position.x > 0) 
    || (platfrom.isMovingRight && platfrom.position.x < view.canvas.width - platfrom.width)
  ) {
    platfrom.move();
  }

  collision.checkBallCollision(ball, platfrom, view);
  const collidingBrick = collision.isCollidingBricks(ball, bricks);

  if (collidingBrick) {
    score += 1;
    view.drawScore(score);
  }

  // Game Over when ball leaves playField
  if ((ball.position.y - ball.height) > view.canvas.height) {
    gameOver = true;
  }

  // If game won, set gameOver and display win
  if (bricks.length === 0) {
    return setGameWin(view);
  }

  // Return if gameover and don't run the requestAnimationFrame
  if (gameOver) {
    return setGameOver(view);
  }

  requestAnimationFrame(() => gameLoop(view, bricks, platfrom, ball, collision));
}

function startGame(view: MainView) {
  // Reset displays
  score = 0;
  view.drawInfo('GET READY!', GAME_START_COLOR);
  view.drawScore(0);
  // Create a collision instance
  const collision = new Collision();
  // Create all bricks
  const bricks = createBricks();
  // Create a Ball
  const ball = new Ball(
    BALL_SPEED,
    BALL_SIZE,
    { x: BALL_STARTX, y: BALL_STARTY },
    BALL_COLOR
  );

  // Create a Platform
  const platform = new Platform(
    PLATFORM_SPEED,
    PLATFORM_WIDTH,
    PLATFORM_HEIGHT,
    {
      x: PLATFORM_STARTX,
      y: view.canvas.height - PLATFORM_HEIGHT - 5
    },
    PLATFORM_COLOR
  );

  gameLoop(view, bricks, platform, ball, collision);
}

// Create a new view
const view = new MainView('#gameCanvas');
view.initStartButton(startGame);