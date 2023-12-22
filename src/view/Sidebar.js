import Time from '../model/Time.js';

import renderCountdownTimer from './CountdownTimer.js';

function renderSidebar() {
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');

  const goalTitle = document.createElement('h2');
  goalTitle.textContent = 'Goal';
  sidebar.appendChild(goalTitle);

  const goalDescription = document.createElement('p');
  goalDescription.textContent = 'Force a tie 10 times in a row in under 35 seconds';
  sidebar.appendChild(goalDescription);

  // const timerTitle = document.createElement('h2');
  // timerTitle.textContent = 'Time left';
  // sidebar.appendChild(timerTitle);

  // const timer = renderCountdownTimer(new Time({ seconds: 35 }));
  // sidebar.appendChild(timer);

  // const streakTitle = document.createElement('h2');
  // streakTitle.textContent = 'Streak';
  // sidebar.appendChild(streakTitle);

  // const streakCount = document.createElement('p');
  // streakCount.textContent = '0 / 10';
  // sidebar.appendChild(streakCount);

  return sidebar;
}

export default renderSidebar;
