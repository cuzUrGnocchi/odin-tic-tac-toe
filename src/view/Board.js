function renderTile(mark) {
  const tile = document.createElement('div');
  tile.classList.add('tile');
  tile.textContent = (mark === 'X' || mark === 'O') ? mark : '';
  return tile;
}

function renderBoard(board) {
  const container = document.createElement('div');
  container.classList.add('board');

  for (let x = 0; x < 3; x += 1) {
    for (let y = 0; y < 3; y += 1) {
      const tile = renderTile(board.getTile(x, y));
      container.appendChild(tile);

      tile.addEventListener('click', () => {
        container.dispatchEvent(new CustomEvent('tileClicked', {
          detail: { x, y },
        }));
      });
    }
  }

  return container;
}

export default renderBoard;
