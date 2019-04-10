module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!**********************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!*********************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!*********************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!******************************************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!***************************************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!*******************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!*****************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!***************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!**************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!***********************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!************************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "../../node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!**********************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!*******************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!*******************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!************************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!**********************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!****************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "../../node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!**********************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!**************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "../../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "../../node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!*****************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "../../node_modules/next/app.js":
/*!*********************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/next/app.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "../../node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "../../node_modules/next/dist/client/link.js":
/*!**********************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/next/dist/client/link.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "../../node_modules/next/dist/pages/_app.js":
/*!*********************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/next/dist/pages/_app.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../../node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

var router_1 = __webpack_require__(/*! next/router */ "next/router");

var App =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(App, _react_1$Component);

  function App() {
    (0, _classCallCheck2.default)(this, App);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
  }

  (0, _createClass2.default)(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        router: router_1.makePublicRouterInstance(this.props.router)
      };
    } // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`. This is now deprecated.

  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(err) {
      throw err;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var url = createUrl(router);
      return react_1.default.createElement(Container, null, react_1.default.createElement(Component, (0, _assign.default)({}, pageProps, {
        url: url
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                _context.next = 3;
                return utils_1.loadGetInitialProps(Component, ctx);

              case 3:
                pageProps = _context.sent;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);
  return App;
}(react_1.Component);

App.childContextTypes = {
  router: prop_types_1.default.object
};
exports.default = App;

var Container =
/*#__PURE__*/
function (_react_1$Component2) {
  (0, _inherits2.default)(Container, _react_1$Component2);

  function Container() {
    (0, _classCallCheck2.default)(this, Container);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Container).apply(this, arguments));
  }

  (0, _createClass2.default)(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var hash = window.location.hash;
      hash = hash ? hash.substring(1) : false;
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return Container;
}(react_1.Component);

exports.Container = Container;
var warnUrl = utils_1.execOnce(function () {
  if (true) {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  }
});

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      warnUrl();
      return query;
    },

    get pathname() {
      warnUrl();
      return pathname;
    },

    get asPath() {
      warnUrl();
      return asPath;
    },

    back: function back() {
      warnUrl();
      router.back();
    },
    push: function push(url, as) {
      warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      warnUrl();
      var pushRoute = as ? href : null;
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      warnUrl();
      var replaceRoute = as ? href : null;
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

exports.createUrl = createUrl;

/***/ }),

/***/ "../../node_modules/next/link.js":
/*!**********************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/next/link.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../../node_modules/nprogress/nprogress.css":
/*!*********************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/nprogress/nprogress.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/rbx/base/exotic.js":
/*!****************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/base/exotic.js ***!
  \****************************************************************************************************************************/
/*! exports provided: forwardRefAs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardRefAs", function() { return forwardRefAs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function forwardRefAs(factory, defaultProps) {
  const forward = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(factory);
  forward.defaultProps = defaultProps;
  return forward;
}

/***/ }),

/***/ "../../node_modules/rbx/base/generic.js":
/*!*****************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/base/generic.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: Generic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Generic", function() { return Generic; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _prop_types_extensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../prop-types-extensions */ "../../node_modules/rbx/prop-types-extensions.js");
/* harmony import */ var _exotic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exotic */ "../../node_modules/rbx/base/exotic.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme */ "../../node_modules/rbx/base/theme.js");






const Generic = Object(_exotic__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var as = _a.as,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["as"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_theme__WEBPACK_IMPORTED_MODULE_5__["ThemeContext"].Consumer, null, ({
    transform
  }) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(as, _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    ref
  }, transform(rest, "Generic"))));
}, {
  as: "div"
});
Generic.displayName = "Generic";
Generic.propTypes = {
  as: _prop_types_extensions__WEBPACK_IMPORTED_MODULE_3__["renderablePropType"]
};

/***/ }),

/***/ "../../node_modules/rbx/base/helpers/factory.js":
/*!*************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/base/helpers/factory.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: makePropTypesFactory, makeValidatingTransformFactory, makeRootValidatingTransformFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePropTypesFactory", function() { return makePropTypesFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeValidatingTransformFactory", function() { return makeValidatingTransformFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeRootValidatingTransformFactory", function() { return makeRootValidatingTransformFactory; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ "../../node_modules/rbx/base/helpers/variables.js");



const makePropTypesFactory = makePropTypes => variables => makePropTypes(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, _variables__WEBPACK_IMPORTED_MODULE_2__["DEFAULTS"], variables));
const makeValidatingTransformFactory = (makePropTypesFunc, transformFunc) => (variables = _variables__WEBPACK_IMPORTED_MODULE_2__["DEFAULTS"]) => {
  const propTypes = makePropTypesFunc(variables);
  return (props, componentName, location = "prop") => {
    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.checkPropTypes(propTypes, props, location, componentName);
    return transformFunc(props);
  };
};
const makeRootValidatingTransformFactory = (...makeValidatingTransformFuncs) => (variables = _variables__WEBPACK_IMPORTED_MODULE_2__["DEFAULTS"]) => {
  const validatingTransformFuncs = makeValidatingTransformFuncs.map(func => func(variables));
  return (props, componentName, location = "prop") => validatingTransformFuncs.reduce((acc, func) => func(acc, componentName, location), props);
};

/***/ }),

/***/ "../../node_modules/rbx/base/helpers/float.js":
/*!***********************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/base/helpers/float.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: makePropTypes, transform, makeValidatingTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePropTypes", function() { return makePropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeValidatingTransform", function() { return makeValidatingTransform; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factory */ "../../node_modules/rbx/base/helpers/factory.js");




const makePropTypes = Object(_factory__WEBPACK_IMPORTED_MODULE_3__["makePropTypesFactory"])(vars => ({
  clearfix: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  pull: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(vars.floatPulledAlignments)
}));
const transform = props => {
  const clearfix = props.clearfix,
        pull = props.pull,
        rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](props, ["clearfix", "pull"]);

  rest.className = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    "is-clearfix": clearfix,
    [`is-pulled-${pull}`]: pull
  }, rest.className);
  return rest;
};
const makeValidatingTransform = Object(_factory__WEBPACK_IMPORTED_MODULE_3__["makeValidatingTransformFactory"])(makePropTypes, transform);

/***/ }),

/***/ "../../node_modules/rbx/base/helpers/index.js":
/*!***********************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/base/helpers/index.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: makeRootValidatingTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeRootValidatingTransform", function() { return makeRootValidatingTransform; });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "../../node_modules/rbx/base/helpers/factory.js");
/* harmony import */ var _float__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./float */ "../../node_modules/rbx/base/helpers/float.js");
/* harmony import */ var _other__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./other */ "../../node_modules/rbx/base/helpers/other.js");
/* harmony import */ var _overflow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overflow */ "../../node_modules/rbx/base/helpers/overflow.js");
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlay */ "../../node_modules/rbx/base/helpers/overlay.js");
/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./responsive */ "../../node_modules/rbx/base/helpers/responsive.js");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./typography */ "../../node_modules/rbx/base/helpers/typography.js");
/* harmony import */ var _visibility__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visibility */ "../../node_modules/rbx/base/helpers/visibility.js");








const makeRootValidatingTransform = Object(_factory__WEBPACK_IMPORTED_MODULE_0__["makeRootValidatingTransformFactory"])(_float__WEBPACK_IMPORTED_MODULE_1__["makeValidatingTransform"], _overflow__WEBPACK_IMPORTED_MODULE_3__["makeValidatingTransform"], _overlay__WEBPACK_IMPORTED_MODULE_4__["makeValidatingTransform"], _typography__WEBPACK_IMPORTED_MODULE_6__["makeValidatingTransform"], _visibility__WEBPACK_IMPORTED_MODULE_7__["makeValidatingTransform"], _other__WEBPACK_IMPORTED_MODULE_2__["makeValidatingTransform"], _responsive__WEBPACK_IMPORTED_MODULE_5__["makeValidatingTransform"]);

/***/ }),

/***/ "../../node_modules/rbx/base/helpers/other.js":
/*!***********************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/base/helpers/other.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: makePropTypes, transform, makeValidatingTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePropTypes", function() { return makePropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeValidatingTransform", function() { return makeValidatingTransform; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factory */ "../../node_modules/rbx/base/helpers/factory.js");




const makePropTypes = Object(_factory__WEBPACK_IMPORTED_MODULE_3__["makePropTypesFactory"])(vars => ({
  marginless: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  paddingless: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  radiusless: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  shadowless: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  unselectable: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
}));
const transform = props => {
  const marginless = props.marginless,
        paddingless = props.paddingless,
        radiusless = props.radiusless,
        shadowless = props.shadowless,
        unselectable = props.unselectable,
        rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](props, ["marginless", "paddingless", "radiusless", "shadowless", "unselectable"]);

  rest.className = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    "is-marginless": marginless,
    "is-paddingless": paddingless,
    "is-radiusless": radiusless,
    "is-shadowless": shadowless,
    "is-unselectable": unselectable
  }, rest.className);
  return rest;
};
const makeValidatingTransform = Object(_factory__WEBPACK_IMPORTED_MODULE_3__["makeValidatingTransformFactory"])(makePropTypes, transform);

/***/ }),

/***/ "../../node_modules/rbx/base/helpers/overflow.js":
/*!**************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/base/helpers/overflow.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: makePropTypes, transform, makeValidatingTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePropTypes", function() { return makePropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeValidatingTransform", function() { return makeValidatingTransform; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factory */ "../../node_modules/rbx/base/helpers/factory.js");




const makePropTypes = Object(_factory__WEBPACK_IMPORTED_MODULE_3__["makePropTypesFactory"])(vars => ({
  clipped: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
}));
const transform = props => {
  const clipped = props.clipped,
        rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](props, ["clipped"]);

  rest.className = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    "is-clipped": clipped
  }, rest.className);
  return rest;
};
const makeValidatingTransform = Object(_factory__WEBPACK_IMPORTED_MODULE_3__["makeValidatingTransformFactory"])(makePropTypes, transform);

/***/ }),

/***/ "../../node_modules/rbx/base/helpers/overlay.js":
/*!*************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/base/helpers/overlay.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: makePropTypes, transform, makeValidatingTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePropTypes", function() { return makePropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeValidatingTransform", function() { return makeValidatingTransform; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factory */ "../../node_modules/rbx/base/helpers/factory.js");




const makePropTypes = Object(_factory__WEBPACK_IMPORTED_MODULE_3__["makePropTypesFactory"])(vars => ({
  overlay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
}));
const transform = props => {
  const overlay = props.overlay,
        rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](props, ["overlay"]);

  rest.className = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    "is-overlay": overlay
  }, rest.className);
  return rest;
};
const makeValidatingTransform = Object(_factory__WEBPACK_IMPORTED_MODULE_3__["makeValidatingTransformFactory"])(makePropTypes, transform);

/***/ }),

/***/ "../../node_modules/rbx/base/helpers/responsive.js":
/*!****************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/base/helpers/responsive.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: makeResponsiveBreakpointPropTypes, makeResponsiveBreakpointLimitedPropTypes, makePropTypes, transform, makeValidatingTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeResponsiveBreakpointPropTypes", function() { return makeResponsiveBreakpointPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeResponsiveBreakpointLimitedPropTypes", function() { return makeResponsiveBreakpointLimitedPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePropTypes", function() { return makePropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeValidatingTransform", function() { return makeValidatingTransform; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./factory */ "../../node_modules/rbx/base/helpers/factory.js");






const makeResponsiveBreakpointPropTypes = Object(_factory__WEBPACK_IMPORTED_MODULE_5__["makePropTypesFactory"])(vars => ({
  display: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    only: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(vars.displays).isRequired
  }),
  hide: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    only: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired
  }),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    only: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(vars.textAlignments).isRequired
  }),
  textSize: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    only: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(vars.textSizes).isRequired
  })
}));
const makeResponsiveBreakpointLimitedPropTypes = Object(_factory__WEBPACK_IMPORTED_MODULE_5__["makePropTypesFactory"])(vars => ({
  display: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(vars.displays).isRequired
  }),
  hide: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired
  }),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(vars.textAlignments).isRequired
  }),
  textSize: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(vars.textSizes).isRequired
  })
}));
const makePropTypes = Object(_factory__WEBPACK_IMPORTED_MODULE_5__["makePropTypesFactory"])(vars => ({
  responsive: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape(vars.breakpoints.map(breakpoint => ({
    [breakpoint]: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape(vars.breakpointsLimited.indexOf(breakpoint) === -1 ? makeResponsiveBreakpointPropTypes(vars) : makeResponsiveBreakpointLimitedPropTypes(vars))
  })).reduce((acc, cv) => _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, acc, cv), {}))
}));
const transform = props => {
  const responsive = props.responsive,
        rest = tslib__WEBPACK_IMPORTED_MODULE_2__["__rest"](props, ["responsive"]);

  rest.className = classnames__WEBPACK_IMPORTED_MODULE_3___default()(responsive !== undefined ? _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(responsive).filter(breakpoint => responsive[breakpoint] !== undefined).map(breakpoint => {
    const names = {};
    const _responsive$breakpoin = responsive[breakpoint],
          display = _responsive$breakpoin.display,
          hide = _responsive$breakpoin.hide,
          textAlign = _responsive$breakpoin.textAlign,
          textSize = _responsive$breakpoin.textSize;

    if (display !== undefined) {
      const value = display.value;
      const only = "only" in display ? display.only === true : false;
      names[`is-${value}-${breakpoint}${only ? "-only" : ""}`] = value;
    }

    if (hide !== undefined) {
      const value = hide.value;
      const only = "only" in hide ? hide.only === true : false;
      names[`is-hidden-${breakpoint}${only ? "-only" : ""}`] = value;
    }

    if (textAlign !== undefined) {
      const value = textAlign.value;
      const only = "only" in textAlign ? textAlign.only === true : false;
      names[`has-text-${value}-${breakpoint}${only ? "-only" : ""}`] = value;
    }

    if (textSize !== undefined) {
      const value = textSize.value;
      const only = "only" in textSize ? textSize.only === true : false;
      names[`is-size-${value}-${breakpoint}${only ? "-only" : ""}`] = value;
    }

    return names;
  }).reduce((acc, cv) => _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, acc, cv), {}) : undefined, rest.className);
  return rest;
};
const makeValidatingTransform = Object(_factory__WEBPACK_IMPORTED_MODULE_5__["makeValidatingTransformFactory"])(makePropTypes, transform);

/***/ }),

/***/ "../../node_modules/rbx/base/helpers/typography.js":
/*!****************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/base/helpers/typography.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: makePropTypes, transform, makeValidatingTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePropTypes", function() { return makePropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeValidatingTransform", function() { return makeValidatingTransform; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factory */ "../../node_modules/rbx/base/helpers/factory.js");




const makePropTypes = Object(_factory__WEBPACK_IMPORTED_MODULE_3__["makePropTypesFactory"])(vars => ({
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([...vars.colors, ...vars.shades]),
  italic: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(vars.textAlignments),
  textColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([...vars.colors, ...vars.shades]),
  textSize: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(vars.textSizes),
  textTransform: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(vars.textTransforms),
  textWeight: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(vars.textWeights)
}));
const transform = props => {
  const backgroundColor = props.backgroundColor,
        italic = props.italic,
        textAlign = props.textAlign,
        textColor = props.textColor,
        textSize = props.textSize,
        textTransform = props.textTransform,
        textWeight = props.textWeight,
        rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](props, ["backgroundColor", "italic", "textAlign", "textColor", "textSize", "textTransform", "textWeight"]);

  rest.className = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [`has-background-${backgroundColor}`]: backgroundColor,
    [`has-text-${textColor}`]: textColor,
    "is-italic": italic,
    [`is-${textTransform}`]: textTransform,
    [`has-text-${textAlign}`]: textAlign,
    [`has-text-weight-${textWeight}`]: textWeight,
    [`is-size-${textSize}`]: textSize
  }, rest.className);
  return rest;
};
const makeValidatingTransform = Object(_factory__WEBPACK_IMPORTED_MODULE_3__["makeValidatingTransformFactory"])(makePropTypes, transform);

/***/ }),

/***/ "../../node_modules/rbx/base/helpers/variables.js":
/*!***************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/base/helpers/variables.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: DEFAULTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULTS", function() { return DEFAULTS; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");

const DEFAULTS = {
  colors: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["tuple"])("primary", "success", "info", "warning", "danger", "light", "dark", "white", "black", "link"),
  shades: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["tuple"])("black-bis", "black-ter", "grey-darker", "grey-dark", "grey", "grey-light", "grey-lighter", "white-ter", "white-bis"),
  floatPulledAlignments: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["tuple"])("left", "right"),
  breakpoints: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["tuple"])("mobile", "tablet", "desktop", "widescreen", "fullhd", "touch"),
  breakpointsLimited: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["tuple"])("mobile", "fullhd", "touch"),
  textAlignments: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["tuple"])("centered", "justified", "left", "right"),
  textSizes: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["tuple"])(1, 2, 3, 4, 5, 6),
  textTransforms: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["tuple"])("capitalized", "lowercase", "uppercase"),
  textWeights: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["tuple"])("light", "normal", "semibold", "bold"),
  displays: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["tuple"])("block", "flex", "inline", "inline-block", "inline-flex")
};

/***/ }),

/***/ "../../node_modules/rbx/base/helpers/visibility.js":
/*!****************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/base/helpers/visibility.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: makePropTypes, transform, makeValidatingTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePropTypes", function() { return makePropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeValidatingTransform", function() { return makeValidatingTransform; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factory */ "../../node_modules/rbx/base/helpers/factory.js");




const makePropTypes = Object(_factory__WEBPACK_IMPORTED_MODULE_3__["makePropTypesFactory"])(vars => ({
  hidden: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  invisible: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  srOnly: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
}));
const transform = props => {
  const hidden = props.hidden,
        invisible = props.invisible,
        srOnly = props.srOnly,
        rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](props, ["hidden", "invisible", "srOnly"]);

  rest.className = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    "is-hidden": hidden,
    "is-invisible": invisible,
    "is-sr-only": srOnly
  }, rest.className);
  return rest;
};
const makeValidatingTransform = Object(_factory__WEBPACK_IMPORTED_MODULE_3__["makeValidatingTransformFactory"])(makePropTypes, transform);

/***/ }),

/***/ "../../node_modules/rbx/base/index.js":
/*!***************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/base/index.js ***!
  \***************************************************************************************************************************/
/*! exports provided: forwardRefAs, Generic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exotic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exotic */ "../../node_modules/rbx/base/exotic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forwardRefAs", function() { return _exotic__WEBPACK_IMPORTED_MODULE_0__["forwardRefAs"]; });

/* harmony import */ var _generic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic */ "../../node_modules/rbx/base/generic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Generic", function() { return _generic__WEBPACK_IMPORTED_MODULE_1__["Generic"]; });




/***/ }),

/***/ "../../node_modules/rbx/base/theme.js":
/*!***************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/base/theme.js ***!
  \***************************************************************************************************************************/
/*! exports provided: initialValue, ThemeContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialValue", function() { return initialValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "../../node_modules/rbx/base/helpers/index.js");


const initialValue = {
  transform: Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["makeRootValidatingTransform"])()
};
const ThemeContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(initialValue);

/***/ }),

/***/ "../../node_modules/rbx/components/breadcrumb/breadcrumb-item.js":
/*!******************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/breadcrumb/breadcrumb-item.js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: BreadcrumbItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbItem", function() { return BreadcrumbItem; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");






const BreadcrumbItem = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var active = _a.active,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["active"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      "is-active": active
    })
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    ref: ref
  }, rest)));
}, {
  as: "a"
});
BreadcrumbItem.displayName = "Breadcrumb.Item";
BreadcrumbItem.propTypes = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};

/***/ }),

/***/ "../../node_modules/rbx/components/breadcrumb/breadcrumb.js":
/*!*************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/breadcrumb/breadcrumb.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: BREADCRUMB_DEFAULTS, Breadcrumb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREADCRUMB_DEFAULTS", function() { return BREADCRUMB_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return Breadcrumb; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");
/* harmony import */ var _breadcrumb_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./breadcrumb-item */ "../../node_modules/rbx/components/breadcrumb/breadcrumb-item.js");








const BREADCRUMB_DEFAULTS = {
  alignments: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("centered", "right"),
  separators: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("arrow", "bullet", "dot", "succeeds"),
  sizes: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("small", "medium", "large")
};
const Breadcrumb = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var align = _a.align,
      children = _a.children,
      className = _a.className,
      separator = _a.separator,
      size = _a.size,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["align", "children", "className", "separator", "size"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("breadcrumb", {
      [`has-${separator}-separator`]: separator,
      [`is-${align}`]: align,
      [`is-${size}`]: size
    }, className),
    ref: ref
  }, rest), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", null, children));
}, {
  as: "nav"
}), {
  Item: _breadcrumb_item__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbItem"]
});
Breadcrumb.displayName = "Breadcrumb";
Breadcrumb.propTypes = {
  align: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  separator: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};

/***/ }),

/***/ "../../node_modules/rbx/components/breadcrumb/index.js":
/*!********************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/breadcrumb/index.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: Breadcrumb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _breadcrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumb */ "../../node_modules/rbx/components/breadcrumb/breadcrumb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return _breadcrumb__WEBPACK_IMPORTED_MODULE_0__["Breadcrumb"]; });



/***/ }),

/***/ "../../node_modules/rbx/components/card/card-content.js":
/*!*********************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/card/card-content.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: CardContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContent", function() { return CardContent; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const CardContent = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("card-content", className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
CardContent.displayName = "Card.Content";

/***/ }),

/***/ "../../node_modules/rbx/components/card/card-footer-item.js":
/*!*************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/card/card-footer-item.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: CardFooterItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFooterItem", function() { return CardFooterItem; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const CardFooterItem = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("card-footer-item", className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
CardFooterItem.displayName = "Card.Footer.Item";

/***/ }),

/***/ "../../node_modules/rbx/components/card/card-footer.js":
/*!********************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/card/card-footer.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: CardFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFooter", function() { return CardFooter; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _card_footer_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-footer-item */ "../../node_modules/rbx/components/card/card-footer-item.js");






const CardFooter = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("card-footer", className),
    ref: ref
  }, rest));
}, {
  as: "div"
}), {
  Item: _card_footer_item__WEBPACK_IMPORTED_MODULE_5__["CardFooterItem"]
});
CardFooter.displayName = "Card.Footer";

/***/ }),

/***/ "../../node_modules/rbx/components/card/card-header-icon.js":
/*!*************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/card/card-header-icon.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: CardHeaderIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardHeaderIcon", function() { return CardHeaderIcon; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const CardHeaderIcon = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("card-header-icon", className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
CardHeaderIcon.displayName = "Card.Header.Icon";

/***/ }),

/***/ "../../node_modules/rbx/components/card/card-header-title.js":
/*!**************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/card/card-header-title.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: CARD_HEADER_TITLE_DEFAULTS, CardHeaderTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_HEADER_TITLE_DEFAULTS", function() { return CARD_HEADER_TITLE_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardHeaderTitle", function() { return CardHeaderTitle; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");







const CARD_HEADER_TITLE_DEFAULTS = {
  alignments: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("centered")
};
const CardHeaderTitle = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var align = _a.align,
      className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["align", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("card-header-title", {
      [`is-${align}`]: align
    }, className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
CardHeaderTitle.displayName = "Card.Header.Title";
CardHeaderTitle.propTypes = {
  align: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};

/***/ }),

/***/ "../../node_modules/rbx/components/card/card-header.js":
/*!********************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/card/card-header.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: CardHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardHeader", function() { return CardHeader; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _card_header_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-header-icon */ "../../node_modules/rbx/components/card/card-header-icon.js");
/* harmony import */ var _card_header_title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-header-title */ "../../node_modules/rbx/components/card/card-header-title.js");







const CardHeader = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("card-header", className),
    ref: ref
  }, rest));
}, {
  as: "div"
}), {
  Icon: _card_header_icon__WEBPACK_IMPORTED_MODULE_5__["CardHeaderIcon"],
  Title: _card_header_title__WEBPACK_IMPORTED_MODULE_6__["CardHeaderTitle"]
});
CardHeader.displayName = "Card.Header";

/***/ }),

/***/ "../../node_modules/rbx/components/card/card-image.js":
/*!*******************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/card/card-image.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: CardImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImage", function() { return CardImage; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const CardImage = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("card-image", className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
CardImage.displayName = "Card.Image";

/***/ }),

/***/ "../../node_modules/rbx/components/card/card.js":
/*!*************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/card/card.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _card_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-content */ "../../node_modules/rbx/components/card/card-content.js");
/* harmony import */ var _card_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-footer */ "../../node_modules/rbx/components/card/card-footer.js");
/* harmony import */ var _card_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card-header */ "../../node_modules/rbx/components/card/card-header.js");
/* harmony import */ var _card_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card-image */ "../../node_modules/rbx/components/card/card-image.js");









const Card = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("card", className),
    ref: ref
  }, rest));
}, {
  as: "div"
}), {
  Content: _card_content__WEBPACK_IMPORTED_MODULE_5__["CardContent"],
  Footer: _card_footer__WEBPACK_IMPORTED_MODULE_6__["CardFooter"],
  Header: _card_header__WEBPACK_IMPORTED_MODULE_7__["CardHeader"],
  Image: _card_image__WEBPACK_IMPORTED_MODULE_8__["CardImage"]
});
Card.displayName = "Card";

