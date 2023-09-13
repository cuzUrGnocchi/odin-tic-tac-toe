function Player(name_, marker_) {
  if (typeof name_ !== 'string') {
    throw TypeError('Name provided is not a string');
  }
  if (marker_ !== 'X' && marker_ !== 'O') {
    throw Error('Marker can only be either X or O');
  }

  let privateName = name_;
  let privateMarker = marker_;

  return {
    getName() {
      return privateName;
    },

    setName(name) {
      if (typeof name === 'string') {
        throw TypeError('Name provided is not a string');
      }

      privateName = name;
    },

    getMarker() {
      return privateMarker;
    },

    setMarker(marker) {
      if (marker !== 'X' && marker !== 'O') {
        throw Error('Marker can only be either X or O');
      }

      privateMarker = marker;
    },

    isCpu() {
      return false;
    },
  };
}

export default Player;
