/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/game/style.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/game/style.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\r\n    margin: 0;\r\n    height: 100%;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    color: white;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#canvas {\r\n    width: 100%;\r\n    height: 100%;\r\n    /* display: block; */\r\n    visibility: hidden;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    /* width: 1; */\r\n    position: absolute;\r\n}\r\n\r\nmain {\r\n    /* height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center; */\r\n}\r\n\r\n#uiCanvas {\r\n    /* width: 100%;\r\n    height: 100%; */\r\n    display: block;\r\n\r\n    image-rendering: -moz-crisp-edges;\r\n    image-rendering: -webkit-crisp-edges;\r\n    image-rendering: pixelated;\r\n    image-rendering: crisp-edges;\r\n}\r\n\r\n#ui {\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100vw;\r\n    height: 50px;\r\n    opacity: 0.9;\r\n    background-color: black;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n#ui > * {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    min-width: 100px;\r\n}\r\n\r\n#levelEditor {\r\n    background-color: red;\r\n    opacity: 0.9;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    margin: 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n#levelEditor > * {\r\n    text-decoration: none;\r\n    color: white;\r\n}", "",{"version":3,"sources":["webpack://./src/game/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,YAAY;IACZ,4DAA4D;IAC5D,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI;;;0BAGsB;AAC1B;;AAEA;IACI;mBACe;IACf,cAAc;;IAEd,iCAAiC;IACjC,oCAAoC;IACpC,0BAA0B;IAC1B,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB","sourcesContent":["html, body {\r\n    margin: 0;\r\n    height: 100%;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    color: white;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#canvas {\r\n    width: 100%;\r\n    height: 100%;\r\n    /* display: block; */\r\n    visibility: hidden;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    /* width: 1; */\r\n    position: absolute;\r\n}\r\n\r\nmain {\r\n    /* height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center; */\r\n}\r\n\r\n#uiCanvas {\r\n    /* width: 100%;\r\n    height: 100%; */\r\n    display: block;\r\n\r\n    image-rendering: -moz-crisp-edges;\r\n    image-rendering: -webkit-crisp-edges;\r\n    image-rendering: pixelated;\r\n    image-rendering: crisp-edges;\r\n}\r\n\r\n#ui {\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100vw;\r\n    height: 50px;\r\n    opacity: 0.9;\r\n    background-color: black;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n#ui > * {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    min-width: 100px;\r\n}\r\n\r\n#levelEditor {\r\n    background-color: red;\r\n    opacity: 0.9;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    margin: 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n#levelEditor > * {\r\n    text-decoration: none;\r\n    color: white;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/game/style.css":
/*!****************************!*\
  !*** ./src/game/style.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/game/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/common/DecorationMap.ts":
/*!*************************************!*\
  !*** ./src/common/DecorationMap.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Map([
    ['demo', 0],
    ['deathcam', 1],
    ['puddle', 2],
    ['greenBarrel', 3],
    ['table', 4],
    ['blood', 5],
    ['flag', 6],
    ['standingLamp', 8],
    ['goldenLamp', 9],
    ['hangingSkeleton', 10],
    ['pillar', 12],
    ['bones1', 13],
    ['pots', 14],
    ['furnance', 15],
    ['greenPlant', 16],
    ['skeleton', 17],
    ['sink', 18],
    ['brownPlant', 19],
    ['urn', 20],
    ['bones2', 21],
    ['bones3', 22],
    ['table', 24],
    ['lamp', 25],
    ['morePots', 26],
    ['armor', 27],
    ['cage', 28],
    ['spears', 29],
    ['vines', 30],
    ['skeletonCage', 32],
    ['bones', 33],
    ['bed', 36],
    ['bucket', 40],
    ['bloodBones', 57],
    ['brownBarrel', 58],
    ['well', 59],
    ['emptyWell', 60],
]));


/***/ }),

/***/ "./src/common/NotCollidingFieldValues.ts":
/*!***********************************************!*\
  !*** ./src/common/NotCollidingFieldValues.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    'lamp',
    'goldenLamp',
    'puddle',
    'bucket',
    'skeleton',
    'bones',
    'bones1',
    'bones2',
    'bones3',
    'bloodBones',
    'enemy',
    'enemyXWalking',
    'enemyYWalking',
    'enemyUp',
    'enemyDown',
    'enemyLeft',
    'enemyRight',
    'dogFood',
    'food',
    'health',
    'ammo',
    'powerUp',
    'machinegun',
    'chaingun',
]);


/***/ }),

/***/ "./src/game/components/BetterAudio.ts":
/*!********************************************!*\
  !*** ./src/game/components/BetterAudio.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BetterAudio)
/* harmony export */ });
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./src/game/components/Config.ts");

class BetterAudio {
    constructor(sound, volume) {
        this.playLoading = false;
        this.audio = new Audio(sound);
        this.name = sound;
        this.audio.volume = volume || _Config__WEBPACK_IMPORTED_MODULE_0__["default"].soundVolume;
    }
    play() {
        this.audio.currentTime = 0;
        this.playLoading = true;
        this.playPromise = this.audio.play();
        this.playPromise.then(() => this.playLoading = false);
    }
    playIfNotPlayed() {
        // const isPlaying = this.audio.currentTime > 0 && !this.audio.paused && !this.audio.ended && this.audio.readyState > this.audio.HAVE_CURRENT_DATA;
        // if (!isPlaying) {
        //     this.audio.currentTime = 0
        //     this.audio.play();
        // }
        if (this.audio.currentTime == 0) {
            this.playLoading = true;
            this.playPromise = this.audio.play();
            this.playPromise.then(() => this.playLoading = false);
        }
    }
    pause() {
        if (this.playLoading) {
            this.playPromise.then(() => this.audio.pause());
        }
        else {
            this.audio.pause();
        }
    }
    loop() {
        this.audio.loop = true;
    }
}


/***/ }),

/***/ "./src/game/components/Camera.ts":
/*!***************************************!*\
  !*** ./src/game/components/Camera.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Camera)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/game/components/utils/index.ts");
/* harmony import */ var _shapes_level_Door__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shapes/level/Door */ "./src/game/components/shapes/level/Door.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Config */ "./src/game/components/Config.ts");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input */ "./src/game/components/Input.ts");
/* harmony import */ var _BetterAudio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BetterAudio */ "./src/game/components/BetterAudio.ts");
/* harmony import */ var _sounds_WSND0014_wav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sounds/WSND0014.wav */ "./src/game/sounds/WSND0014.wav");
/* harmony import */ var _sounds_DSDEATH_wav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sounds/DSDEATH.wav */ "./src/game/sounds/DSDEATH.wav");







class Camera {
    constructor(gl, program) {
        this.transform = new _utils__WEBPACK_IMPORTED_MODULE_0__.Transform;
        this.killer = null;
        this.audioHit = new _BetterAudio__WEBPACK_IMPORTED_MODULE_4__["default"](_sounds_WSND0014_wav__WEBPACK_IMPORTED_MODULE_5__);
        this.audioDeath = new _BetterAudio__WEBPACK_IMPORTED_MODULE_4__["default"](_sounds_DSDEATH_wav__WEBPACK_IMPORTED_MODULE_6__);
        this.fov = 60;
        this.zNear = _Config__WEBPACK_IMPORTED_MODULE_2__["default"].gridSize / 64;
        this.zFar = _Config__WEBPACK_IMPORTED_MODULE_2__["default"].gridSize * 48;
        this.rotationSpeed = 1.6;
        this.movementSpeed = _Config__WEBPACK_IMPORTED_MODULE_2__["default"].gridSize * 5;
        this.collisionRadius = _Config__WEBPACK_IMPORTED_MODULE_2__["default"].gridSize / 3;
        this.interactionDistance = _Config__WEBPACK_IMPORTED_MODULE_2__["default"].gridSize * 1.5;
        this.blockedDirections = [];
        this.gl = gl;
        this.updateProjectionMatrix();
        this.transform.rotation.y = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.degToRad)(90);
    }
    get matrix() {
        let cameraMatrix = _utils__WEBPACK_IMPORTED_MODULE_0__.m4.identity;
        cameraMatrix = _utils__WEBPACK_IMPORTED_MODULE_0__.m4.translate(cameraMatrix, this.transform.position.inverted);
        cameraMatrix = _utils__WEBPACK_IMPORTED_MODULE_0__.m4.yRotate(cameraMatrix, this.transform.rotation.y);
        return cameraMatrix;
    }
    update(deltaTime) {
        this.rotate(_Input__WEBPACK_IMPORTED_MODULE_3__["default"].instance.rotation * deltaTime);
        let speed = _Input__WEBPACK_IMPORTED_MODULE_3__["default"].instance.direction.multiply(deltaTime);
        if (_Input__WEBPACK_IMPORTED_MODULE_3__["default"].instance.sprinting) {
            speed = speed.multiply(5);
        }
        if (_Input__WEBPACK_IMPORTED_MODULE_3__["default"].instance.noclip) {
            this.move(speed);
        }
        else {
            this.move(speed, this.collidingShapes);
        }
    }
    nearest(shapes) {
        const sorted = shapes.sort((a, b) => {
            return (a.initialTransform.position.distanceTo(this.transform.position) -
                b.initialTransform.position.distanceTo(this.transform.position));
        });
        return sorted[0];
    }
    inInteractionDistance(shape) {
        return shape.initialTransform.position.distanceTo(this.transform.position) <= this.interactionDistance;
    }
    rotate(rotation) {
        this.transform.rotation.y += rotation * this.rotationSpeed;
    }
    move(direction, collidingShapes) {
        const transformMatrix = _utils__WEBPACK_IMPORTED_MODULE_0__.m4.yRotation(-this.transform.rotation.y);
        let deltaPosition = direction.inverted.multiply(this.movementSpeed).transformMat4(transformMatrix);
        for (let blockedDirection of this.blockedDirections) {
            // corner shorter side selection
            if (blockedDirection.x && blockedDirection.z) {
                if (Math.abs(blockedDirection.x) > Math.abs(blockedDirection.z)) {
                    blockedDirection.x = 0;
                }
                else {
                    blockedDirection.z = 0;
                }
            }
            // different sign
            if (blockedDirection.z * deltaPosition.z < 0)
                deltaPosition.z = 0;
            if (blockedDirection.x * deltaPosition.x < 0)
                deltaPosition.x = 0;
        }
        if (collidingShapes) {
            this.checkCollisions(collidingShapes.filter(c => c.transform.position.distanceTo(this.transform.position) < _Config__WEBPACK_IMPORTED_MODULE_2__["default"].gridSize * 2));
        }
        else {
            this.blockedDirections = [];
        }
        this.transform.position = this.transform.position.add(deltaPosition);
    }
    angleTo(targetPosition) {
        let toTargetDir = targetPosition.substract(this.transform.position).yZeroed.normalize;
        let lookingAtDir = _utils__WEBPACK_IMPORTED_MODULE_0__.Vec3.fromAngle(this.transform.rotation.y);
        let toTargetAngle = Math.atan2(toTargetDir.z, toTargetDir.x);
        let lookingAtAngle = Math.atan2(lookingAtDir.z, lookingAtDir.x);
        let angleDiff = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.radToDeg)(lookingAtAngle - toTargetAngle);
        if (angleDiff > 180)
            angleDiff -= 360;
        if (angleDiff < -180)
            angleDiff += 360;
        return angleDiff;
    }
    cuboidCollisionSide(cuboid) {
        const cameraToWall = this.transform.position.yZeroed.to(cuboid.transform.position.yZeroed);
        const cameraToWallDirection = cameraToWall.normalize;
        let steps = 1;
        if (cuboid instanceof _shapes_level_Door__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            steps = 10;
        }
        let collisionCandidates = [this.transform.position];
        for (let i = this.collisionRadius; i > 0; i -= this.collisionRadius / steps) {
            const currentRadius = i;
            const collidingPointTranslation = cameraToWallDirection.multiply(currentRadius);
            const collidingPoint = this.transform.position.add(collidingPointTranslation);
            collisionCandidates.push(collidingPoint);
        }
        for (let candidate of collisionCandidates) {
            if (cuboid.bb.isColliding(candidate)) {
                let collisionSide = cuboid.bb.nearestDistanceDirection(this.transform.position);
                if (collisionSide.x && collisionSide.z) {
                    const nearestCorner = cuboid.bb.nearestCorner(candidate);
                    const nearestCornerDiff = this.transform.position.substract(nearestCorner).abs;
                    if (nearestCornerDiff.x > nearestCornerDiff.z) {
                        collisionSide.z = 0;
                    }
                    else {
                        collisionSide.x = 0;
                    }
                }
                // log('col side', collisionSide)
                // this.transform.position = this.transform.position.add(collisionSide)
                return collisionSide;
            }
        }
        return null;
    }
    checkCollisions(shapes) {
        const collidingSides = shapes
            .map(c => this.cuboidCollisionSide(c))
            .filter(side => side !== null);
        // const blockedDirections = collidingSides.map(side => side.inverted)
        const blockedDirections = collidingSides;
        const uniqueBlockedDirections = blockedDirections.filter((direction, index, self) => index === self.findIndex(d => d.equals(direction)));
        this.blockedDirections = uniqueBlockedDirections;
    }
    isLookingAt(enemy) {
        const lookingAtDir = _utils__WEBPACK_IMPORTED_MODULE_0__.Vec3.fromAngle(this.transform.rotation.y);
        const targetXDir = _utils__WEBPACK_IMPORTED_MODULE_0__.Vec3.up.cross(lookingAtDir).normalize;
        const enemyLeft = enemy.transform.position.add(targetXDir.multiply(enemy.texturedSize.x / 2));
        const enemyRight = enemy.transform.position.substract(targetXDir.multiply(enemy.texturedSize.x / 2));
        const angleLeft = this.angleTo(enemyLeft);
        const angleRight = this.angleTo(enemyRight);
        const lookingAtEnemy = 0 < angleLeft && angleLeft < 90 && -90 < angleRight && angleRight < 0;
        return lookingAtEnemy;
    }
    get viewProjectionMatrix() {
        return _utils__WEBPACK_IMPORTED_MODULE_0__.m4.multiply(this.matrix, this.projectionMatrix);
    }
    updateProjectionMatrix() {
        const fieldOfViewRadians = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.degToRad)(this.fov);
        // const aspect = this.gl.canvas.clientWidth / this.gl.canvas.clientHeight
        const aspect = 2;
        const zNear = this.zNear;
        const zFar = this.zFar;
        this.projectionMatrix = _utils__WEBPACK_IMPORTED_MODULE_0__.m4.perspective(fieldOfViewRadians, aspect, zNear, zFar);
    }
    lookAt(target) {
        let toTargetDir = target.substract(this.transform.position).yZeroed.normalize;
        let toTargetAngle = Math.atan2(toTargetDir.z, toTargetDir.x);
        this.transform.rotation.y = toTargetAngle + (0,_utils__WEBPACK_IMPORTED_MODULE_0__.degToRad)(90);
    }
    lookAtKillerStep(deltaTime) {
        const angle = this.angleTo(this.killer.transform.position);
        if (Math.abs(angle) < Math.abs((0,_utils__WEBPACK_IMPORTED_MODULE_0__.radToDeg)(this.rotationSpeed * deltaTime))) {
            this.lookAt(this.killer.transform.position);
        }
        else {
            if (angle > 0) {
                this.rotate(-1 * deltaTime);
            }
            else if (angle < 0) {
                this.rotate(1 * deltaTime);
            }
        }
    }
}


/***/ }),

/***/ "./src/game/components/Config.ts":
/*!***************************************!*\
  !*** ./src/game/components/Config.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    gridSize: 64,
    uiScale: 2,
    debug: false,
    // soundVolume: 0.05,
    // musicVolume: 0.03,
    soundVolume: 1,
    musicVolume: 0.6,
});


/***/ }),

/***/ "./src/game/components/Game.ts":
/*!*************************************!*\
  !*** ./src/game/components/Game.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _programs_ColorProgram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./programs/ColorProgram */ "./src/game/components/programs/ColorProgram.ts");
/* harmony import */ var _programs_TextureProgram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./programs/TextureProgram */ "./src/game/components/programs/TextureProgram.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/game/components/utils/index.ts");
/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Camera */ "./src/game/components/Camera.ts");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Input */ "./src/game/components/Input.ts");
/* harmony import */ var _Textures__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Textures */ "./src/game/components/Textures.ts");
/* harmony import */ var _Level__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Level */ "./src/game/components/Level.ts");
/* harmony import */ var _shapes_ui_Crosshair__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shapes/ui/Crosshair */ "./src/game/components/shapes/ui/Crosshair.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Config */ "./src/game/components/Config.ts");
/* harmony import */ var _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shapes/ui/UI */ "./src/game/components/shapes/ui/UI.ts");
/* harmony import */ var _Raycaster__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Raycaster */ "./src/game/components/Raycaster.ts");











class Game {
    constructor() {
        this.fixedUpdateInterval = 20;
        this.currentLevel = 1;
        this.state = "startScreen";
        this.firstLevelLoaded = false;
        this.initWebgl();
        this.colorProgram = new _programs_ColorProgram__WEBPACK_IMPORTED_MODULE_0__.ColorProgram(this.gl);
        this.textureProgram = new _programs_TextureProgram__WEBPACK_IMPORTED_MODULE_1__.TextureProgram(this.gl);
        this.camera = new _Camera__WEBPACK_IMPORTED_MODULE_3__["default"](this.gl, this.textureProgram);
        this.camera.updateProjectionMatrix();
        this.textures = new _Textures__WEBPACK_IMPORTED_MODULE_5__["default"](this.gl);
        this.level = new _Level__WEBPACK_IMPORTED_MODULE_6__["default"](this.gl, this.textureProgram, this.colorProgram);
        this.crosshair = new _shapes_ui_Crosshair__WEBPACK_IMPORTED_MODULE_7__["default"](this.gl, this.colorProgram);
        this.loadLevel(this.currentLevel);
    }
    loadLevel(number) {
        this.level.load(number, () => {
            let shapes = [];
            shapes.push(...this.level.enemies.map(enemy => enemy.loot));
            shapes.push(...this.level.enemies.map(enemy => enemy.tempFlag));
            shapes.push(...this.level.shapes);
            this.textures.load(shapes, () => {
                this.camera.transform.position = this.level.playerPosition;
                this.camera.initialTransform = this.camera.transform.clone();
                this.camera.collidingShapes = [...this.level.collidingCuboids, ...this.level.decorations.filter(decoration => decoration.bb)];
                if (!this.firstLevelLoaded) {
                    this.firstLevelLoaded = true;
                    this.startGameLoop();
                }
            });
        });
    }
    startGameLoop() {
        let then = 0;
        const render = (now) => {
            now *= 0.001; // convert to seconds
            const deltaTime = now - then;
            then = now;
            this.draw(deltaTime);
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
        const fixedDeltaTime = this.fixedUpdateInterval * 0.001;
        setInterval(() => {
            this.fixedUpdate(fixedDeltaTime);
        }, this.fixedUpdateInterval);
    }
    fixedUpdate(deltaTime) {
        if (_Input__WEBPACK_IMPORTED_MODULE_4__["default"].instance.interacting) {
            const nearestInteractable = this.camera.nearest(this.level.interactables
                .filter(i => i.canInteract)
                .filter(i => {
                const angle = this.camera.angleTo(i.transform.position);
                return Math.abs(angle) < 60;
            }));
            if (nearestInteractable && this.camera.inInteractionDistance(nearestInteractable)) {
                nearestInteractable.toggle();
                _Input__WEBPACK_IMPORTED_MODULE_4__["default"].instance.justInteracted = true;
            }
        }
        this.camera.update(deltaTime);
        for (let pickup of this.level.pickups.filter(pickup => !pickup.pickedUp)) {
            if (this.camera.transform.position.horizontalDistanceTo(pickup.transform.position) <= pickup.pickupRange) {
                pickup.pickUp(this.camera);
            }
        }
        for (let door of this.level.doors) {
            door.update(deltaTime);
            if (door.opened) {
                door.tryToClose(deltaTime, this.camera, this.level.enemies);
            }
        }
        for (let secretWall of this.level.secretWalls) {
            secretWall.update(deltaTime, this.camera);
        }
        const raycaster = _Raycaster__WEBPACK_IMPORTED_MODULE_10__["default"].fromDir(this.camera.transform.position, _utils__WEBPACK_IMPORTED_MODULE_2__.Vec3.fromAngle(this.camera.transform.rotation.y));
        const shapeLookedAt = raycaster.nextShape(this.level.collidingCuboids);
        for (let enemy of this.level.enemies) {
            enemy.update(deltaTime, this.camera);
            if (this.camera.isLookingAt(enemy) && shapeLookedAt) {
                const enemyDistance = this.camera.transform.position.horizontalDistanceTo(enemy.transform.position);
                const shapeLookedAtDistance = this.camera.transform.position.horizontalDistanceTo(shapeLookedAt.transform.position);
                if (enemyDistance < shapeLookedAtDistance) {
                    if (_shapes_ui_UI__WEBPACK_IMPORTED_MODULE_9__["default"].instance.weapons.currentWeapon.justShot) {
                        const distance = this.camera.transform.position.horizontalDistanceTo(enemy.transform.position);
                        if (distance <= _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_9__["default"].instance.weapons.currentWeapon.range && !enemy.isDead) {
                            enemy.damage(_shapes_ui_UI__WEBPACK_IMPORTED_MODULE_9__["default"].instance.weapons.currentWeapon.damage);
                            _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_9__["default"].instance.score += enemy.score;
                        }
                        if (enemy.isDead) {
                            this.level.spawnLoot(enemy);
                        }
                    }
                }
            }
            if (enemy.isDead) {
                enemy.followingPlayer = null;
            }
            else {
                const angleDiff = enemy.rotateTexture(this.camera.transform.position);
                if (!enemy.followingPlayer) {
                    let startFollowing = false;
                    // inShotNoticeDistance(camera: Camera) {
                    //     return this.transform.position.horizontalDistanceTo(camera.transform.position) <= this.shotNoticeDistance
                    // }
                    const distance = enemy.transform.position.horizontalDistanceTo(this.camera.transform.position);
                    if (enemy.canSee(this.camera.transform.position, this.level.collidingCuboids)) {
                        if (_shapes_ui_UI__WEBPACK_IMPORTED_MODULE_9__["default"].instance.weapons.currentWeapon.justShot) {
                            startFollowing = true;
                        }
                        else if (Math.abs(angleDiff) <= 90) {
                            startFollowing = true;
                        }
                        else if (distance <= _Config__WEBPACK_IMPORTED_MODULE_8__["default"].gridSize * 2) {
                            startFollowing = true;
                        }
                    }
                    if (startFollowing) {
                        enemy.followingPlayer = this.camera;
                        if (_shapes_ui_UI__WEBPACK_IMPORTED_MODULE_9__["default"].instance.health > 0) {
                            enemy.audioSight.play();
                        }
                        enemy.state = "walking";
                    }
                }
                const canShot = enemy.tryToShoot(this.camera, this.level.collidingCuboids);
                // console.log(enemy.state)
                if (!canShot) {
                    enemy.makeStepTowardsPlayer(deltaTime, this.level.doors);
                }
                enemy.makeStepIfWalking(deltaTime, this.level.collidingCuboids);
            }
        }
        if (_shapes_ui_UI__WEBPACK_IMPORTED_MODULE_9__["default"].instance.health == 0 && _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_9__["default"].instance.state == "game") {
            this.camera.audioDeath.play();
            _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_9__["default"].instance.state = "dead";
            setTimeout(() => {
                _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_9__["default"].instance.takeLife();
                this.camera.transform = this.camera.initialTransform;
                _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_9__["default"].instance.state = "game";
                this.camera.killer = null;
                this.loadLevel(this.currentLevel);
            }, 4000);
        }
        if (this.camera.killer) {
            this.camera.lookAtKillerStep(deltaTime);
        }
        _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_9__["default"].instance.update(deltaTime);
        // console.log(this.state)
        // console.log(UI.instance.health)
    }
    draw(deltaTime) {
        this.setDrawSettings();
        // this.level.shapes.forEach(s => s.updateBuffers())
        // this.crosshair.draw(this.camera.projectionMatrix)
        this.level.floor.draw(this.camera.viewProjectionMatrix);
        this.level.ceiling.draw(this.camera.viewProjectionMatrix);
        for (let pickup of this.level.pickups.filter(pickup => !pickup.pickedUp)) {
            pickup.lookAtCamera(this.camera.transform.rotation.y);
            pickup.draw(this.camera.viewProjectionMatrix);
        }
        for (let decoration of this.level.decorations) {
            decoration.lookAtCamera(this.camera.transform.rotation.y);
            decoration.draw(this.camera.viewProjectionMatrix);
        }
        if (_Input__WEBPACK_IMPORTED_MODULE_4__["default"].instance.renderWalls) {
            for (let wall of this.level.walls) {
                wall.draw(this.camera.viewProjectionMatrix);
            }
            for (let wall of this.level.secretWalls) {
                wall.draw(this.camera.viewProjectionMatrix);
            }
        }
        for (let exit of this.level.exits) {
            exit.draw(this.camera.viewProjectionMatrix);
        }
        for (let door of this.level.doors) {
            door.draw(this.camera.viewProjectionMatrix);
        }
        for (let enemy of this.level.enemies) {
            enemy.lookAtCamera(this.camera.transform.rotation.y);
            enemy.draw(this.camera.viewProjectionMatrix);
            if (_Config__WEBPACK_IMPORTED_MODULE_8__["default"].debug) {
                for (let field of enemy.pathfinderFields) {
                    enemy.tempFlag.transform.position = field.subGridPos;
                    enemy.tempFlag.lookAtCamera(this.camera.transform.rotation.y);
                    enemy.tempFlag.draw(this.camera.viewProjectionMatrix);
                }
            }
        }
        _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_9__["default"].instance.draw(this.canvas);
    }
    initWebgl() {
        this.canvas = document.getElementById("canvas");
        this.canvas.width = 608 * _Config__WEBPACK_IMPORTED_MODULE_8__["default"].uiScale;
        this.canvas.height = 304 * _Config__WEBPACK_IMPORTED_MODULE_8__["default"].uiScale;
        _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_9__["default"].instance.init();
        this.gl = this.canvas.getContext("webgl");
        if (!this.gl) {
            alert("No webgl for you");
        }
        this.gl.clearColor(0, 0, 0, 0);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        this.gl.enable(this.gl.BLEND);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.enable(this.gl.DEPTH_TEST);
    }
    setDrawSettings() {
        this.resizeCanvasToDisplaySize(this.gl.canvas);
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        _Input__WEBPACK_IMPORTED_MODULE_4__["default"].instance.update();
    }
    resizeCanvasToDisplaySize(canvas) {
        // const displayWidth = canvas.clientWidth
        // const displayHeight = canvas.clientHeight
        const displayWidth = 608 * _Config__WEBPACK_IMPORTED_MODULE_8__["default"].uiScale;
        const displayHeight = 304 * _Config__WEBPACK_IMPORTED_MODULE_8__["default"].uiScale;
        const resizeNeeded = canvas.width !== displayWidth || canvas.height !== displayHeight;
        if (resizeNeeded) {
            canvas.width = displayWidth;
            canvas.height = displayHeight;
            this.camera.updateProjectionMatrix();
        }
        return resizeNeeded;
    }
}


/***/ }),

