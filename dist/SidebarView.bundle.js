"use strict";
(self["webpackChunkodin_tic_tac_toe"] = self["webpackChunkodin_tic_tac_toe"] || []).push([["SidebarView"],{

/***/ "./src/model/Time.js":
/*!***************************!*\
  !*** ./src/model/Time.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
    return new Time({ milliseconds: this.#amount - sumTime(timeToSubtract) });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Time);


/***/ }),

/***/ "./src/view/CountdownTimer.js":
/*!************************************!*\
  !*** ./src/view/CountdownTimer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model_Time_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Time.js */ "./src/model/Time.js");


function renderCountdownTimer(initialTime) {
  let intervalId = null;
  let timeRemaining = initialTime;

  const timer = document.createElement('p');
  timer.textContent = timeRemaining.getValue({ getSeconds: true }).seconds;
  timer.classList.add('timer');

  return Object.assign(timer, {
    start() {
      if (intervalId !== null) return;

      intervalId = setInterval(() => {
        if (timeRemaining.getValue({ getSeconds: true }).seconds === 0) {
          this.stop();
          this.dispatchEvent(new CustomEvent('timeUp'));
        } else {
          timeRemaining = timeRemaining.decrement({ seconds: 1 });
          this.textContent = timeRemaining.getValue({ getSeconds: true }).seconds;
        }
      }, 1000);
    },

    stop() {
      this.textContent = timeRemaining.getValue({ getSeconds: true }).seconds;
      clearInterval(intervalId);
      intervalId = null;
    },

    reset() {
      timeRemaining = new _model_Time_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
      this.stop();
    },
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCountdownTimer);


/***/ }),

/***/ "./src/view/Sidebar.js":
/*!*****************************!*\
  !*** ./src/view/Sidebar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model_Time_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Time.js */ "./src/model/Time.js");
