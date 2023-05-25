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
    const diagonals = [
      grid.filter(({ x, y }) => x === y),
      grid.filter(({ x, y }) => x + y === 2),
    ];
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
      return grid.filter(({ x, y }) => x === xCoord && y === yCoord)[0];
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
  function waitForClick(board) {
    const boardView = document.querySelector('.board');

    return new Promise((resolve) => {
      function getTileCoordinates(event) {
        if (event.target.classList.contains('tile')) {
          const coordinates = { x: +event.target.dataset.column, y: +event.target.dataset.row };

          if (board.getTile(coordinates.x, coordinates.y).marker === null) {
            resolve(coordinates);

            boardView.removeEventListener('click', getTileCoordinates);
          }
        }
      }
      boardView.addEventListener('click', getTileCoordinates);
    });
  }

  return playerMixin.call({
    async makeMove(board) {
      const coordinates = await waitForClick(board);
      board.addMarker(coordinates.x, coordinates.y, this.marker);
    },
  }, name, marker);
}

function Cpu(name, mark) {
  function getWinner(board) {
    const lines = board.getLines();
    const markers = ['X', 'O'];

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

  function randomizeChoice(moves) {
    const choiceIndex = Math.floor(Math.random() * moves.length);
    return moves[choiceIndex];
  }

  return playerMixin.call({
    makeMove(board) {
      const possibleMoves = board.grid
        .filter(({ marker }) => marker === null)
        .reduce((arr, { x, y }) => {
          const move = Tile(x, y, this.marker);
          const priority = judgeMove(move, board, 'self');
          return arr.concat({ move, priority });
        }, []);

      for (let prio = 2; prio >= -1; prio -= 1) {
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
      const tileViews = document.querySelectorAll('.mark');
      for (let i = 0; i < tileViews.length; i += 1) {
        const { marker } = grid[i];
        tileViews[i].textContent = marker === null ? '' : marker;
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

    updateScore(score) {
      const scoreBoard = document.querySelectorAll('.score');
      for (let i = 0; i < 2; i += 1) {
        const tallyMarks = [];
        const playerScore = score[i];
        const playerScoreBoard = scoreBoard[i];

        for (let j = 0; j < Math.floor(playerScore / 5); j += 1) {
          const fiveStickTallyMark = document.createElement('img');
          fiveStickTallyMark.classList.add('tally-mark');
          fiveStickTallyMark.setAttribute('src', './icons/tally-mark-5.svg');
          fiveStickTallyMark.setAttribute('alt', '5 score units');
          tallyMarks.push(fiveStickTallyMark);
        }

        if (playerScore % 5 > 0) {
          const tallyMark = document.createElement('img');
          tallyMark.setAttribute('src', `./icons/tally-mark-${playerScore % 5}.svg`);
          tallyMark.classList.add('tally-mark');
          tallyMark.setAttribute('alt', `${playerScore % 5} score unit${playerScore % 5 > 1 ? 's' : ''}`);
          tallyMarks.push(tallyMark);
        }

        playerScoreBoard.replaceChildren(...tallyMarks);
      }
    },
  };
}());

const game = (function game() {
  const board = Board([]);
  const players = [];
  const score = [0, 0];
  let firstToGo;
  let currentPlayer;
  let winner;
  let boardIsFull;

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

    get boardIsFull() {
      boardIsFull = board.grid.every(({ marker }) => marker !== null);
      return boardIsFull;
    },

    getCurrentPlayerIndex() {
      return players.indexOf(currentPlayer);
    },

    start(player1, player2) {
      players.push(player1, player2);
      firstToGo = decideWhosFirst();
      currentPlayer = firstToGo;

      view.updateBoard(board.grid);
      view.setTurnIndicator(this.getCurrentPlayerIndex());
      this.playTurn();
    },

    reset() {
      firstToGo = decideWhosFirst();
      currentPlayer = firstToGo;
      winner = null;
      boardIsFull = false;

      board.clear();
      view.updateBoard(board.grid);
      view.setTurnIndicator(this.getCurrentPlayerIndex());
    },

    async playTurn() {
      if (!this.winner && !this.boardIsFull) {
        await currentPlayer.makeMove(board);
      }
      if (this.winner) {
        score[players.indexOf(currentPlayer)] += 1;
        view.updateScore(score);
        this.reset();
      } else if (this.boardIsFull) {
        this.reset();
      } else {
        currentPlayer = getNextPlayer();
      }
      view.updateBoard(board.grid);
      view.setTurnIndicator(this.getCurrentPlayerIndex());
      requestAnimationFrame(() => { requestAnimationFrame(this.playTurn.bind(this)); });
    },
  };
}());

(function run() {
  const player = Player('Joe', 'X');
  const cpu = Cpu('MrDestructoid', 'O');

  game.start(player, cpu);
}());