/***/ "./src/game/components/Input.ts":
/*!**************************************!*\
  !*** ./src/game/components/Input.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./src/game/components/Config.ts");
/* harmony import */ var _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shapes/ui/UI */ "./src/game/components/shapes/ui/UI.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/game/components/utils/index.ts");
var _a;



class Input {
    constructor() {
        this.direction = _utils__WEBPACK_IMPORTED_MODULE_2__.Vec3.zero;
        this.rotation = 0;
        this.sprinting = false;
        this.shooting = false;
        this.shot = false;
        this.justShot = true;
        this.interacting = false;
        this.justInteracted = false;
        this.noclip = false;
        this.renderWalls = true;
        this.justChangedRenderWalls = false;
        this.lastNumber = null;
        this.pressedKeys = [];
        this.addKeyUpListener();
        this.addKeyDownListener();
        this.addAdditionalListeners();
    }
    get inputsBlocked() {
        // return !UI.instance.health || UI.instance.showingMenu
        return _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_1__["default"].instance.state != "game";
    }
    update() {
        this.direction = _utils__WEBPACK_IMPORTED_MODULE_2__.Vec3.zero;
        this.rotation = 0;
        this.shooting = false;
        this.shot = false;
        this.interacting = false;
        this.noclip = false;
        this.sprinting = false;
        this.lastNumber = null;
        // console.log(this.inputsBlocked)
        if (!this.inputsBlocked) {
            if ((this.isPressed('ArrowUp') || this.isPressed('KeyW')) && !this.isPressed('KeyS') && !this.isPressed('ArrowDown'))
                this.direction.z = 1;
            if ((this.isPressed('ArrowDown') || this.isPressed('KeyS')) && !this.isPressed('KeyW') && !this.isPressed('ArrowUp'))
                this.direction.z = -1;
            // if (this.isPressed('KeyA') && !this.isPressed('KeyD')) this.direction.x = 1
            // if (this.isPressed('KeyD') && !this.isPressed('KeyA')) this.direction.x = -1
            this.direction = this.direction.normalize;
            if ((this.isPressed('KeyA') || this.isPressed('ArrowLeft')) && !this.isPressed('ArrowRight') && !this.isPressed('KeyD'))
                this.rotation = -1;
            if ((this.isPressed('KeyD') || this.isPressed('ArrowRight')) && !this.isPressed('ArrowLeft') && !this.isPressed('KeyA'))
                this.rotation = 1;
            if (this.isPressed('Space'))
                this.shooting = true;
            if (this.isPressed('Space')) {
                if (!this.justShot) {
                    this.shot = true;
                }
            }
            else {
                this.justShot = false;
            }
            if (this.isPressed('KeyE')) {
                if (!this.justInteracted) {
                    this.interacting = true;
                }
            }
            else {
                this.justInteracted = false;
            }
            if (_Config__WEBPACK_IMPORTED_MODULE_0__["default"].debug) {
                if (this.isPressed('KeyC')) {
                    this.noclip = true;
                }
                if (this.isPressed('ShiftLeft')) {
                    this.sprinting = true;
                }
            }
            if (this.isPressed('Digit0'))
                this.lastNumber = 0;
            if (this.isPressed('Digit1'))
                this.lastNumber = 1;
            if (this.isPressed('Digit2'))
                this.lastNumber = 2;
            if (this.isPressed('Digit3'))
                this.lastNumber = 3;
            if (this.isPressed('Digit4'))
                this.lastNumber = 4;
            if (this.isPressed('Digit5'))
                this.lastNumber = 5;
            if (this.isPressed('Digit6'))
                this.lastNumber = 6;
            if (this.isPressed('Digit7'))
                this.lastNumber = 7;
            if (this.isPressed('Digit8'))
                this.lastNumber = 8;
            if (this.isPressed('Digit9'))
                this.lastNumber = 9;
        }
    }
    isPressed(key) {
        return this.pressedKeys.includes(key);
    }
    addKeyUpListener() {
        addEventListener('keyup', e => {
            if (this.pressedKeys.includes(e.code)) {
                this.pressedKeys = this.pressedKeys.filter(key => key != e.code);
            }
        });
    }
    addKeyDownListener() {
        addEventListener('keydown', e => {
            if (!this.pressedKeys.includes(e.code)) {
                this.pressedKeys.push(e.code);
            }
        });
    }
    addAdditionalListeners() {
        addEventListener('keydown', e => {
            if (e.code == "Minus") {
                _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale -= 0.1;
            }
            else if (e.code == "Equal") {
                _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale += 0.1;
            }
            else if (e.code == "Backspace") {
                _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale = 1;
            }
            else if (e.code == "KeyV" && _Config__WEBPACK_IMPORTED_MODULE_0__["default"].debug) {
                this.renderWalls = !this.renderWalls;
            }
            else if (e.code == 'Space' || e.code == "Enter") {
                if (_shapes_ui_UI__WEBPACK_IMPORTED_MODULE_1__["default"].instance.state == "startScreen") {
                    _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_1__["default"].instance.state = "menu";
                    _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_1__["default"].instance.audioSplash.pause();
                    _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_1__["default"].instance.audioMenu.play();
                }
                else if (_shapes_ui_UI__WEBPACK_IMPORTED_MODULE_1__["default"].instance.state == "menu") {
                    if (_shapes_ui_UI__WEBPACK_IMPORTED_MODULE_1__["default"].instance.menu.option == 0) {
                        _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_1__["default"].instance.menu.audioSelect.play();
                        _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_1__["default"].instance.audioLevel.play();
                        _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_1__["default"].instance.audioMenu.pause();
                        _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_1__["default"].instance.state = "loading";
                        // UI.instance.state = "game"
                    }
                    else if (_shapes_ui_UI__WEBPACK_IMPORTED_MODULE_1__["default"].instance.menu.option == 8) {
                        _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_1__["default"].instance.menu.audioSelect.play();
                        _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_1__["default"].instance.audioMenu.pause();
                        _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_1__["default"].instance.audioSplash.play();
                        _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_1__["default"].instance.state = "startScreen";
                    }
                }
            }
            else if (e.code == "Escape") {
                if (_shapes_ui_UI__WEBPACK_IMPORTED_MODULE_1__["default"].instance.state == "menu") {
                    _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_1__["default"].instance.menu.audioBack.play();
                    _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_1__["default"].instance.audioMenu.pause();
                    _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_1__["default"].instance.audioSplash.play();
                    _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_1__["default"].instance.state = "startScreen";
                }
            }
        });
    }
}
_a = Input;
Input.instance = new _a;


/***/ }),

/***/ "./src/game/components/Level.ts":
/*!**************************************!*\
  !*** ./src/game/components/Level.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Level)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/game/components/utils/index.ts");
/* harmony import */ var _shapes_level_Wall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shapes/level/Wall */ "./src/game/components/shapes/level/Wall.ts");
/* harmony import */ var _shapes_level_Enemy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shapes/level/Enemy */ "./src/game/components/shapes/level/Enemy.ts");
/* harmony import */ var _shapes_level_Door__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shapes/level/Door */ "./src/game/components/shapes/level/Door.ts");
/* harmony import */ var _shapes_level_Plane__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shapes/level/Plane */ "./src/game/components/shapes/level/Plane.ts");
/* harmony import */ var _shapes_level_pickups_Ammo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shapes/level/pickups/Ammo */ "./src/game/components/shapes/level/pickups/Ammo.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Config */ "./src/game/components/Config.ts");
/* harmony import */ var _shapes_level_pickups_DogFood__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shapes/level/pickups/DogFood */ "./src/game/components/shapes/level/pickups/DogFood.ts");
/* harmony import */ var _shapes_level_pickups_Food__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shapes/level/pickups/Food */ "./src/game/components/shapes/level/pickups/Food.ts");
/* harmony import */ var _shapes_level_pickups_HealthPack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shapes/level/pickups/HealthPack */ "./src/game/components/shapes/level/pickups/HealthPack.ts");
/* harmony import */ var _shapes_level_pickups_Machinegun__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shapes/level/pickups/Machinegun */ "./src/game/components/shapes/level/pickups/Machinegun.ts");
/* harmony import */ var _shapes_level_decorations_Decoration__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shapes/level/decorations/Decoration */ "./src/game/components/shapes/level/decorations/Decoration.ts");
/* harmony import */ var _common_DecorationMap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/DecorationMap */ "./src/common/DecorationMap.ts");
/* harmony import */ var _common_NotCollidingFieldValues__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/NotCollidingFieldValues */ "./src/common/NotCollidingFieldValues.ts");
/* harmony import */ var _shapes_level_pickups_GoldenCross__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shapes/level/pickups/GoldenCross */ "./src/game/components/shapes/level/pickups/GoldenCross.ts");
/* harmony import */ var _shapes_level_pickups_GoldenCup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shapes/level/pickups/GoldenCup */ "./src/game/components/shapes/level/pickups/GoldenCup.ts");
/* harmony import */ var _shapes_level_pickups_GoldenBox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shapes/level/pickups/GoldenBox */ "./src/game/components/shapes/level/pickups/GoldenBox.ts");
/* harmony import */ var _shapes_level_pickups_GoldenCrown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shapes/level/pickups/GoldenCrown */ "./src/game/components/shapes/level/pickups/GoldenCrown.ts");
/* harmony import */ var _shapes_level_pickups_PowerUp__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shapes/level/pickups/PowerUp */ "./src/game/components/shapes/level/pickups/PowerUp.ts");
/* harmony import */ var _Pathfinder__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Pathfinder */ "./src/game/components/Pathfinder.ts");
/* harmony import */ var _shapes_level_Lever__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shapes/level/Lever */ "./src/game/components/shapes/level/Lever.ts");
/* harmony import */ var _shapes_level_WallSecretDoor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shapes/level/WallSecretDoor */ "./src/game/components/shapes/level/WallSecretDoor.ts");
/* harmony import */ var _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shapes/ui/UI */ "./src/game/components/shapes/ui/UI.ts");
/* harmony import */ var _shapes_level_pickups_PointItem__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shapes/level/pickups/PointItem */ "./src/game/components/shapes/level/pickups/PointItem.ts");
























class Level {
    constructor(gl, textureProgram, colorProgram) {
        this.enemies = [];
        this.walls = [];
        this.secretWalls = [];
        this.doors = [];
        this.shapes = [];
        this.collidingCuboids = [];
        this.interactables = [];
        this.pickups = [];
        this.decorations = [];
        this.gl = gl;
        this.textureProgram = textureProgram;
        this.colorProgram = colorProgram;
    }
    load(level, callback) {
        this.loadLevel(level, () => {
            this.createObjects();
            _Pathfinder__WEBPACK_IMPORTED_MODULE_19__["default"].instance.prepareLevel(this);
            callback === null || callback === void 0 ? void 0 : callback();
        });
    }
    spawnLoot(enemy) {
        if (enemy.loot) {
            this.pickups.push(enemy.loot);
            enemy.loot.transform.position = enemy.transform.position.clone();
            // enemy.loot.transform.position.x += 30
            // enemy.loot.transform.position.z += 30
            enemy.loot.setInitialState();
        }
    }
    get verticesCount() {
        return this.shapes.map(el => el.verticesCount).reduce((a, b) => a + b);
    }
    loadLevel(number, callback) {
        __webpack_require__("./src/game/levels lazy recursive ^\\.\\/.*\\.json$")(`./${number}.json`)
            .then(({ default: level }) => {
            this.width = level.width;
            this.height = level.height;
            this.center = new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec3(this.width * _Config__WEBPACK_IMPORTED_MODULE_6__["default"].gridSize / 2, 0, this.height * _Config__WEBPACK_IMPORTED_MODULE_6__["default"].gridSize / 2);
            this.fields = JSON.parse(JSON.stringify(level.fields));
            this.checkWallsDirections();
            this.changeWallsNeighboursTextures();
            this.applyGridSize();
            this.gridFields = JSON.parse(JSON.stringify(level.fields));
            callback === null || callback === void 0 ? void 0 : callback();
        });
    }
    checkWallsDirections() {
        for (let door of this.fields.filter(f => f.value == 'door' || f.value == "exitDoor" || (f.value.toLowerCase().includes('secret') && f.value.toLowerCase().includes('wall')))) {
            const horizontalNeighbours = this.fields
                .filter(f => f.y == door.y && (f.x == door.x + 1 || f.x == door.x - 1))
                .filter(f => f.value.toLowerCase().includes('wall'));
            const verticalNeighbours = this.fields
                .filter(f => f.x == door.x && (f.y == door.y + 1 || f.y == door.y - 1))
                .filter(f => f.value.toLowerCase().includes('wall'));
            if (horizontalNeighbours.length == 2 && verticalNeighbours.length == 0) {
                door.rotation = 0;
            }
            else if (horizontalNeighbours.length == 0 && verticalNeighbours.length == 2) {
                door.rotation = 270;
            }
        }
    }
    changeWallsNeighboursTextures() {
        for (let door of this.fields.filter(f => f.value == 'door' || f.value == 'exitDoor')) {
            for (let direction of [[0, -1], [0, 1], [-1, 0], [1, 0]]) {
                const neighbour = this.fields.find(f => {
                    return f.x == door.x + direction[0] && f.y == door.y + direction[1];
                });
                if (neighbour) {
                    neighbour.wallDirection = direction;
                }
            }
        }
    }
    applyGridSize() {
        for (let field of this.fields) {
            field.x = (field.x * _Config__WEBPACK_IMPORTED_MODULE_6__["default"].gridSize) + _Config__WEBPACK_IMPORTED_MODULE_6__["default"].gridSize / 2;
            field.y = (field.y * _Config__WEBPACK_IMPORTED_MODULE_6__["default"].gridSize) + _Config__WEBPACK_IMPORTED_MODULE_6__["default"].gridSize / 2;
        }
    }
    createObjects() {
        const playerPositionData = this.fields.find(f => f.value == 'player');
        this.playerPosition = new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec3(playerPositionData.x, 0, playerPositionData.y);
        this.walls = this.getLevelObjectsList('wall', _shapes_level_Wall__WEBPACK_IMPORTED_MODULE_1__["default"]);
        this.enemies = this.getLevelObjectsList('enemy', _shapes_level_Enemy__WEBPACK_IMPORTED_MODULE_2__["default"]);
        this.doors = this.getLevelObjectsList('door', _shapes_level_Door__WEBPACK_IMPORTED_MODULE_3__["default"]);
        const ammos = this.getLevelObjectsList('ammo', _shapes_level_pickups_Ammo__WEBPACK_IMPORTED_MODULE_5__["default"]);
        const dogFoods = this.getLevelObjectsList('dogFood', _shapes_level_pickups_DogFood__WEBPACK_IMPORTED_MODULE_7__["default"]);
        const foods = this.getLevelObjectsList('food', _shapes_level_pickups_Food__WEBPACK_IMPORTED_MODULE_8__["default"]);
        const healthPacks = this.getLevelObjectsList('health', _shapes_level_pickups_HealthPack__WEBPACK_IMPORTED_MODULE_9__["default"]);
        const powerUps = this.getLevelObjectsList('powerUp', _shapes_level_pickups_PowerUp__WEBPACK_IMPORTED_MODULE_18__["default"]);
        const machineguns = this.getLevelObjectsList('machinegun', _shapes_level_pickups_Machinegun__WEBPACK_IMPORTED_MODULE_10__["default"]);
        const goldenCrosses = this.getLevelObjectsList('goldCross', _shapes_level_pickups_GoldenCross__WEBPACK_IMPORTED_MODULE_14__["default"]);
        const goldenCups = this.getLevelObjectsList('goldCup', _shapes_level_pickups_GoldenCup__WEBPACK_IMPORTED_MODULE_15__["default"]);
        const goldenBoxes = this.getLevelObjectsList('goldBox', _shapes_level_pickups_GoldenBox__WEBPACK_IMPORTED_MODULE_16__["default"]);
        const goldenCrowns = this.getLevelObjectsList('goldCrown', _shapes_level_pickups_GoldenCrown__WEBPACK_IMPORTED_MODULE_17__["default"]);
        this.exits = [];
        this.exits.push(...this.getLevelObjectsList('exitLever', _shapes_level_Lever__WEBPACK_IMPORTED_MODULE_20__["default"]));
        this.exits.push(...this.getLevelObjectsList('secretExitLever', _shapes_level_Lever__WEBPACK_IMPORTED_MODULE_20__["default"]));
        this.decorations = [];
        for (let decorationName of _common_DecorationMap__WEBPACK_IMPORTED_MODULE_12__["default"].keys()) {
            this.decorations.push(...this.getLevelObjectsList(decorationName, _shapes_level_decorations_Decoration__WEBPACK_IMPORTED_MODULE_11__["default"]));
        }
        this.decorations.filter(d => !_common_NotCollidingFieldValues__WEBPACK_IMPORTED_MODULE_13__["default"].includes(d.type)).forEach(d => d.createBB());
        this.secretWalls = this.walls.filter(w => w instanceof _shapes_level_WallSecretDoor__WEBPACK_IMPORTED_MODULE_21__["default"]).map(w => w);
        this.walls = this.walls.filter(w => !(w instanceof _shapes_level_WallSecretDoor__WEBPACK_IMPORTED_MODULE_21__["default"]));
        this.collidingCuboids = [];
        this.collidingCuboids.push(...this.walls);
        this.collidingCuboids.push(...this.secretWalls);
        this.collidingCuboids.push(...this.doors);
        this.collidingCuboids.push(...this.exits);
        this.interactables = [];
        this.interactables.push(...this.doors);
        this.interactables.push(...this.secretWalls);
        this.interactables.push(...this.exits);
        this.pickups = [];
        this.pickups.push(...ammos);
        this.pickups.push(...dogFoods);
        this.pickups.push(...foods);
        this.pickups.push(...healthPacks);
        this.pickups.push(...powerUps);
        this.pickups.push(...machineguns);
        this.pickups.push(...goldenCrosses);
        this.pickups.push(...goldenCups);
        this.pickups.push(...goldenBoxes);
        this.pickups.push(...goldenCrowns);
        // this.doors[0].transform.position.x += 45
        this.floor = new _shapes_level_Plane__WEBPACK_IMPORTED_MODULE_4__["default"](this.gl, this.colorProgram);
        this.floor.setColor("#707070");
        this.floor.transform.position = this.center.clone();
        this.floor.transform.position.y = -_Config__WEBPACK_IMPORTED_MODULE_6__["default"].gridSize / 2;
        this.floor.transform.scale.set(this.width * _Config__WEBPACK_IMPORTED_MODULE_6__["default"].gridSize, 1, this.height * _Config__WEBPACK_IMPORTED_MODULE_6__["default"].gridSize);
        this.ceiling = new _shapes_level_Plane__WEBPACK_IMPORTED_MODULE_4__["default"](this.gl, this.colorProgram);
        this.ceiling.setColor("#383838");
        this.ceiling.transform.position = this.center.clone();
        this.ceiling.transform.position.y = _Config__WEBPACK_IMPORTED_MODULE_6__["default"].gridSize / 2;
        this.ceiling.transform.scale.set(this.width * _Config__WEBPACK_IMPORTED_MODULE_6__["default"].gridSize, 1, this.height * _Config__WEBPACK_IMPORTED_MODULE_6__["default"].gridSize);
        this.ceiling.transform.rotation.z = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.degToRad)(180);
        // {
        //     const health = new DogFood(this.gl, this.textureProgram)
        //     health.transform.position.x = 1888
        //     health.transform.position.z = 1344
        //     health.setInitialState()
        //     this.pickups.push(health)
        // }
        // {
        //     const health = new Food(this.gl, this.textureProgram)
        //     health.transform.position.x = 1888 - Config.gridSize * 1
        //     health.transform.position.z = 1344
        //     health.setInitialState()
        //     this.pickups.push(health)
        // }
        // {
        //     const health = new HealthPack(this.gl, this.textureProgram)
        //     health.transform.position.x = 1888 - Config.gridSize * 2
        //     health.transform.position.z = 1344
        //     health.setInitialState()
        //     this.pickups.push(health)
        // }
        _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_22__["default"].instance.enemiesCount = this.enemies.length;
        _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_22__["default"].instance.secretsCount = this.secretWalls.length;
        _shapes_ui_UI__WEBPACK_IMPORTED_MODULE_22__["default"].instance.treasuresCount = this.pickups.filter(p => p instanceof _shapes_level_pickups_PointItem__WEBPACK_IMPORTED_MODULE_23__["default"]).length;
        this.shapes = [
            ...this.walls,
            ...this.secretWalls,
            ...this.enemies,
            ...this.doors,
            ...this.pickups,
            ...this.decorations,
            ...this.exits,
            this.floor,
            this.ceiling,
        ];
    }
    getLevelObjectsList(value, SpecificShape) {
        const objects = [];
        for (let field of this.fields.filter(f => f.value.toLowerCase().includes(value.toLowerCase()))) {
            let shape;
            if (field.value.toLowerCase().includes('wall')) {
                if (field.value.toLowerCase().includes('wallsecret')) {
                    shape = new _shapes_level_WallSecretDoor__WEBPACK_IMPORTED_MODULE_21__["default"](this.gl, this.textureProgram, field.value);
                }
                else {
                    shape = new _shapes_level_Wall__WEBPACK_IMPORTED_MODULE_1__["default"](this.gl, this.textureProgram, field.value);
                }
            }
            else if (field.value.toLowerCase().includes("walking")) {
                if (field.value == 'enemyZWalking') {
                    shape = new _shapes_level_Enemy__WEBPACK_IMPORTED_MODULE_2__["default"](this.gl, this.textureProgram, 'z');
                }
                else if (field.value == 'enemyXWalking') {
                    shape = new _shapes_level_Enemy__WEBPACK_IMPORTED_MODULE_2__["default"](this.gl, this.textureProgram, 'x');
                }
            }
            else if (field.value.toLowerCase().includes("door")) {
                if (field.value == 'exitDoor') {
                    shape = new _shapes_level_Door__WEBPACK_IMPORTED_MODULE_3__["default"](this.gl, this.textureProgram, field.value);
                }
                else {
                    shape = new _shapes_level_Door__WEBPACK_IMPORTED_MODULE_3__["default"](this.gl, this.textureProgram);
                }
            }
            else if (field.value.toLowerCase().includes("enemy")) {
                for (let dir of ['up', 'down', 'left', 'right']) {
                    if (field.value.toLowerCase().includes(dir)) {
                        shape = new _shapes_level_Enemy__WEBPACK_IMPORTED_MODULE_2__["default"](this.gl, this.textureProgram, dir);
                    }
                }
            }
            else {
                shape = new SpecificShape(this.gl, this.textureProgram);
            }
            shape.transform.position.x = field.x;
            shape.transform.position.z = field.y;
            if (field.rotation) {
                shape.transform.rotation.y = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.degToRad)(field.rotation);
            }
            if (field.value.toLowerCase().includes('wall')) {
                if (field.value.toLowerCase().includes('wallsecret')) {
                    shape.dirToCalculate = true;
                }
            }
            shape.setInitialState();
            if (field.wallDirection && shape instanceof _shapes_level_Wall__WEBPACK_IMPORTED_MODULE_1__["default"]) {
                const dir = new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec3(field.wallDirection[0], 0, field.wallDirection[1]);
                if (dir.equals(_utils__WEBPACK_IMPORTED_MODULE_0__.Vec3.backward)) {
                    shape.setTexture(shape.nearDoorDarkTexture, 0);
                }
                if (dir.equals(_utils__WEBPACK_IMPORTED_MODULE_0__.Vec3.forward)) {
                    shape.setTexture(shape.nearDoorDarkTexture, 1);
                }
                if (dir.equals(_utils__WEBPACK_IMPORTED_MODULE_0__.Vec3.left)) {
                    shape.setTexture(shape.nearDoorLightTexture, 3);
                }
                if (dir.equals(_utils__WEBPACK_IMPORTED_MODULE_0__.Vec3.right)) {
                    shape.setTexture(shape.nearDoorLightTexture, 2);
                }
            }
            else if (shape instanceof _shapes_level_decorations_Decoration__WEBPACK_IMPORTED_MODULE_11__["default"]) {
                shape.type = value;
                shape.setTexture(shape.textureNumber);
            }
            objects.push(shape);
        }
        return objects;
    }
}


/***/ }),

/***/ "./src/game/components/Pathfinder.ts":
/*!*******************************************!*\
  !*** ./src/game/components/Pathfinder.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pathfinder)
/* harmony export */ });
/* harmony import */ var _common_NotCollidingFieldValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/NotCollidingFieldValues */ "./src/common/NotCollidingFieldValues.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Config */ "./src/game/components/Config.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/game/components/utils/index.ts");
var _a;



