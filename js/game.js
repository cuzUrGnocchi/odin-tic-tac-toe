import Board from './Board.js';
import Player from './Player.js';
import Cpu from './Cpu.js';

const game = (function game() {
  const board = new Board();

  const player = {
    one: new Player('Player', 'X'),
    two: new Cpu('CPU', 'O'),
  };

  let firstPlayer = Math.floor(Math.random() * 2) === 0 ? 'one' : 'two';

  let currentPlayer = firstPlayer;

  function decideWhosFirst() {
    return firstPlayer === 'one' ? 'two' : 'one';
  }

  function getNextPlayer() {
    return currentPlayer === 'one' ? 'two' : 'one';
  }

  return {
    getBoard() {
      return board.getAllTiles();
    },

    getScore() {
      return { playerOne: player.one.score, playerTwo: player.two.score };
    },

    getCurrentPlayer() {
      return currentPlayer;
    },

    waitingForClick() {
      return !(player[currentPlayer] instanceof Cpu);
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
        ? { x, y, marker: player[currentPlayer].marker }
        : player[currentPlayer].comeUpWithMove(board);

      board.setTile(move.x, move.y, move.marker);

      const outcome = {
        winner: board.getWinner() ? currentPlayer : null,
        boardIsFull: board.isFull(),
      };

      if (outcome.winner) {
        player[currentPlayer].incrementScore();
      }

      if (!board.getWinner() && !board.isFull()) {
        currentPlayer = getNextPlayer();
      }

      return outcome;
    },

    reset() {
      firstPlayer = decideWhosFirst();
      currentPlayer = firstPlayer;
      board.clear();
    },
  };
}());

export default game;