/***/ }),

/***/ "../../node_modules/rbx/components/card/index.js":
/*!**************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/card/index.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "../../node_modules/rbx/components/card/card.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _card__WEBPACK_IMPORTED_MODULE_0__["Card"]; });



/***/ }),

/***/ "../../node_modules/rbx/components/dropdown/dropdown-container.js":
/*!*******************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/dropdown/dropdown-container.js ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: DROPDOWN_DEFAULTS, DropdownContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DROPDOWN_DEFAULTS", function() { return DROPDOWN_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownContainer", function() { return DropdownContainer; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");
/* harmony import */ var _dropdown_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropdown-context */ "../../node_modules/rbx/components/dropdown/dropdown-context.js");







const DROPDOWN_DEFAULTS = {
  alignments: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["tuple"])("right")
};
const initialState = {
  active: false
};
class DropdownContainer extends react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent {
  constructor(props) {
    super(props);
    this.ref = react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef();

    this.handleClick = event => {
      if (this.props.managed !== true && this.active && this.ref.current !== null) {
        if (event.target instanceof Element && !this.ref.current.contains(event.target)) {
          this.active = false;
        }
      }
    };

    this.state = {
      active: props.active === true
    };
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick);
  }

  render() {
    const _a = this.props,
          active = _a.active,
          align = _a.align,
          className = _a.className,
          hoverable = _a.hoverable,
          innerRef = _a.innerRef,
          managed = _a.managed,
          up = _a.up,
          rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["active", "align", "className", "hoverable", "innerRef", "managed", "up"]);

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_dropdown_context__WEBPACK_IMPORTED_MODULE_6__["DropdownContext"].Provider, {
      value: {
        active: this.active,
        setActive: value => this.active = value
      }
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("dropdown", {
        [`is-${align}`]: align,
        "is-active": this.active,
        "is-hoverable": hoverable,
        "is-up": up
      }, className),
      ref: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["combineRefs"])(this.ref, innerRef)
    }, rest)));
  }

  get active() {
    return this.props.managed === true ? this.props.active === true : this.state.active;
  }

  set active(value) {
    if (this.props.managed !== true) {
      this.setState({
        active: value
      });
    }
  }

}
DropdownContainer.displayName = "Dropdown.Container";

/***/ }),

/***/ "../../node_modules/rbx/components/dropdown/dropdown-content.js":
/*!*****************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/dropdown/dropdown-content.js ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: DropdownContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownContent", function() { return DropdownContent; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const DropdownContent = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("dropdown-content", className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
DropdownContent.displayName = "Dropdown.Content";

/***/ }),

/***/ "../../node_modules/rbx/components/dropdown/dropdown-context.js":
/*!*****************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/dropdown/dropdown-context.js ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: initialValue, DropdownContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialValue", function() { return initialValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownContext", function() { return DropdownContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");


const initialValue = {
  active: false,
  setActive: _utils__WEBPACK_IMPORTED_MODULE_1__["noop"]
};
const DropdownContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(initialValue);

/***/ }),

/***/ "../../node_modules/rbx/components/dropdown/dropdown-divider.js":
/*!*****************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/dropdown/dropdown-divider.js ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: DropdownDivider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDivider", function() { return DropdownDivider; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const DropdownDivider = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("dropdown-divider", className),
    ref: ref
  }, rest));
}, {
  as: "hr"
});
DropdownDivider.displayName = "Dropdown.Divider";

/***/ }),

/***/ "../../node_modules/rbx/components/dropdown/dropdown-item.js":
/*!**************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/dropdown/dropdown-item.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: DropdownItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownItem", function() { return DropdownItem; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _dropdown_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropdown-context */ "../../node_modules/rbx/components/dropdown/dropdown-context.js");








const onClickHandler = (onClick, ctx) => event => {
  if (onClick !== undefined) {
    onClick(event);
  }

  ctx.setActive(false);
};

const DropdownItem = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var active = _a.active,
      className = _a.className,
      onClick = _a.onClick,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["active", "className", "onClick"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_dropdown_context__WEBPACK_IMPORTED_MODULE_6__["DropdownContext"].Consumer, null, ctx => react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("dropdown-item", {
      "is-active": active
    }, className),
    onClick: onClickHandler(onClick, ctx),
    ref: ref
  }, rest)));
}, {
  as: "a"
});
DropdownItem.displayName = "Dropdown.Item";
DropdownItem.propTypes = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};

/***/ }),

/***/ "../../node_modules/rbx/components/dropdown/dropdown-menu.js":
/*!**************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/dropdown/dropdown-menu.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: DropdownMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownMenu", function() { return DropdownMenu; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const DropdownMenu = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("dropdown-menu", className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
DropdownMenu.displayName = "Dropdown.Menu";

/***/ }),

/***/ "../../node_modules/rbx/components/dropdown/dropdown-trigger.js":
/*!*****************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/dropdown/dropdown-trigger.js ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: DropdownTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownTrigger", function() { return DropdownTrigger; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _dropdown_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropdown-context */ "../../node_modules/rbx/components/dropdown/dropdown-context.js");








const onClickHandler = (onClick, ctx) => event => {
  if (onClick !== undefined) {
    onClick(event);
  }

  ctx.setActive(!ctx.active);
};

const DropdownTrigger = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      onClick = _a.onClick,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "onClick"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_dropdown_context__WEBPACK_IMPORTED_MODULE_6__["DropdownContext"].Consumer, null, ctx => react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("dropdown-trigger", className),
    onClick: onClickHandler(onClick, ctx),
    ref: ref
  }, rest)));
}, {
  as: "div"
});
DropdownTrigger.displayName = "Dropdown.Trigger";
DropdownTrigger.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};

/***/ }),

/***/ "../../node_modules/rbx/components/dropdown/dropdown.js":
/*!*********************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/dropdown/dropdown.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: Dropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _dropdown_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown-container */ "../../node_modules/rbx/components/dropdown/dropdown-container.js");
/* harmony import */ var _dropdown_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dropdown-content */ "../../node_modules/rbx/components/dropdown/dropdown-content.js");
/* harmony import */ var _dropdown_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropdown-context */ "../../node_modules/rbx/components/dropdown/dropdown-context.js");
/* harmony import */ var _dropdown_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dropdown-divider */ "../../node_modules/rbx/components/dropdown/dropdown-divider.js");
/* harmony import */ var _dropdown_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dropdown-item */ "../../node_modules/rbx/components/dropdown/dropdown-item.js");
/* harmony import */ var _dropdown_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dropdown-menu */ "../../node_modules/rbx/components/dropdown/dropdown-menu.js");
/* harmony import */ var _dropdown_trigger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dropdown-trigger */ "../../node_modules/rbx/components/dropdown/dropdown-trigger.js");











const Dropdown = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_3__["forwardRefAs"])((props, ref) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_dropdown_container__WEBPACK_IMPORTED_MODULE_4__["DropdownContainer"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
  innerRef: ref
}, props)), {
  as: "div"
}), {
  Container: _dropdown_container__WEBPACK_IMPORTED_MODULE_4__["DropdownContainer"],
  Content: _dropdown_content__WEBPACK_IMPORTED_MODULE_5__["DropdownContent"],
  Context: _dropdown_context__WEBPACK_IMPORTED_MODULE_6__["DropdownContext"],
  Divider: _dropdown_divider__WEBPACK_IMPORTED_MODULE_7__["DropdownDivider"],
  Item: _dropdown_item__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"],
  Menu: _dropdown_menu__WEBPACK_IMPORTED_MODULE_9__["DropdownMenu"],
  Trigger: _dropdown_trigger__WEBPACK_IMPORTED_MODULE_10__["DropdownTrigger"]
});
Dropdown.displayName = "Dropdown";
Dropdown.propTypes = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  align: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  hoverable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  managed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  up: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "../../node_modules/rbx/components/dropdown/index.js":
/*!******************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/dropdown/index.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: Dropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown */ "../../node_modules/rbx/components/dropdown/dropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _dropdown__WEBPACK_IMPORTED_MODULE_0__["Dropdown"]; });



/***/ }),

/***/ "../../node_modules/rbx/components/index.js":
/*!*********************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/index.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: Breadcrumb, Card, Dropdown, Level, List, Media, Menu, Message, Modal, Navbar, Pagination, Panel, Tab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _breadcrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumb */ "../../node_modules/rbx/components/breadcrumb/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return _breadcrumb__WEBPACK_IMPORTED_MODULE_0__["Breadcrumb"]; });

/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "../../node_modules/rbx/components/card/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _card__WEBPACK_IMPORTED_MODULE_1__["Card"]; });

/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown */ "../../node_modules/rbx/components/dropdown/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _dropdown__WEBPACK_IMPORTED_MODULE_2__["Dropdown"]; });

/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./level */ "../../node_modules/rbx/components/level/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Level", function() { return _level__WEBPACK_IMPORTED_MODULE_3__["Level"]; });

/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list */ "../../node_modules/rbx/components/list/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _list__WEBPACK_IMPORTED_MODULE_4__["List"]; });

/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media */ "../../node_modules/rbx/components/media/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Media", function() { return _media__WEBPACK_IMPORTED_MODULE_5__["Media"]; });

/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu */ "../../node_modules/rbx/components/menu/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _menu__WEBPACK_IMPORTED_MODULE_6__["Menu"]; });

/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./message */ "../../node_modules/rbx/components/message/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _message__WEBPACK_IMPORTED_MODULE_7__["Message"]; });

/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal */ "../../node_modules/rbx/components/modal/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _modal__WEBPACK_IMPORTED_MODULE_8__["Modal"]; });

/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar */ "../../node_modules/rbx/components/navbar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return _navbar__WEBPACK_IMPORTED_MODULE_9__["Navbar"]; });

/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pagination */ "../../node_modules/rbx/components/pagination/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return _pagination__WEBPACK_IMPORTED_MODULE_10__["Pagination"]; });

/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./panel */ "../../node_modules/rbx/components/panel/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return _panel__WEBPACK_IMPORTED_MODULE_11__["Panel"]; });

/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tab */ "../../node_modules/rbx/components/tab/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return _tab__WEBPACK_IMPORTED_MODULE_12__["Tab"]; });















/***/ }),

/***/ "../../node_modules/rbx/components/level/index.js":
/*!***************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/level/index.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: Level */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ "../../node_modules/rbx/components/level/level.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Level", function() { return _level__WEBPACK_IMPORTED_MODULE_0__["Level"]; });



/***/ }),

/***/ "../../node_modules/rbx/components/level/level-item.js":
/*!********************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/level/level-item.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: LEVEL_ITEM_DEFAULTS, LevelItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEVEL_ITEM_DEFAULTS", function() { return LEVEL_ITEM_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelItem", function() { return LevelItem; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");







const LEVEL_ITEM_DEFAULTS = {
  alignments: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("left", "right")
};
const LevelItem = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var align = _a.align,
      className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["align", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      "level-item": align === undefined,
      [`level-${align}`]: align
    }, className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
LevelItem.displayName = "Level.Item";
LevelItem.propTypes = {
  align: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};

/***/ }),

/***/ "../../node_modules/rbx/components/level/level.js":
/*!***************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/level/level.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: Level */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level", function() { return Level; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _level_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./level-item */ "../../node_modules/rbx/components/level/level-item.js");







const Level = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var breakpoint = _a.breakpoint,
      className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["breakpoint", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("level", {
      [`is-${breakpoint}`]: breakpoint
    }, className),
    ref: ref
  }, rest));
}, {
  as: "nav"
}), {
  Item: _level_item__WEBPACK_IMPORTED_MODULE_6__["LevelItem"]
});
Level.displayName = "Level";
Level.propTypes = {
  breakpoint: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};

/***/ }),

/***/ "../../node_modules/rbx/components/list/index.js":
/*!**************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/list/index.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "../../node_modules/rbx/components/list/list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _list__WEBPACK_IMPORTED_MODULE_0__["List"]; });



/***/ }),

/***/ "../../node_modules/rbx/components/list/list-item.js":
/*!******************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/list/list-item.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: ListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");






const ListItem = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var active = _a.active,
      className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["active", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("list-item", {
      "is-active": active
    }, className),
    ref: ref
  }, rest));
}, {
  as: "a"
});
ListItem.displayName = "List.Item";
ListItem.propTypes = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};

/***/ }),

/***/ "../../node_modules/rbx/components/list/list.js":
/*!*************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/list/list.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-item */ "../../node_modules/rbx/components/list/list-item.js");






const List = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("list", className),
    ref: ref
  }, rest));
}, {
  as: "div"
}), {
  Item: _list_item__WEBPACK_IMPORTED_MODULE_5__["ListItem"]
});
List.displayName = "List";

/***/ }),

/***/ "../../node_modules/rbx/components/media/index.js":
/*!***************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/media/index.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: Media */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media */ "../../node_modules/rbx/components/media/media.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Media", function() { return _media__WEBPACK_IMPORTED_MODULE_0__["Media"]; });



/***/ }),

/***/ "../../node_modules/rbx/components/media/media-item.js":
/*!********************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/media/media-item.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: MEDIA_ITEM_DEFAULTS, MediaItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_ITEM_DEFAULTS", function() { return MEDIA_ITEM_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaItem", function() { return MediaItem; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");







const MEDIA_ITEM_DEFAULTS = {
  alignments: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("content", "left", "right")
};
const MediaItem = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var align = _a.align,
      className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["align", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      [`media-${align}`]: align
    }, className),
    ref: ref
  }, rest));
}, {
  align: "content",
  as: "div"
});
MediaItem.displayName = "Media.Item";
MediaItem.propTypes = {
  align: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};

/***/ }),

/***/ "../../node_modules/rbx/components/media/media.js":
/*!***************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/media/media.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: Media */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Media", function() { return Media; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _media_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media-item */ "../../node_modules/rbx/components/media/media-item.js");






const Media = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("media", className),
    ref: ref
  }, rest));
}, {
  as: "article"
}), {
  Item: _media_item__WEBPACK_IMPORTED_MODULE_5__["MediaItem"]
});
Media.displayName = "Media";

/***/ }),

/***/ "../../node_modules/rbx/components/menu/index.js":
/*!**************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/menu/index.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "../../node_modules/rbx/components/menu/menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _menu__WEBPACK_IMPORTED_MODULE_0__["Menu"]; });



/***/ }),

/***/ "../../node_modules/rbx/components/menu/menu-label.js":
/*!*******************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/menu/menu-label.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: MenuLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLabel", function() { return MenuLabel; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const MenuLabel = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("menu-label", className),
    ref: ref
  }, rest));
}, {
  as: "p"
});
MenuLabel.displayName = "Menu.Label";

/***/ }),

/***/ "../../node_modules/rbx/components/menu/menu-list-item.js":
/*!***********************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/menu/menu-list-item.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: MenuListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListItem", function() { return MenuListItem; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");






const MenuListItem = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var active = _a.active,
      className = _a.className,
      menu = _a.menu,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["active", "className", "menu"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      "is-active": active
    }, className),
    ref: ref
  }, rest)), menu);
}, {
  as: "a"
});
MenuListItem.displayName = "Menu.List.Item";
MenuListItem.propTypes = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  menu: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};

/***/ }),

/***/ "../../node_modules/rbx/components/menu/menu-list.js":
/*!******************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/menu/menu-list.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: MenuList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuList", function() { return MenuList; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _menu_list_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-list-item */ "../../node_modules/rbx/components/menu/menu-list-item.js");






const MenuList = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("menu-list", className),
    ref: ref
  }, rest));
}, {
  as: "ul"
}), {
  Item: _menu_list_item__WEBPACK_IMPORTED_MODULE_5__["MenuListItem"]
});
MenuList.displayName = "Menu.List";

/***/ }),

/***/ "../../node_modules/rbx/components/menu/menu.js":
/*!*************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/menu/menu.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _menu_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-label */ "../../node_modules/rbx/components/menu/menu-label.js");
/* harmony import */ var _menu_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-list */ "../../node_modules/rbx/components/menu/menu-list.js");







const Menu = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("menu", className),
    ref: ref
  }, rest));
}, {
  as: "aside"
}), {
  Label: _menu_label__WEBPACK_IMPORTED_MODULE_5__["MenuLabel"],
  List: _menu_list__WEBPACK_IMPORTED_MODULE_6__["MenuList"]
});
Menu.displayName = "Menu";

/***/ }),

/***/ "../../node_modules/rbx/components/message/index.js":
/*!*****************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/message/index.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message */ "../../node_modules/rbx/components/message/message.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _message__WEBPACK_IMPORTED_MODULE_0__["Message"]; });



/***/ }),

/***/ "../../node_modules/rbx/components/message/message-body.js":
/*!************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/message/message-body.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: MessageBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageBody", function() { return MessageBody; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const MessageBody = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("message-body", className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
MessageBody.displayName = "Message.Body";

/***/ }),

/***/ "../../node_modules/rbx/components/message/message-header.js":
/*!**************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/message/message-header.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: MessageHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageHeader", function() { return MessageHeader; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const MessageHeader = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("message-header", className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
MessageHeader.displayName = "Message.Header";

/***/ }),

/***/ "../../node_modules/rbx/components/message/message.js":
/*!*******************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/message/message.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: MESSAGE_DEFAULTS, Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_DEFAULTS", function() { return MESSAGE_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");
/* harmony import */ var _message_body__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./message-body */ "../../node_modules/rbx/components/message/message-body.js");
/* harmony import */ var _message_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./message-header */ "../../node_modules/rbx/components/message/message-header.js");









const MESSAGE_DEFAULTS = {
  sizes: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("small", "medium", "large")
};
const Message = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      color = _a.color,
      size = _a.size,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "color", "size"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("message", {
      [`is-${color}`]: color,
      [`is-${size}`]: size
    }, className),
    ref: ref
  }, rest));
}, {
  as: "article"
}), {
  Body: _message_body__WEBPACK_IMPORTED_MODULE_7__["MessageBody"],
  Header: _message_header__WEBPACK_IMPORTED_MODULE_8__["MessageHeader"]
});
Message.displayName = "Message";
Message.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};

/***/ }),

/***/ "../../node_modules/rbx/components/modal/index.js":
/*!***************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/modal/index.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "../../node_modules/rbx/components/modal/modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _modal__WEBPACK_IMPORTED_MODULE_0__["Modal"]; });



/***/ }),

/***/ "../../node_modules/rbx/components/modal/modal-background.js":
/*!**************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/modal/modal-background.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: ModalBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackground", function() { return ModalBackground; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _modal_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-context */ "../../node_modules/rbx/components/modal/modal-context.js");








const onClickHandler = (onClick, ctx) => event => {
  if (onClick !== undefined) {
    onClick(event);
  }

  if (ctx.closeOnBlur) {
    ctx.close();
  }
};

const ModalBackground = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      onClick = _a.onClick,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "onClick"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_modal_context__WEBPACK_IMPORTED_MODULE_6__["ModalContext"].Consumer, null, ctx => react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("modal-background", className),
    onClick: onClickHandler(onClick, ctx),
    ref: ref,
    role: "presentation"
  }, rest)));
}, {
  as: "div"
});
ModalBackground.displayName = "Modal.Background";
ModalBackground.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};

/***/ }),

/***/ "../../node_modules/rbx/components/modal/modal-card-body.js":
/*!*************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/modal/modal-card-body.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: ModalCardBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCardBody", function() { return ModalCardBody; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const ModalCardBody = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("modal-card-body", className),
    ref: ref
  }, rest));
}, {
  as: "section"
});
ModalCardBody.displayName = "Modal.Card.Body";

/***/ }),

/***/ "../../node_modules/rbx/components/modal/modal-card-foot.js":
/*!*************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/modal/modal-card-foot.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: ModalCardFoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCardFoot", function() { return ModalCardFoot; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const ModalCardFoot = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("modal-card-foot", className),
    ref: ref
  }, rest));
}, {
  as: "footer"
});
ModalCardFoot.displayName = "Modal.Card.Foot";

/***/ }),

/***/ "../../node_modules/rbx/components/modal/modal-card-head.js":
/*!*************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/modal/modal-card-head.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: ModalCardHead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCardHead", function() { return ModalCardHead; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../elements */ "../../node_modules/rbx/elements/index.js");
/* harmony import */ var _modal_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-context */ "../../node_modules/rbx/components/modal/modal-context.js");








const mapChildren = (children, close) => react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.map(children, (child, i) => {
  if (typeof child === "object" && child !== null && "type" in child) {
    if (child.type === _elements__WEBPACK_IMPORTED_MODULE_5__["Delete"]) {
      const _onClick = child.props.onClick;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(child, {
        onClick: event => {
          if (_onClick !== undefined) {
            _onClick(event);
          }

          close();
        }
      });
    } else if (child.type === react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
        children: mapChildren(child.props.children, close)
      });
    }
  }

  return child;
});

const ModalCardHead = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      children = _a.children,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "children"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_modal_context__WEBPACK_IMPORTED_MODULE_6__["ModalContext"].Consumer, null, ({
    close
  }) => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    children: mapChildren(children, close),
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("modal-card-head", className),
    ref: ref
  }, rest)));
}, {
  as: "header"
});
ModalCardHead.displayName = "Modal.Card.Head";

/***/ }),

/***/ "../../node_modules/rbx/components/modal/modal-card-title.js":
/*!**************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/modal/modal-card-title.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: ModalCardTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCardTitle", function() { return ModalCardTitle; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const ModalCardTitle = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("modal-card-title", className),
    ref: ref
  }, rest));
}, {
  as: "p"
});
ModalCardTitle.displayName = "Modal.Card.Title";

/***/ }),

/***/ "../../node_modules/rbx/components/modal/modal-card.js":
/*!********************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/modal/modal-card.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: ModalCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCard", function() { return ModalCard; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _modal_card_body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-card-body */ "../../node_modules/rbx/components/modal/modal-card-body.js");
/* harmony import */ var _modal_card_foot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-card-foot */ "../../node_modules/rbx/components/modal/modal-card-foot.js");
/* harmony import */ var _modal_card_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal-card-head */ "../../node_modules/rbx/components/modal/modal-card-head.js");
/* harmony import */ var _modal_card_title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal-card-title */ "../../node_modules/rbx/components/modal/modal-card-title.js");









const ModalCard = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("modal-card", className),
    ref: ref
  }, rest));
}, {
  as: "div"
}), {
  Body: _modal_card_body__WEBPACK_IMPORTED_MODULE_5__["ModalCardBody"],
  Foot: _modal_card_foot__WEBPACK_IMPORTED_MODULE_6__["ModalCardFoot"],
  Head: _modal_card_head__WEBPACK_IMPORTED_MODULE_7__["ModalCardHead"],
  Title: _modal_card_title__WEBPACK_IMPORTED_MODULE_8__["ModalCardTitle"]
});
ModalCard.displayName = "Modal.Card";

/***/ }),

/***/ "../../node_modules/rbx/components/modal/modal-close.js":
/*!*********************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/modal/modal-close.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: ModalClose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalClose", function() { return ModalClose; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _modal_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-context */ "../../node_modules/rbx/components/modal/modal-context.js");








const onClickHandler = (onClick, ctx) => event => {
  if (onClick !== undefined) {
    onClick(event);
  }

  ctx.close();
};

const ModalClose = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      onClick = _a.onClick,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "onClick"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_modal_context__WEBPACK_IMPORTED_MODULE_6__["ModalContext"].Consumer, null, ctx => react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    "aria-label": "close",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("modal-close", "is-large", className),
    onClick: onClickHandler(onClick, ctx),
    ref: ref
  }, rest)));
}, {
  as: "button"
});
ModalClose.displayName = "Modal.Close";
ModalClose.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};

/***/ }),

/***/ "../../node_modules/rbx/components/modal/modal-container.js":
/*!*************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/modal/modal-container.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: ModalContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainer", function() { return ModalContainer; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");
/* harmony import */ var _modal_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-portal */ "../../node_modules/rbx/components/modal/modal-portal.js");






class ModalContainer extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  constructor(props) {
    super(props);

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["canUseDOM"])()) {
      this.el = this.document.createElement("div");

      if (props.containerClassName !== undefined) {
        this.el.className = props.containerClassName;
      }
    }
  }

  componentDidMount() {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["canUseDOM"])()) {
      if (this.el !== undefined) {
        this.document.body.appendChild(this.el);
      }
    }
  }

  componentWillUnmount() {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["canUseDOM"])()) {
      if (this.el !== undefined) {
        this.document.body.removeChild(this.el);
      }
    }
  }

  render() {
    const _a = this.props,
          active = _a.active,
          containerClassName = _a.containerClassName,
          document = _a.document,
          rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["active", "containerClassName", "document"]);

    return this.el !== undefined && active === true ? react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.createPortal(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_modal_portal__WEBPACK_IMPORTED_MODULE_5__["ModalPortal"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
      document: this.document
    }, rest)), this.el) : false;
  }

  get document() {
    return this.props.document !== undefined ? this.props.document : document;
  }

}
ModalContainer.displayName = "Modal.Container";

/***/ }),

/***/ "../../node_modules/rbx/components/modal/modal-content.js":
/*!***********************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/modal/modal-content.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: ModalContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContent", function() { return ModalContent; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const ModalContent = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("modal-content", className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
ModalContent.displayName = "Modal.Content";

/***/ }),

