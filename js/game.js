import Board from './Board.js';
import Player from './Player.js';
import AI from './AI.js';

const game = (function game() {
  const board = Board();

  const playerOne = Player('Player', 'X', false);

  const playerTwo = Player('CPU', 'O', true);

  let startingPlayer = Math.floor(Math.random() * 2) === 0 ? 'one' : 'two';

  let playerIndex = startingPlayer;

  function decideWhosFirst() {
    return startingPlayer === 'one' ? 'two' : 'one';
  }

  function updatePlayerIndex() {
    return playerIndex === 'one' ? 'two' : 'one';
  }

  function getCurrentPlayer() {
    return playerIndex === 'one' ? playerOne : playerTwo;
  }

  return {
    getBoard() {
      return board.getAllTiles();
    },

    getScore() {
      return { playerOne: playerOne.getScore(), playerTwo: playerTwo.getScore() };
    },

    getPlayerIndex() {
      return playerIndex;
    },

    waitingForClick() {
      return !getCurrentPlayer().isCpu();
    },

    tileIsFree(x, y) {
      return board.tileIsFree(x, y);
    },

    playTurn(x, y) {
      if (board.getWinner() || board.isFull()) {
        throw new Error('Game is already over');
      }

      if (this.waitingForClick()) {
        if (!Number.isInteger(x) || !Number.isInteger(y)) {
          throw new TypeError('Coordinates must be integers');
        }
        if (x < 0 || x > 2 || y < 0 || y > 2) {
          throw new RangeError('Coordinates must be between 0 and 2');
        }
        if (!board.tileIsFree(x, y)) {
          throw new Error('Tile is occupied');
        }
      }

      const move = this.waitingForClick()
        ? { x, y, marker: getCurrentPlayer().getMarker() }
        : AI.comeUpWithMove(board, getCurrentPlayer().getMarker());

      board.setTile(move.x, move.y, move.marker);

      const outcome = {
        winner: board.getWinner() ? playerIndex : null,
        boardIsFull: board.isFull(),
      };

      if (outcome.winner) {
        getCurrentPlayer().incrementScore();
      }

      if (!board.getWinner() && !board.isFull()) {
        playerIndex = updatePlayerIndex();
      }

      return outcome;
    },

    reset() {
      startingPlayer = decideWhosFirst();
      playerIndex = startingPlayer;
      board.clear();
    },
  };
}());

export default game;
