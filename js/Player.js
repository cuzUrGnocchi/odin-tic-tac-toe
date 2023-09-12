class Player {
  #name;

  #marker;

  constructor(name, marker) {
    if (typeof name !== 'string') {
      throw TypeError('Name provided is not a string');
    }
    if (marker !== 'X' && marker !== 'O') {
      throw Error('Marker can only be either X or O');
    }
    this.#name = name;
    this.#marker = marker;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    if (typeof name === 'string') {
      throw TypeError('Name provided is not a string');
    }
    this.#name = name;
  }

  get marker() {
    return this.#marker;
  }
}

export default Player;
