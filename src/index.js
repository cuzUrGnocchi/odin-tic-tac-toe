import GameState from './GameState.js';
import leaderboard from './leaderboard.js';
import stopwatch from './stopwatch.js';

let gameState;

function updateTimer(timeElapsed) {
  const timer = document.querySelector('.stopwatch');
  timer.textContent = timeElapsed;
}

function updateBoard() {
  const board = document.querySelectorAll('.mark');

  for (let i = 0; i < 9; i += 1) {
    board[i].textContent = gameState.board.getTile(i % 3, Math.floor(i / 3));
  }
}

function updateStreakCount() {
  const streak = document.querySelector('.streak');
  streak.textContent = `Streak: ${gameState.tieCount}`;
}

function updateLeaderboard() {
  function createEntry(entry) {
    const row = document.createElement('tr');
    const position = document.createElement('td');
    const name = document.createElement('td');
    const time = document.createElement('td');

    row.appendChild(position);
    row.appendChild(name);
    row.appendChild(time);

    position.classList.add('position');
    name.classList.add('name');
    time.classList.add('time');

    const seconds = entry.time.seconds < 10 ? `0${entry.time.seconds}` : entry.time.seconds;
    const centiSeconds = entry.time.centiSeconds < 10 ? `0${entry.time.centiSeconds}` : entry.time.centiSeconds;

    position.textContent = entry.position;
    name.textContent = entry.name;
    time.textContent = `${entry.time.minutes}:${seconds}:${centiSeconds}`;

    return row;
  }

  const board = document.querySelector('.leaderboard');
  const container = document.createElement('div');
  const title = document.createElement('h2');
  const table = document.createElement('table');

  if (board !== null) {
    board.remove();
  }

  container.appendChild(title);
  container.appendChild(table);
  for (let i = 0; i < 10 && i < leaderboard.entries.length; i += 1) {
    table.appendChild(createEntry(leaderboard.entries[i]));
  }

  container.classList.add('leaderboard');

  title.textContent = 'Leaderboard';

  document.querySelector('.content > div').appendChild(container);
}

let handleClick;

function declareDefeat() {
  document.querySelector('.game-start').disabled = false;
  document.querySelector('.nickname').disabled = false;
  stopwatch.stop();
}

function declareVictory() {
  const entry = {
    name: document.querySelector('.nickname').value,
    time: stopwatch.stop(),
  };

  leaderboard.addEntries(entry);
  updateLeaderboard();

  document.querySelector('.game-start').disabled = false;
  document.querySelector('.nickname').disabled = false;
}

function checkWinner() {
  if (gameState.board.winner || gameState.board.isFull) {
    updateStreakCount();
    if (gameState.getScore('Cpu') === 1) {
      declareDefeat();
    } else if (gameState.tieCount === 10) {
      declareVictory();
    } else {
      gameState = gameState.reset();
    }
    updateBoard();
  }
}

const executeCpuRoutine = () => {
  if (gameState.players[gameState.playerIndex].isCpu) {
    gameState = gameState.playTurn();
    updateBoard();

    requestAnimationFrame(() => {
      checkWinner();

      requestAnimationFrame(() => {
        if (gameState.players[gameState.playerIndex].isCpu) {
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

  if (gameState.players[gameState.playerIndex].isCpu || gameState.board.getTile(coordinates.x, coordinates.y) !== '') {
    document.querySelector('.board').addEventListener('click', handleClick, { once: true });
    return;
  }

  gameState = gameState.playTurn(coordinates.x, coordinates.y);
  updateBoard();

  requestAnimationFrame(() => {
    checkWinner();

    requestAnimationFrame(executeCpuRoutine);
  });
};

document.querySelector('.game-start').addEventListener('click', () => {
  gameState = new GameState();

  if (gameState.players[gameState.playerIndex].isCpu) {
    gameState = gameState.playTurn();
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
