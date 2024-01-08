import Time from '../model/Time.js';

import renderCountdownTimer from './CountdownTimer.js';

function renderSidebar() {
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');

  const shiftToPreGame = (preGameMessage, buttonText, defeated, clickHandler) => {
    if (sidebar.querySelector('timer')) {
      sidebar.querySelector('timer').stop();
    }

    sidebar.innerHTML = '';

    sidebar.classList.remove('in-game');

    const message = document.createElement('p');
    message.classList.add('pre-game-message');
    message.textContent = preGameMessage;
    sidebar.appendChild(message);

    const startButton = document.createElement('button');
    startButton.classList.add('start-button');
    startButton.textContent = buttonText;
    sidebar.appendChild(startButton);

    startButton.addEventListener('click', () => clickHandler({
      currentState: defeated ? 'defeat' : 'preGame',
    }));
  };

  const clickHandler = (detail = {}) => {
    if (detail.currentState === 'inGame') {
      shiftToPreGame('Force a tie 10 times in a row in under 35 seconds', 'Start', false, clickHandler);
      sidebar.dispatchEvent(new CustomEvent('retireButtonClicked'));
      return;
    }

    sidebar.innerHTML = '';

    sidebar.classList.add('in-game');

    const timerContainer = document.createElement('div');
    timerContainer.classList.add('timer-container');
    sidebar.appendChild(timerContainer);

    const timerTitle = document.createElement('h2');
    timerTitle.classList.add('timer-title');
    timerTitle.textContent = 'Time';
    timerContainer.appendChild(timerTitle);

    const timer = renderCountdownTimer(new Time({ seconds: 35 }));
    timerContainer.appendChild(timer);

    timer.start();
    timer.addEventListener('timeUp', () => {
      sidebar.dispatchEvent(new CustomEvent('timeUp'));
    });

    const streakContainer = document.createElement('div');
    streakContainer.classList.add('streak-container');
    sidebar.appendChild(streakContainer);

    const streakTitle = document.createElement('h2');
    streakTitle.classList.add('streak-title');
    streakTitle.textContent = 'Streak';
    streakContainer.appendChild(streakTitle);

    const streak = document.createElement('p');
    streak.classList.add('streak');
    streak.textContent = '0/10';
    streakContainer.appendChild(streak);

    const retireButton = document.createElement('button');
    retireButton.classList.add('retire-button');
    retireButton.textContent = 'Retire';
    sidebar.appendChild(retireButton);

    retireButton.addEventListener('click', () => {
      clickHandler({ currentState: 'inGame' });
    });

    sidebar.dispatchEvent(new CustomEvent('startButtonClicked', {
      detail: { reset: detail.currentState === 'defeat' },
    }));
  };

  shiftToPreGame('Force a tie 10 times in a row in under 35 seconds', 'Start', false, clickHandler);

  return Object.assign(sidebar, {
    setTieStreak(count) {
      if (!sidebar.querySelector('.streak')) return;
      sidebar.querySelector('.streak').textContent = `${count}/10`;
    },

    declareDefeat() {
      shiftToPreGame('Defeat', 'Try again', true, clickHandler);
    },
  });
}

export default renderSidebar;
