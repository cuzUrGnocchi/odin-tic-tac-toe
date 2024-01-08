"use strict";
(self["webpackChunkodin_tic_tac_toe"] = self["webpackChunkodin_tic_tac_toe"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, `*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --newspaper: rgb(220, 220, 220);
}

body {
  height: 100vh;
  background-color: var(--newspaper);
}

body.game {
  display: grid;
  grid-template-columns: 214px 600px;
  justify-content: center;
  align-items: center;
  column-gap: 70px; 
}

h2 {
  font-size: 24px;
  font-weight: 540;
}

.board {
  height: 214px;
  width: 214px;
  display: grid;
  grid-template-columns: repeat(3, 70px);
  grid-template-rows: repeat(3, 70px);
  gap: 2px;
  background-color: black;
}

.tile {
  background-color: var(--newspaper);
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mark {
  font-size: 40px;
}

.sidebar {
  display: grid;
  grid-template-columns: 600px;
  grid-template-rows: 30px 30px 50px;
  justify-items: center;
  align-items: center;
  justify-self: center;
  row-gap: 10px;
}

.sidebar.in-game {
  grid-template-columns: 240px;
}

.timer-container, .streak-container {
  display: inline-flex;
  width: 200px;
  justify-content: space-between;
  align-items: baseline;
}

.timer, .timer-title, .streak , .streak-title {
  display: inline-block;
}

.sidebar p {
  font-size: 26px;
}

.sidebar .timer, .sidebar .streak {
  font-size: 36px;
}

.pre-game-message {
  grid-row: 1 / 3;
}

.timer-title, .timer {
  grid-row: 1;
}

.streak-title, .streak {
  grid-row: 2;
}

button {
  width: 120px;
  margin-top: 10px;
  border-radius: 15px;
  border-width: 2px;
  background-color: rgb(200, 200, 200);
  font-size: 20px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 500;
}

.start-button, .retire-button {
  grid-row: 3;
}

.pre-game-message, .streak-title, .streak, .timer-title, .timer, .retire-button, body {
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.pre-game-message, .streak-title, .streak, .timer-title, .timer, .retire-button  {
  animation-name: text-fade-in;
}

body.reset {
  animation-name: reset;
}

body.pre-game {
  animation-name: expand-body;
} 

body.in-game {
  animation-name: shrink-body;
}

body.defeat {
  animation-name: defeat;
}

body.fade-out {
  animation-name: fade-out;
}

@keyframes expand-body {
  from {
    grid-template-columns: 214px 400px;
  }

  to {
    grid-template-columns: 214px 600px;
  }
}

@keyframes shrink-body {
  from {
    grid-template-columns: 214px 600px;
  }

  to {
    grid-template-columns: 214px 400px;
  }
}

@keyframes defeat {
  from {
    grid-template-columns: 214px 400px;
  }

  to {
    grid-template-columns: 214px 400px;
  }
}

@keyframes reset {
  from {
    grid-template-columns: 214px 400px;
  }

  to {
    grid-template-columns: 214px 400px;
  }
}

@keyframes text-fade-in {
  from {
    color: transparent;
  }

  to {
    color: black;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
    grid-template-columns: 214px 400px;
  }

  to {
    opacity: 0;
    grid-template-columns: 214px 400px;
  }
}

body.victory-screen {
  display: grid;
  align-content: center;
  justify-items: center;
  row-gap: 20px;
}

.victory-message {
  font-size: 50px;
  font-weight: 500;
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,QAAQ;EACR,uBAAuB;AACzB;;AAEA;EACE,kCAAkC;EAClC,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,kCAAkC;EAClC,qBAAqB;EACrB,mBAAmB;EACnB,oBAAoB;EACpB,aAAa;AACf;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,oBAAoB;EACpB,YAAY;EACZ,8BAA8B;EAC9B,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB,oCAAoC;EACpC,eAAe;EACf,4CAA4C;EAC5C,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,wBAAwB;EACxB,6BAA6B;AAC/B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE;IACE,kCAAkC;EACpC;;EAEA;IACE,kCAAkC;EACpC;AACF;;AAEA;EACE;IACE,kCAAkC;EACpC;;EAEA;IACE,kCAAkC;EACpC;AACF;;AAEA;EACE;IACE,kCAAkC;EACpC;;EAEA;IACE,kCAAkC;EACpC;AACF;;AAEA;EACE;IACE,kCAAkC;EACpC;;EAEA;IACE,kCAAkC;EACpC;AACF;;AAEA;EACE;IACE,kBAAkB;EACpB;;EAEA;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,UAAU;IACV,kCAAkC;EACpC;;EAEA;IACE,UAAU;IACV,kCAAkC;EACpC;AACF;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,qBAAqB;EACrB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB","sourcesContent":["*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --newspaper: rgb(220, 220, 220);\n}\n\nbody {\n  height: 100vh;\n  background-color: var(--newspaper);\n}\n\nbody.game {\n  display: grid;\n  grid-template-columns: 214px 600px;\n  justify-content: center;\n  align-items: center;\n  column-gap: 70px; \n}\n\nh2 {\n  font-size: 24px;\n  font-weight: 540;\n}\n\n.board {\n  height: 214px;\n  width: 214px;\n  display: grid;\n  grid-template-columns: repeat(3, 70px);\n  grid-template-rows: repeat(3, 70px);\n  gap: 2px;\n  background-color: black;\n}\n\n.tile {\n  background-color: var(--newspaper);\n  font-size: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.mark {\n  font-size: 40px;\n}\n\n.sidebar {\n  display: grid;\n  grid-template-columns: 600px;\n  grid-template-rows: 30px 30px 50px;\n  justify-items: center;\n  align-items: center;\n  justify-self: center;\n  row-gap: 10px;\n}\n\n.sidebar.in-game {\n  grid-template-columns: 240px;\n}\n\n.timer-container, .streak-container {\n  display: inline-flex;\n  width: 200px;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n.timer, .timer-title, .streak , .streak-title {\n  display: inline-block;\n}\n\n.sidebar p {\n  font-size: 26px;\n}\n\n.sidebar .timer, .sidebar .streak {\n  font-size: 36px;\n}\n\n.pre-game-message {\n  grid-row: 1 / 3;\n}\n\n.timer-title, .timer {\n  grid-row: 1;\n}\n\n.streak-title, .streak {\n  grid-row: 2;\n}\n\nbutton {\n  width: 120px;\n  margin-top: 10px;\n  border-radius: 15px;\n  border-width: 2px;\n  background-color: rgb(200, 200, 200);\n  font-size: 20px;\n  font-family: 'Times New Roman', Times, serif;\n  font-weight: 500;\n}\n\n.start-button, .retire-button {\n  grid-row: 3;\n}\n\n.pre-game-message, .streak-title, .streak, .timer-title, .timer, .retire-button, body {\n  animation-duration: 0.5s;\n  animation-fill-mode: forwards;\n}\n\n.pre-game-message, .streak-title, .streak, .timer-title, .timer, .retire-button  {\n  animation-name: text-fade-in;\n}\n\nbody.reset {\n  animation-name: reset;\n}\n\nbody.pre-game {\n  animation-name: expand-body;\n} \n\nbody.in-game {\n  animation-name: shrink-body;\n}\n\nbody.defeat {\n  animation-name: defeat;\n}\n\nbody.fade-out {\n  animation-name: fade-out;\n}\n\n@keyframes expand-body {\n  from {\n    grid-template-columns: 214px 400px;\n  }\n\n  to {\n    grid-template-columns: 214px 600px;\n  }\n}\n\n@keyframes shrink-body {\n  from {\n    grid-template-columns: 214px 600px;\n  }\n\n  to {\n    grid-template-columns: 214px 400px;\n  }\n}\n\n@keyframes defeat {\n  from {\n    grid-template-columns: 214px 400px;\n  }\n\n  to {\n    grid-template-columns: 214px 400px;\n  }\n}\n\n@keyframes reset {\n  from {\n    grid-template-columns: 214px 400px;\n  }\n\n  to {\n    grid-template-columns: 214px 400px;\n  }\n}\n\n@keyframes text-fade-in {\n  from {\n    color: transparent;\n  }\n\n  to {\n    color: black;\n  }\n}\n\n@keyframes fade-out {\n  from {\n    opacity: 1;\n    grid-template-columns: 214px 400px;\n  }\n\n  to {\n    opacity: 0;\n    grid-template-columns: 214px 400px;\n  }\n}\n\nbody.victory-screen {\n  display: grid;\n  align-content: center;\n  justify-items: center;\n  row-gap: 20px;\n}\n\n.victory-message {\n  font-size: 50px;\n  font-weight: 500;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/styles.css":
/*!*******************************!*\
  !*** ./src/assets/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/Game.js */ "./src/model/Game.js");
/* harmony import */ var _view_Board_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/Board.js */ "./src/view/Board.js");
/* harmony import */ var _view_Sidebar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/Sidebar.js */ "./src/view/Sidebar.js");
/* harmony import */ var _assets_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/styles.css */ "./src/assets/styles.css");







let showVictoryScreen;

function showGame() {
  document.body.classList.remove(...document.body.classList);
  document.body.innerHTML = '';

  let game = new _model_Game_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

  document.body.classList.add('game');

  const boardView = (0,_view_Board_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const sidebar = (0,_view_Sidebar_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

  document.body.appendChild(boardView);
  document.body.appendChild(sidebar);

  function declareDefeat() {
    document.body.classList.add('defeat');
    document.body.classList.remove('in-game');

    sidebar.declareDefeat();
  }

  function checkWinner() {
    if (game.winner || game.boardIsFull) {
      sidebar.setTieStreak(game.tieCount);
      if (game.getScore('Cpu') === 1) {
        declareDefeat();
      } else if (game.tieCount === 10) {
        document.body.classList.add('fade-out');
        setTimeout(showVictoryScreen, 500);
      } else {
        game = game.reset();
      }
      boardView.update(game.board);
    }
  }

  function executeCpuRoutine() {
    if (game.currentPlayer !== null && game.currentPlayer.isCpu) {
      game = game.playTurn();
      boardView.update(game.board);

      requestAnimationFrame(() => {
        checkWinner();

        requestAnimationFrame(() => {
          if (game.currentPlayer !== null && game.currentPlayer.isCpu) {
            executeCpuRoutine();
          } else {
            boardView.update(game.board);
          }
        });
      });
    }
  }

  function handleBoardClick(event) {
    game = game.playTurn(event.detail.x, event.detail.y);
    boardView.update(game.board);

    requestAnimationFrame(() => {
      checkWinner();

      requestAnimationFrame(executeCpuRoutine);
    });
  }

  sidebar.addEventListener('startButtonClicked', (e) => {
    if (e.detail.reset) {
      document.body.classList.add('reset');
      document.body.classList.remove('defeat');
    } else {
      document.body.classList.add('in-game');
      document.body.classList.remove('pre-game');
    }

    game = new _model_Game_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    boardView.update(game.board);

    boardView.addEventListener('tileClicked', handleBoardClick);
  });

  sidebar.addEventListener('retireButtonClicked', () => {
    document.body.classList.add('pre-game');
    document.body.classList.remove('in-game');
    document.body.classList.remove('reset');

    boardView.removeEventListener('tileClicked', handleBoardClick);
  });

  sidebar.addEventListener('timeUp', () => {
    sidebar.declareDefeat();
  });
}

showVictoryScreen = () => {
  document.body.classList.remove(...document.body.classList);
  document.body.innerHTML = '';

  document.body.classList.add('victory-screen');

  const message = document.createElement('h1');
  message.classList.add('victory-message');
  message.textContent = 'Victory!';
  document.body.appendChild(message);

  const backButton = document.createElement('button');
  backButton.textContent = 'Back';
  document.body.appendChild(backButton);

  backButton.addEventListener('click', showGame);
};

showGame();

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    document.body.classList.add('fade-out');
    setTimeout(showVictoryScreen, 500);
  }
});


/***/ }),

/***/ "./src/model/Board.js":
/*!****************************!*\
  !*** ./src/model/Board.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Board {
  #tiles;

  constructor(tiles = ['', '', '', '', '', '', '', '', '']) {
    this.#tiles = tiles;
  }

  getTile(x, y) {
    return this.#tiles[x + y * 3];
  }

  setTile(x, y, marker) {
    const tiles = [...this.#tiles];
    tiles[x + y * 3] = marker;
    return new Board(tiles);
  }

  get winner() {
    function getLines(tiles) {
      const rows = [[], [], []];
      const columns = [[], [], []];
      const diagonals = [[], []];

      for (let x = 0; x < 3; x += 1) {
        for (let y = 0; y < 3; y += 1) {
          const tile = tiles.getTile(x, y);

          rows[y].push(tile);
          columns[x].push(tile);

          if (x === y) {
            diagonals[0].push(tile);
          }
          if (x + y === 2) {
            diagonals[1].push(tile);
          }
        }
      }

      return [...rows, ...columns, ...diagonals];
    }

    const lines = getLines(this);
    const markers = ['X', 'O'];

    for (let i = 0; i < lines.length; i += 1) {
      for (let j = 0; j < markers.length; j += 1) {
        if (lines[i].every((m) => m === markers[j])) {
          return markers[j];
        }
      }
    }

    return null;
  }

  get freeTiles() {
    const freeTiles = [];

    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        if (this.getTile(i, j) === '') {
          freeTiles.push({ x: i, y: j });
        }
      }
    }

    return freeTiles;
  }

  get isFull() {
    return this.#tiles.every((t) => t !== '');
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);


/***/ }),

/***/ "./src/model/Game.js":
/*!***************************!*\
  !*** ./src/model/Game.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.js */ "./src/model/Board.js");
/* harmony import */ var _modules_moveCalculator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/moveCalculator.js */ "./src/modules/moveCalculator.js");



class Game {
  #board;

  #players;

  #scoreboard;

  #startingPlayer;

  #playerIndex;

  #tieCount;

  constructor(state = {}) {
    const {
      board = new _Board_js__WEBPACK_IMPORTED_MODULE_0__["default"](),
      players = [
        { name: 'Player', marker: 'X', isCpu: false },
        { name: 'Cpu', marker: 'O', isCpu: true },
      ],
      scoreboard = [0, 0],
      startingPlayer = 0,
      playerIndex = 0,
      tieCount = 0,
    } = state;

    this.#board = board;
    this.#players = players;
    this.#scoreboard = scoreboard;
    this.#startingPlayer = startingPlayer;
    this.#playerIndex = board.isFull ? null : playerIndex;
    this.#tieCount = tieCount;
  }

  get board() {
    return this.#board;
  }

  get winner() {
    return this.#board.winner;
  }

  get boardIsFull() {
    return this.#board.isFull;
  }

  get players() {
    return this.#players;
  }

  get startingPlayer() {
    return this.#startingPlayer;
  }

  get playerIndex() {
    return this.#playerIndex;
  }

  get currentPlayer() {
    return this.#playerIndex !== null ? this.#players[this.#playerIndex] : null;
  }

  get tieCount() {
    return this.#tieCount;
  }

  getTile(x, y) {
    return this.#board.getTile(x, y);
  }

  getScore(player) {
    if (player === 'Player') {
      return this.#scoreboard[0];
    }
    return this.#scoreboard[1];
  }

  playTurn(x, y) {
    if (this.winner || this.boardIsFull) {
      return this;
    }

    const move = this.currentPlayer.isCpu
      ? _modules_moveCalculator_js__WEBPACK_IMPORTED_MODULE_1__["default"].comeUpWithMove(this.#board, this.currentPlayer.marker)
      : { x, y, marker: this.currentPlayer.marker };

    const next = {};

    next.board = this.#board.setTile(move.x, move.y, move.marker);
    next.scoreboard = this.#scoreboard;
    next.tieCount = next.board.isFull && !next.board.winner ? this.#tieCount + 1 : this.#tieCount;
    next.startingPlayer = this.#startingPlayer;
    next.players = this.#players;

    if (next.board.winner) {
      next.scoreboard[this.#playerIndex] += 1;
    }

    if (!next.board.winner || !next.board.isFull) {
      next.playerIndex = this.#playerIndex === 0 ? 1 : 0;
    }

    return new Game(next);
  }

  reset() {
    return new Game({
      board: new _Board_js__WEBPACK_IMPORTED_MODULE_0__["default"](),
      players: this.#players,
      scoreboard: this.#scoreboard,
      startingPlayer: this.#startingPlayer === 0 ? 1 : 0,
      playerIndex: this.#startingPlayer === 0 ? 1 : 0,
      tieCount: this.#tieCount,
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ "./src/model/Time.js":
/*!***************************!*\
  !*** ./src/model/Time.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sumTime(time = {}) {
  const {
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
    centiseconds = 0,
    milliseconds = 0,
  } = time;

  return days * 24 * 60 * 60 * 1000
    + hours * 60 * 60 * 1000
    + minutes * 60 * 1000
    + seconds * 1000
    + centiseconds * 10
    + milliseconds;
}

class Time {
  #amount;

  constructor(initialValues = {}) {
    this.#amount = sumTime(initialValues);
  }

  getValue(options = { getMinutes: true, getSeconds: true, getCentiseconds: true }) {
    const {
      getDays = false,
      getHours = false,
      getMinutes = false,
      getSeconds = false,
      getCentiseconds = false,
      getMilliseconds = false,
    } = options;

    const timeUnits = [
      {
        name: 'days',
        selected: getDays,
        absoluteValue: 1000 * 60 * 60 * 24,
      },
      {
        name: 'hours',
        selected: getHours,
        absoluteValue: 1000 * 60 * 60,
      },
      {
        name: 'minutes',
        selected: getMinutes,
        absoluteValue: 1000 * 60,
      },
      {
        name: 'seconds',
        selected: getSeconds,
        absoluteValue: 1000,
      },
      {
        name: 'centiseconds',
        selected: getCentiseconds,
        absoluteValue: 100,
      },
      {
        name: 'milliseconds',
        selected: getMilliseconds,
        absoluteValue: 1,
      },
    ];

    let remainder = this.#amount;

    return timeUnits
      .filter(({ selected }) => selected)
      .reduce((arrangedValue, unit) => {
        const value = Math.floor(remainder / unit.absoluteValue);
        remainder -= value;

        return Object.assign(arrangedValue, { [unit.name]: value });
      }, {});
  }

  increment(timeToAdd = {}) {
    return new Time({ milliseconds: this.#amount + sumTime(timeToAdd) });
  }

  decrement(timeToSubtract = {}) {
    return new Time({ milliseconds: this.#amount - sumTime(timeToSubtract) });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Time);


/***/ }),

/***/ "./src/modules/moveCalculator.js":
/*!***************************************!*\
  !*** ./src/modules/moveCalculator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function chooseMove(moves) {
  for (let priority = 2; priority >= -1; priority -= 1) {
    const bestMoves = moves.filter((move) => move.priority === priority);

    if (bestMoves.length > 0) {
      const chosenMove = bestMoves[Math.floor(Math.random() * bestMoves.length)];

      return {
        x: chosenMove.x,
        y: chosenMove.y,
        marker: chosenMove.marker,
      };
    }
  }

  return null;
}

const moveCalculator = {
  evaluateMove(move, board, self, depth = 0) {
    const opponent = self === 'X' ? 'O' : 'X';
    const development = board.setTile(move.x, move.y, move.marker);

    if (development.winner === self) {
      return depth === 0 ? 2 : 1;
    }
    if (development.winner === opponent) {
      return -1;
    }
    if (development.isFull) {
      return 0;
    }

    const outcomes = [];

    for (let i = 0; i < development.freeTiles.length; i += 1) {
      const { x, y } = development.freeTiles[i];
      const nextMove = { x, y, marker: move.marker === 'X' ? 'O' : 'X' };
      const outcome = this.evaluateMove(nextMove, development, self, depth + 1);

      if (move.marker === opponent && outcome === 1) {
        return 1;
      }
      if (move.marker === self && outcome === -1) {
        return -1;
      }

      outcomes.push(outcome);
    }

    if (outcomes.includes(0)) {
      return 0;
    }

    return move.marker === opponent ? -1 : 1;
  },

  comeUpWithMove(board, self) {
    const possibleMoves = [];

    for (let i = 0; i < board.freeTiles.length; i += 1) {
      const { x, y } = board.freeTiles[i];

      possibleMoves.push({
        x,
        y,
        marker: self,
        priority: this.evaluateMove({ x, y, marker: self }, board, self),
      });
    }

    return chooseMove(possibleMoves);
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moveCalculator);


/***/ }),

/***/ "./src/view/Board.js":
/*!***************************!*\
  !*** ./src/view/Board.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model_Board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Board.js */ "./src/model/Board.js");


function renderBoard() {
  const container = document.createElement('div');
  container.classList.add('board');

  const update = (board) => {
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }

    const renderTile = (mark) => {
      const tile = document.createElement('div');
      tile.classList.add('tile');
      tile.textContent = (mark === 'X' || mark === 'O') ? mark : '';
      return tile;
    };

    for (let x = 0; x < 3; x += 1) {
      for (let y = 0; y < 3; y += 1) {
        const tile = renderTile(board.getTile(x, y));
        container.appendChild(tile);

        tile.addEventListener('click', () => {
          if (tile.textContent === 'X' || tile.textContent === 'O') return;

          container.dispatchEvent(new CustomEvent('tileClicked', {
            detail: { x, y },
          }));
        });
      }
    }
  };

  update(new _model_Board_js__WEBPACK_IMPORTED_MODULE_0__["default"]());

  return Object.assign(container, { update });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderBoard);


/***/ }),

/***/ "./src/view/CountdownTimer.js":
/*!************************************!*\
  !*** ./src/view/CountdownTimer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model_Time_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Time.js */ "./src/model/Time.js");


function renderCountdownTimer(initialTime) {
  let intervalId = null;
  let timeRemaining = initialTime;

  const timer = document.createElement('p');
  timer.textContent = timeRemaining.getValue({ getSeconds: true }).seconds;
  timer.classList.add('timer');

  return Object.assign(timer, {
    start() {
      if (intervalId !== null) return;

      intervalId = setInterval(() => {
        if (timeRemaining.getValue({ getSeconds: true }).seconds === 0) {
          this.stop();
          this.dispatchEvent(new CustomEvent('timeUp'));
        } else {
          timeRemaining = timeRemaining.decrement({ seconds: 1 });
          this.textContent = timeRemaining.getValue({ getSeconds: true }).seconds;
        }
      }, 1000);
    },

    stop() {
      this.textContent = timeRemaining.getValue({ getSeconds: true }).seconds;
      clearInterval(intervalId);
      intervalId = null;
    },

    reset() {
      timeRemaining = new _model_Time_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
      this.stop();
    },
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCountdownTimer);


/***/ }),

/***/ "./src/view/Sidebar.js":
/*!*****************************!*\
  !*** ./src/view/Sidebar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model_Time_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Time.js */ "./src/model/Time.js");
/* harmony import */ var _CountdownTimer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CountdownTimer.js */ "./src/view/CountdownTimer.js");




function renderSidebar() {
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');

  const shiftToPreGame = (preGameMessage, buttonText, defeated, clickHandler) => {
    if (sidebar.querySelector('timer')) {
      sidebar.querySelector('timer').stop();
    }

    sidebar.innerHTML = '';

    sidebar.classList.remove('in-game');

    const message = document.createElement('p');
    message.classList.add('pre-game-message');
    message.textContent = preGameMessage;
    sidebar.appendChild(message);

    const startButton = document.createElement('button');
    startButton.classList.add('start-button');
    startButton.textContent = buttonText;
    sidebar.appendChild(startButton);

    startButton.addEventListener('click', () => clickHandler({
      currentState: defeated ? 'defeat' : 'preGame',
    }));
  };

  const clickHandler = (detail = {}) => {
    if (detail.currentState === 'inGame') {
      shiftToPreGame('Force a tie 10 times in a row in under 35 seconds', 'Start', false, clickHandler);
      sidebar.dispatchEvent(new CustomEvent('retireButtonClicked'));
      return;
    }

    sidebar.innerHTML = '';

    sidebar.classList.add('in-game');

    const timerContainer = document.createElement('div');
    timerContainer.classList.add('timer-container');
    sidebar.appendChild(timerContainer);

    const timerTitle = document.createElement('h2');
    timerTitle.classList.add('timer-title');
    timerTitle.textContent = 'Time';
    timerContainer.appendChild(timerTitle);

    const timer = (0,_CountdownTimer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(new _model_Time_js__WEBPACK_IMPORTED_MODULE_0__["default"]({ seconds: 35 }));
    timerContainer.appendChild(timer);

    timer.start();
    timer.addEventListener('timeUp', () => {
      sidebar.dispatchEvent(new CustomEvent('timeUp'));
    });

    const streakContainer = document.createElement('div');
    streakContainer.classList.add('streak-container');
    sidebar.appendChild(streakContainer);

    const streakTitle = document.createElement('h2');
    streakTitle.classList.add('streak-title');
    streakTitle.textContent = 'Streak';
    streakContainer.appendChild(streakTitle);

    const streak = document.createElement('p');
    streak.classList.add('streak');
    streak.textContent = '0/10';
    streakContainer.appendChild(streak);

    const retireButton = document.createElement('button');
    retireButton.classList.add('retire-button');
    retireButton.textContent = 'Retire';
    sidebar.appendChild(retireButton);

    retireButton.addEventListener('click', () => {
      clickHandler({ currentState: 'inGame' });
    });

    sidebar.dispatchEvent(new CustomEvent('startButtonClicked', {
      detail: { reset: detail.currentState === 'defeat' },
    }));
  };

  shiftToPreGame('Force a tie 10 times in a row in under 35 seconds', 'Start', false, clickHandler);

  return Object.assign(sidebar, {
    setTieStreak(count) {
      if (!sidebar.querySelector('.streak')) return;
      sidebar.querySelector('.streak').textContent = `${count}/10`;
    },

    declareDefeat() {
      shiftToPreGame('Defeat', 'Try again', true, clickHandler);
    },
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderSidebar);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdGQUF3RixZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE1B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O0FBQ0EscUJBQXFCLHdCQUF3QjtBQUM3QyxLQUFLOztBQUVMO0FBQ0EsZ0JBQWdCLHlDQUF5QztBQUN6RCxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELE1BQU07QUFDOUQsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRpYy10YWMtdG9lLy4vc3JjL2Fzc2V0cy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kaW4tdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRpYy10YWMtdG9lLy4vc3JjL2Fzc2V0cy9zdHlsZXMuY3NzPzk1MWYiLCJ3ZWJwYWNrOi8vb2Rpbi10aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRpYy10YWMtdG9lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdGljLXRhYy10b2UvLi9zcmMvbW9kZWwvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10aWMtdGFjLXRvZS8uL3NyYy9tb2RlbC9HYW1lLmpzIiwid2VicGFjazovL29kaW4tdGljLXRhYy10b2UvLi9zcmMvbW9kZWwvVGltZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRpYy10YWMtdG9lLy4vc3JjL21vZHVsZXMvbW92ZUNhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10aWMtdGFjLXRvZS8uL3NyYy92aWV3L0JvYXJkLmpzIiwid2VicGFjazovL29kaW4tdGljLXRhYy10b2UvLi9zcmMvdmlldy9Db3VudGRvd25UaW1lci5qcyIsIndlYnBhY2s6Ly9vZGluLXRpYy10YWMtdG9lLy4vc3JjL3ZpZXcvU2lkZWJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuOnJvb3Qge1xuICAtLW5ld3NwYXBlcjogcmdiKDIyMCwgMjIwLCAyMjApO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV3c3BhcGVyKTtcbn1cblxuYm9keS5nYW1lIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMTRweCA2MDBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDcwcHg7IFxufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDU0MDtcbn1cblxuLmJvYXJkIHtcbiAgaGVpZ2h0OiAyMTRweDtcbiAgd2lkdGg6IDIxNHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCA3MHB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgNzBweCk7XG4gIGdhcDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLnRpbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXdzcGFwZXIpO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWFyayB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLnNpZGViYXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwMHB4O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggMzBweCA1MHB4O1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICByb3ctZ2FwOiAxMHB4O1xufVxuXG4uc2lkZWJhci5pbi1nYW1lIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNDBweDtcbn1cblxuLnRpbWVyLWNvbnRhaW5lciwgLnN0cmVhay1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDIwMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cblxuLnRpbWVyLCAudGltZXItdGl0bGUsIC5zdHJlYWsgLCAuc3RyZWFrLXRpdGxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc2lkZWJhciBwIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuXG4uc2lkZWJhciAudGltZXIsIC5zaWRlYmFyIC5zdHJlYWsge1xuICBmb250LXNpemU6IDM2cHg7XG59XG5cbi5wcmUtZ2FtZS1tZXNzYWdlIHtcbiAgZ3JpZC1yb3c6IDEgLyAzO1xufVxuXG4udGltZXItdGl0bGUsIC50aW1lciB7XG4gIGdyaWQtcm93OiAxO1xufVxuXG4uc3RyZWFrLXRpdGxlLCAuc3RyZWFrIHtcbiAgZ3JpZC1yb3c6IDI7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAxMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnN0YXJ0LWJ1dHRvbiwgLnJldGlyZS1idXR0b24ge1xuICBncmlkLXJvdzogMztcbn1cblxuLnByZS1nYW1lLW1lc3NhZ2UsIC5zdHJlYWstdGl0bGUsIC5zdHJlYWssIC50aW1lci10aXRsZSwgLnRpbWVyLCAucmV0aXJlLWJ1dHRvbiwgYm9keSB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5wcmUtZ2FtZS1tZXNzYWdlLCAuc3RyZWFrLXRpdGxlLCAuc3RyZWFrLCAudGltZXItdGl0bGUsIC50aW1lciwgLnJldGlyZS1idXR0b24gIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHRleHQtZmFkZS1pbjtcbn1cblxuYm9keS5yZXNldCB7XG4gIGFuaW1hdGlvbi1uYW1lOiByZXNldDtcbn1cblxuYm9keS5wcmUtZ2FtZSB7XG4gIGFuaW1hdGlvbi1uYW1lOiBleHBhbmQtYm9keTtcbn0gXG5cbmJvZHkuaW4tZ2FtZSB7XG4gIGFuaW1hdGlvbi1uYW1lOiBzaHJpbmstYm9keTtcbn1cblxuYm9keS5kZWZlYXQge1xuICBhbmltYXRpb24tbmFtZTogZGVmZWF0O1xufVxuXG5ib2R5LmZhZGUtb3V0IHtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGUtb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIGV4cGFuZC1ib2R5IHtcbiAgZnJvbSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMTRweCA0MDBweDtcbiAgfVxuXG4gIHRvIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIxNHB4IDYwMHB4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2hyaW5rLWJvZHkge1xuICBmcm9tIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIxNHB4IDYwMHB4O1xuICB9XG5cbiAgdG8ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjE0cHggNDAwcHg7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBkZWZlYXQge1xuICBmcm9tIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIxNHB4IDQwMHB4O1xuICB9XG5cbiAgdG8ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjE0cHggNDAwcHg7XG4gIH1cbn1cblxuQGtleWZyYW1lcyByZXNldCB7XG4gIGZyb20ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjE0cHggNDAwcHg7XG4gIH1cblxuICB0byB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMTRweCA0MDBweDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHRleHQtZmFkZS1pbiB7XG4gIGZyb20ge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIHRvIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlLW91dCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMTRweCA0MDBweDtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjE0cHggNDAwcHg7XG4gIH1cbn1cblxuYm9keS52aWN0b3J5LXNjcmVlbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICByb3ctZ2FwOiAyMHB4O1xufVxuXG4udmljdG9yeS1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsUUFBUTtFQUNSLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixrQ0FBa0M7RUFDbEMscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsNENBQTRDO0VBQzVDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRTtJQUNFLGtDQUFrQztFQUNwQzs7RUFFQTtJQUNFLGtDQUFrQztFQUNwQztBQUNGOztBQUVBO0VBQ0U7SUFDRSxrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSxrQ0FBa0M7RUFDcEM7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0Usa0NBQWtDO0VBQ3BDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGtDQUFrQztFQUNwQzs7RUFFQTtJQUNFLGtDQUFrQztFQUNwQztBQUNGOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGtDQUFrQztFQUNwQzs7RUFFQTtJQUNFLFVBQVU7SUFDVixrQ0FBa0M7RUFDcEM7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1uZXdzcGFwZXI6IHJnYigyMjAsIDIyMCwgMjIwKTtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV3c3BhcGVyKTtcXG59XFxuXFxuYm9keS5nYW1lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIxNHB4IDYwMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sdW1uLWdhcDogNzBweDsgXFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA1NDA7XFxufVxcblxcbi5ib2FyZCB7XFxuICBoZWlnaHQ6IDIxNHB4O1xcbiAgd2lkdGg6IDIxNHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDcwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgNzBweCk7XFxuICBnYXA6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGlsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXdzcGFwZXIpO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1hcmsge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MDBweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzBweCAzMHB4IDUwcHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICByb3ctZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc2lkZWJhci5pbi1nYW1lIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjQwcHg7XFxufVxcblxcbi50aW1lci1jb250YWluZXIsIC5zdHJlYWstY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG5cXG4udGltZXIsIC50aW1lci10aXRsZSwgLnN0cmVhayAsIC5zdHJlYWstdGl0bGUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uc2lkZWJhciBwIHtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuXFxuLnNpZGViYXIgLnRpbWVyLCAuc2lkZWJhciAuc3RyZWFrIHtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG59XFxuXFxuLnByZS1nYW1lLW1lc3NhZ2Uge1xcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcbn1cXG5cXG4udGltZXItdGl0bGUsIC50aW1lciB7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLnN0cmVhay10aXRsZSwgLnN0cmVhayB7XFxuICBncmlkLXJvdzogMjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMDAsIDIwMCk7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5zdGFydC1idXR0b24sIC5yZXRpcmUtYnV0dG9uIHtcXG4gIGdyaWQtcm93OiAzO1xcbn1cXG5cXG4ucHJlLWdhbWUtbWVzc2FnZSwgLnN0cmVhay10aXRsZSwgLnN0cmVhaywgLnRpbWVyLXRpdGxlLCAudGltZXIsIC5yZXRpcmUtYnV0dG9uLCBib2R5IHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4ucHJlLWdhbWUtbWVzc2FnZSwgLnN0cmVhay10aXRsZSwgLnN0cmVhaywgLnRpbWVyLXRpdGxlLCAudGltZXIsIC5yZXRpcmUtYnV0dG9uICB7XFxuICBhbmltYXRpb24tbmFtZTogdGV4dC1mYWRlLWluO1xcbn1cXG5cXG5ib2R5LnJlc2V0IHtcXG4gIGFuaW1hdGlvbi1uYW1lOiByZXNldDtcXG59XFxuXFxuYm9keS5wcmUtZ2FtZSB7XFxuICBhbmltYXRpb24tbmFtZTogZXhwYW5kLWJvZHk7XFxufSBcXG5cXG5ib2R5LmluLWdhbWUge1xcbiAgYW5pbWF0aW9uLW5hbWU6IHNocmluay1ib2R5O1xcbn1cXG5cXG5ib2R5LmRlZmVhdCB7XFxuICBhbmltYXRpb24tbmFtZTogZGVmZWF0O1xcbn1cXG5cXG5ib2R5LmZhZGUtb3V0IHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlLW91dDtcXG59XFxuXFxuQGtleWZyYW1lcyBleHBhbmQtYm9keSB7XFxuICBmcm9tIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMTRweCA0MDBweDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMTRweCA2MDBweDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzaHJpbmstYm9keSB7XFxuICBmcm9tIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMTRweCA2MDBweDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMTRweCA0MDBweDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBkZWZlYXQge1xcbiAgZnJvbSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjE0cHggNDAwcHg7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjE0cHggNDAwcHg7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcmVzZXQge1xcbiAgZnJvbSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjE0cHggNDAwcHg7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjE0cHggNDAwcHg7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgdGV4dC1mYWRlLWluIHtcXG4gIGZyb20ge1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlLW91dCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMTRweCA0MDBweDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMTRweCA0MDBweDtcXG4gIH1cXG59XFxuXFxuYm9keS52aWN0b3J5LXNjcmVlbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgcm93LWdhcDogMjBweDtcXG59XFxuXFxuLnZpY3RvcnktbWVzc2FnZSB7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgR2FtZSBmcm9tICcuL21vZGVsL0dhbWUuanMnO1xuXG5pbXBvcnQgcmVuZGVyQm9hcmQgZnJvbSAnLi92aWV3L0JvYXJkLmpzJztcbmltcG9ydCByZW5kZXJTaWRlYmFyIGZyb20gJy4vdmlldy9TaWRlYmFyLmpzJztcblxuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMuY3NzJztcblxubGV0IHNob3dWaWN0b3J5U2NyZWVuO1xuXG5mdW5jdGlvbiBzaG93R2FtZSgpIHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKC4uLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0KTtcbiAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcblxuICBsZXQgZ2FtZSA9IG5ldyBHYW1lKCk7XG5cbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdnYW1lJyk7XG5cbiAgY29uc3QgYm9hcmRWaWV3ID0gcmVuZGVyQm9hcmQoKTtcbiAgY29uc3Qgc2lkZWJhciA9IHJlbmRlclNpZGViYXIoKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJvYXJkVmlldyk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG5cbiAgZnVuY3Rpb24gZGVjbGFyZURlZmVhdCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2RlZmVhdCcpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaW4tZ2FtZScpO1xuXG4gICAgc2lkZWJhci5kZWNsYXJlRGVmZWF0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja1dpbm5lcigpIHtcbiAgICBpZiAoZ2FtZS53aW5uZXIgfHwgZ2FtZS5ib2FyZElzRnVsbCkge1xuICAgICAgc2lkZWJhci5zZXRUaWVTdHJlYWsoZ2FtZS50aWVDb3VudCk7XG4gICAgICBpZiAoZ2FtZS5nZXRTY29yZSgnQ3B1JykgPT09IDEpIHtcbiAgICAgICAgZGVjbGFyZURlZmVhdCgpO1xuICAgICAgfSBlbHNlIGlmIChnYW1lLnRpZUNvdW50ID09PSAxMCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2ZhZGUtb3V0Jyk7XG4gICAgICAgIHNldFRpbWVvdXQoc2hvd1ZpY3RvcnlTY3JlZW4sIDUwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnYW1lID0gZ2FtZS5yZXNldCgpO1xuICAgICAgfVxuICAgICAgYm9hcmRWaWV3LnVwZGF0ZShnYW1lLmJvYXJkKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBleGVjdXRlQ3B1Um91dGluZSgpIHtcbiAgICBpZiAoZ2FtZS5jdXJyZW50UGxheWVyICE9PSBudWxsICYmIGdhbWUuY3VycmVudFBsYXllci5pc0NwdSkge1xuICAgICAgZ2FtZSA9IGdhbWUucGxheVR1cm4oKTtcbiAgICAgIGJvYXJkVmlldy51cGRhdGUoZ2FtZS5ib2FyZCk7XG5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGNoZWNrV2lubmVyKCk7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBpZiAoZ2FtZS5jdXJyZW50UGxheWVyICE9PSBudWxsICYmIGdhbWUuY3VycmVudFBsYXllci5pc0NwdSkge1xuICAgICAgICAgICAgZXhlY3V0ZUNwdVJvdXRpbmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9hcmRWaWV3LnVwZGF0ZShnYW1lLmJvYXJkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQm9hcmRDbGljayhldmVudCkge1xuICAgIGdhbWUgPSBnYW1lLnBsYXlUdXJuKGV2ZW50LmRldGFpbC54LCBldmVudC5kZXRhaWwueSk7XG4gICAgYm9hcmRWaWV3LnVwZGF0ZShnYW1lLmJvYXJkKTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBjaGVja1dpbm5lcigpO1xuXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZXhlY3V0ZUNwdVJvdXRpbmUpO1xuICAgIH0pO1xuICB9XG5cbiAgc2lkZWJhci5hZGRFdmVudExpc3RlbmVyKCdzdGFydEJ1dHRvbkNsaWNrZWQnLCAoZSkgPT4ge1xuICAgIGlmIChlLmRldGFpbC5yZXNldCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdyZXNldCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkZWZlYXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdpbi1nYW1lJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3ByZS1nYW1lJyk7XG4gICAgfVxuXG4gICAgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gICAgYm9hcmRWaWV3LnVwZGF0ZShnYW1lLmJvYXJkKTtcblxuICAgIGJvYXJkVmlldy5hZGRFdmVudExpc3RlbmVyKCd0aWxlQ2xpY2tlZCcsIGhhbmRsZUJvYXJkQ2xpY2spO1xuICB9KTtcblxuICBzaWRlYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ3JldGlyZUJ1dHRvbkNsaWNrZWQnLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdwcmUtZ2FtZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaW4tZ2FtZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgncmVzZXQnKTtcblxuICAgIGJvYXJkVmlldy5yZW1vdmVFdmVudExpc3RlbmVyKCd0aWxlQ2xpY2tlZCcsIGhhbmRsZUJvYXJkQ2xpY2spO1xuICB9KTtcblxuICBzaWRlYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWVVcCcsICgpID0+IHtcbiAgICBzaWRlYmFyLmRlY2xhcmVEZWZlYXQoKTtcbiAgfSk7XG59XG5cbnNob3dWaWN0b3J5U2NyZWVuID0gKCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoLi4uZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QpO1xuICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgndmljdG9yeS1zY3JlZW4nKTtcblxuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCd2aWN0b3J5LW1lc3NhZ2UnKTtcbiAgbWVzc2FnZS50ZXh0Q29udGVudCA9ICdWaWN0b3J5ISc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG5cbiAgY29uc3QgYmFja0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBiYWNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0JhY2snO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJhY2tCdXR0b24pO1xuXG4gIGJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93R2FtZSk7XG59O1xuXG5zaG93R2FtZSgpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdmYWRlLW91dCcpO1xuICAgIHNldFRpbWVvdXQoc2hvd1ZpY3RvcnlTY3JlZW4sIDUwMCk7XG4gIH1cbn0pO1xuIiwiY2xhc3MgQm9hcmQge1xuICAjdGlsZXM7XG5cbiAgY29uc3RydWN0b3IodGlsZXMgPSBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10pIHtcbiAgICB0aGlzLiN0aWxlcyA9IHRpbGVzO1xuICB9XG5cbiAgZ2V0VGlsZSh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuI3RpbGVzW3ggKyB5ICogM107XG4gIH1cblxuICBzZXRUaWxlKHgsIHksIG1hcmtlcikge1xuICAgIGNvbnN0IHRpbGVzID0gWy4uLnRoaXMuI3RpbGVzXTtcbiAgICB0aWxlc1t4ICsgeSAqIDNdID0gbWFya2VyO1xuICAgIHJldHVybiBuZXcgQm9hcmQodGlsZXMpO1xuICB9XG5cbiAgZ2V0IHdpbm5lcigpIHtcbiAgICBmdW5jdGlvbiBnZXRMaW5lcyh0aWxlcykge1xuICAgICAgY29uc3Qgcm93cyA9IFtbXSwgW10sIFtdXTtcbiAgICAgIGNvbnN0IGNvbHVtbnMgPSBbW10sIFtdLCBbXV07XG4gICAgICBjb25zdCBkaWFnb25hbHMgPSBbW10sIFtdXTtcblxuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAzOyB4ICs9IDEpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCAzOyB5ICs9IDEpIHtcbiAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZXMuZ2V0VGlsZSh4LCB5KTtcblxuICAgICAgICAgIHJvd3NbeV0ucHVzaCh0aWxlKTtcbiAgICAgICAgICBjb2x1bW5zW3hdLnB1c2godGlsZSk7XG5cbiAgICAgICAgICBpZiAoeCA9PT0geSkge1xuICAgICAgICAgICAgZGlhZ29uYWxzWzBdLnB1c2godGlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh4ICsgeSA9PT0gMikge1xuICAgICAgICAgICAgZGlhZ29uYWxzWzFdLnB1c2godGlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbLi4ucm93cywgLi4uY29sdW1ucywgLi4uZGlhZ29uYWxzXTtcbiAgICB9XG5cbiAgICBjb25zdCBsaW5lcyA9IGdldExpbmVzKHRoaXMpO1xuICAgIGNvbnN0IG1hcmtlcnMgPSBbJ1gnLCAnTyddO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXJrZXJzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChsaW5lc1tpXS5ldmVyeSgobSkgPT4gbSA9PT0gbWFya2Vyc1tqXSkpIHtcbiAgICAgICAgICByZXR1cm4gbWFya2Vyc1tqXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0IGZyZWVUaWxlcygpIHtcbiAgICBjb25zdCBmcmVlVGlsZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGogKz0gMSkge1xuICAgICAgICBpZiAodGhpcy5nZXRUaWxlKGksIGopID09PSAnJykge1xuICAgICAgICAgIGZyZWVUaWxlcy5wdXNoKHsgeDogaSwgeTogaiB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmVlVGlsZXM7XG4gIH1cblxuICBnZXQgaXNGdWxsKCkge1xuICAgIHJldHVybiB0aGlzLiN0aWxlcy5ldmVyeSgodCkgPT4gdCAhPT0gJycpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkO1xuIiwiaW1wb3J0IEJvYXJkIGZyb20gJy4vQm9hcmQuanMnO1xuaW1wb3J0IG1vdmVDYWxjdWxhdG9yIGZyb20gJy4uL21vZHVsZXMvbW92ZUNhbGN1bGF0b3IuanMnO1xuXG5jbGFzcyBHYW1lIHtcbiAgI2JvYXJkO1xuXG4gICNwbGF5ZXJzO1xuXG4gICNzY29yZWJvYXJkO1xuXG4gICNzdGFydGluZ1BsYXllcjtcblxuICAjcGxheWVySW5kZXg7XG5cbiAgI3RpZUNvdW50O1xuXG4gIGNvbnN0cnVjdG9yKHN0YXRlID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICBib2FyZCA9IG5ldyBCb2FyZCgpLFxuICAgICAgcGxheWVycyA9IFtcbiAgICAgICAgeyBuYW1lOiAnUGxheWVyJywgbWFya2VyOiAnWCcsIGlzQ3B1OiBmYWxzZSB9LFxuICAgICAgICB7IG5hbWU6ICdDcHUnLCBtYXJrZXI6ICdPJywgaXNDcHU6IHRydWUgfSxcbiAgICAgIF0sXG4gICAgICBzY29yZWJvYXJkID0gWzAsIDBdLFxuICAgICAgc3RhcnRpbmdQbGF5ZXIgPSAwLFxuICAgICAgcGxheWVySW5kZXggPSAwLFxuICAgICAgdGllQ291bnQgPSAwLFxuICAgIH0gPSBzdGF0ZTtcblxuICAgIHRoaXMuI2JvYXJkID0gYm9hcmQ7XG4gICAgdGhpcy4jcGxheWVycyA9IHBsYXllcnM7XG4gICAgdGhpcy4jc2NvcmVib2FyZCA9IHNjb3JlYm9hcmQ7XG4gICAgdGhpcy4jc3RhcnRpbmdQbGF5ZXIgPSBzdGFydGluZ1BsYXllcjtcbiAgICB0aGlzLiNwbGF5ZXJJbmRleCA9IGJvYXJkLmlzRnVsbCA/IG51bGwgOiBwbGF5ZXJJbmRleDtcbiAgICB0aGlzLiN0aWVDb3VudCA9IHRpZUNvdW50O1xuICB9XG5cbiAgZ2V0IGJvYXJkKCkge1xuICAgIHJldHVybiB0aGlzLiNib2FyZDtcbiAgfVxuXG4gIGdldCB3aW5uZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2JvYXJkLndpbm5lcjtcbiAgfVxuXG4gIGdldCBib2FyZElzRnVsbCgpIHtcbiAgICByZXR1cm4gdGhpcy4jYm9hcmQuaXNGdWxsO1xuICB9XG5cbiAgZ2V0IHBsYXllcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3BsYXllcnM7XG4gIH1cblxuICBnZXQgc3RhcnRpbmdQbGF5ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0YXJ0aW5nUGxheWVyO1xuICB9XG5cbiAgZ2V0IHBsYXllckluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLiNwbGF5ZXJJbmRleDtcbiAgfVxuXG4gIGdldCBjdXJyZW50UGxheWVyKCkge1xuICAgIHJldHVybiB0aGlzLiNwbGF5ZXJJbmRleCAhPT0gbnVsbCA/IHRoaXMuI3BsYXllcnNbdGhpcy4jcGxheWVySW5kZXhdIDogbnVsbDtcbiAgfVxuXG4gIGdldCB0aWVDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy4jdGllQ291bnQ7XG4gIH1cblxuICBnZXRUaWxlKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy4jYm9hcmQuZ2V0VGlsZSh4LCB5KTtcbiAgfVxuXG4gIGdldFNjb3JlKHBsYXllcikge1xuICAgIGlmIChwbGF5ZXIgPT09ICdQbGF5ZXInKSB7XG4gICAgICByZXR1cm4gdGhpcy4jc2NvcmVib2FyZFswXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuI3Njb3JlYm9hcmRbMV07XG4gIH1cblxuICBwbGF5VHVybih4LCB5KSB7XG4gICAgaWYgKHRoaXMud2lubmVyIHx8IHRoaXMuYm9hcmRJc0Z1bGwpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvbnN0IG1vdmUgPSB0aGlzLmN1cnJlbnRQbGF5ZXIuaXNDcHVcbiAgICAgID8gbW92ZUNhbGN1bGF0b3IuY29tZVVwV2l0aE1vdmUodGhpcy4jYm9hcmQsIHRoaXMuY3VycmVudFBsYXllci5tYXJrZXIpXG4gICAgICA6IHsgeCwgeSwgbWFya2VyOiB0aGlzLmN1cnJlbnRQbGF5ZXIubWFya2VyIH07XG5cbiAgICBjb25zdCBuZXh0ID0ge307XG5cbiAgICBuZXh0LmJvYXJkID0gdGhpcy4jYm9hcmQuc2V0VGlsZShtb3ZlLngsIG1vdmUueSwgbW92ZS5tYXJrZXIpO1xuICAgIG5leHQuc2NvcmVib2FyZCA9IHRoaXMuI3Njb3JlYm9hcmQ7XG4gICAgbmV4dC50aWVDb3VudCA9IG5leHQuYm9hcmQuaXNGdWxsICYmICFuZXh0LmJvYXJkLndpbm5lciA/IHRoaXMuI3RpZUNvdW50ICsgMSA6IHRoaXMuI3RpZUNvdW50O1xuICAgIG5leHQuc3RhcnRpbmdQbGF5ZXIgPSB0aGlzLiNzdGFydGluZ1BsYXllcjtcbiAgICBuZXh0LnBsYXllcnMgPSB0aGlzLiNwbGF5ZXJzO1xuXG4gICAgaWYgKG5leHQuYm9hcmQud2lubmVyKSB7XG4gICAgICBuZXh0LnNjb3JlYm9hcmRbdGhpcy4jcGxheWVySW5kZXhdICs9IDE7XG4gICAgfVxuXG4gICAgaWYgKCFuZXh0LmJvYXJkLndpbm5lciB8fCAhbmV4dC5ib2FyZC5pc0Z1bGwpIHtcbiAgICAgIG5leHQucGxheWVySW5kZXggPSB0aGlzLiNwbGF5ZXJJbmRleCA9PT0gMCA/IDEgOiAwO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgR2FtZShuZXh0KTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHJldHVybiBuZXcgR2FtZSh7XG4gICAgICBib2FyZDogbmV3IEJvYXJkKCksXG4gICAgICBwbGF5ZXJzOiB0aGlzLiNwbGF5ZXJzLFxuICAgICAgc2NvcmVib2FyZDogdGhpcy4jc2NvcmVib2FyZCxcbiAgICAgIHN0YXJ0aW5nUGxheWVyOiB0aGlzLiNzdGFydGluZ1BsYXllciA9PT0gMCA/IDEgOiAwLFxuICAgICAgcGxheWVySW5kZXg6IHRoaXMuI3N0YXJ0aW5nUGxheWVyID09PSAwID8gMSA6IDAsXG4gICAgICB0aWVDb3VudDogdGhpcy4jdGllQ291bnQsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImZ1bmN0aW9uIHN1bVRpbWUodGltZSA9IHt9KSB7XG4gIGNvbnN0IHtcbiAgICBkYXlzID0gMCxcbiAgICBob3VycyA9IDAsXG4gICAgbWludXRlcyA9IDAsXG4gICAgc2Vjb25kcyA9IDAsXG4gICAgY2VudGlzZWNvbmRzID0gMCxcbiAgICBtaWxsaXNlY29uZHMgPSAwLFxuICB9ID0gdGltZTtcblxuICByZXR1cm4gZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgICArIGhvdXJzICogNjAgKiA2MCAqIDEwMDBcbiAgICArIG1pbnV0ZXMgKiA2MCAqIDEwMDBcbiAgICArIHNlY29uZHMgKiAxMDAwXG4gICAgKyBjZW50aXNlY29uZHMgKiAxMFxuICAgICsgbWlsbGlzZWNvbmRzO1xufVxuXG5jbGFzcyBUaW1lIHtcbiAgI2Ftb3VudDtcblxuICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzID0ge30pIHtcbiAgICB0aGlzLiNhbW91bnQgPSBzdW1UaW1lKGluaXRpYWxWYWx1ZXMpO1xuICB9XG5cbiAgZ2V0VmFsdWUob3B0aW9ucyA9IHsgZ2V0TWludXRlczogdHJ1ZSwgZ2V0U2Vjb25kczogdHJ1ZSwgZ2V0Q2VudGlzZWNvbmRzOiB0cnVlIH0pIHtcbiAgICBjb25zdCB7XG4gICAgICBnZXREYXlzID0gZmFsc2UsXG4gICAgICBnZXRIb3VycyA9IGZhbHNlLFxuICAgICAgZ2V0TWludXRlcyA9IGZhbHNlLFxuICAgICAgZ2V0U2Vjb25kcyA9IGZhbHNlLFxuICAgICAgZ2V0Q2VudGlzZWNvbmRzID0gZmFsc2UsXG4gICAgICBnZXRNaWxsaXNlY29uZHMgPSBmYWxzZSxcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIGNvbnN0IHRpbWVVbml0cyA9IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2RheXMnLFxuICAgICAgICBzZWxlY3RlZDogZ2V0RGF5cyxcbiAgICAgICAgYWJzb2x1dGVWYWx1ZTogMTAwMCAqIDYwICogNjAgKiAyNCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdob3VycycsXG4gICAgICAgIHNlbGVjdGVkOiBnZXRIb3VycyxcbiAgICAgICAgYWJzb2x1dGVWYWx1ZTogMTAwMCAqIDYwICogNjAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnbWludXRlcycsXG4gICAgICAgIHNlbGVjdGVkOiBnZXRNaW51dGVzLFxuICAgICAgICBhYnNvbHV0ZVZhbHVlOiAxMDAwICogNjAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnc2Vjb25kcycsXG4gICAgICAgIHNlbGVjdGVkOiBnZXRTZWNvbmRzLFxuICAgICAgICBhYnNvbHV0ZVZhbHVlOiAxMDAwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2NlbnRpc2Vjb25kcycsXG4gICAgICAgIHNlbGVjdGVkOiBnZXRDZW50aXNlY29uZHMsXG4gICAgICAgIGFic29sdXRlVmFsdWU6IDEwMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdtaWxsaXNlY29uZHMnLFxuICAgICAgICBzZWxlY3RlZDogZ2V0TWlsbGlzZWNvbmRzLFxuICAgICAgICBhYnNvbHV0ZVZhbHVlOiAxLFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgbGV0IHJlbWFpbmRlciA9IHRoaXMuI2Ftb3VudDtcblxuICAgIHJldHVybiB0aW1lVW5pdHNcbiAgICAgIC5maWx0ZXIoKHsgc2VsZWN0ZWQgfSkgPT4gc2VsZWN0ZWQpXG4gICAgICAucmVkdWNlKChhcnJhbmdlZFZhbHVlLCB1bml0KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gTWF0aC5mbG9vcihyZW1haW5kZXIgLyB1bml0LmFic29sdXRlVmFsdWUpO1xuICAgICAgICByZW1haW5kZXIgLT0gdmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYXJyYW5nZWRWYWx1ZSwgeyBbdW5pdC5uYW1lXTogdmFsdWUgfSk7XG4gICAgICB9LCB7fSk7XG4gIH1cblxuICBpbmNyZW1lbnQodGltZVRvQWRkID0ge30pIHtcbiAgICByZXR1cm4gbmV3IFRpbWUoeyBtaWxsaXNlY29uZHM6IHRoaXMuI2Ftb3VudCArIHN1bVRpbWUodGltZVRvQWRkKSB9KTtcbiAgfVxuXG4gIGRlY3JlbWVudCh0aW1lVG9TdWJ0cmFjdCA9IHt9KSB7XG4gICAgcmV0dXJuIG5ldyBUaW1lKHsgbWlsbGlzZWNvbmRzOiB0aGlzLiNhbW91bnQgLSBzdW1UaW1lKHRpbWVUb1N1YnRyYWN0KSB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lO1xuIiwiZnVuY3Rpb24gY2hvb3NlTW92ZShtb3Zlcykge1xuICBmb3IgKGxldCBwcmlvcml0eSA9IDI7IHByaW9yaXR5ID49IC0xOyBwcmlvcml0eSAtPSAxKSB7XG4gICAgY29uc3QgYmVzdE1vdmVzID0gbW92ZXMuZmlsdGVyKChtb3ZlKSA9PiBtb3ZlLnByaW9yaXR5ID09PSBwcmlvcml0eSk7XG5cbiAgICBpZiAoYmVzdE1vdmVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGNob3Nlbk1vdmUgPSBiZXN0TW92ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYmVzdE1vdmVzLmxlbmd0aCldO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiBjaG9zZW5Nb3ZlLngsXG4gICAgICAgIHk6IGNob3Nlbk1vdmUueSxcbiAgICAgICAgbWFya2VyOiBjaG9zZW5Nb3ZlLm1hcmtlcixcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmNvbnN0IG1vdmVDYWxjdWxhdG9yID0ge1xuICBldmFsdWF0ZU1vdmUobW92ZSwgYm9hcmQsIHNlbGYsIGRlcHRoID0gMCkge1xuICAgIGNvbnN0IG9wcG9uZW50ID0gc2VsZiA9PT0gJ1gnID8gJ08nIDogJ1gnO1xuICAgIGNvbnN0IGRldmVsb3BtZW50ID0gYm9hcmQuc2V0VGlsZShtb3ZlLngsIG1vdmUueSwgbW92ZS5tYXJrZXIpO1xuXG4gICAgaWYgKGRldmVsb3BtZW50Lndpbm5lciA9PT0gc2VsZikge1xuICAgICAgcmV0dXJuIGRlcHRoID09PSAwID8gMiA6IDE7XG4gICAgfVxuICAgIGlmIChkZXZlbG9wbWVudC53aW5uZXIgPT09IG9wcG9uZW50KSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmIChkZXZlbG9wbWVudC5pc0Z1bGwpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGNvbnN0IG91dGNvbWVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRldmVsb3BtZW50LmZyZWVUaWxlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgeyB4LCB5IH0gPSBkZXZlbG9wbWVudC5mcmVlVGlsZXNbaV07XG4gICAgICBjb25zdCBuZXh0TW92ZSA9IHsgeCwgeSwgbWFya2VyOiBtb3ZlLm1hcmtlciA9PT0gJ1gnID8gJ08nIDogJ1gnIH07XG4gICAgICBjb25zdCBvdXRjb21lID0gdGhpcy5ldmFsdWF0ZU1vdmUobmV4dE1vdmUsIGRldmVsb3BtZW50LCBzZWxmLCBkZXB0aCArIDEpO1xuXG4gICAgICBpZiAobW92ZS5tYXJrZXIgPT09IG9wcG9uZW50ICYmIG91dGNvbWUgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBpZiAobW92ZS5tYXJrZXIgPT09IHNlbGYgJiYgb3V0Y29tZSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuXG4gICAgICBvdXRjb21lcy5wdXNoKG91dGNvbWUpO1xuICAgIH1cblxuICAgIGlmIChvdXRjb21lcy5pbmNsdWRlcygwKSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vdmUubWFya2VyID09PSBvcHBvbmVudCA/IC0xIDogMTtcbiAgfSxcblxuICBjb21lVXBXaXRoTW92ZShib2FyZCwgc2VsZikge1xuICAgIGNvbnN0IHBvc3NpYmxlTW92ZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQuZnJlZVRpbGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCB7IHgsIHkgfSA9IGJvYXJkLmZyZWVUaWxlc1tpXTtcblxuICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHtcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgbWFya2VyOiBzZWxmLFxuICAgICAgICBwcmlvcml0eTogdGhpcy5ldmFsdWF0ZU1vdmUoeyB4LCB5LCBtYXJrZXI6IHNlbGYgfSwgYm9hcmQsIHNlbGYpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNob29zZU1vdmUocG9zc2libGVNb3Zlcyk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb3ZlQ2FsY3VsYXRvcjtcbiIsImltcG9ydCBCb2FyZCBmcm9tICcuLi9tb2RlbC9Cb2FyZC5qcyc7XG5cbmZ1bmN0aW9uIHJlbmRlckJvYXJkKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG5cbiAgY29uc3QgdXBkYXRlID0gKGJvYXJkKSA9PiB7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyVGlsZSA9IChtYXJrKSA9PiB7XG4gICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgIHRpbGUudGV4dENvbnRlbnQgPSAobWFyayA9PT0gJ1gnIHx8IG1hcmsgPT09ICdPJykgPyBtYXJrIDogJyc7XG4gICAgICByZXR1cm4gdGlsZTtcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCAzOyB4ICs9IDEpIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMzsgeSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHRpbGUgPSByZW5kZXJUaWxlKGJvYXJkLmdldFRpbGUoeCwgeSkpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XG5cbiAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBpZiAodGlsZS50ZXh0Q29udGVudCA9PT0gJ1gnIHx8IHRpbGUudGV4dENvbnRlbnQgPT09ICdPJykgcmV0dXJuO1xuXG4gICAgICAgICAgY29udGFpbmVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd0aWxlQ2xpY2tlZCcsIHtcbiAgICAgICAgICAgIGRldGFpbDogeyB4LCB5IH0sXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdXBkYXRlKG5ldyBCb2FyZCgpKTtcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihjb250YWluZXIsIHsgdXBkYXRlIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJCb2FyZDtcbiIsImltcG9ydCBUaW1lIGZyb20gJy4uL21vZGVsL1RpbWUuanMnO1xuXG5mdW5jdGlvbiByZW5kZXJDb3VudGRvd25UaW1lcihpbml0aWFsVGltZSkge1xuICBsZXQgaW50ZXJ2YWxJZCA9IG51bGw7XG4gIGxldCB0aW1lUmVtYWluaW5nID0gaW5pdGlhbFRpbWU7XG5cbiAgY29uc3QgdGltZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRpbWVyLnRleHRDb250ZW50ID0gdGltZVJlbWFpbmluZy5nZXRWYWx1ZSh7IGdldFNlY29uZHM6IHRydWUgfSkuc2Vjb25kcztcbiAgdGltZXIuY2xhc3NMaXN0LmFkZCgndGltZXInKTtcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aW1lciwge1xuICAgIHN0YXJ0KCkge1xuICAgICAgaWYgKGludGVydmFsSWQgIT09IG51bGwpIHJldHVybjtcblxuICAgICAgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKHRpbWVSZW1haW5pbmcuZ2V0VmFsdWUoeyBnZXRTZWNvbmRzOiB0cnVlIH0pLnNlY29uZHMgPT09IDApIHtcbiAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd0aW1lVXAnKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGltZVJlbWFpbmluZyA9IHRpbWVSZW1haW5pbmcuZGVjcmVtZW50KHsgc2Vjb25kczogMSB9KTtcbiAgICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gdGltZVJlbWFpbmluZy5nZXRWYWx1ZSh7IGdldFNlY29uZHM6IHRydWUgfSkuc2Vjb25kcztcbiAgICAgICAgfVxuICAgICAgfSwgMTAwMCk7XG4gICAgfSxcblxuICAgIHN0b3AoKSB7XG4gICAgICB0aGlzLnRleHRDb250ZW50ID0gdGltZVJlbWFpbmluZy5nZXRWYWx1ZSh7IGdldFNlY29uZHM6IHRydWUgfSkuc2Vjb25kcztcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICBpbnRlcnZhbElkID0gbnVsbDtcbiAgICB9LFxuXG4gICAgcmVzZXQoKSB7XG4gICAgICB0aW1lUmVtYWluaW5nID0gbmV3IFRpbWUoKTtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDb3VudGRvd25UaW1lcjtcbiIsImltcG9ydCBUaW1lIGZyb20gJy4uL21vZGVsL1RpbWUuanMnO1xuXG5pbXBvcnQgcmVuZGVyQ291bnRkb3duVGltZXIgZnJvbSAnLi9Db3VudGRvd25UaW1lci5qcyc7XG5cbmZ1bmN0aW9uIHJlbmRlclNpZGViYXIoKSB7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG5cbiAgY29uc3Qgc2hpZnRUb1ByZUdhbWUgPSAocHJlR2FtZU1lc3NhZ2UsIGJ1dHRvblRleHQsIGRlZmVhdGVkLCBjbGlja0hhbmRsZXIpID0+IHtcbiAgICBpZiAoc2lkZWJhci5xdWVyeVNlbGVjdG9yKCd0aW1lcicpKSB7XG4gICAgICBzaWRlYmFyLnF1ZXJ5U2VsZWN0b3IoJ3RpbWVyJykuc3RvcCgpO1xuICAgIH1cblxuICAgIHNpZGViYXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2luLWdhbWUnKTtcblxuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdwcmUtZ2FtZS1tZXNzYWdlJyk7XG4gICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IHByZUdhbWVNZXNzYWdlO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG5cbiAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0LWJ1dHRvbicpO1xuICAgIHN0YXJ0QnV0dG9uLnRleHRDb250ZW50ID0gYnV0dG9uVGV4dDtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHN0YXJ0QnV0dG9uKTtcblxuICAgIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xpY2tIYW5kbGVyKHtcbiAgICAgIGN1cnJlbnRTdGF0ZTogZGVmZWF0ZWQgPyAnZGVmZWF0JyA6ICdwcmVHYW1lJyxcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGRldGFpbCA9IHt9KSA9PiB7XG4gICAgaWYgKGRldGFpbC5jdXJyZW50U3RhdGUgPT09ICdpbkdhbWUnKSB7XG4gICAgICBzaGlmdFRvUHJlR2FtZSgnRm9yY2UgYSB0aWUgMTAgdGltZXMgaW4gYSByb3cgaW4gdW5kZXIgMzUgc2Vjb25kcycsICdTdGFydCcsIGZhbHNlLCBjbGlja0hhbmRsZXIpO1xuICAgICAgc2lkZWJhci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncmV0aXJlQnV0dG9uQ2xpY2tlZCcpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzaWRlYmFyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdpbi1nYW1lJyk7XG5cbiAgICBjb25zdCB0aW1lckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpbWVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RpbWVyLWNvbnRhaW5lcicpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQodGltZXJDb250YWluZXIpO1xuXG4gICAgY29uc3QgdGltZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGltZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aW1lci10aXRsZScpO1xuICAgIHRpbWVyVGl0bGUudGV4dENvbnRlbnQgPSAnVGltZSc7XG4gICAgdGltZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZXJUaXRsZSk7XG5cbiAgICBjb25zdCB0aW1lciA9IHJlbmRlckNvdW50ZG93blRpbWVyKG5ldyBUaW1lKHsgc2Vjb25kczogMzUgfSkpO1xuICAgIHRpbWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVyKTtcblxuICAgIHRpbWVyLnN0YXJ0KCk7XG4gICAgdGltZXIuYWRkRXZlbnRMaXN0ZW5lcigndGltZVVwJywgKCkgPT4ge1xuICAgICAgc2lkZWJhci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgndGltZVVwJykpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc3RyZWFrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RyZWFrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N0cmVhay1jb250YWluZXInKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHN0cmVha0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBzdHJlYWtUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgc3RyZWFrVGl0bGUuY2xhc3NMaXN0LmFkZCgnc3RyZWFrLXRpdGxlJyk7XG4gICAgc3RyZWFrVGl0bGUudGV4dENvbnRlbnQgPSAnU3RyZWFrJztcbiAgICBzdHJlYWtDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RyZWFrVGl0bGUpO1xuXG4gICAgY29uc3Qgc3RyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHN0cmVhay5jbGFzc0xpc3QuYWRkKCdzdHJlYWsnKTtcbiAgICBzdHJlYWsudGV4dENvbnRlbnQgPSAnMC8xMCc7XG4gICAgc3RyZWFrQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0cmVhayk7XG5cbiAgICBjb25zdCByZXRpcmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXRpcmVCdXR0b24uY2xhc3NMaXN0LmFkZCgncmV0aXJlLWJ1dHRvbicpO1xuICAgIHJldGlyZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdSZXRpcmUnO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocmV0aXJlQnV0dG9uKTtcblxuICAgIHJldGlyZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNsaWNrSGFuZGxlcih7IGN1cnJlbnRTdGF0ZTogJ2luR2FtZScgfSk7XG4gICAgfSk7XG5cbiAgICBzaWRlYmFyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzdGFydEJ1dHRvbkNsaWNrZWQnLCB7XG4gICAgICBkZXRhaWw6IHsgcmVzZXQ6IGRldGFpbC5jdXJyZW50U3RhdGUgPT09ICdkZWZlYXQnIH0sXG4gICAgfSkpO1xuICB9O1xuXG4gIHNoaWZ0VG9QcmVHYW1lKCdGb3JjZSBhIHRpZSAxMCB0aW1lcyBpbiBhIHJvdyBpbiB1bmRlciAzNSBzZWNvbmRzJywgJ1N0YXJ0JywgZmFsc2UsIGNsaWNrSGFuZGxlcik7XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oc2lkZWJhciwge1xuICAgIHNldFRpZVN0cmVhayhjb3VudCkge1xuICAgICAgaWYgKCFzaWRlYmFyLnF1ZXJ5U2VsZWN0b3IoJy5zdHJlYWsnKSkgcmV0dXJuO1xuICAgICAgc2lkZWJhci5xdWVyeVNlbGVjdG9yKCcuc3RyZWFrJykudGV4dENvbnRlbnQgPSBgJHtjb3VudH0vMTBgO1xuICAgIH0sXG5cbiAgICBkZWNsYXJlRGVmZWF0KCkge1xuICAgICAgc2hpZnRUb1ByZUdhbWUoJ0RlZmVhdCcsICdUcnkgYWdhaW4nLCB0cnVlLCBjbGlja0hhbmRsZXIpO1xuICAgIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJTaWRlYmFyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9