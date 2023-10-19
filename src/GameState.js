import Board from './Board.js';
import ai from './ai.js';

class GameState {
  #board;

  #players;

  #scoreboard;

  #startingPlayer;

  #playerIndex;

  #tieCount;

  constructor({
    board = new Board(),
    players = [
      { name: 'Player', marker: 'X', isCpu: false },
      { name: 'Cpu', marker: 'O', isCpu: true },
    ],
    scoreboard = [0, 0],
    startingPlayer = 0,
    playerIndex = 0,
    tieCount = 0,
  } = {}) {
    this.#board = board;
    this.#players = players;
    this.#scoreboard = scoreboard;
    this.#startingPlayer = startingPlayer;
    this.#playerIndex = playerIndex;
    this.#tieCount = tieCount;
  }

  get board() {
    return this.#board;
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

  get tieCount() {
    return this.#tieCount;
  }

  getScore(player) {
    if (player === 'Player') {
      return this.#scoreboard[0];
    }
    return this.#scoreboard[1];
  }

  playTurn(x, y) {
    if (this.#board.winner || this.#board.isFull) {
      return this;
    }

    let move;

    if (!(this.#players[this.#playerIndex].isCpu)) {
      move = { x, y, marker: this.#players[this.#playerIndex].marker };
    } else {
      move = ai.comeUpWithMove(this.#board, this.#players[this.#playerIndex].marker);
    }

    const nextState = {};
    nextState.board = this.#board.setTile(move.x, move.y, move.marker);
    nextState.scoreboard = this.#scoreboard;
    nextState.tieCount = this.#tieCount;

    if (nextState.board.winner) {
      nextState.scoreboard[this.#playerIndex] += 1;
    }

    if (!this.#board.winner && !this.#board.isFull) {
      nextState.playerIndex = this.#playerIndex === 0 ? 1 : 0;
    }

    if (nextState.board.isFull && !nextState.board.winner) {
      nextState.tieCount += 1;
    }

    nextState.startingPlayer = this.#startingPlayer;
    nextState.players = this.#players;

    return new GameState(nextState);
  }

  reset() {
    const nextState = {};
    nextState.board = new Board();
    nextState.players = this.#players;
    nextState.scoreboard = this.#scoreboard;
    nextState.startingPlayer = this.#startingPlayer === 0 ? 1 : 0;
    nextState.playerIndex = nextState.startingPlayer;
    nextState.tieCount = this.#tieCount;

    return new GameState(nextState);
  }
}

export default GameState;
