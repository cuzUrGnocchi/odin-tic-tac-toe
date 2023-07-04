const ai = (function ai() {
  function evaluateMove(move, board, player, depth = 0) {
    const development = board.theorizeMove(move.x, move.y, move.marker);
    const ownMarker = (player === 'self' && move.marker === 'X') || (player === 'opponent' && move.marker === 'O') ? 'X' : 'O';
    const opponentMarker = (player === 'self' && move.marker === 'X') || (player === 'opponent' && move.marker === 'O') ? 'O' : 'X';
    const subsequentMoves = development.getFreeTiles();

    if (development.getWinner() === ownMarker) {
      return depth === 0 ? 2 : 1;
    }
    if (development.getWinner() === opponentMarker) {
      return -1;
    }
    if (development.isFull()) {
      return 0;
    }

    if (player === 'self') {
      let victoryIsCertain = true;

      for (let i = 0; i < subsequentMoves.length; i += 1) {
        const subsequentMove = {
          x: subsequentMoves[i].x,
          y: subsequentMoves[i].y,
          marker: opponentMarker,
        };
        const outcome = evaluateMove(subsequentMove, development, 'opponent', depth + 1);

        if (outcome === -1) {
          return -1;
        }
        if (outcome === 0) {
          victoryIsCertain = false;
        }
      }

      return victoryIsCertain ? 1 : 0;
    }

    if (player === 'opponent') {
      let defeatIsCertain = true;

      for (let i = 0; i < subsequentMoves.length; i += 1) {
        const subsequentMove = {
          x: subsequentMoves[i].x,
          y: subsequentMoves[i].y,
          marker: ownMarker,
        };
        const outcome = evaluateMove(subsequentMove, development, 'self', depth + 1);

        if (outcome === 1) {
          return 1;
        }
        if (outcome === 0) {
          defeatIsCertain = false;
        }
      }

      return defeatIsCertain ? -1 : 0;
    }

    return null;
  }

  function randomizeChoice(moves) {
    return moves[Math.floor(Math.random() * moves.length)];
  }

  return {
    comeUpWithMove(board, marker) {
      const possibleMoves = board.getFreeTiles()
        .reduce((arr, tile) => {
          const move = { x: tile.x, y: tile.y, marker };
          move.priority = evaluateMove(move, board, 'self');

          return arr.concat({ ...move });
        }, []);

      for (let priority = 2; priority >= -1; priority -= 1) {
        const bestMoves = possibleMoves.filter((move) => move.priority === priority);

        if (bestMoves.length > 0) {
          const chosenTile = randomizeChoice(bestMoves);
          return {
            x: chosenTile.x,
            y: chosenTile.y,
            marker,
          };
        }
      }

      return null;
    },
  };
}());

export default ai;