/***/ "../../node_modules/rbx/components/modal/modal-context.js":
/*!***********************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/modal/modal-context.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: initialValue, ModalContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialValue", function() { return initialValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContext", function() { return ModalContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");


const initialValue = {
  close: _utils__WEBPACK_IMPORTED_MODULE_1__["noop"],
  closeOnBlur: false,
  closeOnEsc: true
};
const ModalContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(initialValue);

/***/ }),

/***/ "../../node_modules/rbx/components/modal/modal-portal.js":
/*!**********************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/modal/modal-portal.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: ModalPortal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPortal", function() { return ModalPortal; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _modal_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-context */ "../../node_modules/rbx/components/modal/modal-context.js");






class ModalPortal extends react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent {
  constructor() {
    super(...arguments);

    this.close = () => {
      if (this.props.onClose !== undefined) {
        this.props.onClose();
      }
    };

    this.handleKeydown = event => {
      if (this.props.closeOnEsc === true && event.code === "Escape") {
        this.close();
      }
    };
  }

  componentDidMount() {
    const _this$props = this.props,
          clipped = _this$props.clipped,
          document = _this$props.document;
    document.addEventListener("keydown", this.handleKeydown);
    const html = document.querySelector("html");

    if (html !== null) {
      if (clipped === true) {
        html.classList.add("is-clipped");
      }
    }
  }

  componentWillUnmount() {
    const document = this.props.document;
    document.removeEventListener("keydown", this.handleKeydown);
    const html = document.querySelector("html");

    if (html !== null) {
      html.classList.remove("is-clipped");
    }
  }

  render() {
    const _a = this.props,
          className = _a.className,
          closeOnBlur = _a.closeOnBlur,
          closeOnEsc = _a.closeOnEsc,
          innerRef = _a.innerRef,
          onClose = _a.onClose,
          rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "closeOnBlur", "closeOnEsc", "innerRef", "onClose"]);

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_modal_context__WEBPACK_IMPORTED_MODULE_5__["ModalContext"].Provider, {
      value: {
        close: this.close,
        closeOnBlur: closeOnBlur === true,
        closeOnEsc: closeOnEsc === true
      }
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("modal", "is-active", className),
      ref: innerRef
    }, rest)));
  }

}
ModalPortal.defaultProps = {
  closeOnBlur: _modal_context__WEBPACK_IMPORTED_MODULE_5__["initialValue"].closeOnBlur,
  closeOnEsc: _modal_context__WEBPACK_IMPORTED_MODULE_5__["initialValue"].closeOnEsc
};
ModalPortal.displayName = "Modal.Portal";

/***/ }),

/***/ "../../node_modules/rbx/components/modal/modal.js":
/*!***************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/modal/modal.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _modal_background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-background */ "../../node_modules/rbx/components/modal/modal-background.js");
/* harmony import */ var _modal_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-card */ "../../node_modules/rbx/components/modal/modal-card.js");
/* harmony import */ var _modal_close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-close */ "../../node_modules/rbx/components/modal/modal-close.js");
/* harmony import */ var _modal_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal-container */ "../../node_modules/rbx/components/modal/modal-container.js");
/* harmony import */ var _modal_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal-content */ "../../node_modules/rbx/components/modal/modal-content.js");
/* harmony import */ var _modal_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal-context */ "../../node_modules/rbx/components/modal/modal-context.js");
/* harmony import */ var _modal_portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal-portal */ "../../node_modules/rbx/components/modal/modal-portal.js");











const propTypes = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  closeOnBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  closeOnEsc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  clipped: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  containerClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  document: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
const Modal = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_3__["forwardRefAs"])((props, ref) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_modal_container__WEBPACK_IMPORTED_MODULE_7__["ModalContainer"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
  innerRef: ref
}, props)), {
  as: "div",
  clipped: true
}), {
  Background: _modal_background__WEBPACK_IMPORTED_MODULE_4__["ModalBackground"],
  Card: _modal_card__WEBPACK_IMPORTED_MODULE_5__["ModalCard"],
  Close: _modal_close__WEBPACK_IMPORTED_MODULE_6__["ModalClose"],
  Container: _modal_container__WEBPACK_IMPORTED_MODULE_7__["ModalContainer"],
  Content: _modal_content__WEBPACK_IMPORTED_MODULE_8__["ModalContent"],
  Context: _modal_context__WEBPACK_IMPORTED_MODULE_9__["ModalContext"],
  Portal: _modal_portal__WEBPACK_IMPORTED_MODULE_10__["ModalPortal"],
  propTypes
});

/***/ }),

/***/ "../../node_modules/rbx/components/navbar/index.js":
/*!****************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/navbar/index.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: Navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "../../node_modules/rbx/components/navbar/navbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return _navbar__WEBPACK_IMPORTED_MODULE_0__["Navbar"]; });



/***/ }),

/***/ "../../node_modules/rbx/components/navbar/navbar-brand.js":
/*!***********************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/navbar/navbar-brand.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: NavbarBrand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarBrand", function() { return NavbarBrand; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const NavbarBrand = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("navbar-brand", className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
NavbarBrand.displayName = "Navbar.Brand";

/***/ }),

/***/ "../../node_modules/rbx/components/navbar/navbar-burger.js":
/*!************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/navbar/navbar-burger.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: NavbarBurger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarBurger", function() { return NavbarBurger; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _navbar_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar-context */ "../../node_modules/rbx/components/navbar/navbar-context.js");








const onClickHandler = (onClick, ctx) => event => {
  if (onClick !== undefined) {
    onClick(event);
  }

  ctx.setActive(!ctx.active);
};

const NavbarBurger = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      onClick = _a.onClick,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "onClick"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_navbar_context__WEBPACK_IMPORTED_MODULE_6__["NavbarContext"].Consumer, null, ctx => react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("navbar-burger", {
      "is-active": ctx.active
    }, className),
    onClick: onClickHandler(onClick, ctx),
    ref: ref,
    role: "button"
  }, rest), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null)));
}, {
  as: "div"
});
NavbarBurger.displayName = "Navbar.Burger";
NavbarBurger.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};

/***/ }),

/***/ "../../node_modules/rbx/components/navbar/navbar-container.js":
/*!***************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/navbar/navbar-container.js ***!
  \***************************************************************************************************************************************************/
/*! exports provided: NAVBAR_DEFAULTS, NavbarContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVBAR_DEFAULTS", function() { return NAVBAR_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarContainer", function() { return NavbarContainer; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");
/* harmony import */ var _navbar_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar-context */ "../../node_modules/rbx/components/navbar/navbar-context.js");







const NAVBAR_DEFAULTS = {
  fixedAlignments: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["tuple"])("top", "bottom")
};
class NavbarContainer extends react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active === true
    };
  }

  componentWillUnmount() {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_5__["canUseDOM"])()) {
      const fixed = this.props.fixed;
      const html = this.document.querySelector("html");

      if (html !== null) {
        html.classList.remove(`has-navbar-fixed-${fixed}`);
      }
    }
  }

  render() {
    this.manageHtmlAttributes();

    const _a = this.props,
          active = _a.active,
          className = _a.className,
          color = _a.color,
          fixed = _a.fixed,
          innerRef = _a.innerRef,
          managed = _a.managed,
          transparent = _a.transparent,
          rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["active", "className", "color", "fixed", "innerRef", "managed", "transparent"]);

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_navbar_context__WEBPACK_IMPORTED_MODULE_6__["NavbarContext"].Provider, {
      value: {
        active: this.active,
        setActive: value => {
          this.active = value;
        }
      }
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("navbar", {
        "is-transparent": transparent,
        [`is-fixed-${fixed}`]: fixed,
        [`is-${color}`]: color
      }, className),
      ref: innerRef,
      role: "navigation"
    }, rest)));
  }

  get active() {
    return this.props.managed === true ? this.props.active === true : this.state.active;
  }

  set active(value) {
    if (this.props.managed !== true) {
      this.setState({
        active: value
      });
    }
  }

  get document() {
    return this.props.document !== undefined ? this.props.document : document;
  }

  manageHtmlAttributes() {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_5__["canUseDOM"])()) {
      const html = this.document.querySelector("html");

      if (html !== null) {
        html.classList.remove("has-navbar-fixed-top");
        html.classList.remove("has-navbar-fixed-bottom");

        if (this.props.fixed !== undefined) {
          html.classList.add(`has-navbar-fixed-${this.props.fixed}`);
        }
      }
    }
  }

}
NavbarContainer.defaultProps = {
  transparent: false
};
NavbarContainer.displayName = "Navbar.Container";

/***/ }),

/***/ "../../node_modules/rbx/components/navbar/navbar-context.js":
/*!*************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/navbar/navbar-context.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: initialValue, NavbarContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialValue", function() { return initialValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarContext", function() { return NavbarContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");


const initialValue = {
  active: false,
  setActive: _utils__WEBPACK_IMPORTED_MODULE_1__["noop"]
};
const NavbarContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(initialValue);

/***/ }),

/***/ "../../node_modules/rbx/components/navbar/navbar-divider.js":
/*!*************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/navbar/navbar-divider.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: NavbarDivider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarDivider", function() { return NavbarDivider; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const NavbarDivider = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("navbar-divider", className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
NavbarDivider.displayName = "Navbar.Divider";

/***/ }),

/***/ "../../node_modules/rbx/components/navbar/navbar-dropdown.js":
/*!**************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/navbar/navbar-dropdown.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: NAVBAR_DROPDOWN_DEFAULTS, NavbarDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVBAR_DROPDOWN_DEFAULTS", function() { return NAVBAR_DROPDOWN_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarDropdown", function() { return NavbarDropdown; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");







const NAVBAR_DROPDOWN_DEFAULTS = {
  alignments: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("right")
};
const NavbarDropdown = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var align = _a.align,
      boxed = _a.boxed,
      className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["align", "boxed", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("navbar-dropdown", {
      [`is-${align}`]: align,
      "is-boxed": boxed
    }, className),
    ref: ref
  }, rest));
}, {
  as: "span"
});
NavbarDropdown.displayName = "Navbar.Dropdown";
NavbarDropdown.propTypes = {
  align: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  boxed: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};

/***/ }),

/***/ "../../node_modules/rbx/components/navbar/navbar-item-container.js":
/*!********************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/navbar/navbar-item-container.js ***!
  \********************************************************************************************************************************************************/
/*! exports provided: NavbarItemContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarItemContainer", function() { return NavbarItemContainer; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");
/* harmony import */ var _navbar_item_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar-item-context */ "../../node_modules/rbx/components/navbar/navbar-item-context.js");







class NavbarItemContainer extends react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent {
  constructor(props) {
    super(props);
    this.ref = react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef();

    this.handleDocumentClick = event => {
      if (this.props.managed !== true && this.active && this.ref.current !== null) {
        if (event.target instanceof Element && !this.ref.current.contains(event.target)) {
          this.active = false;
        }
      }
    };

    this.handleOnClick = ctx => event => {
      if (this.props.onClick !== undefined) {
        this.props.onClick(event);
      }

      ctx.setActive(!ctx.active);
    };

    this.state = {
      active: props.active === true
    };
  }

  componentDidMount() {
    if (this.props.dropdown === true) {
      document.addEventListener("click", this.handleDocumentClick);
    }
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleDocumentClick);
  }

  render() {
    const _a = this.props,
          as = _a.as,
          active = _a.active,
          initialClassName = _a.className,
          dropdown = _a.dropdown,
          expanded = _a.expanded,
          hoverable = _a.hoverable,
          innerRef = _a.innerRef,
          managed = _a.managed,
          onClick = _a.onClick,
          tab = _a.tab,
          up = _a.up,
          rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["as", "active", "className", "dropdown", "expanded", "hoverable", "innerRef", "managed", "onClick", "tab", "up"]);

    const className = classnames__WEBPACK_IMPORTED_MODULE_2___default()("navbar-item", {
      "has-dropdown": dropdown,
      "has-dropdown-up": up,
      "is-active": this.active,
      "is-expanded": expanded,
      "is-hoverable": hoverable,
      "is-tab": tab
    }, initialClassName);
    const ref = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["combineRefs"])(this.ref, innerRef);

    if (dropdown === true) {
      const asOverride = as === "a" ? "div" : as;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_navbar_item_context__WEBPACK_IMPORTED_MODULE_6__["NavbarItemContext"].Provider, {
        value: {
          active: this.active,
          setActive: value => this.active = value
        }
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
        as: asOverride,
        className: className,
        ref: ref
      }, rest)));
    }

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_navbar_item_context__WEBPACK_IMPORTED_MODULE_6__["NavbarItemContext"].Consumer, null, ctx => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
      as: as,
      className: className,
      onClick: this.handleOnClick(ctx),
      ref: ref
    }, rest)));
  }

  get active() {
    return this.props.managed === true ? this.props.active === true : this.state.active;
  }

  set active(value) {
    if (this.props.managed !== true) {
      this.setState({
        active: value
      });
    }
  }

}
NavbarItemContainer.displayName = "Navbar.Item.Container";

/***/ }),

/***/ "../../node_modules/rbx/components/navbar/navbar-item-context.js":
/*!******************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/navbar/navbar-item-context.js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: initialValue, NavbarItemContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialValue", function() { return initialValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarItemContext", function() { return NavbarItemContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");


const initialValue = {
  active: false,
  setActive: _utils__WEBPACK_IMPORTED_MODULE_1__["noop"]
};
const NavbarItemContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(initialValue);

/***/ }),

/***/ "../../node_modules/rbx/components/navbar/navbar-item.js":
/*!**********************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/navbar/navbar-item.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: NavbarItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarItem", function() { return NavbarItem; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _navbar_item_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar-item-container */ "../../node_modules/rbx/components/navbar/navbar-item-container.js");





const NavbarItem = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_3__["forwardRefAs"])((props, ref) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_navbar_item_container__WEBPACK_IMPORTED_MODULE_4__["NavbarItemContainer"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
  innerRef: ref
}, props)), {
  as: "a"
}), {
  Container: _navbar_item_container__WEBPACK_IMPORTED_MODULE_4__["NavbarItemContainer"]
});
NavbarItem.displayName = "Navbar.Item";
NavbarItem.propTypes = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  dropdown: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hoverable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  managed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  tab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  up: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "../../node_modules/rbx/components/navbar/navbar-link.js":
/*!**********************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/navbar/navbar-link.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: NavbarLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarLink", function() { return NavbarLink; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _navbar_item_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar-item-context */ "../../node_modules/rbx/components/navbar/navbar-item-context.js");








const handleOnClick = (onClick, ctx) => event => {
  if (onClick !== undefined) {
    onClick(event);
  }

  ctx.setActive(!ctx.active);
};

const NavbarLink = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var arrowless = _a.arrowless,
      className = _a.className,
      onClick = _a.onClick,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["arrowless", "className", "onClick"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_navbar_item_context__WEBPACK_IMPORTED_MODULE_6__["NavbarItemContext"].Consumer, null, ctx => react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("navbar-link", {
      "is-arrowless": arrowless
    }, className),
    onClick: handleOnClick(onClick, ctx),
    ref: ref
  }, rest)));
}, {
  as: "span"
});
NavbarLink.displayName = "Navbar.Link";
NavbarLink.propTypes = {
  arrowless: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};

/***/ }),

/***/ "../../node_modules/rbx/components/navbar/navbar-menu.js":
/*!**********************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/navbar/navbar-menu.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: NavbarMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarMenu", function() { return NavbarMenu; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _navbar_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar-context */ "../../node_modules/rbx/components/navbar/navbar-context.js");






const NavbarMenu = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_navbar_context__WEBPACK_IMPORTED_MODULE_5__["NavbarContext"].Consumer, null, ({
    active
  }) => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("navbar-menu", {
      "is-active": active
    }, className),
    ref: ref
  }, rest)));
}, {
  as: "div"
});
NavbarMenu.displayName = "Navbar.Menu";

/***/ }),

/***/ "../../node_modules/rbx/components/navbar/navbar-segment.js":
/*!*************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/navbar/navbar-segment.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: NAVBAR_SEGMENT_DEFAULTS, NavbarSegment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVBAR_SEGMENT_DEFAULTS", function() { return NAVBAR_SEGMENT_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarSegment", function() { return NavbarSegment; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");







const NAVBAR_SEGMENT_DEFAULTS = {
  alignments: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("start", "end")
};
const NavbarSegment = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var align = _a.align,
      className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["align", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      [`navbar-${align}`]: align
    }, className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
NavbarSegment.displayName = "Navbar.Segment";
NavbarSegment.propTypes = {
  align: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]).isRequired
};

/***/ }),

/***/ "../../node_modules/rbx/components/navbar/navbar.js":
/*!*****************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/navbar/navbar.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: Navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return Navbar; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _navbar_brand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar-brand */ "../../node_modules/rbx/components/navbar/navbar-brand.js");
/* harmony import */ var _navbar_burger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar-burger */ "../../node_modules/rbx/components/navbar/navbar-burger.js");
/* harmony import */ var _navbar_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar-container */ "../../node_modules/rbx/components/navbar/navbar-container.js");
/* harmony import */ var _navbar_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar-context */ "../../node_modules/rbx/components/navbar/navbar-context.js");
/* harmony import */ var _navbar_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar-divider */ "../../node_modules/rbx/components/navbar/navbar-divider.js");
/* harmony import */ var _navbar_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar-dropdown */ "../../node_modules/rbx/components/navbar/navbar-dropdown.js");
/* harmony import */ var _navbar_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar-item */ "../../node_modules/rbx/components/navbar/navbar-item.js");
/* harmony import */ var _navbar_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar-link */ "../../node_modules/rbx/components/navbar/navbar-link.js");
/* harmony import */ var _navbar_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar-menu */ "../../node_modules/rbx/components/navbar/navbar-menu.js");
/* harmony import */ var _navbar_segment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbar-segment */ "../../node_modules/rbx/components/navbar/navbar-segment.js");














const Navbar = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_3__["forwardRefAs"])((props, ref) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_navbar_container__WEBPACK_IMPORTED_MODULE_6__["NavbarContainer"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
  innerRef: ref
}, props)), {
  as: "nav"
}), {
  Brand: _navbar_brand__WEBPACK_IMPORTED_MODULE_4__["NavbarBrand"],
  Burger: _navbar_burger__WEBPACK_IMPORTED_MODULE_5__["NavbarBurger"],
  Container: _navbar_container__WEBPACK_IMPORTED_MODULE_6__["NavbarContainer"],
  Context: _navbar_context__WEBPACK_IMPORTED_MODULE_7__["NavbarContext"],
  Divider: _navbar_divider__WEBPACK_IMPORTED_MODULE_8__["NavbarDivider"],
  Dropdown: _navbar_dropdown__WEBPACK_IMPORTED_MODULE_9__["NavbarDropdown"],
  Item: _navbar_item__WEBPACK_IMPORTED_MODULE_10__["NavbarItem"],
  Link: _navbar_link__WEBPACK_IMPORTED_MODULE_11__["NavbarLink"],
  Menu: _navbar_menu__WEBPACK_IMPORTED_MODULE_12__["NavbarMenu"],
  Segment: _navbar_segment__WEBPACK_IMPORTED_MODULE_13__["NavbarSegment"]
});
Navbar.displayName = "Navbar";
Navbar.propTypes = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  document: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  managed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  transparent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "../../node_modules/rbx/components/pagination/index.js":
/*!********************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/pagination/index.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: Pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination */ "../../node_modules/rbx/components/pagination/pagination.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return _pagination__WEBPACK_IMPORTED_MODULE_0__["Pagination"]; });



/***/ }),

/***/ "../../node_modules/rbx/components/pagination/pagination-ellipsis.js":
/*!**********************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/pagination/pagination-ellipsis.js ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: PaginationEllipsis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationEllipsis", function() { return PaginationEllipsis; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const PaginationEllipsis = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("pagination-ellipsis", className),
    ref: ref
  }, rest)));
}, {
  as: "span",
  children: "…"
});
PaginationEllipsis.displayName = "Pagination.Ellipsis";

/***/ }),

/***/ "../../node_modules/rbx/components/pagination/pagination-link.js":
/*!******************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/pagination/pagination-link.js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: PaginationLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationLink", function() { return PaginationLink; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");






const PaginationLink = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      current = _a.current,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "current"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("pagination-link", {
      "is-current": current
    }, className),
    ref: ref
  }, rest)));
}, {
  as: "a"
});
PaginationLink.displayName = "Pagination.Link";
PaginationLink.propTypes = {
  current: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};

/***/ }),

/***/ "../../node_modules/rbx/components/pagination/pagination-list.js":
/*!******************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/pagination/pagination-list.js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: PaginationList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationList", function() { return PaginationList; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const PaginationList = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("pagination-list", className),
    ref: ref
  }, rest));
}, {
  as: "ul"
});
PaginationList.displayName = "Pagination.List";

/***/ }),

/***/ "../../node_modules/rbx/components/pagination/pagination-step.js":
/*!******************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/pagination/pagination-step.js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: PAGINATION_STEP_DEFAULTS, PaginationStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGINATION_STEP_DEFAULTS", function() { return PAGINATION_STEP_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationStep", function() { return PaginationStep; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");







const PAGINATION_STEP_DEFAULTS = {
  alignments: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("next", "previous")
};
const PaginationStep = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var align = _a.align,
      className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["align", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      [`pagination-${align}`]: align
    }, className),
    ref: ref
  }, rest));
}, {
  as: "a"
});
PaginationStep.displayName = "Pagination.Step";
PaginationStep.propTypes = {
  align: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]).isRequired
};

/***/ }),

/***/ "../../node_modules/rbx/components/pagination/pagination.js":
/*!*************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/pagination/pagination.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: PAGINATION_DEFAULTS, Pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGINATION_DEFAULTS", function() { return PAGINATION_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");
/* harmony import */ var _pagination_ellipsis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pagination-ellipsis */ "../../node_modules/rbx/components/pagination/pagination-ellipsis.js");
/* harmony import */ var _pagination_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pagination-link */ "../../node_modules/rbx/components/pagination/pagination-link.js");
/* harmony import */ var _pagination_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pagination-list */ "../../node_modules/rbx/components/pagination/pagination-list.js");
/* harmony import */ var _pagination_step__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pagination-step */ "../../node_modules/rbx/components/pagination/pagination-step.js");











const PAGINATION_DEFAULTS = {
  alignments: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("centered", "right"),
  sizes: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("small", "medium", "large")
};
const Pagination = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var align = _a.align,
      className = _a.className,
      rounded = _a.rounded,
      size = _a.size,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["align", "className", "rounded", "size"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("pagination", {
      [`is-${align}`]: align,
      "is-rounded": rounded,
      [`is-${size}`]: size
    }, className),
    ref: ref
  }, rest));
}, {
  as: "nav"
}), {
  Ellipsis: _pagination_ellipsis__WEBPACK_IMPORTED_MODULE_7__["PaginationEllipsis"],
  Link: _pagination_link__WEBPACK_IMPORTED_MODULE_8__["PaginationLink"],
  List: _pagination_list__WEBPACK_IMPORTED_MODULE_9__["PaginationList"],
  Step: _pagination_step__WEBPACK_IMPORTED_MODULE_10__["PaginationStep"]
});
Pagination.displayName = "Pagination";
Pagination.propTypes = {
  align: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  rounded: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};

/***/ }),

/***/ "../../node_modules/rbx/components/panel/index.js":
/*!***************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/panel/index.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: Panel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel */ "../../node_modules/rbx/components/panel/panel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return _panel__WEBPACK_IMPORTED_MODULE_0__["Panel"]; });



/***/ }),

/***/ "../../node_modules/rbx/components/panel/panel-block.js":
/*!*********************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/panel/panel-block.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: PanelBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelBlock", function() { return PanelBlock; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");






const PanelBlock = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var active = _a.active,
      className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["active", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("panel-block", {
      "is-active": active
    }, className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
PanelBlock.displayName = "Panel.Block";
PanelBlock.propTypes = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};

/***/ }),

/***/ "../../node_modules/rbx/components/panel/panel-heading.js":
/*!***********************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/panel/panel-heading.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: PanelHeading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelHeading", function() { return PanelHeading; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const PanelHeading = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("panel-heading", className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
PanelHeading.displayName = "Panel.Heading";

/***/ }),

/***/ "../../node_modules/rbx/components/panel/panel-icon.js":
/*!********************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/panel/panel-icon.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: PanelIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelIcon", function() { return PanelIcon; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const PanelIcon = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("panel-icon", className),
    ref: ref
  }, rest));
}, {
  as: "span"
});
PanelIcon.displayName = "Panel.Icon";

/***/ }),

/***/ "../../node_modules/rbx/components/panel/panel-tab-group.js":
/*!*************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/panel/panel-tab-group.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: PanelTabGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelTabGroup", function() { return PanelTabGroup; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const PanelTabGroup = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("panel-tabs", className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
PanelTabGroup.displayName = "Panel.Tab.Group";

/***/ }),

/***/ "../../node_modules/rbx/components/panel/panel-tab.js":
/*!*******************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/panel/panel-tab.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: PanelTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelTab", function() { return PanelTab; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _panel_tab_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./panel-tab-group */ "../../node_modules/rbx/components/panel/panel-tab-group.js");







