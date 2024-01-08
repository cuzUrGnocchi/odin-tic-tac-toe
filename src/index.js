import Game from './model/Game.js';

import renderBoard from './view/Board.js';
import renderSidebar from './view/Sidebar.js';

import './assets/styles.css';

let showVictoryScreen;

function showGame() {
  document.body.classList.remove(...document.body.classList);
  document.body.innerHTML = '';

  let game = new Game();

  document.body.classList.add('game');

  const boardView = renderBoard();
  const sidebar = renderSidebar();

  document.body.appendChild(boardView);
  document.body.appendChild(sidebar);

  function declareDefeat() {
    document.body.classList.add('defeat');
    document.body.classList.remove('in-game');

    sidebar.declareDefeat();
  }

  function checkWinner() {
    if (game.winner || game.boardIsFull) {
      sidebar.setTieStreak(game.tieCount);
      if (game.getScore('Cpu') === 1) {
        declareDefeat();
      } else if (game.tieCount === 10) {
        document.body.classList.add('fade-out');
        setTimeout(showVictoryScreen, 500);
      } else {
        game = game.reset();
      }
      boardView.update(game.board);
    }
  }

  function executeCpuRoutine() {
    if (game.currentPlayer !== null && game.currentPlayer.isCpu) {
      game = game.playTurn();
      boardView.update(game.board);

      requestAnimationFrame(() => {
        checkWinner();

        requestAnimationFrame(() => {
          if (game.currentPlayer !== null && game.currentPlayer.isCpu) {
            executeCpuRoutine();
          } else {
            boardView.update(game.board);
          }
        });
      });
    }
  }

  function handleBoardClick(event) {
    game = game.playTurn(event.detail.x, event.detail.y);
    boardView.update(game.board);

    requestAnimationFrame(() => {
      checkWinner();

      requestAnimationFrame(executeCpuRoutine);
    });
  }

  sidebar.addEventListener('startButtonClicked', (e) => {
    if (e.detail.reset) {
      document.body.classList.add('reset');
      document.body.classList.remove('defeat');
    } else {
      document.body.classList.add('in-game');
      document.body.classList.remove('pre-game');
    }

    game = new Game();
    boardView.update(game.board);

    boardView.addEventListener('tileClicked', handleBoardClick);
  });

  sidebar.addEventListener('retireButtonClicked', () => {
    document.body.classList.add('pre-game');
    document.body.classList.remove('in-game');
    document.body.classList.remove('reset');

    boardView.removeEventListener('tileClicked', handleBoardClick);
  });

  sidebar.addEventListener('timeUp', () => {
    sidebar.declareDefeat();
  });
}

showVictoryScreen = () => {
  document.body.classList.remove(...document.body.classList);
  document.body.innerHTML = '';

  document.body.classList.add('victory-screen');

  const message = document.createElement('h1');
  message.classList.add('victory-message');
  message.textContent = 'Victory!';
  document.body.appendChild(message);

  const backButton = document.createElement('button');
  backButton.textContent = 'Back';
  document.body.appendChild(backButton);

  backButton.addEventListener('click', showGame);
};

showGame();

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    document.body.classList.add('fade-out');
    setTimeout(showVictoryScreen, 500);
  }
});
