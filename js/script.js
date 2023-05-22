function Tile(xCoord, yCoord, mark = null) {
  const x = xCoord;
  const y = yCoord;
  let marker = mark;

  return {
    get x() {
      return x;
    },

    get y() {
      return y;
    },

    get marker() {
      return marker;
    },

    set marker(m) {
      marker = m;
    },
  };
}

function Board(arr = [null, null, null, null, null, null, null, null, null]) {
  const grid = [
    Tile(0, 0, arr[0]), Tile(1, 0, arr[1]), Tile(2, 0, arr[2]),
    Tile(0, 1, arr[3]), Tile(1, 1, arr[4]), Tile(2, 1, arr[5]),
    Tile(0, 2, arr[6]), Tile(1, 2, arr[7]), Tile(2, 2, arr[8]),
  ];

  function getRows() {
    const rows = [];
    for (let i = 0; i < 3; i += 1) {
      const row = grid.filter(({ y }) => y === i);
      rows.push(row);
    }
    return rows;
  }

  function getColumns() {
    const columns = [];
    for (let i = 0; i < 3; i += 1) {
      const column = grid.filter(({ x }) => x === i);
      columns.push(column);
    }
    return columns;
  }

  function getDiagonals() {
    const diagonals = [grid.filter(({ x, y }) => x === y),
      grid.filter(({ x, y }) => x + y === 2)];
    return diagonals;
  }
  return {
    get grid() {
      return grid;
    },

    set grid(array) {
      for (let i = 0; i < grid.length; i += 1) {
        this.getTile(i % 3, Math.floor(i / 3)).marker = array[i];
      }
    },

    getTile(xCoord, yCoord) {
      const row = grid.filter(({ x }) => x === xCoord);
      const tile = row.filter(({ y }) => y === yCoord)[0];
      return tile;
    },

    addMarker(x, y, marker) {
      const tile = this.getTile(x, y);
      if (tile.marker === null) {
        tile.marker = marker;
      }
    },

    clear() {
      for (let i = 0; i < grid.length; i += 1) {
        grid[i].marker = null;
      }
    },

    getLines() {
      const rows = getRows();
      const columns = getColumns();
      const diagonals = getDiagonals();
      return [...rows, ...columns, ...diagonals];
    },
  };
}

function playerMixin(playerName, playerMarker) {
  let name = playerName;
  const marker = playerMarker;

  return Object.assign(this, {
    get name() {
      return name;
    },

    set name(playerUserName) {
      name = playerUserName;
    },

    get marker() {
      return marker;
    },
  });
}

function Player(name, marker) {
  function getMoveCoordinates(board) {
    return new Promise((resolve) => {
      const tiles = document.querySelectorAll('.tile');

      tiles.forEach((tile) => {
        function getCoordinates() {
          const coordinates = { x: +tile.dataset.column, y: +tile.dataset.row };

          if (board.getTile(coordinates.x, coordinates.y).marker === null) {
            resolve(coordinates);

            tiles.forEach((t) => {
              t.removeEventListener('click', getCoordinates);
            });
          }
        }

        tile.addEventListener('click', getCoordinates);
      });
    });
  }

  return playerMixin.call({
    async makeMove(board) {
      const { x, y } = await getMoveCoordinates(board);

      if (board.getTile(x, y).marker === null) {
        board.addMarker(x, y, this.marker);
      }
    },
  }, name, marker);
}

