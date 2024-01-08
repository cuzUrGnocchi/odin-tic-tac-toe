"use strict";
(self["webpackChunkodin_tic_tac_toe"] = self["webpackChunkodin_tic_tac_toe"] || []).push([["Board"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/model/Board.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9hcmQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixPQUFPO0FBQzdCLHdCQUF3QixPQUFPO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLGtCQUFrQjtBQUN0QyxzQkFBc0Isb0JBQW9CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCLHNCQUFzQixPQUFPO0FBQzdCO0FBQ0EsMkJBQTJCLFlBQVk7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10aWMtdGFjLXRvZS8uL3NyYy9tb2RlbC9Cb2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCb2FyZCB7XG4gICN0aWxlcztcblxuICBjb25zdHJ1Y3Rvcih0aWxlcyA9IFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSkge1xuICAgIHRoaXMuI3RpbGVzID0gdGlsZXM7XG4gIH1cblxuICBnZXRUaWxlKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy4jdGlsZXNbeCArIHkgKiAzXTtcbiAgfVxuXG4gIHNldFRpbGUoeCwgeSwgbWFya2VyKSB7XG4gICAgY29uc3QgdGlsZXMgPSBbLi4udGhpcy4jdGlsZXNdO1xuICAgIHRpbGVzW3ggKyB5ICogM10gPSBtYXJrZXI7XG4gICAgcmV0dXJuIG5ldyBCb2FyZCh0aWxlcyk7XG4gIH1cblxuICBnZXQgd2lubmVyKCkge1xuICAgIGZ1bmN0aW9uIGdldExpbmVzKHRpbGVzKSB7XG4gICAgICBjb25zdCByb3dzID0gW1tdLCBbXSwgW11dO1xuICAgICAgY29uc3QgY29sdW1ucyA9IFtbXSwgW10sIFtdXTtcbiAgICAgIGNvbnN0IGRpYWdvbmFscyA9IFtbXSwgW11dO1xuXG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDM7IHggKz0gMSkge1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDM7IHkgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IHRpbGUgPSB0aWxlcy5nZXRUaWxlKHgsIHkpO1xuXG4gICAgICAgICAgcm93c1t5XS5wdXNoKHRpbGUpO1xuICAgICAgICAgIGNvbHVtbnNbeF0ucHVzaCh0aWxlKTtcblxuICAgICAgICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAgICAgICBkaWFnb25hbHNbMF0ucHVzaCh0aWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHggKyB5ID09PSAyKSB7XG4gICAgICAgICAgICBkaWFnb25hbHNbMV0ucHVzaCh0aWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFsuLi5yb3dzLCAuLi5jb2x1bW5zLCAuLi5kaWFnb25hbHNdO1xuICAgIH1cblxuICAgIGNvbnN0IGxpbmVzID0gZ2V0TGluZXModGhpcyk7XG4gICAgY29uc3QgbWFya2VycyA9IFsnWCcsICdPJ107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hcmtlcnMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKGxpbmVzW2ldLmV2ZXJ5KChtKSA9PiBtID09PSBtYXJrZXJzW2pdKSkge1xuICAgICAgICAgIHJldHVybiBtYXJrZXJzW2pdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXQgZnJlZVRpbGVzKCkge1xuICAgIGNvbnN0IGZyZWVUaWxlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaiArPSAxKSB7XG4gICAgICAgIGlmICh0aGlzLmdldFRpbGUoaSwgaikgPT09ICcnKSB7XG4gICAgICAgICAgZnJlZVRpbGVzLnB1c2goeyB4OiBpLCB5OiBqIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyZWVUaWxlcztcbiAgfVxuXG4gIGdldCBpc0Z1bGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3RpbGVzLmV2ZXJ5KCh0KSA9PiB0ICE9PSAnJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=