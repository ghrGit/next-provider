webpackHotUpdate("static/development/pages/index.js",{

/***/ "./compontents/visual.js":
/*!*******************************!*\
  !*** ./compontents/visual.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Visual; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_visual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/visual */ "./context/visual.js");
/* harmony import */ var _context_sub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/sub */ "./context/sub.js");
/* harmony import */ var _subProvide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subProvide */ "./compontents/subProvide.js");
var _jsxFileName = "/code/visual-client/compontents/visual.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




 // const SubCompontent = (props) => (
//   <div>
//     <div>{props.color}11111</div>
//     <div>{props.size}</div>
//   </div>fgdfgdf dfgdfgdfgdfgdgdfgdgdfgdfgdgdgd
// );

var Visual =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Visual, _React$Component);

  function Visual() {
    _classCallCheck(this, Visual);

    return _possibleConstructorReturn(this, _getPrototypeOf(Visual).apply(this, arguments));
  }

  _createClass(Visual, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_context_visual__WEBPACK_IMPORTED_MODULE_1__["visualContext"].Consumer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, function (_ref) {
        var color = _ref.color,
            size = _ref.size;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_subProvide__WEBPACK_IMPORTED_MODULE_3__["default"], {
          color: color,
          size: size,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        });
      });
    }
  }]);

  return Visual;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./compontents/visualProvide.js":
/*!**************************************!*\
  !*** ./compontents/visualProvide.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VisualProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _compontents_visual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../compontents/visual */ "./compontents/visual.js");
/* harmony import */ var _context_visual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/visual */ "./context/visual.js");
var _jsxFileName = "/code/visual-client/compontents/visualProvide.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var VisualProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VisualProvider, _React$Component);

  function VisualProvider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, VisualProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VisualProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      color: 'blue'
    });

    return _this;
  }

  _createClass(VisualProvider, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_context_visual__WEBPACK_IMPORTED_MODULE_2__["visualContext"].Provider, {
        value: {
          color: this.state.color,
          size: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_compontents_visual__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }));
    }
  }]);

  return VisualProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.9ed84cab099c74e941e2.hot-update.js.map