const PanelTab = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var active = _a.active,
      className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["active", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      "is-active": active
    }, className),
    ref: ref
  }, rest));
}, {
  as: "a"
}), {
  Group: _panel_tab_group__WEBPACK_IMPORTED_MODULE_6__["PanelTabGroup"]
});
PanelTab.displayName = "Panel.Tab";
PanelTab.propTypes = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};

/***/ }),

/***/ "../../node_modules/rbx/components/panel/panel.js":
/*!***************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/panel/panel.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: Panel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return Panel; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _panel_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panel-block */ "../../node_modules/rbx/components/panel/panel-block.js");
/* harmony import */ var _panel_heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./panel-heading */ "../../node_modules/rbx/components/panel/panel-heading.js");
/* harmony import */ var _panel_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./panel-icon */ "../../node_modules/rbx/components/panel/panel-icon.js");
/* harmony import */ var _panel_tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./panel-tab */ "../../node_modules/rbx/components/panel/panel-tab.js");









const Panel = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("panel", className),
    ref: ref
  }, rest));
}, {
  as: "nav"
}), {
  Block: _panel_block__WEBPACK_IMPORTED_MODULE_5__["PanelBlock"],
  Heading: _panel_heading__WEBPACK_IMPORTED_MODULE_6__["PanelHeading"],
  Icon: _panel_icon__WEBPACK_IMPORTED_MODULE_7__["PanelIcon"],
  Tab: _panel_tab__WEBPACK_IMPORTED_MODULE_8__["PanelTab"]
});
Panel.displayName = "Panel";

/***/ }),

/***/ "../../node_modules/rbx/components/tab/index.js":
/*!*************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/tab/index.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: Tab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab */ "../../node_modules/rbx/components/tab/tab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return _tab__WEBPACK_IMPORTED_MODULE_0__["Tab"]; });



/***/ }),

/***/ "../../node_modules/rbx/components/tab/tab-group.js":
/*!*****************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/tab/tab-group.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: TAB_GROUP_DEFAULTS, TabGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_GROUP_DEFAULTS", function() { return TAB_GROUP_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabGroup", function() { return TabGroup; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");







const TAB_GROUP_DEFAULTS = {
  alignments: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("centered", "right"),
  sizes: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("small", "medium", "large"),
  kinds: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("boxed", "toggle", "toggle-rounded")
};
const TabGroup = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var align = _a.align,
      children = _a.children,
      className = _a.className,
      fullwidth = _a.fullwidth,
      kind = _a.kind,
      size = _a.size,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["align", "children", "className", "fullwidth", "kind", "size"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("tabs", {
      [`is-${align}`]: align,
      [`is-${size}`]: size,
      "is-fullwidth": fullwidth,
      [`is-${kind}`]: kind,
      "is-toggle": kind === "toggle" || kind === "toggle-rounded",
      "is-toggle-rounded": kind === "toggle-rounded"
    }, className),
    children: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", null, children),
    ref: ref
  }, rest));
}, {
  as: "div"
});
TabGroup.displayName = "Tab.Group";
TabGroup.propTypes = {
  align: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  fullwidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  kind: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};

/***/ }),

/***/ "../../node_modules/rbx/components/tab/tab.js":
/*!***********************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/components/tab/tab.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: Tab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _tab_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-group */ "../../node_modules/rbx/components/tab/tab-group.js");







const Tab = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var active = _a.active,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["active"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      "is-active": active
    })
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    ref: ref
  }, rest)));
}, {
  as: "a"
}), {
  Group: _tab_group__WEBPACK_IMPORTED_MODULE_6__["TabGroup"]
});
Tab.displayName = "Tab";
Tab.propTypes = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};

/***/ }),

/***/ "../../node_modules/rbx/elements/box/box.js":
/*!*********************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/box/box.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const Box = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("box", className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
Box.displayName = "Box";

/***/ }),

/***/ "../../node_modules/rbx/elements/box/index.js":
/*!***********************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/box/index.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./box */ "../../node_modules/rbx/elements/box/box.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return _box__WEBPACK_IMPORTED_MODULE_0__["Box"]; });



/***/ }),

/***/ "../../node_modules/rbx/elements/button/button-group.js":
/*!*********************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/button/button-group.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: BUTTON_GROUP_DEFAULTS, ButtonGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_GROUP_DEFAULTS", function() { return BUTTON_GROUP_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return ButtonGroup; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");







const BUTTON_GROUP_DEFAULTS = {
  alignments: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("centered", "right"),
  sizes: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("small", "medium", "large")
};
const ButtonGroup = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var align = _a.align,
      className = _a.className,
      hasAddons = _a.hasAddons,
      size = _a.size,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["align", "className", "hasAddons", "size"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("buttons", {
      [`are-${size}`]: size,
      "has-addons": hasAddons,
      [`is-${[align]}`]: align
    }, className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
ButtonGroup.displayName = "Button.Group";
ButtonGroup.propTypes = {
  align: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  hasAddons: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};

/***/ }),

/***/ "../../node_modules/rbx/elements/button/button.js":
/*!***************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/button/button.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: BUTTON_DEFAULTS, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_DEFAULTS", function() { return BUTTON_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");
/* harmony import */ var _button_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./button-group */ "../../node_modules/rbx/elements/button/button-group.js");








const BUTTON_DEFAULTS = {
  sizes: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("small", "normal", "medium", "large"),
  states: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("hovered", "focused", "active", "loading")
};
const propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  fullwidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  inverted: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  outlined: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  rounded: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  state: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  static: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  text: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
const Button = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      color = _a.color,
      fullwidth = _a.fullwidth,
      inverted = _a.inverted,
      outlined = _a.outlined,
      rounded = _a.rounded,
      selected = _a.selected,
      size = _a.size,
      state = _a.state,
      isStatic = _a.static,
      text = _a.text,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "color", "fullwidth", "inverted", "outlined", "rounded", "selected", "size", "state", "static", "text"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("button", {
      [`is-${color}`]: color,
      "is-fullwidth": fullwidth,
      "is-inverted": inverted,
      "is-outlined": outlined,
      "is-rounded": rounded,
      "is-selected": selected,
      [`is-${size}`]: size,
      [`is-${state}`]: state,
      "is-static": isStatic,
      "is-text": text
    }, className),
    ref: ref
  }, rest));
}, {
  as: "button"
}), {
  Group: _button_group__WEBPACK_IMPORTED_MODULE_7__["ButtonGroup"]
});
Button.displayName = "Button";
Button.propTypes = propTypes;

/***/ }),

/***/ "../../node_modules/rbx/elements/button/index.js":
/*!**************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/button/index.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "../../node_modules/rbx/elements/button/button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["Button"]; });



/***/ }),

/***/ "../../node_modules/rbx/elements/container/container.js":
/*!*********************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/container/container.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");






const Container = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      fluid = _a.fluid,
      breakpoint = _a.breakpoint,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "fluid", "breakpoint"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("container", {
      [`is-${breakpoint}`]: breakpoint,
      "is-fluid": fluid
    }, className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
Container.displayName = "Container";
Container.propTypes = {
  breakpoint: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  fluid: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};

/***/ }),

/***/ "../../node_modules/rbx/elements/container/index.js":
/*!*****************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/container/index.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "../../node_modules/rbx/elements/container/container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _container__WEBPACK_IMPORTED_MODULE_0__["Container"]; });



/***/ }),

/***/ "../../node_modules/rbx/elements/content/content-ordered-list-item.js":
/*!***********************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/content/content-ordered-list-item.js ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: ContentOrderedListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentOrderedListItem", function() { return ContentOrderedListItem; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");



const ContentOrderedListItem = Object(_base__WEBPACK_IMPORTED_MODULE_2__["forwardRefAs"])((props, ref) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_2__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
  ref: ref
}, props)), {
  as: "li"
});
ContentOrderedListItem.displayName = "Content.OrderedList.Item";

/***/ }),

/***/ "../../node_modules/rbx/elements/content/content-ordered-list.js":
/*!******************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/content/content-ordered-list.js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: CONTENT_ORDERED_LIST_DEFAULTS, ContentOrderedList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_ORDERED_LIST_DEFAULTS", function() { return CONTENT_ORDERED_LIST_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentOrderedList", function() { return ContentOrderedList; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");
/* harmony import */ var _content_ordered_list_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content-ordered-list-item */ "../../node_modules/rbx/elements/content/content-ordered-list-item.js");








const CONTENT_ORDERED_LIST_DEFAULTS = {
  types: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("lower-alpha", "lower-roman", "upper-alpha", "upper-roman")
};
const ContentOrderedList = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      type = _a.type,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "type"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      [`is-${type}`]: type
    }, className),
    ref: ref
  }, rest));
}, {
  as: "ol"
}), {
  Item: _content_ordered_list_item__WEBPACK_IMPORTED_MODULE_7__["ContentOrderedListItem"]
});
ContentOrderedList.displayName = "Content.OrderedList";
ContentOrderedList.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};

/***/ }),

/***/ "../../node_modules/rbx/elements/content/content.js":
/*!*****************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/content/content.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: CONTENT_DEFAULTS, Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_DEFAULTS", function() { return CONTENT_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");
/* harmony import */ var _content_ordered_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content-ordered-list */ "../../node_modules/rbx/elements/content/content-ordered-list.js");








const CONTENT_DEFAULTS = {
  sizes: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("small", "medium", "large")
};
const Content = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      size = _a.size,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "size"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("content", {
      [`is-${size}`]: size
    }, className),
    ref: ref
  }, rest));
}, {
  as: "div"
}), {
  OrderedList: _content_ordered_list__WEBPACK_IMPORTED_MODULE_7__["ContentOrderedList"]
});
Content.displayName = "Content";
Content.propTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};

/***/ }),

/***/ "../../node_modules/rbx/elements/content/index.js":
/*!***************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/content/index.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ "../../node_modules/rbx/elements/content/content.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return _content__WEBPACK_IMPORTED_MODULE_0__["Content"]; });



/***/ }),

/***/ "../../node_modules/rbx/elements/form/checkbox.js":
/*!***************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/form/checkbox.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");



const Checkbox = Object(_base__WEBPACK_IMPORTED_MODULE_2__["forwardRefAs"])((props, ref) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_2__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
  ref: ref,
  type: "checkbox"
}, props)), {
  as: "input"
});
Checkbox.displayName = "Checkbox";

/***/ }),

/***/ "../../node_modules/rbx/elements/form/control.js":
/*!**************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/form/control.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: CONTROL_DEFAULTS, Control */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL_DEFAULTS", function() { return CONTROL_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Control", function() { return Control; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");







const CONTROL_DEFAULTS = {
  sizes: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("small", "medium", "large")
};
const Control = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      expanded = _a.expanded,
      iconLeft = _a.iconLeft,
      iconRight = _a.iconRight,
      loading = _a.loading,
      size = _a.size,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "expanded", "iconLeft", "iconRight", "loading", "size"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("control", {
      "has-icons-left": iconLeft,
      "has-icons-right": iconRight,
      "is-expanded": expanded,
      "is-loading": loading,
      [`is-${size}`]: size
    }, className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
Control.displayName = "Control";
Control.propTypes = {
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  iconLeft: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  iconRight: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};

/***/ }),

/***/ "../../node_modules/rbx/elements/form/field-body.js":
/*!*****************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/form/field-body.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: FieldBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldBody", function() { return FieldBody; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const FieldBody = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("field-body", className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
FieldBody.displayName = "Field.Body";

/***/ }),

/***/ "../../node_modules/rbx/elements/form/field-label.js":
/*!******************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/form/field-label.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: FIELD_LABEL_DEFAULTS, FieldLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELD_LABEL_DEFAULTS", function() { return FIELD_LABEL_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldLabel", function() { return FieldLabel; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");







const FIELD_LABEL_DEFAULTS = {
  sizes: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("small", "normal", "medium", "large")
};
const FieldLabel = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      size = _a.size,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "size"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("field-label", {
      [`is-${size}`]: size
    }, className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
FieldLabel.displayName = "Field.Label";
FieldLabel.propTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};

/***/ }),

/***/ "../../node_modules/rbx/elements/form/field.js":
/*!************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/form/field.js ***!
  \************************************************************************************************************************************/
/*! exports provided: FIELD_DEFAULTS, Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELD_DEFAULTS", function() { return FIELD_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");
/* harmony import */ var _field_body__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./field-body */ "../../node_modules/rbx/elements/form/field-body.js");
/* harmony import */ var _field_label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./field-label */ "../../node_modules/rbx/elements/form/field-label.js");









const FIELD_DEFAULTS = {
  alignments: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("centered", "right"),
  kinds: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("addons", "group")
};
const Field = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((props, ref) => {
  const align = props.align,
        expanded = props.expanded,
        horizontal = props.horizontal,
        kind = props.kind,
        multiline = props.multiline,
        narrow = props.narrow,
        rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](props, ["align", "expanded", "horizontal", "kind", "multiline", "narrow"]);

  let k;

  if (kind === "addons") {
    k = "has-addons";
  } else if (kind === "group") {
    k = "is-grouped";
  }

  rest.className = classnames__WEBPACK_IMPORTED_MODULE_2___default()("field", {
    [`${k}`]: k,
    [`${k}-${align}`]: k !== undefined && align !== undefined,
    [`${k}-multiline`]: k === "is-grouped" && multiline === true,
    "is-expanded": expanded,
    "is-horizontal": horizontal,
    "is-narrow": narrow
  }, rest.className);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    ref: ref
  }, rest));
}, {
  as: "div"
}), {
  Body: _field_body__WEBPACK_IMPORTED_MODULE_7__["FieldBody"],
  Label: _field_label__WEBPACK_IMPORTED_MODULE_8__["FieldLabel"]
});
Field.displayName = "Field";
Field.propTypes = {
  align: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  horizontal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  kind: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  multiline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  narrow: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};

/***/ }),

/***/ "../../node_modules/rbx/elements/form/fieldset.js":
/*!***************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/form/fieldset.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: Fieldset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fieldset", function() { return Fieldset; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const Fieldset = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var disabled = _a.disabled,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["disabled"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    disabled: disabled,
    ref: ref
  }, rest));
}, {
  as: "fieldset"
});
Fieldset.displayName = "Fieldset";
Fieldset.propTypes = {
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

/***/ }),

/***/ "../../node_modules/rbx/elements/form/file-cta.js":
/*!***************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/form/file-cta.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: FileCTA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileCTA", function() { return FileCTA; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const FileCTA = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("file-cta", className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
FileCTA.displayName = "File.CTA";

/***/ }),

/***/ "../../node_modules/rbx/elements/form/file-icon.js":
/*!****************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/form/file-icon.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: FileIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileIcon", function() { return FileIcon; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const FileIcon = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("file-icon", className),
    ref: ref
  }, rest));
}, {
  as: "span"
});
FileIcon.displayName = "File.Icon";

/***/ }),

/***/ "../../node_modules/rbx/elements/form/file-input.js":
/*!*****************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/form/file-input.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: FileInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInput", function() { return FileInput; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const FileInput = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("file-input", className),
    ref: ref,
    type: "file"
  }, rest));
}, {
  as: "input"
});
FileInput.displayName = "File.Input";

/***/ }),

/***/ "../../node_modules/rbx/elements/form/file-label.js":
/*!*****************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/form/file-label.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: FileLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileLabel", function() { return FileLabel; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const FileLabel = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("file-label", className),
    ref: ref
  }, rest));
}, {
  as: "label"
});
FileLabel.displayName = "File.Label";

/***/ }),

/***/ "../../node_modules/rbx/elements/form/file-name.js":
/*!****************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/form/file-name.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: FileName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileName", function() { return FileName; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const FileName = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("file-name", className),
    ref: ref
  }, rest));
}, {
  as: "span"
});
FileName.displayName = "File.Name";

/***/ }),

/***/ "../../node_modules/rbx/elements/form/file.js":
/*!***********************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/form/file.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: FILE_DEFAULTS, File */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILE_DEFAULTS", function() { return FILE_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return File; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");
/* harmony import */ var _file_cta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./file-cta */ "../../node_modules/rbx/elements/form/file-cta.js");
/* harmony import */ var _file_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./file-icon */ "../../node_modules/rbx/elements/form/file-icon.js");
/* harmony import */ var _file_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./file-input */ "../../node_modules/rbx/elements/form/file-input.js");
/* harmony import */ var _file_label__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./file-label */ "../../node_modules/rbx/elements/form/file-label.js");
/* harmony import */ var _file_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./file-name */ "../../node_modules/rbx/elements/form/file-name.js");












const FILE_DEFAULTS = {
  alignments: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("centered", "right"),
  sizes: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("small", "medium", "large")
};
const File = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var align = _a.align,
      boxed = _a.boxed,
      className = _a.className,
      color = _a.color,
      fullwidth = _a.fullwidth,
      hasName = _a.hasName,
      size = _a.size,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["align", "boxed", "className", "color", "fullwidth", "hasName", "size"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("file", {
      "has-name": hasName,
      [`is-${align}`]: align,
      "is-boxed": boxed,
      [`is-${color}`]: color,
      "is-fullwidth": fullwidth,
      [`is-${size}`]: size
    }, className),
    ref: ref
  }, rest));
}, {
  as: "div"
}), {
  CTA: _file_cta__WEBPACK_IMPORTED_MODULE_7__["FileCTA"],
  Icon: _file_icon__WEBPACK_IMPORTED_MODULE_8__["FileIcon"],
  Input: _file_input__WEBPACK_IMPORTED_MODULE_9__["FileInput"],
  Label: _file_label__WEBPACK_IMPORTED_MODULE_10__["FileLabel"],
  Name: _file_name__WEBPACK_IMPORTED_MODULE_11__["FileName"]
});
File.displayName = "File";
File.propTypes = {
  align: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  boxed: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  fullwidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  hasName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};

/***/ }),

/***/ "../../node_modules/rbx/elements/form/help.js":
/*!***********************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/form/help.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: Help */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Help", function() { return Help; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");






const Help = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      color = _a.color,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "color"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("help", {
      [`is-${color}`]: color
    }, className),
    ref: ref
  }, rest));
}, {
  as: "p"
});
Help.displayName = "Help";
Help.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};

/***/ }),

/***/ "../../node_modules/rbx/elements/form/index.js":
/*!************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/form/index.js ***!
  \************************************************************************************************************************************/
/*! exports provided: Checkbox, Control, Field, Fieldset, File, Help, Input, Label, Radio, Select, Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox */ "../../node_modules/rbx/elements/form/checkbox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _checkbox__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]; });

/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control */ "../../node_modules/rbx/elements/form/control.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Control", function() { return _control__WEBPACK_IMPORTED_MODULE_1__["Control"]; });

/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field */ "../../node_modules/rbx/elements/form/field.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return _field__WEBPACK_IMPORTED_MODULE_2__["Field"]; });

/* harmony import */ var _fieldset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fieldset */ "../../node_modules/rbx/elements/form/fieldset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fieldset", function() { return _fieldset__WEBPACK_IMPORTED_MODULE_3__["Fieldset"]; });

/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file */ "../../node_modules/rbx/elements/form/file.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "File", function() { return _file__WEBPACK_IMPORTED_MODULE_4__["File"]; });

/* harmony import */ var _help__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./help */ "../../node_modules/rbx/elements/form/help.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Help", function() { return _help__WEBPACK_IMPORTED_MODULE_5__["Help"]; });

/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input */ "../../node_modules/rbx/elements/form/input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _input__WEBPACK_IMPORTED_MODULE_6__["Input"]; });

/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./label */ "../../node_modules/rbx/elements/form/label.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _label__WEBPACK_IMPORTED_MODULE_7__["Label"]; });

/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./radio */ "../../node_modules/rbx/elements/form/radio.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _radio__WEBPACK_IMPORTED_MODULE_8__["Radio"]; });

/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./select */ "../../node_modules/rbx/elements/form/select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _select__WEBPACK_IMPORTED_MODULE_9__["Select"]; });

/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./textarea */ "../../node_modules/rbx/elements/form/textarea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _textarea__WEBPACK_IMPORTED_MODULE_10__["Textarea"]; });













/***/ }),

/***/ "../../node_modules/rbx/elements/form/input.js":
/*!************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/form/input.js ***!
  \************************************************************************************************************************************/
/*! exports provided: INPUT_DEFAULTS, Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUT_DEFAULTS", function() { return INPUT_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");







const INPUT_DEFAULTS = {
  sizes: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("small", "medium", "large"),
  states: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("focused", "hovered"),
  types: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("text", "email", "tel", "password", "number", "search", "color", "date", "time")
};
const Input = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      color = _a.color,
      readOnly = _a.readOnly,
      rounded = _a.rounded,
      size = _a.size,
      state = _a.state,
      isStatic = _a.static,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "color", "readOnly", "rounded", "size", "state", "static"]);

  const isReadOnly = readOnly === true || isStatic === true;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("input", {
      [`is-${color}`]: color,
      "is-rounded": rounded,
      [`is-${size}`]: size,
      "is-static": isStatic,
      [`is-${state}`]: state
    }, className),
    readOnly: isReadOnly,
    ref: ref
  }, rest));
}, {
  as: "input"
});
Input.displayName = "Input";
Input.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  rounded: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  state: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  static: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};

/***/ }),

/***/ "../../node_modules/rbx/elements/form/label.js":
/*!************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/form/label.js ***!
  \************************************************************************************************************************************/
/*! exports provided: LABEL_DEFAULTS, Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LABEL_DEFAULTS", function() { return LABEL_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkbox */ "../../node_modules/rbx/elements/form/checkbox.js");
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./radio */ "../../node_modules/rbx/elements/form/radio.js");









const LABEL_DEFAULTS = {
  sizes: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("small", "medium", "large")
};

const identifyLabelDiscriminator = children => {
  let discriminator = "label";
  react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.forEach(children, (child, i) => {
    if (typeof child === "object" && child !== null && "type" in child) {
      if (child.type === _checkbox__WEBPACK_IMPORTED_MODULE_7__["Checkbox"] || child.type === "input" && child.props.type === "checkbox") {
        discriminator = "checkbox";
      } else if (child.type === _radio__WEBPACK_IMPORTED_MODULE_8__["Radio"] || child.type === "input" && child.props.type === "radio") {
        discriminator = "radio";
      } else if (child.type === react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment) {
        discriminator = identifyLabelDiscriminator(child.props.children);
      }
    }
  });
  return discriminator;
};

const Label = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      disabled = _a.disabled,
      size = _a.size,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "disabled", "size"]);

  const discriminator = identifyLabelDiscriminator(rest.children);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      [`${discriminator}`]: discriminator,
      "is-disabled": disabled,
      [`is-${size}`]: size
    }, className),
    ref: ref
  }, rest));
}, {
  as: "label"
});
Label.displayName = "Label";
Label.propTypes = {
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};

/***/ }),

/***/ "../../node_modules/rbx/elements/form/radio.js":
/*!************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/form/radio.js ***!
  \************************************************************************************************************************************/
/*! exports provided: Radio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return Radio; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");



const Radio = Object(_base__WEBPACK_IMPORTED_MODULE_2__["forwardRefAs"])((props, ref) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_2__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
  ref: ref,
  type: "radio"
}, props)), {
  as: "input"
});
Radio.displayName = "Radio";

/***/ }),

/***/ "../../node_modules/rbx/elements/form/select-option.js":
/*!********************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/form/select-option.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: SelectOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectOption", function() { return SelectOption; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");



const SelectOption = Object(_base__WEBPACK_IMPORTED_MODULE_2__["forwardRefAs"])((props, ref) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_2__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
  ref: ref
}, props)), {
  as: "option"
});
SelectOption.displayName = "Select.Option";

/***/ }),

/***/ "../../node_modules/rbx/elements/form/select.js":
/*!*************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/form/select.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: SELECT_CONTAINER_DEFAULTS, SelectContainer, Select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_CONTAINER_DEFAULTS", function() { return SELECT_CONTAINER_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectContainer", function() { return SelectContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");
/* harmony import */ var _select_option__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select-option */ "../../node_modules/rbx/elements/form/select-option.js");








const SELECT_CONTAINER_DEFAULTS = {
  sizes: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("small", "medium", "large"),
  states: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("focused", "hovered", "loading")
};

const mapSelectContainerChildren = (children, state) => {
  let classNameExtension;
  const mapped = react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.map(children, (child, i) => {
    if (typeof child === "object" && child !== null && "type" in child) {
      if (child.type === "select" || child.type === Select) {
        classNameExtension = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
          "is-multiple": child.props.multiple
        });

        if (state === "focused" || state === "hovered") {
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(child, {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(`is-${state}`, child.props.className)
          });
        }

        return child;
      } else if (child.type === react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment) {
        const fragmentMapped = mapSelectContainerChildren(child.props.children, state);
        classNameExtension = classnames__WEBPACK_IMPORTED_MODULE_2___default()(classNameExtension, fragmentMapped.classNameExtension);
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
          children: fragmentMapped.children
        });
      }
    }

    return child;
  });
  return {
    children: mapped,
    classNameExtension
  };
};

