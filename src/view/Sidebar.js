import Time from '../model/Time.js';

import renderCountdownTimer from './CountdownTimer.js';

function renderSidebar() {
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');

  let children = {};

  const shiftToPreGame = (preGameMessage, buttonText, defeated, clickHandler) => {
    if (children.timer) {
      children.timer.stop();
    }

    for (let i = 0; i < Object.values(children).length; i += 1) {
      Object.values(children)[i].remove();
    }

    sidebar.classList.remove('in-game');

    const message = document.createElement('p');
    message.classList.add('goal');
    message.textContent = preGameMessage;
    sidebar.appendChild(message);

    const startButton = document.createElement('button');
    startButton.classList.add('start-button');
    startButton.textContent = buttonText;
    sidebar.appendChild(startButton);

    children = { message, startButton };

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

    for (let i = 0; i < Object.values(children).length; i += 1) {
      Object.values(children)[i].remove();
    }

    sidebar.classList.add('in-game');

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
    timerTitle.textContent = 'Time';
    sidebar.appendChild(timerTitle);

    const retireButton = document.createElement('button');
    retireButton.classList.add('retire-button');
    retireButton.textContent = 'Retire';
    sidebar.appendChild(retireButton);

    const timer = renderCountdownTimer(new Time({ seconds: 35 }));
    sidebar.appendChild(timer);

    timer.start();
    timer.addEventListener('timeUp', () => {
      sidebar.dispatchEvent(new CustomEvent('timeUp'));
    });

    children = {
      streakTitle, streak, timerTitle, retireButton, timer,
    };

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
      if (!children.streak) return;
      children.streak.textContent = count;
    },

    declareDefeat() {
      shiftToPreGame('Defeat', 'Try again', true, clickHandler);
    },
  });
}

export default renderSidebar;
