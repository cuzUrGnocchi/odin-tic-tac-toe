function Board(tiles = ['', '', '', '', '', '', '', '', '']) {
  function getLines(tiles_) {
    const rows = [[], [], []];
    const columns = [[], [], []];
    const diagonals = [[], []];

    for (let x = 0; x < 3; x += 1) {
      for (let y = 0; y < 3; y += 1) {
        const tile = tiles_.getTile(x, y);

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

  return {
    tiles,

    getTile(x, y) {
      return this.tiles[x + y * 3];
    },

    setTile(x, y, marker) {
      this.tiles[x + y * 3] = marker;
    },

    clear() {
      this.tiles = ['', '', '', '', '', '', '', '', ''];
    },

    get winner() {
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
    },

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
    },

    get isFull() {
      return this.tiles.every((t) => t !== '');
    },
  };
}

function Player(name, marker) {
  return {
    name,

    marker,

    isCpu: false,
  };
}

function Cpu(name, marker) {
  function evaluateMove(x_, y_, marker_, board_, depth_ = 0) {
    const self = this.marker;
    const opponent = this.marker === 'X' ? 'O' : 'X';
    const development = Board([...board_.tiles]);

    development.setTile(x_, y_, marker_);

    if (development.winner === self) {
      return depth_ === 0 ? 2 : 1;
    }
    if (development.winner === opponent) {
      return -1;
    }
    if (development.isFull) {
      return 0;
    }

    if (marker_ === self) {
      let victoryIsCertain = true;

      for (let i = 0; i < development.freeTiles.length; i += 1) {
        const t = development.freeTiles[i];
        const outcome = evaluateMove.apply(this, [t.x, t.y, opponent, development, depth_ + 1]);

        if (outcome === -1) {
          return -1;
        }
        if (outcome === 0) {
          victoryIsCertain = false;
        }
      }

      return victoryIsCertain ? 1 : 0;
    }

    if (marker_ === opponent) {
      let defeatIsCertain = true;

      for (let i = 0; i < development.freeTiles.length; i += 1) {
        const t = development.freeTiles[i];
        const outcome = evaluateMove.apply(this, [t.x, t.y, this.marker, development, depth_ + 1]);

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

  function chooseMove(moves_) {
    for (let priority = 2; priority >= -1; priority -= 1) {
      const bestMoves = moves_.filter((move) => move.priority === priority);

      if (bestMoves.length > 0) {
        const chosenMove = bestMoves[Math.floor(Math.random() * bestMoves.length)];

        return {
          x: chosenMove.x,
          y: chosenMove.y,
          marker: chosenMove.marker,
        };
      }
    }

    return null;
  }

  return {
    ...Player(name, marker),

    comeUpWithMove(board) {
      const possibleMoves = [];

      for (let i = 0; i < board.freeTiles.length; i += 1) {
        const t = board.freeTiles[i];

        possibleMoves.push({
          x: t.x,
          y: t.y,
          marker: this.marker,
          priority: evaluateMove.apply(this, [t.x, t.y, this.marker, board]),
        });
      }

      return chooseMove(possibleMoves);
    },

    isCpu: true,
  };
}

const game = (function game() {
  const rng = Math.floor(Math.random() * 2);

  return {
    board: Board(),

    players: [Player('Player', 'X'), Cpu('Cpu', 'O')],

    scoreboard: [0, 0],

    startingPlayer: rng,

    playerIndex: rng,

    playTurn(x, y) {
      if (this.board.winner || this.board.isFull) {
        return;
      }

      let move;

      if (!(this.players[this.playerIndex].isCpu)) {
        move = { x, y, marker: this.players[this.playerIndex].marker };
      } else {
        move = this.players[this.playerIndex].comeUpWithMove(this.board);
      }

      this.board.setTile(move.x, move.y, move.marker);

      if (this.board.winner) {
        this.scoreboard[this.playerIndex] += 1;
      }

      if (!this.board.winner && !this.board.isFull) {
        this.playerIndex = this.playerIndex === 0 ? 1 : 0;
      }
    },

    reset() {
      this.board.clear();
      this.startingPlayer = this.startingPlayer === 0 ? 1 : 0;
      this.playerIndex = this.startingPlayer;
    },
  };
}());

(function view() {
  function updateBoard() {
    const board = document.querySelectorAll('.mark');

    for (let i = 0; i < 9; i += 1) {
      board[i].textContent = game.board.tiles[i];
    }
  }

  function updateNameplate() {
    for (let i = 0; i < 2; i += 1) {
      const nameplate = document.querySelector(`.${i === 0 ? 'player-one' : 'player-two'} .player-name`);
      nameplate.textContent = game.players[i].name;
    }
  }

  function updateTurnIndicator() {
    for (let i = 0; i < 2; i += 1) {
      const turnIndicator = document.querySelector(`.${i === 0 ? 'player-one' : 'player-two'} .turn-indicator`);

      if (i === game.playerIndex) {
        turnIndicator.classList.remove('hidden');
      } else {
        turnIndicator.classList.add('hidden');
      }
    }
  }

  function updateScoreboard() {
    for (let i = 0; i < 2; i += 1) {
      const scoreboard = document.querySelector(`.${i === 0 ? 'player-one' : 'player-two'} .score`);

      const tallyMarks = [];

      for (let j = 0; j < Math.floor(game.scoreboard[i] / 5); j += 1) {
        const fiveTallies = document.createElement('img');
        fiveTallies.classList.add('tally-mark');
        fiveTallies.setAttribute('src', './icons/tally-mark-5.svg');
        fiveTallies.setAttribute('alt', '5 score units');
        tallyMarks.push(fiveTallies);
      }

      if (game.scoreboard[i] % 5 > 0) {
        const singleTally = document.createElement('img');
        singleTally.setAttribute('src', `./icons/tally-mark-${game.scoreboard[i] % 5}.svg`);
        singleTally.classList.add('tally-mark');
        singleTally.setAttribute('alt', `${game.scoreboard[i] % 5} score unit${game.scoreboard[i] % 5 > 1 ? 's' : ''}`);
        tallyMarks.push(singleTally);
      }

      scoreboard.replaceChildren(...tallyMarks);
    }
  }

  function refreshUI() {
    updateBoard();
    updateTurnIndicator();
    updateScoreboard();
  }

  let handleClick;

  const executeCpuRoutine = () => {
    if (game.players[game.playerIndex].isCpu) {
      game.playTurn();
      refreshUI();

      requestAnimationFrame(() => {
        if (game.board.winner || game.board.isFull) {
          game.reset();
          refreshUI();
        }

        requestAnimationFrame(() => {
          if (game.players[game.playerIndex].isCpu) {
            executeCpuRoutine();
          } else {
            refreshUI();

            requestAnimationFrame(() => {
              document.querySelector('.board').addEventListener('click', handleClick, { once: true });
            });
          }
        });
      });
    }
  };

  handleClick = (event) => {
    if (!event.target.classList.contains('tile') && !event.target.classList.contains('mark')) {
      document.querySelector('.board').addEventListener('click', handleClick, { once: true });
      return;
    }

    const coordinates = {
      x: event.target.classList.contains('tile') ? +event.target.dataset.column : +event.target.parentNode.dataset.column,
      y: event.target.classList.contains('tile') ? +event.target.dataset.row : +event.target.parentNode.dataset.row,
    };

    if (game.players[game.playerIndex].isCpu || game.board.getTile(coordinates.x, coordinates.y) !== '') {
      document.querySelector('.board').addEventListener('click', handleClick, { once: true });
      return;
    }

    game.playTurn(coordinates.x, coordinates.y);
    refreshUI();

    requestAnimationFrame(() => {
      if (game.board.winner || game.board.isFull) {
        game.reset();
      }
      refreshUI();

      requestAnimationFrame(executeCpuRoutine);
    });
  };

  window.addEventListener('load', () => {
    updateNameplate();

    if (game.players[game.playerIndex].isCpu) {
      game.playTurn();
    }

    refreshUI();
  });

  document.querySelector('.board').addEventListener('click', handleClick, { once: true });
}());
