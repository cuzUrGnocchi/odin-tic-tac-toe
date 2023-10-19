let intervalId;
let centiSeconds = 0;
let seconds = 0;
let minutes = 0;

function increment(listener) {
  centiSeconds += 1;

  if (centiSeconds === 100) {
    centiSeconds = 0;
    seconds += 1;

    if (seconds === 60) {
      seconds = 0;
      minutes += 1;
    }
  }

  listener(minutes === 0 ? `${seconds}:${centiSeconds}` : `${minutes}:${seconds}:${centiSeconds}`);
}

const stopwatch = {
  start(listener) {
    if (intervalId !== undefined) {
      this.stop();
    }
    intervalId = setInterval(increment, 10, listener);
  },

  stop() {
    clearInterval(intervalId);

    const timeElapsed = { minutes, seconds, centiSeconds };
    centiSeconds = 0;
    seconds = 0;
    minutes = 0;

    return timeElapsed;
  },
};

export default stopwatch;
