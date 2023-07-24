"use strict";

var _sprites = require("./sprites");
var _mainView = require("./mainView");
var _Collision = require("./Collision");
var _setup = require("./setup");
var _helpers = require("./helpers");
// Helpers

var gameOver = false;
var score = 0;
function setGameOver(view) {
  view.drawInfo('Game Over!');
  gameOver = false;
}
function setGameWin(view) {
  view.drawInfo('Game Won!');
  gameOver = false;
}
function gameLoop(view, bricks, platfrom, ball, collision) {
  console.log('draw!');
  view.clear();
  view.drawBricks(bricks);
  view.drawPlatform(platfrom);
  view.drawBall(ball);
  // Move Ball
  ball.moveBall();

  // Move paddle and check so it won't exit the playfield
  if (platfrom.isMovingLeft && platfrom.position.x > 0 || platfrom.isMovingRight && platfrom.position.x < view.canvas.width - platfrom.width) {
    platfrom.move();
  }
  collision.checkBallCollision(ball, platfrom, view);
  var collidingBrick = collision.isCollidingBricks(ball, bricks);
  if (collidingBrick) {
    score += 1;
    view.drawScore(score);
  }

  // Game Over when ball leaves playField
  if (ball.position.y > view.canvas.height) gameOver = true;
  // If game won, set gameOver and display win
  if (bricks.length === 0) return setGameWin(view);
  // Return if gameover and don't run the requestAnimationFrame
  if (gameOver) return setGameOver(view);
  requestAnimationFrame(function () {
    return gameLoop(view, bricks, platfrom, ball, collision);
  });
}
function startGame(view) {
  // Reset displays
  score = 0;
  view.drawInfo('');
  view.drawScore(0);
  // Create a collision instance
  var collision = new _Collision.Collision();
  // Create all bricks
  var bricks = (0, _helpers.createBricks)();
  // Create a Ball
  var ball = new _sprites.Ball(_setup.BALL_SPEED, _setup.BALL_SIZE, {
    x: _setup.BALL_STARTX,
    y: _setup.BALL_STARTY
  }, _setup.BALL_COLOR);

  // Create a Platform
  var platform = new _sprites.Platform(_setup.PLATFORM_SPEED, _setup.PLATFORM_WIDTH, _setup.PLATFORM_HEIGHT, {
    x: _setup.PLATFORM_STARTX,
    y: view.canvas.height - _setup.PLATFORM_HEIGHT - 5
  }, _setup.PLATFORM_COLOR);
  gameLoop(view, bricks, platform, ball, collision);
}

// Create a new view
var view = new _mainView.MainView('#gameCanvas');
view.initStartButton(startGame);