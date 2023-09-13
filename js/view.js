import game from './game.js';

function updateBoard() {
  const board = document.querySelectorAll('.mark');

  for (let i = 0; i < 9; i += 1) {
    board[i].textContent = game.getBoard()[i];
  }
}

function updateNameplate() {
  for (let i = 0; i < 2; i += 1) {
    const nameplate = document.querySelector(`.${i === 0 ? 'player-one' : 'player-two'} .player-name`);

    nameplate.textContent = game.getPlayer(i).getName();
  }
}

function updateTurnIndicator() {
  for (let i = 0; i < 2; i += 1) {
    const turnIndicator = document.querySelector(`.${i === 0 ? 'player-one' : 'player-two'} .turn-indicator`);

    if (i === game.getCurrentPlayer()) {
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

    for (let j = 0; j < Math.floor(game.getScore(i) / 5); j += 1) {
      const fiveTallies = document.createElement('img');
      fiveTallies.classList.add('tally-mark');
      fiveTallies.setAttribute('src', './icons/tally-mark-5.svg');
      fiveTallies.setAttribute('alt', '5 score units');
      tallyMarks.push(fiveTallies);
    }

    if (game.getScore(i) % 5 > 0) {
      const singleTally = document.createElement('img');
      singleTally.setAttribute('src', `./icons/tally-mark-${game.getScore(i) % 5}.svg`);
      singleTally.classList.add('tally-mark');
      singleTally.setAttribute('alt', `${game.getScore(i) % 5} score unit${game.getScore(i) % 5 > 1 ? 's' : ''}`);
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
  if (game.getPlayer(game.getCurrentPlayer()).isCpu()) {
    game.playTurn();
    refreshUI();

    requestAnimationFrame(() => {
      if (game.getWinner() || game.getBoard().every((t) => t !== '')) {
        game.reset();
        refreshUI();
      }

      requestAnimationFrame(() => {
        if (game.getPlayer(game.getCurrentPlayer()).isCpu()) {
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

  if (
    game.getPlayer(game.getCurrentPlayer()).isCpu()
    || game.getTile(coordinates.x, coordinates.y) !== ''
  ) {
    document.querySelector('.board').addEventListener('click', handleClick, { once: true });
    return;
  }

  game.playTurn(coordinates.x, coordinates.y);
  refreshUI();

  requestAnimationFrame(() => {
    if (game.getWinner() || game.getBoard().every((t) => t !== '')) {
      game.reset();
    }
    refreshUI();

    requestAnimationFrame(executeCpuRoutine);
  });
};

window.addEventListener('load', () => {
  updateNameplate();

  if (game.getPlayer(game.getCurrentPlayer()).isCpu()) {
    game.playTurn();
  }

  refreshUI();
});

document.querySelector('.board').addEventListener('click', handleClick, { once: true });
