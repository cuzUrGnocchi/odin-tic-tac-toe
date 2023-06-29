import Board from './Board.js';
import Player from './Player.js';
import Cpu from './Cpu.js';

const game = (function game() {
  const board = new Board();

  const player = {
    one: new Player('Player', 'X'),
    two: new Cpu('CPU', 'O'),
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
      return { playerOne: player.one.score, playerTwo: player.two.score };
    },

    getCurrentPlayer() {
      return currentPlayer;
    },

    waitingForClick() {
      return !(player[currentPlayer] instanceof Cpu);
    },

    tileIsFree(x, y) {
      return board.tileIsFree(x, y);
    },

    playTurn(x, y) {
      if (board.getWinner() || board.isFull()) {
        throw new Error('Game is already over');
      }

      if (this.waitingForClick()) {
        if (!Number.isInteger(x) || !Number.isInteger(y)) {
          throw new TypeError('Coordinates must be integers');
        }
        if (x < 0 || x > 2 || y < 0 || y > 2) {
          throw new RangeError('Coordinates must be between 0 and 2');
        }
        if (!board.tileIsFree(x, y)) {
          throw new Error('Tile is occupied');
        }
      }

      const move = this.waitingForClick()
        ? { x, y, marker: player[currentPlayer].marker }
        : player[currentPlayer].comeUpWithMove(board);

      board.setTile(move.x, move.y, move.marker);

      const outcome = {
        winner: board.getWinner() ? currentPlayer : null,
        boardIsFull: board.isFull(),
      };

      if (outcome.winner) {
        player[currentPlayer].incrementScore();
      }

      if (!board.getWinner() && !board.isFull()) {
        currentPlayer = getNextPlayer();
      }

      return outcome;
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