/* harmony import */ var _CountdownTimer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CountdownTimer.js */ "./src/view/CountdownTimer.js");




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

    const timer = (0,_CountdownTimer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(new _model_Time_js__WEBPACK_IMPORTED_MODULE_0__["default"]({ seconds: 35 }));
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderSidebar);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/view/Sidebar.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lkZWJhclZpZXcuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0NBQWdDO0FBQ2hDO0FBQ0E7O0FBRUEsdUJBQXVCLDJEQUEyRDtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBLGlCQUFpQixVQUFVO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEMsb0JBQW9CO0FBQ2xFLE9BQU8sSUFBSTtBQUNYOztBQUVBLDBCQUEwQjtBQUMxQixzQkFBc0IsaURBQWlEO0FBQ3ZFOztBQUVBLCtCQUErQjtBQUMvQixzQkFBc0Isc0RBQXNEO0FBQzVFO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDekZnQjs7QUFFcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDLGtCQUFrQjtBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsa0JBQWtCO0FBQ3ZEO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysb0RBQW9ELFlBQVk7QUFDaEUsc0RBQXNELGtCQUFrQjtBQUN4RTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0Esa0RBQWtELGtCQUFrQjtBQUNwRTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDBCQUEwQixzREFBSTtBQUM5QjtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsb0JBQW9CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBOztBQUVtQjs7QUFFdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQiw4REFBb0IsS0FBSyxzREFBSSxHQUFHLGFBQWE7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsd0JBQXdCO0FBQzdDLEtBQUs7O0FBRUw7QUFDQSxnQkFBZ0IseUNBQXlDO0FBQ3pELEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsTUFBTTtBQUM5RCxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBLGlFQUFlLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdGljLXRhYy10b2UvLi9zcmMvbW9kZWwvVGltZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRpYy10YWMtdG9lLy4vc3JjL3ZpZXcvQ291bnRkb3duVGltZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10aWMtdGFjLXRvZS8uL3NyYy92aWV3L1NpZGViYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc3VtVGltZSh0aW1lID0ge30pIHtcbiAgY29uc3Qge1xuICAgIGRheXMgPSAwLFxuICAgIGhvdXJzID0gMCxcbiAgICBtaW51dGVzID0gMCxcbiAgICBzZWNvbmRzID0gMCxcbiAgICBjZW50aXNlY29uZHMgPSAwLFxuICAgIG1pbGxpc2Vjb25kcyA9IDAsXG4gIH0gPSB0aW1lO1xuXG4gIHJldHVybiBkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMFxuICAgICsgaG91cnMgKiA2MCAqIDYwICogMTAwMFxuICAgICsgbWludXRlcyAqIDYwICogMTAwMFxuICAgICsgc2Vjb25kcyAqIDEwMDBcbiAgICArIGNlbnRpc2Vjb25kcyAqIDEwXG4gICAgKyBtaWxsaXNlY29uZHM7XG59XG5cbmNsYXNzIFRpbWUge1xuICAjYW1vdW50O1xuXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZXMgPSB7fSkge1xuICAgIHRoaXMuI2Ftb3VudCA9IHN1bVRpbWUoaW5pdGlhbFZhbHVlcyk7XG4gIH1cblxuICBnZXRWYWx1ZShvcHRpb25zID0geyBnZXRNaW51dGVzOiB0cnVlLCBnZXRTZWNvbmRzOiB0cnVlLCBnZXRDZW50aXNlY29uZHM6IHRydWUgfSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGdldERheXMgPSBmYWxzZSxcbiAgICAgIGdldEhvdXJzID0gZmFsc2UsXG4gICAgICBnZXRNaW51dGVzID0gZmFsc2UsXG4gICAgICBnZXRTZWNvbmRzID0gZmFsc2UsXG4gICAgICBnZXRDZW50aXNlY29uZHMgPSBmYWxzZSxcbiAgICAgIGdldE1pbGxpc2Vjb25kcyA9IGZhbHNlLFxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgY29uc3QgdGltZVVuaXRzID0gW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnZGF5cycsXG4gICAgICAgIHNlbGVjdGVkOiBnZXREYXlzLFxuICAgICAgICBhYnNvbHV0ZVZhbHVlOiAxMDAwICogNjAgKiA2MCAqIDI0LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2hvdXJzJyxcbiAgICAgICAgc2VsZWN0ZWQ6IGdldEhvdXJzLFxuICAgICAgICBhYnNvbHV0ZVZhbHVlOiAxMDAwICogNjAgKiA2MCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdtaW51dGVzJyxcbiAgICAgICAgc2VsZWN0ZWQ6IGdldE1pbnV0ZXMsXG4gICAgICAgIGFic29sdXRlVmFsdWU6IDEwMDAgKiA2MCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdzZWNvbmRzJyxcbiAgICAgICAgc2VsZWN0ZWQ6IGdldFNlY29uZHMsXG4gICAgICAgIGFic29sdXRlVmFsdWU6IDEwMDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnY2VudGlzZWNvbmRzJyxcbiAgICAgICAgc2VsZWN0ZWQ6IGdldENlbnRpc2Vjb25kcyxcbiAgICAgICAgYWJzb2x1dGVWYWx1ZTogMTAwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ21pbGxpc2Vjb25kcycsXG4gICAgICAgIHNlbGVjdGVkOiBnZXRNaWxsaXNlY29uZHMsXG4gICAgICAgIGFic29sdXRlVmFsdWU6IDEsXG4gICAgICB9LFxuICAgIF07XG5cbiAgICBsZXQgcmVtYWluZGVyID0gdGhpcy4jYW1vdW50O1xuXG4gICAgcmV0dXJuIHRpbWVVbml0c1xuICAgICAgLmZpbHRlcigoeyBzZWxlY3RlZCB9KSA9PiBzZWxlY3RlZClcbiAgICAgIC5yZWR1Y2UoKGFycmFuZ2VkVmFsdWUsIHVuaXQpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBNYXRoLmZsb29yKHJlbWFpbmRlciAvIHVuaXQuYWJzb2x1dGVWYWx1ZSk7XG4gICAgICAgIHJlbWFpbmRlciAtPSB2YWx1ZTtcblxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihhcnJhbmdlZFZhbHVlLCB7IFt1bml0Lm5hbWVdOiB2YWx1ZSB9KTtcbiAgICAgIH0sIHt9KTtcbiAgfVxuXG4gIGluY3JlbWVudCh0aW1lVG9BZGQgPSB7fSkge1xuICAgIHJldHVybiBuZXcgVGltZSh7IG1pbGxpc2Vjb25kczogdGhpcy4jYW1vdW50ICsgc3VtVGltZSh0aW1lVG9BZGQpIH0pO1xuICB9XG5cbiAgZGVjcmVtZW50KHRpbWVUb1N1YnRyYWN0ID0ge30pIHtcbiAgICByZXR1cm4gbmV3IFRpbWUoeyBtaWxsaXNlY29uZHM6IHRoaXMuI2Ftb3VudCAtIHN1bVRpbWUodGltZVRvU3VidHJhY3QpIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWU7XG4iLCJpbXBvcnQgVGltZSBmcm9tICcuLi9tb2RlbC9UaW1lLmpzJztcblxuZnVuY3Rpb24gcmVuZGVyQ291bnRkb3duVGltZXIoaW5pdGlhbFRpbWUpIHtcbiAgbGV0IGludGVydmFsSWQgPSBudWxsO1xuICBsZXQgdGltZVJlbWFpbmluZyA9IGluaXRpYWxUaW1lO1xuXG4gIGNvbnN0IHRpbWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0aW1lci50ZXh0Q29udGVudCA9IHRpbWVSZW1haW5pbmcuZ2V0VmFsdWUoeyBnZXRTZWNvbmRzOiB0cnVlIH0pLnNlY29uZHM7XG4gIHRpbWVyLmNsYXNzTGlzdC5hZGQoJ3RpbWVyJyk7XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGltZXIsIHtcbiAgICBzdGFydCgpIHtcbiAgICAgIGlmIChpbnRlcnZhbElkICE9PSBudWxsKSByZXR1cm47XG5cbiAgICAgIGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmICh0aW1lUmVtYWluaW5nLmdldFZhbHVlKHsgZ2V0U2Vjb25kczogdHJ1ZSB9KS5zZWNvbmRzID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgndGltZVVwJykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpbWVSZW1haW5pbmcgPSB0aW1lUmVtYWluaW5nLmRlY3JlbWVudCh7IHNlY29uZHM6IDEgfSk7XG4gICAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9IHRpbWVSZW1haW5pbmcuZ2V0VmFsdWUoeyBnZXRTZWNvbmRzOiB0cnVlIH0pLnNlY29uZHM7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMDApO1xuICAgIH0sXG5cbiAgICBzdG9wKCkge1xuICAgICAgdGhpcy50ZXh0Q29udGVudCA9IHRpbWVSZW1haW5pbmcuZ2V0VmFsdWUoeyBnZXRTZWNvbmRzOiB0cnVlIH0pLnNlY29uZHM7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgaW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgfSxcblxuICAgIHJlc2V0KCkge1xuICAgICAgdGltZVJlbWFpbmluZyA9IG5ldyBUaW1lKCk7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQ291bnRkb3duVGltZXI7XG4iLCJpbXBvcnQgVGltZSBmcm9tICcuLi9tb2RlbC9UaW1lLmpzJztcblxuaW1wb3J0IHJlbmRlckNvdW50ZG93blRpbWVyIGZyb20gJy4vQ291bnRkb3duVGltZXIuanMnO1xuXG5mdW5jdGlvbiByZW5kZXJTaWRlYmFyKCkge1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuXG4gIGNvbnN0IHNoaWZ0VG9QcmVHYW1lID0gKHByZUdhbWVNZXNzYWdlLCBidXR0b25UZXh0LCBkZWZlYXRlZCwgY2xpY2tIYW5kbGVyKSA9PiB7XG4gICAgaWYgKHNpZGViYXIucXVlcnlTZWxlY3RvcigndGltZXInKSkge1xuICAgICAgc2lkZWJhci5xdWVyeVNlbGVjdG9yKCd0aW1lcicpLnN0b3AoKTtcbiAgICB9XG5cbiAgICBzaWRlYmFyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdpbi1nYW1lJyk7XG5cbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgncHJlLWdhbWUtbWVzc2FnZScpO1xuICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBwcmVHYW1lTWVzc2FnZTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuXG4gICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdGFydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdGFydC1idXR0b24nKTtcbiAgICBzdGFydEJ1dHRvbi50ZXh0Q29udGVudCA9IGJ1dHRvblRleHQ7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XG5cbiAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsaWNrSGFuZGxlcih7XG4gICAgICBjdXJyZW50U3RhdGU6IGRlZmVhdGVkID8gJ2RlZmVhdCcgOiAncHJlR2FtZScsXG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IGNsaWNrSGFuZGxlciA9IChkZXRhaWwgPSB7fSkgPT4ge1xuICAgIGlmIChkZXRhaWwuY3VycmVudFN0YXRlID09PSAnaW5HYW1lJykge1xuICAgICAgc2hpZnRUb1ByZUdhbWUoJ0ZvcmNlIGEgdGllIDEwIHRpbWVzIGluIGEgcm93IGluIHVuZGVyIDM1IHNlY29uZHMnLCAnU3RhcnQnLCBmYWxzZSwgY2xpY2tIYW5kbGVyKTtcbiAgICAgIHNpZGViYXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3JldGlyZUJ1dHRvbkNsaWNrZWQnKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2lkZWJhci5pbm5lckhUTUwgPSAnJztcblxuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnaW4tZ2FtZScpO1xuXG4gICAgY29uc3QgdGltZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aW1lckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0aW1lci1jb250YWluZXInKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHRpbWVyQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHRpbWVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpbWVyVGl0bGUuY2xhc3NMaXN0LmFkZCgndGltZXItdGl0bGUnKTtcbiAgICB0aW1lclRpdGxlLnRleHRDb250ZW50ID0gJ1RpbWUnO1xuICAgIHRpbWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVyVGl0bGUpO1xuXG4gICAgY29uc3QgdGltZXIgPSByZW5kZXJDb3VudGRvd25UaW1lcihuZXcgVGltZSh7IHNlY29uZHM6IDM1IH0pKTtcbiAgICB0aW1lckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lcik7XG5cbiAgICB0aW1lci5zdGFydCgpO1xuICAgIHRpbWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWVVcCcsICgpID0+IHtcbiAgICAgIHNpZGViYXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3RpbWVVcCcpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHN0cmVha0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0cmVha0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdHJlYWstY29udGFpbmVyJyk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChzdHJlYWtDb250YWluZXIpO1xuXG4gICAgY29uc3Qgc3RyZWFrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHN0cmVha1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3N0cmVhay10aXRsZScpO1xuICAgIHN0cmVha1RpdGxlLnRleHRDb250ZW50ID0gJ1N0cmVhayc7XG4gICAgc3RyZWFrQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0cmVha1RpdGxlKTtcblxuICAgIGNvbnN0IHN0cmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzdHJlYWsuY2xhc3NMaXN0LmFkZCgnc3RyZWFrJyk7XG4gICAgc3RyZWFrLnRleHRDb250ZW50ID0gJzAvMTAnO1xuICAgIHN0cmVha0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdHJlYWspO1xuXG4gICAgY29uc3QgcmV0aXJlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmV0aXJlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JldGlyZS1idXR0b24nKTtcbiAgICByZXRpcmVCdXR0b24udGV4dENvbnRlbnQgPSAnUmV0aXJlJztcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHJldGlyZUJ1dHRvbik7XG5cbiAgICByZXRpcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjbGlja0hhbmRsZXIoeyBjdXJyZW50U3RhdGU6ICdpbkdhbWUnIH0pO1xuICAgIH0pO1xuXG4gICAgc2lkZWJhci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhcnRCdXR0b25DbGlja2VkJywge1xuICAgICAgZGV0YWlsOiB7IHJlc2V0OiBkZXRhaWwuY3VycmVudFN0YXRlID09PSAnZGVmZWF0JyB9LFxuICAgIH0pKTtcbiAgfTtcblxuICBzaGlmdFRvUHJlR2FtZSgnRm9yY2UgYSB0aWUgMTAgdGltZXMgaW4gYSByb3cgaW4gdW5kZXIgMzUgc2Vjb25kcycsICdTdGFydCcsIGZhbHNlLCBjbGlja0hhbmRsZXIpO1xuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHNpZGViYXIsIHtcbiAgICBzZXRUaWVTdHJlYWsoY291bnQpIHtcbiAgICAgIGlmICghc2lkZWJhci5xdWVyeVNlbGVjdG9yKCcuc3RyZWFrJykpIHJldHVybjtcbiAgICAgIHNpZGViYXIucXVlcnlTZWxlY3RvcignLnN0cmVhaycpLnRleHRDb250ZW50ID0gYCR7Y291bnR9LzEwYDtcbiAgICB9LFxuXG4gICAgZGVjbGFyZURlZmVhdCgpIHtcbiAgICAgIHNoaWZ0VG9QcmVHYW1lKCdEZWZlYXQnLCAnVHJ5IGFnYWluJywgdHJ1ZSwgY2xpY2tIYW5kbGVyKTtcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyU2lkZWJhcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==