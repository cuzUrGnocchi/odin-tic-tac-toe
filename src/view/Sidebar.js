import Time from '../model/Time.js';

import renderCountdownTimer from './CountdownTimer.js';

function renderSidebar() {
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');

  const removeChildren = () => {
    while (sidebar.firstChild) {
      sidebar.removeChild(sidebar.lastChild);
    }
  };

  const stop = (clickHandler) => {
    removeChildren();

    sidebar.classList.add('pre-game');
    sidebar.classList.remove('in-game');

    const goal = document.createElement('p');
    goal.classList.add('goal');
    goal.textContent = 'Force a tie 10 times in a row in under 35 seconds';
    sidebar.appendChild(goal);

    const startButton = document.createElement('button');
    startButton.classList.add('start-button');
    startButton.textContent = 'Start';
    sidebar.appendChild(startButton);

    startButton.addEventListener('click', () => clickHandler({ gameInProgress: false }));
  };

  const clickHandler = (details = {}) => {
    removeChildren();

    if (details.gameInProgress) {
      stop(clickHandler);

      return;
    }

    sidebar.classList.add('in-game');
    sidebar.classList.remove('pre-game');

    const streakTitle = document.createElement('h2');
    streakTitle.classList.add('streak-title');
    streakTitle.textContent = 'Streak';
    sidebar.appendChild(streakTitle);

    const streak = document.createElement('p');
    streak.classList.add('streak');
    streak.textContent = '0/10';
    sidebar.appendChild(streak);

    const timerTitle = document.createElement('h2');
    timerTitle.classList.add('timer-title');
    timerTitle.textContent = 'Time remaining';
    sidebar.appendChild(timerTitle);

    const retireButton = document.createElement('button');
    retireButton.classList.add('retire-button');
    retireButton.textContent = 'Retire';
    sidebar.appendChild(retireButton);

    const timer = renderCountdownTimer(new Time({ seconds: 35 }));
    sidebar.appendChild(timer);

    retireButton.addEventListener('click', () => {
      clickHandler({ gameInProgress: true });
    });
  };

  stop(clickHandler);

  return sidebar;
}

export default renderSidebar;
