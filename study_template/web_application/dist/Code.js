function key() {
}function settings() {
}
function SQ() {
}
function EsmRdb() {
}
function doGet() {
}
function sample() {
}/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 76);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var shared = __webpack_require__(47);
var has = __webpack_require__(5);
var uid = __webpack_require__(48);
var NATIVE_SYMBOL = __webpack_require__(57);
var USE_SYMBOL_AS_UID = __webpack_require__(84);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(40)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(43);
var anObject = __webpack_require__(3);
var toPrimitive = __webpack_require__(25);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var getOwnPropertyDescriptor = __webpack_require__(42).f;
var createNonEnumerableProperty = __webpack_require__(10);
var redefine = __webpack_require__(14);
var setGlobal = __webpack_require__(26);
var copyConstructorProperties = __webpack_require__(80);
var isForced = __webpack_require__(53);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(7);
var definePropertyModule = __webpack_require__(8);
var createPropertyDescriptor = __webpack_require__(16);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(18);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(24);
var requireObjectCoercible = __webpack_require__(13);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var createNonEnumerableProperty = __webpack_require__(10);
var has = __webpack_require__(5);
var setGlobal = __webpack_require__(26);
var inspectSource = __webpack_require__(45);
var InternalStateModule = __webpack_require__(27);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(82);
var global = __webpack_require__(2);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(7);
var fails = __webpack_require__(1);
var has = __webpack_require__(5);

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(34);
var stickyHelpers = __webpack_require__(58);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(13);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);
var wellKnownSymbol = __webpack_require__(0);
var V8_VERSION = __webpack_require__(69);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsmRdb; });
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Users_hyamakawa_VSCodeWork_Modern_T_Modern_T_study_template_web_application_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);








function EsmRdb() {
  return new RdbInstance(settings);
} // ScriptDbInstanceもどき

