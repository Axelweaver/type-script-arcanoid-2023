"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = drawCircle;
function drawCircle(context, color, x, y, radius) {
  context.fillStyle = color;
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI, false);
  context.fill();
}