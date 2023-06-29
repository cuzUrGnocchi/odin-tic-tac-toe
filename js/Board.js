class Board {
  #board;

  constructor(markers = ['', '', '', '', '', '', '', '', '']) {
    this.#board = markers;
  }

  #getTile(x, y) {
    if (x < 0 || x > 2 || y < 0 || y > 2) {
      return new RangeError('Coordinates must be between 0 and 2');
    }
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
      return new TypeError('Coordinates must be integers');
    }

    return this.#board[x + y * 3];
  }

  #getLines() {
    const rows = this.#board.reduce((arr, tile, i) => {
      const rowIndex = Math.floor(i / 3);

      return [
        ...arr.slice(0, rowIndex),
        arr[rowIndex].concat(tile),
        ...arr.slice(rowIndex + 1),
      ];
    }, [[], [], []]);

    const columns = this.#board.reduce((arr, tile, i) => {
      const columnIndex = i % 3;

      return [
        ...arr.slice(0, columnIndex),
        arr[columnIndex].concat(tile),
        ...arr.slice(columnIndex + 1),
      ];
    }, [[], [], []]);

    const diagonals = this.#board.reduce((arr, tile, i) => {
      const rowIndex = Math.floor(i / 3);
      const columnIndex = i % 3;

      return [
        rowIndex === columnIndex ? arr[0].concat(tile) : arr[0],
        rowIndex + columnIndex === 2 ? arr[1].concat(tile) : arr[1],
      ];
    }, [[], []]);

    return [...rows, ...columns, ...diagonals];
  }

  setTile(x, y, marker) {
    if (this.#getTile(x, y) !== '') {
      throw new Error('Tile is occupied');
    }

    this.#board[x + y * 3] = marker;
  }

  getAllTiles() {
    return [...this.#board];
  }

  clear() {
    for (let i = 0; i < this.#board.length; i += 1) {
      this.#board[i] = '';
    }
  }

  getWinner() {
    let winner;
    const lines = this.#getLines();
    const markers = ['X', 'O'];

    for (let i = 0; i < lines.length; i += 1) {
      for (let j = 0; j < markers.length; j += 1) {
        if (lines[i].every((marker) => marker === markers[j])) {
          if (winner) {
            return null;
          }
          winner = markers[j];
        }
      }
    }

    return !winner ? null : winner;
  }

  isFull() {
    return this.#board.every((marker) => marker === 'X' || marker === 'O');
  }

  getFreeTiles() {
    const freeTiles = [];

    for (let i = 0; i < 9; i += 1) {
      if (this.#board[i] === '') {
        freeTiles.push({ x: i % 3, y: Math.floor(i / 3) });
      }
    }

    return freeTiles;
  }

  tileIsFree(x, y) {
    return this.#getTile(x, y) === '';
  }
}

export default Board;
