let entries = [
  {
    position: '1',
    name: 'WorldMangoTree',
    time: { minutes: 0, seconds: 41, centiSeconds: 13 },
  },
  {
    position: '2',
    name: '__xxX_Kromo_xx',
    time: { minutes: 0, seconds: 49, centiSeconds: 57 },
  },
  {
    position: '3',
    name: 'LLLLL',
    time: { minutes: 1, seconds: 4, centiSeconds: 52 },
  },
  {
    position: '4',
    name: 'HomingSlingshot12',
    time: { minutes: 1, seconds: 1, centiSeconds: 24 },
  },
];

const leaderboard = {
  addEntries(...args) {
    function compareTimes(a, b) {
      if (a.time.minutes !== b.time.minutes) return a.time.minutes - b.time.minutes;
      if (a.time.seconds !== b.time.seconds) return a.time.seconds - b.time.seconds;
      if (a.time.centiSeconds !== b.time.centiSeconds) {
        return a.time.centiSeconds - b.time.centiSeconds;
      }

      return 0;
    }

    entries = args
      .reduce((acc, entry) => (acc.concat(entry)), entries)
      .sort(compareTimes)
      .map((entry, i) => ({
        ...entry,
        position: i + 1,
      }));
  },

  clear() {
    entries = [];
  },

  generateDom() {
    function createEntry(entry) {
      const row = document.createElement('tr');
      const position = document.createElement('td');
      const name = document.createElement('td');
      const time = document.createElement('td');

      row.appendChild(position);
      row.appendChild(name);
      row.appendChild(time);

      position.classList.add('position');
      name.classList.add('name');
      time.classList.add('time');

      const seconds = entry.time.seconds < 10 ? `0${entry.time.seconds}` : entry.time.seconds;
      const centiSeconds = entry.time.centiSeconds < 10 ? `0${entry.time.centiSeconds}` : entry.time.centiSeconds;

      position.textContent = entry.position;
      name.textContent = entry.name;
      time.textContent = `${entry.time.minutes}:${seconds}:${centiSeconds}`;

      return row;
    }

    const container = document.createElement('div');
    const title = document.createElement('h2');
    const table = document.createElement('table');

    container.appendChild(title);
    container.appendChild(table);
    for (let i = 0; i < 10 && i < entries.length; i += 1) {
      table.appendChild(createEntry(entries[i]));
    }

    container.classList.add('leaderboard');

    title.textContent = 'Leaderboard';

    return container;
  },
};

export default leaderboard;
