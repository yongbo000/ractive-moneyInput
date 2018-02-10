/** ****/ (function(modules) { // webpackBootstrap
/** ****/ 	// The module cache
  /** ****/ 	const installedModules = {};
/** ****/
/** ****/ 	// The require function
  /** ****/ 	function __webpack_require__(moduleId) {
/** ****/
/** ****/ 		// Check if module is in cache
    /** ****/ 		if (installedModules[moduleId]) {
      /** ****/ 			return installedModules[moduleId].exports;
    /** ****/ 		}
/** ****/ 		// Create a new module (and put it into the cache)
    /** ****/ 		const module = installedModules[moduleId] = {
      /** ****/ 			i: moduleId,
      /** ****/ 			l: false,
      /** ****/ 			exports: {},
    /** ****/ 		};
/** ****/
/** ****/ 		// Execute the module function
    /** ****/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/** ****/
/** ****/ 		// Flag the module as loaded
    /** ****/ 		module.l = true;
/** ****/
/** ****/ 		// Return the exports of the module
    /** ****/ 		return module.exports;
  /** ****/ 	}
/** ****/
/** ****/
/** ****/ 	// expose the modules object (__webpack_modules__)
  /** ****/ 	__webpack_require__.m = modules;
/** ****/
/** ****/ 	// expose the module cache
  /** ****/ 	__webpack_require__.c = installedModules;
/** ****/
/** ****/ 	// define getter function for harmony exports
  /** ****/ 	__webpack_require__.d = function(exports, name, getter) {
    /** ****/ 		if (!__webpack_require__.o(exports, name)) {
      /** ****/ 			Object.defineProperty(exports, name, {
        /** ****/ 				configurable: false,
        /** ****/ 				enumerable: true,
        /** ****/ 				get: getter,
      /** ****/ 			});
    /** ****/ 		}
  /** ****/ 	};
/** ****/
/** ****/ 	// getDefaultExport function for compatibility with non-harmony modules
  /** ****/ 	__webpack_require__.n = function(module) {
    /** ****/ 		const getter = module && module.__esModule ?
/** ****/ 			function getDefault() { return module.default; } :
/** ****/ 			function getModuleExports() { return module; };
    /** ****/ 		__webpack_require__.d(getter, 'a', getter);
    /** ****/ 		return getter;
  /** ****/ 	};
/** ****/
/** ****/ 	// Object.prototype.hasOwnProperty.call
  /** ****/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/** ****/
/** ****/ 	// __webpack_public_path__
  /** ****/ 	__webpack_require__.p = '';
/** ****/
/** ****/ 	// Load entry module and return exports
  /** ****/ 	return __webpack_require__(__webpack_require__.s = 0);
/** ****/ })([
/* 0 */
  /** */ function(module, exports, __webpack_require__) {


    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    exports.default = void 0;

    const _ractive = _interopRequireDefault(__webpack_require__(1));

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function formatInputMoney(money) {
      if (!/^\d+\.?\d{0,2}$/.test(money)) {
        if (money.charAt(0) === '.') {
          return '';
        }

        if (money.indexOf('.') > 0) {
          money = money.substring(0, money.indexOf('.') + 3);
        }

        let newValue = '';

        for (let i = 0; i < money.length; i++) {
          const char = money.charAt(i);

          if (/^\d$/.test(char) || char === '.' && newValue.indexOf('.') < 0) {
            newValue += char;
          }
        }

        return newValue;
      }

      if (money.length >= 2 && money.charAt(0) === '0' && money.charAt(1) !== '.') {
        return money.charAt(1);
      }

      return money;
    }


    const _default = _ractive.default.extend({
      template: "<input class=\"{{class}}\" on-input=\"@this.fire('input')\" type=\"text\" value=\"{{value}}\" name=\"{{name}}\" placeholder=\"{{placeholder}}\" autocomplete=\"{{autocomplete}}\" autofocus=\"{{autofocus}}\" tabindex=\"{{tabindex}}\" />",
      on: {
        input: function input() {
          const maxMoney = this.get('max');
          const inputMoney = this.get('value');
          let formatMoney = formatInputMoney(inputMoney);

          if (formatMoney > maxMoney) {
            formatMoney = maxMoney;
          }

          if (formatMoney !== inputMoney) {
            this.set('value', formatMoney);
          }
        },
      },
    });

    exports.default = _default;

  /** */ },
/* 1 */
  /** */ function(module, exports) {

    module.exports = Ractive;

  /** */ },
/** ****/ ]);