const SelectContainer = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      children = _a.children,
      color = _a.color,
      fullwidth = _a.fullwidth,
      rounded = _a.rounded,
      size = _a.size,
      state = _a.state,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "children", "color", "fullwidth", "rounded", "size", "state"]);

  const mapped = mapSelectContainerChildren(children, state);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("select", {
      [`is-${color}`]: color,
      "is-fullwidth": fullwidth,
      "is-loading": state === "loading",
      "is-rounded": rounded,
      [`is-${size}`]: size
    }, mapped.classNameExtension, className),
    children: mapped.children,
    ref: ref
  }, rest));
}, {
  as: "div"
});
SelectContainer.displayName = "Select.Container";
SelectContainer.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  fullwidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  rounded: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  state: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};
const Select = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((props, ref) => react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
  ref: ref
}, props)), {
  as: "select"
}), {
  Container: SelectContainer,
  Option: _select_option__WEBPACK_IMPORTED_MODULE_7__["SelectOption"]
});
Select.displayName = "Select";

/***/ }),

/***/ "../../node_modules/rbx/elements/form/textarea.js":
/*!***************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/form/textarea.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: TEXTAREA_DEFAULTS, Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTAREA_DEFAULTS", function() { return TEXTAREA_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return Textarea; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");







const TEXTAREA_DEFAULTS = {
  sizes: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("small", "medium", "large"),
  states: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("focused", "hovered")
};
const Textarea = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      color = _a.color,
      fixedSize = _a.fixedSize,
      size = _a.size,
      state = _a.state,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "color", "fixedSize", "size", "state"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("textarea", {
      "has-fixed-size": fixedSize,
      [`is-${color}`]: color,
      [`is-${size}`]: size,
      [`is-${state}`]: state
    }, className),
    ref: ref
  }, rest));
}, {
  as: "textarea",
  rows: 4
});
Textarea.displayName = "Textarea";
Textarea.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  fixedSize: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  state: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};

/***/ }),

/***/ "../../node_modules/rbx/elements/icon/icon.js":
/*!***********************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/icon/icon.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: ICON_DEFAULTS, Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_DEFAULTS", function() { return ICON_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");







const ICON_DEFAULTS = {
  alignments: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("left", "right"),
  sizes: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("small", "medium", "large")
};
const Icon = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var align = _a.align,
      className = _a.className,
      color = _a.color,
      size = _a.size,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["align", "className", "color", "size"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("icon", {
      [`has-text-${color}`]: color,
      [`is-${align}`]: align,
      [`is-${size}`]: size
    }, className),
    ref: ref
  }, rest));
}, {
  as: "span"
});
Icon.displayName = "Icon";
Icon.propTypes = {
  align: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};

/***/ }),

/***/ "../../node_modules/rbx/elements/icon/index.js":
/*!************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/icon/index.js ***!
  \************************************************************************************************************************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ "../../node_modules/rbx/elements/icon/icon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _icon__WEBPACK_IMPORTED_MODULE_0__["Icon"]; });



/***/ }),

/***/ "../../node_modules/rbx/elements/image/image-container.js":
/*!***********************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/image/image-container.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: IMAGE_CONTAINER_DEFAULTS, ImageContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_CONTAINER_DEFAULTS", function() { return IMAGE_CONTAINER_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageContainer", function() { return ImageContainer; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");







const IMAGE_CONTAINER_DEFAULTS = {
  dimmensions: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])(16, 24, 32, 48, 64, 96, 128),
  ratios: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("16by9", "1by1", "1by2", "1by3", "2by1", "2by3", "3by1", "3by2", "3by4", "3by5", "4by3", "4by5", "5by3", "5by4", "9by16", "square")
};

const mapImageContainerChildren = (children, size) => {
  if (typeof size !== "string") {
    return children;
  }

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.map(children, (child, i) => {
    if (typeof child === "object" && child !== null && "type" in child) {
      if (child.type !== react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment) {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(child, {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("has-ratio", child.props.className)
        });
      } else {
        const fragmentMapped = mapImageContainerChildren(child.props.children, size);
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
          children: fragmentMapped
        });
      }
    }

    return child;
  });
};

const ImageContainer = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var children = _a.children,
      className = _a.className,
      size = _a.size,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["children", "className", "size"]);

  let s;

  if (typeof size === "string") {
    s = size;
  } else if (typeof size === "number") {
    s = `${size}x${size}`;
  }

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    children: mapImageContainerChildren(children, size),
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("image", {
      [`is-${s}`]: s
    }, className),
    ref: ref
  }, rest));
}, {
  as: "figure"
});
ImageContainer.displayName = "Image.Container";
ImageContainer.propTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};

/***/ }),

/***/ "../../node_modules/rbx/elements/image/image.js":
/*!*************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/image/image.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _image_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-container */ "../../node_modules/rbx/elements/image/image-container.js");







const Image = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rounded = _a.rounded,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "rounded"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      "is-rounded": rounded
    }, className),
    ref: ref
  }, rest));
}, {
  as: "img"
}), {
  Container: _image_container__WEBPACK_IMPORTED_MODULE_6__["ImageContainer"]
});
Image.displayName = "Image";
Image.propTypes = {
  rounded: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};

/***/ }),

/***/ "../../node_modules/rbx/elements/image/index.js":
/*!*************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/image/index.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image */ "../../node_modules/rbx/elements/image/image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _image__WEBPACK_IMPORTED_MODULE_0__["Image"]; });



/***/ }),

/***/ "../../node_modules/rbx/elements/index.js":
/*!*******************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/index.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: Box, Button, Container, Content, Checkbox, Control, Field, Fieldset, File, Help, Input, Label, Radio, Select, Textarea, Icon, Image, Notification, Block, Delete, Heading, Highlight, Loader, Numeric, Progress, Table, Tag, Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./box */ "../../node_modules/rbx/elements/box/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return _box__WEBPACK_IMPORTED_MODULE_0__["Box"]; });

/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ "../../node_modules/rbx/elements/button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_1__["Button"]; });

/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container */ "../../node_modules/rbx/elements/container/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _container__WEBPACK_IMPORTED_MODULE_2__["Container"]; });

/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content */ "../../node_modules/rbx/elements/content/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return _content__WEBPACK_IMPORTED_MODULE_3__["Content"]; });

/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form */ "../../node_modules/rbx/elements/form/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _form__WEBPACK_IMPORTED_MODULE_4__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Control", function() { return _form__WEBPACK_IMPORTED_MODULE_4__["Control"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return _form__WEBPACK_IMPORTED_MODULE_4__["Field"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fieldset", function() { return _form__WEBPACK_IMPORTED_MODULE_4__["Fieldset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "File", function() { return _form__WEBPACK_IMPORTED_MODULE_4__["File"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Help", function() { return _form__WEBPACK_IMPORTED_MODULE_4__["Help"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _form__WEBPACK_IMPORTED_MODULE_4__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _form__WEBPACK_IMPORTED_MODULE_4__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _form__WEBPACK_IMPORTED_MODULE_4__["Radio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _form__WEBPACK_IMPORTED_MODULE_4__["Select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _form__WEBPACK_IMPORTED_MODULE_4__["Textarea"]; });

/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon */ "../../node_modules/rbx/elements/icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _icon__WEBPACK_IMPORTED_MODULE_5__["Icon"]; });

/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image */ "../../node_modules/rbx/elements/image/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _image__WEBPACK_IMPORTED_MODULE_6__["Image"]; });

/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notification */ "../../node_modules/rbx/elements/notification/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _notification__WEBPACK_IMPORTED_MODULE_7__["Notification"]; });

/* harmony import */ var _other__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./other */ "../../node_modules/rbx/elements/other/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return _other__WEBPACK_IMPORTED_MODULE_8__["Block"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Delete", function() { return _other__WEBPACK_IMPORTED_MODULE_8__["Delete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return _other__WEBPACK_IMPORTED_MODULE_8__["Heading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Highlight", function() { return _other__WEBPACK_IMPORTED_MODULE_8__["Highlight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return _other__WEBPACK_IMPORTED_MODULE_8__["Loader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Numeric", function() { return _other__WEBPACK_IMPORTED_MODULE_8__["Numeric"]; });

/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./progress */ "../../node_modules/rbx/elements/progress/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _progress__WEBPACK_IMPORTED_MODULE_9__["Progress"]; });

/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./table */ "../../node_modules/rbx/elements/table/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _table__WEBPACK_IMPORTED_MODULE_10__["Table"]; });

/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tag */ "../../node_modules/rbx/elements/tag/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return _tag__WEBPACK_IMPORTED_MODULE_11__["Tag"]; });

/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./title */ "../../node_modules/rbx/elements/title/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return _title__WEBPACK_IMPORTED_MODULE_12__["Title"]; });















/***/ }),

/***/ "../../node_modules/rbx/elements/notification/index.js":
/*!********************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/notification/index.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification */ "../../node_modules/rbx/elements/notification/notification.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _notification__WEBPACK_IMPORTED_MODULE_0__["Notification"]; });



/***/ }),

/***/ "../../node_modules/rbx/elements/notification/notification.js":
/*!***************************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/notification/notification.js ***!
  \***************************************************************************************************************************************************/
/*! exports provided: Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");






const Notification = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      color = _a.color,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "color"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("notification", {
      [`is-${color}`]: color
    }, className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
Notification.displayName = "Notification";
Notification.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};

/***/ }),

/***/ "../../node_modules/rbx/elements/other/block.js":
/*!*************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/other/block.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: Block */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return Block; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const Block = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("block", className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
Block.displayName = "Block";

/***/ }),

/***/ "../../node_modules/rbx/elements/other/delete.js":
/*!**************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/other/delete.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: DELETE_DEFAULTS, Delete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_DEFAULTS", function() { return DELETE_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delete", function() { return Delete; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");







const DELETE_DEFAULTS = {
  sizes: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("small", "medium", "large")
};
const Delete = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      size = _a.size,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "size"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("delete", {
      [`is-${size}`]: size
    }, className),
    ref: ref
  }, rest));
}, {
  as: "a"
});
Delete.displayName = "Delete";
Delete.propTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};

/***/ }),

/***/ "../../node_modules/rbx/elements/other/heading.js":
/*!***************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/other/heading.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: Heading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const Heading = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("heading", className),
    ref: ref
  }, rest));
}, {
  as: "p"
});
Heading.displayName = "Heading";

/***/ }),

/***/ "../../node_modules/rbx/elements/other/highlight.js":
/*!*****************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/other/highlight.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: Highlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Highlight", function() { return Highlight; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const Highlight = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("highlight", className),
    ref: ref
  }, rest));
}, {
  as: "p"
});
Highlight.displayName = "Highlight";

/***/ }),

/***/ "../../node_modules/rbx/elements/other/index.js":
/*!*************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/other/index.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: Block, Delete, Heading, Highlight, Loader, Numeric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ "../../node_modules/rbx/elements/other/block.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return _block__WEBPACK_IMPORTED_MODULE_0__["Block"]; });

/* harmony import */ var _delete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete */ "../../node_modules/rbx/elements/other/delete.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Delete", function() { return _delete__WEBPACK_IMPORTED_MODULE_1__["Delete"]; });

/* harmony import */ var _heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heading */ "../../node_modules/rbx/elements/other/heading.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return _heading__WEBPACK_IMPORTED_MODULE_2__["Heading"]; });

/* harmony import */ var _highlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./highlight */ "../../node_modules/rbx/elements/other/highlight.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Highlight", function() { return _highlight__WEBPACK_IMPORTED_MODULE_3__["Highlight"]; });

/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader */ "../../node_modules/rbx/elements/other/loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return _loader__WEBPACK_IMPORTED_MODULE_4__["Loader"]; });

/* harmony import */ var _numeric__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./numeric */ "../../node_modules/rbx/elements/other/numeric.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Numeric", function() { return _numeric__WEBPACK_IMPORTED_MODULE_5__["Numeric"]; });








/***/ }),

/***/ "../../node_modules/rbx/elements/other/loader.js":
/*!**************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/other/loader.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const Loader = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("loader", className),
    ref: ref
  }, rest));
}, {
  as: "div",
  children: false
});
Loader.displayName = "Loader";

/***/ }),

/***/ "../../node_modules/rbx/elements/other/numeric.js":
/*!***************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/other/numeric.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: Numeric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Numeric", function() { return Numeric; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const Numeric = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("number", className),
    ref: ref
  }, rest));
}, {
  as: "p"
});
Numeric.displayName = "Numeric";

/***/ }),

/***/ "../../node_modules/rbx/elements/progress/index.js":
/*!****************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/progress/index.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: Progress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress */ "../../node_modules/rbx/elements/progress/progress.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _progress__WEBPACK_IMPORTED_MODULE_0__["Progress"]; });



/***/ }),

/***/ "../../node_modules/rbx/elements/progress/progress.js":
/*!*******************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/progress/progress.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: PROGRESS_DEFAULTS, Progress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROGRESS_DEFAULTS", function() { return PROGRESS_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return Progress; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");







const PROGRESS_DEFAULTS = {
  sizes: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("small", "medium", "large")
};
const Progress = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      color = _a.color,
      size = _a.size,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "color", "size"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("progress", {
      [`is-${color}`]: color,
      [`is-${size}`]: size
    }, className),
    ref: ref
  }, rest));
}, {
  as: "progress",
  max: 100
});
Progress.displayName = "Progress";
Progress.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  max: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
};

/***/ }),

/***/ "../../node_modules/rbx/elements/table/index.js":
/*!*************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/table/index.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table */ "../../node_modules/rbx/elements/table/table.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _table__WEBPACK_IMPORTED_MODULE_0__["Table"]; });



/***/ }),

/***/ "../../node_modules/rbx/elements/table/table-body.js":
/*!******************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/table/table-body.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: TableBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBody", function() { return TableBody; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");



const TableBody = Object(_base__WEBPACK_IMPORTED_MODULE_2__["forwardRefAs"])((props, ref) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_2__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
  ref: ref
}, props)), {
  as: "tbody"
});
TableBody.displayName = "Table.Body";

/***/ }),

/***/ "../../node_modules/rbx/elements/table/table-cell.js":
/*!******************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/table/table-cell.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: TableCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableCell", function() { return TableCell; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");



const TableCell = Object(_base__WEBPACK_IMPORTED_MODULE_2__["forwardRefAs"])((props, ref) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_2__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
  ref: ref
}, props)), {
  as: "td"
});
TableCell.displayName = "Table.Cell";

/***/ }),

/***/ "../../node_modules/rbx/elements/table/table-foot.js":
/*!******************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/table/table-foot.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: TableFoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFoot", function() { return TableFoot; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");



const TableFoot = Object(_base__WEBPACK_IMPORTED_MODULE_2__["forwardRefAs"])((props, ref) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_2__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
  ref: ref
}, props)), {
  as: "tfoot"
});
TableFoot.displayName = "Table.Foot";

/***/ }),

/***/ "../../node_modules/rbx/elements/table/table-head.js":
/*!******************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/table/table-head.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: TableHead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHead", function() { return TableHead; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");



const TableHead = Object(_base__WEBPACK_IMPORTED_MODULE_2__["forwardRefAs"])((props, ref) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_2__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
  ref: ref
}, props)), {
  as: "thead"
});
TableHead.displayName = "Table.Head";

/***/ }),

/***/ "../../node_modules/rbx/elements/table/table-heading.js":
/*!*********************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/table/table-heading.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: TableHeading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHeading", function() { return TableHeading; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");



const TableHeading = Object(_base__WEBPACK_IMPORTED_MODULE_2__["forwardRefAs"])((props, ref) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_2__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
  ref: ref
}, props)), {
  as: "th"
});
TableHeading.displayName = "Table.Heading";

/***/ }),

/***/ "../../node_modules/rbx/elements/table/table-row.js":
/*!*****************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/table/table-row.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: TableRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRow", function() { return TableRow; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");






const TableRow = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      selected = _a.selected,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "selected"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      "is-selected": selected
    }, className),
    ref: ref
  }, rest));
}, {
  as: "tr"
});
TableRow.displayName = "Table.Row";
TableRow.propTypes = {
  selected: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};

/***/ }),

/***/ "../../node_modules/rbx/elements/table/table.js":
/*!*************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/table/table.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _table_body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table-body */ "../../node_modules/rbx/elements/table/table-body.js");
/* harmony import */ var _table_cell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table-cell */ "../../node_modules/rbx/elements/table/table-cell.js");
/* harmony import */ var _table_foot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./table-foot */ "../../node_modules/rbx/elements/table/table-foot.js");
/* harmony import */ var _table_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./table-head */ "../../node_modules/rbx/elements/table/table-head.js");
/* harmony import */ var _table_heading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./table-heading */ "../../node_modules/rbx/elements/table/table-heading.js");
/* harmony import */ var _table_row__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./table-row */ "../../node_modules/rbx/elements/table/table-row.js");












const Table = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var bordered = _a.bordered,
      className = _a.className,
      fullwidth = _a.fullwidth,
      hoverable = _a.hoverable,
      narrow = _a.narrow,
      striped = _a.striped,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["bordered", "className", "fullwidth", "hoverable", "narrow", "striped"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("table", {
      "is-bordered": bordered,
      "is-fullwidth": fullwidth,
      "is-hoverable": hoverable,
      "is-narrow": narrow,
      "is-striped": striped
    }, className),
    ref: ref
  }, rest));
}, {
  as: "table"
}), {
  Body: _table_body__WEBPACK_IMPORTED_MODULE_6__["TableBody"],
  Cell: _table_cell__WEBPACK_IMPORTED_MODULE_7__["TableCell"],
  Foot: _table_foot__WEBPACK_IMPORTED_MODULE_8__["TableFoot"],
  Head: _table_head__WEBPACK_IMPORTED_MODULE_9__["TableHead"],
  Heading: _table_heading__WEBPACK_IMPORTED_MODULE_10__["TableHeading"],
  Row: _table_row__WEBPACK_IMPORTED_MODULE_11__["TableRow"]
});
Table.displayName = "Table";
Table.propTypes = {
  bordered: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  fullwidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  hoverable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  narrow: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  striped: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};

/***/ }),

/***/ "../../node_modules/rbx/elements/tag/index.js":
/*!***********************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/tag/index.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: Tag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag */ "../../node_modules/rbx/elements/tag/tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return _tag__WEBPACK_IMPORTED_MODULE_0__["Tag"]; });



/***/ }),

/***/ "../../node_modules/rbx/elements/tag/tag-group.js":
/*!***************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/tag/tag-group.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: TAG_GROUP_DEFAULTS, TagGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAG_GROUP_DEFAULTS", function() { return TAG_GROUP_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagGroup", function() { return TagGroup; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");







const TAG_GROUP_DEFAULTS = {
  sizes: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("medium", "large")
};
const TagGroup = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      gapless = _a.gapless,
      size = _a.size,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "gapless", "size"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("tags", {
      [`are-${size}`]: size,
      "has-addons": gapless
    }, className),
    ref: ref
  }, rest));
}, {
  as: "span"
});
TagGroup.displayName = "Tag.Group";
TagGroup.propTypes = {
  gapless: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};

/***/ }),

/***/ "../../node_modules/rbx/elements/tag/tag.js":
/*!*********************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/tag/tag.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: TAG_DEFAULTS, Tag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAG_DEFAULTS", function() { return TAG_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return Tag; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");
/* harmony import */ var _tag_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tag-group */ "../../node_modules/rbx/elements/tag/tag-group.js");








const TAG_DEFAULTS = {
  sizes: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("normal", "medium", "large")
};
const Tag = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var children = _a.children,
      className = _a.className,
      color = _a.color,
      isDelete = _a.delete,
      rounded = _a.rounded,
      size = _a.size,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["children", "className", "color", "delete", "rounded", "size"]);

  const allowedChildren = isDelete === true ? undefined : children;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("tag", {
      [`is-${size}`]: size,
      [`is-${color}`]: color,
      "is-delete": isDelete,
      "is-rounded": rounded
    }, className),
    children: allowedChildren,
    ref: ref
  }, rest));
}, {
  as: "span"
}), {
  Group: _tag_group__WEBPACK_IMPORTED_MODULE_7__["TagGroup"]
});
Tag.displayName = "Tag";
Tag.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  delete: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  rounded: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};

/***/ }),

/***/ "../../node_modules/rbx/elements/title/index.js":
/*!*************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/title/index.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./title */ "../../node_modules/rbx/elements/title/title.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return _title__WEBPACK_IMPORTED_MODULE_0__["Title"]; });



/***/ }),

/***/ "../../node_modules/rbx/elements/title/title.js":
/*!*************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/elements/title/title.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: TITLE_DEFAULTS, Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE_DEFAULTS", function() { return TITLE_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");







const TITLE_DEFAULTS = {
  sizes: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])(1, 2, 3, 4, 5, 6)
};
const Title = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      size = _a.size,
      spaced = _a.spaced,
      subtitle = _a.subtitle,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "size", "spaced", "subtitle"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      [`is-${size}`]: size !== undefined,
      "is-spaced": spaced === true && subtitle !== true,
      subtitle,
      title: subtitle !== true
    }, className),
    ref: ref
  }, rest));
}, {
  as: "h1"
});
Title.displayName = "Title";
Title.propTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  spaced: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};

/***/ }),

/***/ "../../node_modules/rbx/layout/footer/footer.js":
/*!*************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/layout/footer/footer.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const Footer = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("footer", className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
Footer.displayName = "Footer";

/***/ }),

/***/ "../../node_modules/rbx/layout/footer/index.js":
/*!************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/layout/footer/index.js ***!
  \************************************************************************************************************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "../../node_modules/rbx/layout/footer/footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _footer__WEBPACK_IMPORTED_MODULE_0__["Footer"]; });



/***/ }),

/***/ "../../node_modules/rbx/layout/hero/hero-body.js":
/*!**************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/layout/hero/hero-body.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: HeroBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroBody", function() { return HeroBody; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const HeroBody = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("hero-body", className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
HeroBody.displayName = "Hero.Body";

/***/ }),

/***/ "../../node_modules/rbx/layout/hero/hero-foot.js":
/*!**************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/layout/hero/hero-foot.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: HeroFoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroFoot", function() { return HeroFoot; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const HeroFoot = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("hero-foot", className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
HeroFoot.displayName = "Hero.Foot";

/***/ }),

/***/ "../../node_modules/rbx/layout/hero/hero-head.js":
/*!**************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/layout/hero/hero-head.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: HeroHead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroHead", function() { return HeroHead; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");





const HeroHead = Object(_base__WEBPACK_IMPORTED_MODULE_4__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_4__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("hero-head", className),
    ref: ref
  }, rest));
}, {
  as: "div"
});
HeroHead.displayName = "Hero.Head";

/***/ }),

/***/ "../../node_modules/rbx/layout/hero/hero.js":
/*!*********************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/layout/hero/hero.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: HERO_DEFAULTS, Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HERO_DEFAULTS", function() { return HERO_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");
/* harmony import */ var _hero_body__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hero-body */ "../../node_modules/rbx/layout/hero/hero-body.js");
/* harmony import */ var _hero_foot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hero-foot */ "../../node_modules/rbx/layout/hero/hero-foot.js");
/* harmony import */ var _hero_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hero-head */ "../../node_modules/rbx/layout/hero/hero-head.js");










const HERO_DEFAULTS = {
  sizes: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("small", "medium", "large", "fullheight", "fullheight-with-navbar")
};
const Hero = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      color = _a.color,
      gradient = _a.gradient,
      size = _a.size,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "color", "gradient", "size"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("hero", {
      "is-bold": gradient,
      [`is-${color}`]: color,
      [`is-${size}`]: size
    }, className),
    ref: ref
  }, rest));
}, {
  as: "section"
}), {
  Body: _hero_body__WEBPACK_IMPORTED_MODULE_7__["HeroBody"],
  Foot: _hero_foot__WEBPACK_IMPORTED_MODULE_8__["HeroFoot"],
  Head: _hero_head__WEBPACK_IMPORTED_MODULE_9__["HeroHead"]
});
Hero.displayName = "Hero";
Hero.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  gradient: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};

/***/ }),

/***/ "../../node_modules/rbx/layout/hero/index.js":
/*!**********************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/layout/hero/index.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ "../../node_modules/rbx/layout/hero/hero.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _hero__WEBPACK_IMPORTED_MODULE_0__["Hero"]; });



/***/ }),

/***/ "../../node_modules/rbx/layout/index.js":
/*!*****************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/layout/index.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: Footer, Hero, Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "../../node_modules/rbx/layout/footer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _footer__WEBPACK_IMPORTED_MODULE_0__["Footer"]; });

/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero */ "../../node_modules/rbx/layout/hero/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _hero__WEBPACK_IMPORTED_MODULE_1__["Hero"]; });

/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section */ "../../node_modules/rbx/layout/section/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return _section__WEBPACK_IMPORTED_MODULE_2__["Section"]; });





/***/ }),

/***/ "../../node_modules/rbx/layout/section/index.js":
/*!*************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/layout/section/index.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section */ "../../node_modules/rbx/layout/section/section.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return _section__WEBPACK_IMPORTED_MODULE_0__["Section"]; });



/***/ }),

/***/ "../../node_modules/rbx/layout/section/section.js":
/*!***************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/layout/section/section.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: SECTION_DEFAULTS, Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECTION_DEFAULTS", function() { return SECTION_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "../../node_modules/rbx/base/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../../node_modules/rbx/utils.js");







const SECTION_DEFAULTS = {
  sizes: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["tuple"])("medium", "large")
};
const Section = Object(_base__WEBPACK_IMPORTED_MODULE_5__["forwardRefAs"])((_a, ref) => {
  var className = _a.className,
      size = _a.size,
      rest = tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"](_a, ["className", "size"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_5__["Generic"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("section", {
      [`is-${size}`]: size
    }, className),
    ref: ref
  }, rest));
}, {
  as: "section"
});
Section.displayName = "Section";
Section.propTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};

/***/ }),

