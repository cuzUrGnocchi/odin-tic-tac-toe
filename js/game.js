import Board from './Board.js';
import Player from './Player.js';
import Cpu from './Cpu.js';

const game = (function game() {
  const pBoard = Board();
  const pScoreboard = [0, 0];
  let pPlayers = [Player('Player', 'X'), Cpu('Cpu', 'O')];
  let pWinner = null;
  let pStartingPlayer = Math.floor(Math.random() * 2);
  let pCurrentPlayer = pStartingPlayer;

  return {
    getBoard() {
      return pBoard.getEveryTile();
    },

    getScore(i) {
      return pScoreboard[i];
    },

    getPlayer(i) {
      return pPlayers[i];
    },

    setPlayers(players) {
      if (players.length !== 2) {
        throw Error('Two players must be registered at a time');
      }
      if (players[0] === players[1]) {
        throw Error('Players provided must be different from each other');
      }
      players.forEach((p) => {
        if (!(p.isCpu())) {
          throw TypeError('Value provided is not an instance of class Player');
        }
      });

      pPlayers = players;
      this.reset();
    },

    getWinner() {
      return pWinner;
    },

    setStartingPlayer(i) {
      if (!Number.isInteger(i)) {
        throw TypeError('Value provided is not an index');
      }
      if (i < 0 || i > 1) {
        throw RangeError('Value must be either 0 or 1');
      }

      pStartingPlayer = i;
    },

    getCurrentPlayer() {
      return pCurrentPlayer;
    },

    getTile(x, y) {
      return pBoard.getTile(x, y);
    },

    playTurn(x, y) {
      if (pWinner || pBoard.getEveryTile().every((t) => t !== '')) {
        return;
      }

      let move;

      if (!(pPlayers[pCurrentPlayer].isCpu())) {
        move = {
          x,
          y,
          marker: pPlayers[pCurrentPlayer].getMarker(),
        };
      } else {
        move = pPlayers[pCurrentPlayer].comeUpWithMove(pBoard);
      }

      pBoard.setTile(move.x, move.y, move.marker);

      pWinner = pBoard.getWinner();

      if (pWinner) {
        pScoreboard[pCurrentPlayer] += 1;
      }

      if (!pWinner && !pBoard.getEveryTile().every((t) => t !== '')) {
        pCurrentPlayer = pCurrentPlayer === 0 ? 1 : 0;
      }
    },

    reset() {
      pBoard.clear();
      pStartingPlayer = pStartingPlayer === 0 ? 1 : 0;
      pCurrentPlayer = pStartingPlayer;
      pWinner = null;
    },
  };
}());

export default game;
