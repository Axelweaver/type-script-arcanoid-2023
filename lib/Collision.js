"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Collision = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Collision = /*#__PURE__*/function () {
  function Collision() {
    _classCallCheck(this, Collision);
  }
  _createClass(Collision, [{
    key: "isCollidingBrick",
    value: function isCollidingBrick(ball, brick) {
      if (ball.position.x < brick.position.x + brick.width && ball.position.x + ball.width > brick.position.x && ball.position.y < brick.position.y + brick.height && ball.position.y + ball.height > brick.position.y) {
        return true;
      }
      return false;
    }

    // Check ball collision with bricks
  }, {
    key: "isCollidingBricks",
    value: function isCollidingBricks(ball, bricks) {
      var _this = this;
      var colliding = false;
      bricks.forEach(function (brick, i) {
        if (_this.isCollidingBrick(ball, brick)) {
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
  }, {
    key: "checkBallCollision",
    value: function checkBallCollision(ball, platform, view) {
      // 1. Check ball collision with paddle
      if (ball.position.x + ball.width > platform.position.x && ball.position.x < platform.position.x + platform.width && ball.position.y + ball.height === platform.position.y) {
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
  }]);
  return Collision;
}();
exports.Collision = Collision;