class Pathfinder {
    constructor() {
        this.allSubFieldsCreated = [];
        this.envFields = [];
        this.open = [];
        this.closed = [];
        this.subdivisions = 3;
    }
    get subGridSize() {
        return _Config__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize / this.subdivisions;
    }
    prepareLevel(level) {
        this.envFields = level.gridFields;
        this.allSubFieldsCreated = [];
    }
    subFieldPosData(position) {
        const gridPos = this.subGridPosToGridPos(position);
        const envField = this.envFields.find(f => new _utils__WEBPACK_IMPORTED_MODULE_2__.Vec2(f.x, f.y).equals(gridPos));
        return {
            walkable: !envField || _common_NotCollidingFieldValues__WEBPACK_IMPORTED_MODULE_0__["default"].includes(envField.value) || envField.value.toLowerCase().includes('door'),
            shape: envField === null || envField === void 0 ? void 0 : envField.value
        };
    }
    subGridPosToGridPos(pos) {
        return pos.map(v => Math.floor(v / this.subdivisions));
    }
    gridPosToRealPos(pos) {
        const realPosVec2 = pos.map(v => v * _Config__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize + _Config__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize / 2);
        const gridPosVec3 = new _utils__WEBPACK_IMPORTED_MODULE_2__.Vec3(realPosVec2.x, 0, realPosVec2.y);
        return gridPosVec3;
    }
    realPosToSubGridPos(v) {
        const gridPosVec3 = v.map(v => Math.floor(v / this.subGridSize));
        const gridPosVec2 = new _utils__WEBPACK_IMPORTED_MODULE_2__.Vec2(gridPosVec3.x, gridPosVec3.z);
        return gridPosVec2;
    }
    getAllPathLocations(from, to) {
        const subGridFrom = this.realPosToSubGridPos(from);
        const subGridTo = this.realPosToSubGridPos(to);
        const subGridPath = this._getAllPathfindLocations(subGridFrom, subGridTo);
        const realPath = subGridPath.map(subGridField => {
            return {
                subGridPos: this.subGridPosToRealPos(subGridField.position),
                shape: subGridField.shape,
                realPos: this.gridPosToRealPos(this.subGridPosToGridPos(subGridField.position)),
            };
        });
        return realPath;
    }
    subGridPosToRealPos(v) {
        const realPosVec2 = v.map(v => v * this.subGridSize + this.subGridSize / 2);
        const gridPosVec3 = new _utils__WEBPACK_IMPORTED_MODULE_2__.Vec3(realPosVec2.x, 0, realPosVec2.y);
        return gridPosVec3;
    }
    _getAllPathfindLocations(subGridFrom, subGridTo) {
        this.open = [];
        this.closed = [];
        const startField = new PathField(subGridFrom, true);
        this.open.push(startField);
        const { walkable, shape } = this.subFieldPosData(subGridTo);
        const endField = new PathField(subGridTo, walkable, shape);
        if (!endField.walkable) {
            return [];
        }
        while (true) {
            if (this.open.length == 0) {
                return [];
            }
            const current = this.leastFCostField();
            if (current.position.equals(endField.position)) {
                if (startField.position.equals(endField.position)) {
                    return [];
                }
                else {
                    return this.getPathUsingParents(current);
                }
            }
            else {
                const validNeighbours = this.getValidNeighbours(current);
                for (let neighbour of validNeighbours) {
                    this.calculateCost(neighbour, current, endField);
                }
            }
        }
    }
    leastFCostField() {
        const current = this.open.reduce((acc, loc) => acc.fCost < loc.fCost ? acc : loc);
        this.open = this.open.filter(field => field != current);
        this.closed.push(current);
        return current;
    }
    calculateCost(neighbour, current, endField) {
        if (!this.open.includes(neighbour) || neighbour.gCostWithParent(current) < neighbour.gCost) {
            neighbour.parent = current;
            const hDiff = endField.position.substract(neighbour.position).abs;
            neighbour.hCost = (hDiff.x + hDiff.y) * 10;
            if (this.open.every(f => !f.position.equals(neighbour.position))) {
                this.open.push(neighbour);
            }
        }
    }
    getValidNeighbours(field) {
        const neighbourDiffs = [
            new _utils__WEBPACK_IMPORTED_MODULE_2__.Vec2(-1, -1),
            new _utils__WEBPACK_IMPORTED_MODULE_2__.Vec2(-1, 0),
            new _utils__WEBPACK_IMPORTED_MODULE_2__.Vec2(-1, 1),
            new _utils__WEBPACK_IMPORTED_MODULE_2__.Vec2(0, -1),
            new _utils__WEBPACK_IMPORTED_MODULE_2__.Vec2(0, 1),
            new _utils__WEBPACK_IMPORTED_MODULE_2__.Vec2(1, -1),
            new _utils__WEBPACK_IMPORTED_MODULE_2__.Vec2(1, 0),
            new _utils__WEBPACK_IMPORTED_MODULE_2__.Vec2(1, 1),
        ];
        const neighbours = neighbourDiffs.map(diff => {
            const neighbourPos = field.position.add(diff);
            const subFieldAlreadyCreated = this.allSubFieldsCreated.find(field => field.position.equals(neighbourPos));
            if (subFieldAlreadyCreated) {
                return subFieldAlreadyCreated;
            }
            else {
                let { walkable, shape } = this.subFieldPosData(neighbourPos);
                if (diff.x && diff.y && walkable) {
                    const possibleCorners = [
                        new _utils__WEBPACK_IMPORTED_MODULE_2__.Vec2(neighbourPos.x, field.position.y),
                        new _utils__WEBPACK_IMPORTED_MODULE_2__.Vec2(field.position.x, neighbourPos.y),
                    ];
                    const allWalkable = possibleCorners.every(corner => {
                        const { walkable, shape } = this.subFieldPosData(corner);
                        return walkable;
                    });
                    if (!allWalkable) {
                        walkable = false;
                    }
                }
                const subField = new PathField(neighbourPos, walkable, shape);
                this.allSubFieldsCreated.push(subField);
                return subField;
            }
        });
        const validNeighbours = neighbours
            .filter(f => f.walkable && !this.closed.includes(f));
        // .filter(f => {
        //     const diff = f.position.substract(field.position)
        //     if (diff.x && diff.y) {
        //         const possibleCorners = [
        //             new Vec2(f.position.x, field.position.y),
        //             new Vec2(field.position.x, f.position.y),
        //         ]
        //         return possibleCorners.every(pos => this.isSubFieldPosWalkable(pos))
        //     }
        // })
        return validNeighbours;
    }
    getPathUsingParents(end) {
        let path = [];
        path.push(end);
        while (end.parent) {
            end = end.parent;
            path.push(end);
        }
        path.reverse();
        path.shift();
        return path;
    }
}
_a = Pathfinder;
Pathfinder.instance = new _a;
class PathField {
    constructor(position, walkable, shape) {
        this.position = position;
        this.walkable = walkable;
        this.shape = shape;
    }
    get gCost() {
        if (this.parent) {
            return this.gCostWithParent(this.parent);
        }
        else {
            return 0;
        }
    }
    gCostWithParent(parent) {
        const diff = parent.position.substract(this.position);
        if (diff.x && diff.y) {
            return parent.gCost + 14;
        }
        else {
            return parent.gCost + 10;
        }
    }
    get fCost() {
        return this.gCost + this.hCost;
    }
}


/***/ }),

/***/ "./src/game/components/Raycaster.ts":
/*!******************************************!*\
  !*** ./src/game/components/Raycaster.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Raycaster)
/* harmony export */ });
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./src/game/components/Config.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/game/components/utils/index.ts");


class Raycaster {
    constructor(from, dir) {
        this.from = from.clone();
        this.dir = dir.clone();
        this.squareGenerator = this.nextSquareGenerator();
    }
    static fromDir(from, dir) {
        return new Raycaster(from, dir);
    }
    static fromTo(from, to) {
        const dir = to.substract(from).yZeroed.normalize;
        return new Raycaster(from, dir);
    }
    nextSquare() {
        return this.squareGenerator.next().value;
    }
    nextShape(shapes) {
        let nextSquare = this.nextSquare();
        const limit = 100;
        for (let i = 0; i < limit * 2; i++) {
            if (nextSquare) {
                for (let shape of shapes) {
                    if (shape.transform.position.yZeroed.equals(nextSquare.yZeroed)) {
                        return shape;
                    }
                }
                nextSquare = this.nextSquare();
            }
        }
        return null;
    }
    *nextSquareGenerator() {
        let startClone = this.from.clone();
        let dirClone = this.dir.clone();
        const gridSize = _Config__WEBPACK_IMPORTED_MODULE_0__["default"].gridSize;
        const firstTileCenter = startClone.map(v => Math.floor(v / gridSize) * gridSize + gridSize / 2).yZeroed;
        yield firstTileCenter;
        let firstYield = true;
        while (true) {
            const [nextTileCenter, nextIntersection] = this.nextSquareInner(startClone, dirClone);
            if (firstYield) {
                firstYield = false;
            }
            yield nextTileCenter;
            startClone = nextIntersection;
        }
    }
    nextSquareInner(start, dir) {
        const gridSize = _Config__WEBPACK_IMPORTED_MODULE_0__["default"].gridSize;
        if (dir.x >= 0) {
            start.x += gridSize * 0.0001;
        }
        else {
            start.x -= gridSize * 0.0001;
        }
        if (dir.z >= 0) {
            start.z += gridSize * 0.0001;
        }
        else {
            start.z -= gridSize * 0.0001;
        }
        const firstTileCenter = start.map(v => Math.floor(v / gridSize) * gridSize + gridSize / 2).yZeroed;
        let nextIntersectingAxes = _utils__WEBPACK_IMPORTED_MODULE_1__.Vec3.zero;
        if (start.x * dir.x > 0) {
            nextIntersectingAxes.x = Math.ceil(start.x / gridSize) * gridSize;
        }
        else {
            nextIntersectingAxes.x = Math.floor(start.x / gridSize) * gridSize;
        }
        if (start.z * dir.z > 0) {
            nextIntersectingAxes.z = Math.ceil(start.z / gridSize) * gridSize;
        }
        else {
            nextIntersectingAxes.z = Math.floor(start.z / gridSize) * gridSize;
        }
        const diff = start.substract(nextIntersectingAxes).abs;
        const diffRatio = Math.abs(diff.z / diff.x);
        const dirRatio = Math.abs(dir.z / dir.x);
        let nextSquareInDirection, nextIntersection;
        if (diffRatio > dirRatio) {
            nextSquareInDirection = new _utils__WEBPACK_IMPORTED_MODULE_1__.Vec3(1, 0, 0);
            nextIntersection = new _utils__WEBPACK_IMPORTED_MODULE_1__.Vec3(nextIntersectingAxes.x, 0, start.z + (dir.z / dir.x) * (nextIntersectingAxes.x - start.x));
        }
        else {
            if (diffRatio < dirRatio) {
                nextSquareInDirection = new _utils__WEBPACK_IMPORTED_MODULE_1__.Vec3(0, 0, 1);
            }
            else {
                nextSquareInDirection = new _utils__WEBPACK_IMPORTED_MODULE_1__.Vec3(1, 0, 1);
            }
            nextIntersection = new _utils__WEBPACK_IMPORTED_MODULE_1__.Vec3(start.x + (dir.x / dir.z) * (nextIntersectingAxes.z - start.z), 0, nextIntersectingAxes.z);
        }
        const nextSquare = new _utils__WEBPACK_IMPORTED_MODULE_1__.Vec3(dir.x > 0 ? nextSquareInDirection.x : -nextSquareInDirection.x, 0, dir.z > 0 ? nextSquareInDirection.z : -nextSquareInDirection.z);
        const nextTileCenter = firstTileCenter.add(nextSquare.multiply(gridSize));
        return [nextTileCenter, nextIntersection];
    }
}


/***/ }),

/***/ "./src/game/components/Textures.ts":
/*!*****************************************!*\
  !*** ./src/game/components/Textures.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Textures)
/* harmony export */ });
class Textures {
    constructor(gl) {
        this.gl = gl;
    }
    load(shapes, callback) {
        let alreadyCreatedTextures = new Map();
        const textures = [...new Set(shapes.map(shape => shape.importedTexture))];
        this.loadHtmlImages(textures, textureToHtmlImageMap => {
            for (let shape of shapes) {
                if (!alreadyCreatedTextures.has(shape.importedTexture)) {
                    const webglTexture = this.gl.createTexture();
                    this.gl.bindTexture(this.gl.TEXTURE_2D, webglTexture);
                    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
                    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST_MIPMAP_LINEAR);
                    // this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST)
                    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
                    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
                    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, textureToHtmlImageMap.get(shape.importedTexture));
                    this.gl.generateMipmap(this.gl.TEXTURE_2D);
                    alreadyCreatedTextures.set(shape.importedTexture, webglTexture);
                }
                shape.webglTexture = alreadyCreatedTextures.get(shape.importedTexture);
            }
            callback === null || callback === void 0 ? void 0 : callback();
        });
    }
    loadHtmlImages(importedTextures, callback) {
        let htmlImages = [];
        let imagesToLoad = importedTextures.length;
        const onImageLoad = () => {
            if (--imagesToLoad == 0) {
                const map = new Map();
                for (let i = 0; i < importedTextures.length; i++) {
                    map.set(importedTextures[i], htmlImages[i]);
                }
                ;
                callback(map);
            }
        };
        for (let i = 0; i < imagesToLoad; i++) {
            const image = new Image();
            image.src = importedTextures[i];
            htmlImages.push(image);
            image.onload = onImageLoad;
        }
    }
}


/***/ }),

/***/ "./src/game/components/programs/ColorProgram.ts":
/*!******************************************************!*\
  !*** ./src/game/components/programs/ColorProgram.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorProgram": () => (/* binding */ ColorProgram)
/* harmony export */ });
/* harmony import */ var _Program__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Program */ "./src/game/components/programs/Program.ts");
/* harmony import */ var _shaders_color_vs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaders/color.vs */ "./src/game/shaders/color.vs");
/* harmony import */ var _shaders_color_fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaders/color.fs */ "./src/game/shaders/color.fs");



class ColorProgram extends _Program__WEBPACK_IMPORTED_MODULE_0__.Program {
    constructor(gl) {
        super(gl, _shaders_color_vs__WEBPACK_IMPORTED_MODULE_1__["default"], _shaders_color_fs__WEBPACK_IMPORTED_MODULE_2__["default"]);
        this.info = {
            attributes: {
                position: this.attribute("a_position"),
                color: this.attribute("a_color"),
            },
            uniforms: {
                matrix: this.uniform("u_matrix")
            },
        };
    }
}


/***/ }),

/***/ "./src/game/components/programs/Program.ts":
/*!*************************************************!*\
  !*** ./src/game/components/programs/Program.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Program": () => (/* binding */ Program)
/* harmony export */ });
class Program {
    constructor(gl, vertexShaderSource, fragmentShaderSource) {
        this.gl = gl;
        const vertexShader = this.createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = this.createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
        this.program = this.createProgram(gl, vertexShader, fragmentShader);
    }
    use() {
        this.gl.useProgram(this.program);
    }
    attribute(name) {
        return this.gl.getAttribLocation(this.program, name);
    }
    uniform(name) {
        return this.gl.getUniformLocation(this.program, name);
    }
    createShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (success) {
            return shader;
        }
        gl.deleteShader(shader);
    }
    createProgram(gl, vertexShader, fragmentShader) {
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        const success = gl.getProgramParameter(program, gl.LINK_STATUS);
        if (success) {
            return program;
        }
        gl.deleteProgram(program);
    }
}


/***/ }),

/***/ "./src/game/components/programs/TextureProgram.ts":
/*!********************************************************!*\
  !*** ./src/game/components/programs/TextureProgram.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextureProgram": () => (/* binding */ TextureProgram)
/* harmony export */ });
/* harmony import */ var _Program__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Program */ "./src/game/components/programs/Program.ts");
/* harmony import */ var _shaders_texture_vs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaders/texture.vs */ "./src/game/shaders/texture.vs");
/* harmony import */ var _shaders_texture_fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaders/texture.fs */ "./src/game/shaders/texture.fs");



class TextureProgram extends _Program__WEBPACK_IMPORTED_MODULE_0__.Program {
    constructor(gl) {
        super(gl, _shaders_texture_vs__WEBPACK_IMPORTED_MODULE_1__["default"], _shaders_texture_fs__WEBPACK_IMPORTED_MODULE_2__["default"]);
        this.info = {
            attributes: {
                position: this.attribute("a_position"),
                texcoord: this.attribute("a_texcoord"),
            },
            uniforms: {
                matrix: this.uniform("u_matrix")
            },
        };
    }
    loadTexture(src, callback) {
        // Create a texture.
        const texture = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
        // Fill the texture with a 1x1 blue pixel.
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 255]));
        // Asynchronously load an image
        var image = new Image();
        image.src = src;
        image.addEventListener('load', () => {
            // Now that the image has loaded make copy it to the texture.
            // this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
            // this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, image);
            // this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_LINEAR);
            // this.gl.generateMipmap(this.gl.TEXTURE_2D);
            callback();
        });
    }
}


/***/ }),

/***/ "./src/game/components/shapes/level/Cuboid.ts":
/*!****************************************************!*\
  !*** ./src/game/components/shapes/level/Cuboid.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cuboid)
/* harmony export */ });
/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shape */ "./src/game/components/shapes/level/Shape.ts");
/* harmony import */ var _CuboidBoundingBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CuboidBoundingBox */ "./src/game/components/shapes/level/CuboidBoundingBox.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/game/components/utils/index.ts");



class Cuboid extends _Shape__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.VERTICES = new Float32Array([
            // front    
            -0.5, -0.5, 0.5,
            0.5, 0.5, 0.5,
            -0.5, 0.5, 0.5,
            -0.5, -0.5, 0.5,
            0.5, -0.5, 0.5,
            0.5, 0.5, 0.5,
            // back    
            -0.5, -0.5, -0.5,
            -0.5, 0.5, -0.5,
            0.5, 0.5, -0.5,
            -0.5, -0.5, -0.5,
            0.5, 0.5, -0.5,
            0.5, -0.5, -0.5,
            // left    
            -0.5, -0.5, -0.5,
            -0.5, -0.5, 0.5,
            -0.5, 0.5, 0.5,
            -0.5, -0.5, -0.5,
            -0.5, 0.5, 0.5,
            -0.5, 0.5, -0.5,
            // right    
            0.5, -0.5, -0.5,
            0.5, 0.5, 0.5,
            0.5, -0.5, 0.5,
            0.5, -0.5, -0.5,
            0.5, 0.5, -0.5,
            0.5, 0.5, 0.5,
            // top    
            -0.5, 0.5, -0.5,
            0.5, 0.5, 0.5,
            0.5, 0.5, -0.5,
            -0.5, 0.5, 0.5,
            0.5, 0.5, 0.5,
            -0.5, 0.5, -0.5,
            // bottom    
            0.5, -0.5, -0.5,
            0.5, -0.5, 0.5,
            -0.5, -0.5, -0.5,
            -0.5, -0.5, -0.5,
            0.5, -0.5, 0.5,
            -0.5, -0.5, 0.5,
        ]);
        this.COLORS = new Uint8Array([
            80, 70, 200,
            80, 70, 200,
            80, 70, 200,
            80, 70, 200,
            80, 70, 200,
            80, 70, 200,
            200, 70, 0.520,
            200, 70, 0.520,
            200, 70, 0.520,
            200, 70, 0.520,
            200, 70, 0.520,
            200, 70, 0.520,
            70, 200, 20.50,
            70, 200, 20.50,
            70, 200, 20.50,
            70, 200, 20.50,
            70, 200, 20.50,
            70, 200, 20.50,
            200, 200, 70,
            200, 200, 70,
            200, 200, 70,
            200, 200, 70,
            200, 200, 70,
            200, 200, 70,
            20.50, 0.500, 70,
            20.50, 0.500, 70,
            20.50, 0.500, 70,
            20.50, 0.500, 70,
            20.50, 0.500, 70,
            20.50, 0.500, 70,
            20.50, 0.560, 70,
            20.50, 0.560, 70,
            20.50, 0.560, 70,
            20.50, 0.560, 70,
            20.50, 0.560, 70,
            20.50, 0.560, 70,
        ]);
        this.TEXCOORDS = new Float32Array([
            // front
            0, 1,
            1, 0,
            0, 0,
            0, 1,
            1, 1,
            1, 0,
            // back
            1, 1,
            1, 0,
            0, 0,
            1, 1,
            0, 0,
            0, 1,
            // left
            0, 1,
            1, 1,
            1, 0,
            0, 1,
            1, 0,
            0, 0,
            // right
            1, 1,
            0, 0,
            0, 1,
            1, 1,
            1, 0,
            0, 0,
            // top
            0, 0,
            1, 1,
            1, 0,
            0, 1,
            1, 1,
            0, 0,
            // bottom
            1, 1,
            1, 0,
            0, 1,
            0, 1,
            1, 0,
            0, 0,
        ]);
        this.bb = new _CuboidBoundingBox__WEBPACK_IMPORTED_MODULE_1__.CuboidBoundingBox(this);
        this.defaultColors = this.COLORS;
        this.texturesInLine = 1;
    }
    onCreation() {
        this.setTexture(0);
    }
    setColor(wall, color) {
        this.COLORS = new Uint8Array([
            ...this.COLORS.slice(0, 3 * 6 * wall),
            color[0], color[1], color[2],
            color[0], color[1], color[2],
            color[0], color[1], color[2],
            color[0], color[1], color[2],
            color[0], color[1], color[2],
            color[0], color[1], color[2],
            ...this.COLORS.slice(3 * 6 * (wall + 1))
        ]);
    }
    wallTexcoords(wall) {
        return this.TEXCOORDS.slice(2 * 6 * wall, 2 * 6 * (wall + 1));
    }
    initialWallTexcoords(wall) {
        return this.initialTexcoords.slice(2 * 6 * wall, 2 * 6 * (wall + 1));
    }
    resetColor() {
        this.COLORS = this.defaultColors;
    }
    get textureSize() {
        return 1 / this.texturesInLine;
    }
    setTexture(textureNumber, wallNumber) {
        let newTexcoords = [];
        if (wallNumber !== undefined) {
            for (let i = 0; i < 6; i++) {
                if (i == wallNumber) {
                    newTexcoords.push(...this.setTexcoordsToTexture(textureNumber, this.initialWallTexcoords(wallNumber)));
                }
                else {
                    newTexcoords.push(...this.wallTexcoords(i));
                }
            }
        }
        else {
            newTexcoords = [...this.setTexcoordsToTexture(textureNumber, this.initialTexcoords)];
        }
        this.TEXCOORDS = new Float32Array(newTexcoords);
    }
    setTexcoordsToTexture(textureNumber, texcoords) {
        let verticesVec2Array = _utils__WEBPACK_IMPORTED_MODULE_2__.Vec2.arrayToVec2Array(texcoords);
        const texturePos = new _utils__WEBPACK_IMPORTED_MODULE_2__.Vec2(textureNumber % this.texturesInLine, Math.floor(textureNumber / this.texturesInLine)).multiply(this.textureSize);
        verticesVec2Array = verticesVec2Array.map(vertex => vertex.multiply(this.textureSize).add(texturePos));
        return _utils__WEBPACK_IMPORTED_MODULE_2__.Vec2.vec2ArrayToArray(verticesVec2Array);
    }
}


/***/ }),

/***/ "./src/game/components/shapes/level/CuboidBoundingBox.ts":
/*!***************************************************************!*\
  !*** ./src/game/components/shapes/level/CuboidBoundingBox.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuboidBoundingBox": () => (/* binding */ CuboidBoundingBox)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/game/components/utils/index.ts");

class CuboidBoundingBox {
    constructor(shape) {
        this.shape = shape;
        this.transform = shape.transform;
    }
    get vertices() {
        return this.shape.verticesTransformed;
    }
    get size() {
        return this.shape.size;
    }
    get sizeRotated() {
        return this.shape.sizeRotated;
    }
    get halfSize() {
        return this.shape.halfSize;
    }
    get halfSizeRotated() {
        return this.shape.halfSizeRotated;
    }
    get negativeCorner() {
        return this.transform.position.substract(this.halfSize);
    }
    get negativeCornerRotated() {
        return this.transform.position.substract(this.halfSizeRotated);
    }
    get positiveCorner() {
        return this.transform.position.add(this.halfSize);
    }
    get positiveCornerRotated() {
        return this.transform.position.add(this.halfSizeRotated);
    }
    isColliding(v) {
        const pos = this.positiveCornerRotated;
        const neg = this.negativeCornerRotated;
        return neg.x <= v.x && v.x <= pos.x && neg.z <= v.z && v.z <= pos.z;
    }
    pointSide(v) {
        const diff = this.transform.position.substract(v);
        // const rotationMatrix = m4.yRotation(this.transform.rotation.y)
        // const diffRotated = diff.transformMat4(rotationMatrix)
        const diffRotated = diff;
        let pointSide = _utils__WEBPACK_IMPORTED_MODULE_0__.Vec3.zero;
        if (diffRotated.x > this.halfSizeRotated.x) {
            pointSide.x = -1;
        }
        if (diffRotated.x < -this.halfSizeRotated.x) {
            pointSide.x = 1;
        }
        if (diffRotated.z > this.halfSizeRotated.z) {
            pointSide.z = -1;
        }
        if (diffRotated.z < -this.halfSizeRotated.z) {
            pointSide.z = 1;
        }
        return pointSide;
    }
    nearestDistanceDirection(v) {
        const side = this.pointSide(v);
        if (side.x && side.z) {
            return v.substract(this.nearestCorner(v)).yZeroed.normalize;
        }
        else {
            return side;
        }
    }
    pointSideRotated(v) {
        const pointSide = this.pointSide(v);
        const rotationMatrix = _utils__WEBPACK_IMPORTED_MODULE_0__.m4.yRotation(-this.transform.rotation.y);
        return pointSide.transformMat4(rotationMatrix);
    }
    pointFarthestSideRotated(v) {
        const pointSide = this.pointFarthestSide(v);
        const rotationMatrix = _utils__WEBPACK_IMPORTED_MODULE_0__.m4.yRotation(-this.transform.rotation.y);
        return pointSide.transformMat4(rotationMatrix);
    }
    // only a non rotated cuboid
    pointFarthestSide(v) {
        const diff = this.transform.position.substract(v);
        const rotationMatrix = _utils__WEBPACK_IMPORTED_MODULE_0__.m4.yRotation(this.transform.rotation.y);
        const diffRotated = diff.transformMat4(rotationMatrix);
        let pointSide = this.pointSide(v);
        if (pointSide.x && pointSide.z) {
            if (Math.abs(diffRotated.x) > Math.abs(diffRotated.z)) {
                pointSide.z = 0;
            }
            else {
                pointSide.x = 0;
            }
        }
        return pointSide;
    }
    // cuboid rotated by any value
    nearestCorner(v) {
        const diff = this.transform.position.substract(v);
        if (diff.x <= 0 && diff.z <= 0) {
            return this.transform.position.substract(this.halfSizeRotated);
        }
        else if (diff.x <= 0 && diff.z >= 0) {
            const cornerRelative = new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec3(-this.halfSizeRotated.x, 0, this.halfSizeRotated.z);
            return this.transform.position.substract(cornerRelative);
        }
        else if (diff.x >= 0 && diff.z <= 0) {
            const cornerRelative = new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec3(this.halfSizeRotated.x, 0, -this.halfSizeRotated.z);
            return this.transform.position.substract(cornerRelative);
        }
        else if (diff.x >= 0 && diff.z >= 0) {
            return this.transform.position.add(this.halfSizeRotated);
        }
    }
    basePointsYZeroed() {
        const a = this.halfSizeRotated.yZeroed;
        return [
            this.transform.position.add(a),
            this.transform.position.add(a.xInverted),
            this.transform.position.add(a.yInverted),
            this.transform.position.substract(a),
        ];
    }
}


