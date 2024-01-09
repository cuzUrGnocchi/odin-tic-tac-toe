"use strict";
(self["webpackChunkodin_tic_tac_toe"] = self["webpackChunkodin_tic_tac_toe"] || []).push([["moveCalculator"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/moveCalculator.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZUNhbGN1bGF0b3IuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLHlCQUF5QixnQkFBZ0I7QUFDekM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0Isa0NBQWtDO0FBQ3RELGNBQWMsT0FBTztBQUNyQix5QkFBeUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQsY0FBYyxPQUFPOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxvQkFBb0I7QUFDMUQsT0FBTztBQUNQOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdGljLXRhYy10b2UvLi9zcmMvbW9kdWxlcy9tb3ZlQ2FsY3VsYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjaG9vc2VNb3ZlKG1vdmVzKSB7XG4gIGZvciAobGV0IHByaW9yaXR5ID0gMjsgcHJpb3JpdHkgPj0gLTE7IHByaW9yaXR5IC09IDEpIHtcbiAgICBjb25zdCBiZXN0TW92ZXMgPSBtb3Zlcy5maWx0ZXIoKG1vdmUpID0+IG1vdmUucHJpb3JpdHkgPT09IHByaW9yaXR5KTtcblxuICAgIGlmIChiZXN0TW92ZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY2hvc2VuTW92ZSA9IGJlc3RNb3Zlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBiZXN0TW92ZXMubGVuZ3RoKV07XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IGNob3Nlbk1vdmUueCxcbiAgICAgICAgeTogY2hvc2VuTW92ZS55LFxuICAgICAgICBtYXJrZXI6IGNob3Nlbk1vdmUubWFya2VyLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuY29uc3QgbW92ZUNhbGN1bGF0b3IgPSB7XG4gIGV2YWx1YXRlTW92ZShtb3ZlLCBib2FyZCwgc2VsZiwgZGVwdGggPSAwKSB7XG4gICAgY29uc3Qgb3Bwb25lbnQgPSBzZWxmID09PSAnWCcgPyAnTycgOiAnWCc7XG4gICAgY29uc3QgZGV2ZWxvcG1lbnQgPSBib2FyZC5zZXRUaWxlKG1vdmUueCwgbW92ZS55LCBtb3ZlLm1hcmtlcik7XG5cbiAgICBpZiAoZGV2ZWxvcG1lbnQud2lubmVyID09PSBzZWxmKSB7XG4gICAgICByZXR1cm4gZGVwdGggPT09IDAgPyAyIDogMTtcbiAgICB9XG4gICAgaWYgKGRldmVsb3BtZW50Lndpbm5lciA9PT0gb3Bwb25lbnQpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKGRldmVsb3BtZW50LmlzRnVsbCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgY29uc3Qgb3V0Y29tZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGV2ZWxvcG1lbnQuZnJlZVRpbGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCB7IHgsIHkgfSA9IGRldmVsb3BtZW50LmZyZWVUaWxlc1tpXTtcbiAgICAgIGNvbnN0IG5leHRNb3ZlID0geyB4LCB5LCBtYXJrZXI6IG1vdmUubWFya2VyID09PSAnWCcgPyAnTycgOiAnWCcgfTtcbiAgICAgIGNvbnN0IG91dGNvbWUgPSB0aGlzLmV2YWx1YXRlTW92ZShuZXh0TW92ZSwgZGV2ZWxvcG1lbnQsIHNlbGYsIGRlcHRoICsgMSk7XG5cbiAgICAgIGlmIChtb3ZlLm1hcmtlciA9PT0gb3Bwb25lbnQgJiYgb3V0Y29tZSA9PT0gMSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGlmIChtb3ZlLm1hcmtlciA9PT0gc2VsZiAmJiBvdXRjb21lID09PSAtMSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG5cbiAgICAgIG91dGNvbWVzLnB1c2gob3V0Y29tZSk7XG4gICAgfVxuXG4gICAgaWYgKG91dGNvbWVzLmluY2x1ZGVzKDApKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gbW92ZS5tYXJrZXIgPT09IG9wcG9uZW50ID8gLTEgOiAxO1xuICB9LFxuXG4gIGNvbWVVcFdpdGhNb3ZlKGJvYXJkLCBzZWxmKSB7XG4gICAgY29uc3QgcG9zc2libGVNb3ZlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5mcmVlVGlsZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHsgeCwgeSB9ID0gYm9hcmQuZnJlZVRpbGVzW2ldO1xuXG4gICAgICBwb3NzaWJsZU1vdmVzLnB1c2goe1xuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgICBtYXJrZXI6IHNlbGYsXG4gICAgICAgIHByaW9yaXR5OiB0aGlzLmV2YWx1YXRlTW92ZSh7IHgsIHksIG1hcmtlcjogc2VsZiB9LCBib2FyZCwgc2VsZiksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hvb3NlTW92ZShwb3NzaWJsZU1vdmVzKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vdmVDYWxjdWxhdG9yO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9