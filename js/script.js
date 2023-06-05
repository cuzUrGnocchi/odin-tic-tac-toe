function Board(constructorMarkers = ['', '', '', '', '', '', '', '', '']) {
  const board = [
    constructorMarkers[0], constructorMarkers[1], constructorMarkers[2],
    constructorMarkers[3], constructorMarkers[4], constructorMarkers[5],
    constructorMarkers[6], constructorMarkers[7], constructorMarkers[8],
  ];

  function getMarker(x, y) {
    if (x < 0 && x > 2 && y < 0 && y > 2) {
      return undefined;
    }
    return board[x + y * 3];
  }

  function getLines() {
    const rows = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],
    ];
    const columns = [
      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],
    ];
    const diagonals = [
      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];

    return [...rows, ...columns, ...diagonals];
  }

  return {
    setMarker(x, y, marker) {
      if (getMarker(x, y) === '') {
        board[x + y * 3] = marker;
      }
    },

    getAllTiles() {
      return [...board];
    },

    setAllMarkers(markers) {
      if (markers.length === board.length) {
        for (let i = 0; i < board.length; i += 1) {
          board[i] = markers[i];
        }
      }
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
  };
}

function playerMixin(constructorName, constructorMarker) {
  let name = constructorName;
  let score = 0;
  const marker = constructorMarker;

  return Object.assign(this, {
    get name() {
      return name;
    },

    set name(setterName) {
      name = setterName;
    },

    getScore() {
      return score;
    },

    incrementScore() {
      score += 1;
    },

    get marker() {
      return marker;
    },
  });
}

function Player(name, marker) {
  const isCpu = false;

  return playerMixin.call({
    get isCpu() {
      return isCpu;
    },
  }, name, marker);
}

function Cpu(name, marker) {
  const isCpu = true;

  function judgeMove(move, board, player, depth = 0) {
    const development = Board(board.getAllTiles());
    development.setMarker(move.x, move.y, move.marker);
    const ownMarker = (player === 'self' && move.marker === 'X') || (player === 'opponent' && move.marker === 'O') ? 'X' : 'O';
    const opponentMarker = ownMarker === 'X' ? 'O' : 'X';
    const subsequentMoves = development.getFreeTiles();

    if (development.getWinner() === ownMarker) {
      return depth === 0 ? 2 : 1;
    }
    if (development.getWinner(development) === opponentMarker) {
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
          marker: opponentMarker,
        };

        subsequentMove.outcome = judgeMove(subsequentMove, development, 'opponent', depth + 1);

        if (subsequentMove.outcome === -1) {
          return -1;
        }
        if (subsequentMove.outcome === 0) {
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
          marker: ownMarker,
        };

        subsequentMove.outcome = judgeMove(subsequentMove, development, 'self', depth + 1);

        if (subsequentMove.outcome === 1) {
          return 1;
        }
        if (subsequentMove.outcome === 0) {
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
    get isCpu() {
      return isCpu;
    },

    chooseAMove(board) {
      const possibleMoves = board.getFreeTiles()
        .reduce((arr, tile) => {
          const move = { x: tile.x, y: tile.y, marker: this.marker };

          move.priority = judgeMove(move, board, 'self');

          return arr.concat({ ...move });
        }, []);

      for (let priority = 2; priority >= -1; priority -= 1) {
        const bestMoves = possibleMoves.filter((move) => move.priority === priority);

        if (bestMoves.length > 0) {
          const chosenTile = randomizeChoice(bestMoves);
          return {
            x: chosenTile.x,
            y: chosenTile.y,
            marker: this.marker,
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
    get board() {
      return board.getAllTiles();
    },

    get score() {
      return { playerOne: player.one.getScore(), playerTwo: player.two.getScore() };
    },

    get currentPlayer() {
      return currentPlayer;
    },

    waitingForMove() {
      return !player[currentPlayer].isCpu;
    },

    playTurn(x, y) {
      if (!board.getWinner() && !board.isFull()) {
        let move;
        const outcome = {
          winner: null,
          boardIsFull: false,
        };

        if (this.waitingForMove()) {
          move = { x, y, marker: player[currentPlayer].marker };
        } else {
          move = player[currentPlayer].chooseAMove(board);
        }

        board.setMarker(move.x, move.y, move.marker);

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
  function updateBoard(board) {
    const boardView = document.querySelectorAll('.mark');
    for (let i = 0; i < boardView.length; i += 1) {
      boardView[i].textContent = board[i];
    }
  }

  function setTurnIndicator(player) {
    const currentPlayer = document.querySelector(`${player === 'one' ? '.player-one' : '.player-two'} .turn-indicator`);
    const nextPlayer = document.querySelector(`${player === 'one' ? '.player-two' : '.player-one'} .turn-indicator`);

    currentPlayer.classList.remove('hidden');
    nextPlayer.classList.add('hidden');
  }

  function removeTurnIndicators() {
    const turnIndicators = document.querySelectorAll('.turn-indicator');
    turnIndicators.forEach((indicator) => {
      indicator.classList.add('hidden');
    });
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

  function executeCpuRoutine() {
    if (!game.waitingForMove()) {
      const followingOutcome = game.playTurn();
      updateBoard(game.board);
      removeTurnIndicators();
      requestAnimationFrame(() => {
        if (followingOutcome.winner !== null || followingOutcome.boardIsFull) {
          game.reset();
          updateBoard(game.board);
          updateScore(game.score);
        }
        if (!game.waitingForMove()) {
          requestAnimationFrame(executeCpuRoutine);
        } else {
          setTurnIndicator(game.currentPlayer);
        }
      });
    }
  }

  function handleClick(event) {
    if (game.waitingForMove()) {
      if (event.target.classList.contains('tile')) {
        const coordinates = {
          x: +event.target.dataset.column,
          y: +event.target.dataset.row,
        };

        requestAnimationFrame(() => {
          const outcome = game.playTurn(coordinates.x, coordinates.y);
          updateBoard(game.board);
          removeTurnIndicators();

          requestAnimationFrame(() => {
            if (outcome.winner !== null || outcome.boardIsFull) {
              game.reset();
              updateBoard(game.board);
              updateScore(game.score);
            }
            if (!game.waitingForMove()) {
              setTurnIndicator(game.currentPlayer);
            }
            requestAnimationFrame(executeCpuRoutine);
          });
        });
      }

      document.querySelector('.board').addEventListener('click', handleClick, { once: true });
    }
  }

  window.addEventListener('load', () => {
    if (!game.waitingForMove()) {
      game.playTurn();
      updateBoard(game.board);
    }
    setTurnIndicator(game.currentPlayer);
  });

  document.querySelector('.board').addEventListener('click', handleClick, { once: true });
}());
