"use strict";
(self["webpackChunkodin_tic_tac_toe"] = self["webpackChunkodin_tic_tac_toe"] || []).push([["BoardView"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/view/Board.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9hcmRWaWV3LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsT0FBTztBQUM3Qix3QkFBd0IsT0FBTztBQUMvQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixrQkFBa0I7QUFDdEMsc0JBQXNCLG9CQUFvQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQixzQkFBc0IsT0FBTztBQUM3QjtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzNFaUI7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0Isc0JBQXNCLE9BQU87QUFDN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLE1BQU07QUFDNUIsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1REFBSzs7QUFFbEIsb0NBQW9DLFFBQVE7QUFDNUM7O0FBRUEsaUVBQWUsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10aWMtdGFjLXRvZS8uL3NyYy9tb2RlbC9Cb2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLXRpYy10YWMtdG9lLy4vc3JjL3ZpZXcvQm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQm9hcmQge1xuICAjdGlsZXM7XG5cbiAgY29uc3RydWN0b3IodGlsZXMgPSBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10pIHtcbiAgICB0aGlzLiN0aWxlcyA9IHRpbGVzO1xuICB9XG5cbiAgZ2V0VGlsZSh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuI3RpbGVzW3ggKyB5ICogM107XG4gIH1cblxuICBzZXRUaWxlKHgsIHksIG1hcmtlcikge1xuICAgIGNvbnN0IHRpbGVzID0gWy4uLnRoaXMuI3RpbGVzXTtcbiAgICB0aWxlc1t4ICsgeSAqIDNdID0gbWFya2VyO1xuICAgIHJldHVybiBuZXcgQm9hcmQodGlsZXMpO1xuICB9XG5cbiAgZ2V0IHdpbm5lcigpIHtcbiAgICBmdW5jdGlvbiBnZXRMaW5lcyh0aWxlcykge1xuICAgICAgY29uc3Qgcm93cyA9IFtbXSwgW10sIFtdXTtcbiAgICAgIGNvbnN0IGNvbHVtbnMgPSBbW10sIFtdLCBbXV07XG4gICAgICBjb25zdCBkaWFnb25hbHMgPSBbW10sIFtdXTtcblxuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAzOyB4ICs9IDEpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCAzOyB5ICs9IDEpIHtcbiAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZXMuZ2V0VGlsZSh4LCB5KTtcblxuICAgICAgICAgIHJvd3NbeV0ucHVzaCh0aWxlKTtcbiAgICAgICAgICBjb2x1bW5zW3hdLnB1c2godGlsZSk7XG5cbiAgICAgICAgICBpZiAoeCA9PT0geSkge1xuICAgICAgICAgICAgZGlhZ29uYWxzWzBdLnB1c2godGlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh4ICsgeSA9PT0gMikge1xuICAgICAgICAgICAgZGlhZ29uYWxzWzFdLnB1c2godGlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbLi4ucm93cywgLi4uY29sdW1ucywgLi4uZGlhZ29uYWxzXTtcbiAgICB9XG5cbiAgICBjb25zdCBsaW5lcyA9IGdldExpbmVzKHRoaXMpO1xuICAgIGNvbnN0IG1hcmtlcnMgPSBbJ1gnLCAnTyddO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXJrZXJzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChsaW5lc1tpXS5ldmVyeSgobSkgPT4gbSA9PT0gbWFya2Vyc1tqXSkpIHtcbiAgICAgICAgICByZXR1cm4gbWFya2Vyc1tqXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0IGZyZWVUaWxlcygpIHtcbiAgICBjb25zdCBmcmVlVGlsZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGogKz0gMSkge1xuICAgICAgICBpZiAodGhpcy5nZXRUaWxlKGksIGopID09PSAnJykge1xuICAgICAgICAgIGZyZWVUaWxlcy5wdXNoKHsgeDogaSwgeTogaiB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmVlVGlsZXM7XG4gIH1cblxuICBnZXQgaXNGdWxsKCkge1xuICAgIHJldHVybiB0aGlzLiN0aWxlcy5ldmVyeSgodCkgPT4gdCAhPT0gJycpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkO1xuIiwiaW1wb3J0IEJvYXJkIGZyb20gJy4uL21vZGVsL0JvYXJkLmpzJztcblxuZnVuY3Rpb24gcmVuZGVyQm9hcmQoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcblxuICBjb25zdCB1cGRhdGUgPSAoYm9hcmQpID0+IHtcbiAgICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJUaWxlID0gKG1hcmspID0+IHtcbiAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgdGlsZS50ZXh0Q29udGVudCA9IChtYXJrID09PSAnWCcgfHwgbWFyayA9PT0gJ08nKSA/IG1hcmsgOiAnJztcbiAgICAgIHJldHVybiB0aWxlO1xuICAgIH07XG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDM7IHggKz0gMSkge1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCAzOyB5ICs9IDEpIHtcbiAgICAgICAgY29uc3QgdGlsZSA9IHJlbmRlclRpbGUoYm9hcmQuZ2V0VGlsZSh4LCB5KSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcblxuICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGlmICh0aWxlLnRleHRDb250ZW50ID09PSAnWCcgfHwgdGlsZS50ZXh0Q29udGVudCA9PT0gJ08nKSByZXR1cm47XG5cbiAgICAgICAgICBjb250YWluZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3RpbGVDbGlja2VkJywge1xuICAgICAgICAgICAgZGV0YWlsOiB7IHgsIHkgfSxcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB1cGRhdGUobmV3IEJvYXJkKCkpO1xuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKGNvbnRhaW5lciwgeyB1cGRhdGUgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckJvYXJkO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9