/***/ }),

/***/ "./src/game/components/shapes/level/Door.ts":
/*!**************************************************!*\
  !*** ./src/game/components/shapes/level/Door.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Door)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/game/components/utils/index.ts");
/* harmony import */ var _Cuboid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cuboid */ "./src/game/components/shapes/level/Cuboid.ts");
/* harmony import */ var _textures_wall_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../textures/wall.png */ "./src/game/textures/wall.png");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Config */ "./src/game/components/Config.ts");
/* harmony import */ var _sounds_WSND0003_wav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../sounds/WSND0003.wav */ "./src/game/sounds/WSND0003.wav");
/* harmony import */ var _sounds_WSND0002_wav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../sounds/WSND0002.wav */ "./src/game/sounds/WSND0002.wav");
/* harmony import */ var _BetterAudio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../BetterAudio */ "./src/game/components/BetterAudio.ts");







class Door extends _Cuboid__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(gl, program, type) {
        super(gl, program);
        this.importedTexture = _textures_wall_png__WEBPACK_IMPORTED_MODULE_2__;
        this.openAudio = new _BetterAudio__WEBPACK_IMPORTED_MODULE_6__["default"](_sounds_WSND0003_wav__WEBPACK_IMPORTED_MODULE_4__);
        this.closeAudio = new _BetterAudio__WEBPACK_IMPORTED_MODULE_6__["default"](_sounds_WSND0002_wav__WEBPACK_IMPORTED_MODULE_5__);
        this.opening = false;
        this.closing = false;
        this.openingSpeed = _Config__WEBPACK_IMPORTED_MODULE_3__["default"].gridSize;
        this.openingLength = _Config__WEBPACK_IMPORTED_MODULE_3__["default"].gridSize;
        this.hiddenInWallScaleCorrection = new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec3(0.1, 0.1, 0);
        this.texturesInLine = 16;
        this.TEXCOORDS = new Float32Array([
            // front
            0, 1,
            1, 0,
            0, 0,
            0, 1,
            1, 1,
            1, 0,
            // back
            0, 1,
            0, 0,
            1, 0,
            0, 1,
            1, 0,
            1, 1,
            // left
            0, 1,
            1, 1,
            1, 0,
            0, 1,
            1, 0,
            0, 0,
            // right
            1, 1,
            0, 0,
            0, 1,
            1, 1,
            1, 0,
            0, 0,
            // top
            0, 0,
            1, 1,
            1, 0,
            0, 1,
            1, 1,
            0, 0,
            // bottom
            1, 1,
            1, 0,
            0, 1,
            0, 1,
            1, 0,
            0, 0,
        ]);
        this.transform.scale = new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec3(_Config__WEBPACK_IMPORTED_MODULE_3__["default"].gridSize, _Config__WEBPACK_IMPORTED_MODULE_3__["default"].gridSize, _Config__WEBPACK_IMPORTED_MODULE_3__["default"].gridSize * 6 / 64);
        this.type = type;
    }
    get lightTexture() {
        switch (this.type) {
            case 'exitDoor': return 119;
            default: return 104;
        }
    }
    get lightSideTexture() {
        switch (this.type) {
            case 'exitDoor': return 119;
            default: return 108;
        }
    }
    get darkTexture() {
        switch (this.type) {
            case 'exitDoor': return 119;
            default: return 105;
        }
    }
    get darkSideTexture() {
        switch (this.type) {
            case 'exitDoor': return 119;
            default: return 109;
        }
    }
    onCreation() {
        const translationFinal = new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec3(this.openingLength, 0, 0);
        let mFinal = _utils__WEBPACK_IMPORTED_MODULE_0__.m4.identity;
        mFinal = _utils__WEBPACK_IMPORTED_MODULE_0__.m4.translate(mFinal, translationFinal);
        mFinal = _utils__WEBPACK_IMPORTED_MODULE_0__.m4.yRotate(mFinal, this.transform.rotation.y);
        const positionDeltaFinal = _utils__WEBPACK_IMPORTED_MODULE_0__.m4.getPositionVector(mFinal);
        this.positionFinal = this.initialTransform.position.add(positionDeltaFinal);
        if (this.transform.rotation.y) {
            this.setTexture(this.darkTexture);
            this.setTexture(this.lightSideTexture, 2);
            this.setTexture(this.lightSideTexture, 3);
        }
        else {
            this.setTexture(this.lightTexture);
            this.setTexture(this.darkSideTexture, 2);
            this.setTexture(this.darkSideTexture, 3);
        }
    }
    update(deltaTime) {
        const translation = new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec3(this.openingSpeed * deltaTime, 0, 0);
        let m = _utils__WEBPACK_IMPORTED_MODULE_0__.m4.identity;
        m = _utils__WEBPACK_IMPORTED_MODULE_0__.m4.translate(m, translation);
        m = _utils__WEBPACK_IMPORTED_MODULE_0__.m4.yRotate(m, this.transform.rotation.y);
        const positionDelta = _utils__WEBPACK_IMPORTED_MODULE_0__.m4.getPositionVector(m);
        if (this.opening) {
            if (this.transform.position.equals(this.positionFinal)) {
                this.opening = false;
                if (this.initialTransform.scale.equals(this.transform.scale)) {
                    this.transform.scale = this.transform.scale.substract(this.hiddenInWallScaleCorrection);
                }
            }
            else {
                if (this.positionFinal.substract(this.transform.position).isLess(positionDelta)) {
                    this.transform.position = this.positionFinal.clone();
                }
                else {
                    this.transform.position = this.transform.position.add(positionDelta);
                }
            }
        }
        else if (this.closing) {
            if (this.transform.position.equals(this.initialTransform.position)) {
                this.closing = false;
            }
            else {
                if (this.transform.position.substract(this.initialTransform.position).isLess(positionDelta)) {
                    this.transform.position = this.initialTransform.position.clone();
                }
                else {
                    this.transform.position = this.transform.position.substract(positionDelta);
                }
            }
        }
    }
    get closed() {
        return this.transform.position.equals(this.initialTransform.position);
    }
    get opened() {
        return this.transform.position.equals(this.positionFinal);
    }
    toggle() {
        if (this.closed) {
            this.closing = false;
            this.opening = true;
            this.openAudio.play();
        }
        else if (this.opened) {
            if (this.transform.scale.add(this.hiddenInWallScaleCorrection).equals(this.initialTransform.scale)) {
                this.transform.scale = this.transform.scale.add(this.hiddenInWallScaleCorrection);
            }
            this.opening = false;
            this.closing = true;
            this.closeAudio.play();
        }
    }
    get canInteract() {
        return this.closed;
    }
    tryToClose(deltaTime, camera, enemies) {
        const nothingCollides = [camera, ...enemies].every(obj => obj.transform.position.yZeroed.distanceTo(this.initialTransform.position.yZeroed) > _Config__WEBPACK_IMPORTED_MODULE_3__["default"].gridSize * 2);
        if (nothingCollides && this.opened) {
            this.toggle();
        }
    }
}


/***/ }),

/***/ "./src/game/components/shapes/level/Enemy.ts":
/*!***************************************************!*\
  !*** ./src/game/components/shapes/level/Enemy.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Enemy)
/* harmony export */ });
/* harmony import */ var _textures_guard_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../textures/guard.png */ "./src/game/textures/guard.png");
/* harmony import */ var _BetterAudio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../BetterAudio */ "./src/game/components/BetterAudio.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Config */ "./src/game/components/Config.ts");
/* harmony import */ var _Pathfinder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Pathfinder */ "./src/game/components/Pathfinder.ts");
/* harmony import */ var _Raycaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Raycaster */ "./src/game/components/Raycaster.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./src/game/components/utils/index.ts");
/* harmony import */ var _ui_UI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/UI */ "./src/game/components/shapes/ui/UI.ts");
/* harmony import */ var _pickups_Ammo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pickups/Ammo */ "./src/game/components/shapes/level/pickups/Ammo.ts");
/* harmony import */ var _pickups_Flag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pickups/Flag */ "./src/game/components/shapes/level/pickups/Flag.ts");
/* harmony import */ var _Plane__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Plane */ "./src/game/components/shapes/level/Plane.ts");
/* harmony import */ var _sounds_WSND0021_wav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../sounds/WSND0021.wav */ "./src/game/sounds/WSND0021.wav");
/* harmony import */ var _sounds_WSND0012_wav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../sounds/WSND0012.wav */ "./src/game/sounds/WSND0012.wav");
/* harmony import */ var _sounds_WSND0013_wav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../sounds/WSND0013.wav */ "./src/game/sounds/WSND0013.wav");
/* harmony import */ var _sounds_WSND0034_wav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../sounds/WSND0034.wav */ "./src/game/sounds/WSND0034.wav");
/* harmony import */ var _sounds_WSND0035_wav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../sounds/WSND0035.wav */ "./src/game/sounds/WSND0035.wav");
/* harmony import */ var _sounds_WSND0039_wav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../sounds/WSND0039.wav */ "./src/game/sounds/WSND0039.wav");
/* harmony import */ var _sounds_WSND0040_wav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../sounds/WSND0040.wav */ "./src/game/sounds/WSND0040.wav");
/* harmony import */ var _sounds_WSND0041_wav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../sounds/WSND0041.wav */ "./src/game/sounds/WSND0041.wav");
/* harmony import */ var _sounds_WSND0042_wav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../sounds/WSND0042.wav */ "./src/game/sounds/WSND0042.wav");
/* harmony import */ var _sounds_WSND0000_wav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../sounds/WSND0000.wav */ "./src/game/sounds/WSND0000.wav");




















class Enemy extends _Plane__WEBPACK_IMPORTED_MODULE_9__["default"] {
    constructor(gl, program, type) {
        super(gl, program);
        this.pathfinderFields = [];
        this.score = 100;
        this.importedTexture = _textures_guard_png__WEBPACK_IMPORTED_MODULE_0__;
        this.texturedWidth = 28 / 64;
        this.textureRotation = 0;
        this.texturesInLine = 8;
        this.stateToTextureMap = new Map([
            ['shooting', [48, 49, 50]],
            ['standing', [0]],
            ['walking', [8, 16, 24, 32]],
            ['dying', [40, 41, 42, 43, 44]],
            ['hit', [47, 0]],
            ['dead', [44]],
        ]);
        this.shotNoticeDistance = _Config__WEBPACK_IMPORTED_MODULE_2__["default"].gridSize * 10;
        this.dir = _utils__WEBPACK_IMPORTED_MODULE_5__.Vec3.zero;
        this.shootingDistance = _Config__WEBPACK_IMPORTED_MODULE_2__["default"].gridSize * 5;
        this.damageDealed = 8;
        this.walkingDirection = _utils__WEBPACK_IMPORTED_MODULE_5__.Vec3.zero;
        this.state = 'standing';
        this.timeSinceLastUpdate = 0;
        this.hp = 100;
        this.followingSpeed = _Config__WEBPACK_IMPORTED_MODULE_2__["default"].gridSize * 1.25;
        this.nextDir = null;
        this.timeSinceLastPathfinding = 0;
        this.pathfindingDelay = 0.5;
        this.frameTime = 0.2;
        this.audioSight = new _BetterAudio__WEBPACK_IMPORTED_MODULE_1__["default"](_sounds_WSND0000_wav__WEBPACK_IMPORTED_MODULE_19__);
        this.audiosDie = [
            new _BetterAudio__WEBPACK_IMPORTED_MODULE_1__["default"](_sounds_WSND0012_wav__WEBPACK_IMPORTED_MODULE_11__),
            new _BetterAudio__WEBPACK_IMPORTED_MODULE_1__["default"](_sounds_WSND0013_wav__WEBPACK_IMPORTED_MODULE_12__),
            new _BetterAudio__WEBPACK_IMPORTED_MODULE_1__["default"](_sounds_WSND0034_wav__WEBPACK_IMPORTED_MODULE_13__),
            new _BetterAudio__WEBPACK_IMPORTED_MODULE_1__["default"](_sounds_WSND0035_wav__WEBPACK_IMPORTED_MODULE_14__),
            new _BetterAudio__WEBPACK_IMPORTED_MODULE_1__["default"](_sounds_WSND0039_wav__WEBPACK_IMPORTED_MODULE_15__),
            new _BetterAudio__WEBPACK_IMPORTED_MODULE_1__["default"](_sounds_WSND0040_wav__WEBPACK_IMPORTED_MODULE_16__),
            new _BetterAudio__WEBPACK_IMPORTED_MODULE_1__["default"](_sounds_WSND0041_wav__WEBPACK_IMPORTED_MODULE_17__),
            new _BetterAudio__WEBPACK_IMPORTED_MODULE_1__["default"](_sounds_WSND0042_wav__WEBPACK_IMPORTED_MODULE_18__),
        ];
        this.audioShot = new _BetterAudio__WEBPACK_IMPORTED_MODULE_1__["default"](_sounds_WSND0021_wav__WEBPACK_IMPORTED_MODULE_10__);
        this.loot = new _pickups_Ammo__WEBPACK_IMPORTED_MODULE_7__["default"](this.gl, program);
        this.tempFlag = new _pickups_Flag__WEBPACK_IMPORTED_MODULE_8__["default"](this.gl, program);
        this.tempFlag.setInitialState();
        this.transform.rotation.x = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.degToRad)(90);
        if (type == "x") {
            this.walkingDirection = _utils__WEBPACK_IMPORTED_MODULE_5__.Vec3.right;
            this.state = "walking";
            this.dir = this.walkingDirection;
        }
        else if (type == "z") {
            this.walkingDirection = _utils__WEBPACK_IMPORTED_MODULE_5__.Vec3.forward;
            this.state = "walking";
            this.dir = this.walkingDirection;
        }
        else if (type == "up") {
            this.dir = _utils__WEBPACK_IMPORTED_MODULE_5__.Vec3.forward;
        }
        else if (type == "down") {
            this.dir = _utils__WEBPACK_IMPORTED_MODULE_5__.Vec3.backward;
        }
        else if (type == "left") {
            this.dir = _utils__WEBPACK_IMPORTED_MODULE_5__.Vec3.left;
        }
        else if (type == "right") {
            this.dir = _utils__WEBPACK_IMPORTED_MODULE_5__.Vec3.right;
        }
        this.initialState = this.state;
    }
    get isDead() {
        return this.hp <= 0;
    }
    update(deltaTime, camera) {
        if (_ui_UI__WEBPACK_IMPORTED_MODULE_6__["default"].instance.state == 'end') {
            this.followingPlayer = null;
        }
        else {
            this.timeSinceLastUpdate += deltaTime;
            const frameTime = this.state == "shooting" ? 0.3 : this.frameTime;
            if (this.timeSinceLastUpdate > frameTime) {
                this.timeSinceLastUpdate = 0;
                const textures = this.stateToTextureMap.get(this.state);
                const index = textures.indexOf(this.textureNumber) + 1;
                if (index < textures.length) {
                    this.setTexture(textures[index]);
                }
                else {
                    this.textureNumber = 0;
                    if (this.state == 'dying') {
                        this.state = 'dead';
                        _ui_UI__WEBPACK_IMPORTED_MODULE_6__["default"].instance.enemiesKilled++;
                    }
                    else if (this.state == 'hit') {
                        this.state = 'walking';
                    }
                    else {
                        this.setTexture(textures[0]);
                    }
                }
                if (this.state == "shooting" && index == textures.length - 1) {
                    if (_ui_UI__WEBPACK_IMPORTED_MODULE_6__["default"].instance.health > 0) {
                        _ui_UI__WEBPACK_IMPORTED_MODULE_6__["default"].instance.health -= Math.floor(Math.random() * (this.damageDealed * 2 - this.damageDealed * 0.75)) + this.damageDealed * 0.75;
                        _ui_UI__WEBPACK_IMPORTED_MODULE_6__["default"].instance.flashRed();
                        this.audioShot.play();
                        camera.audioHit.play();
                        if (_ui_UI__WEBPACK_IMPORTED_MODULE_6__["default"].instance.health <= 0) {
                            _ui_UI__WEBPACK_IMPORTED_MODULE_6__["default"].instance.health = 0;
                            camera.killer = this;
                        }
                    }
                }
                if (this.followingPlayer && _ui_UI__WEBPACK_IMPORTED_MODULE_6__["default"].instance.health == 0) {
                    this.followingPlayer = null;
                    this.dir = this.transform.position.to(camera.transform.position);
                    this.state = "standing";
                }
            }
            this.updateBuffers();
        }
    }
    damage(value) {
        if (['dying', 'dead'].includes(this.state))
            return;
        this.hp -= value;
        this.state = 'hit';
        this.timeSinceLastUpdate = 0;
        if (this.hp <= 0) {
            this.hp = 0;
            this.state = 'dying';
            this.audiosDie[Math.floor(Math.random() * this.audiosDie.length)].play();
        }
        else {
            // this.audioPain.play()
        }
    }
    lookAtCamera(cameraY) {
        this.transform.rotation.y = -cameraY;
    }
    pathfind(destination) {
    }
    makeStepTowardsPlayer(deltaTime, doors) {
        this.timeSinceLastPathfinding += deltaTime;
        if (this.followingPlayer) {
            if (this.timeSinceLastPathfinding >= this.pathfindingDelay) {
                this.timeSinceLastPathfinding = 0;
                if (this.pathfinderFields.length <= 80) {
                    this.pathfinderFields = _Pathfinder__WEBPACK_IMPORTED_MODULE_3__["default"].instance.getAllPathLocations(this.transform.position, this.followingPlayer.transform.position);
                    this.pathfinderFields = this.pathfinderFields.map(v => {
                        return {
                            subGridPos: new _utils__WEBPACK_IMPORTED_MODULE_5__.Vec3(v.subGridPos.x, -30, v.subGridPos.z),
                            shape: v.shape,
                            realPos: v.realPos,
                        };
                    });
                }
                else {
                    this.state = "standing";
                    this.followingPlayer = null;
                    this.pathfinderFields = [];
                }
            }
            if (this.pathfinderFields.length <= 1)
                return;
            this.dir = this.pathfinderFields[1].subGridPos.substract(this.transform.position).yZeroed.normalize;
            for (let i = 1; i < 3; i++) {
                const futureField = this.pathfinderFields[i];
                if (futureField && futureField.shape == "door") {
                    const door = doors.find(d => d.initialTransform.position.yZeroed.equals(futureField.realPos.yZeroed));
                    if (door) {
                        if (door.canInteract) {
                            door.toggle();
                        }
                    }
                    break;
                }
            }
            this.transform.position = this.transform.position.add(this.dir.multiply(this.followingSpeed * deltaTime));
            // this.followingPlayer = null
        }
    }
    makeStepIfWalking(deltaTime, shapes) {
        if (!this.followingPlayer && this.initialState == "walking" && this.state == "walking") {
            const raycaster = _Raycaster__WEBPACK_IMPORTED_MODULE_4__["default"].fromDir(this.transform.position, this.dir);
            const nextShape = raycaster.nextShape(shapes);
            if (nextShape) {
                const distance = this.transform.position.distanceTo(nextShape.transform.position);
                if (distance <= _Config__WEBPACK_IMPORTED_MODULE_2__["default"].gridSize && !this.nextDir) {
                    this.nextDir = this.dir.inverted;
                    this.state = "standing";
                    setTimeout(() => {
                        this.dir = this.nextDir;
                        setTimeout(() => {
                            this.state = "walking";
                            this.nextDir = null;
                        }, 500);
                    }, 1000);
                }
                this.transform.position = this.transform.position.add(this.dir.multiply(this.followingSpeed * deltaTime));
            }
        }
    }
    rotateTexture(targetPosition) {
        let toTargetDir = targetPosition.substract(this.transform.position).yZeroed.normalize;
        let toTargetAngle = Math.atan2(toTargetDir.z, toTargetDir.x);
        let walkingAngle = Math.atan2(this.dir.z, this.dir.x);
        let angleDiff = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.radToDeg)(walkingAngle - toTargetAngle);
        if (angleDiff > 180)
            angleDiff -= 360;
        if (angleDiff < -180)
            angleDiff += 360;
        const correctedDiff = angleDiff > 0 ? angleDiff + 22.5 : angleDiff - 22.5;
        this.textureRotation = parseInt((correctedDiff / 45).toString());
        return angleDiff;
    }
    canSee(target, shapes) {
        const raycaster = _Raycaster__WEBPACK_IMPORTED_MODULE_4__["default"].fromTo(this.transform.position, target.yZeroed);
        const nextShape = raycaster.nextShape(shapes);
        if (!nextShape)
            return false;
        return nextShape.transform.position.yZeroed.distanceTo(this.transform.position.yZeroed) > this.transform.position.yZeroed.distanceTo(target.yZeroed);
    }
    tryToShoot(camera, shapes) {
        if (this.state == 'dead' || this.state == "dying" || this.state == "hit" || !this.followingPlayer)
            return false;
        if (_ui_UI__WEBPACK_IMPORTED_MODULE_6__["default"].instance.health > 0) {
            if (this.transform.position.distanceTo(camera.transform.position) <= this.shootingDistance
                && this.canSee(camera.transform.position, shapes)) {
                this.state = "shooting";
                return true;
            }
            else {
                this.state = "walking";
                return false;
            }
            // this.state = 'walking'
        }
        else {
            this.state = 'standing';
            this.followingPlayer = null;
        }
        return false;
    }
    get textureSize() {
        return 1 / this.texturesInLine;
    }
    setTexture(textureNumber) {
        // if (textureNumber == this.textureNumber) {
        //     console.log('olewam', textureNumber)
        //     return
        // }
        this.textureNumber = textureNumber;
        if (this.state == 'walking' || this.state == 'standing') {
            if (this.textureRotation >= 0) {
                textureNumber += this.textureRotation;
            }
            else {
                textureNumber += this.textureRotation + this.texturesInLine;
            }
        }
        let verticesVec2Array = _utils__WEBPACK_IMPORTED_MODULE_5__.Vec2.arrayToVec2Array(this.initialTexcoords);
        const texturePos = new _utils__WEBPACK_IMPORTED_MODULE_5__.Vec2(textureNumber % this.texturesInLine, Math.floor(textureNumber / this.texturesInLine)).multiply(this.textureSize);
        verticesVec2Array = verticesVec2Array.map(vertex => vertex.multiply(this.textureSize).add(texturePos));
        this.TEXCOORDS = new Float32Array(_utils__WEBPACK_IMPORTED_MODULE_5__.Vec2.vec2ArrayToArray(verticesVec2Array));
    }
}


/***/ }),

/***/ "./src/game/components/shapes/level/GridBoundingBox.ts":
/*!*************************************************************!*\
  !*** ./src/game/components/shapes/level/GridBoundingBox.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridBoundingBox": () => (/* binding */ GridBoundingBox)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/game/components/utils/index.ts");

