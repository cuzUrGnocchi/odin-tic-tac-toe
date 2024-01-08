import Board from '../model/Board.js';

function renderBoard() {
  const container = document.createElement('div');
  container.classList.add('board');

  const update = (board) => {
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }

    const renderTile = (mark) => {
      const tile = document.createElement('div');
      tile.classList.add('tile');
      tile.textContent = (mark === 'X' || mark === 'O') ? mark : '';
      return tile;
    };

    for (let x = 0; x < 3; x += 1) {
      for (let y = 0; y < 3; y += 1) {
        const tile = renderTile(board.getTile(x, y));
        container.appendChild(tile);

        tile.addEventListener('click', () => {
          if (tile.textContent === 'X' || tile.textContent === 'O') return;

          container.dispatchEvent(new CustomEvent('tileClicked', {
            detail: { x, y },
          }));
        });
      }
    }
  };

  update(new Board());

  return Object.assign(container, { update });
}

export default renderBoard;
