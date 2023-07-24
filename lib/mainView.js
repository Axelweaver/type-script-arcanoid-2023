"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainView = void 0;
var _helpers = require("./helpers");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } // Types
var MainView = /*#__PURE__*/function () {
  function MainView(canvasName) {
    _classCallCheck(this, MainView);
    this.canvas = document.querySelector(canvasName);
    this.context = this.canvas.getContext('2d');
    this.scoreDisplay = document.querySelector('#score');
    this.start = document.querySelector('#start');
    this.info = document.querySelector('#info');
  }
  _createClass(MainView, [{
    key: "clear",
    value: function clear() {
      var _this$context;
      (_this$context = this.context) === null || _this$context === void 0 ? void 0 : _this$context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "initStartButton",
    value: function initStartButton(startFunction) {
      var _this$start,
        _this = this;
      (_this$start = this.start) === null || _this$start === void 0 ? void 0 : _this$start.addEventListener('click', function () {
        return startFunction(_this);
      });
    }
  }, {
    key: "drawScore",
    value: function drawScore(score) {
      if (this.scoreDisplay) this.scoreDisplay.innerHTML = score.toString();
    }
  }, {
    key: "drawInfo",
    value: function drawInfo(text) {
      if (this.info) this.info.innerHTML = text;
    }

    //   drawSprite(brick: Brick | Platform | Ball): void {
    //     if (!brick) return;

    //     this.context?.drawImage(
    //       brick.image,
    //       brick.pos.x,
    //       brick.pos.y,
    //       brick.width,
    //       brick.height
    //     );
    //   }
  }, {
    key: "drawPlatform",
    value: function drawPlatform(platform) {
      (0, _helpers.drawRect)(this.context, platform.color, platform.position.x, platform.position.y, platform.width, platform.height);
    }
  }, {
    key: "drawBall",
    value: function drawBall(ball) {
      (0, _helpers.drawCircle)(this.context, ball.color, ball.position.x, ball.position.y, ball.radius);
    }
  }, {
    key: "drawBrick",
    value: function drawBrick(brick) {
      (0, _helpers.drawRect)(this.context, brick.color, brick.position.x, brick.position.y, brick.width, brick.height);
    }
  }, {
    key: "drawBricks",
    value: function drawBricks(bricks) {
      var _this2 = this;
      bricks.forEach(function (brick) {
        return _this2.drawBrick(brick);
      });
    }
  }]);
  return MainView;
}();
exports.MainView = MainView;