class GridBoundingBox {
    constructor(center, size) {
        this.center = center;
        this.size = size;
    }
    get halfSize() {
        return this.size.multiply(0.5);
    }
    get negativeCorner() {
        return this.center.substract(this.halfSize);
    }
    get positiveCorner() {
        return this.center.add(this.halfSize);
    }
    isColliding(v) {
        const pos = this.positiveCorner;
        const neg = this.negativeCorner;
        return neg.x <= v.x && v.x <= pos.x && neg.z <= v.z && v.z <= pos.z;
    }
    pointSide(v) {
        const diff = this.center.substract(v);
        const diffRotated = diff;
        let pointSide = _utils__WEBPACK_IMPORTED_MODULE_0__.Vec3.zero;
        if (diffRotated.x > this.halfSize.x) {
            pointSide.x = -1;
        }
        if (diffRotated.x < -this.halfSize.x) {
            pointSide.x = 1;
        }
        if (diffRotated.z > this.halfSize.z) {
            pointSide.z = -1;
        }
        if (diffRotated.z < -this.halfSize.z) {
            pointSide.z = 1;
        }
        return pointSide;
    }
    nearestDistanceDirection(v) {
        const side = this.pointSide(v);
        if (side.x && side.z) {
            return v.substract(this.nearestCorner(v)).yZeroed.normalize;
        }
        else {
            return side;
        }
    }
    // only a non rotated cuboid
    pointFarthestSide(v) {
        const diff = this.center.substract(v);
        let pointSide = this.pointSide(v);
        if (pointSide.x && pointSide.z) {
            if (Math.abs(diff.x) > Math.abs(diff.z)) {
                pointSide.z = 0;
            }
            else {
                pointSide.x = 0;
            }
        }
        return pointSide;
    }
    // cuboid rotated by any value
    nearestCorner(v) {
        const diff = this.center.substract(v);
        if (diff.x <= 0 && diff.z <= 0) {
            return this.center.substract(this.halfSize);
        }
        else if (diff.x <= 0 && diff.z >= 0) {
            const cornerRelative = new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec3(-this.halfSize.x, 0, this.halfSize.z);
            return this.center.substract(cornerRelative);
        }
        else if (diff.x >= 0 && diff.z <= 0) {
            const cornerRelative = new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec3(this.halfSize.x, 0, -this.halfSize.z);
            return this.center.substract(cornerRelative);
        }
        else if (diff.x >= 0 && diff.z >= 0) {
            return this.center.add(this.halfSize);
        }
    }
    basePointsYZeroed() {
        const a = this.halfSize.yZeroed;
        return [
            this.center.add(a),
            this.center.add(a.xInverted),
            this.center.add(a.yInverted),
            this.center.substract(a),
        ];
    }
}


/***/ }),

/***/ "./src/game/components/shapes/level/Lever.ts":
/*!***************************************************!*\
  !*** ./src/game/components/shapes/level/Lever.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Lever)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/game/components/utils/index.ts");
/* harmony import */ var _Cuboid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cuboid */ "./src/game/components/shapes/level/Cuboid.ts");
/* harmony import */ var _textures_wall_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../textures/wall.png */ "./src/game/textures/wall.png");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Config */ "./src/game/components/Config.ts");
/* harmony import */ var _ui_UI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/UI */ "./src/game/components/shapes/ui/UI.ts");
/* harmony import */ var _BetterAudio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../BetterAudio */ "./src/game/components/BetterAudio.ts");
/* harmony import */ var _sounds_WSND0030_wav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../sounds/WSND0030.wav */ "./src/game/sounds/WSND0030.wav");







class Lever extends _Cuboid__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(gl, program, value) {
        super(gl, program);
        this.importedTexture = _textures_wall_png__WEBPACK_IMPORTED_MODULE_2__;
        this.texturesInLine = 16;
        this.audio = new _BetterAudio__WEBPACK_IMPORTED_MODULE_5__["default"](_sounds_WSND0030_wav__WEBPACK_IMPORTED_MODULE_6__);
        this.canInteract = true;
        this.lightTexture = 101;
        this.pressedTexture = 113;
        this.value = value;
    }
    onCreation() {
        this.transform.scale = _utils__WEBPACK_IMPORTED_MODULE_0__.Vec3.one.multiply(_Config__WEBPACK_IMPORTED_MODULE_3__["default"].gridSize);
        this.setTexture(this.lightTexture);
    }
    updateBuffers() {
        super.updateBuffers();
    }
    get darkTexture() {
        return this.lightTexture;
    }
    toggle() {
        if (_ui_UI__WEBPACK_IMPORTED_MODULE_4__["default"].instance.state != 'end') {
            this.audio.play();
            this.setTexture(this.pressedTexture);
            _ui_UI__WEBPACK_IMPORTED_MODULE_4__["default"].instance.state = 'end';
            _ui_UI__WEBPACK_IMPORTED_MODULE_4__["default"].instance.levelEnd.calculateValues();
            _ui_UI__WEBPACK_IMPORTED_MODULE_4__["default"].instance.endTime = new Date();
            this.updateBuffers();
        }
    }
}


/***/ }),

/***/ "./src/game/components/shapes/level/Plane.ts":
/*!***************************************************!*\
  !*** ./src/game/components/shapes/level/Plane.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Plane)
/* harmony export */ });
/* harmony import */ var _textures_uvTest_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../textures/uvTest.png */ "./src/game/textures/uvTest.png");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/game/components/utils/index.ts");
/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shape */ "./src/game/components/shapes/level/Shape.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Config */ "./src/game/components/Config.ts");




class Plane extends _Shape__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(gl, program) {
        super(gl, program);
        this.VERTICES = new Float32Array([
            0.5, 0, 0.5,
            -0.5, 0, -0.5,
            -0.5, 0, 0.5,
            0.5, 0, -0.5,
            -0.5, 0, -0.5,
            0.5, 0, 0.5,
        ]);
        this.TEXCOORDS = new Float32Array([
            1, 1,
            0, 0,
            0, 1,
            1, 0,
            0, 0,
            1, 1,
        ]);
        this.COLORS = new Uint8Array([
            80, 70, 200,
            80, 70, 200,
            80, 70, 200,
            80, 70, 200,
            80, 70, 200,
            80, 70, 200,
        ]);
        this.importedTexture = _textures_uvTest_png__WEBPACK_IMPORTED_MODULE_0__;
        this.transform.scale.set(_Config__WEBPACK_IMPORTED_MODULE_3__["default"].gridSize, 1, _Config__WEBPACK_IMPORTED_MODULE_3__["default"].gridSize);
    }
    setColor(color) {
        let colors = _utils__WEBPACK_IMPORTED_MODULE_1__.Vec3.arrayToVec3Array(this.COLORS);
        colors = colors.map(c => (0,_utils__WEBPACK_IMPORTED_MODULE_1__.hexToRgb)(color));
        this.COLORS = new Uint8Array(_utils__WEBPACK_IMPORTED_MODULE_1__.Vec3.vec3ArrayToArray(colors));
    }
}


/***/ }),

/***/ "./src/game/components/shapes/level/Shape.ts":
/*!***************************************************!*\
  !*** ./src/game/components/shapes/level/Shape.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Shape)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/game/components/utils/index.ts");

class Shape {
    constructor(gl, program) {
        this.firstBufferReady = false;
        this.transform = new _utils__WEBPACK_IMPORTED_MODULE_0__.Transform();
        this.bb = null;
        this.texturedWidth = 1;
        this.gl = gl;
        this.program = program;
        setTimeout(() => {
            this.updateBuffers();
        });
    }
    get verticesTransformed() {
        return this.verticesVec3Array.map(vec => {
            let a = _utils__WEBPACK_IMPORTED_MODULE_0__.m4.identity;
            a = _utils__WEBPACK_IMPORTED_MODULE_0__.m4.translate(a, vec.multiplyByVector(this.transform.scale));
            a = _utils__WEBPACK_IMPORTED_MODULE_0__.m4.rotate(a, this.transform.rotation);
            a = _utils__WEBPACK_IMPORTED_MODULE_0__.m4.translate(this.transform.matrix, _utils__WEBPACK_IMPORTED_MODULE_0__.m4.getPositionVector(a));
            return _utils__WEBPACK_IMPORTED_MODULE_0__.m4.getPositionVector(a);
        });
    }
    get verticesCount() {
        return this.VERTICES.length / 3;
    }
    get verticesVec3Array() {
        return _utils__WEBPACK_IMPORTED_MODULE_0__.Vec3.arrayToVec3Array(this.VERTICES);
    }
    get xVertices() {
        return this.VERTICES.filter((_, index) => index % 3 == 0);
    }
    get yVertices() {
        return this.VERTICES.filter((_, index) => index % 3 == 1);
    }
    get zVertices() {
        return this.VERTICES.filter((_, index) => index % 3 == 2);
    }
    get size() {
        return new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec3((Math.max(...this.xVertices) - Math.min(...this.xVertices)) * this.transform.scale.x, (Math.max(...this.yVertices) - Math.min(...this.yVertices)) * this.transform.scale.y, (Math.max(...this.zVertices) - Math.min(...this.zVertices)) * this.transform.scale.z);
    }
    get sizeRotated() {
        if (!this.transform.rotation.y)
            return this.size;
        const rotationMatrix = _utils__WEBPACK_IMPORTED_MODULE_0__.m4.yRotation(this.transform.rotation.y);
        return this.size.transformMat4(rotationMatrix).abs;
    }
    get halfSize() {
        return this.size.multiply(0.5);
    }
    get halfSizeRotated() {
        return this.sizeRotated.multiply(0.5);
    }
    get texturedSize() {
        return this.size.multiplyByVector(_utils__WEBPACK_IMPORTED_MODULE_0__.Vec3.right.multiply(this.texturedWidth));
    }
    setInitialState() {
        this.initialTransform = this.transform.clone();
        this.initialTexcoords = this.TEXCOORDS.slice(0);
        this.onCreation();
        this.updateBuffers();
    }
    onCreation() { }
    updateBuffers() {
        if (!this.firstBufferReady) {
            this.setPositionBuffer();
            this.setColorBuffer();
        }
        if (this.TEXCOORDS) {
            this.setTexcoordsBuffer();
        }
        this.firstBufferReady = true;
    }
    bindGeometry(positionLocation) {
        this.gl.enableVertexAttribArray(positionLocation);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        const size = 3;
        const type = this.gl.FLOAT;
        const normalize = false;
        const stride = 0;
        const offset = 0;
        this.gl.vertexAttribPointer(positionLocation, size, type, normalize, stride, offset);
    }
    bindColors(colorLocation) {
        // Turn on the color attribute
        this.gl.enableVertexAttribArray(colorLocation);
        // Bind the color buffer.
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorBuffer);
        // Tell the attribute how to get data out of colorBuffer (ARRAY_BUFFER)
        const size = 3; // 3 components per iteration
        const type = this.gl.UNSIGNED_BYTE; // the data is 8bit unsigned values
        const normalize = true; // normalize the data (convert from 0-255 to 0-1)
        const stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
        const offset = 0; // start at the beginning of the buffer
        this.gl.vertexAttribPointer(colorLocation, size, type, normalize, stride, offset);
    }
    bindTexture(texcoordsLocation) {
        // Turn on the color attribute
        this.gl.enableVertexAttribArray(texcoordsLocation);
        // Bind the color buffer.
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.texcoordsBuffer);
        // Tell the attribute how to get data out of colorBuffer (ARRAY_BUFFER)
        const size = 2; // 2 components per iteration
        const type = this.gl.FLOAT; // the data is 8bit unsigned values
        const normalize = false; // normalize the data (convert from 0-255 to 0-1)
        const stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
        const offset = 0; // start at the beginning of the buffer
        this.gl.vertexAttribPointer(texcoordsLocation, size, type, normalize, stride, offset);
    }
    bindTransform(matrixLocation, viewProjectionMatrix) {
        let matrix = this.transform.matrix;
        matrix = _utils__WEBPACK_IMPORTED_MODULE_0__.m4.multiply(matrix, viewProjectionMatrix);
        // Set the matrix.
        this.gl.uniformMatrix4fv(matrixLocation, false, matrix);
    }
    draw(viewProjectionMatrix) {
        if (!this.firstBufferReady)
            return;
        this.program.use();
        this.bindGeometry(this.program.info.attributes.position);
        if (this.program.info.attributes.color) {
            this.bindColors(this.program.info.attributes.color);
        }
        if (this.program.info.attributes.texcoord) {
            this.bindTexture(this.program.info.attributes.texcoord);
        }
        this.bindTransform(this.program.info.uniforms.matrix, viewProjectionMatrix);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.webglTexture);
        this._draw();
    }
    _draw() {
        const primitiveType = this.gl.TRIANGLES;
        const offset = 0;
        const count = this.verticesCount;
        this.gl.drawArrays(primitiveType, offset, count);
    }
    setPositionBuffer() {
        this.positionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, this.VERTICES, this.gl.STATIC_DRAW);
    }
    setColorBuffer() {
        this.colorBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, this.COLORS, this.gl.STATIC_DRAW);
    }
    setTexcoordsBuffer() {
        this.texcoordsBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.texcoordsBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, this.TEXCOORDS, this.gl.STATIC_DRAW);
    }
}


/***/ }),

/***/ "./src/game/components/shapes/level/Wall.ts":
/*!**************************************************!*\
  !*** ./src/game/components/shapes/level/Wall.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Wall)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/game/components/utils/index.ts");
/* harmony import */ var _Cuboid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cuboid */ "./src/game/components/shapes/level/Cuboid.ts");
/* harmony import */ var _textures_wall_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../textures/wall.png */ "./src/game/textures/wall.png");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Config */ "./src/game/components/Config.ts");




class Wall extends _Cuboid__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(gl, program, value) {
        super(gl, program);
        this.importedTexture = _textures_wall_png__WEBPACK_IMPORTED_MODULE_2__;
        this.texturesInLine = 16;
        this.nearDoorLightTexture = 106;
        this.nearDoorDarkTexture = 107;
        this.value = value;
    }
    onCreation() {
        this.transform.scale = _utils__WEBPACK_IMPORTED_MODULE_0__.Vec3.one.multiply(_Config__WEBPACK_IMPORTED_MODULE_3__["default"].gridSize);
        this.setTexture(this.lightTexture);
        this.setTexture(this.darkTexture, 2);
        this.setTexture(this.darkTexture, 3);
    }
    get textureColor() {
        for (let color of ['gray', 'blue', 'brown']) {
            if (this.value.toLowerCase().includes(color)) {
                return color;
            }
        }
        return 'gray';
    }
    get textureName() {
        for (let lastLetter of ['F', 'E', 'H', 'B', 'S', 'E', 'H']) {
            if (this.value.substr(-1) == lastLetter) {
                return lastLetter;
            }
        }
        return null;
    }
    get lightTexture() {
        if (this.transform.rotation.y) {
            return this._darkTexture;
        }
        else {
            return this._lightTexture;
        }
    }
    get darkTexture() {
        if (this.transform.rotation.y) {
            return this._lightTexture;
        }
        else {
            return this._darkTexture;
        }
    }
    get _lightTexture() {
        switch (this.value) {
            case 'exitRailWall': return 100;
            case 'secretExitRailWall': return 122;
        }
        switch (this.textureColor) {
            case 'gray':
                switch (this.textureName) {
                    case 'F': return 4; //flag
                    case 'H': return 16; //hitler
                    case 'E': return 20; //eagle
                    default: return 0;
                }
            case 'blue':
                switch (this.textureName) {
                    case 'B': return 18; //bars
                    case 'S': return 32; //skeleton bars
                    default: return 34;
                }
            case 'brown':
                switch (this.textureName) {
                    case 'E': return 48; //eagle
                    case 'H': return 50; //hitler
                    default: return 52;
                }
        }
    }
    get _darkTexture() {
        switch (this.value) {
            case 'exitRailWall': return this._lightTexture;
            case 'secretExitRailWall': return this._lightTexture;
            default: return this._lightTexture + 1;
        }
    }
}


/***/ }),

/***/ "./src/game/components/shapes/level/WallSecretDoor.ts":
/*!************************************************************!*\
  !*** ./src/game/components/shapes/level/WallSecretDoor.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WallSecretDoor)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/game/components/utils/index.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Config */ "./src/game/components/Config.ts");
/* harmony import */ var _Wall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wall */ "./src/game/components/shapes/level/Wall.ts");
/* harmony import */ var _sounds_WSND0015_wav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../sounds/WSND0015.wav */ "./src/game/sounds/WSND0015.wav");
/* harmony import */ var _BetterAudio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../BetterAudio */ "./src/game/components/BetterAudio.ts");
/* harmony import */ var _ui_UI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/UI */ "./src/game/components/shapes/ui/UI.ts");






class WallSecretDoor extends _Wall__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor() {
        super(...arguments);
        this.canInteract = true;
        this.dirToCalculate = false;
        this.opening = false;
        this.openingSpeed = _Config__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize * 0.7;
        this.audio = new _BetterAudio__WEBPACK_IMPORTED_MODULE_4__["default"](_sounds_WSND0015_wav__WEBPACK_IMPORTED_MODULE_3__);
    }
    toggle() {
        if (!this.opening) {
            this.opening = true;
            _ui_UI__WEBPACK_IMPORTED_MODULE_5__["default"].instance.secretsFound++;
            this.audio.play();
        }
    }
    update(deltaTime, camera) {
        if (this.opening) {
            if (this.dirToCalculate) {
                this.calculateDir(camera);
            }
            this.transform.position = this.transform.position.add(this.dir.multiply(deltaTime * this.openingSpeed));
            if (this.initialTransform.position.distanceTo(this.transform.position) >= _Config__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize * 2) {
                this.opening = false;
                this.canInteract = false;
            }
        }
    }
    calculateDir(camera) {
        this.dir = _utils__WEBPACK_IMPORTED_MODULE_0__.Vec3.fromAngle(this.transform.rotation.y);
        const toCamera = camera.transform.position.substract(this.transform.position);
        if ((this.dir.x > 0 && toCamera.x > 0) || (this.dir.x < 0 && toCamera.x < 0)) {
            this.dir.x = -this.dir.x;
        }
        if ((this.dir.z > 0 && toCamera.z > 0) || (this.dir.z < 0 && toCamera.z < 0)) {
            this.dir.z = -this.dir.z;
        }
        this.dirToCalculate = false;
    }
}


/***/ }),

/***/ "./src/game/components/shapes/level/decorations/Decoration.ts":
/*!********************************************************************!*\
  !*** ./src/game/components/shapes/level/decorations/Decoration.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Decoration)
/* harmony export */ });
/* harmony import */ var _textures_objects_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../textures/objects.png */ "./src/game/textures/objects.png");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Config */ "./src/game/components/Config.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./src/game/components/utils/index.ts");
/* harmony import */ var _Plane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Plane */ "./src/game/components/shapes/level/Plane.ts");
/* harmony import */ var _common_DecorationMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../common/DecorationMap */ "./src/common/DecorationMap.ts");
/* harmony import */ var _GridBoundingBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../GridBoundingBox */ "./src/game/components/shapes/level/GridBoundingBox.ts");






class Decoration extends _Plane__WEBPACK_IMPORTED_MODULE_3__["default"] {
    constructor(gl, program, type) {
        super(gl, program);
        this.importedTexture = _textures_objects_png__WEBPACK_IMPORTED_MODULE_0__;
        this.firstTextureSet = false;
        this.texturesInLine = 8;
        this.type = type;
    }
    createBB() {
        this.bb = new _GridBoundingBox__WEBPACK_IMPORTED_MODULE_5__.GridBoundingBox(this.transform.position, _utils__WEBPACK_IMPORTED_MODULE_2__.Vec3.one.multiply(_Config__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize));
    }
    get textureNumber() {
        return _common_DecorationMap__WEBPACK_IMPORTED_MODULE_4__["default"].get(this.type);
    }
    onCreation() {
        this.transform.scale = _utils__WEBPACK_IMPORTED_MODULE_2__.Vec3.one.multiply(_Config__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize);
        this.transform.rotation.x = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.degToRad)(90);
        this.setTexture(this.textureNumber);
    }
    lookAtCamera(cameraY) {
        this.transform.rotation.y = -cameraY;
    }
    get textureSize() {
        return 1 / this.texturesInLine;
    }
    setTexture(textureNumber) {
        let verticesVec2Array = _utils__WEBPACK_IMPORTED_MODULE_2__.Vec2.arrayToVec2Array(this.initialTexcoords);
        const texturePos = new _utils__WEBPACK_IMPORTED_MODULE_2__.Vec2(textureNumber % this.texturesInLine, Math.floor(textureNumber / this.texturesInLine)).multiply(this.textureSize);
        verticesVec2Array = verticesVec2Array.map(vertex => vertex.multiply(this.textureSize).add(texturePos));
        this.TEXCOORDS = new Float32Array(_utils__WEBPACK_IMPORTED_MODULE_2__.Vec2.vec2ArrayToArray(verticesVec2Array));
        if (!this.firstTextureSet) {
            this.firstTextureSet = true;
            this.updateBuffers();
        }
    }
}


/***/ }),

/***/ "./src/game/components/shapes/level/pickups/Ammo.ts":
/*!**********************************************************!*\
  !*** ./src/game/components/shapes/level/pickups/Ammo.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ammo)
/* harmony export */ });
/* harmony import */ var _ui_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/UI */ "./src/game/components/shapes/ui/UI.ts");
/* harmony import */ var _Pickup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pickup */ "./src/game/components/shapes/level/pickups/Pickup.ts");
/* harmony import */ var _sounds_P_AMMO_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../sounds/P_AMMO.wav */ "./src/game/sounds/P_AMMO.wav");
/* harmony import */ var _BetterAudio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../BetterAudio */ "./src/game/components/BetterAudio.ts");




class Ammo extends _Pickup__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor() {
        super(...arguments);
        this.textureNumber = 43;
        this.ammoCount = 4;
        this.audio = new _BetterAudio__WEBPACK_IMPORTED_MODULE_3__["default"](_sounds_P_AMMO_wav__WEBPACK_IMPORTED_MODULE_2__);
    }
    onPickedUp(camera) {
        _ui_UI__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ammo += this.ammoCount;
        if (_ui_UI__WEBPACK_IMPORTED_MODULE_0__["default"].instance.weapon == 'knife') {
            _ui_UI__WEBPACK_IMPORTED_MODULE_0__["default"].instance.weapon = _ui_UI__WEBPACK_IMPORTED_MODULE_0__["default"].instance.weapons.availableTypes[_ui_UI__WEBPACK_IMPORTED_MODULE_0__["default"].instance.weapons.availableTypes.length - 1];
        }
    }
}


/***/ }),

/***/ "./src/game/components/shapes/level/pickups/DogFood.ts":
/*!*************************************************************!*\
  !*** ./src/game/components/shapes/level/pickups/DogFood.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DogFood)
/* harmony export */ });
/* harmony import */ var _HealthItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HealthItem */ "./src/game/components/shapes/level/pickups/HealthItem.ts");
/* harmony import */ var _sounds_P_FOOD_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../sounds/P_FOOD.wav */ "./src/game/sounds/P_FOOD.wav");
/* harmony import */ var _BetterAudio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../BetterAudio */ "./src/game/components/BetterAudio.ts");



class DogFood extends _HealthItem__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.healthRestored = 4;
        this.textureNumber = 11;
        this.audio = new _BetterAudio__WEBPACK_IMPORTED_MODULE_2__["default"](_sounds_P_FOOD_wav__WEBPACK_IMPORTED_MODULE_1__);
    }
}


/***/ }),

/***/ "./src/game/components/shapes/level/pickups/Flag.ts":
/*!**********************************************************!*\
  !*** ./src/game/components/shapes/level/pickups/Flag.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Flag)
/* harmony export */ });
/* harmony import */ var _Pickup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pickup */ "./src/game/components/shapes/level/pickups/Pickup.ts");
/* harmony import */ var _sounds_P_AMMO_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../sounds/P_AMMO.wav */ "./src/game/sounds/P_AMMO.wav");
/* harmony import */ var _BetterAudio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../BetterAudio */ "./src/game/components/BetterAudio.ts");



class Flag extends _Pickup__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.textureNumber = 6;
        this.audio = new _BetterAudio__WEBPACK_IMPORTED_MODULE_2__["default"](_sounds_P_AMMO_wav__WEBPACK_IMPORTED_MODULE_1__);
    }
    onCreation() {
        super.onCreation();
        const scale = 0.5;
        this.transform.scale = this.transform.scale.multiply(scale);
        this.transform.position.y = -50;
    }
    onPickedUp(camera) {
    }
}


/***/ }),

/***/ "./src/game/components/shapes/level/pickups/Food.ts":
/*!**********************************************************!*\
  !*** ./src/game/components/shapes/level/pickups/Food.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Food)
/* harmony export */ });
/* harmony import */ var _HealthItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HealthItem */ "./src/game/components/shapes/level/pickups/HealthItem.ts");
/* harmony import */ var _sounds_P_FOOD_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../sounds/P_FOOD.wav */ "./src/game/sounds/P_FOOD.wav");
/* harmony import */ var _BetterAudio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../BetterAudio */ "./src/game/components/BetterAudio.ts");



class Food extends _HealthItem__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.healthRestored = 10;
        this.textureNumber = 41;
        this.audio = new _BetterAudio__WEBPACK_IMPORTED_MODULE_2__["default"](_sounds_P_FOOD_wav__WEBPACK_IMPORTED_MODULE_1__);
    }
}


/***/ }),

/***/ "./src/game/components/shapes/level/pickups/GoldenBox.ts":
/*!***************************************************************!*\
  !*** ./src/game/components/shapes/level/pickups/GoldenBox.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GoldenBox)
/* harmony export */ });
/* harmony import */ var _PointItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PointItem */ "./src/game/components/shapes/level/pickups/PointItem.ts");
/* harmony import */ var _sounds_T_CHEST_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../sounds/T_CHEST.wav */ "./src/game/sounds/T_CHEST.wav");
/* harmony import */ var _BetterAudio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../BetterAudio */ "./src/game/components/BetterAudio.ts");



class GoldenBox extends _PointItem__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.textureNumber = 51;
        this.givenScore = 1000;
        this.audio = new _BetterAudio__WEBPACK_IMPORTED_MODULE_2__["default"](_sounds_T_CHEST_wav__WEBPACK_IMPORTED_MODULE_1__);
    }
}


/***/ }),

/***/ "./src/game/components/shapes/level/pickups/GoldenCross.ts":
/*!*****************************************************************!*\
  !*** ./src/game/components/shapes/level/pickups/GoldenCross.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GoldenCross)
/* harmony export */ });
/* harmony import */ var _PointItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PointItem */ "./src/game/components/shapes/level/pickups/PointItem.ts");
/* harmony import */ var _sounds_T_CROSS_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../sounds/T_CROSS.wav */ "./src/game/sounds/T_CROSS.wav");
/* harmony import */ var _BetterAudio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../BetterAudio */ "./src/game/components/BetterAudio.ts");



class GoldenCross extends _PointItem__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.textureNumber = 49;
        this.givenScore = 100;
        this.audio = new _BetterAudio__WEBPACK_IMPORTED_MODULE_2__["default"](_sounds_T_CROSS_wav__WEBPACK_IMPORTED_MODULE_1__);
    }
}


