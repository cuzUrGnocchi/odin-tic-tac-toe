const Player = (startingName, startingMarker) => {
  let name = startingName;
  const marker = startingMarker;
  let score = 0;

  return {
    getName() {
      return name;
    },

    setName(newName) {
      name = newName;
    },

    getMarker() {
      return marker;
    },

    getScore() {
      return score;
    },

    incrementScore() {
      score += 1;
    },

    isCpu() {
      return false;
    },
  };
};

export default Player;
