import Game from './model/Game.js';
import Board from './model/Board.js';

import renderBoard from './view/Board.js';
import renderSidebar from './view/Sidebar.js';

import './assets/styles.css';

let game = new Game();
let board = renderBoard(new Board());
const sidebar = renderSidebar();

document.body.appendChild(board);
document.body.appendChild(sidebar);

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

function handleBoardClick(event) {
  game = game.playTurn(event.detail.x, event.detail.y);

  const oldBoard = board;
  board = renderBoard(game.board);
  board.addEventListener('tileClicked', handleBoardClick);
  oldBoard.replaceWith(board);

  requestAnimationFrame(() => {
    checkWinner();

    requestAnimationFrame(executeCpuRoutine);
  });
}

sidebar.addEventListener('startButtonClicked', () => {
  document.body.classList.add('in-game');
  document.body.classList.remove('pre-game');

  board.addEventListener('tileClicked', handleBoardClick);
});

sidebar.addEventListener('retireButtonClicked', () => {
  document.body.classList.add('pre-game');
  document.body.classList.remove('in-game');

  board.removeEventListener('tileClicked', handleBoardClick);
});
