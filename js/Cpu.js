import Player from './Player.js';

class Cpu extends Player {
  #evaluateMove(x, y, marker, board, player, depth = 0) {
    const development = board.clone();
    const ownMarker = this.marker;
    const opponentMarker = ownMarker === 'X' ? 'O' : 'X';

    development.setTile(x, y, marker);

    if (development.getWinner() === ownMarker) {
      return depth === 0 ? 2 : 1;
    }
    if (development.getWinner() === opponentMarker) {
      return -1;
    }
    if (development.getEveryTile().every((t) => t !== '')) {
      return 0;
    }

    const freeTiles = [];

    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        if (development.getTile(i, j) === '') {
          freeTiles.push({ x: i, y: j });
        }
      }
    }

    if (player === 'self') {
      let victoryIsCertain = true;

      for (let i = 0; i < freeTiles.length; i += 1) {
        const outcome = this.#evaluateMove(freeTiles[i].x, freeTiles[i].y, opponentMarker, development, 'opponent', depth + 1);

        if (outcome === -1) {
          return -1;
        }
        if (outcome === 0) {
          victoryIsCertain = false;
        }
      }

      return victoryIsCertain ? 1 : 0;
    }

    if (player === 'opponent') {
      let defeatIsCertain = true;

      for (let i = 0; i < freeTiles.length; i += 1) {
        const outcome = this.#evaluateMove(freeTiles[i].x, freeTiles[i].y, ownMarker, development, 'self', depth + 1);

        if (outcome === 1) {
          return 1;
        }
        if (outcome === 0) {
          defeatIsCertain = false;
        }
      }

      return defeatIsCertain ? -1 : 0;
    }

    return null;
  }

  comeUpWithMove(board) {
    const freeTiles = [];

    for (let x = 0; x < 3; x += 1) {
      for (let y = 0; y < 3; y += 1) {
        if (board.getTile(x, y) === '') {
          freeTiles.push({ x, y });
        }
      }
    }

    const possibleMoves = freeTiles.reduce((arr, t) => arr.concat({
      x: t.x,
      y: t.y,
      marker: this.marker,
      priority: this.#evaluateMove(t.x, t.y, this.marker, board, 'self'),
    }), []);

    for (let priority = 2; priority >= -1; priority -= 1) {
      const bestMoves = possibleMoves.filter((move) => move.priority === priority);

      if (bestMoves.length > 0) {
        const chosenTile = bestMoves[Math.floor(Math.random() * bestMoves.length)];

        return {
          x: chosenTile.x,
          y: chosenTile.y,
          marker: this.marker,
        };
      }
    }

    return null;
  }
}

export default Cpu;
