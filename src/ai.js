function chooseMove(moves) {
  for (let priority = 2; priority >= -1; priority -= 1) {
    const bestMoves = moves.filter((move) => move.priority === priority);

    if (bestMoves.length > 0) {
      const chosenMove = bestMoves[Math.floor(Math.random() * bestMoves.length)];

      return {
        x: chosenMove.x,
        y: chosenMove.y,
        marker: chosenMove.marker,
      };
    }
  }

  return null;
}

const ai = {
  evaluateMove(move, board, self, depth = 0) {
    const opponent = self === 'X' ? 'O' : 'X';
    const development = board.setTile(move.x, move.y, move.marker);

    if (development.winner === self) {
      return depth === 0 ? 2 : 1;
    }
    if (development.winner === opponent) {
      return -1;
    }
    if (development.isFull) {
      return 0;
    }

    const outcomes = [];

    for (let i = 0; i < development.freeTiles.length; i += 1) {
      const { x, y } = development.freeTiles[i];
      const nextMove = { x, y, marker: move.marker === 'X' ? 'O' : 'X' };
      const outcome = this.evaluateMove(nextMove, development, self, depth + 1);

      if (move.marker === opponent && outcome === 1) {
        return 1;
      }
      if (move.marker === self && outcome === -1) {
        return -1;
      }

      outcomes.push(outcome);
    }

    if (outcomes.includes(0)) {
      return 0;
    }

    return move.marker === opponent ? -1 : 1;
  },

  comeUpWithMove(board, self) {
    const possibleMoves = [];

    for (let i = 0; i < board.freeTiles.length; i += 1) {
      const { x, y } = board.freeTiles[i];

      possibleMoves.push({
        x,
        y,
        marker: self,
        priority: this.evaluateMove({ x, y, marker: self }, board, self),
      });
    }

    return chooseMove(possibleMoves);
  },
};

export default ai;