/***/ "../../node_modules/rbx/prop-types-extensions.js":
/*!**************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/prop-types-extensions.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: renderablePropType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderablePropType", function() { return renderablePropType; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

const renderablePropType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  render: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
})]);

/***/ }),

/***/ "../../node_modules/rbx/utils.js":
/*!**********************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/rbx/utils.js ***!
  \**********************************************************************************************************************/
/*! exports provided: canUseDOM, combineRefs, noop, tuple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUseDOM", function() { return canUseDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineRefs", function() { return combineRefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuple", function() { return tuple; });
const canUseDOM = () => !(typeof window === "undefined" || window.document === undefined || window.document.createElement === undefined);
const combineRefs = (...refs) => {
  return instance => {
    for (const item of refs) {
      if (item === null || item === undefined) {
        continue;
      }

      if (typeof item === "object") {
        item.current = instance;
      } else {
        item(instance);
      }
    }
  };
};
const noop = () => {};
const tuple = (...args) => args;

/***/ }),

/***/ "../../node_modules/semantic-ui-css/semantic.min.css":
/*!******************************************************************************************************************************************!*\
  !*** /opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/node_modules/semantic-ui-css/semantic.min.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../dmi-ui/components/AsyncSelect.js":
/*!*******************************************!*\
  !*** ../dmi-ui/components/AsyncSelect.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_select_lib_Async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select/lib/Async */ "react-select/lib/Async");
/* harmony import */ var react_select_lib_Async__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_select_lib_Async__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/src/dmi-ui/components/AsyncSelect.js";


 // Some props can be changed directly in the theme (check https://react-select.com/styles for reference):

const customStyles = {
  control: provided => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, provided, {
    paddingTop: 4,
    paddingBottom: 4
  }),
  indicatorSeparator: provided => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, provided, {
    display: 'none'
  }),
  dropdownIndicator: provided => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, provided, {
    display: 'none'
  })
};

const MyAsyncSelect = props => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_select_lib_Async__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  styles: customStyles,
  theme: _theme => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _theme, {
    borderRadius: 0
  })
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}));

const StyledAsyncSelect = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(MyAsyncSelect).withConfig({
  componentId: 'dmi-ui-async-select'
})`
  > div {
    border: 1px solid ${props => props.theme.colorFormBorder};
    font-weight: normal;
  }

  .react-select__placeholder {
    color: ${props => props.theme.colorPlaceholder};
    opacity: 1;
  }

  .react-select__clear-indicator {
    cursor: pointer;
  }

  &.max-content {
    .react-select__menu {
      min-width: 100%;
      width: max-content;
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (StyledAsyncSelect);

/***/ }),

/***/ "../dmi-ui/components/Button.js":
/*!**************************************!*\
  !*** ../dmi-ui/components/Button.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/src/dmi-ui/components/Button.js";





const ButtonComponent = (_ref) => {
  let children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }), children);
};

ButtonComponent.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};
const StyledButtonComponent = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(ButtonComponent).withConfig({
  componentId: 'dmi-ui-button'
})`
&.ui.button {
  border-radius: 0;
  font-family: ${props => props.theme.bodyFont};
  font-weight: 700;
  font-size: ${props => props.theme.buttonFontSize};
  padding-left: 70px;
  padding-right: 70px;

  &.is-narrow {
    padding-left: 40px;
    padding-right: 40px;
  }

  &.is-large {
    line-height: 45px;
    height: 45px;
    padding-top: 0;
    padding-bottom: 0;
    font-size: ${props => props.theme.buttonFontSize};
    padding-left: 40px;
    padding-right: 40px;
  }
}
`;
/* harmony default export */ __webpack_exports__["default"] = (StyledButtonComponent);

/***/ }),

/***/ "../dmi-ui/components/Checkbox.js":
/*!****************************************!*\
  !*** ../dmi-ui/components/Checkbox.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/src/dmi-ui/components/Checkbox.js";





const CheckboxComponent = (_ref) => {
  let children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), children);
};

CheckboxComponent.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};
const StyledCheckboxComponent = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(CheckboxComponent).withConfig({
  componentId: 'dmi-ui-checkbox'
})`
  cursor: pointer;
`;
/* harmony default export */ __webpack_exports__["default"] = (StyledCheckboxComponent);

/***/ }),

/***/ "../dmi-ui/components/Container.js":
/*!*****************************************!*\
  !*** ../dmi-ui/components/Container.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/src/dmi-ui/components/Container.js";




const ContainerComponent = (_ref) => {
  let children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }), children);
};

ContainerComponent.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (ContainerComponent);

/***/ }),

/***/ "../dmi-ui/components/Content.js":
/*!***************************************!*\
  !*** ../dmi-ui/components/Content.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rbx_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rbx/elements */ "../../node_modules/rbx/elements/index.js");

var _jsxFileName = "/opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/src/dmi-ui/components/Content.js";




const ContentComponent = props => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rbx_elements__WEBPACK_IMPORTED_MODULE_3__["Content"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}));

ContentComponent.propTypes = {
  props: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (ContentComponent);

/***/ }),

/***/ "../dmi-ui/components/Control.js":
/*!***************************************!*\
  !*** ../dmi-ui/components/Control.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rbx_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rbx/elements */ "../../node_modules/rbx/elements/index.js");
var _jsxFileName = "/opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/src/dmi-ui/components/Control.js";




const ControlComponent = ({
  children
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rbx_elements__WEBPACK_IMPORTED_MODULE_2__["Control"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, children);

ControlComponent.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (ControlComponent);

/***/ }),

/***/ "../dmi-ui/components/CustomDropdown.js":
/*!**********************************************!*\
  !*** ../dmi-ui/components/CustomDropdown.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dropdown */ "react-dropdown");
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dropdown__WEBPACK_IMPORTED_MODULE_1__);


const StyledDropdown = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_dropdown__WEBPACK_IMPORTED_MODULE_1___default.a)`
  position: relative;

  &.max-content {
    .Dropdown-menu {
      width: max-content;
    }
  }

  &.transparent {
    .Dropdown-control {
      background: none !important;
      border: none !important;
      padding-left: 0 !important;
    }
  }

  .Dropdown-control {
    position: relative;
    overflow: hidden;
    background-color: white;
    border: 1px solid ${props => props.theme.colorSeparator};
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    padding: 10px 27px 10px 10px;
  }

  .Dropdown-arrow {
    border-color: ${props => props.theme.colorBody} transparent transparent;
    border-style: solid;
    border-width: 5px 5px 0;
    content: ' ';
    display: block;
    height: 0;
    position: absolute;
    right: 10px;
    top: 19px;
    width: 0;
  }

  .is-open .Dropdown-arrow {
    border-color: transparent transparent #999;
    border-width: 0 5px 5px;
  }

  .Dropdown-menu {
    background-color: white;
    border: 1px solid ${props => props.theme.colorSeparator};
    box-sizing: border-box;
    margin-top: -1px;
    max-height: 300px;
    overflow-y: auto;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 1000;
    -webkit-overflow-scrolling: touch;
  }

  .Dropdown-menu .Dropdown-group > .Dropdown-title {
    padding: 8px 10px;
    font-weight: bold;
    text-transform: capitalize;
  }

  .Dropdown-option {
    box-sizing: border-box;
    cursor: pointer;
    display: block;
    padding: 10px 16px;
    font-weight: normal;
  }

  .Dropdown-option:last-child {
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
  }

  .Dropdown-option.is-selected {
    font-weight: bold;
  }

  .Dropdown-noresults {
    box-sizing: border-box;
    color: #ccc;
    cursor: default;
    display: block;
    padding: 8px 10px;
  }

  .Dropdown-placeholder {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (StyledDropdown);

/***/ }),

/***/ "../dmi-ui/components/Dropdown.js":
/*!****************************************!*\
  !*** ../dmi-ui/components/Dropdown.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);


const StyledDropdown = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"]).withConfig({
  componentId: 'dmi-ui-dropdown'
})`
  &.ui.dropdown {
    & > .text {
      font-weight: bold;
      font-size: 15px;
    }

    & > .text,
    & > .dropdown.icon {
      color: ${({
  theme
}) => theme.colorWhite};
    }

    & > .dropdown.icon {
      font-size: 14px;
    }

    & > .menu {
      width: 100%;
      border: 0;
      border-radius: 0;
      top: 37px;

      & > .item span {
        font-size: 15px;
      }
    }

    &.is-logout {
      display: flex;
      align-items: baseline;

      & > .menu {
        top: 37px;

        & > .item {
          padding: 15px !important;
        }
      }
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (StyledDropdown);

/***/ }),

/***/ "../dmi-ui/components/Field.js":
/*!*************************************!*\
  !*** ../dmi-ui/components/Field.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rbx_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rbx/elements */ "../../node_modules/rbx/elements/index.js");
var _jsxFileName = "/opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/src/dmi-ui/components/Field.js";




const FieldComponent = ({
  children
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rbx_elements__WEBPACK_IMPORTED_MODULE_2__["Field"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, children);

FieldComponent.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (FieldComponent);

/***/ }),

/***/ "../dmi-ui/components/Form.js":
/*!************************************!*\
  !*** ../dmi-ui/components/Form.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);


const StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"]).withConfig({
  componentId: 'dmi-ui-form'
})`
  &.ui.form {
    .field {
      margin-bottom: 15px;

      & > label {
        font-size: 15px;
        margin-bottom: 5px;
        display: block;
      }

      & .ui.input > input {
        border-radius: 0;
        border: 1px solid ${({
  theme
}) => theme.colorFormBorder};
        color: ${({
  theme
}) => theme.colorDark};
        font-weight: 400;
        font-size: 15px;
        font-family: ${({
  theme
}) => theme.bodyFont};
        padding: 13px 0 13px 13px;

        &:disabled {
          background: #f7f7f7;
        }

        &::placeholder {
          color: ${({
  theme
}) => theme.colorPlaceholder};
          opacity: 1;
        }

        &::-ms-clear {
          display: none;
        }
      }
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (StyledForm);

/***/ }),

/***/ "../dmi-ui/components/Input.js":
/*!*************************************!*\
  !*** ../dmi-ui/components/Input.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);


const StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"]).withConfig({
  componentId: 'dmi-ui-input'
})`
  display: block;
  box-shadow: none;
  width: 100%;
  border-radius: 0;
  border: 1px solid ${({
  theme
}) => theme.colorFormBorder};
  color: ${({
  theme
}) => theme.colorDark};
  font-weight: 400;
  font-size: 15px;
  font-family: ${({
  theme
}) => theme.bodyFont};
  padding: 13px 0 13px 13px;

  &:disabled {
    background: #f7f7f7;
  }

  &::placeholder {
    color: ${({
  theme
}) => theme.colorPlaceholder};
    opacity: 1;
  }

  &::-ms-clear {
    display: none;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (StyledInput);

/***/ }),

/***/ "../dmi-ui/components/Label.js":
/*!*************************************!*\
  !*** ../dmi-ui/components/Label.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);


const StyledLabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"]).withConfig({
  componentId: 'dmi-ui-label'
})`
  font-size: ${props => props.large ? '16px' : '14px'};
  margin-bottom: 2px;
  font-weight: 700;
`;
/* harmony default export */ __webpack_exports__["default"] = (StyledLabel);

/***/ }),

/***/ "../dmi-ui/components/Menu.js":
/*!************************************!*\
  !*** ../dmi-ui/components/Menu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const StyledMenu = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__["Menu"]).withConfig({
  componentId: 'dmi-ui-menu'
})`
  &.ui.inverted.menu .item:before {
    background: none;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (StyledMenu);

/***/ }),

/***/ "../dmi-ui/components/Message.js":
/*!***************************************!*\
  !*** ../dmi-ui/components/Message.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const StyledMessage = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__["Message"]).withConfig({
  componentId: 'dmi-ui-message'
})`
  &.ui.message {
    border-radius: 0;

    &.red {
      background-color: ${props => props.theme.colorBkgError};
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (StyledMessage);

/***/ }),

/***/ "../dmi-ui/components/PanelForm.js":
/*!*****************************************!*\
  !*** ../dmi-ui/components/PanelForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rbx_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rbx/components */ "../../node_modules/rbx/components/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const StyledPanelForm = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(rbx_components__WEBPACK_IMPORTED_MODULE_0__["Panel"]).withConfig({
  componentId: 'dmi-ui-panelform'
})`
  border-radius: 0;

  .panel-heading {
    background: ${props => props.theme.colorContent};
    border-radius: 0;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid ${props => props.theme.colorSeparator};
    font-weight: 700;
    font-size: 16px;
    padding: 1.1em;
  }

  .panel-block {
    background: ${props => props.theme.colorContent};
    border-bottom: none;
    border-left: none;
    border-right: none;
    margin-bottom: 100px;
  }

  .languages {
    font-size: ${props => props.theme.languagesSize};
    margin-bottom: 12px;

    & > div {
      display: inline-block;
    }

    a {
      color: ${props => props.theme.colorBody};
      display: inline-block;

      &:first-child::after {
        content: '|';
        margin: 0 5px;
        display: inline-block;
        font-weight: bold;
      }

      &.active {
        font-weight: bold;
      }
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (StyledPanelForm);

/***/ }),

/***/ "../dmi-ui/components/Section.js":
/*!***************************************!*\
  !*** ../dmi-ui/components/Section.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rbx_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rbx/layout */ "../../node_modules/rbx/layout/index.js");
var _jsxFileName = "/opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/src/dmi-ui/components/Section.js";




const SectionComponent = ({
  children
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rbx_layout__WEBPACK_IMPORTED_MODULE_2__["Section"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, children);

SectionComponent.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (SectionComponent);

/***/ }),

/***/ "../dmi-ui/components/Table.js":
/*!*************************************!*\
  !*** ../dmi-ui/components/Table.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rbx_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rbx/elements */ "../../node_modules/rbx/elements/index.js");


const StyledTable = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(rbx_elements__WEBPACK_IMPORTED_MODULE_1__["Table"]).withConfig({
  componentId: 'dmi-ui-table'
})`
  background: ${props => props.theme.colorTableBkg};
  table-layout: fixed;
  width: 100%;

  thead {
    td,
    th {
      border-bottom-width: 1px;
      padding: 12px;
    }

    tr:first-child {
      border-top: 1px solid ${props => props.theme.colorTableBorder};
      border-bottom: 1px solid ${props => props.theme.colorTableBorder};
    }
  }

  th > span {
    display: flex;
    cursor: pointer;
  }

  tbody > tr {
    & td {
      padding: 12px;

      &:nth-child(1) {
        width: 10%;
      }
    }
  }

  tr {
    border-top: 1px solid ${props => props.theme.colorTableBorder};
  }

  td,
  th {
    border: none;
  }

  a {
    color: ${props => props.theme.colorTableText};
  }

  td a {
    display: block;
  }

  .ellipsis a {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  svg[class*='icon-sort'] {
    width: 25px;
    height: 25px;
    margin-left: 5px;
  }

  .desc, .asc {
    position: relative;
    svg {
      display: none
    }
  }

  .asc {
    &::after {
      border-color: rgb(68,71,73) transparent transparent;
      border-style: solid;
      border-width: 5px 5px 0;
      content: ' ';
      display: inline-block;
      height: 0;
      position: relative;
      right: -13px;
      top: 9px;
      width: 0;
    }
  }

  .desc {
    &::after {
      transform: rotate(180deg);
      border-color: rgb(68,71,73) transparent transparent;
      border-style: solid;
      border-width: 5px 5px 0;
      content: ' ';
      display: inline-block;
      height: 0;
      position: relative;
      right: -13px;
      top: 9px;
      width: 0;
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (StyledTable);

/***/ }),

/***/ "../dmi-ui/components/Textarea.js":
/*!****************************************!*\
  !*** ../dmi-ui/components/Textarea.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rbx_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rbx/elements */ "../../node_modules/rbx/elements/index.js");


const StyledTextarea = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(rbx_elements__WEBPACK_IMPORTED_MODULE_1__["Textarea"]).withConfig({
  componentId: 'dmi-ui-textarea'
})`
  box-shadow: none;
  width: 100%;
  border-radius: 0;
  border: 1px solid ${props => props.theme.colorFormBorder};
  color: ${props => props.theme.colorDark};
  font-weight: 400;
  font-size: 15px;
  font-family: ${props => props.theme.bodyFont};
  padding: 13px 0 13px 13px;
`;
/* harmony default export */ __webpack_exports__["default"] = (StyledTextarea);

/***/ }),

/***/ "../dmi-ui/components/Title.js":
/*!*************************************!*\
  !*** ../dmi-ui/components/Title.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rbx_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rbx/elements */ "../../node_modules/rbx/elements/index.js");

var _jsxFileName = "/opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/src/dmi-ui/components/Title.js";




const TitleComponent = props => {
  const children = props.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rbx_elements__WEBPACK_IMPORTED_MODULE_3__["Title"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), children);
};

TitleComponent.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (TitleComponent);

/***/ }),

/***/ "../dmi-ui/components/index.js":
/*!*************************************!*\
  !*** ../dmi-ui/components/index.js ***!
  \*************************************/
/*! exports provided: Button, Control, Label, Field, Container, Section, Input, Content, Title, Table, CustomDropdown, PanelForm, Checkbox, Textarea, AsyncSelect, Message, Form, Menu, Dropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "../dmi-ui/components/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Control */ "../dmi-ui/components/Control.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Control", function() { return _Control__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Label */ "../dmi-ui/components/Label.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _Label__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Field */ "../dmi-ui/components/Field.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return _Field__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Container */ "../dmi-ui/components/Container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _Container__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Section */ "../dmi-ui/components/Section.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return _Section__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Input */ "../dmi-ui/components/Input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Content */ "../dmi-ui/components/Content.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return _Content__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Title */ "../dmi-ui/components/Title.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return _Title__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Table */ "../dmi-ui/components/Table.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _Table__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _CustomDropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CustomDropdown */ "../dmi-ui/components/CustomDropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomDropdown", function() { return _CustomDropdown__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _PanelForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PanelForm */ "../dmi-ui/components/PanelForm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelForm", function() { return _PanelForm__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Checkbox */ "../dmi-ui/components/Checkbox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _Checkbox__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Textarea */ "../dmi-ui/components/Textarea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _Textarea__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _AsyncSelect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AsyncSelect */ "../dmi-ui/components/AsyncSelect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsyncSelect", function() { return _AsyncSelect__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Message */ "../dmi-ui/components/Message.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _Message__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Form */ "../dmi-ui/components/Form.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Form__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Menu */ "../dmi-ui/components/Menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _Menu__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Dropdown */ "../dmi-ui/components/Dropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _Dropdown__WEBPACK_IMPORTED_MODULE_18__["default"]; });


 // candidate to be removed


 // candidate to be removed


 // candidate to be removed





 // candidate to be removed











/***/ }),

/***/ "../dmi-ui/vars.js":
/*!*************************!*\
  !*** ../dmi-ui/vars.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const theme = {
  // font family
  bodyFont: 'Arial, sans-serif',
  // font sizes
  bodySize: '15px',
  bodyLineHeight: '24px',
  descriptionSize: '16px',
  languagesSize: '14px',
  buttonFontSize: '15px',
  // colors
  colorBlack: '#000',
  colorBody: '#444749',
  colorBorder: '#d0d0d0',
  colorBox: '#dfdfdf',
  colorContent: '#f7f7f7',
  colorDark: '#1d2327',
  colorDisabled: '#e5e5e5',
  colorFormBorder: '#bdbdbd',
  colorGreen: '#37d142',
  colorLoginBorder: '#dedede',
  colorPlaceholder: '#bdbdbd',
  colorSeparator: '#bdbdbd',
  colorTableBkg: '#f5f5f5',
  colorTableBorder: '#eceeef',
  colorTableText: '#373a3c',
  colorWhite: '#fff',
  colorProgresBar: '#bdbdbd',
  colorBkgError: '#fff5f7',
  inputBorderColor: '#dedede',
  inputColor: '#1d2327'
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./components/Layout/Head.js":
/*!***********************************!*\
  !*** ./components/Layout/Head.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(getEnvConfig) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "../../node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress/nprogress.css */ "../../node_modules/nprogress/nprogress.css");
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/src/app/components/Layout/Head.js";




/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(() => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
  charSet: "utf-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1, user-scalable=0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
  rel: "shortcut icon",
  href: `/static/favicon/${getEnvConfig.mch.cms.theme}/favicon.ico`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}))));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./utils/getEnvConfig */ "./utils/getEnvConfig.js")["default"]))

/***/ }),

/***/ "./components/Layout/Header.js":
/*!*************************************!*\
  !*** ./components/Layout/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dmi_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dmi-ui/components */ "../dmi-ui/components/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-no-ssr */ "react-no-ssr");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var icons_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/Logo */ "./components/icons/Logo.js");
/* harmony import */ var _Header_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header.styles */ "./components/Layout/Header.styles.js");
var _jsxFileName = "/opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/src/app/components/Layout/Header.js";







const Header = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_styles__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dmi_ui_components__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
  inverted: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dmi_ui_components__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dmi_ui_components__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
  position: "left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/menu",
  as: "/menu",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dmi_ui_components__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  name: "home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(icons_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
})))))));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout/Header.styles.js":
/*!********************************************!*\
  !*** ./components/Layout/Header.styles.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HeaderStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "Headerstyles__HeaderStyles",
  componentId: "sc-1eyg8tw-0"
})(["\n  .ui.menu {\n    height: 68px;\n    color: ", ";\n    background: ", ";\n    border-radius: 0;\n    border: none;\n    box-shadow: none;\n\n    .left.menu {\n      & > a {\n        padding-left: 0;\n        margin-left: 0;\n      }\n    }\n  }\n\n  svg {\n    width: 120px;\n    fill: ", ";\n    color: ", ";\n  }\n"], ({
  theme
}) => theme.colorWhite, ({
  theme
}) => theme.colorDark, ({
  theme
}) => theme.colorWhite, ({
  theme
}) => theme.colorWhite);
/* harmony default export */ __webpack_exports__["default"] = (HeaderStyles);

/***/ }),

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dmi_ui_vars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dmi-ui/vars */ "../dmi-ui/vars.js");
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Head */ "./components/Layout/Head.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Header */ "./components/Layout/Header.js");
/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.styles */ "./components/Layout/index.styles.js");
/* harmony import */ var _component_wrappers_EventFormWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component-wrappers/EventFormWrapper */ "./components/component-wrappers/EventFormWrapper.js");
var _jsxFileName = "/opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/src/app/components/Layout/index.js";











const _React = react__WEBPACK_IMPORTED_MODULE_0___default.a,
      useEffect = _React.useEffect;

const Layout = () => {
  const GlobalStyles = Object(_index_styles__WEBPACK_IMPORTED_MODULE_9__["default"])(dmi_ui_vars__WEBPACK_IMPORTED_MODULE_6__["default"]);
  useEffect(() => {
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('routeChangeStart', () => nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.start());
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('routeChangeComplete', () => nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done());
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('routeChangeError', () => nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done());
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: dmi_ui_vars__WEBPACK_IMPORTED_MODULE_6__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Head__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GlobalStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_wrappers_EventFormWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: 10,
    httpObject: null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  })))));
};

Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Layout/index.styles.js":
/*!*******************************************!*\
  !*** ./components/Layout/index.styles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const GlobalStyle = theme => styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  body {
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodySize};
    color: ${theme.colorBody};
    line-height: ${theme.bodyLineHeight};
  }

  #nprogress {
    .bar {
      background: ${theme.colorProgresBar};
    }

    .peg {
      box-shadow: 0 0 10px ${theme.colorProgresBar}, 0 0 5px ${theme.colorProgresBar};
    }

    .spinner-icon {
      border-top-color: ${theme.colorProgresBar};
      border-left-color: ${theme.colorProgresBar};
    }
  }
`;

/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./components/component-wrappers/EventFormWrapper.js":
/*!***********************************************************!*\
  !*** ./components/component-wrappers/EventFormWrapper.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dmi_mch_event_form_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dmi-mch-event-form/src */ "./components/dmi-mch-event-form/src/index.js");
var _jsxFileName = "/opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/src/app/components/component-wrappers/EventFormWrapper.js";



const EventFormWrapper = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dmi_mch_event_form_src__WEBPACK_IMPORTED_MODULE_1__["default"], {
  id: 10,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
});

/* harmony default export */ __webpack_exports__["default"] = (EventFormWrapper);

/***/ }),

/***/ "./components/dmi-mch-event-form/src/form/index.js":
/*!*********************************************************!*\
  !*** ./components/dmi-mch-event-form/src/form/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services */ "./services/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils */ "./utils/index.js");
var _jsxFileName = "/opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/src/app/components/dmi-mch-event-form/src/form/index.js";





const getEventAttributes = async () => {
  try {
    const event = await _services__WEBPACK_IMPORTED_MODULE_2__["Event"].getEventAttributes();
    console.log('DONE', event);

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["validateAxiosResponse"])(event)) {
      console.log('DONE');
    }
  } catch (e) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["logger"])(e);
  }
};