/***/ }),

/***/ "./src/game/components/shapes/level/pickups/GoldenCrown.ts":
/*!*****************************************************************!*\
  !*** ./src/game/components/shapes/level/pickups/GoldenCrown.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GoldenCrown)
/* harmony export */ });
/* harmony import */ var _PointItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PointItem */ "./src/game/components/shapes/level/pickups/PointItem.ts");
/* harmony import */ var _sounds_T_CROWN_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../sounds/T_CROWN.wav */ "./src/game/sounds/T_CROWN.wav");
/* harmony import */ var _BetterAudio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../BetterAudio */ "./src/game/components/BetterAudio.ts");



class GoldenCrown extends _PointItem__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.textureNumber = 52;
        this.givenScore = 5000;
        this.audio = new _BetterAudio__WEBPACK_IMPORTED_MODULE_2__["default"](_sounds_T_CROWN_wav__WEBPACK_IMPORTED_MODULE_1__);
    }
}


/***/ }),

/***/ "./src/game/components/shapes/level/pickups/GoldenCup.ts":
/*!***************************************************************!*\
  !*** ./src/game/components/shapes/level/pickups/GoldenCup.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GoldenCup)
/* harmony export */ });
/* harmony import */ var _PointItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PointItem */ "./src/game/components/shapes/level/pickups/PointItem.ts");
/* harmony import */ var _sounds_T_CUP_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../sounds/T_CUP.wav */ "./src/game/sounds/T_CUP.wav");
/* harmony import */ var _BetterAudio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../BetterAudio */ "./src/game/components/BetterAudio.ts");



class GoldenCup extends _PointItem__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.textureNumber = 50;
        this.givenScore = 500;
        this.audio = new _BetterAudio__WEBPACK_IMPORTED_MODULE_2__["default"](_sounds_T_CUP_wav__WEBPACK_IMPORTED_MODULE_1__);
    }
}


/***/ }),

/***/ "./src/game/components/shapes/level/pickups/HealthItem.ts":
/*!****************************************************************!*\
  !*** ./src/game/components/shapes/level/pickups/HealthItem.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HealthItem)
/* harmony export */ });
/* harmony import */ var _ui_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/UI */ "./src/game/components/shapes/ui/UI.ts");
/* harmony import */ var _Pickup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pickup */ "./src/game/components/shapes/level/pickups/Pickup.ts");


class HealthItem extends _Pickup__WEBPACK_IMPORTED_MODULE_1__["default"] {
    onPickedUp(camera) {
        _ui_UI__WEBPACK_IMPORTED_MODULE_0__["default"].instance.health += this.healthRestored;
        if (_ui_UI__WEBPACK_IMPORTED_MODULE_0__["default"].instance.health > 100) {
            _ui_UI__WEBPACK_IMPORTED_MODULE_0__["default"].instance.health = 100;
        }
    }
    canBePickedUp(camera) {
        return _ui_UI__WEBPACK_IMPORTED_MODULE_0__["default"].instance.health < 100;
    }
}


/***/ }),

/***/ "./src/game/components/shapes/level/pickups/HealthPack.ts":
/*!****************************************************************!*\
  !*** ./src/game/components/shapes/level/pickups/HealthPack.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HealthPack)
/* harmony export */ });
/* harmony import */ var _HealthItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HealthItem */ "./src/game/components/shapes/level/pickups/HealthItem.ts");
/* harmony import */ var _sounds_P_MEDKIT_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../sounds/P_MEDKIT.wav */ "./src/game/sounds/P_MEDKIT.wav");
/* harmony import */ var _BetterAudio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../BetterAudio */ "./src/game/components/BetterAudio.ts");



class HealthPack extends _HealthItem__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.healthRestored = 25;
        this.textureNumber = 42;
        this.audio = new _BetterAudio__WEBPACK_IMPORTED_MODULE_2__["default"](_sounds_P_MEDKIT_wav__WEBPACK_IMPORTED_MODULE_1__);
    }
}


/***/ }),

/***/ "./src/game/components/shapes/level/pickups/Machinegun.ts":
/*!****************************************************************!*\
  !*** ./src/game/components/shapes/level/pickups/Machinegun.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Machinegun)
/* harmony export */ });
/* harmony import */ var _ui_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/UI */ "./src/game/components/shapes/ui/UI.ts");
/* harmony import */ var _Pickup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pickup */ "./src/game/components/shapes/level/pickups/Pickup.ts");
/* harmony import */ var _sounds_P_MGUN_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../sounds/P_MGUN.wav */ "./src/game/sounds/P_MGUN.wav");
/* harmony import */ var _BetterAudio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../BetterAudio */ "./src/game/components/BetterAudio.ts");




class Machinegun extends _Pickup__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor() {
        super(...arguments);
        this.textureNumber = 44;
        this.audio = new _BetterAudio__WEBPACK_IMPORTED_MODULE_3__["default"](_sounds_P_MGUN_wav__WEBPACK_IMPORTED_MODULE_2__);
    }
    onPickedUp(camera) {
        _ui_UI__WEBPACK_IMPORTED_MODULE_0__["default"].instance.weapons.availableTypes.push('machinegun');
        _ui_UI__WEBPACK_IMPORTED_MODULE_0__["default"].instance.weapon = 'machinegun';
    }
}


/***/ }),

/***/ "./src/game/components/shapes/level/pickups/Pickup.ts":
/*!************************************************************!*\
  !*** ./src/game/components/shapes/level/pickups/Pickup.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pickup)
/* harmony export */ });
/* harmony import */ var _textures_objects_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../textures/objects.png */ "./src/game/textures/objects.png");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Config */ "./src/game/components/Config.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./src/game/components/utils/index.ts");
/* harmony import */ var _Plane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Plane */ "./src/game/components/shapes/level/Plane.ts");
/* harmony import */ var _ui_UI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/UI */ "./src/game/components/shapes/ui/UI.ts");





class Pickup extends _Plane__WEBPACK_IMPORTED_MODULE_3__["default"] {
    constructor() {
        super(...arguments);
        this.importedTexture = _textures_objects_png__WEBPACK_IMPORTED_MODULE_0__;
        this.pickupRange = _Config__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize * 0.5;
        this.pickedUp = false;
        this.firstTextureSet = false;
        this.texturesInLine = 8;
    }
    onCreation() {
        this.transform.scale = _utils__WEBPACK_IMPORTED_MODULE_2__.Vec3.one.multiply(_Config__WEBPACK_IMPORTED_MODULE_1__["default"].gridSize);
        this.transform.rotation.x = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.degToRad)(90);
        this.setTexture(this.textureNumber);
    }
    lookAtCamera(cameraY) {
        this.transform.rotation.y = -cameraY;
    }
    get textureSize() {
        return 1 / this.texturesInLine;
    }
    canBePickedUp(camera) {
        return true;
    }
    pickUp(camera) {
        if (!this.pickedUp && this.canBePickedUp(camera)) {
            this.onPickedUp(camera);
            this.audio.play();
            _ui_UI__WEBPACK_IMPORTED_MODULE_4__["default"].instance.flashYellow();
            this.pickedUp = true;
        }
    }
    onPickedUp(camera) { }
    setTexture(textureNumber) {
        if (textureNumber == this.textureNumber && this.firstTextureSet)
            return;
        this.textureNumber = textureNumber;
        let verticesVec2Array = _utils__WEBPACK_IMPORTED_MODULE_2__.Vec2.arrayToVec2Array(this.initialTexcoords);
        const texturePos = new _utils__WEBPACK_IMPORTED_MODULE_2__.Vec2(textureNumber % this.texturesInLine, Math.floor(textureNumber / this.texturesInLine)).multiply(this.textureSize);
        verticesVec2Array = verticesVec2Array.map(vertex => vertex.multiply(this.textureSize).add(texturePos));
        this.TEXCOORDS = new Float32Array(_utils__WEBPACK_IMPORTED_MODULE_2__.Vec2.vec2ArrayToArray(verticesVec2Array));
        if (!this.firstTextureSet) {
            this.firstTextureSet = true;
            this.updateBuffers();
        }
    }
}


/***/ }),

/***/ "./src/game/components/shapes/level/pickups/PointItem.ts":
/*!***************************************************************!*\
  !*** ./src/game/components/shapes/level/pickups/PointItem.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointItem)
/* harmony export */ });
/* harmony import */ var _ui_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/UI */ "./src/game/components/shapes/ui/UI.ts");
/* harmony import */ var _Pickup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pickup */ "./src/game/components/shapes/level/pickups/Pickup.ts");


class PointItem extends _Pickup__WEBPACK_IMPORTED_MODULE_1__["default"] {
    onPickedUp(camera) {
        _ui_UI__WEBPACK_IMPORTED_MODULE_0__["default"].instance.score += this.givenScore;
        _ui_UI__WEBPACK_IMPORTED_MODULE_0__["default"].instance.treasuresFound++;
    }
}


/***/ }),

/***/ "./src/game/components/shapes/level/pickups/PowerUp.ts":
/*!*************************************************************!*\
  !*** ./src/game/components/shapes/level/pickups/PowerUp.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PowerUp)
/* harmony export */ });
/* harmony import */ var _ui_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/UI */ "./src/game/components/shapes/ui/UI.ts");
/* harmony import */ var _Pickup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pickup */ "./src/game/components/shapes/level/pickups/Pickup.ts");
/* harmony import */ var _sounds_P_LIFE_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../sounds/P_LIFE.wav */ "./src/game/sounds/P_LIFE.wav");
/* harmony import */ var _BetterAudio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../BetterAudio */ "./src/game/components/BetterAudio.ts");




class PowerUp extends _Pickup__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor() {
        super(...arguments);
        this.textureNumber = 56;
        this.audio = new _BetterAudio__WEBPACK_IMPORTED_MODULE_3__["default"](_sounds_P_LIFE_wav__WEBPACK_IMPORTED_MODULE_2__);
    }
    onPickedUp(camera) {
        _ui_UI__WEBPACK_IMPORTED_MODULE_0__["default"].instance.health = 100;
        _ui_UI__WEBPACK_IMPORTED_MODULE_0__["default"].instance.ammo += 25;
        _ui_UI__WEBPACK_IMPORTED_MODULE_0__["default"].instance.lives++;
    }
}


/***/ }),

/***/ "./src/game/components/shapes/ui/Crosshair.ts":
/*!****************************************************!*\
  !*** ./src/game/components/shapes/ui/Crosshair.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Crosshair)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/game/components/utils/index.ts");
/* harmony import */ var _level_Shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../level/Shape */ "./src/game/components/shapes/level/Shape.ts");


class Crosshair extends _level_Shape__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(gl, program) {
        super(gl, program);
        this.VERTICES = new Float32Array([
            1, 1, 0,
            -1, 1, 0,
            -1, -1, 0,
            -1, -1, 0,
            1, -1, 0,
            1, 1, 0,
        ]);
        this.COLORS = new Uint8Array([
            200, 70, 0.520,
            200, 70, 0.520,
            200, 70, 0.520,
            200, 70, 0.520,
            200, 70, 0.520,
            200, 70, 0.520,
        ]);
        this.transform.scale = _utils__WEBPACK_IMPORTED_MODULE_0__.Vec3.one.multiply(0.01);
        this.transform.position.z = -2;
    }
}


/***/ }),

/***/ "./src/game/components/shapes/ui/DeathScreen.ts":
/*!******************************************************!*\
  !*** ./src/game/components/shapes/ui/DeathScreen.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeathScreen)
/* harmony export */ });
class DeathScreen {
    constructor() {
        this.frame = 0;
        this.started = false;
        this.reversed = false;
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.ctx.imageSmoothingEnabled = false;
        this.canvas.width = 320;
        this.canvas.height = 200;
        this.pixels = this.ctx.createImageData(this.canvas.width, this.canvas.height);
    }
    start() {
        if (!this.started) {
            this.started = true;
            this.interval = setInterval(() => this.update(), 1);
        }
    }
    /* Write a pixel, just set alpha and RGB channels. */
    setPixelRed(x, y) {
        var offset = x * 4 + y * 4 * this.canvas.width;
        this.pixels.data[offset + 3] = 255;
        this.pixels.data[offset + 0] = 255;
        this.pixels.data[offset + 1] = 0;
        this.pixels.data[offset + 2] = 0;
    }
    setPixelTransparent(x, y) {
        var offset = x * 4 + y * 4 * this.canvas.width;
        this.pixels.data[offset + 3] = 0;
        this.pixels.data[offset + 0] = 0;
        this.pixels.data[offset + 1] = 0;
        this.pixels.data[offset + 2] = 0;
    }
    /* Transforms the 16 bit input into another seemingly psenduo random number
     * in the same range. Every input 16 bit input will generate a different
     * 16 bit output. This is called a Feistel network. */
    feistelNet(input) {
        var l = input & 0xff;
        var r = input >> 8;
        for (var i = 0; i < 8; i++) {
            var nl = r;
            var F = (((r * 11) + (r >> 5) + 7 * 127) ^ r) & 0xff;
            r = l ^ F;
            l = nl;
        }
        return ((r << 8) | l) & 0xffff;
    }
    /* Called once every millisecond, sets 100 pixels. */
    update() {
        /* Set 100 pixels per iteration otherwise it's too slow. */
        for (let j = 0; j < 200; j++) {
            if (this.frame == 65536) {
                setTimeout(() => {
                    this.reversed = true;
                    setTimeout(() => {
                        this.frame = 0;
                        this.started = false;
                        this.reversed = false;
                        clearInterval(this.interval);
                        this.interval = null;
                    }, 10000);
                }, 2000);
            }
            var fn = this.feistelNet(this.frame);
            var x = fn % this.canvas.width;
            var y = Math.floor(fn / this.canvas.width);
            if (x < this.canvas.width && y < this.canvas.height) {
                if (this.reversed) {
                    this.setPixelTransparent(x, y);
                }
                else {
                    this.setPixelRed(x, y);
                }
            }
            this.frame++;
        }
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(0, 0, 100, 100);
        this.ctx.putImageData(this.pixels, 0, 0);
    }
}


/***/ }),

/***/ "./src/game/components/shapes/ui/LevelEnd.ts":
/*!***************************************************!*\
  !*** ./src/game/components/shapes/ui/LevelEnd.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LevelEnd)
/* harmony export */ });
/* harmony import */ var _textures_levelEnd_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../textures/levelEnd.png */ "./src/game/textures/levelEnd.png");
/* harmony import */ var _textures_uiElements_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../textures/uiElements.png */ "./src/game/textures/uiElements.png");
/* harmony import */ var _textures_font_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../textures/font.png */ "./src/game/textures/font.png");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI */ "./src/game/components/shapes/ui/UI.ts");




class LevelEnd {
    constructor() {
        this.displayTime = '';
        this.bonusScore = 0;
        this.animation = 0;
        this.enemiesRatio = '0';
        this.secretsRatio = '0';
        this.treasuresRatio = '0';
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.ctx.imageSmoothingEnabled = false;
        this.canvas.width = 320;
        this.canvas.height = 200;
        this.levelEnd = new Image();
        this.levelEnd.src = _textures_levelEnd_png__WEBPACK_IMPORTED_MODULE_0__;
        this.uiElements = new Image();
        this.uiElements.src = _textures_uiElements_png__WEBPACK_IMPORTED_MODULE_1__;
        this.font = new Image();
        this.font.src = _textures_font_png__WEBPACK_IMPORTED_MODULE_2__;
        setInterval(() => {
            this.animation = this.animation ? 0 : 1;
        }, 500);
    }
    calculateValues() {
        _UI__WEBPACK_IMPORTED_MODULE_3__["default"].instance.endTime = new Date();
        const timeDiff = new Date(_UI__WEBPACK_IMPORTED_MODULE_3__["default"].instance.endTime.getTime() - _UI__WEBPACK_IMPORTED_MODULE_3__["default"].instance.startTime.getTime());
        this.displayTime = timeDiff.toTimeString().substring(3, 8);
        const playTimeSeconds = 90 - Math.floor(timeDiff.getTime() / 1000);
        this.bonusScore = playTimeSeconds * 500;
        this.enemiesRatio = (Math.floor(_UI__WEBPACK_IMPORTED_MODULE_3__["default"].instance.enemiesKilled / _UI__WEBPACK_IMPORTED_MODULE_3__["default"].instance.enemiesCount * 100)).toString();
        this.secretsRatio = (Math.floor(_UI__WEBPACK_IMPORTED_MODULE_3__["default"].instance.secretsFound / _UI__WEBPACK_IMPORTED_MODULE_3__["default"].instance.secretsCount * 100)).toString();
        this.treasuresRatio = (Math.floor(_UI__WEBPACK_IMPORTED_MODULE_3__["default"].instance.treasuresFound / _UI__WEBPACK_IMPORTED_MODULE_3__["default"].instance.treasuresCount * 100)).toString();
        for (let ratio of [this.enemiesRatio, this.secretsRatio, this.treasuresRatio]) {
            if (ratio == '100') {
                this.bonusScore += 10000;
            }
        }
        _UI__WEBPACK_IMPORTED_MODULE_3__["default"].instance.score += this.bonusScore;
    }
    update(deltaTime) {
        this.ctx.drawImage(this.levelEnd, 0, 0);
        this.ctx.drawImage(this.uiElements, 81 * this.animation, 60, 81, 87, 20, 16, 81, 87);
        this.drawTime();
        this.drawBonusScore();
        this.drawRatios();
    }
    drawTime() {
        this.drawDigit(parseInt(this.displayTime[0]), 208 + 16 * 0, 80);
        this.drawDigit(parseInt(this.displayTime[1]), 208 + 16 * 1, 80);
        this.drawDigit(parseInt(this.displayTime[3]), 208 + 8 + 16 * 2, 80);
        this.drawDigit(parseInt(this.displayTime[4]), 208 + 8 + 16 * 3, 80);
    }
    drawBonusScore() {
        this.drawDigit(parseInt(this.bonusScore.toString()[0]), 208 + 16 * 0, 56);
        this.drawDigit(parseInt(this.bonusScore.toString()[1]), 208 + 16 * 1, 56);
        this.drawDigit(parseInt(this.bonusScore.toString()[2]), 208 + 16 * 2, 56);
        this.drawDigit(parseInt(this.bonusScore.toString()[3]), 208 + 16 * 3, 56);
        this.drawDigit(parseInt(this.bonusScore.toString()[4]), 208 + 16 * 4, 56);
    }
    drawRatios() {
        for (let i = 0; i < this.enemiesRatio.length; i++) {
            this.drawDigit(parseInt(this.enemiesRatio[this.enemiesRatio.length - 1 - i]), 280 - 16 * i, 112 + 16 * 0);
        }
        for (let i = 0; i < this.secretsRatio.length; i++) {
            this.drawDigit(parseInt(this.secretsRatio[this.secretsRatio.length - 1 - i]), 280 - 16 * i, 112 + 16 * 1);
        }
        for (let i = 0; i < this.treasuresRatio.length; i++) {
            this.drawDigit(parseInt(this.treasuresRatio[this.treasuresRatio.length - 1 - i]), 280 - 16 * i, 112 + 16 * 2);
        }
    }
    drawDigit(digit, x, y) {
        this.ctx.drawImage(this.font, 16 * digit, 0, 16, 16, x, y, 16, 16);
    }
}


/***/ }),

/***/ "./src/game/components/shapes/ui/LoadingScreen.ts":
/*!********************************************************!*\
  !*** ./src/game/components/shapes/ui/LoadingScreen.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoadingScreen)
/* harmony export */ });
/* harmony import */ var _textures_uiElements_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../textures/uiElements.png */ "./src/game/textures/uiElements.png");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/game/components/shapes/ui/UI.ts");


class LoadingScreen {
    constructor() {
        this.progress = 0;
        this.state = "beforeLoading";
        this.loadingTime = 1;
        this.beforeLoadingDelay = 0.3;
        this.afterLoadingDelay = 0.3;
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.ctx.imageSmoothingEnabled = false;
        this.canvas.width = 320;
        this.canvas.height = 200;
        this.uiElements = new Image();
        this.uiElements.src = _textures_uiElements_png__WEBPACK_IMPORTED_MODULE_0__;
    }
    update(deltaTime) {
        if (_UI__WEBPACK_IMPORTED_MODULE_1__["default"].instance.state != 'loading')
            return;
        this.ctx.fillStyle = "#004141";
        this.ctx.fillRect(0, 0, 320, 160);
        this.ctx.drawImage(this.uiElements, 0, 160, 224, 48, 96 / 2, 112 / 2, 224, 48);
        if (this.state == 'beforeLoading') {
            this.progress += deltaTime;
            if (this.progress >= this.beforeLoadingDelay) {
                this.state = "loading";
                this.progress = 0;
            }
        }
        else if (this.state == 'loading') {
            this.progress += deltaTime / this.loadingTime;
            if (this.progress >= 1) {
                this.progress = 0;
                this.state = "afterLoading";
            }
        }
        else if (this.state == 'afterLoading') {
            this.progress += deltaTime;
            if (this.progress >= this.afterLoadingDelay) {
                this.progress = 0;
                _UI__WEBPACK_IMPORTED_MODULE_1__["default"].instance.state = 'game';
                _UI__WEBPACK_IMPORTED_MODULE_1__["default"].instance.startTime = new Date();
            }
        }
        if (this.state != 'beforeLoading') {
            let width = 214 * this.progress;
            if (this.state == 'afterLoading') {
                width = 214;
            }
            if (width > 0) {
                this.ctx.fillStyle = "#ff0000";
                this.ctx.fillRect(53, 101, width, 2);
                this.ctx.fillStyle = "#ff9e9e";
                this.ctx.fillRect(53, 101, width - 1, 1);
            }
        }
    }
}


/***/ }),

/***/ "./src/game/components/shapes/ui/Menu.ts":
/*!***********************************************!*\
  !*** ./src/game/components/shapes/ui/Menu.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _textures_menuUnselected_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../textures/menuUnselected.png */ "./src/game/textures/menuUnselected.png");
/* harmony import */ var _textures_menuSelected_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../textures/menuSelected.png */ "./src/game/textures/menuSelected.png");
/* harmony import */ var _textures_menuSelectedBlink_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../textures/menuSelectedBlink.png */ "./src/game/textures/menuSelectedBlink.png");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/game/components/utils/index.ts");
/* harmony import */ var _BetterAudio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../BetterAudio */ "./src/game/components/BetterAudio.ts");
/* harmony import */ var _sounds_M_MOVE_wav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../sounds/M_MOVE.wav */ "./src/game/sounds/M_MOVE.wav");
/* harmony import */ var _sounds_M_SELECT_wav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../sounds/M_SELECT.wav */ "./src/game/sounds/M_SELECT.wav");
/* harmony import */ var _sounds_M_BACK_wav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../sounds/M_BACK.wav */ "./src/game/sounds/M_BACK.wav");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UI */ "./src/game/components/shapes/ui/UI.ts");









class Menu {
    constructor() {
        this.audioSelect = new _BetterAudio__WEBPACK_IMPORTED_MODULE_4__["default"](_sounds_M_SELECT_wav__WEBPACK_IMPORTED_MODULE_6__);
        this.audioMove = new _BetterAudio__WEBPACK_IMPORTED_MODULE_4__["default"](_sounds_M_MOVE_wav__WEBPACK_IMPORTED_MODULE_5__);
        this.audioBack = new _BetterAudio__WEBPACK_IMPORTED_MODULE_4__["default"](_sounds_M_BACK_wav__WEBPACK_IMPORTED_MODULE_7__);
        this.option = 0;
        this.timeSinceLastBlink = 0;
        this.timeSinceBlinkStart = 0;
        this.blinkInterval = 1;
        this.blinkDuration = 0.1;
        this.optionSize = new _utils__WEBPACK_IMPORTED_MODULE_3__.Vec2(300, 26);
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 640;
        this.canvas.height = 400;
        this.menuUnselected = new Image();
        this.menuUnselected.src = _textures_menuUnselected_png__WEBPACK_IMPORTED_MODULE_0__;
        this.menuSelected = new Image();
        this.menuSelected.src = _textures_menuSelected_png__WEBPACK_IMPORTED_MODULE_1__;
        this.menuSelectedBlink = new Image();
        this.menuSelectedBlink.src = _textures_menuSelectedBlink_png__WEBPACK_IMPORTED_MODULE_2__;
        addEventListener("keydown", e => {
            if (_UI__WEBPACK_IMPORTED_MODULE_8__["default"].instance.state == "menu") {
                if (e.code == "ArrowDown" || e.code == "ArrowUp") {
                    if (this.option == 0) {
                        this.option = 8;
                    }
                    else {
                        this.option = 0;
                    }
                    this.audioMove.play();
                }
            }
        });
    }
    update(deltaTime) {
        this.ctx.drawImage(this.menuUnselected, 0, 0);
        let image = this.menuSelected;
        this.timeSinceLastBlink += deltaTime;
        if (this.timeSinceLastBlink >= this.blinkInterval) {
            image = this.menuSelectedBlink;
        }
        if (image == this.menuSelectedBlink) {
            this.timeSinceBlinkStart += deltaTime;
            if (this.timeSinceBlinkStart >= this.blinkDuration) {
                this.timeSinceLastBlink = 0;
                this.timeSinceBlinkStart = 0;
            }
        }
        this.ctx.drawImage(image, 150, 108 + this.option * this.optionSize.y, this.optionSize.x, this.optionSize.y, 150, 108 + this.option * this.optionSize.y, this.optionSize.x, this.optionSize.y);
    }
}


/***/ }),

/***/ "./src/game/components/shapes/ui/UI.ts":
/*!*********************************************!*\
  !*** ./src/game/components/shapes/ui/UI.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Config */ "./src/game/components/Config.ts");
