import Board from './Board.js';
import Player from './Player.js';
import Cpu from './Cpu.js';

class Game {
  #board = new Board();

  #players = [new Player('Player', 'X'), new Cpu('Cpu', 'O')];

  #scoreboard = [0, 0];

  #winner = null;

  #startingPlayer = Math.floor(Math.random() * 2);

  #currentPlayer = this.#startingPlayer;

  get board() {
    return this.#board.getEveryTile();
  }

  get players() {
    return [...this.#players];
  }

  set players(players) {
    if (players.length !== 2) {
      throw Error('Two players must be registered at a time');
    }
    if (players[0] === players[1]) {
      throw Error('Players provided must be different from each other');
    }
    players.forEach((p) => {
      if (!(p instanceof Player)) {
        throw TypeError('Value provided is not an instance of class Player');
      }
    });

    this.#players = players;
    this.reset();
  }

  get scoreboard() {
    return this.#scoreboard;
  }

  get winner() {
    return this.#winner;
  }

  set startingPlayer(i) {
    if (!Number.isInteger(i)) {
      throw TypeError('Value provided is not an index');
    }
    if (i < 0 || i > 1) {
      throw RangeError('Value must be either 0 or 1');
    }

    this.#startingPlayer = i;
  }

  get currentPlayer() {
    return this.#currentPlayer;
  }

  getTile(x, y) {
    return this.#board.getTile(x, y);
  }

  playTurn(x, y) {
    if (this.#winner || this.#board.getEveryTile().every((t) => t !== '')) {
      return;
    }

    let move;

    if (!(this.#players[this.#currentPlayer] instanceof Cpu)) {
      move = {
        x,
        y,
        marker: this.#players[this.#currentPlayer].marker,
      };
    } else {
      move = this.#players[this.#currentPlayer].comeUpWithMove(this.#board);
    }

    this.#board.setTile(move.x, move.y, move.marker);

    this.#winner = this.#board.getWinner();

    if (this.#winner) {
      this.#scoreboard[this.#currentPlayer] += 1;
    }

    if (!this.#winner && !this.#board.getEveryTile().every((t) => t !== '')) {
      this.#currentPlayer = this.#currentPlayer === 0 ? 1 : 0;
    }
  }

  reset() {
    this.#board.clear();
    this.#currentPlayer = this.#currentPlayer === 0 ? 1 : 0;
    this.#winner = null;
  }
}

export default Game;
