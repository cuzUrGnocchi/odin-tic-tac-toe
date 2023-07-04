const Player = (startingName, marker, isCpu) => {
  let name = startingName;
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
      return isCpu;
    },
  };
};

export default Player;
