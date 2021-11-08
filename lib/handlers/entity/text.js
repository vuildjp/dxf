"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.process = exports.TYPE = void 0;

var _common = _interopRequireDefault(require("./common"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TYPE = 'TEXT';
exports.TYPE = TYPE;
var simpleCodes = {
  1: 'string',
  10: 'x',
  20: 'y',
  30: 'z',
  11: 'x2',
  21: 'y2',
  31: 'z2',
  39: 'thickness',
  40: 'textHeight',
  41: 'relScaleX',
  50: 'rotation',
  51: 'obliqueAngle',
  7: 'styleName',
  71: 'mirror',
  72: 'hAlign',
  73: 'vAlign',
  210: 'extX',
  220: 'extY',
  230: 'extZ'
}; // const EXCEPTION_STRINGS = ['\\A1;', '%%u']

var process = function process(tuples) {
  return tuples.reduce(function (entity, tuple) {
    var type = tuple[0];
    var value = tuple[1];

    if (simpleCodes[type] !== undefined) {
      entity[simpleCodes[type]] = value;
    } else {
      Object.assign(entity, (0, _common["default"])(type, value));
    }

    return entity;
  }, {
    type: TYPE,
    string: ''
  });
};

exports.process = process;
var _default = {
  TYPE: TYPE,
  process: process
};
exports["default"] = _default;