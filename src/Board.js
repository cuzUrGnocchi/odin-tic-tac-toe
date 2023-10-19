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

export default Board;
