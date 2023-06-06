function Board(constructorMarkers = ['', '', '', '', '', '', '', '', '']) {
  const board = [...constructorMarkers];

  function getTile(x, y) {
    if (x < 0 || x > 2 || y < 0 || y > 2 || !Number.isInteger(x) || !Number.isInteger(y)) {
      return null;
    }
    return board[x + y * 3];
  }

  function getLines() {
    const rows = board.reduce((arr, tile, i) => {
      const rowIndex = Math.floor(i / 3);
      return [
        ...arr.slice(0, rowIndex),
        arr[rowIndex].concat(tile),
        ...arr.slice(rowIndex + 1),
      ];
    }, [[], [], []]);

    const columns = board.reduce((arr, tile, i) => {
      const columnIndex = i % 3;
      return [
        ...arr.slice(0, columnIndex),
        arr[columnIndex].concat(tile),
        ...arr.slice(columnIndex + 1),
      ];
    }, [[], [], []]);

    const diagonals = board.reduce((arr, tile, i) => {
      const rowIndex = Math.floor(i / 3);
      const columnIndex = i % 3;
      return [
        rowIndex === columnIndex ? arr[0].concat(tile) : arr[0],
        rowIndex + columnIndex === 2 ? arr[1].concat(tile) : arr[1],
      ];
    }, [[], []]);

    return [...rows, ...columns, ...diagonals];
  }

  return {
    setTile(x, y, marker) {
      if (getTile(x, y) === '') {
        board[x + y * 3] = marker;
      }
    },

    getAllTiles() {
      return [...board];
    },

    clear() {
      for (let i = 0; i < board.length; i += 1) {
        board[i] = '';
      }
    },

    getWinner() {
      let winner;
      const lines = getLines();
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
  };
}

function playerMixin(constructorName, constructorMarker) {
  let name = constructorName;
  let score = 0;
  const marker = constructorMarker;

  return Object.assign(this, {
    getName() {
      return name;
    },

    setName(setterName) {
      name = setterName;
    },

    getScore() {
      return score;
    },

    incrementScore() {
      score += 1;
    },

    getMarker() {
      return marker;
    },
  });
}

function Player(name, marker) {
  const isCpu = false;

  return playerMixin.call({
    isCpu() {
      return isCpu;
    },
  }, name, marker);
}

function Cpu(name, marker) {
  const isCpu = true;

  function evaluateMove(move, board, player, depth = 0) {
    const development = Board(board.getAllTiles());
    development.setTile(move.x, move.y, move.marker);

    const markers = {
      own: (player === 'self' && move.marker === 'X') || (player === 'opponent' && move.marker === 'O') ? 'X' : 'O',
      opponent: (player === 'self' && move.marker === 'X') || (player === 'opponent' && move.marker === 'O') ? 'O' : 'X',
    };

    const subsequentMoves = development.getFreeTiles();

    if (development.getWinner() === markers.own) {
      return depth === 0 ? 2 : 1;
    }
    if (development.getWinner() === markers.opponent) {
      return -1;
    }
    if (development.isFull()) {
      return 0;
    }

    if (player === 'self') {
      let victoryIsCertain = true;

      for (let i = 0; i < subsequentMoves.length; i += 1) {
        const subsequentMove = {
          x: subsequentMoves[i].x,
          y: subsequentMoves[i].y,
          marker: markers.opponent,
        };

        const outcome = evaluateMove(subsequentMove, development, 'opponent', depth + 1);

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

      for (let i = 0; i < subsequentMoves.length; i += 1) {
        const subsequentMove = {
          x: subsequentMoves[i].x,
          y: subsequentMoves[i].y,
          marker: markers.own,
        };

        const outcome = evaluateMove(subsequentMove, development, 'self', depth + 1);

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

  function randomizeChoice(moves) {
    return moves[Math.floor(Math.random() * moves.length)];
  }

  return playerMixin.call({
    isCpu() {
      return isCpu;
    },

    comeUpWithMove(board) {
      const possibleMoves = board.getFreeTiles()
        .reduce((arr, tile) => {
          const move = { x: tile.x, y: tile.y, marker: this.getMarker() };
          move.priority = evaluateMove(move, board, 'self');

          return arr.concat({ ...move });
        }, []);

      for (let priority = 2; priority >= -1; priority -= 1) {
        const bestMoves = possibleMoves.filter((move) => move.priority === priority);

        if (bestMoves.length > 0) {
          const chosenTile = randomizeChoice(bestMoves);
          return {
            x: chosenTile.x,
            y: chosenTile.y,
            marker: this.getMarker(),
          };
        }
      }

      return null;
    },
  }, name, marker);
}

const game = (function game() {
  const board = Board();

  const player = {
    one: Player('Player', 'X'),
    two: Cpu('CPU', 'O'),
  };

  let firstPlayer = Math.floor(Math.random() * 2) === 0 ? 'one' : 'two';
  let currentPlayer = firstPlayer;

  function decideWhosFirst() {
    return firstPlayer === 'one' ? 'two' : 'one';
  }

  function getNextPlayer() {
    return currentPlayer === 'one' ? 'two' : 'one';
  }

  return {
    getBoard() {
      return board.getAllTiles();
    },

    getScore() {
      return { playerOne: player.one.getScore(), playerTwo: player.two.getScore() };
    },

    getCurrentPlayer() {
      return currentPlayer;
    },

    waitingForClick() {
      return !player[currentPlayer].isCpu();
    },

    tileIsFree(x, y) {
      return board.tileIsFree(x, y);
    },

    playTurn(x, y) {
      if (
        !board.getWinner()
        && !board.isFull()
        && (
          (x === undefined && y === undefined)
          || board.tileIsFree(x, y)
        )
      ) {
        let move;

        const outcome = {
          winner: null,
          boardIsFull: false,
        };

        if (this.waitingForClick()) {
          move = { x, y, marker: player[currentPlayer].getMarker() };
        } else {
          move = player[currentPlayer].comeUpWithMove(board);
        }

        board.setTile(move.x, move.y, move.marker);

        if (board.getWinner()) {
          player[currentPlayer].incrementScore();
          outcome.winner = currentPlayer;
        }
        if (board.isFull()) {
          outcome.boardIsFull = true;
        }
        if (!board.getWinner() && !board.isFull()) {
          currentPlayer = getNextPlayer();
        }

        return outcome;
      }
      return null;
    },

    reset() {
      firstPlayer = decideWhosFirst();
      currentPlayer = firstPlayer;
      board.clear();
    },
  };
}());

(function view() {
  function updateBoard(boardState) {
    const boardView = document.querySelectorAll('.mark');
    for (let i = 0; i < boardView.length; i += 1) {
      boardView[i].textContent = boardState[i];
    }
  }

  function setTurnIndicator(player) {
    const players = {
      current: document.querySelector(`${player === 'one' ? '.player-one' : '.player-two'} .turn-indicator`),
      next: document.querySelector(`${player === 'one' ? '.player-two' : '.player-one'} .turn-indicator`),
    };

    players.current.classList.remove('hidden');
    players.next.classList.add('hidden');
  }

  function updateScore(score) {
    for (let i = 0; i < 2; i += 1) {
      const tallyMarks = [];

      const playerScore = {
        value: score[i === 0 ? 'playerOne' : 'playerTwo'],
        view: document.querySelector(`${i === 0 ? '.player-one' : '.player-two'} .score`),
      };

      for (let j = 0; j < Math.floor(playerScore.value / 5); j += 1) {
        const fiveStickTallyMark = document.createElement('img');
        fiveStickTallyMark.classList.add('tally-mark');
        fiveStickTallyMark.setAttribute('src', './icons/tally-mark-5.svg');
        fiveStickTallyMark.setAttribute('alt', '5 score units');

        tallyMarks.push(fiveStickTallyMark);
      }

      if (playerScore.value % 5 > 0) {
        const tallyMark = document.createElement('img');
        tallyMark.setAttribute('src', `./icons/tally-mark-${playerScore.value % 5}.svg`);
        tallyMark.classList.add('tally-mark');
        tallyMark.setAttribute('alt', `${playerScore.value % 5} score unit${playerScore.value % 5 > 1 ? 's' : ''}`);

        tallyMarks.push(tallyMark);
      }

      playerScore.view.replaceChildren(...tallyMarks);
    }
  }

  function refreshUI() {
    updateBoard(game.getBoard());
    updateScore(game.getScore());
    setTurnIndicator(game.getCurrentPlayer());
  }

  function handleClick(event) {
    function executeCpuRoutine() {
      if (!game.waitingForClick()) {
        const followingOutcome = game.playTurn();
        refreshUI();

        requestAnimationFrame(() => {
          if (followingOutcome.winner !== null || followingOutcome.boardIsFull) {
            game.reset();
            refreshUI();
          }

          requestAnimationFrame(() => {
            if (!game.waitingForClick()) {
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
    }

    if (!event.target.classList.contains('tile') && !event.target.classList.contains('mark')) {
      document.querySelector('.board').addEventListener('click', handleClick, { once: true });
      return;
    }

    const coordinates = {
      x: event.target.classList.contains('tile') ? +event.target.dataset.column : +event.target.parentNode.dataset.column,
      y: event.target.classList.contains('tile') ? +event.target.dataset.row : +event.target.parentNode.dataset.row,
    };

    if (!game.waitingForClick() || !game.tileIsFree(coordinates.x, coordinates.y)) {
      document.querySelector('.board').addEventListener('click', handleClick, { once: true });
      return;
    }

    const outcome = game.playTurn(coordinates.x, coordinates.y);
    refreshUI();

    requestAnimationFrame(() => {
      if (outcome.winner !== null || outcome.boardIsFull) {
        game.reset();
      }
      refreshUI();

      requestAnimationFrame(executeCpuRoutine);
    });
  }

  window.addEventListener('load', () => {
    if (!game.waitingForClick()) {
      game.playTurn();
    }
    refreshUI();
  });

  document.querySelector('.board').addEventListener('click', handleClick, { once: true });
}());