/* harmony import */ var _textures_ui_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../textures/ui.png */ "./src/game/textures/ui.png");
/* harmony import */ var _textures_uiElements_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../textures/uiElements.png */ "./src/game/textures/uiElements.png");
/* harmony import */ var _textures_startScreen_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../textures/startScreen.png */ "./src/game/textures/startScreen.png");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ "./src/game/components/shapes/ui/Menu.ts");
/* harmony import */ var _sounds_theme_splash_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../sounds/theme_splash.mp3 */ "./src/game/sounds/theme_splash.mp3");
/* harmony import */ var _sounds_theme_menu_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../sounds/theme_menu.mp3 */ "./src/game/sounds/theme_menu.mp3");
/* harmony import */ var _sounds_theme_level_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../sounds/theme_level.mp3 */ "./src/game/sounds/theme_level.mp3");
/* harmony import */ var _BetterAudio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../BetterAudio */ "./src/game/components/BetterAudio.ts");
/* harmony import */ var _LevelEnd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LevelEnd */ "./src/game/components/shapes/ui/LevelEnd.ts");
/* harmony import */ var _Weapons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Weapons */ "./src/game/components/shapes/ui/Weapons.ts");
/* harmony import */ var _LoadingScreen__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LoadingScreen */ "./src/game/components/shapes/ui/LoadingScreen.ts");
/* harmony import */ var _DeathScreen__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./DeathScreen */ "./src/game/components/shapes/ui/DeathScreen.ts");
var _a;













class UI {
    constructor() {
        this.audioSplash = new _BetterAudio__WEBPACK_IMPORTED_MODULE_8__["default"](_sounds_theme_splash_mp3__WEBPACK_IMPORTED_MODULE_5__, _Config__WEBPACK_IMPORTED_MODULE_0__["default"].musicVolume);
        this.audioMenu = new _BetterAudio__WEBPACK_IMPORTED_MODULE_8__["default"](_sounds_theme_menu_mp3__WEBPACK_IMPORTED_MODULE_6__, _Config__WEBPACK_IMPORTED_MODULE_0__["default"].musicVolume);
        this.audioLevel = new _BetterAudio__WEBPACK_IMPORTED_MODULE_8__["default"](_sounds_theme_level_mp3__WEBPACK_IMPORTED_MODULE_7__, _Config__WEBPACK_IMPORTED_MODULE_0__["default"].musicVolume);
        this.floor = 1;
        this.score = 0;
        this.lives = 3;
        this.health = 100;
        this.ammo = 8;
        this.weapon = 'pistol';
        this.faceDirection = "right";
        this.faceState = "normal";
        this.faceAnimationSteps = [];
        this.lastFaceAnimationStepsCount = null;
        this.showingMenu = true;
        this.state = 'startScreen';
        this.flashing = false;
        this.flashCompletion = 0;
        this.flashDuration = 0.2;
        this.enemiesKilled = 0;
        this.secretsFound = 0;
        this.treasuresFound = 0;
        this.menu = new _Menu__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.loadingScreen = new _LoadingScreen__WEBPACK_IMPORTED_MODULE_11__["default"]();
        this.levelEnd = new _LevelEnd__WEBPACK_IMPORTED_MODULE_9__["default"]();
        this.deathScreen = new _DeathScreen__WEBPACK_IMPORTED_MODULE_12__["default"]();
        this.audioSplash.loop();
        this.audioMenu.loop();
        this.audioLevel.loop();
    }
    init() {
        this.texture = new Image();
        this.texture.src = _textures_ui_png__WEBPACK_IMPORTED_MODULE_1__;
        this.elements = new Image();
        this.elements.src = _textures_uiElements_png__WEBPACK_IMPORTED_MODULE_2__;
        this.startScreen = new Image();
        this.startScreen.src = _textures_startScreen_png__WEBPACK_IMPORTED_MODULE_3__;
        const uiCanvas = document.getElementById("uiCanvas");
        uiCanvas.width = 640 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale;
        uiCanvas.height = 400 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale;
        this.context = uiCanvas.getContext('2d');
        this.context.imageSmoothingEnabled = false;
        document.onclick = e => { if (this.state == "startScreen")
            this.audioSplash.playIfNotPlayed(); };
        document.onkeydown = e => { if (this.state == "startScreen" && e.code == "Space")
            this.audioSplash.playIfNotPlayed(); };
        document.onkeyup = e => { if (this.state == "startScreen" && e.code == "Space")
            this.audioSplash.playIfNotPlayed(); };
        this.weapons = new _Weapons__WEBPACK_IMPORTED_MODULE_10__["default"]();
    }
    takeLife() {
        if (this.lives == 0) {
            this.floor = 1;
            this.lives = 3;
        }
        else {
            this.lives--;
        }
        this.health = 100;
        this.ammo = 8;
        this.weapon = "pistol";
        this.score = 0;
    }
    update(deltaTime) {
        this.weapons.update(deltaTime);
        this.loadingScreen.update(deltaTime);
        const currentStep = this.faceAnimationSteps[0];
        if (currentStep) {
            currentStep.duration -= deltaTime;
            if (currentStep.duration <= 0) {
                this.faceAnimationSteps.shift();
            }
            if (this.faceAnimationSteps.length == 0) {
                this.startFaceAnimation();
            }
            this.faceDirection = this.faceAnimationSteps[0].direction;
        }
        if (!currentStep) {
            this.startFaceAnimation();
        }
        this.menu.update(deltaTime);
        this.levelEnd.update(deltaTime);
        if (this.flashing) {
            this.flashCompletion += deltaTime / this.flashDuration;
            if (this.flashCompletion >= 1) {
                this.flashCompletion = 0;
                this.flashing = false;
            }
        }
    }
    startFaceAnimation() {
        const stepsCount = this.lastFaceAnimationStepsCount == 3 ? 5 : 3;
        for (let i = 0; i < stepsCount; i++) {
            const min = 0.5;
            const max = 1.5;
            const duration = Math.random() * (max - min) + min;
            let direction;
            if (i % 2) {
                direction = 'right';
            }
            else {
                direction = 'left';
            }
            this.faceAnimationSteps.push({ direction, duration });
        }
        this.lastFaceAnimationStepsCount = this.faceAnimationSteps.length;
        this.faceAnimationSteps.push({ direction: 'normal', duration: 2 });
    }
    draw(canvas) {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.drawImage(canvas, 16 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale, 8 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale, 608 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale, 304 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale);
        this.context.drawImage(this.texture, 0, 0, 640 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale, 400 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale);
        this.drawNumber(this.floor, 64, 352);
        this.drawNumber(this.score, 192, 352);
        this.drawNumber(this.lives, 240, 352);
        this.drawNumber(this.health, 384, 352);
        this.drawNumber(this.ammo, 464, 352);
        this.drawWeaponUI();
        this.weapons.draw(this.context);
        this.drawFace();
        if (this.flashing) {
            this.context.fillStyle = `rgba(${this.flashColor}, ${(1 - this.flashCompletion) * this.flashIntensity})`;
            // this.context.fillStyle = `rgba(${this.flashColor}, ${(1 - this.flashCompletion) * 0.6})`
            this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        }
        if (this.state == "startScreen") {
            this.context.drawImage(this.startScreen, 0, 0, 640 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale, 400 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale);
        }
        else if (this.state == "menu") {
            this.context.drawImage(this.menu.canvas, 0, 0, 640 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale, 400 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale);
        }
        else if (this.state == "loading") {
            this.context.drawImage(this.loadingScreen.canvas, 0, 0, 640 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale, 400 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale);
        }
        else if (this.state == "end") {
            this.context.drawImage(this.levelEnd.canvas, 0, 0, 640 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale, 400 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale);
        }
        else if (this.state == "dead") {
            setTimeout(() => this.deathScreen.start(), 1500);
        }
        this.context.drawImage(this.deathScreen.canvas, 16 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale, 8 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale, 608 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale, 304 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale);
    }
    drawFace() {
        let faceColumn = 0;
        let faceRow = 0;
        if (this.health == 0) {
            faceRow = 7;
            faceColumn = 1;
        }
        else if (this.faceState == 'normal') {
            if (this.faceDirection == 'left') {
                faceColumn = 0;
            }
            else if (this.faceDirection == 'normal') {
                faceColumn = 1;
            }
            else if (this.faceDirection == 'right') {
                faceColumn = 2;
            }
            faceRow = Math.floor(this.health / (100 / 7));
            if (faceRow == 7) {
                faceRow = 6;
            }
            faceRow = 6 - faceRow;
        }
        else if (this.faceState == 'win') {
            faceRow = 7;
            faceColumn = 0;
        }
        this.context.drawImage(this.elements, 240 + 24 * faceColumn, 31 * faceRow, 24, 31, 274 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale, 330 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale, 48 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale, 62 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale);
    }
    drawWeaponUI() {
        let weaponNumber = 0;
        if (this.weapon == 'knife') {
            weaponNumber = 0;
        }
        else if (this.weapon == 'pistol') {
            weaponNumber = 1;
        }
        else if (this.weapon == 'machinegun') {
            weaponNumber = 2;
        }
        else if (this.weapon == 'chaingun') {
            weaponNumber = 3;
        }
        this.context.drawImage(this.elements, 48 * weaponNumber, 0, 48, 24, 512 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale, 336 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale, 96 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale, 48 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale);
    }
    drawNumber(number, x, y) {
        const digits = number.toString().split('').reverse().map(digit => parseInt(digit));
        const digitWidth = 16;
        for (let [i, digit] of digits.entries()) {
            this.drawDigit(digit, x - digitWidth * (i + 1), y);
        }
    }
    drawDigit(digit, x, y) {
        this.context.drawImage(this.elements, 8 * digit, 32, 8, 16, x * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale, y * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale, 16 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale, 32 * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].uiScale);
    }
    flashRed() {
        this.flashColor = "255, 0, 0";
        this.flashIntensity = 0.3;
        this.flashing = true;
    }
    flashYellow() {
        this.flashColor = "255, 255, 0";
        this.flashIntensity = 0.2;
        this.flashing = true;
    }
}
_a = UI;
UI.instance = new _a;


/***/ }),

/***/ "./src/game/components/shapes/ui/Weapon.ts":
/*!*************************************************!*\
  !*** ./src/game/components/shapes/ui/Weapon.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Weapon": () => (/* binding */ Weapon)
/* harmony export */ });
/* harmony import */ var _BetterAudio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BetterAudio */ "./src/game/components/BetterAudio.ts");

class Weapon {
    constructor(type, fireRate, damage, initTextures, loopTextures, shootTexture, audio) {
        this.range = 1000000;
        this.shooting = false;
        this.willShoot = false;
        this.justShot = false;
        this.textureIndex = 0;
        this.type = type;
        this.fireRate = fireRate;
        this.damage = damage;
        this.initTextures = initTextures;
        this.loopTextures = loopTextures;
        this.shootTexture = shootTexture;
        this.audio = new _BetterAudio__WEBPACK_IMPORTED_MODULE_0__["default"](audio);
        this.currentTextures = initTextures;
    }
    get isAutomatic() {
        return this.loopTextures.length > 0;
    }
    get isTextureLastInit() {
        return this.textureIndex;
    }
    get framesCount() {
        if (this.isAutomatic) {
            return this.loopTextures.length;
        }
        else {
            return this.initTextures.length;
        }
    }
    getNextTexture() {
        this.justShot = false;
        if (!this.isAutomatic) {
            if (this.willShoot) {
                return this.getNextShootingTexture();
            }
            else {
                return this.initTextures[0];
            }
        }
        else {
            if (this.shooting) {
                return this.getNextShootingTexture();
            }
            else {
                return this.getNextStoppedShootingTexture();
            }
        }
    }
    getNextShootingTexture() {
        this.textureIndex++;
        if (this.textureIndex >= this.currentTextures.length) {
            if (this.currentTextures == this.initTextures && this.isAutomatic) {
                this.currentTextures = this.loopTextures;
            }
            else {
                this.willShoot = false;
            }
            this.textureIndex = 0;
        }
        const texture = this.currentTextures[this.textureIndex];
        if (texture == this.shootTexture) {
            this.justShot = true;
        }
        return texture;
    }
    getNextStoppedShootingTexture() {
        if (this.currentTextures == this.loopTextures) {
            this.currentTextures = this.initTextures;
            this.textureIndex = this.initTextures.length - 1;
        }
        let texture = this.currentTextures[this.textureIndex];
        this.textureIndex--;
        if (this.textureIndex < 0) {
            this.textureIndex = 0;
        }
        return texture;
    }
}


/***/ }),

/***/ "./src/game/components/shapes/ui/Weapons.ts":
/*!**************************************************!*\
  !*** ./src/game/components/shapes/ui/Weapons.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Weapons)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/game/components/utils/index.ts");
/* harmony import */ var _Weapon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Weapon */ "./src/game/components/shapes/ui/Weapon.ts");
/* harmony import */ var _textures_weapons_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../textures/weapons.png */ "./src/game/textures/weapons.png");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Config */ "./src/game/components/Config.ts");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Input */ "./src/game/components/Input.ts");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UI */ "./src/game/components/shapes/ui/UI.ts");
/* harmony import */ var _sounds_DSWKNIF_wav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../sounds/DSWKNIF.wav */ "./src/game/sounds/DSWKNIF.wav");
/* harmony import */ var _sounds_WSND0005_wav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../sounds/WSND0005.wav */ "./src/game/sounds/WSND0005.wav");
/* harmony import */ var _sounds_WSND0004_wav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../sounds/WSND0004.wav */ "./src/game/sounds/WSND0004.wav");
/* harmony import */ var _sounds_WSND0006_wav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../sounds/WSND0006.wav */ "./src/game/sounds/WSND0006.wav");










class Weapons {
    constructor() {
        this.importedTexture = _textures_weapons_png__WEBPACK_IMPORTED_MODULE_2__;
        this.availableTypes = ['knife', 'pistol'];
        // availableTypes: weaponType[] = ['knife', 'pistol', 'machinegun', 'chaingun']
        this.weapons = [];
        this.texturesCount = new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2(8, 4);
        this.timeSinceLastUpdate = 0;
        this.texture = new Image();
        this.texture.src = _textures_weapons_png__WEBPACK_IMPORTED_MODULE_2__;
        this.weapons.push(new _Weapon__WEBPACK_IMPORTED_MODULE_1__.Weapon("knife", 2.4, 40, [0, 1, 2, 3, 4], [], 3, _sounds_DSWKNIF_wav__WEBPACK_IMPORTED_MODULE_6__));
        this.weapons[0].range = _Config__WEBPACK_IMPORTED_MODULE_3__["default"].gridSize * 0.75;
        this.weapons.push(new _Weapon__WEBPACK_IMPORTED_MODULE_1__.Weapon("pistol", 2.4, 70, [8, 9, 10, 11, 12], [], 10, _sounds_WSND0005_wav__WEBPACK_IMPORTED_MODULE_7__));
        this.weapons.push(new _Weapon__WEBPACK_IMPORTED_MODULE_1__.Weapon("machinegun", 6, 70, [16, 17], [18, 19], 19, _sounds_WSND0004_wav__WEBPACK_IMPORTED_MODULE_8__));
        this.weapons.push(new _Weapon__WEBPACK_IMPORTED_MODULE_1__.Weapon("chaingun", 12, 70, [24, 25], [26, 27], 26, _sounds_WSND0006_wav__WEBPACK_IMPORTED_MODULE_9__));
        this.textureNumber = this.currentWeapon.initTextures[0];
    }
    get textureSize() {
        return this.texturesCount.map(v => 1 / v);
    }
    get currentWeapon() {
        return this.weapons.find(weapon => weapon.type == _UI__WEBPACK_IMPORTED_MODULE_5__["default"].instance.weapon);
    }
    update(deltaTime) {
        this.timeSinceLastUpdate += deltaTime;
        if (0 < _Input__WEBPACK_IMPORTED_MODULE_4__["default"].instance.lastNumber && _Input__WEBPACK_IMPORTED_MODULE_4__["default"].instance.lastNumber <= this.weapons.length) {
            for (let i = 0; i < this.weapons.length; i++) {
                if (_Input__WEBPACK_IMPORTED_MODULE_4__["default"].instance.lastNumber == i + 1) {
                    if (this.availableTypes.includes(this.weapons[i].type)) {
                        _UI__WEBPACK_IMPORTED_MODULE_5__["default"].instance.weapon = this.weapons[i].type;
                    }
                }
            }
        }
        this.setShooting(_Input__WEBPACK_IMPORTED_MODULE_4__["default"].instance.shooting && _UI__WEBPACK_IMPORTED_MODULE_5__["default"].instance.ammo > 0);
        if (_Input__WEBPACK_IMPORTED_MODULE_4__["default"].instance.shot && (_UI__WEBPACK_IMPORTED_MODULE_5__["default"].instance.ammo > 0 || this.currentWeapon.type == 'knife')) {
            this.shoot();
            _Input__WEBPACK_IMPORTED_MODULE_4__["default"].instance.justShot = true;
        }
        if (this.currentWeapon.justShot) {
            this.decreaseAmmo();
            this.currentWeapon.audio.play();
        }
        const frameTime = 1 / (this.currentWeapon.fireRate * this.currentWeapon.framesCount);
        this.currentWeapon.justShot = false;
        if (this.timeSinceLastUpdate >= frameTime) {
            this.timeSinceLastUpdate = 0;
            this.textureNumber = this.currentWeapon.getNextTexture();
        }
    }
    decreaseAmmo() {
        if (this.currentWeapon.type != 'knife') {
            if (_UI__WEBPACK_IMPORTED_MODULE_5__["default"].instance.ammo > 0) {
                _UI__WEBPACK_IMPORTED_MODULE_5__["default"].instance.ammo--;
            }
            if (_UI__WEBPACK_IMPORTED_MODULE_5__["default"].instance.ammo == 0) {
                _UI__WEBPACK_IMPORTED_MODULE_5__["default"].instance.weapon = 'knife';
            }
        }
    }
    shoot() {
        if (!this.currentWeapon.isAutomatic) {
            this.currentWeapon.willShoot = true;
        }
    }
    setShooting(shooting) {
        if (this.currentWeapon.isAutomatic) {
            this.currentWeapon.shooting = shooting;
        }
    }
    draw(context) {
        // x 322 - pół szerokości
        // y 312 - wysokość
        const width = 64;
        const height = 64;
        const row = Math.floor(this.textureNumber / this.texturesCount.x);
        const col = this.textureNumber % this.texturesCount.x;
        // console.log(this.textureNumber)
        context.drawImage(this.texture, 64 * col, 64 * row, 64, 64, (317.5 - (width * 4.8 / 2)) * _Config__WEBPACK_IMPORTED_MODULE_3__["default"].uiScale, (312 - (height * 4.8)) * _Config__WEBPACK_IMPORTED_MODULE_3__["default"].uiScale, width * _Config__WEBPACK_IMPORTED_MODULE_3__["default"].uiScale * 4.8, height * _Config__WEBPACK_IMPORTED_MODULE_3__["default"].uiScale * 4.8);
    }
}


/***/ }),

/***/ "./src/game/components/utils/Transform.ts":
/*!************************************************!*\
  !*** ./src/game/components/utils/Transform.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transform": () => (/* binding */ Transform)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/game/components/utils/index.ts");


class Transform {
    constructor() {
        this.position = ___WEBPACK_IMPORTED_MODULE_0__.Vec3.zero;
        this.rotation = ___WEBPACK_IMPORTED_MODULE_0__.Vec3.zero;
        this.scale = ___WEBPACK_IMPORTED_MODULE_0__.Vec3.one;
        this.originTranslation = ___WEBPACK_IMPORTED_MODULE_0__.Vec3.zero;
    }
    reset() {
        this.position = ___WEBPACK_IMPORTED_MODULE_0__.Vec3.zero;
        this.rotation = ___WEBPACK_IMPORTED_MODULE_0__.Vec3.zero;
        this.scale = ___WEBPACK_IMPORTED_MODULE_0__.Vec3.one;
    }
    get matrix() {
        let matrix = ___WEBPACK_IMPORTED_MODULE_0__.m4.identity;
        matrix = ___WEBPACK_IMPORTED_MODULE_0__.m4.scale(matrix, this.scale);
        matrix = ___WEBPACK_IMPORTED_MODULE_0__.m4.xRotate(matrix, this.rotation.x);
        matrix = ___WEBPACK_IMPORTED_MODULE_0__.m4.yRotate(matrix, this.rotation.y);
        matrix = ___WEBPACK_IMPORTED_MODULE_0__.m4.zRotate(matrix, this.rotation.z);
        const position = this.position.add(this.originTranslation);
        matrix = ___WEBPACK_IMPORTED_MODULE_0__.m4.translate(matrix, position);
        return matrix;
    }
    clone() {
        const transform = new Transform();
        transform.position = this.position.clone();
        transform.rotation = this.rotation.clone();
        transform.scale = this.scale.clone();
        return transform;
    }
}


/***/ }),

/***/ "./src/game/components/utils/Vec2.ts":
/*!*******************************************!*\
  !*** ./src/game/components/utils/Vec2.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vec2": () => (/* binding */ Vec2)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/game/components/utils/index.ts");

class Vec2 {
    constructor(x, y) {
        this.set(x, y);
    }
    static arrayToVec2Array(a) {
        let array = [];
        for (let i = 0; i < a.length; i += 2) {
            array.push(new Vec2(a[i], a[i + 1]));
        }
        return array;
    }
    static vec2ArrayToArray(a) {
        let array = [];
        for (let vec of a) {
            array.push(vec.x, vec.y);
        }
        return array;
    }
    set(x, y) {
        this.x = x;
        this.y = y;
    }
    multiply(scalar) {
        return new Vec2(this.x * scalar, this.y * scalar);
    }
    add(v) {
        return new Vec2(this.x + v.x, this.y + v.y);
    }
    map(f) {
        return new Vec2(f(this.x), f(this.y));
    }
    multiplyByVector(v) {
        return new Vec2(this.x * v.x, this.y * v.y);
    }
    substract(v) {
        return new Vec2(this.x - v.x, this.y - v.y);
    }
    get abs() {
        return this.map(v => Math.abs(v));
    }
    equals(v) {
        return this.x == v.x && this.y == v.y;
    }
    toVec3() {
        return new ___WEBPACK_IMPORTED_MODULE_0__.Vec3(this.x, 0, this.y);
    }
}


/***/ }),

/***/ "./src/game/components/utils/Vec3.ts":
/*!*******************************************!*\
  !*** ./src/game/components/utils/Vec3.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vec3": () => (/* binding */ Vec3)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/game/components/utils/index.ts");

class Vec3 {
    constructor(x, y, z) {
        this.set(x, y, z);
    }
    static get one() {
        return new Vec3(1, 1, 1);
    }
    static get zero() {
        return new Vec3(0, 0, 0);
    }
    static get forward() {
        return new Vec3(0, 0, 1);
    }
    static get backward() {
        return new Vec3(0, 0, -1);
    }
    static get right() {
        return new Vec3(1, 0, 0);
    }
    static get left() {
        return new Vec3(-1, 0, 0);
    }
    static get up() {
        return new Vec3(0, 1, 0);
    }
    static get down() {
        return new Vec3(0, -1, 0);
    }
    static arrayToVec3Array(a) {
        let array = [];
        for (let i = 0; i < a.length; i += 3) {
            array.push(new Vec3(a[i], a[i + 1], a[i + 2]));
        }
        return array;
    }
    static vec3ArrayToArray(a) {
        let array = [];
        for (let vec of a) {
            array.push(vec.x, vec.y, vec.z);
        }
        return array;
    }
    set(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    get copy() {
        return new Vec3(this.x, this.y, this.z);
    }
    get xInverted() {
        return new Vec3(-this.x, this.y, this.z);
    }
    get yInverted() {
        return new Vec3(this.x, -this.y, this.z);
    }
    get zInverted() {
        return new Vec3(this.x, this.y, -this.z);
    }
    multiply(scalar) {
        return new Vec3(this.x * scalar, this.y * scalar, this.z * scalar);
    }
    multiplyByVector(v) {
        return new Vec3(this.x * v.x, this.y * v.y, this.z * v.z);
    }
    equals(v) {
        return this.x == v.x && this.y == v.y && this.z == v.z;
    }
    isGreater(v) {
        return this.x >= v.x && this.y >= v.y && this.z >= v.z && (this.x > v.x || this.y > v.y || this.z > v.z);
    }
    isLess(v) {
        return this.x <= v.x && this.y <= v.y && this.z <= v.z && (this.x < v.x || this.y < v.y || this.z < v.z);
    }
    cross(v) {
        return new Vec3(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x);
    }
    dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }
    add(v) {
        return new Vec3(this.x + v.x, this.y + v.y, this.z + v.z);
    }
    substract(v) {
        return new Vec3(this.x - v.x, this.y - v.y, this.z - v.z);
    }
    distanceTo(v) {
        return Math.sqrt(Math.pow((v.x - this.x), 2) +
            Math.pow((v.y - this.y), 2) +
            Math.pow((v.z - this.z), 2));
    }
    horizontalDistanceTo(v) {
        return this.yZeroed.distanceTo(v.yZeroed);
    }
    to(v) {
        return new Vec3(v.x - this.x, v.y - this.y, v.z - this.z);
    }
    get inverted() {
        return this.multiply(-1);
    }
    get normalize() {
        if (this.magnitude != 0) {
            const scale = 1 / this.magnitude;
            return this.multiply(scale);
        }
        else {
            return Vec3.zero;
        }
    }
    get magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    transformMat4(m) {
        var w = m[3] * this.x + m[7] * this.y + m[11] * this.z + m[15];
        w = w || 1.0;
        let out = Vec3.zero;
        out.x = (m[0] * this.x + m[4] * this.y + m[8] * this.z + m[12]) / w;
        out.y = (m[1] * this.x + m[5] * this.y + m[9] * this.z + m[13]) / w;
        out.z = (m[2] * this.x + m[6] * this.y + m[10] * this.z + m[14]) / w;
        return out;
    }
    clone() {
        return new Vec3(this.x, this.y, this.z);
    }
    static fromAngle(angle) {
        angle = angle + 3 * Math.PI / 2;
        return new Vec3(Math.cos(angle), 0, Math.sin(angle));
    }
    map(f) {
        return new Vec3(f(this.x), f(this.y), f(this.z));
    }
    get yZeroed() {
        return new Vec3(this.x, 0, this.z);
    }
    get abs() {
        return this.map(v => Math.abs(v));
    }
    get minusOneOrZeroOrOne() {
        return this.map(v => {
            if (v > 0)
                return 1;
            if (v < 0)
                return -1;
            return 0;
        });
    }
    toVec2() {
        return new ___WEBPACK_IMPORTED_MODULE_0__.Vec2(this.x, this.z);
    }
}


