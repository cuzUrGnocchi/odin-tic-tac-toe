"use strict";
(self["webpackChunkodin_tic_tac_toe"] = self["webpackChunkodin_tic_tac_toe"] || []).push([["Time"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/model/Time.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQ0FBZ0M7QUFDaEM7QUFDQTs7QUFFQSx1QkFBdUIsMkRBQTJEO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBO0FBQ0EsaUJBQWlCLFVBQVU7QUFDM0I7QUFDQTtBQUNBOztBQUVBLDhDQUE4QyxvQkFBb0I7QUFDbEUsT0FBTyxJQUFJO0FBQ1g7O0FBRUEsMEJBQTBCO0FBQzFCLHNCQUFzQixpREFBaUQ7QUFDdkU7O0FBRUEsK0JBQStCO0FBQy9CLHNCQUFzQixzREFBc0Q7QUFDNUU7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRpYy10YWMtdG9lLy4vc3JjL21vZGVsL1RpbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc3VtVGltZSh0aW1lID0ge30pIHtcbiAgY29uc3Qge1xuICAgIGRheXMgPSAwLFxuICAgIGhvdXJzID0gMCxcbiAgICBtaW51dGVzID0gMCxcbiAgICBzZWNvbmRzID0gMCxcbiAgICBjZW50aXNlY29uZHMgPSAwLFxuICAgIG1pbGxpc2Vjb25kcyA9IDAsXG4gIH0gPSB0aW1lO1xuXG4gIHJldHVybiBkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMFxuICAgICsgaG91cnMgKiA2MCAqIDYwICogMTAwMFxuICAgICsgbWludXRlcyAqIDYwICogMTAwMFxuICAgICsgc2Vjb25kcyAqIDEwMDBcbiAgICArIGNlbnRpc2Vjb25kcyAqIDEwXG4gICAgKyBtaWxsaXNlY29uZHM7XG59XG5cbmNsYXNzIFRpbWUge1xuICAjYW1vdW50O1xuXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZXMgPSB7fSkge1xuICAgIHRoaXMuI2Ftb3VudCA9IHN1bVRpbWUoaW5pdGlhbFZhbHVlcyk7XG4gIH1cblxuICBnZXRWYWx1ZShvcHRpb25zID0geyBnZXRNaW51dGVzOiB0cnVlLCBnZXRTZWNvbmRzOiB0cnVlLCBnZXRDZW50aXNlY29uZHM6IHRydWUgfSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGdldERheXMgPSBmYWxzZSxcbiAgICAgIGdldEhvdXJzID0gZmFsc2UsXG4gICAgICBnZXRNaW51dGVzID0gZmFsc2UsXG4gICAgICBnZXRTZWNvbmRzID0gZmFsc2UsXG4gICAgICBnZXRDZW50aXNlY29uZHMgPSBmYWxzZSxcbiAgICAgIGdldE1pbGxpc2Vjb25kcyA9IGZhbHNlLFxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgY29uc3QgdGltZVVuaXRzID0gW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnZGF5cycsXG4gICAgICAgIHNlbGVjdGVkOiBnZXREYXlzLFxuICAgICAgICBhYnNvbHV0ZVZhbHVlOiAxMDAwICogNjAgKiA2MCAqIDI0LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2hvdXJzJyxcbiAgICAgICAgc2VsZWN0ZWQ6IGdldEhvdXJzLFxuICAgICAgICBhYnNvbHV0ZVZhbHVlOiAxMDAwICogNjAgKiA2MCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdtaW51dGVzJyxcbiAgICAgICAgc2VsZWN0ZWQ6IGdldE1pbnV0ZXMsXG4gICAgICAgIGFic29sdXRlVmFsdWU6IDEwMDAgKiA2MCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdzZWNvbmRzJyxcbiAgICAgICAgc2VsZWN0ZWQ6IGdldFNlY29uZHMsXG4gICAgICAgIGFic29sdXRlVmFsdWU6IDEwMDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnY2VudGlzZWNvbmRzJyxcbiAgICAgICAgc2VsZWN0ZWQ6IGdldENlbnRpc2Vjb25kcyxcbiAgICAgICAgYWJzb2x1dGVWYWx1ZTogMTAwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ21pbGxpc2Vjb25kcycsXG4gICAgICAgIHNlbGVjdGVkOiBnZXRNaWxsaXNlY29uZHMsXG4gICAgICAgIGFic29sdXRlVmFsdWU6IDEsXG4gICAgICB9LFxuICAgIF07XG5cbiAgICBsZXQgcmVtYWluZGVyID0gdGhpcy4jYW1vdW50O1xuXG4gICAgcmV0dXJuIHRpbWVVbml0c1xuICAgICAgLmZpbHRlcigoeyBzZWxlY3RlZCB9KSA9PiBzZWxlY3RlZClcbiAgICAgIC5yZWR1Y2UoKGFycmFuZ2VkVmFsdWUsIHVuaXQpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBNYXRoLmZsb29yKHJlbWFpbmRlciAvIHVuaXQuYWJzb2x1dGVWYWx1ZSk7XG4gICAgICAgIHJlbWFpbmRlciAtPSB2YWx1ZTtcblxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihhcnJhbmdlZFZhbHVlLCB7IFt1bml0Lm5hbWVdOiB2YWx1ZSB9KTtcbiAgICAgIH0sIHt9KTtcbiAgfVxuXG4gIGluY3JlbWVudCh0aW1lVG9BZGQgPSB7fSkge1xuICAgIHJldHVybiBuZXcgVGltZSh7IG1pbGxpc2Vjb25kczogdGhpcy4jYW1vdW50ICsgc3VtVGltZSh0aW1lVG9BZGQpIH0pO1xuICB9XG5cbiAgZGVjcmVtZW50KHRpbWVUb1N1YnRyYWN0ID0ge30pIHtcbiAgICByZXR1cm4gbmV3IFRpbWUoeyBtaWxsaXNlY29uZHM6IHRoaXMuI2Ftb3VudCAtIHN1bVRpbWUodGltZVRvU3VidHJhY3QpIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=