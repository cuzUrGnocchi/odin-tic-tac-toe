class Player {
  #name;

  #marker;

  #score;

  constructor(name, marker) {
    this.#name = name;
    this.#marker = marker;
    this.#score = 0;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get marker() {
    return this.#marker;
  }

  get score() {
    return this.#score;
  }

  incrementScore() {
    this.#score += 1;
  }
}

export default Player;
