const Board = () => {
  const board = ['', '', '', '', '', '', '', '', ''];

  const moveHistory = [];

  function getTile(x, y) {
    if (x < 0 || x > 2 || y < 0 || y > 2) {
      return new RangeError('Coordinates must be between 0 and 2');
    }
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
      return new TypeError('Coordinates must be integers');
    }

    return board[x + y * 3];
  }

  function getRows() {
    const rows = [[], [], []];

    for (let i = 0; i < 9; i += 1) {
      rows[Math.floor(i / 3)].push(board[i]);
    }

    return rows;
  }

  function getColumns() {
    const columns = [[], [], []];

    for (let i = 0; i < 9; i += 1) {
      columns[i % 3].push(board[i]);
    }

    return columns;
  }

  function getDiagonals() {
    const diagonals = [[], []];

    for (let i = 0; i < 9; i += 1) {
      const rowIndex = Math.floor(i / 3);
      const columnIndex = i % 3;

      if (rowIndex === columnIndex) {
        diagonals[0].push(board[i]);
      }

      if (rowIndex + columnIndex === 2) {
        diagonals[1].push(board[i]);
      }
    }

    return diagonals;
  }

  return {
    setTile(x, y, marker) {
      if (marker !== 'X' && marker !== 'O') {
        throw new Error('Board can only be marked with X or O');
      }
      if (getTile(x, y) !== '') {
        throw new Error('Tile is occupied');
      }
      if (moveHistory.length > 0 && moveHistory.slice(-1).marker === marker) {
        throw new Error("Same player can't make a move twice in a row");
      }

      board[x + y * 3] = marker;
      moveHistory.push({ x, y, marker });
    },

    getAllTiles() {
      return [...board];
    },

    clear() {
      for (let i = 0; i < board.length; i += 1) {
        board[i] = '';
      }
      while (moveHistory.length > 0) {
        moveHistory.pop();
      }
    },

    getWinner() {
      let winner;
      const lines = [...getRows(), ...getColumns(), ...getDiagonals()];
      const playerMarkers = ['X', 'O'];

      for (let i = 0; i < lines.length; i += 1) {
        for (let j = 0; j < playerMarkers.length; j += 1) {
          if (lines[i].every((marker) => marker === playerMarkers[j])) {
            if (winner) {
              return null;
            }
            winner = playerMarkers[j];
          }
        }
      }

      return !winner ? null : winner;
    },

    isFull() {
      return board.every((marker) => marker === 'X' || marker === 'O');
    },

    getFreeTiles() {
      const freeTiles = [];

      for (let i = 0; i < 9; i += 1) {
        if (board[i] === '') {
          freeTiles.push({ x: i % 3, y: Math.floor(i / 3) });
        }
      }

      return freeTiles;
    },

    tileIsFree(x, y) {
      return getTile(x, y) === '';
    },

    theorizeMove(x, y, marker) {
      const development = Board();

      for (let i = 0; i < moveHistory.length; i += 1) {
        const move = moveHistory[i];
        development.setTile(move.x, move.y, move.marker);
      }

      development.setTile(x, y, marker);

      return development;
    },
  };
};

export default Board;
