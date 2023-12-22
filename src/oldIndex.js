import Game from './model/Game.js';
import stopwatch from './model/stopwatch.js';
import renderBoard from './view/Board.js';

let game = new Game();

const view = {
  board: 
};

function updateBoard() {
  board = renderBoard();

  for (let i = 0; i < 9; i += 1) {
    board[i].textContent = game.board.getTile(i % 3, Math.floor(i / 3));
  }
}

function updateTimer(timeElapsed) {
  const timer = document.querySelector('.stopwatch');
  timer.textContent = timeElapsed;
}

function updateStreakCount() {
  const streak = document.querySelector('.streak');
  streak.textContent = `Streak: ${game.tieCount}`;
}

let handleClick;

function declareDefeat() {
  document.querySelector('.game-start').disabled = false;
  document.querySelector('.nickname').disabled = false;
  stopwatch.stop();
}

function declareVictory() {
  document.querySelector('.game-start').disabled = false;
  document.querySelector('.nickname').disabled = false;
}

function checkWinner() {
  if (game.board.winner || game.board.isFull) {
    updateStreakCount();
    if (game.getScore('Cpu') === 1) {
      declareDefeat();
    } else if (game.tieCount === 10) {
      declareVictory();
    } else {
      game = game.reset();
    }
    updateBoard();
  }
}

const executeCpuRoutine = () => {
  if (game.players[game.playerIndex].isCpu) {
    game = game.playTurn();
    updateBoard();

    requestAnimationFrame(() => {
      checkWinner();

      requestAnimationFrame(() => {
        if (game.players[game.playerIndex].isCpu) {
          executeCpuRoutine();
        } else {
          updateBoard();

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

  game = game.playTurn(coordinates.x, coordinates.y);
  updateBoard();

  requestAnimationFrame(() => {
    checkWinner();

    requestAnimationFrame(executeCpuRoutine);
  });
};

document.querySelector('.game-start').addEventListener('click', () => {
  game = new Game();

  if (game.players[game.playerIndex].isCpu) {
    game = game.playTurn();
  }

  document.querySelector('.board').addEventListener('click', handleClick, { once: true });
  stopwatch.start(updateTimer);

  updateBoard();
  updateStreakCount();

  document.querySelector('.game-start').disabled = true;
  document.querySelector('.nickname').disabled = true;
});

window.addEventListener('load', () => {
  updateLeaderboard();
});
