// Grab the canvas element for calculating the brick width
// depending on canvas width
const canvas: HTMLCanvasElement | null = document.querySelector('#gameCanvas');

// Constants
export const STAGE_PADDING = 10;
export const STAGE_ROWS = 20;
export const STAGE_COLS = 10;
export const BRICK_PADDING = 5;
export const BRICK_WIDTH = canvas
  ? Math.floor((canvas.width - STAGE_PADDING * 2) / STAGE_COLS) - BRICK_PADDING
  : 100;
export const BRICK_HEIGHT = canvas
  ? Math.floor((canvas.height - STAGE_PADDING * 2) / STAGE_ROWS) - BRICK_PADDING
  : 30;
export const PLATFORM_WIDTH = 150;
export const PLATFORM_HEIGHT = 25;
export const PLATFORM_STARTX = 450;
export const PLATFORM_SPEED = 10;
export const PLATFORM_COLOR = '#FFF8DC';
export const BALL_SPEED = 1;
export const BALL_SIZE = 20;
export const BALL_STARTX = 500;
export const BALL_STARTY = 400;
export const BALL_COLOR = '#F0F8FF';

const RED_BRICK_COLOR = '#A52A2A';
const GREEN_BRICK_COLOR = '#228B22';
const YELLOW_BRICK_COLOR = '#EEE8AA';
const BLUE_BRICK_COLOR = '#4169E1';
const PURPLE_BRICK_COLOR = '#663399';

export const BRICK_COLORS: { [key: number]: string } = {
  1: RED_BRICK_COLOR,
  2: GREEN_BRICK_COLOR,
  3: YELLOW_BRICK_COLOR,
  4: BLUE_BRICK_COLOR,
  5: PURPLE_BRICK_COLOR
};

export const BRICK_ENERGY: { [key: number]: number } = {
  1: 1, // Red brick
  2: 1, // Green brick
  3: 2, // Yellow brick
  4: 2, // Blue brick
  5: 3 // Purple brick
};

// prettier-ignore
export const LEVEL = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 1, 1, 1, 1, 1, 1, 0, 0,
  0, 2, 2, 2, 2, 2, 2, 2, 2, 0,
  0, 3, 3, 3, 3, 3, 3, 3, 3, 0,
  0, 0, 4, 4, 4, 4, 4, 4, 0, 0, 
  0, 0, 5, 5, 0, 0, 5, 5, 0, 0,
];