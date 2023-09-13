function Board() {
  const privateTiles = [
    '', '', '',
    '', '', '',
    '', '', '',
  ];

  return {
    getTile(x, y) {
      if ((x < 0) || (x > 2) || (y < 0) || (y > 2)) {
        throw new RangeError('Coordinates must be between 0 and 2');
      }
      if ((!Number.isInteger(x)) || (!Number.isInteger(y))) {
        throw new TypeError('Coordinates must be integers');
      }

      return privateTiles[x + y * 3];
    },

    clone() {
      const clone = Board();

      for (let x = 0; x < 3; x += 1) {
        for (let y = 0; y < 3; y += 1) {
          if (this.getTile(x, y) !== '') {
            clone.setTile(x, y, this.getTile(x, y));
          }
        }
      }

      return clone;
    },

    setTile(x, y, marker) {
      if ((x < 0) || (x > 2) || (y < 0) || (y > 2)) {
        throw new RangeError('Coordinates must be between 0 and 2');
      }
      if ((marker !== 'X') && (marker !== 'O')) {
        throw new Error('Board can only be marked with either X or O');
      }
      if (this.getTile(x, y) !== '') {
        throw new Error('Tile is occupied');
      }

      privateTiles[x + y * 3] = marker;
    },

    getEveryTile() {
      return [...privateTiles];
    },

    clear() {
      for (let i = 0; i < privateTiles.length; i += 1) {
        privateTiles[i] = '';
      }
    },

    getWinner() {
      const rows = [[], [], []];
      const columns = [[], [], []];
      const diagonals = [[], []];

      for (let x = 0; x < 3; x += 1) {
        for (let y = 0; y < 3; y += 1) {
          const tile = this.getTile(x, y);

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

      const lines = [...rows, ...columns, ...diagonals];
      const markers = ['X', 'O'];

      for (let i = 0; i < lines.length; i += 1) {
        for (let j = 0; j < markers.length; j += 1) {
          if (lines[i].every((m) => m === markers[j])) {
            return markers[j];
          }
        }
      }

      return null;
    },
  };
}

export default Board;