const EventForm = props => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getEventAttributes();
  });
  const values = props.values,
        touched = props.touched,
        errors = props.errors,
        handleChange = props.handleChange,
        setFieldValue = props.setFieldValue,
        handleBlur = props.handleBlur,
        handleSubmit = props.handleSubmit,
        description = props.description,
        user = props.user,
        setUser = props.setUser,
        autocompleteUserOptions = props.autocompleteUserOptions,
        autocompletePlaceOptions = props.autocompletePlaceOptions,
        handlePlaceChange = props.handlePlaceChange,
        setPlace = props.setPlace,
        statusesDropdown = props.statusesDropdown,
        categoriesDropdown = props.categoriesDropdown,
        place = props.place,
        actionBarTitle = props.actionBarTitle,
        pageTitle = props.pageTitle,
        isFormSubmitted = props.isFormSubmitted,
        setIsFormSubmitted = props.setIsFormSubmitted,
        formControls = props.formControls,
        maxCommentSize = props.maxCommentSize;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "New Event"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "Submit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    columns: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
    fluid: true,
    label: "Location*",
    options: [],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
    fluid: true,
    label: "Type of Event*",
    options: [{
      key: '0',
      value: 'Test',
      option: 'option',
      label: 'label'
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "Title*"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    id: "title",
    type: "text",
    name: "title",
    value: values.title,
    onChange: handleChange,
    onBlur: handleBlur,
    error: errors.title && touched.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }), errors.title && touched.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "help is-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, errors.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, "Sub-Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, "Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["TextArea"], {
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, "Image*"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, "Image caption"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (EventForm);

/***/ }),

/***/ "./components/dmi-mch-event-form/src/index.js":
/*!****************************************************!*\
  !*** ./components/dmi-mch-event-form/src/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ "./components/dmi-mch-event-form/src/form/index.js");
var _jsxFileName = "/opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/src/app/components/dmi-mch-event-form/src/index.js";


 // import { useEffect, useState } from 'react'

 // import { Event as EventService } from '../../../services'
// import { logger, validateAxiosResponse } from '../../../utils'

const EventRecommendation = props => {
  // /* side effects */
  // useEffect(() => {
  //   const event = EventService.getEventAttributes()
  // })
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormRules, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  });
};

const FormRules = Object(formik__WEBPACK_IMPORTED_MODULE_1__["withFormik"])({
  mapPropsToValues: props => ({
    title: ''
  }),
  enableReinitialize: true,
  validationSchema: () => yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
    title: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required()
  }),
  handleSubmit: async (values, {
    props,
    resetForm
  }) => {// props.setFormSubmitting(true)
    // const objectToSave = { ...values }
    // delete objectToSave.place
    // try {
    //   const savedRecommendation = await RecommendationsService.set(props.recommendation.id, objectToSave)
    //   if (validateAxiosResponse(savedRecommendation)) {
    //     resetForm(objectToSave)
    //     props.setIsFormSubmitted(true)
    //     props.setFormSubmitting(false)
    //   }
    // } catch (e) {
    //   logger(e)
    // }
  },
  displayName: 'EventForm'
})(_form__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (EventRecommendation);

/***/ }),

/***/ "./components/icons/Logo.js":
/*!**********************************!*\
  !*** ./components/icons/Logo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(getEnvConfig) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_svg_logo_ab_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/svg/logo-ab.svg */ "./static/svg/logo-ab.svg");
/* harmony import */ var _static_svg_logo_gb_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/svg/logo-gb.svg */ "./static/svg/logo-gb.svg");
var _jsxFileName = "/opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/src/app/components/icons/Logo.js";

// todo: improve this logic, only 1 component should be loaded


/* harmony default export */ __webpack_exports__["default"] = (() => {
  const theme = getEnvConfig.mch.cms.theme;

  if (theme === 'ab') {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_svg_logo_ab_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: undefined
    });
  }

  if (theme === 'gb') {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_svg_logo_gb_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: undefined
    });
  }

  return null;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./utils/getEnvConfig */ "./utils/getEnvConfig.js")["default"]))

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const _require = __webpack_require__(/*! ./package.json */ "./package.json"),
      version = _require.version;

const config = {
  PORT: process.env.PORT || 3001,
  'process.env.NODE_ENV': "development",
  COOKIE_KEYS: {
    LANGUAGE: 'mfpLocale',
    CSRF_TOKEN: 'csrfToken',
    ACCESS_TOKEN: 'access_token' // Must remain for compatibility with all current sessions

  }
};
config.MCHAPP_VERSION = version;
module.exports = config;

/***/ }),

/***/ "./lib/fetch.js":
/*!**********************!*\
  !*** ./lib/fetch.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var apisauce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apisauce */ "apisauce");
/* harmony import */ var apisauce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apisauce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios_retry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios-retry */ "axios-retry");
/* harmony import */ var axios_retry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios_retry__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/storage */ "./utils/storage.js");




const isBrowser = typeof window !== 'undefined'; // eslint-disable-next-line max-len

const isAuthTokenInvalid = response => response.status === 401 && response.data && response.data.message.indexOf('Invalid access token') !== -1;

/* harmony default export */ __webpack_exports__["default"] = (config => {
  const instance = apisauce__WEBPACK_IMPORTED_MODULE_1___default.a.create(config);
  axios_retry__WEBPACK_IMPORTED_MODULE_2___default()(instance.axiosInstance, {
    retries: 2,
    retryCondition: error => {
      const response = error.response;

      if (isAuthTokenInvalid(response)) {
        // eslint-disable-next-line no-param-reassign
        delete error.config.headers.Authorization; // delete auth header for the next retry

        Object(_utils_storage__WEBPACK_IMPORTED_MODULE_3__["clearUserTokens"])(); // will work for only browser requests

        return true;
      } // dont retry any other request besides the one above, its not a good idea repeat failed request.
      // the only purpose of this function is retrying the requests with invalid auth headers.


      return false;
    }
  });
  instance.addRequestTransform(request => {
    const xsrfToken = Object(_utils_storage__WEBPACK_IMPORTED_MODULE_3__["getAccessToken"])();

    if (xsrfToken && xsrfToken.length > 0) {
      request.headers.Authorization = `Bearer ${xsrfToken}`; // eslint-disable-line no-param-reassign
    }
  });
  instance.addResponseTransform(response => {
    // Log http requests on server
    try {
      if (!isBrowser) {
        let responseData = response.data;
        let trace = null; // eslint-disable-line no-unused-vars
        // Trace object is too long and FE doesn't need BE/Java stack trace. BE has its own crash reports

        if (responseData && typeof responseData === 'object' && 'trace' in responseData) {
          var _response$data = response.data;
          trace = _response$data.trace;
          responseData = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_response$data, ["trace"]);
          _response$data;
        }

        if (!response.ok) {
          // Request has failed. Log server error object
          console.log(responseData); // eslint-disable-line no-console

          console.log('----'); // eslint-disable-line no-console
        }
      }
    } catch (e) {} // eslint-disable-line no-empty

  }); // send back the sauce

  return instance;
});

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, root, license, dependencies, devDependencies, peerDependencies, default */
/***/ (function(module) {

module.exports = {"name":"mch-cms-fe","version":"0.0.1","root":true,"license":"UNLICENSED","dependencies":{"@svgr/webpack":"^4.1.0","@zeit/next-bundle-analyzer":"^0.1.2","@zeit/next-css":"1.0.2-canary.0","@zeit/next-sass":"^1.0.1","@zeit/next-source-maps":"0.0.4-canary.0","apisauce":"^1.0.2","axios":"^0.18.0","axios-retry":"^3.1.2","babel-core":"^6.26.3","babel-eslint":"^10.0.1","babel-plugin-add-react-displayname":"^0.0.5","babel-plugin-lodash":"^3.3.4","babel-plugin-module-resolver":"3.2.0","babel-plugin-styled-components":"^1.10.0","babel-plugin-transform-define":"^1.3.1","ckeditor4-react":"^0.1.0","classnames":"^2.2.6","cross-env":"^5.2.0","cssnano":"^4.1.8","dotenv":"^6.2.0","dotenv-load":"^1.1.0","dumper.js":"^1.3.1","eslint-import-resolver-alias":"^1.1.2","figlet":"^1.2.1","file-loader":"^3.0.1","formik":"1.5.1","history":"^4.7.2","husky":"^1.3.1","lint-staged":"8.1.4","lodash":"^4.17.11","memoize-one":"^5.0.0","nanoid":"^2.0.1","next":"^8.0.4-canary.30","next-compose-plugins":"^2.1.1","next-plugin-transpile-modules":"^2.0.0","node-sass":"^4.11.0","nodemon":"^1.18.9","nprogress":"^0.2.0","postcss-easy-import":"^3.0.0","postcss-filter-rules":"^0.2.4","postcss-reporter":"^6.0.1","postcss-safe-parser":"^4.0.1","postcss-unprefix":"^2.1.4","prettier":"^1.16.1","prettyjson":"^1.2.1","prop-types":"^15.6.2","query-string":"^6.2.0","rbx":"^2.0.3","react":"16.8.6","react-dom":"16.8.6","react-dropdown":"^1.6.4","react-loading-overlay":"^1.0.1","react-no-ssr":"^1.1.0","react-paginate":"^6.3.0","react-select":"^2.4.2","recompose":"^0.30.0","rimraf":"^2.6.3","sass-extract":"^2.1.0","sass-extract-js":"^0.4.0","sass-extract-loader":"^1.1.0","sass-loader":"^7.1.0","semantic-ui-css":"2.4.1","semantic-ui-react":"0.86.0","shortid":"^2.2.14","simple-progress-webpack-plugin":"^1.1.2","styled-components":"4.2.0","stylelint":"^9.10.1","stylelint-config-standard":"^18.2.0","stylelint-config-styled-components":"^0.1.1","stylelint-processor-styled-components":"^1.5.1","stylelint-scss":"^3.5.1","url-loader":"^1.1.2","yup":"0.27.0"},"devDependencies":{},"peerDependencies":{"webpack":"^4.28.4"}};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "../../node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");

var _jsxFileName = "/opt/repository/mch/mch-deployments/sources/mch/frontends/mch-mfp-fe-modules/sandbox/src/app/pages/_app.js";





class CMSApp extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  render() {
    const _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }))));
  }

}

const enhance = Object(recompose__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_3__["setDisplayName"])('CMSApp'));
/* harmony default export */ __webpack_exports__["default"] = (enhance(CMSApp));

/***/ }),

/***/ "./services/_http.js":
/*!***************************!*\
  !*** ./services/_http.js ***!
  \***************************/
/*! exports provided: api, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony import */ var _lib_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/fetch */ "./lib/fetch.js");
/* eslint-disable no-console */

const isBrowser = typeof window !== 'undefined';
const HOST = `http://localhost:${process.env.PORT}`;
const initFetch = Object(_lib_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])({
  baseURL: isBrowser ? window.location.origin : HOST,
  timeout: 60000
});
const api = initFetch;
/* harmony default export */ __webpack_exports__["default"] = ({
  get: async (url, params, headers = null) => api.get(url, params, {
    headers
  }),
  del: async url => api.delete(url, null),
  put: async (url, body) => api.put(url, body),
  post: async (url, body, headers = null) => api.post(url, body, {
    headers
  })
});

/***/ }),

/***/ "./services/cms.js":
/*!*************************!*\
  !*** ./services/cms.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_http */ "./services/_http.js");

const Cms = {
  getPageByUrl: url => _http__WEBPACK_IMPORTED_MODULE_0__["default"].get('/msvc/v1/pageviews', {
    url
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Cms);

/***/ }),

/***/ "./services/event.js":
/*!***************************!*\
  !*** ./services/event.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_http */ "./services/_http.js");


const Event = {
  getEventAttributes: () => {
    const params = {
      attributeType: 'EVENT_TYPE'
    };
    return _http__WEBPACK_IMPORTED_MODULE_1__["default"].get(`/msvc/v1/events/attributes/?${query_string__WEBPACK_IMPORTED_MODULE_0___default.a.stringify(params)}`);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ }),

/***/ "./services/index.js":
/*!***************************!*\
  !*** ./services/index.js ***!
  \***************************/
/*! exports provided: User, Languages, Cms, Place, Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./services/user.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languages */ "./services/languages.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Languages", function() { return _languages__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _cms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cms */ "./services/cms.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cms", function() { return _cms__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _place__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./place */ "./services/place.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Place", function() { return _place__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event */ "./services/event.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return _event__WEBPACK_IMPORTED_MODULE_4__["default"]; });








/***/ }),

/***/ "./services/languages.js":
/*!*******************************!*\
  !*** ./services/languages.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_http */ "./services/_http.js");

const headers = {
  'cache-control': 'no-cache'
};
const Languages = {
  getList: () => _http__WEBPACK_IMPORTED_MODULE_0__["default"].get('/msvc/v1/pages/locales', null, headers)
};
/* harmony default export */ __webpack_exports__["default"] = (Languages);

/***/ }),

/***/ "./services/place.js":
/*!***************************!*\
  !*** ./services/place.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_http */ "./services/_http.js");

const Place = {
  autocomplete: text => _http__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/msvc/v1/places/suggestions?input=${text}`),
  getPlace: id => _http__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/msvc/v1/places/items/${id}`)
};
/* harmony default export */ __webpack_exports__["default"] = (Place);

/***/ }),

/***/ "./services/user.js":
/*!**************************!*\
  !*** ./services/user.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_http */ "./services/_http.js");

