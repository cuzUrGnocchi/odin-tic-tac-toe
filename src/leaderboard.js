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

  get entries() {
    return entries;
  },

  clear() {
    entries = [];
  },
};

export default leaderboard;
