"use strict";
(self["webpackChunkodin_tic_tac_toe"] = self["webpackChunkodin_tic_tac_toe"] || []).push([["Game"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/model/Game.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLE9BQU87QUFDN0Isd0JBQXdCLE9BQU87QUFDL0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0Isa0JBQWtCO0FBQ3RDLHNCQUFzQixvQkFBb0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0Isc0JBQXNCLE9BQU87QUFDN0I7QUFDQSwyQkFBMkIsWUFBWTtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VVO0FBQzJCOztBQUUxRDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBLGtCQUFrQixpREFBSztBQUN2QjtBQUNBLFVBQVUsMkNBQTJDO0FBQ3JELFVBQVUsdUNBQXVDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsa0VBQWM7QUFDdEIsVUFBVTs7QUFFVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLGlEQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3hIcEI7QUFDQSx5QkFBeUIsZ0JBQWdCO0FBQ3pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLGtDQUFrQztBQUN0RCxjQUFjLE9BQU87QUFDckIseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hELGNBQWMsT0FBTzs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msb0JBQW9CO0FBQzFELE9BQU87QUFDUDs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRpYy10YWMtdG9lLy4vc3JjL21vZGVsL0JvYXJkLmpzIiwid2VicGFjazovL29kaW4tdGljLXRhYy10b2UvLi9zcmMvbW9kZWwvR2FtZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRpYy10YWMtdG9lLy4vc3JjL21vZHVsZXMvbW92ZUNhbGN1bGF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQm9hcmQge1xuICAjdGlsZXM7XG5cbiAgY29uc3RydWN0b3IodGlsZXMgPSBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10pIHtcbiAgICB0aGlzLiN0aWxlcyA9IHRpbGVzO1xuICB9XG5cbiAgZ2V0VGlsZSh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuI3RpbGVzW3ggKyB5ICogM107XG4gIH1cblxuICBzZXRUaWxlKHgsIHksIG1hcmtlcikge1xuICAgIGNvbnN0IHRpbGVzID0gWy4uLnRoaXMuI3RpbGVzXTtcbiAgICB0aWxlc1t4ICsgeSAqIDNdID0gbWFya2VyO1xuICAgIHJldHVybiBuZXcgQm9hcmQodGlsZXMpO1xuICB9XG5cbiAgZ2V0IHdpbm5lcigpIHtcbiAgICBmdW5jdGlvbiBnZXRMaW5lcyh0aWxlcykge1xuICAgICAgY29uc3Qgcm93cyA9IFtbXSwgW10sIFtdXTtcbiAgICAgIGNvbnN0IGNvbHVtbnMgPSBbW10sIFtdLCBbXV07XG4gICAgICBjb25zdCBkaWFnb25hbHMgPSBbW10sIFtdXTtcblxuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAzOyB4ICs9IDEpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCAzOyB5ICs9IDEpIHtcbiAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZXMuZ2V0VGlsZSh4LCB5KTtcblxuICAgICAgICAgIHJvd3NbeV0ucHVzaCh0aWxlKTtcbiAgICAgICAgICBjb2x1bW5zW3hdLnB1c2godGlsZSk7XG5cbiAgICAgICAgICBpZiAoeCA9PT0geSkge1xuICAgICAgICAgICAgZGlhZ29uYWxzWzBdLnB1c2godGlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh4ICsgeSA9PT0gMikge1xuICAgICAgICAgICAgZGlhZ29uYWxzWzFdLnB1c2godGlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbLi4ucm93cywgLi4uY29sdW1ucywgLi4uZGlhZ29uYWxzXTtcbiAgICB9XG5cbiAgICBjb25zdCBsaW5lcyA9IGdldExpbmVzKHRoaXMpO1xuICAgIGNvbnN0IG1hcmtlcnMgPSBbJ1gnLCAnTyddO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXJrZXJzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChsaW5lc1tpXS5ldmVyeSgobSkgPT4gbSA9PT0gbWFya2Vyc1tqXSkpIHtcbiAgICAgICAgICByZXR1cm4gbWFya2Vyc1tqXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0IGZyZWVUaWxlcygpIHtcbiAgICBjb25zdCBmcmVlVGlsZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGogKz0gMSkge1xuICAgICAgICBpZiAodGhpcy5nZXRUaWxlKGksIGopID09PSAnJykge1xuICAgICAgICAgIGZyZWVUaWxlcy5wdXNoKHsgeDogaSwgeTogaiB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmVlVGlsZXM7XG4gIH1cblxuICBnZXQgaXNGdWxsKCkge1xuICAgIHJldHVybiB0aGlzLiN0aWxlcy5ldmVyeSgodCkgPT4gdCAhPT0gJycpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkO1xuIiwiaW1wb3J0IEJvYXJkIGZyb20gJy4vQm9hcmQuanMnO1xuaW1wb3J0IG1vdmVDYWxjdWxhdG9yIGZyb20gJy4uL21vZHVsZXMvbW92ZUNhbGN1bGF0b3IuanMnO1xuXG5jbGFzcyBHYW1lIHtcbiAgI2JvYXJkO1xuXG4gICNwbGF5ZXJzO1xuXG4gICNzY29yZWJvYXJkO1xuXG4gICNzdGFydGluZ1BsYXllcjtcblxuICAjcGxheWVySW5kZXg7XG5cbiAgI3RpZUNvdW50O1xuXG4gIGNvbnN0cnVjdG9yKHN0YXRlID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICBib2FyZCA9IG5ldyBCb2FyZCgpLFxuICAgICAgcGxheWVycyA9IFtcbiAgICAgICAgeyBuYW1lOiAnUGxheWVyJywgbWFya2VyOiAnWCcsIGlzQ3B1OiBmYWxzZSB9LFxuICAgICAgICB7IG5hbWU6ICdDcHUnLCBtYXJrZXI6ICdPJywgaXNDcHU6IHRydWUgfSxcbiAgICAgIF0sXG4gICAgICBzY29yZWJvYXJkID0gWzAsIDBdLFxuICAgICAgc3RhcnRpbmdQbGF5ZXIgPSAwLFxuICAgICAgcGxheWVySW5kZXggPSAwLFxuICAgICAgdGllQ291bnQgPSAwLFxuICAgIH0gPSBzdGF0ZTtcblxuICAgIHRoaXMuI2JvYXJkID0gYm9hcmQ7XG4gICAgdGhpcy4jcGxheWVycyA9IHBsYXllcnM7XG4gICAgdGhpcy4jc2NvcmVib2FyZCA9IHNjb3JlYm9hcmQ7XG4gICAgdGhpcy4jc3RhcnRpbmdQbGF5ZXIgPSBzdGFydGluZ1BsYXllcjtcbiAgICB0aGlzLiNwbGF5ZXJJbmRleCA9IGJvYXJkLmlzRnVsbCA/IG51bGwgOiBwbGF5ZXJJbmRleDtcbiAgICB0aGlzLiN0aWVDb3VudCA9IHRpZUNvdW50O1xuICB9XG5cbiAgZ2V0IGJvYXJkKCkge1xuICAgIHJldHVybiB0aGlzLiNib2FyZDtcbiAgfVxuXG4gIGdldCB3aW5uZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2JvYXJkLndpbm5lcjtcbiAgfVxuXG4gIGdldCBib2FyZElzRnVsbCgpIHtcbiAgICByZXR1cm4gdGhpcy4jYm9hcmQuaXNGdWxsO1xuICB9XG5cbiAgZ2V0IHBsYXllcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3BsYXllcnM7XG4gIH1cblxuICBnZXQgc3RhcnRpbmdQbGF5ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0YXJ0aW5nUGxheWVyO1xuICB9XG5cbiAgZ2V0IHBsYXllckluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLiNwbGF5ZXJJbmRleDtcbiAgfVxuXG4gIGdldCBjdXJyZW50UGxheWVyKCkge1xuICAgIHJldHVybiB0aGlzLiNwbGF5ZXJJbmRleCAhPT0gbnVsbCA/IHRoaXMuI3BsYXllcnNbdGhpcy4jcGxheWVySW5kZXhdIDogbnVsbDtcbiAgfVxuXG4gIGdldCB0aWVDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy4jdGllQ291bnQ7XG4gIH1cblxuICBnZXRUaWxlKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy4jYm9hcmQuZ2V0VGlsZSh4LCB5KTtcbiAgfVxuXG4gIGdldFNjb3JlKHBsYXllcikge1xuICAgIGlmIChwbGF5ZXIgPT09ICdQbGF5ZXInKSB7XG4gICAgICByZXR1cm4gdGhpcy4jc2NvcmVib2FyZFswXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuI3Njb3JlYm9hcmRbMV07XG4gIH1cblxuICBwbGF5VHVybih4LCB5KSB7XG4gICAgaWYgKHRoaXMud2lubmVyIHx8IHRoaXMuYm9hcmRJc0Z1bGwpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvbnN0IG1vdmUgPSB0aGlzLmN1cnJlbnRQbGF5ZXIuaXNDcHVcbiAgICAgID8gbW92ZUNhbGN1bGF0b3IuY29tZVVwV2l0aE1vdmUodGhpcy4jYm9hcmQsIHRoaXMuY3VycmVudFBsYXllci5tYXJrZXIpXG4gICAgICA6IHsgeCwgeSwgbWFya2VyOiB0aGlzLmN1cnJlbnRQbGF5ZXIubWFya2VyIH07XG5cbiAgICBjb25zdCBuZXh0ID0ge307XG5cbiAgICBuZXh0LmJvYXJkID0gdGhpcy4jYm9hcmQuc2V0VGlsZShtb3ZlLngsIG1vdmUueSwgbW92ZS5tYXJrZXIpO1xuICAgIG5leHQuc2NvcmVib2FyZCA9IHRoaXMuI3Njb3JlYm9hcmQ7XG4gICAgbmV4dC50aWVDb3VudCA9IG5leHQuYm9hcmQuaXNGdWxsICYmICFuZXh0LmJvYXJkLndpbm5lciA/IHRoaXMuI3RpZUNvdW50ICsgMSA6IHRoaXMuI3RpZUNvdW50O1xuICAgIG5leHQuc3RhcnRpbmdQbGF5ZXIgPSB0aGlzLiNzdGFydGluZ1BsYXllcjtcbiAgICBuZXh0LnBsYXllcnMgPSB0aGlzLiNwbGF5ZXJzO1xuXG4gICAgaWYgKG5leHQuYm9hcmQud2lubmVyKSB7XG4gICAgICBuZXh0LnNjb3JlYm9hcmRbdGhpcy4jcGxheWVySW5kZXhdICs9IDE7XG4gICAgfVxuXG4gICAgaWYgKCFuZXh0LmJvYXJkLndpbm5lciB8fCAhbmV4dC5ib2FyZC5pc0Z1bGwpIHtcbiAgICAgIG5leHQucGxheWVySW5kZXggPSB0aGlzLiNwbGF5ZXJJbmRleCA9PT0gMCA/IDEgOiAwO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgR2FtZShuZXh0KTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHJldHVybiBuZXcgR2FtZSh7XG4gICAgICBib2FyZDogbmV3IEJvYXJkKCksXG4gICAgICBwbGF5ZXJzOiB0aGlzLiNwbGF5ZXJzLFxuICAgICAgc2NvcmVib2FyZDogdGhpcy4jc2NvcmVib2FyZCxcbiAgICAgIHN0YXJ0aW5nUGxheWVyOiB0aGlzLiNzdGFydGluZ1BsYXllciA9PT0gMCA/IDEgOiAwLFxuICAgICAgcGxheWVySW5kZXg6IHRoaXMuI3N0YXJ0aW5nUGxheWVyID09PSAwID8gMSA6IDAsXG4gICAgICB0aWVDb3VudDogdGhpcy4jdGllQ291bnQsXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImZ1bmN0aW9uIGNob29zZU1vdmUobW92ZXMpIHtcbiAgZm9yIChsZXQgcHJpb3JpdHkgPSAyOyBwcmlvcml0eSA+PSAtMTsgcHJpb3JpdHkgLT0gMSkge1xuICAgIGNvbnN0IGJlc3RNb3ZlcyA9IG1vdmVzLmZpbHRlcigobW92ZSkgPT4gbW92ZS5wcmlvcml0eSA9PT0gcHJpb3JpdHkpO1xuXG4gICAgaWYgKGJlc3RNb3Zlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjaG9zZW5Nb3ZlID0gYmVzdE1vdmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJlc3RNb3Zlcy5sZW5ndGgpXTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogY2hvc2VuTW92ZS54LFxuICAgICAgICB5OiBjaG9zZW5Nb3ZlLnksXG4gICAgICAgIG1hcmtlcjogY2hvc2VuTW92ZS5tYXJrZXIsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5jb25zdCBtb3ZlQ2FsY3VsYXRvciA9IHtcbiAgZXZhbHVhdGVNb3ZlKG1vdmUsIGJvYXJkLCBzZWxmLCBkZXB0aCA9IDApIHtcbiAgICBjb25zdCBvcHBvbmVudCA9IHNlbGYgPT09ICdYJyA/ICdPJyA6ICdYJztcbiAgICBjb25zdCBkZXZlbG9wbWVudCA9IGJvYXJkLnNldFRpbGUobW92ZS54LCBtb3ZlLnksIG1vdmUubWFya2VyKTtcblxuICAgIGlmIChkZXZlbG9wbWVudC53aW5uZXIgPT09IHNlbGYpIHtcbiAgICAgIHJldHVybiBkZXB0aCA9PT0gMCA/IDIgOiAxO1xuICAgIH1cbiAgICBpZiAoZGV2ZWxvcG1lbnQud2lubmVyID09PSBvcHBvbmVudCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAoZGV2ZWxvcG1lbnQuaXNGdWxsKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBjb25zdCBvdXRjb21lcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZXZlbG9wbWVudC5mcmVlVGlsZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHsgeCwgeSB9ID0gZGV2ZWxvcG1lbnQuZnJlZVRpbGVzW2ldO1xuICAgICAgY29uc3QgbmV4dE1vdmUgPSB7IHgsIHksIG1hcmtlcjogbW92ZS5tYXJrZXIgPT09ICdYJyA/ICdPJyA6ICdYJyB9O1xuICAgICAgY29uc3Qgb3V0Y29tZSA9IHRoaXMuZXZhbHVhdGVNb3ZlKG5leHRNb3ZlLCBkZXZlbG9wbWVudCwgc2VsZiwgZGVwdGggKyAxKTtcblxuICAgICAgaWYgKG1vdmUubWFya2VyID09PSBvcHBvbmVudCAmJiBvdXRjb21lID09PSAxKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgaWYgKG1vdmUubWFya2VyID09PSBzZWxmICYmIG91dGNvbWUgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cblxuICAgICAgb3V0Y29tZXMucHVzaChvdXRjb21lKTtcbiAgICB9XG5cbiAgICBpZiAob3V0Y29tZXMuaW5jbHVkZXMoMCkpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHJldHVybiBtb3ZlLm1hcmtlciA9PT0gb3Bwb25lbnQgPyAtMSA6IDE7XG4gIH0sXG5cbiAgY29tZVVwV2l0aE1vdmUoYm9hcmQsIHNlbGYpIHtcbiAgICBjb25zdCBwb3NzaWJsZU1vdmVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmZyZWVUaWxlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgeyB4LCB5IH0gPSBib2FyZC5mcmVlVGlsZXNbaV07XG5cbiAgICAgIHBvc3NpYmxlTW92ZXMucHVzaCh7XG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIG1hcmtlcjogc2VsZixcbiAgICAgICAgcHJpb3JpdHk6IHRoaXMuZXZhbHVhdGVNb3ZlKHsgeCwgeSwgbWFya2VyOiBzZWxmIH0sIGJvYXJkLCBzZWxmKSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjaG9vc2VNb3ZlKHBvc3NpYmxlTW92ZXMpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbW92ZUNhbGN1bGF0b3I7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=