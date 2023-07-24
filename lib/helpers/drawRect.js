"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = drawRect;
function drawRect(context, color, x, y, width, height) {
  if (!context) {
    return;
  }
  context.fillStyle = color;
  context.beginPath();
  context.rect(x, y, width, height);
  context.fill();
  context.stroke();
}