/***/ }),

/***/ "./src/game/components/utils/index.ts":
/*!********************************************!*\
  !*** ./src/game/components/utils/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "radToDeg": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.radToDeg),
/* harmony export */   "degToRad": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.degToRad),
/* harmony export */   "hexToRgb": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.hexToRgb),
/* harmony export */   "m4": () => (/* reexport safe */ _m4__WEBPACK_IMPORTED_MODULE_1__.m4),
/* harmony export */   "Vec2": () => (/* reexport safe */ _Vec2__WEBPACK_IMPORTED_MODULE_2__.Vec2),
/* harmony export */   "Vec3": () => (/* reexport safe */ _Vec3__WEBPACK_IMPORTED_MODULE_3__.Vec3),
/* harmony export */   "log": () => (/* reexport safe */ _log__WEBPACK_IMPORTED_MODULE_4__.log),
/* harmony export */   "Transform": () => (/* reexport safe */ _Transform__WEBPACK_IMPORTED_MODULE_5__.Transform)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/game/components/utils/utils.ts");
/* harmony import */ var _m4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./m4 */ "./src/game/components/utils/m4.ts");
/* harmony import */ var _Vec2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vec2 */ "./src/game/components/utils/Vec2.ts");
/* harmony import */ var _Vec3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Vec3 */ "./src/game/components/utils/Vec3.ts");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log */ "./src/game/components/utils/log.ts");
/* harmony import */ var _Transform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Transform */ "./src/game/components/utils/Transform.ts");








/***/ }),

/***/ "./src/game/components/utils/log.ts":
/*!******************************************!*\
  !*** ./src/game/components/utils/log.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "log": () => (/* binding */ log)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/game/components/utils/index.ts");

function log(name, value) {
    let element = document.getElementById(name);
    if (!element) {
        const ui = document.getElementById('ui');
        const container = document.createElement('div');
        const label = document.createElement('div');
        label.innerText = name + ':';
        label.classList.add('label');
        const value = document.createElement('div');
        value.id = name;
        value.classList.add('value');
        container.appendChild(label);
        container.appendChild(value);
        ui.appendChild(container);
        element = value;
    }
    if (typeof value == 'undefined') {
        value = 'undefined';
    }
    else if (value instanceof ___WEBPACK_IMPORTED_MODULE_0__.Vec3) {
        value = `x: ${value.x.toFixed(2)} y: ${value.y.toFixed(2)} z: ${value.z.toFixed(2)}`;
        element.parentElement.style.minWidth = '200px';
    }
    else if (typeof value == 'number') {
        value = value.toFixed(2).toString();
    }
    else if (typeof value != 'string') {
        value = JSON.stringify(value);
    }
    if (element.innerText != value) {
        element.innerText = value;
    }
}


/***/ }),

/***/ "./src/game/components/utils/m4.ts":
/*!*****************************************!*\
  !*** ./src/game/components/utils/m4.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m4": () => (/* binding */ m4)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/game/components/utils/index.ts");

const m4 = {
    translation: (v) => {
        return [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            v.x, v.y, v.z, 1,
        ];
    },
    get identity() {
        return [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ];
    },
    rotate: (mTarget, v) => {
        let m = m4.multiply(mTarget, m4.xRotation(v.x));
        m = m4.multiply(m, m4.yRotation(v.y));
        m = m4.multiply(m, m4.zRotation(v.z));
        return m;
    },
    xRotation: (angleInRadians) => {
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        return [
            1, 0, 0, 0,
            0, c, s, 0,
            0, -s, c, 0,
            0, 0, 0, 1,
        ];
    },
    yRotation: (angleInRadians) => {
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        return [
            c, 0, -s, 0,
            0, 1, 0, 0,
            s, 0, c, 0,
            0, 0, 0, 1,
        ];
    },
    zRotation: (angleInRadians) => {
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        return [
            c, s, 0, 0,
            -s, c, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ];
    },
    scaling: (v) => {
        return [
            v.x, 0, 0, 0,
            0, v.y, 0, 0,
            0, 0, v.z, 0,
            0, 0, 0, 1,
        ];
    },
    translate: (m, v) => {
        return m4.multiply(m, m4.translation(v));
    },
    xRotate: (m, angleInRadians) => {
        return m4.multiply(m, m4.xRotation(angleInRadians));
    },
    yRotate: (m, angleInRadians) => {
        return m4.multiply(m, m4.yRotation(angleInRadians));
    },
    zRotate: (m, angleInRadians) => {
        return m4.multiply(m, m4.zRotation(angleInRadians));
    },
    scale: (m, v) => {
        return m4.multiply(m, m4.scaling(v));
    },
    perspective: (fieldOfViewInRadians, aspect, near, far) => {
        var f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewInRadians);
        var rangeInv = 1.0 / (near - far);
        return [
            f / aspect, 0, 0, 0,
            0, f, 0, 0,
            0, 0, (near + far) * rangeInv, -1,
            0, 0, near * far * rangeInv * 2, 0
        ];
    },
    makeZToWMatrix(fudgeFactor) {
        return [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, fudgeFactor,
            0, 0, 0, 1,
        ];
    },
    multiply: (a, b) => {
        const a11 = a[0 * 4 + 0];
        const a12 = a[0 * 4 + 1];
        const a13 = a[0 * 4 + 2];
        const a14 = a[0 * 4 + 3];
        const a21 = a[1 * 4 + 0];
        const a22 = a[1 * 4 + 1];
        const a23 = a[1 * 4 + 2];
        const a24 = a[1 * 4 + 3];
        const a31 = a[2 * 4 + 0];
        const a32 = a[2 * 4 + 1];
        const a33 = a[2 * 4 + 2];
        const a34 = a[2 * 4 + 3];
        const a41 = a[3 * 4 + 0];
        const a42 = a[3 * 4 + 1];
        const a43 = a[3 * 4 + 2];
        const a44 = a[3 * 4 + 3];
        const b11 = b[0 * 4 + 0];
        const b12 = b[0 * 4 + 1];
        const b13 = b[0 * 4 + 2];
        const b14 = b[0 * 4 + 3];
        const b21 = b[1 * 4 + 0];
        const b22 = b[1 * 4 + 1];
        const b23 = b[1 * 4 + 2];
        const b24 = b[1 * 4 + 3];
        const b31 = b[2 * 4 + 0];
        const b32 = b[2 * 4 + 1];
        const b33 = b[2 * 4 + 2];
        const b34 = b[2 * 4 + 3];
        const b41 = b[3 * 4 + 0];
        const b42 = b[3 * 4 + 1];
        const b43 = b[3 * 4 + 2];
        const b44 = b[3 * 4 + 3];
        return [
            a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41,
            a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42,
            a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43,
            a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44,
            a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41,
            a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42,
            a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43,
            a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44,
            a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41,
            a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42,
            a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43,
            a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44,
            a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41,
            a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42,
            a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43,
            a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44,
        ];
    },
    multiplyScalar(m, scalar) {
        return m.map(el => el * scalar);
    },
    det: (m) => {
        const m11 = m[0 * 4 + 0];
        const m12 = m[0 * 4 + 1];
        const m13 = m[0 * 4 + 2];
        const m14 = m[0 * 4 + 3];
        const m21 = m[1 * 4 + 0];
        const m22 = m[1 * 4 + 1];
        const m23 = m[1 * 4 + 2];
        const m24 = m[1 * 4 + 3];
        const m31 = m[2 * 4 + 0];
        const m32 = m[2 * 4 + 1];
        const m33 = m[2 * 4 + 2];
        const m34 = m[2 * 4 + 3];
        const m41 = m[3 * 4 + 0];
        const m42 = m[3 * 4 + 1];
        const m43 = m[3 * 4 + 2];
        const m44 = m[3 * 4 + 3];
        return (m11 * m22 * m33 * m44 + m11 * m23 * m34 * m42 + m11 * m24 * m32 * m43 +
            +m12 * m21 * m34 * m43 + m12 * m23 * m31 * m44 + m12 * m24 * m33 * m41 +
            +m13 * m21 * m32 * m44 + m13 * m22 * m34 * m41 + m13 * m24 * m31 * m42 +
            +m14 * m21 * m33 * m42 + m14 * m22 * m31 * m43 + m14 * m23 * m32 * m41 +
            -m11 * m22 * m34 * m43 - m11 * m23 * m32 * m44 - m11 * m24 * m33 * m42 +
            -m12 * m21 * m33 * m44 - m12 * m23 * m34 * m41 - m12 * m24 * m31 * m43 +
            -m13 * m21 * m34 * m42 - m13 * m22 * m31 * m44 - m13 * m24 * m32 * m41 +
            -m14 * m21 * m32 * m43 - m14 * m22 * m33 * m41 - m14 * m23 * m31 * m42);
    },
    inverse(m) {
        let dst = new Array(16);
        var m00 = m[0 * 4 + 0];
        var m01 = m[0 * 4 + 1];
        var m02 = m[0 * 4 + 2];
        var m03 = m[0 * 4 + 3];
        var m10 = m[1 * 4 + 0];
        var m11 = m[1 * 4 + 1];
        var m12 = m[1 * 4 + 2];
        var m13 = m[1 * 4 + 3];
        var m20 = m[2 * 4 + 0];
        var m21 = m[2 * 4 + 1];
        var m22 = m[2 * 4 + 2];
        var m23 = m[2 * 4 + 3];
        var m30 = m[3 * 4 + 0];
        var m31 = m[3 * 4 + 1];
        var m32 = m[3 * 4 + 2];
        var m33 = m[3 * 4 + 3];
        var tmp_0 = m22 * m33;
        var tmp_1 = m32 * m23;
        var tmp_2 = m12 * m33;
        var tmp_3 = m32 * m13;
        var tmp_4 = m12 * m23;
        var tmp_5 = m22 * m13;
        var tmp_6 = m02 * m33;
        var tmp_7 = m32 * m03;
        var tmp_8 = m02 * m23;
        var tmp_9 = m22 * m03;
        var tmp_10 = m02 * m13;
        var tmp_11 = m12 * m03;
        var tmp_12 = m20 * m31;
        var tmp_13 = m30 * m21;
        var tmp_14 = m10 * m31;
        var tmp_15 = m30 * m11;
        var tmp_16 = m10 * m21;
        var tmp_17 = m20 * m11;
        var tmp_18 = m00 * m31;
        var tmp_19 = m30 * m01;
        var tmp_20 = m00 * m21;
        var tmp_21 = m20 * m01;
        var tmp_22 = m00 * m11;
        var tmp_23 = m10 * m01;
        var t0 = (tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31) - (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
        var t1 = (tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31) - (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
        var t2 = (tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31) - (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
        var t3 = (tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21) - (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);
        var d = 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);
        dst[0] = d * t0;
        dst[1] = d * t1;
        dst[2] = d * t2;
        dst[3] = d * t3;
        dst[4] = d * ((tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30) - (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30));
        dst[5] = d * ((tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30) - (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30));
        dst[6] = d * ((tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30) - (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30));
        dst[7] = d * ((tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20) - (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20));
        dst[8] = d * ((tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33) - (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33));
        dst[9] = d * ((tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33) - (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33));
        dst[10] = d * ((tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33) - (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33));
        dst[11] = d * ((tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23) - (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23));
        dst[12] = d * ((tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12) - (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22));
        dst[13] = d * ((tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22) - (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02));
        dst[14] = d * ((tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02) - (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12));
        dst[15] = d * ((tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12) - (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02));
        return dst;
    },
    lookAt: function (source, target) {
        var zAxis = source.substract(target).normalize;
        var xAxis = ___WEBPACK_IMPORTED_MODULE_0__.Vec3.up.cross(zAxis).normalize;
        var yAxis = zAxis.cross(xAxis).normalize;
        return [
            xAxis.x, xAxis.y, xAxis.z, 0,
            yAxis.x, yAxis.y, yAxis.z, 0,
            zAxis.x, zAxis.y, zAxis.z, 0,
            source.x, source.y, source.z, 1,
        ];
    },
    getPositionVector: function (m) {
        return new ___WEBPACK_IMPORTED_MODULE_0__.Vec3(m[12], m[13], m[14]).map(v => v < 0.0000001 ? 0 : v);
    },
    getScaleVector: function (m) {
        return new ___WEBPACK_IMPORTED_MODULE_0__.Vec3(new ___WEBPACK_IMPORTED_MODULE_0__.Vec3(m[0], m[4], m[8]).magnitude, new ___WEBPACK_IMPORTED_MODULE_0__.Vec3(m[1], m[5], m[9]).magnitude, new ___WEBPACK_IMPORTED_MODULE_0__.Vec3(m[2], m[6], m[10]).magnitude);
    },
    getRotationMatrix: function (m) {
        const s = m4.getScaleVector(m);
        return [
            m[0] / s.x, m[1] / s.y, m[2] / s.z, 0,
            m[4] / s.x, m[5] / s.y, m[6] / s.z, 0,
            m[8] / s.x, m[9] / s.y, m[10] / s.z, 0,
            0, 0, 0, 1
        ];
    },
};
// export default m4



/***/ }),

/***/ "./src/game/components/utils/utils.ts":
/*!********************************************!*\
  !*** ./src/game/components/utils/utils.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "radToDeg": () => (/* binding */ radToDeg),
/* harmony export */   "degToRad": () => (/* binding */ degToRad),
/* harmony export */   "hexToRgb": () => (/* binding */ hexToRgb)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/game/components/utils/index.ts");

function radToDeg(r) {
    return r * 180 / Math.PI;
}
function degToRad(d) {
    return d * Math.PI / 180;
}
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? new ___WEBPACK_IMPORTED_MODULE_0__.Vec3(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)) : null;
}


/***/ }),

/***/ "./src/game/shaders/color.fs":
/*!***********************************!*\
  !*** ./src/game/shaders/color.fs ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("precision mediump float;\r\n\r\n// Passed in from the vertex shader.\r\nvarying vec4 v_color;\r\n\r\nvoid main() {\r\n   gl_FragColor = v_color;\r\n}");

/***/ }),

/***/ "./src/game/shaders/color.vs":
/*!***********************************!*\
  !*** ./src/game/shaders/color.vs ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("attribute vec4 a_position;\r\nattribute vec4 a_color;\r\n\r\nuniform mat4 u_matrix;\r\n\r\nvarying vec4 v_color;\r\n\r\nvoid main() {\r\n  gl_Position = u_matrix * a_position;    \r\n  // Pass the color to the fragment shader.\r\n  v_color = a_color;\r\n}");

/***/ }),

/***/ "./src/game/shaders/texture.fs":
/*!*************************************!*\
  !*** ./src/game/shaders/texture.fs ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("precision mediump float;\r\n\r\n// Passed in from the vertex shader.\r\nvarying vec2 v_texcoord;\r\n\r\n// The texture.\r\nuniform sampler2D u_texture;\r\n\r\nvoid main() {\r\n    vec4 texColor = texture2D(u_texture, v_texcoord);\r\n    if(texColor.a < 0.1)\r\n        discard;\r\n    gl_FragColor = texColor;\r\n    // gl_FragColor = texture2D(u_texture, v_texcoord);\r\n}");

/***/ }),

/***/ "./src/game/shaders/texture.vs":
/*!*************************************!*\
  !*** ./src/game/shaders/texture.vs ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("attribute vec4 a_position;\r\nattribute vec2 a_texcoord;\r\n\r\nuniform mat4 u_matrix;\r\n\r\nvarying vec2 v_texcoord;\r\n\r\nvoid main() {\r\n  gl_Position = u_matrix * a_position;    \r\n  \r\n  // Pass the texcoord to the fragment shader.\r\n  v_texcoord = a_texcoord;\r\n}");

/***/ }),

/***/ "./src/game/levels lazy recursive ^\\.\\/.*\\.json$":
/*!***************************************************************!*\
  !*** ./src/game/levels/ lazy ^\.\/.*\.json$ namespace object ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./1.json": [
		"./src/game/levels/1.json",
		"src_game_levels_1_json"
	],
	"./test 1.json": [
		"./src/game/levels/test 1.json",
		"src_game_levels_test_1_json"
	],
	"./test 2.json": [
		"./src/game/levels/test 2.json",
		"src_game_levels_test_2_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/game/levels lazy recursive ^\\.\\/.*\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/game/sounds/DSDEATH.wav":
/*!*************************************!*\
  !*** ./src/game/sounds/DSDEATH.wav ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/DSDEATH.wav";

/***/ }),

/***/ "./src/game/sounds/DSWKNIF.wav":
/*!*************************************!*\
  !*** ./src/game/sounds/DSWKNIF.wav ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/DSWKNIF.wav";

/***/ }),

/***/ "./src/game/sounds/M_BACK.wav":
/*!************************************!*\
  !*** ./src/game/sounds/M_BACK.wav ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/M_BACK.wav";

/***/ }),

/***/ "./src/game/sounds/M_MOVE.wav":
/*!************************************!*\
  !*** ./src/game/sounds/M_MOVE.wav ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/M_MOVE.wav";

/***/ }),

/***/ "./src/game/sounds/M_SELECT.wav":
/*!**************************************!*\
  !*** ./src/game/sounds/M_SELECT.wav ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/M_SELECT.wav";

/***/ }),

/***/ "./src/game/sounds/P_AMMO.wav":
/*!************************************!*\
  !*** ./src/game/sounds/P_AMMO.wav ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/P_AMMO.wav";

/***/ }),

/***/ "./src/game/sounds/P_FOOD.wav":
/*!************************************!*\
  !*** ./src/game/sounds/P_FOOD.wav ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/P_FOOD.wav";

/***/ }),

/***/ "./src/game/sounds/P_LIFE.wav":
/*!************************************!*\
  !*** ./src/game/sounds/P_LIFE.wav ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/P_LIFE.wav";

/***/ }),

/***/ "./src/game/sounds/P_MEDKIT.wav":
/*!**************************************!*\
  !*** ./src/game/sounds/P_MEDKIT.wav ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/P_MEDKIT.wav";

/***/ }),

/***/ "./src/game/sounds/P_MGUN.wav":
/*!************************************!*\
  !*** ./src/game/sounds/P_MGUN.wav ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/P_MGUN.wav";

/***/ }),

/***/ "./src/game/sounds/T_CHEST.wav":
/*!*************************************!*\
  !*** ./src/game/sounds/T_CHEST.wav ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/T_CHEST.wav";

/***/ }),

/***/ "./src/game/sounds/T_CROSS.wav":
/*!*************************************!*\
  !*** ./src/game/sounds/T_CROSS.wav ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/T_CROSS.wav";

/***/ }),

/***/ "./src/game/sounds/T_CROWN.wav":
/*!*************************************!*\
  !*** ./src/game/sounds/T_CROWN.wav ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/T_CROWN.wav";

/***/ }),

/***/ "./src/game/sounds/T_CUP.wav":
/*!***********************************!*\
  !*** ./src/game/sounds/T_CUP.wav ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/T_CUP.wav";

/***/ }),

/***/ "./src/game/sounds/WSND0000.wav":
/*!**************************************!*\
  !*** ./src/game/sounds/WSND0000.wav ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/WSND0000.wav";

/***/ }),

/***/ "./src/game/sounds/WSND0002.wav":
/*!**************************************!*\
  !*** ./src/game/sounds/WSND0002.wav ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/WSND0002.wav";

/***/ }),

/***/ "./src/game/sounds/WSND0003.wav":
/*!**************************************!*\
  !*** ./src/game/sounds/WSND0003.wav ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/WSND0003.wav";

/***/ }),

/***/ "./src/game/sounds/WSND0004.wav":
/*!**************************************!*\
  !*** ./src/game/sounds/WSND0004.wav ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/WSND0004.wav";

/***/ }),

/***/ "./src/game/sounds/WSND0005.wav":
/*!**************************************!*\
  !*** ./src/game/sounds/WSND0005.wav ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/WSND0005.wav";

/***/ }),

/***/ "./src/game/sounds/WSND0006.wav":
/*!**************************************!*\
  !*** ./src/game/sounds/WSND0006.wav ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/WSND0006.wav";

/***/ }),

/***/ "./src/game/sounds/WSND0012.wav":
/*!**************************************!*\
  !*** ./src/game/sounds/WSND0012.wav ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/WSND0012.wav";

/***/ }),

/***/ "./src/game/sounds/WSND0013.wav":
/*!**************************************!*\
  !*** ./src/game/sounds/WSND0013.wav ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/WSND0013.wav";

/***/ }),

/***/ "./src/game/sounds/WSND0014.wav":
/*!**************************************!*\
  !*** ./src/game/sounds/WSND0014.wav ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/WSND0014.wav";

/***/ }),

/***/ "./src/game/sounds/WSND0015.wav":
/*!**************************************!*\
  !*** ./src/game/sounds/WSND0015.wav ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/WSND0015.wav";

/***/ }),

/***/ "./src/game/sounds/WSND0021.wav":
/*!**************************************!*\
  !*** ./src/game/sounds/WSND0021.wav ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/WSND0021.wav";

/***/ }),

/***/ "./src/game/sounds/WSND0030.wav":
/*!**************************************!*\
  !*** ./src/game/sounds/WSND0030.wav ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/WSND0030.wav";

/***/ }),

/***/ "./src/game/sounds/WSND0034.wav":
/*!**************************************!*\
  !*** ./src/game/sounds/WSND0034.wav ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/WSND0034.wav";

/***/ }),

/***/ "./src/game/sounds/WSND0035.wav":
/*!**************************************!*\
  !*** ./src/game/sounds/WSND0035.wav ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/WSND0035.wav";

/***/ }),

/***/ "./src/game/sounds/WSND0039.wav":
/*!**************************************!*\
  !*** ./src/game/sounds/WSND0039.wav ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/WSND0039.wav";

/***/ }),

/***/ "./src/game/sounds/WSND0040.wav":
/*!**************************************!*\
  !*** ./src/game/sounds/WSND0040.wav ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/WSND0040.wav";

/***/ }),

/***/ "./src/game/sounds/WSND0041.wav":
/*!**************************************!*\
  !*** ./src/game/sounds/WSND0041.wav ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/WSND0041.wav";

/***/ }),

/***/ "./src/game/sounds/WSND0042.wav":
/*!**************************************!*\
  !*** ./src/game/sounds/WSND0042.wav ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/WSND0042.wav";

/***/ }),

/***/ "./src/game/sounds/theme_level.mp3":
/*!*****************************************!*\
  !*** ./src/game/sounds/theme_level.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/theme_level.mp3";

/***/ }),

/***/ "./src/game/sounds/theme_menu.mp3":
/*!****************************************!*\
  !*** ./src/game/sounds/theme_menu.mp3 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/theme_menu.mp3";

/***/ }),

/***/ "./src/game/sounds/theme_splash.mp3":
/*!******************************************!*\
  !*** ./src/game/sounds/theme_splash.mp3 ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/theme_splash.mp3";

/***/ }),

/***/ "./src/game/textures/font.png":
/*!************************************!*\
  !*** ./src/game/textures/font.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/font.png";

/***/ }),

/***/ "./src/game/textures/guard.png":
/*!*************************************!*\
  !*** ./src/game/textures/guard.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/guard.png";

/***/ }),

/***/ "./src/game/textures/levelEnd.png":
/*!****************************************!*\
  !*** ./src/game/textures/levelEnd.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/levelEnd.png";

/***/ }),

/***/ "./src/game/textures/menuSelected.png":
/*!********************************************!*\
  !*** ./src/game/textures/menuSelected.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/menuSelected.png";

/***/ }),

/***/ "./src/game/textures/menuSelectedBlink.png":
/*!*************************************************!*\
  !*** ./src/game/textures/menuSelectedBlink.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/menuSelectedBlink.png";

/***/ }),

/***/ "./src/game/textures/menuUnselected.png":
/*!**********************************************!*\
  !*** ./src/game/textures/menuUnselected.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/menuUnselected.png";

/***/ }),

/***/ "./src/game/textures/objects.png":
/*!***************************************!*\
  !*** ./src/game/textures/objects.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/objects.png";

/***/ }),

/***/ "./src/game/textures/startScreen.png":
/*!*******************************************!*\
  !*** ./src/game/textures/startScreen.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/startScreen.png";

/***/ }),

/***/ "./src/game/textures/ui.png":
/*!**********************************!*\
  !*** ./src/game/textures/ui.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ui.png";

/***/ }),

/***/ "./src/game/textures/uiElements.png":
/*!******************************************!*\
  !*** ./src/game/textures/uiElements.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/uiElements.png";

/***/ }),

/***/ "./src/game/textures/uvTest.png":
/*!**************************************!*\
  !*** ./src/game/textures/uvTest.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/uvTest.png";

/***/ }),

/***/ "./src/game/textures/wall.png":
/*!************************************!*\
  !*** ./src/game/textures/wall.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/wall.png";

/***/ }),

/***/ "./src/game/textures/weapons.png":
/*!***************************************!*\
  !*** ./src/game/textures/weapons.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/weapons.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "wolfenstein:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"game": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwolfenstein"] = self["webpackChunkwolfenstein"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************!*\
  !*** ./src/game/index.ts ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/game/style.css");
/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Game */ "./src/game/components/Game.ts");


window.onload = () => {
    new _components_Game__WEBPACK_IMPORTED_MODULE_1__["default"]();
};

})();

/******/ })()
;
//# sourceMappingURL=game.bundle.js.map