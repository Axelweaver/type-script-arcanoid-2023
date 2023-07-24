"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Brick = /*#__PURE__*/function () {
  function Brick(_brickWidth, _brickHeight, _position, _brickEnergy, color) {
    _classCallCheck(this, Brick);
    this._brickWidth = _brickWidth;
    this._brickHeight = _brickHeight;
    this._position = _position;
    this._brickEnergy = _brickEnergy;
    this._brickWidth = _brickWidth;
    this._brickHeight = _brickHeight;
    this._position = _position;
    this._brickEnergy = _brickEnergy;
    this.brickColor = color;
  }

  // Getters
  _createClass(Brick, [{
    key: "width",
    get: function get() {
      return this._brickWidth;
    }
  }, {
    key: "height",
    get: function get() {
      return this._brickHeight;
    }
  }, {
    key: "position",
    get: function get() {
      return this.position;
    }
  }, {
    key: "color",
    get: function get() {
      return this.brickColor;
    }
  }, {
    key: "energy",
    get: function get() {
      return this._brickEnergy;
    }

    // Setter
    ,
    set: function set(energy) {
      this._brickEnergy = energy;
    }
  }]);
  return Brick;
}();
exports["default"] = Brick;