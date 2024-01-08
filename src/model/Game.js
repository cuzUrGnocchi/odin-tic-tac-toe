import Board from './Board.js';
import artificialIntelligence from '../modules/artificialIntelligence.js';

class Game {
  #board;

  #players;

  #scoreboard;

  #startingPlayer;

  #playerIndex;

  #tieCount;

  constructor(state = {}) {
    const {
      board = new Board(),
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
      ? artificialIntelligence.comeUpWithMove(this.#board, this.currentPlayer.marker)
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
      board: new Board(),
      players: this.#players,
      scoreboard: this.#scoreboard,
      startingPlayer: this.#startingPlayer === 0 ? 1 : 0,
      playerIndex: this.#startingPlayer === 0 ? 1 : 0,
      tieCount: this.#tieCount,
    });
  }
}

export default Game;
