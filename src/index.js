import Board from './model/Board.js';

import renderBoard from './view/Board.js';
import renderSidebar from './view/Sidebar.js';

import './assets/styles.css';

document.body.appendChild(renderBoard(new Board()));
document.body.appendChild(renderSidebar());