function RdbInstance(config) {
  var _this = this;

  this.ASCENDING = 0;
  this.DESCENDING = 1;
  SQ.registerValueHandler(Date, function (date) {
    //    return '"' + date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() + '"';
    return "'" + Utilities.formatDate(date, 'JST', 'yyyy-MM-dd HH:mm:ss') + "'";
  });
  this.address = config.dbAddress || '34.84.254.108';
  this.mysqlUser = config.user || 'user';
  this.mysqlPwd = config.pwd || 'hoge99';
  this.db = config.db || 'bpm';
  this.instanceUrl = 'jdbc:google:mysql://' + this.address;
  this.dbUrl = this.instanceUrl + '/' + this.db;
  this.autoCommit = typeof config.autoCommit === 'undefined' ? true : config.autoCommit;
  this.debugSheet = config.debugSheetId ? SpreadsheetApp.openById(config.debugSheetId).getSheetByName('debug') : null;
  this.nonExecute = config.nonExecute || false;
  this.debugUpdateOnly = config.debugUpdateOnly || false;
  this.conn = Jdbc.getCloudSqlConnection(this.dbUrl, this.mysqlUser, this.mysqlPwd);
  this.conn.setAutoCommit(this.autoCommit);

  this.debug = function (str) {
    if (this.debugSheet) {
      this.debugSheet.appendRow([str + ';']);
    } else {
      Logger.log(str);
    }
  }; // autoCommitの設定


  this.setAutoCommit = function (autoCommit) {
    _this.autoCommit = autoCommit;

    _this.conn.setAutoCommit(_this.autoCommit);
  };

  this.createTableBySheet = function (sheetId, sheetName, dropTable, copyData) {
    this.autoCommit = false;
    this.conn.setAutoCommit(this.autoCommit);
    var ss = SpreadsheetApp.openById(sheetId);
    var sheet = ss.getSheetByName(sheetName);
    var ddl = 'CREATE TABLE ' + sheetName + ' (';
    var range = sheet.getDataRange();
    var values = range.getValues();
    var headers = values[0]; // 先頭がカラム名が前提

    var colDefs = [];
    var keyCol = '';

    for (var i = 0; i < headers.length; i++) {
      var colName = headers[i];
      if (i == 0) keyCol = colName;
      var colType = sheet.getRange(1, i + 1).getNote();
      colDefs.push(colName + ' ' + colType);
    }

    ddl += colDefs.join(',');
    ddl += ',PRIMARY KEY(' + keyCol + ')';
    ddl += ');';
    this.debug(ddl);

    try {
      if (dropTable) {
        this.conn.createStatement().execute('drop table ' + sheetName);
      }
    } catch (e) {
      this.debug('drop table失敗（無視）');
    }

    this.conn.createStatement().execute(ddl);

    if (copyData) {
      for (var i = 1; i < values.length; i++) {
        var row = values[i];
        var item = {};
        item.type = sheetName;

        for (var j = 0; j < row.length; j++) {
          item[headers[j]] = row[j];
        }

        this.debug(item);
        this.insert(item, {
          autoId: false
        });
      }
    }

    this.close();
  };

  var AnyOf = function AnyOf(values) {
    this.values = values;

    this.buildWhere = function (sql, propName, propValue) {
      sql.where(propName + ' in ?', this.values);
      return sql;
    };
  };

  this.anyOf = function (values) {
    return new AnyOf(values);
  };

  var Not = function Not(value) {
    this.value = value;

    this.buildWhere = function (sql, propName, propValue) {
      var type = Object(_Users_hyamakawa_VSCodeWork_Modern_T_Modern_T_study_template_web_application_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(this.value);

      if (type == 'string') {
        sql.where(propName + " != '" + this.value + "'");
      } else if (type == 'number') {
        sql.where(propName + ' != ' + this.value + '');
      } else if (type == 'boolean') {
        var bool = this.value == true ? 1 : 0;
        sql.where(propName + " != '" + bool + "'");
      }

      return sql;
    };
  };

  this.not = function (value) {
    return new Not(value);
  };

  var GreaterThanOrEqualTo = function GreaterThanOrEqualTo(value) {
    this.value = value;

    this.buildWhere = function (sql, propName, propValue) {
      sql.where(propName + ' >= ?', this.value);
      return sql;
    };
  };

  this.greaterThanOrEqualTo = function (value) {
    return new GreaterThanOrEqualTo(value);
  };

  var LessThanOrEqualTo = function LessThanOrEqualTo(value) {
    this.value = value;

    this.buildWhere = function (sql, propName, propValue) {
      sql.where(propName + ' <= ?', this.value);
      return sql;
    };
  };

  this.lessThanOrEqualTo = function (value) {
    return new LessThanOrEqualTo(value);
  };

  var GreaterThan = function GreaterThan(value) {
    this.value = value;

    this.buildWhere = function (sql, propName, propValue) {
      sql.where(propName + ' > ?', this.value);
      return sql;
    };
  };

  this.greaterThan = function (value) {
    return new GreaterThan(value);
  };

  var LessThan = function LessThan(value) {
    this.value = value;

    this.buildWhere = function (sql, propName, propValue) {
      sql.where(propName + ' < ?', this.value);
      return sql;
    };
  };

  this.lessThan = function (value) {
    return new LessThan(value);
  };

  var Between = function Between(value1, value2) {
    this.value1 = value1;
    this.value2 = value2;

    this.buildWhere = function (sql, propName, propValue) {
      sql.where(propName + ' between ? and ?', this.value1, this.value2);
      return sql;
    };
  };

  this.between = function (value1, value2) {
    return new Between(value1, value2);
  };

  var Contains = function Contains(value) {
    this.value = value;

    this.hasValue = function () {
      return this.value != '';
    };

    this.buildWhere = function (sql, propName, propValue) {
      sql.where(propName + " like '%" + this.value + "%'");
      return sql;
    };
  };

  this.contains = function (value) {
    return new Contains(value);
  };

  var IsNull = function IsNull(value) {
    this.value = value;

    this.buildWhere = function (sql, propName, propValue) {
      sql.where(propName + ' is NULL');
      return sql;
    };
  };

  this.isNull = function (value) {
    return new IsNull(value);
  }; // insertメソッド。


  this.insert = function (item, option) {
    checkNoTypeError(item.type);
    var idColumn = option.idColumn || '_id_';
    var autoId = typeof option.autoId === 'undefined' ? true : option.autoId;

    if (autoId) {
      // insert auto key
      item[idColumn] = genUUID();
    }

    var sql = this.buildInsert(item);
    this.execUpdate(sql);
    return item;
  }; // updateメソッド。


  this.update = function (item, option) {
    checkNoTypeError(item.type);
    var idColumn = '_id_';

    if (option) {
      idColumn = option.idColumn;
    }

    var sql = this.buildUpdate(item, idColumn);
    this.execUpdate(sql);
    return item;
  }; // あればupdate、なければinsert


  this.updateOrInsert = function (item, option) {
    checkNoTypeError(item.type);
    var idColumn = '_id_';

    if (option) {
      idColumn = option.idColumn;
    }

    var countSql = 'select count(*) as count from ' + item.type + ' where ' + idColumn + " = '" + item[idColumn] + "'";
    var results = this.execQuery_(countSql);
    if (results.length === 0) throw new Error('レコードが存在しません。:' + item);
    var count = results[0].count;

    if (count == 0) {
      // insert
      return this.insert(item, option);
    } else {
      // update
      return this.update(item, option);
    }
  }; // save互換メソッド。
  // 互換性のため、_id_カラムがプライマリーキーとして存在することを前提とする。


  this.save = function (item) {
    checkNoTypeError(item.type);
    var colName = null;
    var colValue = null;

    for (var propName in item) {
      if (propName == '_id_') {
        colName = propName;
        colValue = item[propName];
      }
    }

    if (!colName) {
      // insertモード
      colName = '_id_';
    }

    var sql;
    var uuid = genUUID();

    if (!colValue) {
      // insert auto key
      item[colName] = uuid;
      sql = this.buildInsert(item);
    } else {
      sql = this.buildUpdate(item, '_id_');
    }

    this.execUpdate(sql);
    return item;
  }; // remove互換メソッド。


  this.remove = function (item) {
    checkNoTypeError(item.type);
    var sql = this.buildDelete(item);
    return this.execUpdate(sql);
  }; // query互換メソッド。


  this.query = function (query, fields) {
    checkNoTypeError(query.type);
    var sql = this.buildSelect(query, fields);
    var results = this.execQuery(sql);
    return new RDbResult(results);
  };

  this.buildSelect = function (query, fields) {
    var sql = SQ.select();

    if (fields) {
      for (var i = 0; i < fields.length; i++) {
        sql.field(fields[i]);
      }
    }

    var tableName;

    for (var propName in query) {
      var propValue = query[propName];

      if (propName == 'type') {
        sql.from(propValue);
      } else {
        if (typeof propValue.buildWhere === 'function') {
          sql = propValue.buildWhere(sql, propName, propValue);
        } else {
          sql = this.buildWhere_(sql, propName, propValue);
        }
      }
    }

    return sql.toString();
  };

  this.buildDelete = function (query) {
    var sql = SQ.remove();
    var tableName;

    for (var propName in query) {
      var propValue = query[propName];

      if (propName == 'type') {
        sql.from(propValue);
      } else {
        sql = this.buildWhere_(sql, propName, propValue);
      }
    }

    return sql.toString();
  };

  this.buildUpdate = function (query, idColumn) {
    var sql = SQ.update();
    var tableName;

    for (var propName in query) {
      var propValue = query[propName];

      if (propName == 'type') {
        sql.table(propValue);
      } else if (propName == idColumn) {
        var colName = propName;
        var colValue = query[colName];
        sql = this.buildWhere_(sql, colName, colValue);
      } else {
        sql = this.buildSet_(sql, propName, propValue);
      }
    }

    return sql.toString();
  };

  this.buildInsert = function (query) {
    var sql = SQ.insert();
    var tableName;

    for (var propName in query) {
      var propValue = query[propName];

      if (propName == 'type') {
        sql.into(propValue);
      } else if (propName.indexOf('_ts_') != -1) {} else {
        sql = this.buildSet_(sql, propName, propValue);
      }
    }

    return sql.toString();
  };

  this.buildWhere_ = function (sql, propName, propValue) {
    var type = Object(_Users_hyamakawa_VSCodeWork_Modern_T_Modern_T_study_template_web_application_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(propValue);

    if (type == 'string') {
      sql.where(propName + " = '" + propValue.replace(/'/g, "''") + "'");
    } else if (type == 'number') {
      sql.where(propName + ' = ' + propValue + '');
    } else if (type == 'boolean') {
      var bool = propValue == true ? 1 : 0;
      sql.where(propName + " = '" + bool + "'");
    }

    return sql;
  };

  this.buildSet_ = function (sql, propName, propValue) {
    var type = Object(_Users_hyamakawa_VSCodeWork_Modern_T_Modern_T_study_template_web_application_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(propValue);

    if (propValue === '') propValue = null;
    var setValue;

    if (type == 'string' && propValue) {
      setValue = propValue.replace(/'/g, "''");
    } else {
      setValue = propValue;
    }

    if (type != 'undefined') sql.set(propName, setValue);
    return sql;
  };

  this.close = function () {
    if (this.conn) {
      if (!this.autoCommit) {
        this.conn.commit();
      }

      this.conn.close();
      this.conn = null;
    }
  };

  this.rollback = function () {
    if (this.conn) {
      if (!this.autoCommit) {
        this.conn.rollback();
      }

      this.conn.close();
      this.conn = null;
    }
  };

  this.getMetaData = function (sql) {
    var stmt_total = this.conn.createStatement();

    try {
      var result = stmt_total.executeQuery(sql);
      var meta = result.getMetaData();
      var metadata = [];

      for (var i = 1; i <= meta.getColumnCount(); i++) {
        metadata.push({
          columnName: meta.getColumnLabel(i),
          columnType: meta.getColumnType(i),
          columnTypeName: meta.getColumnTypeName(i),
          nullable: meta.isNullable(i),
          precision: meta.getPrecision(i),
          scale: meta.getScale(i)
        });
      }

      stmt_total.close();
      return metadata;
    } catch (error) {
      stmt_total.close();
      this.conn.close();
      this.debug(error.message);
      throw error;
    }
  };

  this.execQuery = function (sql) {
    if (!this.debugUpdateOnly) this.debug(sql);
    var results = this.execQuery_(sql);

    if (this.autoCommit) {
      this.conn.close();
      this.conn = null;
    }

    return results;
  };

  this.execQuery_ = function (sql) {
    var stmt_total = this.conn.createStatement();

    try {
      var result = stmt_total.executeQuery(sql);
      var meta = result.getMetaData();
      var headers = [];

      for (var i = 1; i <= meta.getColumnCount(); i++) {
        headers.push(meta.getColumnLabel(i));
      }

      var results = [];

      while (result.next()) {
        var obj = {};

        for (var i = 0; i < headers.length; i++) {
          var columnType = meta.getColumnType(i + 1);

          if (columnType == -6) {
            obj[headers[i]] = result.getBoolean(i + 1) || false;
          } else if (columnType <= 5 && columnType >= 4) {
            var val = result.getObject(i + 1);
            obj[headers[i]] = val === null ? '' : val;
          } else if (columnType <= 8 && columnType >= 6) {
            var val = result.getObject(i + 1);
            obj[headers[i]] = val === null ? '' : val;
          } else {
            obj[headers[i]] = result.getString(i + 1) == null ? '' : result.getString(i + 1);
          }
        }

        results.push(obj);
      }

      stmt_total.close();
      return results;
    } catch (error) {
      stmt_total.close();
      this.conn.close();
      this.debug(error.message);
      throw error;
    }
  };

  this.execUpdate = function (sql) {
    this.debug(sql);

    if (this.nonExecute) {
      return;
    }

    try {
      var stmt = this.conn.prepareStatement(sql);
      stmt.addBatch();
      var res = stmt.executeBatch();
      stmt.close();

      if (this.autoCommit) {
        this.close();
      }

      return res[0];
    } catch (error) {
      this.debug(error.message);
      this.conn.close();
      throw error;
    }
  };

  function checkNoTypeError(type) {
    if (typeof type === 'undefined') {
      throw new Error('テーブル名をtypeプロパティで指定してください：type');
    }
  }

  function genUUID() {
    return function () {
      var S4 = function S4() {
        return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
      };

      return S4() + S4() + '_' + S4() + '_' + S4() + '_' + S4() + '_' + S4() + S4() + S4();
    }();
  }
}

function RDbResult(items) {
  this.dbResult = items;
  this.resultLength = items.length;
  this.currentIndex = 0;
  this.startAtIndex = 0; // hasNext互換メソッド。

  this.hasNext = function () {
    return this.dbResult.length > 0 && this.currentIndex < this.resultLength;
  }; // next互換メソッド。


  this.next = function () {
    return this.dbResult[this.currentIndex++];
  }; // sortBy互換メソッド。


  this.sortBy = function (fieldPath, direction) {
    var obj = this.dbResult[this.currentIndex];
    if (typeof obj === 'undefined') return this;
    if (typeof obj[fieldPath] === 'undefined') return this;

    var ascending = function ascending(a, b) {
      var aS = a[fieldPath];
      var bS = b[fieldPath];
      if (aS < bS) return -1;
      if (aS > bS) return 1;
      return 0;
    };

    var descending = function descending(a, b) {
      var aS = a[fieldPath];
      var bS = b[fieldPath];
      if (aS < bS) return 1;
      if (aS > bS) return -1;
      return 0;
    };

    var sorter = ascending;
    if (arguments.length == 2 && direction == 1) sorter = descending;
    this.dbResult.sort(sorter);
    return this;
  };

  this.limit = function (number) {
    if (number + this.startAtIndex <= this.resultLength) {
      this.resultLength = number + this.startAtIndex;
    }

    return this;
  };

  this.startAt = function (number) {
    this.startAtIndex = number;
    this.currentIndex = number;
    return this;
  };

  return this;
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);
var classof = __webpack_require__(15);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var createNonEnumerableProperty = __webpack_require__(10);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(79);
var global = __webpack_require__(2);
var isObject = __webpack_require__(4);
var createNonEnumerableProperty = __webpack_require__(10);
var objectHas = __webpack_require__(5);
var sharedKey = __webpack_require__(28);
var hiddenKeys = __webpack_require__(30);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(47);
var uid = __webpack_require__(48);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(0);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9);
var exec = __webpack_require__(20);

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(3);

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(33);
var redefine = __webpack_require__(14);
var fails = __webpack_require__(1);
var wellKnownSymbol = __webpack_require__(0);
var regexpExec = __webpack_require__(20);
var createNonEnumerableProperty = __webpack_require__(10);

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(87).charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(15);
var regexpExec = __webpack_require__(20);

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(15);

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9);
var $indexOf = __webpack_require__(51).indexOf;
var arrayMethodIsStrict = __webpack_require__(54);
var arrayMethodUsesToLength = __webpack_require__(19);

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(7);
var propertyIsEnumerableModule = __webpack_require__(78);
var createPropertyDescriptor = __webpack_require__(16);
var toIndexedObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(25);
var has = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(43);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(7);
var fails = __webpack_require__(1);
var createElement = __webpack_require__(44);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var isObject = __webpack_require__(4);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(46);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var setGlobal = __webpack_require__(26);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(29);
var store = __webpack_require__(46);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 48 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(50);
var enumBugKeys = __webpack_require__(31);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(5);
var toIndexedObject = __webpack_require__(12);
var indexOf = __webpack_require__(51).indexOf;
var hiddenKeys = __webpack_require__(30);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(12);
var toLength = __webpack_require__(11);
var toAbsoluteIndex = __webpack_require__(52);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(18);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(1);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9);
var IndexedObject = __webpack_require__(24);
var toIndexedObject = __webpack_require__(12);
var arrayMethodIsStrict = __webpack_require__(54);

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(32);
var redefine = __webpack_require__(14);
var toString = __webpack_require__(85);

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(1);

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(14);
var anObject = __webpack_require__(3);
var fails = __webpack_require__(1);
var flags = __webpack_require__(34);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(35);
var anObject = __webpack_require__(3);
var toObject = __webpack_require__(21);
var toLength = __webpack_require__(11);
var toInteger = __webpack_require__(18);
var requireObjectCoercible = __webpack_require__(13);
var advanceStringIndex = __webpack_require__(36);
var regExpExec = __webpack_require__(37);

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var DOMIterables = __webpack_require__(88);
var ArrayIteratorMethods = __webpack_require__(89);
var createNonEnumerableProperty = __webpack_require__(10);
var wellKnownSymbol = __webpack_require__(0);

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(3);
var defineProperties = __webpack_require__(91);
var enumBugKeys = __webpack_require__(31);
var hiddenKeys = __webpack_require__(30);
var html = __webpack_require__(93);
var documentCreateElement = __webpack_require__(44);
var sharedKey = __webpack_require__(28);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(64);
var createNonEnumerableProperty = __webpack_require__(10);
var has = __webpack_require__(5);
var wellKnownSymbol = __webpack_require__(0);
var IS_PURE = __webpack_require__(29);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(5);
var toObject = __webpack_require__(21);
var sharedKey = __webpack_require__(28);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(96);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(8).f;
var has = __webpack_require__(5);
var wellKnownSymbol = __webpack_require__(0);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(3);
var aPossiblePrototype = __webpack_require__(97);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(25);
var definePropertyModule = __webpack_require__(8);
var createPropertyDescriptor = __webpack_require__(16);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var isArray = __webpack_require__(39);
var wellKnownSymbol = __webpack_require__(0);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var userAgent = __webpack_require__(100);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(102);
var IndexedObject = __webpack_require__(24);
var toObject = __webpack_require__(21);
var toLength = __webpack_require__(11);
var arraySpeciesCreate = __webpack_require__(68);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var classof = __webpack_require__(15);
var wellKnownSymbol = __webpack_require__(0);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setSQ; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(101);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(103);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(104);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(105);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(106);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(109);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(60);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(110);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Users_hyamakawa_VSCodeWork_Modern_T_Modern_T_study_template_web_application_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6);

















/*
Copyright (c) 2014 Ramesh Nair (hiddentao.com)

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/
var SQ;
function setSQ() {
  var getValueHandler,
      registerValueHandler,
      squel,
      _buildSquel,
      _clone2,
      _extend,
      _isArray,
      _isPlainObject,
      __slice = [].slice,
      __hasProp = {}.hasOwnProperty,
      __bind = function __bind(fn, me) {
    return function () {
      return fn.apply(me, arguments);
    };
  },
      __extends = function __extends(child, parent) {
    for (var key in parent) {
      if (__hasProp.call(parent, key)) child[key] = parent[key];
    }

    function ctor() {
      this.constructor = child;
    }

    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
  };

  _extend = function _extend() {
    var dst, k, sources, src, v, _i, _len;

    dst = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];

    if (sources) {
      for (_i = 0, _len = sources.length; _i < _len; _i++) {
        src = sources[_i];

        if (src) {
          for (k in src) {
            if (!__hasProp.call(src, k)) continue;
            v = src[k];
            dst[k] = v;
          }
        }
      }
    }

    return dst;
  };

  _isPlainObject = function _isPlainObject(obj) {
    return obj.constructor.prototype === Object.prototype;
  };

  _isArray = function _isArray(obj) {
    return obj.constructor.prototype === Array.prototype;
  };

  _clone2 = function _clone(src) {
    var k, ret, v;

    if (!src) {
      return src;
    }

    if ('function' === typeof src.clone) {
      return src.clone();
    } else if (_isPlainObject(src) || _isArray(src)) {
      ret = new src.constructor();

      for (k in src) {
        if (!__hasProp.call(src, k)) continue;
        v = src[k];

        if ('function' !== typeof v) {
          ret[k] = _clone2(v);
        }
      }

      return ret;
    } else {
      return JSON.parse(JSON.stringify(src));
    }
  };

  registerValueHandler = function registerValueHandler(handlers, type, handler) {
    var typeHandler, _i, _len;

    if ('function' !== typeof type && 'string' !== typeof type) {
      throw new Error("type must be a class constructor or string denoting 'typeof' result");
    }

    if ('function' !== typeof handler) {
      throw new Error("handler must be a function");
    }

    for (_i = 0, _len = handlers.length; _i < _len; _i++) {
      typeHandler = handlers[_i];

      if (typeHandler.type === type) {
        typeHandler.handler = handler;
        return;
      }
    }

    return handlers.push({
      type: type,
      handler: handler
    });
  };

  getValueHandler = function getValueHandler() {
    var handlerLists, handlers, typeHandler, value, _i, _j, _len, _len1;

    value = arguments[0], handlerLists = 2 <= arguments.length ? __slice.call(arguments, 1) : [];

    for (_i = 0, _len = handlerLists.length; _i < _len; _i++) {
      handlers = handlerLists[_i];

      for (_j = 0, _len1 = handlers.length; _j < _len1; _j++) {
        typeHandler = handlers[_j];

        if (typeHandler.type === Object(_Users_hyamakawa_VSCodeWork_Modern_T_Modern_T_study_template_web_application_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(value) || typeof typeHandler.type !== 'string' && value instanceof typeHandler.type) {
          return typeHandler.handler;
        }
      }
    }

    return void 0;
  };

  _buildSquel = function _buildSquel(flavour) {
    var cls, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _squel;

    if (flavour == null) {
      flavour = null;
    }

    cls = {};
    cls.DefaultQueryBuilderOptions = {
      autoQuoteTableNames: false,
      autoQuoteFieldNames: false,
      autoQuoteAliasNames: true,
      nameQuoteCharacter: '`',
      tableAliasQuoteCharacter: '`',
      fieldAliasQuoteCharacter: '"',
      valueHandlers: [],
      parameterCharacter: '?',
      numberedParameters: false,
      numberedParametersPrefix: '$',
      numberedParametersStartAt: 1,
      replaceSingleQuotes: false,
      singleQuoteReplacement: '\'\'',
      separator: ' '
    };
    cls.globalValueHandlers = [];

    cls.registerValueHandler = function (type, handler) {
      return registerValueHandler(cls.globalValueHandlers, type, handler);
    };

    cls.Cloneable = function () {
      function Cloneable() {}

      Cloneable.prototype.clone = function () {
        var newInstance;
        newInstance = new this.constructor();
        return _extend(newInstance, _clone2(_extend({}, this)));
      };

      return Cloneable;
    }();

    cls.BaseBuilder = function (_super) {
      __extends(BaseBuilder, _super);

      function BaseBuilder(options) {
        this._sanitizeNestableQuery = __bind(this._sanitizeNestableQuery, this);
        var defaults;
        defaults = JSON.parse(JSON.stringify(cls.DefaultQueryBuilderOptions));
        this.options = _extend({}, defaults, options);
      }

      BaseBuilder.prototype.registerValueHandler = function (type, handler) {
        registerValueHandler(this.options.valueHandlers, type, handler);
        return this;
      };

      BaseBuilder.prototype._getObjectClassName = function (obj) {
        var arr;

        if (obj && obj.constructor && obj.constructor.toString) {
          arr = obj.constructor.toString().match(/function\s*(\w+)/);

          if (arr && arr.length === 2) {
            return arr[1];
          }
        }

        return void 0;
      };

      BaseBuilder.prototype._sanitizeCondition = function (condition) {
        if (!(condition instanceof cls.Expression)) {
          if ("string" !== typeof condition) {
            throw new Error("condition must be a string or Expression instance");
          }
        }

        return condition;
      };

      BaseBuilder.prototype._sanitizeName = function (value, type) {
        if ("string" !== typeof value) {
          throw new Error("" + type + " must be a string");
        }

        return value;
      };

      BaseBuilder.prototype._sanitizeField = function (item, formattingOptions) {
        var quoteChar;

        if (formattingOptions == null) {
          formattingOptions = {};
        }

        if (item instanceof cls.QueryBuilder) {
          item = "(" + item + ")";
        } else {
          item = this._sanitizeName(item, "field name");

          if (this.options.autoQuoteFieldNames) {
            quoteChar = this.options.nameQuoteCharacter;

            if (formattingOptions.ignorePeriodsForFieldNameQuotes) {
              item = "" + quoteChar + item + quoteChar;
            } else {
              item = item.split('.').map(function (v) {
                if ('*' === v) {
                  return v;
                } else {
                  return "" + quoteChar + v + quoteChar;
                }
              }).join('.');
            }
          }
        }

        return item;
      };

      BaseBuilder.prototype._sanitizeNestableQuery = function (item) {
        if (item instanceof cls.QueryBuilder && item.isNestable()) {
          return item;
        }

        throw new Error("must be a nestable query, e.g. SELECT");
      };

      BaseBuilder.prototype._sanitizeTable = function (item, allowNested) {
        var e, sanitized;

        if (allowNested == null) {
          allowNested = false;
        }

        if (allowNested) {
          if ("string" === typeof item) {
            sanitized = item;
          } else {
            try {
              sanitized = this._sanitizeNestableQuery(item);
            } catch (_error) {
              e = _error;
              throw new Error("table name must be a string or a nestable query instance");
            }
          }
        } else {
          sanitized = this._sanitizeName(item, 'table name');
        }

        if (this.options.autoQuoteTableNames) {
          return "" + this.options.nameQuoteCharacter + sanitized + this.options.nameQuoteCharacter;
        } else {
          return sanitized;
        }
      };

      BaseBuilder.prototype._sanitizeTableAlias = function (item) {
        var sanitized;
        sanitized = this._sanitizeName(item, "table alias");

        if (this.options.autoQuoteAliasNames) {
          return "" + this.options.tableAliasQuoteCharacter + sanitized + this.options.tableAliasQuoteCharacter;
        } else {
          return sanitized;
        }
      };

      BaseBuilder.prototype._sanitizeFieldAlias = function (item) {
        var sanitized;
        sanitized = this._sanitizeName(item, "field alias");

        if (this.options.autoQuoteAliasNames) {
          return "" + this.options.fieldAliasQuoteCharacter + sanitized + this.options.fieldAliasQuoteCharacter;
        } else {
          return sanitized;
        }
      };

      BaseBuilder.prototype._sanitizeLimitOffset = function (value) {
        value = parseInt(value);

        if (0 > value || isNaN(value)) {
          throw new Error("limit/offset must be >= 0");
        }

        return value;
      };

      BaseBuilder.prototype._sanitizeValue = function (item) {
        var itemType, typeIsValid;
        itemType = Object(_Users_hyamakawa_VSCodeWork_Modern_T_Modern_T_study_template_web_application_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(item);

        if (null === item) {} else if ("string" === itemType || "number" === itemType || "boolean" === itemType) {} else if (item instanceof cls.QueryBuilder && item.isNestable()) {} else if (item instanceof cls.FunctionBlock) {} else {
          typeIsValid = void 0 !== getValueHandler(item, this.options.valueHandlers, cls.globalValueHandlers);

          if (!typeIsValid) {
            throw new Error("field value must be a string, number, boolean, null or one of the registered custom value types");
          }
        }

        return item;
      };

      BaseBuilder.prototype._escapeValue = function (value) {
        if (true !== this.options.replaceSingleQuotes) {
          return value;
        }

        return value.replace(/\'/g, this.options.singleQuoteReplacement);
      };

      BaseBuilder.prototype._formatCustomValue = function (value, asParam) {
        var customHandler;

        if (asParam == null) {
          asParam = false;
        }

        customHandler = getValueHandler(value, this.options.valueHandlers, cls.globalValueHandlers);

        if (customHandler) {
          value = customHandler(value, asParam);
        }

        return value;
      };

      BaseBuilder.prototype._formatValueAsParam = function (value) {
        var p,
            _this = this;

        if (Array.isArray(value)) {
          return value.map(function (v) {
            return _this._formatValueAsParam(v);
          });
        } else {
          if (value instanceof cls.QueryBuilder && value.isNestable()) {
            value.updateOptions({
              "nestedBuilder": true
            });
            return p = value.toParam();
          } else if (value instanceof cls.Expression) {
            return p = value.toParam();
          } else {
            return this._formatCustomValue(value, true);
          }
        }
      };

      BaseBuilder.prototype._formatValue = function (value, formattingOptions) {
        var customFormattedValue,
            escapedValue,
            _this = this;

        if (formattingOptions == null) {
          formattingOptions = {};
        }

        customFormattedValue = this._formatCustomValue(value);

        if (customFormattedValue !== value) {
          return "(" + customFormattedValue + ")";
        }

        if (Array.isArray(value)) {
          value = value.map(function (v) {
            return _this._formatValue(v);
          });
          value = "(" + value.join(', ') + ")";
        } else {
          if (null === value) {
            value = "NULL";
          } else if ("boolean" === typeof value) {
            value = value ? "TRUE" : "FALSE";
          } else if (value instanceof cls.QueryBuilder) {
            value = "(" + value + ")";
          } else if (value instanceof cls.Expression) {
            value = "(" + value + ")";
          } else if ("number" !== typeof value) {
            if (formattingOptions.dontQuote) {
              value = "" + value;
            } else {
              escapedValue = this._escapeValue(value);
              value = "'" + escapedValue + "'";
            }
          }
        }

        return value;
      };

      return BaseBuilder;
    }(cls.Cloneable);

    cls.Expression = function (_super) {
      __extends(Expression, _super);

      Expression.prototype.tree = null;
      Expression.prototype.current = null;

      function Expression(options) {
        var defaults,
            _this = this;

        Expression.__super__.constructor.call(this);

        defaults = JSON.parse(JSON.stringify(cls.DefaultQueryBuilderOptions));
        this.options = _extend({}, defaults, options);
        this.tree = {
          parent: null,
          nodes: []
        };
        this.current = this.tree;

        this._begin = function (op) {
          var new_tree;
          new_tree = {
            type: op,
            parent: _this.current,
            nodes: []
          };

          _this.current.nodes.push(new_tree);

          _this.current = _this.current.nodes[_this.current.nodes.length - 1];
          return _this;
        };
      }

      Expression.prototype.and_begin = function () {
        return this._begin('AND');
      };

      Expression.prototype.or_begin = function () {
        return this._begin('OR');
      };

      Expression.prototype.end = function () {
        if (!this.current.parent) {
          throw new Error("begin() needs to be called");
        }

        this.current = this.current.parent;
        return this;
      };

      Expression.prototype.and = function (expr, param) {
        if (!expr || "string" !== typeof expr) {
          throw new Error("expr must be a string");
        }

        this.current.nodes.push({
          type: 'AND',
          expr: expr,
          para: param
        });
        return this;
      };

      Expression.prototype.or = function (expr, param) {
        if (!expr || "string" !== typeof expr) {
          throw new Error("expr must be a string");
        }

        this.current.nodes.push({
          type: 'OR',
          expr: expr,
          para: param
        });
        return this;
      };

      Expression.prototype.toString = function () {
        if (null !== this.current.parent) {
          throw new Error("end() needs to be called");
        }

        return this._toString(this.tree);
      };

      Expression.prototype.toParam = function () {
        if (null !== this.current.parent) {
          throw new Error("end() needs to be called");
        }

        return this._toString(this.tree, true);
      };

      Expression.prototype._toString = function (node, paramMode) {
        var child,
            cv,
            inStr,
            nodeStr,
            params,
            str,
            _i,
            _len,
            _ref,
            _this = this;

        if (paramMode == null) {
          paramMode = false;
        }

        str = "";
        params = [];
        _ref = node.nodes;

        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          child = _ref[_i];

          if (child.expr != null) {
            nodeStr = child.expr;

            if (void 0 !== child.para) {
              if (!paramMode) {
                nodeStr = nodeStr.replace(this.options.parameterCharacter, this._formatValue(child.para));
              } else {
                cv = this._formatValueAsParam(child.para);

                if ((cv != null ? cv.text : void 0) != null) {
                  params = params.concat(cv.values);
                  nodeStr = nodeStr.replace(this.options.parameterCharacter, "(" + cv.text + ")");
                } else {
                  params = params.concat(cv);
                }

                if (Array.isArray(child.para)) {
                  inStr = Array.apply(null, new Array(child.para.length)).map(function () {
                    return _this.options.parameterCharacter;
                  });
                  nodeStr = nodeStr.replace(this.options.parameterCharacter, "(" + inStr.join(', ') + ")");
                }
              }
            }
          } else {
            nodeStr = this._toString(child, paramMode);

            if (paramMode) {
              params = params.concat(nodeStr.values);
              nodeStr = nodeStr.text;
            }

            if ("" !== nodeStr) {
              nodeStr = "(" + nodeStr + ")";
            }
          }

          if ("" !== nodeStr) {
            if ("" !== str) {
              str += " " + child.type + " ";
            }

            str += nodeStr;
          }
        }

        if (paramMode) {
          return {
            text: str,
            values: params
          };
        } else {
          return str;
        }
      };
      /*
      Clone this expression.
      
      Note that the algorithm contained within this method is probably non-optimal, so please avoid cloning large
      expression trees.
      */


      Expression.prototype.clone = function () {
        var newInstance, _cloneTree2;

        newInstance = new this.constructor();

        (_cloneTree2 = function _cloneTree(node) {
          var child, _i, _len, _ref, _results;

          _ref = node.nodes;
          _results = [];

          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            child = _ref[_i];

            if (child.expr != null) {
              _results.push(newInstance.current.nodes.push(_clone2(child)));
            } else {
              newInstance._begin(child.type);

              _cloneTree2(child);

              if (!this.current === child) {
                _results.push(newInstance.end());
              } else {
                _results.push(void 0);
              }
            }
          }

          return _results;
        })(this.tree);

        return newInstance;
      };

      return Expression;
    }(cls.BaseBuilder);

    cls.Block = function (_super) {
      __extends(Block, _super);

      function Block() {
        _ref = Block.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Block.prototype.exposedMethods = function () {
        var attr, ret, value;
        ret = {};

        for (attr in this) {
          value = this[attr];

          if (typeof value === "function" && attr.charAt(0) !== '_' && !cls.Block.prototype[attr]) {
            ret[attr] = value;
          }
        }

        return ret;
      };

      Block.prototype.buildStr = function (queryBuilder) {
        return '';
      };

      Block.prototype.buildParam = function (queryBuilder) {
        return {
          text: this.buildStr(queryBuilder),
          values: []
        };
      };

      return Block;
    }(cls.BaseBuilder);

    cls.StringBlock = function (_super) {
      __extends(StringBlock, _super);

      function StringBlock(options, str) {
        StringBlock.__super__.constructor.call(this, options);

        this.str = str;
      }

      StringBlock.prototype.buildStr = function (queryBuilder) {
        return this.str;
      };

      return StringBlock;
    }(cls.Block);

    cls.AbstractValueBlock = function (_super) {
      __extends(AbstractValueBlock, _super);

      function AbstractValueBlock(options) {
        AbstractValueBlock.__super__.constructor.call(this, options);

        this._str = '';
        this._values = [];
      }

      AbstractValueBlock.prototype._setValue = function () {
        var str, values;
        str = arguments[0], values = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        this._str = str;
        this._values = values;
        return this;
      };

      AbstractValueBlock.prototype.buildStr = function (queryBuilder) {
        var c, finalStr, idx, str, values, _i, _ref1;

        str = this._str;
        finalStr = '';
        values = [].concat(this._values);

        for (idx = _i = 0, _ref1 = str.length; 0 <= _ref1 ? _i < _ref1 : _i > _ref1; idx = 0 <= _ref1 ? ++_i : --_i) {
          c = str.charAt(idx);

          if (this.options.parameterCharacter === c && 0 < values.length) {
            c = values.shift();
          }

          finalStr += c;
        }

        return finalStr;
      };

      AbstractValueBlock.prototype.buildParam = function (queryBuilder) {
        return {
          text: this._str,
          values: this._values
        };
      };

      return AbstractValueBlock;
    }(cls.Block);

    cls.FunctionBlock = function (_super) {
      __extends(FunctionBlock, _super);

      function FunctionBlock() {
        _ref1 = FunctionBlock.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      FunctionBlock.prototype["function"] = function () {
        var str, values;
        str = arguments[0], values = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        return this._setValue.apply(this, [str].concat(values));
      };

      return FunctionBlock;
    }(cls.AbstractValueBlock);

    cls.fval = function () {
      var inst, str, values;
      str = arguments[0], values = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      inst = new cls.FunctionBlock();
      return inst["function"].apply(inst, [str].concat(values));
    };

    cls.registerValueHandler(cls.FunctionBlock, function (value, asParam) {
      if (asParam == null) {
        asParam = false;
      }

      if (asParam) {
        return value.buildParam();
      } else {
        return value.buildStr();
      }
    });

    cls.AbstractTableBlock = function (_super) {
      __extends(AbstractTableBlock, _super);

      function AbstractTableBlock(options) {
        AbstractTableBlock.__super__.constructor.call(this, options);

        this.tables = [];
      }

      AbstractTableBlock.prototype._table = function (table, alias) {
        if (alias == null) {
          alias = null;
        }

        if (alias) {
          alias = this._sanitizeTableAlias(alias);
        }

        table = this._sanitizeTable(table, this.options.allowNested || false);

        if (this.options.singleTable) {
          this.tables = [];
        }

        return this.tables.push({
          table: table,
          alias: alias
        });
      };

      AbstractTableBlock.prototype._hasTable = function () {
        return 0 < this.tables.length;
      };

      AbstractTableBlock.prototype.buildStr = function (queryBuilder) {
        var table, tables, _i, _len, _ref2;

        if (!this._hasTable()) {
          return "";
        }

        tables = "";
        _ref2 = this.tables;

        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
          table = _ref2[_i];

          if ("" !== tables) {
            tables += ", ";
          }

          if ("string" === typeof table.table) {
            tables += table.table;
          } else {
            tables += "(" + table.table + ")";
          }

          if (table.alias) {
            tables += " " + table.alias;
          }
        }

        return tables;
      };

      AbstractTableBlock.prototype._buildParam = function (queryBuilder, prefix) {
        var blk, p, paramStr, params, ret, v, _i, _j, _k, _len, _len1, _len2, _ref2, _ref3;

        if (prefix == null) {
          prefix = null;
        }

        ret = {
          text: "",
          values: []
        };
        params = [];
        paramStr = "";

        if (!this._hasTable()) {
          return ret;
        }

        _ref2 = this.tables;

        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
          blk = _ref2[_i];

          if ("string" === typeof blk.table) {
            p = {
              "text": "" + blk.table,
              "values": []
            };
          } else if (blk.table instanceof cls.QueryBuilder) {
            blk.table.updateOptions({
              "nestedBuilder": true
            });
            p = blk.table.toParam();
          } else {
            blk.updateOptions({
              "nestedBuilder": true
            });
            p = blk.buildParam(queryBuilder);
          }

          p.table = blk;
          params.push(p);
        }

        for (_j = 0, _len1 = params.length; _j < _len1; _j++) {
          p = params[_j];

          if (paramStr !== "") {
            paramStr += ", ";
          } else {
            if (prefix != null && prefix !== "") {
              paramStr += "" + prefix + " " + paramStr;
            }

            paramStr;
          }

          if ("string" === typeof p.table.table) {
            paramStr += "" + p.text;
          } else {
            paramStr += "(" + p.text + ")";
          }

          if (p.table.alias != null) {
            paramStr += " " + p.table.alias;
          }

          _ref3 = p.values;

          for (_k = 0, _len2 = _ref3.length; _k < _len2; _k++) {
            v = _ref3[_k];
            ret.values.push(this._formatCustomValue(v));
          }
        }

        ret.text += paramStr;
        return ret;
      };

      AbstractTableBlock.prototype.buildParam = function (queryBuilder) {
        return this._buildParam(queryBuilder);
      };

      return AbstractTableBlock;
    }(cls.Block);

    cls.UpdateTableBlock = function (_super) {
      __extends(UpdateTableBlock, _super);

      function UpdateTableBlock() {
        _ref2 = UpdateTableBlock.__super__.constructor.apply(this, arguments);
        return _ref2;
      }

      UpdateTableBlock.prototype.table = function (table, alias) {
        if (alias == null) {
          alias = null;
        }

        return this._table(table, alias);
      };

      return UpdateTableBlock;
    }(cls.AbstractTableBlock);

    cls.FromTableBlock = function (_super) {
      __extends(FromTableBlock, _super);

      function FromTableBlock() {
        _ref3 = FromTableBlock.__super__.constructor.apply(this, arguments);
        return _ref3;
      }

      FromTableBlock.prototype.from = function (table, alias) {
        if (alias == null) {
          alias = null;
        }

        return this._table(table, alias);
      };

      FromTableBlock.prototype.buildStr = function (queryBuilder) {
        var tables;
        tables = FromTableBlock.__super__.buildStr.call(this, queryBuilder);

        if (tables.length) {
          return "FROM " + tables;
        } else {
          return "";
        }
      };

      FromTableBlock.prototype.buildParam = function (queryBuilder) {
        return this._buildParam(queryBuilder, "FROM");
      };

      return FromTableBlock;
    }(cls.AbstractTableBlock);

    cls.IntoTableBlock = function (_super) {
      __extends(IntoTableBlock, _super);

      function IntoTableBlock(options) {
        IntoTableBlock.__super__.constructor.call(this, options);

        this.table = null;
      }

      IntoTableBlock.prototype.into = function (table) {
        return this.table = this._sanitizeTable(table, false);
      };

      IntoTableBlock.prototype.buildStr = function (queryBuilder) {
        if (!this.table) {
          throw new Error("into() needs to be called");
        }

        return "INTO " + this.table;
      };

      return IntoTableBlock;
    }(cls.Block);

    cls.GetFieldBlock = function (_super) {
      __extends(GetFieldBlock, _super);

      function GetFieldBlock(options) {
        GetFieldBlock.__super__.constructor.call(this, options);

        this._fieldAliases = {};
        this._fields = [];
      }

      GetFieldBlock.prototype.fields = function (_fields, options) {
        var alias, field, _i, _len, _results, _results1;

        if (options == null) {
          options = {};
        }

        if (Array.isArray(_fields)) {
          _results = [];

          for (_i = 0, _len = _fields.length; _i < _len; _i++) {
            field = _fields[_i];

            _results.push(this.field(field, null, options));
          }

          return _results;
        } else {
          _results1 = [];

          for (field in _fields) {
            alias = _fields[field];

            _results1.push(this.field(field, alias, options));
          }

          return _results1;
        }
      };

      GetFieldBlock.prototype.field = function (field, alias, options) {
        if (alias == null) {
          alias = null;
        }

        if (options == null) {
          options = {};
        }

        field = this._sanitizeField(field, options);

        if (alias) {
          alias = this._sanitizeFieldAlias(alias);
        }

        if (this._fieldAliases[field] === alias) {
          return;
        }

        this._fieldAliases[field] = alias;
        return this._fields.push({
          name: field,
          alias: alias
        });
      };

      GetFieldBlock.prototype.buildStr = function (queryBuilder) {
        var field, fields, _i, _len, _ref4;

        if (!queryBuilder.getBlock(cls.FromTableBlock)._hasTable()) {
          return "";
        }

        fields = "";
        _ref4 = this._fields;

        for (_i = 0, _len = _ref4.length; _i < _len; _i++) {
          field = _ref4[_i];

          if ("" !== fields) {
            fields += ", ";
          }

          fields += field.name;

          if (field.alias) {
            fields += " AS " + field.alias;
          }
        }

        if ("" === fields) {
          return "*";
        } else {
          return fields;
        }
      };

      return GetFieldBlock;
    }(cls.Block);

    cls.AbstractSetFieldBlock = function (_super) {
      __extends(AbstractSetFieldBlock, _super);

      function AbstractSetFieldBlock(options) {
        AbstractSetFieldBlock.__super__.constructor.call(this, options);

        this.fieldOptions = [];
        this.fields = [];
        this.values = [];
      }

      AbstractSetFieldBlock.prototype._set = function (field, value, options) {
        var index;

        if (options == null) {
          options = {};
        }

        if (this.values.length > 1) {
          throw new Error("Cannot call set or setFields on multiple rows of fields.");
        }

        if (void 0 !== value) {
          value = this._sanitizeValue(value);
        }

        index = this.fields.indexOf(this._sanitizeField(field, options));

        if (index !== -1) {
          this.values[0][index] = value;
          this.fieldOptions[0][index] = options;
        } else {
          this.fields.push(this._sanitizeField(field, options));
          index = this.fields.length - 1;

          if (Array.isArray(this.values[0])) {
            this.values[0][index] = value;
            this.fieldOptions[0][index] = options;
          } else {
            this.values.push([value]);
            this.fieldOptions.push([options]);
          }
        }

        return this;
      };

      AbstractSetFieldBlock.prototype._setFields = function (fields, options) {
        var field;

        if (options == null) {
          options = {};
        }

        if (Object(_Users_hyamakawa_VSCodeWork_Modern_T_Modern_T_study_template_web_application_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(fields) !== 'object') {
          throw new Error("Expected an object but got " + Object(_Users_hyamakawa_VSCodeWork_Modern_T_Modern_T_study_template_web_application_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(fields));
        }

        for (field in fields) {
          if (!__hasProp.call(fields, field)) continue;

          this._set(field, fields[field], options);
        }

        return this;
      };

      AbstractSetFieldBlock.prototype._setFieldsRows = function (fieldsRows, options) {
        var field, i, index, value, _i, _ref4, _ref5;

        if (options == null) {
          options = {};
        }

        if (!Array.isArray(fieldsRows)) {
          throw new Error("Expected an array of objects but got " + Object(_Users_hyamakawa_VSCodeWork_Modern_T_Modern_T_study_template_web_application_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(fieldsRows));
        }

        this.fields = [];
        this.values = [];

        for (i = _i = 0, _ref4 = fieldsRows.length; 0 <= _ref4 ? _i < _ref4 : _i > _ref4; i = 0 <= _ref4 ? ++_i : --_i) {
          _ref5 = fieldsRows[i];

          for (field in _ref5) {
            if (!__hasProp.call(_ref5, field)) continue;
            index = this.fields.indexOf(this._sanitizeField(field, options));

            if (0 < i && -1 === index) {
              throw new Error('All fields in subsequent rows must match the fields in the first row');
            }

            if (-1 === index) {
              this.fields.push(this._sanitizeField(field, options));
              index = this.fields.length - 1;
            }

            value = this._sanitizeValue(fieldsRows[i][field]);

            if (Array.isArray(this.values[i])) {
              this.values[i][index] = value;
              this.fieldOptions[i][index] = options;
            } else {
              this.values[i] = [value];
              this.fieldOptions[i] = [options];
            }
          }
        }

        return this;
      };

      AbstractSetFieldBlock.prototype.buildStr = function () {
        throw new Error('Not yet implemented');
      };

      AbstractSetFieldBlock.prototype.buildParam = function () {
        throw new Error('Not yet implemented');
      };

      return AbstractSetFieldBlock;
    }(cls.Block);

    cls.SetFieldBlock = function (_super) {
      __extends(SetFieldBlock, _super);

      function SetFieldBlock() {
        _ref4 = SetFieldBlock.__super__.constructor.apply(this, arguments);
        return _ref4;
      }

      SetFieldBlock.prototype.set = function (field, value, options) {
        return this._set(field, value, options);
      };

      SetFieldBlock.prototype.setFields = function (fields, options) {
        return this._setFields(fields, options);
      };

      SetFieldBlock.prototype.buildStr = function (queryBuilder) {
        var field, fieldOptions, i, str, value, _i, _ref5;

        if (0 >= this.fields.length) {
          throw new Error("set() needs to be called");
        }

        str = "";

        for (i = _i = 0, _ref5 = this.fields.length; 0 <= _ref5 ? _i < _ref5 : _i > _ref5; i = 0 <= _ref5 ? ++_i : --_i) {
          field = this.fields[i];

          if ("" !== str) {
            str += ", ";
          }

          value = this.values[0][i];
          fieldOptions = this.fieldOptions[0][i];

          if (typeof value === 'undefined') {
            str += field;
          } else {
            str += "" + field + " = " + this._formatValue(value, fieldOptions);
          }
        }

        return "SET " + str;
      };

      SetFieldBlock.prototype.buildParam = function (queryBuilder) {
        var field, i, p, str, v, vals, value, _i, _j, _len, _ref5, _ref6;

        if (0 >= this.fields.length) {
          throw new Error("set() needs to be called");
        }

        str = "";
        vals = [];

        for (i = _i = 0, _ref5 = this.fields.length; 0 <= _ref5 ? _i < _ref5 : _i > _ref5; i = 0 <= _ref5 ? ++_i : --_i) {
          field = this.fields[i];

          if ("" !== str) {
            str += ", ";
          }

          value = this.values[0][i];

          if (typeof value === 'undefined') {
            str += field;
          } else {
            p = this._formatValueAsParam(value);

            if ((p != null ? p.text : void 0) != null) {
              str += "" + field + " = (" + p.text + ")";
              _ref6 = p.values;

              for (_j = 0, _len = _ref6.length; _j < _len; _j++) {
                v = _ref6[_j];
                vals.push(v);
              }
            } else {
              str += "" + field + " = " + this.options.parameterCharacter;
              vals.push(p);
            }
          }
        }

        return {
          text: "SET " + str,
          values: vals
        };
      };

      return SetFieldBlock;
    }(cls.AbstractSetFieldBlock);

    cls.InsertFieldValueBlock = function (_super) {
      __extends(InsertFieldValueBlock, _super);

      function InsertFieldValueBlock() {
        _ref5 = InsertFieldValueBlock.__super__.constructor.apply(this, arguments);
        return _ref5;
      }

      InsertFieldValueBlock.prototype.set = function (field, value, options) {
        if (options == null) {
          options = {};
        }

        return this._set(field, value, options);
      };

      InsertFieldValueBlock.prototype.setFields = function (fields, options) {
        return this._setFields(fields, options);
      };

      InsertFieldValueBlock.prototype.setFieldsRows = function (fieldsRows, options) {
        return this._setFieldsRows(fieldsRows, options);
      };

      InsertFieldValueBlock.prototype._buildVals = function () {
        var formattedValue, i, j, vals, _i, _j, _ref6, _ref7;

        vals = [];

        for (i = _i = 0, _ref6 = this.values.length; 0 <= _ref6 ? _i < _ref6 : _i > _ref6; i = 0 <= _ref6 ? ++_i : --_i) {
          for (j = _j = 0, _ref7 = this.values[i].length; 0 <= _ref7 ? _j < _ref7 : _j > _ref7; j = 0 <= _ref7 ? ++_j : --_j) {
            formattedValue = this._formatValue(this.values[i][j], this.fieldOptions[i][j]);

            if ('string' === typeof vals[i]) {
              vals[i] += ', ' + formattedValue;
            } else {
              vals[i] = '' + formattedValue;
            }
          }
        }

        return vals;
      };

      InsertFieldValueBlock.prototype._buildValParams = function () {
        var i, j, p, params, str, v, vals, _i, _j, _k, _len, _ref6, _ref7, _ref8;

        vals = [];
        params = [];

        for (i = _i = 0, _ref6 = this.values.length; 0 <= _ref6 ? _i < _ref6 : _i > _ref6; i = 0 <= _ref6 ? ++_i : --_i) {
          for (j = _j = 0, _ref7 = this.values[i].length; 0 <= _ref7 ? _j < _ref7 : _j > _ref7; j = 0 <= _ref7 ? ++_j : --_j) {
            p = this._formatValueAsParam(this.values[i][j]);

            if ((p != null ? p.text : void 0) != null) {
              str = p.text;
              _ref8 = p.values;

              for (_k = 0, _len = _ref8.length; _k < _len; _k++) {
                v = _ref8[_k];
                params.push(v);
              }
            } else {
              str = this.options.parameterCharacter;
              params.push(p);
            }

            if ('string' === typeof vals[i]) {
              vals[i] += ", " + str;
            } else {
              vals[i] = "" + str;
            }
          }
        }

        return {
          vals: vals,
          params: params
        };
      };

      InsertFieldValueBlock.prototype.buildStr = function (queryBuilder) {
        if (0 >= this.fields.length) {
          return '';
        }

        return "(" + this.fields.join(', ') + ") VALUES (" + this._buildVals().join('), (') + ")";
      };

      InsertFieldValueBlock.prototype.buildParam = function (queryBuilder) {
        var i, params, str, vals, _i, _ref6, _ref7;

        if (0 >= this.fields.length) {
          return {
            text: '',
            values: []
          };
        }

        str = "";
        _ref6 = this._buildValParams(), vals = _ref6.vals, params = _ref6.params;

        for (i = _i = 0, _ref7 = this.fields.length; 0 <= _ref7 ? _i < _ref7 : _i > _ref7; i = 0 <= _ref7 ? ++_i : --_i) {
          if ("" !== str) {
            str += ", ";
          }

          str += this.fields[i];
        }

        return {
          text: "(" + str + ") VALUES (" + vals.join('), (') + ")",
          values: params
        };
      };

      return InsertFieldValueBlock;
    }(cls.AbstractSetFieldBlock);

    cls.InsertFieldsFromQueryBlock = function (_super) {
      __extends(InsertFieldsFromQueryBlock, _super);

      function InsertFieldsFromQueryBlock(options) {
        InsertFieldsFromQueryBlock.__super__.constructor.call(this, options);

        this._fields = [];
        this._query = null;
      }

      InsertFieldsFromQueryBlock.prototype.fromQuery = function (fields, selectQuery) {
        var _this = this;

        this._fields = fields.map(function (v) {
          return _this._sanitizeField(v);
        });
        return this._query = this._sanitizeNestableQuery(selectQuery);
      };

      InsertFieldsFromQueryBlock.prototype.buildStr = function (queryBuilder) {
        if (0 >= this._fields.length) {
          return '';
        }

        return "(" + this._fields.join(', ') + ") (" + this._query.toString() + ")";
      };

      InsertFieldsFromQueryBlock.prototype.buildParam = function (queryBuilder) {
        var qryParam;

        if (0 >= this._fields.length) {
          return {
            text: '',
            values: []
          };
        }

        qryParam = this._query.toParam();
        return {
          text: "(" + this._fields.join(', ') + ") (" + qryParam.text + ")",
          values: qryParam.values
        };
      };

      return InsertFieldsFromQueryBlock;
    }(cls.Block);

    cls.DistinctBlock = function (_super) {
      __extends(DistinctBlock, _super);

      function DistinctBlock(options) {
        DistinctBlock.__super__.constructor.call(this, options);

        this.useDistinct = false;
      }

      DistinctBlock.prototype.distinct = function () {
        return this.useDistinct = true;
      };

      DistinctBlock.prototype.buildStr = function (queryBuilder) {
        if (this.useDistinct) {
          return "DISTINCT";
        } else {
          return "";
        }
      };

      return DistinctBlock;
    }(cls.Block);

    cls.GroupByBlock = function (_super) {
      __extends(GroupByBlock, _super);

      function GroupByBlock(options) {
        GroupByBlock.__super__.constructor.call(this, options);

        this.groups = [];
      }

      GroupByBlock.prototype.group = function (field) {
        field = this._sanitizeField(field);
        return this.groups.push(field);
      };

      GroupByBlock.prototype.buildStr = function (queryBuilder) {
        var f, groups, _i, _len, _ref6;

        groups = "";

        if (0 < this.groups.length) {
          _ref6 = this.groups;

          for (_i = 0, _len = _ref6.length; _i < _len; _i++) {
            f = _ref6[_i];

            if ("" !== groups) {
              groups += ", ";
            }

            groups += f;
          }

          groups = "GROUP BY " + groups;
        }

        return groups;
      };

      return GroupByBlock;
    }(cls.Block);

    cls.OffsetBlock = function (_super) {
      __extends(OffsetBlock, _super);

      function OffsetBlock(options) {
        OffsetBlock.__super__.constructor.call(this, options);

        this.offsets = null;
      }

      OffsetBlock.prototype.offset = function (start) {
        start = this._sanitizeLimitOffset(start);
        return this.offsets = start;
      };

      OffsetBlock.prototype.buildStr = function (queryBuilder) {
        if (this.offsets) {
          return "OFFSET " + this.offsets;
        } else {
          return "";
        }
      };

      return OffsetBlock;
    }(cls.Block);

    cls.AbstractConditionBlock = function (_super) {
      __extends(AbstractConditionBlock, _super);

      function AbstractConditionBlock(conditionVerb, options) {
        this.conditionVerb = conditionVerb;

        AbstractConditionBlock.__super__.constructor.call(this, options);

        this.conditions = [];
      }

      AbstractConditionBlock.prototype._condition = function () {
        var c, condition, finalCondition, finalValues, idx, inValues, item, nextValue, t, values, _i, _j, _len, _ref6;

        condition = arguments[0], values = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        condition = this._sanitizeCondition(condition);
        finalCondition = "";
        finalValues = [];

        if (condition instanceof cls.Expression) {
          t = condition.toParam();
          finalCondition = t.text;
          finalValues = t.values;
        } else {
          for (idx = _i = 0, _ref6 = condition.length; 0 <= _ref6 ? _i < _ref6 : _i > _ref6; idx = 0 <= _ref6 ? ++_i : --_i) {
            c = condition.charAt(idx);

            if (this.options.parameterCharacter === c && 0 < values.length) {
              nextValue = values.shift();

              if (Array.isArray(nextValue)) {
                inValues = [];

                for (_j = 0, _len = nextValue.length; _j < _len; _j++) {
                  item = nextValue[_j];
                  inValues.push(this._sanitizeValue(item));
                }

                finalValues = finalValues.concat(inValues);

                finalCondition += "(" + function () {
                  var _k, _len1, _results;

                  _results = [];

                  for (_k = 0, _len1 = inValues.length; _k < _len1; _k++) {
                    item = inValues[_k];

                    _results.push(this.options.parameterCharacter);
                  }

                  return _results;
                }.call(this).join(', ') + ")";
              } else {
                finalCondition += this.options.parameterCharacter;
                finalValues.push(this._sanitizeValue(nextValue));
              }
            } else {
              finalCondition += c;
            }
          }
        }

        if ("" !== finalCondition) {
          return this.conditions.push({
            text: finalCondition,
            values: finalValues
          });
        }
      };

      AbstractConditionBlock.prototype.buildStr = function (queryBuilder) {
        var c, cond, condStr, idx, pIndex, _i, _j, _len, _ref6, _ref7;

        if (0 >= this.conditions.length) {
          return "";
        }

        condStr = "";
        _ref6 = this.conditions;

        for (_i = 0, _len = _ref6.length; _i < _len; _i++) {
          cond = _ref6[_i];

          if ("" !== condStr) {
            condStr += ") AND (";
          }

          if (0 < cond.values.length) {
            pIndex = 0;

            for (idx = _j = 0, _ref7 = cond.text.length; 0 <= _ref7 ? _j < _ref7 : _j > _ref7; idx = 0 <= _ref7 ? ++_j : --_j) {
              c = cond.text.charAt(idx);

              if (this.options.parameterCharacter === c) {
                condStr += this._formatValue(cond.values[pIndex++]);
              } else {
                condStr += c;
              }
            }
          } else {
            condStr += cond.text;
          }
        }

        return "" + this.conditionVerb + " (" + condStr + ")";
      };

      AbstractConditionBlock.prototype.buildParam = function (queryBuilder) {
        var cond, condStr, i, p, qv, ret, str, v, _i, _j, _k, _len, _len1, _len2, _ref6, _ref7, _ref8;

        ret = {
          text: "",
          values: []
        };

        if (0 >= this.conditions.length) {
          return ret;
        }

        condStr = "";
        _ref6 = this.conditions;

        for (_i = 0, _len = _ref6.length; _i < _len; _i++) {
          cond = _ref6[_i];

          if ("" !== condStr) {
            condStr += ") AND (";
          }

          str = cond.text.split(this.options.parameterCharacter);
          i = 0;
          _ref7 = cond.values;

          for (_j = 0, _len1 = _ref7.length; _j < _len1; _j++) {
            v = _ref7[_j];

            if (str[i] != null) {
              condStr += "" + str[i];
            }

            p = this._formatValueAsParam(v);

            if ((p != null ? p.text : void 0) != null) {
              condStr += "(" + p.text + ")";
              _ref8 = p.values;

              for (_k = 0, _len2 = _ref8.length; _k < _len2; _k++) {
                qv = _ref8[_k];
                ret.values.push(qv);
              }
            } else {
              condStr += this.options.parameterCharacter;
              ret.values.push(p);
            }

            i = i + 1;
          }

          if (str[i] != null) {
            condStr += "" + str[i];
          }
        }

        ret.text = "" + this.conditionVerb + " (" + condStr + ")";
        return ret;
      };

      return AbstractConditionBlock;
    }(cls.Block);

    cls.WhereBlock = function (_super) {
      __extends(WhereBlock, _super);

      function WhereBlock(options) {
        WhereBlock.__super__.constructor.call(this, 'WHERE', options);
      }

      WhereBlock.prototype.where = function () {
        var condition, values;
        condition = arguments[0], values = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        return this._condition.apply(this, [condition].concat(__slice.call(values)));
      };

      return WhereBlock;
    }(cls.AbstractConditionBlock);

    cls.HavingBlock = function (_super) {
      __extends(HavingBlock, _super);

      function HavingBlock(options) {
        HavingBlock.__super__.constructor.call(this, 'HAVING', options);
      }

      HavingBlock.prototype.having = function () {
        var condition, values;
        condition = arguments[0], values = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        return this._condition.apply(this, [condition].concat(__slice.call(values)));
      };

      return HavingBlock;
    }(cls.AbstractConditionBlock);

    cls.OrderByBlock = function (_super) {
      __extends(OrderByBlock, _super);

      function OrderByBlock(options) {
        OrderByBlock.__super__.constructor.call(this, options);

        this.orders = [];
        this._values = [];
      }

      OrderByBlock.prototype.order = function () {
        var asc, field, values;
        field = arguments[0], asc = arguments[1], values = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
        field = this._sanitizeField(field);

        if (asc === void 0) {
          asc = true;
        }

        if (asc !== null) {
          asc = !!asc;
        }

        this._values = values;
        return this.orders.push({
          field: field,
          dir: asc
        });
      };

      OrderByBlock.prototype._buildStr = function (toParam) {
        var c, fstr, idx, o, orders, pIndex, _i, _j, _len, _ref6, _ref7;

        if (toParam == null) {
          toParam = false;
        }

        if (0 < this.orders.length) {
          pIndex = 0;
          orders = "";
          _ref6 = this.orders;

          for (_i = 0, _len = _ref6.length; _i < _len; _i++) {
            o = _ref6[_i];

            if ("" !== orders) {
              orders += ", ";
            }

            fstr = "";

            if (!toParam) {
              for (idx = _j = 0, _ref7 = o.field.length; 0 <= _ref7 ? _j < _ref7 : _j > _ref7; idx = 0 <= _ref7 ? ++_j : --_j) {
                c = o.field.charAt(idx);

                if (this.options.parameterCharacter === c) {
                  fstr += this._formatValue(this._values[pIndex++]);
                } else {
                  fstr += c;
                }
              }
            } else {
              fstr = o.field;
            }

            orders += "" + fstr;

            if (o.dir !== null) {
              orders += " " + (o.dir ? 'ASC' : 'DESC');
            }
          }

          return "ORDER BY " + orders;
        } else {
          return "";
        }
      };

      OrderByBlock.prototype.buildStr = function (queryBuilder) {
        return this._buildStr();
      };

      OrderByBlock.prototype.buildParam = function (queryBuilder) {
        var _this = this;

        return {
          text: this._buildStr(true),
          values: this._values.map(function (v) {
            return _this._formatValueAsParam(v);
          })
        };
      };

      return OrderByBlock;
    }(cls.Block);

    cls.LimitBlock = function (_super) {
      __extends(LimitBlock, _super);

      function LimitBlock(options) {
        LimitBlock.__super__.constructor.call(this, options);

        this.limits = null;
      }

      LimitBlock.prototype.limit = function (max) {
        max = this._sanitizeLimitOffset(max);
        return this.limits = max;
      };

      LimitBlock.prototype.buildStr = function (queryBuilder) {
        if (this.limits || this.limits === 0) {
          return "LIMIT " + this.limits;
        } else {
          return "";
        }
      };

      return LimitBlock;
    }(cls.Block);

    cls.JoinBlock = function (_super) {
      __extends(JoinBlock, _super);

      function JoinBlock(options) {
        JoinBlock.__super__.constructor.call(this, options);

        this.joins = [];
      }

      JoinBlock.prototype.join = function (table, alias, condition, type) {
        if (alias == null) {
          alias = null;
        }

        if (condition == null) {
          condition = null;
        }

        if (type == null) {
          type = 'INNER';
        }

        table = this._sanitizeTable(table, true);

        if (alias) {
          alias = this._sanitizeTableAlias(alias);
        }

        if (condition) {
          condition = this._sanitizeCondition(condition);
        }

        this.joins.push({
          type: type,
          table: table,
          alias: alias,
          condition: condition
        });
        return this;
      };

      JoinBlock.prototype.left_join = function (table, alias, condition) {
        if (alias == null) {
          alias = null;
        }

        if (condition == null) {
          condition = null;
        }

        return this.join(table, alias, condition, 'LEFT');
      };

      JoinBlock.prototype.right_join = function (table, alias, condition) {
        if (alias == null) {
          alias = null;
        }

        if (condition == null) {
          condition = null;
        }

        return this.join(table, alias, condition, 'RIGHT');
      };

      JoinBlock.prototype.outer_join = function (table, alias, condition) {
        if (alias == null) {
          alias = null;
        }

        if (condition == null) {
          condition = null;
        }

        return this.join(table, alias, condition, 'OUTER');
      };

      JoinBlock.prototype.left_outer_join = function (table, alias, condition) {
        if (alias == null) {
          alias = null;
        }

        if (condition == null) {
          condition = null;
        }

        return this.join(table, alias, condition, 'LEFT OUTER');
      };

      JoinBlock.prototype.full_join = function (table, alias, condition) {
        if (alias == null) {
          alias = null;
        }

        if (condition == null) {
          condition = null;
        }

        return this.join(table, alias, condition, 'FULL');
      };

      JoinBlock.prototype.cross_join = function (table, alias, condition) {
        if (alias == null) {
          alias = null;
        }

        if (condition == null) {
          condition = null;
        }

        return this.join(table, alias, condition, 'CROSS');
      };

      JoinBlock.prototype.buildStr = function (queryBuilder) {
        var j, joins, _i, _len, _ref6;

        joins = "";
        _ref6 = this.joins || [];

        for (_i = 0, _len = _ref6.length; _i < _len; _i++) {
          j = _ref6[_i];

          if (joins !== "") {
            joins += " ";
          }

          joins += "" + j.type + " JOIN ";

          if ("string" === typeof j.table) {
            joins += j.table;
          } else {
            joins += "(" + j.table + ")";
          }

          if (j.alias) {
            joins += " " + j.alias;
          }

          if (j.condition) {
            joins += " ON (" + j.condition + ")";
          }
        }

        return joins;
      };

      JoinBlock.prototype.buildParam = function (queryBuilder) {
        var blk, cp, joinStr, p, params, ret, v, _i, _j, _k, _len, _len1, _len2, _ref6, _ref7;

        ret = {
          text: "",
          values: []
        };
        params = [];
        joinStr = "";

        if (0 >= this.joins.length) {
          return ret;
        }

        _ref6 = this.joins;

        for (_i = 0, _len = _ref6.length; _i < _len; _i++) {
          blk = _ref6[_i];

          if ("string" === typeof blk.table) {
            p = {
              "text": "" + blk.table,
              "values": []
            };
          } else if (blk.table instanceof cls.QueryBuilder) {
            blk.table.updateOptions({
              "nestedBuilder": true
            });
            p = blk.table.toParam();
          } else {
            blk.updateOptions({
              "nestedBuilder": true
            });
            p = blk.buildParam(queryBuilder);
          }

          if (blk.condition instanceof cls.Expression) {
            cp = blk.condition.toParam();
            p.condition = cp.text;
            p.values = p.values.concat(cp.values);
          } else {
            p.condition = blk.condition;
          }

          p.join = blk;
          params.push(p);
        }

        for (_j = 0, _len1 = params.length; _j < _len1; _j++) {
          p = params[_j];

          if (joinStr !== "") {
            joinStr += " ";
          }

          joinStr += "" + p.join.type + " JOIN ";

          if ("string" === typeof p.join.table) {
            joinStr += p.text;
          } else {
            joinStr += "(" + p.text + ")";
          }

          if (p.join.alias) {
            joinStr += " " + p.join.alias;
          }

          if (p.condition) {
            joinStr += " ON (" + p.condition + ")";
          }

          _ref7 = p.values;

          for (_k = 0, _len2 = _ref7.length; _k < _len2; _k++) {
            v = _ref7[_k];
            ret.values.push(this._formatCustomValue(v));
          }
        }

        ret.text += joinStr;
        return ret;
      };

      return JoinBlock;
    }(cls.Block);

    cls.UnionBlock = function (_super) {
      __extends(UnionBlock, _super);

      function UnionBlock(options) {
        UnionBlock.__super__.constructor.call(this, options);

        this.unions = [];
      }

      UnionBlock.prototype.union = function (table, type) {
        if (type == null) {
          type = 'UNION';
        }

        table = this._sanitizeTable(table, true);
        this.unions.push({
          type: type,
          table: table
        });
        return this;
      };

      UnionBlock.prototype.union_all = function (table) {
        return this.union(table, 'UNION ALL');
      };

      UnionBlock.prototype.buildStr = function (queryBuilder) {
        var j, unionStr, _i, _len, _ref6;

        unionStr = "";
        _ref6 = this.unions || [];

        for (_i = 0, _len = _ref6.length; _i < _len; _i++) {
          j = _ref6[_i];

          if (unionStr !== "") {
            unionStr += " ";
          }

          unionStr += "" + j.type + " ";

          if ("string" === typeof j.table) {
            unionStr += j.table;
          } else {
            unionStr += "(" + j.table + ")";
          }
        }

        return unionStr;
      };

      UnionBlock.prototype.buildParam = function (queryBuilder) {
        var blk, p, params, ret, unionStr, v, _i, _j, _k, _len, _len1, _len2, _ref6, _ref7;

        ret = {
          text: "",
          values: []
        };
        params = [];
        unionStr = "";

        if (0 >= this.unions.length) {
          return ret;
        }

        _ref6 = this.unions || [];

        for (_i = 0, _len = _ref6.length; _i < _len; _i++) {
          blk = _ref6[_i];

          if ("string" === typeof blk.table) {
            p = {
              "text": "" + blk.table,
              "values": []
            };
          } else if (blk.table instanceof cls.QueryBuilder) {
            blk.table.updateOptions({
              "nestedBuilder": true
            });
            p = blk.table.toParam();
          } else {
            blk.updateOptions({
              "nestedBuilder": true
            });
            p = blk.buildParam(queryBuilder);
          }

          p.type = blk.type;
          params.push(p);
        }

        for (_j = 0, _len1 = params.length; _j < _len1; _j++) {
          p = params[_j];

          if (unionStr !== "") {
            unionStr += " ";
          }

          unionStr += "" + p.type + " (" + p.text + ")";
          _ref7 = p.values;

          for (_k = 0, _len2 = _ref7.length; _k < _len2; _k++) {
            v = _ref7[_k];
            ret.values.push(this._formatCustomValue(v));
          }
        }

        ret.text += unionStr;
        return ret;
      };

      return UnionBlock;
    }(cls.Block);

    cls.QueryBuilder = function (_super) {
      __extends(QueryBuilder, _super);

      function QueryBuilder(options, blocks) {
        var block,
            methodBody,
            methodName,
            _fn,
            _i,
            _len,
            _ref6,
            _ref7,
            _this = this;

        QueryBuilder.__super__.constructor.call(this, options);

        this.blocks = blocks || [];
        _ref6 = this.blocks;

        for (_i = 0, _len = _ref6.length; _i < _len; _i++) {
          block = _ref6[_i];
          _ref7 = block.exposedMethods();

          _fn = function _fn(block, name, body) {
            return _this[name] = function () {
              body.apply(block, arguments);
              return _this;
            };
          };

          for (methodName in _ref7) {
            methodBody = _ref7[methodName];

            if (this[methodName] != null) {
              throw new Error("" + this._getObjectClassName(this) + " already has a builder method called: " + methodName);
            }

            _fn(block, methodName, methodBody);
          }
        }
      }

      QueryBuilder.prototype.registerValueHandler = function (type, handler) {
        var block, _i, _len, _ref6;

        _ref6 = this.blocks;

        for (_i = 0, _len = _ref6.length; _i < _len; _i++) {
          block = _ref6[_i];
          block.registerValueHandler(type, handler);
        }

        QueryBuilder.__super__.registerValueHandler.call(this, type, handler);

        return this;
      };

      QueryBuilder.prototype.updateOptions = function (options) {
        var block, _i, _len, _ref6, _results;

        this.options = _extend({}, this.options, options);
        _ref6 = this.blocks;
        _results = [];

        for (_i = 0, _len = _ref6.length; _i < _len; _i++) {
          block = _ref6[_i];

          _results.push(block.options = _extend({}, block.options, options));
        }

        return _results;
      };

      QueryBuilder.prototype.toString = function () {
        var block;
        return function () {
          var _i, _len, _ref6, _results;

          _ref6 = this.blocks;
          _results = [];

          for (_i = 0, _len = _ref6.length; _i < _len; _i++) {
            block = _ref6[_i];

            _results.push(block.buildStr(this));
          }

          return _results;
        }.call(this).filter(function (v) {
          return 0 < v.length;
        }).join(this.options.separator);
      };

      QueryBuilder.prototype.toParam = function (options) {
        var block,
            blocks,
            i,
            old,
            regex,
            result,
            _ref6,
            _this = this;

        if (options == null) {
          options = void 0;
        }

        old = this.options;

        if (options != null) {
          this.options = _extend({}, this.options, options);
        }

        result = {
          text: '',
          values: []
        };

        blocks = function () {
          var _i, _len, _ref6, _results;

          _ref6 = this.blocks;
          _results = [];

          for (_i = 0, _len = _ref6.length; _i < _len; _i++) {
            block = _ref6[_i];

            _results.push(block.buildParam(this));
          }

          return _results;
        }.call(this);

        result.text = function () {
          var _i, _len, _results;

          _results = [];

          for (_i = 0, _len = blocks.length; _i < _len; _i++) {
            block = blocks[_i];

            _results.push(block.text);
          }

          return _results;
        }().filter(function (v) {
          return 0 < v.length;
        }).join(this.options.separator);

        result.values = (_ref6 = []).concat.apply(_ref6, function () {
          var _i, _len, _results;

          _results = [];

          for (_i = 0, _len = blocks.length; _i < _len; _i++) {
            block = blocks[_i];

            _results.push(block.values);
          }

          return _results;
        }());

        if (this.options.nestedBuilder == null) {
          if (this.options.numberedParameters || (options != null ? options.numberedParametersStartAt : void 0) != null) {
            i = 1;

            if (this.options.numberedParametersStartAt != null) {
              i = this.options.numberedParametersStartAt;
            }

            regex = new RegExp("\\" + this.options.parameterCharacter, 'g');
            result.text = result.text.replace(regex, function () {
              return "" + _this.options.numberedParametersPrefix + i++;
            });
          }
        }

        this.options = old;
        return result;
      };

      QueryBuilder.prototype.clone = function () {
        var block;
        return new this.constructor(this.options, function () {
          var _i, _len, _ref6, _results;

          _ref6 = this.blocks;
          _results = [];

          for (_i = 0, _len = _ref6.length; _i < _len; _i++) {
            block = _ref6[_i];

            _results.push(block.clone());
          }

          return _results;
        }.call(this));
      };

      QueryBuilder.prototype.isNestable = function () {
        return false;
      };

      QueryBuilder.prototype.getBlock = function (blockType) {
        return this.blocks.filter(function (b) {
          return b instanceof blockType;
        })[0];
      };

      return QueryBuilder;
    }(cls.BaseBuilder);

    cls.Select = function (_super) {
      __extends(Select, _super);

      function Select(options, blocks) {
        if (blocks == null) {
          blocks = null;
        }

        blocks || (blocks = [new cls.StringBlock(options, 'SELECT'), new cls.FunctionBlock(options), new cls.DistinctBlock(options), new cls.GetFieldBlock(options), new cls.FromTableBlock(_extend({}, options, {
          allowNested: true
        })), new cls.JoinBlock(_extend({}, options, {
          allowNested: true
        })), new cls.WhereBlock(options), new cls.GroupByBlock(options), new cls.HavingBlock(options), new cls.OrderByBlock(options), new cls.LimitBlock(options), new cls.OffsetBlock(options), new cls.UnionBlock(_extend({}, options, {
          allowNested: true
        }))]);

        Select.__super__.constructor.call(this, options, blocks);
      }

      Select.prototype.isNestable = function () {
        return true;
      };

      return Select;
    }(cls.QueryBuilder);

    cls.Update = function (_super) {
      __extends(Update, _super);

      function Update(options, blocks) {
        if (blocks == null) {
          blocks = null;
        }

        blocks || (blocks = [new cls.StringBlock(options, 'UPDATE'), new cls.UpdateTableBlock(options), new cls.SetFieldBlock(options), new cls.WhereBlock(options), new cls.OrderByBlock(options), new cls.LimitBlock(options)]);

        Update.__super__.constructor.call(this, options, blocks);
      }

      return Update;
    }(cls.QueryBuilder);

    cls.Delete = function (_super) {
      __extends(Delete, _super);

      function Delete(options, blocks) {
        if (blocks == null) {
          blocks = null;
        }

        blocks || (blocks = [new cls.StringBlock(options, 'DELETE'), new cls.FromTableBlock(_extend({}, options, {
          singleTable: true
        })), new cls.JoinBlock(options), new cls.WhereBlock(options), new cls.OrderByBlock(options), new cls.LimitBlock(options)]);

        Delete.__super__.constructor.call(this, options, blocks);
      }

      return Delete;
    }(cls.QueryBuilder);

    cls.Insert = function (_super) {
      __extends(Insert, _super);

      function Insert(options, blocks) {
        if (blocks == null) {
          blocks = null;
        }

        blocks || (blocks = [new cls.StringBlock(options, 'INSERT'), new cls.IntoTableBlock(options), new cls.InsertFieldValueBlock(options), new cls.InsertFieldsFromQueryBlock(options)]);

        Insert.__super__.constructor.call(this, options, blocks);
      }

      return Insert;
    }(cls.QueryBuilder);

    _squel = {
      VERSION: '4.2.3',
      flavour: flavour,
      expr: function expr(options) {
        return new cls.Expression(options);
      },
      select: function select(options, blocks) {
        return new cls.Select(options, blocks);
      },
      update: function update(options, blocks) {
        return new cls.Update(options, blocks);
      },
      insert: function insert(options, blocks) {
        return new cls.Insert(options, blocks);
      },
      "delete": function _delete(options, blocks) {
        return new cls.Delete(options, blocks);
      },
      registerValueHandler: cls.registerValueHandler,
      fval: cls.fval
    };
    _squel.remove = _squel["delete"];
    _squel.cls = cls;
    return _squel;
  };

  squel = _buildSquel();

  if (typeof define !== "undefined" && define !== null ? __webpack_require__(112) : void 0) {
    define(function () {
      return squel;
    });
  } else if ( true && module !== null ? module.exports : void 0) {
    module.exports = squel;
  } else {
    if (typeof window !== "undefined" && window !== null) {
      window.squel = squel;
    }
  }

  squel.flavours = {};

  squel.useFlavour = function (flavour) {
    var s;

    if (flavour == null) {
      flavour = null;
    }

    if (!flavour) {
      return squel;
    }

    if (squel.flavours[flavour] instanceof Function) {
      s = _buildSquel(flavour);
      squel.flavours[flavour].call(null, s);
      return s;
    } else {
      throw new Error("Flavour not available: " + flavour);
    }
  };

  SQ = squel;
  return SQ;
} // ).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(98)(module)))

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return doGet; });
function doGet() {
  // eslint-disable-next-line no-undef
  var output = HtmlService.createHtmlOutputFromFile('index');
  output.setTitle('Book Management');
  output.addMetaTag('viewport', 'width=device-width, initial-scale=1');
  return output;
}

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sample; });
/* harmony import */ var _util_EsmRdb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);