const User = {
  signIn: data => {
    const username = data.username,
          password = data.password;
    const params = {
      username,
      password,
      generateCsrfToken: true,
      expirationPolicy: 'AFTER_LOGIN'
    };
    return _http__WEBPACK_IMPORTED_MODULE_0__["default"].post('/msvc/v1/login', params);
  },
  getRoles: headers => _http__WEBPACK_IMPORTED_MODULE_0__["default"].get('/msvc/v1/login', null, headers),
  signOut: () => _http__WEBPACK_IMPORTED_MODULE_0__["default"].del('/msvc/v1/login'),
  findUser: crmGuid => _http__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/msvc/v1/userprofiles/find?crmGuid=${crmGuid}`),
  getMe: () => _http__WEBPACK_IMPORTED_MODULE_0__["default"].get('/msvc/v1/userprofiles/me'),
  resolveUserId: (entityType, entityId) => _http__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/msvc/v1/userprofiles/resolution/resolve/${entityType}/${entityId}`),
  autocomplete: (entityType, params) => _http__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/msvc/v1/userprofiles/resolution/autocomplete/${entityType}`, params)
};
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./static/svg/logo-ab.svg":
/*!********************************!*\
  !*** ./static/svg/logo-ab.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgLogoAb = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  className: "logo-ab_svg__ab",
  viewBox: "0 0 808 265"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "logo-ab_svg__abLogo-text",
  d: "M765 226.904c0-2.284.571-11.422.571-24.273 0-13.42.286-26.27.286-39.693 0-11.707-.571-24.843-.571-33.696 0-8.28.285-21.702.285-27.128l-.285-29.413c0-13.992-.286-25.986-.286-30.269 0-6.853 1.714-7.139 7.141-7.71 5.713-.57 17.424-1.142 27.421-.286 4.57.286 7.712 2.57 7.712 8.853 0 62.67-.004 123.9 0 183.901-.022 3.712-.285 6.567-1.142 8.281-1.143 1.142-2 1.713-5.142 1.713-3.999 0-7.426-.285-11.997-.285-5.141 0-12.282.856-15.424.856-5.427 0-8.569-2.284-8.569-10.85m-54.256-75.946c1.143-1.142 1.143-5.997 1.143-10.566 0-5.425 0-9.423-.286-12.85-.286-4.283-.571-8.281-1.714-11.422-1.142-2.856-3.428-4.855-6.855-4.855-4 0-6.284 2.285-7.141 6.282-1.143 5.712-1.428 13.422-1.428 21.989 0 8.566.57 10.565 2.57 11.708 1.143.571 2.57.856 4.856.856 5.713 0 7.998-.285 8.855-1.142m-32.562 77.958c-8.57-6.282-13.14-12.565-16.853-22.845-3.427-9.709-4.57-23.13-5.141-39.978-.286-9.424-.286-17.419.285-27.129.572-9.709 1.429-19.989 3.999-29.698 2.857-11.137 7.14-18.276 14.853-25.129C681.895 78.427 690.464 75 704.46 75c13.71 0 25.707 3.998 34.276 15.706 5.713 7.71 7.427 16.277 8.855 22.559 1.428 6.282 2.57 15.706 2.57 23.702 0 8.852-.285 19.703-.856 26.271-.286 3.998-.571 5.426-.857 6.854-1.428 7.71-5.713 11.422-14.567 11.422-4.856 0-9.712-.286-14.568-.286h-11.425c-6.57 0-9.141.572-10.57 1.428-1.427.857-1.998 2.57-1.998 4.284 0 3.712 1.713 5.996 4.284 7.995 3.999 3.141 8.569 4.855 15.139 4.855 4.856 0 8.283-.286 12.854-1.714 2.856-.856 5.712-1.998 7.712-2.855 1.999-.857 4.856-1.999 6.855-1.999 3.713 0 5.713 1.713 5.713 5.711 0 3.427 0 7.139-.286 9.995-.286 3.712-.286 10.565-.857 14.563-.857 6.854-4 9.424-11.14 11.423-8.283 2.284-15.138 2.855-24.28 2.855-14.281 0-24.563-2.57-33.132-8.852zm-95.47 5.997c-2.856-1.142-4.57-2.284-5.713-3.712-1.142-1.428-1.999-3.141-1.999-9.424v-14.563c0-6.283.285-7.996 1.142-9.424.857-1.142 2-1.428 3.142-1.428 1.714 0 3.714.571 5.713 1.143 4.57 1.427 7.712 2.855 11.997 2.855 6.855 0 10.854-4.283 10.854-13.136 0-6.567-1.999-10.565-4.285-13.421-2.285-3.141-5.427-5.711-8.854-9.138-3.999-3.998-7.712-8.567-11.426-13.707-5.141-7.139-7.998-19.132-7.998-29.698 0-9.709 1.143-18.847 7.427-28.842C589.282 81.854 598.136 75 616.703 75c5.427 0 11.711.857 16.281 1.999 5.427 1.428 8.569 3.141 8.855 7.425.285 4.854.285 8.567.285 12.564v13.136c0 4.569-1.142 5.711-4.855 5.711-2.286 0-4.571-.571-7.141-1.427-2.285-.857-4.856-1.428-7.713-1.428-4.57 0-7.712 2.855-7.712 8.281 0 3.427.857 6.282 2.857 8.567 2.285 2.57 4.855 4.854 9.426 9.994 3.999 4.569 9.426 11.423 13.425 18.276 4.284 7.139 6.855 17.991 6.855 29.413 0 14.849-3.999 25.415-9.997 33.411-7.713 9.994-18.852 16.848-35.134 16.848-7.998 0-14.567-.857-19.423-2.856zm-60.156-41.549c.286-6.853.286-18.276.286-21.703 0-3.997 0-6.853-.857-9.709-.857-3.141-2.857-5.425-7.141-5.425-3.142 0-6.57 1.713-7.712 5.425-1.143 3.427-1.429 6.854-1.429 12.565 0 7.425 0 13.136.286 19.133.286 5.996 2.856 11.708 8.284 11.708 5.712 0 7.997-4.284 8.283-11.994m-47.13 33.696c-4.285-5.14-7.141-13.707-7.998-22.559-.857-8.567-1.428-15.706-1.428-23.131 0-4.568 0-10.565 1.428-21.702 1.143-9.709 5.713-19.133 12.854-25.701 5.427-4.854 12.282-6.853 19.994-6.853 5.427 0 10.569.857 13.425 1.713 2.285.571 4.57 1.428 6.856 1.428 2.856 0 3.998-2.284 3.998-5.711 0-2.856-.856-5.711-2.57-7.425-3.428-3.426-8.569-4.569-14.568-4.569-4.856 0-9.711.857-12.853 1.714-3.142.856-5.713 1.999-8.569 2.855-2.857.857-5.428 1.714-7.713 1.714-1.713 0-3.142-.286-4.284-1.428-1.143-1.142-1.428-3.427-1.714-5.997-.286-2.855-.286-4.569-.286-9.994V89.421c0-3.998.857-6.282 3.999-7.71 3.142-1.428 10.283-3.141 18.852-4.284 5.999-.856 11.426-1.427 19.709-1.427 12.854 0 22.28 2.57 30.849 7.424 9.997 5.712 14.567 17.705 15.71 27.414.857 7.71.571 16.563.571 25.701l.286 33.41c0 16.848.285 26.843.285 37.98 0 5.996-.571 11.422-.571 17.419v5.997c-.285 2.855-3.713 3.712-8.283 3.712H528.84c-1.714 0-2.285-.857-2.285-2.57v-4.855c0-1.713-.571-2.57-2-2.57-1.428 0-3.427 3.141-5.712 5.14-4.285 4.569-10.854 6.854-19.995 6.854-9.711 0-17.709-3.141-23.422-9.995M393.132 89.827c0 6.568-.286 13.992-.286 17.705 0 5.14 2.285 6.568 6.57 6.568 2.856 0 5.427-.571 7.712-2.57 2.857-2.57 5.427-7.425 5.427-21.989 0-16.848-4.284-20.56-13.425-20.56-4.57 0-6.284 1.142-6.284 3.427 0 5.425.286 12.564.286 17.419m21.137 79.386c0-4.569-.571-11.423-2.285-16.563-1.714-5.14-4.856-8.281-10.854-8.281-7.141 0-8.284 2.57-8.284 5.426 0 6.853-.285 14.278-.285 18.847 0 8.566-.286 18.847.285 25.7.286 3.998 1.714 5.997 5.142 5.997 8.569 0 11.711-4.284 13.996-11.423 1.714-5.711 2.285-13.992 2.285-19.703m41.703 3.427c0 19.418-4.285 34.838-12.568 45.689-9.712 12.85-20.28 17.99-47.416 17.99h-28.563c-11.711 0-14.853-2.284-15.139-11.136-.286-7.711-.286-16.848-.286-23.702 0-8.567.572-36.552.572-47.403V67.839c0-10.566-.286-18.847-.286-28.271 0-3.426 0-5.14 5.998-5.711 6.57-.571 15.996-.857 28.564-.857h5.427c31.134 0 40.846 5.426 48.844 14.279 7.712 8.566 11.711 22.559 11.711 37.693 0 16.277-3.713 31.127-13.711 39.693 11.14 7.139 16.853 23.131 16.853 47.975zm-245.69 53.263c-4.57-6.282-6.855-15.706-6.855-27.128 0-8.281.285-18.847.285-28.271 0-7.424-.285-14.563-.285-23.987 0-7.139.285-18.276.285-21.702 0-1.428-.571-1.714-3.999-1.714h-1.142c-2 0-2.571-1.713-2.571-4.569l.286-16.562c0-4.569-.286-10.566-.286-13.136 0-1.999 0-3.141 2.285-3.141h4.285c1.714 0 1.999-.857 1.999-2.856l-.285-15.134-.286-12.565c0-7.425 1.714-9.138 7.427-9.138 5.141 0 8.854.286 12.853.286 4.856 0 8.855-.286 11.426-.286 1.999 0 3.999.286 5.427 1.428 1.428 1.142 2.57 3.141 2.57 5.711 0 9.423-.285 18.847-.285 29.413 0 2.284.285 3.426 1.714 3.426l8.854-.285c3.428 0 3.714 1.142 4.285 4.569.286 1.999.571 5.997.571 9.138 0 6.282 0 12.279-.571 18.561-.286 2.856-.571 3.998-3.142 3.998-8.284 0-10.283.286-11.14 1.713-.571.857-.571 2.57-.857 7.996-.285 6.568-.285 23.987-.285 28.556 0 7.71-.286 18.847.285 26.557.286 3.998 1.428 7.71 2.857 9.138 1.713 1.714 4.57 2.57 8.569 2.57 2.57 0 3.713.571 3.713 3.141v12.851c0 3.426.286 9.423.286 14.563 0 3.427-1.429 4.569-5.428 5.711-5.427 1.428-9.997 1.999-17.423 1.999-11.14 0-20.566-3.998-25.422-10.851zM186.269 93.99v10.566c0 3.998 0 11.137-.285 14.849-.286 3.712-1.143 4.284-3.428 4.569-6.57.286-11.14 3.712-12.568 9.138-1.428 5.997-1.714 13.993-1.428 21.417.286 6.854.571 12.85.571 19.989l.286 25.13c0 11.993.571 22.273.571 26.557 0 2.57-.571 5.711-2.285 6.853-2.571 1.714-5.427 1.999-14.853 1.999h-16.853c-4.284 0-6.569-.857-7.426-5.14-.286-1.428-.286-7.996-.286-14.278L128 190.795c0-11.993.285-27.985.285-41.977v-29.984c0-11.993-.285-21.417-.285-33.411 0-4.854 1.142-7.424 8.283-7.424h3.713c4.285 0 9.712-.286 14.568-.286 4.57 0 5.141 1.999 5.427 8.567l.857 19.418c1.999-10.851 6.284-19.989 9.997-23.987 3.428-3.712 7.141-5.711 11.997-5.711 3.142 0 3.713 1.142 3.713 4.569zM64.554 163.788c2.856 0 3.428 0 3.428-2.856 0-3.712-1.143-16.277-2.571-26.842-.571-3.998-1.428-10.28-1.714-13.993-.571-5.711-1.999-15.991-2.571-20.275-.857-6.282-1.142-8.281-2.57-8.281-1.429 0-1.714 1.999-2.571 8.567l-2.571 19.989c-.857 7.425-1.714 15.706-2.285 20.846-.857 6.568-1.999 16.563-1.999 20.846 0 1.713.571 1.999 3.142 1.999zm7.712 52.543c-.571-6.282-.857-10.28-1.714-14.278-.857-3.427-2.285-4.283-12.282-4.283-9.712 0-11.14.571-11.997 3.426-1.142 3.427-1.714 7.711-2.57 12.565-.572 2.856-1.143 6.854-2 13.707-.571 5.426-2.285 7.996-7.998 7.996-1.142 0-5.141.285-11.996.285-6.284 0-11.14 0-14.854-.285C2.571 235.178 0 234.321 0 231.18c0-1.428.571-5.14.857-7.139l2.856-16.848c3.999-23.701 7.713-47.403 11.712-71.104 2.856-17.134 5.427-35.41 8.283-52.543 2.571-15.421 4.856-28.842 7.712-43.691.857-2.856 2-3.713 4.57-4.284C38.561 35 42.846 35 49.13 35c4.284 0 11.139.286 16.281.286 3.999 0 9.426-.286 11.997-.286 4.57 0 7.426 1.142 8.283 5.14l2.571 12.851c7.712 37.979 12.568 76.53 19.423 115.08 3.142 17.705 5.427 35.695 8.284 53.4.571 3.141.856 5.711.856 7.996 0 3.427-.571 5.997-4.284 5.997H98.545c-4.285 0-9.998.571-15.71.571-6.856 0-8.855-.857-9.426-5.997z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "logo-ab_svg__abLogo-seperator",
  d: "M293 262.144c0-31.412.286-62.538.286-94.52 0-43.977-.286-87.667-.286-131.644V5.425c0-3.712.286-5.425 5.141-5.425h8.284c4.856 0 5.713.571 5.713 2.855 0 35.981.285 72.247.285 108.228 0 41.12-.285 81.67-.285 122.791v24.843c0 4.855-.286 6.283-3.428 6.283h-9.426c-5.713 0-6.284-.572-6.284-2.856"
}));

/* harmony default export */ __webpack_exports__["default"] = (SvgLogoAb);

/***/ }),

/***/ "./static/svg/logo-gb.svg":
/*!********************************!*\
  !*** ./static/svg/logo-gb.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgLogoGb = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  className: "logo-gb_svg__gb",
  viewBox: "0 0 135 30"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M0 29.692h19.26C21.686 12.529 29.941 1.466 47.686 1.466c7.48 0 13.213 2.406 17.468 6.648V2.4C59.584 1.781 55.247.665 47.687.665 24.234.665 6.062 12.235 0 29.692zm120.897-13.38h-2.954V29.7h9.502v-2.475h-6.548V16.312zm-11.96 7.632h6.51v-2.288h-6.51v-2.868h7.093v-2.476h-10.047V29.7h10.197v-2.475h-7.243v-3.281zm-6.151-1.219a5.02 5.02 0 0 0-1.327-.628 12.924 12.924 0 0 0-1.044-.272c-.84-.212-1.521-.388-2.041-.525-.521-.137-.929-.275-1.223-.413-.295-.137-.493-.287-.593-.45-.1-.162-.15-.375-.15-.637 0-.287.062-.525.188-.713.125-.187.285-.343.48-.468a1.91 1.91 0 0 1 .648-.263c.239-.05.477-.075.715-.075.364 0 .7.032 1.007.094.307.063.58.169.819.319.238.15.429.356.573.619.145.262.229.593.254.993h2.86c0-.775-.147-1.434-.442-1.978a3.852 3.852 0 0 0-1.195-1.34 5.064 5.064 0 0 0-1.721-.76 8.586 8.586 0 0 0-2.023-.234c-.602 0-1.204.081-1.806.244a5.057 5.057 0 0 0-1.618.75 3.98 3.98 0 0 0-1.157 1.265c-.295.506-.443 1.104-.443 1.79 0 .613.116 1.135.349 1.566.231.432.536.791.912 1.078a5.02 5.02 0 0 0 1.28.704c.476.181.965.334 1.468.459.489.138.971.262 1.448.375.476.112.904.244 1.28.394.376.15.68.337.912.562.232.225.348.52.348.881 0 .338-.088.616-.263.835-.176.219-.396.39-.659.516a2.96 2.96 0 0 1-.847.253 5.86 5.86 0 0 1-.846.065c-.39 0-.766-.047-1.13-.14a2.802 2.802 0 0 1-.949-.432 2.12 2.12 0 0 1-.65-.759c-.163-.312-.244-.694-.244-1.144h-2.86c-.012.825.138 1.538.451 2.138.314.6.737 1.093 1.27 1.481a5.417 5.417 0 0 0 1.844.853 8.531 8.531 0 0 0 2.155.272c.915 0 1.721-.106 2.418-.319.696-.212 1.28-.51 1.75-.89.47-.381.824-.835 1.062-1.36a4.085 4.085 0 0 0 .358-1.706c0-.75-.16-1.365-.48-1.847-.32-.481-.7-.865-1.138-1.153zm-17.986 1.8l1.75-4.912h.038l1.694 4.912H84.8zm.282-8.212L80.002 29.7h2.973l1.054-2.981h5.023L90.07 29.7h3.066l-5.023-13.387h-3.03zm-8.357 10.2a1.417 1.417 0 0 1-.48.534c-.2.131-.432.225-.696.281-.263.056-.54.085-.828.085h-3.16v-3.675h3.217c.64 0 1.154.147 1.543.44.388.294.583.784.583 1.472 0 .35-.06.638-.18.863zM71.56 18.6h2.766c.264 0 .517.022.762.066.244.043.46.122.65.234.188.113.338.269.45.469.114.2.17.456.17.768 0 .563-.17.97-.508 1.22-.338.25-.772.374-1.298.374H71.56V18.6zm5.833 3.825c.602-.288 1.057-.656 1.364-1.106.307-.45.461-1.013.461-1.688 0-.625-.104-1.15-.31-1.575a2.582 2.582 0 0 0-.875-1.022 3.791 3.791 0 0 0-1.355-.553 8.398 8.398 0 0 0-1.75-.169h-6.322V29.7h6.51c.603 0 1.189-.075 1.76-.225a4.712 4.712 0 0 0 1.524-.694c.445-.312.8-.716 1.063-1.21.263-.493.394-1.077.394-1.752 0-.837-.203-1.553-.61-2.147-.409-.594-1.026-1.01-1.854-1.247zm53.92-13.04c-.188.512-.439.928-.752 1.246a2.735 2.735 0 0 1-1.072.685 3.8 3.8 0 0 1-1.242.206h-2.634V3.084h2.106c.728 0 1.34.103 1.835.31.496.206.894.503 1.195.89.301.388.518.854.65 1.397a7.78 7.78 0 0 1 .197 1.828c0 .738-.094 1.363-.282 1.875zm2.776-5.063c-.308-.825-.734-1.512-1.28-2.063a5.253 5.253 0 0 0-1.938-1.237 6.947 6.947 0 0 0-2.417-.413h-5.795v13.388h5.795c1.028 0 1.922-.172 2.68-.516a5.332 5.332 0 0 0 1.901-1.415c.508-.6.887-1.313 1.139-2.138a9.25 9.25 0 0 0 .376-2.7c0-1.112-.154-2.081-.461-2.906zM120.346.609h-2.766v8.982h-.037L111.936.609H109v13.388h2.765V5.034h.038l5.588 8.963h2.954V.609zM99.7 8.822l1.75-4.913h.038l1.693 4.913H99.7zm3.312-8.213h-3.03l-5.08 13.388h2.973l1.054-2.981h5.023l1.016 2.98h3.067L103.012.61zM85.6 2.897h3.236c.678 0 1.186.147 1.525.44.338.294.508.766.508 1.416 0 .675-.17 1.163-.508 1.463-.339.3-.847.45-1.525.45H85.6v-3.77zm0 5.869h2.954c.74 0 1.273.162 1.6.487.326.325.539.838.64 1.538.075.537.131 1.1.169 1.687.037.588.138 1.094.3 1.519h2.955a1.953 1.953 0 0 1-.31-.684 5.825 5.825 0 0 1-.152-.854c-.03-.3-.053-.594-.065-.88a66.876 66.876 0 0 0-.038-.75 8.225 8.225 0 0 0-.14-1.013 3.417 3.417 0 0 0-.33-.929 2.564 2.564 0 0 0-.584-.73 2.281 2.281 0 0 0-.903-.46v-.038c.753-.3 1.295-.737 1.628-1.312.332-.575.498-1.256.498-2.044 0-.512-.09-.99-.272-1.434a3.467 3.467 0 0 0-.79-1.172A3.752 3.752 0 0 0 91.517.9 4.343 4.343 0 0 0 89.89.61h-7.244v13.387H85.6V8.766zm-13.748 4.996c.821.357 1.747.535 2.775.535.652 0 1.299-.135 1.938-.403.64-.269 1.223-.74 1.75-1.416l.301 1.519h1.882V6.759h-5.645v2.194h2.973c-.088.938-.399 1.653-.932 2.147-.533.494-1.289.74-2.267.74-.665 0-1.23-.127-1.693-.384a3.22 3.22 0 0 1-1.13-1.022A4.423 4.423 0 0 1 71.174 9a6.792 6.792 0 0 1-.197-1.64c0-.588.066-1.157.198-1.707.131-.55.341-1.04.63-1.472a3.193 3.193 0 0 1 1.129-1.031c.464-.256 1.028-.384 1.693-.384.715 0 1.323.187 1.825.562.502.375.84.938 1.016 1.688h2.822c-.075-.763-.282-1.438-.62-2.025a5.003 5.003 0 0 0-1.29-1.482A5.691 5.691 0 0 0 76.632.6a6.552 6.552 0 0 0-2.004-.31c-1.028 0-1.954.182-2.775.544a5.938 5.938 0 0 0-2.08 1.5 6.686 6.686 0 0 0-1.297 2.241 8.34 8.34 0 0 0-.452 2.784c0 .975.15 1.885.452 2.729a6.51 6.51 0 0 0 1.298 2.203 5.941 5.941 0 0 0 2.079 1.471z"
}));

/* harmony default export */ __webpack_exports__["default"] = (SvgLogoGb);

/***/ }),

/***/ "./utils/cmsBreadcrumb.js":
/*!********************************!*\
  !*** ./utils/cmsBreadcrumb.js ***!
  \********************************/
/*! exports provided: breadcrumbData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breadcrumbData", function() { return breadcrumbData; });
const breadcrumbData = [{
  key: 'labels',
  label: 'Labels & Messages',
  url: '/labels',
  subPages: [{
    key: 'add',
    label: 'Add Label',
    url: '/labels/add'
  }, {
    key: 'edit',
    label: 'Edit Label',
    url: '/labels/edit'
  }],
  tabMenu: [{
    key: 'labels',
    label: 'Labels & Messages',
    url: '/labels'
  }]
}, {
  key: 'recommendations',
  label: 'Recommendations',
  url: '/recommendations',
  subPages: [{
    key: 'add',
    label: 'Add Recommendation',
    url: '/recommendations/add'
  }, {
    key: 'edit',
    label: 'Edit Recommendations',
    url: '/recommendations/edit'
  }],
  tabMenu: [{
    key: 'recommendations',
    label: 'Recommendations',
    url: '/recommendations'
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (breadcrumbData);

/***/ }),

/***/ "./utils/cssHelpers.js":
/*!*****************************!*\
  !*** ./utils/cssHelpers.js ***!
  \*****************************/
/*! exports provided: memoHiDPI, memoPx2Rem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoHiDPI", function() { return memoHiDPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoPx2Rem", function() { return memoPx2Rem; });
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! memoize-one */ "memoize-one");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(memoize_one__WEBPACK_IMPORTED_MODULE_0__);

const emSize = '16px';
const retinaCalc = 1.5;

const px2rem = pxVal => `${pxVal / emSize.replace(/px/g, '')}rem`;

const hiDPIpx = pxVal => `${pxVal * retinaCalc}px`;

const memoHiDPI = memoize_one__WEBPACK_IMPORTED_MODULE_0___default()(hiDPIpx);
const memoPx2Rem = memoize_one__WEBPACK_IMPORTED_MODULE_0___default()(px2rem);

/***/ }),

/***/ "./utils/dropdown.js":
/*!***************************!*\
  !*** ./utils/dropdown.js ***!
  \***************************/
/*! exports provided: buildSelectOptions, buildSelectedWithConvertOptions, getSelectedOption, buildSelectWithNoKeyMap, handleNoAutocomplete, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSelectOptions", function() { return buildSelectOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSelectedWithConvertOptions", function() { return buildSelectedWithConvertOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedOption", function() { return getSelectedOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSelectWithNoKeyMap", function() { return buildSelectWithNoKeyMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleNoAutocomplete", function() { return handleNoAutocomplete; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "../../node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./utils/index.js");


const buildSelectOptions = (arr, keyMap) => {
  try {
    // to avoid full component/page render crashes
    // map method exist only in Array.prototype. This function may fail in case "arr" argument is not an array.
    // In case API server is down or doesnt provide expected data, default [] should be returned and be logged quietly.
    return arr.map(item => ({
      key: item[keyMap.key],
      value: item[keyMap.value],
      text: item[keyMap.text],
      name: item[keyMap.name]
    }));
  } catch (e) {
    Object(___WEBPACK_IMPORTED_MODULE_1__["logger"])(e);
    return [];
  }
};
const buildSelectedWithConvertOptions = (obj, keyMap) => {
  try {
    return obj.map(item => ({
      key: item[keyMap.key],
      value: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(item[keyMap.value], 10),
      text: item[keyMap.text],
      name: item[keyMap.name]
    }));
  } catch (e) {
    Object(___WEBPACK_IMPORTED_MODULE_1__["logger"])(e);
    return [];
  }
};
const getSelectedOption = (obj, item) => {
  if (item) {
    const parsedObj = obj.find(i => i.text === item);
    return parsedObj ? parsedObj.value : '';
  }

  return '';
};
const buildSelectWithNoKeyMap = obj => {
  try {
    return obj.map(item => ({
      key: item,
      value: item,
      text: item,
      name: item
    }));
  } catch (e) {
    Object(___WEBPACK_IMPORTED_MODULE_1__["logger"])(e);
    return [];
  }
};
const handleNoAutocomplete = event => {
  event.target.setAttribute('autocomplete', 'nope');
};
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./utils/getEnvConfig.js":
/*!*******************************!*\
  !*** ./utils/getEnvConfig.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);




/* eslint-disable no-param-reassign, no-underscore-dangle, no-console */


const _getConfig = next_config__WEBPACK_IMPORTED_MODULE_3___default()(),
      publicRuntimeConfig = _getConfig.publicRuntimeConfig;

const processEnv = publicRuntimeConfig || process.env || {};

const mch = processEnv.mch,
      restVars = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(processEnv, ["mch"]);

const injectedVars = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, mch, restVars);

let varsLogged = false;

if (process && !false && !varsLogged) {
  console.debug('Following configurations injected to the app');
  console.debug(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(injectedVars, ' ', 2));
  varsLogged = true;
}

/* harmony default export */ __webpack_exports__["default"] = (processEnv || {});

/***/ }),

/***/ "./utils/getTranslationByName.js":
/*!***************************************!*\
  !*** ./utils/getTranslationByName.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(getEnvConfig) {/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/find */ "lodash/find");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);


const findLabelObj = filteredObject => {
  const labels = getEnvConfig.mch.labels;
  const newObj = filteredObject;
  const _filteredObject$0$key = filteredObject[0].key,
        entityId = _filteredObject$0$key.entityId,
        fieldName = _filteredObject$0$key.fieldName;
  lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(labels[entityId][fieldName], () => {
    newObj[0].description = labels[entityId][fieldName].description;
    newObj[0].type = labels[entityId][fieldName].type;
  });
  return newObj;
};

const getTranslationByName = (labels, language, fieldName) => {
  const filteredObject = labels.filter(label => label.key.localeCode.toLowerCase() === language.toLowerCase() && label.key.fieldName === fieldName);
  const finalLabel = findLabelObj(filteredObject);
  return filteredObject.length > 0 ? {
    entityType: filteredObject[0].key.entityType,
    entityId: filteredObject[0].key.entityId,
    fieldName: filteredObject[0].key.fieldName,
    value: filteredObject[0].value,
    description: finalLabel[0].description,
    type: finalLabel[0].type
  } : null;
};

/* harmony default export */ __webpack_exports__["default"] = (getTranslationByName);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./utils/getEnvConfig */ "./utils/getEnvConfig.js")["default"]))

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: px2rem, hiDPIpx, storage, setUserCookies, logger, cmsBreadcrumb, handleClientPath, handleServerPath, cmsPageUrl, findObjByKey, findLabels, validateAxiosResponse, getTranslationByName, Dropdown, toggleSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony import */ var _cssHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cssHelpers */ "./utils/cssHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "px2rem", function() { return _cssHelpers__WEBPACK_IMPORTED_MODULE_0__["memoPx2Rem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hiDPIpx", function() { return _cssHelpers__WEBPACK_IMPORTED_MODULE_0__["memoHiDPI"]; });

/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./utils/storage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return _storage__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setUserCookies", function() { return _storage__WEBPACK_IMPORTED_MODULE_1__["setUserTokens"]; });

/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ "./utils/logger.js");
/* harmony import */ var _cmsBreadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cmsBreadcrumb */ "./utils/cmsBreadcrumb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cmsBreadcrumb", function() { return _cmsBreadcrumb__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _urlHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./urlHelpers */ "./utils/urlHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleClientPath", function() { return _urlHelpers__WEBPACK_IMPORTED_MODULE_4__["handleClientPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleServerPath", function() { return _urlHelpers__WEBPACK_IMPORTED_MODULE_4__["handleServerPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cmsPageUrl", function() { return _urlHelpers__WEBPACK_IMPORTED_MODULE_4__["cmsPageUrl"]; });

/* harmony import */ var _objectHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./objectHelpers */ "./utils/objectHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findObjByKey", function() { return _objectHelpers__WEBPACK_IMPORTED_MODULE_5__["findObjByKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findLabels", function() { return _objectHelpers__WEBPACK_IMPORTED_MODULE_5__["findLabels"]; });

/* harmony import */ var _validateAxiosResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validateAxiosResponse */ "./utils/validateAxiosResponse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateAxiosResponse", function() { return _validateAxiosResponse__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _getTranslationByName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getTranslationByName */ "./utils/getTranslationByName.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTranslationByName", function() { return _getTranslationByName__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dropdown */ "./utils/dropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _dropdown__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _tableHelpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tableHelpers */ "./utils/tableHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleSort", function() { return _tableHelpers__WEBPACK_IMPORTED_MODULE_9__["toggleSort"]; });











const logger = _logger__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./utils/logger.js":
/*!*************************!*\
  !*** ./utils/logger.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isClient = typeof window !== 'undefined';
const env = (isClient ? window.ENV : process.env.environment) || 'dev';
const isProd = "development" !== 'development';

const silentLogger = log => {
  // Show console logs on Test and Development servers only
  if (env === 'test' || !isProd) {
    console.log(log); // eslint-disable-line no-console
  }
};

/* harmony default export */ __webpack_exports__["default"] = (silentLogger);

/***/ }),

/***/ "./utils/objectHelpers.js":
/*!********************************!*\
  !*** ./utils/objectHelpers.js ***!
  \********************************/
/*! exports provided: findObjByKey, findLabels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findObjByKey", function() { return findObjByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findLabels", function() { return findLabels; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

const findObjByKey = (object, key, value) => {
  let objByKey = null;

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(object).forEach(item => {
    if (object[item][key] === value) {
      objByKey = object[item];
    }
  });

  return objByKey;
};
const findLabels = (labels, language) => labels.find(label => label.key.localeCode === language);

/***/ }),

/***/ "./utils/storage.js":
/*!**************************!*\
  !*** ./utils/storage.js ***!
  \**************************/
/*! exports provided: setCookie, getCookie, setUserTokens, getAccessToken, clearUserTokens, logoutTabs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserTokens", function() { return setUserTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccessToken", function() { return getAccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearUserTokens", function() { return clearUserTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutTabs", function() { return logoutTabs; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal-cookie */ "universal-cookie");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./utils/index.js");





const CONFIG = __webpack_require__(/*! ../../app/config */ "./config.js");

const Cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_1___default.a();
const setCookie = (key, value, options) => {
  Cookies.set(key, value, options);
};
const getCookie = (req = null, key, fallback = null) => {
  let result = fallback;

  try {
    if (typeof window !== 'undefined') {
      result = Cookies.get(key) || fallback;
    } else {
      result = req && req.universalCookies ? req.universalCookies.get(key) : fallback;
    }
  } catch (e) {
    Object(___WEBPACK_IMPORTED_MODULE_3__["logger"])(`!!! CRITICAL: ${e}`);
  }

  return result;
};
const setUserTokens = (response, values) => {
  const serverSessionObject = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, response.data);

  let sessionExpire = null;

  if (values && values.remember) {
    // Current time + expire time from API, in ms. Converted to date object.
    sessionExpire = new Date(new Date().getTime() + serverSessionObject.sessionSummary.expireInSeconds * 1000);
  }

  setCookie(CONFIG.COOKIE_KEYS.CSRF_TOKEN, serverSessionObject.sessionSummary.csrfToken, {
    expires: sessionExpire,
    path: '/'
  });
  setCookie(CONFIG.COOKIE_KEYS.ACCESS_TOKEN, serverSessionObject.accessToken, {
    expires: sessionExpire,
    path: '/'
  });
};
const getAccessToken = (req = null) => getCookie(req, CONFIG.COOKIE_KEYS.ACCESS_TOKEN);
const clearUserTokens = (req = null) => {
  if (req && req.universalCookies) {
    req.universalCookies.remove(CONFIG.COOKIE_KEYS.CSRF_TOKEN);
    req.universalCookies.remove(CONFIG.COOKIE_KEYS.ACCESS_TOKEN);
    req.universalCookies.remove('fullName');
  } else {
    Cookies.remove(CONFIG.COOKIE_KEYS.CSRF_TOKEN, {
      path: '/'
    });
    Cookies.remove(CONFIG.COOKIE_KEYS.ACCESS_TOKEN, {
      path: '/'
    });
    Cookies.remove('fullName', {
      path: '/'
    });
  }
};
const logoutTabs = () => {
  window.addEventListener('storage', event => {
    if (event.key === 'logout-event') {
      localStorage.removeItem('logout-event');
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/signin');
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./utils/tableHelpers.js":
/*!*******************************!*\
  !*** ./utils/tableHelpers.js ***!
  \*******************************/
/*! exports provided: toggleSort, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleSort", function() { return toggleSort; });
/*
@param { sortBy } string - whats the current sort filter in your state
@param { isAscending } bool - whats the current value of your state
@param {entity } string - whats the current sort filter you want to apply
*/
const toggleSort = (sortBy, isAscending, entity) => {
  if (sortBy === entity && typeof isAscending !== 'undefined') {
    return !isAscending ? 'desc' : 'asc';
  }

  return '';
};
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./utils/urlHelpers.js":
/*!*****************************!*\
  !*** ./utils/urlHelpers.js ***!
  \*****************************/
/*! exports provided: handleClientPath, handleServerPath, cmsPageUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleClientPath", function() { return handleClientPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleServerPath", function() { return handleServerPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cmsPageUrl", function() { return cmsPageUrl; });
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_0__);

const handleClientPath = ({
  pathname
}) => ({
  url: pathname || window.location.pathname
});
const handleServerPath = req => ({
  url: req && 'url' in req ? req.url : null
});
const cmsPageUrl = (slug, page = '/index', extraParams = null) => {
  let url = `${page}?slug=${slug}`;

  if (extraParams) {
    url += `&${query_string__WEBPACK_IMPORTED_MODULE_0___default.a.stringify(extraParams)}`;
  }

  return url;
};

/***/ }),

/***/ "./utils/validateAxiosResponse.js":
/*!****************************************!*\
  !*** ./utils/validateAxiosResponse.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "lodash/isEmpty");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);


const validateAxiosResponse = (res = null) => res && res.ok && 'data' in res && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(res.data);

/* harmony default export */ __webpack_exports__["default"] = (validateAxiosResponse);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "apisauce":
/*!***************************!*\
  !*** external "apisauce" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apisauce");

/***/ }),

/***/ "axios-retry":
/*!******************************!*\
  !*** external "axios-retry" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios-retry");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "lodash/find":
/*!******************************!*\
  !*** external "lodash/find" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/find");

/***/ }),

/***/ "lodash/isEmpty":
/*!*********************************!*\
  !*** external "lodash/isEmpty" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ "memoize-one":
/*!******************************!*\
  !*** external "memoize-one" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("memoize-one");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-dropdown":
/*!*********************************!*\
  !*** external "react-dropdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dropdown");

/***/ }),

/***/ "react-no-ssr":
/*!*******************************!*\
  !*** external "react-no-ssr" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-no-ssr");

/***/ }),

/***/ "react-select/lib/Async":
/*!*****************************************!*\
  !*** external "react-select/lib/Async" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select/lib/Async");

/***/ }),

/***/ "recompose":
/*!****************************!*\
  !*** external "recompose" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ "universal-cookie":
/*!***********************************!*\
  !*** external "universal-cookie" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map