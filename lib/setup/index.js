"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STAGE_ROWS = exports.STAGE_PADDING = exports.STAGE_COLS = exports.PLATFORM_WIDTH = exports.PLATFORM_STARTX = exports.PLATFORM_SPEED = exports.PLATFORM_HEIGHT = exports.PLATFORM_COLOR = exports.LEVEL = exports.BRICK_WIDTH = exports.BRICK_PADDING = exports.BRICK_HEIGHT = exports.BRICK_ENERGY = exports.BRICK_COLORS = exports.BALL_STARTY = exports.BALL_STARTX = exports.BALL_SPEED = exports.BALL_SIZE = exports.BALL_COLOR = void 0;
// Grab the canvas element for calculating the brick width
// depending on canvas width
var canvas = document.querySelector('#gameCanvas');

// Constants
var STAGE_PADDING = 10;
exports.STAGE_PADDING = STAGE_PADDING;
var STAGE_ROWS = 20;
exports.STAGE_ROWS = STAGE_ROWS;
var STAGE_COLS = 10;
exports.STAGE_COLS = STAGE_COLS;
var BRICK_PADDING = 5;
exports.BRICK_PADDING = BRICK_PADDING;
var BRICK_WIDTH = canvas ? Math.floor((canvas.width - STAGE_PADDING * 2) / STAGE_COLS) - BRICK_PADDING : 100;
exports.BRICK_WIDTH = BRICK_WIDTH;
var BRICK_HEIGHT = canvas ? Math.floor((canvas.height - STAGE_PADDING * 2) / STAGE_ROWS) - BRICK_PADDING : 30;
exports.BRICK_HEIGHT = BRICK_HEIGHT;
var PLATFORM_WIDTH = 150;
exports.PLATFORM_WIDTH = PLATFORM_WIDTH;
var PLATFORM_HEIGHT = 25;
exports.PLATFORM_HEIGHT = PLATFORM_HEIGHT;
var PLATFORM_STARTX = 450;
exports.PLATFORM_STARTX = PLATFORM_STARTX;
var PLATFORM_SPEED = 10;
exports.PLATFORM_SPEED = PLATFORM_SPEED;
var PLATFORM_COLOR = '#2F4F4F';
exports.PLATFORM_COLOR = PLATFORM_COLOR;
var BALL_SPEED = 5;
exports.BALL_SPEED = BALL_SPEED;
var BALL_SIZE = 20;
exports.BALL_SIZE = BALL_SIZE;
var BALL_STARTX = 500;
exports.BALL_STARTX = BALL_STARTX;
var BALL_STARTY = 400;
exports.BALL_STARTY = BALL_STARTY;
var BALL_COLOR = 'CD5C5C';
exports.BALL_COLOR = BALL_COLOR;
var RED_BRICK_COLOR = '#A52A2A';
var GREEN_BRICK_COLOR = '#228B22';
var YELLOW_BRICK_COLOR = '#EEE8AA';
var BLUE_BRICK_COLOR = '#4169E1';
var PURPLE_BRICK_COLOR = '#663399';
var BRICK_COLORS = {
  1: RED_BRICK_COLOR,
  2: GREEN_BRICK_COLOR,
  3: YELLOW_BRICK_COLOR,
  4: BLUE_BRICK_COLOR,
  5: PURPLE_BRICK_COLOR
};
exports.BRICK_COLORS = BRICK_COLORS;
var BRICK_ENERGY = {
  1: 1,
  // Red brick
  2: 1,
  // Green brick
  3: 2,
  // Yellow brick
  4: 2,
  // Blue brick
  5: 3 // Purple brick
};

// prettier-ignore
exports.BRICK_ENERGY = BRICK_ENERGY;
var LEVEL = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0];
exports.LEVEL = LEVEL;