/**
 * xxx
 * @param
 * @returns
 */

function sample() {
  // SQL実行
  return Object(_util_EsmRdb_js__WEBPACK_IMPORTED_MODULE_0__[/* EsmRdb */ "a"])().execQuery(buildSQL());
}

var buildSQL = function buildSQL() {
  // SQLの作成
  return "\n    SQL\u3092\u66F8\u304F\n  ";
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(77);


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _util_EsmRdb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _util_squel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73);
/* harmony import */ var _functions_doGet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74);
/* harmony import */ var _functions_sample__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75);





global.settings = function () {
  // eslint-disable-next-line no-undef
  return JSON.parse(HtmlService.createHtmlOutputFromFile('settings.json').getContent());
}();

global.SQ = Object(_util_squel__WEBPACK_IMPORTED_MODULE_1__[/* setSQ */ "a"])();
global.EsmRdb = _util_EsmRdb__WEBPACK_IMPORTED_MODULE_0__[/* EsmRdb */ "a"];
global.doGet = _functions_doGet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"];
global.sample = _functions_sample__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(40)))

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var inspectSource = __webpack_require__(45);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(5);
var ownKeys = __webpack_require__(81);
var getOwnPropertyDescriptorModule = __webpack_require__(42);
var definePropertyModule = __webpack_require__(8);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(17);
var getOwnPropertyNamesModule = __webpack_require__(49);
var getOwnPropertySymbolsModule = __webpack_require__(83);
var anObject = __webpack_require__(3);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);

