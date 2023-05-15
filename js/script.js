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

function GameBoard() {
  const board = [
    Tile(0, 0), Tile(1, 0), Tile(2, 0),
    Tile(0, 1), Tile(1, 1), Tile(2, 1),
    Tile(0, 2), Tile(1, 2), Tile(2, 2),
  ];
  function getRows() {
    const rows = [];
    for (let i = 0; i < 3; i += 1) {
      const row = board.filter(({ y }) => y === i);
      rows.push(row);
    }
    return rows;
  }
  function getColumns() {
    const columns = [];
    for (let i = 0; i < 3; i += 1) {
      const column = board.filter(({ x }) => x === i);
      columns.push(column);
    }
    return columns;
  }
  function getDiagonals() {
    const diagonals = [board.filter(({ x, y }) => x === y),
      board.filter(({ x, y }) => x + y === 2)];
    return diagonals;
  }
  return {
    getTile(xCoord, yCoord) {
      const row = board.filter(({ x }) => x === xCoord);
      const tile = row.filter(({ y }) => y === yCoord)[0];
      return tile;
    },
    get board() {
      return board;
    },
    set board(array) {
      for (let i = 0; i < board.length; i += 1) {
        this.getTile(i % 3, Math.floor(i / 3)).marker = array[i];
      }
    },
    addMarker(x, y, marker) {
      const tile = this.getTile(x, y);
      if (tile.marker === null) {
        tile.marker = marker;
      }
    },
    clear() {
      for (let i = 0; i < board.length; i += 1) {
        board[i].tile = null;
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
  function listenForClick() {
    return new Promise((resolve) => {
      const tiles = document.querySelectorAll('.tile');
      tiles.forEach((tile) => {
        function handleClick() {
          tiles.forEach((tileView) => {
            tileView.removeEventListener('click', handleClick);
          });
          const { row, column } = tile.dataset;
          resolve({ x: +column, y: +row });
        }
        tile.addEventListener('click', handleClick);
      });
    });
  }
  return playerMixin.call({
    async makeMove(gameBoard) {
      const { x, y } = await listenForClick();
      if (gameBoard.getTile(x, y).marker === null) {
        gameBoard.addMarker(x, y, this.marker);
      }
      return x && y ? Tile(x, y, this.marker) : null;
    },
  }, name, marker);
}

function Cpu(name, mark) {
  function getWinner(gameBoard) {
    const markers = ['X', 'O'];
    const lines = gameBoard.getLines();
    for (let i = 0; i < lines.length; i += 1) {
      const line = lines[i];
      for (let j = 0; j < markers.length; j += 1) {
        if (line.every(({ marker }) => marker === markers[j])) {
          return markers[j];
        }
      }
    }
    return null;
  }

  function gameIsOver(gameBoard) {
    return gameBoard.board.every(({ marker }) => marker !== null);
  }

  function judgeMove(move, gameBoard, whoseChoice) {
    const development = GameBoard();
    development.board = gameBoard.board
      .map((tile) => (tile.x === move.x && tile.y === move.y ? move.marker : tile.marker));

    let ownMarker = move.marker;
    let opponentMarker = move.marker === 'X' ? 'O' : 'X';

    if (whoseChoice === 'opponent choice') {
      ownMarker = move.marker === 'X' ? 'O' : 'X';
      opponentMarker = move.marker;
    }

    if (getWinner(development) === ownMarker) {
      return 1;
    }
    if (getWinner(development) === opponentMarker) {
      return -1;
    }
    if (gameIsOver(development)) {
      return 0;
    }

    const freeTiles = development.board.filter((tile) => tile.marker === null);

    if (whoseChoice === 'my choice') {
      let victoryIsPossible = false;
      for (let i = 0; i < freeTiles.length; i += 1) {
        const outcome = judgeMove(Tile(freeTiles[i].x, freeTiles[i].y, opponentMarker), development, 'opponent choice');
        if (outcome === -1) {
          return -1;
        }
        victoryIsPossible = true;
      }
      return victoryIsPossible ? 1 : 0;
    }

    for (let i = 0; i < freeTiles.length; i += 1) {
      const outcome = judgeMove(Tile(freeTiles[i].x, freeTiles[i].y, ownMarker), development, 'my choice');
      if (outcome === 1) {
        return 1;
      }
      if (i === freeTiles.length - 1 && outcome === 0) {
        return 0;
      }
    }
    return -1;
  }
  function chooseRandomTile(tiles) {
    const numberOfChoices = tiles.length;
    const choiceIndex = Math.floor(Math.random() * numberOfChoices);
    return tiles[choiceIndex];
  }
  return playerMixin.call({
    makeMove(gameBoard) {
      const moves = gameBoard.board
        .filter(({ marker }) => marker === null)
        .reduce((arr, { x, y }) => {
          const move = Tile(x, y, this.marker);
          const priority = judgeMove(move, gameBoard, 'my choice');
          return priority > -1 ? arr.concat({ move, priority }) : arr;
        }, []);
      for (let prio = 1; prio >= 0; prio -= 1) {
        const priorityGroup = moves
          .filter(({ priority }) => priority === prio)
          .map(({ move }) => move);
        if (priorityGroup.length > 0) {
          const chosenTile = chooseRandomTile(priorityGroup);
          gameBoard.addMarker(chosenTile.x, chosenTile.y, this.marker);
        }
      }
    },
  }, name, mark);
}

const view = (function view() {
  return {
    update(gameBoard) {
      const tiles = document.querySelectorAll('.mark');
      const { board } = gameBoard;
      for (let i = 0; i < tiles.length; i += 1) {
        const { marker } = board[i];
        const tile = tiles[i];
        tile.textContent = marker === null ? '' : marker;
      }
    },
  };
}());

const game = (function game() {
  const gameBoard = GameBoard();
  const players = [];
  let nextPlayer;
  let winner;
  let gameOver;

  gameBoard.board = [
    null, null, null,
    null, null, null,
    null, null, null,
  ];

  function updateWinner() {
    const lines = gameBoard.getLines();
    for (let i = 0; i < lines.length; i += 1) {
      const line = lines[i];
      for (let j = 0; j < players.length; j += 1) {
        const player = players[j];
        if (line.every(({ marker }) => marker === player.marker)) {
          winner = player;
          return;
        }
      }
    }
  }
  function updateGameOver() {
    const { board } = gameBoard;
    const boardIsFull = board.every(({ marker }) => marker !== null);
    gameOver = (winner || boardIsFull);
  }
  function decideWhosFirst() {
    const randomIndex = Math.floor(Math.random() * 2);
    nextPlayer = players[randomIndex];
  }
  function moveOnToNextPlayer() {
    const currentIndex = players.indexOf(nextPlayer);
    const successorIndex = currentIndex + 1 > players.length - 1 ? 0 : currentIndex + 1;
    nextPlayer = players[successorIndex];
  }
  return {
    start(player1, player2) {
      players.push(player1, player2);
      decideWhosFirst();
      this.playTurn();
    },
    async playTurn() {
      updateWinner();
      updateGameOver();

      if (winner) {
        return;
      }
      if (gameOver) {
        return;
      }

      await nextPlayer.makeMove(gameBoard);
      view.update(gameBoard);

      moveOnToNextPlayer();
      this.playTurn();
    },
  };
}());

(function run() {
  const startButton = document.querySelector('.start');
  startButton.addEventListener('click', () => {
    const cpu1 = Player('Joe', 'X');
    const cpu2 = Cpu('MrDestructoid', 'O');
    game.start(cpu1, cpu2);
  });
}());
