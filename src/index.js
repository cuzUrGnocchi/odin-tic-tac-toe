import Board from './model/Board.js';

import renderBoard from './view/Board.js';
import renderSidebar from './view/Sidebar.js';

import './assets/styles.css';

const sidebar = renderSidebar();

document.body.appendChild(renderBoard(new Board()));
document.body.appendChild(sidebar);

sidebar.addEventListener('startButtonClicked', () => {
  document.body.classList.add('in-game');
  document.body.classList.remove('pre-game');
});

sidebar.addEventListener('retireButtonClicked', () => {
  document.body.classList.add('pre-game');
  document.body.classList.remove('in-game');
});