module.exports = global;


/***/ }),
/* 83 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(57);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(32);
var classof = __webpack_require__(86);

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(32);
var classofRaw = __webpack_require__(15);
var wellKnownSymbol = __webpack_require__(0);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(18);
var requireObjectCoercible = __webpack_require__(13);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 88 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(12);
var addToUnscopables = __webpack_require__(90);
var Iterators = __webpack_require__(38);
var InternalStateModule = __webpack_require__(27);
var defineIterator = __webpack_require__(94);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(0);
var create = __webpack_require__(62);
var definePropertyModule = __webpack_require__(8);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(7);
var definePropertyModule = __webpack_require__(8);
var anObject = __webpack_require__(3);
var objectKeys = __webpack_require__(92);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(50);
var enumBugKeys = __webpack_require__(31);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(17);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9);
var createIteratorConstructor = __webpack_require__(95);
var getPrototypeOf = __webpack_require__(64);
var setPrototypeOf = __webpack_require__(66);
var setToStringTag = __webpack_require__(65);
var createNonEnumerableProperty = __webpack_require__(10);
var redefine = __webpack_require__(14);
var wellKnownSymbol = __webpack_require__(0);
var IS_PURE = __webpack_require__(29);
var Iterators = __webpack_require__(38);
var IteratorsCore = __webpack_require__(63);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(63).IteratorPrototype;
var create = __webpack_require__(62);
var createPropertyDescriptor = __webpack_require__(16);
var setToStringTag = __webpack_require__(65);
var Iterators = __webpack_require__(38);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9);
var fails = __webpack_require__(1);
var isArray = __webpack_require__(39);
var isObject = __webpack_require__(4);
var toObject = __webpack_require__(21);
var toLength = __webpack_require__(11);
var createProperty = __webpack_require__(67);
var arraySpeciesCreate = __webpack_require__(68);
var arrayMethodHasSpeciesSupport = __webpack_require__(22);
var wellKnownSymbol = __webpack_require__(0);
var V8_VERSION = __webpack_require__(69);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(17);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9);
var $filter = __webpack_require__(70).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(22);
var arrayMethodUsesToLength = __webpack_require__(19);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(71);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9);
var $map = __webpack_require__(70).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(22);
var arrayMethodUsesToLength = __webpack_require__(19);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9);
var isObject = __webpack_require__(4);
var isArray = __webpack_require__(39);
var toAbsoluteIndex = __webpack_require__(52);
var toLength = __webpack_require__(11);
var toIndexedObject = __webpack_require__(12);
var createProperty = __webpack_require__(67);
var wellKnownSymbol = __webpack_require__(0);
var arrayMethodHasSpeciesSupport = __webpack_require__(22);
var arrayMethodUsesToLength = __webpack_require__(19);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(7);
var defineProperty = __webpack_require__(8).f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(7);
var global = __webpack_require__(2);
var isForced = __webpack_require__(53);
var inheritIfRequired = __webpack_require__(107);
var defineProperty = __webpack_require__(8).f;
var getOwnPropertyNames = __webpack_require__(49).f;
var isRegExp = __webpack_require__(72);
var getFlags = __webpack_require__(34);
var stickyHelpers = __webpack_require__(58);
var redefine = __webpack_require__(14);
var fails = __webpack_require__(1);
var setInternalState = __webpack_require__(27).set;
var setSpecies = __webpack_require__(108);
var wellKnownSymbol = __webpack_require__(0);

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var FORCED = DESCRIPTORS && isForced('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y || fails(function () {
  re2[MATCH] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
})));

// `RegExp` constructor
// https://tc39.github.io/ecma262/#sec-regexp-constructor
if (FORCED) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var sticky;

    if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
      return pattern;
    }

    if (CORRECT_NEW) {
      if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
    } else if (pattern instanceof RegExpWrapper) {
      if (flagsAreUndefined) flags = getFlags.call(pattern);
      pattern = pattern.source;
    }

    if (UNSUPPORTED_Y) {
      sticky = !!flags && flags.indexOf('y') > -1;
      if (sticky) flags = flags.replace(/y/g, '');
    }

    var result = inheritIfRequired(
      CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
      thisIsRegExp ? this : RegExpPrototype,
      RegExpWrapper
    );

    if (UNSUPPORTED_Y && sticky) setInternalState(result, { sticky: sticky });

    return result;
  };
  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };
  var keys = getOwnPropertyNames(NativeRegExp);
  var index = 0;
  while (keys.length > index) proxy(keys[index++]);
  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.github.io/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var setPrototypeOf = __webpack_require__(66);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(17);
var definePropertyModule = __webpack_require__(8);
var wellKnownSymbol = __webpack_require__(0);
var DESCRIPTORS = __webpack_require__(7);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(35);
var anObject = __webpack_require__(3);
var toLength = __webpack_require__(11);
var requireObjectCoercible = __webpack_require__(13);
var advanceStringIndex = __webpack_require__(36);
var regExpExec = __webpack_require__(37);

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(35);
var isRegExp = __webpack_require__(72);
var anObject = __webpack_require__(3);
var requireObjectCoercible = __webpack_require__(13);
var speciesConstructor = __webpack_require__(111);
var advanceStringIndex = __webpack_require__(36);
var toLength = __webpack_require__(11);
var callRegExpExec = __webpack_require__(37);
var regexpExec = __webpack_require__(20);
var fails = __webpack_require__(1);

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(3);
var aFunction = __webpack_require__(71);
var wellKnownSymbol = __webpack_require__(0);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),
/* 112 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ })
/******/ ]);