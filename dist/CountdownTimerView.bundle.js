"use strict";
(self["webpackChunkodin_tic_tac_toe"] = self["webpackChunkodin_tic_tac_toe"] || []).push([["CountdownTimerView"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/view/CountdownTimer.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ291bnRkb3duVGltZXJWaWV3LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdDQUFnQztBQUNoQztBQUNBOztBQUVBLHVCQUF1QiwyREFBMkQ7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQSxpQkFBaUIsVUFBVTtBQUMzQjtBQUNBO0FBQ0E7O0FBRUEsOENBQThDLG9CQUFvQjtBQUNsRSxPQUFPLElBQUk7QUFDWDs7QUFFQSwwQkFBMEI7QUFDMUIsc0JBQXNCLGlEQUFpRDtBQUN2RTs7QUFFQSwrQkFBK0I7QUFDL0Isc0JBQXNCLHNEQUFzRDtBQUM1RTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGZ0I7O0FBRXBDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxrQkFBa0I7QUFDakU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLGtCQUFrQjtBQUN2RDtBQUNBO0FBQ0EsVUFBVTtBQUNWLG9EQUFvRCxZQUFZO0FBQ2hFLHNEQUFzRCxrQkFBa0I7QUFDeEU7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBLGtEQUFrRCxrQkFBa0I7QUFDcEU7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwwQkFBMEIsc0RBQUk7QUFDOUI7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBLGlFQUFlLG9CQUFvQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10aWMtdGFjLXRvZS8uL3NyYy9tb2RlbC9UaW1lLmpzIiwid2VicGFjazovL29kaW4tdGljLXRhYy10b2UvLi9zcmMvdmlldy9Db3VudGRvd25UaW1lci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzdW1UaW1lKHRpbWUgPSB7fSkge1xuICBjb25zdCB7XG4gICAgZGF5cyA9IDAsXG4gICAgaG91cnMgPSAwLFxuICAgIG1pbnV0ZXMgPSAwLFxuICAgIHNlY29uZHMgPSAwLFxuICAgIGNlbnRpc2Vjb25kcyA9IDAsXG4gICAgbWlsbGlzZWNvbmRzID0gMCxcbiAgfSA9IHRpbWU7XG5cbiAgcmV0dXJuIGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwXG4gICAgKyBob3VycyAqIDYwICogNjAgKiAxMDAwXG4gICAgKyBtaW51dGVzICogNjAgKiAxMDAwXG4gICAgKyBzZWNvbmRzICogMTAwMFxuICAgICsgY2VudGlzZWNvbmRzICogMTBcbiAgICArIG1pbGxpc2Vjb25kcztcbn1cblxuY2xhc3MgVGltZSB7XG4gICNhbW91bnQ7XG5cbiAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlcyA9IHt9KSB7XG4gICAgdGhpcy4jYW1vdW50ID0gc3VtVGltZShpbml0aWFsVmFsdWVzKTtcbiAgfVxuXG4gIGdldFZhbHVlKG9wdGlvbnMgPSB7IGdldE1pbnV0ZXM6IHRydWUsIGdldFNlY29uZHM6IHRydWUsIGdldENlbnRpc2Vjb25kczogdHJ1ZSB9KSB7XG4gICAgY29uc3Qge1xuICAgICAgZ2V0RGF5cyA9IGZhbHNlLFxuICAgICAgZ2V0SG91cnMgPSBmYWxzZSxcbiAgICAgIGdldE1pbnV0ZXMgPSBmYWxzZSxcbiAgICAgIGdldFNlY29uZHMgPSBmYWxzZSxcbiAgICAgIGdldENlbnRpc2Vjb25kcyA9IGZhbHNlLFxuICAgICAgZ2V0TWlsbGlzZWNvbmRzID0gZmFsc2UsXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBjb25zdCB0aW1lVW5pdHMgPSBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdkYXlzJyxcbiAgICAgICAgc2VsZWN0ZWQ6IGdldERheXMsXG4gICAgICAgIGFic29sdXRlVmFsdWU6IDEwMDAgKiA2MCAqIDYwICogMjQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnaG91cnMnLFxuICAgICAgICBzZWxlY3RlZDogZ2V0SG91cnMsXG4gICAgICAgIGFic29sdXRlVmFsdWU6IDEwMDAgKiA2MCAqIDYwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ21pbnV0ZXMnLFxuICAgICAgICBzZWxlY3RlZDogZ2V0TWludXRlcyxcbiAgICAgICAgYWJzb2x1dGVWYWx1ZTogMTAwMCAqIDYwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3NlY29uZHMnLFxuICAgICAgICBzZWxlY3RlZDogZ2V0U2Vjb25kcyxcbiAgICAgICAgYWJzb2x1dGVWYWx1ZTogMTAwMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdjZW50aXNlY29uZHMnLFxuICAgICAgICBzZWxlY3RlZDogZ2V0Q2VudGlzZWNvbmRzLFxuICAgICAgICBhYnNvbHV0ZVZhbHVlOiAxMDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnbWlsbGlzZWNvbmRzJyxcbiAgICAgICAgc2VsZWN0ZWQ6IGdldE1pbGxpc2Vjb25kcyxcbiAgICAgICAgYWJzb2x1dGVWYWx1ZTogMSxcbiAgICAgIH0sXG4gICAgXTtcblxuICAgIGxldCByZW1haW5kZXIgPSB0aGlzLiNhbW91bnQ7XG5cbiAgICByZXR1cm4gdGltZVVuaXRzXG4gICAgICAuZmlsdGVyKCh7IHNlbGVjdGVkIH0pID0+IHNlbGVjdGVkKVxuICAgICAgLnJlZHVjZSgoYXJyYW5nZWRWYWx1ZSwgdW5pdCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IE1hdGguZmxvb3IocmVtYWluZGVyIC8gdW5pdC5hYnNvbHV0ZVZhbHVlKTtcbiAgICAgICAgcmVtYWluZGVyIC09IHZhbHVlO1xuXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGFycmFuZ2VkVmFsdWUsIHsgW3VuaXQubmFtZV06IHZhbHVlIH0pO1xuICAgICAgfSwge30pO1xuICB9XG5cbiAgaW5jcmVtZW50KHRpbWVUb0FkZCA9IHt9KSB7XG4gICAgcmV0dXJuIG5ldyBUaW1lKHsgbWlsbGlzZWNvbmRzOiB0aGlzLiNhbW91bnQgKyBzdW1UaW1lKHRpbWVUb0FkZCkgfSk7XG4gIH1cblxuICBkZWNyZW1lbnQodGltZVRvU3VidHJhY3QgPSB7fSkge1xuICAgIHJldHVybiBuZXcgVGltZSh7IG1pbGxpc2Vjb25kczogdGhpcy4jYW1vdW50IC0gc3VtVGltZSh0aW1lVG9TdWJ0cmFjdCkgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZTtcbiIsImltcG9ydCBUaW1lIGZyb20gJy4uL21vZGVsL1RpbWUuanMnO1xuXG5mdW5jdGlvbiByZW5kZXJDb3VudGRvd25UaW1lcihpbml0aWFsVGltZSkge1xuICBsZXQgaW50ZXJ2YWxJZCA9IG51bGw7XG4gIGxldCB0aW1lUmVtYWluaW5nID0gaW5pdGlhbFRpbWU7XG5cbiAgY29uc3QgdGltZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRpbWVyLnRleHRDb250ZW50ID0gdGltZVJlbWFpbmluZy5nZXRWYWx1ZSh7IGdldFNlY29uZHM6IHRydWUgfSkuc2Vjb25kcztcbiAgdGltZXIuY2xhc3NMaXN0LmFkZCgndGltZXInKTtcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aW1lciwge1xuICAgIHN0YXJ0KCkge1xuICAgICAgaWYgKGludGVydmFsSWQgIT09IG51bGwpIHJldHVybjtcblxuICAgICAgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKHRpbWVSZW1haW5pbmcuZ2V0VmFsdWUoeyBnZXRTZWNvbmRzOiB0cnVlIH0pLnNlY29uZHMgPT09IDApIHtcbiAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd0aW1lVXAnKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGltZVJlbWFpbmluZyA9IHRpbWVSZW1haW5pbmcuZGVjcmVtZW50KHsgc2Vjb25kczogMSB9KTtcbiAgICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gdGltZVJlbWFpbmluZy5nZXRWYWx1ZSh7IGdldFNlY29uZHM6IHRydWUgfSkuc2Vjb25kcztcbiAgICAgICAgfVxuICAgICAgfSwgMTAwMCk7XG4gICAgfSxcblxuICAgIHN0b3AoKSB7XG4gICAgICB0aGlzLnRleHRDb250ZW50ID0gdGltZVJlbWFpbmluZy5nZXRWYWx1ZSh7IGdldFNlY29uZHM6IHRydWUgfSkuc2Vjb25kcztcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICBpbnRlcnZhbElkID0gbnVsbDtcbiAgICB9LFxuXG4gICAgcmVzZXQoKSB7XG4gICAgICB0aW1lUmVtYWluaW5nID0gbmV3IFRpbWUoKTtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDb3VudGRvd25UaW1lcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==