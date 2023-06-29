import game from './game.js';

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
    setTurnIndicator(game.getPlayerIndex());
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
