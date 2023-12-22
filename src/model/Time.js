function sumTime(time = {}) {
  const {
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
    centiseconds = 0,
    milliseconds = 0,
  } = time;

  return days * 24 * 60 * 60 * 1000
    + hours * 60 * 60 * 1000
    + minutes * 60 * 1000
    + seconds * 1000
    + centiseconds * 10
    + milliseconds;
}

class Time {
  #amount;

  constructor(initialValues = {}) {
    this.#amount = sumTime(initialValues);
  }

  getValue(options = { getMinutes: true, getSeconds: true, getCentiseconds: true }) {
    const {
      getDays = false,
      getHours = false,
      getMinutes = false,
      getSeconds = false,
      getCentiseconds = false,
      getMilliseconds = false,
    } = options;

    const timeUnits = [
      {
        name: 'days',
        selected: getDays,
        absoluteValue: 1000 * 60 * 60 * 24,
      },
      {
        name: 'hours',
        selected: getHours,
        absoluteValue: 1000 * 60 * 60,
      },
      {
        name: 'minutes',
        selected: getMinutes,
        absoluteValue: 1000 * 60,
      },
      {
        name: 'seconds',
        selected: getSeconds,
        absoluteValue: 1000,
      },
      {
        name: 'centiseconds',
        selected: getCentiseconds,
        absoluteValue: 100,
      },
      {
        name: 'milliseconds',
        selected: getMilliseconds,
        absoluteValue: 1,
      },
    ];

    let remainder = this.#amount;

    return timeUnits
      .filter(({ selected }) => selected)
      .reduce((arrangedValue, unit) => {
        const value = Math.floor(remainder / unit.absoluteValue);
        remainder -= value;

        return Object.assign(arrangedValue, { [unit.name]: value });
      }, {});
  }

  increment(timeToAdd = {}) {
    return new Time({ milliseconds: this.#amount + sumTime(timeToAdd) });
  }

  decrement(timeToSubtract = {}) {
    return new Time({ milliseconds: this.amount - sumTime(timeToSubtract) });
  }
}

export default Time;
