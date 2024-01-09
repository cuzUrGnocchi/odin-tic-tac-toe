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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLE9BQU87QUFDN0Isd0JBQXdCLE9BQU87QUFDL0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0Isa0JBQWtCO0FBQ3RDLHNCQUFzQixvQkFBb0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0Isc0JBQXNCLE9BQU87QUFDN0I7QUFDQSwyQkFBMkIsWUFBWTtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VVO0FBRU07O0FBRXJDO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0Esa0JBQWtCLGlEQUFLO0FBQ3ZCO0FBQ0EsVUFBVSwyQ0FBMkM7QUFDckQsVUFBVSx1Q0FBdUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxrRUFBYztBQUN0QjtBQUNBLFVBQVU7O0FBRVY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixpREFBSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMxSHBCO0FBQ0EseUJBQXlCLGdCQUFnQjtBQUN6Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQixrQ0FBa0M7QUFDdEQsY0FBYyxPQUFPO0FBQ3JCLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRCxjQUFjLE9BQU87O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLG9CQUFvQjtBQUMxRCxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10aWMtdGFjLXRvZS8uL3NyYy9tb2RlbC9Cb2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLXRpYy10YWMtdG9lLy4vc3JjL21vZGVsL0dhbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10aWMtdGFjLXRvZS8uL3NyYy9tb2R1bGVzL21vdmVDYWxjdWxhdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJvYXJkIHtcbiAgI3RpbGVzO1xuXG4gIGNvbnN0cnVjdG9yKHRpbGVzID0gWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddKSB7XG4gICAgdGhpcy4jdGlsZXMgPSB0aWxlcztcbiAgfVxuXG4gIGdldFRpbGUoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLiN0aWxlc1t4ICsgeSAqIDNdO1xuICB9XG5cbiAgc2V0VGlsZSh4LCB5LCBtYXJrZXIpIHtcbiAgICBjb25zdCB0aWxlcyA9IFsuLi50aGlzLiN0aWxlc107XG4gICAgdGlsZXNbeCArIHkgKiAzXSA9IG1hcmtlcjtcbiAgICByZXR1cm4gbmV3IEJvYXJkKHRpbGVzKTtcbiAgfVxuXG4gIGdldCB3aW5uZXIoKSB7XG4gICAgZnVuY3Rpb24gZ2V0TGluZXModGlsZXMpIHtcbiAgICAgIGNvbnN0IHJvd3MgPSBbW10sIFtdLCBbXV07XG4gICAgICBjb25zdCBjb2x1bW5zID0gW1tdLCBbXSwgW11dO1xuICAgICAgY29uc3QgZGlhZ29uYWxzID0gW1tdLCBbXV07XG5cbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMzsgeCArPSAxKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMzsgeSArPSAxKSB7XG4gICAgICAgICAgY29uc3QgdGlsZSA9IHRpbGVzLmdldFRpbGUoeCwgeSk7XG5cbiAgICAgICAgICByb3dzW3ldLnB1c2godGlsZSk7XG4gICAgICAgICAgY29sdW1uc1t4XS5wdXNoKHRpbGUpO1xuXG4gICAgICAgICAgaWYgKHggPT09IHkpIHtcbiAgICAgICAgICAgIGRpYWdvbmFsc1swXS5wdXNoKHRpbGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoeCArIHkgPT09IDIpIHtcbiAgICAgICAgICAgIGRpYWdvbmFsc1sxXS5wdXNoKHRpbGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gWy4uLnJvd3MsIC4uLmNvbHVtbnMsIC4uLmRpYWdvbmFsc107XG4gICAgfVxuXG4gICAgY29uc3QgbGluZXMgPSBnZXRMaW5lcyh0aGlzKTtcbiAgICBjb25zdCBtYXJrZXJzID0gWydYJywgJ08nXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWFya2Vycy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBpZiAobGluZXNbaV0uZXZlcnkoKG0pID0+IG0gPT09IG1hcmtlcnNbal0pKSB7XG4gICAgICAgICAgcmV0dXJuIG1hcmtlcnNbal07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldCBmcmVlVGlsZXMoKSB7XG4gICAgY29uc3QgZnJlZVRpbGVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0VGlsZShpLCBqKSA9PT0gJycpIHtcbiAgICAgICAgICBmcmVlVGlsZXMucHVzaCh7IHg6IGksIHk6IGogfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJlZVRpbGVzO1xuICB9XG5cbiAgZ2V0IGlzRnVsbCgpIHtcbiAgICByZXR1cm4gdGhpcy4jdGlsZXMuZXZlcnkoKHQpID0+IHQgIT09ICcnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcbiIsImltcG9ydCBCb2FyZCBmcm9tICcuL0JvYXJkLmpzJztcbmltcG9ydCBtb3ZlQ2FsY3VsYXRvclxuIGZyb20gJy4uL21vZHVsZXMvbW92ZUNhbGN1bGF0b3IuanMnO1xuXG5jbGFzcyBHYW1lIHtcbiAgI2JvYXJkO1xuXG4gICNwbGF5ZXJzO1xuXG4gICNzY29yZWJvYXJkO1xuXG4gICNzdGFydGluZ1BsYXllcjtcblxuICAjcGxheWVySW5kZXg7XG5cbiAgI3RpZUNvdW50O1xuXG4gIGNvbnN0cnVjdG9yKHN0YXRlID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICBib2FyZCA9IG5ldyBCb2FyZCgpLFxuICAgICAgcGxheWVycyA9IFtcbiAgICAgICAgeyBuYW1lOiAnUGxheWVyJywgbWFya2VyOiAnWCcsIGlzQ3B1OiBmYWxzZSB9LFxuICAgICAgICB7IG5hbWU6ICdDcHUnLCBtYXJrZXI6ICdPJywgaXNDcHU6IHRydWUgfSxcbiAgICAgIF0sXG4gICAgICBzY29yZWJvYXJkID0gWzAsIDBdLFxuICAgICAgc3RhcnRpbmdQbGF5ZXIgPSAwLFxuICAgICAgcGxheWVySW5kZXggPSAwLFxuICAgICAgdGllQ291bnQgPSAwLFxuICAgIH0gPSBzdGF0ZTtcblxuICAgIHRoaXMuI2JvYXJkID0gYm9hcmQ7XG4gICAgdGhpcy4jcGxheWVycyA9IHBsYXllcnM7XG4gICAgdGhpcy4jc2NvcmVib2FyZCA9IHNjb3JlYm9hcmQ7XG4gICAgdGhpcy4jc3RhcnRpbmdQbGF5ZXIgPSBzdGFydGluZ1BsYXllcjtcbiAgICB0aGlzLiNwbGF5ZXJJbmRleCA9IGJvYXJkLmlzRnVsbCA/IG51bGwgOiBwbGF5ZXJJbmRleDtcbiAgICB0aGlzLiN0aWVDb3VudCA9IHRpZUNvdW50O1xuICB9XG5cbiAgZ2V0IGJvYXJkKCkge1xuICAgIHJldHVybiB0aGlzLiNib2FyZDtcbiAgfVxuXG4gIGdldCB3aW5uZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2JvYXJkLndpbm5lcjtcbiAgfVxuXG4gIGdldCBib2FyZElzRnVsbCgpIHtcbiAgICByZXR1cm4gdGhpcy4jYm9hcmQuaXNGdWxsO1xuICB9XG5cbiAgZ2V0IHBsYXllcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3BsYXllcnM7XG4gIH1cblxuICBnZXQgc3RhcnRpbmdQbGF5ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0YXJ0aW5nUGxheWVyO1xuICB9XG5cbiAgZ2V0IHBsYXllckluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLiNwbGF5ZXJJbmRleDtcbiAgfVxuXG4gIGdldCBjdXJyZW50UGxheWVyKCkge1xuICAgIHJldHVybiB0aGlzLiNwbGF5ZXJJbmRleCAhPT0gbnVsbCA/IHRoaXMuI3BsYXllcnNbdGhpcy4jcGxheWVySW5kZXhdIDogbnVsbDtcbiAgfVxuXG4gIGdldCB0aWVDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy4jdGllQ291bnQ7XG4gIH1cblxuICBnZXRUaWxlKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy4jYm9hcmQuZ2V0VGlsZSh4LCB5KTtcbiAgfVxuXG4gIGdldFNjb3JlKHBsYXllcikge1xuICAgIGlmIChwbGF5ZXIgPT09ICdQbGF5ZXInKSB7XG4gICAgICByZXR1cm4gdGhpcy4jc2NvcmVib2FyZFswXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuI3Njb3JlYm9hcmRbMV07XG4gIH1cblxuICBwbGF5VHVybih4LCB5KSB7XG4gICAgaWYgKHRoaXMud2lubmVyIHx8IHRoaXMuYm9hcmRJc0Z1bGwpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvbnN0IG1vdmUgPSB0aGlzLmN1cnJlbnRQbGF5ZXIuaXNDcHVcbiAgICAgID8gbW92ZUNhbGN1bGF0b3JcbiAgICAgIC5jb21lVXBXaXRoTW92ZSh0aGlzLiNib2FyZCwgdGhpcy5jdXJyZW50UGxheWVyLm1hcmtlcilcbiAgICAgIDogeyB4LCB5LCBtYXJrZXI6IHRoaXMuY3VycmVudFBsYXllci5tYXJrZXIgfTtcblxuICAgIGNvbnN0IG5leHQgPSB7fTtcblxuICAgIG5leHQuYm9hcmQgPSB0aGlzLiNib2FyZC5zZXRUaWxlKG1vdmUueCwgbW92ZS55LCBtb3ZlLm1hcmtlcik7XG4gICAgbmV4dC5zY29yZWJvYXJkID0gdGhpcy4jc2NvcmVib2FyZDtcbiAgICBuZXh0LnRpZUNvdW50ID0gbmV4dC5ib2FyZC5pc0Z1bGwgJiYgIW5leHQuYm9hcmQud2lubmVyID8gdGhpcy4jdGllQ291bnQgKyAxIDogdGhpcy4jdGllQ291bnQ7XG4gICAgbmV4dC5zdGFydGluZ1BsYXllciA9IHRoaXMuI3N0YXJ0aW5nUGxheWVyO1xuICAgIG5leHQucGxheWVycyA9IHRoaXMuI3BsYXllcnM7XG5cbiAgICBpZiAobmV4dC5ib2FyZC53aW5uZXIpIHtcbiAgICAgIG5leHQuc2NvcmVib2FyZFt0aGlzLiNwbGF5ZXJJbmRleF0gKz0gMTtcbiAgICB9XG5cbiAgICBpZiAoIW5leHQuYm9hcmQud2lubmVyIHx8ICFuZXh0LmJvYXJkLmlzRnVsbCkge1xuICAgICAgbmV4dC5wbGF5ZXJJbmRleCA9IHRoaXMuI3BsYXllckluZGV4ID09PSAwID8gMSA6IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBHYW1lKG5leHQpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgcmV0dXJuIG5ldyBHYW1lKHtcbiAgICAgIGJvYXJkOiBuZXcgQm9hcmQoKSxcbiAgICAgIHBsYXllcnM6IHRoaXMuI3BsYXllcnMsXG4gICAgICBzY29yZWJvYXJkOiB0aGlzLiNzY29yZWJvYXJkLFxuICAgICAgc3RhcnRpbmdQbGF5ZXI6IHRoaXMuI3N0YXJ0aW5nUGxheWVyID09PSAwID8gMSA6IDAsXG4gICAgICBwbGF5ZXJJbmRleDogdGhpcy4jc3RhcnRpbmdQbGF5ZXIgPT09IDAgPyAxIDogMCxcbiAgICAgIHRpZUNvdW50OiB0aGlzLiN0aWVDb3VudCxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiZnVuY3Rpb24gY2hvb3NlTW92ZShtb3Zlcykge1xuICBmb3IgKGxldCBwcmlvcml0eSA9IDI7IHByaW9yaXR5ID49IC0xOyBwcmlvcml0eSAtPSAxKSB7XG4gICAgY29uc3QgYmVzdE1vdmVzID0gbW92ZXMuZmlsdGVyKChtb3ZlKSA9PiBtb3ZlLnByaW9yaXR5ID09PSBwcmlvcml0eSk7XG5cbiAgICBpZiAoYmVzdE1vdmVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGNob3Nlbk1vdmUgPSBiZXN0TW92ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYmVzdE1vdmVzLmxlbmd0aCldO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiBjaG9zZW5Nb3ZlLngsXG4gICAgICAgIHk6IGNob3Nlbk1vdmUueSxcbiAgICAgICAgbWFya2VyOiBjaG9zZW5Nb3ZlLm1hcmtlcixcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmNvbnN0IG1vdmVDYWxjdWxhdG9yID0ge1xuICBldmFsdWF0ZU1vdmUobW92ZSwgYm9hcmQsIHNlbGYsIGRlcHRoID0gMCkge1xuICAgIGNvbnN0IG9wcG9uZW50ID0gc2VsZiA9PT0gJ1gnID8gJ08nIDogJ1gnO1xuICAgIGNvbnN0IGRldmVsb3BtZW50ID0gYm9hcmQuc2V0VGlsZShtb3ZlLngsIG1vdmUueSwgbW92ZS5tYXJrZXIpO1xuXG4gICAgaWYgKGRldmVsb3BtZW50Lndpbm5lciA9PT0gc2VsZikge1xuICAgICAgcmV0dXJuIGRlcHRoID09PSAwID8gMiA6IDE7XG4gICAgfVxuICAgIGlmIChkZXZlbG9wbWVudC53aW5uZXIgPT09IG9wcG9uZW50KSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmIChkZXZlbG9wbWVudC5pc0Z1bGwpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGNvbnN0IG91dGNvbWVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRldmVsb3BtZW50LmZyZWVUaWxlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgeyB4LCB5IH0gPSBkZXZlbG9wbWVudC5mcmVlVGlsZXNbaV07XG4gICAgICBjb25zdCBuZXh0TW92ZSA9IHsgeCwgeSwgbWFya2VyOiBtb3ZlLm1hcmtlciA9PT0gJ1gnID8gJ08nIDogJ1gnIH07XG4gICAgICBjb25zdCBvdXRjb21lID0gdGhpcy5ldmFsdWF0ZU1vdmUobmV4dE1vdmUsIGRldmVsb3BtZW50LCBzZWxmLCBkZXB0aCArIDEpO1xuXG4gICAgICBpZiAobW92ZS5tYXJrZXIgPT09IG9wcG9uZW50ICYmIG91dGNvbWUgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBpZiAobW92ZS5tYXJrZXIgPT09IHNlbGYgJiYgb3V0Y29tZSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuXG4gICAgICBvdXRjb21lcy5wdXNoKG91dGNvbWUpO1xuICAgIH1cblxuICAgIGlmIChvdXRjb21lcy5pbmNsdWRlcygwKSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vdmUubWFya2VyID09PSBvcHBvbmVudCA/IC0xIDogMTtcbiAgfSxcblxuICBjb21lVXBXaXRoTW92ZShib2FyZCwgc2VsZikge1xuICAgIGNvbnN0IHBvc3NpYmxlTW92ZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQuZnJlZVRpbGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCB7IHgsIHkgfSA9IGJvYXJkLmZyZWVUaWxlc1tpXTtcblxuICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHtcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgbWFya2VyOiBzZWxmLFxuICAgICAgICBwcmlvcml0eTogdGhpcy5ldmFsdWF0ZU1vdmUoeyB4LCB5LCBtYXJrZXI6IHNlbGYgfSwgYm9hcmQsIHNlbGYpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNob29zZU1vdmUocG9zc2libGVNb3Zlcyk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb3ZlQ2FsY3VsYXRvcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==