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
      ? _modules_moveCalculator_js__WEBPACK_IMPORTED_MODULE_1__["default"]
      .comeUpWithMove(this.#board, this.currentPlayer.marker)
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
    if (sidebar.querySelector('.timer')) {
      sidebar.querySelector('.timer').stop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdGQUF3RixZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE1B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QUFFQTtBQUNBLHFCQUFxQix3QkFBd0I7QUFDN0MsS0FBSzs7QUFFTDtBQUNBLGdCQUFnQix5Q0FBeUM7QUFDekQsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxNQUFNO0FBQzlELEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10aWMtdGFjLXRvZS8uL3NyYy9hc3NldHMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10aWMtdGFjLXRvZS8uL3NyYy9hc3NldHMvc3R5bGVzLmNzcz85NTFmIiwid2VicGFjazovL29kaW4tdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10aWMtdGFjLXRvZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRpYy10YWMtdG9lLy4vc3JjL21vZGVsL0JvYXJkLmpzIiwid2VicGFjazovL29kaW4tdGljLXRhYy10b2UvLi9zcmMvbW9kZWwvR2FtZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRpYy10YWMtdG9lLy4vc3JjL21vZGVsL1RpbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10aWMtdGFjLXRvZS8uL3NyYy9tb2R1bGVzL21vdmVDYWxjdWxhdG9yLmpzIiwid2VicGFjazovL29kaW4tdGljLXRhYy10b2UvLi9zcmMvdmlldy9Cb2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLXRpYy10YWMtdG9lLy4vc3JjL3ZpZXcvQ291bnRkb3duVGltZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10aWMtdGFjLXRvZS8uL3NyYy92aWV3L1NpZGViYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbjpyb290IHtcbiAgLS1uZXdzcGFwZXI6IHJnYigyMjAsIDIyMCwgMjIwKTtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ld3NwYXBlcik7XG59XG5cbmJvZHkuZ2FtZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjE0cHggNjAwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiA3MHB4OyBcbn1cblxuaDIge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1NDA7XG59XG5cbi5ib2FyZCB7XG4gIGhlaWdodDogMjE0cHg7XG4gIHdpZHRoOiAyMTRweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgNzBweCk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDcwcHgpO1xuICBnYXA6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi50aWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV3c3BhcGVyKTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1hcmsge1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi5zaWRlYmFyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MDBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4IDMwcHggNTBweDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgcm93LWdhcDogMTBweDtcbn1cblxuLnNpZGViYXIuaW4tZ2FtZSB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjQwcHg7XG59XG5cbi50aW1lci1jb250YWluZXIsIC5zdHJlYWstY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAyMDBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG5cbi50aW1lciwgLnRpbWVyLXRpdGxlLCAuc3RyZWFrICwgLnN0cmVhay10aXRsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNpZGViYXIgcCB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuLnNpZGViYXIgLnRpbWVyLCAuc2lkZWJhciAuc3RyZWFrIHtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuXG4ucHJlLWdhbWUtbWVzc2FnZSB7XG4gIGdyaWQtcm93OiAxIC8gMztcbn1cblxuLnRpbWVyLXRpdGxlLCAudGltZXIge1xuICBncmlkLXJvdzogMTtcbn1cblxuLnN0cmVhay10aXRsZSwgLnN0cmVhayB7XG4gIGdyaWQtcm93OiAyO1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogMTIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMDAsIDIwMCk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zdGFydC1idXR0b24sIC5yZXRpcmUtYnV0dG9uIHtcbiAgZ3JpZC1yb3c6IDM7XG59XG5cbi5wcmUtZ2FtZS1tZXNzYWdlLCAuc3RyZWFrLXRpdGxlLCAuc3RyZWFrLCAudGltZXItdGl0bGUsIC50aW1lciwgLnJldGlyZS1idXR0b24sIGJvZHkge1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ucHJlLWdhbWUtbWVzc2FnZSwgLnN0cmVhay10aXRsZSwgLnN0cmVhaywgLnRpbWVyLXRpdGxlLCAudGltZXIsIC5yZXRpcmUtYnV0dG9uICB7XG4gIGFuaW1hdGlvbi1uYW1lOiB0ZXh0LWZhZGUtaW47XG59XG5cbmJvZHkucmVzZXQge1xuICBhbmltYXRpb24tbmFtZTogcmVzZXQ7XG59XG5cbmJvZHkucHJlLWdhbWUge1xuICBhbmltYXRpb24tbmFtZTogZXhwYW5kLWJvZHk7XG59IFxuXG5ib2R5LmluLWdhbWUge1xuICBhbmltYXRpb24tbmFtZTogc2hyaW5rLWJvZHk7XG59XG5cbmJvZHkuZGVmZWF0IHtcbiAgYW5pbWF0aW9uLW5hbWU6IGRlZmVhdDtcbn1cblxuYm9keS5mYWRlLW91dCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlLW91dDtcbn1cblxuQGtleWZyYW1lcyBleHBhbmQtYm9keSB7XG4gIGZyb20ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjE0cHggNDAwcHg7XG4gIH1cblxuICB0byB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMTRweCA2MDBweDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNocmluay1ib2R5IHtcbiAgZnJvbSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMTRweCA2MDBweDtcbiAgfVxuXG4gIHRvIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIxNHB4IDQwMHB4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZGVmZWF0IHtcbiAgZnJvbSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMTRweCA0MDBweDtcbiAgfVxuXG4gIHRvIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIxNHB4IDQwMHB4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcmVzZXQge1xuICBmcm9tIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIxNHB4IDQwMHB4O1xuICB9XG5cbiAgdG8ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjE0cHggNDAwcHg7XG4gIH1cbn1cblxuQGtleWZyYW1lcyB0ZXh0LWZhZGUtaW4ge1xuICBmcm9tIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICB0byB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZS1vdXQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjE0cHggNDAwcHg7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIxNHB4IDQwMHB4O1xuICB9XG59XG5cbmJvZHkudmljdG9yeS1zY3JlZW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgcm93LWdhcDogMjBweDtcbn1cblxuLnZpY3RvcnktbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLFFBQVE7RUFDUix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsa0NBQWtDO0VBQ2xDLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLDRDQUE0QztFQUM1QyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0U7SUFDRSxrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSxrQ0FBa0M7RUFDcEM7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0Usa0NBQWtDO0VBQ3BDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGtDQUFrQztFQUNwQzs7RUFFQTtJQUNFLGtDQUFrQztFQUNwQztBQUNGOztBQUVBO0VBQ0U7SUFDRSxrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSxrQ0FBa0M7RUFDcEM7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSxVQUFVO0lBQ1Ysa0NBQWtDO0VBQ3BDO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gIC0tbmV3c3BhcGVyOiByZ2IoMjIwLCAyMjAsIDIyMCk7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ld3NwYXBlcik7XFxufVxcblxcbmJvZHkuZ2FtZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMTRweCA2MDBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbHVtbi1nYXA6IDcwcHg7IFxcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogNTQwO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgaGVpZ2h0OiAyMTRweDtcXG4gIHdpZHRoOiAyMTRweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCA3MHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDcwcHgpO1xcbiAgZ2FwOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRpbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV3c3BhcGVyKTtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYXJrIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjAwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggMzBweCA1MHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgcm93LWdhcDogMTBweDtcXG59XFxuXFxuLnNpZGViYXIuaW4tZ2FtZSB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI0MHB4O1xcbn1cXG5cXG4udGltZXItY29udGFpbmVyLCAuc3RyZWFrLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuLnRpbWVyLCAudGltZXItdGl0bGUsIC5zdHJlYWsgLCAuc3RyZWFrLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnNpZGViYXIgcCB7XFxuICBmb250LXNpemU6IDI2cHg7XFxufVxcblxcbi5zaWRlYmFyIC50aW1lciwgLnNpZGViYXIgLnN0cmVhayB7XFxuICBmb250LXNpemU6IDM2cHg7XFxufVxcblxcbi5wcmUtZ2FtZS1tZXNzYWdlIHtcXG4gIGdyaWQtcm93OiAxIC8gMztcXG59XFxuXFxuLnRpbWVyLXRpdGxlLCAudGltZXIge1xcbiAgZ3JpZC1yb3c6IDE7XFxufVxcblxcbi5zdHJlYWstdGl0bGUsIC5zdHJlYWsge1xcbiAgZ3JpZC1yb3c6IDI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICB3aWR0aDogMTIwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uc3RhcnQtYnV0dG9uLCAucmV0aXJlLWJ1dHRvbiB7XFxuICBncmlkLXJvdzogMztcXG59XFxuXFxuLnByZS1nYW1lLW1lc3NhZ2UsIC5zdHJlYWstdGl0bGUsIC5zdHJlYWssIC50aW1lci10aXRsZSwgLnRpbWVyLCAucmV0aXJlLWJ1dHRvbiwgYm9keSB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuLnByZS1nYW1lLW1lc3NhZ2UsIC5zdHJlYWstdGl0bGUsIC5zdHJlYWssIC50aW1lci10aXRsZSwgLnRpbWVyLCAucmV0aXJlLWJ1dHRvbiAge1xcbiAgYW5pbWF0aW9uLW5hbWU6IHRleHQtZmFkZS1pbjtcXG59XFxuXFxuYm9keS5yZXNldCB7XFxuICBhbmltYXRpb24tbmFtZTogcmVzZXQ7XFxufVxcblxcbmJvZHkucHJlLWdhbWUge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGV4cGFuZC1ib2R5O1xcbn0gXFxuXFxuYm9keS5pbi1nYW1lIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBzaHJpbmstYm9keTtcXG59XFxuXFxuYm9keS5kZWZlYXQge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGRlZmVhdDtcXG59XFxuXFxuYm9keS5mYWRlLW91dCB7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZS1vdXQ7XFxufVxcblxcbkBrZXlmcmFtZXMgZXhwYW5kLWJvZHkge1xcbiAgZnJvbSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjE0cHggNDAwcHg7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjE0cHggNjAwcHg7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2hyaW5rLWJvZHkge1xcbiAgZnJvbSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjE0cHggNjAwcHg7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjE0cHggNDAwcHg7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZGVmZWF0IHtcXG4gIGZyb20ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIxNHB4IDQwMHB4O1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIxNHB4IDQwMHB4O1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJlc2V0IHtcXG4gIGZyb20ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIxNHB4IDQwMHB4O1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIxNHB4IDQwMHB4O1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRleHQtZmFkZS1pbiB7XFxuICBmcm9tIHtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZS1vdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjE0cHggNDAwcHg7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjE0cHggNDAwcHg7XFxuICB9XFxufVxcblxcbmJvZHkudmljdG9yeS1zY3JlZW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHJvdy1nYXA6IDIwcHg7XFxufVxcblxcbi52aWN0b3J5LW1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9tb2RlbC9HYW1lLmpzJztcblxuaW1wb3J0IHJlbmRlckJvYXJkIGZyb20gJy4vdmlldy9Cb2FyZC5qcyc7XG5pbXBvcnQgcmVuZGVyU2lkZWJhciBmcm9tICcuL3ZpZXcvU2lkZWJhci5qcyc7XG5cbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzLmNzcyc7XG5cbmxldCBzaG93VmljdG9yeVNjcmVlbjtcblxuZnVuY3Rpb24gc2hvd0dhbWUoKSB7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSguLi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdCk7XG4gIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG5cbiAgbGV0IGdhbWUgPSBuZXcgR2FtZSgpO1xuXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZ2FtZScpO1xuXG4gIGNvbnN0IGJvYXJkVmlldyA9IHJlbmRlckJvYXJkKCk7XG4gIGNvbnN0IHNpZGViYXIgPSByZW5kZXJTaWRlYmFyKCk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChib2FyZFZpZXcpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNpZGViYXIpO1xuXG4gIGZ1bmN0aW9uIGRlY2xhcmVEZWZlYXQoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkZWZlYXQnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2luLWdhbWUnKTtcblxuICAgIHNpZGViYXIuZGVjbGFyZURlZmVhdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tXaW5uZXIoKSB7XG4gICAgaWYgKGdhbWUud2lubmVyIHx8IGdhbWUuYm9hcmRJc0Z1bGwpIHtcbiAgICAgIHNpZGViYXIuc2V0VGllU3RyZWFrKGdhbWUudGllQ291bnQpO1xuICAgICAgaWYgKGdhbWUuZ2V0U2NvcmUoJ0NwdScpID09PSAxKSB7XG4gICAgICAgIGRlY2xhcmVEZWZlYXQoKTtcbiAgICAgIH0gZWxzZSBpZiAoZ2FtZS50aWVDb3VudCA9PT0gMTApIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdmYWRlLW91dCcpO1xuICAgICAgICBzZXRUaW1lb3V0KHNob3dWaWN0b3J5U2NyZWVuLCA1MDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2FtZSA9IGdhbWUucmVzZXQoKTtcbiAgICAgIH1cbiAgICAgIGJvYXJkVmlldy51cGRhdGUoZ2FtZS5ib2FyZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZXhlY3V0ZUNwdVJvdXRpbmUoKSB7XG4gICAgaWYgKGdhbWUuY3VycmVudFBsYXllciAhPT0gbnVsbCAmJiBnYW1lLmN1cnJlbnRQbGF5ZXIuaXNDcHUpIHtcbiAgICAgIGdhbWUgPSBnYW1lLnBsYXlUdXJuKCk7XG4gICAgICBib2FyZFZpZXcudXBkYXRlKGdhbWUuYm9hcmQpO1xuXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBjaGVja1dpbm5lcigpO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgaWYgKGdhbWUuY3VycmVudFBsYXllciAhPT0gbnVsbCAmJiBnYW1lLmN1cnJlbnRQbGF5ZXIuaXNDcHUpIHtcbiAgICAgICAgICAgIGV4ZWN1dGVDcHVSb3V0aW5lKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvYXJkVmlldy51cGRhdGUoZ2FtZS5ib2FyZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUJvYXJkQ2xpY2soZXZlbnQpIHtcbiAgICBnYW1lID0gZ2FtZS5wbGF5VHVybihldmVudC5kZXRhaWwueCwgZXZlbnQuZGV0YWlsLnkpO1xuICAgIGJvYXJkVmlldy51cGRhdGUoZ2FtZS5ib2FyZCk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgY2hlY2tXaW5uZXIoKTtcblxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGV4ZWN1dGVDcHVSb3V0aW5lKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNpZGViYXIuYWRkRXZlbnRMaXN0ZW5lcignc3RhcnRCdXR0b25DbGlja2VkJywgKGUpID0+IHtcbiAgICBpZiAoZS5kZXRhaWwucmVzZXQpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgncmVzZXQnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGVmZWF0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnaW4tZ2FtZScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdwcmUtZ2FtZScpO1xuICAgIH1cblxuICAgIGdhbWUgPSBuZXcgR2FtZSgpO1xuICAgIGJvYXJkVmlldy51cGRhdGUoZ2FtZS5ib2FyZCk7XG5cbiAgICBib2FyZFZpZXcuYWRkRXZlbnRMaXN0ZW5lcigndGlsZUNsaWNrZWQnLCBoYW5kbGVCb2FyZENsaWNrKTtcbiAgfSk7XG5cbiAgc2lkZWJhci5hZGRFdmVudExpc3RlbmVyKCdyZXRpcmVCdXR0b25DbGlja2VkJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgncHJlLWdhbWUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2luLWdhbWUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3Jlc2V0Jyk7XG5cbiAgICBib2FyZFZpZXcucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGlsZUNsaWNrZWQnLCBoYW5kbGVCb2FyZENsaWNrKTtcbiAgfSk7XG5cbiAgc2lkZWJhci5hZGRFdmVudExpc3RlbmVyKCd0aW1lVXAnLCAoKSA9PiB7XG4gICAgc2lkZWJhci5kZWNsYXJlRGVmZWF0KCk7XG4gIH0pO1xufVxuXG5zaG93VmljdG9yeVNjcmVlbiA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKC4uLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0KTtcbiAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcblxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3ZpY3Rvcnktc2NyZWVuJyk7XG5cbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgndmljdG9yeS1tZXNzYWdlJyk7XG4gIG1lc3NhZ2UudGV4dENvbnRlbnQgPSAnVmljdG9yeSEnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuXG4gIGNvbnN0IGJhY2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYmFja0J1dHRvbi50ZXh0Q29udGVudCA9ICdCYWNrJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiYWNrQnV0dG9uKTtcblxuICBiYWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0dhbWUpO1xufTtcblxuc2hvd0dhbWUoKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZmFkZS1vdXQnKTtcbiAgICBzZXRUaW1lb3V0KHNob3dWaWN0b3J5U2NyZWVuLCA1MDApO1xuICB9XG59KTtcbiIsImNsYXNzIEJvYXJkIHtcbiAgI3RpbGVzO1xuXG4gIGNvbnN0cnVjdG9yKHRpbGVzID0gWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddKSB7XG4gICAgdGhpcy4jdGlsZXMgPSB0aWxlcztcbiAgfVxuXG4gIGdldFRpbGUoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLiN0aWxlc1t4ICsgeSAqIDNdO1xuICB9XG5cbiAgc2V0VGlsZSh4LCB5LCBtYXJrZXIpIHtcbiAgICBjb25zdCB0aWxlcyA9IFsuLi50aGlzLiN0aWxlc107XG4gICAgdGlsZXNbeCArIHkgKiAzXSA9IG1hcmtlcjtcbiAgICByZXR1cm4gbmV3IEJvYXJkKHRpbGVzKTtcbiAgfVxuXG4gIGdldCB3aW5uZXIoKSB7XG4gICAgZnVuY3Rpb24gZ2V0TGluZXModGlsZXMpIHtcbiAgICAgIGNvbnN0IHJvd3MgPSBbW10sIFtdLCBbXV07XG4gICAgICBjb25zdCBjb2x1bW5zID0gW1tdLCBbXSwgW11dO1xuICAgICAgY29uc3QgZGlhZ29uYWxzID0gW1tdLCBbXV07XG5cbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMzsgeCArPSAxKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMzsgeSArPSAxKSB7XG4gICAgICAgICAgY29uc3QgdGlsZSA9IHRpbGVzLmdldFRpbGUoeCwgeSk7XG5cbiAgICAgICAgICByb3dzW3ldLnB1c2godGlsZSk7XG4gICAgICAgICAgY29sdW1uc1t4XS5wdXNoKHRpbGUpO1xuXG4gICAgICAgICAgaWYgKHggPT09IHkpIHtcbiAgICAgICAgICAgIGRpYWdvbmFsc1swXS5wdXNoKHRpbGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoeCArIHkgPT09IDIpIHtcbiAgICAgICAgICAgIGRpYWdvbmFsc1sxXS5wdXNoKHRpbGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gWy4uLnJvd3MsIC4uLmNvbHVtbnMsIC4uLmRpYWdvbmFsc107XG4gICAgfVxuXG4gICAgY29uc3QgbGluZXMgPSBnZXRMaW5lcyh0aGlzKTtcbiAgICBjb25zdCBtYXJrZXJzID0gWydYJywgJ08nXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWFya2Vycy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBpZiAobGluZXNbaV0uZXZlcnkoKG0pID0+IG0gPT09IG1hcmtlcnNbal0pKSB7XG4gICAgICAgICAgcmV0dXJuIG1hcmtlcnNbal07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldCBmcmVlVGlsZXMoKSB7XG4gICAgY29uc3QgZnJlZVRpbGVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0VGlsZShpLCBqKSA9PT0gJycpIHtcbiAgICAgICAgICBmcmVlVGlsZXMucHVzaCh7IHg6IGksIHk6IGogfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJlZVRpbGVzO1xuICB9XG5cbiAgZ2V0IGlzRnVsbCgpIHtcbiAgICByZXR1cm4gdGhpcy4jdGlsZXMuZXZlcnkoKHQpID0+IHQgIT09ICcnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcbiIsImltcG9ydCBCb2FyZCBmcm9tICcuL0JvYXJkLmpzJztcbmltcG9ydCBtb3ZlQ2FsY3VsYXRvclxuIGZyb20gJy4uL21vZHVsZXMvbW92ZUNhbGN1bGF0b3IuanMnO1xuXG5jbGFzcyBHYW1lIHtcbiAgI2JvYXJkO1xuXG4gICNwbGF5ZXJzO1xuXG4gICNzY29yZWJvYXJkO1xuXG4gICNzdGFydGluZ1BsYXllcjtcblxuICAjcGxheWVySW5kZXg7XG5cbiAgI3RpZUNvdW50O1xuXG4gIGNvbnN0cnVjdG9yKHN0YXRlID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICBib2FyZCA9IG5ldyBCb2FyZCgpLFxuICAgICAgcGxheWVycyA9IFtcbiAgICAgICAgeyBuYW1lOiAnUGxheWVyJywgbWFya2VyOiAnWCcsIGlzQ3B1OiBmYWxzZSB9LFxuICAgICAgICB7IG5hbWU6ICdDcHUnLCBtYXJrZXI6ICdPJywgaXNDcHU6IHRydWUgfSxcbiAgICAgIF0sXG4gICAgICBzY29yZWJvYXJkID0gWzAsIDBdLFxuICAgICAgc3RhcnRpbmdQbGF5ZXIgPSAwLFxuICAgICAgcGxheWVySW5kZXggPSAwLFxuICAgICAgdGllQ291bnQgPSAwLFxuICAgIH0gPSBzdGF0ZTtcblxuICAgIHRoaXMuI2JvYXJkID0gYm9hcmQ7XG4gICAgdGhpcy4jcGxheWVycyA9IHBsYXllcnM7XG4gICAgdGhpcy4jc2NvcmVib2FyZCA9IHNjb3JlYm9hcmQ7XG4gICAgdGhpcy4jc3RhcnRpbmdQbGF5ZXIgPSBzdGFydGluZ1BsYXllcjtcbiAgICB0aGlzLiNwbGF5ZXJJbmRleCA9IGJvYXJkLmlzRnVsbCA/IG51bGwgOiBwbGF5ZXJJbmRleDtcbiAgICB0aGlzLiN0aWVDb3VudCA9IHRpZUNvdW50O1xuICB9XG5cbiAgZ2V0IGJvYXJkKCkge1xuICAgIHJldHVybiB0aGlzLiNib2FyZDtcbiAgfVxuXG4gIGdldCB3aW5uZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2JvYXJkLndpbm5lcjtcbiAgfVxuXG4gIGdldCBib2FyZElzRnVsbCgpIHtcbiAgICByZXR1cm4gdGhpcy4jYm9hcmQuaXNGdWxsO1xuICB9XG5cbiAgZ2V0IHBsYXllcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3BsYXllcnM7XG4gIH1cblxuICBnZXQgc3RhcnRpbmdQbGF5ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0YXJ0aW5nUGxheWVyO1xuICB9XG5cbiAgZ2V0IHBsYXllckluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLiNwbGF5ZXJJbmRleDtcbiAgfVxuXG4gIGdldCBjdXJyZW50UGxheWVyKCkge1xuICAgIHJldHVybiB0aGlzLiNwbGF5ZXJJbmRleCAhPT0gbnVsbCA/IHRoaXMuI3BsYXllcnNbdGhpcy4jcGxheWVySW5kZXhdIDogbnVsbDtcbiAgfVxuXG4gIGdldCB0aWVDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy4jdGllQ291bnQ7XG4gIH1cblxuICBnZXRUaWxlKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy4jYm9hcmQuZ2V0VGlsZSh4LCB5KTtcbiAgfVxuXG4gIGdldFNjb3JlKHBsYXllcikge1xuICAgIGlmIChwbGF5ZXIgPT09ICdQbGF5ZXInKSB7XG4gICAgICByZXR1cm4gdGhpcy4jc2NvcmVib2FyZFswXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuI3Njb3JlYm9hcmRbMV07XG4gIH1cblxuICBwbGF5VHVybih4LCB5KSB7XG4gICAgaWYgKHRoaXMud2lubmVyIHx8IHRoaXMuYm9hcmRJc0Z1bGwpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvbnN0IG1vdmUgPSB0aGlzLmN1cnJlbnRQbGF5ZXIuaXNDcHVcbiAgICAgID8gbW92ZUNhbGN1bGF0b3JcbiAgICAgIC5jb21lVXBXaXRoTW92ZSh0aGlzLiNib2FyZCwgdGhpcy5jdXJyZW50UGxheWVyLm1hcmtlcilcbiAgICAgIDogeyB4LCB5LCBtYXJrZXI6IHRoaXMuY3VycmVudFBsYXllci5tYXJrZXIgfTtcblxuICAgIGNvbnN0IG5leHQgPSB7fTtcblxuICAgIG5leHQuYm9hcmQgPSB0aGlzLiNib2FyZC5zZXRUaWxlKG1vdmUueCwgbW92ZS55LCBtb3ZlLm1hcmtlcik7XG4gICAgbmV4dC5zY29yZWJvYXJkID0gdGhpcy4jc2NvcmVib2FyZDtcbiAgICBuZXh0LnRpZUNvdW50ID0gbmV4dC5ib2FyZC5pc0Z1bGwgJiYgIW5leHQuYm9hcmQud2lubmVyID8gdGhpcy4jdGllQ291bnQgKyAxIDogdGhpcy4jdGllQ291bnQ7XG4gICAgbmV4dC5zdGFydGluZ1BsYXllciA9IHRoaXMuI3N0YXJ0aW5nUGxheWVyO1xuICAgIG5leHQucGxheWVycyA9IHRoaXMuI3BsYXllcnM7XG5cbiAgICBpZiAobmV4dC5ib2FyZC53aW5uZXIpIHtcbiAgICAgIG5leHQuc2NvcmVib2FyZFt0aGlzLiNwbGF5ZXJJbmRleF0gKz0gMTtcbiAgICB9XG5cbiAgICBpZiAoIW5leHQuYm9hcmQud2lubmVyIHx8ICFuZXh0LmJvYXJkLmlzRnVsbCkge1xuICAgICAgbmV4dC5wbGF5ZXJJbmRleCA9IHRoaXMuI3BsYXllckluZGV4ID09PSAwID8gMSA6IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBHYW1lKG5leHQpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgcmV0dXJuIG5ldyBHYW1lKHtcbiAgICAgIGJvYXJkOiBuZXcgQm9hcmQoKSxcbiAgICAgIHBsYXllcnM6IHRoaXMuI3BsYXllcnMsXG4gICAgICBzY29yZWJvYXJkOiB0aGlzLiNzY29yZWJvYXJkLFxuICAgICAgc3RhcnRpbmdQbGF5ZXI6IHRoaXMuI3N0YXJ0aW5nUGxheWVyID09PSAwID8gMSA6IDAsXG4gICAgICBwbGF5ZXJJbmRleDogdGhpcy4jc3RhcnRpbmdQbGF5ZXIgPT09IDAgPyAxIDogMCxcbiAgICAgIHRpZUNvdW50OiB0aGlzLiN0aWVDb3VudCxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiZnVuY3Rpb24gc3VtVGltZSh0aW1lID0ge30pIHtcbiAgY29uc3Qge1xuICAgIGRheXMgPSAwLFxuICAgIGhvdXJzID0gMCxcbiAgICBtaW51dGVzID0gMCxcbiAgICBzZWNvbmRzID0gMCxcbiAgICBjZW50aXNlY29uZHMgPSAwLFxuICAgIG1pbGxpc2Vjb25kcyA9IDAsXG4gIH0gPSB0aW1lO1xuXG4gIHJldHVybiBkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMFxuICAgICsgaG91cnMgKiA2MCAqIDYwICogMTAwMFxuICAgICsgbWludXRlcyAqIDYwICogMTAwMFxuICAgICsgc2Vjb25kcyAqIDEwMDBcbiAgICArIGNlbnRpc2Vjb25kcyAqIDEwXG4gICAgKyBtaWxsaXNlY29uZHM7XG59XG5cbmNsYXNzIFRpbWUge1xuICAjYW1vdW50O1xuXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZXMgPSB7fSkge1xuICAgIHRoaXMuI2Ftb3VudCA9IHN1bVRpbWUoaW5pdGlhbFZhbHVlcyk7XG4gIH1cblxuICBnZXRWYWx1ZShvcHRpb25zID0geyBnZXRNaW51dGVzOiB0cnVlLCBnZXRTZWNvbmRzOiB0cnVlLCBnZXRDZW50aXNlY29uZHM6IHRydWUgfSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGdldERheXMgPSBmYWxzZSxcbiAgICAgIGdldEhvdXJzID0gZmFsc2UsXG4gICAgICBnZXRNaW51dGVzID0gZmFsc2UsXG4gICAgICBnZXRTZWNvbmRzID0gZmFsc2UsXG4gICAgICBnZXRDZW50aXNlY29uZHMgPSBmYWxzZSxcbiAgICAgIGdldE1pbGxpc2Vjb25kcyA9IGZhbHNlLFxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgY29uc3QgdGltZVVuaXRzID0gW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnZGF5cycsXG4gICAgICAgIHNlbGVjdGVkOiBnZXREYXlzLFxuICAgICAgICBhYnNvbHV0ZVZhbHVlOiAxMDAwICogNjAgKiA2MCAqIDI0LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2hvdXJzJyxcbiAgICAgICAgc2VsZWN0ZWQ6IGdldEhvdXJzLFxuICAgICAgICBhYnNvbHV0ZVZhbHVlOiAxMDAwICogNjAgKiA2MCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdtaW51dGVzJyxcbiAgICAgICAgc2VsZWN0ZWQ6IGdldE1pbnV0ZXMsXG4gICAgICAgIGFic29sdXRlVmFsdWU6IDEwMDAgKiA2MCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdzZWNvbmRzJyxcbiAgICAgICAgc2VsZWN0ZWQ6IGdldFNlY29uZHMsXG4gICAgICAgIGFic29sdXRlVmFsdWU6IDEwMDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnY2VudGlzZWNvbmRzJyxcbiAgICAgICAgc2VsZWN0ZWQ6IGdldENlbnRpc2Vjb25kcyxcbiAgICAgICAgYWJzb2x1dGVWYWx1ZTogMTAwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ21pbGxpc2Vjb25kcycsXG4gICAgICAgIHNlbGVjdGVkOiBnZXRNaWxsaXNlY29uZHMsXG4gICAgICAgIGFic29sdXRlVmFsdWU6IDEsXG4gICAgICB9LFxuICAgIF07XG5cbiAgICBsZXQgcmVtYWluZGVyID0gdGhpcy4jYW1vdW50O1xuXG4gICAgcmV0dXJuIHRpbWVVbml0c1xuICAgICAgLmZpbHRlcigoeyBzZWxlY3RlZCB9KSA9PiBzZWxlY3RlZClcbiAgICAgIC5yZWR1Y2UoKGFycmFuZ2VkVmFsdWUsIHVuaXQpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBNYXRoLmZsb29yKHJlbWFpbmRlciAvIHVuaXQuYWJzb2x1dGVWYWx1ZSk7XG4gICAgICAgIHJlbWFpbmRlciAtPSB2YWx1ZTtcblxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihhcnJhbmdlZFZhbHVlLCB7IFt1bml0Lm5hbWVdOiB2YWx1ZSB9KTtcbiAgICAgIH0sIHt9KTtcbiAgfVxuXG4gIGluY3JlbWVudCh0aW1lVG9BZGQgPSB7fSkge1xuICAgIHJldHVybiBuZXcgVGltZSh7IG1pbGxpc2Vjb25kczogdGhpcy4jYW1vdW50ICsgc3VtVGltZSh0aW1lVG9BZGQpIH0pO1xuICB9XG5cbiAgZGVjcmVtZW50KHRpbWVUb1N1YnRyYWN0ID0ge30pIHtcbiAgICByZXR1cm4gbmV3IFRpbWUoeyBtaWxsaXNlY29uZHM6IHRoaXMuI2Ftb3VudCAtIHN1bVRpbWUodGltZVRvU3VidHJhY3QpIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWU7XG4iLCJmdW5jdGlvbiBjaG9vc2VNb3ZlKG1vdmVzKSB7XG4gIGZvciAobGV0IHByaW9yaXR5ID0gMjsgcHJpb3JpdHkgPj0gLTE7IHByaW9yaXR5IC09IDEpIHtcbiAgICBjb25zdCBiZXN0TW92ZXMgPSBtb3Zlcy5maWx0ZXIoKG1vdmUpID0+IG1vdmUucHJpb3JpdHkgPT09IHByaW9yaXR5KTtcblxuICAgIGlmIChiZXN0TW92ZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY2hvc2VuTW92ZSA9IGJlc3RNb3Zlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBiZXN0TW92ZXMubGVuZ3RoKV07XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IGNob3Nlbk1vdmUueCxcbiAgICAgICAgeTogY2hvc2VuTW92ZS55LFxuICAgICAgICBtYXJrZXI6IGNob3Nlbk1vdmUubWFya2VyLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuY29uc3QgbW92ZUNhbGN1bGF0b3IgPSB7XG4gIGV2YWx1YXRlTW92ZShtb3ZlLCBib2FyZCwgc2VsZiwgZGVwdGggPSAwKSB7XG4gICAgY29uc3Qgb3Bwb25lbnQgPSBzZWxmID09PSAnWCcgPyAnTycgOiAnWCc7XG4gICAgY29uc3QgZGV2ZWxvcG1lbnQgPSBib2FyZC5zZXRUaWxlKG1vdmUueCwgbW92ZS55LCBtb3ZlLm1hcmtlcik7XG5cbiAgICBpZiAoZGV2ZWxvcG1lbnQud2lubmVyID09PSBzZWxmKSB7XG4gICAgICByZXR1cm4gZGVwdGggPT09IDAgPyAyIDogMTtcbiAgICB9XG4gICAgaWYgKGRldmVsb3BtZW50Lndpbm5lciA9PT0gb3Bwb25lbnQpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKGRldmVsb3BtZW50LmlzRnVsbCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgY29uc3Qgb3V0Y29tZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGV2ZWxvcG1lbnQuZnJlZVRpbGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCB7IHgsIHkgfSA9IGRldmVsb3BtZW50LmZyZWVUaWxlc1tpXTtcbiAgICAgIGNvbnN0IG5leHRNb3ZlID0geyB4LCB5LCBtYXJrZXI6IG1vdmUubWFya2VyID09PSAnWCcgPyAnTycgOiAnWCcgfTtcbiAgICAgIGNvbnN0IG91dGNvbWUgPSB0aGlzLmV2YWx1YXRlTW92ZShuZXh0TW92ZSwgZGV2ZWxvcG1lbnQsIHNlbGYsIGRlcHRoICsgMSk7XG5cbiAgICAgIGlmIChtb3ZlLm1hcmtlciA9PT0gb3Bwb25lbnQgJiYgb3V0Y29tZSA9PT0gMSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGlmIChtb3ZlLm1hcmtlciA9PT0gc2VsZiAmJiBvdXRjb21lID09PSAtMSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG5cbiAgICAgIG91dGNvbWVzLnB1c2gob3V0Y29tZSk7XG4gICAgfVxuXG4gICAgaWYgKG91dGNvbWVzLmluY2x1ZGVzKDApKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gbW92ZS5tYXJrZXIgPT09IG9wcG9uZW50ID8gLTEgOiAxO1xuICB9LFxuXG4gIGNvbWVVcFdpdGhNb3ZlKGJvYXJkLCBzZWxmKSB7XG4gICAgY29uc3QgcG9zc2libGVNb3ZlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5mcmVlVGlsZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHsgeCwgeSB9ID0gYm9hcmQuZnJlZVRpbGVzW2ldO1xuXG4gICAgICBwb3NzaWJsZU1vdmVzLnB1c2goe1xuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgICBtYXJrZXI6IHNlbGYsXG4gICAgICAgIHByaW9yaXR5OiB0aGlzLmV2YWx1YXRlTW92ZSh7IHgsIHksIG1hcmtlcjogc2VsZiB9LCBib2FyZCwgc2VsZiksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hvb3NlTW92ZShwb3NzaWJsZU1vdmVzKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vdmVDYWxjdWxhdG9yO1xuIiwiaW1wb3J0IEJvYXJkIGZyb20gJy4uL21vZGVsL0JvYXJkLmpzJztcblxuZnVuY3Rpb24gcmVuZGVyQm9hcmQoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcblxuICBjb25zdCB1cGRhdGUgPSAoYm9hcmQpID0+IHtcbiAgICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJUaWxlID0gKG1hcmspID0+IHtcbiAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgdGlsZS50ZXh0Q29udGVudCA9IChtYXJrID09PSAnWCcgfHwgbWFyayA9PT0gJ08nKSA/IG1hcmsgOiAnJztcbiAgICAgIHJldHVybiB0aWxlO1xuICAgIH07XG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDM7IHggKz0gMSkge1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCAzOyB5ICs9IDEpIHtcbiAgICAgICAgY29uc3QgdGlsZSA9IHJlbmRlclRpbGUoYm9hcmQuZ2V0VGlsZSh4LCB5KSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcblxuICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGlmICh0aWxlLnRleHRDb250ZW50ID09PSAnWCcgfHwgdGlsZS50ZXh0Q29udGVudCA9PT0gJ08nKSByZXR1cm47XG5cbiAgICAgICAgICBjb250YWluZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3RpbGVDbGlja2VkJywge1xuICAgICAgICAgICAgZGV0YWlsOiB7IHgsIHkgfSxcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB1cGRhdGUobmV3IEJvYXJkKCkpO1xuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKGNvbnRhaW5lciwgeyB1cGRhdGUgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckJvYXJkO1xuIiwiaW1wb3J0IFRpbWUgZnJvbSAnLi4vbW9kZWwvVGltZS5qcyc7XG5cbmZ1bmN0aW9uIHJlbmRlckNvdW50ZG93blRpbWVyKGluaXRpYWxUaW1lKSB7XG4gIGxldCBpbnRlcnZhbElkID0gbnVsbDtcbiAgbGV0IHRpbWVSZW1haW5pbmcgPSBpbml0aWFsVGltZTtcblxuICBjb25zdCB0aW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGltZXIudGV4dENvbnRlbnQgPSB0aW1lUmVtYWluaW5nLmdldFZhbHVlKHsgZ2V0U2Vjb25kczogdHJ1ZSB9KS5zZWNvbmRzO1xuICB0aW1lci5jbGFzc0xpc3QuYWRkKCd0aW1lcicpO1xuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHRpbWVyLCB7XG4gICAgc3RhcnQoKSB7XG4gICAgICBpZiAoaW50ZXJ2YWxJZCAhPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAodGltZVJlbWFpbmluZy5nZXRWYWx1ZSh7IGdldFNlY29uZHM6IHRydWUgfSkuc2Vjb25kcyA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3RpbWVVcCcpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aW1lUmVtYWluaW5nID0gdGltZVJlbWFpbmluZy5kZWNyZW1lbnQoeyBzZWNvbmRzOiAxIH0pO1xuICAgICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSB0aW1lUmVtYWluaW5nLmdldFZhbHVlKHsgZ2V0U2Vjb25kczogdHJ1ZSB9KS5zZWNvbmRzO1xuICAgICAgICB9XG4gICAgICB9LCAxMDAwKTtcbiAgICB9LFxuXG4gICAgc3RvcCgpIHtcbiAgICAgIHRoaXMudGV4dENvbnRlbnQgPSB0aW1lUmVtYWluaW5nLmdldFZhbHVlKHsgZ2V0U2Vjb25kczogdHJ1ZSB9KS5zZWNvbmRzO1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgIGludGVydmFsSWQgPSBudWxsO1xuICAgIH0sXG5cbiAgICByZXNldCgpIHtcbiAgICAgIHRpbWVSZW1haW5pbmcgPSBuZXcgVGltZSgpO1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckNvdW50ZG93blRpbWVyO1xuIiwiaW1wb3J0IFRpbWUgZnJvbSAnLi4vbW9kZWwvVGltZS5qcyc7XG5cbmltcG9ydCByZW5kZXJDb3VudGRvd25UaW1lciBmcm9tICcuL0NvdW50ZG93blRpbWVyLmpzJztcblxuZnVuY3Rpb24gcmVuZGVyU2lkZWJhcigpIHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcblxuICBjb25zdCBzaGlmdFRvUHJlR2FtZSA9IChwcmVHYW1lTWVzc2FnZSwgYnV0dG9uVGV4dCwgZGVmZWF0ZWQsIGNsaWNrSGFuZGxlcikgPT4ge1xuICAgIGlmIChzaWRlYmFyLnF1ZXJ5U2VsZWN0b3IoJy50aW1lcicpKSB7XG4gICAgICBzaWRlYmFyLnF1ZXJ5U2VsZWN0b3IoJy50aW1lcicpLnN0b3AoKTtcbiAgICB9XG5cbiAgICBzaWRlYmFyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdpbi1nYW1lJyk7XG5cbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgncHJlLWdhbWUtbWVzc2FnZScpO1xuICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBwcmVHYW1lTWVzc2FnZTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuXG4gICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdGFydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdGFydC1idXR0b24nKTtcbiAgICBzdGFydEJ1dHRvbi50ZXh0Q29udGVudCA9IGJ1dHRvblRleHQ7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XG5cbiAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsaWNrSGFuZGxlcih7XG4gICAgICBjdXJyZW50U3RhdGU6IGRlZmVhdGVkID8gJ2RlZmVhdCcgOiAncHJlR2FtZScsXG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IGNsaWNrSGFuZGxlciA9IChkZXRhaWwgPSB7fSkgPT4ge1xuICAgIGlmIChkZXRhaWwuY3VycmVudFN0YXRlID09PSAnaW5HYW1lJykge1xuICAgICAgc2hpZnRUb1ByZUdhbWUoJ0ZvcmNlIGEgdGllIDEwIHRpbWVzIGluIGEgcm93IGluIHVuZGVyIDM1IHNlY29uZHMnLCAnU3RhcnQnLCBmYWxzZSwgY2xpY2tIYW5kbGVyKTtcbiAgICAgIHNpZGViYXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3JldGlyZUJ1dHRvbkNsaWNrZWQnKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2lkZWJhci5pbm5lckhUTUwgPSAnJztcblxuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnaW4tZ2FtZScpO1xuXG4gICAgY29uc3QgdGltZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aW1lckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0aW1lci1jb250YWluZXInKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHRpbWVyQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHRpbWVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpbWVyVGl0bGUuY2xhc3NMaXN0LmFkZCgndGltZXItdGl0bGUnKTtcbiAgICB0aW1lclRpdGxlLnRleHRDb250ZW50ID0gJ1RpbWUnO1xuICAgIHRpbWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVyVGl0bGUpO1xuXG4gICAgY29uc3QgdGltZXIgPSByZW5kZXJDb3VudGRvd25UaW1lcihuZXcgVGltZSh7IHNlY29uZHM6IDM1IH0pKTtcbiAgICB0aW1lckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lcik7XG5cbiAgICB0aW1lci5zdGFydCgpO1xuICAgIHRpbWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWVVcCcsICgpID0+IHtcbiAgICAgIHNpZGViYXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3RpbWVVcCcpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHN0cmVha0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0cmVha0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdHJlYWstY29udGFpbmVyJyk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChzdHJlYWtDb250YWluZXIpO1xuXG4gICAgY29uc3Qgc3RyZWFrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHN0cmVha1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3N0cmVhay10aXRsZScpO1xuICAgIHN0cmVha1RpdGxlLnRleHRDb250ZW50ID0gJ1N0cmVhayc7XG4gICAgc3RyZWFrQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0cmVha1RpdGxlKTtcblxuICAgIGNvbnN0IHN0cmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzdHJlYWsuY2xhc3NMaXN0LmFkZCgnc3RyZWFrJyk7XG4gICAgc3RyZWFrLnRleHRDb250ZW50ID0gJzAvMTAnO1xuICAgIHN0cmVha0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdHJlYWspO1xuXG4gICAgY29uc3QgcmV0aXJlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmV0aXJlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JldGlyZS1idXR0b24nKTtcbiAgICByZXRpcmVCdXR0b24udGV4dENvbnRlbnQgPSAnUmV0aXJlJztcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHJldGlyZUJ1dHRvbik7XG5cbiAgICByZXRpcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjbGlja0hhbmRsZXIoeyBjdXJyZW50U3RhdGU6ICdpbkdhbWUnIH0pO1xuICAgIH0pO1xuXG4gICAgc2lkZWJhci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhcnRCdXR0b25DbGlja2VkJywge1xuICAgICAgZGV0YWlsOiB7IHJlc2V0OiBkZXRhaWwuY3VycmVudFN0YXRlID09PSAnZGVmZWF0JyB9LFxuICAgIH0pKTtcbiAgfTtcblxuICBzaGlmdFRvUHJlR2FtZSgnRm9yY2UgYSB0aWUgMTAgdGltZXMgaW4gYSByb3cgaW4gdW5kZXIgMzUgc2Vjb25kcycsICdTdGFydCcsIGZhbHNlLCBjbGlja0hhbmRsZXIpO1xuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHNpZGViYXIsIHtcbiAgICBzZXRUaWVTdHJlYWsoY291bnQpIHtcbiAgICAgIGlmICghc2lkZWJhci5xdWVyeVNlbGVjdG9yKCcuc3RyZWFrJykpIHJldHVybjtcbiAgICAgIHNpZGViYXIucXVlcnlTZWxlY3RvcignLnN0cmVhaycpLnRleHRDb250ZW50ID0gYCR7Y291bnR9LzEwYDtcbiAgICB9LFxuXG4gICAgZGVjbGFyZURlZmVhdCgpIHtcbiAgICAgIHNoaWZ0VG9QcmVHYW1lKCdEZWZlYXQnLCAnVHJ5IGFnYWluJywgdHJ1ZSwgY2xpY2tIYW5kbGVyKTtcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyU2lkZWJhcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==