function Cpu(name, mark) {
  function getWinner(board) {
    const markers = ['X', 'O'];
    const lines = board.getLines();

    for (let i = 0; i < lines.length; i += 1) {
      for (let j = 0; j < markers.length; j += 1) {
        if (lines[i].every(({ marker }) => marker === markers[j])) {
          return markers[j];
        }
      }
    }

    return null;
  }

  function gameIsOver(board) {
    return board.grid.every(({ marker }) => marker !== null);
  }

  function judgeMove(move, board, player, depth = 0) {
    const development = Board(board.grid.map((tile) => {
      if (tile.x === move.x && tile.y === move.y) {
        return move.marker;
      }

      return tile.marker;
    }));

    const ownMarker = (player === 'self' && move.marker === 'X') || (player === 'opponent' && move.marker === 'O') ? 'X' : 'O';
    const opponentMarker = ownMarker === 'X' ? 'O' : 'X';

    if (getWinner(development) === ownMarker) {
      return depth === 0 ? 2 : 1;
    }
    if (getWinner(development) === opponentMarker) {
      return -1;
    }
    if (gameIsOver(development)) {
      return 0;
    }

    const subsequentMoves = development.grid.filter((tile) => tile.marker === null);

    if (player === 'self') {
      let victoryIsCertain = true;
      for (let i = 0; i < subsequentMoves.length; i += 1) {
        const subsequentMove = Tile(subsequentMoves[i].x, subsequentMoves[i].y, opponentMarker);
        const outcome = judgeMove(subsequentMove, development, 'opponent', depth + 1);

        if (outcome === -1) {
          return -1;
        }

        if (outcome === 0) {
          victoryIsCertain = false;
        }
      }
      return victoryIsCertain ? 1 : 0;
    }

    let defeatIsCertain = true;

    for (let i = 0; i < subsequentMoves.length; i += 1) {
      const subsequentMove = Tile(subsequentMoves[i].x, subsequentMoves[i].y, ownMarker);
      const outcome = judgeMove(subsequentMove, development, 'self', depth + 1);

      if (outcome === 1) {
        return 1;
      }

      if (outcome === 0) {
        defeatIsCertain = false;
      }
    }
    return defeatIsCertain ? -1 : 0;
  }

  function randomizeChoice(tiles) {
    const numberOfChoices = tiles.length;
    const choiceIndex = Math.floor(Math.random() * numberOfChoices);
    return tiles[choiceIndex];
  }

  return playerMixin.call({
    makeMove(board) {
      const possibleMoves = board.grid
        .filter((tile) => tile.marker === null)
        .reduce((arr, { x, y }) => {
          const move = Tile(x, y, this.marker);
          const priority = judgeMove(move, board, 'self');
          return priority > -1 ? arr.concat({ move, priority }) : arr;
        }, []);

      for (let prio = 2; prio >= 0; prio -= 1) {
        const bestMoves = possibleMoves
          .filter(({ priority }) => priority === prio)
          .map(({ move }) => move);

        if (bestMoves.length > 0) {
          const chosenTile = randomizeChoice(bestMoves);
          board.addMarker(chosenTile.x, chosenTile.y, this.marker);
          break;
        }
      }
    },
  }, name, mark);
}

const view = (function view() {
  return {
    updateBoard(grid) {
      const tiles = document.querySelectorAll('.mark');
      for (let i = 0; i < tiles.length; i += 1) {
        const { marker } = grid[i];
        tiles[i].textContent = marker === null ? '' : marker;
      }
    },

    setTurnIndicator(playerIndex) {
      const turnIndicators = document.querySelectorAll('.turn-indicator');
      turnIndicators[playerIndex].classList.remove('hidden');
      turnIndicators[playerIndex === 0 ? 1 : 0].classList.add('hidden');
    },

    removeTurnIndicators() {
      const turnIndicators = document.querySelectorAll('.turn-indicator');
      turnIndicators.forEach((indicator) => { indicator.classList.add('hidden'); });
    },

    update(grid, currentPlayerIndex) {
      this.updateBoard(grid);
      this.setTurnIndicator(currentPlayerIndex);
    },
  };
}());

const game = (function game() {
  const board = Board([]);
  const players = [];
  let currentPlayer;
  let firstToGo;
  let winner;
  let gameOver;

  board.grid = [
    null, null, null,
    null, null, null,
    null, null, null,
  ];

  function decideWhosFirst() {
    return firstToGo ? players.filter((player) => player !== firstToGo)[0] : players[0];
  }

  function getNextPlayer() {
    const currentIndex = players.indexOf(currentPlayer);
    const successorIndex = currentIndex + 1 > players.length - 1 ? 0 : currentIndex + 1;
    return players[successorIndex];
  }

  return {
    get board() {
      return board.grid;
    },

    get winner() {
      const lines = board.getLines();

      for (let i = 0; i < lines.length; i += 1) {
        for (let j = 0; j < players.length; j += 1) {
          const player = players[j];

          if (lines[i].every(({ marker }) => marker === player.marker)) {
            winner = player;
            return winner;
          }
        }
      }

      winner = null;
      return winner;
    },

    get gameOver() {
      const boardIsFull = board.grid.every(({ marker }) => marker !== null);
      gameOver = winner || boardIsFull;
      return gameOver;
    },

    getCurrentPlayerIndex() {
      return players.indexOf(currentPlayer);
    },

    start(player1, player2) {
      players.push(player1, player2);
      firstToGo = decideWhosFirst();
      currentPlayer = firstToGo;

      view.update(board.grid, this.getCurrentPlayerIndex());

      this.playTurn();
    },

    reset() {
      firstToGo = decideWhosFirst();
      currentPlayer = firstToGo;
      winner = null;
      gameOver = false;

      board.clear();

      view.update(board.grid, this.getCurrentPlayerIndex());
    },

    async playTurn() {
      if (!this.winner && !this.gameOver) {
        await currentPlayer.makeMove(board);
      }

      if (this.winner) {
        this.reset();
      } else if (this.gameOver) {
        this.reset();
      } else {
        currentPlayer = getNextPlayer();
      }

      view.update(board.grid, this.getCurrentPlayerIndex());

      requestAnimationFrame(() => { requestAnimationFrame(this.playTurn.bind(this)); });
    },
  };
}());

(function run() {
  const player = Player('Joe', 'X');
  const cpu = Cpu('MrDestructoid', 'O');

  game.start(player, cpu);
}());
