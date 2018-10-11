var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/setbrightness.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/colorHelper.js":
/*!****************************!*\
  !*** ./src/colorHelper.js ***!
  \****************************/
/*! exports provided: rgbToHsl, hslToRgb, rgbToHex, hexToRgb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHsl", function() { return rgbToHsl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslToRgb", function() { return hslToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return rgbToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return hexToRgb; });
function rgbToHsl(r, g, b) {
  r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b),
      min = Math.min(r, g, b);
  var h,
      s,
      l = (max + min) / 2;

  if (max == min) {
    h = s = 0;
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        h = (b - r) / d + 2;
        break;

      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return [h * 100 + 0.5 | 0, s * 100 + 0.5 | 0, l * 100 + 0.5 | 0];
}
function hslToRgb(h, s, l) {
  var r, g, b;
  h /= 100;
  s /= 100;
  l /= 100;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    var hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [r * 255, g * 255, b * 255];
}

function componentToHex(c) {
  c = Math.round(c);
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function hexToRgb(hex) {
  var rgb = hex.substr(1, 6);
  var r = parseInt(rgb.substr(0, 2), 16);
  var g = parseInt(rgb.substr(2, 2), 16);
  var b = parseInt(rgb.substr(4, 2), 16);
  return [r, g, b];
}

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/*! exports provided: Lighten, Darken, getSelectedLayer, getNumberToSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lighten", function() { return Lighten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Darken", function() { return Darken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedLayer", function() { return getSelectedLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumberToSet", function() { return getNumberToSet; });
/* harmony import */ var _colorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorHelper */ "./src/colorHelper.js");

function Lighten(color, type) {
  var rgbColor, result;

  if (type == "Shape") {
    rgbColor = Object(_colorHelper__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(color);
  } else {
    rgbColor = color;
  }

  var hslColor = _colorHelper__WEBPACK_IMPORTED_MODULE_0__["rgbToHsl"].apply(null, rgbColor);
  hslColor[2] += 5;

  if (hslColor[2] > 100) {
    hslColor[2] = 100;
  }

  rgbColor = _colorHelper__WEBPACK_IMPORTED_MODULE_0__["hslToRgb"].apply(null, hslColor);

  if (type == "Shape") {
    result = _colorHelper__WEBPACK_IMPORTED_MODULE_0__["rgbToHex"].apply(null, rgbColor);
  } else {
    result = rgbColor;
  }

  return result;
}
function Darken(color, type) {
  var rgbColor, result;

  if (type == "Shape") {
    rgbColor = Object(_colorHelper__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(color);
  } else {
    rgbColor = color;
  }

  var hslColor = _colorHelper__WEBPACK_IMPORTED_MODULE_0__["rgbToHsl"].apply(null, rgbColor);
  hslColor[2] -= 5;

  if (hslColor[2] < 0) {
    hslColor[2] = 0;
  }

  rgbColor = _colorHelper__WEBPACK_IMPORTED_MODULE_0__["hslToRgb"].apply(null, hslColor);

  if (type == "Shape") {
    result = _colorHelper__WEBPACK_IMPORTED_MODULE_0__["rgbToHex"].apply(null, rgbColor);
  } else {
    result = rgbColor;
  }

  return result;
} //Return Object {layer, type}

function getSelectedLayer(context) {
  var sketch = __webpack_require__(/*! sketch/dom */ "sketch/dom");

  var UI = __webpack_require__(/*! sketch/ui */ "sketch/ui");

  var Document = sketch.Document;
  var document = sketch.getSelectedDocument();
  var selection = document.selectedLayers;
  var Style = sketch.Style;

  if (selection.length <= 0) {
    UI.message("Select one layer");
    return;
  }

  var layer = selection.layers[0];
  var type = layer.type;
  return {
    layer: layer,
    type: type //
    // if (layer.type != sketch.Types.Shape) {
    //   UI.message("Select shape layer");
    //   return
    // }

  };
}
function getNumberToSet(l) {
  var UI = __webpack_require__(/*! sketch/ui */ "sketch/ui");

  var brightness = UI.getStringFromUser("Current Brightness " + l + ", you may set (0 → 100)", l);
  return +brightness;
}

/***/ }),

/***/ "./src/setbrightness.js":
/*!******************************!*\
  !*** ./src/setbrightness.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _colorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colorHelper */ "./src/colorHelper.js");


/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  var UI = __webpack_require__(/*! sketch/ui */ "sketch/ui");

  var sketch = __webpack_require__(/*! sketch/dom */ "sketch/dom");

  var color = "";
  var selected = Object(_helper__WEBPACK_IMPORTED_MODULE_0__["getSelectedLayer"])(context);
  var layer = selected.layer;
  var l;
  console.log('----------------');

  if (selected.type == 'ShapePath') {
    var fills = layer.style.fills;
    var index = 0;

    for (var i = fills.length - 1; i >= 0; i--) {
      if (fills[i].fill == "Color") {
        color = fills[i].color;
        index = i;
        break;
      }
    }

    var rgb = Object(_colorHelper__WEBPACK_IMPORTED_MODULE_1__["hexToRgb"])(color);
    var hsl = _colorHelper__WEBPACK_IMPORTED_MODULE_1__["rgbToHsl"].apply(null, rgb);
    l = hsl[2];
    var newL = Object(_helper__WEBPACK_IMPORTED_MODULE_0__["getNumberToSet"])(l);

    if (isNaN(newL)) {
      UI.message("Enter number, please");
      return;
    } else if (newL < 0 || newL > 100) {
      UI.message("Your number not correct, use 0-100");
      return;
    }

    hsl[2] = newL;
    rgb = _colorHelper__WEBPACK_IMPORTED_MODULE_1__["hslToRgb"].apply(null, hsl);
    color = _colorHelper__WEBPACK_IMPORTED_MODULE_1__["rgbToHex"].apply(null, rgb);
    fills[index].color = color + "ff";
    UI.message(color);
  } else if (selected.type == sketch.Types.Text) {
    var textLayer = context.selection.firstObject();
    var textColor = textLayer.textColor();
    var textR = Math.round(textColor.red() * 255);
    var textG = Math.round(textColor.green() * 255);
    var textB = Math.round(textColor.blue() * 255);

    var _hsl = _colorHelper__WEBPACK_IMPORTED_MODULE_1__["rgbToHsl"].apply(null, [textR, textG, textB]);

    l = _hsl[2];

    var _newL = Object(_helper__WEBPACK_IMPORTED_MODULE_0__["getNumberToSet"])(l);

    if (isNaN(_newL)) {
      UI.message("Enter number, please");
      return;
    } else if (_newL < 0 || _newL > 100) {
      UI.message("Your number not correct, use 0-100");
      return;
    }

    _hsl[2] = _newL;

    var _rgb = _colorHelper__WEBPACK_IMPORTED_MODULE_1__["hslToRgb"].apply(null, _hsl);

    console.log(";;;;;;;;;;;;;;;;");
    console.log(_hsl);
    console.log(_rgb);
    textLayer.textColor = MSColor.colorWithRed_green_blue_alpha(_rgb[0] / 255, _rgb[1] / 255, _rgb[2] / 255, 1.0);
  }
});

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=setbrightness.js.map