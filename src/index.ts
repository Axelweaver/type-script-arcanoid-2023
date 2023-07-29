import { type Ball, type Brick, type Platform } from './sprites';
import { MainView } from './mainView';
import { Collision } from './Collision';
import {
    INITIAL_LIVES,
    GAME_OVER_COLOR,
    GAME_WON_COLOR,
    GAME_START_COLOR
} from './setup';
import { createBricks, createBall, createPlatform } from './helpers';

let gameOver = false;
let start = true;
let score = 0;
let lives = INITIAL_LIVES;

function setGameOver (view: MainView): void {
    view.drawInfo('Game Over!', GAME_OVER_COLOR);
    gameOver = false;
    view.waitPressToStart();
}

function setGameWin (view: MainView): void {
    view.drawInfo('Game Won!', GAME_WON_COLOR);
    gameOver = false;
    view.waitPressToStart();
}

// game loop, when it active
function gameLoop (
    view: MainView,
    bricks: Brick[],
    platfrom: Platform,
    ball: Ball,
    collision: Collision
): void {
    view.clear();
    view.drawScore(score);
    view.showLives(lives);
    view.drawBricks(bricks);
    view.drawPlatform(platfrom);

    if (start) {
    // Move Ball
        ball.moveBall();

        view.drawBall(ball);

        // Move paddle and check so it won't exit the playfield
        if ((platfrom.isMovingLeft && platfrom.position.x > 0) ||
      (platfrom.isMovingRight && platfrom.position.x < view.canvas.width - platfrom.width)
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
            // lost one life
            lives = lives - 1;

            if (lives < 1) {
                gameOver = true;
            } else {
                start = false;
            }
        }

        // If game won, set gameOver and display win
        if (bricks.length === 0) {
            setGameWin(view); return;
        }

        // Return if gameover and don't run the requestAnimationFrame
        if (gameOver) {
            setGameOver(view); return;
        }
    } else { // waiting for press space
        view.drawInfo('GET READY!', GAME_START_COLOR);
        view.waitPressToStart();
        if ((ball.position.y - ball.height) > view.canvas.height) {
            ball = createBall();
            platfrom = createPlatform(view.canvas.height);
        }
    }

    requestAnimationFrame(() => { gameLoop(view, bricks, platfrom, ball, collision); });
}

function pressSpace (view: MainView): void {
    if (start) {
        startGame(view);
        return;
    }

    start = true;
}

function startGame (view: MainView): void {
    // Reset displays
    score = 0;
    lives = INITIAL_LIVES;
    view.drawScore(0);
    // Create a collision instance
    const collision = new Collision();
    // Create all bricks
    const bricks = createBricks();

    const ball = createBall();

    const platform = createPlatform(view.canvas.height);

    gameLoop(view, bricks, platform, ball, collision);
}

// Create a new view
const view = new MainView('#gameCanvas');
view.initStartButton(pressSpace);
