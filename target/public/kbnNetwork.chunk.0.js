(window["kbnNetwork_bundle_jsonpfunction"] = window["kbnNetwork_bundle_jsonpfunction"] || []).push([[0],{

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/webpack/buildin/global.js from dll-reference __kbnSharedDeps_npm__ ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference __kbnSharedDeps_npm__ */ "dll-reference __kbnSharedDeps_npm__"))(105);

/***/ }),

/***/ "./node_modules/vis-data/peer/umd/vis-data.js":
/*!****************************************************!*\
  !*** ./node_modules/vis-data/peer/umd/vis-data.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * vis-data
 * http://visjs.org/
 *
 * Manage unstructured data using DataSet. Add, update, and remove data, and listen for changes in the data.
 *
 * @version 7.1.2
 * @date    2021-01-08T20:37:11.601Z
 *
 * @copyright (c) 2011-2017 Almende B.V, http://almende.com
 * @copyright (c) 2017-2019 visjs contributors, https://github.com/visjs
 *
 * @license
 * vis.js is dual licensed under both
 *
 *   1. The Apache 2.0 License
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *   and
 *
 *   2. The MIT License
 *      http://opensource.org/licenses/MIT
 *
 * vis.js may be distributed under either license.
 */

(function (global, factory) {
	 true ? factory(exports) :
	undefined;
}(this, (function (exports) {
	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn) {
	  var module = { exports: {} };
		return fn(module, module.exports), module.exports;
	}

	var check = function (it) {
	  return it && it.Math == Math && it;
	}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


	var global$1 = // eslint-disable-next-line no-undef
	check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func
	function () {
	  return this;
	}() || Function('return this')();

	var fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var descriptors = !fails(function () {
	  return Object.defineProperty({}, 1, {
	    get: function () {
	      return 7;
	    }
	  })[1] != 7;
	});

	var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

	var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
	  1: 2
	}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable

	var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : nativePropertyIsEnumerable;
	var objectPropertyIsEnumerable = {
	  f: f
	};

	var createPropertyDescriptor = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var toString = {}.toString;

	var classofRaw = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

	var indexedObject = fails(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins
	  return !Object('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
	} : Object;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on " + it);
	  return it;
	};

	var toIndexedObject = function (it) {
	  return indexedObject(requireObjectCoercible(it));
	};

	var isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	// https://tc39.github.io/ecma262/#sec-toprimitive
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string

	var toPrimitive = function (input, PREFERRED_STRING) {
	  if (!isObject(input)) return input;
	  var fn, val;
	  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var hasOwnProperty = {}.hasOwnProperty;

	var has = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var document$1 = global$1.document; // typeof document.createElement is 'object' in old IE

	var EXISTS = isObject(document$1) && isObject(document$1.createElement);

	var documentCreateElement = function (it) {
	  return EXISTS ? document$1.createElement(it) : {};
	};

	var ie8DomDefine = !descriptors && !fails(function () {
	  return Object.defineProperty(documentCreateElement('div'), 'a', {
	    get: function () {
	      return 7;
	    }
	  }).a != 7;
	});

	var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor

	var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject(O);
	  P = toPrimitive(P, true);
	  if (ie8DomDefine) try {
	    return nativeGetOwnPropertyDescriptor(O, P);
	  } catch (error) {
	    /* empty */
	  }
	  if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
	};
	var objectGetOwnPropertyDescriptor = {
	  f: f$1
	};

	var replacement = /#|\.prototype\./;

	var isForced = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
	};

	var normalize = isForced.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced.data = {};
	var NATIVE = isForced.NATIVE = 'N';
	var POLYFILL = isForced.POLYFILL = 'P';
	var isForced_1 = isForced;

	var path = {};

	var aFunction = function (it) {
	  if (typeof it != 'function') {
	    throw TypeError(String(it) + ' is not a function');
	  }

	  return it;
	};

	var functionBindContext = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;

	  switch (length) {
	    case 0:
	      return function () {
	        return fn.call(that);
	      };

	    case 1:
	      return function (a) {
	        return fn.call(that, a);
	      };

	    case 2:
	      return function (a, b) {
	        return fn.call(that, a, b);
	      };

	    case 3:
	      return function (a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }

	  return function ()
	  /* ...args */
	  {
	    return fn.apply(that, arguments);
	  };
	};

	var anObject = function (it) {
	  if (!isObject(it)) {
	    throw TypeError(String(it) + ' is not an object');
	  }

	  return it;
	};

	var nativeDefineProperty = Object.defineProperty; // `Object.defineProperty` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperty

	var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (ie8DomDefine) try {
	    return nativeDefineProperty(O, P, Attributes);
	  } catch (error) {
	    /* empty */
	  }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};
	var objectDefineProperty = {
	  f: f$2
	};

	var createNonEnumerableProperty = descriptors ? function (object, key, value) {
	  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;

	var wrapConstructor = function (NativeConstructor) {
	  var Wrapper = function (a, b, c) {
	    if (this instanceof NativeConstructor) {
	      switch (arguments.length) {
	        case 0:
	          return new NativeConstructor();

	        case 1:
	          return new NativeConstructor(a);

	        case 2:
	          return new NativeConstructor(a, b);
	      }

	      return new NativeConstructor(a, b, c);
	    }

	    return NativeConstructor.apply(this, arguments);
	  };

	  Wrapper.prototype = NativeConstructor.prototype;
	  return Wrapper;
	};
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


	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var PROTO = options.proto;
	  var nativeSource = GLOBAL ? global$1 : STATIC ? global$1[TARGET] : (global$1[TARGET] || {}).prototype;
	  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
	  var targetPrototype = target.prototype;
	  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
	  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

	  for (key in source) {
	    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contains in native

	    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);
	    targetProperty = target[key];
	    if (USE_NATIVE) if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor$1(nativeSource, key);
	      nativeProperty = descriptor && descriptor.value;
	    } else nativeProperty = nativeSource[key]; // export native or implementation

	    sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];
	    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue; // bind timers to global for call from export context

	    if (options.bind && USE_NATIVE) resultProperty = functionBindContext(sourceProperty, global$1); // wrap global constructors for prevent changs in this version
	    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty); // make static versions for prototype methods
	      else if (PROTO && typeof sourceProperty == 'function') resultProperty = functionBindContext(Function.call, sourceProperty); // default case
	        else resultProperty = sourceProperty; // add a flag to not completely full polyfills

	    if (options.sham || sourceProperty && sourceProperty.sham || targetProperty && targetProperty.sham) {
	      createNonEnumerableProperty(resultProperty, 'sham', true);
	    }

	    target[key] = resultProperty;

	    if (PROTO) {
	      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';

	      if (!has(path, VIRTUAL_PROTOTYPE)) {
	        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
	      } // export virtual prototype methods


	      path[VIRTUAL_PROTOTYPE][key] = sourceProperty; // export real prototype methods

	      if (options.real && targetPrototype && !targetPrototype[key]) {
	        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
	      }
	    }
	  }
	};

	// https://tc39.github.io/ecma262/#sec-isarray

	var isArray = Array.isArray || function isArray(arg) {
	  return classofRaw(arg) == 'Array';
	};

	var ceil = Math.ceil;
	var floor = Math.floor; // `ToInteger` abstract operation
	// https://tc39.github.io/ecma262/#sec-tointeger

	var toInteger = function (argument) {
	  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
	};

	var min = Math.min; // `ToLength` abstract operation
	// https://tc39.github.io/ecma262/#sec-tolength

	var toLength = function (argument) {
	  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray


	var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
	  var targetIndex = start;
	  var sourceIndex = 0;
	  var mapFn = mapper ? functionBindContext(mapper, thisArg, 3) : false;
	  var element;

	  while (sourceIndex < sourceLen) {
	    if (sourceIndex in source) {
	      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

	      if (depth > 0 && isArray(element)) {
	        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
	      } else {
	        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
	        target[targetIndex] = element;
	      }

	      targetIndex++;
	    }

	    sourceIndex++;
	  }

	  return targetIndex;
	};

	var flattenIntoArray_1 = flattenIntoArray;

	// https://tc39.github.io/ecma262/#sec-toobject

	var toObject = function (argument) {
	  return Object(requireObjectCoercible(argument));
	};

	var setGlobal = function (key, value) {
	  try {
	    createNonEnumerableProperty(global$1, key, value);
	  } catch (error) {
	    global$1[key] = value;
	  }

	  return value;
	};

	var SHARED = '__core-js_shared__';
	var store = global$1[SHARED] || setGlobal(SHARED, {});
	var sharedStore = store;

	var shared = createCommonjsModule(function (module) {
	  (module.exports = function (key, value) {
	    return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
	  })('versions', []).push({
	    version: '3.7.0',
	    mode:  'pure' ,
	    copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
	  });
	});

	var id = 0;
	var postfix = Math.random();

	var uid = function (key) {
	  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
	};

	var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
	  // Chrome 38 Symbol has incorrect toString conversion
	  // eslint-disable-next-line no-undef
	  return !String(Symbol());
	});

	var useSymbolAsUid = nativeSymbol // eslint-disable-next-line no-undef
	&& !Symbol.sham // eslint-disable-next-line no-undef
	&& typeof Symbol.iterator == 'symbol';

	var WellKnownSymbolsStore = shared('wks');
	var Symbol$1 = global$1.Symbol;
	var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

	var wellKnownSymbol = function (name) {
	  if (!has(WellKnownSymbolsStore, name)) {
	    if (nativeSymbol && has(Symbol$1, name)) WellKnownSymbolsStore[name] = Symbol$1[name];else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
	  }

	  return WellKnownSymbolsStore[name];
	};

	var SPECIES = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
	// https://tc39.github.io/ecma262/#sec-arrayspeciescreate

	var arraySpeciesCreate = function (originalArray, length) {
	  var C;

	  if (isArray(originalArray)) {
	    C = originalArray.constructor; // cross-realm fallback

	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  }

	  return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
	};

	// https://github.com/tc39/proposal-flatMap


	_export({
	  target: 'Array',
	  proto: true
	}, {
	  flatMap: function flatMap(callbackfn
	  /* , thisArg */
	  ) {
	    var O = toObject(this);
	    var sourceLen = toLength(O.length);
	    var A;
	    aFunction(callbackfn);
	    A = arraySpeciesCreate(O, 0);
	    A.length = flattenIntoArray_1(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    return A;
	  }
	});

	var entryVirtual = function (CONSTRUCTOR) {
	  return path[CONSTRUCTOR + 'Prototype'];
	};

	var flatMap = entryVirtual('Array').flatMap;

	var ArrayPrototype = Array.prototype;

	var flatMap_1 = function (it) {
	  var own = it.flatMap;
	  return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.flatMap ? flatMap : own;
	};

	var flatMap$1 = flatMap_1;

	var flatMap$2 = flatMap$1;

	var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation

	var createMethod = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject($this);
	    var self = indexedObject(O);
	    var boundFunction = functionBindContext(callbackfn, that, 3);
	    var length = toLength(self.length);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate;
	    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var value, result;

	    for (; length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);

	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	            case 3:
	              return true;
	            // some

	            case 5:
	              return value;
	            // find

	            case 6:
	              return index;
	            // findIndex

	            case 2:
	              push.call(target, value);
	            // filter
	          } else if (IS_EVERY) return false; // every
	      }
	    }

	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration = {
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

	var aFunction$1 = function (variable) {
	  return typeof variable == 'function' ? variable : undefined;
	};

	var getBuiltIn = function (namespace, method) {
	  return arguments.length < 2 ? aFunction$1(path[namespace]) || aFunction$1(global$1[namespace]) : path[namespace] && path[namespace][method] || global$1[namespace] && global$1[namespace][method];
	};

	var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

	var process = global$1.process;
	var versions = process && process.versions;
	var v8 = versions && versions.v8;
	var match, version;

	if (v8) {
	  match = v8.split('.');
	  version = match[0] + match[1];
	} else if (engineUserAgent) {
	  match = engineUserAgent.match(/Edge\/(\d+)/);

	  if (!match || match[1] >= 74) {
	    match = engineUserAgent.match(/Chrome\/(\d+)/);
	    if (match) version = match[1];
	  }
	}

	var engineV8Version = version && +version;

	var SPECIES$1 = wellKnownSymbol('species');

	var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return engineV8Version >= 51 || !fails(function () {
	    var array = [];
	    var constructor = array.constructor = {};

	    constructor[SPECIES$1] = function () {
	      return {
	        foo: 1
	      };
	    };

	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var defineProperty = Object.defineProperty;
	var cache = {};

	var thrower = function (it) {
	  throw it;
	};

	var arrayMethodUsesToLength = function (METHOD_NAME, options) {
	  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
	  if (!options) options = {};
	  var method = [][METHOD_NAME];
	  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
	  var argument0 = has(options, 0) ? options[0] : thrower;
	  var argument1 = has(options, 1) ? options[1] : undefined;
	  return cache[METHOD_NAME] = !!method && !fails(function () {
	    if (ACCESSORS && !descriptors) return true;
	    var O = {
	      length: -1
	    };
	    if (ACCESSORS) defineProperty(O, 1, {
	      enumerable: true,
	      get: thrower
	    });else O[1] = 1;
	    method.call(O, argument0, argument1);
	  });
	};

	var $map = arrayIteration.map;
	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map'); // FF49- issue

	var USES_TO_LENGTH = arrayMethodUsesToLength('map'); // `Array.prototype.map` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.map
	// with adding support of @@species

	_export({
	  target: 'Array',
	  proto: true,
	  forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
	}, {
	  map: function map(callbackfn
	  /* , thisArg */
	  ) {
	    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var map = entryVirtual('Array').map;

	var ArrayPrototype$1 = Array.prototype;

	var map_1 = function (it) {
	  var own = it.map;
	  return it === ArrayPrototype$1 || it instanceof Array && own === ArrayPrototype$1.map ? map : own;
	};

	var map$1 = map_1;

	var map$2 = map$1;

	var $filter = arrayIteration.filter;
	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('filter'); // Edge 14- issue

	var USES_TO_LENGTH$1 = arrayMethodUsesToLength('filter'); // `Array.prototype.filter` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.filter
	// with adding support of @@species

	_export({
	  target: 'Array',
	  proto: true,
	  forced: !HAS_SPECIES_SUPPORT$1 || !USES_TO_LENGTH$1
	}, {
	  filter: function filter(callbackfn
	  /* , thisArg */
	  ) {
	    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var filter = entryVirtual('Array').filter;

	var ArrayPrototype$2 = Array.prototype;

	var filter_1 = function (it) {
	  var own = it.filter;
	  return it === ArrayPrototype$2 || it instanceof Array && own === ArrayPrototype$2.filter ? filter : own;
	};

	var filter$1 = filter_1;

	var filter$2 = filter$1;

	var createMethod$1 = function (IS_RIGHT) {
	  return function (that, callbackfn, argumentsLength, memo) {
	    aFunction(callbackfn);
	    var O = toObject(that);
	    var self = indexedObject(O);
	    var length = toLength(O.length);
	    var index = IS_RIGHT ? length - 1 : 0;
	    var i = IS_RIGHT ? -1 : 1;
	    if (argumentsLength < 2) while (true) {
	      if (index in self) {
	        memo = self[index];
	        index += i;
	        break;
	      }

	      index += i;

	      if (IS_RIGHT ? index < 0 : length <= index) {
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }

	    for (; IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
	      memo = callbackfn(memo, self[index], index, O);
	    }

	    return memo;
	  };
	};

	var arrayReduce = {
	  // `Array.prototype.reduce` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
	  left: createMethod$1(false),
	  // `Array.prototype.reduceRight` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
	  right: createMethod$1(true)
	};

	var arrayMethodIsStrict = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails(function () {
	    // eslint-disable-next-line no-useless-call,no-throw-literal
	    method.call(null, argument || function () {
	      throw 1;
	    }, 1);
	  });
	};

	var engineIsNode = classofRaw(global$1.process) == 'process';

	var $reduce = arrayReduce.left;
	var STRICT_METHOD = arrayMethodIsStrict('reduce');
	var USES_TO_LENGTH$2 = arrayMethodUsesToLength('reduce', {
	  1: 0
	}); // Chrome 80-82 has a critical bug
	// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

	var CHROME_BUG = !engineIsNode && engineV8Version > 79 && engineV8Version < 83; // `Array.prototype.reduce` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.reduce

	_export({
	  target: 'Array',
	  proto: true,
	  forced: !STRICT_METHOD || !USES_TO_LENGTH$2 || CHROME_BUG
	}, {
	  reduce: function reduce(callbackfn
	  /* , initialValue */
	  ) {
	    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var reduce = entryVirtual('Array').reduce;

	var ArrayPrototype$3 = Array.prototype;

	var reduce_1 = function (it) {
	  var own = it.reduce;
	  return it === ArrayPrototype$3 || it instanceof Array && own === ArrayPrototype$3.reduce ? reduce : own;
	};

	var reduce$1 = reduce_1;

	var reduce$2 = reduce$1;

	var slice = [].slice;
	var factories = {};

	var construct = function (C, argsLength, args) {
	  if (!(argsLength in factories)) {
	    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']'; // eslint-disable-next-line no-new-func


	    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
	  }

	  return factories[argsLength](C, args);
	}; // `Function.prototype.bind` method implementation
	// https://tc39.github.io/ecma262/#sec-function.prototype.bind


	var functionBind = Function.bind || function bind(that
	/* , ...args */
	) {
	  var fn = aFunction(this);
	  var partArgs = slice.call(arguments, 1);

	  var boundFunction = function bound()
	  /* args... */
	  {
	    var args = partArgs.concat(slice.call(arguments));
	    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
	  };

	  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
	  return boundFunction;
	};

	// https://tc39.github.io/ecma262/#sec-function.prototype.bind

	_export({
	  target: 'Function',
	  proto: true
	}, {
	  bind: functionBind
	});

	var bind = entryVirtual('Function').bind;

	var FunctionPrototype = Function.prototype;

	var bind_1 = function (it) {
	  var own = it.bind;
	  return it === FunctionPrototype || it instanceof Function && own === FunctionPrototype.bind ? bind : own;
	};

	var bind$1 = bind_1;

	var bind$2 = bind$1;

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var classCallCheck = _classCallCheck;

	// https://tc39.github.io/ecma262/#sec-object.defineproperty

	_export({
	  target: 'Object',
	  stat: true,
	  forced: !descriptors,
	  sham: !descriptors
	}, {
	  defineProperty: objectDefineProperty.f
	});

	var defineProperty_1 = createCommonjsModule(function (module) {
	  var Object = path.Object;

	  var defineProperty = module.exports = function defineProperty(it, key, desc) {
	    return Object.defineProperty(it, key, desc);
	  };

	  if (Object.defineProperty.sham) defineProperty.sham = true;
	});

	var defineProperty$1 = defineProperty_1;

	var defineProperty$2 = defineProperty$1;

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;

	    defineProperty$2(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	var createClass = _createClass;

	/**
	 * Create new data pipe.
	 *
	 * @param from - The source data set or data view.
	 *
	 * @remarks
	 * Example usage:
	 * ```typescript
	 * interface AppItem {
	 *   whoami: string;
	 *   appData: unknown;
	 *   visData: VisItem;
	 * }
	 * interface VisItem {
	 *   id: number;
	 *   label: string;
	 *   color: string;
	 *   x: number;
	 *   y: number;
	 * }
	 *
	 * const ds1 = new DataSet<AppItem, "whoami">([], { fieldId: "whoami" });
	 * const ds2 = new DataSet<VisItem, "id">();
	 *
	 * const pipe = createNewDataPipeFrom(ds1)
	 *   .filter((item): boolean => item.enabled === true)
	 *   .map<VisItem, "id">((item): VisItem => item.visData)
	 *   .to(ds2);
	 *
	 * pipe.start();
	 * ```
	 *
	 * @returns A factory whose methods can be used to configure the pipe.
	 */
	function createNewDataPipeFrom(from) {
	  return new DataPipeUnderConstruction(from);
	}
	/**
	 * Internal implementation of the pipe. This should be accessible only through
	 * `createNewDataPipeFrom` from the outside.
	 *
	 * @typeParam SI - Source item type.
	 * @typeParam SP - Source item type's id property name.
	 * @typeParam TI - Target item type.
	 * @typeParam TP - Target item type's id property name.
	 */

	var SimpleDataPipe = /*#__PURE__*/function () {
	  /**
	   * Create a new data pipe.
	   *
	   * @param _source - The data set or data view that will be observed.
	   * @param _transformers - An array of transforming functions to be used to
	   * filter or transform the items in the pipe.
	   * @param _target - The data set or data view that will receive the items.
	   */
	  function SimpleDataPipe(_source, _transformers, _target) {
	    var _context, _context2, _context3;

	    classCallCheck(this, SimpleDataPipe);

	    this._source = _source;
	    this._transformers = _transformers;
	    this._target = _target;
	    /**
	     * Bound listeners for use with `DataInterface['on' | 'off']`.
	     */

	    this._listeners = {
	      add: bind$2(_context = this._add).call(_context, this),
	      remove: bind$2(_context2 = this._remove).call(_context2, this),
	      update: bind$2(_context3 = this._update).call(_context3, this)
	    };
	  }
	  /** @inheritDoc */


	  createClass(SimpleDataPipe, [{
	    key: "all",
	    value: function all() {
	      this._target.update(this._transformItems(this._source.get()));

	      return this;
	    }
	    /** @inheritDoc */

	  }, {
	    key: "start",
	    value: function start() {
	      this._source.on("add", this._listeners.add);

	      this._source.on("remove", this._listeners.remove);

	      this._source.on("update", this._listeners.update);

	      return this;
	    }
	    /** @inheritDoc */

	  }, {
	    key: "stop",
	    value: function stop() {
	      this._source.off("add", this._listeners.add);

	      this._source.off("remove", this._listeners.remove);

	      this._source.off("update", this._listeners.update);

	      return this;
	    }
	    /**
	     * Apply the transformers to the items.
	     *
	     * @param items - The items to be transformed.
	     *
	     * @returns The transformed items.
	     */

	  }, {
	    key: "_transformItems",
	    value: function _transformItems(items) {
	      var _context4;

	      return reduce$2(_context4 = this._transformers).call(_context4, function (items, transform) {
	        return transform(items);
	      }, items);
	    }
	    /**
	     * Handle an add event.
	     *
	     * @param _name - Ignored.
	     * @param payload - The payload containing the ids of the added items.
	     */

	  }, {
	    key: "_add",
	    value: function _add(_name, payload) {
	      if (payload == null) {
	        return;
	      }

	      this._target.add(this._transformItems(this._source.get(payload.items)));
	    }
	    /**
	     * Handle an update event.
	     *
	     * @param _name - Ignored.
	     * @param payload - The payload containing the ids of the updated items.
	     */

	  }, {
	    key: "_update",
	    value: function _update(_name, payload) {
	      if (payload == null) {
	        return;
	      }

	      this._target.update(this._transformItems(this._source.get(payload.items)));
	    }
	    /**
	     * Handle a remove event.
	     *
	     * @param _name - Ignored.
	     * @param payload - The payload containing the data of the removed items.
	     */

	  }, {
	    key: "_remove",
	    value: function _remove(_name, payload) {
	      if (payload == null) {
	        return;
	      }

	      this._target.remove(this._transformItems(payload.oldData));
	    }
	  }]);

	  return SimpleDataPipe;
	}();
	/**
	 * Internal implementation of the pipe factory. This should be accessible
	 * only through `createNewDataPipeFrom` from the outside.
	 *
	 * @typeParam TI - Target item type.
	 * @typeParam TP - Target item type's id property name.
	 */


	var DataPipeUnderConstruction = /*#__PURE__*/function () {
	  /**
	   * Create a new data pipe factory. This is an internal constructor that
	   * should never be called from outside of this file.
	   *
	   * @param _source - The source data set or data view for this pipe.
	   */
	  function DataPipeUnderConstruction(_source) {
	    classCallCheck(this, DataPipeUnderConstruction);

	    this._source = _source;
	    /**
	     * Array transformers used to transform items within the pipe. This is typed
	     * as any for the sake of simplicity.
	     */

	    this._transformers = [];
	  }
	  /**
	   * Filter the items.
	   *
	   * @param callback - A filtering function that returns true if given item
	   * should be piped and false if not.
	   *
	   * @returns This factory for further configuration.
	   */


	  createClass(DataPipeUnderConstruction, [{
	    key: "filter",
	    value: function filter(callback) {
	      this._transformers.push(function (input) {
	        return filter$2(input).call(input, callback);
	      });

	      return this;
	    }
	    /**
	     * Map each source item to a new type.
	     *
	     * @param callback - A mapping function that takes a source item and returns
	     * corresponding mapped item.
	     *
	     * @typeParam TI - Target item type.
	     * @typeParam TP - Target item type's id property name.
	     *
	     * @returns This factory for further configuration.
	     */

	  }, {
	    key: "map",
	    value: function map(callback) {
	      this._transformers.push(function (input) {
	        return map$2(input).call(input, callback);
	      });

	      return this;
	    }
	    /**
	     * Map each source item to zero or more items of a new type.
	     *
	     * @param callback - A mapping function that takes a source item and returns
	     * an array of corresponding mapped items.
	     *
	     * @typeParam TI - Target item type.
	     * @typeParam TP - Target item type's id property name.
	     *
	     * @returns This factory for further configuration.
	     */

	  }, {
	    key: "flatMap",
	    value: function flatMap(callback) {
	      this._transformers.push(function (input) {
	        return flatMap$2(input).call(input, callback);
	      });

	      return this;
	    }
	    /**
	     * Connect this pipe to given data set.
	     *
	     * @param target - The data set that will receive the items from this pipe.
	     *
	     * @returns The pipe connected between given data sets and performing
	     * configured transformation on the processed items.
	     */

	  }, {
	    key: "to",
	    value: function to(target) {
	      return new SimpleDataPipe(this._source, this._transformers, target);
	    }
	  }]);

	  return DataPipeUnderConstruction;
	}();

	var defineProperty$3 = defineProperty_1;

	var defineProperty$4 = defineProperty$3;

	var max = Math.max;
	var min$1 = Math.min; // Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

	var toAbsoluteIndex = function (index, length) {
	  var integer = toInteger(index);
	  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
	};

	var createMethod$2 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value; // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare

	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++]; // eslint-disable-next-line no-self-compare

	      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
	    } else for (; length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    }
	    return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
	  includes: createMethod$2(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod$2(false)
	};

	var hiddenKeys = {};

	var indexOf = arrayIncludes.indexOf;

	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject(object);
	  var i = 0;
	  var result = [];
	  var key;

	  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key); // Don't enum bug & hidden keys


	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~indexOf(result, key) || result.push(key);
	  }

	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

	// https://tc39.github.io/ecma262/#sec-object.keys

	var objectKeys = Object.keys || function keys(O) {
	  return objectKeysInternal(O, enumBugKeys);
	};

	// https://tc39.github.io/ecma262/#sec-object.defineproperties

	var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = objectKeys(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;

	  while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);

	  return O;
	};

	// https://tc39.github.io/ecma262/#sec-object.defineproperties

	_export({
	  target: 'Object',
	  stat: true,
	  forced: !descriptors,
	  sham: !descriptors
	}, {
	  defineProperties: objectDefineProperties
	});

	var defineProperties_1 = createCommonjsModule(function (module) {
	  var Object = path.Object;

	  var defineProperties = module.exports = function defineProperties(T, D) {
	    return Object.defineProperties(T, D);
	  };

	  if (Object.defineProperties.sham) defineProperties.sham = true;
	});

	var defineProperties = defineProperties_1;

	var defineProperties$1 = defineProperties;

	var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertynames

	var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return objectKeysInternal(O, hiddenKeys$1);
	};

	var objectGetOwnPropertyNames = {
	  f: f$3
	};

	var f$4 = Object.getOwnPropertySymbols;
	var objectGetOwnPropertySymbols = {
	  f: f$4
	};

	var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = objectGetOwnPropertyNames.f(anObject(it));
	  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
	};

	var createProperty = function (object, key, value) {
	  var propertyKey = toPrimitive(key);
	  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
	};

	// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors

	_export({
	  target: 'Object',
	  stat: true,
	  sham: !descriptors
	}, {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = toIndexedObject(object);
	    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	    var keys = ownKeys(O);
	    var result = {};
	    var index = 0;
	    var key, descriptor;

	    while (keys.length > index) {
	      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
	      if (descriptor !== undefined) createProperty(result, key, descriptor);
	    }

	    return result;
	  }
	});

	var getOwnPropertyDescriptors = path.Object.getOwnPropertyDescriptors;

	var getOwnPropertyDescriptors$1 = getOwnPropertyDescriptors;

	var getOwnPropertyDescriptors$2 = getOwnPropertyDescriptors$1;

	var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
	var FAILS_ON_PRIMITIVES = fails(function () {
	  nativeGetOwnPropertyDescriptor$1(1);
	});
	var FORCED = !descriptors || FAILS_ON_PRIMITIVES; // `Object.getOwnPropertyDescriptor` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor

	_export({
	  target: 'Object',
	  stat: true,
	  forced: FORCED,
	  sham: !descriptors
	}, {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
	    return nativeGetOwnPropertyDescriptor$1(toIndexedObject(it), key);
	  }
	});

	var getOwnPropertyDescriptor_1 = createCommonjsModule(function (module) {
	  var Object = path.Object;

	  var getOwnPropertyDescriptor = module.exports = function getOwnPropertyDescriptor(it, key) {
	    return Object.getOwnPropertyDescriptor(it, key);
	  };

	  if (Object.getOwnPropertyDescriptor.sham) getOwnPropertyDescriptor.sham = true;
	});

	var getOwnPropertyDescriptor$2 = getOwnPropertyDescriptor_1;

	var getOwnPropertyDescriptor$3 = getOwnPropertyDescriptor$2;

	var html = getBuiltIn('document', 'documentElement');

	var keys = shared('keys');

	var sharedKey = function (key) {
	  return keys[key] || (keys[key] = uid(key));
	};

	var GT = '>';
	var LT = '<';
	var PROTOTYPE = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO = sharedKey('IE_PROTO');

	var EmptyConstructor = function () {
	  /* empty */
	};

	var scriptTag = function (content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


	var NullProtoObjectViaActiveX = function (activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  activeXDocument = null; // avoid memory leak

	  return temp;
	}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


	var NullProtoObjectViaIFrame = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	}; // Check for document.domain and active x support
	// No need to use active x approach when document.domain is not set
	// see https://github.com/es-shims/es5-shim/issues/150
	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	// avoid IE GC bug


	var activeXDocument;

	var NullProtoObject = function () {
	  try {
	    /* global ActiveXObject */
	    activeXDocument = document.domain && new ActiveXObject('htmlfile');
	  } catch (error) {
	    /* ignore */
	  }

	  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
	  var length = enumBugKeys.length;

	  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];

	  return NullProtoObject();
	};

	hiddenKeys[IE_PROTO] = true; // `Object.create` method
	// https://tc39.github.io/ecma262/#sec-object.create

	var objectCreate = Object.create || function create(O, Properties) {
	  var result;

	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE] = anObject(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

	    result[IE_PROTO] = O;
	  } else result = NullProtoObject();

	  return Properties === undefined ? result : objectDefineProperties(result, Properties);
	};

	var nativeGetOwnPropertyNames = objectGetOwnPropertyNames.f;
	var toString$1 = {}.toString;
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return nativeGetOwnPropertyNames(it);
	  } catch (error) {
	    return windowNames.slice();
	  }
	}; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


	var f$5 = function getOwnPropertyNames(it) {
	  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : nativeGetOwnPropertyNames(toIndexedObject(it));
	};

	var objectGetOwnPropertyNamesExternal = {
	  f: f$5
	};

	var redefine = function (target, key, value, options) {
	  if (options && options.enumerable) target[key] = value;else createNonEnumerableProperty(target, key, value);
	};

	var f$6 = wellKnownSymbol;
	var wellKnownSymbolWrapped = {
	  f: f$6
	};

	var defineProperty$5 = objectDefineProperty.f;

	var defineWellKnownSymbol = function (NAME) {
	  var Symbol = path.Symbol || (path.Symbol = {});
	  if (!has(Symbol, NAME)) defineProperty$5(Symbol, NAME, {
	    value: wellKnownSymbolWrapped.f(NAME)
	  });
	};

	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
	var test = {};
	test[TO_STRING_TAG] = 'z';
	var toStringTagSupport = String(test) === '[object z]';

	var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag'); // ES3 wrong here

	var CORRECT_ARGUMENTS = classofRaw(function () {
	  return arguments;
	}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) {
	    /* empty */
	  }
	}; // getting tag from ES6+ `Object.prototype.toString`


	var classof = toStringTagSupport ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
	  : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag // builtinTag case
	  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
	  : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
	};

	// https://tc39.github.io/ecma262/#sec-object.prototype.tostring


	var objectToString = toStringTagSupport ? {}.toString : function toString() {
	  return '[object ' + classof(this) + ']';
	};

	var defineProperty$6 = objectDefineProperty.f;
	var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');

	var setToStringTag = function (it, TAG, STATIC, SET_METHOD) {
	  if (it) {
	    var target = STATIC ? it : it.prototype;

	    if (!has(target, TO_STRING_TAG$2)) {
	      defineProperty$6(target, TO_STRING_TAG$2, {
	        configurable: true,
	        value: TAG
	      });
	    }

	    if (SET_METHOD && !toStringTagSupport) {
	      createNonEnumerableProperty(target, 'toString', objectToString);
	    }
	  }
	};

	var functionToString = Function.toString; // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper

	if (typeof sharedStore.inspectSource != 'function') {
	  sharedStore.inspectSource = function (it) {
	    return functionToString.call(it);
	  };
	}

	var inspectSource = sharedStore.inspectSource;

	var WeakMap = global$1.WeakMap;
	var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

	var WeakMap$1 = global$1.WeakMap;
	var set, get, has$1;

	var enforce = function (it) {
	  return has$1(it) ? get(it) : set(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;

	    if (!isObject(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
	    }

	    return state;
	  };
	};

	if (nativeWeakMap) {
	  var store$1 = sharedStore.state || (sharedStore.state = new WeakMap$1());
	  var wmget = store$1.get;
	  var wmhas = store$1.has;
	  var wmset = store$1.set;

	  set = function (it, metadata) {
	    metadata.facade = it;
	    wmset.call(store$1, it, metadata);
	    return metadata;
	  };

	  get = function (it) {
	    return wmget.call(store$1, it) || {};
	  };

	  has$1 = function (it) {
	    return wmhas.call(store$1, it);
	  };
	} else {
	  var STATE = sharedKey('state');
	  hiddenKeys[STATE] = true;

	  set = function (it, metadata) {
	    metadata.facade = it;
	    createNonEnumerableProperty(it, STATE, metadata);
	    return metadata;
	  };

	  get = function (it) {
	    return has(it, STATE) ? it[STATE] : {};
	  };

	  has$1 = function (it) {
	    return has(it, STATE);
	  };
	}

	var internalState = {
	  set: set,
	  get: get,
	  has: has$1,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var $forEach = arrayIteration.forEach;
	var HIDDEN = sharedKey('hidden');
	var SYMBOL = 'Symbol';
	var PROTOTYPE$1 = 'prototype';
	var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
	var setInternalState = internalState.set;
	var getInternalState = internalState.getterFor(SYMBOL);
	var ObjectPrototype = Object[PROTOTYPE$1];
	var $Symbol = global$1.Symbol;
	var $stringify = getBuiltIn('JSON', 'stringify');
	var nativeGetOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
	var nativeDefineProperty$1 = objectDefineProperty.f;
	var nativeGetOwnPropertyNames$1 = objectGetOwnPropertyNamesExternal.f;
	var nativePropertyIsEnumerable$1 = objectPropertyIsEnumerable.f;
	var AllSymbols = shared('symbols');
	var ObjectPrototypeSymbols = shared('op-symbols');
	var StringToSymbolRegistry = shared('string-to-symbol-registry');
	var SymbolToStringRegistry = shared('symbol-to-string-registry');
	var WellKnownSymbolsStore$1 = shared('wks');
	var QObject = global$1.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

	var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

	var setSymbolDescriptor = descriptors && fails(function () {
	  return objectCreate(nativeDefineProperty$1({}, 'a', {
	    get: function () {
	      return nativeDefineProperty$1(this, 'a', {
	        value: 7
	      }).a;
	    }
	  })).a != 7;
	}) ? function (O, P, Attributes) {
	  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$2(ObjectPrototype, P);
	  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
	  nativeDefineProperty$1(O, P, Attributes);

	  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
	    nativeDefineProperty$1(ObjectPrototype, P, ObjectPrototypeDescriptor);
	  }
	} : nativeDefineProperty$1;

	var wrap = function (tag, description) {
	  var symbol = AllSymbols[tag] = objectCreate($Symbol[PROTOTYPE$1]);
	  setInternalState(symbol, {
	    type: SYMBOL,
	    tag: tag,
	    description: description
	  });
	  if (!descriptors) symbol.description = description;
	  return symbol;
	};

	var isSymbol = useSymbolAsUid ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return Object(it) instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(O, P, Attributes) {
	  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
	  anObject(O);
	  var key = toPrimitive(P, true);
	  anObject(Attributes);

	  if (has(AllSymbols, key)) {
	    if (!Attributes.enumerable) {
	      if (!has(O, HIDDEN)) nativeDefineProperty$1(O, HIDDEN, createPropertyDescriptor(1, {}));
	      O[HIDDEN][key] = true;
	    } else {
	      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
	      Attributes = objectCreate(Attributes, {
	        enumerable: createPropertyDescriptor(0, false)
	      });
	    }

	    return setSymbolDescriptor(O, key, Attributes);
	  }

	  return nativeDefineProperty$1(O, key, Attributes);
	};

	var $defineProperties = function defineProperties(O, Properties) {
	  anObject(O);
	  var properties = toIndexedObject(Properties);
	  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
	  $forEach(keys, function (key) {
	    if (!descriptors || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
	  });
	  return O;
	};

	var $create = function create(O, Properties) {
	  return Properties === undefined ? objectCreate(O) : $defineProperties(objectCreate(O), Properties);
	};

	var $propertyIsEnumerable = function propertyIsEnumerable(V) {
	  var P = toPrimitive(V, true);
	  var enumerable = nativePropertyIsEnumerable$1.call(this, P);
	  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
	  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
	};

	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
	  var it = toIndexedObject(O);
	  var key = toPrimitive(P, true);
	  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
	  var descriptor = nativeGetOwnPropertyDescriptor$2(it, key);

	  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
	    descriptor.enumerable = true;
	  }

	  return descriptor;
	};

	var $getOwnPropertyNames = function getOwnPropertyNames(O) {
	  var names = nativeGetOwnPropertyNames$1(toIndexedObject(O));
	  var result = [];
	  $forEach(names, function (key) {
	    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
	  });
	  return result;
	};

	var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
	  var names = nativeGetOwnPropertyNames$1(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
	  var result = [];
	  $forEach(names, function (key) {
	    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
	      result.push(AllSymbols[key]);
	    }
	  });
	  return result;
	}; // `Symbol` constructor
	// https://tc39.github.io/ecma262/#sec-symbol-constructor


	if (!nativeSymbol) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
	    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
	    var tag = uid(description);

	    var setter = function (value) {
	      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
	    };

	    if (descriptors && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, {
	      configurable: true,
	      set: setter
	    });
	    return wrap(tag, description);
	  };

	  redefine($Symbol[PROTOTYPE$1], 'toString', function toString() {
	    return getInternalState(this).tag;
	  });
	  redefine($Symbol, 'withoutSetter', function (description) {
	    return wrap(uid(description), description);
	  });
	  objectPropertyIsEnumerable.f = $propertyIsEnumerable;
	  objectDefineProperty.f = $defineProperty;
	  objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor;
	  objectGetOwnPropertyNames.f = objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames;
	  objectGetOwnPropertySymbols.f = $getOwnPropertySymbols;

	  wellKnownSymbolWrapped.f = function (name) {
	    return wrap(wellKnownSymbol(name), name);
	  };

	  if (descriptors) {
	    // https://github.com/tc39/proposal-Symbol-description
	    nativeDefineProperty$1($Symbol[PROTOTYPE$1], 'description', {
	      configurable: true,
	      get: function description() {
	        return getInternalState(this).description;
	      }
	    });
	  }
	}

	_export({
	  global: true,
	  wrap: true,
	  forced: !nativeSymbol,
	  sham: !nativeSymbol
	}, {
	  Symbol: $Symbol
	});
	$forEach(objectKeys(WellKnownSymbolsStore$1), function (name) {
	  defineWellKnownSymbol(name);
	});
	_export({
	  target: SYMBOL,
	  stat: true,
	  forced: !nativeSymbol
	}, {
	  // `Symbol.for` method
	  // https://tc39.github.io/ecma262/#sec-symbol.for
	  'for': function (key) {
	    var string = String(key);
	    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
	    var symbol = $Symbol(string);
	    StringToSymbolRegistry[string] = symbol;
	    SymbolToStringRegistry[symbol] = string;
	    return symbol;
	  },
	  // `Symbol.keyFor` method
	  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
	    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
	  },
	  useSetter: function () {
	    USE_SETTER = true;
	  },
	  useSimple: function () {
	    USE_SETTER = false;
	  }
	});
	_export({
	  target: 'Object',
	  stat: true,
	  forced: !nativeSymbol,
	  sham: !descriptors
	}, {
	  // `Object.create` method
	  // https://tc39.github.io/ecma262/#sec-object.create
	  create: $create,
	  // `Object.defineProperty` method
	  // https://tc39.github.io/ecma262/#sec-object.defineproperty
	  defineProperty: $defineProperty,
	  // `Object.defineProperties` method
	  // https://tc39.github.io/ecma262/#sec-object.defineproperties
	  defineProperties: $defineProperties,
	  // `Object.getOwnPropertyDescriptor` method
	  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
	});
	_export({
	  target: 'Object',
	  stat: true,
	  forced: !nativeSymbol
	}, {
	  // `Object.getOwnPropertyNames` method
	  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // `Object.getOwnPropertySymbols` method
	  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
	  getOwnPropertySymbols: $getOwnPropertySymbols
	}); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443

	_export({
	  target: 'Object',
	  stat: true,
	  forced: fails(function () {
	    objectGetOwnPropertySymbols.f(1);
	  })
	}, {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    return objectGetOwnPropertySymbols.f(toObject(it));
	  }
	}); // `JSON.stringify` method behavior with symbols
	// https://tc39.github.io/ecma262/#sec-json.stringify

	if ($stringify) {
	  var FORCED_JSON_STRINGIFY = !nativeSymbol || fails(function () {
	    var symbol = $Symbol(); // MS Edge converts symbol values to JSON as {}

	    return $stringify([symbol]) != '[null]' // WebKit converts symbol values to JSON as null
	    || $stringify({
	      a: symbol
	    }) != '{}' // V8 throws on boxed symbols
	    || $stringify(Object(symbol)) != '{}';
	  });
	  _export({
	    target: 'JSON',
	    stat: true,
	    forced: FORCED_JSON_STRINGIFY
	  }, {
	    // eslint-disable-next-line no-unused-vars
	    stringify: function stringify(it, replacer, space) {
	      var args = [it];
	      var index = 1;
	      var $replacer;

	      while (arguments.length > index) args.push(arguments[index++]);

	      $replacer = replacer;
	      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

	      if (!isArray(replacer)) replacer = function (key, value) {
	        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	        if (!isSymbol(value)) return value;
	      };
	      args[1] = replacer;
	      return $stringify.apply(null, args);
	    }
	  });
	} // `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive


	if (!$Symbol[PROTOTYPE$1][TO_PRIMITIVE]) {
	  createNonEnumerableProperty($Symbol[PROTOTYPE$1], TO_PRIMITIVE, $Symbol[PROTOTYPE$1].valueOf);
	} // `Symbol.prototype[@@toStringTag]` property
	// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag


	setToStringTag($Symbol, SYMBOL);
	hiddenKeys[HIDDEN] = true;

	var getOwnPropertySymbols = path.Object.getOwnPropertySymbols;

	var getOwnPropertySymbols$1 = getOwnPropertySymbols;

	var getOwnPropertySymbols$2 = getOwnPropertySymbols$1;

	var iterators = {};

	var correctPrototypeGetter = !fails(function () {
	  function F() {
	    /* empty */
	  }

	  F.prototype.constructor = null;
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var IE_PROTO$1 = sharedKey('IE_PROTO');
	var ObjectPrototype$1 = Object.prototype; // `Object.getPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.getprototypeof

	var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO$1)) return O[IE_PROTO$1];

	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }

	  return O instanceof Object ? ObjectPrototype$1 : null;
	};

	var ITERATOR = wellKnownSymbol('iterator');
	var BUGGY_SAFARI_ITERATORS = false;
	// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object


	var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

	if ([].keys) {
	  arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;else {
	    PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
	  }
	}

	if (IteratorPrototype == undefined) IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
	};

	var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;

	var returnThis = function () {
	  return this;
	};

	var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, {
	    next: createPropertyDescriptor(1, next)
	  });
	  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
	  iterators[TO_STRING_TAG] = returnThis;
	  return IteratorConstructor;
	};

	var aPossiblePrototype = function (it) {
	  if (!isObject(it) && it !== null) {
	    throw TypeError("Can't set " + String(it) + ' as a prototype');
	  }

	  return it;
	};

	// https://tc39.github.io/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.

	/* eslint-disable no-proto */

	var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;

	  try {
	    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
	    setter.call(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) {
	    /* empty */
	  }

	  return function setPrototypeOf(O, proto) {
	    anObject(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$1 = wellKnownSymbol('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis$1 = function () {
	  return this;
	};

	var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);

	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];

	    switch (KIND) {
	      case KEYS:
	        return function keys() {
	          return new IteratorConstructor(this, KIND);
	        };

	      case VALUES:
	        return function values() {
	          return new IteratorConstructor(this, KIND);
	        };

	      case ENTRIES:
	        return function entries() {
	          return new IteratorConstructor(this, KIND);
	        };
	    }

	    return function () {
	      return new IteratorConstructor(this);
	    };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR$1] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY; // fix native

	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));

	    if (IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next) {


	      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
	      iterators[TO_STRING_TAG] = returnThis$1;
	    }
	  } // fix Array#{values, @@iterator}.name in V8 / FF


	  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    INCORRECT_VALUES_NAME = true;

	    defaultIterator = function values() {
	      return nativeIterator.call(this);
	    };
	  } // define iterator


	  if (( FORCED) && IterablePrototype[ITERATOR$1] !== defaultIterator) {
	    createNonEnumerableProperty(IterablePrototype, ITERATOR$1, defaultIterator);
	  }

	  iterators[NAME] = defaultIterator; // export additional methods

	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        redefine(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else _export({
	      target: NAME,
	      proto: true,
	      forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME
	    }, methods);
	  }

	  return methods;
	};

	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState$1 = internalState.set;
	var getInternalState$1 = internalState.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.entries
	// `Array.prototype.keys` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.keys
	// `Array.prototype.values` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.values
	// `Array.prototype[@@iterator]` method
	// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
	// `CreateArrayIterator` internal method
	// https://tc39.github.io/ecma262/#sec-createarrayiterator

	var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
	  setInternalState$1(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject(iterated),
	    // target
	    index: 0,
	    // next index
	    kind: kind // kind

	  }); // `%ArrayIteratorPrototype%.next` method
	  // https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState$1(this);
	  var target = state.target;
	  var kind = state.kind;
	  var index = state.index++;

	  if (!target || index >= target.length) {
	    state.target = undefined;
	    return {
	      value: undefined,
	      done: true
	    };
	  }

	  if (kind == 'keys') return {
	    value: index,
	    done: false
	  };
	  if (kind == 'values') return {
	    value: target[index],
	    done: false
	  };
	  return {
	    value: [index, target[index]],
	    done: false
	  };
	}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
	// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
	// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject

	iterators.Arguments = iterators.Array; // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

	// iterable DOM collections
	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
	var domIterables = {
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

	var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');

	for (var COLLECTION_NAME in domIterables) {
	  var Collection = global$1[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;

	  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG$3) {
	    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG$3, COLLECTION_NAME);
	  }

	  iterators[COLLECTION_NAME] = iterators.Array;
	}

	var createMethod$3 = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = String(requireObjectCoercible($this));
	    var position = toInteger(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = S.charCodeAt(position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	var stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod$3(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod$3(true)
	};

	var charAt = stringMultibyte.charAt;
	var STRING_ITERATOR = 'String Iterator';
	var setInternalState$2 = internalState.set;
	var getInternalState$2 = internalState.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
	// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator

	defineIterator(String, 'String', function (iterated) {
	  setInternalState$2(this, {
	    type: STRING_ITERATOR,
	    string: String(iterated),
	    index: 0
	  }); // `%StringIteratorPrototype%.next` method
	  // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
	}, function next() {
	  var state = getInternalState$2(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return {
	    value: undefined,
	    done: true
	  };
	  point = charAt(string, index);
	  state.index += point.length;
	  return {
	    value: point,
	    done: false
	  };
	});

	var ITERATOR$2 = wellKnownSymbol('iterator');

	var getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR$2] || it['@@iterator'] || iterators[classof(it)];
	};

	var getIterator = function (it) {
	  var iteratorMethod = getIteratorMethod(it);

	  if (typeof iteratorMethod != 'function') {
	    throw TypeError(String(it) + ' is not iterable');
	  }

	  return anObject(iteratorMethod.call(it));
	};

	var getIterator_1 = getIterator;

	var getIterator$1 = getIterator_1;

	var getIteratorMethod_1 = getIteratorMethod;

	var getIteratorMethod$1 = getIteratorMethod_1;

	var iteratorClose = function (iterator) {
	  var returnMethod = iterator['return'];

	  if (returnMethod !== undefined) {
	    return anObject(returnMethod.call(iterator)).value;
	  }
	};

	var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
	  try {
	    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
	  } catch (error) {
	    iteratorClose(iterator);
	    throw error;
	  }
	};

	var ITERATOR$3 = wellKnownSymbol('iterator');
	var ArrayPrototype$4 = Array.prototype; // check on default Array iterator

	var isArrayIteratorMethod = function (it) {
	  return it !== undefined && (iterators.Array === it || ArrayPrototype$4[ITERATOR$3] === it);
	};

	// https://tc39.github.io/ecma262/#sec-array.from


	var arrayFrom = function from(arrayLike
	/* , mapfn = undefined, thisArg = undefined */
	) {
	  var O = toObject(arrayLike);
	  var C = typeof this == 'function' ? this : Array;
	  var argumentsLength = arguments.length;
	  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
	  var mapping = mapfn !== undefined;
	  var iteratorMethod = getIteratorMethod(O);
	  var index = 0;
	  var length, result, step, iterator, next, value;
	  if (mapping) mapfn = functionBindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2); // if the target is not iterable or it's an array with the default iterator - use a simple case

	  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
	    iterator = iteratorMethod.call(O);
	    next = iterator.next;
	    result = new C();

	    for (; !(step = next.call(iterator)).done; index++) {
	      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
	      createProperty(result, index, value);
	    }
	  } else {
	    length = toLength(O.length);
	    result = new C(length);

	    for (; length > index; index++) {
	      value = mapping ? mapfn(O[index], index) : O[index];
	      createProperty(result, index, value);
	    }
	  }

	  result.length = index;
	  return result;
	};

	var ITERATOR$4 = wellKnownSymbol('iterator');
	var SAFE_CLOSING = false;

	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function () {
	      return {
	        done: !!called++
	      };
	    },
	    'return': function () {
	      SAFE_CLOSING = true;
	    }
	  };

	  iteratorWithReturn[ITERATOR$4] = function () {
	    return this;
	  }; // eslint-disable-next-line no-throw-literal


	  Array.from(iteratorWithReturn, function () {
	    throw 2;
	  });
	} catch (error) {
	  /* empty */
	}

	var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
	  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  var ITERATION_SUPPORT = false;

	  try {
	    var object = {};

	    object[ITERATOR$4] = function () {
	      return {
	        next: function () {
	          return {
	            done: ITERATION_SUPPORT = true
	          };
	        }
	      };
	    };

	    exec(object);
	  } catch (error) {
	    /* empty */
	  }

	  return ITERATION_SUPPORT;
	};

	var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
	  Array.from(iterable);
	}); // `Array.from` method
	// https://tc39.github.io/ecma262/#sec-array.from

	_export({
	  target: 'Array',
	  stat: true,
	  forced: INCORRECT_ITERATION
	}, {
	  from: arrayFrom
	});

	var from = path.Array.from;

	var from$1 = from;

	var from$2 = from$1;

	// https://tc39.github.io/ecma262/#sec-array.prototype.fill


	var arrayFill = function fill(value
	/* , start = 0, end = @length */
	) {
	  var O = toObject(this);
	  var length = toLength(O.length);
	  var argumentsLength = arguments.length;
	  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
	  var end = argumentsLength > 2 ? arguments[2] : undefined;
	  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

	  while (endPos > index) O[index++] = value;

	  return O;
	};

	// https://tc39.github.io/ecma262/#sec-array.prototype.fill

	_export({
	  target: 'Array',
	  proto: true
	}, {
	  fill: arrayFill
	}); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

	var fill = entryVirtual('Array').fill;

	var slice$1 = [].slice;
	var MSIE = /MSIE .\./.test(engineUserAgent); // <- dirty ie9- check

	var wrap$1 = function (scheduler) {
	  return function (handler, timeout
	  /* , ...arguments */
	  ) {
	    var boundArgs = arguments.length > 2;
	    var args = boundArgs ? slice$1.call(arguments, 2) : undefined;
	    return scheduler(boundArgs ? function () {
	      // eslint-disable-next-line no-new-func
	      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
	    } : handler, timeout);
	  };
	}; // ie9- setTimeout & setInterval additional parameters fix
	// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers


	_export({
	  global: true,
	  bind: true,
	  forced: MSIE
	}, {
	  // `setTimeout` method
	  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
	  setTimeout: wrap$1(global$1.setTimeout),
	  // `setInterval` method
	  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
	  setInterval: wrap$1(global$1.setInterval)
	});

	var setTimeout$1 = path.setTimeout;

	var setTimeout$2 = setTimeout$1;

	var $stringify$1 = getBuiltIn('JSON', 'stringify');
	var re = /[\uD800-\uDFFF]/g;
	var low = /^[\uD800-\uDBFF]$/;
	var hi = /^[\uDC00-\uDFFF]$/;

	var fix = function (match, offset, string) {
	  var prev = string.charAt(offset - 1);
	  var next = string.charAt(offset + 1);

	  if (low.test(match) && !hi.test(next) || hi.test(match) && !low.test(prev)) {
	    return '\\u' + match.charCodeAt(0).toString(16);
	  }

	  return match;
	};

	var FORCED$1 = fails(function () {
	  return $stringify$1('\uDF06\uD834') !== '"\\udf06\\ud834"' || $stringify$1('\uDEAD') !== '"\\udead"';
	});

	if ($stringify$1) {
	  // https://github.com/tc39/proposal-well-formed-stringify
	  _export({
	    target: 'JSON',
	    stat: true,
	    forced: FORCED$1
	  }, {
	    // eslint-disable-next-line no-unused-vars
	    stringify: function stringify(it, replacer, space) {
	      var result = $stringify$1.apply(null, arguments);
	      return typeof result == 'string' ? result.replace(re, fix) : result;
	    }
	  });
	}

	if (!path.JSON) path.JSON = {
	  stringify: JSON.stringify
	}; // eslint-disable-next-line no-unused-vars

	var stringify = function stringify(it, replacer, space) {
	  return path.JSON.stringify.apply(null, arguments);
	};

	var stringify$1 = stringify;

	var stringify$2 = stringify$1;

	// https://tc39.github.io/ecma262/#sec-object.create

	_export({
	  target: 'Object',
	  stat: true,
	  sham: !descriptors
	}, {
	  create: objectCreate
	});

	var Object$1 = path.Object;

	var create = function create(P, D) {
	  return Object$1.create(P, D);
	};

	var create$1 = create;

	var create$2 = create$1;

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    defineProperty$2(obj, key, {
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

	var defineProperty$7 = _defineProperty;

	// a string of all valid unicode whitespaces
	// eslint-disable-next-line max-len
	var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var whitespace = '[' + whitespaces + ']';
	var ltrim = RegExp('^' + whitespace + whitespace + '*');
	var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

	var createMethod$4 = function (TYPE) {
	  return function ($this) {
	    var string = String(requireObjectCoercible($this));
	    if (TYPE & 1) string = string.replace(ltrim, '');
	    if (TYPE & 2) string = string.replace(rtrim, '');
	    return string;
	  };
	};

	var stringTrim = {
	  // `String.prototype.{ trimLeft, trimStart }` methods
	  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
	  start: createMethod$4(1),
	  // `String.prototype.{ trimRight, trimEnd }` methods
	  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
	  end: createMethod$4(2),
	  // `String.prototype.trim` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
	  trim: createMethod$4(3)
	};

	var non = '\u200B\u0085\u180E'; // check that a method works with the correct list
	// of whitespaces and has a correct name

	var stringTrimForced = function (METHOD_NAME) {
	  return fails(function () {
	    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
	  });
	};

	var $trim = stringTrim.trim; // `String.prototype.trim` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.trim

	_export({
	  target: 'String',
	  proto: true,
	  forced: stringTrimForced('trim')
	}, {
	  trim: function trim() {
	    return $trim(this);
	  }
	});

	var trim = entryVirtual('String').trim;

	var $indexOf = arrayIncludes.indexOf;
	var nativeIndexOf = [].indexOf;
	var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
	var STRICT_METHOD$1 = arrayMethodIsStrict('indexOf');
	var USES_TO_LENGTH$3 = arrayMethodUsesToLength('indexOf', {
	  ACCESSORS: true,
	  1: 0
	}); // `Array.prototype.indexOf` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.indexof

	_export({
	  target: 'Array',
	  proto: true,
	  forced: NEGATIVE_ZERO || !STRICT_METHOD$1 || !USES_TO_LENGTH$3
	}, {
	  indexOf: function indexOf(searchElement
	  /* , fromIndex = 0 */
	  ) {
	    return NEGATIVE_ZERO // convert -0 to +0
	    ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var indexOf$1 = entryVirtual('Array').indexOf;

	var trim$1 = stringTrim.trim;
	var $parseInt = global$1.parseInt;
	var hex = /^[+-]?0[Xx]/;
	var FORCED$2 = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22; // `parseInt` method
	// https://tc39.github.io/ecma262/#sec-parseint-string-radix

	var numberParseInt = FORCED$2 ? function parseInt(string, radix) {
	  var S = trim$1(String(string));
	  return $parseInt(S, radix >>> 0 || (hex.test(S) ? 16 : 10));
	} : $parseInt;

	// https://tc39.github.io/ecma262/#sec-parseint-string-radix

	_export({
	  global: true,
	  forced: parseInt != numberParseInt
	}, {
	  parseInt: numberParseInt
	});

	var propertyIsEnumerable = objectPropertyIsEnumerable.f; // `Object.{ entries, values }` methods implementation

	var createMethod$5 = function (TO_ENTRIES) {
	  return function (it) {
	    var O = toIndexedObject(it);
	    var keys = objectKeys(O);
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;

	    while (length > i) {
	      key = keys[i++];

	      if (!descriptors || propertyIsEnumerable.call(O, key)) {
	        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
	      }
	    }

	    return result;
	  };
	};

	var objectToArray = {
	  // `Object.entries` method
	  // https://tc39.github.io/ecma262/#sec-object.entries
	  entries: createMethod$5(true),
	  // `Object.values` method
	  // https://tc39.github.io/ecma262/#sec-object.values
	  values: createMethod$5(false)
	};

	var $values = objectToArray.values; // `Object.values` method
	// https://tc39.github.io/ecma262/#sec-object.values

	_export({
	  target: 'Object',
	  stat: true
	}, {
	  values: function values(O) {
	    return $values(O);
	  }
	});

	var values = path.Object.values;

	var FAILS_ON_PRIMITIVES$1 = fails(function () {
	  objectGetPrototypeOf(1);
	}); // `Object.getPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.getprototypeof

	_export({
	  target: 'Object',
	  stat: true,
	  forced: FAILS_ON_PRIMITIVES$1,
	  sham: !correctPrototypeGetter
	}, {
	  getPrototypeOf: function getPrototypeOf(it) {
	    return objectGetPrototypeOf(toObject(it));
	  }
	});

	var getPrototypeOf = path.Object.getPrototypeOf;

	var $includes = arrayIncludes.includes;
	var USES_TO_LENGTH$4 = arrayMethodUsesToLength('indexOf', {
	  ACCESSORS: true,
	  1: 0
	}); // `Array.prototype.includes` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.includes

	_export({
	  target: 'Array',
	  proto: true,
	  forced: !USES_TO_LENGTH$4
	}, {
	  includes: function includes(el
	  /* , fromIndex = 0 */
	  ) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	}); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

	var includes = entryVirtual('Array').includes;

	var MATCH = wellKnownSymbol('match'); // `IsRegExp` abstract operation
	// https://tc39.github.io/ecma262/#sec-isregexp

	var isRegexp = function (it) {
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
	};

	var notARegexp = function (it) {
	  if (isRegexp(it)) {
	    throw TypeError("The method doesn't accept regular expressions");
	  }

	  return it;
	};

	var MATCH$1 = wellKnownSymbol('match');

	var correctIsRegexpLogic = function (METHOD_NAME) {
	  var regexp = /./;

	  try {
	    '/./'[METHOD_NAME](regexp);
	  } catch (error1) {
	    try {
	      regexp[MATCH$1] = false;
	      return '/./'[METHOD_NAME](regexp);
	    } catch (error2) {
	      /* empty */
	    }
	  }

	  return false;
	};

	// https://tc39.github.io/ecma262/#sec-string.prototype.includes


	_export({
	  target: 'String',
	  proto: true,
	  forced: !correctIsRegexpLogic('includes')
	}, {
	  includes: function includes(searchString
	  /* , position = 0 */
	  ) {
	    return !!~String(requireObjectCoercible(this)).indexOf(notARegexp(searchString), arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var includes$1 = entryVirtual('String').includes;

	var nativeAssign = Object.assign;
	var defineProperty$8 = Object.defineProperty; // `Object.assign` method
	// https://tc39.github.io/ecma262/#sec-object.assign

	var objectAssign = !nativeAssign || fails(function () {
	  // should have correct order of operations (Edge bug)
	  if (descriptors && nativeAssign({
	    b: 1
	  }, nativeAssign(defineProperty$8({}, 'a', {
	    enumerable: true,
	    get: function () {
	      defineProperty$8(this, 'b', {
	        value: 3,
	        enumerable: false
	      });
	    }
	  }), {
	    b: 2
	  })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

	  var A = {};
	  var B = {}; // eslint-disable-next-line no-undef

	  var symbol = Symbol();
	  var alphabet = 'abcdefghijklmnopqrst';
	  A[symbol] = 7;
	  alphabet.split('').forEach(function (chr) {
	    B[chr] = chr;
	  });
	  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
	}) ? function assign(target, source) {
	  // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var argumentsLength = arguments.length;
	  var index = 1;
	  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	  var propertyIsEnumerable = objectPropertyIsEnumerable.f;

	  while (argumentsLength > index) {
	    var S = indexedObject(arguments[index++]);
	    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;

	    while (length > j) {
	      key = keys[j++];
	      if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
	    }
	  }

	  return T;
	} : nativeAssign;

	// https://tc39.github.io/ecma262/#sec-object.assign

	_export({
	  target: 'Object',
	  stat: true,
	  forced: Object.assign !== objectAssign
	}, {
	  assign: objectAssign
	});

	var assign = path.Object.assign;

	var assign$1 = assign;

	var assign$2 = assign$1;

	var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport('splice');
	var USES_TO_LENGTH$5 = arrayMethodUsesToLength('splice', {
	  ACCESSORS: true,
	  0: 0,
	  1: 2
	});
	var max$1 = Math.max;
	var min$2 = Math.min;
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded'; // `Array.prototype.splice` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.splice
	// with adding support of @@species

	_export({
	  target: 'Array',
	  proto: true,
	  forced: !HAS_SPECIES_SUPPORT$2 || !USES_TO_LENGTH$5
	}, {
	  splice: function splice(start, deleteCount
	  /* , ...items */
	  ) {
	    var O = toObject(this);
	    var len = toLength(O.length);
	    var actualStart = toAbsoluteIndex(start, len);
	    var argumentsLength = arguments.length;
	    var insertCount, actualDeleteCount, A, k, from, to;

	    if (argumentsLength === 0) {
	      insertCount = actualDeleteCount = 0;
	    } else if (argumentsLength === 1) {
	      insertCount = 0;
	      actualDeleteCount = len - actualStart;
	    } else {
	      insertCount = argumentsLength - 2;
	      actualDeleteCount = min$2(max$1(toInteger(deleteCount), 0), len - actualStart);
	    }

	    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
	      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
	    }

	    A = arraySpeciesCreate(O, actualDeleteCount);

	    for (k = 0; k < actualDeleteCount; k++) {
	      from = actualStart + k;
	      if (from in O) createProperty(A, k, O[from]);
	    }

	    A.length = actualDeleteCount;

	    if (insertCount < actualDeleteCount) {
	      for (k = actualStart; k < len - actualDeleteCount; k++) {
	        from = k + actualDeleteCount;
	        to = k + insertCount;
	        if (from in O) O[to] = O[from];else delete O[to];
	      }

	      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
	    } else if (insertCount > actualDeleteCount) {
	      for (k = len - actualDeleteCount; k > actualStart; k--) {
	        from = k + actualDeleteCount - 1;
	        to = k + insertCount - 1;
	        if (from in O) O[to] = O[from];else delete O[to];
	      }
	    }

	    for (k = 0; k < insertCount; k++) {
	      O[k + actualStart] = arguments[k + 2];
	    }

	    O.length = len - actualDeleteCount + insertCount;
	    return A;
	  }
	});

	var splice = entryVirtual('Array').splice;

	var ArrayPrototype$5 = Array.prototype;

	var splice_1 = function (it) {
	  var own = it.splice;
	  return it === ArrayPrototype$5 || it instanceof Array && own === ArrayPrototype$5.splice ? splice : own;
	};

	var splice$1 = splice_1;

	var splice$2 = splice$1;

	var nativeReverse = [].reverse;
	var test$1 = [1, 2]; // `Array.prototype.reverse` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.reverse
	// fix for Safari 12.0 bug
	// https://bugs.webkit.org/show_bug.cgi?id=188794

	_export({
	  target: 'Array',
	  proto: true,
	  forced: String(test$1) === String(test$1.reverse())
	}, {
	  reverse: function reverse() {
	    // eslint-disable-next-line no-self-assign
	    if (isArray(this)) this.length = this.length;
	    return nativeReverse.call(this);
	  }
	});

	var reverse = entryVirtual('Array').reverse;

	var ArrayPrototype$6 = Array.prototype;

	var reverse_1 = function (it) {
	  var own = it.reverse;
	  return it === ArrayPrototype$6 || it instanceof Array && own === ArrayPrototype$6.reverse ? reverse : own;
	};

	var reverse$1 = reverse_1;

	var reverse$2 = reverse$1;

	var $forEach$1 = arrayIteration.forEach;
	var STRICT_METHOD$2 = arrayMethodIsStrict('forEach');
	var USES_TO_LENGTH$6 = arrayMethodUsesToLength('forEach'); // `Array.prototype.forEach` method implementation
	// https://tc39.github.io/ecma262/#sec-array.prototype.foreach

	var arrayForEach = !STRICT_METHOD$2 || !USES_TO_LENGTH$6 ? function forEach(callbackfn
	/* , thisArg */
	) {
	  return $forEach$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	} : [].forEach;

	// https://tc39.github.io/ecma262/#sec-array.prototype.foreach


	_export({
	  target: 'Array',
	  proto: true,
	  forced: [].forEach != arrayForEach
	}, {
	  forEach: arrayForEach
	});

	var forEach = entryVirtual('Array').forEach;

	var forEach$1 = forEach;

	var ArrayPrototype$7 = Array.prototype;
	var DOMIterables = {
	  DOMTokenList: true,
	  NodeList: true
	};

	var forEach_1 = function (it) {
	  var own = it.forEach;
	  return it === ArrayPrototype$7 || it instanceof Array && own === ArrayPrototype$7.forEach // eslint-disable-next-line no-prototype-builtins
	  || DOMIterables.hasOwnProperty(classof(it)) ? forEach$1 : own;
	};

	var forEach$2 = forEach_1;

	// https://tc39.github.io/ecma262/#sec-array.isarray

	_export({
	  target: 'Array',
	  stat: true
	}, {
	  isArray: isArray
	});

	var isArray$1 = path.Array.isArray;

	var isArray$2 = isArray$1;

	var isArray$3 = isArray$2;

	function _arrayWithHoles(arr) {
	  if (isArray$3(arr)) return arr;
	}

	var arrayWithHoles = _arrayWithHoles;

	var ITERATOR$5 = wellKnownSymbol('iterator');

	var isIterable = function (it) {
	  var O = Object(it);
	  return O[ITERATOR$5] !== undefined || '@@iterator' in O // eslint-disable-next-line no-prototype-builtins
	  || iterators.hasOwnProperty(classof(O));
	};

	var isIterable_1 = isIterable;

	var isIterable$1 = isIterable_1;

	var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
	var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'; // We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679

	var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
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

	var FORCED$3 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species

	_export({
	  target: 'Array',
	  proto: true,
	  forced: FORCED$3
	}, {
	  concat: function concat(arg) {
	    // eslint-disable-line no-unused-vars
	    var O = toObject(this);
	    var A = arraySpeciesCreate(O, 0);
	    var n = 0;
	    var i, k, length, len, E;

	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];

	      if (isConcatSpreadable(E)) {
	        len = toLength(E.length);
	        if (n + len > MAX_SAFE_INTEGER$1) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

	        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
	      } else {
	        if (n >= MAX_SAFE_INTEGER$1) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        createProperty(A, n++, E);
	      }
	    }

	    A.length = n;
	    return A;
	  }
	});

	// https://tc39.github.io/ecma262/#sec-symbol.asynciterator

	defineWellKnownSymbol('asyncIterator');

	// https://tc39.github.io/ecma262/#sec-symbol.hasinstance

	defineWellKnownSymbol('hasInstance');

	// https://tc39.github.io/ecma262/#sec-symbol.isconcatspreadable

	defineWellKnownSymbol('isConcatSpreadable');

	// https://tc39.github.io/ecma262/#sec-symbol.iterator

	defineWellKnownSymbol('iterator');

	// https://tc39.github.io/ecma262/#sec-symbol.match

	defineWellKnownSymbol('match');

	defineWellKnownSymbol('matchAll');

	// https://tc39.github.io/ecma262/#sec-symbol.replace

	defineWellKnownSymbol('replace');

	// https://tc39.github.io/ecma262/#sec-symbol.search

	defineWellKnownSymbol('search');

	// https://tc39.github.io/ecma262/#sec-symbol.species

	defineWellKnownSymbol('species');

	// https://tc39.github.io/ecma262/#sec-symbol.split

	defineWellKnownSymbol('split');

	// https://tc39.github.io/ecma262/#sec-symbol.toprimitive

	defineWellKnownSymbol('toPrimitive');

	// https://tc39.github.io/ecma262/#sec-symbol.tostringtag

	defineWellKnownSymbol('toStringTag');

	// https://tc39.github.io/ecma262/#sec-symbol.unscopables

	defineWellKnownSymbol('unscopables');

	// https://tc39.github.io/ecma262/#sec-json-@@tostringtag

	setToStringTag(global$1.JSON, 'JSON', true);

	var symbol = path.Symbol;

	// https://github.com/tc39/proposal-using-statement

	defineWellKnownSymbol('asyncDispose');

	// https://github.com/tc39/proposal-using-statement

	defineWellKnownSymbol('dispose');

	// https://github.com/tc39/proposal-observable

	defineWellKnownSymbol('observable');

	// https://github.com/tc39/proposal-pattern-matching

	defineWellKnownSymbol('patternMatch');

	defineWellKnownSymbol('replaceAll');

	var symbol$1 = symbol;

	var symbol$2 = symbol$1;

	function _iterableToArrayLimit(arr, i) {
	  if (typeof symbol$2 === "undefined" || !isIterable$1(Object(arr))) return;
	  var _arr = [];
	  var _n = true;
	  var _d = false;
	  var _e = undefined;

	  try {
	    for (var _i = getIterator$1(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	var iterableToArrayLimit = _iterableToArrayLimit;

	var from$3 = from;

	var from$4 = from$3;

	var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport('slice');
	var USES_TO_LENGTH$7 = arrayMethodUsesToLength('slice', {
	  ACCESSORS: true,
	  0: 0,
	  1: 2
	});
	var SPECIES$2 = wellKnownSymbol('species');
	var nativeSlice = [].slice;
	var max$2 = Math.max; // `Array.prototype.slice` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.slice
	// fallback for not array-like ES3 strings and DOM objects

	_export({
	  target: 'Array',
	  proto: true,
	  forced: !HAS_SPECIES_SUPPORT$3 || !USES_TO_LENGTH$7
	}, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject(this);
	    var length = toLength(O.length);
	    var k = toAbsoluteIndex(start, length);
	    var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

	    var Constructor, result, n;

	    if (isArray(O)) {
	      Constructor = O.constructor; // cross-realm fallback

	      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject(Constructor)) {
	        Constructor = Constructor[SPECIES$2];
	        if (Constructor === null) Constructor = undefined;
	      }

	      if (Constructor === Array || Constructor === undefined) {
	        return nativeSlice.call(O, k, fin);
	      }
	    }

	    result = new (Constructor === undefined ? Array : Constructor)(max$2(fin - k, 0));

	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);

	    result.length = n;
	    return result;
	  }
	});

	var slice$2 = entryVirtual('Array').slice;

	var ArrayPrototype$8 = Array.prototype;

	var slice_1 = function (it) {
	  var own = it.slice;
	  return it === ArrayPrototype$8 || it instanceof Array && own === ArrayPrototype$8.slice ? slice$2 : own;
	};

	var slice$3 = slice_1;

	var slice$4 = slice$3;

	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }

	  return arr2;
	}

	var arrayLikeToArray = _arrayLikeToArray;

	function _unsupportedIterableToArray(o, minLen) {
	  var _context;

	  if (!o) return;
	  if (typeof o === "string") return arrayLikeToArray(o, minLen);

	  var n = slice$4(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);

	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return from$4(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
	}

	var unsupportedIterableToArray = _unsupportedIterableToArray;

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	var nonIterableRest = _nonIterableRest;

	function _slicedToArray(arr, i) {
	  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
	}

	var slicedToArray = _slicedToArray;

	// https://tc39.github.io/ecma262/#sec-date.now

	_export({
	  target: 'Date',
	  stat: true
	}, {
	  now: function now() {
	    return new Date().getTime();
	  }
	});

	var now = path.Date.now;

	var FAILS_ON_PRIMITIVES$2 = fails(function () {
	  objectKeys(1);
	}); // `Object.keys` method
	// https://tc39.github.io/ecma262/#sec-object.keys

	_export({
	  target: 'Object',
	  stat: true,
	  forced: FAILS_ON_PRIMITIVES$2
	}, {
	  keys: function keys(it) {
	    return objectKeys(toObject(it));
	  }
	});

	var keys$1 = path.Object.keys;

	var keys$2 = keys$1;

	var keys$3 = keys$2;

	var isArray$4 = isArray$1;

	var isArray$5 = isArray$4;

	var iterator = wellKnownSymbolWrapped.f('iterator');

	var iterator$1 = iterator;

	var iterator$2 = iterator$1;

	var _typeof_1 = createCommonjsModule(function (module) {
	  function _typeof(obj) {
	    "@babel/helpers - typeof";

	    if (typeof symbol$2 === "function" && typeof iterator$2 === "symbol") {
	      module.exports = _typeof = function _typeof(obj) {
	        return typeof obj;
	      };
	    } else {
	      module.exports = _typeof = function _typeof(obj) {
	        return obj && typeof symbol$2 === "function" && obj.constructor === symbol$2 && obj !== symbol$2.prototype ? "symbol" : typeof obj;
	      };
	    }

	    return _typeof(obj);
	  }

	  module.exports = _typeof;
	});

	// https://tc39.github.io/ecma262/#sec-reflect.ownkeys

	_export({
	  target: 'Reflect',
	  stat: true
	}, {
	  ownKeys: ownKeys
	});

	var ownKeys$1 = path.Reflect.ownKeys;

	var ownKeys$2 = ownKeys$1;

	var ownKeys$3 = ownKeys$2;

	var slice$5 = slice_1;

	var slice$6 = slice$5;

	function _arrayWithoutHoles(arr) {
	  if (isArray$3(arr)) return arrayLikeToArray(arr);
	}

	var arrayWithoutHoles = _arrayWithoutHoles;

	function _iterableToArray(iter) {
	  if (typeof symbol$2 !== "undefined" && isIterable$1(Object(iter))) return from$4(iter);
	}

	var iterableToArray = _iterableToArray;

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	var nonIterableSpread = _nonIterableSpread;

	function _toConsumableArray(arr) {
	  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
	}

	var toConsumableArray = _toConsumableArray;

	var concat = entryVirtual('Array').concat;

	var ArrayPrototype$9 = Array.prototype;

	var concat_1 = function (it) {
	  var own = it.concat;
	  return it === ArrayPrototype$9 || it instanceof Array && own === ArrayPrototype$9.concat ? concat : own;
	};

	var concat$1 = concat_1;

	var concat$2 = concat$1;

	var symbol$3 = symbol;

	var symbol$4 = symbol$3;

	var componentEmitter = createCommonjsModule(function (module) {
	  /**
	   * Expose `Emitter`.
	   */
	  {
	    module.exports = Emitter;
	  }
	  /**
	   * Initialize a new `Emitter`.
	   *
	   * @api public
	   */


	  function Emitter(obj) {
	    if (obj) return mixin(obj);
	  }
	  /**
	   * Mixin the emitter properties.
	   *
	   * @param {Object} obj
	   * @return {Object}
	   * @api private
	   */

	  function mixin(obj) {
	    for (var key in Emitter.prototype) {
	      obj[key] = Emitter.prototype[key];
	    }

	    return obj;
	  }
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   * @return {Emitter}
	   * @api public
	   */


	  Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
	    this._callbacks = this._callbacks || {};
	    (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
	    return this;
	  };
	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   * @return {Emitter}
	   * @api public
	   */


	  Emitter.prototype.once = function (event, fn) {
	    function on() {
	      this.off(event, on);
	      fn.apply(this, arguments);
	    }

	    on.fn = fn;
	    this.on(event, on);
	    return this;
	  };
	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   * @return {Emitter}
	   * @api public
	   */


	  Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
	    this._callbacks = this._callbacks || {}; // all

	    if (0 == arguments.length) {
	      this._callbacks = {};
	      return this;
	    } // specific event


	    var callbacks = this._callbacks['$' + event];
	    if (!callbacks) return this; // remove all handlers

	    if (1 == arguments.length) {
	      delete this._callbacks['$' + event];
	      return this;
	    } // remove specific handler


	    var cb;

	    for (var i = 0; i < callbacks.length; i++) {
	      cb = callbacks[i];

	      if (cb === fn || cb.fn === fn) {
	        callbacks.splice(i, 1);
	        break;
	      }
	    } // Remove event specific arrays for event types that no
	    // one is subscribed for to avoid memory leak.


	    if (callbacks.length === 0) {
	      delete this._callbacks['$' + event];
	    }

	    return this;
	  };
	  /**
	   * Emit `event` with the given args.
	   *
	   * @param {String} event
	   * @param {Mixed} ...
	   * @return {Emitter}
	   */


	  Emitter.prototype.emit = function (event) {
	    this._callbacks = this._callbacks || {};
	    var args = new Array(arguments.length - 1),
	        callbacks = this._callbacks['$' + event];

	    for (var i = 1; i < arguments.length; i++) {
	      args[i - 1] = arguments[i];
	    }

	    if (callbacks) {
	      callbacks = callbacks.slice(0);

	      for (var i = 0, len = callbacks.length; i < len; ++i) {
	        callbacks[i].apply(this, args);
	      }
	    }

	    return this;
	  };
	  /**
	   * Return array of callbacks for `event`.
	   *
	   * @param {String} event
	   * @return {Array}
	   * @api public
	   */


	  Emitter.prototype.listeners = function (event) {
	    this._callbacks = this._callbacks || {};
	    return this._callbacks['$' + event] || [];
	  };
	  /**
	   * Check if this emitter has `event` handlers.
	   *
	   * @param {String} event
	   * @return {Boolean}
	   * @api public
	   */


	  Emitter.prototype.hasListeners = function (event) {
	    return !!this.listeners(event).length;
	  };
	});

	/*! Hammer.JS - v2.0.17-rc - 2019-12-16
	 * http://naver.github.io/egjs
	 *
	 * Forked By Naver egjs
	 * Copyright (c) hammerjs
	 * Licensed under the MIT license */
	function _extends() {
	  _extends = Object.assign || function (target) {
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

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}
	/**
	 * @private
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} target
	 * @param {...Object} objects_to_assign
	 * @returns {Object} target
	 */


	var assign$3;

	if (typeof Object.assign !== 'function') {
	  assign$3 = function assign(target) {
	    if (target === undefined || target === null) {
	      throw new TypeError('Cannot convert undefined or null to object');
	    }

	    var output = Object(target);

	    for (var index = 1; index < arguments.length; index++) {
	      var source = arguments[index];

	      if (source !== undefined && source !== null) {
	        for (var nextKey in source) {
	          if (source.hasOwnProperty(nextKey)) {
	            output[nextKey] = source[nextKey];
	          }
	        }
	      }
	    }

	    return output;
	  };
	} else {
	  assign$3 = Object.assign;
	}

	var assign$1$1 = assign$3;
	var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
	var TEST_ELEMENT = typeof document === "undefined" ? {
	  style: {}
	} : document.createElement('div');
	var TYPE_FUNCTION = 'function';
	var round = Math.round,
	    abs = Math.abs;
	var now$1 = Date.now;
	/**
	 * @private
	 * get the prefixed property
	 * @param {Object} obj
	 * @param {String} property
	 * @returns {String|Undefined} prefixed
	 */

	function prefixed(obj, property) {
	  var prefix;
	  var prop;
	  var camelProp = property[0].toUpperCase() + property.slice(1);
	  var i = 0;

	  while (i < VENDOR_PREFIXES.length) {
	    prefix = VENDOR_PREFIXES[i];
	    prop = prefix ? prefix + camelProp : property;

	    if (prop in obj) {
	      return prop;
	    }

	    i++;
	  }

	  return undefined;
	}
	/* eslint-disable no-new-func, no-nested-ternary */


	var win;

	if (typeof window === "undefined") {
	  // window is undefined in node.js
	  win = {};
	} else {
	  win = window;
	}

	var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
	var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

	function getTouchActionProps() {
	  if (!NATIVE_TOUCH_ACTION) {
	    return false;
	  }

	  var touchMap = {};
	  var cssSupports = win.CSS && win.CSS.supports;
	  ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function (val) {
	    // If css.supports is not supported but there is native touch-action assume it supports
	    // all values. This is the case for IE 10 and 11.
	    return touchMap[val] = cssSupports ? win.CSS.supports('touch-action', val) : true;
	  });
	  return touchMap;
	}

	var TOUCH_ACTION_COMPUTE = 'compute';
	var TOUCH_ACTION_AUTO = 'auto';
	var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented

	var TOUCH_ACTION_NONE = 'none';
	var TOUCH_ACTION_PAN_X = 'pan-x';
	var TOUCH_ACTION_PAN_Y = 'pan-y';
	var TOUCH_ACTION_MAP = getTouchActionProps();
	var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
	var SUPPORT_TOUCH = ('ontouchstart' in win);
	var SUPPORT_POINTER_EVENTS = prefixed(win, 'PointerEvent') !== undefined;
	var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
	var INPUT_TYPE_TOUCH = 'touch';
	var INPUT_TYPE_PEN = 'pen';
	var INPUT_TYPE_MOUSE = 'mouse';
	var INPUT_TYPE_KINECT = 'kinect';
	var COMPUTE_INTERVAL = 25;
	var INPUT_START = 1;
	var INPUT_MOVE = 2;
	var INPUT_END = 4;
	var INPUT_CANCEL = 8;
	var DIRECTION_NONE = 1;
	var DIRECTION_LEFT = 2;
	var DIRECTION_RIGHT = 4;
	var DIRECTION_UP = 8;
	var DIRECTION_DOWN = 16;
	var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
	var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
	var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
	var PROPS_XY = ['x', 'y'];
	var PROPS_CLIENT_XY = ['clientX', 'clientY'];
	/**
	 * @private
	 * walk objects and arrays
	 * @param {Object} obj
	 * @param {Function} iterator
	 * @param {Object} context
	 */

	function each(obj, iterator, context) {
	  var i;

	  if (!obj) {
	    return;
	  }

	  if (obj.forEach) {
	    obj.forEach(iterator, context);
	  } else if (obj.length !== undefined) {
	    i = 0;

	    while (i < obj.length) {
	      iterator.call(context, obj[i], i, obj);
	      i++;
	    }
	  } else {
	    for (i in obj) {
	      obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
	    }
	  }
	}
	/**
	 * @private
	 * let a boolean value also be a function that must return a boolean
	 * this first item in args will be used as the context
	 * @param {Boolean|Function} val
	 * @param {Array} [args]
	 * @returns {Boolean}
	 */


	function boolOrFn(val, args) {
	  if (typeof val === TYPE_FUNCTION) {
	    return val.apply(args ? args[0] || undefined : undefined, args);
	  }

	  return val;
	}
	/**
	 * @private
	 * small indexOf wrapper
	 * @param {String} str
	 * @param {String} find
	 * @returns {Boolean} found
	 */


	function inStr(str, find) {
	  return str.indexOf(find) > -1;
	}
	/**
	 * @private
	 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
	 * @param {String} actions
	 * @returns {*}
	 */


	function cleanTouchActions(actions) {
	  // none
	  if (inStr(actions, TOUCH_ACTION_NONE)) {
	    return TOUCH_ACTION_NONE;
	  }

	  var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
	  var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y); // if both pan-x and pan-y are set (different recognizers
	  // for different directions, e.g. horizontal pan but vertical swipe?)
	  // we need none (as otherwise with pan-x pan-y combined none of these
	  // recognizers will work, since the browser would handle all panning

	  if (hasPanX && hasPanY) {
	    return TOUCH_ACTION_NONE;
	  } // pan-x OR pan-y


	  if (hasPanX || hasPanY) {
	    return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
	  } // manipulation


	  if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
	    return TOUCH_ACTION_MANIPULATION;
	  }

	  return TOUCH_ACTION_AUTO;
	}
	/**
	 * @private
	 * Touch Action
	 * sets the touchAction property or uses the js alternative
	 * @param {Manager} manager
	 * @param {String} value
	 * @constructor
	 */


	var TouchAction = /*#__PURE__*/function () {
	  function TouchAction(manager, value) {
	    this.manager = manager;
	    this.set(value);
	  }
	  /**
	   * @private
	   * set the touchAction value on the element or enable the polyfill
	   * @param {String} value
	   */


	  var _proto = TouchAction.prototype;

	  _proto.set = function set(value) {
	    // find out the touch-action by the event handlers
	    if (value === TOUCH_ACTION_COMPUTE) {
	      value = this.compute();
	    }

	    if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
	      this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
	    }

	    this.actions = value.toLowerCase().trim();
	  };
	  /**
	   * @private
	   * just re-set the touchAction value
	   */


	  _proto.update = function update() {
	    this.set(this.manager.options.touchAction);
	  };
	  /**
	   * @private
	   * compute the value for the touchAction property based on the recognizer's settings
	   * @returns {String} value
	   */


	  _proto.compute = function compute() {
	    var actions = [];
	    each(this.manager.recognizers, function (recognizer) {
	      if (boolOrFn(recognizer.options.enable, [recognizer])) {
	        actions = actions.concat(recognizer.getTouchAction());
	      }
	    });
	    return cleanTouchActions(actions.join(' '));
	  };
	  /**
	   * @private
	   * this method is called on each input cycle and provides the preventing of the browser behavior
	   * @param {Object} input
	   */


	  _proto.preventDefaults = function preventDefaults(input) {
	    var srcEvent = input.srcEvent;
	    var direction = input.offsetDirection; // if the touch action did prevented once this session

	    if (this.manager.session.prevented) {
	      srcEvent.preventDefault();
	      return;
	    }

	    var actions = this.actions;
	    var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
	    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
	    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

	    if (hasNone) {
	      // do not prevent defaults if this is a tap gesture
	      var isTapPointer = input.pointers.length === 1;
	      var isTapMovement = input.distance < 2;
	      var isTapTouchTime = input.deltaTime < 250;

	      if (isTapPointer && isTapMovement && isTapTouchTime) {
	        return;
	      }
	    }

	    if (hasPanX && hasPanY) {
	      // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
	      return;
	    }

	    if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) {
	      return this.preventSrc(srcEvent);
	    }
	  };
	  /**
	   * @private
	   * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
	   * @param {Object} srcEvent
	   */


	  _proto.preventSrc = function preventSrc(srcEvent) {
	    this.manager.session.prevented = true;
	    srcEvent.preventDefault();
	  };

	  return TouchAction;
	}();
	/**
	 * @private
	 * find if a node is in the given parent
	 * @method hasParent
	 * @param {HTMLElement} node
	 * @param {HTMLElement} parent
	 * @return {Boolean} found
	 */


	function hasParent(node, parent) {
	  while (node) {
	    if (node === parent) {
	      return true;
	    }

	    node = node.parentNode;
	  }

	  return false;
	}
	/**
	 * @private
	 * get the center of all the pointers
	 * @param {Array} pointers
	 * @return {Object} center contains `x` and `y` properties
	 */


	function getCenter(pointers) {
	  var pointersLength = pointers.length; // no need to loop when only one touch

	  if (pointersLength === 1) {
	    return {
	      x: round(pointers[0].clientX),
	      y: round(pointers[0].clientY)
	    };
	  }

	  var x = 0;
	  var y = 0;
	  var i = 0;

	  while (i < pointersLength) {
	    x += pointers[i].clientX;
	    y += pointers[i].clientY;
	    i++;
	  }

	  return {
	    x: round(x / pointersLength),
	    y: round(y / pointersLength)
	  };
	}
	/**
	 * @private
	 * create a simple clone from the input used for storage of firstInput and firstMultiple
	 * @param {Object} input
	 * @returns {Object} clonedInputData
	 */


	function simpleCloneInputData(input) {
	  // make a simple copy of the pointers because we will get a reference if we don't
	  // we only need clientXY for the calculations
	  var pointers = [];
	  var i = 0;

	  while (i < input.pointers.length) {
	    pointers[i] = {
	      clientX: round(input.pointers[i].clientX),
	      clientY: round(input.pointers[i].clientY)
	    };
	    i++;
	  }

	  return {
	    timeStamp: now$1(),
	    pointers: pointers,
	    center: getCenter(pointers),
	    deltaX: input.deltaX,
	    deltaY: input.deltaY
	  };
	}
	/**
	 * @private
	 * calculate the absolute distance between two points
	 * @param {Object} p1 {x, y}
	 * @param {Object} p2 {x, y}
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} distance
	 */


	function getDistance(p1, p2, props) {
	  if (!props) {
	    props = PROPS_XY;
	  }

	  var x = p2[props[0]] - p1[props[0]];
	  var y = p2[props[1]] - p1[props[1]];
	  return Math.sqrt(x * x + y * y);
	}
	/**
	 * @private
	 * calculate the angle between two coordinates
	 * @param {Object} p1
	 * @param {Object} p2
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} angle
	 */


	function getAngle(p1, p2, props) {
	  if (!props) {
	    props = PROPS_XY;
	  }

	  var x = p2[props[0]] - p1[props[0]];
	  var y = p2[props[1]] - p1[props[1]];
	  return Math.atan2(y, x) * 180 / Math.PI;
	}
	/**
	 * @private
	 * get the direction between two points
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Number} direction
	 */


	function getDirection(x, y) {
	  if (x === y) {
	    return DIRECTION_NONE;
	  }

	  if (abs(x) >= abs(y)) {
	    return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
	  }

	  return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
	}

	function computeDeltaXY(session, input) {
	  var center = input.center; // let { offsetDelta:offset = {}, prevDelta = {}, prevInput = {} } = session;
	  // jscs throwing error on defalut destructured values and without defaults tests fail

	  var offset = session.offsetDelta || {};
	  var prevDelta = session.prevDelta || {};
	  var prevInput = session.prevInput || {};

	  if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
	    prevDelta = session.prevDelta = {
	      x: prevInput.deltaX || 0,
	      y: prevInput.deltaY || 0
	    };
	    offset = session.offsetDelta = {
	      x: center.x,
	      y: center.y
	    };
	  }

	  input.deltaX = prevDelta.x + (center.x - offset.x);
	  input.deltaY = prevDelta.y + (center.y - offset.y);
	}
	/**
	 * @private
	 * calculate the velocity between two points. unit is in px per ms.
	 * @param {Number} deltaTime
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Object} velocity `x` and `y`
	 */


	function getVelocity(deltaTime, x, y) {
	  return {
	    x: x / deltaTime || 0,
	    y: y / deltaTime || 0
	  };
	}
	/**
	 * @private
	 * calculate the scale factor between two pointersets
	 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} scale
	 */


	function getScale(start, end) {
	  return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
	}
	/**
	 * @private
	 * calculate the rotation degrees between two pointersets
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} rotation
	 */


	function getRotation(start, end) {
	  return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
	}
	/**
	 * @private
	 * velocity is calculated every x ms
	 * @param {Object} session
	 * @param {Object} input
	 */


	function computeIntervalInputData(session, input) {
	  var last = session.lastInterval || input;
	  var deltaTime = input.timeStamp - last.timeStamp;
	  var velocity;
	  var velocityX;
	  var velocityY;
	  var direction;

	  if (input.eventType !== INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
	    var deltaX = input.deltaX - last.deltaX;
	    var deltaY = input.deltaY - last.deltaY;
	    var v = getVelocity(deltaTime, deltaX, deltaY);
	    velocityX = v.x;
	    velocityY = v.y;
	    velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
	    direction = getDirection(deltaX, deltaY);
	    session.lastInterval = input;
	  } else {
	    // use latest velocity info if it doesn't overtake a minimum period
	    velocity = last.velocity;
	    velocityX = last.velocityX;
	    velocityY = last.velocityY;
	    direction = last.direction;
	  }

	  input.velocity = velocity;
	  input.velocityX = velocityX;
	  input.velocityY = velocityY;
	  input.direction = direction;
	}
	/**
	* @private
	 * extend the data with some usable properties like scale, rotate, velocity etc
	 * @param {Object} manager
	 * @param {Object} input
	 */


	function computeInputData(manager, input) {
	  var session = manager.session;
	  var pointers = input.pointers;
	  var pointersLength = pointers.length; // store the first input to calculate the distance and direction

	  if (!session.firstInput) {
	    session.firstInput = simpleCloneInputData(input);
	  } // to compute scale and rotation we need to store the multiple touches


	  if (pointersLength > 1 && !session.firstMultiple) {
	    session.firstMultiple = simpleCloneInputData(input);
	  } else if (pointersLength === 1) {
	    session.firstMultiple = false;
	  }

	  var firstInput = session.firstInput,
	      firstMultiple = session.firstMultiple;
	  var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
	  var center = input.center = getCenter(pointers);
	  input.timeStamp = now$1();
	  input.deltaTime = input.timeStamp - firstInput.timeStamp;
	  input.angle = getAngle(offsetCenter, center);
	  input.distance = getDistance(offsetCenter, center);
	  computeDeltaXY(session, input);
	  input.offsetDirection = getDirection(input.deltaX, input.deltaY);
	  var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
	  input.overallVelocityX = overallVelocity.x;
	  input.overallVelocityY = overallVelocity.y;
	  input.overallVelocity = abs(overallVelocity.x) > abs(overallVelocity.y) ? overallVelocity.x : overallVelocity.y;
	  input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
	  input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
	  input.maxPointers = !session.prevInput ? input.pointers.length : input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers;
	  computeIntervalInputData(session, input); // find the correct target

	  var target = manager.element;
	  var srcEvent = input.srcEvent;
	  var srcEventTarget;

	  if (srcEvent.composedPath) {
	    srcEventTarget = srcEvent.composedPath()[0];
	  } else if (srcEvent.path) {
	    srcEventTarget = srcEvent.path[0];
	  } else {
	    srcEventTarget = srcEvent.target;
	  }

	  if (hasParent(srcEventTarget, target)) {
	    target = srcEventTarget;
	  }

	  input.target = target;
	}
	/**
	 * @private
	 * handle input events
	 * @param {Manager} manager
	 * @param {String} eventType
	 * @param {Object} input
	 */


	function inputHandler(manager, eventType, input) {
	  var pointersLen = input.pointers.length;
	  var changedPointersLen = input.changedPointers.length;
	  var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
	  var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;
	  input.isFirst = !!isFirst;
	  input.isFinal = !!isFinal;

	  if (isFirst) {
	    manager.session = {};
	  } // source event is the normalized value of the domEvents
	  // like 'touchstart, mouseup, pointerdown'


	  input.eventType = eventType; // compute scale, rotation etc

	  computeInputData(manager, input); // emit secret event

	  manager.emit('hammer.input', input);
	  manager.recognize(input);
	  manager.session.prevInput = input;
	}
	/**
	 * @private
	 * split string on whitespace
	 * @param {String} str
	 * @returns {Array} words
	 */


	function splitStr(str) {
	  return str.trim().split(/\s+/g);
	}
	/**
	 * @private
	 * addEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */


	function addEventListeners(target, types, handler) {
	  each(splitStr(types), function (type) {
	    target.addEventListener(type, handler, false);
	  });
	}
	/**
	 * @private
	 * removeEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */


	function removeEventListeners(target, types, handler) {
	  each(splitStr(types), function (type) {
	    target.removeEventListener(type, handler, false);
	  });
	}
	/**
	 * @private
	 * get the window object of an element
	 * @param {HTMLElement} element
	 * @returns {DocumentView|Window}
	 */


	function getWindowForElement(element) {
	  var doc = element.ownerDocument || element;
	  return doc.defaultView || doc.parentWindow || window;
	}
	/**
	 * @private
	 * create new input type manager
	 * @param {Manager} manager
	 * @param {Function} callback
	 * @returns {Input}
	 * @constructor
	 */


	var Input = /*#__PURE__*/function () {
	  function Input(manager, callback) {
	    var self = this;
	    this.manager = manager;
	    this.callback = callback;
	    this.element = manager.element;
	    this.target = manager.options.inputTarget; // smaller wrapper around the handler, for the scope and the enabled state of the manager,
	    // so when disabled the input events are completely bypassed.

	    this.domHandler = function (ev) {
	      if (boolOrFn(manager.options.enable, [manager])) {
	        self.handler(ev);
	      }
	    };

	    this.init();
	  }
	  /**
	   * @private
	   * should handle the inputEvent data and trigger the callback
	   * @virtual
	   */


	  var _proto = Input.prototype;

	  _proto.handler = function handler() {};
	  /**
	   * @private
	   * bind the events
	   */


	  _proto.init = function init() {
	    this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
	    this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
	    this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	  };
	  /**
	   * @private
	   * unbind the events
	   */


	  _proto.destroy = function destroy() {
	    this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
	    this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
	    this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	  };

	  return Input;
	}();
	/**
	 * @private
	 * find if a array contains the object using indexOf or a simple polyFill
	 * @param {Array} src
	 * @param {String} find
	 * @param {String} [findByKey]
	 * @return {Boolean|Number} false when not found, or the index
	 */


	function inArray(src, find, findByKey) {
	  if (src.indexOf && !findByKey) {
	    return src.indexOf(find);
	  } else {
	    var i = 0;

	    while (i < src.length) {
	      if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) {
	        // do not use === here, test fails
	        return i;
	      }

	      i++;
	    }

	    return -1;
	  }
	}

	var POINTER_INPUT_MAP = {
	  pointerdown: INPUT_START,
	  pointermove: INPUT_MOVE,
	  pointerup: INPUT_END,
	  pointercancel: INPUT_CANCEL,
	  pointerout: INPUT_CANCEL
	}; // in IE10 the pointer types is defined as an enum

	var IE10_POINTER_TYPE_ENUM = {
	  2: INPUT_TYPE_TOUCH,
	  3: INPUT_TYPE_PEN,
	  4: INPUT_TYPE_MOUSE,
	  5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816

	};
	var POINTER_ELEMENT_EVENTS = 'pointerdown';
	var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel'; // IE10 has prefixed support, and case-sensitive

	if (win.MSPointerEvent && !win.PointerEvent) {
	  POINTER_ELEMENT_EVENTS = 'MSPointerDown';
	  POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
	}
	/**
	 * @private
	 * Pointer events input
	 * @constructor
	 * @extends Input
	 */


	var PointerEventInput = /*#__PURE__*/function (_Input) {
	  _inheritsLoose(PointerEventInput, _Input);

	  function PointerEventInput() {
	    var _this;

	    var proto = PointerEventInput.prototype;
	    proto.evEl = POINTER_ELEMENT_EVENTS;
	    proto.evWin = POINTER_WINDOW_EVENTS;
	    _this = _Input.apply(this, arguments) || this;
	    _this.store = _this.manager.session.pointerEvents = [];
	    return _this;
	  }
	  /**
	   * @private
	   * handle mouse events
	   * @param {Object} ev
	   */


	  var _proto = PointerEventInput.prototype;

	  _proto.handler = function handler(ev) {
	    var store = this.store;
	    var removePointer = false;
	    var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
	    var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
	    var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
	    var isTouch = pointerType === INPUT_TYPE_TOUCH; // get index of the event in the store

	    var storeIndex = inArray(store, ev.pointerId, 'pointerId'); // start and mouse must be down

	    if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
	      if (storeIndex < 0) {
	        store.push(ev);
	        storeIndex = store.length - 1;
	      }
	    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	      removePointer = true;
	    } // it not found, so the pointer hasn't been down (so it's probably a hover)


	    if (storeIndex < 0) {
	      return;
	    } // update the event in the store


	    store[storeIndex] = ev;
	    this.callback(this.manager, eventType, {
	      pointers: store,
	      changedPointers: [ev],
	      pointerType: pointerType,
	      srcEvent: ev
	    });

	    if (removePointer) {
	      // remove from the store
	      store.splice(storeIndex, 1);
	    }
	  };

	  return PointerEventInput;
	}(Input);
	/**
	 * @private
	 * convert array-like objects to real arrays
	 * @param {Object} obj
	 * @returns {Array}
	 */


	function toArray(obj) {
	  return Array.prototype.slice.call(obj, 0);
	}
	/**
	 * @private
	 * unique array with objects based on a key (like 'id') or just by the array's value
	 * @param {Array} src [{id:1},{id:2},{id:1}]
	 * @param {String} [key]
	 * @param {Boolean} [sort=False]
	 * @returns {Array} [{id:1},{id:2}]
	 */


	function uniqueArray(src, key, sort) {
	  var results = [];
	  var values = [];
	  var i = 0;

	  while (i < src.length) {
	    var val = key ? src[i][key] : src[i];

	    if (inArray(values, val) < 0) {
	      results.push(src[i]);
	    }

	    values[i] = val;
	    i++;
	  }

	  if (sort) {
	    if (!key) {
	      results = results.sort();
	    } else {
	      results = results.sort(function (a, b) {
	        return a[key] > b[key];
	      });
	    }
	  }

	  return results;
	}

	var TOUCH_INPUT_MAP = {
	  touchstart: INPUT_START,
	  touchmove: INPUT_MOVE,
	  touchend: INPUT_END,
	  touchcancel: INPUT_CANCEL
	};
	var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
	/**
	 * @private
	 * Multi-user touch events input
	 * @constructor
	 * @extends Input
	 */

	var TouchInput = /*#__PURE__*/function (_Input) {
	  _inheritsLoose(TouchInput, _Input);

	  function TouchInput() {
	    var _this;

	    TouchInput.prototype.evTarget = TOUCH_TARGET_EVENTS;
	    _this = _Input.apply(this, arguments) || this;
	    _this.targetIds = {}; // this.evTarget = TOUCH_TARGET_EVENTS;

	    return _this;
	  }

	  var _proto = TouchInput.prototype;

	  _proto.handler = function handler(ev) {
	    var type = TOUCH_INPUT_MAP[ev.type];
	    var touches = getTouches.call(this, ev, type);

	    if (!touches) {
	      return;
	    }

	    this.callback(this.manager, type, {
	      pointers: touches[0],
	      changedPointers: touches[1],
	      pointerType: INPUT_TYPE_TOUCH,
	      srcEvent: ev
	    });
	  };

	  return TouchInput;
	}(Input);

	function getTouches(ev, type) {
	  var allTouches = toArray(ev.touches);
	  var targetIds = this.targetIds; // when there is only one touch, the process can be simplified

	  if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
	    targetIds[allTouches[0].identifier] = true;
	    return [allTouches, allTouches];
	  }

	  var i;
	  var targetTouches;
	  var changedTouches = toArray(ev.changedTouches);
	  var changedTargetTouches = [];
	  var target = this.target; // get target touches from touches

	  targetTouches = allTouches.filter(function (touch) {
	    return hasParent(touch.target, target);
	  }); // collect touches

	  if (type === INPUT_START) {
	    i = 0;

	    while (i < targetTouches.length) {
	      targetIds[targetTouches[i].identifier] = true;
	      i++;
	    }
	  } // filter changed touches to only contain touches that exist in the collected target ids


	  i = 0;

	  while (i < changedTouches.length) {
	    if (targetIds[changedTouches[i].identifier]) {
	      changedTargetTouches.push(changedTouches[i]);
	    } // cleanup removed touches


	    if (type & (INPUT_END | INPUT_CANCEL)) {
	      delete targetIds[changedTouches[i].identifier];
	    }

	    i++;
	  }

	  if (!changedTargetTouches.length) {
	    return;
	  }

	  return [// merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
	  uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true), changedTargetTouches];
	}

	var MOUSE_INPUT_MAP = {
	  mousedown: INPUT_START,
	  mousemove: INPUT_MOVE,
	  mouseup: INPUT_END
	};
	var MOUSE_ELEMENT_EVENTS = 'mousedown';
	var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';
	/**
	 * @private
	 * Mouse events input
	 * @constructor
	 * @extends Input
	 */

	var MouseInput = /*#__PURE__*/function (_Input) {
	  _inheritsLoose(MouseInput, _Input);

	  function MouseInput() {
	    var _this;

	    var proto = MouseInput.prototype;
	    proto.evEl = MOUSE_ELEMENT_EVENTS;
	    proto.evWin = MOUSE_WINDOW_EVENTS;
	    _this = _Input.apply(this, arguments) || this;
	    _this.pressed = false; // mousedown state

	    return _this;
	  }
	  /**
	   * @private
	   * handle mouse events
	   * @param {Object} ev
	   */


	  var _proto = MouseInput.prototype;

	  _proto.handler = function handler(ev) {
	    var eventType = MOUSE_INPUT_MAP[ev.type]; // on start we want to have the left mouse button down

	    if (eventType & INPUT_START && ev.button === 0) {
	      this.pressed = true;
	    }

	    if (eventType & INPUT_MOVE && ev.which !== 1) {
	      eventType = INPUT_END;
	    } // mouse must be down


	    if (!this.pressed) {
	      return;
	    }

	    if (eventType & INPUT_END) {
	      this.pressed = false;
	    }

	    this.callback(this.manager, eventType, {
	      pointers: [ev],
	      changedPointers: [ev],
	      pointerType: INPUT_TYPE_MOUSE,
	      srcEvent: ev
	    });
	  };

	  return MouseInput;
	}(Input);
	/**
	 * @private
	 * Combined touch and mouse input
	 *
	 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
	 * This because touch devices also emit mouse events while doing a touch.
	 *
	 * @constructor
	 * @extends Input
	 */


	var DEDUP_TIMEOUT = 2500;
	var DEDUP_DISTANCE = 25;

	function setLastTouch(eventData) {
	  var _eventData$changedPoi = eventData.changedPointers,
	      touch = _eventData$changedPoi[0];

	  if (touch.identifier === this.primaryTouch) {
	    var lastTouch = {
	      x: touch.clientX,
	      y: touch.clientY
	    };
	    var lts = this.lastTouches;
	    this.lastTouches.push(lastTouch);

	    var removeLastTouch = function removeLastTouch() {
	      var i = lts.indexOf(lastTouch);

	      if (i > -1) {
	        lts.splice(i, 1);
	      }
	    };

	    setTimeout(removeLastTouch, DEDUP_TIMEOUT);
	  }
	}

	function recordTouches(eventType, eventData) {
	  if (eventType & INPUT_START) {
	    this.primaryTouch = eventData.changedPointers[0].identifier;
	    setLastTouch.call(this, eventData);
	  } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	    setLastTouch.call(this, eventData);
	  }
	}

	function isSyntheticEvent(eventData) {
	  var x = eventData.srcEvent.clientX;
	  var y = eventData.srcEvent.clientY;

	  for (var i = 0; i < this.lastTouches.length; i++) {
	    var t = this.lastTouches[i];
	    var dx = Math.abs(x - t.x);
	    var dy = Math.abs(y - t.y);

	    if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
	      return true;
	    }
	  }

	  return false;
	}

	var TouchMouseInput = /*#__PURE__*/function () {
	  var TouchMouseInput = /*#__PURE__*/function (_Input) {
	    _inheritsLoose(TouchMouseInput, _Input);

	    function TouchMouseInput(_manager, callback) {
	      var _this;

	      _this = _Input.call(this, _manager, callback) || this;

	      _this.handler = function (manager, inputEvent, inputData) {
	        var isTouch = inputData.pointerType === INPUT_TYPE_TOUCH;
	        var isMouse = inputData.pointerType === INPUT_TYPE_MOUSE;

	        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
	          return;
	        } // when we're in a touch event, record touches to  de-dupe synthetic mouse event


	        if (isTouch) {
	          recordTouches.call(_assertThisInitialized(_assertThisInitialized(_this)), inputEvent, inputData);
	        } else if (isMouse && isSyntheticEvent.call(_assertThisInitialized(_assertThisInitialized(_this)), inputData)) {
	          return;
	        }

	        _this.callback(manager, inputEvent, inputData);
	      };

	      _this.touch = new TouchInput(_this.manager, _this.handler);
	      _this.mouse = new MouseInput(_this.manager, _this.handler);
	      _this.primaryTouch = null;
	      _this.lastTouches = [];
	      return _this;
	    }
	    /**
	     * @private
	     * handle mouse and touch events
	     * @param {Hammer} manager
	     * @param {String} inputEvent
	     * @param {Object} inputData
	     */


	    var _proto = TouchMouseInput.prototype;
	    /**
	     * @private
	     * remove the event listeners
	     */

	    _proto.destroy = function destroy() {
	      this.touch.destroy();
	      this.mouse.destroy();
	    };

	    return TouchMouseInput;
	  }(Input);

	  return TouchMouseInput;
	}();
	/**
	 * @private
	 * create new input type manager
	 * called by the Manager constructor
	 * @param {Hammer} manager
	 * @returns {Input}
	 */


	function createInputInstance(manager) {
	  var Type; // let inputClass = manager.options.inputClass;

	  var inputClass = manager.options.inputClass;

	  if (inputClass) {
	    Type = inputClass;
	  } else if (SUPPORT_POINTER_EVENTS) {
	    Type = PointerEventInput;
	  } else if (SUPPORT_ONLY_TOUCH) {
	    Type = TouchInput;
	  } else if (!SUPPORT_TOUCH) {
	    Type = MouseInput;
	  } else {
	    Type = TouchMouseInput;
	  }

	  return new Type(manager, inputHandler);
	}
	/**
	 * @private
	 * if the argument is an array, we want to execute the fn on each entry
	 * if it aint an array we don't want to do a thing.
	 * this is used by all the methods that accept a single and array argument.
	 * @param {*|Array} arg
	 * @param {String} fn
	 * @param {Object} [context]
	 * @returns {Boolean}
	 */


	function invokeArrayArg(arg, fn, context) {
	  if (Array.isArray(arg)) {
	    each(arg, context[fn], context);
	    return true;
	  }

	  return false;
	}

	var STATE_POSSIBLE = 1;
	var STATE_BEGAN = 2;
	var STATE_CHANGED = 4;
	var STATE_ENDED = 8;
	var STATE_RECOGNIZED = STATE_ENDED;
	var STATE_CANCELLED = 16;
	var STATE_FAILED = 32;
	/**
	 * @private
	 * get a unique id
	 * @returns {number} uniqueId
	 */

	var _uniqueId = 1;

	function uniqueId() {
	  return _uniqueId++;
	}
	/**
	 * @private
	 * get a recognizer by name if it is bound to a manager
	 * @param {Recognizer|String} otherRecognizer
	 * @param {Recognizer} recognizer
	 * @returns {Recognizer}
	 */


	function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
	  var manager = recognizer.manager;

	  if (manager) {
	    return manager.get(otherRecognizer);
	  }

	  return otherRecognizer;
	}
	/**
	 * @private
	 * get a usable string, used as event postfix
	 * @param {constant} state
	 * @returns {String} state
	 */


	function stateStr(state) {
	  if (state & STATE_CANCELLED) {
	    return 'cancel';
	  } else if (state & STATE_ENDED) {
	    return 'end';
	  } else if (state & STATE_CHANGED) {
	    return 'move';
	  } else if (state & STATE_BEGAN) {
	    return 'start';
	  }

	  return '';
	}
	/**
	 * @private
	 * Recognizer flow explained; *
	 * All recognizers have the initial state of POSSIBLE when a input session starts.
	 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
	 * Example session for mouse-input: mousedown -> mousemove -> mouseup
	 *
	 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
	 * which determines with state it should be.
	 *
	 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
	 * POSSIBLE to give it another change on the next cycle.
	 *
	 *               Possible
	 *                  |
	 *            +-----+---------------+
	 *            |                     |
	 *      +-----+-----+               |
	 *      |           |               |
	 *   Failed      Cancelled          |
	 *                          +-------+------+
	 *                          |              |
	 *                      Recognized       Began
	 *                                         |
	 *                                      Changed
	 *                                         |
	 *                                  Ended/Recognized
	 */

	/**
	 * @private
	 * Recognizer
	 * Every recognizer needs to extend from this class.
	 * @constructor
	 * @param {Object} options
	 */


	var Recognizer = /*#__PURE__*/function () {
	  function Recognizer(options) {
	    if (options === void 0) {
	      options = {};
	    }

	    this.options = _extends({
	      enable: true
	    }, options);
	    this.id = uniqueId();
	    this.manager = null; // default is enable true

	    this.state = STATE_POSSIBLE;
	    this.simultaneous = {};
	    this.requireFail = [];
	  }
	  /**
	   * @private
	   * set options
	   * @param {Object} options
	   * @return {Recognizer}
	   */


	  var _proto = Recognizer.prototype;

	  _proto.set = function set(options) {
	    assign$1$1(this.options, options); // also update the touchAction, in case something changed about the directions/enabled state

	    this.manager && this.manager.touchAction.update();
	    return this;
	  };
	  /**
	   * @private
	   * recognize simultaneous with an other recognizer.
	   * @param {Recognizer} otherRecognizer
	   * @returns {Recognizer} this
	   */


	  _proto.recognizeWith = function recognizeWith(otherRecognizer) {
	    if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
	      return this;
	    }

	    var simultaneous = this.simultaneous;
	    otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);

	    if (!simultaneous[otherRecognizer.id]) {
	      simultaneous[otherRecognizer.id] = otherRecognizer;
	      otherRecognizer.recognizeWith(this);
	    }

	    return this;
	  };
	  /**
	   * @private
	   * drop the simultaneous link. it doesnt remove the link on the other recognizer.
	   * @param {Recognizer} otherRecognizer
	   * @returns {Recognizer} this
	   */


	  _proto.dropRecognizeWith = function dropRecognizeWith(otherRecognizer) {
	    if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
	      return this;
	    }

	    otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	    delete this.simultaneous[otherRecognizer.id];
	    return this;
	  };
	  /**
	   * @private
	   * recognizer can only run when an other is failing
	   * @param {Recognizer} otherRecognizer
	   * @returns {Recognizer} this
	   */


	  _proto.requireFailure = function requireFailure(otherRecognizer) {
	    if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
	      return this;
	    }

	    var requireFail = this.requireFail;
	    otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);

	    if (inArray(requireFail, otherRecognizer) === -1) {
	      requireFail.push(otherRecognizer);
	      otherRecognizer.requireFailure(this);
	    }

	    return this;
	  };
	  /**
	   * @private
	   * drop the requireFailure link. it does not remove the link on the other recognizer.
	   * @param {Recognizer} otherRecognizer
	   * @returns {Recognizer} this
	   */


	  _proto.dropRequireFailure = function dropRequireFailure(otherRecognizer) {
	    if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
	      return this;
	    }

	    otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	    var index = inArray(this.requireFail, otherRecognizer);

	    if (index > -1) {
	      this.requireFail.splice(index, 1);
	    }

	    return this;
	  };
	  /**
	   * @private
	   * has require failures boolean
	   * @returns {boolean}
	   */


	  _proto.hasRequireFailures = function hasRequireFailures() {
	    return this.requireFail.length > 0;
	  };
	  /**
	   * @private
	   * if the recognizer can recognize simultaneous with an other recognizer
	   * @param {Recognizer} otherRecognizer
	   * @returns {Boolean}
	   */


	  _proto.canRecognizeWith = function canRecognizeWith(otherRecognizer) {
	    return !!this.simultaneous[otherRecognizer.id];
	  };
	  /**
	   * @private
	   * You should use `tryEmit` instead of `emit` directly to check
	   * that all the needed recognizers has failed before emitting.
	   * @param {Object} input
	   */


	  _proto.emit = function emit(input) {
	    var self = this;
	    var state = this.state;

	    function emit(event) {
	      self.manager.emit(event, input);
	    } // 'panstart' and 'panmove'


	    if (state < STATE_ENDED) {
	      emit(self.options.event + stateStr(state));
	    }

	    emit(self.options.event); // simple 'eventName' events

	    if (input.additionalEvent) {
	      // additional event(panleft, panright, pinchin, pinchout...)
	      emit(input.additionalEvent);
	    } // panend and pancancel


	    if (state >= STATE_ENDED) {
	      emit(self.options.event + stateStr(state));
	    }
	  };
	  /**
	   * @private
	   * Check that all the require failure recognizers has failed,
	   * if true, it emits a gesture event,
	   * otherwise, setup the state to FAILED.
	   * @param {Object} input
	   */


	  _proto.tryEmit = function tryEmit(input) {
	    if (this.canEmit()) {
	      return this.emit(input);
	    } // it's failing anyway


	    this.state = STATE_FAILED;
	  };
	  /**
	   * @private
	   * can we emit?
	   * @returns {boolean}
	   */


	  _proto.canEmit = function canEmit() {
	    var i = 0;

	    while (i < this.requireFail.length) {
	      if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
	        return false;
	      }

	      i++;
	    }

	    return true;
	  };
	  /**
	   * @private
	   * update the recognizer
	   * @param {Object} inputData
	   */


	  _proto.recognize = function recognize(inputData) {
	    // make a new copy of the inputData
	    // so we can change the inputData without messing up the other recognizers
	    var inputDataClone = assign$1$1({}, inputData); // is is enabled and allow recognizing?

	    if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
	      this.reset();
	      this.state = STATE_FAILED;
	      return;
	    } // reset when we've reached the end


	    if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
	      this.state = STATE_POSSIBLE;
	    }

	    this.state = this.process(inputDataClone); // the recognizer has recognized a gesture
	    // so trigger an event

	    if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
	      this.tryEmit(inputDataClone);
	    }
	  };
	  /**
	   * @private
	   * return the state of the recognizer
	   * the actual recognizing happens in this method
	   * @virtual
	   * @param {Object} inputData
	   * @returns {constant} STATE
	   */

	  /* jshint ignore:start */


	  _proto.process = function process(inputData) {};
	  /* jshint ignore:end */

	  /**
	   * @private
	   * return the preferred touch-action
	   * @virtual
	   * @returns {Array}
	   */


	  _proto.getTouchAction = function getTouchAction() {};
	  /**
	   * @private
	   * called when the gesture isn't allowed to recognize
	   * like when another is being recognized or it is disabled
	   * @virtual
	   */


	  _proto.reset = function reset() {};

	  return Recognizer;
	}();
	/**
	 * @private
	 * A tap is recognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
	 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
	 * a single tap.
	 *
	 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
	 * multi-taps being recognized.
	 * @constructor
	 * @extends Recognizer
	 */


	var TapRecognizer = /*#__PURE__*/function (_Recognizer) {
	  _inheritsLoose(TapRecognizer, _Recognizer);

	  function TapRecognizer(options) {
	    var _this;

	    if (options === void 0) {
	      options = {};
	    }

	    _this = _Recognizer.call(this, _extends({
	      event: 'tap',
	      pointers: 1,
	      taps: 1,
	      interval: 300,
	      // max time between the multi-tap taps
	      time: 250,
	      // max time of the pointer to be down (like finger on the screen)
	      threshold: 9,
	      // a minimal movement is ok, but keep it low
	      posThreshold: 10
	    }, options)) || this; // previous time and center,
	    // used for tap counting

	    _this.pTime = false;
	    _this.pCenter = false;
	    _this._timer = null;
	    _this._input = null;
	    _this.count = 0;
	    return _this;
	  }

	  var _proto = TapRecognizer.prototype;

	  _proto.getTouchAction = function getTouchAction() {
	    return [TOUCH_ACTION_MANIPULATION];
	  };

	  _proto.process = function process(input) {
	    var _this2 = this;

	    var options = this.options;
	    var validPointers = input.pointers.length === options.pointers;
	    var validMovement = input.distance < options.threshold;
	    var validTouchTime = input.deltaTime < options.time;
	    this.reset();

	    if (input.eventType & INPUT_START && this.count === 0) {
	      return this.failTimeout();
	    } // we only allow little movement
	    // and we've reached an end event, so a tap is possible


	    if (validMovement && validTouchTime && validPointers) {
	      if (input.eventType !== INPUT_END) {
	        return this.failTimeout();
	      }

	      var validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
	      var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
	      this.pTime = input.timeStamp;
	      this.pCenter = input.center;

	      if (!validMultiTap || !validInterval) {
	        this.count = 1;
	      } else {
	        this.count += 1;
	      }

	      this._input = input; // if tap count matches we have recognized it,
	      // else it has began recognizing...

	      var tapCount = this.count % options.taps;

	      if (tapCount === 0) {
	        // no failing requirements, immediately trigger the tap event
	        // or wait as long as the multitap interval to trigger
	        if (!this.hasRequireFailures()) {
	          return STATE_RECOGNIZED;
	        } else {
	          this._timer = setTimeout(function () {
	            _this2.state = STATE_RECOGNIZED;

	            _this2.tryEmit();
	          }, options.interval);
	          return STATE_BEGAN;
	        }
	      }
	    }

	    return STATE_FAILED;
	  };

	  _proto.failTimeout = function failTimeout() {
	    var _this3 = this;

	    this._timer = setTimeout(function () {
	      _this3.state = STATE_FAILED;
	    }, this.options.interval);
	    return STATE_FAILED;
	  };

	  _proto.reset = function reset() {
	    clearTimeout(this._timer);
	  };

	  _proto.emit = function emit() {
	    if (this.state === STATE_RECOGNIZED) {
	      this._input.tapCount = this.count;
	      this.manager.emit(this.options.event, this._input);
	    }
	  };

	  return TapRecognizer;
	}(Recognizer);
	/**
	 * @private
	 * This recognizer is just used as a base for the simple attribute recognizers.
	 * @constructor
	 * @extends Recognizer
	 */


	var AttrRecognizer = /*#__PURE__*/function (_Recognizer) {
	  _inheritsLoose(AttrRecognizer, _Recognizer);

	  function AttrRecognizer(options) {
	    if (options === void 0) {
	      options = {};
	    }

	    return _Recognizer.call(this, _extends({
	      pointers: 1
	    }, options)) || this;
	  }
	  /**
	   * @private
	   * Used to check if it the recognizer receives valid input, like input.distance > 10.
	   * @memberof AttrRecognizer
	   * @param {Object} input
	   * @returns {Boolean} recognized
	   */


	  var _proto = AttrRecognizer.prototype;

	  _proto.attrTest = function attrTest(input) {
	    var optionPointers = this.options.pointers;
	    return optionPointers === 0 || input.pointers.length === optionPointers;
	  };
	  /**
	   * @private
	   * Process the input and return the state for the recognizer
	   * @memberof AttrRecognizer
	   * @param {Object} input
	   * @returns {*} State
	   */


	  _proto.process = function process(input) {
	    var state = this.state;
	    var eventType = input.eventType;
	    var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
	    var isValid = this.attrTest(input); // on cancel input and we've recognized before, return STATE_CANCELLED

	    if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
	      return state | STATE_CANCELLED;
	    } else if (isRecognized || isValid) {
	      if (eventType & INPUT_END) {
	        return state | STATE_ENDED;
	      } else if (!(state & STATE_BEGAN)) {
	        return STATE_BEGAN;
	      }

	      return state | STATE_CHANGED;
	    }

	    return STATE_FAILED;
	  };

	  return AttrRecognizer;
	}(Recognizer);
	/**
	 * @private
	 * direction cons to string
	 * @param {constant} direction
	 * @returns {String}
	 */


	function directionStr(direction) {
	  if (direction === DIRECTION_DOWN) {
	    return 'down';
	  } else if (direction === DIRECTION_UP) {
	    return 'up';
	  } else if (direction === DIRECTION_LEFT) {
	    return 'left';
	  } else if (direction === DIRECTION_RIGHT) {
	    return 'right';
	  }

	  return '';
	}
	/**
	 * @private
	 * Pan
	 * Recognized when the pointer is down and moved in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */


	var PanRecognizer = /*#__PURE__*/function (_AttrRecognizer) {
	  _inheritsLoose(PanRecognizer, _AttrRecognizer);

	  function PanRecognizer(options) {
	    var _this;

	    if (options === void 0) {
	      options = {};
	    }

	    _this = _AttrRecognizer.call(this, _extends({
	      event: 'pan',
	      threshold: 10,
	      pointers: 1,
	      direction: DIRECTION_ALL
	    }, options)) || this;
	    _this.pX = null;
	    _this.pY = null;
	    return _this;
	  }

	  var _proto = PanRecognizer.prototype;

	  _proto.getTouchAction = function getTouchAction() {
	    var direction = this.options.direction;
	    var actions = [];

	    if (direction & DIRECTION_HORIZONTAL) {
	      actions.push(TOUCH_ACTION_PAN_Y);
	    }

	    if (direction & DIRECTION_VERTICAL) {
	      actions.push(TOUCH_ACTION_PAN_X);
	    }

	    return actions;
	  };

	  _proto.directionTest = function directionTest(input) {
	    var options = this.options;
	    var hasMoved = true;
	    var distance = input.distance;
	    var direction = input.direction;
	    var x = input.deltaX;
	    var y = input.deltaY; // lock to axis?

	    if (!(direction & options.direction)) {
	      if (options.direction & DIRECTION_HORIZONTAL) {
	        direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
	        hasMoved = x !== this.pX;
	        distance = Math.abs(input.deltaX);
	      } else {
	        direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
	        hasMoved = y !== this.pY;
	        distance = Math.abs(input.deltaY);
	      }
	    }

	    input.direction = direction;
	    return hasMoved && distance > options.threshold && direction & options.direction;
	  };

	  _proto.attrTest = function attrTest(input) {
	    return AttrRecognizer.prototype.attrTest.call(this, input) && ( // replace with a super call
	    this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
	  };

	  _proto.emit = function emit(input) {
	    this.pX = input.deltaX;
	    this.pY = input.deltaY;
	    var direction = directionStr(input.direction);

	    if (direction) {
	      input.additionalEvent = this.options.event + direction;
	    }

	    _AttrRecognizer.prototype.emit.call(this, input);
	  };

	  return PanRecognizer;
	}(AttrRecognizer);
	/**
	 * @private
	 * Swipe
	 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */


	var SwipeRecognizer = /*#__PURE__*/function (_AttrRecognizer) {
	  _inheritsLoose(SwipeRecognizer, _AttrRecognizer);

	  function SwipeRecognizer(options) {
	    if (options === void 0) {
	      options = {};
	    }

	    return _AttrRecognizer.call(this, _extends({
	      event: 'swipe',
	      threshold: 10,
	      velocity: 0.3,
	      direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
	      pointers: 1
	    }, options)) || this;
	  }

	  var _proto = SwipeRecognizer.prototype;

	  _proto.getTouchAction = function getTouchAction() {
	    return PanRecognizer.prototype.getTouchAction.call(this);
	  };

	  _proto.attrTest = function attrTest(input) {
	    var direction = this.options.direction;
	    var velocity;

	    if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
	      velocity = input.overallVelocity;
	    } else if (direction & DIRECTION_HORIZONTAL) {
	      velocity = input.overallVelocityX;
	    } else if (direction & DIRECTION_VERTICAL) {
	      velocity = input.overallVelocityY;
	    }

	    return _AttrRecognizer.prototype.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers === this.options.pointers && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
	  };

	  _proto.emit = function emit(input) {
	    var direction = directionStr(input.offsetDirection);

	    if (direction) {
	      this.manager.emit(this.options.event + direction, input);
	    }

	    this.manager.emit(this.options.event, input);
	  };

	  return SwipeRecognizer;
	}(AttrRecognizer);
	/**
	 * @private
	 * Pinch
	 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
	 * @constructor
	 * @extends AttrRecognizer
	 */


	var PinchRecognizer = /*#__PURE__*/function (_AttrRecognizer) {
	  _inheritsLoose(PinchRecognizer, _AttrRecognizer);

	  function PinchRecognizer(options) {
	    if (options === void 0) {
	      options = {};
	    }

	    return _AttrRecognizer.call(this, _extends({
	      event: 'pinch',
	      threshold: 0,
	      pointers: 2
	    }, options)) || this;
	  }

	  var _proto = PinchRecognizer.prototype;

	  _proto.getTouchAction = function getTouchAction() {
	    return [TOUCH_ACTION_NONE];
	  };

	  _proto.attrTest = function attrTest(input) {
	    return _AttrRecognizer.prototype.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
	  };

	  _proto.emit = function emit(input) {
	    if (input.scale !== 1) {
	      var inOut = input.scale < 1 ? 'in' : 'out';
	      input.additionalEvent = this.options.event + inOut;
	    }

	    _AttrRecognizer.prototype.emit.call(this, input);
	  };

	  return PinchRecognizer;
	}(AttrRecognizer);
	/**
	 * @private
	 * Rotate
	 * Recognized when two or more pointer are moving in a circular motion.
	 * @constructor
	 * @extends AttrRecognizer
	 */


	var RotateRecognizer = /*#__PURE__*/function (_AttrRecognizer) {
	  _inheritsLoose(RotateRecognizer, _AttrRecognizer);

	  function RotateRecognizer(options) {
	    if (options === void 0) {
	      options = {};
	    }

	    return _AttrRecognizer.call(this, _extends({
	      event: 'rotate',
	      threshold: 0,
	      pointers: 2
	    }, options)) || this;
	  }

	  var _proto = RotateRecognizer.prototype;

	  _proto.getTouchAction = function getTouchAction() {
	    return [TOUCH_ACTION_NONE];
	  };

	  _proto.attrTest = function attrTest(input) {
	    return _AttrRecognizer.prototype.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
	  };

	  return RotateRecognizer;
	}(AttrRecognizer);
	/**
	 * @private
	 * Press
	 * Recognized when the pointer is down for x ms without any movement.
	 * @constructor
	 * @extends Recognizer
	 */


	var PressRecognizer = /*#__PURE__*/function (_Recognizer) {
	  _inheritsLoose(PressRecognizer, _Recognizer);

	  function PressRecognizer(options) {
	    var _this;

	    if (options === void 0) {
	      options = {};
	    }

	    _this = _Recognizer.call(this, _extends({
	      event: 'press',
	      pointers: 1,
	      time: 251,
	      // minimal time of the pointer to be pressed
	      threshold: 9
	    }, options)) || this;
	    _this._timer = null;
	    _this._input = null;
	    return _this;
	  }

	  var _proto = PressRecognizer.prototype;

	  _proto.getTouchAction = function getTouchAction() {
	    return [TOUCH_ACTION_AUTO];
	  };

	  _proto.process = function process(input) {
	    var _this2 = this;

	    var options = this.options;
	    var validPointers = input.pointers.length === options.pointers;
	    var validMovement = input.distance < options.threshold;
	    var validTime = input.deltaTime > options.time;
	    this._input = input; // we only allow little movement
	    // and we've reached an end event, so a tap is possible

	    if (!validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) {
	      this.reset();
	    } else if (input.eventType & INPUT_START) {
	      this.reset();
	      this._timer = setTimeout(function () {
	        _this2.state = STATE_RECOGNIZED;

	        _this2.tryEmit();
	      }, options.time);
	    } else if (input.eventType & INPUT_END) {
	      return STATE_RECOGNIZED;
	    }

	    return STATE_FAILED;
	  };

	  _proto.reset = function reset() {
	    clearTimeout(this._timer);
	  };

	  _proto.emit = function emit(input) {
	    if (this.state !== STATE_RECOGNIZED) {
	      return;
	    }

	    if (input && input.eventType & INPUT_END) {
	      this.manager.emit(this.options.event + "up", input);
	    } else {
	      this._input.timeStamp = now$1();
	      this.manager.emit(this.options.event, this._input);
	    }
	  };

	  return PressRecognizer;
	}(Recognizer);

	var defaults = {
	  /**
	   * @private
	   * set if DOM events are being triggered.
	   * But this is slower and unused by simple implementations, so disabled by default.
	   * @type {Boolean}
	   * @default false
	   */
	  domEvents: false,

	  /**
	   * @private
	   * The value for the touchAction property/fallback.
	   * When set to `compute` it will magically set the correct value based on the added recognizers.
	   * @type {String}
	   * @default compute
	   */
	  touchAction: TOUCH_ACTION_COMPUTE,

	  /**
	   * @private
	   * @type {Boolean}
	   * @default true
	   */
	  enable: true,

	  /**
	   * @private
	   * EXPERIMENTAL FEATURE -- can be removed/changed
	   * Change the parent input target element.
	   * If Null, then it is being set the to main element.
	   * @type {Null|EventTarget}
	   * @default null
	   */
	  inputTarget: null,

	  /**
	   * @private
	   * force an input class
	   * @type {Null|Function}
	   * @default null
	   */
	  inputClass: null,

	  /**
	   * @private
	   * Some CSS properties can be used to improve the working of Hammer.
	   * Add them to this method and they will be set when creating a new Manager.
	   * @namespace
	   */
	  cssProps: {
	    /**
	     * @private
	     * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
	     * @type {String}
	     * @default 'none'
	     */
	    userSelect: "none",

	    /**
	     * @private
	     * Disable the Windows Phone grippers when pressing an element.
	     * @type {String}
	     * @default 'none'
	     */
	    touchSelect: "none",

	    /**
	     * @private
	     * Disables the default callout shown when you touch and hold a touch target.
	     * On iOS, when you touch and hold a touch target such as a link, Safari displays
	     * a callout containing information about the link. This property allows you to disable that callout.
	     * @type {String}
	     * @default 'none'
	     */
	    touchCallout: "none",

	    /**
	     * @private
	     * Specifies whether zooming is enabled. Used by IE10>
	     * @type {String}
	     * @default 'none'
	     */
	    contentZooming: "none",

	    /**
	     * @private
	     * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
	     * @type {String}
	     * @default 'none'
	     */
	    userDrag: "none",

	    /**
	     * @private
	     * Overrides the highlight color shown when the user taps a link or a JavaScript
	     * clickable element in iOS. This property obeys the alpha value, if specified.
	     * @type {String}
	     * @default 'rgba(0,0,0,0)'
	     */
	    tapHighlightColor: "rgba(0,0,0,0)"
	  }
	};
	/**
	 * @private
	 * Default recognizer setup when calling `Hammer()`
	 * When creating a new Manager these will be skipped.
	 * This is separated with other defaults because of tree-shaking.
	 * @type {Array}
	 */

	var preset = [[RotateRecognizer, {
	  enable: false
	}], [PinchRecognizer, {
	  enable: false
	}, ['rotate']], [SwipeRecognizer, {
	  direction: DIRECTION_HORIZONTAL
	}], [PanRecognizer, {
	  direction: DIRECTION_HORIZONTAL
	}, ['swipe']], [TapRecognizer], [TapRecognizer, {
	  event: 'doubletap',
	  taps: 2
	}, ['tap']], [PressRecognizer]];
	var STOP = 1;
	var FORCED_STOP = 2;
	/**
	 * @private
	 * add/remove the css properties as defined in manager.options.cssProps
	 * @param {Manager} manager
	 * @param {Boolean} add
	 */

	function toggleCssProps(manager, add) {
	  var element = manager.element;

	  if (!element.style) {
	    return;
	  }

	  var prop;
	  each(manager.options.cssProps, function (value, name) {
	    prop = prefixed(element.style, name);

	    if (add) {
	      manager.oldCssProps[prop] = element.style[prop];
	      element.style[prop] = value;
	    } else {
	      element.style[prop] = manager.oldCssProps[prop] || "";
	    }
	  });

	  if (!add) {
	    manager.oldCssProps = {};
	  }
	}
	/**
	 * @private
	 * trigger dom event
	 * @param {String} event
	 * @param {Object} data
	 */


	function triggerDomEvent(event, data) {
	  var gestureEvent = document.createEvent("Event");
	  gestureEvent.initEvent(event, true, true);
	  gestureEvent.gesture = data;
	  data.target.dispatchEvent(gestureEvent);
	}
	/**
	* @private
	 * Manager
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */


	var Manager = /*#__PURE__*/function () {
	  function Manager(element, options) {
	    var _this = this;

	    this.options = assign$1$1({}, defaults, options || {});
	    this.options.inputTarget = this.options.inputTarget || element;
	    this.handlers = {};
	    this.session = {};
	    this.recognizers = [];
	    this.oldCssProps = {};
	    this.element = element;
	    this.input = createInputInstance(this);
	    this.touchAction = new TouchAction(this, this.options.touchAction);
	    toggleCssProps(this, true);
	    each(this.options.recognizers, function (item) {
	      var recognizer = _this.add(new item[0](item[1]));

	      item[2] && recognizer.recognizeWith(item[2]);
	      item[3] && recognizer.requireFailure(item[3]);
	    }, this);
	  }
	  /**
	   * @private
	   * set options
	   * @param {Object} options
	   * @returns {Manager}
	   */


	  var _proto = Manager.prototype;

	  _proto.set = function set(options) {
	    assign$1$1(this.options, options); // Options that need a little more setup

	    if (options.touchAction) {
	      this.touchAction.update();
	    }

	    if (options.inputTarget) {
	      // Clean up existing event listeners and reinitialize
	      this.input.destroy();
	      this.input.target = options.inputTarget;
	      this.input.init();
	    }

	    return this;
	  };
	  /**
	   * @private
	   * stop recognizing for this session.
	   * This session will be discarded, when a new [input]start event is fired.
	   * When forced, the recognizer cycle is stopped immediately.
	   * @param {Boolean} [force]
	   */


	  _proto.stop = function stop(force) {
	    this.session.stopped = force ? FORCED_STOP : STOP;
	  };
	  /**
	   * @private
	   * run the recognizers!
	   * called by the inputHandler function on every movement of the pointers (touches)
	   * it walks through all the recognizers and tries to detect the gesture that is being made
	   * @param {Object} inputData
	   */


	  _proto.recognize = function recognize(inputData) {
	    var session = this.session;

	    if (session.stopped) {
	      return;
	    } // run the touch-action polyfill


	    this.touchAction.preventDefaults(inputData);
	    var recognizer;
	    var recognizers = this.recognizers; // this holds the recognizer that is being recognized.
	    // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
	    // if no recognizer is detecting a thing, it is set to `null`

	    var curRecognizer = session.curRecognizer; // reset when the last recognizer is recognized
	    // or when we're in a new session

	    if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) {
	      session.curRecognizer = null;
	      curRecognizer = null;
	    }

	    var i = 0;

	    while (i < recognizers.length) {
	      recognizer = recognizers[i]; // find out if we are allowed try to recognize the input for this one.
	      // 1.   allow if the session is NOT forced stopped (see the .stop() method)
	      // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
	      //      that is being recognized.
	      // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
	      //      this can be setup with the `recognizeWith()` method on the recognizer.

	      if (session.stopped !== FORCED_STOP && ( // 1
	      !curRecognizer || recognizer === curRecognizer || // 2
	      recognizer.canRecognizeWith(curRecognizer))) {
	        // 3
	        recognizer.recognize(inputData);
	      } else {
	        recognizer.reset();
	      } // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
	      // current active recognizer. but only if we don't already have an active recognizer


	      if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
	        session.curRecognizer = recognizer;
	        curRecognizer = recognizer;
	      }

	      i++;
	    }
	  };
	  /**
	   * @private
	   * get a recognizer by its event name.
	   * @param {Recognizer|String} recognizer
	   * @returns {Recognizer|Null}
	   */


	  _proto.get = function get(recognizer) {
	    if (recognizer instanceof Recognizer) {
	      return recognizer;
	    }

	    var recognizers = this.recognizers;

	    for (var i = 0; i < recognizers.length; i++) {
	      if (recognizers[i].options.event === recognizer) {
	        return recognizers[i];
	      }
	    }

	    return null;
	  };
	  /**
	   * @private add a recognizer to the manager
	   * existing recognizers with the same event name will be removed
	   * @param {Recognizer} recognizer
	   * @returns {Recognizer|Manager}
	   */


	  _proto.add = function add(recognizer) {
	    if (invokeArrayArg(recognizer, "add", this)) {
	      return this;
	    } // remove existing


	    var existing = this.get(recognizer.options.event);

	    if (existing) {
	      this.remove(existing);
	    }

	    this.recognizers.push(recognizer);
	    recognizer.manager = this;
	    this.touchAction.update();
	    return recognizer;
	  };
	  /**
	   * @private
	   * remove a recognizer by name or instance
	   * @param {Recognizer|String} recognizer
	   * @returns {Manager}
	   */


	  _proto.remove = function remove(recognizer) {
	    if (invokeArrayArg(recognizer, "remove", this)) {
	      return this;
	    }

	    var targetRecognizer = this.get(recognizer); // let's make sure this recognizer exists

	    if (recognizer) {
	      var recognizers = this.recognizers;
	      var index = inArray(recognizers, targetRecognizer);

	      if (index !== -1) {
	        recognizers.splice(index, 1);
	        this.touchAction.update();
	      }
	    }

	    return this;
	  };
	  /**
	   * @private
	   * bind event
	   * @param {String} events
	   * @param {Function} handler
	   * @returns {EventEmitter} this
	   */


	  _proto.on = function on(events, handler) {
	    if (events === undefined || handler === undefined) {
	      return this;
	    }

	    var handlers = this.handlers;
	    each(splitStr(events), function (event) {
	      handlers[event] = handlers[event] || [];
	      handlers[event].push(handler);
	    });
	    return this;
	  };
	  /**
	   * @private unbind event, leave emit blank to remove all handlers
	   * @param {String} events
	   * @param {Function} [handler]
	   * @returns {EventEmitter} this
	   */


	  _proto.off = function off(events, handler) {
	    if (events === undefined) {
	      return this;
	    }

	    var handlers = this.handlers;
	    each(splitStr(events), function (event) {
	      if (!handler) {
	        delete handlers[event];
	      } else {
	        handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
	      }
	    });
	    return this;
	  };
	  /**
	   * @private emit event to the listeners
	   * @param {String} event
	   * @param {Object} data
	   */


	  _proto.emit = function emit(event, data) {
	    // we also want to trigger dom events
	    if (this.options.domEvents) {
	      triggerDomEvent(event, data);
	    } // no handlers, so skip it all


	    var handlers = this.handlers[event] && this.handlers[event].slice();

	    if (!handlers || !handlers.length) {
	      return;
	    }

	    data.type = event;

	    data.preventDefault = function () {
	      data.srcEvent.preventDefault();
	    };

	    var i = 0;

	    while (i < handlers.length) {
	      handlers[i](data);
	      i++;
	    }
	  };
	  /**
	   * @private
	   * destroy the manager and unbinds all events
	   * it doesn't unbind dom events, that is the user own responsibility
	   */


	  _proto.destroy = function destroy() {
	    this.element && toggleCssProps(this, false);
	    this.handlers = {};
	    this.session = {};
	    this.input.destroy();
	    this.element = null;
	  };

	  return Manager;
	}();

	var SINGLE_TOUCH_INPUT_MAP = {
	  touchstart: INPUT_START,
	  touchmove: INPUT_MOVE,
	  touchend: INPUT_END,
	  touchcancel: INPUT_CANCEL
	};
	var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
	var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';
	/**
	 * @private
	 * Touch events input
	 * @constructor
	 * @extends Input
	 */

	var SingleTouchInput = /*#__PURE__*/function (_Input) {
	  _inheritsLoose(SingleTouchInput, _Input);

	  function SingleTouchInput() {
	    var _this;

	    var proto = SingleTouchInput.prototype;
	    proto.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
	    proto.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
	    _this = _Input.apply(this, arguments) || this;
	    _this.started = false;
	    return _this;
	  }

	  var _proto = SingleTouchInput.prototype;

	  _proto.handler = function handler(ev) {
	    var type = SINGLE_TOUCH_INPUT_MAP[ev.type]; // should we handle the touch events?

	    if (type === INPUT_START) {
	      this.started = true;
	    }

	    if (!this.started) {
	      return;
	    }

	    var touches = normalizeSingleTouches.call(this, ev, type); // when done, reset the started state

	    if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
	      this.started = false;
	    }

	    this.callback(this.manager, type, {
	      pointers: touches[0],
	      changedPointers: touches[1],
	      pointerType: INPUT_TYPE_TOUCH,
	      srcEvent: ev
	    });
	  };

	  return SingleTouchInput;
	}(Input);

	function normalizeSingleTouches(ev, type) {
	  var all = toArray(ev.touches);
	  var changed = toArray(ev.changedTouches);

	  if (type & (INPUT_END | INPUT_CANCEL)) {
	    all = uniqueArray(all.concat(changed), 'identifier', true);
	  }

	  return [all, changed];
	}
	/**
	 * @private
	 * wrap a method with a deprecation warning and stack trace
	 * @param {Function} method
	 * @param {String} name
	 * @param {String} message
	 * @returns {Function} A new function wrapping the supplied method.
	 */


	function deprecate(method, name, message) {
	  var deprecationMessage = "DEPRECATED METHOD: " + name + "\n" + message + " AT \n";
	  return function () {
	    var e = new Error('get-stack-trace');
	    var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '').replace(/^\s+at\s+/gm, '').replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';
	    var log = window.console && (window.console.warn || window.console.log);

	    if (log) {
	      log.call(window.console, deprecationMessage, stack);
	    }

	    return method.apply(this, arguments);
	  };
	}
	/**
	 * @private
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} dest
	 * @param {Object} src
	 * @param {Boolean} [merge=false]
	 * @returns {Object} dest
	 */


	var extend = deprecate(function (dest, src, merge) {
	  var keys = Object.keys(src);
	  var i = 0;

	  while (i < keys.length) {
	    if (!merge || merge && dest[keys[i]] === undefined) {
	      dest[keys[i]] = src[keys[i]];
	    }

	    i++;
	  }

	  return dest;
	}, 'extend', 'Use `assign`.');
	/**
	 * @private
	 * merge the values from src in the dest.
	 * means that properties that exist in dest will not be overwritten by src
	 * @param {Object} dest
	 * @param {Object} src
	 * @returns {Object} dest
	 */

	var merge = deprecate(function (dest, src) {
	  return extend(dest, src, true);
	}, 'merge', 'Use `assign`.');
	/**
	 * @private
	 * simple class inheritance
	 * @param {Function} child
	 * @param {Function} base
	 * @param {Object} [properties]
	 */

	function inherit(child, base, properties) {
	  var baseP = base.prototype;
	  var childP;
	  childP = child.prototype = Object.create(baseP);
	  childP.constructor = child;
	  childP._super = baseP;

	  if (properties) {
	    assign$1$1(childP, properties);
	  }
	}
	/**
	 * @private
	 * simple function bind
	 * @param {Function} fn
	 * @param {Object} context
	 * @returns {Function}
	 */


	function bindFn(fn, context) {
	  return function boundFn() {
	    return fn.apply(context, arguments);
	  };
	}
	/**
	 * @private
	 * Simple way to create a manager with a default set of recognizers.
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */


	var Hammer = /*#__PURE__*/function () {
	  var Hammer =
	  /**
	    * @private
	    * @const {string}
	    */
	  function Hammer(element, options) {
	    if (options === void 0) {
	      options = {};
	    }

	    return new Manager(element, _extends({
	      recognizers: preset.concat()
	    }, options));
	  };

	  Hammer.VERSION = "2.0.17-rc";
	  Hammer.DIRECTION_ALL = DIRECTION_ALL;
	  Hammer.DIRECTION_DOWN = DIRECTION_DOWN;
	  Hammer.DIRECTION_LEFT = DIRECTION_LEFT;
	  Hammer.DIRECTION_RIGHT = DIRECTION_RIGHT;
	  Hammer.DIRECTION_UP = DIRECTION_UP;
	  Hammer.DIRECTION_HORIZONTAL = DIRECTION_HORIZONTAL;
	  Hammer.DIRECTION_VERTICAL = DIRECTION_VERTICAL;
	  Hammer.DIRECTION_NONE = DIRECTION_NONE;
	  Hammer.DIRECTION_DOWN = DIRECTION_DOWN;
	  Hammer.INPUT_START = INPUT_START;
	  Hammer.INPUT_MOVE = INPUT_MOVE;
	  Hammer.INPUT_END = INPUT_END;
	  Hammer.INPUT_CANCEL = INPUT_CANCEL;
	  Hammer.STATE_POSSIBLE = STATE_POSSIBLE;
	  Hammer.STATE_BEGAN = STATE_BEGAN;
	  Hammer.STATE_CHANGED = STATE_CHANGED;
	  Hammer.STATE_ENDED = STATE_ENDED;
	  Hammer.STATE_RECOGNIZED = STATE_RECOGNIZED;
	  Hammer.STATE_CANCELLED = STATE_CANCELLED;
	  Hammer.STATE_FAILED = STATE_FAILED;
	  Hammer.Manager = Manager;
	  Hammer.Input = Input;
	  Hammer.TouchAction = TouchAction;
	  Hammer.TouchInput = TouchInput;
	  Hammer.MouseInput = MouseInput;
	  Hammer.PointerEventInput = PointerEventInput;
	  Hammer.TouchMouseInput = TouchMouseInput;
	  Hammer.SingleTouchInput = SingleTouchInput;
	  Hammer.Recognizer = Recognizer;
	  Hammer.AttrRecognizer = AttrRecognizer;
	  Hammer.Tap = TapRecognizer;
	  Hammer.Pan = PanRecognizer;
	  Hammer.Swipe = SwipeRecognizer;
	  Hammer.Pinch = PinchRecognizer;
	  Hammer.Rotate = RotateRecognizer;
	  Hammer.Press = PressRecognizer;
	  Hammer.on = addEventListeners;
	  Hammer.off = removeEventListeners;
	  Hammer.each = each;
	  Hammer.merge = merge;
	  Hammer.extend = extend;
	  Hammer.bindFn = bindFn;
	  Hammer.assign = assign$1$1;
	  Hammer.inherit = inherit;
	  Hammer.bindFn = bindFn;
	  Hammer.prefixed = prefixed;
	  Hammer.toArray = toArray;
	  Hammer.inArray = inArray;
	  Hammer.uniqueArray = uniqueArray;
	  Hammer.splitStr = splitStr;
	  Hammer.boolOrFn = boolOrFn;
	  Hammer.hasParent = hasParent;
	  Hammer.addEventListeners = addEventListeners;
	  Hammer.removeEventListeners = removeEventListeners;
	  Hammer.defaults = assign$1$1({}, defaults, {
	    preset: preset
	  });
	  return Hammer;
	}(); //  style loader but by script tag, not by the loader.

	function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof symbol$4 === "undefined" || getIteratorMethod$1(o) == null) { if (isArray$5(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = getIterator$1(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

	function _unsupportedIterableToArray$1(o, minLen) { var _context21; if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = slice$6(_context21 = Object.prototype.toString.call(o)).call(_context21, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return from$2(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

	function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
	/**
	 * Use this symbol to delete properies in deepObjectAssign.
	 */

	var DELETE = symbol$4("DELETE");
	/**
	 * Pure version of deepObjectAssign, it doesn't modify any of it's arguments.
	 *
	 * @param base - The base object that fullfils the whole interface T.
	 * @param updates - Updates that may change or delete props.
	 *
	 * @returns A brand new instance with all the supplied objects deeply merged.
	 */


	function pureDeepObjectAssign(base) {
	  var _context;

	  for (var _len = arguments.length, updates = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    updates[_key - 1] = arguments[_key];
	  }

	  return deepObjectAssign.apply(void 0, concat$2(_context = [{}, base]).call(_context, updates));
	}
	/**
	 * Deep version of object assign with additional deleting by the DELETE symbol.
	 *
	 * @param values - Objects to be deeply merged.
	 *
	 * @returns The first object from values.
	 */


	function deepObjectAssign() {
	  var merged = deepObjectAssignNonentry.apply(void 0, arguments);
	  stripDelete(merged);
	  return merged;
	}
	/**
	 * Deep version of object assign with additional deleting by the DELETE symbol.
	 *
	 * @remarks
	 * This doesn't strip the DELETE symbols so they may end up in the final object.
	 *
	 * @param values - Objects to be deeply merged.
	 *
	 * @returns The first object from values.
	 */


	function deepObjectAssignNonentry() {
	  for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    values[_key2] = arguments[_key2];
	  }

	  if (values.length < 2) {
	    return values[0];
	  } else if (values.length > 2) {
	    var _context2;

	    return deepObjectAssignNonentry.apply(void 0, concat$2(_context2 = [deepObjectAssign(values[0], values[1])]).call(_context2, toConsumableArray(slice$6(values).call(values, 2))));
	  }

	  var a = values[0];
	  var b = values[1];

	  var _iterator = _createForOfIteratorHelper(ownKeys$3(b)),
	      _step;

	  try {
	    for (_iterator.s(); !(_step = _iterator.n()).done;) {
	      var prop = _step.value;
	      if (!Object.prototype.propertyIsEnumerable.call(b, prop)) ;else if (b[prop] === DELETE) {
	        delete a[prop];
	      } else if (a[prop] !== null && b[prop] !== null && _typeof_1(a[prop]) === "object" && _typeof_1(b[prop]) === "object" && !isArray$5(a[prop]) && !isArray$5(b[prop])) {
	        a[prop] = deepObjectAssignNonentry(a[prop], b[prop]);
	      } else {
	        a[prop] = clone(b[prop]);
	      }
	    }
	  } catch (err) {
	    _iterator.e(err);
	  } finally {
	    _iterator.f();
	  }

	  return a;
	}
	/**
	 * Deep clone given object or array. In case of primitive simply return.
	 *
	 * @param a - Anything.
	 *
	 * @returns Deep cloned object/array or unchanged a.
	 */


	function clone(a) {
	  if (isArray$5(a)) {
	    return map$2(a).call(a, function (value) {
	      return clone(value);
	    });
	  } else if (_typeof_1(a) === "object" && a !== null) {
	    return deepObjectAssignNonentry({}, a);
	  } else {
	    return a;
	  }
	}
	/**
	 * Strip DELETE from given object.
	 *
	 * @param a - Object which may contain DELETE but won't after this is executed.
	 */


	function stripDelete(a) {
	  for (var _i = 0, _Object$keys = keys$3(a); _i < _Object$keys.length; _i++) {
	    var prop = _Object$keys[_i];

	    if (a[prop] === DELETE) {
	      delete a[prop];
	    } else if (_typeof_1(a[prop]) === "object" && a[prop] !== null) {
	      stripDelete(a[prop]);
	    }
	  }
	}
	/**
	 * Setup a mock hammer.js object, for unit testing.
	 *
	 * Inspiration: https://github.com/uber/deck.gl/pull/658
	 *
	 * @returns {{on: noop, off: noop, destroy: noop, emit: noop, get: get}}
	 */


	function hammerMock() {
	  var noop = function noop() {};

	  return {
	    on: noop,
	    off: noop,
	    destroy: noop,
	    emit: noop,
	    get: function get() {
	      return {
	        set: noop
	      };
	    }
	  };
	}

	var Hammer$1 = typeof window !== "undefined" ? window.Hammer || Hammer : function () {
	  // hammer.js is only available in a browser, not in node.js. Replacing it with a mock object.
	  return hammerMock();
	};
	/**
	 * Turn an element into an clickToUse element.
	 * When not active, the element has a transparent overlay. When the overlay is
	 * clicked, the mode is changed to active.
	 * When active, the element is displayed with a blue border around it, and
	 * the interactive contents of the element can be used. When clicked outside
	 * the element, the elements mode is changed to inactive.
	 *
	 * @param {Element} container
	 * @class Activator
	 */

	function Activator(container) {
	  var _this = this,
	      _context3;

	  this._cleanupQueue = [];
	  this.active = false;
	  this._dom = {
	    container: container,
	    overlay: document.createElement("div")
	  };

	  this._dom.overlay.classList.add("vis-overlay");

	  this._dom.container.appendChild(this._dom.overlay);

	  this._cleanupQueue.push(function () {
	    _this._dom.overlay.parentNode.removeChild(_this._dom.overlay);
	  });

	  var hammer = Hammer$1(this._dom.overlay);
	  hammer.on("tap", bind$2(_context3 = this._onTapOverlay).call(_context3, this));

	  this._cleanupQueue.push(function () {
	    hammer.destroy(); // FIXME: cleaning up hammer instances doesn't work (Timeline not removed
	    // from memory)
	  }); // block all touch events (except tap)


	  var events = ["tap", "doubletap", "press", "pinch", "pan", "panstart", "panmove", "panend"];

	  forEach$2(events).call(events, function (event) {
	    hammer.on(event, function (event) {
	      event.srcEvent.stopPropagation();
	    });
	  }); // attach a click event to the window, in order to deactivate when clicking outside the timeline


	  if (document && document.body) {
	    this._onClick = function (event) {
	      if (!_hasParent(event.target, container)) {
	        _this.deactivate();
	      }
	    };

	    document.body.addEventListener("click", this._onClick);

	    this._cleanupQueue.push(function () {
	      document.body.removeEventListener("click", _this._onClick);
	    });
	  } // prepare escape key listener for deactivating when active


	  this._escListener = function (event) {
	    if ("key" in event ? event.key === "Escape" : event.keyCode === 27
	    /* the keyCode is for IE11 */
	    ) {
	        _this.deactivate();
	      }
	  };
	} // turn into an event emitter


	componentEmitter(Activator.prototype); // The currently active activator

	Activator.current = null;
	/**
	 * Destroy the activator. Cleans up all created DOM and event listeners
	 */

	Activator.prototype.destroy = function () {
	  var _context4, _context5;

	  this.deactivate();

	  var _iterator2 = _createForOfIteratorHelper(reverse$2(_context4 = splice$2(_context5 = this._cleanupQueue).call(_context5, 0)).call(_context4)),
	      _step2;

	  try {
	    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
	      var callback = _step2.value;
	      callback();
	    }
	  } catch (err) {
	    _iterator2.e(err);
	  } finally {
	    _iterator2.f();
	  }
	};
	/**
	 * Activate the element
	 * Overlay is hidden, element is decorated with a blue shadow border
	 */


	Activator.prototype.activate = function () {
	  // we allow only one active activator at a time
	  if (Activator.current) {
	    Activator.current.deactivate();
	  }

	  Activator.current = this;
	  this.active = true;
	  this._dom.overlay.style.display = "none";

	  this._dom.container.classList.add("vis-active");

	  this.emit("change");
	  this.emit("activate"); // ugly hack: bind ESC after emitting the events, as the Network rebinds all
	  // keyboard events on a 'change' event

	  document.body.addEventListener("keydown", this._escListener);
	};
	/**
	 * Deactivate the element
	 * Overlay is displayed on top of the element
	 */


	Activator.prototype.deactivate = function () {
	  this.active = false;
	  this._dom.overlay.style.display = "block";

	  this._dom.container.classList.remove("vis-active");

	  document.body.removeEventListener("keydown", this._escListener);
	  this.emit("change");
	  this.emit("deactivate");
	};
	/**
	 * Handle a tap event: activate the container
	 *
	 * @param {Event}  event   The event
	 * @private
	 */


	Activator.prototype._onTapOverlay = function (event) {
	  // activate the container
	  this.activate();
	  event.srcEvent.stopPropagation();
	};
	/**
	 * Test whether the element has the requested parent element somewhere in
	 * its chain of parent nodes.
	 *
	 * @param {HTMLElement} element
	 * @param {HTMLElement} parent
	 * @returns {boolean} Returns true when the parent is found somewhere in the
	 *                    chain of parent nodes.
	 * @private
	 */


	function _hasParent(element, parent) {
	  while (element) {
	    if (element === parent) {
	      return true;
	    }

	    element = element.parentNode;
	  }

	  return false;
	} // utility functions

	var nativeConstruct = getBuiltIn('Reflect', 'construct'); // `Reflect.construct` method
	// https://tc39.github.io/ecma262/#sec-reflect.construct
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it

	var NEW_TARGET_BUG = fails(function () {
	  function F() {
	    /* empty */
	  }

	  return !(nativeConstruct(function () {
	    /* empty */
	  }, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function () {
	  nativeConstruct(function () {
	    /* empty */
	  });
	});
	var FORCED$4 = NEW_TARGET_BUG || ARGS_BUG;
	_export({
	  target: 'Reflect',
	  stat: true,
	  forced: FORCED$4,
	  sham: FORCED$4
	}, {
	  construct: function construct(Target, args
	  /* , newTarget */
	  ) {
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);

	    if (Target == newTarget) {
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch (args.length) {
	        case 0:
	          return new Target();

	        case 1:
	          return new Target(args[0]);

	        case 2:
	          return new Target(args[0], args[1]);

	        case 3:
	          return new Target(args[0], args[1], args[2]);

	        case 4:
	          return new Target(args[0], args[1], args[2], args[3]);
	      } // w/o altered newTarget, lot of arguments case


	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (functionBind.apply(Target, $args))();
	    } // with altered newTarget, not support built-in constructors


	    var proto = newTarget.prototype;
	    var instance = objectCreate(isObject(proto) ? proto : Object.prototype);
	    var result = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

	var construct$1 = path.Reflect.construct;

	var construct$2 = construct$1;

	var construct$3 = construct$2;

	var entries = entryVirtual('Array').entries;

	var entries$1 = entries;

	var ArrayPrototype$a = Array.prototype;
	var DOMIterables$1 = {
	  DOMTokenList: true,
	  NodeList: true
	};

	var entries_1 = function (it) {
	  var own = it.entries;
	  return it === ArrayPrototype$a || it instanceof Array && own === ArrayPrototype$a.entries // eslint-disable-next-line no-prototype-builtins
	  || DOMIterables$1.hasOwnProperty(classof(it)) ? entries$1 : own;
	};

	var entries$2 = entries_1;

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var runtime_1 = createCommonjsModule(function (module) {
	  var runtime = function (exports) {

	    var Op = Object.prototype;
	    var hasOwn = Op.hasOwnProperty;
	    var undefined$1; // More compressible than void 0.

	    var $Symbol = typeof Symbol === "function" ? Symbol : {};
	    var iteratorSymbol = $Symbol.iterator || "@@iterator";
	    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	    function define(obj, key, value) {
	      Object.defineProperty(obj, key, {
	        value: value,
	        enumerable: true,
	        configurable: true,
	        writable: true
	      });
	      return obj[key];
	    }

	    try {
	      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
	      define({}, "");
	    } catch (err) {
	      define = function (obj, key, value) {
	        return obj[key] = value;
	      };
	    }

	    function wrap(innerFn, outerFn, self, tryLocsList) {
	      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	      var generator = Object.create(protoGenerator.prototype);
	      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
	      // .throw, and .return methods.

	      generator._invoke = makeInvokeMethod(innerFn, self, context);
	      return generator;
	    }

	    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
	    // record like context.tryEntries[i].completion. This interface could
	    // have been (and was previously) designed to take a closure to be
	    // invoked without arguments, but in all the cases we care about we
	    // already have an existing method we want to call, so there's no need
	    // to create a new function object. We can even get away with assuming
	    // the method takes exactly one argument, since that happens to be true
	    // in every case, so we don't have to touch the arguments object. The
	    // only additional allocation required is the completion record, which
	    // has a stable shape and so hopefully should be cheap to allocate.

	    function tryCatch(fn, obj, arg) {
	      try {
	        return {
	          type: "normal",
	          arg: fn.call(obj, arg)
	        };
	      } catch (err) {
	        return {
	          type: "throw",
	          arg: err
	        };
	      }
	    }

	    var GenStateSuspendedStart = "suspendedStart";
	    var GenStateSuspendedYield = "suspendedYield";
	    var GenStateExecuting = "executing";
	    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
	    // breaking out of the dispatch switch statement.

	    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
	    // .constructor.prototype properties for functions that return Generator
	    // objects. For full spec compliance, you may wish to configure your
	    // minifier not to mangle the names of these two functions.

	    function Generator() {}

	    function GeneratorFunction() {}

	    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
	    // don't natively support it.


	    var IteratorPrototype = {};

	    IteratorPrototype[iteratorSymbol] = function () {
	      return this;
	    };

	    var getProto = Object.getPrototypeOf;
	    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

	    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	      // This environment has a native %IteratorPrototype%; use it instead
	      // of the polyfill.
	      IteratorPrototype = NativeIteratorPrototype;
	    }

	    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
	    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	    GeneratorFunctionPrototype.constructor = GeneratorFunction;
	    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
	    // Iterator interface in terms of a single ._invoke method.

	    function defineIteratorMethods(prototype) {
	      ["next", "throw", "return"].forEach(function (method) {
	        define(prototype, method, function (arg) {
	          return this._invoke(method, arg);
	        });
	      });
	    }

	    exports.isGeneratorFunction = function (genFun) {
	      var ctor = typeof genFun === "function" && genFun.constructor;
	      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
	      // do is to check its .name property.
	      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	    };

	    exports.mark = function (genFun) {
	      if (Object.setPrototypeOf) {
	        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	      } else {
	        genFun.__proto__ = GeneratorFunctionPrototype;
	        define(genFun, toStringTagSymbol, "GeneratorFunction");
	      }

	      genFun.prototype = Object.create(Gp);
	      return genFun;
	    }; // Within the body of any async function, `await x` is transformed to
	    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	    // `hasOwn.call(value, "__await")` to determine if the yielded value is
	    // meant to be awaited.


	    exports.awrap = function (arg) {
	      return {
	        __await: arg
	      };
	    };

	    function AsyncIterator(generator, PromiseImpl) {
	      function invoke(method, arg, resolve, reject) {
	        var record = tryCatch(generator[method], generator, arg);

	        if (record.type === "throw") {
	          reject(record.arg);
	        } else {
	          var result = record.arg;
	          var value = result.value;

	          if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
	            return PromiseImpl.resolve(value.__await).then(function (value) {
	              invoke("next", value, resolve, reject);
	            }, function (err) {
	              invoke("throw", err, resolve, reject);
	            });
	          }

	          return PromiseImpl.resolve(value).then(function (unwrapped) {
	            // When a yielded Promise is resolved, its final value becomes
	            // the .value of the Promise<{value,done}> result for the
	            // current iteration.
	            result.value = unwrapped;
	            resolve(result);
	          }, function (error) {
	            // If a rejected Promise was yielded, throw the rejection back
	            // into the async generator function so it can be handled there.
	            return invoke("throw", error, resolve, reject);
	          });
	        }
	      }

	      var previousPromise;

	      function enqueue(method, arg) {
	        function callInvokeWithMethodAndArg() {
	          return new PromiseImpl(function (resolve, reject) {
	            invoke(method, arg, resolve, reject);
	          });
	        }

	        return previousPromise = // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
	        // invocations of the iterator.
	        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	      } // Define the unified helper method that is used to implement .next,
	      // .throw, and .return (see defineIteratorMethods).


	      this._invoke = enqueue;
	    }

	    defineIteratorMethods(AsyncIterator.prototype);

	    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	      return this;
	    };

	    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
	    // AsyncIterator objects; they just return a Promise for the value of
	    // the final result produced by the iterator.

	    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	      if (PromiseImpl === void 0) PromiseImpl = Promise;
	      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
	      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function (result) {
	        return result.done ? result.value : iter.next();
	      });
	    };

	    function makeInvokeMethod(innerFn, self, context) {
	      var state = GenStateSuspendedStart;
	      return function invoke(method, arg) {
	        if (state === GenStateExecuting) {
	          throw new Error("Generator is already running");
	        }

	        if (state === GenStateCompleted) {
	          if (method === "throw") {
	            throw arg;
	          } // Be forgiving, per 25.3.3.3.3 of the spec:
	          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


	          return doneResult();
	        }

	        context.method = method;
	        context.arg = arg;

	        while (true) {
	          var delegate = context.delegate;

	          if (delegate) {
	            var delegateResult = maybeInvokeDelegate(delegate, context);

	            if (delegateResult) {
	              if (delegateResult === ContinueSentinel) continue;
	              return delegateResult;
	            }
	          }

	          if (context.method === "next") {
	            // Setting context._sent for legacy support of Babel's
	            // function.sent implementation.
	            context.sent = context._sent = context.arg;
	          } else if (context.method === "throw") {
	            if (state === GenStateSuspendedStart) {
	              state = GenStateCompleted;
	              throw context.arg;
	            }

	            context.dispatchException(context.arg);
	          } else if (context.method === "return") {
	            context.abrupt("return", context.arg);
	          }

	          state = GenStateExecuting;
	          var record = tryCatch(innerFn, self, context);

	          if (record.type === "normal") {
	            // If an exception is thrown from innerFn, we leave state ===
	            // GenStateExecuting and loop back for another invocation.
	            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

	            if (record.arg === ContinueSentinel) {
	              continue;
	            }

	            return {
	              value: record.arg,
	              done: context.done
	            };
	          } else if (record.type === "throw") {
	            state = GenStateCompleted; // Dispatch the exception by looping back around to the
	            // context.dispatchException(context.arg) call above.

	            context.method = "throw";
	            context.arg = record.arg;
	          }
	        }
	      };
	    } // Call delegate.iterator[context.method](context.arg) and handle the
	    // result, either by returning a { value, done } result from the
	    // delegate iterator, or by modifying context.method and context.arg,
	    // setting context.delegate to null, and returning the ContinueSentinel.


	    function maybeInvokeDelegate(delegate, context) {
	      var method = delegate.iterator[context.method];

	      if (method === undefined$1) {
	        // A .throw or .return when the delegate iterator has no .throw
	        // method always terminates the yield* loop.
	        context.delegate = null;

	        if (context.method === "throw") {
	          // Note: ["return"] must be used for ES3 parsing compatibility.
	          if (delegate.iterator["return"]) {
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            context.method = "return";
	            context.arg = undefined$1;
	            maybeInvokeDelegate(delegate, context);

	            if (context.method === "throw") {
	              // If maybeInvokeDelegate(context) changed context.method from
	              // "return" to "throw", let that override the TypeError below.
	              return ContinueSentinel;
	            }
	          }

	          context.method = "throw";
	          context.arg = new TypeError("The iterator does not provide a 'throw' method");
	        }

	        return ContinueSentinel;
	      }

	      var record = tryCatch(method, delegate.iterator, context.arg);

	      if (record.type === "throw") {
	        context.method = "throw";
	        context.arg = record.arg;
	        context.delegate = null;
	        return ContinueSentinel;
	      }

	      var info = record.arg;

	      if (!info) {
	        context.method = "throw";
	        context.arg = new TypeError("iterator result is not an object");
	        context.delegate = null;
	        return ContinueSentinel;
	      }

	      if (info.done) {
	        // Assign the result of the finished delegate to the temporary
	        // variable specified by delegate.resultName (see delegateYield).
	        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

	        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
	        // exception, let the outer generator proceed normally. If
	        // context.method was "next", forget context.arg since it has been
	        // "consumed" by the delegate iterator. If context.method was
	        // "return", allow the original .return call to continue in the
	        // outer generator.

	        if (context.method !== "return") {
	          context.method = "next";
	          context.arg = undefined$1;
	        }
	      } else {
	        // Re-yield the result returned by the delegate method.
	        return info;
	      } // The delegate iterator is finished, so forget it and continue with
	      // the outer generator.


	      context.delegate = null;
	      return ContinueSentinel;
	    } // Define Generator.prototype.{next,throw,return} in terms of the
	    // unified ._invoke helper method.


	    defineIteratorMethods(Gp);
	    define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
	    // @@iterator function is called on it. Some browsers' implementations of the
	    // iterator prototype chain incorrectly implement this, causing the Generator
	    // object to not be returned from this call. This ensures that doesn't happen.
	    // See https://github.com/facebook/regenerator/issues/274 for more details.

	    Gp[iteratorSymbol] = function () {
	      return this;
	    };

	    Gp.toString = function () {
	      return "[object Generator]";
	    };

	    function pushTryEntry(locs) {
	      var entry = {
	        tryLoc: locs[0]
	      };

	      if (1 in locs) {
	        entry.catchLoc = locs[1];
	      }

	      if (2 in locs) {
	        entry.finallyLoc = locs[2];
	        entry.afterLoc = locs[3];
	      }

	      this.tryEntries.push(entry);
	    }

	    function resetTryEntry(entry) {
	      var record = entry.completion || {};
	      record.type = "normal";
	      delete record.arg;
	      entry.completion = record;
	    }

	    function Context(tryLocsList) {
	      // The root entry object (effectively a try statement without a catch
	      // or a finally block) gives us a place to store values thrown from
	      // locations where there is no enclosing try statement.
	      this.tryEntries = [{
	        tryLoc: "root"
	      }];
	      tryLocsList.forEach(pushTryEntry, this);
	      this.reset(true);
	    }

	    exports.keys = function (object) {
	      var keys = [];

	      for (var key in object) {
	        keys.push(key);
	      }

	      keys.reverse(); // Rather than returning an object with a next method, we keep
	      // things simple and return the next function itself.

	      return function next() {
	        while (keys.length) {
	          var key = keys.pop();

	          if (key in object) {
	            next.value = key;
	            next.done = false;
	            return next;
	          }
	        } // To avoid creating an additional object, we just hang the .value
	        // and .done properties off the next function object itself. This
	        // also ensures that the minifier will not anonymize the function.


	        next.done = true;
	        return next;
	      };
	    };

	    function values(iterable) {
	      if (iterable) {
	        var iteratorMethod = iterable[iteratorSymbol];

	        if (iteratorMethod) {
	          return iteratorMethod.call(iterable);
	        }

	        if (typeof iterable.next === "function") {
	          return iterable;
	        }

	        if (!isNaN(iterable.length)) {
	          var i = -1,
	              next = function next() {
	            while (++i < iterable.length) {
	              if (hasOwn.call(iterable, i)) {
	                next.value = iterable[i];
	                next.done = false;
	                return next;
	              }
	            }

	            next.value = undefined$1;
	            next.done = true;
	            return next;
	          };

	          return next.next = next;
	        }
	      } // Return an iterator with no values.


	      return {
	        next: doneResult
	      };
	    }

	    exports.values = values;

	    function doneResult() {
	      return {
	        value: undefined$1,
	        done: true
	      };
	    }

	    Context.prototype = {
	      constructor: Context,
	      reset: function (skipTempReset) {
	        this.prev = 0;
	        this.next = 0; // Resetting context._sent for legacy support of Babel's
	        // function.sent implementation.

	        this.sent = this._sent = undefined$1;
	        this.done = false;
	        this.delegate = null;
	        this.method = "next";
	        this.arg = undefined$1;
	        this.tryEntries.forEach(resetTryEntry);

	        if (!skipTempReset) {
	          for (var name in this) {
	            // Not sure about the optimal order of these conditions:
	            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
	              this[name] = undefined$1;
	            }
	          }
	        }
	      },
	      stop: function () {
	        this.done = true;
	        var rootEntry = this.tryEntries[0];
	        var rootRecord = rootEntry.completion;

	        if (rootRecord.type === "throw") {
	          throw rootRecord.arg;
	        }

	        return this.rval;
	      },
	      dispatchException: function (exception) {
	        if (this.done) {
	          throw exception;
	        }

	        var context = this;

	        function handle(loc, caught) {
	          record.type = "throw";
	          record.arg = exception;
	          context.next = loc;

	          if (caught) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            context.method = "next";
	            context.arg = undefined$1;
	          }

	          return !!caught;
	        }

	        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	          var entry = this.tryEntries[i];
	          var record = entry.completion;

	          if (entry.tryLoc === "root") {
	            // Exception thrown outside of any try block that could handle
	            // it, so set the completion value of the entire function to
	            // throw the exception.
	            return handle("end");
	          }

	          if (entry.tryLoc <= this.prev) {
	            var hasCatch = hasOwn.call(entry, "catchLoc");
	            var hasFinally = hasOwn.call(entry, "finallyLoc");

	            if (hasCatch && hasFinally) {
	              if (this.prev < entry.catchLoc) {
	                return handle(entry.catchLoc, true);
	              } else if (this.prev < entry.finallyLoc) {
	                return handle(entry.finallyLoc);
	              }
	            } else if (hasCatch) {
	              if (this.prev < entry.catchLoc) {
	                return handle(entry.catchLoc, true);
	              }
	            } else if (hasFinally) {
	              if (this.prev < entry.finallyLoc) {
	                return handle(entry.finallyLoc);
	              }
	            } else {
	              throw new Error("try statement without catch or finally");
	            }
	          }
	        }
	      },
	      abrupt: function (type, arg) {
	        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	          var entry = this.tryEntries[i];

	          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	            var finallyEntry = entry;
	            break;
	          }
	        }

	        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	          // Ignore the finally entry if control is not jumping to a
	          // location outside the try/catch block.
	          finallyEntry = null;
	        }

	        var record = finallyEntry ? finallyEntry.completion : {};
	        record.type = type;
	        record.arg = arg;

	        if (finallyEntry) {
	          this.method = "next";
	          this.next = finallyEntry.finallyLoc;
	          return ContinueSentinel;
	        }

	        return this.complete(record);
	      },
	      complete: function (record, afterLoc) {
	        if (record.type === "throw") {
	          throw record.arg;
	        }

	        if (record.type === "break" || record.type === "continue") {
	          this.next = record.arg;
	        } else if (record.type === "return") {
	          this.rval = this.arg = record.arg;
	          this.method = "return";
	          this.next = "end";
	        } else if (record.type === "normal" && afterLoc) {
	          this.next = afterLoc;
	        }

	        return ContinueSentinel;
	      },
	      finish: function (finallyLoc) {
	        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	          var entry = this.tryEntries[i];

	          if (entry.finallyLoc === finallyLoc) {
	            this.complete(entry.completion, entry.afterLoc);
	            resetTryEntry(entry);
	            return ContinueSentinel;
	          }
	        }
	      },
	      "catch": function (tryLoc) {
	        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	          var entry = this.tryEntries[i];

	          if (entry.tryLoc === tryLoc) {
	            var record = entry.completion;

	            if (record.type === "throw") {
	              var thrown = record.arg;
	              resetTryEntry(entry);
	            }

	            return thrown;
	          }
	        } // The context.catch method must only be called with a location
	        // argument that corresponds to a known catch block.


	        throw new Error("illegal catch attempt");
	      },
	      delegateYield: function (iterable, resultName, nextLoc) {
	        this.delegate = {
	          iterator: values(iterable),
	          resultName: resultName,
	          nextLoc: nextLoc
	        };

	        if (this.method === "next") {
	          // Deliberately forget the last sent value so that we don't
	          // accidentally pass it on to the delegate.
	          this.arg = undefined$1;
	        }

	        return ContinueSentinel;
	      }
	    }; // Regardless of whether this script is executing as a CommonJS module
	    // or not, return the runtime object so that we can declare the variable
	    // regeneratorRuntime in the outer scope, which allows this module to be
	    // injected easily by `bin/regenerator --include-runtime script.js`.

	    return exports;
	  }( // If this script is executing as a CommonJS module, use module.exports
	  // as the regeneratorRuntime namespace. Otherwise create a new empty
	  // object. Either way, the resulting object will be used to initialize
	  // the regeneratorRuntime variable at the top of this file.
	   module.exports );

	  try {
	    regeneratorRuntime = runtime;
	  } catch (accidentalStrictMode) {
	    // This module should not be running in strict mode, so the above
	    // assignment should always work unless something is misconfigured. Just
	    // in case runtime.js accidentally runs in strict mode, we can escape
	    // strict mode using a global Function call. This could conceivably fail
	    // if a Content Security Policy forbids using Function, but in that case
	    // the proper solution is to fix the accidental strict mode problem. If
	    // you've misconfigured your bundler to force strict mode and applied a
	    // CSP to forbid Function, and you're not willing to fix either of those
	    // problems, please detail your unique predicament in a GitHub issue.
	    Function("r", "regeneratorRuntime = r")(runtime);
	  }
	});

	var regenerator = runtime_1;

	var iterator$3 = iterator;

	var iterator$4 = iterator$3;

	var values$1 = entryVirtual('Array').values;

	var values$2 = values$1;

	var ArrayPrototype$b = Array.prototype;
	var DOMIterables$2 = {
	  DOMTokenList: true,
	  NodeList: true
	};

	var values_1 = function (it) {
	  var own = it.values;
	  return it === ArrayPrototype$b || it instanceof Array && own === ArrayPrototype$b.values // eslint-disable-next-line no-prototype-builtins
	  || DOMIterables$2.hasOwnProperty(classof(it)) ? values$2 : own;
	};

	var values$3 = values_1;

	var test$2 = [];
	var nativeSort = test$2.sort; // IE8-

	var FAILS_ON_UNDEFINED = fails(function () {
	  test$2.sort(undefined);
	}); // V8 bug

	var FAILS_ON_NULL = fails(function () {
	  test$2.sort(null);
	}); // Old WebKit

	var STRICT_METHOD$3 = arrayMethodIsStrict('sort');
	var FORCED$5 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD$3; // `Array.prototype.sort` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.sort

	_export({
	  target: 'Array',
	  proto: true,
	  forced: FORCED$5
	}, {
	  sort: function sort(comparefn) {
	    return comparefn === undefined ? nativeSort.call(toObject(this)) : nativeSort.call(toObject(this), aFunction(comparefn));
	  }
	});

	var sort = entryVirtual('Array').sort;

	var ArrayPrototype$c = Array.prototype;

	var sort_1 = function (it) {
	  var own = it.sort;
	  return it === ArrayPrototype$c || it instanceof Array && own === ArrayPrototype$c.sort ? sort : own;
	};

	var sort$1 = sort_1;

	var sort$2 = sort$1;

	var keys$4 = entryVirtual('Array').keys;

	var keys$5 = keys$4;

	var ArrayPrototype$d = Array.prototype;
	var DOMIterables$3 = {
	  DOMTokenList: true,
	  NodeList: true
	};

	var keys_1 = function (it) {
	  var own = it.keys;
	  return it === ArrayPrototype$d || it instanceof Array && own === ArrayPrototype$d.keys // eslint-disable-next-line no-prototype-builtins
	  || DOMIterables$3.hasOwnProperty(classof(it)) ? keys$5 : own;
	};

	var keys$6 = keys_1;

	var $some = arrayIteration.some;
	var STRICT_METHOD$4 = arrayMethodIsStrict('some');
	var USES_TO_LENGTH$8 = arrayMethodUsesToLength('some'); // `Array.prototype.some` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.some

	_export({
	  target: 'Array',
	  proto: true,
	  forced: !STRICT_METHOD$4 || !USES_TO_LENGTH$8
	}, {
	  some: function some(callbackfn
	  /* , thisArg */
	  ) {
	    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var some = entryVirtual('Array').some;

	var ArrayPrototype$e = Array.prototype;

	var some_1 = function (it) {
	  var own = it.some;
	  return it === ArrayPrototype$e || it instanceof Array && own === ArrayPrototype$e.some ? some : own;
	};

	var some$1 = some_1;

	var some$2 = some$1;

	var freezing = !fails(function () {
	  return Object.isExtensible(Object.preventExtensions({}));
	});

	var internalMetadata = createCommonjsModule(function (module) {
	  var defineProperty = objectDefineProperty.f;
	  var METADATA = uid('meta');
	  var id = 0;

	  var isExtensible = Object.isExtensible || function () {
	    return true;
	  };

	  var setMetadata = function (it) {
	    defineProperty(it, METADATA, {
	      value: {
	        objectID: 'O' + ++id,
	        // object ID
	        weakData: {} // weak collections IDs

	      }
	    });
	  };

	  var fastKey = function (it, create) {
	    // return a primitive with prefix
	    if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

	    if (!has(it, METADATA)) {
	      // can't set metadata to uncaught frozen object
	      if (!isExtensible(it)) return 'F'; // not necessary to add metadata

	      if (!create) return 'E'; // add missing metadata

	      setMetadata(it); // return object ID
	    }

	    return it[METADATA].objectID;
	  };

	  var getWeakData = function (it, create) {
	    if (!has(it, METADATA)) {
	      // can't set metadata to uncaught frozen object
	      if (!isExtensible(it)) return true; // not necessary to add metadata

	      if (!create) return false; // add missing metadata

	      setMetadata(it); // return the store of weak collections IDs
	    }

	    return it[METADATA].weakData;
	  }; // add metadata on freeze-family methods calling


	  var onFreeze = function (it) {
	    if (freezing && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
	    return it;
	  };

	  var meta = module.exports = {
	    REQUIRED: false,
	    fastKey: fastKey,
	    getWeakData: getWeakData,
	    onFreeze: onFreeze
	  };
	  hiddenKeys[METADATA] = true;
	});

	var Result = function (stopped, result) {
	  this.stopped = stopped;
	  this.result = result;
	};

	var iterate = function (iterable, unboundFunction, options) {
	  var that = options && options.that;
	  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
	  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
	  var INTERRUPTED = !!(options && options.INTERRUPTED);
	  var fn = functionBindContext(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
	  var iterator, iterFn, index, length, result, next, step;

	  var stop = function (condition) {
	    if (iterator) iteratorClose(iterator);
	    return new Result(true, condition);
	  };

	  var callFn = function (value) {
	    if (AS_ENTRIES) {
	      anObject(value);
	      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
	    }

	    return INTERRUPTED ? fn(value, stop) : fn(value);
	  };

	  if (IS_ITERATOR) {
	    iterator = iterable;
	  } else {
	    iterFn = getIteratorMethod(iterable);
	    if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

	    if (isArrayIteratorMethod(iterFn)) {
	      for (index = 0, length = toLength(iterable.length); length > index; index++) {
	        result = callFn(iterable[index]);
	        if (result && result instanceof Result) return result;
	      }

	      return new Result(false);
	    }

	    iterator = iterFn.call(iterable);
	  }

	  next = iterator.next;

	  while (!(step = next.call(iterator)).done) {
	    try {
	      result = callFn(step.value);
	    } catch (error) {
	      iteratorClose(iterator);
	      throw error;
	    }

	    if (typeof result == 'object' && result && result instanceof Result) return result;
	  }

	  return new Result(false);
	};

	var anInstance = function (it, Constructor, name) {
	  if (!(it instanceof Constructor)) {
	    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
	  }

	  return it;
	};

	var defineProperty$9 = objectDefineProperty.f;
	var forEach$3 = arrayIteration.forEach;
	var setInternalState$3 = internalState.set;
	var internalStateGetterFor = internalState.getterFor;

	var collection = function (CONSTRUCTOR_NAME, wrapper, common) {
	  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
	  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var NativeConstructor = global$1[CONSTRUCTOR_NAME];
	  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
	  var exported = {};
	  var Constructor;

	  if (!descriptors || typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
	    new NativeConstructor().entries().next();
	  }))) {
	    // create collection constructor
	    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
	    internalMetadata.REQUIRED = true;
	  } else {
	    Constructor = wrapper(function (target, iterable) {
	      setInternalState$3(anInstance(target, Constructor, CONSTRUCTOR_NAME), {
	        type: CONSTRUCTOR_NAME,
	        collection: new NativeConstructor()
	      });
	      if (iterable != undefined) iterate(iterable, target[ADDER], {
	        that: target,
	        AS_ENTRIES: IS_MAP
	      });
	    });
	    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
	    forEach$3(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (KEY) {
	      var IS_ADDER = KEY == 'add' || KEY == 'set';

	      if (KEY in NativePrototype && !(IS_WEAK && KEY == 'clear')) {
	        createNonEnumerableProperty(Constructor.prototype, KEY, function (a, b) {
	          var collection = getInternalState(this).collection;
	          if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
	          var result = collection[KEY](a === 0 ? 0 : a, b);
	          return IS_ADDER ? this : result;
	        });
	      }
	    });
	    IS_WEAK || defineProperty$9(Constructor.prototype, 'size', {
	      configurable: true,
	      get: function () {
	        return getInternalState(this).collection.size;
	      }
	    });
	  }

	  setToStringTag(Constructor, CONSTRUCTOR_NAME, false, true);
	  exported[CONSTRUCTOR_NAME] = Constructor;
	  _export({
	    global: true,
	    forced: true
	  }, exported);
	  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
	  return Constructor;
	};

	var redefineAll = function (target, src, options) {
	  for (var key in src) {
	    if (options && options.unsafe && target[key]) target[key] = src[key];else redefine(target, key, src[key], options);
	  }

	  return target;
	};

	var SPECIES$3 = wellKnownSymbol('species');

	var setSpecies = function (CONSTRUCTOR_NAME) {
	  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
	  var defineProperty = objectDefineProperty.f;

	  if (descriptors && Constructor && !Constructor[SPECIES$3]) {
	    defineProperty(Constructor, SPECIES$3, {
	      configurable: true,
	      get: function () {
	        return this;
	      }
	    });
	  }
	};

	var defineProperty$a = objectDefineProperty.f;
	var fastKey = internalMetadata.fastKey;
	var setInternalState$4 = internalState.set;
	var internalStateGetterFor$1 = internalState.getterFor;
	var collectionStrong = {
	  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, CONSTRUCTOR_NAME);
	      setInternalState$4(that, {
	        type: CONSTRUCTOR_NAME,
	        index: objectCreate(null),
	        first: undefined,
	        last: undefined,
	        size: 0
	      });
	      if (!descriptors) that.size = 0;
	      if (iterable != undefined) iterate(iterable, that[ADDER], {
	        that: that,
	        AS_ENTRIES: IS_MAP
	      });
	    });
	    var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);

	    var define = function (that, key, value) {
	      var state = getInternalState(that);
	      var entry = getEntry(that, key);
	      var previous, index; // change existing entry

	      if (entry) {
	        entry.value = value; // create new entry
	      } else {
	        state.last = entry = {
	          index: index = fastKey(key, true),
	          key: key,
	          value: value,
	          previous: previous = state.last,
	          next: undefined,
	          removed: false
	        };
	        if (!state.first) state.first = entry;
	        if (previous) previous.next = entry;
	        if (descriptors) state.size++;else that.size++; // add to index

	        if (index !== 'F') state.index[index] = entry;
	      }

	      return that;
	    };

	    var getEntry = function (that, key) {
	      var state = getInternalState(that); // fast case

	      var index = fastKey(key);
	      var entry;
	      if (index !== 'F') return state.index[index]; // frozen object case

	      for (entry = state.first; entry; entry = entry.next) {
	        if (entry.key == key) return entry;
	      }
	    };

	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        var that = this;
	        var state = getInternalState(that);
	        var data = state.index;
	        var entry = state.first;

	        while (entry) {
	          entry.removed = true;
	          if (entry.previous) entry.previous = entry.previous.next = undefined;
	          delete data[entry.index];
	          entry = entry.next;
	        }

	        state.first = state.last = undefined;
	        if (descriptors) state.size = 0;else that.size = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function (key) {
	        var that = this;
	        var state = getInternalState(that);
	        var entry = getEntry(that, key);

	        if (entry) {
	          var next = entry.next;
	          var prev = entry.previous;
	          delete state.index[entry.index];
	          entry.removed = true;
	          if (prev) prev.next = next;
	          if (next) next.previous = prev;
	          if (state.first == entry) state.first = next;
	          if (state.last == entry) state.last = prev;
	          if (descriptors) state.size--;else that.size--;
	        }

	        return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn
	      /* , that = undefined */
	      ) {
	        var state = getInternalState(this);
	        var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	        var entry;

	        while (entry = entry ? entry.next : state.first) {
	          boundFunction(entry.value, entry.key, this); // revert to the last existing entry

	          while (entry && entry.removed) entry = entry.previous;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(this, key);
	      }
	    });
	    redefineAll(C.prototype, IS_MAP ? {
	      // 23.1.3.6 Map.prototype.get(key)
	      get: function get(key) {
	        var entry = getEntry(this, key);
	        return entry && entry.value;
	      },
	      // 23.1.3.9 Map.prototype.set(key, value)
	      set: function set(key, value) {
	        return define(this, key === 0 ? 0 : key, value);
	      }
	    } : {
	      // 23.2.3.1 Set.prototype.add(value)
	      add: function add(value) {
	        return define(this, value = value === 0 ? 0 : value, value);
	      }
	    });
	    if (descriptors) defineProperty$a(C.prototype, 'size', {
	      get: function () {
	        return getInternalState(this).size;
	      }
	    });
	    return C;
	  },
	  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
	    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
	    var getInternalCollectionState = internalStateGetterFor$1(CONSTRUCTOR_NAME);
	    var getInternalIteratorState = internalStateGetterFor$1(ITERATOR_NAME); // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11

	    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
	      setInternalState$4(this, {
	        type: ITERATOR_NAME,
	        target: iterated,
	        state: getInternalCollectionState(iterated),
	        kind: kind,
	        last: undefined
	      });
	    }, function () {
	      var state = getInternalIteratorState(this);
	      var kind = state.kind;
	      var entry = state.last; // revert to the last existing entry

	      while (entry && entry.removed) entry = entry.previous; // get next entry


	      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
	        // or finish the iteration
	        state.target = undefined;
	        return {
	          value: undefined,
	          done: true
	        };
	      } // return step by kind


	      if (kind == 'keys') return {
	        value: entry.key,
	        done: false
	      };
	      if (kind == 'values') return {
	        value: entry.value,
	        done: false
	      };
	      return {
	        value: [entry.key, entry.value],
	        done: false
	      };
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

	    setSpecies(CONSTRUCTOR_NAME);
	  }
	};

	// https://tc39.github.io/ecma262/#sec-map-objects


	var es_map = collection('Map', function (init) {
	  return function Map() {
	    return init(this, arguments.length ? arguments[0] : undefined);
	  };
	}, collectionStrong);

	var map$3 = path.Map;

	var map$4 = map$3;

	var map$5 = map$4;

	var create$3 = create;

	var create$4 = create$3;

	// https://tc39.github.io/ecma262/#sec-object.setprototypeof

	_export({
	  target: 'Object',
	  stat: true
	}, {
	  setPrototypeOf: objectSetPrototypeOf
	});

	var setPrototypeOf = path.Object.setPrototypeOf;

	var setPrototypeOf$1 = setPrototypeOf;

	var setPrototypeOf$2 = setPrototypeOf$1;

	var setPrototypeOf$3 = createCommonjsModule(function (module) {
	  function _setPrototypeOf(o, p) {
	    module.exports = _setPrototypeOf = setPrototypeOf$2 || function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };

	    return _setPrototypeOf(o, p);
	  }

	  module.exports = _setPrototypeOf;
	});

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = create$4(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) setPrototypeOf$3(subClass, superClass);
	}

	var inherits = _inherits;

	function _assertThisInitialized$1(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	var assertThisInitialized = _assertThisInitialized$1;

	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
	    return call;
	  }

	  return assertThisInitialized(self);
	}

	var possibleConstructorReturn = _possibleConstructorReturn;

	var getPrototypeOf$1 = getPrototypeOf;

	var getPrototypeOf$2 = getPrototypeOf$1;

	var getPrototypeOf$3 = createCommonjsModule(function (module) {
	  function _getPrototypeOf(o) {
	    module.exports = _getPrototypeOf = setPrototypeOf$2 ? getPrototypeOf$2 : function _getPrototypeOf(o) {
	      return o.__proto__ || getPrototypeOf$2(o);
	    };
	    return _getPrototypeOf(o);
	  }

	  module.exports = _getPrototypeOf;
	});

	// Unique ID creation requires a high quality random # generator. In the browser we therefore
	// require the crypto API and do not support built-in fallback to lower quality random number
	// generators (like Math.random()).
	var getRandomValues;
	var rnds8 = new Uint8Array(16);
	function rng() {
	  // lazy load so that environments that need to polyfill have a chance to do so
	  if (!getRandomValues) {
	    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
	    // find the complete implementation of crypto (msCrypto) on IE11.
	    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

	    if (!getRandomValues) {
	      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
	    }
	  }

	  return getRandomValues(rnds8);
	}

	var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

	function validate(uuid) {
	  return typeof uuid === 'string' && REGEX.test(uuid);
	}

	/**
	 * Convert array of 16 byte values to UUID string format of the form:
	 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
	 */

	var byteToHex = [];

	for (var i = 0; i < 256; ++i) {
	  byteToHex.push((i + 0x100).toString(16).substr(1));
	}

	function stringify$3(arr) {
	  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0; // Note: Be careful editing this code!  It's been tuned for performance
	  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

	  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
	  // of the following:
	  // - One or more input array values don't map to a hex octet (leading to
	  // "undefined" in the uuid)
	  // - Invalid input values for the RFC `version` or `variant` fields

	  if (!validate(uuid)) {
	    throw TypeError('Stringified UUID is invalid');
	  }

	  return uuid;
	}

	function v4(options, buf, offset) {
	  options = options || {};
	  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

	  rnds[6] = rnds[6] & 0x0f | 0x40;
	  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

	  if (buf) {
	    offset = offset || 0;

	    for (var i = 0; i < 16; ++i) {
	      buf[offset + i] = rnds[i];
	    }

	    return buf;
	  }

	  return stringify$3(rnds);
	}

	/**
	 * Determine whether a value can be used as an id.
	 *
	 * @param value - Input value of unknown type.
	 *
	 * @returns True if the value is valid id, false otherwise.
	 */
	function isId(value) {
	  return typeof value === "string" || typeof value === "number";
	}

	/**
	 * A queue.
	 *
	 * @typeParam T - The type of method names to be replaced by queued versions.
	 */
	var Queue = /*#__PURE__*/function () {
	  /**
	   * Construct a new Queue.
	   *
	   * @param options - Queue configuration.
	   */
	  function Queue(options) {
	    classCallCheck(this, Queue);

	    this._queue = [];
	    this._timeout = null;
	    this._extended = null; // options

	    this.delay = null;
	    this.max = Infinity;
	    this.setOptions(options);
	  }
	  /**
	   * Update the configuration of the queue.
	   *
	   * @param options - Queue configuration.
	   */


	  createClass(Queue, [{
	    key: "setOptions",
	    value: function setOptions(options) {
	      if (options && typeof options.delay !== "undefined") {
	        this.delay = options.delay;
	      }

	      if (options && typeof options.max !== "undefined") {
	        this.max = options.max;
	      }

	      this._flushIfNeeded();
	    }
	    /**
	     * Extend an object with queuing functionality.
	     * The object will be extended with a function flush, and the methods provided in options.replace will be replaced with queued ones.
	     *
	     * @param object - The object to be extended.
	     * @param options - Additional options.
	     *
	     * @returns The created queue.
	     */

	  }, {
	    key: "destroy",

	    /**
	     * Destroy the queue. The queue will first flush all queued actions, and in case it has extended an object, will restore the original object.
	     */
	    value: function destroy() {
	      this.flush();

	      if (this._extended) {
	        var object = this._extended.object;
	        var methods = this._extended.methods;

	        for (var i = 0; i < methods.length; i++) {
	          var method = methods[i];

	          if (method.original) {
	            // @TODO: better solution?
	            object[method.name] = method.original;
	          } else {
	            // @TODO: better solution?
	            delete object[method.name];
	          }
	        }

	        this._extended = null;
	      }
	    }
	    /**
	     * Replace a method on an object with a queued version.
	     *
	     * @param object - Object having the method.
	     * @param method - The method name.
	     */

	  }, {
	    key: "replace",
	    value: function replace(object, method) {
	      /* eslint-disable-next-line @typescript-eslint/no-this-alias -- Function this is necessary in the function bellow, so class this has to be saved into a variable here. */
	      var me = this;
	      var original = object[method];

	      if (!original) {
	        throw new Error("Method " + method + " undefined");
	      }

	      object[method] = function () {
	        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        // add this call to the queue
	        me.queue({
	          args: args,
	          fn: original,
	          context: this
	        });
	      };
	    }
	    /**
	     * Queue a call.
	     *
	     * @param entry - The function or entry to be queued.
	     */

	  }, {
	    key: "queue",
	    value: function queue(entry) {
	      if (typeof entry === "function") {
	        this._queue.push({
	          fn: entry
	        });
	      } else {
	        this._queue.push(entry);
	      }

	      this._flushIfNeeded();
	    }
	    /**
	     * Check whether the queue needs to be flushed.
	     */

	  }, {
	    key: "_flushIfNeeded",
	    value: function _flushIfNeeded() {
	      var _this = this;

	      // flush when the maximum is exceeded.
	      if (this._queue.length > this.max) {
	        this.flush();
	      } // flush after a period of inactivity when a delay is configured


	      if (this._timeout != null) {
	        clearTimeout(this._timeout);
	        this._timeout = null;
	      }

	      if (this.queue.length > 0 && typeof this.delay === "number") {
	        this._timeout = setTimeout$2(function () {
	          _this.flush();
	        }, this.delay);
	      }
	    }
	    /**
	     * Flush all queued calls
	     */

	  }, {
	    key: "flush",
	    value: function flush() {
	      var _context, _context2;

	      forEach$2(_context = splice$2(_context2 = this._queue).call(_context2, 0)).call(_context, function (entry) {
	        entry.fn.apply(entry.context || entry.fn, entry.args || []);
	      });
	    }
	  }], [{
	    key: "extend",
	    value: function extend(object, options) {
	      var queue = new Queue(options);

	      if (object.flush !== undefined) {
	        throw new Error("Target object already has a property flush");
	      }

	      object.flush = function () {
	        queue.flush();
	      };

	      var methods = [{
	        name: "flush",
	        original: undefined
	      }];

	      if (options && options.replace) {
	        for (var i = 0; i < options.replace.length; i++) {
	          var name = options.replace[i];
	          methods.push({
	            name: name,
	            // @TODO: better solution?
	            original: object[name]
	          }); // @TODO: better solution?

	          queue.replace(object, name);
	        }
	      }

	      queue._extended = {
	        object: object,
	        methods: methods
	      };
	      return queue;
	    }
	  }]);

	  return Queue;
	}();

	/**
	 * [[DataSet]] code that can be reused in [[DataView]] or other similar implementations of [[DataInterface]].
	 *
	 * @typeParam Item - Item type that may or may not have an id.
	 * @typeParam IdProp - Name of the property that contains the id.
	 */
	var DataSetPart = /*#__PURE__*/function () {
	  function DataSetPart() {
	    classCallCheck(this, DataSetPart);

	    this._subscribers = {
	      "*": [],
	      add: [],
	      remove: [],
	      update: []
	    };
	    /**
	     * @deprecated Use on instead (PS: DataView.subscribe === DataView.on).
	     */

	    this.subscribe = DataSetPart.prototype.on;
	    /**
	     * @deprecated Use off instead (PS: DataView.unsubscribe === DataView.off).
	     */

	    this.unsubscribe = DataSetPart.prototype.off;
	  }
	  /**
	   * Trigger an event
	   *
	   * @param event - Event name.
	   * @param payload - Event payload.
	   * @param senderId - Id of the sender.
	   */


	  createClass(DataSetPart, [{
	    key: "_trigger",
	    value: function _trigger(event, payload, senderId) {
	      var _context, _context2;

	      if (event === "*") {
	        throw new Error("Cannot trigger event *");
	      }

	      forEach$2(_context = concat$2(_context2 = []).call(_context2, toConsumableArray(this._subscribers[event]), toConsumableArray(this._subscribers["*"]))).call(_context, function (subscriber) {
	        subscriber(event, payload, senderId != null ? senderId : null);
	      });
	    }
	    /**
	     * Subscribe to an event, add an event listener.
	     *
	     * @remarks Non-function callbacks are ignored.
	     *
	     * @param event - Event name.
	     * @param callback - Callback method.
	     */

	  }, {
	    key: "on",
	    value: function on(event, callback) {
	      if (typeof callback === "function") {
	        this._subscribers[event].push(callback);
	      } // @TODO: Maybe throw for invalid callbacks?

	    }
	    /**
	     * Unsubscribe from an event, remove an event listener.
	     *
	     * @remarks If the same callback was subscribed more than once **all** occurences will be removed.
	     *
	     * @param event - Event name.
	     * @param callback - Callback method.
	     */

	  }, {
	    key: "off",
	    value: function off(event, callback) {
	      var _context3;

	      this._subscribers[event] = filter$2(_context3 = this._subscribers[event]).call(_context3, function (subscriber) {
	        return subscriber !== callback;
	      });
	    }
	  }]);

	  return DataSetPart;
	}();

	// https://tc39.github.io/ecma262/#sec-set-objects


	var es_set = collection('Set', function (init) {
	  return function Set() {
	    return init(this, arguments.length ? arguments[0] : undefined);
	  };
	}, collectionStrong);

	var set$1 = path.Set;

	var set$2 = set$1;

	var set$3 = set$2;

	function _createForOfIteratorHelper$1(o, allowArrayLike) { var it; if (typeof symbol$4 === "undefined" || getIteratorMethod$1(o) == null) { if (isArray$5(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = getIterator$1(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

	function _unsupportedIterableToArray$2(o, minLen) { var _context10; if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = slice$6(_context10 = Object.prototype.toString.call(o)).call(_context10, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return from$2(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }

	function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

	/**
	 * Data stream
	 *
	 * @remarks
	 * [[DataStream]] offers an always up to date stream of items from a [[DataSet]] or [[DataView]].
	 * That means that the stream is evaluated at the time of iteration, conversion to another data type or when [[cache]] is called, not when the [[DataStream]] was created.
	 * Multiple invocations of for example [[toItemArray]] may yield different results (if the data source like for example [[DataSet]] gets modified).
	 *
	 * @typeParam Item - The item type this stream is going to work with.
	 */
	var DataStream = /*#__PURE__*/function () {
	  /**
	   * Create a new data stream.
	   *
	   * @param pairs - The id, item pairs.
	   */
	  function DataStream(pairs) {
	    classCallCheck(this, DataStream);

	    this._pairs = pairs;
	  }
	  /**
	   * Return an iterable of key, value pairs for every entry in the stream.
	   */


	  createClass(DataStream, [{
	    key: iterator$4,
	    value: /*#__PURE__*/regenerator.mark(function value() {
	      var _iterator, _step, _step$value, id, item;

	      return regenerator.wrap(function value$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              _iterator = _createForOfIteratorHelper$1(this._pairs);
	              _context.prev = 1;

	              _iterator.s();

	            case 3:
	              if ((_step = _iterator.n()).done) {
	                _context.next = 9;
	                break;
	              }

	              _step$value = slicedToArray(_step.value, 2), id = _step$value[0], item = _step$value[1];
	              _context.next = 7;
	              return [id, item];

	            case 7:
	              _context.next = 3;
	              break;

	            case 9:
	              _context.next = 14;
	              break;

	            case 11:
	              _context.prev = 11;
	              _context.t0 = _context["catch"](1);

	              _iterator.e(_context.t0);

	            case 14:
	              _context.prev = 14;

	              _iterator.f();

	              return _context.finish(14);

	            case 17:
	            case "end":
	              return _context.stop();
	          }
	        }
	      }, value, this, [[1, 11, 14, 17]]);
	    })
	    /**
	     * Return an iterable of key, value pairs for every entry in the stream.
	     */

	  }, {
	    key: "entries",
	    value: /*#__PURE__*/regenerator.mark(function entries() {
	      var _iterator2, _step2, _step2$value, id, item;

	      return regenerator.wrap(function entries$(_context2) {
	        while (1) {
	          switch (_context2.prev = _context2.next) {
	            case 0:
	              _iterator2 = _createForOfIteratorHelper$1(this._pairs);
	              _context2.prev = 1;

	              _iterator2.s();

	            case 3:
	              if ((_step2 = _iterator2.n()).done) {
	                _context2.next = 9;
	                break;
	              }

	              _step2$value = slicedToArray(_step2.value, 2), id = _step2$value[0], item = _step2$value[1];
	              _context2.next = 7;
	              return [id, item];

	            case 7:
	              _context2.next = 3;
	              break;

	            case 9:
	              _context2.next = 14;
	              break;

	            case 11:
	              _context2.prev = 11;
	              _context2.t0 = _context2["catch"](1);

	              _iterator2.e(_context2.t0);

	            case 14:
	              _context2.prev = 14;

	              _iterator2.f();

	              return _context2.finish(14);

	            case 17:
	            case "end":
	              return _context2.stop();
	          }
	        }
	      }, entries, this, [[1, 11, 14, 17]]);
	    })
	    /**
	     * Return an iterable of keys in the stream.
	     */

	  }, {
	    key: "keys",
	    value: /*#__PURE__*/regenerator.mark(function keys() {
	      var _iterator3, _step3, _step3$value, id;

	      return regenerator.wrap(function keys$(_context3) {
	        while (1) {
	          switch (_context3.prev = _context3.next) {
	            case 0:
	              _iterator3 = _createForOfIteratorHelper$1(this._pairs);
	              _context3.prev = 1;

	              _iterator3.s();

	            case 3:
	              if ((_step3 = _iterator3.n()).done) {
	                _context3.next = 9;
	                break;
	              }

	              _step3$value = slicedToArray(_step3.value, 1), id = _step3$value[0];
	              _context3.next = 7;
	              return id;

	            case 7:
	              _context3.next = 3;
	              break;

	            case 9:
	              _context3.next = 14;
	              break;

	            case 11:
	              _context3.prev = 11;
	              _context3.t0 = _context3["catch"](1);

	              _iterator3.e(_context3.t0);

	            case 14:
	              _context3.prev = 14;

	              _iterator3.f();

	              return _context3.finish(14);

	            case 17:
	            case "end":
	              return _context3.stop();
	          }
	        }
	      }, keys, this, [[1, 11, 14, 17]]);
	    })
	    /**
	     * Return an iterable of values in the stream.
	     */

	  }, {
	    key: "values",
	    value: /*#__PURE__*/regenerator.mark(function values() {
	      var _iterator4, _step4, _step4$value, item;

	      return regenerator.wrap(function values$(_context4) {
	        while (1) {
	          switch (_context4.prev = _context4.next) {
	            case 0:
	              _iterator4 = _createForOfIteratorHelper$1(this._pairs);
	              _context4.prev = 1;

	              _iterator4.s();

	            case 3:
	              if ((_step4 = _iterator4.n()).done) {
	                _context4.next = 9;
	                break;
	              }

	              _step4$value = slicedToArray(_step4.value, 2), item = _step4$value[1];
	              _context4.next = 7;
	              return item;

	            case 7:
	              _context4.next = 3;
	              break;

	            case 9:
	              _context4.next = 14;
	              break;

	            case 11:
	              _context4.prev = 11;
	              _context4.t0 = _context4["catch"](1);

	              _iterator4.e(_context4.t0);

	            case 14:
	              _context4.prev = 14;

	              _iterator4.f();

	              return _context4.finish(14);

	            case 17:
	            case "end":
	              return _context4.stop();
	          }
	        }
	      }, values, this, [[1, 11, 14, 17]]);
	    })
	    /**
	     * Return an array containing all the ids in this stream.
	     *
	     * @remarks
	     * The array may contain duplicities.
	     *
	     * @returns The array with all ids from this stream.
	     */

	  }, {
	    key: "toIdArray",
	    value: function toIdArray() {
	      var _context5;

	      return map$2(_context5 = toConsumableArray(this._pairs)).call(_context5, function (pair) {
	        return pair[0];
	      });
	    }
	    /**
	     * Return an array containing all the items in this stream.
	     *
	     * @remarks
	     * The array may contain duplicities.
	     *
	     * @returns The array with all items from this stream.
	     */

	  }, {
	    key: "toItemArray",
	    value: function toItemArray() {
	      var _context6;

	      return map$2(_context6 = toConsumableArray(this._pairs)).call(_context6, function (pair) {
	        return pair[1];
	      });
	    }
	    /**
	     * Return an array containing all the entries in this stream.
	     *
	     * @remarks
	     * The array may contain duplicities.
	     *
	     * @returns The array with all entries from this stream.
	     */

	  }, {
	    key: "toEntryArray",
	    value: function toEntryArray() {
	      return toConsumableArray(this._pairs);
	    }
	    /**
	     * Return an object map containing all the items in this stream accessible by ids.
	     *
	     * @remarks
	     * In case of duplicate ids (coerced to string so `7 == '7'`) the last encoutered appears in the returned object.
	     *
	     * @returns The object map of all id → item pairs from this stream.
	     */

	  }, {
	    key: "toObjectMap",
	    value: function toObjectMap() {
	      var map = create$2(null);

	      var _iterator5 = _createForOfIteratorHelper$1(this._pairs),
	          _step5;

	      try {
	        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
	          var _step5$value = slicedToArray(_step5.value, 2),
	              id = _step5$value[0],
	              item = _step5$value[1];

	          map[id] = item;
	        }
	      } catch (err) {
	        _iterator5.e(err);
	      } finally {
	        _iterator5.f();
	      }

	      return map;
	    }
	    /**
	     * Return a map containing all the items in this stream accessible by ids.
	     *
	     * @returns The map of all id → item pairs from this stream.
	     */

	  }, {
	    key: "toMap",
	    value: function toMap() {
	      return new map$5(this._pairs);
	    }
	    /**
	     * Return a set containing all the (unique) ids in this stream.
	     *
	     * @returns The set of all ids from this stream.
	     */

	  }, {
	    key: "toIdSet",
	    value: function toIdSet() {
	      return new set$3(this.toIdArray());
	    }
	    /**
	     * Return a set containing all the (unique) items in this stream.
	     *
	     * @returns The set of all items from this stream.
	     */

	  }, {
	    key: "toItemSet",
	    value: function toItemSet() {
	      return new set$3(this.toItemArray());
	    }
	    /**
	     * Cache the items from this stream.
	     *
	     * @remarks
	     * This method allows for items to be fetched immediatelly and used (possibly multiple times) later.
	     * It can also be used to optimize performance as [[DataStream]] would otherwise reevaluate everything upon each iteration.
	     *
	     * ## Example
	     * ```javascript
	     * const ds = new DataSet([…])
	     *
	     * const cachedStream = ds.stream()
	     *   .filter(…)
	     *   .sort(…)
	     *   .map(…)
	     *   .cached(…) // Data are fetched, processed and cached here.
	     *
	     * ds.clear()
	     * chachedStream // Still has all the items.
	     * ```
	     *
	     * @returns A new [[DataStream]] with cached items (detached from the original [[DataSet]]).
	     */

	  }, {
	    key: "cache",
	    value: function cache() {
	      return new DataStream(toConsumableArray(this._pairs));
	    }
	    /**
	     * Get the distinct values of given property.
	     *
	     * @param callback - The function that picks and possibly converts the property.
	     *
	     * @typeParam T - The type of the distinct value.
	     *
	     * @returns A set of all distinct properties.
	     */

	  }, {
	    key: "distinct",
	    value: function distinct(callback) {
	      var set = new set$3();

	      var _iterator6 = _createForOfIteratorHelper$1(this._pairs),
	          _step6;

	      try {
	        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
	          var _step6$value = slicedToArray(_step6.value, 2),
	              id = _step6$value[0],
	              item = _step6$value[1];

	          set.add(callback(item, id));
	        }
	      } catch (err) {
	        _iterator6.e(err);
	      } finally {
	        _iterator6.f();
	      }

	      return set;
	    }
	    /**
	     * Filter the items of the stream.
	     *
	     * @param callback - The function that decides whether an item will be included.
	     *
	     * @returns A new data stream with the filtered items.
	     */

	  }, {
	    key: "filter",
	    value: function filter(callback) {
	      var pairs = this._pairs;
	      return new DataStream(defineProperty$7({}, iterator$4, /*#__PURE__*/regenerator.mark(function _callee() {
	        var _iterator7, _step7, _step7$value, id, item;

	        return regenerator.wrap(function _callee$(_context7) {
	          while (1) {
	            switch (_context7.prev = _context7.next) {
	              case 0:
	                _iterator7 = _createForOfIteratorHelper$1(pairs);
	                _context7.prev = 1;

	                _iterator7.s();

	              case 3:
	                if ((_step7 = _iterator7.n()).done) {
	                  _context7.next = 10;
	                  break;
	                }

	                _step7$value = slicedToArray(_step7.value, 2), id = _step7$value[0], item = _step7$value[1];

	                if (!callback(item, id)) {
	                  _context7.next = 8;
	                  break;
	                }

	                _context7.next = 8;
	                return [id, item];

	              case 8:
	                _context7.next = 3;
	                break;

	              case 10:
	                _context7.next = 15;
	                break;

	              case 12:
	                _context7.prev = 12;
	                _context7.t0 = _context7["catch"](1);

	                _iterator7.e(_context7.t0);

	              case 15:
	                _context7.prev = 15;

	                _iterator7.f();

	                return _context7.finish(15);

	              case 18:
	              case "end":
	                return _context7.stop();
	            }
	          }
	        }, _callee, null, [[1, 12, 15, 18]]);
	      })));
	    }
	    /**
	     * Execute a callback for each item of the stream.
	     *
	     * @param callback - The function that will be invoked for each item.
	     */

	  }, {
	    key: "forEach",
	    value: function forEach(callback) {
	      var _iterator8 = _createForOfIteratorHelper$1(this._pairs),
	          _step8;

	      try {
	        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
	          var _step8$value = slicedToArray(_step8.value, 2),
	              id = _step8$value[0],
	              item = _step8$value[1];

	          callback(item, id);
	        }
	      } catch (err) {
	        _iterator8.e(err);
	      } finally {
	        _iterator8.f();
	      }
	    }
	    /**
	     * Map the items into a different type.
	     *
	     * @param callback - The function that does the conversion.
	     *
	     * @typeParam Mapped - The type of the item after mapping.
	     *
	     * @returns A new data stream with the mapped items.
	     */

	  }, {
	    key: "map",
	    value: function map(callback) {
	      var pairs = this._pairs;
	      return new DataStream(defineProperty$7({}, iterator$4, /*#__PURE__*/regenerator.mark(function _callee2() {
	        var _iterator9, _step9, _step9$value, id, item;

	        return regenerator.wrap(function _callee2$(_context8) {
	          while (1) {
	            switch (_context8.prev = _context8.next) {
	              case 0:
	                _iterator9 = _createForOfIteratorHelper$1(pairs);
	                _context8.prev = 1;

	                _iterator9.s();

	              case 3:
	                if ((_step9 = _iterator9.n()).done) {
	                  _context8.next = 9;
	                  break;
	                }

	                _step9$value = slicedToArray(_step9.value, 2), id = _step9$value[0], item = _step9$value[1];
	                _context8.next = 7;
	                return [id, callback(item, id)];

	              case 7:
	                _context8.next = 3;
	                break;

	              case 9:
	                _context8.next = 14;
	                break;

	              case 11:
	                _context8.prev = 11;
	                _context8.t0 = _context8["catch"](1);

	                _iterator9.e(_context8.t0);

	              case 14:
	                _context8.prev = 14;

	                _iterator9.f();

	                return _context8.finish(14);

	              case 17:
	              case "end":
	                return _context8.stop();
	            }
	          }
	        }, _callee2, null, [[1, 11, 14, 17]]);
	      })));
	    }
	    /**
	     * Get the item with the maximum value of given property.
	     *
	     * @param callback - The function that picks and possibly converts the property.
	     *
	     * @returns The item with the maximum if found otherwise null.
	     */

	  }, {
	    key: "max",
	    value: function max(callback) {
	      var iter = getIterator$1(this._pairs);

	      var curr = iter.next();

	      if (curr.done) {
	        return null;
	      }

	      var maxItem = curr.value[1];
	      var maxValue = callback(curr.value[1], curr.value[0]);

	      while (!(curr = iter.next()).done) {
	        var _curr$value = slicedToArray(curr.value, 2),
	            id = _curr$value[0],
	            item = _curr$value[1];

	        var _value = callback(item, id);

	        if (_value > maxValue) {
	          maxValue = _value;
	          maxItem = item;
	        }
	      }

	      return maxItem;
	    }
	    /**
	     * Get the item with the minimum value of given property.
	     *
	     * @param callback - The function that picks and possibly converts the property.
	     *
	     * @returns The item with the minimum if found otherwise null.
	     */

	  }, {
	    key: "min",
	    value: function min(callback) {
	      var iter = getIterator$1(this._pairs);

	      var curr = iter.next();

	      if (curr.done) {
	        return null;
	      }

	      var minItem = curr.value[1];
	      var minValue = callback(curr.value[1], curr.value[0]);

	      while (!(curr = iter.next()).done) {
	        var _curr$value2 = slicedToArray(curr.value, 2),
	            id = _curr$value2[0],
	            item = _curr$value2[1];

	        var _value2 = callback(item, id);

	        if (_value2 < minValue) {
	          minValue = _value2;
	          minItem = item;
	        }
	      }

	      return minItem;
	    }
	    /**
	     * Reduce the items into a single value.
	     *
	     * @param callback - The function that does the reduction.
	     * @param accumulator - The initial value of the accumulator.
	     *
	     * @typeParam T - The type of the accumulated value.
	     *
	     * @returns The reduced value.
	     */

	  }, {
	    key: "reduce",
	    value: function reduce(callback, accumulator) {
	      var _iterator10 = _createForOfIteratorHelper$1(this._pairs),
	          _step10;

	      try {
	        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
	          var _step10$value = slicedToArray(_step10.value, 2),
	              id = _step10$value[0],
	              item = _step10$value[1];

	          accumulator = callback(accumulator, item, id);
	        }
	      } catch (err) {
	        _iterator10.e(err);
	      } finally {
	        _iterator10.f();
	      }

	      return accumulator;
	    }
	    /**
	     * Sort the items.
	     *
	     * @param callback - Item comparator.
	     *
	     * @returns A new stream with sorted items.
	     */

	  }, {
	    key: "sort",
	    value: function sort(callback) {
	      var _this = this;

	      return new DataStream(defineProperty$7({}, iterator$4, function () {
	        var _context9;

	        return getIterator$1(sort$2(_context9 = toConsumableArray(_this._pairs)).call(_context9, function (_ref, _ref2) {
	          var _ref3 = slicedToArray(_ref, 2),
	              idA = _ref3[0],
	              itemA = _ref3[1];

	          var _ref4 = slicedToArray(_ref2, 2),
	              idB = _ref4[0],
	              itemB = _ref4[1];

	          return callback(itemA, itemB, idA, idB);
	        }));
	      }));
	    }
	  }]);

	  return DataStream;
	}();

	function ownKeys$4(object, enumerableOnly) { var keys = keys$3(object); if (getOwnPropertySymbols$2) { var symbols = getOwnPropertySymbols$2(object); if (enumerableOnly) symbols = filter$2(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor$3(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context10; forEach$2(_context10 = ownKeys$4(Object(source), true)).call(_context10, function (key) { defineProperty$7(target, key, source[key]); }); } else if (getOwnPropertyDescriptors$2) { defineProperties$1(target, getOwnPropertyDescriptors$2(source)); } else { var _context11; forEach$2(_context11 = ownKeys$4(Object(source))).call(_context11, function (key) { defineProperty$4(target, key, getOwnPropertyDescriptor$3(source, key)); }); } } return target; }

	function _createForOfIteratorHelper$2(o, allowArrayLike) { var it; if (typeof symbol$4 === "undefined" || getIteratorMethod$1(o) == null) { if (isArray$5(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = getIterator$1(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

	function _unsupportedIterableToArray$3(o, minLen) { var _context9; if (!o) return; if (typeof o === "string") return _arrayLikeToArray$3(o, minLen); var n = slice$6(_context9 = Object.prototype.toString.call(o)).call(_context9, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return from$2(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen); }

	function _arrayLikeToArray$3(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

	function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf$3(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf$3(this).constructor; result = construct$3(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !construct$3) return false; if (construct$3.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(construct$3(Date, [], function () {})); return true; } catch (e) { return false; } }
	/**
	 * Add an id to given item if it doesn't have one already.
	 *
	 * @remarks
	 * The item will be modified.
	 *
	 * @param item - The item that will have an id after a call to this function.
	 * @param idProp - The key of the id property.
	 *
	 * @typeParam Item - Item type that may or may not have an id.
	 * @typeParam IdProp - Name of the property that contains the id.
	 *
	 * @returns true
	 */

	function ensureFullItem(item, idProp) {
	  if (item[idProp] == null) {
	    // generate an id
	    item[idProp] = v4();
	  }

	  return item;
	}
	/**
	 * # DataSet
	 *
	 * Vis.js comes with a flexible DataSet, which can be used to hold and
	 * manipulate unstructured data and listen for changes in the data. The DataSet
	 * is key/value based. Data items can be added, updated and removed from the
	 * DataSet, and one can subscribe to changes in the DataSet. The data in the
	 * DataSet can be filtered and ordered. Data can be normalized when appending it
	 * to the DataSet as well.
	 *
	 * ## Example
	 *
	 * The following example shows how to use a DataSet.
	 *
	 * ```javascript
	 * // create a DataSet
	 * var options = {};
	 * var data = new vis.DataSet(options);
	 *
	 * // add items
	 * // note that the data items can contain different properties and data formats
	 * data.add([
	 *   {id: 1, text: 'item 1', date: new Date(2013, 6, 20), group: 1, first: true},
	 *   {id: 2, text: 'item 2', date: '2013-06-23', group: 2},
	 *   {id: 3, text: 'item 3', date: '2013-06-25', group: 2},
	 *   {id: 4, text: 'item 4'}
	 * ]);
	 *
	 * // subscribe to any change in the DataSet
	 * data.on('*', function (event, properties, senderId) {
	 *   console.log('event', event, properties);
	 * });
	 *
	 * // update an existing item
	 * data.update({id: 2, group: 1});
	 *
	 * // remove an item
	 * data.remove(4);
	 *
	 * // get all ids
	 * var ids = data.getIds();
	 * console.log('ids', ids);
	 *
	 * // get a specific item
	 * var item1 = data.get(1);
	 * console.log('item1', item1);
	 *
	 * // retrieve a filtered subset of the data
	 * var items = data.get({
	 *   filter: function (item) {
	 *     return item.group == 1;
	 *   }
	 * });
	 * console.log('filtered items', items);
	 * ```
	 *
	 * @typeParam Item - Item type that may or may not have an id.
	 * @typeParam IdProp - Name of the property that contains the id.
	 */


	var DataSet = /*#__PURE__*/function (_DataSetPart) {
	  inherits(DataSet, _DataSetPart);

	  var _super = _createSuper(DataSet);

	  /**
	   * Construct a new DataSet.
	   *
	   * @param data - Initial data or options.
	   * @param options - Options (type error if data is also options).
	   */
	  function DataSet(data, options) {
	    var _this;

	    classCallCheck(this, DataSet);

	    _this = _super.call(this);
	    _this._queue = null; // correctly read optional arguments

	    if (data && !isArray$5(data)) {
	      options = data;
	      data = [];
	    }

	    _this._options = options || {};
	    _this._data = new map$5(); // map with data indexed by id

	    _this.length = 0; // number of items in the DataSet

	    _this._idProp = _this._options.fieldId || "id"; // name of the field containing id
	    // add initial data when provided

	    if (data && data.length) {
	      _this.add(data);
	    }

	    _this.setOptions(options);

	    return _this;
	  }
	  /** @inheritDoc */


	  createClass(DataSet, [{
	    key: "setOptions",

	    /**
	     * Set new options.
	     *
	     * @param options - The new options.
	     */
	    value: function setOptions(options) {
	      if (options && options.queue !== undefined) {
	        if (options.queue === false) {
	          // delete queue if loaded
	          if (this._queue) {
	            this._queue.destroy();

	            this._queue = null;
	          }
	        } else {
	          // create queue and update its options
	          if (!this._queue) {
	            this._queue = Queue.extend(this, {
	              replace: ["add", "update", "remove"]
	            });
	          }

	          if (options.queue && _typeof_1(options.queue) === "object") {
	            this._queue.setOptions(options.queue);
	          }
	        }
	      }
	    }
	    /**
	     * Add a data item or an array with items.
	     *
	     * After the items are added to the DataSet, the DataSet will trigger an event `add`. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
	     *
	     * ## Example
	     *
	     * ```javascript
	     * // create a DataSet
	     * const data = new vis.DataSet()
	     *
	     * // add items
	     * const ids = data.add([
	     *   { id: 1, text: 'item 1' },
	     *   { id: 2, text: 'item 2' },
	     *   { text: 'item without an id' }
	     * ])
	     *
	     * console.log(ids) // [1, 2, '<UUIDv4>']
	     * ```
	     *
	     * @param data - Items to be added (ids will be generated if missing).
	     * @param senderId - Sender id.
	     *
	     * @returns addedIds - Array with the ids (generated if not present) of the added items.
	     *
	     * @throws When an item with the same id as any of the added items already exists.
	     */

	  }, {
	    key: "add",
	    value: function add(data, senderId) {
	      var _this2 = this;

	      var addedIds = [];
	      var id;

	      if (isArray$5(data)) {
	        // Array
	        var idsToAdd = map$2(data).call(data, function (d) {
	          return d[_this2._idProp];
	        });

	        if (some$2(idsToAdd).call(idsToAdd, function (id) {
	          return _this2._data.has(id);
	        })) {
	          throw new Error("A duplicate id was found in the parameter array.");
	        }

	        for (var i = 0, len = data.length; i < len; i++) {
	          id = this._addItem(data[i]);
	          addedIds.push(id);
	        }
	      } else if (data && _typeof_1(data) === "object") {
	        // Single item
	        id = this._addItem(data);
	        addedIds.push(id);
	      } else {
	        throw new Error("Unknown dataType");
	      }

	      if (addedIds.length) {
	        this._trigger("add", {
	          items: addedIds
	        }, senderId);
	      }

	      return addedIds;
	    }
	    /**
	     * Update existing items. When an item does not exist, it will be created.
	     *
	     * @remarks
	     * The provided properties will be merged in the existing item. When an item does not exist, it will be created.
	     *
	     * After the items are updated, the DataSet will trigger an event `add` for the added items, and an event `update`. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
	     *
	     * ## Example
	     *
	     * ```javascript
	     * // create a DataSet
	     * const data = new vis.DataSet([
	     *   { id: 1, text: 'item 1' },
	     *   { id: 2, text: 'item 2' },
	     *   { id: 3, text: 'item 3' }
	     * ])
	     *
	     * // update items
	     * const ids = data.update([
	     *   { id: 2, text: 'item 2 (updated)' },
	     *   { id: 4, text: 'item 4 (new)' }
	     * ])
	     *
	     * console.log(ids) // [2, 4]
	     * ```
	     *
	     * ## Warning for TypeScript users
	     * This method may introduce partial items into the data set. Use add or updateOnly instead for better type safety.
	     *
	     * @param data - Items to be updated (if the id is already present) or added (if the id is missing).
	     * @param senderId - Sender id.
	     *
	     * @returns updatedIds - The ids of the added (these may be newly generated if there was no id in the item from the data) or updated items.
	     *
	     * @throws When the supplied data is neither an item nor an array of items.
	     */

	  }, {
	    key: "update",
	    value: function update(data, senderId) {
	      var _this3 = this;

	      var addedIds = [];
	      var updatedIds = [];
	      var oldData = [];
	      var updatedData = [];
	      var idProp = this._idProp;

	      var addOrUpdate = function addOrUpdate(item) {
	        var origId = item[idProp];

	        if (origId != null && _this3._data.has(origId)) {
	          var fullItem = item; // it has an id, therefore it is a fullitem

	          var oldItem = assign$2({}, _this3._data.get(origId)); // update item


	          var id = _this3._updateItem(fullItem);

	          updatedIds.push(id);
	          updatedData.push(fullItem);
	          oldData.push(oldItem);
	        } else {
	          // add new item
	          var _id = _this3._addItem(item);

	          addedIds.push(_id);
	        }
	      };

	      if (isArray$5(data)) {
	        // Array
	        for (var i = 0, len = data.length; i < len; i++) {
	          if (data[i] && _typeof_1(data[i]) === "object") {
	            addOrUpdate(data[i]);
	          } else {
	            console.warn("Ignoring input item, which is not an object at index " + i);
	          }
	        }
	      } else if (data && _typeof_1(data) === "object") {
	        // Single item
	        addOrUpdate(data);
	      } else {
	        throw new Error("Unknown dataType");
	      }

	      if (addedIds.length) {
	        this._trigger("add", {
	          items: addedIds
	        }, senderId);
	      }

	      if (updatedIds.length) {
	        var props = {
	          items: updatedIds,
	          oldData: oldData,
	          data: updatedData
	        }; // TODO: remove deprecated property 'data' some day
	        //Object.defineProperty(props, 'data', {
	        //  'get': (function() {
	        //    console.warn('Property data is deprecated. Use DataSet.get(ids) to retrieve the new data, use the oldData property on this object to get the old data');
	        //    return updatedData;
	        //  }).bind(this)
	        //});

	        this._trigger("update", props, senderId);
	      }

	      return concat$2(addedIds).call(addedIds, updatedIds);
	    }
	    /**
	     * Update existing items. When an item does not exist, an error will be thrown.
	     *
	     * @remarks
	     * The provided properties will be deeply merged into the existing item.
	     * When an item does not exist (id not present in the data set or absent), an error will be thrown and nothing will be changed.
	     *
	     * After the items are updated, the DataSet will trigger an event `update`.
	     * When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
	     *
	     * ## Example
	     *
	     * ```javascript
	     * // create a DataSet
	     * const data = new vis.DataSet([
	     *   { id: 1, text: 'item 1' },
	     *   { id: 2, text: 'item 2' },
	     *   { id: 3, text: 'item 3' },
	     * ])
	     *
	     * // update items
	     * const ids = data.update([
	     *   { id: 2, text: 'item 2 (updated)' }, // works
	     *   // { id: 4, text: 'item 4 (new)' }, // would throw
	     *   // { text: 'item 4 (new)' }, // would also throw
	     * ])
	     *
	     * console.log(ids) // [2]
	     * ```
	     *
	     * @param data - Updates (the id and optionally other props) to the items in this data set.
	     * @param senderId - Sender id.
	     *
	     * @returns updatedIds - The ids of the updated items.
	     *
	     * @throws When the supplied data is neither an item nor an array of items, when the ids are missing.
	     */

	  }, {
	    key: "updateOnly",
	    value: function updateOnly(data, senderId) {
	      var _context,
	          _this4 = this;

	      if (!isArray$5(data)) {
	        data = [data];
	      }

	      var updateEventData = map$2(_context = map$2(data).call(data, function (update) {
	        var oldData = _this4._data.get(update[_this4._idProp]);

	        if (oldData == null) {
	          throw new Error("Updating non-existent items is not allowed.");
	        }

	        return {
	          oldData: oldData,
	          update: update
	        };
	      })).call(_context, function (_ref) {
	        var oldData = _ref.oldData,
	            update = _ref.update;
	        var id = oldData[_this4._idProp];
	        var updatedData = pureDeepObjectAssign(oldData, update);

	        _this4._data.set(id, updatedData);

	        return {
	          id: id,
	          oldData: oldData,
	          updatedData: updatedData
	        };
	      });

	      if (updateEventData.length) {
	        var props = {
	          items: map$2(updateEventData).call(updateEventData, function (value) {
	            return value.id;
	          }),
	          oldData: map$2(updateEventData).call(updateEventData, function (value) {
	            return value.oldData;
	          }),
	          data: map$2(updateEventData).call(updateEventData, function (value) {
	            return value.updatedData;
	          })
	        }; // TODO: remove deprecated property 'data' some day
	        //Object.defineProperty(props, 'data', {
	        //  'get': (function() {
	        //    console.warn('Property data is deprecated. Use DataSet.get(ids) to retrieve the new data, use the oldData property on this object to get the old data');
	        //    return updatedData;
	        //  }).bind(this)
	        //});

	        this._trigger("update", props, senderId);

	        return props.items;
	      } else {
	        return [];
	      }
	    }
	    /** @inheritDoc */

	  }, {
	    key: "get",
	    value: function get(first, second) {
	      // @TODO: Woudn't it be better to split this into multiple methods?
	      // parse the arguments
	      var id = undefined;
	      var ids = undefined;
	      var options = undefined;

	      if (isId(first)) {
	        // get(id [, options])
	        id = first;
	        options = second;
	      } else if (isArray$5(first)) {
	        // get(ids [, options])
	        ids = first;
	        options = second;
	      } else {
	        // get([, options])
	        options = first;
	      } // determine the return type


	      var returnType = options && options.returnType === "Object" ? "Object" : "Array"; // @TODO: WTF is this? Or am I missing something?
	      // var returnType
	      // if (options && options.returnType) {
	      //   var allowedValues = ['Array', 'Object']
	      //   returnType =
	      //     allowedValues.indexOf(options.returnType) == -1
	      //       ? 'Array'
	      //       : options.returnType
	      // } else {
	      //   returnType = 'Array'
	      // }
	      // build options

	      var filter = options && filter$2(options);

	      var items = [];
	      var item = undefined;
	      var itemIds = undefined;
	      var itemId = undefined; // convert items

	      if (id != null) {
	        // return a single item
	        item = this._data.get(id);

	        if (item && filter && !filter(item)) {
	          item = undefined;
	        }
	      } else if (ids != null) {
	        // return a subset of items
	        for (var i = 0, len = ids.length; i < len; i++) {
	          item = this._data.get(ids[i]);

	          if (item != null && (!filter || filter(item))) {
	            items.push(item);
	          }
	        }
	      } else {
	        var _context2;

	        // return all items
	        itemIds = toConsumableArray(keys$6(_context2 = this._data).call(_context2));

	        for (var _i = 0, _len = itemIds.length; _i < _len; _i++) {
	          itemId = itemIds[_i];
	          item = this._data.get(itemId);

	          if (item != null && (!filter || filter(item))) {
	            items.push(item);
	          }
	        }
	      } // order the results


	      if (options && options.order && id == undefined) {
	        this._sort(items, options.order);
	      } // filter fields of the items


	      if (options && options.fields) {
	        var fields = options.fields;

	        if (id != undefined && item != null) {
	          item = this._filterFields(item, fields);
	        } else {
	          for (var _i2 = 0, _len2 = items.length; _i2 < _len2; _i2++) {
	            items[_i2] = this._filterFields(items[_i2], fields);
	          }
	        }
	      } // return the results


	      if (returnType == "Object") {
	        var result = {};

	        for (var _i3 = 0, _len3 = items.length; _i3 < _len3; _i3++) {
	          var resultant = items[_i3]; // @TODO: Shoudn't this be this._fieldId?
	          // result[resultant.id] = resultant

	          var _id2 = resultant[this._idProp];
	          result[_id2] = resultant;
	        }

	        return result;
	      } else {
	        if (id != null) {
	          var _item;

	          // a single item
	          return (_item = item) !== null && _item !== void 0 ? _item : null;
	        } else {
	          // just return our array
	          return items;
	        }
	      }
	    }
	    /** @inheritDoc */

	  }, {
	    key: "getIds",
	    value: function getIds(options) {
	      var data = this._data;

	      var filter = options && filter$2(options);

	      var order = options && options.order;

	      var itemIds = toConsumableArray(keys$6(data).call(data));

	      var ids = [];

	      if (filter) {
	        // get filtered items
	        if (order) {
	          // create ordered list
	          var items = [];

	          for (var i = 0, len = itemIds.length; i < len; i++) {
	            var id = itemIds[i];

	            var item = this._data.get(id);

	            if (item != null && filter(item)) {
	              items.push(item);
	            }
	          }

	          this._sort(items, order);

	          for (var _i4 = 0, _len4 = items.length; _i4 < _len4; _i4++) {
	            ids.push(items[_i4][this._idProp]);
	          }
	        } else {
	          // create unordered list
	          for (var _i5 = 0, _len5 = itemIds.length; _i5 < _len5; _i5++) {
	            var _id3 = itemIds[_i5];

	            var _item2 = this._data.get(_id3);

	            if (_item2 != null && filter(_item2)) {
	              ids.push(_item2[this._idProp]);
	            }
	          }
	        }
	      } else {
	        // get all items
	        if (order) {
	          // create an ordered list
	          var _items = [];

	          for (var _i6 = 0, _len6 = itemIds.length; _i6 < _len6; _i6++) {
	            var _id4 = itemIds[_i6];

	            _items.push(data.get(_id4));
	          }

	          this._sort(_items, order);

	          for (var _i7 = 0, _len7 = _items.length; _i7 < _len7; _i7++) {
	            ids.push(_items[_i7][this._idProp]);
	          }
	        } else {
	          // create unordered list
	          for (var _i8 = 0, _len8 = itemIds.length; _i8 < _len8; _i8++) {
	            var _id5 = itemIds[_i8];

	            var _item3 = data.get(_id5);

	            if (_item3 != null) {
	              ids.push(_item3[this._idProp]);
	            }
	          }
	        }
	      }

	      return ids;
	    }
	    /** @inheritDoc */

	  }, {
	    key: "getDataSet",
	    value: function getDataSet() {
	      return this;
	    }
	    /** @inheritDoc */

	  }, {
	    key: "forEach",
	    value: function forEach(callback, options) {
	      var filter = options && filter$2(options);

	      var data = this._data;

	      var itemIds = toConsumableArray(keys$6(data).call(data));

	      if (options && options.order) {
	        // execute forEach on ordered list
	        var items = this.get(options);

	        for (var i = 0, len = items.length; i < len; i++) {
	          var item = items[i];
	          var id = item[this._idProp];
	          callback(item, id);
	        }
	      } else {
	        // unordered
	        for (var _i9 = 0, _len9 = itemIds.length; _i9 < _len9; _i9++) {
	          var _id6 = itemIds[_i9];

	          var _item4 = this._data.get(_id6);

	          if (_item4 != null && (!filter || filter(_item4))) {
	            callback(_item4, _id6);
	          }
	        }
	      }
	    }
	    /** @inheritDoc */

	  }, {
	    key: "map",
	    value: function map(callback, options) {
	      var filter = options && filter$2(options);

	      var mappedItems = [];
	      var data = this._data;

	      var itemIds = toConsumableArray(keys$6(data).call(data)); // convert and filter items


	      for (var i = 0, len = itemIds.length; i < len; i++) {
	        var id = itemIds[i];

	        var item = this._data.get(id);

	        if (item != null && (!filter || filter(item))) {
	          mappedItems.push(callback(item, id));
	        }
	      } // order items


	      if (options && options.order) {
	        this._sort(mappedItems, options.order);
	      }

	      return mappedItems;
	    }
	    /**
	     * Filter the fields of an item.
	     *
	     * @param item - The item whose fields should be filtered.
	     * @param fields - The names of the fields that will be kept.
	     *
	     * @typeParam K - Field name type.
	     *
	     * @returns The item without any additional fields.
	     */

	  }, {
	    key: "_filterFields",
	    value: function _filterFields(item, fields) {
	      var _context3;

	      if (!item) {
	        // item is null
	        return item;
	      }

	      return reduce$2(_context3 = isArray$5(fields) ? // Use the supplied array
	      fields : // Use the keys of the supplied object
	      keys$3(fields)).call(_context3, function (filteredItem, field) {
	        filteredItem[field] = item[field];
	        return filteredItem;
	      }, {});
	    }
	    /**
	     * Sort the provided array with items.
	     *
	     * @param items - Items to be sorted in place.
	     * @param order - A field name or custom sort function.
	     *
	     * @typeParam T - The type of the items in the items array.
	     */

	  }, {
	    key: "_sort",
	    value: function _sort(items, order) {
	      if (typeof order === "string") {
	        // order by provided field name
	        var name = order; // field name

	        sort$2(items).call(items, function (a, b) {
	          // @TODO: How to treat missing properties?
	          var av = a[name];
	          var bv = b[name];
	          return av > bv ? 1 : av < bv ? -1 : 0;
	        });
	      } else if (typeof order === "function") {
	        // order by sort function
	        sort$2(items).call(items, order);
	      } else {
	        // TODO: extend order by an Object {field:string, direction:string}
	        //       where direction can be 'asc' or 'desc'
	        throw new TypeError("Order must be a function or a string");
	      }
	    }
	    /**
	     * Remove an item or multiple items by “reference” (only the id is used) or by id.
	     *
	     * The method ignores removal of non-existing items, and returns an array containing the ids of the items which are actually removed from the DataSet.
	     *
	     * After the items are removed, the DataSet will trigger an event `remove` for the removed items. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
	     *
	     * ## Example
	     * ```javascript
	     * // create a DataSet
	     * const data = new vis.DataSet([
	     *   { id: 1, text: 'item 1' },
	     *   { id: 2, text: 'item 2' },
	     *   { id: 3, text: 'item 3' }
	     * ])
	     *
	     * // remove items
	     * const ids = data.remove([2, { id: 3 }, 4])
	     *
	     * console.log(ids) // [2, 3]
	     * ```
	     *
	     * @param id - One or more items or ids of items to be removed.
	     * @param senderId - Sender id.
	     *
	     * @returns The ids of the removed items.
	     */

	  }, {
	    key: "remove",
	    value: function remove(id, senderId) {
	      var removedIds = [];
	      var removedItems = []; // force everything to be an array for simplicity

	      var ids = isArray$5(id) ? id : [id];

	      for (var i = 0, len = ids.length; i < len; i++) {
	        var item = this._remove(ids[i]);

	        if (item) {
	          var itemId = item[this._idProp];

	          if (itemId != null) {
	            removedIds.push(itemId);
	            removedItems.push(item);
	          }
	        }
	      }

	      if (removedIds.length) {
	        this._trigger("remove", {
	          items: removedIds,
	          oldData: removedItems
	        }, senderId);
	      }

	      return removedIds;
	    }
	    /**
	     * Remove an item by its id or reference.
	     *
	     * @param id - Id of an item or the item itself.
	     *
	     * @returns The removed item if removed, null otherwise.
	     */

	  }, {
	    key: "_remove",
	    value: function _remove(id) {
	      // @TODO: It origianlly returned the item although the docs say id.
	      // The code expects the item, so probably an error in the docs.
	      var ident; // confirm the id to use based on the args type

	      if (isId(id)) {
	        ident = id;
	      } else if (id && _typeof_1(id) === "object") {
	        ident = id[this._idProp]; // look for the identifier field using ._idProp
	      } // do the removing if the item is found


	      if (ident != null && this._data.has(ident)) {
	        var item = this._data.get(ident) || null;

	        this._data.delete(ident);

	        --this.length;
	        return item;
	      }

	      return null;
	    }
	    /**
	     * Clear the entire data set.
	     *
	     * After the items are removed, the [[DataSet]] will trigger an event `remove` for all removed items. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
	     *
	     * @param senderId - Sender id.
	     *
	     * @returns removedIds - The ids of all removed items.
	     */

	  }, {
	    key: "clear",
	    value: function clear(senderId) {
	      var _context4;

	      var ids = toConsumableArray(keys$6(_context4 = this._data).call(_context4));

	      var items = [];

	      for (var i = 0, len = ids.length; i < len; i++) {
	        items.push(this._data.get(ids[i]));
	      }

	      this._data.clear();

	      this.length = 0;

	      this._trigger("remove", {
	        items: ids,
	        oldData: items
	      }, senderId);

	      return ids;
	    }
	    /**
	     * Find the item with maximum value of a specified field.
	     *
	     * @param field - Name of the property that should be searched for max value.
	     *
	     * @returns Item containing max value, or null if no items.
	     */

	  }, {
	    key: "max",
	    value: function max(field) {
	      var _context5;

	      var max = null;
	      var maxField = null;

	      var _iterator = _createForOfIteratorHelper$2(values$3(_context5 = this._data).call(_context5)),
	          _step;

	      try {
	        for (_iterator.s(); !(_step = _iterator.n()).done;) {
	          var item = _step.value;
	          var itemField = item[field];

	          if (typeof itemField === "number" && (maxField == null || itemField > maxField)) {
	            max = item;
	            maxField = itemField;
	          }
	        }
	      } catch (err) {
	        _iterator.e(err);
	      } finally {
	        _iterator.f();
	      }

	      return max || null;
	    }
	    /**
	     * Find the item with minimum value of a specified field.
	     *
	     * @param field - Name of the property that should be searched for min value.
	     *
	     * @returns Item containing min value, or null if no items.
	     */

	  }, {
	    key: "min",
	    value: function min(field) {
	      var _context6;

	      var min = null;
	      var minField = null;

	      var _iterator2 = _createForOfIteratorHelper$2(values$3(_context6 = this._data).call(_context6)),
	          _step2;

	      try {
	        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
	          var item = _step2.value;
	          var itemField = item[field];

	          if (typeof itemField === "number" && (minField == null || itemField < minField)) {
	            min = item;
	            minField = itemField;
	          }
	        }
	      } catch (err) {
	        _iterator2.e(err);
	      } finally {
	        _iterator2.f();
	      }

	      return min || null;
	    }
	    /**
	     * Find all distinct values of a specified field
	     *
	     * @param prop - The property name whose distinct values should be returned.
	     *
	     * @returns Unordered array containing all distinct values. Items without specified property are ignored.
	     */

	  }, {
	    key: "distinct",
	    value: function distinct(prop) {
	      var data = this._data;

	      var itemIds = toConsumableArray(keys$6(data).call(data));

	      var values = [];
	      var count = 0;

	      for (var i = 0, len = itemIds.length; i < len; i++) {
	        var id = itemIds[i];
	        var item = data.get(id);
	        var value = item[prop];
	        var exists = false;

	        for (var j = 0; j < count; j++) {
	          if (values[j] == value) {
	            exists = true;
	            break;
	          }
	        }

	        if (!exists && value !== undefined) {
	          values[count] = value;
	          count++;
	        }
	      }

	      return values;
	    }
	    /**
	     * Add a single item. Will fail when an item with the same id already exists.
	     *
	     * @param item - A new item to be added.
	     *
	     * @returns Added item's id. An id is generated when it is not present in the item.
	     */

	  }, {
	    key: "_addItem",
	    value: function _addItem(item) {
	      var fullItem = ensureFullItem(item, this._idProp);
	      var id = fullItem[this._idProp]; // check whether this id is already taken

	      if (this._data.has(id)) {
	        // item already exists
	        throw new Error("Cannot add item: item with id " + id + " already exists");
	      }

	      this._data.set(id, fullItem);

	      ++this.length;
	      return id;
	    }
	    /**
	     * Update a single item: merge with existing item.
	     * Will fail when the item has no id, or when there does not exist an item with the same id.
	     *
	     * @param update - The new item
	     *
	     * @returns The id of the updated item.
	     */

	  }, {
	    key: "_updateItem",
	    value: function _updateItem(update) {
	      var id = update[this._idProp];

	      if (id == null) {
	        throw new Error("Cannot update item: item has no id (item: " + stringify$2(update) + ")");
	      }

	      var item = this._data.get(id);

	      if (!item) {
	        // item doesn't exist
	        throw new Error("Cannot update item: no item with id " + id + " found");
	      }

	      this._data.set(id, _objectSpread(_objectSpread({}, item), update));

	      return id;
	    }
	    /** @inheritDoc */

	  }, {
	    key: "stream",
	    value: function stream(ids) {
	      if (ids) {
	        var data = this._data;
	        return new DataStream(defineProperty$7({}, iterator$4, /*#__PURE__*/regenerator.mark(function _callee() {
	          var _iterator3, _step3, id, item;

	          return regenerator.wrap(function _callee$(_context7) {
	            while (1) {
	              switch (_context7.prev = _context7.next) {
	                case 0:
	                  _iterator3 = _createForOfIteratorHelper$2(ids);
	                  _context7.prev = 1;

	                  _iterator3.s();

	                case 3:
	                  if ((_step3 = _iterator3.n()).done) {
	                    _context7.next = 11;
	                    break;
	                  }

	                  id = _step3.value;
	                  item = data.get(id);

	                  if (!(item != null)) {
	                    _context7.next = 9;
	                    break;
	                  }

	                  _context7.next = 9;
	                  return [id, item];

	                case 9:
	                  _context7.next = 3;
	                  break;

	                case 11:
	                  _context7.next = 16;
	                  break;

	                case 13:
	                  _context7.prev = 13;
	                  _context7.t0 = _context7["catch"](1);

	                  _iterator3.e(_context7.t0);

	                case 16:
	                  _context7.prev = 16;

	                  _iterator3.f();

	                  return _context7.finish(16);

	                case 19:
	                case "end":
	                  return _context7.stop();
	              }
	            }
	          }, _callee, null, [[1, 13, 16, 19]]);
	        })));
	      } else {
	        var _context8;

	        return new DataStream(defineProperty$7({}, iterator$4, bind$2(_context8 = entries$2(this._data)).call(_context8, this._data)));
	      }
	    }
	  }, {
	    key: "idProp",
	    get: function get() {
	      return this._idProp;
	    }
	  }]);

	  return DataSet;
	}(DataSetPart);

	function _createForOfIteratorHelper$3(o, allowArrayLike) { var it; if (typeof symbol$4 === "undefined" || getIteratorMethod$1(o) == null) { if (isArray$5(o) || (it = _unsupportedIterableToArray$4(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = getIterator$1(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

	function _unsupportedIterableToArray$4(o, minLen) { var _context5; if (!o) return; if (typeof o === "string") return _arrayLikeToArray$4(o, minLen); var n = slice$6(_context5 = Object.prototype.toString.call(o)).call(_context5, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return from$2(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen); }

	function _arrayLikeToArray$4(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

	function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = getPrototypeOf$3(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf$3(this).constructor; result = construct$3(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !construct$3) return false; if (construct$3.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(construct$3(Date, [], function () {})); return true; } catch (e) { return false; } }
	/**
	 * DataView
	 *
	 * A DataView offers a filtered and/or formatted view on a DataSet. One can subscribe to changes in a DataView, and easily get filtered or formatted data without having to specify filters and field types all the time.
	 *
	 * ## Example
	 * ```javascript
	 * // create a DataSet
	 * var data = new vis.DataSet();
	 * data.add([
	 *   {id: 1, text: 'item 1', date: new Date(2013, 6, 20), group: 1, first: true},
	 *   {id: 2, text: 'item 2', date: '2013-06-23', group: 2},
	 *   {id: 3, text: 'item 3', date: '2013-06-25', group: 2},
	 *   {id: 4, text: 'item 4'}
	 * ]);
	 *
	 * // create a DataView
	 * // the view will only contain items having a property group with value 1,
	 * // and will only output fields id, text, and date.
	 * var view = new vis.DataView(data, {
	 *   filter: function (item) {
	 *     return (item.group == 1);
	 *   },
	 *   fields: ['id', 'text', 'date']
	 * });
	 *
	 * // subscribe to any change in the DataView
	 * view.on('*', function (event, properties, senderId) {
	 *   console.log('event', event, properties);
	 * });
	 *
	 * // update an item in the data set
	 * data.update({id: 2, group: 1});
	 *
	 * // get all ids in the view
	 * var ids = view.getIds();
	 * console.log('ids', ids); // will output [1, 2]
	 *
	 * // get all items in the view
	 * var items = view.get();
	 * ```
	 *
	 * @typeParam Item - Item type that may or may not have an id.
	 * @typeParam IdProp - Name of the property that contains the id.
	 */

	var DataView = /*#__PURE__*/function (_DataSetPart) {
	  inherits(DataView, _DataSetPart);

	  var _super = _createSuper$1(DataView);

	  /**
	   * Create a DataView.
	   *
	   * @param data - The instance containing data (directly or indirectly).
	   * @param options - Options to configure this data view.
	   */
	  function DataView(data, options) {
	    var _context;

	    var _this;

	    classCallCheck(this, DataView);

	    _this = _super.call(this);
	    /** @inheritDoc */

	    _this.length = 0;
	    _this._ids = new set$3(); // ids of the items currently in memory (just contains a boolean true)

	    _this._options = options || {};
	    _this._listener = bind$2(_context = _this._onEvent).call(_context, assertThisInitialized(_this));

	    _this.setData(data);

	    return _this;
	  }
	  /** @inheritDoc */


	  createClass(DataView, [{
	    key: "setData",
	    // TODO: implement a function .config() to dynamically update things like configured filter
	    // and trigger changes accordingly

	    /**
	     * Set a data source for the view.
	     *
	     * @param data - The instance containing data (directly or indirectly).
	     *
	     * @remarks
	     * Note that when the data view is bound to a data set it won't be garbage
	     * collected unless the data set is too. Use `dataView.setData(null)` or
	     * `dataView.dispose()` to enable garbage collection before you lose the last
	     * reference.
	     */
	    value: function setData(data) {
	      if (this._data) {
	        // unsubscribe from current dataset
	        if (this._data.off) {
	          this._data.off("*", this._listener);
	        } // trigger a remove of all items in memory


	        var ids = this._data.getIds({
	          filter: filter$2(this._options)
	        });

	        var items = this._data.get(ids);

	        this._ids.clear();

	        this.length = 0;

	        this._trigger("remove", {
	          items: ids,
	          oldData: items
	        });
	      }

	      if (data != null) {
	        this._data = data; // trigger an add of all added items

	        var _ids = this._data.getIds({
	          filter: filter$2(this._options)
	        });

	        for (var i = 0, len = _ids.length; i < len; i++) {
	          var id = _ids[i];

	          this._ids.add(id);
	        }

	        this.length = _ids.length;

	        this._trigger("add", {
	          items: _ids
	        });
	      } else {
	        this._data = new DataSet();
	      } // subscribe to new dataset


	      if (this._data.on) {
	        this._data.on("*", this._listener);
	      }
	    }
	    /**
	     * Refresh the DataView.
	     * Useful when the DataView has a filter function containing a variable parameter.
	     */

	  }, {
	    key: "refresh",
	    value: function refresh() {
	      var ids = this._data.getIds({
	        filter: filter$2(this._options)
	      });

	      var oldIds = toConsumableArray(this._ids);

	      var newIds = {};
	      var addedIds = [];
	      var removedIds = [];
	      var removedItems = []; // check for additions

	      for (var i = 0, len = ids.length; i < len; i++) {
	        var id = ids[i];
	        newIds[id] = true;

	        if (!this._ids.has(id)) {
	          addedIds.push(id);

	          this._ids.add(id);
	        }
	      } // check for removals


	      for (var _i = 0, _len = oldIds.length; _i < _len; _i++) {
	        var _id = oldIds[_i];

	        var item = this._data.get(_id);

	        if (item == null) {
	          // @TODO: Investigate.
	          // Doesn't happen during tests or examples.
	          // Is it really impossible or could it eventually happen?
	          // How to handle it if it does? The types guarantee non-nullable items.
	          console.error("If you see this, report it please.");
	        } else if (!newIds[_id]) {
	          removedIds.push(_id);
	          removedItems.push(item);

	          this._ids.delete(_id);
	        }
	      }

	      this.length += addedIds.length - removedIds.length; // trigger events

	      if (addedIds.length) {
	        this._trigger("add", {
	          items: addedIds
	        });
	      }

	      if (removedIds.length) {
	        this._trigger("remove", {
	          items: removedIds,
	          oldData: removedItems
	        });
	      }
	    }
	    /** @inheritDoc */

	  }, {
	    key: "get",
	    value: function get(first, second) {
	      if (this._data == null) {
	        return null;
	      } // parse the arguments


	      var ids = null;
	      var options;

	      if (isId(first) || isArray$5(first)) {
	        ids = first;
	        options = second;
	      } else {
	        options = first;
	      } // extend the options with the default options and provided options


	      var viewOptions = assign$2({}, this._options, options); // create a combined filter method when needed


	      var thisFilter = filter$2(this._options);

	      var optionsFilter = options && filter$2(options);

	      if (thisFilter && optionsFilter) {
	        viewOptions.filter = function (item) {
	          return thisFilter(item) && optionsFilter(item);
	        };
	      }

	      if (ids == null) {
	        return this._data.get(viewOptions);
	      } else {
	        return this._data.get(ids, viewOptions);
	      }
	    }
	    /** @inheritDoc */

	  }, {
	    key: "getIds",
	    value: function getIds(options) {
	      if (this._data.length) {
	        var defaultFilter = filter$2(this._options);

	        var optionsFilter = options != null ? filter$2(options) : null;
	        var filter;

	        if (optionsFilter) {
	          if (defaultFilter) {
	            filter = function filter(item) {
	              return defaultFilter(item) && optionsFilter(item);
	            };
	          } else {
	            filter = optionsFilter;
	          }
	        } else {
	          filter = defaultFilter;
	        }

	        return this._data.getIds({
	          filter: filter,
	          order: options && options.order
	        });
	      } else {
	        return [];
	      }
	    }
	    /** @inheritDoc */

	  }, {
	    key: "forEach",
	    value: function forEach(callback, options) {
	      if (this._data) {
	        var _context2;

	        var defaultFilter = filter$2(this._options);

	        var optionsFilter = options && filter$2(options);

	        var filter;

	        if (optionsFilter) {
	          if (defaultFilter) {
	            filter = function filter(item) {
	              return defaultFilter(item) && optionsFilter(item);
	            };
	          } else {
	            filter = optionsFilter;
	          }
	        } else {
	          filter = defaultFilter;
	        }

	        forEach$2(_context2 = this._data).call(_context2, callback, {
	          filter: filter,
	          order: options && options.order
	        });
	      }
	    }
	    /** @inheritDoc */

	  }, {
	    key: "map",
	    value: function map(callback, options) {
	      if (this._data) {
	        var _context3;

	        var defaultFilter = filter$2(this._options);

	        var optionsFilter = options && filter$2(options);

	        var filter;

	        if (optionsFilter) {
	          if (defaultFilter) {
	            filter = function filter(item) {
	              return defaultFilter(item) && optionsFilter(item);
	            };
	          } else {
	            filter = optionsFilter;
	          }
	        } else {
	          filter = defaultFilter;
	        }

	        return map$2(_context3 = this._data).call(_context3, callback, {
	          filter: filter,
	          order: options && options.order
	        });
	      } else {
	        return [];
	      }
	    }
	    /** @inheritDoc */

	  }, {
	    key: "getDataSet",
	    value: function getDataSet() {
	      return this._data.getDataSet();
	    }
	    /** @inheritDoc */

	  }, {
	    key: "stream",
	    value: function stream(ids) {
	      var _context4;

	      return this._data.stream(ids || defineProperty$7({}, iterator$4, bind$2(_context4 = keys$6(this._ids)).call(_context4, this._ids)));
	    }
	    /**
	     * Render the instance unusable prior to garbage collection.
	     *
	     * @remarks
	     * The intention of this method is to help discover scenarios where the data
	     * view is being used when the programmer thinks it has been garbage collected
	     * already. It's stricter version of `dataView.setData(null)`.
	     */

	  }, {
	    key: "dispose",
	    value: function dispose() {
	      var _this$_data;

	      if ((_this$_data = this._data) !== null && _this$_data !== void 0 && _this$_data.off) {
	        this._data.off("*", this._listener);
	      }

	      var message = "This data view has already been disposed of.";
	      var replacement = {
	        get: function get() {
	          throw new Error(message);
	        },
	        set: function set() {
	          throw new Error(message);
	        },
	        configurable: false
	      };

	      var _iterator = _createForOfIteratorHelper$3(ownKeys$3(DataView.prototype)),
	          _step;

	      try {
	        for (_iterator.s(); !(_step = _iterator.n()).done;) {
	          var key = _step.value;

	          defineProperty$4(this, key, replacement);
	        }
	      } catch (err) {
	        _iterator.e(err);
	      } finally {
	        _iterator.f();
	      }
	    }
	    /**
	     * Event listener. Will propagate all events from the connected data set to the subscribers of the DataView, but will filter the items and only trigger when there are changes in the filtered data set.
	     *
	     * @param event - The name of the event.
	     * @param params - Parameters of the event.
	     * @param senderId - Id supplied by the sender.
	     */

	  }, {
	    key: "_onEvent",
	    value: function _onEvent(event, params, senderId) {
	      if (!params || !params.items || !this._data) {
	        return;
	      }

	      var ids = params.items;
	      var addedIds = [];
	      var updatedIds = [];
	      var removedIds = [];
	      var oldItems = [];
	      var updatedItems = [];
	      var removedItems = [];

	      switch (event) {
	        case "add":
	          // filter the ids of the added items
	          for (var i = 0, len = ids.length; i < len; i++) {
	            var id = ids[i];
	            var item = this.get(id);

	            if (item) {
	              this._ids.add(id);

	              addedIds.push(id);
	            }
	          }

	          break;

	        case "update":
	          // determine the event from the views viewpoint: an updated
	          // item can be added, updated, or removed from this view.
	          for (var _i2 = 0, _len2 = ids.length; _i2 < _len2; _i2++) {
	            var _id2 = ids[_i2];

	            var _item = this.get(_id2);

	            if (_item) {
	              if (this._ids.has(_id2)) {
	                updatedIds.push(_id2);
	                updatedItems.push(params.data[_i2]);
	                oldItems.push(params.oldData[_i2]);
	              } else {
	                this._ids.add(_id2);

	                addedIds.push(_id2);
	              }
	            } else {
	              if (this._ids.has(_id2)) {
	                this._ids.delete(_id2);

	                removedIds.push(_id2);
	                removedItems.push(params.oldData[_i2]);
	              }
	            }
	          }

	          break;

	        case "remove":
	          // filter the ids of the removed items
	          for (var _i3 = 0, _len3 = ids.length; _i3 < _len3; _i3++) {
	            var _id3 = ids[_i3];

	            if (this._ids.has(_id3)) {
	              this._ids.delete(_id3);

	              removedIds.push(_id3);
	              removedItems.push(params.oldData[_i3]);
	            }
	          }

	          break;
	      }

	      this.length += addedIds.length - removedIds.length;

	      if (addedIds.length) {
	        this._trigger("add", {
	          items: addedIds
	        }, senderId);
	      }

	      if (updatedIds.length) {
	        this._trigger("update", {
	          items: updatedIds,
	          oldData: oldItems,
	          data: updatedItems
	        }, senderId);
	      }

	      if (removedIds.length) {
	        this._trigger("remove", {
	          items: removedIds,
	          oldData: removedItems
	        }, senderId);
	      }
	    }
	  }, {
	    key: "idProp",
	    get: function get() {
	      return this.getDataSet().idProp;
	    }
	  }]);

	  return DataView;
	}(DataSetPart);

	/**
	 * Check that given value is compatible with Vis Data Set interface.
	 *
	 * @param idProp - The expected property to contain item id.
	 * @param v - The value to be tested.
	 *
	 * @returns True if all expected values and methods match, false otherwise.
	 */
	function isDataSetLike(idProp, v) {
	  return _typeof_1(v) === "object" && v !== null && idProp === v.idProp && typeof v.add === "function" && typeof v.clear === "function" && typeof v.distinct === "function" && typeof forEach$2(v) === "function" && typeof v.get === "function" && typeof v.getDataSet === "function" && typeof v.getIds === "function" && typeof v.length === "number" && typeof map$2(v) === "function" && typeof v.max === "function" && typeof v.min === "function" && typeof v.off === "function" && typeof v.on === "function" && typeof v.remove === "function" && typeof v.setOptions === "function" && typeof v.stream === "function" && typeof v.update === "function" && typeof v.updateOnly === "function";
	}

	/**
	 * Check that given value is compatible with Vis Data View interface.
	 *
	 * @param idProp - The expected property to contain item id.
	 * @param v - The value to be tested.
	 *
	 * @returns True if all expected values and methods match, false otherwise.
	 */

	function isDataViewLike(idProp, v) {
	  return _typeof_1(v) === "object" && v !== null && idProp === v.idProp && typeof forEach$2(v) === "function" && typeof v.get === "function" && typeof v.getDataSet === "function" && typeof v.getIds === "function" && typeof v.length === "number" && typeof map$2(v) === "function" && typeof v.off === "function" && typeof v.on === "function" && typeof v.stream === "function" && isDataSetLike(idProp, v.getDataSet());
	}

	exports.DELETE = DELETE;
	exports.DataSet = DataSet;
	exports.DataStream = DataStream;
	exports.DataView = DataView;
	exports.Queue = Queue;
	exports.createNewDataPipeFrom = createNewDataPipeFrom;
	exports.isDataSetLike = isDataSetLike;
	exports.isDataViewLike = isDataViewLike;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=vis-data.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vis-network/peer/umd/vis-network.min.js":
/*!**************************************************************!*\
  !*** ./node_modules/vis-network/peer/umd/vis-network.min.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * vis-network
 * https://visjs.github.io/vis-network/
 *
 * A dynamic, browser-based visualization library.
 *
 * @version 9.1.0
 * @date    2021-08-29T08:43:14.666Z
 *
 * @copyright (c) 2011-2017 Almende B.V, http://almende.com
 * @copyright (c) 2017-2019 visjs contributors, https://github.com/visjs
 *
 * @license
 * vis.js is dual licensed under both
 *
 *   1. The Apache 2.0 License
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *   and
 *
 *   2. The MIT License
 *      http://opensource.org/licenses/MIT
 *
 * vis.js may be distributed under either license.
 */
!function(t,e){ true?e(exports,__webpack_require__(/*! vis-data/peer/umd/vis-data.js */ "./node_modules/vis-data/peer/umd/vis-data.js")):undefined}(this,(function(t,e){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=function(t){return t&&t.Math==Math&&t},n=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof i&&i)||function(){return this}()||Function("return this")(),r={},s=function(t){try{return!!t()}catch(t){return!0}},a=!s((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),h={},d={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,c=l&&!d.call({1:2},1);h.f=c?function(t){var e=l(this,t);return!!e&&e.enumerable}:d;var u,f,p=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},v={}.toString,g=function(t){return v.call(t).slice(8,-1)},y=g,m="".split,b=s((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==y(t)?m.call(t,""):Object(t)}:Object,w=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},k=b,_=w,x=function(t){return k(_(t))},E=function(t){return"object"==typeof t?null!==t:"function"==typeof t},O={},C=O,S=n,T=function(t){return"function"==typeof t?t:void 0},M=function(t,e){return arguments.length<2?T(C[t])||T(S[t]):C[t]&&C[t][e]||S[t]&&S[t][e]},P=M("navigator","userAgent")||"",D=n,B=P,I=D.process,z=D.Deno,F=I&&I.versions||z&&z.version,N=F&&F.v8;N?f=(u=N.split("."))[0]<4?1:u[0]+u[1]:B&&(!(u=B.match(/Edge\/(\d+)/))||u[1]>=74)&&(u=B.match(/Chrome\/(\d+)/))&&(f=u[1]);var A=f&&+f,R=A,j=s,L=!!Object.getOwnPropertySymbols&&!j((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&R&&R<41})),H=L&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,W=M,V=H?function(t){return"symbol"==typeof t}:function(t){var e=W("Symbol");return"function"==typeof e&&Object(t)instanceof e},q=E,U={exports:{}},Y=n,X=function(t,e){try{Object.defineProperty(Y,t,{value:e,configurable:!0,writable:!0})}catch(i){Y[t]=e}return e},G="__core-js_shared__",K=n[G]||X(G,{}),$=K;(U.exports=function(t,e){return $[t]||($[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.16.1",mode:"pure",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});var Z=w,Q=function(t){return Object(Z(t))},J=Q,tt={}.hasOwnProperty,et=Object.hasOwn||function(t,e){return tt.call(J(t),e)},it=0,ot=Math.random(),nt=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++it+ot).toString(36)},rt=n,st=U.exports,at=et,ht=nt,dt=L,lt=H,ct=st("wks"),ut=rt.Symbol,ft=lt?ut:ut&&ut.withoutSetter||ht,pt=function(t){return at(ct,t)&&(dt||"string"==typeof ct[t])||(dt&&at(ut,t)?ct[t]=ut[t]:ct[t]=ft("Symbol."+t)),ct[t]},vt=E,gt=V,yt=function(t,e){var i,o;if("string"===e&&"function"==typeof(i=t.toString)&&!q(o=i.call(t)))return o;if("function"==typeof(i=t.valueOf)&&!q(o=i.call(t)))return o;if("string"!==e&&"function"==typeof(i=t.toString)&&!q(o=i.call(t)))return o;throw TypeError("Can't convert object to primitive value")},mt=pt("toPrimitive"),bt=function(t,e){if(!vt(t)||gt(t))return t;var i,o=t[mt];if(void 0!==o){if(void 0===e&&(e="default"),i=o.call(t,e),!vt(i)||gt(i))return i;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),yt(t,e)},wt=V,kt=function(t){var e=bt(t,"string");return wt(e)?e:String(e)},_t=E,xt=n.document,Et=_t(xt)&&_t(xt.createElement),Ot=function(t){return Et?xt.createElement(t):{}},Ct=Ot,St=!a&&!s((function(){return 7!=Object.defineProperty(Ct("div"),"a",{get:function(){return 7}}).a})),Tt=a,Mt=h,Pt=p,Dt=x,Bt=kt,It=et,zt=St,Ft=Object.getOwnPropertyDescriptor;r.f=Tt?Ft:function(t,e){if(t=Dt(t),e=Bt(e),zt)try{return Ft(t,e)}catch(t){}if(It(t,e))return Pt(!Mt.f.call(t,e),t[e])};var Nt=s,At=/#|\.prototype\./,Rt=function(t,e){var i=Lt[jt(t)];return i==Wt||i!=Ht&&("function"==typeof e?Nt(e):!!e)},jt=Rt.normalize=function(t){return String(t).replace(At,".").toLowerCase()},Lt=Rt.data={},Ht=Rt.NATIVE="N",Wt=Rt.POLYFILL="P",Vt=Rt,qt=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},Ut=qt,Yt=function(t,e,i){if(Ut(t),void 0===e)return t;switch(i){case 0:return function(){return t.call(e)};case 1:return function(i){return t.call(e,i)};case 2:return function(i,o){return t.call(e,i,o)};case 3:return function(i,o,n){return t.call(e,i,o,n)}}return function(){return t.apply(e,arguments)}},Xt={},Gt=E,Kt=function(t){if(!Gt(t))throw TypeError(String(t)+" is not an object");return t},$t=a,Zt=St,Qt=Kt,Jt=kt,te=Object.defineProperty;Xt.f=$t?te:function(t,e,i){if(Qt(t),e=Jt(e),Qt(i),Zt)try{return te(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported");return"value"in i&&(t[e]=i.value),t};var ee=Xt,ie=p,oe=a?function(t,e,i){return ee.f(t,e,ie(1,i))}:function(t,e,i){return t[e]=i,t},ne=n,re=r.f,se=Vt,ae=O,he=Yt,de=oe,le=et,ce=function(t){var e=function(e,i,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,i)}return new t(e,i,o)}return t.apply(this,arguments)};return e.prototype=t.prototype,e},ue=function(t,e){var i,o,n,r,s,a,h,d,l=t.target,c=t.global,u=t.stat,f=t.proto,p=c?ne:u?ne[l]:(ne[l]||{}).prototype,v=c?ae:ae[l]||(ae[l]={}),g=v.prototype;for(n in e)i=!se(c?n:l+(u?".":"#")+n,t.forced)&&p&&le(p,n),s=v[n],i&&(a=t.noTargetGet?(d=re(p,n))&&d.value:p[n]),r=i&&a?a:e[n],i&&typeof s==typeof r||(h=t.bind&&i?he(r,ne):t.wrap&&i?ce(r):f&&"function"==typeof r?he(Function.call,r):r,(t.sham||r&&r.sham||s&&s.sham)&&de(h,"sham",!0),v[n]=h,f&&(le(ae,o=l+"Prototype")||de(ae,o,{}),ae[o][n]=r,t.real&&g&&!g[n]&&de(g,n,r)))},fe=Math.ceil,pe=Math.floor,ve=function(t){return isNaN(t=+t)?0:(t>0?pe:fe)(t)},ge=ve,ye=Math.min,me=function(t){return t>0?ye(ge(t),9007199254740991):0},be=ve,we=Math.max,ke=Math.min,_e=function(t,e){var i=be(t);return i<0?we(i+e,0):ke(i,e)},xe=x,Ee=me,Oe=_e,Ce=function(t){return function(e,i,o){var n,r=xe(e),s=Ee(r.length),a=Oe(o,s);if(t&&i!=i){for(;s>a;)if((n=r[a++])!=n)return!0}else for(;s>a;a++)if((t||a in r)&&r[a]===i)return t||a||0;return!t&&-1}},Se={includes:Ce(!0),indexOf:Ce(!1)},Te={},Me=et,Pe=x,De=Se.indexOf,Be=Te,Ie=function(t,e){var i,o=Pe(t),n=0,r=[];for(i in o)!Me(Be,i)&&Me(o,i)&&r.push(i);for(;e.length>n;)Me(o,i=e[n++])&&(~De(r,i)||r.push(i));return r},ze=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Fe=Ie,Ne=ze,Ae=Object.keys||function(t){return Fe(t,Ne)},Re={};Re.f=Object.getOwnPropertySymbols;var je=a,Le=s,He=Ae,We=Re,Ve=h,qe=Q,Ue=b,Ye=Object.assign,Xe=Object.defineProperty,Ge=!Ye||Le((function(){if(je&&1!==Ye({b:1},Ye(Xe({},"a",{enumerable:!0,get:function(){Xe(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},i=Symbol(),o="abcdefghijklmnopqrst";return t[i]=7,o.split("").forEach((function(t){e[t]=t})),7!=Ye({},t)[i]||He(Ye({},e)).join("")!=o}))?function(t,e){for(var i=qe(t),o=arguments.length,n=1,r=We.f,s=Ve.f;o>n;)for(var a,h=Ue(arguments[n++]),d=r?He(h).concat(r(h)):He(h),l=d.length,c=0;l>c;)a=d[c++],je&&!s.call(h,a)||(i[a]=h[a]);return i}:Ye;ue({target:"Object",stat:!0,forced:Object.assign!==Ge},{assign:Ge});var Ke=O.Object.assign,$e=qt,Ze=E,Qe=[].slice,Je={},ti=function(t,e,i){if(!(e in Je)){for(var o=[],n=0;n<e;n++)o[n]="a["+n+"]";Je[e]=Function("C,a","return new C("+o.join(",")+")")}return Je[e](t,i)},ei=Function.bind||function(t){var e=$e(this),i=Qe.call(arguments,1),o=function(){var n=i.concat(Qe.call(arguments));return this instanceof o?ti(e,n.length,n):e.apply(t,n)};return Ze(e.prototype)&&(o.prototype=e.prototype),o};ue({target:"Function",proto:!0},{bind:ei});var ii=O,oi=function(t){return ii[t+"Prototype"]},ni=oi("Function").bind,ri=Function.prototype,si=function(t){var e=t.bind;return t===ri||t instanceof Function&&e===ri.bind?ni:e};function ai(t,e,i,o){t.beginPath(),t.arc(e,i,o,0,2*Math.PI,!1),t.closePath()}function hi(t,e,i,o,n,r){var s=Math.PI/180;o-2*r<0&&(r=o/2),n-2*r<0&&(r=n/2),t.beginPath(),t.moveTo(e+r,i),t.lineTo(e+o-r,i),t.arc(e+o-r,i+r,r,270*s,360*s,!1),t.lineTo(e+o,i+n-r),t.arc(e+o-r,i+n-r,r,0,90*s,!1),t.lineTo(e+r,i+n),t.arc(e+r,i+n-r,r,90*s,180*s,!1),t.lineTo(e,i+r),t.arc(e+r,i+r,r,180*s,270*s,!1),t.closePath()}function di(t,e,i,o,n){var r=.5522848,s=o/2*r,a=n/2*r,h=e+o,d=i+n,l=e+o/2,c=i+n/2;t.beginPath(),t.moveTo(e,c),t.bezierCurveTo(e,c-a,l-s,i,l,i),t.bezierCurveTo(l+s,i,h,c-a,h,c),t.bezierCurveTo(h,c+a,l+s,d,l,d),t.bezierCurveTo(l-s,d,e,c+a,e,c),t.closePath()}function li(t,e,i,o,n){var r=n*(1/3),s=.5522848,a=o/2*s,h=r/2*s,d=e+o,l=i+r,c=e+o/2,u=i+r/2,f=i+(n-r/2),p=i+n;t.beginPath(),t.moveTo(d,u),t.bezierCurveTo(d,u+h,c+a,l,c,l),t.bezierCurveTo(c-a,l,e,u+h,e,u),t.bezierCurveTo(e,u-h,c-a,i,c,i),t.bezierCurveTo(c+a,i,d,u-h,d,u),t.lineTo(d,f),t.bezierCurveTo(d,f+h,c+a,p,c,p),t.bezierCurveTo(c-a,p,e,f+h,e,f),t.lineTo(e,u)}function ci(t,e,i,o,n,r){t.beginPath(),t.moveTo(e,i);for(var s=r.length,a=o-e,h=n-i,d=h/a,l=Math.sqrt(a*a+h*h),c=0,u=!0,f=0,p=+r[0];l>=.1;)(p=+r[c++%s])>l&&(p=l),f=Math.sqrt(p*p/(1+d*d)),e+=f=a<0?-f:f,i+=d*f,!0===u?t.lineTo(e,i):t.moveTo(e,i),l-=p,u=!u}var ui={circle:ai,dashedLine:ci,database:li,diamond:function(t,e,i,o){t.beginPath(),t.lineTo(e,i+o),t.lineTo(e+o,i),t.lineTo(e,i-o),t.lineTo(e-o,i),t.closePath()},ellipse:di,ellipse_vis:di,hexagon:function(t,e,i,o){t.beginPath();var n=2*Math.PI/6;t.moveTo(e+o,i);for(var r=1;r<6;r++)t.lineTo(e+o*Math.cos(n*r),i+o*Math.sin(n*r));t.closePath()},roundRect:hi,square:function(t,e,i,o){t.beginPath(),t.rect(e-o,i-o,2*o,2*o),t.closePath()},star:function(t,e,i,o){t.beginPath(),i+=.1*(o*=.82);for(var n=0;n<10;n++){var r=n%2==0?1.3*o:.5*o;t.lineTo(e+r*Math.sin(2*n*Math.PI/10),i-r*Math.cos(2*n*Math.PI/10))}t.closePath()},triangle:function(t,e,i,o){t.beginPath(),i+=.275*(o*=1.15);var n=2*o,r=n/2,s=Math.sqrt(3)/6*n,a=Math.sqrt(n*n-r*r);t.moveTo(e,i-(a-s)),t.lineTo(e+r,i+s),t.lineTo(e-r,i+s),t.lineTo(e,i-(a-s)),t.closePath()},triangleDown:function(t,e,i,o){t.beginPath(),i-=.275*(o*=1.15);var n=2*o,r=n/2,s=Math.sqrt(3)/6*n,a=Math.sqrt(n*n-r*r);t.moveTo(e,i+(a-s)),t.lineTo(e+r,i-s),t.lineTo(e-r,i-s),t.lineTo(e,i+(a-s)),t.closePath()}};var fi={exports:{}};!function(t){function e(t){if(t)return function(t){for(var i in e.prototype)t[i]=e.prototype[i];return t}(t)}t.exports=e,e.prototype.on=e.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},e.prototype.once=function(t,e){function i(){this.off(t,i),e.apply(this,arguments)}return i.fn=e,this.on(t,i),this},e.prototype.off=e.prototype.removeListener=e.prototype.removeAllListeners=e.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var i,o=this._callbacks["$"+t];if(!o)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var n=0;n<o.length;n++)if((i=o[n])===e||i.fn===e){o.splice(n,1);break}return 0===o.length&&delete this._callbacks["$"+t],this},e.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),i=this._callbacks["$"+t],o=1;o<arguments.length;o++)e[o-1]=arguments[o];if(i){o=0;for(var n=(i=i.slice(0)).length;o<n;++o)i[o].apply(this,e)}return this},e.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},e.prototype.hasListeners=function(t){return!!this.listeners(t).length}}(fi);var pi=fi.exports,vi=V,gi=function(t){if(vi(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)},yi=ve,mi=gi,bi=w,wi=function(t){return function(e,i){var o,n,r=mi(bi(e)),s=yi(i),a=r.length;return s<0||s>=a?t?"":void 0:(o=r.charCodeAt(s))<55296||o>56319||s+1===a||(n=r.charCodeAt(s+1))<56320||n>57343?t?r.charAt(s):o:t?r.slice(s,s+2):n-56320+(o-55296<<10)+65536}},ki={codeAt:wi(!1),charAt:wi(!0)},_i=K,xi=Function.toString;"function"!=typeof _i.inspectSource&&(_i.inspectSource=function(t){return xi.call(t)});var Ei,Oi,Ci,Si=_i.inspectSource,Ti=n.WeakMap,Mi="function"==typeof Ti&&/native code/.test(Si(Ti)),Pi=U.exports,Di=nt,Bi=Pi("keys"),Ii=function(t){return Bi[t]||(Bi[t]=Di(t))},zi=Mi,Fi=E,Ni=oe,Ai=et,Ri=K,ji=Ii,Li=Te,Hi="Object already initialized",Wi=n.WeakMap;if(zi||Ri.state){var Vi=Ri.state||(Ri.state=new Wi),qi=Vi.get,Ui=Vi.has,Yi=Vi.set;Ei=function(t,e){if(Ui.call(Vi,t))throw new TypeError(Hi);return e.facade=t,Yi.call(Vi,t,e),e},Oi=function(t){return qi.call(Vi,t)||{}},Ci=function(t){return Ui.call(Vi,t)}}else{var Xi=ji("state");Li[Xi]=!0,Ei=function(t,e){if(Ai(t,Xi))throw new TypeError(Hi);return e.facade=t,Ni(t,Xi,e),e},Oi=function(t){return Ai(t,Xi)?t[Xi]:{}},Ci=function(t){return Ai(t,Xi)}}var Gi,Ki,$i,Zi={set:Ei,get:Oi,has:Ci,enforce:function(t){return Ci(t)?Oi(t):Ei(t,{})},getterFor:function(t){return function(e){var i;if(!Fi(e)||(i=Oi(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return i}}},Qi=!s((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),Ji=et,to=Q,eo=Qi,io=Ii("IE_PROTO"),oo=Object.prototype,no=eo?Object.getPrototypeOf:function(t){return t=to(t),Ji(t,io)?t[io]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?oo:null},ro=s,so=no,ao=oe,ho=et,lo=pt("iterator"),co=!1;[].keys&&("next"in($i=[].keys())?(Ki=so(so($i)))!==Object.prototype&&(Gi=Ki):co=!0);var uo=null==Gi||ro((function(){var t={};return Gi[lo].call(t)!==t}));uo&&(Gi={}),uo&&!ho(Gi,lo)&&ao(Gi,lo,(function(){return this}));var fo,po={IteratorPrototype:Gi,BUGGY_SAFARI_ITERATORS:co},vo=Xt,go=Kt,yo=Ae,mo=a?Object.defineProperties:function(t,e){go(t);for(var i,o=yo(e),n=o.length,r=0;n>r;)vo.f(t,i=o[r++],e[i]);return t},bo=M("document","documentElement"),wo=Kt,ko=mo,_o=ze,xo=Te,Eo=bo,Oo=Ot,Co=Ii("IE_PROTO"),So=function(){},To=function(t){return"<script>"+t+"</"+"script>"},Mo=function(t){t.write(To("")),t.close();var e=t.parentWindow.Object;return t=null,e},Po=function(){try{fo=new ActiveXObject("htmlfile")}catch(t){}Po=document.domain&&fo?Mo(fo):function(){var t,e=Oo("iframe");if(e.style)return e.style.display="none",Eo.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(To("document.F=Object")),t.close(),t.F}()||Mo(fo);for(var t=_o.length;t--;)delete Po.prototype[_o[t]];return Po()};xo[Co]=!0;var Do=Object.create||function(t,e){var i;return null!==t?(So.prototype=wo(t),i=new So,So.prototype=null,i[Co]=t):i=Po(),void 0===e?i:ko(i,e)},Bo={};Bo[pt("toStringTag")]="z";var Io="[object z]"===String(Bo),zo=Io,Fo=g,No=pt("toStringTag"),Ao="Arguments"==Fo(function(){return arguments}()),Ro=zo?Fo:function(t){var e,i,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),No))?i:Ao?Fo(e):"Object"==(o=Fo(e))&&"function"==typeof e.callee?"Arguments":o},jo=Ro,Lo=Io?{}.toString:function(){return"[object "+jo(this)+"]"},Ho=Io,Wo=Xt.f,Vo=oe,qo=et,Uo=Lo,Yo=pt("toStringTag"),Xo=function(t,e,i,o){if(t){var n=i?t:t.prototype;qo(n,Yo)||Wo(n,Yo,{configurable:!0,value:e}),o&&!Ho&&Vo(n,"toString",Uo)}},Go={},Ko=po.IteratorPrototype,$o=Do,Zo=p,Qo=Xo,Jo=Go,tn=function(){return this},en=E,on=Kt,nn=function(t){if(!en(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t},rn=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,i={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(i,[]),e=i instanceof Array}catch(t){}return function(i,o){return on(i),nn(o),e?t.call(i,o):i.__proto__=o,i}}():void 0),sn=oe,an=function(t,e,i,o){o&&o.enumerable?t[e]=i:sn(t,e,i)},hn=ue,dn=function(t,e,i){var o=e+" Iterator";return t.prototype=$o(Ko,{next:Zo(1,i)}),Qo(t,o,!1,!0),Jo[o]=tn,t},ln=no,cn=Xo,un=oe,fn=an,pn=Go,vn=po.IteratorPrototype,gn=po.BUGGY_SAFARI_ITERATORS,yn=pt("iterator"),mn="keys",bn="values",wn="entries",kn=function(){return this},_n=function(t,e,i,o,n,r,s){dn(i,e,o);var a,h,d,l=function(t){if(t===n&&v)return v;if(!gn&&t in f)return f[t];switch(t){case mn:case bn:case wn:return function(){return new i(this,t)}}return function(){return new i(this)}},c=e+" Iterator",u=!1,f=t.prototype,p=f[yn]||f["@@iterator"]||n&&f[n],v=!gn&&p||l(n),g="Array"==e&&f.entries||p;if(g&&(a=ln(g.call(new t)),vn!==Object.prototype&&a.next&&(cn(a,c,!0,!0),pn[c]=kn)),n==bn&&p&&p.name!==bn&&(u=!0,v=function(){return p.call(this)}),s&&f[yn]!==v&&un(f,yn,v),pn[e]=v,n)if(h={values:l(bn),keys:r?v:l(mn),entries:l(wn)},s)for(d in h)(gn||u||!(d in f))&&fn(f,d,h[d]);else hn({target:e,proto:!0,forced:gn||u},h);return h},xn=ki.charAt,En=gi,On=Zi,Cn=_n,Sn="String Iterator",Tn=On.set,Mn=On.getterFor(Sn);Cn(String,"String",(function(t){Tn(this,{type:Sn,string:En(t),index:0})}),(function(){var t,e=Mn(this),i=e.string,o=e.index;return o>=i.length?{value:void 0,done:!0}:(t=xn(i,o),e.index+=t.length,{value:t,done:!1})}));var Pn=Kt,Dn=function(t){var e=t.return;if(void 0!==e)return Pn(e.call(t)).value},Bn=Kt,In=Dn,zn=Go,Fn=pt("iterator"),Nn=Array.prototype,An=function(t){return void 0!==t&&(zn.Array===t||Nn[Fn]===t)},Rn=kt,jn=Xt,Ln=p,Hn=function(t,e,i){var o=Rn(e);o in t?jn.f(t,o,Ln(0,i)):t[o]=i},Wn=Ro,Vn=Go,qn=pt("iterator"),Un=function(t){if(null!=t)return t[qn]||t["@@iterator"]||Vn[Wn(t)]},Yn=Yt,Xn=Q,Gn=function(t,e,i,o){try{return o?e(Bn(i)[0],i[1]):e(i)}catch(e){throw In(t),e}},Kn=An,$n=me,Zn=Hn,Qn=Un,Jn=pt("iterator"),tr=!1;try{var er=0,ir={next:function(){return{done:!!er++}},return:function(){tr=!0}};ir[Jn]=function(){return this},Array.from(ir,(function(){throw 2}))}catch(t){}var or=function(t){var e,i,o,n,r,s,a=Xn(t),h="function"==typeof this?this:Array,d=arguments.length,l=d>1?arguments[1]:void 0,c=void 0!==l,u=Qn(a),f=0;if(c&&(l=Yn(l,d>2?arguments[2]:void 0,2)),null==u||h==Array&&Kn(u))for(i=new h(e=$n(a.length));e>f;f++)s=c?l(a[f],f):a[f],Zn(i,f,s);else for(r=(n=u.call(a)).next,i=new h;!(o=r.call(n)).done;f++)s=c?Gn(n,l,[o.value,f],!0):o.value,Zn(i,f,s);return i.length=f,i};ue({target:"Array",stat:!0,forced:!function(t,e){if(!e&&!tr)return!1;var i=!1;try{var o={};o[Jn]=function(){return{next:function(){return{done:i=!0}}}},t(o)}catch(t){}return i}((function(t){Array.from(t)}))},{from:or});var nr=O.Array.from,rr=nr,sr=x,ar=Go,hr=Zi,dr=_n,lr="Array Iterator",cr=hr.set,ur=hr.getterFor(lr);dr(Array,"Array",(function(t,e){cr(this,{type:lr,target:sr(t),index:0,kind:e})}),(function(){var t=ur(this),e=t.target,i=t.kind,o=t.index++;return!e||o>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==i?{value:o,done:!1}:"values"==i?{value:e[o],done:!1}:{value:[o,e[o]],done:!1}}),"values"),ar.Arguments=ar.Array;var fr=Un,pr={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},vr=n,gr=Ro,yr=oe,mr=Go,br=pt("toStringTag");for(var wr in pr){var kr=vr[wr],_r=kr&&kr.prototype;_r&&gr(_r)!==br&&yr(_r,br,wr),mr[wr]=mr.Array}var xr=fr,Er=g,Or=Array.isArray||function(t){return"Array"==Er(t)},Cr={},Sr=Ie,Tr=ze.concat("length","prototype");Cr.f=Object.getOwnPropertyNames||function(t){return Sr(t,Tr)};var Mr={},Pr=x,Dr=Cr.f,Br={}.toString,Ir="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];Mr.f=function(t){return Ir&&"[object Window]"==Br.call(t)?function(t){try{return Dr(t)}catch(t){return Ir.slice()}}(t):Dr(Pr(t))};var zr={},Fr=pt;zr.f=Fr;var Nr=O,Ar=et,Rr=zr,jr=Xt.f,Lr=function(t){var e=Nr.Symbol||(Nr.Symbol={});Ar(e,t)||jr(e,t,{value:Rr.f(t)})},Hr=E,Wr=Or,Vr=pt("species"),qr=function(t){var e;return Wr(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!Wr(e.prototype)?Hr(e)&&null===(e=e[Vr])&&(e=void 0):e=void 0),void 0===e?Array:e},Ur=function(t,e){return new(qr(t))(0===e?0:e)},Yr=Yt,Xr=b,Gr=Q,Kr=me,$r=Ur,Zr=[].push,Qr=function(t){var e=1==t,i=2==t,o=3==t,n=4==t,r=6==t,s=7==t,a=5==t||r;return function(h,d,l,c){for(var u,f,p=Gr(h),v=Xr(p),g=Yr(d,l,3),y=Kr(v.length),m=0,b=c||$r,w=e?b(h,y):i||s?b(h,0):void 0;y>m;m++)if((a||m in v)&&(f=g(u=v[m],m,p),t))if(e)w[m]=f;else if(f)switch(t){case 3:return!0;case 5:return u;case 6:return m;case 2:Zr.call(w,u)}else switch(t){case 4:return!1;case 7:Zr.call(w,u)}return r?-1:o||n?n:w}},Jr={forEach:Qr(0),map:Qr(1),filter:Qr(2),some:Qr(3),every:Qr(4),find:Qr(5),findIndex:Qr(6),filterReject:Qr(7)},ts=ue,es=n,is=M,os=a,ns=L,rs=s,ss=et,as=Or,hs=E,ds=V,ls=Kt,cs=Q,us=x,fs=kt,ps=gi,vs=p,gs=Do,ys=Ae,ms=Cr,bs=Mr,ws=Re,ks=r,_s=Xt,xs=h,Es=oe,Os=an,Cs=U.exports,Ss=Te,Ts=nt,Ms=pt,Ps=zr,Ds=Lr,Bs=Xo,Is=Zi,zs=Jr.forEach,Fs=Ii("hidden"),Ns="Symbol",As=Ms("toPrimitive"),Rs=Is.set,js=Is.getterFor(Ns),Ls=Object.prototype,Hs=es.Symbol,Ws=is("JSON","stringify"),Vs=ks.f,qs=_s.f,Us=bs.f,Ys=xs.f,Xs=Cs("symbols"),Gs=Cs("op-symbols"),Ks=Cs("string-to-symbol-registry"),$s=Cs("symbol-to-string-registry"),Zs=Cs("wks"),Qs=es.QObject,Js=!Qs||!Qs.prototype||!Qs.prototype.findChild,ta=os&&rs((function(){return 7!=gs(qs({},"a",{get:function(){return qs(this,"a",{value:7}).a}})).a}))?function(t,e,i){var o=Vs(Ls,e);o&&delete Ls[e],qs(t,e,i),o&&t!==Ls&&qs(Ls,e,o)}:qs,ea=function(t,e){var i=Xs[t]=gs(Hs.prototype);return Rs(i,{type:Ns,tag:t,description:e}),os||(i.description=e),i},ia=function(t,e,i){t===Ls&&ia(Gs,e,i),ls(t);var o=fs(e);return ls(i),ss(Xs,o)?(i.enumerable?(ss(t,Fs)&&t[Fs][o]&&(t[Fs][o]=!1),i=gs(i,{enumerable:vs(0,!1)})):(ss(t,Fs)||qs(t,Fs,vs(1,{})),t[Fs][o]=!0),ta(t,o,i)):qs(t,o,i)},oa=function(t,e){ls(t);var i=us(e),o=ys(i).concat(aa(i));return zs(o,(function(e){os&&!na.call(i,e)||ia(t,e,i[e])})),t},na=function(t){var e=fs(t),i=Ys.call(this,e);return!(this===Ls&&ss(Xs,e)&&!ss(Gs,e))&&(!(i||!ss(this,e)||!ss(Xs,e)||ss(this,Fs)&&this[Fs][e])||i)},ra=function(t,e){var i=us(t),o=fs(e);if(i!==Ls||!ss(Xs,o)||ss(Gs,o)){var n=Vs(i,o);return!n||!ss(Xs,o)||ss(i,Fs)&&i[Fs][o]||(n.enumerable=!0),n}},sa=function(t){var e=Us(us(t)),i=[];return zs(e,(function(t){ss(Xs,t)||ss(Ss,t)||i.push(t)})),i},aa=function(t){var e=t===Ls,i=Us(e?Gs:us(t)),o=[];return zs(i,(function(t){!ss(Xs,t)||e&&!ss(Ls,t)||o.push(Xs[t])})),o};(ns||(Os((Hs=function(){if(this instanceof Hs)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?ps(arguments[0]):void 0,e=Ts(t),i=function(t){this===Ls&&i.call(Gs,t),ss(this,Fs)&&ss(this[Fs],e)&&(this[Fs][e]=!1),ta(this,e,vs(1,t))};return os&&Js&&ta(Ls,e,{configurable:!0,set:i}),ea(e,t)}).prototype,"toString",(function(){return js(this).tag})),Os(Hs,"withoutSetter",(function(t){return ea(Ts(t),t)})),xs.f=na,_s.f=ia,ks.f=ra,ms.f=bs.f=sa,ws.f=aa,Ps.f=function(t){return ea(Ms(t),t)},os&&qs(Hs.prototype,"description",{configurable:!0,get:function(){return js(this).description}})),ts({global:!0,wrap:!0,forced:!ns,sham:!ns},{Symbol:Hs}),zs(ys(Zs),(function(t){Ds(t)})),ts({target:Ns,stat:!0,forced:!ns},{for:function(t){var e=ps(t);if(ss(Ks,e))return Ks[e];var i=Hs(e);return Ks[e]=i,$s[i]=e,i},keyFor:function(t){if(!ds(t))throw TypeError(t+" is not a symbol");if(ss($s,t))return $s[t]},useSetter:function(){Js=!0},useSimple:function(){Js=!1}}),ts({target:"Object",stat:!0,forced:!ns,sham:!os},{create:function(t,e){return void 0===e?gs(t):oa(gs(t),e)},defineProperty:ia,defineProperties:oa,getOwnPropertyDescriptor:ra}),ts({target:"Object",stat:!0,forced:!ns},{getOwnPropertyNames:sa,getOwnPropertySymbols:aa}),ts({target:"Object",stat:!0,forced:rs((function(){ws.f(1)}))},{getOwnPropertySymbols:function(t){return ws.f(cs(t))}}),Ws)&&ts({target:"JSON",stat:!0,forced:!ns||rs((function(){var t=Hs();return"[null]"!=Ws([t])||"{}"!=Ws({a:t})||"{}"!=Ws(Object(t))}))},{stringify:function(t,e,i){for(var o,n=[t],r=1;arguments.length>r;)n.push(arguments[r++]);if(o=e,(hs(e)||void 0!==t)&&!ds(t))return as(e)||(e=function(t,e){if("function"==typeof o&&(e=o.call(this,t,e)),!ds(e))return e}),n[1]=e,Ws.apply(null,n)}});Hs.prototype[As]||Es(Hs.prototype,As,Hs.prototype.valueOf),Bs(Hs,Ns),Ss[Fs]=!0;var ha=O.Object.getOwnPropertySymbols,da={exports:{}},la=ue,ca=s,ua=x,fa=r.f,pa=a,va=ca((function(){fa(1)}));la({target:"Object",stat:!0,forced:!pa||va,sham:!pa},{getOwnPropertyDescriptor:function(t,e){return fa(ua(t),e)}});var ga=O.Object,ya=da.exports=function(t,e){return ga.getOwnPropertyDescriptor(t,e)};ga.getOwnPropertyDescriptor.sham&&(ya.sham=!0);var ma=da.exports,ba=ma,wa=Cr,ka=Re,_a=Kt,xa=M("Reflect","ownKeys")||function(t){var e=wa.f(_a(t)),i=ka.f;return i?e.concat(i(t)):e},Ea=xa,Oa=x,Ca=r,Sa=Hn;ue({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){for(var e,i,o=Oa(t),n=Ca.f,r=Ea(o),s={},a=0;r.length>a;)void 0!==(i=n(o,e=r[a++]))&&Sa(s,e,i);return s}});var Ta=O.Object.getOwnPropertyDescriptors,Ma={exports:{}};ue({target:"Object",stat:!0,forced:!a,sham:!a},{defineProperties:mo});var Pa=O.Object,Da=Ma.exports=function(t,e){return Pa.defineProperties(t,e)};Pa.defineProperties.sham&&(Da.sham=!0);var Ba=Ma.exports,Ia={exports:{}};ue({target:"Object",stat:!0,forced:!a,sham:!a},{defineProperty:Xt.f});var za=O.Object,Fa=Ia.exports=function(t,e,i){return za.defineProperty(t,e,i)};za.defineProperty.sham&&(Fa.sham=!0);var Na=Ia.exports,Aa=Na;function Ra(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var ja=Na;function La(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),ja(t,o.key,o)}}function Ha(t,e,i){return e&&La(t.prototype,e),i&&La(t,i),t}function Wa(t,e,i){return e in t?ja(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}ue({target:"Array",stat:!0},{isArray:Or});var Va=O.Array.isArray,qa=Va;var Ua=s,Ya=A,Xa=pt("species"),Ga=function(t){return Ya>=51||!Ua((function(){var e=[];return(e.constructor={})[Xa]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},Ka=ue,$a=s,Za=Or,Qa=E,Ja=Q,th=me,eh=Hn,ih=Ur,oh=Ga,nh=A,rh=pt("isConcatSpreadable"),sh=9007199254740991,ah="Maximum allowed index exceeded",hh=nh>=51||!$a((function(){var t=[];return t[rh]=!1,t.concat()[0]!==t})),dh=oh("concat"),lh=function(t){if(!Qa(t))return!1;var e=t[rh];return void 0!==e?!!e:Za(t)};Ka({target:"Array",proto:!0,forced:!hh||!dh},{concat:function(t){var e,i,o,n,r,s=Ja(this),a=ih(s,0),h=0;for(e=-1,o=arguments.length;e<o;e++)if(lh(r=-1===e?s:arguments[e])){if(h+(n=th(r.length))>sh)throw TypeError(ah);for(i=0;i<n;i++,h++)i in r&&eh(a,h,r[i])}else{if(h>=sh)throw TypeError(ah);eh(a,h++,r)}return a.length=h,a}}),Lr("asyncIterator"),Lr("hasInstance"),Lr("isConcatSpreadable"),Lr("iterator"),Lr("match"),Lr("matchAll"),Lr("replace"),Lr("search"),Lr("species"),Lr("split"),Lr("toPrimitive"),Lr("toStringTag"),Lr("unscopables"),Xo(n.JSON,"JSON",!0);var ch=O.Symbol;Lr("asyncDispose"),Lr("dispose"),Lr("matcher"),Lr("metadata"),Lr("observable"),Lr("patternMatch"),Lr("replaceAll");var uh=ch;var fh=ue,ph=E,vh=Or,gh=_e,yh=me,mh=x,bh=Hn,wh=pt,kh=Ga("slice"),_h=wh("species"),xh=[].slice,Eh=Math.max;fh({target:"Array",proto:!0,forced:!kh},{slice:function(t,e){var i,o,n,r=mh(this),s=yh(r.length),a=gh(t,s),h=gh(void 0===e?s:e,s);if(vh(r)&&("function"!=typeof(i=r.constructor)||i!==Array&&!vh(i.prototype)?ph(i)&&null===(i=i[_h])&&(i=void 0):i=void 0,i===Array||void 0===i))return xh.call(r,a,h);for(o=new(void 0===i?Array:i)(Eh(h-a,0)),n=0;a<h;a++,n++)a in r&&bh(o,n,r[a]);return o.length=n,o}});var Oh=oi("Array").slice,Ch=Array.prototype,Sh=function(t){var e=t.slice;return t===Ch||t instanceof Array&&e===Ch.slice?Oh:e},Th=Sh,Mh=nr;function Ph(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}function Dh(t,e){var i;if(t){if("string"==typeof t)return Ph(t,e);var o=Th(i=Object.prototype.toString.call(t)).call(i,8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Mh(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?Ph(t,e):void 0}}function Bh(t,e){return function(t){if(qa(t))return t}(t)||function(t,e){var i=null==t?null:void 0!==uh&&xr(t)||t["@@iterator"];if(null!=i){var o,n,r=[],s=!0,a=!1;try{for(i=i.call(t);!(s=(o=i.next()).done)&&(r.push(o.value),!e||r.length!==e);s=!0);}catch(t){a=!0,n=t}finally{try{s||null==i.return||i.return()}finally{if(a)throw n}}return r}}(t,e)||Dh(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Ih=zr.f("iterator");function zh(t){return(zh="function"==typeof uh&&"symbol"==typeof Ih?function(t){return typeof t}:function(t){return t&&"function"==typeof uh&&t.constructor===uh&&t!==uh.prototype?"symbol":typeof t})(t)}function Fh(t){return function(t){if(qa(t))return Ph(t)}(t)||function(t){if(void 0!==uh&&null!=xr(t)||null!=t["@@iterator"])return Mh(t)}(t)||Dh(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Nh=ch,Ah=oi("Array").concat,Rh=Array.prototype,jh=function(t){var e=t.concat;return t===Rh||t instanceof Array&&e===Rh.concat?Ah:e},Lh=Sh;ue({target:"Reflect",stat:!0},{ownKeys:xa}),O.Reflect.ownKeys;var Hh=Va,Wh=Jr.map;ue({target:"Array",proto:!0,forced:!Ga("map")},{map:function(t){return Wh(this,t,arguments.length>1?arguments[1]:void 0)}});var Vh=oi("Array").map,qh=Array.prototype,Uh=function(t){var e=t.map;return t===qh||t instanceof Array&&e===qh.map?Vh:e},Yh=Q,Xh=Ae;ue({target:"Object",stat:!0,forced:s((function(){Xh(1)}))},{keys:function(t){return Xh(Yh(t))}});var Gh=O.Object.keys;ue({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}});var Kh=O.Date.now,$h=s,Zh=function(t,e){var i=[][t];return!!i&&$h((function(){i.call(null,e||function(){throw 1},1)}))},Qh=Jr.forEach,Jh=Zh("forEach")?[].forEach:function(t){return Qh(this,t,arguments.length>1?arguments[1]:void 0)};ue({target:"Array",proto:!0,forced:[].forEach!=Jh},{forEach:Jh});var td=oi("Array").forEach,ed=Ro,id=Array.prototype,od={DOMTokenList:!0,NodeList:!0},nd=function(t){var e=t.forEach;return t===id||t instanceof Array&&e===id.forEach||od.hasOwnProperty(ed(t))?td:e},rd=Or,sd=[].reverse,ad=[1,2];ue({target:"Array",proto:!0,forced:String(ad)===String(ad.reverse())},{reverse:function(){return rd(this)&&(this.length=this.length),sd.call(this)}});var hd=oi("Array").reverse,dd=Array.prototype,ld=function(t){var e=t.reverse;return t===dd||t instanceof Array&&e===dd.reverse?hd:e},cd=ue,ud=_e,fd=ve,pd=me,vd=Q,gd=Ur,yd=Hn,md=Ga("splice"),bd=Math.max,wd=Math.min,kd=9007199254740991,_d="Maximum allowed length exceeded";cd({target:"Array",proto:!0,forced:!md},{splice:function(t,e){var i,o,n,r,s,a,h=vd(this),d=pd(h.length),l=ud(t,d),c=arguments.length;if(0===c?i=o=0:1===c?(i=0,o=d-l):(i=c-2,o=wd(bd(fd(e),0),d-l)),d+i-o>kd)throw TypeError(_d);for(n=gd(h,o),r=0;r<o;r++)(s=l+r)in h&&yd(n,r,h[s]);if(n.length=o,i<o){for(r=l;r<d-o;r++)a=r+i,(s=r+o)in h?h[a]=h[s]:delete h[a];for(r=d;r>d-o+i;r--)delete h[r-1]}else if(i>o)for(r=d-o;r>l;r--)a=r+i-1,(s=r+o-1)in h?h[a]=h[s]:delete h[a];for(r=0;r<i;r++)h[r+l]=arguments[r+2];return h.length=d-o+i,n}});var xd=oi("Array").splice,Ed=Array.prototype,Od=function(t){var e=t.splice;return t===Ed||t instanceof Array&&e===Ed.splice?xd:e},Cd=Se.includes;ue({target:"Array",proto:!0},{includes:function(t){return Cd(this,t,arguments.length>1?arguments[1]:void 0)}});var Sd=oi("Array").includes,Td=E,Md=g,Pd=pt("match"),Dd=function(t){var e;return Td(t)&&(void 0!==(e=t[Pd])?!!e:"RegExp"==Md(t))},Bd=pt("match"),Id=function(t){if(Dd(t))throw TypeError("The method doesn't accept regular expressions");return t},zd=w,Fd=gi;ue({target:"String",proto:!0,forced:!function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[Bd]=!1,"/./"[t](e)}catch(t){}}return!1}("includes")},{includes:function(t){return!!~Fd(zd(this)).indexOf(Fd(Id(t)),arguments.length>1?arguments[1]:void 0)}});var Nd=oi("String").includes,Ad=Sd,Rd=Nd,jd=Array.prototype,Ld=String.prototype,Hd=function(t){var e=t.includes;return t===jd||t instanceof Array&&e===jd.includes?Ad:"string"==typeof t||t===Ld||t instanceof String&&e===Ld.includes?Rd:e},Wd=Q,Vd=no,qd=Qi;ue({target:"Object",stat:!0,forced:s((function(){Vd(1)})),sham:!qd},{getPrototypeOf:function(t){return Vd(Wd(t))}});var Ud=O.Object.getPrototypeOf,Yd=Ud,Xd=Jr.filter;ue({target:"Array",proto:!0,forced:!Ga("filter")},{filter:function(t){return Xd(this,t,arguments.length>1?arguments[1]:void 0)}});var Gd=oi("Array").filter,Kd=Array.prototype,$d=function(t){var e=t.filter;return t===Kd||t instanceof Array&&e===Kd.filter?Gd:e},Zd=a,Qd=Ae,Jd=x,tl=h.f,el=function(t){return function(e){for(var i,o=Jd(e),n=Qd(o),r=n.length,s=0,a=[];r>s;)i=n[s++],Zd&&!tl.call(o,i)||a.push(t?[i,o[i]]:o[i]);return a}},il={entries:el(!0),values:el(!1)}.values;ue({target:"Object",stat:!0},{values:function(t){return il(t)}}),O.Object.values;var ol="\t\n\v\f\r                　\u2028\u2029\ufeff",nl=w,rl=gi,sl="[\t\n\v\f\r                　\u2028\u2029\ufeff]",al=RegExp("^"+sl+sl+"*"),hl=RegExp(sl+sl+"*$"),dl=function(t){return function(e){var i=rl(nl(e));return 1&t&&(i=i.replace(al,"")),2&t&&(i=i.replace(hl,"")),i}},ll={start:dl(1),end:dl(2),trim:dl(3)},cl=gi,ul=ll.trim,fl=ol,pl=n.parseInt,vl=/^[+-]?0[Xx]/,gl=8!==pl(fl+"08")||22!==pl(fl+"0x16")?function(t,e){var i=ul(cl(t));return pl(i,e>>>0||(vl.test(i)?16:10))}:pl;ue({global:!0,forced:parseInt!=gl},{parseInt:gl});var yl=O.parseInt,ml=ue,bl=Se.indexOf,wl=Zh,kl=[].indexOf,_l=!!kl&&1/[1].indexOf(1,-0)<0,xl=wl("indexOf");ml({target:"Array",proto:!0,forced:_l||!xl},{indexOf:function(t){return _l?kl.apply(this,arguments)||0:bl(this,t,arguments.length>1?arguments[1]:void 0)}});var El=oi("Array").indexOf,Ol=Array.prototype,Cl=function(t){var e=t.indexOf;return t===Ol||t instanceof Array&&e===Ol.indexOf?El:e},Sl=s,Tl=ol,Ml=ll.trim;ue({target:"String",proto:!0,forced:function(t){return Sl((function(){return!!Tl[t]()||"​᠎"!="​᠎"[t]()||Tl[t].name!==t}))}("trim")},{trim:function(){return Ml(this)}}),oi("String").trim,ue({target:"Object",stat:!0,sham:!a},{create:Do});var Pl=O.Object,Dl=function(t,e){return Pl.create(t,e)},Bl=Dl,Il=ue,zl=s,Fl=M("JSON","stringify"),Nl=/[\uD800-\uDFFF]/g,Al=/^[\uD800-\uDBFF]$/,Rl=/^[\uDC00-\uDFFF]$/,jl=function(t,e,i){var o=i.charAt(e-1),n=i.charAt(e+1);return Al.test(t)&&!Rl.test(n)||Rl.test(t)&&!Al.test(o)?"\\u"+t.charCodeAt(0).toString(16):t},Ll=zl((function(){return'"\\udf06\\ud834"'!==Fl("\udf06\ud834")||'"\\udead"'!==Fl("\udead")}));Fl&&Il({target:"JSON",stat:!0,forced:Ll},{stringify:function(t,e,i){var o=Fl.apply(null,arguments);return"string"==typeof o?o.replace(Nl,jl):o}});var Hl=O;Hl.JSON||(Hl.JSON={stringify:JSON.stringify});var Wl=function(t,e,i){return Hl.JSON.stringify.apply(null,arguments)},Vl=n,ql=[].slice,Ul=function(t){return function(e,i){var o=arguments.length>2,n=o?ql.call(arguments,2):void 0;return t(o?function(){("function"==typeof e?e:Function(e)).apply(this,n)}:e,i)}};ue({global:!0,bind:!0,forced:/MSIE .\./.test(P)},{setTimeout:Ul(Vl.setTimeout),setInterval:Ul(Vl.setInterval)});var Yl=O.setTimeout,Xl=Q,Gl=_e,Kl=me;ue({target:"Array",proto:!0},{fill:function(t){for(var e=Xl(this),i=Kl(e.length),o=arguments.length,n=Gl(o>1?arguments[1]:void 0,i),r=o>2?arguments[2]:void 0,s=void 0===r?i:Gl(r,i);s>n;)e[n++]=t;return e}});var $l=oi("Array").fill,Zl=Array.prototype,Ql=function(t){var e=t.fill;return t===Zl||t instanceof Array&&e===Zl.fill?$l:e};
/*! Hammer.JS - v2.0.17-rc - 2019-12-16
	 * http://naver.github.io/egjs
	 *
	 * Forked By Naver egjs
	 * Copyright (c) hammerjs
	 * Licensed under the MIT license */
function Jl(){return(Jl=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t}).apply(this,arguments)}function tc(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function ec(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var ic,oc="function"!=typeof Object.assign?function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var o=arguments[i];if(null!=o)for(var n in o)o.hasOwnProperty(n)&&(e[n]=o[n])}return e}:Object.assign,nc=["","webkit","Moz","MS","ms","o"],rc="undefined"==typeof document?{style:{}}:document.createElement("div"),sc=Math.round,ac=Math.abs,hc=Date.now;function dc(t,e){for(var i,o,n=e[0].toUpperCase()+e.slice(1),r=0;r<nc.length;){if((o=(i=nc[r])?i+n:e)in t)return o;r++}}ic="undefined"==typeof window?{}:window;var lc=dc(rc.style,"touchAction"),cc=void 0!==lc;var uc="compute",fc="auto",pc="manipulation",vc="none",gc="pan-x",yc="pan-y",mc=function(){if(!cc)return!1;var t={},e=ic.CSS&&ic.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(i){return t[i]=!e||ic.CSS.supports("touch-action",i)})),t}(),bc="ontouchstart"in ic,wc=void 0!==dc(ic,"PointerEvent"),kc=bc&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),_c="touch",xc="mouse",Ec=16,Oc=24,Cc=["x","y"],Sc=["clientX","clientY"];function Tc(t,e,i){var o;if(t)if(t.forEach)t.forEach(e,i);else if(void 0!==t.length)for(o=0;o<t.length;)e.call(i,t[o],o,t),o++;else for(o in t)t.hasOwnProperty(o)&&e.call(i,t[o],o,t)}function Mc(t,e){return"function"==typeof t?t.apply(e&&e[0]||void 0,e):t}function Pc(t,e){return t.indexOf(e)>-1}var Dc=function(){function t(t,e){this.manager=t,this.set(e)}var e=t.prototype;return e.set=function(t){t===uc&&(t=this.compute()),cc&&this.manager.element.style&&mc[t]&&(this.manager.element.style[lc]=t),this.actions=t.toLowerCase().trim()},e.update=function(){this.set(this.manager.options.touchAction)},e.compute=function(){var t=[];return Tc(this.manager.recognizers,(function(e){Mc(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))})),function(t){if(Pc(t,vc))return vc;var e=Pc(t,gc),i=Pc(t,yc);return e&&i?vc:e||i?e?gc:yc:Pc(t,pc)?pc:fc}(t.join(" "))},e.preventDefaults=function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var o=this.actions,n=Pc(o,vc)&&!mc.none,r=Pc(o,yc)&&!mc["pan-y"],s=Pc(o,gc)&&!mc["pan-x"];if(n){var a=1===t.pointers.length,h=t.distance<2,d=t.deltaTime<250;if(a&&h&&d)return}if(!s||!r)return n||r&&6&i||s&&i&Oc?this.preventSrc(e):void 0}},e.preventSrc=function(t){this.manager.session.prevented=!0,t.preventDefault()},t}();function Bc(t,e){for(;t;){if(t===e)return!0;t=t.parentNode}return!1}function Ic(t){var e=t.length;if(1===e)return{x:sc(t[0].clientX),y:sc(t[0].clientY)};for(var i=0,o=0,n=0;n<e;)i+=t[n].clientX,o+=t[n].clientY,n++;return{x:sc(i/e),y:sc(o/e)}}function zc(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:sc(t.pointers[i].clientX),clientY:sc(t.pointers[i].clientY)},i++;return{timeStamp:hc(),pointers:e,center:Ic(e),deltaX:t.deltaX,deltaY:t.deltaY}}function Fc(t,e,i){i||(i=Cc);var o=e[i[0]]-t[i[0]],n=e[i[1]]-t[i[1]];return Math.sqrt(o*o+n*n)}function Nc(t,e,i){i||(i=Cc);var o=e[i[0]]-t[i[0]],n=e[i[1]]-t[i[1]];return 180*Math.atan2(n,o)/Math.PI}function Ac(t,e){return t===e?1:ac(t)>=ac(e)?t<0?2:4:e<0?8:Ec}function Rc(t,e,i){return{x:e/t||0,y:i/t||0}}function jc(t,e){var i=t.session,o=e.pointers,n=o.length;i.firstInput||(i.firstInput=zc(e)),n>1&&!i.firstMultiple?i.firstMultiple=zc(e):1===n&&(i.firstMultiple=!1);var r=i.firstInput,s=i.firstMultiple,a=s?s.center:r.center,h=e.center=Ic(o);e.timeStamp=hc(),e.deltaTime=e.timeStamp-r.timeStamp,e.angle=Nc(a,h),e.distance=Fc(a,h),function(t,e){var i=e.center,o=t.offsetDelta||{},n=t.prevDelta||{},r=t.prevInput||{};1!==e.eventType&&4!==r.eventType||(n=t.prevDelta={x:r.deltaX||0,y:r.deltaY||0},o=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=n.x+(i.x-o.x),e.deltaY=n.y+(i.y-o.y)}(i,e),e.offsetDirection=Ac(e.deltaX,e.deltaY);var d,l,c=Rc(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=c.x,e.overallVelocityY=c.y,e.overallVelocity=ac(c.x)>ac(c.y)?c.x:c.y,e.scale=s?(d=s.pointers,Fc((l=o)[0],l[1],Sc)/Fc(d[0],d[1],Sc)):1,e.rotation=s?function(t,e){return Nc(e[1],e[0],Sc)+Nc(t[1],t[0],Sc)}(s.pointers,o):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,function(t,e){var i,o,n,r,s=t.lastInterval||e,a=e.timeStamp-s.timeStamp;if(8!==e.eventType&&(a>25||void 0===s.velocity)){var h=e.deltaX-s.deltaX,d=e.deltaY-s.deltaY,l=Rc(a,h,d);o=l.x,n=l.y,i=ac(l.x)>ac(l.y)?l.x:l.y,r=Ac(h,d),t.lastInterval=e}else i=s.velocity,o=s.velocityX,n=s.velocityY,r=s.direction;e.velocity=i,e.velocityX=o,e.velocityY=n,e.direction=r}(i,e);var u,f=t.element,p=e.srcEvent;Bc(u=p.composedPath?p.composedPath()[0]:p.path?p.path[0]:p.target,f)&&(f=u),e.target=f}function Lc(t,e,i){var o=i.pointers.length,n=i.changedPointers.length,r=1&e&&o-n==0,s=12&e&&o-n==0;i.isFirst=!!r,i.isFinal=!!s,r&&(t.session={}),i.eventType=e,jc(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function Hc(t){return t.trim().split(/\s+/g)}function Wc(t,e,i){Tc(Hc(e),(function(e){t.addEventListener(e,i,!1)}))}function Vc(t,e,i){Tc(Hc(e),(function(e){t.removeEventListener(e,i,!1)}))}function qc(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||window}var Uc=function(){function t(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){Mc(t.options.enable,[t])&&i.handler(e)},this.init()}var e=t.prototype;return e.handler=function(){},e.init=function(){this.evEl&&Wc(this.element,this.evEl,this.domHandler),this.evTarget&&Wc(this.target,this.evTarget,this.domHandler),this.evWin&&Wc(qc(this.element),this.evWin,this.domHandler)},e.destroy=function(){this.evEl&&Vc(this.element,this.evEl,this.domHandler),this.evTarget&&Vc(this.target,this.evTarget,this.domHandler),this.evWin&&Vc(qc(this.element),this.evWin,this.domHandler)},t}();function Yc(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var o=0;o<t.length;){if(i&&t[o][i]==e||!i&&t[o]===e)return o;o++}return-1}var Xc={pointerdown:1,pointermove:2,pointerup:4,pointercancel:8,pointerout:8},Gc={2:_c,3:"pen",4:xc,5:"kinect"},Kc="pointerdown",$c="pointermove pointerup pointercancel";ic.MSPointerEvent&&!ic.PointerEvent&&(Kc="MSPointerDown",$c="MSPointerMove MSPointerUp MSPointerCancel");var Zc=function(t){function e(){var i,o=e.prototype;return o.evEl=Kc,o.evWin=$c,(i=t.apply(this,arguments)||this).store=i.manager.session.pointerEvents=[],i}return tc(e,t),e.prototype.handler=function(t){var e=this.store,i=!1,o=t.type.toLowerCase().replace("ms",""),n=Xc[o],r=Gc[t.pointerType]||t.pointerType,s=r===_c,a=Yc(e,t.pointerId,"pointerId");1&n&&(0===t.button||s)?a<0&&(e.push(t),a=e.length-1):12&n&&(i=!0),a<0||(e[a]=t,this.callback(this.manager,n,{pointers:e,changedPointers:[t],pointerType:r,srcEvent:t}),i&&e.splice(a,1))},e}(Uc);function Qc(t){return Array.prototype.slice.call(t,0)}function Jc(t,e,i){for(var o=[],n=[],r=0;r<t.length;){var s=e?t[r][e]:t[r];Yc(n,s)<0&&o.push(t[r]),n[r]=s,r++}return i&&(o=e?o.sort((function(t,i){return t[e]>i[e]})):o.sort()),o}var tu={touchstart:1,touchmove:2,touchend:4,touchcancel:8},eu="touchstart touchmove touchend touchcancel",iu=function(t){function e(){var i;return e.prototype.evTarget=eu,(i=t.apply(this,arguments)||this).targetIds={},i}return tc(e,t),e.prototype.handler=function(t){var e=tu[t.type],i=ou.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:_c,srcEvent:t})},e}(Uc);function ou(t,e){var i,o,n=Qc(t.touches),r=this.targetIds;if(3&e&&1===n.length)return r[n[0].identifier]=!0,[n,n];var s=Qc(t.changedTouches),a=[],h=this.target;if(o=n.filter((function(t){return Bc(t.target,h)})),1===e)for(i=0;i<o.length;)r[o[i].identifier]=!0,i++;for(i=0;i<s.length;)r[s[i].identifier]&&a.push(s[i]),12&e&&delete r[s[i].identifier],i++;return a.length?[Jc(o.concat(a),"identifier",!0),a]:void 0}var nu={mousedown:1,mousemove:2,mouseup:4},ru="mousedown",su="mousemove mouseup",au=function(t){function e(){var i,o=e.prototype;return o.evEl=ru,o.evWin=su,(i=t.apply(this,arguments)||this).pressed=!1,i}return tc(e,t),e.prototype.handler=function(t){var e=nu[t.type];1&e&&0===t.button&&(this.pressed=!0),2&e&&1!==t.which&&(e=4),this.pressed&&(4&e&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:xc,srcEvent:t}))},e}(Uc);function hu(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY},o=this.lastTouches;this.lastTouches.push(i);setTimeout((function(){var t=o.indexOf(i);t>-1&&o.splice(t,1)}),2500)}}function du(t,e){1&t?(this.primaryTouch=e.changedPointers[0].identifier,hu.call(this,e)):12&t&&hu.call(this,e)}function lu(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,o=0;o<this.lastTouches.length;o++){var n=this.lastTouches[o],r=Math.abs(e-n.x),s=Math.abs(i-n.y);if(r<=25&&s<=25)return!0}return!1}var cu=function(){return function(t){function e(e,i){var o;return(o=t.call(this,e,i)||this).handler=function(t,e,i){var n=i.pointerType===_c,r=i.pointerType===xc;if(!(r&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(n)du.call(ec(ec(o)),e,i);else if(r&&lu.call(ec(ec(o)),i))return;o.callback(t,e,i)}},o.touch=new iu(o.manager,o.handler),o.mouse=new au(o.manager,o.handler),o.primaryTouch=null,o.lastTouches=[],o}return tc(e,t),e.prototype.destroy=function(){this.touch.destroy(),this.mouse.destroy()},e}(Uc)}();function uu(t,e,i){return!!Array.isArray(t)&&(Tc(t,i[e],i),!0)}var fu=32,pu=1;function vu(t,e){var i=e.manager;return i?i.get(t):t}function gu(t){return 16&t?"cancel":8&t?"end":4&t?"move":2&t?"start":""}var yu=function(){function t(t){void 0===t&&(t={}),this.options=Jl({enable:!0},t),this.id=pu++,this.manager=null,this.state=1,this.simultaneous={},this.requireFail=[]}var e=t.prototype;return e.set=function(t){return oc(this.options,t),this.manager&&this.manager.touchAction.update(),this},e.recognizeWith=function(t){if(uu(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=vu(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},e.dropRecognizeWith=function(t){return uu(t,"dropRecognizeWith",this)||(t=vu(t,this),delete this.simultaneous[t.id]),this},e.requireFailure=function(t){if(uu(t,"requireFailure",this))return this;var e=this.requireFail;return-1===Yc(e,t=vu(t,this))&&(e.push(t),t.requireFailure(this)),this},e.dropRequireFailure=function(t){if(uu(t,"dropRequireFailure",this))return this;t=vu(t,this);var e=Yc(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},e.hasRequireFailures=function(){return this.requireFail.length>0},e.canRecognizeWith=function(t){return!!this.simultaneous[t.id]},e.emit=function(t){var e=this,i=this.state;function o(i){e.manager.emit(i,t)}i<8&&o(e.options.event+gu(i)),o(e.options.event),t.additionalEvent&&o(t.additionalEvent),i>=8&&o(e.options.event+gu(i))},e.tryEmit=function(t){if(this.canEmit())return this.emit(t);this.state=fu},e.canEmit=function(){for(var t=0;t<this.requireFail.length;){if(!(33&this.requireFail[t].state))return!1;t++}return!0},e.recognize=function(t){var e=oc({},t);if(!Mc(this.options.enable,[this,e]))return this.reset(),void(this.state=fu);56&this.state&&(this.state=1),this.state=this.process(e),30&this.state&&this.tryEmit(e)},e.process=function(t){},e.getTouchAction=function(){},e.reset=function(){},t}(),mu=function(t){function e(e){var i;return void 0===e&&(e={}),(i=t.call(this,Jl({event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},e))||this).pTime=!1,i.pCenter=!1,i._timer=null,i._input=null,i.count=0,i}tc(e,t);var i=e.prototype;return i.getTouchAction=function(){return[pc]},i.process=function(t){var e=this,i=this.options,o=t.pointers.length===i.pointers,n=t.distance<i.threshold,r=t.deltaTime<i.time;if(this.reset(),1&t.eventType&&0===this.count)return this.failTimeout();if(n&&r&&o){if(4!==t.eventType)return this.failTimeout();var s=!this.pTime||t.timeStamp-this.pTime<i.interval,a=!this.pCenter||Fc(this.pCenter,t.center)<i.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,a&&s?this.count+=1:this.count=1,this._input=t,0===this.count%i.taps)return this.hasRequireFailures()?(this._timer=setTimeout((function(){e.state=8,e.tryEmit()}),i.interval),2):8}return fu},i.failTimeout=function(){var t=this;return this._timer=setTimeout((function(){t.state=fu}),this.options.interval),fu},i.reset=function(){clearTimeout(this._timer)},i.emit=function(){8===this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))},e}(yu),bu=function(t){function e(e){return void 0===e&&(e={}),t.call(this,Jl({pointers:1},e))||this}tc(e,t);var i=e.prototype;return i.attrTest=function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},i.process=function(t){var e=this.state,i=t.eventType,o=6&e,n=this.attrTest(t);return o&&(8&i||!n)?16|e:o||n?4&i?8|e:2&e?4|e:2:fu},e}(yu);function wu(t){return t===Ec?"down":8===t?"up":2===t?"left":4===t?"right":""}var ku=function(t){function e(e){var i;return void 0===e&&(e={}),(i=t.call(this,Jl({event:"pan",threshold:10,pointers:1,direction:30},e))||this).pX=null,i.pY=null,i}tc(e,t);var i=e.prototype;return i.getTouchAction=function(){var t=this.options.direction,e=[];return 6&t&&e.push(yc),t&Oc&&e.push(gc),e},i.directionTest=function(t){var e=this.options,i=!0,o=t.distance,n=t.direction,r=t.deltaX,s=t.deltaY;return n&e.direction||(6&e.direction?(n=0===r?1:r<0?2:4,i=r!==this.pX,o=Math.abs(t.deltaX)):(n=0===s?1:s<0?8:Ec,i=s!==this.pY,o=Math.abs(t.deltaY))),t.direction=n,i&&o>e.threshold&&n&e.direction},i.attrTest=function(t){return bu.prototype.attrTest.call(this,t)&&(2&this.state||!(2&this.state)&&this.directionTest(t))},i.emit=function(e){this.pX=e.deltaX,this.pY=e.deltaY;var i=wu(e.direction);i&&(e.additionalEvent=this.options.event+i),t.prototype.emit.call(this,e)},e}(bu),_u=function(t){function e(e){return void 0===e&&(e={}),t.call(this,Jl({event:"swipe",threshold:10,velocity:.3,direction:30,pointers:1},e))||this}tc(e,t);var i=e.prototype;return i.getTouchAction=function(){return ku.prototype.getTouchAction.call(this)},i.attrTest=function(e){var i,o=this.options.direction;return 30&o?i=e.overallVelocity:6&o?i=e.overallVelocityX:o&Oc&&(i=e.overallVelocityY),t.prototype.attrTest.call(this,e)&&o&e.offsetDirection&&e.distance>this.options.threshold&&e.maxPointers===this.options.pointers&&ac(i)>this.options.velocity&&4&e.eventType},i.emit=function(t){var e=wu(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)},e}(bu),xu=function(t){function e(e){return void 0===e&&(e={}),t.call(this,Jl({event:"pinch",threshold:0,pointers:2},e))||this}tc(e,t);var i=e.prototype;return i.getTouchAction=function(){return[vc]},i.attrTest=function(e){return t.prototype.attrTest.call(this,e)&&(Math.abs(e.scale-1)>this.options.threshold||2&this.state)},i.emit=function(e){if(1!==e.scale){var i=e.scale<1?"in":"out";e.additionalEvent=this.options.event+i}t.prototype.emit.call(this,e)},e}(bu),Eu=function(t){function e(e){return void 0===e&&(e={}),t.call(this,Jl({event:"rotate",threshold:0,pointers:2},e))||this}tc(e,t);var i=e.prototype;return i.getTouchAction=function(){return[vc]},i.attrTest=function(e){return t.prototype.attrTest.call(this,e)&&(Math.abs(e.rotation)>this.options.threshold||2&this.state)},e}(bu),Ou=function(t){function e(e){var i;return void 0===e&&(e={}),(i=t.call(this,Jl({event:"press",pointers:1,time:251,threshold:9},e))||this)._timer=null,i._input=null,i}tc(e,t);var i=e.prototype;return i.getTouchAction=function(){return[fc]},i.process=function(t){var e=this,i=this.options,o=t.pointers.length===i.pointers,n=t.distance<i.threshold,r=t.deltaTime>i.time;if(this._input=t,!n||!o||12&t.eventType&&!r)this.reset();else if(1&t.eventType)this.reset(),this._timer=setTimeout((function(){e.state=8,e.tryEmit()}),i.time);else if(4&t.eventType)return 8;return fu},i.reset=function(){clearTimeout(this._timer)},i.emit=function(t){8===this.state&&(t&&4&t.eventType?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=hc(),this.manager.emit(this.options.event,this._input)))},e}(yu),Cu={domEvents:!1,touchAction:uc,enable:!0,inputTarget:null,inputClass:null,cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},Su=[[Eu,{enable:!1}],[xu,{enable:!1},["rotate"]],[_u,{direction:6}],[ku,{direction:6},["swipe"]],[mu],[mu,{event:"doubletap",taps:2},["tap"]],[Ou]];function Tu(t,e){var i,o=t.element;o.style&&(Tc(t.options.cssProps,(function(n,r){i=dc(o.style,r),e?(t.oldCssProps[i]=o.style[i],o.style[i]=n):o.style[i]=t.oldCssProps[i]||""})),e||(t.oldCssProps={}))}var Mu=function(){function t(t,e){var i,o=this;this.options=oc({},Cu,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((i=this).options.inputClass||(wc?Zc:kc?iu:bc?cu:au))(i,Lc),this.touchAction=new Dc(this,this.options.touchAction),Tu(this,!0),Tc(this.options.recognizers,(function(t){var e=o.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])}),this)}var e=t.prototype;return e.set=function(t){return oc(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},e.stop=function(t){this.session.stopped=t?2:1},e.recognize=function(t){var e=this.session;if(!e.stopped){var i;this.touchAction.preventDefaults(t);var o=this.recognizers,n=e.curRecognizer;(!n||n&&8&n.state)&&(e.curRecognizer=null,n=null);for(var r=0;r<o.length;)i=o[r],2===e.stopped||n&&i!==n&&!i.canRecognizeWith(n)?i.reset():i.recognize(t),!n&&14&i.state&&(e.curRecognizer=i,n=i),r++}},e.get=function(t){if(t instanceof yu)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event===t)return e[i];return null},e.add=function(t){if(uu(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},e.remove=function(t){if(uu(t,"remove",this))return this;var e=this.get(t);if(t){var i=this.recognizers,o=Yc(i,e);-1!==o&&(i.splice(o,1),this.touchAction.update())}return this},e.on=function(t,e){if(void 0===t||void 0===e)return this;var i=this.handlers;return Tc(Hc(t),(function(t){i[t]=i[t]||[],i[t].push(e)})),this},e.off=function(t,e){if(void 0===t)return this;var i=this.handlers;return Tc(Hc(t),(function(t){e?i[t]&&i[t].splice(Yc(i[t],e),1):delete i[t]})),this},e.emit=function(t,e){this.options.domEvents&&function(t,e){var i=document.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var o=0;o<i.length;)i[o](e),o++}},e.destroy=function(){this.element&&Tu(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null},t}(),Pu={touchstart:1,touchmove:2,touchend:4,touchcancel:8},Du="touchstart",Bu="touchstart touchmove touchend touchcancel",Iu=function(t){function e(){var i,o=e.prototype;return o.evTarget=Du,o.evWin=Bu,(i=t.apply(this,arguments)||this).started=!1,i}return tc(e,t),e.prototype.handler=function(t){var e=Pu[t.type];if(1===e&&(this.started=!0),this.started){var i=zu.call(this,t,e);12&e&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:_c,srcEvent:t})}},e}(Uc);function zu(t,e){var i=Qc(t.touches),o=Qc(t.changedTouches);return 12&e&&(i=Jc(i.concat(o),"identifier",!0)),[i,o]}function Fu(t,e,i){var o="DEPRECATED METHOD: "+e+"\n"+i+" AT \n";return function(){var e=new Error("get-stack-trace"),i=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",n=window.console&&(window.console.warn||window.console.log);return n&&n.call(window.console,o,i),t.apply(this,arguments)}}var Nu=Fu((function(t,e,i){for(var o=Object.keys(e),n=0;n<o.length;)(!i||i&&void 0===t[o[n]])&&(t[o[n]]=e[o[n]]),n++;return t}),"extend","Use `assign`."),Au=Fu((function(t,e){return Nu(t,e,!0)}),"merge","Use `assign`.");function Ru(t,e,i){var o,n=e.prototype;(o=t.prototype=Object.create(n)).constructor=t,o._super=n,i&&oc(o,i)}function ju(t,e){return function(){return t.apply(e,arguments)}}var Lu=function(){var t=function(t,e){return void 0===e&&(e={}),new Mu(t,Jl({recognizers:Su.concat()},e))};return t.VERSION="2.0.17-rc",t.DIRECTION_ALL=30,t.DIRECTION_DOWN=Ec,t.DIRECTION_LEFT=2,t.DIRECTION_RIGHT=4,t.DIRECTION_UP=8,t.DIRECTION_HORIZONTAL=6,t.DIRECTION_VERTICAL=Oc,t.DIRECTION_NONE=1,t.DIRECTION_DOWN=Ec,t.INPUT_START=1,t.INPUT_MOVE=2,t.INPUT_END=4,t.INPUT_CANCEL=8,t.STATE_POSSIBLE=1,t.STATE_BEGAN=2,t.STATE_CHANGED=4,t.STATE_ENDED=8,t.STATE_RECOGNIZED=8,t.STATE_CANCELLED=16,t.STATE_FAILED=fu,t.Manager=Mu,t.Input=Uc,t.TouchAction=Dc,t.TouchInput=iu,t.MouseInput=au,t.PointerEventInput=Zc,t.TouchMouseInput=cu,t.SingleTouchInput=Iu,t.Recognizer=yu,t.AttrRecognizer=bu,t.Tap=mu,t.Pan=ku,t.Swipe=_u,t.Pinch=xu,t.Rotate=Eu,t.Press=Ou,t.on=Wc,t.off=Vc,t.each=Tc,t.merge=Au,t.extend=Nu,t.bindFn=ju,t.assign=oc,t.inherit=Ru,t.bindFn=ju,t.prefixed=dc,t.toArray=Qc,t.inArray=Yc,t.uniqueArray=Jc,t.splitStr=Hc,t.boolOrFn=Mc,t.hasParent=Bc,t.addEventListeners=Wc,t.removeEventListeners=Vc,t.defaults=oc({},Cu,{preset:Su}),t}();function Hu(t,e){var i=void 0!==Nh&&xr(t)||t["@@iterator"];if(!i){if(Hh(t)||(i=function(t,e){var i;if(!t)return;if("string"==typeof t)return Wu(t,e);var o=Lh(i=Object.prototype.toString.call(t)).call(i,8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return rr(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Wu(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,a=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){a=!0,r=t},f:function(){try{s||null==i.return||i.return()}finally{if(a)throw r}}}}function Wu(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}function Vu(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return qu(e.length?e:[Kh()])}function qu(t){var e=Bh(function(){for(var t=Uu(),e=t(" "),i=t(" "),o=t(" "),n=0;n<arguments.length;n++)(e-=t(n<0||arguments.length<=n?void 0:arguments[n]))<0&&(e+=1),(i-=t(n<0||arguments.length<=n?void 0:arguments[n]))<0&&(i+=1),(o-=t(n<0||arguments.length<=n?void 0:arguments[n]))<0&&(o+=1);return[e,i,o]}(t),3),i=e[0],o=e[1],n=e[2],r=1,s=function(){var t=2091639*i+2.3283064365386963e-10*r;return i=o,o=n,n=t-(r=0|t)};return s.uint32=function(){return 4294967296*s()},s.fract53=function(){return s()+11102230246251565e-32*(2097152*s()|0)},s.algorithm="Alea",s.seed=t,s.version="0.9",s}function Uu(){var t=4022871197;return function(e){for(var i=e.toString(),o=0;o<i.length;o++){var n=.02519603282416938*(t+=i.charCodeAt(o));n-=t=n>>>0,t=(n*=t)>>>0,t+=4294967296*(n-=t)}return 2.3283064365386963e-10*(t>>>0)}}Nh("DELETE");var Yu="undefined"!=typeof window?window.Hammer||Lu:function(){return{on:t=function(){},off:t,destroy:t,emit:t,get:function(){return{set:t}}};var t};function Xu(t){var e,i=this;this._cleanupQueue=[],this.active=!1,this._dom={container:t,overlay:document.createElement("div")},this._dom.overlay.classList.add("vis-overlay"),this._dom.container.appendChild(this._dom.overlay),this._cleanupQueue.push((function(){i._dom.overlay.parentNode.removeChild(i._dom.overlay)}));var o=Yu(this._dom.overlay);o.on("tap",si(e=this._onTapOverlay).call(e,this)),this._cleanupQueue.push((function(){o.destroy()}));var n=["tap","doubletap","press","pinch","pan","panstart","panmove","panend"];nd(n).call(n,(function(t){o.on(t,(function(t){t.srcEvent.stopPropagation()}))})),document&&document.body&&(this._onClick=function(e){(function(t,e){for(;t;){if(t===e)return!0;t=t.parentNode}return!1})(e.target,t)||i.deactivate()},document.body.addEventListener("click",this._onClick),this._cleanupQueue.push((function(){document.body.removeEventListener("click",i._onClick)}))),this._escListener=function(t){("key"in t?"Escape"===t.key:27===t.keyCode)&&i.deactivate()}}pi(Xu.prototype),Xu.current=null,Xu.prototype.destroy=function(){var t,e;this.deactivate();var i,o=Hu(ld(t=Od(e=this._cleanupQueue).call(e,0)).call(t));try{for(o.s();!(i=o.n()).done;){(0,i.value)()}}catch(t){o.e(t)}finally{o.f()}},Xu.prototype.activate=function(){Xu.current&&Xu.current.deactivate(),Xu.current=this,this.active=!0,this._dom.overlay.style.display="none",this._dom.container.classList.add("vis-active"),this.emit("change"),this.emit("activate"),document.body.addEventListener("keydown",this._escListener)},Xu.prototype.deactivate=function(){this.active=!1,this._dom.overlay.style.display="block",this._dom.container.classList.remove("vis-active"),document.body.removeEventListener("keydown",this._escListener),this.emit("change"),this.emit("deactivate")},Xu.prototype._onTapOverlay=function(t){this.activate(),t.srcEvent.stopPropagation()};var Gu=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,Ku=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,$u=/^rgb\( *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *\)$/i,Zu=/^rgba\( *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *([01]|0?\.\d+) *\)$/i;function Qu(t){if(t)for(;!0===t.hasChildNodes();){var e=t.firstChild;e&&(Qu(e),t.removeChild(e))}}function Ju(t){return t instanceof String||"string"==typeof t}function tf(t){return"object"===zh(t)&&null!==t}function ef(t,e,i,o){var n=!1;!0===o&&(n=null===e[i]&&void 0!==t[i]),n?delete t[i]:t[i]=e[i]}function of(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];for(var o in t)if(void 0!==e[o])if(null===e[o]||"object"!==zh(e[o]))ef(t,e,o,i);else{var n=t[o],r=e[o];tf(n)&&tf(r)&&of(n,r,i)}}function nf(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(Hh(i))throw new TypeError("Arrays are not supported by deepExtend");for(var n=0;n<t.length;n++){var r=t[n];if(Object.prototype.hasOwnProperty.call(i,r))if(i[r]&&i[r].constructor===Object)void 0===e[r]&&(e[r]={}),e[r].constructor===Object?sf(e[r],i[r],!1,o):ef(e,i,r,o);else{if(Hh(i[r]))throw new TypeError("Arrays are not supported by deepExtend");ef(e,i,r,o)}}return e}function rf(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(Hh(i))throw new TypeError("Arrays are not supported by deepExtend");for(var n in i)if(Object.prototype.hasOwnProperty.call(i,n)&&!Hd(t).call(t,n))if(i[n]&&i[n].constructor===Object)void 0===e[n]&&(e[n]={}),e[n].constructor===Object?sf(e[n],i[n]):ef(e,i,n,o);else if(Hh(i[n])){e[n]=[];for(var r=0;r<i[n].length;r++)e[n].push(i[n][r])}else ef(e,i,n,o);return e}function sf(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)||!0===i)if("object"===zh(e[n])&&null!==e[n]&&Yd(e[n])===Object.prototype)void 0===t[n]?t[n]=sf({},e[n],i):"object"===zh(t[n])&&null!==t[n]&&Yd(t[n])===Object.prototype?sf(t[n],e[n],i):ef(t,e,n,o);else if(Hh(e[n])){var r;t[n]=Lh(r=e[n]).call(r)}else ef(t,e,n,o);return t}function af(t,e){var i;return jh(i=[]).call(i,Fh(t),[e])}function hf(t){return Lh(t).call(t)}function df(t){return t.getBoundingClientRect().top}function lf(t,e){if(Hh(t))for(var i=t.length,o=0;o<i;o++)e(t[o],o,t);else for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(t[n],n,t)}function cf(t){var e;switch(t.length){case 3:case 4:return(e=Ku.exec(t))?{r:yl(e[1]+e[1],16),g:yl(e[2]+e[2],16),b:yl(e[3]+e[3],16)}:null;case 6:case 7:return(e=Gu.exec(t))?{r:yl(e[1],16),g:yl(e[2],16),b:yl(e[3],16)}:null;default:return null}}function uf(t,e){if(Hd(t).call(t,"rgba"))return t;if(Hd(t).call(t,"rgb")){var i=t.substr(Cl(t).call(t,"(")+1).replace(")","").split(",");return"rgba("+i[0]+","+i[1]+","+i[2]+","+e+")"}var o=cf(t);return null==o?t:"rgba("+o.r+","+o.g+","+o.b+","+e+")"}function ff(t,e,i){var o;return"#"+Lh(o=((1<<24)+(t<<16)+(e<<8)+i).toString(16)).call(o,1)}function pf(t,e){if(Ju(t)){var i=t;if(bf(i)){var o,n=Uh(o=i.substr(4).substr(0,i.length-5).split(",")).call(o,(function(t){return yl(t)}));i=ff(n[0],n[1],n[2])}if(!0===mf(i)){var r=function(t){var e=cf(t);if(!e)throw new TypeError("'".concat(t,"' is not a valid color."));return vf(e.r,e.g,e.b)}(i),s={h:r.h,s:.8*r.s,v:Math.min(1,1.02*r.v)},a={h:r.h,s:Math.min(1,1.25*r.s),v:.8*r.v},h=yf(a.h,a.s,a.v),d=yf(s.h,s.s,s.v);return{background:i,border:h,highlight:{background:d,border:h},hover:{background:d,border:h}}}return{background:i,border:i,highlight:{background:i,border:i},hover:{background:i,border:i}}}return e?{background:t.background||e.background,border:t.border||e.border,highlight:Ju(t.highlight)?{border:t.highlight,background:t.highlight}:{background:t.highlight&&t.highlight.background||e.highlight.background,border:t.highlight&&t.highlight.border||e.highlight.border},hover:Ju(t.hover)?{border:t.hover,background:t.hover}:{border:t.hover&&t.hover.border||e.hover.border,background:t.hover&&t.hover.background||e.hover.background}}:{background:t.background||void 0,border:t.border||void 0,highlight:Ju(t.highlight)?{border:t.highlight,background:t.highlight}:{background:t.highlight&&t.highlight.background||void 0,border:t.highlight&&t.highlight.border||void 0},hover:Ju(t.hover)?{border:t.hover,background:t.hover}:{border:t.hover&&t.hover.border||void 0,background:t.hover&&t.hover.background||void 0}}}function vf(t,e,i){t/=255,e/=255,i/=255;var o=Math.min(t,Math.min(e,i)),n=Math.max(t,Math.max(e,i));return o===n?{h:0,s:0,v:o}:{h:60*((t===o?3:i===o?1:5)-(t===o?e-i:i===o?t-e:i-t)/(n-o))/360,s:(n-o)/n,v:n}}function gf(t,e,i){var o,n,r,s=Math.floor(6*t),a=6*t-s,h=i*(1-e),d=i*(1-a*e),l=i*(1-(1-a)*e);switch(s%6){case 0:o=i,n=l,r=h;break;case 1:o=d,n=i,r=h;break;case 2:o=h,n=i,r=l;break;case 3:o=h,n=d,r=i;break;case 4:o=l,n=h,r=i;break;case 5:o=i,n=h,r=d}return{r:Math.floor(255*o),g:Math.floor(255*n),b:Math.floor(255*r)}}function yf(t,e,i){var o=gf(t,e,i);return ff(o.r,o.g,o.b)}function mf(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)}function bf(t){return $u.test(t)}function wf(t){return Zu.test(t)}function kf(t){if(null===t||"object"!==zh(t))return null;if(t instanceof Element)return t;var e=Bl(t);for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&"object"==zh(t[i])&&(e[i]=kf(t[i]));return e}function _f(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=function(t){return null!=t},r=function(t){return null!==t&&"object"===zh(t)},s=function(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0};if(!r(t))throw new Error("Parameter mergeTarget must be an object");if(!r(e))throw new Error("Parameter options must be an object");if(!n(i))throw new Error("Parameter option must have a value");if(!r(o))throw new Error("Parameter globalOptions must be an object");var a=function(t,e,i){r(t[i])||(t[i]={});var o=e[i],n=t[i];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(n[s]=o[s])},h=e[i],d=r(o)&&!s(o),l=d?o[i]:void 0,c=l?l.enabled:void 0;if(void 0!==h){if("boolean"==typeof h)return r(t[i])||(t[i]={}),void(t[i].enabled=h);if(null===h&&!r(t[i])){if(!n(l))return;t[i]=Bl(l)}if(r(h)){var u=!0;void 0!==h.enabled?u=h.enabled:void 0!==c&&(u=l.enabled),a(t,e,i),t[i].enabled=u}}}var xf={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};function Ef(t,e){var i;Hh(e)||(e=[e]);var o,n=Hu(t);try{for(n.s();!(o=n.n()).done;){var r=o.value;if(r){i=r[e[0]];for(var s=1;s<e.length;s++)i&&(i=i[e[s]]);if(void 0!==i)break}}}catch(t){n.e(t)}finally{n.f()}return i}var Of={black:"#000000",navy:"#000080",darkblue:"#00008B",mediumblue:"#0000CD",blue:"#0000FF",darkgreen:"#006400",green:"#008000",teal:"#008080",darkcyan:"#008B8B",deepskyblue:"#00BFFF",darkturquoise:"#00CED1",mediumspringgreen:"#00FA9A",lime:"#00FF00",springgreen:"#00FF7F",aqua:"#00FFFF",cyan:"#00FFFF",midnightblue:"#191970",dodgerblue:"#1E90FF",lightseagreen:"#20B2AA",forestgreen:"#228B22",seagreen:"#2E8B57",darkslategray:"#2F4F4F",limegreen:"#32CD32",mediumseagreen:"#3CB371",turquoise:"#40E0D0",royalblue:"#4169E1",steelblue:"#4682B4",darkslateblue:"#483D8B",mediumturquoise:"#48D1CC",indigo:"#4B0082",darkolivegreen:"#556B2F",cadetblue:"#5F9EA0",cornflowerblue:"#6495ED",mediumaquamarine:"#66CDAA",dimgray:"#696969",slateblue:"#6A5ACD",olivedrab:"#6B8E23",slategray:"#708090",lightslategray:"#778899",mediumslateblue:"#7B68EE",lawngreen:"#7CFC00",chartreuse:"#7FFF00",aquamarine:"#7FFFD4",maroon:"#800000",purple:"#800080",olive:"#808000",gray:"#808080",skyblue:"#87CEEB",lightskyblue:"#87CEFA",blueviolet:"#8A2BE2",darkred:"#8B0000",darkmagenta:"#8B008B",saddlebrown:"#8B4513",darkseagreen:"#8FBC8F",lightgreen:"#90EE90",mediumpurple:"#9370D8",darkviolet:"#9400D3",palegreen:"#98FB98",darkorchid:"#9932CC",yellowgreen:"#9ACD32",sienna:"#A0522D",brown:"#A52A2A",darkgray:"#A9A9A9",lightblue:"#ADD8E6",greenyellow:"#ADFF2F",paleturquoise:"#AFEEEE",lightsteelblue:"#B0C4DE",powderblue:"#B0E0E6",firebrick:"#B22222",darkgoldenrod:"#B8860B",mediumorchid:"#BA55D3",rosybrown:"#BC8F8F",darkkhaki:"#BDB76B",silver:"#C0C0C0",mediumvioletred:"#C71585",indianred:"#CD5C5C",peru:"#CD853F",chocolate:"#D2691E",tan:"#D2B48C",lightgrey:"#D3D3D3",palevioletred:"#D87093",thistle:"#D8BFD8",orchid:"#DA70D6",goldenrod:"#DAA520",crimson:"#DC143C",gainsboro:"#DCDCDC",plum:"#DDA0DD",burlywood:"#DEB887",lightcyan:"#E0FFFF",lavender:"#E6E6FA",darksalmon:"#E9967A",violet:"#EE82EE",palegoldenrod:"#EEE8AA",lightcoral:"#F08080",khaki:"#F0E68C",aliceblue:"#F0F8FF",honeydew:"#F0FFF0",azure:"#F0FFFF",sandybrown:"#F4A460",wheat:"#F5DEB3",beige:"#F5F5DC",whitesmoke:"#F5F5F5",mintcream:"#F5FFFA",ghostwhite:"#F8F8FF",salmon:"#FA8072",antiquewhite:"#FAEBD7",linen:"#FAF0E6",lightgoldenrodyellow:"#FAFAD2",oldlace:"#FDF5E6",red:"#FF0000",fuchsia:"#FF00FF",magenta:"#FF00FF",deeppink:"#FF1493",orangered:"#FF4500",tomato:"#FF6347",hotpink:"#FF69B4",coral:"#FF7F50",darkorange:"#FF8C00",lightsalmon:"#FFA07A",orange:"#FFA500",lightpink:"#FFB6C1",pink:"#FFC0CB",gold:"#FFD700",peachpuff:"#FFDAB9",navajowhite:"#FFDEAD",moccasin:"#FFE4B5",bisque:"#FFE4C4",mistyrose:"#FFE4E1",blanchedalmond:"#FFEBCD",papayawhip:"#FFEFD5",lavenderblush:"#FFF0F5",seashell:"#FFF5EE",cornsilk:"#FFF8DC",lemonchiffon:"#FFFACD",floralwhite:"#FFFAF0",snow:"#FFFAFA",yellow:"#FFFF00",lightyellow:"#FFFFE0",ivory:"#FFFFF0",white:"#FFFFFF"},Cf=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;Ra(this,t),this.pixelRatio=e,this.generated=!1,this.centerCoordinates={x:144.5,y:144.5},this.r=289*.49,this.color={r:255,g:255,b:255,a:1},this.hueCircle=void 0,this.initialColor={r:255,g:255,b:255,a:1},this.previousColor=void 0,this.applied=!1,this.updateCallback=function(){},this.closeCallback=function(){},this._create()}return Ha(t,[{key:"insertTo",value:function(t){void 0!==this.hammer&&(this.hammer.destroy(),this.hammer=void 0),this.container=t,this.container.appendChild(this.frame),this._bindHammer(),this._setSize()}},{key:"setUpdateCallback",value:function(t){if("function"!=typeof t)throw new Error("Function attempted to set as colorPicker update callback is not a function.");this.updateCallback=t}},{key:"setCloseCallback",value:function(t){if("function"!=typeof t)throw new Error("Function attempted to set as colorPicker closing callback is not a function.");this.closeCallback=t}},{key:"_isColorString",value:function(t){if("string"==typeof t)return Of[t]}},{key:"setColor",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if("none"!==t){var i,o=this._isColorString(t);if(void 0!==o&&(t=o),!0===Ju(t)){if(!0===bf(t)){var n=t.substr(4).substr(0,t.length-5).split(",");i={r:n[0],g:n[1],b:n[2],a:1}}else if(!0===wf(t)){var r=t.substr(5).substr(0,t.length-6).split(",");i={r:r[0],g:r[1],b:r[2],a:r[3]}}else if(!0===mf(t)){var s=cf(t);i={r:s.r,g:s.g,b:s.b,a:1}}}else if(t instanceof Object&&void 0!==t.r&&void 0!==t.g&&void 0!==t.b){var a=void 0!==t.a?t.a:"1.0";i={r:t.r,g:t.g,b:t.b,a:a}}if(void 0===i)throw new Error("Unknown color passed to the colorPicker. Supported are strings: rgb, hex, rgba. Object: rgb ({r:r,g:g,b:b,[a:a]}). Supplied: "+Wl(t));this._setColor(i,e)}}},{key:"show",value:function(){void 0!==this.closeCallback&&(this.closeCallback(),this.closeCallback=void 0),this.applied=!1,this.frame.style.display="block",this._generateHueCircle()}},{key:"_hide",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];!0===e&&(this.previousColor=Ke({},this.color)),!0===this.applied&&this.updateCallback(this.initialColor),this.frame.style.display="none",Yl((function(){void 0!==t.closeCallback&&(t.closeCallback(),t.closeCallback=void 0)}),0)}},{key:"_save",value:function(){this.updateCallback(this.color),this.applied=!1,this._hide()}},{key:"_apply",value:function(){this.applied=!0,this.updateCallback(this.color),this._updatePicker(this.color)}},{key:"_loadLast",value:function(){void 0!==this.previousColor?this.setColor(this.previousColor,!1):alert("There is no last color to load...")}},{key:"_setColor",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];!0===e&&(this.initialColor=Ke({},t)),this.color=t;var i=vf(t.r,t.g,t.b),o=2*Math.PI,n=this.r*i.s,r=this.centerCoordinates.x+n*Math.sin(o*i.h),s=this.centerCoordinates.y+n*Math.cos(o*i.h);this.colorPickerSelector.style.left=r-.5*this.colorPickerSelector.clientWidth+"px",this.colorPickerSelector.style.top=s-.5*this.colorPickerSelector.clientHeight+"px",this._updatePicker(t)}},{key:"_setOpacity",value:function(t){this.color.a=t/100,this._updatePicker(this.color)}},{key:"_setBrightness",value:function(t){var e=vf(this.color.r,this.color.g,this.color.b);e.v=t/100;var i=gf(e.h,e.s,e.v);i.a=this.color.a,this.color=i,this._updatePicker()}},{key:"_updatePicker",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.color,e=vf(t.r,t.g,t.b),i=this.colorPickerCanvas.getContext("2d");void 0===this.pixelRation&&(this.pixelRatio=(window.devicePixelRatio||1)/(i.webkitBackingStorePixelRatio||i.mozBackingStorePixelRatio||i.msBackingStorePixelRatio||i.oBackingStorePixelRatio||i.backingStorePixelRatio||1)),i.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0);var o=this.colorPickerCanvas.clientWidth,n=this.colorPickerCanvas.clientHeight;i.clearRect(0,0,o,n),i.putImageData(this.hueCircle,0,0),i.fillStyle="rgba(0,0,0,"+(1-e.v)+")",i.circle(this.centerCoordinates.x,this.centerCoordinates.y,this.r),Ql(i).call(i),this.brightnessRange.value=100*e.v,this.opacityRange.value=100*t.a,this.initialColorDiv.style.backgroundColor="rgba("+this.initialColor.r+","+this.initialColor.g+","+this.initialColor.b+","+this.initialColor.a+")",this.newColorDiv.style.backgroundColor="rgba("+this.color.r+","+this.color.g+","+this.color.b+","+this.color.a+")"}},{key:"_setSize",value:function(){this.colorPickerCanvas.style.width="100%",this.colorPickerCanvas.style.height="100%",this.colorPickerCanvas.width=289*this.pixelRatio,this.colorPickerCanvas.height=289*this.pixelRatio}},{key:"_create",value:function(){var t,e,i,o;if(this.frame=document.createElement("div"),this.frame.className="vis-color-picker",this.colorPickerDiv=document.createElement("div"),this.colorPickerSelector=document.createElement("div"),this.colorPickerSelector.className="vis-selector",this.colorPickerDiv.appendChild(this.colorPickerSelector),this.colorPickerCanvas=document.createElement("canvas"),this.colorPickerDiv.appendChild(this.colorPickerCanvas),this.colorPickerCanvas.getContext){var n=this.colorPickerCanvas.getContext("2d");this.pixelRatio=(window.devicePixelRatio||1)/(n.webkitBackingStorePixelRatio||n.mozBackingStorePixelRatio||n.msBackingStorePixelRatio||n.oBackingStorePixelRatio||n.backingStorePixelRatio||1),this.colorPickerCanvas.getContext("2d").setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0)}else{var r=document.createElement("DIV");r.style.color="red",r.style.fontWeight="bold",r.style.padding="10px",r.innerText="Error: your browser does not support HTML canvas",this.colorPickerCanvas.appendChild(r)}this.colorPickerDiv.className="vis-color",this.opacityDiv=document.createElement("div"),this.opacityDiv.className="vis-opacity",this.brightnessDiv=document.createElement("div"),this.brightnessDiv.className="vis-brightness",this.arrowDiv=document.createElement("div"),this.arrowDiv.className="vis-arrow",this.opacityRange=document.createElement("input");try{this.opacityRange.type="range",this.opacityRange.min="0",this.opacityRange.max="100"}catch(t){}this.opacityRange.value="100",this.opacityRange.className="vis-range",this.brightnessRange=document.createElement("input");try{this.brightnessRange.type="range",this.brightnessRange.min="0",this.brightnessRange.max="100"}catch(t){}this.brightnessRange.value="100",this.brightnessRange.className="vis-range",this.opacityDiv.appendChild(this.opacityRange),this.brightnessDiv.appendChild(this.brightnessRange);var s=this;this.opacityRange.onchange=function(){s._setOpacity(this.value)},this.opacityRange.oninput=function(){s._setOpacity(this.value)},this.brightnessRange.onchange=function(){s._setBrightness(this.value)},this.brightnessRange.oninput=function(){s._setBrightness(this.value)},this.brightnessLabel=document.createElement("div"),this.brightnessLabel.className="vis-label vis-brightness",this.brightnessLabel.innerText="brightness:",this.opacityLabel=document.createElement("div"),this.opacityLabel.className="vis-label vis-opacity",this.opacityLabel.innerText="opacity:",this.newColorDiv=document.createElement("div"),this.newColorDiv.className="vis-new-color",this.newColorDiv.innerText="new",this.initialColorDiv=document.createElement("div"),this.initialColorDiv.className="vis-initial-color",this.initialColorDiv.innerText="initial",this.cancelButton=document.createElement("div"),this.cancelButton.className="vis-button vis-cancel",this.cancelButton.innerText="cancel",this.cancelButton.onclick=si(t=this._hide).call(t,this,!1),this.applyButton=document.createElement("div"),this.applyButton.className="vis-button vis-apply",this.applyButton.innerText="apply",this.applyButton.onclick=si(e=this._apply).call(e,this),this.saveButton=document.createElement("div"),this.saveButton.className="vis-button vis-save",this.saveButton.innerText="save",this.saveButton.onclick=si(i=this._save).call(i,this),this.loadButton=document.createElement("div"),this.loadButton.className="vis-button vis-load",this.loadButton.innerText="load last",this.loadButton.onclick=si(o=this._loadLast).call(o,this),this.frame.appendChild(this.colorPickerDiv),this.frame.appendChild(this.arrowDiv),this.frame.appendChild(this.brightnessLabel),this.frame.appendChild(this.brightnessDiv),this.frame.appendChild(this.opacityLabel),this.frame.appendChild(this.opacityDiv),this.frame.appendChild(this.newColorDiv),this.frame.appendChild(this.initialColorDiv),this.frame.appendChild(this.cancelButton),this.frame.appendChild(this.applyButton),this.frame.appendChild(this.saveButton),this.frame.appendChild(this.loadButton)}},{key:"_bindHammer",value:function(){var t=this;this.drag={},this.pinch={},this.hammer=new Yu(this.colorPickerCanvas),this.hammer.get("pinch").set({enable:!0}),this.hammer.on("hammer.input",(function(e){e.isFirst&&t._moveSelector(e)})),this.hammer.on("tap",(function(e){t._moveSelector(e)})),this.hammer.on("panstart",(function(e){t._moveSelector(e)})),this.hammer.on("panmove",(function(e){t._moveSelector(e)})),this.hammer.on("panend",(function(e){t._moveSelector(e)}))}},{key:"_generateHueCircle",value:function(){if(!1===this.generated){var t=this.colorPickerCanvas.getContext("2d");void 0===this.pixelRation&&(this.pixelRatio=(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)),t.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0);var e,i,o,n,r=this.colorPickerCanvas.clientWidth,s=this.colorPickerCanvas.clientHeight;t.clearRect(0,0,r,s),this.centerCoordinates={x:.5*r,y:.5*s},this.r=.49*r;var a,h=2*Math.PI/360,d=1/this.r;for(o=0;o<360;o++)for(n=0;n<this.r;n++)e=this.centerCoordinates.x+n*Math.sin(h*o),i=this.centerCoordinates.y+n*Math.cos(h*o),a=gf(.002777777777777778*o,n*d,1),t.fillStyle="rgb("+a.r+","+a.g+","+a.b+")",t.fillRect(e-.5,i-.5,2,2);t.strokeStyle="rgba(0,0,0,1)",t.circle(this.centerCoordinates.x,this.centerCoordinates.y,this.r),t.stroke(),this.hueCircle=t.getImageData(0,0,r,s)}this.generated=!0}},{key:"_moveSelector",value:function(t){var e=this.colorPickerDiv.getBoundingClientRect(),i=t.center.x-e.left,o=t.center.y-e.top,n=.5*this.colorPickerDiv.clientHeight,r=.5*this.colorPickerDiv.clientWidth,s=i-r,a=o-n,h=Math.atan2(s,a),d=.98*Math.min(Math.sqrt(s*s+a*a),r),l=Math.cos(h)*d+n,c=Math.sin(h)*d+r;this.colorPickerSelector.style.top=l-.5*this.colorPickerSelector.clientHeight+"px",this.colorPickerSelector.style.left=c-.5*this.colorPickerSelector.clientWidth+"px";var u=h/(2*Math.PI);u=u<0?u+1:u;var f=d/this.r,p=vf(this.color.r,this.color.g,this.color.b);p.h=u,p.s=f;var v=gf(p.h,p.s,p.v);v.a=this.color.a,this.color=v,this.initialColorDiv.style.backgroundColor="rgba("+this.initialColor.r+","+this.initialColor.g+","+this.initialColor.b+","+this.initialColor.a+")",this.newColorDiv.style.backgroundColor="rgba("+this.color.r+","+this.color.g+","+this.color.b+","+this.color.a+")"}}]),t}();function Sf(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];if(e.length<1)throw new TypeError("Invalid arguments.");if(1===e.length)return document.createTextNode(e[0]);var o=document.createElement(e[0]);return o.appendChild(Sf.apply(void 0,Fh(Lh(e).call(e,1)))),o}var Tf,Mf=!1,Pf="background: #FFeeee; color: #dd0000",Df=Xu,Bf=function(){function t(e,i,o){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){return!1};Ra(this,t),this.parent=e,this.changedOptions=[],this.container=i,this.allowCreation=!1,this.hideOption=r,this.options={},this.initialized=!1,this.popupCounter=0,this.defaultOptions={enabled:!1,filter:!0,container:void 0,showButton:!0},Ke(this.options,this.defaultOptions),this.configureOptions=o,this.moduleOptions={},this.domElements=[],this.popupDiv={},this.popupLimit=5,this.popupHistory={},this.colorPicker=new Cf(n),this.wrapper=void 0}return Ha(t,[{key:"setOptions",value:function(t){if(void 0!==t){this.popupHistory={},this._removePopup();var e=!0;if("string"==typeof t)this.options.filter=t;else if(Hh(t))this.options.filter=t.join();else if("object"===zh(t)){if(null==t)throw new TypeError("options cannot be null");void 0!==t.container&&(this.options.container=t.container),void 0!==$d(t)&&(this.options.filter=$d(t)),void 0!==t.showButton&&(this.options.showButton=t.showButton),void 0!==t.enabled&&(e=t.enabled)}else"boolean"==typeof t?(this.options.filter=!0,e=t):"function"==typeof t&&(this.options.filter=t,e=!0);!1===$d(this.options)&&(e=!1),this.options.enabled=e}this._clean()}},{key:"setModuleOptions",value:function(t){this.moduleOptions=t,!0===this.options.enabled&&(this._clean(),void 0!==this.options.container&&(this.container=this.options.container),this._create())}},{key:"_create",value:function(){this._clean(),this.changedOptions=[];var t=$d(this.options),e=0,i=!1;for(var o in this.configureOptions)Object.prototype.hasOwnProperty.call(this.configureOptions,o)&&(this.allowCreation=!1,i=!1,"function"==typeof t?i=(i=t(o,[]))||this._handleObject(this.configureOptions[o],[o],!0):!0!==t&&-1===Cl(t).call(t,o)||(i=!0),!1!==i&&(this.allowCreation=!0,e>0&&this._makeItem([]),this._makeHeader(o),this._handleObject(this.configureOptions[o],[o])),e++);this._makeButton(),this._push()}},{key:"_push",value:function(){this.wrapper=document.createElement("div"),this.wrapper.className="vis-configuration-wrapper",this.container.appendChild(this.wrapper);for(var t=0;t<this.domElements.length;t++)this.wrapper.appendChild(this.domElements[t]);this._showPopupIfNeeded()}},{key:"_clean",value:function(){for(var t=0;t<this.domElements.length;t++)this.wrapper.removeChild(this.domElements[t]);void 0!==this.wrapper&&(this.container.removeChild(this.wrapper),this.wrapper=void 0),this.domElements=[],this._removePopup()}},{key:"_getValue",value:function(t){for(var e=this.moduleOptions,i=0;i<t.length;i++){if(void 0===e[t[i]]){e=void 0;break}e=e[t[i]]}return e}},{key:"_makeItem",value:function(t){if(!0===this.allowCreation){var e=document.createElement("div");e.className="vis-configuration vis-config-item vis-config-s"+t.length;for(var i=arguments.length,o=new Array(i>1?i-1:0),n=1;n<i;n++)o[n-1]=arguments[n];return nd(o).call(o,(function(t){e.appendChild(t)})),this.domElements.push(e),this.domElements.length}return 0}},{key:"_makeHeader",value:function(t){var e=document.createElement("div");e.className="vis-configuration vis-config-header",e.innerText=t,this._makeItem([],e)}},{key:"_makeLabel",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=document.createElement("div");if(o.className="vis-configuration vis-config-label vis-config-s"+e.length,!0===i){for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(Sf("i","b",t))}else o.innerText=t+":";return o}},{key:"_makeDropdown",value:function(t,e,i){var o=document.createElement("select");o.className="vis-configuration vis-config-select";var n=0;void 0!==e&&-1!==Cl(t).call(t,e)&&(n=Cl(t).call(t,e));for(var r=0;r<t.length;r++){var s=document.createElement("option");s.value=t[r],r===n&&(s.selected="selected"),s.innerText=t[r],o.appendChild(s)}var a=this;o.onchange=function(){a._update(this.value,i)};var h=this._makeLabel(i[i.length-1],i);this._makeItem(i,h,o)}},{key:"_makeRange",value:function(t,e,i){var o=t[0],n=t[1],r=t[2],s=t[3],a=document.createElement("input");a.className="vis-configuration vis-config-range";try{a.type="range",a.min=n,a.max=r}catch(t){}a.step=s;var h="",d=0;if(void 0!==e){var l=1.2;e<0&&e*l<n?(a.min=Math.ceil(e*l),d=a.min,h="range increased"):e/l<n&&(a.min=Math.ceil(e/l),d=a.min,h="range increased"),e*l>r&&1!==r&&(a.max=Math.ceil(e*l),d=a.max,h="range increased"),a.value=e}else a.value=o;var c=document.createElement("input");c.className="vis-configuration vis-config-rangeinput",c.value=a.value;var u=this;a.onchange=function(){c.value=this.value,u._update(Number(this.value),i)},a.oninput=function(){c.value=this.value};var f=this._makeLabel(i[i.length-1],i),p=this._makeItem(i,f,a,c);""!==h&&this.popupHistory[p]!==d&&(this.popupHistory[p]=d,this._setupPopup(h,p))}},{key:"_makeButton",value:function(){var t=this;if(!0===this.options.showButton){var e=document.createElement("div");e.className="vis-configuration vis-config-button",e.innerText="generate options",e.onclick=function(){t._printOptions()},e.onmouseover=function(){e.className="vis-configuration vis-config-button hover"},e.onmouseout=function(){e.className="vis-configuration vis-config-button"},this.optionsContainer=document.createElement("div"),this.optionsContainer.className="vis-configuration vis-config-option-container",this.domElements.push(this.optionsContainer),this.domElements.push(e)}}},{key:"_setupPopup",value:function(t,e){var i=this;if(!0===this.initialized&&!0===this.allowCreation&&this.popupCounter<this.popupLimit){var o=document.createElement("div");o.id="vis-configuration-popup",o.className="vis-configuration-popup",o.innerText=t,o.onclick=function(){i._removePopup()},this.popupCounter+=1,this.popupDiv={html:o,index:e}}}},{key:"_removePopup",value:function(){void 0!==this.popupDiv.html&&(this.popupDiv.html.parentNode.removeChild(this.popupDiv.html),clearTimeout(this.popupDiv.hideTimeout),clearTimeout(this.popupDiv.deleteTimeout),this.popupDiv={})}},{key:"_showPopupIfNeeded",value:function(){var t=this;if(void 0!==this.popupDiv.html){var e=this.domElements[this.popupDiv.index].getBoundingClientRect();this.popupDiv.html.style.left=e.left+"px",this.popupDiv.html.style.top=e.top-30+"px",document.body.appendChild(this.popupDiv.html),this.popupDiv.hideTimeout=Yl((function(){t.popupDiv.html.style.opacity=0}),1500),this.popupDiv.deleteTimeout=Yl((function(){t._removePopup()}),1800)}}},{key:"_makeCheckbox",value:function(t,e,i){var o=document.createElement("input");o.type="checkbox",o.className="vis-configuration vis-config-checkbox",o.checked=t,void 0!==e&&(o.checked=e,e!==t&&("object"===zh(t)?e!==t.enabled&&this.changedOptions.push({path:i,value:e}):this.changedOptions.push({path:i,value:e})));var n=this;o.onchange=function(){n._update(this.checked,i)};var r=this._makeLabel(i[i.length-1],i);this._makeItem(i,r,o)}},{key:"_makeTextInput",value:function(t,e,i){var o=document.createElement("input");o.type="text",o.className="vis-configuration vis-config-text",o.value=e,e!==t&&this.changedOptions.push({path:i,value:e});var n=this;o.onchange=function(){n._update(this.value,i)};var r=this._makeLabel(i[i.length-1],i);this._makeItem(i,r,o)}},{key:"_makeColorField",value:function(t,e,i){var o=this,n=t[1],r=document.createElement("div");"none"!==(e=void 0===e?n:e)?(r.className="vis-configuration vis-config-colorBlock",r.style.backgroundColor=e):r.className="vis-configuration vis-config-colorBlock none",e=void 0===e?n:e,r.onclick=function(){o._showColorPicker(e,r,i)};var s=this._makeLabel(i[i.length-1],i);this._makeItem(i,s,r)}},{key:"_showColorPicker",value:function(t,e,i){var o=this;e.onclick=function(){},this.colorPicker.insertTo(e),this.colorPicker.show(),this.colorPicker.setColor(t),this.colorPicker.setUpdateCallback((function(t){var n="rgba("+t.r+","+t.g+","+t.b+","+t.a+")";e.style.backgroundColor=n,o._update(n,i)})),this.colorPicker.setCloseCallback((function(){e.onclick=function(){o._showColorPicker(t,e,i)}}))}},{key:"_handleObject",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=!1,n=$d(this.options),r=!1;for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){o=!0;var a=t[s],h=af(e,s);if("function"==typeof n&&!1===(o=n(s,e))&&!Hh(a)&&"string"!=typeof a&&"boolean"!=typeof a&&a instanceof Object&&(this.allowCreation=!1,o=this._handleObject(a,h,!0),this.allowCreation=!1===i),!1!==o){r=!0;var d=this._getValue(h);if(Hh(a))this._handleArray(a,d,h);else if("string"==typeof a)this._makeTextInput(a,d,h);else if("boolean"==typeof a)this._makeCheckbox(a,d,h);else if(a instanceof Object){if(!this.hideOption(e,s,this.moduleOptions))if(void 0!==a.enabled){var l=af(h,"enabled"),c=this._getValue(l);if(!0===c){var u=this._makeLabel(s,h,!0);this._makeItem(h,u),r=this._handleObject(a,h)||r}else this._makeCheckbox(a,c,h)}else{var f=this._makeLabel(s,h,!0);this._makeItem(h,f),r=this._handleObject(a,h)||r}}else console.error("dont know how to handle",a,s,h)}}return r}},{key:"_handleArray",value:function(t,e,i){"string"==typeof t[0]&&"color"===t[0]?(this._makeColorField(t,e,i),t[1]!==e&&this.changedOptions.push({path:i,value:e})):"string"==typeof t[0]?(this._makeDropdown(t,e,i),t[0]!==e&&this.changedOptions.push({path:i,value:e})):"number"==typeof t[0]&&(this._makeRange(t,e,i),t[0]!==e&&this.changedOptions.push({path:i,value:Number(e)}))}},{key:"_update",value:function(t,e){var i=this._constructOptions(t,e);this.parent.body&&this.parent.body.emitter&&this.parent.body.emitter.emit&&this.parent.body.emitter.emit("configChange",i),this.initialized=!0,this.parent.setOptions(i)}},{key:"_constructOptions",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=i;t="false"!==(t="true"===t||t)&&t;for(var n=0;n<e.length;n++)"global"!==e[n]&&(void 0===o[e[n]]&&(o[e[n]]={}),n!==e.length-1?o=o[e[n]]:o[e[n]]=t);return i}},{key:"_printOptions",value:function(){for(var t=this.getOptions();this.optionsContainer.firstChild;)this.optionsContainer.removeChild(this.optionsContainer.firstChild);this.optionsContainer.appendChild(Sf("pre","const options = "+Wl(t,null,2)))}},{key:"getOptions",value:function(){for(var t={},e=0;e<this.changedOptions.length;e++)this._constructOptions(this.changedOptions[e].value,this.changedOptions[e].path,t);return t}}]),t}(),If=Yu,zf=function(){function t(e,i){Ra(this,t),this.container=e,this.overflowMethod=i||"cap",this.x=0,this.y=0,this.padding=5,this.hidden=!1,this.frame=document.createElement("div"),this.frame.className="vis-tooltip",this.container.appendChild(this.frame)}return Ha(t,[{key:"setPosition",value:function(t,e){this.x=yl(t),this.y=yl(e)}},{key:"setText",value:function(t){if(t instanceof Element){for(;this.frame.firstChild;)this.frame.removeChild(this.frame.firstChild);this.frame.appendChild(t)}else this.frame.innerText=t}},{key:"show",value:function(t){if(void 0===t&&(t=!0),!0===t){var e=this.frame.clientHeight,i=this.frame.clientWidth,o=this.frame.parentNode.clientHeight,n=this.frame.parentNode.clientWidth,r=0,s=0;if("flip"==this.overflowMethod){var a=!1,h=!0;this.y-e<this.padding&&(h=!1),this.x+i>n-this.padding&&(a=!0),r=a?this.x-i:this.x,s=h?this.y-e:this.y}else(s=this.y-e)+e+this.padding>o&&(s=o-e-this.padding),s<this.padding&&(s=this.padding),(r=this.x)+i+this.padding>n&&(r=n-i-this.padding),r<this.padding&&(r=this.padding);this.frame.style.left=r+"px",this.frame.style.top=s+"px",this.frame.style.visibility="visible",this.hidden=!1}else this.hide()}},{key:"hide",value:function(){this.hidden=!0,this.frame.style.left="0",this.frame.style.top="0",this.frame.style.visibility="hidden"}},{key:"destroy",value:function(){this.frame.parentNode.removeChild(this.frame)}}]),t}(),Ff=Pf,Nf=function(){function t(){Ra(this,t)}return Ha(t,null,[{key:"validate",value:function(e,i,o){Mf=!1,Tf=i;var n=i;return void 0!==o&&(n=i[o]),t.parse(e,n,[]),Mf}},{key:"parse",value:function(e,i,o){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.check(n,e,i,o)}},{key:"check",value:function(e,i,o,n){if(void 0!==o[e]||void 0!==o.__any__){var r=e,s=!0;void 0===o[e]&&void 0!==o.__any__&&(r="__any__",s="object"===t.getType(i[e]));var a=o[r];s&&void 0!==a.__type__&&(a=a.__type__),t.checkFields(e,i,o,r,a,n)}else t.getSuggestion(e,o,n)}},{key:"checkFields",value:function(e,i,o,n,r,s){var a=function(i){console.error("%c"+i+t.printLocation(s,e),Pf)},h=t.getType(i[e]),d=r[h];void 0!==d?"array"===t.getType(d)&&-1===Cl(d).call(d,i[e])?(a('Invalid option detected in "'+e+'". Allowed values are:'+t.print(d)+' not "'+i[e]+'". '),Mf=!0):"object"===h&&"__any__"!==n&&(s=af(s,e),t.parse(i[e],o[n],s)):void 0===r.any&&(a('Invalid type received for "'+e+'". Expected: '+t.print(Gh(r))+". Received ["+h+'] "'+i[e]+'"'),Mf=!0)}},{key:"getType",value:function(t){var e=zh(t);return"object"===e?null===t?"null":t instanceof Boolean?"boolean":t instanceof Number?"number":t instanceof String?"string":Hh(t)?"array":t instanceof Date?"date":void 0!==t.nodeType?"dom":!0===t._isAMomentObject?"moment":"object":"number"===e?"number":"boolean"===e?"boolean":"string"===e?"string":void 0===e?"undefined":e}},{key:"getSuggestion",value:function(e,i,o){var n,r=t.findInOptions(e,i,o,!1),s=t.findInOptions(e,Tf,[],!0);n=void 0!==r.indexMatch?" in "+t.printLocation(r.path,e,"")+'Perhaps it was incomplete? Did you mean: "'+r.indexMatch+'"?\n\n':s.distance<=4&&r.distance>s.distance?" in "+t.printLocation(r.path,e,"")+"Perhaps it was misplaced? Matching option found at: "+t.printLocation(s.path,s.closestMatch,""):r.distance<=8?'. Did you mean "'+r.closestMatch+'"?'+t.printLocation(r.path,e):". Did you mean one of these: "+t.print(Gh(i))+t.printLocation(o,e),console.error('%cUnknown option detected: "'+e+'"'+n,Pf),Mf=!0}},{key:"findInOptions",value:function(e,i,o){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=1e9,s="",a=[],h=e.toLowerCase(),d=void 0;for(var l in i){var c=void 0;if(void 0!==i[l].__type__&&!0===n){var u=t.findInOptions(e,i[l],af(o,l));r>u.distance&&(s=u.closestMatch,a=u.path,r=u.distance,d=u.indexMatch)}else{var f;-1!==Cl(f=l.toLowerCase()).call(f,h)&&(d=l),r>(c=t.levenshteinDistance(e,l))&&(s=l,a=hf(o),r=c)}}return{closestMatch:s,path:a,distance:r,indexMatch:d}}},{key:"printLocation",value:function(t,e){for(var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Problem value found at: \n",o="\n\n"+i+"options = {\n",n=0;n<t.length;n++){for(var r=0;r<n+1;r++)o+="  ";o+=t[n]+": {\n"}for(var s=0;s<t.length+1;s++)o+="  ";o+=e+"\n";for(var a=0;a<t.length+1;a++){for(var h=0;h<t.length-a;h++)o+="  ";o+="}\n"}return o+"\n\n"}},{key:"print",value:function(t){return Wl(t).replace(/(")|(\[)|(\])|(,"__type__")/g,"").replace(/(,)/g,", ")}},{key:"levenshteinDistance",value:function(t,e){if(0===t.length)return e.length;if(0===e.length)return t.length;var i,o,n=[];for(i=0;i<=e.length;i++)n[i]=[i];for(o=0;o<=t.length;o++)n[0][o]=o;for(i=1;i<=e.length;i++)for(o=1;o<=t.length;o++)e.charAt(i-1)==t.charAt(o-1)?n[i][o]=n[i-1][o-1]:n[i][o]=Math.min(n[i-1][o-1]+1,Math.min(n[i][o-1]+1,n[i-1][o]+1));return n[e.length][t.length]}}]),t}();function Af(t){return Uf=t,function(){var t={};Yf=0,void(Xf=Uf.charAt(0)),np(),"strict"===Gf&&(t.strict=!0,np());"graph"!==Gf&&"digraph"!==Gf||(t.type=Gf,np());Kf===Wf&&(t.id=Gf,np());if("{"!=Gf)throw lp("Angle bracket { expected");if(np(),rp(t),"}"!=Gf)throw lp("Angle bracket } expected");if(np(),""!==Gf)throw lp("End of file expected");return np(),delete t.node,delete t.edge,delete t.graph,t}()}var Rf={fontsize:"font.size",fontcolor:"font.color",labelfontcolor:"font.color",fontname:"font.face",color:["color.border","color.background"],fillcolor:"color.background",tooltip:"title",labeltooltip:"title"},jf=Bl(Rf);jf.color="color.color",jf.style="dashes";var Lf=0,Hf=1,Wf=2,Vf=3,qf={"{":!0,"}":!0,"[":!0,"]":!0,";":!0,"=":!0,",":!0,"->":!0,"--":!0},Uf="",Yf=0,Xf="",Gf="",Kf=Lf;function $f(){Yf++,Xf=Uf.charAt(Yf)}function Zf(){return Uf.charAt(Yf+1)}function Qf(t){var e=t.charCodeAt(0);return e<47?35===e||46===e:e<59?e>47:e<91?e>64:e<96?95===e:e<123&&e>96}function Jf(t,e){if(t||(t={}),e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function tp(t,e,i){for(var o=e.split("."),n=t;o.length;){var r=o.shift();o.length?(n[r]||(n[r]={}),n=n[r]):n[r]=i}}function ep(t,e){for(var i,o,n=null,r=[t],s=t;s.parent;)r.push(s.parent),s=s.parent;if(s.nodes)for(i=0,o=s.nodes.length;i<o;i++)if(e.id===s.nodes[i].id){n=s.nodes[i];break}for(n||(n={id:e.id},t.node&&(n.attr=Jf(n.attr,t.node))),i=r.length-1;i>=0;i--){var a,h=r[i];h.nodes||(h.nodes=[]),-1===Cl(a=h.nodes).call(a,n)&&h.nodes.push(n)}e.attr&&(n.attr=Jf(n.attr,e.attr))}function ip(t,e){if(t.edges||(t.edges=[]),t.edges.push(e),t.edge){var i=Jf({},t.edge);e.attr=Jf(i,e.attr)}}function op(t,e,i,o,n){var r={from:e,to:i,type:o};return t.edge&&(r.attr=Jf({},t.edge)),r.attr=Jf(r.attr||{},n),null!=n&&n.hasOwnProperty("arrows")&&null!=n.arrows&&(r.arrows={to:{enabled:!0,type:n.arrows.type}},n.arrows=null),r}function np(){for(Kf=Lf,Gf="";" "===Xf||"\t"===Xf||"\n"===Xf||"\r"===Xf;)$f();do{var t=!1;if("#"===Xf){for(var e=Yf-1;" "===Uf.charAt(e)||"\t"===Uf.charAt(e);)e--;if("\n"===Uf.charAt(e)||""===Uf.charAt(e)){for(;""!=Xf&&"\n"!=Xf;)$f();t=!0}}if("/"===Xf&&"/"===Zf()){for(;""!=Xf&&"\n"!=Xf;)$f();t=!0}if("/"===Xf&&"*"===Zf()){for(;""!=Xf;){if("*"===Xf&&"/"===Zf()){$f(),$f();break}$f()}t=!0}for(;" "===Xf||"\t"===Xf||"\n"===Xf||"\r"===Xf;)$f()}while(t);if(""!==Xf){var i=Xf+Zf();if(qf[i])return Kf=Hf,Gf=i,$f(),void $f();if(qf[Xf])return Kf=Hf,Gf=Xf,void $f();if(Qf(Xf)||"-"===Xf){for(Gf+=Xf,$f();Qf(Xf);)Gf+=Xf,$f();return"false"===Gf?Gf=!1:"true"===Gf?Gf=!0:isNaN(Number(Gf))||(Gf=Number(Gf)),void(Kf=Wf)}if('"'===Xf){for($f();""!=Xf&&('"'!=Xf||'"'===Xf&&'"'===Zf());)'"'===Xf?(Gf+=Xf,$f()):"\\"===Xf&&"n"===Zf()?(Gf+="\n",$f()):Gf+=Xf,$f();if('"'!=Xf)throw lp('End of string " expected');return $f(),void(Kf=Wf)}for(Kf=Vf;""!=Xf;)Gf+=Xf,$f();throw new SyntaxError('Syntax error in part "'+cp(Gf,30)+'"')}Kf=Hf}function rp(t){for(;""!==Gf&&"}"!=Gf;)sp(t),";"===Gf&&np()}function sp(t){var e=ap(t);if(e)hp(t,e);else if(!function(t){if("node"===Gf)return np(),t.node=dp(),"node";if("edge"===Gf)return np(),t.edge=dp(),"edge";if("graph"===Gf)return np(),t.graph=dp(),"graph";return null}(t)){if(Kf!=Wf)throw lp("Identifier expected");var i=Gf;if(np(),"="===Gf){if(np(),Kf!=Wf)throw lp("Identifier expected");t[i]=Gf,np()}else!function(t,e){var i={id:e},o=dp();o&&(i.attr=o);ep(t,i),hp(t,e)}(t,i)}}function ap(t){var e=null;if("subgraph"===Gf&&((e={}).type="subgraph",np(),Kf===Wf&&(e.id=Gf,np())),"{"===Gf){if(np(),e||(e={}),e.parent=t,e.node=t.node,e.edge=t.edge,e.graph=t.graph,rp(e),"}"!=Gf)throw lp("Angle bracket } expected");np(),delete e.node,delete e.edge,delete e.graph,delete e.parent,t.subgraphs||(t.subgraphs=[]),t.subgraphs.push(e)}return e}function hp(t,e){for(;"->"===Gf||"--"===Gf;){var i,o=Gf;np();var n=ap(t);if(n)i=n;else{if(Kf!=Wf)throw lp("Identifier or subgraph expected");ep(t,{id:i=Gf}),np()}ip(t,op(t,e,i,o,dp())),e=i}}function dp(){for(var t,e,i=null,o={dashed:!0,solid:!1,dotted:[1,5]},n={dot:"circle",box:"box",crow:"crow",curve:"curve",icurve:"inv_curve",normal:"triangle",inv:"inv_triangle",diamond:"diamond",tee:"bar",vee:"vee"},r=new Array,s=new Array;"["===Gf;){for(np(),i={};""!==Gf&&"]"!=Gf;){if(Kf!=Wf)throw lp("Attribute name expected");var a=Gf;if(np(),"="!=Gf)throw lp("Equal sign = expected");if(np(),Kf!=Wf)throw lp("Attribute value expected");var h=Gf;"style"===a&&(h=o[h]),"arrowhead"===a&&(a="arrows",h={to:{enabled:!0,type:n[h]}}),"arrowtail"===a&&(a="arrows",h={from:{enabled:!0,type:n[h]}}),r.push({attr:i,name:a,value:h}),s.push(a),np(),","==Gf&&np()}if("]"!=Gf)throw lp("Bracket ] expected");np()}if(Hd(s).call(s,"dir")){var d={arrows:{}};for(t=0;t<r.length;t++)if("arrows"===r[t].name)if(null!=r[t].value.to)d.arrows.to=t;else{if(null==r[t].value.from)throw lp("Invalid value of arrows");d.arrows.from=t}else"dir"===r[t].name&&(d.dir=t);var l,c,u=r[d.dir].value;if(!Hd(s).call(s,"arrows"))if("both"===u)r.push({attr:r[d.dir].attr,name:"arrows",value:{to:{enabled:!0}}}),d.arrows.to=r.length-1,r.push({attr:r[d.dir].attr,name:"arrows",value:{from:{enabled:!0}}}),d.arrows.from=r.length-1;else if("forward"===u)r.push({attr:r[d.dir].attr,name:"arrows",value:{to:{enabled:!0}}}),d.arrows.to=r.length-1;else if("back"===u)r.push({attr:r[d.dir].attr,name:"arrows",value:{from:{enabled:!0}}}),d.arrows.from=r.length-1;else{if("none"!==u)throw lp('Invalid dir type "'+u+'"');r.push({attr:r[d.dir].attr,name:"arrows",value:""}),d.arrows.to=r.length-1}if("both"===u)d.arrows.to&&d.arrows.from?(c=r[d.arrows.to].value.to.type,l=r[d.arrows.from].value.from.type,r[d.arrows.to]={attr:r[d.arrows.to].attr,name:r[d.arrows.to].name,value:{to:{enabled:!0,type:c},from:{enabled:!0,type:l}}},Od(r).call(r,d.arrows.from,1)):d.arrows.to?(c=r[d.arrows.to].value.to.type,l="arrow",r[d.arrows.to]={attr:r[d.arrows.to].attr,name:r[d.arrows.to].name,value:{to:{enabled:!0,type:c},from:{enabled:!0,type:l}}}):d.arrows.from&&(c="arrow",l=r[d.arrows.from].value.from.type,r[d.arrows.from]={attr:r[d.arrows.from].attr,name:r[d.arrows.from].name,value:{to:{enabled:!0,type:c},from:{enabled:!0,type:l}}});else if("back"===u)d.arrows.to&&d.arrows.from?(c="",l=r[d.arrows.from].value.from.type,r[d.arrows.from]={attr:r[d.arrows.from].attr,name:r[d.arrows.from].name,value:{to:{enabled:!0,type:c},from:{enabled:!0,type:l}}}):d.arrows.to?(c="",l="arrow",d.arrows.from=d.arrows.to,r[d.arrows.from]={attr:r[d.arrows.from].attr,name:r[d.arrows.from].name,value:{to:{enabled:!0,type:c},from:{enabled:!0,type:l}}}):d.arrows.from&&(c="",l=r[d.arrows.from].value.from.type,r[d.arrows.to]={attr:r[d.arrows.from].attr,name:r[d.arrows.from].name,value:{to:{enabled:!0,type:c},from:{enabled:!0,type:l}}}),r[d.arrows.from]={attr:r[d.arrows.from].attr,name:r[d.arrows.from].name,value:{from:{enabled:!0,type:r[d.arrows.from].value.from.type}}};else if("none"===u){var f;r[f=d.arrows.to?d.arrows.to:d.arrows.from]={attr:r[f].attr,name:r[f].name,value:""}}else{if("forward"!==u)throw lp('Invalid dir type "'+u+'"');d.arrows.to&&d.arrows.from||d.arrows.to?(c=r[d.arrows.to].value.to.type,l="",r[d.arrows.to]={attr:r[d.arrows.to].attr,name:r[d.arrows.to].name,value:{to:{enabled:!0,type:c},from:{enabled:!0,type:l}}}):d.arrows.from&&(c="arrow",l="",d.arrows.to=d.arrows.from,r[d.arrows.to]={attr:r[d.arrows.to].attr,name:r[d.arrows.to].name,value:{to:{enabled:!0,type:c},from:{enabled:!0,type:l}}}),r[d.arrows.to]={attr:r[d.arrows.to].attr,name:r[d.arrows.to].name,value:{to:{enabled:!0,type:r[d.arrows.to].value.to.type}}}}Od(r).call(r,d.dir,1)}if(Hd(s).call(s,"penwidth")){var p=[];for(e=r.length,t=0;t<e;t++)"width"!==r[t].name&&("penwidth"===r[t].name&&(r[t].name="width"),p.push(r[t]));r=p}for(e=r.length,t=0;t<e;t++)tp(r[t].attr,r[t].name,r[t].value);return i}function lp(t){return new SyntaxError(t+', got "'+cp(Gf,30)+'" (char '+Yf+")")}function cp(t,e){return t.length<=e?t:t.substr(0,27)+"..."}function up(t,e,i){for(var o=e.split("."),n=o.pop(),r=t,s=0;s<o.length;s++){var a=o[s];a in r||(r[a]={}),r=r[a]}return r[n]=i,t}function fp(t,e){var i={};for(var o in t)if(t.hasOwnProperty(o)){var n=e[o];Hh(n)?nd(n).call(n,(function(e){up(i,e,t[o])})):up(i,"string"==typeof n?n:o,t[o])}return i}function pp(t){var e,i=Af(t),o={nodes:[],edges:[],options:{}};i.nodes&&nd(e=i.nodes).call(e,(function(t){var e={id:t.id,label:String(t.label||t.id)};Jf(e,fp(t.attr,Rf)),e.image&&(e.shape="image"),o.nodes.push(e)}));if(i.edges){var n,r=function(t){var e={from:t.from,to:t.to};return Jf(e,fp(t.attr,jf)),null==e.arrows&&"->"===t.type&&(e.arrows="to"),e};nd(n=i.edges).call(n,(function(t){var e,i,n,s,a,h,d;(e=t.from instanceof Object?t.from.nodes:{id:t.from},i=t.to instanceof Object?t.to.nodes:{id:t.to},t.from instanceof Object&&t.from.edges)&&nd(n=t.from.edges).call(n,(function(t){var e=r(t);o.edges.push(e)}));(a=i,h=function(e,i){var n=op(o,e.id,i.id,t.type,t.attr),s=r(n);o.edges.push(s)},Hh(s=e)?nd(s).call(s,(function(t){Hh(a)?nd(a).call(a,(function(e){h(t,e)})):h(t,a)})):Hh(a)?nd(a).call(a,(function(t){h(s,t)})):h(s,a),t.to instanceof Object&&t.to.edges)&&nd(d=t.to.edges).call(d,(function(t){var e=r(t);o.edges.push(e)}))}))}return i.attr&&(o.options=i.attr),o}var vp=Object.freeze({__proto__:null,parseDOT:Af,DOTToGraph:pp});function gp(t,e){var i,o={edges:{inheritColor:!1},nodes:{fixed:!1,parseColor:!1}};null!=e&&(null!=e.fixed&&(o.nodes.fixed=e.fixed),null!=e.parseColor&&(o.nodes.parseColor=e.parseColor),null!=e.inheritColor&&(o.edges.inheritColor=e.inheritColor));var n=t.edges,r=Uh(n).call(n,(function(t){var e={from:t.source,id:t.id,to:t.target};return null!=t.attributes&&(e.attributes=t.attributes),null!=t.label&&(e.label=t.label),null!=t.attributes&&null!=t.attributes.title&&(e.title=t.attributes.title),"Directed"===t.type&&(e.arrows="to"),t.color&&!1===o.edges.inheritColor&&(e.color=t.color),e}));return{nodes:Uh(i=t.nodes).call(i,(function(t){var e={id:t.id,fixed:o.nodes.fixed&&null!=t.x&&null!=t.y};return null!=t.attributes&&(e.attributes=t.attributes),null!=t.label&&(e.label=t.label),null!=t.size&&(e.size=t.size),null!=t.attributes&&null!=t.attributes.title&&(e.title=t.attributes.title),null!=t.title&&(e.title=t.title),null!=t.x&&(e.x=t.x),null!=t.y&&(e.y=t.y),null!=t.color&&(!0===o.nodes.parseColor?e.color=t.color:e.color={background:t.color,border:t.color,highlight:{background:t.color,border:t.color},hover:{background:t.color,border:t.color}}),e})),edges:r}}var yp=Object.freeze({__proto__:null,parseGephi:gp}),mp=Object.freeze({__proto__:null,en:{addDescription:"Click in an empty space to place a new node.",addEdge:"Add Edge",addNode:"Add Node",back:"Back",close:"Close",createEdgeError:"Cannot link edges to a cluster.",del:"Delete selected",deleteClusterError:"Clusters cannot be deleted.",edgeDescription:"Click on a node and drag the edge to another node to connect them.",edit:"Edit",editClusterError:"Clusters cannot be edited.",editEdge:"Edit Edge",editEdgeDescription:"Click on the control points and drag them to a node to connect to it.",editNode:"Edit Node"},de:{addDescription:"Klicke auf eine freie Stelle, um einen neuen Knoten zu plazieren.",addEdge:"Kante hinzufügen",addNode:"Knoten hinzufügen",back:"Zurück",close:"Schließen",createEdgeError:"Es ist nicht möglich, Kanten mit Clustern zu verbinden.",del:"Lösche Auswahl",deleteClusterError:"Cluster können nicht gelöscht werden.",edgeDescription:"Klicke auf einen Knoten und ziehe die Kante zu einem anderen Knoten, um diese zu verbinden.",edit:"Editieren",editClusterError:"Cluster können nicht editiert werden.",editEdge:"Kante editieren",editEdgeDescription:"Klicke auf die Verbindungspunkte und ziehe diese auf einen Knoten, um sie zu verbinden.",editNode:"Knoten editieren"},es:{addDescription:"Haga clic en un lugar vacío para colocar un nuevo nodo.",addEdge:"Añadir arista",addNode:"Añadir nodo",back:"Atrás",close:"Cerrar",createEdgeError:"No se puede conectar una arista a un grupo.",del:"Eliminar selección",deleteClusterError:"No es posible eliminar grupos.",edgeDescription:"Haga clic en un nodo y arrastre la arista hacia otro nodo para conectarlos.",edit:"Editar",editClusterError:"No es posible editar grupos.",editEdge:"Editar arista",editEdgeDescription:"Haga clic en un punto de control y arrastrelo a un nodo para conectarlo.",editNode:"Editar nodo"},it:{addDescription:"Clicca per aggiungere un nuovo nodo",addEdge:"Aggiungi un vertice",addNode:"Aggiungi un nodo",back:"Indietro",close:"Chiudere",createEdgeError:"Non si possono collegare vertici ad un cluster",del:"Cancella la selezione",deleteClusterError:"I cluster non possono essere cancellati",edgeDescription:"Clicca su un nodo e trascinalo ad un altro nodo per connetterli.",edit:"Modifica",editClusterError:"I clusters non possono essere modificati.",editEdge:"Modifica il vertice",editEdgeDescription:"Clicca sui Punti di controllo e trascinali ad un nodo per connetterli.",editNode:"Modifica il nodo"},nl:{addDescription:"Klik op een leeg gebied om een nieuwe node te maken.",addEdge:"Link toevoegen",addNode:"Node toevoegen",back:"Terug",close:"Sluiten",createEdgeError:"Kan geen link maken naar een cluster.",del:"Selectie verwijderen",deleteClusterError:"Clusters kunnen niet worden verwijderd.",edgeDescription:"Klik op een node en sleep de link naar een andere node om ze te verbinden.",edit:"Wijzigen",editClusterError:"Clusters kunnen niet worden aangepast.",editEdge:"Link wijzigen",editEdgeDescription:"Klik op de verbindingspunten en sleep ze naar een node om daarmee te verbinden.",editNode:"Node wijzigen"},pt:{addDescription:"Clique em um espaço em branco para adicionar um novo nó",addEdge:"Adicionar aresta",addNode:"Adicionar nó",back:"Voltar",close:"Fechar",createEdgeError:"Não foi possível linkar arestas a um cluster.",del:"Remover selecionado",deleteClusterError:"Clusters não puderam ser removidos.",edgeDescription:"Clique em um nó e arraste a aresta até outro nó para conectá-los",edit:"Editar",editClusterError:"Clusters não puderam ser editados.",editEdge:"Editar aresta",editEdgeDescription:"Clique nos pontos de controle e os arraste para um nó para conectá-los",editNode:"Editar nó"},ru:{addDescription:"Кликните в свободное место, чтобы добавить новый узел.",addEdge:"Добавить ребро",addNode:"Добавить узел",back:"Назад",close:"Закрывать",createEdgeError:"Невозможно соединить ребра в кластер.",del:"Удалить выбранное",deleteClusterError:"Кластеры не могут быть удалены",edgeDescription:"Кликните на узел и протяните ребро к другому узлу, чтобы соединить их.",edit:"Редактировать",editClusterError:"Кластеры недоступны для редактирования.",editEdge:"Редактировать ребро",editEdgeDescription:"Кликните на контрольные точки и перетащите их в узел, чтобы подключиться к нему.",editNode:"Редактировать узел"},cn:{addDescription:"单击空白处放置新节点。",addEdge:"添加连接线",addNode:"添加节点",back:"返回",close:"關閉",createEdgeError:"无法将连接线连接到群集。",del:"删除选定",deleteClusterError:"无法删除群集。",edgeDescription:"单击某个节点并将该连接线拖动到另一个节点以连接它们。",edit:"编辑",editClusterError:"无法编辑群集。",editEdge:"编辑连接线",editEdgeDescription:"单击控制节点并将它们拖到节点上连接。",editNode:"编辑节点"},uk:{addDescription:"Kлікніть на вільне місце, щоб додати новий вузол.",addEdge:"Додати край",addNode:"Додати вузол",back:"Назад",close:"Закрити",createEdgeError:"Не можливо об'єднати краї в групу.",del:"Видалити обране",deleteClusterError:"Групи не можуть бути видалені.",edgeDescription:"Клікніть на вузол і перетягніть край до іншого вузла, щоб їх з'єднати.",edit:"Редагувати",editClusterError:"Групи недоступні для редагування.",editEdge:"Редагувати край",editEdgeDescription:"Клікніть на контрольні точки і перетягніть їх у вузол, щоб підключитися до нього.",editNode:"Редагувати вузол"},fr:{addDescription:"Cliquez dans un endroit vide pour placer un nœud.",addEdge:"Ajouter un lien",addNode:"Ajouter un nœud",back:"Retour",close:"Fermer",createEdgeError:"Impossible de créer un lien vers un cluster.",del:"Effacer la sélection",deleteClusterError:"Les clusters ne peuvent pas être effacés.",edgeDescription:"Cliquez sur un nœud et glissez le lien vers un autre nœud pour les connecter.",edit:"Éditer",editClusterError:"Les clusters ne peuvent pas être édités.",editEdge:"Éditer le lien",editEdgeDescription:"Cliquez sur les points de contrôle et glissez-les pour connecter un nœud.",editNode:"Éditer le nœud"},cs:{addDescription:"Kluknutím do prázdného prostoru můžete přidat nový vrchol.",addEdge:"Přidat hranu",addNode:"Přidat vrchol",back:"Zpět",close:"Zavřít",createEdgeError:"Nelze připojit hranu ke shluku.",del:"Smazat výběr",deleteClusterError:"Nelze mazat shluky.",edgeDescription:"Přetažením z jednoho vrcholu do druhého můžete spojit tyto vrcholy novou hranou.",edit:"Upravit",editClusterError:"Nelze upravovat shluky.",editEdge:"Upravit hranu",editEdgeDescription:"Přetažením kontrolního vrcholu hrany ji můžete připojit k jinému vrcholu.",editNode:"Upravit vrchol"}});var bp=function(){function t(){Ra(this,t),this.NUM_ITERATIONS=4,this.image=new Image,this.canvas=document.createElement("canvas")}return Ha(t,[{key:"init",value:function(){if(!this.initialized()){this.src=this.image.src;var t=this.image.width,e=this.image.height;this.width=t,this.height=e;var i=Math.floor(e/2),o=Math.floor(e/4),n=Math.floor(e/8),r=Math.floor(e/16),s=Math.floor(t/2),a=Math.floor(t/4),h=Math.floor(t/8),d=Math.floor(t/16);this.canvas.width=3*a,this.canvas.height=i,this.coordinates=[[0,0,s,i],[s,0,a,o],[s,o,h,n],[5*h,o,d,r]],this._fillMipMap()}}},{key:"initialized",value:function(){return void 0!==this.coordinates}},{key:"_fillMipMap",value:function(){var t=this.canvas.getContext("2d"),e=this.coordinates[0];t.drawImage(this.image,e[0],e[1],e[2],e[3]);for(var i=1;i<this.NUM_ITERATIONS;i++){var o=this.coordinates[i-1],n=this.coordinates[i];t.drawImage(this.canvas,o[0],o[1],o[2],o[3],n[0],n[1],n[2],n[3])}}},{key:"drawImageAtPosition",value:function(t,e,i,o,n,r){if(this.initialized())if(e>2){e*=.5;for(var s=0;e>2&&s<this.NUM_ITERATIONS;)e*=.5,s+=1;s>=this.NUM_ITERATIONS&&(s=this.NUM_ITERATIONS-1);var a=this.coordinates[s];t.drawImage(this.canvas,a[0],a[1],a[2],a[3],i,o,n,r)}else t.drawImage(this.image,i,o,n,r)}}]),t}(),wp=function(){function t(e){Ra(this,t),this.images={},this.imageBroken={},this.callback=e}return Ha(t,[{key:"_tryloadBrokenUrl",value:function(t,e,i){void 0!==t&&void 0!==i&&(void 0!==e?(i.image.onerror=function(){console.error("Could not load brokenImage:",e)},i.image.src=e):console.warn("No broken url image defined"))}},{key:"_redrawWithImage",value:function(t){this.callback&&this.callback(t)}},{key:"load",value:function(t,e){var i=this,o=this.images[t];if(o)return o;var n=new bp;return this.images[t]=n,n.image.onload=function(){i._fixImageCoordinates(n.image),n.init(),i._redrawWithImage(n)},n.image.onerror=function(){console.error("Could not load image:",t),i._tryloadBrokenUrl(t,e,n)},n.image.src=t,n}},{key:"_fixImageCoordinates",value:function(t){0===t.width&&(document.body.appendChild(t),t.width=t.offsetWidth,t.height=t.offsetHeight,document.body.removeChild(t))}}]),t}(),kp={exports:{}},_p=!s((function(){return Object.isExtensible(Object.preventExtensions({}))})),xp=ue,Ep=Te,Op=E,Cp=et,Sp=Xt.f,Tp=Cr,Mp=Mr,Pp=_p,Dp=!1,Bp=nt("meta"),Ip=0,zp=Object.isExtensible||function(){return!0},Fp=function(t){Sp(t,Bp,{value:{objectID:"O"+Ip++,weakData:{}}})},Np=kp.exports={enable:function(){Np.enable=function(){},Dp=!0;var t=Tp.f,e=[].splice,i={};i[Bp]=1,t(i).length&&(Tp.f=function(i){for(var o=t(i),n=0,r=o.length;n<r;n++)if(o[n]===Bp){e.call(o,n,1);break}return o},xp({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:Mp.f}))},fastKey:function(t,e){if(!Op(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!Cp(t,Bp)){if(!zp(t))return"F";if(!e)return"E";Fp(t)}return t[Bp].objectID},getWeakData:function(t,e){if(!Cp(t,Bp)){if(!zp(t))return!0;if(!e)return!1;Fp(t)}return t[Bp].weakData},onFreeze:function(t){return Pp&&Dp&&zp(t)&&!Cp(t,Bp)&&Fp(t),t}};Ep[Bp]=!0;var Ap=Kt,Rp=An,jp=me,Lp=Yt,Hp=Un,Wp=Dn,Vp=function(t,e){this.stopped=t,this.result=e},qp=function(t,e,i){var o,n,r,s,a,h,d,l=i&&i.that,c=!(!i||!i.AS_ENTRIES),u=!(!i||!i.IS_ITERATOR),f=!(!i||!i.INTERRUPTED),p=Lp(e,l,1+c+f),v=function(t){return o&&Wp(o),new Vp(!0,t)},g=function(t){return c?(Ap(t),f?p(t[0],t[1],v):p(t[0],t[1])):f?p(t,v):p(t)};if(u)o=t;else{if("function"!=typeof(n=Hp(t)))throw TypeError("Target is not iterable");if(Rp(n)){for(r=0,s=jp(t.length);s>r;r++)if((a=g(t[r]))&&a instanceof Vp)return a;return new Vp(!1)}o=n.call(t)}for(h=o.next;!(d=h.call(o)).done;){try{a=g(d.value)}catch(t){throw Wp(o),t}if("object"==typeof a&&a&&a instanceof Vp)return a}return new Vp(!1)},Up=function(t,e,i){if(!(t instanceof e))throw TypeError("Incorrect "+(i?i+" ":"")+"invocation");return t},Yp=ue,Xp=n,Gp=kp.exports,Kp=s,$p=oe,Zp=qp,Qp=Up,Jp=E,tv=Xo,ev=Xt.f,iv=Jr.forEach,ov=a,nv=Zi.set,rv=Zi.getterFor,sv=function(t,e,i){var o,n=-1!==t.indexOf("Map"),r=-1!==t.indexOf("Weak"),s=n?"set":"add",a=Xp[t],h=a&&a.prototype,d={};if(ov&&"function"==typeof a&&(r||h.forEach&&!Kp((function(){(new a).entries().next()})))){o=e((function(e,i){nv(Qp(e,o,t),{type:t,collection:new a}),null!=i&&Zp(i,e[s],{that:e,AS_ENTRIES:n})}));var l=rv(t);iv(["add","clear","delete","forEach","get","has","set","keys","values","entries"],(function(t){var e="add"==t||"set"==t;!(t in h)||r&&"clear"==t||$p(o.prototype,t,(function(i,o){var n=l(this).collection;if(!e&&r&&!Jp(i))return"get"==t&&void 0;var s=n[t](0===i?0:i,o);return e?this:s}))})),r||ev(o.prototype,"size",{configurable:!0,get:function(){return l(this).collection.size}})}else o=i.getConstructor(e,t,n,s),Gp.enable();return tv(o,t,!1,!0),d[t]=o,Yp({global:!0,forced:!0},d),r||i.setStrong(o,t,n),o},av=an,hv=function(t,e,i){for(var o in e)i&&i.unsafe&&t[o]?t[o]=e[o]:av(t,o,e[o],i);return t},dv=M,lv=Xt,cv=a,uv=pt("species"),fv=Xt.f,pv=Do,vv=hv,gv=Yt,yv=Up,mv=qp,bv=_n,wv=function(t){var e=dv(t),i=lv.f;cv&&e&&!e[uv]&&i(e,uv,{configurable:!0,get:function(){return this}})},kv=a,_v=kp.exports.fastKey,xv=Zi.set,Ev=Zi.getterFor,Ov={getConstructor:function(t,e,i,o){var n=t((function(t,r){yv(t,n,e),xv(t,{type:e,index:pv(null),first:void 0,last:void 0,size:0}),kv||(t.size=0),null!=r&&mv(r,t[o],{that:t,AS_ENTRIES:i})})),r=Ev(e),s=function(t,e,i){var o,n,s=r(t),h=a(t,e);return h?h.value=i:(s.last=h={index:n=_v(e,!0),key:e,value:i,previous:o=s.last,next:void 0,removed:!1},s.first||(s.first=h),o&&(o.next=h),kv?s.size++:t.size++,"F"!==n&&(s.index[n]=h)),t},a=function(t,e){var i,o=r(t),n=_v(e);if("F"!==n)return o.index[n];for(i=o.first;i;i=i.next)if(i.key==e)return i};return vv(n.prototype,{clear:function(){for(var t=r(this),e=t.index,i=t.first;i;)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete e[i.index],i=i.next;t.first=t.last=void 0,kv?t.size=0:this.size=0},delete:function(t){var e=this,i=r(e),o=a(e,t);if(o){var n=o.next,s=o.previous;delete i.index[o.index],o.removed=!0,s&&(s.next=n),n&&(n.previous=s),i.first==o&&(i.first=n),i.last==o&&(i.last=s),kv?i.size--:e.size--}return!!o},forEach:function(t){for(var e,i=r(this),o=gv(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:i.first;)for(o(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!a(this,t)}}),vv(n.prototype,i?{get:function(t){var e=a(this,t);return e&&e.value},set:function(t,e){return s(this,0===t?0:t,e)}}:{add:function(t){return s(this,t=0===t?0:t,t)}}),kv&&fv(n.prototype,"size",{get:function(){return r(this).size}}),n},setStrong:function(t,e,i){var o=e+" Iterator",n=Ev(e),r=Ev(o);bv(t,e,(function(t,e){xv(this,{type:o,target:t,state:n(t),kind:e,last:void 0})}),(function(){for(var t=r(this),e=t.kind,i=t.last;i&&i.removed;)i=i.previous;return t.target&&(t.last=i=i?i.next:t.state.first)?"keys"==e?{value:i.key,done:!1}:"values"==e?{value:i.value,done:!1}:{value:[i.key,i.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),i?"entries":"values",!i,!0),wv(e)}};sv("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),Ov);var Cv=O.Map,Sv=function(){function t(){Ra(this,t),this.clear(),this._defaultIndex=0,this._groupIndex=0,this._defaultGroups=[{border:"#2B7CE9",background:"#97C2FC",highlight:{border:"#2B7CE9",background:"#D2E5FF"},hover:{border:"#2B7CE9",background:"#D2E5FF"}},{border:"#FFA500",background:"#FFFF00",highlight:{border:"#FFA500",background:"#FFFFA3"},hover:{border:"#FFA500",background:"#FFFFA3"}},{border:"#FA0A10",background:"#FB7E81",highlight:{border:"#FA0A10",background:"#FFAFB1"},hover:{border:"#FA0A10",background:"#FFAFB1"}},{border:"#41A906",background:"#7BE141",highlight:{border:"#41A906",background:"#A1EC76"},hover:{border:"#41A906",background:"#A1EC76"}},{border:"#E129F0",background:"#EB7DF4",highlight:{border:"#E129F0",background:"#F0B3F5"},hover:{border:"#E129F0",background:"#F0B3F5"}},{border:"#7C29F0",background:"#AD85E4",highlight:{border:"#7C29F0",background:"#D3BDF0"},hover:{border:"#7C29F0",background:"#D3BDF0"}},{border:"#C37F00",background:"#FFA807",highlight:{border:"#C37F00",background:"#FFCA66"},hover:{border:"#C37F00",background:"#FFCA66"}},{border:"#4220FB",background:"#6E6EFD",highlight:{border:"#4220FB",background:"#9B9BFD"},hover:{border:"#4220FB",background:"#9B9BFD"}},{border:"#FD5A77",background:"#FFC0CB",highlight:{border:"#FD5A77",background:"#FFD1D9"},hover:{border:"#FD5A77",background:"#FFD1D9"}},{border:"#4AD63A",background:"#C2FABC",highlight:{border:"#4AD63A",background:"#E6FFE3"},hover:{border:"#4AD63A",background:"#E6FFE3"}},{border:"#990000",background:"#EE0000",highlight:{border:"#BB0000",background:"#FF3333"},hover:{border:"#BB0000",background:"#FF3333"}},{border:"#FF6000",background:"#FF6000",highlight:{border:"#FF6000",background:"#FF6000"},hover:{border:"#FF6000",background:"#FF6000"}},{border:"#97C2FC",background:"#2B7CE9",highlight:{border:"#D2E5FF",background:"#2B7CE9"},hover:{border:"#D2E5FF",background:"#2B7CE9"}},{border:"#399605",background:"#255C03",highlight:{border:"#399605",background:"#255C03"},hover:{border:"#399605",background:"#255C03"}},{border:"#B70054",background:"#FF007E",highlight:{border:"#B70054",background:"#FF007E"},hover:{border:"#B70054",background:"#FF007E"}},{border:"#AD85E4",background:"#7C29F0",highlight:{border:"#D3BDF0",background:"#7C29F0"},hover:{border:"#D3BDF0",background:"#7C29F0"}},{border:"#4557FA",background:"#000EA1",highlight:{border:"#6E6EFD",background:"#000EA1"},hover:{border:"#6E6EFD",background:"#000EA1"}},{border:"#FFC0CB",background:"#FD5A77",highlight:{border:"#FFD1D9",background:"#FD5A77"},hover:{border:"#FFD1D9",background:"#FD5A77"}},{border:"#C2FABC",background:"#74D66A",highlight:{border:"#E6FFE3",background:"#74D66A"},hover:{border:"#E6FFE3",background:"#74D66A"}},{border:"#EE0000",background:"#990000",highlight:{border:"#FF3333",background:"#BB0000"},hover:{border:"#FF3333",background:"#BB0000"}}],this.options={},this.defaultOptions={useDefaultGroups:!0},Ke(this.options,this.defaultOptions)}return Ha(t,[{key:"setOptions",value:function(t){var e=["useDefaultGroups"];if(void 0!==t)for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&-1===Cl(e).call(e,i)){var o=t[i];this.add(i,o)}}},{key:"clear",value:function(){this._groups=new Cv,this._groupNames=[]}},{key:"get",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this._groups.get(t);if(void 0===i&&e)if(!1===this.options.useDefaultGroups&&this._groupNames.length>0){var o=this._groupIndex%this._groupNames.length;++this._groupIndex,(i={}).color=this._groups.get(this._groupNames[o]),this._groups.set(t,i)}else{var n=this._defaultIndex%this._defaultGroups.length;this._defaultIndex++,(i={}).color=this._defaultGroups[n],this._groups.set(t,i)}return i}},{key:"add",value:function(t,e){return this._groups.has(t)||this._groupNames.push(t),this._groups.set(t,e),e}}]),t}();ue({target:"Number",stat:!0},{isNaN:function(t){return t!=t}});var Tv=O.Number.isNaN,Mv=n.isFinite;ue({target:"Number",stat:!0},{isFinite:Number.isFinite||function(t){return"number"==typeof t&&Mv(t)}});var Pv=O.Number.isFinite,Dv=Jr.some;ue({target:"Array",proto:!0,forced:!Zh("some")},{some:function(t){return Dv(this,t,arguments.length>1?arguments[1]:void 0)}});var Bv=oi("Array").some,Iv=Array.prototype,zv=function(t){var e=t.some;return t===Iv||t instanceof Array&&e===Iv.some?Bv:e},Fv=gi,Nv=ll.trim,Av=n.parseFloat,Rv=1/Av("\t\n\v\f\r                　\u2028\u2029\ufeff-0")!=-1/0?function(t){var e=Nv(Fv(t)),i=Av(e);return 0===i&&"-"==e.charAt(0)?-0:i}:Av;ue({global:!0,forced:parseFloat!=Rv},{parseFloat:Rv});var jv=O.parseFloat,Lv=ue,Hv=s,Wv=Mr.f;Lv({target:"Object",stat:!0,forced:Hv((function(){return!Object.getOwnPropertyNames(1)}))},{getOwnPropertyNames:Wv});var Vv=O.Object,qv=function(t){return Vv.getOwnPropertyNames(t)};function Uv(t,e){var i=["node","edge","label"],o=!0,n=Ef(e,"chosen");if("boolean"==typeof n)o=n;else if("object"===zh(n)){if(-1===Cl(i).call(i,t))throw new Error("choosify: subOption '"+t+"' should be one of '"+i.join("', '")+"'");var r=Ef(e,["chosen",t]);"boolean"!=typeof r&&"function"!=typeof r||(o=r)}return o}function Yv(t,e,i){if(t.width<=0||t.height<=0)return!1;if(void 0!==i){var o={x:e.x-i.x,y:e.y-i.y};if(0!==i.angle){var n=-i.angle;e={x:Math.cos(n)*o.x-Math.sin(n)*o.y,y:Math.sin(n)*o.x+Math.cos(n)*o.y}}else e=o}var r=t.x+t.width,s=t.y+t.width;return t.left<e.x&&r>e.x&&t.top<e.y&&s>e.y}function Xv(t){return"string"==typeof t&&""!==t}function Gv(t,e,i,o){var n=o.x,r=o.y;if("function"==typeof o.distanceToBorder){var s=o.distanceToBorder(t,e),a=Math.sin(e)*s,h=Math.cos(e)*s;h===s?(n+=s,r=o.y):a===s?(n=o.x,r-=s):(n+=h,r-=a)}else o.shape.width>o.shape.height?(n=o.x+.5*o.shape.width,r=o.y-i):(n=o.x+i,r=o.y-.5*o.shape.height);return{x:n,y:r}}var Kv=oi("Array").values,$v=Ro,Zv=Array.prototype,Qv={DOMTokenList:!0,NodeList:!0},Jv=function(t){var e=t.values;return t===Zv||t instanceof Array&&e===Zv.values||Qv.hasOwnProperty($v(t))?Kv:e},tg=function(){function t(e){Ra(this,t),this.measureText=e,this.current=0,this.width=0,this.height=0,this.lines=[]}return Ha(t,[{key:"_add",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal";void 0===this.lines[t]&&(this.lines[t]={width:0,height:0,blocks:[]});var o=e;void 0!==e&&""!==e||(o=" ");var n=this.measureText(o,i),r=Ke({},Jv(n));r.text=e,r.width=n.width,r.mod=i,void 0!==e&&""!==e||(r.width=0),this.lines[t].blocks.push(r),this.lines[t].width+=r.width}},{key:"curWidth",value:function(){var t=this.lines[this.current];return void 0===t?0:t.width}},{key:"append",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"normal";this._add(this.current,t,e)}},{key:"newLine",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"normal";this._add(this.current,t,e),this.current++}},{key:"determineLineHeights",value:function(){for(var t=0;t<this.lines.length;t++){var e=this.lines[t],i=0;if(void 0!==e.blocks)for(var o=0;o<e.blocks.length;o++){var n=e.blocks[o];i<n.height&&(i=n.height)}e.height=i}}},{key:"determineLabelSize",value:function(){for(var t=0,e=0,i=0;i<this.lines.length;i++){var o=this.lines[i];o.width>t&&(t=o.width),e+=o.height}this.width=t,this.height=e}},{key:"removeEmptyBlocks",value:function(){for(var t=[],e=0;e<this.lines.length;e++){var i=this.lines[e];if(0!==i.blocks.length&&(e!==this.lines.length-1||0!==i.width)){var o={};Ke(o,i),o.blocks=[];for(var n=void 0,r=[],s=0;s<i.blocks.length;s++){var a=i.blocks[s];0!==a.width?r.push(a):void 0===n&&(n=a)}0===r.length&&void 0!==n&&r.push(n),o.blocks=r,t.push(o)}}return t}},{key:"finalize",value:function(){this.determineLineHeights(),this.determineLabelSize();var t=this.removeEmptyBlocks();return{width:this.width,height:this.height,lines:t}}}]),t}(),eg={"<b>":/<b>/,"<i>":/<i>/,"<code>":/<code>/,"</b>":/<\/b>/,"</i>":/<\/i>/,"</code>":/<\/code>/,"*":/\*/,_:/_/,"`":/`/,afterBold:/[^*]/,afterItal:/[^_]/,afterMono:/[^`]/},ig=function(){function t(e){Ra(this,t),this.text=e,this.bold=!1,this.ital=!1,this.mono=!1,this.spacing=!1,this.position=0,this.buffer="",this.modStack=[],this.blocks=[]}return Ha(t,[{key:"mod",value:function(){return 0===this.modStack.length?"normal":this.modStack[0]}},{key:"modName",value:function(){return 0===this.modStack.length?"normal":"mono"===this.modStack[0]?"mono":this.bold&&this.ital?"boldital":this.bold?"bold":this.ital?"ital":void 0}},{key:"emitBlock",value:function(){this.spacing&&(this.add(" "),this.spacing=!1),this.buffer.length>0&&(this.blocks.push({text:this.buffer,mod:this.modName()}),this.buffer="")}},{key:"add",value:function(t){" "===t&&(this.spacing=!0),this.spacing&&(this.buffer+=" ",this.spacing=!1)," "!=t&&(this.buffer+=t)}},{key:"parseWS",value:function(t){return!!/[ \t]/.test(t)&&(this.mono?this.add(t):this.spacing=!0,!0)}},{key:"setTag",value:function(t){this.emitBlock(),this[t]=!0,this.modStack.unshift(t)}},{key:"unsetTag",value:function(t){this.emitBlock(),this[t]=!1,this.modStack.shift()}},{key:"parseStartTag",value:function(t,e){return!(this.mono||this[t]||!this.match(e))&&(this.setTag(t),!0)}},{key:"match",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this.prepareRegExp(t),o=Bh(i,2),n=o[0],r=o[1],s=n.test(this.text.substr(this.position,r));return s&&e&&(this.position+=r-1),s}},{key:"parseEndTag",value:function(t,e,i){var o=this.mod()===t;return!(!(o="mono"===t?o&&this.mono:o&&!this.mono)||!this.match(e))&&(void 0!==i?(this.position===this.text.length-1||this.match(i,!1))&&this.unsetTag(t):this.unsetTag(t),!0)}},{key:"replace",value:function(t,e){return!!this.match(t)&&(this.add(e),this.position+=length-1,!0)}},{key:"prepareRegExp",value:function(t){var e,i;if(t instanceof RegExp)i=t,e=1;else{var o=eg[t];i=void 0!==o?o:new RegExp(t),e=t.length}return[i,e]}}]),t}(),og=function(){function t(e,i,o,n){var r=this;Ra(this,t),this.ctx=e,this.parent=i,this.selected=o,this.hover=n;this.lines=new tg((function(t,i){if(void 0===t)return 0;var s=r.parent.getFormattingValues(e,o,n,i),a=0;""!==t&&(a=r.ctx.measureText(t).width);return{width:a,values:s}}))}return Ha(t,[{key:"process",value:function(t){if(!Xv(t))return this.lines.finalize();var e=this.parent.fontOptions;t=(t=t.replace(/\r\n/g,"\n")).replace(/\r/g,"\n");var i=String(t).split("\n"),o=i.length;if(e.multi)for(var n=0;n<o;n++){var r=this.splitBlocks(i[n],e.multi);if(void 0!==r)if(0!==r.length){if(e.maxWdt>0)for(var s=0;s<r.length;s++){var a=r[s].mod,h=r[s].text;this.splitStringIntoLines(h,a,!0)}else for(var d=0;d<r.length;d++){var l=r[d].mod,c=r[d].text;this.lines.append(c,l)}this.lines.newLine()}else this.lines.newLine("")}else if(e.maxWdt>0)for(var u=0;u<o;u++)this.splitStringIntoLines(i[u]);else for(var f=0;f<o;f++)this.lines.newLine(i[f]);return this.lines.finalize()}},{key:"decodeMarkupSystem",value:function(t){var e="none";return"markdown"===t||"md"===t?e="markdown":!0!==t&&"html"!==t||(e="html"),e}},{key:"splitHtmlBlocks",value:function(t){for(var e=new ig(t),i=function(t){return!!/&/.test(t)&&(e.replace(e.text,"&lt;","<")||e.replace(e.text,"&amp;","&")||e.add("&"),!0)};e.position<e.text.length;){var o=e.text.charAt(e.position);e.parseWS(o)||/</.test(o)&&(e.parseStartTag("bold","<b>")||e.parseStartTag("ital","<i>")||e.parseStartTag("mono","<code>")||e.parseEndTag("bold","</b>")||e.parseEndTag("ital","</i>")||e.parseEndTag("mono","</code>"))||i(o)||e.add(o),e.position++}return e.emitBlock(),e.blocks}},{key:"splitMarkdownBlocks",value:function(t){for(var e=this,i=new ig(t),o=!0,n=function(t){return!!/\\/.test(t)&&(i.position<e.text.length+1&&(i.position++,t=e.text.charAt(i.position),/ \t/.test(t)?i.spacing=!0:(i.add(t),o=!1)),!0)};i.position<i.text.length;){var r=i.text.charAt(i.position);i.parseWS(r)||n(r)||(o||i.spacing)&&(i.parseStartTag("bold","*")||i.parseStartTag("ital","_")||i.parseStartTag("mono","`"))||i.parseEndTag("bold","*","afterBold")||i.parseEndTag("ital","_","afterItal")||i.parseEndTag("mono","`","afterMono")||(i.add(r),o=!1),i.position++}return i.emitBlock(),i.blocks}},{key:"splitBlocks",value:function(t,e){var i=this.decodeMarkupSystem(e);return"none"===i?[{text:t,mod:"normal"}]:"markdown"===i?this.splitMarkdownBlocks(t):"html"===i?this.splitHtmlBlocks(t):void 0}},{key:"overMaxWidth",value:function(t){var e=this.ctx.measureText(t).width;return this.lines.curWidth()+e>this.parent.fontOptions.maxWdt}},{key:"getLongestFit",value:function(t){for(var e="",i=0;i<t.length;){var o=e+(""===e?"":" ")+t[i];if(this.overMaxWidth(o))break;e=o,i++}return i}},{key:"getLongestFitWord",value:function(t){for(var e=0;e<t.length&&!this.overMaxWidth(Lh(t).call(t,0,e));)e++;return e}},{key:"splitStringIntoLines",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"normal",i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.parent.getFormattingValues(this.ctx,this.selected,this.hover,e);for(var o=(t=(t=t.replace(/^( +)/g,"$1\r")).replace(/([^\r][^ ]*)( +)/g,"$1\r$2\r")).split("\r");o.length>0;){var n=this.getLongestFit(o);if(0===n){var r=o[0],s=this.getLongestFitWord(r);this.lines.newLine(Lh(r).call(r,0,s),e),o[0]=Lh(r).call(r,s)}else{var a=n;" "===o[n-1]?n--:" "===o[a]&&a++;var h=Lh(o).call(o,0,n).join("");n==o.length&&i?this.lines.append(h,e):this.lines.newLine(h,e),o=Lh(o).call(o,a)}}}}]),t}(),ng=["bold","ital","boldital","mono"],rg=function(){function t(e,i){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Ra(this,t),this.body=e,this.pointToSelf=!1,this.baseSize=void 0,this.fontOptions={},this.setOptions(i),this.size={top:0,left:0,width:0,height:0,yLine:0},this.isEdgeLabel=o}return Ha(t,[{key:"setOptions",value:function(t){if(this.elementOptions=t,this.initFontOptions(t.font),Xv(t.label)?this.labelDirty=!0:t.label=void 0,void 0!==t.font&&null!==t.font)if("string"==typeof t.font)this.baseSize=this.fontOptions.size;else if("object"===zh(t.font)){var e=t.font.size;void 0!==e&&(this.baseSize=e)}}},{key:"initFontOptions",value:function(e){var i=this;lf(ng,(function(t){i.fontOptions[t]={}})),t.parseFontString(this.fontOptions,e)?this.fontOptions.vadjust=0:lf(e,(function(t,e){null!=t&&"object"!==zh(t)&&(i.fontOptions[e]=t)}))}},{key:"constrain",value:function(t){var e={constrainWidth:!1,maxWdt:-1,minWdt:-1,constrainHeight:!1,minHgt:-1,valign:"middle"},i=Ef(t,"widthConstraint");if("number"==typeof i)e.maxWdt=Number(i),e.minWdt=Number(i);else if("object"===zh(i)){var o=Ef(t,["widthConstraint","maximum"]);"number"==typeof o&&(e.maxWdt=Number(o));var n=Ef(t,["widthConstraint","minimum"]);"number"==typeof n&&(e.minWdt=Number(n))}var r=Ef(t,"heightConstraint");if("number"==typeof r)e.minHgt=Number(r);else if("object"===zh(r)){var s=Ef(t,["heightConstraint","minimum"]);"number"==typeof s&&(e.minHgt=Number(s));var a=Ef(t,["heightConstraint","valign"]);"string"==typeof a&&("top"!==a&&"bottom"!==a||(e.valign=a))}return e}},{key:"update",value:function(t,e){this.setOptions(t,!0),this.propagateFonts(e),sf(this.fontOptions,this.constrain(e)),this.fontOptions.chooser=Uv("label",e)}},{key:"adjustSizes",value:function(t){var e=t?t.right+t.left:0;this.fontOptions.constrainWidth&&(this.fontOptions.maxWdt-=e,this.fontOptions.minWdt-=e);var i=t?t.top+t.bottom:0;this.fontOptions.constrainHeight&&(this.fontOptions.minHgt-=i)}},{key:"addFontOptionsToPile",value:function(t,e){for(var i=0;i<e.length;++i)this.addFontToPile(t,e[i])}},{key:"addFontToPile",value:function(t,e){if(void 0!==e&&void 0!==e.font&&null!==e.font){var i=e.font;t.push(i)}}},{key:"getBasicOptions",value:function(e){for(var i={},o=0;o<e.length;++o){var n=e[o],r={};t.parseFontString(r,n)&&(n=r),lf(n,(function(t,e){void 0!==t&&(Object.prototype.hasOwnProperty.call(i,e)||(-1!==Cl(ng).call(ng,e)?i[e]={}:i[e]=t))}))}return i}},{key:"getFontOption",value:function(e,i,o){for(var n,r=0;r<e.length;++r){var s=e[r];if(Object.prototype.hasOwnProperty.call(s,i)){if(null==(n=s[i]))continue;var a={};if(t.parseFontString(a,n)&&(n=a),Object.prototype.hasOwnProperty.call(n,o))return n[o]}}if(Object.prototype.hasOwnProperty.call(this.fontOptions,o))return this.fontOptions[o];throw new Error("Did not find value for multi-font for property: '"+o+"'")}},{key:"getFontOptions",value:function(t,e){for(var i={},o=["color","size","face","mod","vadjust"],n=0;n<o.length;++n){var r=o[n];i[r]=this.getFontOption(t,e,r)}return i}},{key:"propagateFonts",value:function(t){var e=this,i=[];this.addFontOptionsToPile(i,t),this.fontOptions=this.getBasicOptions(i);for(var o=function(t){var o=ng[t],n=e.fontOptions[o];lf(e.getFontOptions(i,o),(function(t,e){n[e]=t})),n.size=Number(n.size),n.vadjust=Number(n.vadjust)},n=0;n<ng.length;++n)o(n)}},{key:"draw",value:function(t,e,i,o,n){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"middle";if(void 0!==this.elementOptions.label){var s=this.fontOptions.size*this.body.view.scale;this.elementOptions.label&&s<this.elementOptions.scaling.label.drawThreshold-1||(s>=this.elementOptions.scaling.label.maxVisible&&(s=Number(this.elementOptions.scaling.label.maxVisible)/this.body.view.scale),this.calculateLabelSize(t,o,n,e,i,r),this._drawBackground(t),this._drawText(t,e,this.size.yLine,r,s))}}},{key:"_drawBackground",value:function(t){if(void 0!==this.fontOptions.background&&"none"!==this.fontOptions.background){t.fillStyle=this.fontOptions.background;var e=this.getSize();t.fillRect(e.left,e.top,e.width,e.height)}}},{key:"_drawText",value:function(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"middle",n=arguments.length>4?arguments[4]:void 0,r=this._setAlignment(t,e,i,o),s=Bh(r,2);e=s[0],i=s[1],t.textAlign="left",e-=this.size.width/2,this.fontOptions.valign&&this.size.height>this.size.labelHeight&&("top"===this.fontOptions.valign&&(i-=(this.size.height-this.size.labelHeight)/2),"bottom"===this.fontOptions.valign&&(i+=(this.size.height-this.size.labelHeight)/2));for(var a=0;a<this.lineCount;a++){var h=this.lines[a];if(h&&h.blocks){var d=0;this.isEdgeLabel||"center"===this.fontOptions.align?d+=(this.size.width-h.width)/2:"right"===this.fontOptions.align&&(d+=this.size.width-h.width);for(var l=0;l<h.blocks.length;l++){var c=h.blocks[l];t.font=c.font;var u=this._getColor(c.color,n,c.strokeColor),f=Bh(u,2),p=f[0],v=f[1];c.strokeWidth>0&&(t.lineWidth=c.strokeWidth,t.strokeStyle=v,t.lineJoin="round"),t.fillStyle=p,c.strokeWidth>0&&t.strokeText(c.text,e+d,i+c.vadjust),t.fillText(c.text,e+d,i+c.vadjust),d+=c.width}i+=h.height}}}},{key:"_setAlignment",value:function(t,e,i,o){if(this.isEdgeLabel&&"horizontal"!==this.fontOptions.align&&!1===this.pointToSelf){e=0,i=0;"top"===this.fontOptions.align?(t.textBaseline="alphabetic",i-=4):"bottom"===this.fontOptions.align?(t.textBaseline="hanging",i+=4):t.textBaseline="middle"}else t.textBaseline=o;return[e,i]}},{key:"_getColor",value:function(t,e,i){var o=t||"#000000",n=i||"#ffffff";if(e<=this.elementOptions.scaling.label.drawThreshold){var r=Math.max(0,Math.min(1,1-(this.elementOptions.scaling.label.drawThreshold-e)));o=uf(o,r),n=uf(n,r)}return[o,n]}},{key:"getTextSize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return this._processLabel(t,e,i),{width:this.size.width,height:this.size.height,lineCount:this.lineCount}}},{key:"getSize",value:function(){var t=this.size.left,e=this.size.top-1;if(this.isEdgeLabel){var i=.5*-this.size.width;switch(this.fontOptions.align){case"middle":t=i,e=.5*-this.size.height;break;case"top":t=i,e=-(this.size.height+2);break;case"bottom":t=i,e=2}}return{left:t,top:e,width:this.size.width,height:this.size.height}}},{key:"calculateLabelSize",value:function(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"middle";this._processLabel(t,e,i),this.size.left=o-.5*this.size.width,this.size.top=n-.5*this.size.height,this.size.yLine=n+.5*(1-this.lineCount)*this.fontOptions.size,"hanging"===r&&(this.size.top+=.5*this.fontOptions.size,this.size.top+=4,this.size.yLine+=4)}},{key:"getFormattingValues",value:function(t,e,i,o){var n=function(t,e,i){return"normal"===e?"mod"===i?"":t[i]:void 0!==t[e][i]?t[e][i]:t[i]},r={color:n(this.fontOptions,o,"color"),size:n(this.fontOptions,o,"size"),face:n(this.fontOptions,o,"face"),mod:n(this.fontOptions,o,"mod"),vadjust:n(this.fontOptions,o,"vadjust"),strokeWidth:this.fontOptions.strokeWidth,strokeColor:this.fontOptions.strokeColor};(e||i)&&("normal"===o&&!0===this.fontOptions.chooser&&this.elementOptions.labelHighlightBold?r.mod="bold":"function"==typeof this.fontOptions.chooser&&this.fontOptions.chooser(r,this.elementOptions.id,e,i));var s="";return void 0!==r.mod&&""!==r.mod&&(s+=r.mod+" "),s+=r.size+"px "+r.face,t.font=s.replace(/"/g,""),r.font=t.font,r.height=r.size,r}},{key:"differentState",value:function(t,e){return t!==this.selectedState||e!==this.hoverState}},{key:"_processLabelText",value:function(t,e,i,o){return new og(t,this,e,i).process(o)}},{key:"_processLabel",value:function(t,e,i){if(!1!==this.labelDirty||this.differentState(e,i)){var o=this._processLabelText(t,e,i,this.elementOptions.label);this.fontOptions.minWdt>0&&o.width<this.fontOptions.minWdt&&(o.width=this.fontOptions.minWdt),this.size.labelHeight=o.height,this.fontOptions.minHgt>0&&o.height<this.fontOptions.minHgt&&(o.height=this.fontOptions.minHgt),this.lines=o.lines,this.lineCount=o.lines.length,this.size.width=o.width,this.size.height=o.height,this.selectedState=e,this.hoverState=i,this.labelDirty=!1}}},{key:"visible",value:function(){return 0!==this.size.width&&0!==this.size.height&&void 0!==this.elementOptions.label&&!(this.fontOptions.size*this.body.view.scale<this.elementOptions.scaling.label.drawThreshold-1)}}],[{key:"parseFontString",value:function(t,e){if(!e||"string"!=typeof e)return!1;var i=e.split(" ");return t.size=+i[0].replace("px",""),t.face=i[1],t.color=i[2],!0}}]),t}(),sg=ue,ag=qt,hg=Kt,dg=E,lg=Do,cg=ei,ug=s,fg=M("Reflect","construct"),pg=ug((function(){function t(){}return!(fg((function(){}),[],t)instanceof t)})),vg=!ug((function(){fg((function(){}))})),gg=pg||vg;sg({target:"Reflect",stat:!0,forced:gg,sham:gg},{construct:function(t,e){ag(t),hg(e);var i=arguments.length<3?t:ag(arguments[2]);if(vg&&!pg)return fg(t,e,i);if(t==i){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var o=[null];return o.push.apply(o,e),new(cg.apply(t,o))}var n=i.prototype,r=lg(dg(n)?n:Object.prototype),s=Function.apply.call(t,r,e);return dg(s)?s:r}});var yg=O.Reflect.construct,mg=Dl;ue({target:"Object",stat:!0},{setPrototypeOf:rn});var bg=O.Object.setPrototypeOf;function wg(t,e){return(wg=bg||function(t,e){return t.__proto__=e,t})(t,e)}function kg(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=mg(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&wg(t,e)}function _g(t,e){if(e&&("object"===zh(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}var xg=Ud;function Eg(t){return(Eg=bg?xg:function(t){return t.__proto__||xg(t)})(t)}var Og=function(){function t(e,i,o){Ra(this,t),this.body=i,this.labelModule=o,this.setOptions(e),this.top=void 0,this.left=void 0,this.height=void 0,this.width=void 0,this.radius=void 0,this.margin=void 0,this.refreshNeeded=!0,this.boundingBox={top:0,left:0,right:0,bottom:0}}return Ha(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"_setMargins",value:function(t){this.margin={},this.options.margin&&("object"==zh(this.options.margin)?(this.margin.top=this.options.margin.top,this.margin.right=this.options.margin.right,this.margin.bottom=this.options.margin.bottom,this.margin.left=this.options.margin.left):(this.margin.top=this.options.margin,this.margin.right=this.options.margin,this.margin.bottom=this.options.margin,this.margin.left=this.options.margin)),t.adjustSizes(this.margin)}},{key:"_distanceToBorder",value:function(t,e){var i=this.options.borderWidth;return t&&this.resize(t),Math.min(Math.abs(this.width/2/Math.cos(e)),Math.abs(this.height/2/Math.sin(e)))+i}},{key:"enableShadow",value:function(t,e){e.shadow&&(t.shadowColor=e.shadowColor,t.shadowBlur=e.shadowSize,t.shadowOffsetX=e.shadowX,t.shadowOffsetY=e.shadowY)}},{key:"disableShadow",value:function(t,e){e.shadow&&(t.shadowColor="rgba(0,0,0,0)",t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0)}},{key:"enableBorderDashes",value:function(t,e){if(!1!==e.borderDashes)if(void 0!==t.setLineDash){var i=e.borderDashes;!0===i&&(i=[5,15]),t.setLineDash(i)}else console.warn("setLineDash is not supported in this browser. The dashed borders cannot be used."),this.options.shapeProperties.borderDashes=!1,e.borderDashes=!1}},{key:"disableBorderDashes",value:function(t,e){!1!==e.borderDashes&&(void 0!==t.setLineDash?t.setLineDash([0]):(console.warn("setLineDash is not supported in this browser. The dashed borders cannot be used."),this.options.shapeProperties.borderDashes=!1,e.borderDashes=!1))}},{key:"needsRefresh",value:function(t,e){return!0===this.refreshNeeded?(this.refreshNeeded=!1,!0):void 0===this.width||this.labelModule.differentState(t,e)}},{key:"initContextForDraw",value:function(t,e){var i=e.borderWidth/this.body.view.scale;t.lineWidth=Math.min(this.width,i),t.strokeStyle=e.borderColor,t.fillStyle=e.color}},{key:"performStroke",value:function(t,e){var i=e.borderWidth/this.body.view.scale;t.save(),i>0&&(this.enableBorderDashes(t,e),t.stroke(),this.disableBorderDashes(t,e)),t.restore()}},{key:"performFill",value:function(t,e){t.save(),t.fillStyle=e.color,this.enableShadow(t,e),Ql(t).call(t),this.disableShadow(t,e),t.restore(),this.performStroke(t,e)}},{key:"_addBoundingBoxMargin",value:function(t){this.boundingBox.left-=t,this.boundingBox.top-=t,this.boundingBox.bottom+=t,this.boundingBox.right+=t}},{key:"_updateBoundingBox",value:function(t,e,i,o,n){void 0!==i&&this.resize(i,o,n),this.left=t-this.width/2,this.top=e-this.height/2,this.boundingBox.left=this.left,this.boundingBox.top=this.top,this.boundingBox.bottom=this.top+this.height,this.boundingBox.right=this.left+this.width}},{key:"updateBoundingBox",value:function(t,e,i,o,n){this._updateBoundingBox(t,e,i,o,n)}},{key:"getDimensionsFromLabel",value:function(t,e,i){this.textSize=this.labelModule.getTextSize(t,e,i);var o=this.textSize.width,n=this.textSize.height;return 0===o&&(o=14,n=14),{width:o,height:n}}}]),t}();function Cg(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var Sg=function(t){kg(i,t);var e=Cg(i);function i(t,o,n){var r;return Ra(this,i),(r=e.call(this,t,o,n))._setMargins(n),r}return Ha(i,[{key:"resize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover;if(this.needsRefresh(e,i)){var o=this.getDimensionsFromLabel(t,e,i);this.width=o.width+this.margin.right+this.margin.left,this.height=o.height+this.margin.top+this.margin.bottom,this.radius=this.width/2}}},{key:"draw",value:function(t,e,i,o,n,r){this.resize(t,o,n),this.left=e-this.width/2,this.top=i-this.height/2,this.initContextForDraw(t,r),hi(t,this.left,this.top,this.width,this.height,r.borderRadius),this.performFill(t,r),this.updateBoundingBox(e,i,t,o,n),this.labelModule.draw(t,this.left+this.textSize.width/2+this.margin.left,this.top+this.textSize.height/2+this.margin.top,o,n)}},{key:"updateBoundingBox",value:function(t,e,i,o,n){this._updateBoundingBox(t,e,i,o,n);var r=this.options.shapeProperties.borderRadius;this._addBoundingBoxMargin(r)}},{key:"distanceToBorder",value:function(t,e){t&&this.resize(t);var i=this.options.borderWidth;return Math.min(Math.abs(this.width/2/Math.cos(e)),Math.abs(this.height/2/Math.sin(e)))+i}}]),i}(Og);function Tg(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var Mg=function(t){kg(i,t);var e=Tg(i);function i(t,o,n){var r;return Ra(this,i),(r=e.call(this,t,o,n)).labelOffset=0,r.selected=!1,r}return Ha(i,[{key:"setOptions",value:function(t,e,i){this.options=t,void 0===e&&void 0===i||this.setImages(e,i)}},{key:"setImages",value:function(t,e){e&&this.selected?(this.imageObj=e,this.imageObjAlt=t):(this.imageObj=t,this.imageObjAlt=e)}},{key:"switchImages",value:function(t){var e=t&&!this.selected||!t&&this.selected;if(this.selected=t,void 0!==this.imageObjAlt&&e){var i=this.imageObj;this.imageObj=this.imageObjAlt,this.imageObjAlt=i}}},{key:"_getImagePadding",value:function(){var t={top:0,right:0,bottom:0,left:0};if(this.options.imagePadding){var e=this.options.imagePadding;"object"==zh(e)?(t.top=e.top,t.right=e.right,t.bottom=e.bottom,t.left=e.left):(t.top=e,t.right=e,t.bottom=e,t.left=e)}return t}},{key:"_resizeImage",value:function(){var t,e;if(!1===this.options.shapeProperties.useImageSize){var i=1,o=1;this.imageObj.width&&this.imageObj.height&&(this.imageObj.width>this.imageObj.height?i=this.imageObj.width/this.imageObj.height:o=this.imageObj.height/this.imageObj.width),t=2*this.options.size*i,e=2*this.options.size*o}else{var n=this._getImagePadding();t=this.imageObj.width+n.left+n.right,e=this.imageObj.height+n.top+n.bottom}this.width=t,this.height=e,this.radius=.5*this.width}},{key:"_drawRawCircle",value:function(t,e,i,o){this.initContextForDraw(t,o),ai(t,e,i,o.size),this.performFill(t,o)}},{key:"_drawImageAtPosition",value:function(t,e){if(0!=this.imageObj.width){t.globalAlpha=void 0!==e.opacity?e.opacity:1,this.enableShadow(t,e);var i=1;!0===this.options.shapeProperties.interpolation&&(i=this.imageObj.width/this.width/this.body.view.scale);var o=this._getImagePadding(),n=this.left+o.left,r=this.top+o.top,s=this.width-o.left-o.right,a=this.height-o.top-o.bottom;this.imageObj.drawImageAtPosition(t,i,n,r,s,a),this.disableShadow(t,e)}}},{key:"_drawImageLabel",value:function(t,e,i,o,n){var r=0;if(void 0!==this.height){r=.5*this.height;var s=this.labelModule.getTextSize(t,o,n);s.lineCount>=1&&(r+=s.height/2)}var a=i+r;this.options.label&&(this.labelOffset=r),this.labelModule.draw(t,e,a,o,n,"hanging")}}]),i}(Og);function Pg(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var Dg=function(t){kg(i,t);var e=Pg(i);function i(t,o,n){var r;return Ra(this,i),(r=e.call(this,t,o,n))._setMargins(n),r}return Ha(i,[{key:"resize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover;if(this.needsRefresh(e,i)){var o=this.getDimensionsFromLabel(t,e,i),n=Math.max(o.width+this.margin.right+this.margin.left,o.height+this.margin.top+this.margin.bottom);this.options.size=n/2,this.width=n,this.height=n,this.radius=this.width/2}}},{key:"draw",value:function(t,e,i,o,n,r){this.resize(t,o,n),this.left=e-this.width/2,this.top=i-this.height/2,this._drawRawCircle(t,e,i,r),this.updateBoundingBox(e,i),this.labelModule.draw(t,this.left+this.textSize.width/2+this.margin.left,i,o,n)}},{key:"updateBoundingBox",value:function(t,e){this.boundingBox.top=e-this.options.size,this.boundingBox.left=t-this.options.size,this.boundingBox.right=t+this.options.size,this.boundingBox.bottom=e+this.options.size}},{key:"distanceToBorder",value:function(t){return t&&this.resize(t),.5*this.width}}]),i}(Mg);function Bg(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var Ig=function(t){kg(i,t);var e=Bg(i);function i(t,o,n,r,s){var a;return Ra(this,i),(a=e.call(this,t,o,n)).setImages(r,s),a}return Ha(i,[{key:"resize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover,o=void 0===this.imageObj.src||void 0===this.imageObj.width||void 0===this.imageObj.height;if(o){var n=2*this.options.size;return this.width=n,this.height=n,void(this.radius=.5*this.width)}this.needsRefresh(e,i)&&this._resizeImage()}},{key:"draw",value:function(t,e,i,o,n,r){this.switchImages(o),this.resize();var s=e,a=i;"top-left"===this.options.shapeProperties.coordinateOrigin?(this.left=e,this.top=i,s+=this.width/2,a+=this.height/2):(this.left=e-this.width/2,this.top=i-this.height/2),this._drawRawCircle(t,s,a,r),t.save(),t.clip(),this._drawImageAtPosition(t,r),t.restore(),this._drawImageLabel(t,s,a,o,n),this.updateBoundingBox(e,i)}},{key:"updateBoundingBox",value:function(t,e){"top-left"===this.options.shapeProperties.coordinateOrigin?(this.boundingBox.top=e,this.boundingBox.left=t,this.boundingBox.right=t+2*this.options.size,this.boundingBox.bottom=e+2*this.options.size):(this.boundingBox.top=e-this.options.size,this.boundingBox.left=t-this.options.size,this.boundingBox.right=t+this.options.size,this.boundingBox.bottom=e+this.options.size),this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelOffset)}},{key:"distanceToBorder",value:function(t){return t&&this.resize(t),.5*this.width}}]),i}(Mg);function zg(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var Fg=function(t){kg(i,t);var e=zg(i);function i(t,o,n){return Ra(this,i),e.call(this,t,o,n)}return Ha(i,[{key:"resize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{size:this.options.size};if(this.needsRefresh(e,i)){var n,r;this.labelModule.getTextSize(t,e,i);var s=2*o.size;this.width=null!==(n=this.customSizeWidth)&&void 0!==n?n:s,this.height=null!==(r=this.customSizeHeight)&&void 0!==r?r:s,this.radius=.5*this.width}}},{key:"_drawShape",value:function(t,e,i,o,n,r,s,a){var h,d=this;return this.resize(t,r,s,a),this.left=o-this.width/2,this.top=n-this.height/2,this.initContextForDraw(t,a),(h=e,Object.prototype.hasOwnProperty.call(ui,h)?ui[h]:function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),o=1;o<e;o++)i[o-1]=arguments[o];CanvasRenderingContext2D.prototype[h].call(t,i)})(t,o,n,a.size),this.performFill(t,a),void 0!==this.options.icon&&void 0!==this.options.icon.code&&(t.font=(r?"bold ":"")+this.height/2+"px "+(this.options.icon.face||"FontAwesome"),t.fillStyle=this.options.icon.color||"black",t.textAlign="center",t.textBaseline="middle",t.fillText(this.options.icon.code,o,n)),{drawExternalLabel:function(){if(void 0!==d.options.label){d.labelModule.calculateLabelSize(t,r,s,o,n,"hanging");var e=n+.5*d.height+.5*d.labelModule.size.height;d.labelModule.draw(t,o,e,r,s,"hanging")}d.updateBoundingBox(o,n)}}}},{key:"updateBoundingBox",value:function(t,e){this.boundingBox.top=e-this.options.size,this.boundingBox.left=t-this.options.size,this.boundingBox.right=t+this.options.size,this.boundingBox.bottom=e+this.options.size,void 0!==this.options.label&&this.labelModule.size.width>0&&(this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelModule.size.height))}}]),i}(Og);function Ng(t,e){var i=Gh(t);if(ha){var o=ha(t);e&&(o=$d(o).call(o,(function(e){return ba(t,e).enumerable}))),i.push.apply(i,o)}return i}function Ag(t){for(var e=1;e<arguments.length;e++){var i,o=null!=arguments[e]?arguments[e]:{};if(e%2)nd(i=Ng(Object(o),!0)).call(i,(function(e){Wa(t,e,o[e])}));else if(Ta)Ba(t,Ta(o));else{var n;nd(n=Ng(Object(o))).call(n,(function(e){Aa(t,e,ba(o,e))}))}}return t}function Rg(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var jg=function(t){kg(i,t);var e=Rg(i);function i(t,o,n,r){var s;return Ra(this,i),(s=e.call(this,t,o,n,r)).ctxRenderer=r,s}return Ha(i,[{key:"draw",value:function(t,e,i,o,n,r){this.resize(t,o,n,r),this.left=e-this.width/2,this.top=i-this.height/2,t.save();var s=this.ctxRenderer({ctx:t,id:this.options.id,x:e,y:i,state:{selected:o,hover:n},style:Ag({},r),label:this.options.label});if(null!=s.drawNode&&s.drawNode(),t.restore(),s.drawExternalLabel){var a=s.drawExternalLabel;s.drawExternalLabel=function(){t.save(),a(),t.restore()}}return s.nodeDimensions&&(this.customSizeWidth=s.nodeDimensions.width,this.customSizeHeight=s.nodeDimensions.height),s}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),i}(Fg);function Lg(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var Hg=function(t){kg(i,t);var e=Lg(i);function i(t,o,n){var r;return Ra(this,i),(r=e.call(this,t,o,n))._setMargins(n),r}return Ha(i,[{key:"resize",value:function(t,e,i){if(this.needsRefresh(e,i)){var o=this.getDimensionsFromLabel(t,e,i).width+this.margin.right+this.margin.left;this.width=o,this.height=o,this.radius=this.width/2}}},{key:"draw",value:function(t,e,i,o,n,r){this.resize(t,o,n),this.left=e-this.width/2,this.top=i-this.height/2,this.initContextForDraw(t,r),li(t,e-this.width/2,i-this.height/2,this.width,this.height),this.performFill(t,r),this.updateBoundingBox(e,i,t,o,n),this.labelModule.draw(t,this.left+this.textSize.width/2+this.margin.left,this.top+this.textSize.height/2+this.margin.top,o,n)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),i}(Og);function Wg(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var Vg=function(t){kg(i,t);var e=Wg(i);function i(t,o,n){return Ra(this,i),e.call(this,t,o,n)}return Ha(i,[{key:"draw",value:function(t,e,i,o,n,r){return this._drawShape(t,"diamond",4,e,i,o,n,r)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),i}(Fg);function qg(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var Ug=function(t){kg(i,t);var e=qg(i);function i(t,o,n){return Ra(this,i),e.call(this,t,o,n)}return Ha(i,[{key:"draw",value:function(t,e,i,o,n,r){return this._drawShape(t,"circle",2,e,i,o,n,r)}},{key:"distanceToBorder",value:function(t){return t&&this.resize(t),this.options.size}}]),i}(Fg);function Yg(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var Xg=function(t){kg(i,t);var e=Yg(i);function i(t,o,n){return Ra(this,i),e.call(this,t,o,n)}return Ha(i,[{key:"resize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover;if(this.needsRefresh(e,i)){var o=this.getDimensionsFromLabel(t,e,i);this.height=2*o.height,this.width=o.width+o.height,this.radius=.5*this.width}}},{key:"draw",value:function(t,e,i,o,n,r){this.resize(t,o,n),this.left=e-.5*this.width,this.top=i-.5*this.height,this.initContextForDraw(t,r),di(t,this.left,this.top,this.width,this.height),this.performFill(t,r),this.updateBoundingBox(e,i,t,o,n),this.labelModule.draw(t,e,i,o,n)}},{key:"distanceToBorder",value:function(t,e){t&&this.resize(t);var i=.5*this.width,o=.5*this.height,n=Math.sin(e)*i,r=Math.cos(e)*o;return i*o/Math.sqrt(n*n+r*r)}}]),i}(Og);function Gg(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var Kg=function(t){kg(i,t);var e=Gg(i);function i(t,o,n){var r;return Ra(this,i),(r=e.call(this,t,o,n))._setMargins(n),r}return Ha(i,[{key:"resize",value:function(t,e,i){this.needsRefresh(e,i)&&(this.iconSize={width:Number(this.options.icon.size),height:Number(this.options.icon.size)},this.width=this.iconSize.width+this.margin.right+this.margin.left,this.height=this.iconSize.height+this.margin.top+this.margin.bottom,this.radius=.5*this.width)}},{key:"draw",value:function(t,e,i,o,n,r){var s=this;return this.resize(t,o,n),this.options.icon.size=this.options.icon.size||50,this.left=e-this.width/2,this.top=i-this.height/2,this._icon(t,e,i,o,n,r),{drawExternalLabel:function(){if(void 0!==s.options.label){s.labelModule.draw(t,s.left+s.iconSize.width/2+s.margin.left,i+s.height/2+5,o)}s.updateBoundingBox(e,i)}}}},{key:"updateBoundingBox",value:function(t,e){if(this.boundingBox.top=e-.5*this.options.icon.size,this.boundingBox.left=t-.5*this.options.icon.size,this.boundingBox.right=t+.5*this.options.icon.size,this.boundingBox.bottom=e+.5*this.options.icon.size,void 0!==this.options.label&&this.labelModule.size.width>0){this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelModule.size.height+5)}}},{key:"_icon",value:function(t,e,i,o,n,r){var s=Number(this.options.icon.size);void 0!==this.options.icon.code?(t.font=[null!=this.options.icon.weight?this.options.icon.weight:o?"bold":"",(null!=this.options.icon.weight&&o?5:0)+s+"px",this.options.icon.face].join(" "),t.fillStyle=this.options.icon.color||"black",t.textAlign="center",t.textBaseline="middle",this.enableShadow(t,r),t.fillText(this.options.icon.code,e,i),this.disableShadow(t,r)):console.error("When using the icon shape, you need to define the code in the icon options object. This can be done per node or globally.")}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),i}(Og);function $g(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var Zg=function(t){kg(i,t);var e=$g(i);function i(t,o,n,r,s){var a;return Ra(this,i),(a=e.call(this,t,o,n)).setImages(r,s),a}return Ha(i,[{key:"resize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selected,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.hover,o=void 0===this.imageObj.src||void 0===this.imageObj.width||void 0===this.imageObj.height;if(o){var n=2*this.options.size;return this.width=n,void(this.height=n)}this.needsRefresh(e,i)&&this._resizeImage()}},{key:"draw",value:function(t,e,i,o,n,r){t.save(),this.switchImages(o),this.resize();var s=e,a=i;if("top-left"===this.options.shapeProperties.coordinateOrigin?(this.left=e,this.top=i,s+=this.width/2,a+=this.height/2):(this.left=e-this.width/2,this.top=i-this.height/2),!0===this.options.shapeProperties.useBorderWithImage){var h=this.options.borderWidth,d=this.options.borderWidthSelected||2*this.options.borderWidth,l=(o?d:h)/this.body.view.scale;t.lineWidth=Math.min(this.width,l),t.beginPath();var c=o?this.options.color.highlight.border:n?this.options.color.hover.border:this.options.color.border,u=o?this.options.color.highlight.background:n?this.options.color.hover.background:this.options.color.background;void 0!==r.opacity&&(c=uf(c,r.opacity),u=uf(u,r.opacity)),t.strokeStyle=c,t.fillStyle=u,t.rect(this.left-.5*t.lineWidth,this.top-.5*t.lineWidth,this.width+t.lineWidth,this.height+t.lineWidth),Ql(t).call(t),this.performStroke(t,r),t.closePath()}this._drawImageAtPosition(t,r),this._drawImageLabel(t,s,a,o,n),this.updateBoundingBox(e,i),t.restore()}},{key:"updateBoundingBox",value:function(t,e){this.resize(),"top-left"===this.options.shapeProperties.coordinateOrigin?(this.left=t,this.top=e):(this.left=t-this.width/2,this.top=e-this.height/2),this.boundingBox.left=this.left,this.boundingBox.top=this.top,this.boundingBox.bottom=this.top+this.height,this.boundingBox.right=this.left+this.width,void 0!==this.options.label&&this.labelModule.size.width>0&&(this.boundingBox.left=Math.min(this.boundingBox.left,this.labelModule.size.left),this.boundingBox.right=Math.max(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),this.boundingBox.bottom=Math.max(this.boundingBox.bottom,this.boundingBox.bottom+this.labelOffset))}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),i}(Mg);function Qg(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var Jg=function(t){kg(i,t);var e=Qg(i);function i(t,o,n){return Ra(this,i),e.call(this,t,o,n)}return Ha(i,[{key:"draw",value:function(t,e,i,o,n,r){return this._drawShape(t,"square",2,e,i,o,n,r)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),i}(Fg);function ty(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var ey=function(t){kg(i,t);var e=ty(i);function i(t,o,n){return Ra(this,i),e.call(this,t,o,n)}return Ha(i,[{key:"draw",value:function(t,e,i,o,n,r){return this._drawShape(t,"hexagon",4,e,i,o,n,r)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),i}(Fg);function iy(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var oy=function(t){kg(i,t);var e=iy(i);function i(t,o,n){return Ra(this,i),e.call(this,t,o,n)}return Ha(i,[{key:"draw",value:function(t,e,i,o,n,r){return this._drawShape(t,"star",4,e,i,o,n,r)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),i}(Fg);function ny(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var ry=function(t){kg(i,t);var e=ny(i);function i(t,o,n){var r;return Ra(this,i),(r=e.call(this,t,o,n))._setMargins(n),r}return Ha(i,[{key:"resize",value:function(t,e,i){this.needsRefresh(e,i)&&(this.textSize=this.labelModule.getTextSize(t,e,i),this.width=this.textSize.width+this.margin.right+this.margin.left,this.height=this.textSize.height+this.margin.top+this.margin.bottom,this.radius=.5*this.width)}},{key:"draw",value:function(t,e,i,o,n,r){this.resize(t,o,n),this.left=e-this.width/2,this.top=i-this.height/2,this.enableShadow(t,r),this.labelModule.draw(t,this.left+this.textSize.width/2+this.margin.left,this.top+this.textSize.height/2+this.margin.top,o,n),this.disableShadow(t,r),this.updateBoundingBox(e,i,t,o,n)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),i}(Og);function sy(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var ay=function(t){kg(i,t);var e=sy(i);function i(t,o,n){return Ra(this,i),e.call(this,t,o,n)}return Ha(i,[{key:"draw",value:function(t,e,i,o,n,r){return this._drawShape(t,"triangle",3,e,i,o,n,r)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),i}(Fg);function hy(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var dy=function(t){kg(i,t);var e=hy(i);function i(t,o,n){return Ra(this,i),e.call(this,t,o,n)}return Ha(i,[{key:"draw",value:function(t,e,i,o,n,r){return this._drawShape(t,"triangleDown",3,e,i,o,n,r)}},{key:"distanceToBorder",value:function(t,e){return this._distanceToBorder(t,e)}}]),i}(Fg);function ly(t,e){var i=Gh(t);if(ha){var o=ha(t);e&&(o=$d(o).call(o,(function(e){return ba(t,e).enumerable}))),i.push.apply(i,o)}return i}function cy(t){for(var e=1;e<arguments.length;e++){var i,o=null!=arguments[e]?arguments[e]:{};if(e%2)nd(i=ly(Object(o),!0)).call(i,(function(e){Wa(t,e,o[e])}));else if(Ta)Ba(t,Ta(o));else{var n;nd(n=ly(Object(o))).call(n,(function(e){Aa(t,e,ba(o,e))}))}}return t}var uy=function(){function t(e,i,o,n,r,s){Ra(this,t),this.options=kf(r),this.globalOptions=r,this.defaultOptions=s,this.body=i,this.edges=[],this.id=void 0,this.imagelist=o,this.grouplist=n,this.x=void 0,this.y=void 0,this.baseSize=this.options.size,this.baseFontSize=this.options.font.size,this.predefinedPosition=!1,this.selected=!1,this.hover=!1,this.labelModule=new rg(this.body,this.options,!1),this.setOptions(e)}return Ha(t,[{key:"attachEdge",value:function(t){var e;-1===Cl(e=this.edges).call(e,t)&&this.edges.push(t)}},{key:"detachEdge",value:function(t){var e,i,o=Cl(e=this.edges).call(e,t);-1!=o&&Od(i=this.edges).call(i,o,1)}},{key:"setOptions",value:function(e){var i=this.options.shape;if(e){if(void 0!==e.color&&(this._localColor=e.color),void 0!==e.id&&(this.id=e.id),void 0===this.id)throw new Error("Node must have an id");t.checkMass(e,this.id),void 0!==e.x&&(null===e.x?(this.x=void 0,this.predefinedPosition=!1):(this.x=yl(e.x),this.predefinedPosition=!0)),void 0!==e.y&&(null===e.y?(this.y=void 0,this.predefinedPosition=!1):(this.y=yl(e.y),this.predefinedPosition=!0)),void 0!==e.size&&(this.baseSize=e.size),void 0!==e.value&&(e.value=jv(e.value)),t.parseOptions(this.options,e,!0,this.globalOptions,this.grouplist);var o=[e,this.options,this.defaultOptions];return this.chooser=Uv("node",o),this._load_images(),this.updateLabelModule(e),void 0!==e.opacity&&t.checkOpacity(e.opacity)&&(this.options.opacity=e.opacity),this.updateShape(i),void 0!==e.hidden||void 0!==e.physics}}},{key:"_load_images",value:function(){if(("circularImage"===this.options.shape||"image"===this.options.shape)&&void 0===this.options.image)throw new Error("Option image must be defined for node type '"+this.options.shape+"'");if(void 0!==this.options.image){if(void 0===this.imagelist)throw new Error("Internal Error: No images provided");if("string"==typeof this.options.image)this.imageObj=this.imagelist.load(this.options.image,this.options.brokenImage,this.id);else{if(void 0===this.options.image.unselected)throw new Error("No unselected image provided");this.imageObj=this.imagelist.load(this.options.image.unselected,this.options.brokenImage,this.id),void 0!==this.options.image.selected?this.imageObjAlt=this.imagelist.load(this.options.image.selected,this.options.brokenImage,this.id):this.imageObjAlt=void 0}}}},{key:"getFormattingValues",value:function(){var t={color:this.options.color.background,opacity:this.options.opacity,borderWidth:this.options.borderWidth,borderColor:this.options.color.border,size:this.options.size,borderDashes:this.options.shapeProperties.borderDashes,borderRadius:this.options.shapeProperties.borderRadius,shadow:this.options.shadow.enabled,shadowColor:this.options.shadow.color,shadowSize:this.options.shadow.size,shadowX:this.options.shadow.x,shadowY:this.options.shadow.y};if(this.selected||this.hover?!0===this.chooser?this.selected?(null!=this.options.borderWidthSelected?t.borderWidth=this.options.borderWidthSelected:t.borderWidth*=2,t.color=this.options.color.highlight.background,t.borderColor=this.options.color.highlight.border,t.shadow=this.options.shadow.enabled):this.hover&&(t.color=this.options.color.hover.background,t.borderColor=this.options.color.hover.border,t.shadow=this.options.shadow.enabled):"function"==typeof this.chooser&&(this.chooser(t,this.options.id,this.selected,this.hover),!1===t.shadow&&(t.shadowColor===this.options.shadow.color&&t.shadowSize===this.options.shadow.size&&t.shadowX===this.options.shadow.x&&t.shadowY===this.options.shadow.y||(t.shadow=!0))):t.shadow=this.options.shadow.enabled,void 0!==this.options.opacity){var e=this.options.opacity;t.borderColor=uf(t.borderColor,e),t.color=uf(t.color,e),t.shadowColor=uf(t.shadowColor,e)}return t}},{key:"updateLabelModule",value:function(e){void 0!==this.options.label&&null!==this.options.label||(this.options.label=""),t.updateGroupOptions(this.options,cy(cy({},e),{},{color:e&&e.color||this._localColor||void 0}),this.grouplist);var i=this.grouplist.get(this.options.group,!1),o=[e,this.options,i,this.globalOptions,this.defaultOptions];this.labelModule.update(this.options,o),void 0!==this.labelModule.baseSize&&(this.baseFontSize=this.labelModule.baseSize)}},{key:"updateShape",value:function(t){if(t===this.options.shape&&this.shape)this.shape.setOptions(this.options,this.imageObj,this.imageObjAlt);else switch(this.options.shape){case"box":this.shape=new Sg(this.options,this.body,this.labelModule);break;case"circle":this.shape=new Dg(this.options,this.body,this.labelModule);break;case"circularImage":this.shape=new Ig(this.options,this.body,this.labelModule,this.imageObj,this.imageObjAlt);break;case"custom":this.shape=new jg(this.options,this.body,this.labelModule,this.options.ctxRenderer);break;case"database":this.shape=new Hg(this.options,this.body,this.labelModule);break;case"diamond":this.shape=new Vg(this.options,this.body,this.labelModule);break;case"dot":this.shape=new Ug(this.options,this.body,this.labelModule);break;case"ellipse":this.shape=new Xg(this.options,this.body,this.labelModule);break;case"icon":this.shape=new Kg(this.options,this.body,this.labelModule);break;case"image":this.shape=new Zg(this.options,this.body,this.labelModule,this.imageObj,this.imageObjAlt);break;case"square":this.shape=new Jg(this.options,this.body,this.labelModule);break;case"hexagon":this.shape=new ey(this.options,this.body,this.labelModule);break;case"star":this.shape=new oy(this.options,this.body,this.labelModule);break;case"text":this.shape=new ry(this.options,this.body,this.labelModule);break;case"triangle":this.shape=new ay(this.options,this.body,this.labelModule);break;case"triangleDown":this.shape=new dy(this.options,this.body,this.labelModule);break;default:this.shape=new Xg(this.options,this.body,this.labelModule)}this.needsRefresh()}},{key:"select",value:function(){this.selected=!0,this.needsRefresh()}},{key:"unselect",value:function(){this.selected=!1,this.needsRefresh()}},{key:"needsRefresh",value:function(){this.shape.refreshNeeded=!0}},{key:"getTitle",value:function(){return this.options.title}},{key:"distanceToBorder",value:function(t,e){return this.shape.distanceToBorder(t,e)}},{key:"isFixed",value:function(){return this.options.fixed.x&&this.options.fixed.y}},{key:"isSelected",value:function(){return this.selected}},{key:"getValue",value:function(){return this.options.value}},{key:"getLabelSize",value:function(){return this.labelModule.size()}},{key:"setValueRange",value:function(t,e,i){if(void 0!==this.options.value){var o=this.options.scaling.customScalingFunction(t,e,i,this.options.value),n=this.options.scaling.max-this.options.scaling.min;if(!0===this.options.scaling.label.enabled){var r=this.options.scaling.label.max-this.options.scaling.label.min;this.options.font.size=this.options.scaling.label.min+o*r}this.options.size=this.options.scaling.min+o*n}else this.options.size=this.baseSize,this.options.font.size=this.baseFontSize;this.updateLabelModule()}},{key:"draw",value:function(t){var e=this.getFormattingValues();return this.shape.draw(t,this.x,this.y,this.selected,this.hover,e)||{}}},{key:"updateBoundingBox",value:function(t){this.shape.updateBoundingBox(this.x,this.y,t)}},{key:"resize",value:function(t){var e=this.getFormattingValues();this.shape.resize(t,this.selected,this.hover,e)}},{key:"getItemsOnPoint",value:function(t){var e=[];return this.labelModule.visible()&&Yv(this.labelModule.getSize(),t)&&e.push({nodeId:this.id,labelId:0}),Yv(this.shape.boundingBox,t)&&e.push({nodeId:this.id}),e}},{key:"isOverlappingWith",value:function(t){return this.shape.left<t.right&&this.shape.left+this.shape.width>t.left&&this.shape.top<t.bottom&&this.shape.top+this.shape.height>t.top}},{key:"isBoundingBoxOverlappingWith",value:function(t){return this.shape.boundingBox.left<t.right&&this.shape.boundingBox.right>t.left&&this.shape.boundingBox.top<t.bottom&&this.shape.boundingBox.bottom>t.top}}],[{key:"checkOpacity",value:function(t){return 0<=t&&t<=1}},{key:"checkCoordinateOrigin",value:function(t){return void 0===t||"center"===t||"top-left"===t}},{key:"updateGroupOptions",value:function(e,i,o){var n;if(void 0!==o){var r=e.group;if(void 0!==i&&void 0!==i.group&&r!==i.group)throw new Error("updateGroupOptions: group values in options don't match.");if("number"==typeof r||"string"==typeof r&&""!=r){var s=o.get(r);void 0!==s.opacity&&void 0===i.opacity&&(t.checkOpacity(s.opacity)||(console.error("Invalid option for node opacity. Value must be between 0 and 1, found: "+s.opacity),s.opacity=void 0));var a=$d(n=qv(i)).call(n,(function(t){return null!=i[t]}));a.push("font"),rf(a,e,s),e.color=pf(e.color)}}}},{key:"parseOptions",value:function(e,i){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4?arguments[4]:void 0,s=["color","fixed","shadow"];if(rf(s,e,i,o),t.checkMass(i),void 0!==e.opacity&&(t.checkOpacity(e.opacity)||(console.error("Invalid option for node opacity. Value must be between 0 and 1, found: "+e.opacity),e.opacity=void 0)),void 0!==i.opacity&&(t.checkOpacity(i.opacity)||(console.error("Invalid option for node opacity. Value must be between 0 and 1, found: "+i.opacity),i.opacity=void 0)),i.shapeProperties&&!t.checkCoordinateOrigin(i.shapeProperties.coordinateOrigin)&&console.error("Invalid option for node coordinateOrigin, found: "+i.shapeProperties.coordinateOrigin),_f(e,i,"shadow",n),void 0!==i.color&&null!==i.color){var a=pf(i.color);of(e.color,a)}else!0===o&&null===i.color&&(e.color=kf(n.color));void 0!==i.fixed&&null!==i.fixed&&("boolean"==typeof i.fixed?(e.fixed.x=i.fixed,e.fixed.y=i.fixed):(void 0!==i.fixed.x&&"boolean"==typeof i.fixed.x&&(e.fixed.x=i.fixed.x),void 0!==i.fixed.y&&"boolean"==typeof i.fixed.y&&(e.fixed.y=i.fixed.y))),!0===o&&null===i.font&&(e.font=kf(n.font)),t.updateGroupOptions(e,i,r),void 0!==i.scaling&&_f(e.scaling,i.scaling,"label",n.scaling)}},{key:"checkMass",value:function(t,e){if(void 0!==t.mass&&t.mass<=0){var i="";void 0!==e&&(i=" in node id: "+e),console.error("%cNegative or zero mass disallowed"+i+", setting mass to 1.",Ff),t.mass=1}}}]),t}();function fy(t,e){var i=void 0!==Nh&&xr(t)||t["@@iterator"];if(!i){if(Hh(t)||(i=function(t,e){var i;if(!t)return;if("string"==typeof t)return py(t,e);var o=Lh(i=Object.prototype.toString.call(t)).call(i,8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return rr(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return py(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,a=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){a=!0,r=t},f:function(){try{s||null==i.return||i.return()}finally{if(a)throw r}}}}function py(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var vy=function(){function t(e,i,o,n){var r,s=this;if(Ra(this,t),this.body=e,this.images=i,this.groups=o,this.layoutEngine=n,this.body.functions.createNode=si(r=this.create).call(r,this),this.nodesListeners={add:function(t,e){s.add(e.items)},update:function(t,e){s.update(e.items,e.data,e.oldData)},remove:function(t,e){s.remove(e.items)}},this.defaultOptions={borderWidth:1,borderWidthSelected:void 0,brokenImage:void 0,color:{border:"#2B7CE9",background:"#97C2FC",highlight:{border:"#2B7CE9",background:"#D2E5FF"},hover:{border:"#2B7CE9",background:"#D2E5FF"}},opacity:void 0,fixed:{x:!1,y:!1},font:{color:"#343434",size:14,face:"arial",background:"none",strokeWidth:0,strokeColor:"#ffffff",align:"center",vadjust:0,multi:!1,bold:{mod:"bold"},boldital:{mod:"bold italic"},ital:{mod:"italic"},mono:{mod:"",size:15,face:"monospace",vadjust:2}},group:void 0,hidden:!1,icon:{face:"FontAwesome",code:void 0,size:50,color:"#2B7CE9"},image:void 0,imagePadding:{top:0,right:0,bottom:0,left:0},label:void 0,labelHighlightBold:!0,level:void 0,margin:{top:5,right:5,bottom:5,left:5},mass:1,physics:!0,scaling:{min:10,max:30,label:{enabled:!1,min:14,max:30,maxVisible:30,drawThreshold:5},customScalingFunction:function(t,e,i,o){if(e===t)return.5;var n=1/(e-t);return Math.max(0,(o-t)*n)}},shadow:{enabled:!1,color:"rgba(0,0,0,0.5)",size:10,x:5,y:5},shape:"ellipse",shapeProperties:{borderDashes:!1,borderRadius:6,interpolation:!0,useImageSize:!1,useBorderWithImage:!1,coordinateOrigin:"center"},size:25,title:void 0,value:void 0,x:void 0,y:void 0},this.defaultOptions.mass<=0)throw"Internal error: mass in defaultOptions of NodesHandler may not be zero or negative";this.options=kf(this.defaultOptions),this.bindEventListeners()}return Ha(t,[{key:"bindEventListeners",value:function(){var t,e,i=this;this.body.emitter.on("refreshNodes",si(t=this.refresh).call(t,this)),this.body.emitter.on("refresh",si(e=this.refresh).call(e,this)),this.body.emitter.on("destroy",(function(){lf(i.nodesListeners,(function(t,e){i.body.data.nodes&&i.body.data.nodes.off(e,t)})),delete i.body.functions.createNode,delete i.nodesListeners.add,delete i.nodesListeners.update,delete i.nodesListeners.remove,delete i.nodesListeners}))}},{key:"setOptions",value:function(t){if(void 0!==t){if(uy.parseOptions(this.options,t),void 0!==t.opacity&&(Tv(t.opacity)||!Pv(t.opacity)||t.opacity<0||t.opacity>1?console.error("Invalid option for node opacity. Value must be between 0 and 1, found: "+t.opacity):this.options.opacity=t.opacity),void 0!==t.shape)for(var e in this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,e)&&this.body.nodes[e].updateShape();if(void 0!==t.font||void 0!==t.widthConstraint||void 0!==t.heightConstraint)for(var i=0,o=Gh(this.body.nodes);i<o.length;i++){var n=o[i];this.body.nodes[n].updateLabelModule(),this.body.nodes[n].needsRefresh()}if(void 0!==t.size)for(var r in this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,r)&&this.body.nodes[r].needsRefresh();void 0===t.hidden&&void 0===t.physics||this.body.emitter.emit("_dataChanged")}}},{key:"setData",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=this.body.data.nodes;if(e.isDataViewLike("id",t))this.body.data.nodes=t;else if(Hh(t))this.body.data.nodes=new e.DataSet,this.body.data.nodes.add(t);else{if(t)throw new TypeError("Array or DataSet expected");this.body.data.nodes=new e.DataSet}if(o&&lf(this.nodesListeners,(function(t,e){o.off(e,t)})),this.body.nodes={},this.body.data.nodes){var n=this;lf(this.nodesListeners,(function(t,e){n.body.data.nodes.on(e,t)}));var r=this.body.data.nodes.getIds();this.add(r,!0)}!1===i&&this.body.emitter.emit("_dataChanged")}},{key:"add",value:function(t){for(var e,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=[],n=0;n<t.length;n++){e=t[n];var r=this.body.data.nodes.get(e),s=this.create(r);o.push(s),this.body.nodes[e]=s}this.layoutEngine.positionInitially(o),!1===i&&this.body.emitter.emit("_dataChanged")}},{key:"update",value:function(t,e,i){for(var o=this.body.nodes,n=!1,r=0;r<t.length;r++){var s=t[r],a=o[s],h=e[r];void 0!==a?a.setOptions(h)&&(n=!0):(n=!0,a=this.create(h),o[s]=a)}n||void 0===i||(n=zv(e).call(e,(function(t,e){var o=i[e];return o&&o.level!==t.level}))),!0===n?this.body.emitter.emit("_dataChanged"):this.body.emitter.emit("_dataUpdated")}},{key:"remove",value:function(t){for(var e=this.body.nodes,i=0;i<t.length;i++){delete e[t[i]]}this.body.emitter.emit("_dataChanged")}},{key:"create",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:uy;return new e(t,this.body,this.images,this.groups,this.options,this.defaultOptions)}},{key:"refresh",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];lf(this.body.nodes,(function(i,o){var n=t.body.data.nodes.get(o);void 0!==n&&(!0===e&&i.setOptions({x:null,y:null}),i.setOptions({fixed:!1}),i.setOptions(n))}))}},{key:"getPositions",value:function(t){var e={};if(void 0!==t){if(!0===Hh(t)){for(var i=0;i<t.length;i++)if(void 0!==this.body.nodes[t[i]]){var o=this.body.nodes[t[i]];e[t[i]]={x:Math.round(o.x),y:Math.round(o.y)}}}else if(void 0!==this.body.nodes[t]){var n=this.body.nodes[t];e[t]={x:Math.round(n.x),y:Math.round(n.y)}}}else for(var r=0;r<this.body.nodeIndices.length;r++){var s=this.body.nodes[this.body.nodeIndices[r]];e[this.body.nodeIndices[r]]={x:Math.round(s.x),y:Math.round(s.y)}}return e}},{key:"getPosition",value:function(t){if(null==t)throw new TypeError("No id was specified for getPosition method.");if(null==this.body.nodes[t])throw new ReferenceError("NodeId provided for getPosition does not exist. Provided: ".concat(t));return{x:Math.round(this.body.nodes[t].x),y:Math.round(this.body.nodes[t].y)}}},{key:"storePositions",value:function(){var t,e=[],i=this.body.data.nodes.getDataSet(),o=fy(i.get());try{for(o.s();!(t=o.n()).done;){var n=t.value,r=n.id,s=this.body.nodes[r],a=Math.round(s.x),h=Math.round(s.y);n.x===a&&n.y===h||e.push({id:r,x:a,y:h})}}catch(t){o.e(t)}finally{o.f()}i.update(e)}},{key:"getBoundingBox",value:function(t){if(void 0!==this.body.nodes[t])return this.body.nodes[t].shape.boundingBox}},{key:"getConnectedNodes",value:function(t,e){var i=[];if(void 0!==this.body.nodes[t])for(var o=this.body.nodes[t],n={},r=0;r<o.edges.length;r++){var s=o.edges[r];"to"!==e&&s.toId==o.id?void 0===n[s.fromId]&&(i.push(s.fromId),n[s.fromId]=!0):"from"!==e&&s.fromId==o.id&&void 0===n[s.toId]&&(i.push(s.toId),n[s.toId]=!0)}return i}},{key:"getConnectedEdges",value:function(t){var e=[];if(void 0!==this.body.nodes[t])for(var i=this.body.nodes[t],o=0;o<i.edges.length;o++)e.push(i.edges[o].id);else console.error("NodeId provided for getConnectedEdges does not exist. Provided: ",t);return e}},{key:"moveNode",value:function(t,e,i){var o=this;void 0!==this.body.nodes[t]?(this.body.nodes[t].x=Number(e),this.body.nodes[t].y=Number(i),Yl((function(){o.body.emitter.emit("startSimulation")}),0)):console.error("Node id supplied to moveNode does not exist. Provided: ",t)}}]),t}(),gy=E,yy=Kt,my=et,by=r,wy=no;ue({target:"Reflect",stat:!0},{get:function t(e,i){var o,n,r=arguments.length<3?e:arguments[2];return yy(e)===r?e[i]:(o=by.f(e,i))?my(o,"value")?o.value:void 0===o.get?void 0:o.get.call(r):gy(n=wy(e))?t(n,i,r):void 0}});var ky=O.Reflect.get,_y=ma;function xy(t,e,i){return(xy="undefined"!=typeof Reflect&&ky?ky:function(t,e,i){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Eg(t)););return t}(t,e);if(o){var n=_y(o,e);return n.get?n.get.call(i):n.value}})(t,e,i||t)}var Ey=ue,Oy=Math.hypot,Cy=Math.abs,Sy=Math.sqrt;Ey({target:"Math",stat:!0,forced:!!Oy&&Oy(1/0,NaN)!==1/0},{hypot:function(t,e){for(var i,o,n=0,r=0,s=arguments.length,a=0;r<s;)a<(i=Cy(arguments[r++]))?(n=n*(o=a/i)*o+1,a=i):n+=i>0?(o=i/a)*o:i;return a===1/0?1/0:a*Sy(n)}});var Ty=O.Math.hypot;function My(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var Py=function(){function t(){Ra(this,t)}return Ha(t,null,[{key:"transform",value:function(t,e){Hh(t)||(t=[t]);for(var i=e.point.x,o=e.point.y,n=e.angle,r=e.length,s=0;s<t.length;++s){var a=t[s],h=a.x*Math.cos(n)-a.y*Math.sin(n),d=a.x*Math.sin(n)+a.y*Math.cos(n);a.x=i+r*h,a.y=o+r*d}}},{key:"drawPath",value:function(t,e){t.beginPath(),t.moveTo(e[0].x,e[0].y);for(var i=1;i<e.length;++i)t.lineTo(e[i].x,e[i].y);t.closePath()}}]),t}(),Dy=function(t){kg(i,t);var e=My(i);function i(){return Ra(this,i),e.apply(this,arguments)}return Ha(i,null,[{key:"draw",value:function(t,e){if(e.image){t.save(),t.translate(e.point.x,e.point.y),t.rotate(Math.PI/2+e.angle);var i=null!=e.imageWidth?e.imageWidth:e.image.width,o=null!=e.imageHeight?e.imageHeight:e.image.height;e.image.drawImageAtPosition(t,1,-i/2,0,i,o),t.restore()}return!1}}]),i}(Py),By=function(t){kg(i,t);var e=My(i);function i(){return Ra(this,i),e.apply(this,arguments)}return Ha(i,null,[{key:"draw",value:function(t,e){var i=[{x:0,y:0},{x:-1,y:.3},{x:-.9,y:0},{x:-1,y:-.3}];return Py.transform(i,e),Py.drawPath(t,i),!0}}]),i}(Py),Iy=function(){function t(){Ra(this,t)}return Ha(t,null,[{key:"draw",value:function(t,e){var i=[{x:-1,y:0},{x:0,y:.3},{x:-.4,y:0},{x:0,y:-.3}];return Py.transform(i,e),Py.drawPath(t,i),!0}}]),t}(),zy=function(){function t(){Ra(this,t)}return Ha(t,null,[{key:"draw",value:function(t,e){var i={x:-.4,y:0};Py.transform(i,e),t.strokeStyle=t.fillStyle,t.fillStyle="rgba(0, 0, 0, 0)";var o=Math.PI,n=e.angle-o/2,r=e.angle+o/2;return t.beginPath(),t.arc(i.x,i.y,.4*e.length,n,r,!1),t.stroke(),!0}}]),t}(),Fy=function(){function t(){Ra(this,t)}return Ha(t,null,[{key:"draw",value:function(t,e){var i={x:-.3,y:0};Py.transform(i,e),t.strokeStyle=t.fillStyle,t.fillStyle="rgba(0, 0, 0, 0)";var o=Math.PI,n=e.angle+o/2,r=e.angle+3*o/2;return t.beginPath(),t.arc(i.x,i.y,.4*e.length,n,r,!1),t.stroke(),!0}}]),t}(),Ny=function(){function t(){Ra(this,t)}return Ha(t,null,[{key:"draw",value:function(t,e){var i=[{x:.02,y:0},{x:-1,y:.3},{x:-1,y:-.3}];return Py.transform(i,e),Py.drawPath(t,i),!0}}]),t}(),Ay=function(){function t(){Ra(this,t)}return Ha(t,null,[{key:"draw",value:function(t,e){var i=[{x:0,y:.3},{x:0,y:-.3},{x:-1,y:0}];return Py.transform(i,e),Py.drawPath(t,i),!0}}]),t}(),Ry=function(){function t(){Ra(this,t)}return Ha(t,null,[{key:"draw",value:function(t,e){var i={x:-.4,y:0};return Py.transform(i,e),ai(t,i.x,i.y,.4*e.length),!0}}]),t}(),jy=function(){function t(){Ra(this,t)}return Ha(t,null,[{key:"draw",value:function(t,e){var i=[{x:0,y:.5},{x:0,y:-.5},{x:-.15,y:-.5},{x:-.15,y:.5}];return Py.transform(i,e),Py.drawPath(t,i),!0}}]),t}(),Ly=function(){function t(){Ra(this,t)}return Ha(t,null,[{key:"draw",value:function(t,e){var i=[{x:0,y:.3},{x:0,y:-.3},{x:-.6,y:-.3},{x:-.6,y:.3}];return Py.transform(i,e),Py.drawPath(t,i),!0}}]),t}(),Hy=function(){function t(){Ra(this,t)}return Ha(t,null,[{key:"draw",value:function(t,e){var i=[{x:0,y:0},{x:-.5,y:-.3},{x:-1,y:0},{x:-.5,y:.3}];return Py.transform(i,e),Py.drawPath(t,i),!0}}]),t}(),Wy=function(){function t(){Ra(this,t)}return Ha(t,null,[{key:"draw",value:function(t,e){var i=[{x:-1,y:.3},{x:-.5,y:0},{x:-1,y:-.3},{x:0,y:0}];return Py.transform(i,e),Py.drawPath(t,i),!0}}]),t}(),Vy=function(){function t(){Ra(this,t)}return Ha(t,null,[{key:"draw",value:function(t,e){var i;switch(e.type&&(i=e.type.toLowerCase()),i){case"image":return Dy.draw(t,e);case"circle":return Ry.draw(t,e);case"box":return Ly.draw(t,e);case"crow":return Iy.draw(t,e);case"curve":return zy.draw(t,e);case"diamond":return Hy.draw(t,e);case"inv_curve":return Fy.draw(t,e);case"triangle":return Ny.draw(t,e);case"inv_triangle":return Ay.draw(t,e);case"bar":return jy.draw(t,e);case"vee":return Wy.draw(t,e);case"arrow":default:return By.draw(t,e)}}}]),t}();function qy(t,e){var i=Gh(t);if(ha){var o=ha(t);e&&(o=$d(o).call(o,(function(e){return ba(t,e).enumerable}))),i.push.apply(i,o)}return i}function Uy(t){for(var e=1;e<arguments.length;e++){var i,o=null!=arguments[e]?arguments[e]:{};if(e%2)nd(i=qy(Object(o),!0)).call(i,(function(e){Wa(t,e,o[e])}));else if(Ta)Ba(t,Ta(o));else{var n;nd(n=qy(Object(o))).call(n,(function(e){Aa(t,e,ba(o,e))}))}}return t}var Yy=function(){function t(e,i,o){Ra(this,t),this._body=i,this._labelModule=o,this.color={},this.colorDirty=!0,this.hoverWidth=1.5,this.selectionWidth=2,this.setOptions(e),this.fromPoint=this.from,this.toPoint=this.to}return Ha(t,[{key:"connect",value:function(){this.from=this._body.nodes[this.options.from],this.to=this._body.nodes[this.options.to]}},{key:"cleanup",value:function(){return!1}},{key:"setOptions",value:function(t){this.options=t,this.from=this._body.nodes[this.options.from],this.to=this._body.nodes[this.options.to],this.id=this.options.id}},{key:"drawLine",value:function(t,e,i,o){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.getViaNode();t.strokeStyle=this.getColor(t,e),t.lineWidth=e.width,!1!==e.dashes?this._drawDashedLine(t,e,n):this._drawLine(t,e,n)}},{key:"_drawLine",value:function(t,e,i,o,n){if(this.from!=this.to)this._line(t,e,i,o,n);else{var r=Bh(this._getCircleData(t),3),s=r[0],a=r[1],h=r[2];this._circle(t,e,s,a,h)}}},{key:"_drawDashedLine",value:function(t,e,i,o,n){t.lineCap="round";var r=Hh(e.dashes)?e.dashes:[5,5];if(void 0!==t.setLineDash){if(t.save(),t.setLineDash(r),t.lineDashOffset=0,this.from!=this.to)this._line(t,e,i);else{var s=Bh(this._getCircleData(t),3),a=s[0],h=s[1],d=s[2];this._circle(t,e,a,h,d)}t.setLineDash([0]),t.lineDashOffset=0,t.restore()}else{if(this.from!=this.to)ci(t,this.from.x,this.from.y,this.to.x,this.to.y,r);else{var l=Bh(this._getCircleData(t),3),c=l[0],u=l[1],f=l[2];this._circle(t,e,c,u,f)}this.enableShadow(t,e),t.stroke(),this.disableShadow(t,e)}}},{key:"findBorderPosition",value:function(t,e,i){return this.from!=this.to?this._findBorderPosition(t,e,i):this._findBorderPositionCircle(t,e,i)}},{key:"findBorderPositions",value:function(t){if(this.from!=this.to)return{from:this._findBorderPosition(this.from,t),to:this._findBorderPosition(this.to,t)};var e,i=Bh(Lh(e=this._getCircleData(t)).call(e,0,2),2),o=i[0],n=i[1];return{from:this._findBorderPositionCircle(this.from,t,{x:o,y:n,low:.25,high:.6,direction:-1}),to:this._findBorderPositionCircle(this.from,t,{x:o,y:n,low:.6,high:.8,direction:1})}}},{key:"_getCircleData",value:function(t){var e=this.options.selfReference.size;void 0!==t&&void 0===this.from.shape.width&&this.from.shape.resize(t);var i=Gv(t,this.options.selfReference.angle,e,this.from);return[i.x,i.y,e]}},{key:"_pointOnCircle",value:function(t,e,i,o){var n=2*o*Math.PI;return{x:t+i*Math.cos(n),y:e-i*Math.sin(n)}}},{key:"_findBorderPositionCircle",value:function(t,e,i){var o,n=i.x,r=i.y,s=i.low,a=i.high,h=i.direction,d=this.options.selfReference.size,l=.5*(s+a),c=0;!0===this.options.arrowStrikethrough&&(-1===h?c=this.options.endPointOffset.from:1===h&&(c=this.options.endPointOffset.to));var u=0;do{l=.5*(s+a),o=this._pointOnCircle(n,r,d,l);var f=Math.atan2(t.y-o.y,t.x-o.x),p=t.distanceToBorder(e,f)+c-Math.sqrt(Math.pow(o.x-t.x,2)+Math.pow(o.y-t.y,2));if(Math.abs(p)<.05)break;p>0?h>0?s=l:a=l:h>0?a=l:s=l,++u}while(s<=a&&u<10);return Uy(Uy({},o),{},{t:l})}},{key:"getLineWidth",value:function(t,e){return!0===t?Math.max(this.selectionWidth,.3/this._body.view.scale):!0===e?Math.max(this.hoverWidth,.3/this._body.view.scale):Math.max(this.options.width,.3/this._body.view.scale)}},{key:"getColor",value:function(t,e){if(!1!==e.inheritsColor){if("both"===e.inheritsColor&&this.from.id!==this.to.id){var i=t.createLinearGradient(this.from.x,this.from.y,this.to.x,this.to.y),o=this.from.options.color.highlight.border,n=this.to.options.color.highlight.border;return!1===this.from.selected&&!1===this.to.selected?(o=uf(this.from.options.color.border,e.opacity),n=uf(this.to.options.color.border,e.opacity)):!0===this.from.selected&&!1===this.to.selected?n=this.to.options.color.border:!1===this.from.selected&&!0===this.to.selected&&(o=this.from.options.color.border),i.addColorStop(0,o),i.addColorStop(1,n),i}return"to"===e.inheritsColor?uf(this.to.options.color.border,e.opacity):uf(this.from.options.color.border,e.opacity)}return uf(e.color,e.opacity)}},{key:"_circle",value:function(t,e,i,o,n){this.enableShadow(t,e);var r=0,s=2*Math.PI;if(!this.options.selfReference.renderBehindTheNode){var a=this.options.selfReference.angle,h=this.options.selfReference.angle+Math.PI,d=this._findBorderPositionCircle(this.from,t,{x:i,y:o,low:a,high:h,direction:-1}),l=this._findBorderPositionCircle(this.from,t,{x:i,y:o,low:a,high:h,direction:1});r=Math.atan2(d.y-o,d.x-i),s=Math.atan2(l.y-o,l.x-i)}t.beginPath(),t.arc(i,o,n,r,s,!1),t.stroke(),this.disableShadow(t,e)}},{key:"getDistanceToEdge",value:function(t,e,i,o,n,r){if(this.from!=this.to)return this._getDistanceToEdge(t,e,i,o,n,r);var s=Bh(this._getCircleData(void 0),3),a=s[0],h=s[1],d=s[2],l=a-n,c=h-r;return Math.abs(Math.sqrt(l*l+c*c)-d)}},{key:"_getDistanceToLine",value:function(t,e,i,o,n,r){var s=i-t,a=o-e,h=((n-t)*s+(r-e)*a)/(s*s+a*a);h>1?h=1:h<0&&(h=0);var d=t+h*s-n,l=e+h*a-r;return Math.sqrt(d*d+l*l)}},{key:"getArrowData",value:function(t,e,i,o,n,r){var s,a,h,d,l,c,u,f=r.width;"from"===e?(h=this.from,d=this.to,l=r.fromArrowScale<0,c=Math.abs(r.fromArrowScale),u=r.fromArrowType):"to"===e?(h=this.to,d=this.from,l=r.toArrowScale<0,c=Math.abs(r.toArrowScale),u=r.toArrowType):(h=this.to,d=this.from,l=r.middleArrowScale<0,c=Math.abs(r.middleArrowScale),u=r.middleArrowType);var p=15*c+3*f;if(h!=d){var v=p/Ty(h.x-d.x,h.y-d.y);if("middle"!==e)if(!0===this.options.smooth.enabled){var g=this._findBorderPosition(h,t,{via:i}),y=this.getPoint(g.t+v*("from"===e?1:-1),i);s=Math.atan2(g.y-y.y,g.x-y.x),a=g}else s=Math.atan2(h.y-d.y,h.x-d.x),a=this._findBorderPosition(h,t);else{var m=(l?-v:v)/2,b=this.getPoint(.5+m,i),w=this.getPoint(.5-m,i);s=Math.atan2(b.y-w.y,b.x-w.x),a=this.getPoint(.5,i)}}else{var k=Bh(this._getCircleData(t),3),_=k[0],x=k[1],E=k[2];if("from"===e){var O=this.options.selfReference.angle,C=this.options.selfReference.angle+Math.PI,S=this._findBorderPositionCircle(this.from,t,{x:_,y:x,low:O,high:C,direction:-1});s=-2*S.t*Math.PI+1.5*Math.PI+.1*Math.PI,a=S}else if("to"===e){var T=this.options.selfReference.angle,M=this.options.selfReference.angle+Math.PI,P=this._findBorderPositionCircle(this.from,t,{x:_,y:x,low:T,high:M,direction:1});s=-2*P.t*Math.PI+1.5*Math.PI-1.1*Math.PI,a=P}else{var D=this.options.selfReference.angle/(2*Math.PI);a=this._pointOnCircle(_,x,E,D),s=-2*D*Math.PI+1.5*Math.PI+.1*Math.PI}}return{point:a,core:{x:a.x-.9*p*Math.cos(s),y:a.y-.9*p*Math.sin(s)},angle:s,length:p,type:u}}},{key:"drawArrowHead",value:function(t,e,i,o,n){t.strokeStyle=this.getColor(t,e),t.fillStyle=t.strokeStyle,t.lineWidth=e.width,Vy.draw(t,n)&&(this.enableShadow(t,e),Ql(t).call(t),this.disableShadow(t,e))}},{key:"enableShadow",value:function(t,e){!0===e.shadow&&(t.shadowColor=e.shadowColor,t.shadowBlur=e.shadowSize,t.shadowOffsetX=e.shadowX,t.shadowOffsetY=e.shadowY)}},{key:"disableShadow",value:function(t,e){!0===e.shadow&&(t.shadowColor="rgba(0,0,0,0)",t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0)}},{key:"drawBackground",value:function(t,e){if(!1!==e.background){var i={strokeStyle:t.strokeStyle,lineWidth:t.lineWidth,dashes:t.dashes};t.strokeStyle=e.backgroundColor,t.lineWidth=e.backgroundSize,this.setStrokeDashed(t,e.backgroundDashes),t.stroke(),t.strokeStyle=i.strokeStyle,t.lineWidth=i.lineWidth,t.dashes=i.dashes,this.setStrokeDashed(t,e.dashes)}}},{key:"setStrokeDashed",value:function(t,e){if(!1!==e)if(void 0!==t.setLineDash){var i=Hh(e)?e:[5,5];t.setLineDash(i)}else console.warn("setLineDash is not supported in this browser. The dashed stroke cannot be used.");else void 0!==t.setLineDash?t.setLineDash([]):console.warn("setLineDash is not supported in this browser. The dashed stroke cannot be used.")}}]),t}();function Xy(t,e){var i=Gh(t);if(ha){var o=ha(t);e&&(o=$d(o).call(o,(function(e){return ba(t,e).enumerable}))),i.push.apply(i,o)}return i}function Gy(t){for(var e=1;e<arguments.length;e++){var i,o=null!=arguments[e]?arguments[e]:{};if(e%2)nd(i=Xy(Object(o),!0)).call(i,(function(e){Wa(t,e,o[e])}));else if(Ta)Ba(t,Ta(o));else{var n;nd(n=Xy(Object(o))).call(n,(function(e){Aa(t,e,ba(o,e))}))}}return t}function Ky(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var $y=function(t){kg(i,t);var e=Ky(i);function i(t,o,n){return Ra(this,i),e.call(this,t,o,n)}return Ha(i,[{key:"_findBorderPositionBezier",value:function(t,e){var i,o,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._getViaCoordinates(),r=10,s=.2,a=!1,h=1,d=0,l=this.to,c=this.options.endPointOffset?this.options.endPointOffset.to:0;t.id===this.from.id&&(l=this.from,a=!0,c=this.options.endPointOffset?this.options.endPointOffset.from:0),!1===this.options.arrowStrikethrough&&(c=0);var u=0;do{o=.5*(d+h),i=this.getPoint(o,n);var f=Math.atan2(l.y-i.y,l.x-i.x),p=l.distanceToBorder(e,f)+c,v=Math.sqrt(Math.pow(i.x-l.x,2)+Math.pow(i.y-l.y,2)),g=p-v;if(Math.abs(g)<s)break;g<0?!1===a?d=o:h=o:!1===a?h=o:d=o,++u}while(d<=h&&u<r);return Gy(Gy({},i),{},{t:o})}},{key:"_getDistanceToBezierEdge",value:function(t,e,i,o,n,r,s){var a,h,d,l,c,u=1e9,f=t,p=e;for(h=1;h<10;h++)d=.1*h,l=Math.pow(1-d,2)*t+2*d*(1-d)*s.x+Math.pow(d,2)*i,c=Math.pow(1-d,2)*e+2*d*(1-d)*s.y+Math.pow(d,2)*o,h>0&&(u=(a=this._getDistanceToLine(f,p,l,c,n,r))<u?a:u),f=l,p=c;return u}},{key:"_bezierCurve",value:function(t,e,i,o){t.beginPath(),t.moveTo(this.fromPoint.x,this.fromPoint.y),null!=i&&null!=i.x?null!=o&&null!=o.x?t.bezierCurveTo(i.x,i.y,o.x,o.y,this.toPoint.x,this.toPoint.y):t.quadraticCurveTo(i.x,i.y,this.toPoint.x,this.toPoint.y):t.lineTo(this.toPoint.x,this.toPoint.y),this.drawBackground(t,e),this.enableShadow(t,e),t.stroke(),this.disableShadow(t,e)}},{key:"getViaNode",value:function(){return this._getViaCoordinates()}}]),i}(Yy);function Zy(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var Qy=function(t){kg(i,t);var e=Zy(i);function i(t,o,n){var r;return Ra(this,i),(r=e.call(this,t,o,n)).via=r.via,r._boundFunction=function(){r.positionBezierNode()},r._body.emitter.on("_repositionBezierNodes",r._boundFunction),r}return Ha(i,[{key:"setOptions",value:function(t){xy(Eg(i.prototype),"setOptions",this).call(this,t);var e=!1;this.options.physics!==t.physics&&(e=!0),this.options=t,this.id=this.options.id,this.from=this._body.nodes[this.options.from],this.to=this._body.nodes[this.options.to],this.setupSupportNode(),this.connect(),!0===e&&(this.via.setOptions({physics:this.options.physics}),this.positionBezierNode())}},{key:"connect",value:function(){this.from=this._body.nodes[this.options.from],this.to=this._body.nodes[this.options.to],void 0===this.from||void 0===this.to||!1===this.options.physics||this.from.id===this.to.id?this.via.setOptions({physics:!1}):this.via.setOptions({physics:!0})}},{key:"cleanup",value:function(){return this._body.emitter.off("_repositionBezierNodes",this._boundFunction),void 0!==this.via&&(delete this._body.nodes[this.via.id],this.via=void 0,!0)}},{key:"setupSupportNode",value:function(){if(void 0===this.via){var t="edgeId:"+this.id,e=this._body.functions.createNode({id:t,shape:"circle",physics:!0,hidden:!0});this._body.nodes[t]=e,this.via=e,this.via.parentEdgeId=this.id,this.positionBezierNode()}}},{key:"positionBezierNode",value:function(){void 0!==this.via&&void 0!==this.from&&void 0!==this.to?(this.via.x=.5*(this.from.x+this.to.x),this.via.y=.5*(this.from.y+this.to.y)):void 0!==this.via&&(this.via.x=0,this.via.y=0)}},{key:"_line",value:function(t,e,i){this._bezierCurve(t,e,i)}},{key:"_getViaCoordinates",value:function(){return this.via}},{key:"getViaNode",value:function(){return this.via}},{key:"getPoint",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.via;if(this.from===this.to){var i=this._getCircleData(),o=Bh(i,3),n=o[0],r=o[1],s=o[2],a=2*Math.PI*(1-t);return{x:n+s*Math.sin(a),y:r+s-s*(1-Math.cos(a))}}return{x:Math.pow(1-t,2)*this.fromPoint.x+2*t*(1-t)*e.x+Math.pow(t,2)*this.toPoint.x,y:Math.pow(1-t,2)*this.fromPoint.y+2*t*(1-t)*e.y+Math.pow(t,2)*this.toPoint.y}}},{key:"_findBorderPosition",value:function(t,e){return this._findBorderPositionBezier(t,e,this.via)}},{key:"_getDistanceToEdge",value:function(t,e,i,o,n,r){return this._getDistanceToBezierEdge(t,e,i,o,n,r,this.via)}}]),i}($y);function Jy(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var tm=function(t){kg(i,t);var e=Jy(i);function i(t,o,n){return Ra(this,i),e.call(this,t,o,n)}return Ha(i,[{key:"_line",value:function(t,e,i){this._bezierCurve(t,e,i)}},{key:"getViaNode",value:function(){return this._getViaCoordinates()}},{key:"_getViaCoordinates",value:function(){var t,e,i=this.options.smooth.roundness,o=this.options.smooth.type,n=Math.abs(this.from.x-this.to.x),r=Math.abs(this.from.y-this.to.y);if("discrete"===o||"diagonalCross"===o){var s,a;s=a=n<=r?i*r:i*n,this.from.x>this.to.x&&(s=-s),this.from.y>=this.to.y&&(a=-a);var h=this.from.x+s,d=this.from.y+a;return"discrete"===o&&(n<=r?h=n<i*r?this.from.x:h:d=r<i*n?this.from.y:d),{x:h,y:d}}if("straightCross"===o){var l=(1-i)*n,c=(1-i)*r;return n<=r?(l=0,this.from.y<this.to.y&&(c=-c)):(this.from.x<this.to.x&&(l=-l),c=0),{x:this.to.x+l,y:this.to.y+c}}if("horizontal"===o){var u=(1-i)*n;return this.from.x<this.to.x&&(u=-u),{x:this.to.x+u,y:this.from.y}}if("vertical"===o){var f=(1-i)*r;return this.from.y<this.to.y&&(f=-f),{x:this.from.x,y:this.to.y+f}}if("curvedCW"===o){n=this.to.x-this.from.x,r=this.from.y-this.to.y;var p=Math.sqrt(n*n+r*r),v=Math.PI,g=(Math.atan2(r,n)+(.5*i+.5)*v)%(2*v);return{x:this.from.x+(.5*i+.5)*p*Math.sin(g),y:this.from.y+(.5*i+.5)*p*Math.cos(g)}}if("curvedCCW"===o){n=this.to.x-this.from.x,r=this.from.y-this.to.y;var y=Math.sqrt(n*n+r*r),m=Math.PI,b=(Math.atan2(r,n)+(.5*-i+.5)*m)%(2*m);return{x:this.from.x+(.5*i+.5)*y*Math.sin(b),y:this.from.y+(.5*i+.5)*y*Math.cos(b)}}t=e=n<=r?i*r:i*n,this.from.x>this.to.x&&(t=-t),this.from.y>=this.to.y&&(e=-e);var w=this.from.x+t,k=this.from.y+e;return n<=r?w=this.from.x<=this.to.x?this.to.x<w?this.to.x:w:this.to.x>w?this.to.x:w:k=this.from.y>=this.to.y?this.to.y>k?this.to.y:k:this.to.y<k?this.to.y:k,{x:w,y:k}}},{key:"_findBorderPosition",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this._findBorderPositionBezier(t,e,i.via)}},{key:"_getDistanceToEdge",value:function(t,e,i,o,n,r){var s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:this._getViaCoordinates();return this._getDistanceToBezierEdge(t,e,i,o,n,r,s)}},{key:"getPoint",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._getViaCoordinates(),i=t,o=Math.pow(1-i,2)*this.fromPoint.x+2*i*(1-i)*e.x+Math.pow(i,2)*this.toPoint.x,n=Math.pow(1-i,2)*this.fromPoint.y+2*i*(1-i)*e.y+Math.pow(i,2)*this.toPoint.y;return{x:o,y:n}}}]),i}($y);function em(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}function im(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var om=function(t){kg(i,t);var e=im(i);function i(t,o,n){return Ra(this,i),e.call(this,t,o,n)}return Ha(i,[{key:"_line",value:function(t,e,i){var o=i[0],n=i[1];this._bezierCurve(t,e,o,n)}},{key:"_getViaCoordinates",value:function(){var t,e,i,o,n=this.from.x-this.to.x,r=this.from.y-this.to.y,s=this.options.smooth.roundness;return(Math.abs(n)>Math.abs(r)||!0===this.options.smooth.forceDirection||"horizontal"===this.options.smooth.forceDirection)&&"vertical"!==this.options.smooth.forceDirection?(e=this.from.y,o=this.to.y,t=this.from.x-s*n,i=this.to.x+s*n):(e=this.from.y-s*r,o=this.to.y+s*r,t=this.from.x,i=this.to.x),[{x:t,y:e},{x:i,y:o}]}},{key:"getViaNode",value:function(){return this._getViaCoordinates()}},{key:"_findBorderPosition",value:function(t,e){return this._findBorderPositionBezier(t,e)}},{key:"_getDistanceToEdge",value:function(t,e,i,o,n,r){var s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:this._getViaCoordinates(),a=Bh(s,2),h=a[0],d=a[1];return this._getDistanceToBezierEdge2(t,e,i,o,n,r,h,d)}},{key:"getPoint",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._getViaCoordinates(),i=Bh(e,2),o=i[0],n=i[1],r=t,s=[Math.pow(1-r,3),3*r*Math.pow(1-r,2),3*Math.pow(r,2)*(1-r),Math.pow(r,3)],a=s[0]*this.fromPoint.x+s[1]*o.x+s[2]*n.x+s[3]*this.toPoint.x,h=s[0]*this.fromPoint.y+s[1]*o.y+s[2]*n.y+s[3]*this.toPoint.y;return{x:a,y:h}}}]),i}(function(t){kg(i,t);var e=em(i);function i(t,o,n){return Ra(this,i),e.call(this,t,o,n)}return Ha(i,[{key:"_getDistanceToBezierEdge2",value:function(t,e,i,o,n,r,s,a){for(var h=1e9,d=t,l=e,c=[0,0,0,0],u=1;u<10;u++){var f=.1*u;c[0]=Math.pow(1-f,3),c[1]=3*f*Math.pow(1-f,2),c[2]=3*Math.pow(f,2)*(1-f),c[3]=Math.pow(f,3);var p=c[0]*t+c[1]*s.x+c[2]*a.x+c[3]*i,v=c[0]*e+c[1]*s.y+c[2]*a.y+c[3]*o;if(u>0){var g=this._getDistanceToLine(d,l,p,v,n,r);h=g<h?g:h}d=p,l=v}return h}}]),i}($y));function nm(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var rm=function(t){kg(i,t);var e=nm(i);function i(t,o,n){return Ra(this,i),e.call(this,t,o,n)}return Ha(i,[{key:"_line",value:function(t,e){t.beginPath(),t.moveTo(this.fromPoint.x,this.fromPoint.y),t.lineTo(this.toPoint.x,this.toPoint.y),this.enableShadow(t,e),t.stroke(),this.disableShadow(t,e)}},{key:"getViaNode",value:function(){}},{key:"getPoint",value:function(t){return{x:(1-t)*this.fromPoint.x+t*this.toPoint.x,y:(1-t)*this.fromPoint.y+t*this.toPoint.y}}},{key:"_findBorderPosition",value:function(t,e){var i=this.to,o=this.from;t.id===this.from.id&&(i=this.from,o=this.to);var n=Math.atan2(i.y-o.y,i.x-o.x),r=i.x-o.x,s=i.y-o.y,a=Math.sqrt(r*r+s*s),h=(a-t.distanceToBorder(e,n))/a;return{x:(1-h)*o.x+h*i.x,y:(1-h)*o.y+h*i.y,t:0}}},{key:"_getDistanceToEdge",value:function(t,e,i,o,n,r){return this._getDistanceToLine(t,e,i,o,n,r)}}]),i}(Yy),sm=function(){function t(e,i,o,n,r){if(Ra(this,t),void 0===i)throw new Error("No body provided");this.options=kf(n),this.globalOptions=n,this.defaultOptions=r,this.body=i,this.imagelist=o,this.id=void 0,this.fromId=void 0,this.toId=void 0,this.selected=!1,this.hover=!1,this.labelDirty=!0,this.baseWidth=this.options.width,this.baseFontSize=this.options.font.size,this.from=void 0,this.to=void 0,this.edgeType=void 0,this.connected=!1,this.labelModule=new rg(this.body,this.options,!0),this.setOptions(e)}return Ha(t,[{key:"setOptions",value:function(e){if(e){var i=void 0!==e.physics&&this.options.physics!==e.physics||void 0!==e.hidden&&(this.options.hidden||!1)!==(e.hidden||!1)||void 0!==e.from&&this.options.from!==e.from||void 0!==e.to&&this.options.to!==e.to;t.parseOptions(this.options,e,!0,this.globalOptions),void 0!==e.id&&(this.id=e.id),void 0!==e.from&&(this.fromId=e.from),void 0!==e.to&&(this.toId=e.to),void 0!==e.title&&(this.title=e.title),void 0!==e.value&&(e.value=jv(e.value));var o=[e,this.options,this.defaultOptions];return this.chooser=Uv("edge",o),this.updateLabelModule(e),i=this.updateEdgeType()||i,this._setInteractionWidths(),this.connect(),i}}},{key:"getFormattingValues",value:function(){var t=!0===this.options.arrows.to||!0===this.options.arrows.to.enabled,e=!0===this.options.arrows.from||!0===this.options.arrows.from.enabled,i=!0===this.options.arrows.middle||!0===this.options.arrows.middle.enabled,o=this.options.color.inherit,n={toArrow:t,toArrowScale:this.options.arrows.to.scaleFactor,toArrowType:this.options.arrows.to.type,toArrowSrc:this.options.arrows.to.src,toArrowImageWidth:this.options.arrows.to.imageWidth,toArrowImageHeight:this.options.arrows.to.imageHeight,middleArrow:i,middleArrowScale:this.options.arrows.middle.scaleFactor,middleArrowType:this.options.arrows.middle.type,middleArrowSrc:this.options.arrows.middle.src,middleArrowImageWidth:this.options.arrows.middle.imageWidth,middleArrowImageHeight:this.options.arrows.middle.imageHeight,fromArrow:e,fromArrowScale:this.options.arrows.from.scaleFactor,fromArrowType:this.options.arrows.from.type,fromArrowSrc:this.options.arrows.from.src,fromArrowImageWidth:this.options.arrows.from.imageWidth,fromArrowImageHeight:this.options.arrows.from.imageHeight,arrowStrikethrough:this.options.arrowStrikethrough,color:o?void 0:this.options.color.color,inheritsColor:o,opacity:this.options.color.opacity,hidden:this.options.hidden,length:this.options.length,shadow:this.options.shadow.enabled,shadowColor:this.options.shadow.color,shadowSize:this.options.shadow.size,shadowX:this.options.shadow.x,shadowY:this.options.shadow.y,dashes:this.options.dashes,width:this.options.width,background:this.options.background.enabled,backgroundColor:this.options.background.color,backgroundSize:this.options.background.size,backgroundDashes:this.options.background.dashes};if(this.selected||this.hover)if(!0===this.chooser){if(this.selected){var r=this.options.selectionWidth;"function"==typeof r?n.width=r(n.width):"number"==typeof r&&(n.width+=r),n.width=Math.max(n.width,.3/this.body.view.scale),n.color=this.options.color.highlight,n.shadow=this.options.shadow.enabled}else if(this.hover){var s=this.options.hoverWidth;"function"==typeof s?n.width=s(n.width):"number"==typeof s&&(n.width+=s),n.width=Math.max(n.width,.3/this.body.view.scale),n.color=this.options.color.hover,n.shadow=this.options.shadow.enabled}}else"function"==typeof this.chooser&&(this.chooser(n,this.options.id,this.selected,this.hover),void 0!==n.color&&(n.inheritsColor=!1),!1===n.shadow&&(n.shadowColor===this.options.shadow.color&&n.shadowSize===this.options.shadow.size&&n.shadowX===this.options.shadow.x&&n.shadowY===this.options.shadow.y||(n.shadow=!0)));else n.shadow=this.options.shadow.enabled,n.width=Math.max(n.width,.3/this.body.view.scale);return n}},{key:"updateLabelModule",value:function(t){var e=[t,this.options,this.globalOptions,this.defaultOptions];this.labelModule.update(this.options,e),void 0!==this.labelModule.baseSize&&(this.baseFontSize=this.labelModule.baseSize)}},{key:"updateEdgeType",value:function(){var t=this.options.smooth,e=!1,i=!0;return void 0!==this.edgeType&&((this.edgeType instanceof Qy&&!0===t.enabled&&"dynamic"===t.type||this.edgeType instanceof om&&!0===t.enabled&&"cubicBezier"===t.type||this.edgeType instanceof tm&&!0===t.enabled&&"dynamic"!==t.type&&"cubicBezier"!==t.type||this.edgeType instanceof rm&&!1===t.type.enabled)&&(i=!1),!0===i&&(e=this.cleanup())),!0===i?!0===t.enabled?"dynamic"===t.type?(e=!0,this.edgeType=new Qy(this.options,this.body,this.labelModule)):"cubicBezier"===t.type?this.edgeType=new om(this.options,this.body,this.labelModule):this.edgeType=new tm(this.options,this.body,this.labelModule):this.edgeType=new rm(this.options,this.body,this.labelModule):this.edgeType.setOptions(this.options),e}},{key:"connect",value:function(){this.disconnect(),this.from=this.body.nodes[this.fromId]||void 0,this.to=this.body.nodes[this.toId]||void 0,this.connected=void 0!==this.from&&void 0!==this.to,!0===this.connected?(this.from.attachEdge(this),this.to.attachEdge(this)):(this.from&&this.from.detachEdge(this),this.to&&this.to.detachEdge(this)),this.edgeType.connect()}},{key:"disconnect",value:function(){this.from&&(this.from.detachEdge(this),this.from=void 0),this.to&&(this.to.detachEdge(this),this.to=void 0),this.connected=!1}},{key:"getTitle",value:function(){return this.title}},{key:"isSelected",value:function(){return this.selected}},{key:"getValue",value:function(){return this.options.value}},{key:"setValueRange",value:function(t,e,i){if(void 0!==this.options.value){var o=this.options.scaling.customScalingFunction(t,e,i,this.options.value),n=this.options.scaling.max-this.options.scaling.min;if(!0===this.options.scaling.label.enabled){var r=this.options.scaling.label.max-this.options.scaling.label.min;this.options.font.size=this.options.scaling.label.min+o*r}this.options.width=this.options.scaling.min+o*n}else this.options.width=this.baseWidth,this.options.font.size=this.baseFontSize;this._setInteractionWidths(),this.updateLabelModule()}},{key:"_setInteractionWidths",value:function(){"function"==typeof this.options.hoverWidth?this.edgeType.hoverWidth=this.options.hoverWidth(this.options.width):this.edgeType.hoverWidth=this.options.hoverWidth+this.options.width,"function"==typeof this.options.selectionWidth?this.edgeType.selectionWidth=this.options.selectionWidth(this.options.width):this.edgeType.selectionWidth=this.options.selectionWidth+this.options.width}},{key:"draw",value:function(t){var e=this.getFormattingValues();if(!e.hidden){var i=this.edgeType.getViaNode();this.edgeType.drawLine(t,e,this.selected,this.hover,i),this.drawLabel(t,i)}}},{key:"drawArrows",value:function(t){var e=this.getFormattingValues();if(!e.hidden){var i=this.edgeType.getViaNode(),o={};this.edgeType.fromPoint=this.edgeType.from,this.edgeType.toPoint=this.edgeType.to,e.fromArrow&&(o.from=this.edgeType.getArrowData(t,"from",i,this.selected,this.hover,e),!1===e.arrowStrikethrough&&(this.edgeType.fromPoint=o.from.core),e.fromArrowSrc&&(o.from.image=this.imagelist.load(e.fromArrowSrc)),e.fromArrowImageWidth&&(o.from.imageWidth=e.fromArrowImageWidth),e.fromArrowImageHeight&&(o.from.imageHeight=e.fromArrowImageHeight)),e.toArrow&&(o.to=this.edgeType.getArrowData(t,"to",i,this.selected,this.hover,e),!1===e.arrowStrikethrough&&(this.edgeType.toPoint=o.to.core),e.toArrowSrc&&(o.to.image=this.imagelist.load(e.toArrowSrc)),e.toArrowImageWidth&&(o.to.imageWidth=e.toArrowImageWidth),e.toArrowImageHeight&&(o.to.imageHeight=e.toArrowImageHeight)),e.middleArrow&&(o.middle=this.edgeType.getArrowData(t,"middle",i,this.selected,this.hover,e),e.middleArrowSrc&&(o.middle.image=this.imagelist.load(e.middleArrowSrc)),e.middleArrowImageWidth&&(o.middle.imageWidth=e.middleArrowImageWidth),e.middleArrowImageHeight&&(o.middle.imageHeight=e.middleArrowImageHeight)),e.fromArrow&&this.edgeType.drawArrowHead(t,e,this.selected,this.hover,o.from),e.middleArrow&&this.edgeType.drawArrowHead(t,e,this.selected,this.hover,o.middle),e.toArrow&&this.edgeType.drawArrowHead(t,e,this.selected,this.hover,o.to)}}},{key:"drawLabel",value:function(t,e){if(void 0!==this.options.label){var i,o=this.from,n=this.to;if(this.labelModule.differentState(this.selected,this.hover)&&this.labelModule.getTextSize(t,this.selected,this.hover),o.id!=n.id){this.labelModule.pointToSelf=!1,i=this.edgeType.getPoint(.5,e),t.save();var r=this._getRotation(t);0!=r.angle&&(t.translate(r.x,r.y),t.rotate(r.angle)),this.labelModule.draw(t,i.x,i.y,this.selected,this.hover),t.restore()}else{this.labelModule.pointToSelf=!0;var s=Gv(t,this.options.selfReference.angle,this.options.selfReference.size,o);i=this._pointOnCircle(s.x,s.y,this.options.selfReference.size,this.options.selfReference.angle),this.labelModule.draw(t,i.x,i.y,this.selected,this.hover)}}}},{key:"getItemsOnPoint",value:function(t){var e=[];if(this.labelModule.visible()){var i=this._getRotation();Yv(this.labelModule.getSize(),t,i)&&e.push({edgeId:this.id,labelId:0})}var o={left:t.x,top:t.y};return this.isOverlappingWith(o)&&e.push({edgeId:this.id}),e}},{key:"isOverlappingWith",value:function(t){if(this.connected){var e=this.from.x,i=this.from.y,o=this.to.x,n=this.to.y,r=t.left,s=t.top;return this.edgeType.getDistanceToEdge(e,i,o,n,r,s)<10}return!1}},{key:"_getRotation",value:function(t){var e=this.edgeType.getViaNode(),i=this.edgeType.getPoint(.5,e);void 0!==t&&this.labelModule.calculateLabelSize(t,this.selected,this.hover,i.x,i.y);var o={x:i.x,y:this.labelModule.size.yLine,angle:0};if(!this.labelModule.visible())return o;if("horizontal"===this.options.font.align)return o;var n=this.from.y-this.to.y,r=this.from.x-this.to.x,s=Math.atan2(n,r);return(s<-1&&r<0||s>0&&r<0)&&(s+=Math.PI),o.angle=s,o}},{key:"_pointOnCircle",value:function(t,e,i,o){return{x:t+i*Math.cos(o),y:e-i*Math.sin(o)}}},{key:"select",value:function(){this.selected=!0}},{key:"unselect",value:function(){this.selected=!1}},{key:"cleanup",value:function(){return this.edgeType.cleanup()}},{key:"remove",value:function(){this.cleanup(),this.disconnect(),delete this.body.edges[this.id]}},{key:"endPointsValid",value:function(){return void 0!==this.body.nodes[this.fromId]&&void 0!==this.body.nodes[this.toId]}}],[{key:"parseOptions",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r=["endPointOffset","arrowStrikethrough","id","from","hidden","hoverWidth","labelHighlightBold","length","line","opacity","physics","scaling","selectionWidth","selfReferenceSize","selfReference","to","title","value","width","font","chosen","widthConstraint"];if(nf(r,t,e,i),void 0!==e.endPointOffset&&void 0!==e.endPointOffset.from&&(Pv(e.endPointOffset.from)?t.endPointOffset.from=e.endPointOffset.from:(t.endPointOffset.from=void 0!==o.endPointOffset.from?o.endPointOffset.from:0,console.error("endPointOffset.from is not a valid number"))),void 0!==e.endPointOffset&&void 0!==e.endPointOffset.to&&(Pv(e.endPointOffset.to)?t.endPointOffset.to=e.endPointOffset.to:(t.endPointOffset.to=void 0!==o.endPointOffset.to?o.endPointOffset.to:0,console.error("endPointOffset.to is not a valid number"))),Xv(e.label)?t.label=e.label:Xv(t.label)||(t.label=void 0),_f(t,e,"smooth",o),_f(t,e,"shadow",o),_f(t,e,"background",o),void 0!==e.dashes&&null!==e.dashes?t.dashes=e.dashes:!0===i&&null===e.dashes&&(t.dashes=Bl(o.dashes)),void 0!==e.scaling&&null!==e.scaling?(void 0!==e.scaling.min&&(t.scaling.min=e.scaling.min),void 0!==e.scaling.max&&(t.scaling.max=e.scaling.max),_f(t.scaling,e.scaling,"label",o.scaling)):!0===i&&null===e.scaling&&(t.scaling=Bl(o.scaling)),void 0!==e.arrows&&null!==e.arrows)if("string"==typeof e.arrows){var s=e.arrows.toLowerCase();t.arrows.to.enabled=-1!=Cl(s).call(s,"to"),t.arrows.middle.enabled=-1!=Cl(s).call(s,"middle"),t.arrows.from.enabled=-1!=Cl(s).call(s,"from")}else{if("object"!==zh(e.arrows))throw new Error("The arrow newOptions can only be an object or a string. Refer to the documentation. You used:"+Wl(e.arrows));_f(t.arrows,e.arrows,"to",o.arrows),_f(t.arrows,e.arrows,"middle",o.arrows),_f(t.arrows,e.arrows,"from",o.arrows)}else!0===i&&null===e.arrows&&(t.arrows=Bl(o.arrows));if(void 0!==e.color&&null!==e.color){var a=Ju(e.color)?{color:e.color,highlight:e.color,hover:e.color,inherit:!1,opacity:1}:e.color,h=t.color;if(n)sf(h,o.color,!1,i);else for(var d in h)Object.prototype.hasOwnProperty.call(h,d)&&delete h[d];if(Ju(h))h.color=h,h.highlight=h,h.hover=h,h.inherit=!1,void 0===a.opacity&&(h.opacity=1);else{var l=!1;void 0!==a.color&&(h.color=a.color,l=!0),void 0!==a.highlight&&(h.highlight=a.highlight,l=!0),void 0!==a.hover&&(h.hover=a.hover,l=!0),void 0!==a.inherit&&(h.inherit=a.inherit),void 0!==a.opacity&&(h.opacity=Math.min(1,Math.max(0,a.opacity))),!0===l?h.inherit=!1:void 0===h.inherit&&(h.inherit="from")}}else!0===i&&null===e.color&&(t.color=kf(o.color));!0===i&&null===e.font&&(t.font=kf(o.font)),Object.prototype.hasOwnProperty.call(e,"selfReferenceSize")&&(console.warn("The selfReferenceSize property has been deprecated. Please use selfReference property instead. The selfReference can be set like thise selfReference:{size:30, angle:Math.PI / 4}"),t.selfReference.size=e.selfReferenceSize)}}]),t}(),am=function(){function t(e,i,o){var n,r=this;Ra(this,t),this.body=e,this.images=i,this.groups=o,this.body.functions.createEdge=si(n=this.create).call(n,this),this.edgesListeners={add:function(t,e){r.add(e.items)},update:function(t,e){r.update(e.items)},remove:function(t,e){r.remove(e.items)}},this.options={},this.defaultOptions={arrows:{to:{enabled:!1,scaleFactor:1,type:"arrow"},middle:{enabled:!1,scaleFactor:1,type:"arrow"},from:{enabled:!1,scaleFactor:1,type:"arrow"}},endPointOffset:{from:0,to:0},arrowStrikethrough:!0,color:{color:"#848484",highlight:"#848484",hover:"#848484",inherit:"from",opacity:1},dashes:!1,font:{color:"#343434",size:14,face:"arial",background:"none",strokeWidth:2,strokeColor:"#ffffff",align:"horizontal",multi:!1,vadjust:0,bold:{mod:"bold"},boldital:{mod:"bold italic"},ital:{mod:"italic"},mono:{mod:"",size:15,face:"courier new",vadjust:2}},hidden:!1,hoverWidth:1.5,label:void 0,labelHighlightBold:!0,length:void 0,physics:!0,scaling:{min:1,max:15,label:{enabled:!0,min:14,max:30,maxVisible:30,drawThreshold:5},customScalingFunction:function(t,e,i,o){if(e===t)return.5;var n=1/(e-t);return Math.max(0,(o-t)*n)}},selectionWidth:1.5,selfReference:{size:20,angle:Math.PI/4,renderBehindTheNode:!0},shadow:{enabled:!1,color:"rgba(0,0,0,0.5)",size:10,x:5,y:5},background:{enabled:!1,color:"rgba(111,111,111,1)",size:10,dashes:!1},smooth:{enabled:!0,type:"dynamic",forceDirection:"none",roundness:.5},title:void 0,width:1,value:void 0},sf(this.options,this.defaultOptions),this.bindEventListeners()}return Ha(t,[{key:"bindEventListeners",value:function(){var t,e,i=this;this.body.emitter.on("_forceDisableDynamicCurves",(function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];"dynamic"===t&&(t="continuous");var o=!1;for(var n in i.body.edges)if(Object.prototype.hasOwnProperty.call(i.body.edges,n)){var r=i.body.edges[n],s=i.body.data.edges.get(n);if(null!=s){var a=s.smooth;void 0!==a&&!0===a.enabled&&"dynamic"===a.type&&(void 0===t?r.setOptions({smooth:!1}):r.setOptions({smooth:{type:t}}),o=!0)}}!0===e&&!0===o&&i.body.emitter.emit("_dataChanged")})),this.body.emitter.on("_dataUpdated",(function(){i.reconnectEdges()})),this.body.emitter.on("refreshEdges",si(t=this.refresh).call(t,this)),this.body.emitter.on("refresh",si(e=this.refresh).call(e,this)),this.body.emitter.on("destroy",(function(){lf(i.edgesListeners,(function(t,e){i.body.data.edges&&i.body.data.edges.off(e,t)})),delete i.body.functions.createEdge,delete i.edgesListeners.add,delete i.edgesListeners.update,delete i.edgesListeners.remove,delete i.edgesListeners}))}},{key:"setOptions",value:function(t){if(void 0!==t){sm.parseOptions(this.options,t,!0,this.defaultOptions,!0);var e=!1;if(void 0!==t.smooth)for(var i in this.body.edges)Object.prototype.hasOwnProperty.call(this.body.edges,i)&&(e=this.body.edges[i].updateEdgeType()||e);if(void 0!==t.font)for(var o in this.body.edges)Object.prototype.hasOwnProperty.call(this.body.edges,o)&&this.body.edges[o].updateLabelModule();void 0===t.hidden&&void 0===t.physics&&!0!==e||this.body.emitter.emit("_dataChanged")}}},{key:"setData",value:function(t){var i=this,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.body.data.edges;if(e.isDataViewLike("id",t))this.body.data.edges=t;else if(Hh(t))this.body.data.edges=new e.DataSet,this.body.data.edges.add(t);else{if(t)throw new TypeError("Array or DataSet expected");this.body.data.edges=new e.DataSet}if(n&&lf(this.edgesListeners,(function(t,e){n.off(e,t)})),this.body.edges={},this.body.data.edges){lf(this.edgesListeners,(function(t,e){i.body.data.edges.on(e,t)}));var r=this.body.data.edges.getIds();this.add(r,!0)}this.body.emitter.emit("_adjustEdgesForHierarchicalLayout"),!1===o&&this.body.emitter.emit("_dataChanged")}},{key:"add",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.body.edges,o=this.body.data.edges,n=0;n<t.length;n++){var r=t[n],s=i[r];s&&s.disconnect();var a=o.get(r,{showInternalIds:!0});i[r]=this.create(a)}this.body.emitter.emit("_adjustEdgesForHierarchicalLayout"),!1===e&&this.body.emitter.emit("_dataChanged")}},{key:"update",value:function(t){for(var e=this.body.edges,i=this.body.data.edges,o=!1,n=0;n<t.length;n++){var r=t[n],s=i.get(r),a=e[r];void 0!==a?(a.disconnect(),o=a.setOptions(s)||o,a.connect()):(this.body.edges[r]=this.create(s),o=!0)}!0===o?(this.body.emitter.emit("_adjustEdgesForHierarchicalLayout"),this.body.emitter.emit("_dataChanged")):this.body.emitter.emit("_dataUpdated")}},{key:"remove",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(0!==t.length){var i=this.body.edges;lf(t,(function(t){var e=i[t];void 0!==e&&e.remove()})),e&&this.body.emitter.emit("_dataChanged")}}},{key:"refresh",value:function(){var t=this;lf(this.body.edges,(function(e,i){var o=t.body.data.edges.get(i);void 0!==o&&e.setOptions(o)}))}},{key:"create",value:function(t){return new sm(t,this.body,this.images,this.options,this.defaultOptions)}},{key:"reconnectEdges",value:function(){var t,e=this.body.nodes,i=this.body.edges;for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&(e[t].edges=[]);for(t in i)if(Object.prototype.hasOwnProperty.call(i,t)){var o=i[t];o.from=null,o.to=null,o.connect()}}},{key:"getConnectedNodes",value:function(t){var e=[];if(void 0!==this.body.edges[t]){var i=this.body.edges[t];void 0!==i.fromId&&e.push(i.fromId),void 0!==i.toId&&e.push(i.toId)}return e}},{key:"_updateState",value:function(){this._addMissingEdges(),this._removeInvalidEdges()}},{key:"_removeInvalidEdges",value:function(){var t=this,e=[];lf(this.body.edges,(function(i,o){var n=t.body.nodes[i.toId],r=t.body.nodes[i.fromId];void 0!==n&&!0===n.isCluster||void 0!==r&&!0===r.isCluster||void 0!==n&&void 0!==r||e.push(o)})),this.remove(e,!1)}},{key:"_addMissingEdges",value:function(){var t=this.body.data.edges;if(null!=t){var e=this.body.edges,i=[];nd(t).call(t,(function(t,o){void 0===e[o]&&i.push(o)})),this.add(i,!0)}}}]),t}(),hm=function(){function t(e,i,o){Ra(this,t),this.body=e,this.physicsBody=i,this.barnesHutTree,this.setOptions(o),this._rng=Vu("BARNES HUT SOLVER")}return Ha(t,[{key:"setOptions",value:function(t){this.options=t,this.thetaInversed=1/this.options.theta,this.overlapAvoidanceFactor=1-Math.max(0,Math.min(1,this.options.avoidOverlap))}},{key:"solve",value:function(){if(0!==this.options.gravitationalConstant&&this.physicsBody.physicsNodeIndices.length>0){var t,e=this.body.nodes,i=this.physicsBody.physicsNodeIndices,o=i.length,n=this._formBarnesHutTree(e,i);this.barnesHutTree=n;for(var r=0;r<o;r++)(t=e[i[r]]).options.mass>0&&this._getForceContributions(n.root,t)}}},{key:"_getForceContributions",value:function(t,e){this._getForceContribution(t.children.NW,e),this._getForceContribution(t.children.NE,e),this._getForceContribution(t.children.SW,e),this._getForceContribution(t.children.SE,e)}},{key:"_getForceContribution",value:function(t,e){if(t.childrenCount>0){var i=t.centerOfMass.x-e.x,o=t.centerOfMass.y-e.y,n=Math.sqrt(i*i+o*o);n*t.calcSize>this.thetaInversed?this._calculateForces(n,i,o,e,t):4===t.childrenCount?this._getForceContributions(t,e):t.children.data.id!=e.id&&this._calculateForces(n,i,o,e,t)}}},{key:"_calculateForces",value:function(t,e,i,o,n){0===t&&(e=t=.1),this.overlapAvoidanceFactor<1&&o.shape.radius&&(t=Math.max(.1+this.overlapAvoidanceFactor*o.shape.radius,t-o.shape.radius));var r=this.options.gravitationalConstant*n.mass*o.options.mass/Math.pow(t,3),s=e*r,a=i*r;this.physicsBody.forces[o.id].x+=s,this.physicsBody.forces[o.id].y+=a}},{key:"_formBarnesHutTree",value:function(t,e){for(var i,o=e.length,n=t[e[0]].x,r=t[e[0]].y,s=t[e[0]].x,a=t[e[0]].y,h=1;h<o;h++){var d=t[e[h]],l=d.x,c=d.y;d.options.mass>0&&(l<n&&(n=l),l>s&&(s=l),c<r&&(r=c),c>a&&(a=c))}var u=Math.abs(s-n)-Math.abs(a-r);u>0?(r-=.5*u,a+=.5*u):(n+=.5*u,s-=.5*u);var f=Math.max(1e-5,Math.abs(s-n)),p=.5*f,v=.5*(n+s),g=.5*(r+a),y={root:{centerOfMass:{x:0,y:0},mass:0,range:{minX:v-p,maxX:v+p,minY:g-p,maxY:g+p},size:f,calcSize:1/f,children:{data:null},maxWidth:0,level:0,childrenCount:4}};this._splitBranch(y.root);for(var m=0;m<o;m++)(i=t[e[m]]).options.mass>0&&this._placeInTree(y.root,i);return y}},{key:"_updateBranchMass",value:function(t,e){var i=t.centerOfMass,o=t.mass+e.options.mass,n=1/o;i.x=i.x*t.mass+e.x*e.options.mass,i.x*=n,i.y=i.y*t.mass+e.y*e.options.mass,i.y*=n,t.mass=o;var r=Math.max(Math.max(e.height,e.radius),e.width);t.maxWidth=t.maxWidth<r?r:t.maxWidth}},{key:"_placeInTree",value:function(t,e,i){1==i&&void 0!==i||this._updateBranchMass(t,e);var o,n=t.children.NW.range;o=n.maxX>e.x?n.maxY>e.y?"NW":"SW":n.maxY>e.y?"NE":"SE",this._placeInRegion(t,e,o)}},{key:"_placeInRegion",value:function(t,e,i){var o=t.children[i];switch(o.childrenCount){case 0:o.children.data=e,o.childrenCount=1,this._updateBranchMass(o,e);break;case 1:o.children.data.x===e.x&&o.children.data.y===e.y?(e.x+=this._rng(),e.y+=this._rng()):(this._splitBranch(o),this._placeInTree(o,e));break;case 4:this._placeInTree(o,e)}}},{key:"_splitBranch",value:function(t){var e=null;1===t.childrenCount&&(e=t.children.data,t.mass=0,t.centerOfMass.x=0,t.centerOfMass.y=0),t.childrenCount=4,t.children.data=null,this._insertRegion(t,"NW"),this._insertRegion(t,"NE"),this._insertRegion(t,"SW"),this._insertRegion(t,"SE"),null!=e&&this._placeInTree(t,e)}},{key:"_insertRegion",value:function(t,e){var i,o,n,r,s=.5*t.size;switch(e){case"NW":i=t.range.minX,o=t.range.minX+s,n=t.range.minY,r=t.range.minY+s;break;case"NE":i=t.range.minX+s,o=t.range.maxX,n=t.range.minY,r=t.range.minY+s;break;case"SW":i=t.range.minX,o=t.range.minX+s,n=t.range.minY+s,r=t.range.maxY;break;case"SE":i=t.range.minX+s,o=t.range.maxX,n=t.range.minY+s,r=t.range.maxY}t.children[e]={centerOfMass:{x:0,y:0},mass:0,range:{minX:i,maxX:o,minY:n,maxY:r},size:.5*t.size,calcSize:2*t.calcSize,children:{data:null},maxWidth:0,level:t.level+1,childrenCount:0}}},{key:"_debug",value:function(t,e){void 0!==this.barnesHutTree&&(t.lineWidth=1,this._drawBranch(this.barnesHutTree.root,t,e))}},{key:"_drawBranch",value:function(t,e,i){void 0===i&&(i="#FF0000"),4===t.childrenCount&&(this._drawBranch(t.children.NW,e),this._drawBranch(t.children.NE,e),this._drawBranch(t.children.SE,e),this._drawBranch(t.children.SW,e)),e.strokeStyle=i,e.beginPath(),e.moveTo(t.range.minX,t.range.minY),e.lineTo(t.range.maxX,t.range.minY),e.stroke(),e.beginPath(),e.moveTo(t.range.maxX,t.range.minY),e.lineTo(t.range.maxX,t.range.maxY),e.stroke(),e.beginPath(),e.moveTo(t.range.maxX,t.range.maxY),e.lineTo(t.range.minX,t.range.maxY),e.stroke(),e.beginPath(),e.moveTo(t.range.minX,t.range.maxY),e.lineTo(t.range.minX,t.range.minY),e.stroke()}}]),t}(),dm=function(){function t(e,i,o){Ra(this,t),this._rng=Vu("REPULSION SOLVER"),this.body=e,this.physicsBody=i,this.setOptions(o)}return Ha(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"solve",value:function(){for(var t,e,i,o,n,r,s,a,h=this.body.nodes,d=this.physicsBody.physicsNodeIndices,l=this.physicsBody.forces,c=this.options.nodeDistance,u=-2/3/c,f=0;f<d.length-1;f++){s=h[d[f]];for(var p=f+1;p<d.length;p++)t=(a=h[d[p]]).x-s.x,e=a.y-s.y,0===(i=Math.sqrt(t*t+e*e))&&(t=i=.1*this._rng()),i<2*c&&(r=i<.5*c?1:u*i+1.3333333333333333,o=t*(r/=i),n=e*r,l[s.id].x-=o,l[s.id].y-=n,l[a.id].x+=o,l[a.id].y+=n)}}}]),t}(),lm=function(){function t(e,i,o){Ra(this,t),this.body=e,this.physicsBody=i,this.setOptions(o)}return Ha(t,[{key:"setOptions",value:function(t){this.options=t,this.overlapAvoidanceFactor=Math.max(0,Math.min(1,this.options.avoidOverlap||0))}},{key:"solve",value:function(){for(var t=this.body.nodes,e=this.physicsBody.physicsNodeIndices,i=this.physicsBody.forces,o=this.options.nodeDistance,n=0;n<e.length-1;n++)for(var r=t[e[n]],s=n+1;s<e.length;s++){var a=t[e[s]];if(r.level===a.level){var h=o+this.overlapAvoidanceFactor*((r.shape.radius||0)/2+(a.shape.radius||0)/2),d=a.x-r.x,l=a.y-r.y,c=Math.sqrt(d*d+l*l),u=void 0;u=c<h?-Math.pow(.05*c,2)+Math.pow(.05*h,2):0,0!==c&&(u/=c);var f=d*u,p=l*u;i[r.id].x-=f,i[r.id].y-=p,i[a.id].x+=f,i[a.id].y+=p}}}}]),t}(),cm=function(){function t(e,i,o){Ra(this,t),this.body=e,this.physicsBody=i,this.setOptions(o)}return Ha(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"solve",value:function(){for(var t,e,i,o,n,r=this.physicsBody.physicsEdgeIndices,s=this.body.edges,a=0;a<r.length;a++)!0===(e=s[r[a]]).connected&&e.toId!==e.fromId&&void 0!==this.body.nodes[e.toId]&&void 0!==this.body.nodes[e.fromId]&&(void 0!==e.edgeType.via?(t=void 0===e.options.length?this.options.springLength:e.options.length,i=e.to,o=e.edgeType.via,n=e.from,this._calculateSpringForce(i,o,.5*t),this._calculateSpringForce(o,n,.5*t)):(t=void 0===e.options.length?1.5*this.options.springLength:e.options.length,this._calculateSpringForce(e.from,e.to,t)))}},{key:"_calculateSpringForce",value:function(t,e,i){var o=t.x-e.x,n=t.y-e.y,r=Math.max(Math.sqrt(o*o+n*n),.01),s=this.options.springConstant*(i-r)/r,a=o*s,h=n*s;void 0!==this.physicsBody.forces[t.id]&&(this.physicsBody.forces[t.id].x+=a,this.physicsBody.forces[t.id].y+=h),void 0!==this.physicsBody.forces[e.id]&&(this.physicsBody.forces[e.id].x-=a,this.physicsBody.forces[e.id].y-=h)}}]),t}(),um=function(){function t(e,i,o){Ra(this,t),this.body=e,this.physicsBody=i,this.setOptions(o)}return Ha(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"solve",value:function(){for(var t,e,i,o,n,r,s,a,h,d,l=this.body.edges,c=.5,u=this.physicsBody.physicsEdgeIndices,f=this.physicsBody.physicsNodeIndices,p=this.physicsBody.forces,v=0;v<f.length;v++){var g=f[v];p[g].springFx=0,p[g].springFy=0}for(var y=0;y<u.length;y++)!0===(e=l[u[y]]).connected&&(t=void 0===e.options.length?this.options.springLength:e.options.length,i=e.from.x-e.to.x,o=e.from.y-e.to.y,a=0===(a=Math.sqrt(i*i+o*o))?.01:a,n=i*(s=this.options.springConstant*(t-a)/a),r=o*s,e.to.level!=e.from.level?(void 0!==p[e.toId]&&(p[e.toId].springFx-=n,p[e.toId].springFy-=r),void 0!==p[e.fromId]&&(p[e.fromId].springFx+=n,p[e.fromId].springFy+=r)):(void 0!==p[e.toId]&&(p[e.toId].x-=c*n,p[e.toId].y-=c*r),void 0!==p[e.fromId]&&(p[e.fromId].x+=c*n,p[e.fromId].y+=c*r)));s=1;for(var m=0;m<f.length;m++){var b=f[m];h=Math.min(s,Math.max(-s,p[b].springFx)),d=Math.min(s,Math.max(-s,p[b].springFy)),p[b].x+=h,p[b].y+=d}for(var w=0,k=0,_=0;_<f.length;_++){var x=f[_];w+=p[x].x,k+=p[x].y}for(var E=w/f.length,O=k/f.length,C=0;C<f.length;C++){var S=f[C];p[S].x-=E,p[S].y-=O}}}]),t}(),fm=function(){function t(e,i,o){Ra(this,t),this.body=e,this.physicsBody=i,this.setOptions(o)}return Ha(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"solve",value:function(){for(var t,e,i,o,n=this.body.nodes,r=this.physicsBody.physicsNodeIndices,s=this.physicsBody.forces,a=0;a<r.length;a++){t=-(o=n[r[a]]).x,e=-o.y,i=Math.sqrt(t*t+e*e),this._calculateForces(i,t,e,s,o)}}},{key:"_calculateForces",value:function(t,e,i,o,n){var r=0===t?0:this.options.centralGravity/t;o[n.id].x=e*r,o[n.id].y=i*r}}]),t}();function pm(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var vm=function(t){kg(i,t);var e=pm(i);function i(t,o,n){var r;return Ra(this,i),(r=e.call(this,t,o,n))._rng=Vu("FORCE ATLAS 2 BASED REPULSION SOLVER"),r}return Ha(i,[{key:"_calculateForces",value:function(t,e,i,o,n){0===t&&(e=t=.1*this._rng()),this.overlapAvoidanceFactor<1&&o.shape.radius&&(t=Math.max(.1+this.overlapAvoidanceFactor*o.shape.radius,t-o.shape.radius));var r=o.edges.length+1,s=this.options.gravitationalConstant*n.mass*o.options.mass*r/Math.pow(t,2),a=e*s,h=i*s;this.physicsBody.forces[o.id].x+=a,this.physicsBody.forces[o.id].y+=h}}]),i}(hm);function gm(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var ym,mm=function(t){kg(i,t);var e=gm(i);function i(t,o,n){return Ra(this,i),e.call(this,t,o,n)}return Ha(i,[{key:"_calculateForces",value:function(t,e,i,o,n){if(t>0){var r=n.edges.length+1,s=this.options.centralGravity*r*n.options.mass;o[n.id].x=e*s,o[n.id].y=i*s}}}]),i}(fm),bm=function(){function t(e){Ra(this,t),this.body=e,this.physicsBody={physicsNodeIndices:[],physicsEdgeIndices:[],forces:{},velocities:{}},this.physicsEnabled=!0,this.simulationInterval=1e3/60,this.requiresTimeout=!0,this.previousStates={},this.referenceState={},this.freezeCache={},this.renderTimer=void 0,this.adaptiveTimestep=!1,this.adaptiveTimestepEnabled=!1,this.adaptiveCounter=0,this.adaptiveInterval=3,this.stabilized=!1,this.startedStabilization=!1,this.stabilizationIterations=0,this.ready=!1,this.options={},this.defaultOptions={enabled:!0,barnesHut:{theta:.5,gravitationalConstant:-2e3,centralGravity:.3,springLength:95,springConstant:.04,damping:.09,avoidOverlap:0},forceAtlas2Based:{theta:.5,gravitationalConstant:-50,centralGravity:.01,springConstant:.08,springLength:100,damping:.4,avoidOverlap:0},repulsion:{centralGravity:.2,springLength:200,springConstant:.05,nodeDistance:100,damping:.09,avoidOverlap:0},hierarchicalRepulsion:{centralGravity:0,springLength:100,springConstant:.01,nodeDistance:120,damping:.09},maxVelocity:50,minVelocity:.75,solver:"barnesHut",stabilization:{enabled:!0,iterations:1e3,updateInterval:50,onlyDynamicEdges:!1,fit:!0},timestep:.5,adaptiveTimestep:!0,wind:{x:0,y:0}},Ke(this.options,this.defaultOptions),this.timestep=.5,this.layoutFailed=!1,this.bindEventListeners()}return Ha(t,[{key:"bindEventListeners",value:function(){var t=this;this.body.emitter.on("initPhysics",(function(){t.initPhysics()})),this.body.emitter.on("_layoutFailed",(function(){t.layoutFailed=!0})),this.body.emitter.on("resetPhysics",(function(){t.stopSimulation(),t.ready=!1})),this.body.emitter.on("disablePhysics",(function(){t.physicsEnabled=!1,t.stopSimulation()})),this.body.emitter.on("restorePhysics",(function(){t.setOptions(t.options),!0===t.ready&&t.startSimulation()})),this.body.emitter.on("startSimulation",(function(){!0===t.ready&&t.startSimulation()})),this.body.emitter.on("stopSimulation",(function(){t.stopSimulation()})),this.body.emitter.on("destroy",(function(){t.stopSimulation(!1),t.body.emitter.off()})),this.body.emitter.on("_dataChanged",(function(){t.updatePhysicsData()}))}},{key:"setOptions",value:function(t){if(void 0!==t)if(!1===t)this.options.enabled=!1,this.physicsEnabled=!1,this.stopSimulation();else if(!0===t)this.options.enabled=!0,this.physicsEnabled=!0,this.startSimulation();else{this.physicsEnabled=!0,rf(["stabilization"],this.options,t),_f(this.options,t,"stabilization"),void 0===t.enabled&&(this.options.enabled=!0),!1===this.options.enabled&&(this.physicsEnabled=!1,this.stopSimulation());var e=this.options.wind;e&&(("number"!=typeof e.x||Tv(e.x))&&(e.x=0),("number"!=typeof e.y||Tv(e.y))&&(e.y=0)),this.timestep=this.options.timestep}this.init()}},{key:"init",value:function(){var t;"forceAtlas2Based"===this.options.solver?(t=this.options.forceAtlas2Based,this.nodesSolver=new vm(this.body,this.physicsBody,t),this.edgesSolver=new cm(this.body,this.physicsBody,t),this.gravitySolver=new mm(this.body,this.physicsBody,t)):"repulsion"===this.options.solver?(t=this.options.repulsion,this.nodesSolver=new dm(this.body,this.physicsBody,t),this.edgesSolver=new cm(this.body,this.physicsBody,t),this.gravitySolver=new fm(this.body,this.physicsBody,t)):"hierarchicalRepulsion"===this.options.solver?(t=this.options.hierarchicalRepulsion,this.nodesSolver=new lm(this.body,this.physicsBody,t),this.edgesSolver=new um(this.body,this.physicsBody,t),this.gravitySolver=new fm(this.body,this.physicsBody,t)):(t=this.options.barnesHut,this.nodesSolver=new hm(this.body,this.physicsBody,t),this.edgesSolver=new cm(this.body,this.physicsBody,t),this.gravitySolver=new fm(this.body,this.physicsBody,t)),this.modelOptions=t}},{key:"initPhysics",value:function(){!0===this.physicsEnabled&&!0===this.options.enabled?!0===this.options.stabilization.enabled?this.stabilize():(this.stabilized=!1,this.ready=!0,this.body.emitter.emit("fit",{},this.layoutFailed),this.startSimulation()):(this.ready=!0,this.body.emitter.emit("fit"))}},{key:"startSimulation",value:function(){var t;!0===this.physicsEnabled&&!0===this.options.enabled?(this.stabilized=!1,this.adaptiveTimestep=!1,this.body.emitter.emit("_resizeNodes"),void 0===this.viewFunction&&(this.viewFunction=si(t=this.simulationStep).call(t,this),this.body.emitter.on("initRedraw",this.viewFunction),this.body.emitter.emit("_startRendering"))):this.body.emitter.emit("_redraw")}},{key:"stopSimulation",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.stabilized=!0,!0===t&&this._emitStabilized(),void 0!==this.viewFunction&&(this.body.emitter.off("initRedraw",this.viewFunction),this.viewFunction=void 0,!0===t&&this.body.emitter.emit("_stopRendering"))}},{key:"simulationStep",value:function(){var t=Kh();this.physicsTick(),(Kh()-t<.4*this.simulationInterval||!0===this.runDoubleSpeed)&&!1===this.stabilized&&(this.physicsTick(),this.runDoubleSpeed=!0),!0===this.stabilized&&this.stopSimulation()}},{key:"_emitStabilized",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.stabilizationIterations;(this.stabilizationIterations>1||!0===this.startedStabilization)&&Yl((function(){t.body.emitter.emit("stabilized",{iterations:e}),t.startedStabilization=!1,t.stabilizationIterations=0}),0)}},{key:"physicsStep",value:function(){this.gravitySolver.solve(),this.nodesSolver.solve(),this.edgesSolver.solve(),this.moveNodes()}},{key:"adjustTimeStep",value:function(){!0===this._evaluateStepQuality()?this.timestep=1.2*this.timestep:this.timestep/1.2<this.options.timestep?this.timestep=this.options.timestep:(this.adaptiveCounter=-1,this.timestep=Math.max(this.options.timestep,this.timestep/1.2))}},{key:"physicsTick",value:function(){if(this._startStabilizing(),!0!==this.stabilized){if(!0===this.adaptiveTimestep&&!0===this.adaptiveTimestepEnabled)this.adaptiveCounter%this.adaptiveInterval==0?(this.timestep=2*this.timestep,this.physicsStep(),this.revert(),this.timestep=.5*this.timestep,this.physicsStep(),this.physicsStep(),this.adjustTimeStep()):this.physicsStep(),this.adaptiveCounter+=1;else this.timestep=this.options.timestep,this.physicsStep();!0===this.stabilized&&this.revert(),this.stabilizationIterations++}}},{key:"updatePhysicsData",value:function(){this.physicsBody.forces={},this.physicsBody.physicsNodeIndices=[],this.physicsBody.physicsEdgeIndices=[];var t=this.body.nodes,e=this.body.edges;for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&!0===t[i].options.physics&&this.physicsBody.physicsNodeIndices.push(t[i].id);for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&!0===e[o].options.physics&&this.physicsBody.physicsEdgeIndices.push(e[o].id);for(var n=0;n<this.physicsBody.physicsNodeIndices.length;n++){var r=this.physicsBody.physicsNodeIndices[n];this.physicsBody.forces[r]={x:0,y:0},void 0===this.physicsBody.velocities[r]&&(this.physicsBody.velocities[r]={x:0,y:0})}for(var s in this.physicsBody.velocities)void 0===t[s]&&delete this.physicsBody.velocities[s]}},{key:"revert",value:function(){var t=Gh(this.previousStates),e=this.body.nodes,i=this.physicsBody.velocities;this.referenceState={};for(var o=0;o<t.length;o++){var n=t[o];void 0!==e[n]?!0===e[n].options.physics&&(this.referenceState[n]={positions:{x:e[n].x,y:e[n].y}},i[n].x=this.previousStates[n].vx,i[n].y=this.previousStates[n].vy,e[n].x=this.previousStates[n].x,e[n].y=this.previousStates[n].y):delete this.previousStates[n]}}},{key:"_evaluateStepQuality",value:function(){var t,e,i=this.body.nodes,o=this.referenceState;for(var n in this.referenceState)if(Object.prototype.hasOwnProperty.call(this.referenceState,n)&&void 0!==i[n]&&(t=i[n].x-o[n].positions.x,e=i[n].y-o[n].positions.y,Math.sqrt(Math.pow(t,2)+Math.pow(e,2))>.3))return!1;return!0}},{key:"moveNodes",value:function(){for(var t=this.physicsBody.physicsNodeIndices,e=0,i=0,o=0;o<t.length;o++){var n=t[o],r=this._performStep(n);e=Math.max(e,r),i+=r}this.adaptiveTimestepEnabled=i/t.length<5,this.stabilized=e<this.options.minVelocity}},{key:"calculateComponentVelocity",value:function(t,e,i){t+=(e-this.modelOptions.damping*t)/i*this.timestep;var o=this.options.maxVelocity||1e9;return Math.abs(t)>o&&(t=t>0?o:-o),t}},{key:"_performStep",value:function(t){var e=this.body.nodes[t],i=this.physicsBody.forces[t];this.options.wind&&(i.x+=this.options.wind.x,i.y+=this.options.wind.y);var o=this.physicsBody.velocities[t];return this.previousStates[t]={x:e.x,y:e.y,vx:o.x,vy:o.y},!1===e.options.fixed.x?(o.x=this.calculateComponentVelocity(o.x,i.x,e.options.mass),e.x+=o.x*this.timestep):(i.x=0,o.x=0),!1===e.options.fixed.y?(o.y=this.calculateComponentVelocity(o.y,i.y,e.options.mass),e.y+=o.y*this.timestep):(i.y=0,o.y=0),Math.sqrt(Math.pow(o.x,2)+Math.pow(o.y,2))}},{key:"_freezeNodes",value:function(){var t=this.body.nodes;for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].x&&t[e].y){var i=t[e].options.fixed;this.freezeCache[e]={x:i.x,y:i.y},i.x=!0,i.y=!0}}},{key:"_restoreFrozenNodes",value:function(){var t=this.body.nodes;for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&void 0!==this.freezeCache[e]&&(t[e].options.fixed.x=this.freezeCache[e].x,t[e].options.fixed.y=this.freezeCache[e].y);this.freezeCache={}}},{key:"stabilize",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.stabilization.iterations;"number"!=typeof e&&(e=this.options.stabilization.iterations,console.error("The stabilize method needs a numeric amount of iterations. Switching to default: ",e)),0!==this.physicsBody.physicsNodeIndices.length?(this.adaptiveTimestep=this.options.adaptiveTimestep,this.body.emitter.emit("_resizeNodes"),this.stopSimulation(),this.stabilized=!1,this.body.emitter.emit("_blockRedraw"),this.targetIterations=e,!0===this.options.stabilization.onlyDynamicEdges&&this._freezeNodes(),this.stabilizationIterations=0,Yl((function(){return t._stabilizationBatch()}),0)):this.ready=!0}},{key:"_startStabilizing",value:function(){return!0!==this.startedStabilization&&(this.body.emitter.emit("startStabilizing"),this.startedStabilization=!0,!0)}},{key:"_stabilizationBatch",value:function(){var t=this,e=function(){return!1===t.stabilized&&t.stabilizationIterations<t.targetIterations},i=function(){t.body.emitter.emit("stabilizationProgress",{iterations:t.stabilizationIterations,total:t.targetIterations})};this._startStabilizing()&&i();for(var o,n=0;e()&&n<this.options.stabilization.updateInterval;)this.physicsTick(),n++;(i(),e())?Yl(si(o=this._stabilizationBatch).call(o,this),0):this._finalizeStabilization()}},{key:"_finalizeStabilization",value:function(){this.body.emitter.emit("_allowRedraw"),!0===this.options.stabilization.fit&&this.body.emitter.emit("fit"),!0===this.options.stabilization.onlyDynamicEdges&&this._restoreFrozenNodes(),this.body.emitter.emit("stabilizationIterationsDone"),this.body.emitter.emit("_requestRedraw"),!0===this.stabilized?this._emitStabilized():this.startSimulation(),this.ready=!0}},{key:"_drawForces",value:function(t){for(var e=0;e<this.physicsBody.physicsNodeIndices.length;e++){var i=this.physicsBody.physicsNodeIndices[e],o=this.body.nodes[i],n=this.physicsBody.forces[i],r=Math.sqrt(Math.pow(n.x,2)+Math.pow(n.x,2)),s=Math.min(Math.max(5,r),15),a=3*s,h=yf((180-180*Math.min(1,Math.max(0,.03*r)))/360,1,1),d={x:o.x+20*n.x,y:o.y+20*n.y};t.lineWidth=s,t.strokeStyle=h,t.beginPath(),t.moveTo(o.x,o.y),t.lineTo(d.x,d.y),t.stroke();var l=Math.atan2(n.y,n.x);t.fillStyle=h,Vy.draw(t,{type:"arrow",point:d,angle:l,length:a}),Ql(t).call(t)}}}]),t}(),wm=new Uint8Array(16);function km(){if(!ym&&!(ym="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ym(wm)}var _m=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function xm(t){return"string"==typeof t&&_m.test(t)}for(var Em=[],Om=0;Om<256;++Om)Em.push((Om+256).toString(16).substr(1));function Cm(t,e,i){var o=(t=t||{}).random||(t.rng||km)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){i=i||0;for(var n=0;n<16;++n)e[i+n]=o[n];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=(Em[t[e+0]]+Em[t[e+1]]+Em[t[e+2]]+Em[t[e+3]]+"-"+Em[t[e+4]]+Em[t[e+5]]+"-"+Em[t[e+6]]+Em[t[e+7]]+"-"+Em[t[e+8]]+Em[t[e+9]]+"-"+Em[t[e+10]]+Em[t[e+11]]+Em[t[e+12]]+Em[t[e+13]]+Em[t[e+14]]+Em[t[e+15]]).toLowerCase();if(!xm(i))throw TypeError("Stringified UUID is invalid");return i}(o)}var Sm=function(){function t(){Ra(this,t)}return Ha(t,null,[{key:"getRange",value:function(t){var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=1e9,n=-1e9,r=1e9,s=-1e9;if(i.length>0)for(var a=0;a<i.length;a++)r>(e=t[i[a]]).shape.boundingBox.left&&(r=e.shape.boundingBox.left),s<e.shape.boundingBox.right&&(s=e.shape.boundingBox.right),o>e.shape.boundingBox.top&&(o=e.shape.boundingBox.top),n<e.shape.boundingBox.bottom&&(n=e.shape.boundingBox.bottom);return 1e9===r&&-1e9===s&&1e9===o&&-1e9===n&&(o=0,n=0,r=0,s=0),{minX:r,maxX:s,minY:o,maxY:n}}},{key:"getRangeCore",value:function(t){var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=1e9,n=-1e9,r=1e9,s=-1e9;if(i.length>0)for(var a=0;a<i.length;a++)r>(e=t[i[a]]).x&&(r=e.x),s<e.x&&(s=e.x),o>e.y&&(o=e.y),n<e.y&&(n=e.y);return 1e9===r&&-1e9===s&&1e9===o&&-1e9===n&&(o=0,n=0,r=0,s=0),{minX:r,maxX:s,minY:o,maxY:n}}},{key:"findCenter",value:function(t){return{x:.5*(t.maxX+t.minX),y:.5*(t.maxY+t.minY)}}},{key:"cloneOptions",value:function(t,e){var i={};return void 0===e||"node"===e?(sf(i,t.options,!0),i.x=t.x,i.y=t.y,i.amountOfConnections=t.edges.length):sf(i,t.options,!0),i}}]),t}();function Tm(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var Mm=function(t){kg(i,t);var e=Tm(i);function i(t,o,n,r,s,a){var h;return Ra(this,i),(h=e.call(this,t,o,n,r,s,a)).isCluster=!0,h.containedNodes={},h.containedEdges={},h}return Ha(i,[{key:"_openChildCluster",value:function(t){var e=this,i=this.body.nodes[t];if(void 0===this.containedNodes[t])throw new Error("node with id: "+t+" not in current cluster");if(!i.isCluster)throw new Error("node with id: "+t+" is not a cluster");delete this.containedNodes[t],lf(i.edges,(function(t){delete e.containedEdges[t.id]})),lf(i.containedNodes,(function(t,i){e.containedNodes[i]=t})),i.containedNodes={},lf(i.containedEdges,(function(t,i){e.containedEdges[i]=t})),i.containedEdges={},lf(i.edges,(function(t){lf(e.edges,(function(i){var o,n,r=Cl(o=i.clusteringEdgeReplacingIds).call(o,t.id);-1!==r&&(lf(t.clusteringEdgeReplacingIds,(function(t){i.clusteringEdgeReplacingIds.push(t),e.body.edges[t].edgeReplacedById=i.id})),Od(n=i.clusteringEdgeReplacingIds).call(n,r,1))}))})),i.edges=[]}}]),i}(uy),Pm=function(){function t(e){var i=this;Ra(this,t),this.body=e,this.clusteredNodes={},this.clusteredEdges={},this.options={},this.defaultOptions={},Ke(this.options,this.defaultOptions),this.body.emitter.on("_resetData",(function(){i.clusteredNodes={},i.clusteredEdges={}}))}return Ha(t,[{key:"clusterByHubsize",value:function(t,e){void 0===t?t=this._getHubSize():"object"===zh(t)&&(e=this._checkOptions(t),t=this._getHubSize());for(var i=[],o=0;o<this.body.nodeIndices.length;o++){var n=this.body.nodes[this.body.nodeIndices[o]];n.edges.length>=t&&i.push(n.id)}for(var r=0;r<i.length;r++)this.clusterByConnection(i[r],e,!0);this.body.emitter.emit("_dataChanged")}},{key:"cluster",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(void 0===e.joinCondition)throw new Error("Cannot call clusterByNodeData without a joinCondition function in the options.");e=this._checkOptions(e);var o={},n={};lf(this.body.nodes,(function(i,r){i.options&&!0===e.joinCondition(i.options)&&(o[r]=i,lf(i.edges,(function(e){void 0===t.clusteredEdges[e.id]&&(n[e.id]=e)})))})),this._cluster(o,n,e,i)}},{key:"clusterByEdgeCount",value:function(t,e){var i=this,o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];e=this._checkOptions(e);for(var n,r,s,a=[],h={},d=function(o){var d={},l={},c=i.body.nodeIndices[o],u=i.body.nodes[c];if(void 0===h[c]){s=0,r=[];for(var f=0;f<u.edges.length;f++)n=u.edges[f],void 0===i.clusteredEdges[n.id]&&(n.toId!==n.fromId&&s++,r.push(n));if(s===t){for(var p=function(t){if(void 0===e.joinCondition||null===e.joinCondition)return!0;var i=Sm.cloneOptions(t);return e.joinCondition(i)},v=!0,g=0;g<r.length;g++){n=r[g];var y=i._getConnectedId(n,c);if(!p(u)){v=!1;break}l[n.id]=n,d[c]=u,d[y]=i.body.nodes[y],h[c]=!0}if(Gh(d).length>0&&Gh(l).length>0&&!0===v){var m=function(){for(var t=0;t<a.length;++t)for(var e in d)if(void 0!==a[t].nodes[e])return a[t]}();if(void 0!==m){for(var b in d)void 0===m.nodes[b]&&(m.nodes[b]=d[b]);for(var w in l)void 0===m.edges[w]&&(m.edges[w]=l[w])}else a.push({nodes:d,edges:l})}}}},l=0;l<this.body.nodeIndices.length;l++)d(l);for(var c=0;c<a.length;c++)this._cluster(a[c].nodes,a[c].edges,e,!1);!0===o&&this.body.emitter.emit("_dataChanged")}},{key:"clusterOutliers",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.clusterByEdgeCount(1,t,e)}},{key:"clusterBridges",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.clusterByEdgeCount(2,t,e)}},{key:"clusterByConnection",value:function(t,e){var i,o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(void 0===t)throw new Error("No nodeId supplied to clusterByConnection!");if(void 0===this.body.nodes[t])throw new Error("The nodeId given to clusterByConnection does not exist!");var n=this.body.nodes[t];void 0===(e=this._checkOptions(e,n)).clusterNodeProperties.x&&(e.clusterNodeProperties.x=n.x),void 0===e.clusterNodeProperties.y&&(e.clusterNodeProperties.y=n.y),void 0===e.clusterNodeProperties.fixed&&(e.clusterNodeProperties.fixed={},e.clusterNodeProperties.fixed.x=n.options.fixed.x,e.clusterNodeProperties.fixed.y=n.options.fixed.y);var r={},s={},a=n.id,h=Sm.cloneOptions(n);r[a]=n;for(var d=0;d<n.edges.length;d++){var l=n.edges[d];if(void 0===this.clusteredEdges[l.id]){var c=this._getConnectedId(l,a);if(void 0===this.clusteredNodes[c])if(c!==a)if(void 0===e.joinCondition)s[l.id]=l,r[c]=this.body.nodes[c];else{var u=Sm.cloneOptions(this.body.nodes[c]);!0===e.joinCondition(h,u)&&(s[l.id]=l,r[c]=this.body.nodes[c])}else s[l.id]=l}}var f=Uh(i=Gh(r)).call(i,(function(t){return r[t].id}));for(var p in r)if(Object.prototype.hasOwnProperty.call(r,p))for(var v=r[p],g=0;g<v.edges.length;g++){var y=v.edges[g];Cl(f).call(f,this._getConnectedId(y,v.id))>-1&&(s[y.id]=y)}this._cluster(r,s,e,o)}},{key:"_createClusterEdges",value:function(t,e,i,o){for(var n,r,s,a,h,d,l=Gh(t),c=[],u=0;u<l.length;u++){s=t[r=l[u]];for(var f=0;f<s.edges.length;f++)n=s.edges[f],void 0===this.clusteredEdges[n.id]&&(n.toId==n.fromId?e[n.id]=n:n.toId==r?(a=i.id,d=h=n.fromId):(a=n.toId,h=i.id,d=a),void 0===t[d]&&c.push({edge:n,fromId:h,toId:a}))}for(var p=[],v=function(t){for(var e=0;e<p.length;e++){var i=p[e],o=t.fromId===i.fromId&&t.toId===i.toId,n=t.fromId===i.toId&&t.toId===i.fromId;if(o||n)return i}return null},g=0;g<c.length;g++){var y=c[g],m=y.edge,b=v(y);null===b?(b=this._createClusteredEdge(y.fromId,y.toId,m,o),p.push(b)):b.clusteringEdgeReplacingIds.push(m.id),this.body.edges[m.id].edgeReplacedById=b.id,this._backupEdgeOptions(m),m.setOptions({physics:!1})}}},{key:"_checkOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return void 0===t.clusterEdgeProperties&&(t.clusterEdgeProperties={}),void 0===t.clusterNodeProperties&&(t.clusterNodeProperties={}),t}},{key:"_cluster",value:function(t,e,i){var o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],n=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&void 0!==this.clusteredNodes[r]&&n.push(r);for(var s=0;s<n.length;++s)delete t[n[s]];if(0!=Gh(t).length&&(1!=Gh(t).length||1==i.clusterNodeProperties.allowSingleNodeCluster)){var a=sf({},i.clusterNodeProperties);if(void 0!==i.processProperties){var h=[];for(var d in t)if(Object.prototype.hasOwnProperty.call(t,d)){var l=Sm.cloneOptions(t[d]);h.push(l)}var c=[];for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)&&"clusterEdge:"!==u.substr(0,12)){var f=Sm.cloneOptions(e[u],"edge");c.push(f)}if(!(a=i.processProperties(a,h,c)))throw new Error("The processProperties function does not return properties!")}void 0===a.id&&(a.id="cluster:"+Cm());var p=a.id;void 0===a.label&&(a.label="cluster");var v=void 0;void 0===a.x&&(v=this._getClusterPosition(t),a.x=v.x),void 0===a.y&&(void 0===v&&(v=this._getClusterPosition(t)),a.y=v.y),a.id=p;var g=this.body.functions.createNode(a,Mm);g.containedNodes=t,g.containedEdges=e,g.clusterEdgeProperties=i.clusterEdgeProperties,this.body.nodes[a.id]=g,this._clusterEdges(t,e,a,i.clusterEdgeProperties),a.id=void 0,!0===o&&this.body.emitter.emit("_dataChanged")}}},{key:"_backupEdgeOptions",value:function(t){void 0===this.clusteredEdges[t.id]&&(this.clusteredEdges[t.id]={physics:t.options.physics})}},{key:"_restoreEdge",value:function(t){var e=this.clusteredEdges[t.id];void 0!==e&&(t.setOptions({physics:e.physics}),delete this.clusteredEdges[t.id])}},{key:"isCluster",value:function(t){return void 0!==this.body.nodes[t]?!0===this.body.nodes[t].isCluster:(console.error("Node does not exist."),!1)}},{key:"_getClusterPosition",value:function(t){for(var e,i=Gh(t),o=t[i[0]].x,n=t[i[0]].x,r=t[i[0]].y,s=t[i[0]].y,a=1;a<i.length;a++)o=(e=t[i[a]]).x<o?e.x:o,n=e.x>n?e.x:n,r=e.y<r?e.y:r,s=e.y>s?e.y:s;return{x:.5*(o+n),y:.5*(r+s)}}},{key:"openCluster",value:function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(void 0===t)throw new Error("No clusterNodeId supplied to openCluster.");var o=this.body.nodes[t];if(void 0===o)throw new Error("The clusterNodeId supplied to openCluster does not exist.");if(!0!==o.isCluster||void 0===o.containedNodes||void 0===o.containedEdges)throw new Error("The node:"+t+" is not a valid cluster.");var n=this.findNode(t),r=Cl(n).call(n,t)-1;if(r>=0){var s=n[r],a=this.body.nodes[s];return a._openChildCluster(t),delete this.body.nodes[t],void(!0===i&&this.body.emitter.emit("_dataChanged"))}var h=o.containedNodes,d=o.containedEdges;if(void 0!==e&&void 0!==e.releaseFunction&&"function"==typeof e.releaseFunction){var l={},c={x:o.x,y:o.y};for(var u in h)if(Object.prototype.hasOwnProperty.call(h,u)){var f=this.body.nodes[u];l[u]={x:f.x,y:f.y}}var p=e.releaseFunction(c,l);for(var v in h)if(Object.prototype.hasOwnProperty.call(h,v)){var g=this.body.nodes[v];void 0!==p[v]&&(g.x=void 0===p[v].x?o.x:p[v].x,g.y=void 0===p[v].y?o.y:p[v].y)}}else lf(h,(function(t){!1===t.options.fixed.x&&(t.x=o.x),!1===t.options.fixed.y&&(t.y=o.y)}));for(var y in h)if(Object.prototype.hasOwnProperty.call(h,y)){var m=this.body.nodes[y];m.vx=o.vx,m.vy=o.vy,m.setOptions({physics:!0}),delete this.clusteredNodes[y]}for(var b=[],w=0;w<o.edges.length;w++)b.push(o.edges[w]);for(var k=0;k<b.length;k++){for(var _=b[k],x=this._getConnectedId(_,t),E=this.clusteredNodes[x],O=0;O<_.clusteringEdgeReplacingIds.length;O++){var C=_.clusteringEdgeReplacingIds[O],S=this.body.edges[C];if(void 0!==S)if(void 0!==E){var T=this.body.nodes[E.clusterId];T.containedEdges[S.id]=S,delete d[S.id];var M=S.fromId,P=S.toId;S.toId==x?P=E.clusterId:M=E.clusterId,this._createClusteredEdge(M,P,S,T.clusterEdgeProperties,{hidden:!1,physics:!0})}else this._restoreEdge(S)}_.remove()}for(var D in d)Object.prototype.hasOwnProperty.call(d,D)&&this._restoreEdge(d[D]);delete this.body.nodes[t],!0===i&&this.body.emitter.emit("_dataChanged")}},{key:"getNodesInCluster",value:function(t){var e=[];if(!0===this.isCluster(t)){var i=this.body.nodes[t].containedNodes;for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&e.push(this.body.nodes[o].id)}return e}},{key:"findNode",value:function(t){for(var e,i=[],o=0;void 0!==this.clusteredNodes[t]&&o<100;){if(void 0===(e=this.body.nodes[t]))return[];i.push(e.id),t=this.clusteredNodes[t].clusterId,o++}return void 0===(e=this.body.nodes[t])?[]:(i.push(e.id),ld(i).call(i),i)}},{key:"updateClusteredNode",value:function(t,e){if(void 0===t)throw new Error("No clusteredNodeId supplied to updateClusteredNode.");if(void 0===e)throw new Error("No newOptions supplied to updateClusteredNode.");if(void 0===this.body.nodes[t])throw new Error("The clusteredNodeId supplied to updateClusteredNode does not exist.");this.body.nodes[t].setOptions(e),this.body.emitter.emit("_dataChanged")}},{key:"updateEdge",value:function(t,e){if(void 0===t)throw new Error("No startEdgeId supplied to updateEdge.");if(void 0===e)throw new Error("No newOptions supplied to updateEdge.");if(void 0===this.body.edges[t])throw new Error("The startEdgeId supplied to updateEdge does not exist.");for(var i=this.getClusteredEdges(t),o=0;o<i.length;o++){this.body.edges[i[o]].setOptions(e)}this.body.emitter.emit("_dataChanged")}},{key:"getClusteredEdges",value:function(t){for(var e=[],i=0;void 0!==t&&void 0!==this.body.edges[t]&&i<100;)e.push(this.body.edges[t].id),t=this.body.edges[t].edgeReplacedById,i++;return ld(e).call(e),e}},{key:"getBaseEdge",value:function(t){return this.getBaseEdges(t)[0]}},{key:"getBaseEdges",value:function(t){for(var e=[t],i=[],o=[],n=0;e.length>0&&n<100;){var r=e.pop();if(void 0!==r){var s=this.body.edges[r];if(void 0!==s){n++;var a=s.clusteringEdgeReplacingIds;if(void 0===a)o.push(r);else for(var h=0;h<a.length;++h){var d=a[h];-1===Cl(e).call(e,a)&&-1===Cl(i).call(i,a)&&e.push(d)}i.push(r)}}}return o}},{key:"_getConnectedId",value:function(t,e){return t.toId!=e?t.toId:(t.fromId,t.fromId)}},{key:"_getHubSize",value:function(){for(var t=0,e=0,i=0,o=0,n=0;n<this.body.nodeIndices.length;n++){var r=this.body.nodes[this.body.nodeIndices[n]];r.edges.length>o&&(o=r.edges.length),t+=r.edges.length,e+=Math.pow(r.edges.length,2),i+=1}t/=i;var s=(e/=i)-Math.pow(t,2),a=Math.sqrt(s),h=Math.floor(t+2*a);return h>o&&(h=o),h}},{key:"_createClusteredEdge",value:function(t,e,i,o,n){var r=Sm.cloneOptions(i,"edge");sf(r,o),r.from=t,r.to=e,r.id="clusterEdge:"+Cm(),void 0!==n&&sf(r,n);var s=this.body.functions.createEdge(r);return s.clusteringEdgeReplacingIds=[i.id],s.connect(),this.body.edges[s.id]=s,s}},{key:"_clusterEdges",value:function(t,e,i,o){if(e instanceof sm){var n=e,r={};r[n.id]=n,e=r}if(t instanceof uy){var s=t,a={};a[s.id]=s,t=a}if(null==i)throw new Error("_clusterEdges: parameter clusterNode required");for(var h in void 0===o&&(o=i.clusterEdgeProperties),this._createClusterEdges(t,e,i,o),e)if(Object.prototype.hasOwnProperty.call(e,h)&&void 0!==this.body.edges[h]){var d=this.body.edges[h];this._backupEdgeOptions(d),d.setOptions({physics:!1})}for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(this.clusteredNodes[l]={clusterId:i.id,node:this.body.nodes[l]},this.body.nodes[l].setOptions({physics:!1}))}},{key:"_getClusterNodeForNode",value:function(t){if(void 0!==t){var e=this.clusteredNodes[t];if(void 0!==e){var i=e.clusterId;if(void 0!==i)return this.body.nodes[i]}}}},{key:"_filter",value:function(t,e){var i=[];return lf(t,(function(t){e(t)&&i.push(t)})),i}},{key:"_updateState",value:function(){var t,e=this,i=[],o={},n=function(t){lf(e.body.nodes,(function(e){!0===e.isCluster&&t(e)}))};for(t in this.clusteredNodes){if(Object.prototype.hasOwnProperty.call(this.clusteredNodes,t))void 0===this.body.nodes[t]&&i.push(t)}n((function(t){for(var e=0;e<i.length;e++)delete t.containedNodes[i[e]]}));for(var r=0;r<i.length;r++)delete this.clusteredNodes[i[r]];lf(this.clusteredEdges,(function(t){var i=e.body.edges[t];void 0!==i&&i.endPointsValid()||(o[t]=t)})),n((function(t){lf(t.containedEdges,(function(t,e){t.endPointsValid()||o[e]||(o[e]=e)}))})),lf(this.body.edges,(function(t,i){var n=!0,r=t.clusteringEdgeReplacingIds;if(void 0!==r){var s=0;lf(r,(function(t){var i=e.body.edges[t];void 0!==i&&i.endPointsValid()&&(s+=1)})),n=s>0}t.endPointsValid()&&n||(o[i]=i)})),n((function(t){lf(o,(function(i){delete t.containedEdges[i],lf(t.edges,(function(n,r){n.id!==i?n.clusteringEdgeReplacingIds=e._filter(n.clusteringEdgeReplacingIds,(function(t){return!o[t]})):t.edges[r]=null})),t.edges=e._filter(t.edges,(function(t){return null!==t}))}))})),lf(o,(function(t){delete e.clusteredEdges[t]})),lf(o,(function(t){delete e.body.edges[t]})),lf(Gh(this.body.edges),(function(t){var i=e.body.edges[t],o=e._isClusteredNode(i.fromId)||e._isClusteredNode(i.toId);if(o!==e._isClusteredEdge(i.id))if(o){var n=e._getClusterNodeForNode(i.fromId);void 0!==n&&e._clusterEdges(e.body.nodes[i.fromId],i,n);var r=e._getClusterNodeForNode(i.toId);void 0!==r&&e._clusterEdges(e.body.nodes[i.toId],i,r)}else delete e._clusterEdges[t],e._restoreEdge(i)}));for(var s=!1,a=!0,h=function(){var t=[];n((function(e){var i=Gh(e.containedNodes).length,o=!0===e.options.allowSingleNodeCluster;(o&&i<1||!o&&i<2)&&t.push(e.id)}));for(var i=0;i<t.length;++i)e.openCluster(t[i],{},!1);a=t.length>0,s=s||a};a;)h();s&&this._updateState()}},{key:"_isClusteredNode",value:function(t){return void 0!==this.clusteredNodes[t]}},{key:"_isClusteredEdge",value:function(t){return void 0!==this.clusteredEdges[t]}}]),t}();function Dm(t,e){var i=void 0!==Nh&&xr(t)||t["@@iterator"];if(!i){if(Hh(t)||(i=function(t,e){var i;if(!t)return;if("string"==typeof t)return Bm(t,e);var o=Lh(i=Object.prototype.toString.call(t)).call(i,8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return rr(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Bm(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,a=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){a=!0,r=t},f:function(){try{s||null==i.return||i.return()}finally{if(a)throw r}}}}function Bm(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var Im=function(){function t(e,i){var o;Ra(this,t),void 0!==window&&(o=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame),window.requestAnimationFrame=void 0===o?function(t){t()}:o,this.body=e,this.canvas=i,this.redrawRequested=!1,this.renderTimer=void 0,this.requiresTimeout=!0,this.renderingActive=!1,this.renderRequests=0,this.allowRedraw=!0,this.dragging=!1,this.zooming=!1,this.options={},this.defaultOptions={hideEdgesOnDrag:!1,hideEdgesOnZoom:!1,hideNodesOnDrag:!1},Ke(this.options,this.defaultOptions),this._determineBrowserMethod(),this.bindEventListeners()}return Ha(t,[{key:"bindEventListeners",value:function(){var t,e=this;this.body.emitter.on("dragStart",(function(){e.dragging=!0})),this.body.emitter.on("dragEnd",(function(){e.dragging=!1})),this.body.emitter.on("zoom",(function(){e.zooming=!0,window.clearTimeout(e.zoomTimeoutId),e.zoomTimeoutId=Yl((function(){var t;e.zooming=!1,si(t=e._requestRedraw).call(t,e)()}),250)})),this.body.emitter.on("_resizeNodes",(function(){e._resizeNodes()})),this.body.emitter.on("_redraw",(function(){!1===e.renderingActive&&e._redraw()})),this.body.emitter.on("_blockRedraw",(function(){e.allowRedraw=!1})),this.body.emitter.on("_allowRedraw",(function(){e.allowRedraw=!0,e.redrawRequested=!1})),this.body.emitter.on("_requestRedraw",si(t=this._requestRedraw).call(t,this)),this.body.emitter.on("_startRendering",(function(){e.renderRequests+=1,e.renderingActive=!0,e._startRendering()})),this.body.emitter.on("_stopRendering",(function(){e.renderRequests-=1,e.renderingActive=e.renderRequests>0,e.renderTimer=void 0})),this.body.emitter.on("destroy",(function(){e.renderRequests=0,e.allowRedraw=!1,e.renderingActive=!1,!0===e.requiresTimeout?clearTimeout(e.renderTimer):window.cancelAnimationFrame(e.renderTimer),e.body.emitter.off()}))}},{key:"setOptions",value:function(t){if(void 0!==t){nf(["hideEdgesOnDrag","hideEdgesOnZoom","hideNodesOnDrag"],this.options,t)}}},{key:"_requestNextFrame",value:function(t,e){if("undefined"!=typeof window){var i,o=window;return!0===this.requiresTimeout?i=Yl(t,e):o.requestAnimationFrame&&(i=o.requestAnimationFrame(t)),i}}},{key:"_startRendering",value:function(){var t;!0===this.renderingActive&&(void 0===this.renderTimer&&(this.renderTimer=this._requestNextFrame(si(t=this._renderStep).call(t,this),this.simulationInterval)))}},{key:"_renderStep",value:function(){!0===this.renderingActive&&(this.renderTimer=void 0,!0===this.requiresTimeout&&this._startRendering(),this._redraw(),!1===this.requiresTimeout&&this._startRendering())}},{key:"redraw",value:function(){this.body.emitter.emit("setSize"),this._redraw()}},{key:"_requestRedraw",value:function(){var t=this;!0!==this.redrawRequested&&!1===this.renderingActive&&!0===this.allowRedraw&&(this.redrawRequested=!0,this._requestNextFrame((function(){t._redraw(!1)}),0))}},{key:"_redraw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!0===this.allowRedraw){this.body.emitter.emit("initRedraw"),this.redrawRequested=!1;var e={drawExternalLabels:null};0!==this.canvas.frame.canvas.width&&0!==this.canvas.frame.canvas.height||this.canvas.setSize(),this.canvas.setTransform();var i=this.canvas.getContext(),o=this.canvas.frame.canvas.clientWidth,n=this.canvas.frame.canvas.clientHeight;if(i.clearRect(0,0,o,n),0===this.canvas.frame.clientWidth)return;if(i.save(),i.translate(this.body.view.translation.x,this.body.view.translation.y),i.scale(this.body.view.scale,this.body.view.scale),i.beginPath(),this.body.emitter.emit("beforeDrawing",i),i.closePath(),!1===t&&(!1===this.dragging||!0===this.dragging&&!1===this.options.hideEdgesOnDrag)&&(!1===this.zooming||!0===this.zooming&&!1===this.options.hideEdgesOnZoom)&&this._drawEdges(i),!1===this.dragging||!0===this.dragging&&!1===this.options.hideNodesOnDrag){var r=this._drawNodes(i,t),s=r.drawExternalLabels;e.drawExternalLabels=s}!1===t&&(!1===this.dragging||!0===this.dragging&&!1===this.options.hideEdgesOnDrag)&&(!1===this.zooming||!0===this.zooming&&!1===this.options.hideEdgesOnZoom)&&this._drawArrows(i),null!=e.drawExternalLabels&&e.drawExternalLabels(),!1===t&&this._drawSelectionBox(i),i.beginPath(),this.body.emitter.emit("afterDrawing",i),i.closePath(),i.restore(),!0===t&&i.clearRect(0,0,o,n)}}},{key:"_resizeNodes",value:function(){this.canvas.setTransform();var t=this.canvas.getContext();t.save(),t.translate(this.body.view.translation.x,this.body.view.translation.y),t.scale(this.body.view.scale,this.body.view.scale);var e,i=this.body.nodes;for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&((e=i[o]).resize(t),e.updateBoundingBox(t,e.selected));t.restore()}},{key:"_drawNodes",value:function(t){for(var e,i,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.body.nodes,r=this.body.nodeIndices,s=[],a=[],h=20,d=this.canvas.DOMtoCanvas({x:-h,y:-h}),l=this.canvas.DOMtoCanvas({x:this.canvas.frame.canvas.clientWidth+h,y:this.canvas.frame.canvas.clientHeight+h}),c={top:d.y,left:d.x,bottom:l.y,right:l.x},u=[],f=0;f<r.length;f++)if((e=n[r[f]]).hover)a.push(r[f]);else if(e.isSelected())s.push(r[f]);else if(!0===o){var p=e.draw(t);null!=p.drawExternalLabel&&u.push(p.drawExternalLabel)}else if(!0===e.isBoundingBoxOverlappingWith(c)){var v=e.draw(t);null!=v.drawExternalLabel&&u.push(v.drawExternalLabel)}else e.updateBoundingBox(t,e.selected);var g=s.length,y=a.length;for(i=0;i<g;i++){var m=(e=n[s[i]]).draw(t);null!=m.drawExternalLabel&&u.push(m.drawExternalLabel)}for(i=0;i<y;i++){var b=(e=n[a[i]]).draw(t);null!=b.drawExternalLabel&&u.push(b.drawExternalLabel)}return{drawExternalLabels:function(){var t,e=Dm(u);try{for(e.s();!(t=e.n()).done;){(0,t.value)()}}catch(t){e.e(t)}finally{e.f()}}}}},{key:"_drawEdges",value:function(t){for(var e=this.body.edges,i=this.body.edgeIndices,o=0;o<i.length;o++){var n=e[i[o]];!0===n.connected&&n.draw(t)}}},{key:"_drawArrows",value:function(t){for(var e=this.body.edges,i=this.body.edgeIndices,o=0;o<i.length;o++){var n=e[i[o]];!0===n.connected&&n.drawArrows(t)}}},{key:"_determineBrowserMethod",value:function(){if("undefined"!=typeof window){var t=navigator.userAgent.toLowerCase();this.requiresTimeout=!1,(-1!=Cl(t).call(t,"msie 9.0")||-1!=Cl(t).call(t,"safari")&&Cl(t).call(t,"chrome")<=-1)&&(this.requiresTimeout=!0)}else this.requiresTimeout=!0}},{key:"_drawSelectionBox",value:function(t){if(this.body.selectionBox.show){t.beginPath();var e=this.body.selectionBox.position.end.x-this.body.selectionBox.position.start.x,i=this.body.selectionBox.position.end.y-this.body.selectionBox.position.start.y;t.rect(this.body.selectionBox.position.start.x,this.body.selectionBox.position.start.y,e,i),t.fillStyle="rgba(151, 194, 252, 0.2)",t.fillRect(this.body.selectionBox.position.start.x,this.body.selectionBox.position.start.y,e,i),t.strokeStyle="rgba(151, 194, 252, 1)",t.stroke()}else t.closePath()}}]),t}(),zm=O.setInterval;function Fm(t,e){e.inputHandler=function(t){t.isFirst&&e(t)},t.on("hammer.input",e.inputHandler)}function Nm(t,e){return e.inputHandler=function(t){t.isFinal&&e(t)},t.on("hammer.input",e.inputHandler)}var Am=function(){function t(e){Ra(this,t),this.body=e,this.pixelRatio=1,this.cameraState={},this.initialized=!1,this.canvasViewCenter={},this._cleanupCallbacks=[],this.options={},this.defaultOptions={autoResize:!0,height:"100%",width:"100%"},Ke(this.options,this.defaultOptions),this.bindEventListeners()}return Ha(t,[{key:"bindEventListeners",value:function(){var t,e=this;this.body.emitter.once("resize",(function(t){0!==t.width&&(e.body.view.translation.x=.5*t.width),0!==t.height&&(e.body.view.translation.y=.5*t.height)})),this.body.emitter.on("setSize",si(t=this.setSize).call(t,this)),this.body.emitter.on("destroy",(function(){e.hammerFrame.destroy(),e.hammer.destroy(),e._cleanUp()}))}},{key:"setOptions",value:function(t){var e,i,o,n,r,s=this;if(void 0!==t){nf(["width","height","autoResize"],this.options,t)}if(this._cleanUp(),!0===this.options.autoResize){var a;if(window.ResizeObserver){var h=new ResizeObserver((function(){!0===s.setSize()&&s.body.emitter.emit("_requestRedraw")})),d=this.frame;h.observe(d),this._cleanupCallbacks.push((function(){h.unobserve(d)}))}else{var l=zm((function(){!0===s.setSize()&&s.body.emitter.emit("_requestRedraw")}),1e3);this._cleanupCallbacks.push((function(){clearInterval(l)}))}var c=si(a=this._onResize).call(a,this);e=window,i="resize",o=c,e.addEventListener?(void 0===n&&(n=!1),"mousewheel"===i&&Hd(r=navigator.userAgent).call(r,"Firefox")&&(i="DOMMouseScroll"),e.addEventListener(i,o,n)):e.attachEvent("on"+i,o),this._cleanupCallbacks.push((function(){!function(t,e,i,o){var n;t.removeEventListener?(void 0===o&&(o=!1),"mousewheel"===e&&Hd(n=navigator.userAgent).call(n,"Firefox")&&(e="DOMMouseScroll"),t.removeEventListener(e,i,o)):t.detachEvent("on"+e,i)}(window,"resize",c)}))}}},{key:"_cleanUp",value:function(){var t,e,i;nd(t=ld(e=Od(i=this._cleanupCallbacks).call(i,0)).call(e)).call(t,(function(t){try{t()}catch(t){console.error(t)}}))}},{key:"_onResize",value:function(){this.setSize(),this.body.emitter.emit("_redraw")}},{key:"_getCameraState",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.pixelRatio;!0===this.initialized&&(this.cameraState.previousWidth=this.frame.canvas.width/t,this.cameraState.previousHeight=this.frame.canvas.height/t,this.cameraState.scale=this.body.view.scale,this.cameraState.position=this.DOMtoCanvas({x:.5*this.frame.canvas.width/t,y:.5*this.frame.canvas.height/t}))}},{key:"_setCameraState",value:function(){if(void 0!==this.cameraState.scale&&0!==this.frame.canvas.clientWidth&&0!==this.frame.canvas.clientHeight&&0!==this.pixelRatio&&this.cameraState.previousWidth>0&&this.cameraState.previousHeight>0){var t=this.frame.canvas.width/this.pixelRatio/this.cameraState.previousWidth,e=this.frame.canvas.height/this.pixelRatio/this.cameraState.previousHeight,i=this.cameraState.scale;1!=t&&1!=e?i=.5*this.cameraState.scale*(t+e):1!=t?i=this.cameraState.scale*t:1!=e&&(i=this.cameraState.scale*e),this.body.view.scale=i;var o=this.DOMtoCanvas({x:.5*this.frame.canvas.clientWidth,y:.5*this.frame.canvas.clientHeight}),n={x:o.x-this.cameraState.position.x,y:o.y-this.cameraState.position.y};this.body.view.translation.x+=n.x*this.body.view.scale,this.body.view.translation.y+=n.y*this.body.view.scale}}},{key:"_prepareValue",value:function(t){if("number"==typeof t)return t+"px";if("string"==typeof t){if(-1!==Cl(t).call(t,"%")||-1!==Cl(t).call(t,"px"))return t;if(-1===Cl(t).call(t,"%"))return t+"px"}throw new Error("Could not use the value supplied for width or height:"+t)}},{key:"_create",value:function(){for(;this.body.container.hasChildNodes();)this.body.container.removeChild(this.body.container.firstChild);if(this.frame=document.createElement("div"),this.frame.className="vis-network",this.frame.style.position="relative",this.frame.style.overflow="hidden",this.frame.tabIndex=0,this.frame.canvas=document.createElement("canvas"),this.frame.canvas.style.position="relative",this.frame.appendChild(this.frame.canvas),this.frame.canvas.getContext)this._setPixelRatio(),this.setTransform();else{var t=document.createElement("DIV");t.style.color="red",t.style.fontWeight="bold",t.style.padding="10px",t.innerText="Error: your browser does not support HTML canvas",this.frame.canvas.appendChild(t)}this.body.container.appendChild(this.frame),this.body.view.scale=1,this.body.view.translation={x:.5*this.frame.canvas.clientWidth,y:.5*this.frame.canvas.clientHeight},this._bindHammer()}},{key:"_bindHammer",value:function(){var t=this;void 0!==this.hammer&&this.hammer.destroy(),this.drag={},this.pinch={},this.hammer=new If(this.frame.canvas),this.hammer.get("pinch").set({enable:!0}),this.hammer.get("pan").set({threshold:5,direction:If.DIRECTION_ALL}),Fm(this.hammer,(function(e){t.body.eventListeners.onTouch(e)})),this.hammer.on("tap",(function(e){t.body.eventListeners.onTap(e)})),this.hammer.on("doubletap",(function(e){t.body.eventListeners.onDoubleTap(e)})),this.hammer.on("press",(function(e){t.body.eventListeners.onHold(e)})),this.hammer.on("panstart",(function(e){t.body.eventListeners.onDragStart(e)})),this.hammer.on("panmove",(function(e){t.body.eventListeners.onDrag(e)})),this.hammer.on("panend",(function(e){t.body.eventListeners.onDragEnd(e)})),this.hammer.on("pinch",(function(e){t.body.eventListeners.onPinch(e)})),this.frame.canvas.addEventListener("wheel",(function(e){t.body.eventListeners.onMouseWheel(e)})),this.frame.canvas.addEventListener("mousemove",(function(e){t.body.eventListeners.onMouseMove(e)})),this.frame.canvas.addEventListener("contextmenu",(function(e){t.body.eventListeners.onContext(e)})),this.hammerFrame=new If(this.frame),Nm(this.hammerFrame,(function(e){t.body.eventListeners.onRelease(e)}))}},{key:"setSize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.width,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.height;t=this._prepareValue(t),e=this._prepareValue(e);var i=!1,o=this.frame.canvas.width,n=this.frame.canvas.height,r=this.pixelRatio;if(this._setPixelRatio(),t!=this.options.width||e!=this.options.height||this.frame.style.width!=t||this.frame.style.height!=e)this._getCameraState(r),this.frame.style.width=t,this.frame.style.height=e,this.frame.canvas.style.width="100%",this.frame.canvas.style.height="100%",this.frame.canvas.width=Math.round(this.frame.canvas.clientWidth*this.pixelRatio),this.frame.canvas.height=Math.round(this.frame.canvas.clientHeight*this.pixelRatio),this.options.width=t,this.options.height=e,this.canvasViewCenter={x:.5*this.frame.clientWidth,y:.5*this.frame.clientHeight},i=!0;else{var s=Math.round(this.frame.canvas.clientWidth*this.pixelRatio),a=Math.round(this.frame.canvas.clientHeight*this.pixelRatio);this.frame.canvas.width===s&&this.frame.canvas.height===a||this._getCameraState(r),this.frame.canvas.width!==s&&(this.frame.canvas.width=s,i=!0),this.frame.canvas.height!==a&&(this.frame.canvas.height=a,i=!0)}return!0===i&&(this.body.emitter.emit("resize",{width:Math.round(this.frame.canvas.width/this.pixelRatio),height:Math.round(this.frame.canvas.height/this.pixelRatio),oldWidth:Math.round(o/this.pixelRatio),oldHeight:Math.round(n/this.pixelRatio)}),this._setCameraState()),this.initialized=!0,i}},{key:"getContext",value:function(){return this.frame.canvas.getContext("2d")}},{key:"_determinePixelRatio",value:function(){var t=this.getContext();if(void 0===t)throw new Error("Could not get canvax context");var e=1;return"undefined"!=typeof window&&(e=window.devicePixelRatio||1),e/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)}},{key:"_setPixelRatio",value:function(){this.pixelRatio=this._determinePixelRatio()}},{key:"setTransform",value:function(){var t=this.getContext();if(void 0===t)throw new Error("Could not get canvax context");t.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0)}},{key:"_XconvertDOMtoCanvas",value:function(t){return(t-this.body.view.translation.x)/this.body.view.scale}},{key:"_XconvertCanvasToDOM",value:function(t){return t*this.body.view.scale+this.body.view.translation.x}},{key:"_YconvertDOMtoCanvas",value:function(t){return(t-this.body.view.translation.y)/this.body.view.scale}},{key:"_YconvertCanvasToDOM",value:function(t){return t*this.body.view.scale+this.body.view.translation.y}},{key:"canvasToDOM",value:function(t){return{x:this._XconvertCanvasToDOM(t.x),y:this._YconvertCanvasToDOM(t.y)}}},{key:"DOMtoCanvas",value:function(t){return{x:this._XconvertDOMtoCanvas(t.x),y:this._YconvertDOMtoCanvas(t.y)}}}]),t}();function Rm(t,e){var i=Ke({nodes:e,minZoomLevel:Number.MIN_VALUE,maxZoomLevel:1},null!=t?t:{});if(!Hh(i.nodes))throw new TypeError("Nodes has to be an array of ids.");if(0===i.nodes.length&&(i.nodes=e),!("number"==typeof i.minZoomLevel&&i.minZoomLevel>0))throw new TypeError("Min zoom level has to be a number higher than zero.");if(!("number"==typeof i.maxZoomLevel&&i.minZoomLevel<=i.maxZoomLevel))throw new TypeError("Max zoom level has to be a number higher than min zoom level.");return i}var jm=function(){function t(e,i){var o,n,r=this;Ra(this,t),this.body=e,this.canvas=i,this.animationSpeed=1/this.renderRefreshRate,this.animationEasingFunction="easeInOutQuint",this.easingTime=0,this.sourceScale=0,this.targetScale=0,this.sourceTranslation=0,this.targetTranslation=0,this.lockedOnNodeId=void 0,this.lockedOnNodeOffset=void 0,this.touchTime=0,this.viewFunction=void 0,this.body.emitter.on("fit",si(o=this.fit).call(o,this)),this.body.emitter.on("animationFinished",(function(){r.body.emitter.emit("_stopRendering")})),this.body.emitter.on("unlockNode",si(n=this.releaseNode).call(n,this))}return Ha(t,[{key:"setOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.options=t}},{key:"fit",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t=Rm(t,this.body.nodeIndices);var i,o,n=this.canvas.frame.canvas.clientWidth,r=this.canvas.frame.canvas.clientHeight;if(0===n||0===r)o=1,i=Sm.getRange(this.body.nodes,t.nodes);else if(!0===e){var s=0;for(var a in this.body.nodes)if(Object.prototype.hasOwnProperty.call(this.body.nodes,a)){var h=this.body.nodes[a];!0===h.predefinedPosition&&(s+=1)}if(s>.5*this.body.nodeIndices.length)return void this.fit(t,!1);i=Sm.getRange(this.body.nodes,t.nodes);var d=this.body.nodeIndices.length;o=12.662/(d+7.4147)+.0964822;var l=Math.min(n/600,r/600);o*=l}else{this.body.emitter.emit("_resizeNodes"),i=Sm.getRange(this.body.nodes,t.nodes);var c=1.1*Math.abs(i.maxX-i.minX),u=1.1*Math.abs(i.maxY-i.minY),f=n/c,p=r/u;o=f<=p?f:p}o>t.maxZoomLevel?o=t.maxZoomLevel:o<t.minZoomLevel&&(o=t.minZoomLevel);var v=Sm.findCenter(i),g={position:v,scale:o,animation:t.animation};this.moveTo(g)}},{key:"focus",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(void 0!==this.body.nodes[t]){var i={x:this.body.nodes[t].x,y:this.body.nodes[t].y};e.position=i,e.lockedOnNode=t,this.moveTo(e)}else console.error("Node: "+t+" cannot be found.")}},{key:"moveTo",value:function(t){if(void 0!==t){if(null!=t.offset){if(null!=t.offset.x){if(t.offset.x=+t.offset.x,!Pv(t.offset.x))throw new TypeError('The option "offset.x" has to be a finite number.')}else t.offset.x=0;if(null!=t.offset.y){if(t.offset.y=+t.offset.y,!Pv(t.offset.y))throw new TypeError('The option "offset.y" has to be a finite number.')}else t.offset.x=0}else t.offset={x:0,y:0};if(null!=t.position){if(null!=t.position.x){if(t.position.x=+t.position.x,!Pv(t.position.x))throw new TypeError('The option "position.x" has to be a finite number.')}else t.position.x=0;if(null!=t.position.y){if(t.position.y=+t.position.y,!Pv(t.position.y))throw new TypeError('The option "position.y" has to be a finite number.')}else t.position.x=0}else t.position=this.getViewPosition();if(null!=t.scale){if(t.scale=+t.scale,!(t.scale>0))throw new TypeError('The option "scale" has to be a number greater than zero.')}else t.scale=this.body.view.scale;void 0===t.animation&&(t.animation={duration:0}),!1===t.animation&&(t.animation={duration:0}),!0===t.animation&&(t.animation={}),void 0===t.animation.duration&&(t.animation.duration=1e3),void 0===t.animation.easingFunction&&(t.animation.easingFunction="easeInOutQuad"),this.animateView(t)}else t={}}},{key:"animateView",value:function(t){if(void 0!==t){this.animationEasingFunction=t.animation.easingFunction,this.releaseNode(),!0===t.locked&&(this.lockedOnNodeId=t.lockedOnNode,this.lockedOnNodeOffset=t.offset),0!=this.easingTime&&this._transitionRedraw(!0),this.sourceScale=this.body.view.scale,this.sourceTranslation=this.body.view.translation,this.targetScale=t.scale,this.body.view.scale=this.targetScale;var e,i,o=this.canvas.DOMtoCanvas({x:.5*this.canvas.frame.canvas.clientWidth,y:.5*this.canvas.frame.canvas.clientHeight}),n=o.x-t.position.x,r=o.y-t.position.y;if(this.targetTranslation={x:this.sourceTranslation.x+n*this.targetScale+t.offset.x,y:this.sourceTranslation.y+r*this.targetScale+t.offset.y},0===t.animation.duration)if(null!=this.lockedOnNodeId)this.viewFunction=si(e=this._lockedRedraw).call(e,this),this.body.emitter.on("initRedraw",this.viewFunction);else this.body.view.scale=this.targetScale,this.body.view.translation=this.targetTranslation,this.body.emitter.emit("_requestRedraw");else this.animationSpeed=1/(60*t.animation.duration*.001)||1/60,this.animationEasingFunction=t.animation.easingFunction,this.viewFunction=si(i=this._transitionRedraw).call(i,this),this.body.emitter.on("initRedraw",this.viewFunction),this.body.emitter.emit("_startRendering")}}},{key:"_lockedRedraw",value:function(){var t=this.body.nodes[this.lockedOnNodeId].x,e=this.body.nodes[this.lockedOnNodeId].y,i=this.canvas.DOMtoCanvas({x:.5*this.canvas.frame.canvas.clientWidth,y:.5*this.canvas.frame.canvas.clientHeight}),o=i.x-t,n=i.y-e,r=this.body.view.translation,s={x:r.x+o*this.body.view.scale+this.lockedOnNodeOffset.x,y:r.y+n*this.body.view.scale+this.lockedOnNodeOffset.y};this.body.view.translation=s}},{key:"releaseNode",value:function(){void 0!==this.lockedOnNodeId&&void 0!==this.viewFunction&&(this.body.emitter.off("initRedraw",this.viewFunction),this.lockedOnNodeId=void 0,this.lockedOnNodeOffset=void 0)}},{key:"_transitionRedraw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.easingTime+=this.animationSpeed,this.easingTime=!0===t?1:this.easingTime;var e=xf[this.animationEasingFunction](this.easingTime);if(this.body.view.scale=this.sourceScale+(this.targetScale-this.sourceScale)*e,this.body.view.translation={x:this.sourceTranslation.x+(this.targetTranslation.x-this.sourceTranslation.x)*e,y:this.sourceTranslation.y+(this.targetTranslation.y-this.sourceTranslation.y)*e},this.easingTime>=1){var i;if(this.body.emitter.off("initRedraw",this.viewFunction),this.easingTime=0,null!=this.lockedOnNodeId)this.viewFunction=si(i=this._lockedRedraw).call(i,this),this.body.emitter.on("initRedraw",this.viewFunction);this.body.emitter.emit("animationFinished")}}},{key:"getScale",value:function(){return this.body.view.scale}},{key:"getViewPosition",value:function(){return this.canvas.DOMtoCanvas({x:.5*this.canvas.frame.canvas.clientWidth,y:.5*this.canvas.frame.canvas.clientHeight})}}]),t}();function Lm(t){var e,i=t&&t.preventDefault||!1,o=t&&t.container||window,n={},r={keydown:{},keyup:{}},s={};for(e=97;e<=122;e++)s[String.fromCharCode(e)]={code:e-97+65,shift:!1};for(e=65;e<=90;e++)s[String.fromCharCode(e)]={code:e,shift:!0};for(e=0;e<=9;e++)s[""+e]={code:48+e,shift:!1};for(e=1;e<=12;e++)s["F"+e]={code:111+e,shift:!1};for(e=0;e<=9;e++)s["num"+e]={code:96+e,shift:!1};s["num*"]={code:106,shift:!1},s["num+"]={code:107,shift:!1},s["num-"]={code:109,shift:!1},s["num/"]={code:111,shift:!1},s["num."]={code:110,shift:!1},s.left={code:37,shift:!1},s.up={code:38,shift:!1},s.right={code:39,shift:!1},s.down={code:40,shift:!1},s.space={code:32,shift:!1},s.enter={code:13,shift:!1},s.shift={code:16,shift:void 0},s.esc={code:27,shift:!1},s.backspace={code:8,shift:!1},s.tab={code:9,shift:!1},s.ctrl={code:17,shift:!1},s.alt={code:18,shift:!1},s.delete={code:46,shift:!1},s.pageup={code:33,shift:!1},s.pagedown={code:34,shift:!1},s["="]={code:187,shift:!1},s["-"]={code:189,shift:!1},s["]"]={code:221,shift:!1},s["["]={code:219,shift:!1};var a=function(t){d(t,"keydown")},h=function(t){d(t,"keyup")},d=function(t,e){if(void 0!==r[e][t.keyCode]){for(var o=r[e][t.keyCode],n=0;n<o.length;n++)(void 0===o[n].shift||1==o[n].shift&&1==t.shiftKey||0==o[n].shift&&0==t.shiftKey)&&o[n].fn(t);1==i&&t.preventDefault()}};return n.bind=function(t,e,i){if(void 0===i&&(i="keydown"),void 0===s[t])throw new Error("unsupported key: "+t);void 0===r[i][s[t].code]&&(r[i][s[t].code]=[]),r[i][s[t].code].push({fn:e,shift:s[t].shift})},n.bindAll=function(t,e){for(var i in void 0===e&&(e="keydown"),s)s.hasOwnProperty(i)&&n.bind(i,t,e)},n.getKey=function(t){for(var e in s)if(s.hasOwnProperty(e)){if(1==t.shiftKey&&1==s[e].shift&&t.keyCode==s[e].code)return e;if(0==t.shiftKey&&0==s[e].shift&&t.keyCode==s[e].code)return e;if(t.keyCode==s[e].code&&"shift"==e)return e}return"unknown key, currently not supported"},n.unbind=function(t,e,i){if(void 0===i&&(i="keydown"),void 0===s[t])throw new Error("unsupported key: "+t);if(void 0!==e){var o=[],n=r[i][s[t].code];if(void 0!==n)for(var a=0;a<n.length;a++)n[a].fn==e&&n[a].shift==s[t].shift||o.push(r[i][s[t].code][a]);r[i][s[t].code]=o}else r[i][s[t].code]=[]},n.reset=function(){r={keydown:{},keyup:{}}},n.destroy=function(){r={keydown:{},keyup:{}},o.removeEventListener("keydown",a,!0),o.removeEventListener("keyup",h,!0)},o.addEventListener("keydown",a,!0),o.addEventListener("keyup",h,!0),n}var Hm=function(){function t(e,i){var o=this;Ra(this,t),this.body=e,this.canvas=i,this.iconsCreated=!1,this.navigationHammers=[],this.boundFunctions={},this.touchTime=0,this.activated=!1,this.body.emitter.on("activate",(function(){o.activated=!0,o.configureKeyboardBindings()})),this.body.emitter.on("deactivate",(function(){o.activated=!1,o.configureKeyboardBindings()})),this.body.emitter.on("destroy",(function(){void 0!==o.keycharm&&o.keycharm.destroy()})),this.options={}}return Ha(t,[{key:"setOptions",value:function(t){void 0!==t&&(this.options=t,this.create())}},{key:"create",value:function(){!0===this.options.navigationButtons?!1===this.iconsCreated&&this.loadNavigationElements():!0===this.iconsCreated&&this.cleanNavigation(),this.configureKeyboardBindings()}},{key:"cleanNavigation",value:function(){if(0!=this.navigationHammers.length){for(var t=0;t<this.navigationHammers.length;t++)this.navigationHammers[t].destroy();this.navigationHammers=[]}this.navigationDOM&&this.navigationDOM.wrapper&&this.navigationDOM.wrapper.parentNode&&this.navigationDOM.wrapper.parentNode.removeChild(this.navigationDOM.wrapper),this.iconsCreated=!1}},{key:"loadNavigationElements",value:function(){var t=this;this.cleanNavigation(),this.navigationDOM={};var e=["up","down","left","right","zoomIn","zoomOut","zoomExtends"],i=["_moveUp","_moveDown","_moveLeft","_moveRight","_zoomIn","_zoomOut","_fit"];this.navigationDOM.wrapper=document.createElement("div"),this.navigationDOM.wrapper.className="vis-navigation",this.canvas.frame.appendChild(this.navigationDOM.wrapper);for(var o=0;o<e.length;o++){this.navigationDOM[e[o]]=document.createElement("div"),this.navigationDOM[e[o]].className="vis-button vis-"+e[o],this.navigationDOM.wrapper.appendChild(this.navigationDOM[e[o]]);var n,r,s=new If(this.navigationDOM[e[o]]);if("_fit"===i[o])Fm(s,si(n=this._fit).call(n,this));else Fm(s,si(r=this.bindToRedraw).call(r,this,i[o]));this.navigationHammers.push(s)}var a=new If(this.canvas.frame);Nm(a,(function(){t._stopMovement()})),this.navigationHammers.push(a),this.iconsCreated=!0}},{key:"bindToRedraw",value:function(t){var e;void 0===this.boundFunctions[t]&&(this.boundFunctions[t]=si(e=this[t]).call(e,this),this.body.emitter.on("initRedraw",this.boundFunctions[t]),this.body.emitter.emit("_startRendering"))}},{key:"unbindFromRedraw",value:function(t){void 0!==this.boundFunctions[t]&&(this.body.emitter.off("initRedraw",this.boundFunctions[t]),this.body.emitter.emit("_stopRendering"),delete this.boundFunctions[t])}},{key:"_fit",value:function(){(new Date).valueOf()-this.touchTime>700&&(this.body.emitter.emit("fit",{duration:700}),this.touchTime=(new Date).valueOf())}},{key:"_stopMovement",value:function(){for(var t in this.boundFunctions)Object.prototype.hasOwnProperty.call(this.boundFunctions,t)&&(this.body.emitter.off("initRedraw",this.boundFunctions[t]),this.body.emitter.emit("_stopRendering"));this.boundFunctions={}}},{key:"_moveUp",value:function(){this.body.view.translation.y+=this.options.keyboard.speed.y}},{key:"_moveDown",value:function(){this.body.view.translation.y-=this.options.keyboard.speed.y}},{key:"_moveLeft",value:function(){this.body.view.translation.x+=this.options.keyboard.speed.x}},{key:"_moveRight",value:function(){this.body.view.translation.x-=this.options.keyboard.speed.x}},{key:"_zoomIn",value:function(){var t=this.body.view.scale,e=this.body.view.scale*(1+this.options.keyboard.speed.zoom),i=this.body.view.translation,o=e/t,n=(1-o)*this.canvas.canvasViewCenter.x+i.x*o,r=(1-o)*this.canvas.canvasViewCenter.y+i.y*o;this.body.view.scale=e,this.body.view.translation={x:n,y:r},this.body.emitter.emit("zoom",{direction:"+",scale:this.body.view.scale,pointer:null})}},{key:"_zoomOut",value:function(){var t=this.body.view.scale,e=this.body.view.scale/(1+this.options.keyboard.speed.zoom),i=this.body.view.translation,o=e/t,n=(1-o)*this.canvas.canvasViewCenter.x+i.x*o,r=(1-o)*this.canvas.canvasViewCenter.y+i.y*o;this.body.view.scale=e,this.body.view.translation={x:n,y:r},this.body.emitter.emit("zoom",{direction:"-",scale:this.body.view.scale,pointer:null})}},{key:"configureKeyboardBindings",value:function(){var t,e,i,o,n,r,s,a,h,d,l,c,u,f,p,v,g,y,m,b,w,k,_,x,E=this;(void 0!==this.keycharm&&this.keycharm.destroy(),!0===this.options.keyboard.enabled)&&(!0===this.options.keyboard.bindToWindow?this.keycharm=Lm({container:window,preventDefault:!0}):this.keycharm=Lm({container:this.canvas.frame,preventDefault:!0}),this.keycharm.reset(),!0===this.activated&&(si(t=this.keycharm).call(t,"up",(function(){E.bindToRedraw("_moveUp")}),"keydown"),si(e=this.keycharm).call(e,"down",(function(){E.bindToRedraw("_moveDown")}),"keydown"),si(i=this.keycharm).call(i,"left",(function(){E.bindToRedraw("_moveLeft")}),"keydown"),si(o=this.keycharm).call(o,"right",(function(){E.bindToRedraw("_moveRight")}),"keydown"),si(n=this.keycharm).call(n,"=",(function(){E.bindToRedraw("_zoomIn")}),"keydown"),si(r=this.keycharm).call(r,"num+",(function(){E.bindToRedraw("_zoomIn")}),"keydown"),si(s=this.keycharm).call(s,"num-",(function(){E.bindToRedraw("_zoomOut")}),"keydown"),si(a=this.keycharm).call(a,"-",(function(){E.bindToRedraw("_zoomOut")}),"keydown"),si(h=this.keycharm).call(h,"[",(function(){E.bindToRedraw("_zoomOut")}),"keydown"),si(d=this.keycharm).call(d,"]",(function(){E.bindToRedraw("_zoomIn")}),"keydown"),si(l=this.keycharm).call(l,"pageup",(function(){E.bindToRedraw("_zoomIn")}),"keydown"),si(c=this.keycharm).call(c,"pagedown",(function(){E.bindToRedraw("_zoomOut")}),"keydown"),si(u=this.keycharm).call(u,"up",(function(){E.unbindFromRedraw("_moveUp")}),"keyup"),si(f=this.keycharm).call(f,"down",(function(){E.unbindFromRedraw("_moveDown")}),"keyup"),si(p=this.keycharm).call(p,"left",(function(){E.unbindFromRedraw("_moveLeft")}),"keyup"),si(v=this.keycharm).call(v,"right",(function(){E.unbindFromRedraw("_moveRight")}),"keyup"),si(g=this.keycharm).call(g,"=",(function(){E.unbindFromRedraw("_zoomIn")}),"keyup"),si(y=this.keycharm).call(y,"num+",(function(){E.unbindFromRedraw("_zoomIn")}),"keyup"),si(m=this.keycharm).call(m,"num-",(function(){E.unbindFromRedraw("_zoomOut")}),"keyup"),si(b=this.keycharm).call(b,"-",(function(){E.unbindFromRedraw("_zoomOut")}),"keyup"),si(w=this.keycharm).call(w,"[",(function(){E.unbindFromRedraw("_zoomOut")}),"keyup"),si(k=this.keycharm).call(k,"]",(function(){E.unbindFromRedraw("_zoomIn")}),"keyup"),si(_=this.keycharm).call(_,"pageup",(function(){E.unbindFromRedraw("_zoomIn")}),"keyup"),si(x=this.keycharm).call(x,"pagedown",(function(){E.unbindFromRedraw("_zoomOut")}),"keyup")))}}]),t}();function Wm(t,e){var i=void 0!==Nh&&xr(t)||t["@@iterator"];if(!i){if(Hh(t)||(i=function(t,e){var i;if(!t)return;if("string"==typeof t)return Vm(t,e);var o=Lh(i=Object.prototype.toString.call(t)).call(i,8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return rr(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Vm(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,a=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){a=!0,r=t},f:function(){try{s||null==i.return||i.return()}finally{if(a)throw r}}}}function Vm(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var qm=function(){function t(e,i,o){var n,r,s,a,h,d,l,c,u,f,p,v,g;Ra(this,t),this.body=e,this.canvas=i,this.selectionHandler=o,this.navigationHandler=new Hm(e,i),this.body.eventListeners.onTap=si(n=this.onTap).call(n,this),this.body.eventListeners.onTouch=si(r=this.onTouch).call(r,this),this.body.eventListeners.onDoubleTap=si(s=this.onDoubleTap).call(s,this),this.body.eventListeners.onHold=si(a=this.onHold).call(a,this),this.body.eventListeners.onDragStart=si(h=this.onDragStart).call(h,this),this.body.eventListeners.onDrag=si(d=this.onDrag).call(d,this),this.body.eventListeners.onDragEnd=si(l=this.onDragEnd).call(l,this),this.body.eventListeners.onMouseWheel=si(c=this.onMouseWheel).call(c,this),this.body.eventListeners.onPinch=si(u=this.onPinch).call(u,this),this.body.eventListeners.onMouseMove=si(f=this.onMouseMove).call(f,this),this.body.eventListeners.onRelease=si(p=this.onRelease).call(p,this),this.body.eventListeners.onContext=si(v=this.onContext).call(v,this),this.touchTime=0,this.drag={},this.pinch={},this.popup=void 0,this.popupObj=void 0,this.popupTimer=void 0,this.body.functions.getPointer=si(g=this.getPointer).call(g,this),this.options={},this.defaultOptions={dragNodes:!0,dragView:!0,hover:!1,keyboard:{enabled:!1,speed:{x:10,y:10,zoom:.02},bindToWindow:!0,autoFocus:!0},navigationButtons:!1,tooltipDelay:300,zoomView:!0,zoomSpeed:1},Ke(this.options,this.defaultOptions),this.bindEventListeners()}return Ha(t,[{key:"bindEventListeners",value:function(){var t=this;this.body.emitter.on("destroy",(function(){clearTimeout(t.popupTimer),delete t.body.functions.getPointer}))}},{key:"setOptions",value:function(t){if(void 0!==t){rf(["hideEdgesOnDrag","hideEdgesOnZoom","hideNodesOnDrag","keyboard","multiselect","selectable","selectConnectedEdges"],this.options,t),_f(this.options,t,"keyboard"),t.tooltip&&(Ke(this.options.tooltip,t.tooltip),t.tooltip.color&&(this.options.tooltip.color=pf(t.tooltip.color)))}this.navigationHandler.setOptions(this.options)}},{key:"getPointer",value:function(t){return{x:t.x-(e=this.canvas.frame.canvas,e.getBoundingClientRect().left),y:t.y-df(this.canvas.frame.canvas)};var e}},{key:"onTouch",value:function(t){(new Date).valueOf()-this.touchTime>50&&(this.drag.pointer=this.getPointer(t.center),this.drag.pinched=!1,this.pinch.scale=this.body.view.scale,this.touchTime=(new Date).valueOf())}},{key:"onTap",value:function(t){var e=this.getPointer(t.center),i=this.selectionHandler.options.multiselect&&(t.changedPointers[0].ctrlKey||t.changedPointers[0].metaKey);this.checkSelectionChanges(e,i),this.selectionHandler.commitAndEmit(e,t),this.selectionHandler.generateClickEvent("click",t,e)}},{key:"onDoubleTap",value:function(t){var e=this.getPointer(t.center);this.selectionHandler.generateClickEvent("doubleClick",t,e)}},{key:"onHold",value:function(t){var e=this.getPointer(t.center),i=this.selectionHandler.options.multiselect;this.checkSelectionChanges(e,i),this.selectionHandler.commitAndEmit(e,t),this.selectionHandler.generateClickEvent("click",t,e),this.selectionHandler.generateClickEvent("hold",t,e)}},{key:"onRelease",value:function(t){if((new Date).valueOf()-this.touchTime>10){var e=this.getPointer(t.center);this.selectionHandler.generateClickEvent("release",t,e),this.touchTime=(new Date).valueOf()}}},{key:"onContext",value:function(t){var e=this.getPointer({x:t.clientX,y:t.clientY});this.selectionHandler.generateClickEvent("oncontext",t,e)}},{key:"checkSelectionChanges",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!0===e?this.selectionHandler.selectAdditionalOnPoint(t):this.selectionHandler.selectOnPoint(t)}},{key:"_determineDifference",value:function(t,e){var i=function(t,e){for(var i=[],o=0;o<t.length;o++){var n=t[o];-1===Cl(e).call(e,n)&&i.push(n)}return i};return{nodes:i(t.nodes,e.nodes),edges:i(t.edges,e.edges)}}},{key:"onDragStart",value:function(t){if(!this.drag.dragging){void 0===this.drag.pointer&&this.onTouch(t);var e=this.selectionHandler.getNodeAt(this.drag.pointer);if(this.drag.dragging=!0,this.drag.selection=[],this.drag.translation=Ke({},this.body.view.translation),this.drag.nodeId=void 0,t.srcEvent.shiftKey){this.body.selectionBox.show=!0;var i=this.getPointer(t.center);this.body.selectionBox.position.start={x:this.canvas._XconvertDOMtoCanvas(i.x),y:this.canvas._YconvertDOMtoCanvas(i.y)},this.body.selectionBox.position.end={x:this.canvas._XconvertDOMtoCanvas(i.x),y:this.canvas._YconvertDOMtoCanvas(i.y)}}if(void 0!==e&&!0===this.options.dragNodes){this.drag.nodeId=e.id,!1===e.isSelected()&&(this.selectionHandler.unselectAll(),this.selectionHandler.selectObject(e)),this.selectionHandler.generateClickEvent("dragStart",t,this.drag.pointer);var o,n=Wm(this.selectionHandler.getSelectedNodes());try{for(n.s();!(o=n.n()).done;){var r=o.value,s={id:r.id,node:r,x:r.x,y:r.y,xFixed:r.options.fixed.x,yFixed:r.options.fixed.y};r.options.fixed.x=!0,r.options.fixed.y=!0,this.drag.selection.push(s)}}catch(t){n.e(t)}finally{n.f()}}else this.selectionHandler.generateClickEvent("dragStart",t,this.drag.pointer,void 0,!0)}}},{key:"onDrag",value:function(t){var e=this;if(!0!==this.drag.pinched){this.body.emitter.emit("unlockNode");var i=this.getPointer(t.center),o=this.drag.selection;if(o&&o.length&&!0===this.options.dragNodes){this.selectionHandler.generateClickEvent("dragging",t,i);var n=i.x-this.drag.pointer.x,r=i.y-this.drag.pointer.y;nd(o).call(o,(function(t){var i=t.node;!1===t.xFixed&&(i.x=e.canvas._XconvertDOMtoCanvas(e.canvas._XconvertCanvasToDOM(t.x)+n)),!1===t.yFixed&&(i.y=e.canvas._YconvertDOMtoCanvas(e.canvas._YconvertCanvasToDOM(t.y)+r))})),this.body.emitter.emit("startSimulation")}else{if(t.srcEvent.shiftKey){if(this.selectionHandler.generateClickEvent("dragging",t,i,void 0,!0),void 0===this.drag.pointer)return void this.onDragStart(t);this.body.selectionBox.position.end={x:this.canvas._XconvertDOMtoCanvas(i.x),y:this.canvas._YconvertDOMtoCanvas(i.y)},this.body.emitter.emit("_requestRedraw")}if(!0===this.options.dragView&&!t.srcEvent.shiftKey){if(this.selectionHandler.generateClickEvent("dragging",t,i,void 0,!0),void 0===this.drag.pointer)return void this.onDragStart(t);var s=i.x-this.drag.pointer.x,a=i.y-this.drag.pointer.y;this.body.view.translation={x:this.drag.translation.x+s,y:this.drag.translation.y+a},this.body.emitter.emit("_requestRedraw")}}}}},{key:"onDragEnd",value:function(t){var e=this;if(this.drag.dragging=!1,this.body.selectionBox.show){var i;this.body.selectionBox.show=!1;var o=this.body.selectionBox.position,n={minX:Math.min(o.start.x,o.end.x),minY:Math.min(o.start.y,o.end.y),maxX:Math.max(o.start.x,o.end.x),maxY:Math.max(o.start.y,o.end.y)},r=$d(i=this.body.nodeIndices).call(i,(function(t){var i=e.body.nodes[t];return i.x>=n.minX&&i.x<=n.maxX&&i.y>=n.minY&&i.y<=n.maxY}));nd(r).call(r,(function(t){return e.selectionHandler.selectObject(e.body.nodes[t])}));var s=this.getPointer(t.center);this.selectionHandler.commitAndEmit(s,t),this.selectionHandler.generateClickEvent("dragEnd",t,this.getPointer(t.center),void 0,!0),this.body.emitter.emit("_requestRedraw")}else{var a=this.drag.selection;a&&a.length?(nd(a).call(a,(function(t){t.node.options.fixed.x=t.xFixed,t.node.options.fixed.y=t.yFixed})),this.selectionHandler.generateClickEvent("dragEnd",t,this.getPointer(t.center)),this.body.emitter.emit("startSimulation")):(this.selectionHandler.generateClickEvent("dragEnd",t,this.getPointer(t.center),void 0,!0),this.body.emitter.emit("_requestRedraw"))}}},{key:"onPinch",value:function(t){var e=this.getPointer(t.center);this.drag.pinched=!0,void 0===this.pinch.scale&&(this.pinch.scale=1);var i=this.pinch.scale*t.scale;this.zoom(i,e)}},{key:"zoom",value:function(t,e){if(!0===this.options.zoomView){var i=this.body.view.scale;t<1e-5&&(t=1e-5),t>10&&(t=10);var o=void 0;void 0!==this.drag&&!0===this.drag.dragging&&(o=this.canvas.DOMtoCanvas(this.drag.pointer));var n=this.body.view.translation,r=t/i,s=(1-r)*e.x+n.x*r,a=(1-r)*e.y+n.y*r;if(this.body.view.scale=t,this.body.view.translation={x:s,y:a},null!=o){var h=this.canvas.canvasToDOM(o);this.drag.pointer.x=h.x,this.drag.pointer.y=h.y}this.body.emitter.emit("_requestRedraw"),i<t?this.body.emitter.emit("zoom",{direction:"+",scale:this.body.view.scale,pointer:e}):this.body.emitter.emit("zoom",{direction:"-",scale:this.body.view.scale,pointer:e})}}},{key:"onMouseWheel",value:function(t){if(!0===this.options.zoomView){if(0!==t.deltaY){var e=this.body.view.scale;e*=1+(t.deltaY<0?1:-1)*(.1*this.options.zoomSpeed);var i=this.getPointer({x:t.clientX,y:t.clientY});this.zoom(e,i)}t.preventDefault()}}},{key:"onMouseMove",value:function(t){var e=this,i=this.getPointer({x:t.clientX,y:t.clientY}),o=!1;void 0!==this.popup&&(!1===this.popup.hidden&&this._checkHidePopup(i),!1===this.popup.hidden&&(o=!0,this.popup.setPosition(i.x+3,i.y-5),this.popup.show())),this.options.keyboard.autoFocus&&!1===this.options.keyboard.bindToWindow&&!0===this.options.keyboard.enabled&&this.canvas.frame.focus(),!1===o&&(void 0!==this.popupTimer&&(clearInterval(this.popupTimer),this.popupTimer=void 0),this.drag.dragging||(this.popupTimer=Yl((function(){return e._checkShowPopup(i)}),this.options.tooltipDelay))),!0===this.options.hover&&this.selectionHandler.hoverObject(t,i)}},{key:"_checkShowPopup",value:function(t){var e=this.canvas._XconvertDOMtoCanvas(t.x),i=this.canvas._YconvertDOMtoCanvas(t.y),o={left:e,top:i,right:e,bottom:i},n=void 0===this.popupObj?void 0:this.popupObj.id,r=!1,s="node";if(void 0===this.popupObj){for(var a,h=this.body.nodeIndices,d=this.body.nodes,l=[],c=0;c<h.length;c++)!0===(a=d[h[c]]).isOverlappingWith(o)&&(r=!0,void 0!==a.getTitle()&&l.push(h[c]));l.length>0&&(this.popupObj=d[l[l.length-1]],r=!0)}if(void 0===this.popupObj&&!1===r){for(var u,f=this.body.edgeIndices,p=this.body.edges,v=[],g=0;g<f.length;g++)!0===(u=p[f[g]]).isOverlappingWith(o)&&!0===u.connected&&void 0!==u.getTitle()&&v.push(f[g]);v.length>0&&(this.popupObj=p[v[v.length-1]],s="edge")}void 0!==this.popupObj?this.popupObj.id!==n&&(void 0===this.popup&&(this.popup=new zf(this.canvas.frame)),this.popup.popupTargetType=s,this.popup.popupTargetId=this.popupObj.id,this.popup.setPosition(t.x+3,t.y-5),this.popup.setText(this.popupObj.getTitle()),this.popup.show(),this.body.emitter.emit("showPopup",this.popupObj.id)):void 0!==this.popup&&(this.popup.hide(),this.body.emitter.emit("hidePopup"))}},{key:"_checkHidePopup",value:function(t){var e=this.selectionHandler._pointerToPositionObject(t),i=!1;if("node"===this.popup.popupTargetType){if(void 0!==this.body.nodes[this.popup.popupTargetId]&&!0===(i=this.body.nodes[this.popup.popupTargetId].isOverlappingWith(e))){var o=this.selectionHandler.getNodeAt(t);i=void 0!==o&&o.id===this.popup.popupTargetId}}else void 0===this.selectionHandler.getNodeAt(t)&&void 0!==this.body.edges[this.popup.popupTargetId]&&(i=this.body.edges[this.popup.popupTargetId].isOverlappingWith(e));!1===i&&(this.popupObj=void 0,this.popup.hide(),this.body.emitter.emit("hidePopup"))}}]),t}();sv("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),Ov);var Um=O.Set,Ym=hv,Xm=kp.exports.getWeakData,Gm=Kt,Km=E,$m=Up,Zm=qp,Qm=et,Jm=Zi.set,tb=Zi.getterFor,eb=Jr.find,ib=Jr.findIndex,ob=0,nb=function(t){return t.frozen||(t.frozen=new rb)},rb=function(){this.entries=[]},sb=function(t,e){return eb(t.entries,(function(t){return t[0]===e}))};rb.prototype={get:function(t){var e=sb(this,t);if(e)return e[1]},has:function(t){return!!sb(this,t)},set:function(t,e){var i=sb(this,t);i?i[1]=e:this.entries.push([t,e])},delete:function(t){var e=ib(this.entries,(function(e){return e[0]===t}));return~e&&this.entries.splice(e,1),!!~e}};var ab,hb={getConstructor:function(t,e,i,o){var n=t((function(t,r){$m(t,n,e),Jm(t,{type:e,id:ob++,frozen:void 0}),null!=r&&Zm(r,t[o],{that:t,AS_ENTRIES:i})})),r=tb(e),s=function(t,e,i){var o=r(t),n=Xm(Gm(e),!0);return!0===n?nb(o).set(e,i):n[o.id]=i,t};return Ym(n.prototype,{delete:function(t){var e=r(this);if(!Km(t))return!1;var i=Xm(t);return!0===i?nb(e).delete(t):i&&Qm(i,e.id)&&delete i[e.id]},has:function(t){var e=r(this);if(!Km(t))return!1;var i=Xm(t);return!0===i?nb(e).has(t):i&&Qm(i,e.id)}}),Ym(n.prototype,i?{get:function(t){var e=r(this);if(Km(t)){var i=Xm(t);return!0===i?nb(e).get(t):i?i[e.id]:void 0}},set:function(t,e){return s(this,t,e)}}:{add:function(t){return s(this,t,!0)}}),n}},db=n,lb=hv,cb=kp.exports,ub=sv,fb=hb,pb=E,vb=Zi.enforce,gb=Mi,yb=!db.ActiveXObject&&"ActiveXObject"in db,mb=Object.isExtensible,bb=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},wb=ub("WeakMap",bb,fb);if(gb&&yb){ab=fb.getConstructor(bb,"WeakMap",!0),cb.enable();var kb=wb.prototype,_b=kb.delete,xb=kb.has,Eb=kb.get,Ob=kb.set;lb(kb,{delete:function(t){if(pb(t)&&!mb(t)){var e=vb(this);return e.frozen||(e.frozen=new ab),_b.call(this,t)||e.frozen.delete(t)}return _b.call(this,t)},has:function(t){if(pb(t)&&!mb(t)){var e=vb(this);return e.frozen||(e.frozen=new ab),xb.call(this,t)||e.frozen.has(t)}return xb.call(this,t)},get:function(t){if(pb(t)&&!mb(t)){var e=vb(this);return e.frozen||(e.frozen=new ab),xb.call(this,t)?Eb.call(this,t):e.frozen.get(t)}return Eb.call(this,t)},set:function(t,e){if(pb(t)&&!mb(t)){var i=vb(this);i.frozen||(i.frozen=new ab),xb.call(this,t)?Ob.call(this,t,e):i.frozen.set(t,e)}else Ob.call(this,t,e);return this}})}var Cb,Sb,Tb,Mb,Pb,Db=O.WeakMap;
/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
function Bb(t,e,i,o){if("a"===i&&!o)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!o:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?o:"a"===i?o.call(t):o?o.value:e.get(t)}function Ib(t,e,i,o,n){if("m"===o)throw new TypeError("Private method is not writable");if("a"===o&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!n:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===o?n.call(t,i):n?n.value=i:e.set(t,i),i}function zb(t,e){var i=void 0!==Nh&&xr(t)||t["@@iterator"];if(!i){if(Hh(t)||(i=function(t,e){var i;if(!t)return;if("string"==typeof t)return Fb(t,e);var o=Lh(i=Object.prototype.toString.call(t)).call(i,8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return rr(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Fb(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,a=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){a=!0,r=t},f:function(){try{s||null==i.return||i.return()}finally{if(a)throw r}}}}function Fb(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}function Nb(t,e){var i,o=new Um,n=zb(e);try{for(n.s();!(i=n.n()).done;){var r=i.value;t.has(r)||o.add(r)}}catch(t){n.e(t)}finally{n.f()}return o}var Ab=function(){function t(){Ra(this,t),Cb.set(this,new Um),Sb.set(this,new Um)}return Ha(t,[{key:"size",get:function(){return Bb(this,Sb,"f").size}},{key:"add",value:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];for(var o=0,n=e;o<n.length;o++){var r=n[o];Bb(this,Sb,"f").add(r)}}},{key:"delete",value:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];for(var o=0,n=e;o<n.length;o++){var r=n[o];Bb(this,Sb,"f").delete(r)}}},{key:"clear",value:function(){Bb(this,Sb,"f").clear()}},{key:"getSelection",value:function(){return Fh(Bb(this,Sb,"f"))}},{key:"getChanges",value:function(){return{added:Fh(Nb(Bb(this,Cb,"f"),Bb(this,Sb,"f"))),deleted:Fh(Nb(Bb(this,Sb,"f"),Bb(this,Cb,"f"))),previous:Fh(new Um(Bb(this,Cb,"f"))),current:Fh(new Um(Bb(this,Sb,"f")))}}},{key:"commit",value:function(){var t=this.getChanges();Ib(this,Cb,Bb(this,Sb,"f"),"f"),Ib(this,Sb,new Um(Bb(this,Cb,"f")),"f");var e,i=zb(t.added);try{for(i.s();!(e=i.n()).done;){e.value.select()}}catch(t){i.e(t)}finally{i.f()}var o,n=zb(t.deleted);try{for(n.s();!(o=n.n()).done;){o.value.unselect()}}catch(t){n.e(t)}finally{n.f()}return t}}]),t}();Cb=new Db,Sb=new Db;var Rb=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};Ra(this,t),Tb.set(this,new Ab),Mb.set(this,new Ab),Pb.set(this,void 0),Ib(this,Pb,e,"f")}return Ha(t,[{key:"sizeNodes",get:function(){return Bb(this,Tb,"f").size}},{key:"sizeEdges",get:function(){return Bb(this,Mb,"f").size}},{key:"getNodes",value:function(){return Bb(this,Tb,"f").getSelection()}},{key:"getEdges",value:function(){return Bb(this,Mb,"f").getSelection()}},{key:"addNodes",value:function(){var t;(t=Bb(this,Tb,"f")).add.apply(t,arguments)}},{key:"addEdges",value:function(){var t;(t=Bb(this,Mb,"f")).add.apply(t,arguments)}},{key:"deleteNodes",value:function(t){Bb(this,Tb,"f").delete(t)}},{key:"deleteEdges",value:function(t){Bb(this,Mb,"f").delete(t)}},{key:"clear",value:function(){Bb(this,Tb,"f").clear(),Bb(this,Mb,"f").clear()}},{key:"commit",value:function(){for(var t,e,i={nodes:Bb(this,Tb,"f").commit(),edges:Bb(this,Mb,"f").commit()},o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=Bb(this,Pb,"f")).call.apply(t,jh(e=[this,i]).call(e,n)),i}}]),t}();function jb(t,e){var i=void 0!==Nh&&xr(t)||t["@@iterator"];if(!i){if(Hh(t)||(i=function(t,e){var i;if(!t)return;if("string"==typeof t)return Lb(t,e);var o=Lh(i=Object.prototype.toString.call(t)).call(i,8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return rr(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Lb(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,a=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){a=!0,r=t},f:function(){try{s||null==i.return||i.return()}finally{if(a)throw r}}}}function Lb(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}Tb=new Db,Mb=new Db,Pb=new Db;var Hb=function(){function t(e,i){var o=this;Ra(this,t),this.body=e,this.canvas=i,this._selectionAccumulator=new Rb,this.hoverObj={nodes:{},edges:{}},this.options={},this.defaultOptions={multiselect:!1,selectable:!0,selectConnectedEdges:!0,hoverConnectedEdges:!0},Ke(this.options,this.defaultOptions),this.body.emitter.on("_dataChanged",(function(){o.updateSelection()}))}return Ha(t,[{key:"setOptions",value:function(t){if(void 0!==t){nf(["multiselect","hoverConnectedEdges","selectable","selectConnectedEdges"],this.options,t)}}},{key:"selectOnPoint",value:function(t){var e=!1;if(!0===this.options.selectable){var i=this.getNodeAt(t)||this.getEdgeAt(t);this.unselectAll(),void 0!==i&&(e=this.selectObject(i)),this.body.emitter.emit("_requestRedraw")}return e}},{key:"selectAdditionalOnPoint",value:function(t){var e=!1;if(!0===this.options.selectable){var i=this.getNodeAt(t)||this.getEdgeAt(t);void 0!==i&&(e=!0,!0===i.isSelected()?this.deselectObject(i):this.selectObject(i),this.body.emitter.emit("_requestRedraw"))}return e}},{key:"_initBaseEvent",value:function(t,e){var i={};return i.pointer={DOM:{x:e.x,y:e.y},canvas:this.canvas.DOMtoCanvas(e)},i.event=t,i}},{key:"generateClickEvent",value:function(t,e,i,o){var n=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r=this._initBaseEvent(e,i);if(!0===n)r.nodes=[],r.edges=[];else{var s=this.getSelection();r.nodes=s.nodes,r.edges=s.edges}void 0!==o&&(r.previousSelection=o),"click"==t&&(r.items=this.getClickedItems(i)),void 0!==e.controlEdge&&(r.controlEdge=e.controlEdge),this.body.emitter.emit(t,r)}},{key:"selectObject",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.selectConnectedEdges;if(void 0!==t){if(t instanceof uy){var i;if(!0===e)(i=this._selectionAccumulator).addEdges.apply(i,Fh(t.edges));this._selectionAccumulator.addNodes(t)}else this._selectionAccumulator.addEdges(t);return!0}return!1}},{key:"deselectObject",value:function(t){!0===t.isSelected()&&(t.selected=!1,this._removeFromSelection(t))}},{key:"_getAllNodesOverlappingWith",value:function(t){for(var e=[],i=this.body.nodes,o=0;o<this.body.nodeIndices.length;o++){var n=this.body.nodeIndices[o];i[n].isOverlappingWith(t)&&e.push(n)}return e}},{key:"_pointerToPositionObject",value:function(t){var e=this.canvas.DOMtoCanvas(t);return{left:e.x-1,top:e.y+1,right:e.x+1,bottom:e.y-1}}},{key:"getNodeAt",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this._pointerToPositionObject(t),o=this._getAllNodesOverlappingWith(i);return o.length>0?!0===e?this.body.nodes[o[o.length-1]]:o[o.length-1]:void 0}},{key:"_getEdgesOverlappingWith",value:function(t,e){for(var i=this.body.edges,o=0;o<this.body.edgeIndices.length;o++){var n=this.body.edgeIndices[o];i[n].isOverlappingWith(t)&&e.push(n)}}},{key:"_getAllEdgesOverlappingWith",value:function(t){var e=[];return this._getEdgesOverlappingWith(t,e),e}},{key:"getEdgeAt",value:function(t){for(var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this.canvas.DOMtoCanvas(t),o=10,n=null,r=this.body.edges,s=0;s<this.body.edgeIndices.length;s++){var a=this.body.edgeIndices[s],h=r[a];if(h.connected){var d=h.from.x,l=h.from.y,c=h.to.x,u=h.to.y,f=h.edgeType.getDistanceToEdge(d,l,c,u,i.x,i.y);f<o&&(n=a,o=f)}}return null!==n?!0===e?this.body.edges[n]:n:void 0}},{key:"_addToHover",value:function(t){t instanceof uy?this.hoverObj.nodes[t.id]=t:this.hoverObj.edges[t.id]=t}},{key:"_removeFromSelection",value:function(t){var e;t instanceof uy?(this._selectionAccumulator.deleteNodes(t),(e=this._selectionAccumulator).deleteEdges.apply(e,Fh(t.edges))):this._selectionAccumulator.deleteEdges(t)}},{key:"unselectAll",value:function(){this._selectionAccumulator.clear()}},{key:"getSelectedNodeCount",value:function(){return this._selectionAccumulator.sizeNodes}},{key:"getSelectedEdgeCount",value:function(){return this._selectionAccumulator.sizeEdges}},{key:"_hoverConnectedEdges",value:function(t){for(var e=0;e<t.edges.length;e++){var i=t.edges[e];i.hover=!0,this._addToHover(i)}}},{key:"emitBlurEvent",value:function(t,e,i){var o=this._initBaseEvent(t,e);!0===i.hover&&(i.hover=!1,i instanceof uy?(o.node=i.id,this.body.emitter.emit("blurNode",o)):(o.edge=i.id,this.body.emitter.emit("blurEdge",o)))}},{key:"emitHoverEvent",value:function(t,e,i){var o=this._initBaseEvent(t,e),n=!1;return!1===i.hover&&(i.hover=!0,this._addToHover(i),n=!0,i instanceof uy?(o.node=i.id,this.body.emitter.emit("hoverNode",o)):(o.edge=i.id,this.body.emitter.emit("hoverEdge",o))),n}},{key:"hoverObject",value:function(t,e){var i=this.getNodeAt(e);void 0===i&&(i=this.getEdgeAt(e));var o=!1;for(var n in this.hoverObj.nodes)Object.prototype.hasOwnProperty.call(this.hoverObj.nodes,n)&&(void 0===i||i instanceof uy&&i.id!=n||i instanceof sm)&&(this.emitBlurEvent(t,e,this.hoverObj.nodes[n]),delete this.hoverObj.nodes[n],o=!0);for(var r in this.hoverObj.edges)Object.prototype.hasOwnProperty.call(this.hoverObj.edges,r)&&(!0===o?(this.hoverObj.edges[r].hover=!1,delete this.hoverObj.edges[r]):(void 0===i||i instanceof sm&&i.id!=r||i instanceof uy&&!i.hover)&&(this.emitBlurEvent(t,e,this.hoverObj.edges[r]),delete this.hoverObj.edges[r],o=!0));if(void 0!==i){var s=Gh(this.hoverObj.edges).length,a=Gh(this.hoverObj.nodes).length;(o||i instanceof sm&&0===s&&0===a||i instanceof uy&&0===s&&0===a)&&(o=this.emitHoverEvent(t,e,i)),i instanceof uy&&!0===this.options.hoverConnectedEdges&&this._hoverConnectedEdges(i)}!0===o&&this.body.emitter.emit("_requestRedraw")}},{key:"commitWithoutEmitting",value:function(){this._selectionAccumulator.commit()}},{key:"commitAndEmit",value:function(t,e){var i=!1,o=this._selectionAccumulator.commit(),n={nodes:o.nodes.previous,edges:o.edges.previous};o.edges.deleted.length>0&&(this.generateClickEvent("deselectEdge",e,t,n),i=!0),o.nodes.deleted.length>0&&(this.generateClickEvent("deselectNode",e,t,n),i=!0),o.nodes.added.length>0&&(this.generateClickEvent("selectNode",e,t),i=!0),o.edges.added.length>0&&(this.generateClickEvent("selectEdge",e,t),i=!0),!0===i&&this.generateClickEvent("select",e,t)}},{key:"getSelection",value:function(){return{nodes:this.getSelectedNodeIds(),edges:this.getSelectedEdgeIds()}}},{key:"getSelectedNodes",value:function(){return this._selectionAccumulator.getNodes()}},{key:"getSelectedEdges",value:function(){return this._selectionAccumulator.getEdges()}},{key:"getSelectedNodeIds",value:function(){var t;return Uh(t=this._selectionAccumulator.getNodes()).call(t,(function(t){return t.id}))}},{key:"getSelectedEdgeIds",value:function(){var t;return Uh(t=this._selectionAccumulator.getEdges()).call(t,(function(t){return t.id}))}},{key:"setSelection",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t||!t.nodes&&!t.edges)throw new TypeError("Selection must be an object with nodes and/or edges properties");if((e.unselectAll||void 0===e.unselectAll)&&this.unselectAll(),t.nodes){var i,o=jb(t.nodes);try{for(o.s();!(i=o.n()).done;){var n=i.value,r=this.body.nodes[n];if(!r)throw new RangeError('Node with id "'+n+'" not found');this.selectObject(r,e.highlightEdges)}}catch(t){o.e(t)}finally{o.f()}}if(t.edges){var s,a=jb(t.edges);try{for(a.s();!(s=a.n()).done;){var h=s.value,d=this.body.edges[h];if(!d)throw new RangeError('Edge with id "'+h+'" not found');this.selectObject(d)}}catch(t){a.e(t)}finally{a.f()}}this.body.emitter.emit("_requestRedraw"),this._selectionAccumulator.commit()}},{key:"selectNodes",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!t||void 0===t.length)throw"Selection must be an array with ids";this.setSelection({nodes:t},{highlightEdges:e})}},{key:"selectEdges",value:function(t){if(!t||void 0===t.length)throw"Selection must be an array with ids";this.setSelection({edges:t})}},{key:"updateSelection",value:function(){for(var t in this._selectionAccumulator.getNodes())Object.prototype.hasOwnProperty.call(this.body.nodes,t.id)||this._selectionAccumulator.deleteNodes(t);for(var e in this._selectionAccumulator.getEdges())Object.prototype.hasOwnProperty.call(this.body.edges,e.id)||this._selectionAccumulator.deleteEdges(e)}},{key:"getClickedItems",value:function(t){for(var e=this.canvas.DOMtoCanvas(t),i=[],o=this.body.nodeIndices,n=this.body.nodes,r=o.length-1;r>=0;r--){var s=n[o[r]].getItemsOnPoint(e);i.push.apply(i,s)}for(var a=this.body.edgeIndices,h=this.body.edges,d=a.length-1;d>=0;d--){var l=h[a[d]].getItemsOnPoint(e);i.push.apply(i,l)}return i}}]),t}(),Wb=Math.floor,Vb=function(t,e){var i=t.length,o=Wb(i/2);return i<8?qb(t,e):Ub(Vb(t.slice(0,o),e),Vb(t.slice(o),e),e)},qb=function(t,e){for(var i,o,n=t.length,r=1;r<n;){for(o=r,i=t[r];o&&e(t[o-1],i)>0;)t[o]=t[--o];o!==r++&&(t[o]=i)}return t},Ub=function(t,e,i){for(var o=t.length,n=e.length,r=0,s=0,a=[];r<o||s<n;)r<o&&s<n?a.push(i(t[r],e[s])<=0?t[r++]:e[s++]):a.push(r<o?t[r++]:e[s++]);return a},Yb=Vb,Xb=P.match(/firefox\/(\d+)/i),Gb=!!Xb&&+Xb[1],Kb=/MSIE|Trident/.test(P),$b=P.match(/AppleWebKit\/(\d+)\./),Zb=!!$b&&+$b[1],Qb=ue,Jb=qt,tw=Q,ew=me,iw=gi,ow=s,nw=Yb,rw=Zh,sw=Gb,aw=Kb,hw=A,dw=Zb,lw=[],cw=lw.sort,uw=ow((function(){lw.sort(void 0)})),fw=ow((function(){lw.sort(null)})),pw=rw("sort"),vw=!ow((function(){if(hw)return hw<70;if(!(sw&&sw>3)){if(aw)return!0;if(dw)return dw<603;var t,e,i,o,n="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:i=3;break;case 68:case 71:i=4;break;default:i=2}for(o=0;o<47;o++)lw.push({k:e+o,v:i})}for(lw.sort((function(t,e){return e.v-t.v})),o=0;o<lw.length;o++)e=lw[o].k.charAt(0),n.charAt(n.length-1)!==e&&(n+=e);return"DGBEFHACIJK"!==n}}));Qb({target:"Array",proto:!0,forced:uw||!fw||!pw||!vw},{sort:function(t){void 0!==t&&Jb(t);var e=tw(this);if(vw)return void 0===t?cw.call(e):cw.call(e,t);var i,o,n=[],r=ew(e.length);for(o=0;o<r;o++)o in e&&n.push(e[o]);for(i=(n=nw(n,function(t){return function(e,i){return void 0===i?-1:void 0===e?1:void 0!==t?+t(e,i)||0:iw(e)>iw(i)?1:-1}}(t))).length,o=0;o<i;)e[o]=n[o++];for(;o<r;)delete e[o++];return e}});var gw=oi("Array").sort,yw=Array.prototype,mw=function(t){var e=t.sort;return t===yw||t instanceof Array&&e===yw.sort?gw:e},bw=qt,ww=Q,kw=b,_w=me,xw=function(t){return function(e,i,o,n){bw(i);var r=ww(e),s=kw(r),a=_w(r.length),h=t?a-1:0,d=t?-1:1;if(o<2)for(;;){if(h in s){n=s[h],h+=d;break}if(h+=d,t?h<0:a<=h)throw TypeError("Reduce of empty array with no initial value")}for(;t?h>=0:a>h;h+=d)h in s&&(n=i(n,s[h],h,r));return n}},Ew={left:xw(!1),right:xw(!0)},Ow="process"==g(n.process),Cw=Ew.left,Sw=A,Tw=Ow;ue({target:"Array",proto:!0,forced:!Zh("reduce")||!Tw&&Sw>79&&Sw<83},{reduce:function(t){return Cw(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}});var Mw=oi("Array").reduce,Pw=Array.prototype,Dw=function(t){var e=t.reduce;return t===Pw||t instanceof Array&&e===Pw.reduce?Mw:e},Bw={};!function(t){!function(t){function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0,t.sort=v;var i=32,o=7,n=256,r=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9];function s(t){return t<1e5?t<100?t<10?0:1:t<1e4?t<1e3?2:3:4:t<1e7?t<1e6?5:6:t<1e9?t<1e8?7:8:9}function a(t,e){if(t===e)return 0;if(~~t===t&&~~e===e){if(0===t||0===e)return t<e?-1:1;if(t<0||e<0){if(e>=0)return-1;if(t>=0)return 1;t=-t,e=-e}var i=s(t),o=s(e),n=0;return i<o?(t*=r[o-i-1],e/=10,n=-1):i>o&&(e*=r[i-o-1],t/=10,n=1),t===e?n:t<e?-1:1}var a=String(t),h=String(e);return a===h?0:a<h?-1:1}function h(t){for(var e=0;t>=i;)e|=1&t,t>>=1;return t+e}function d(t,e,i,o){var n=e+1;if(n===i)return 1;if(o(t[n++],t[e])<0){for(;n<i&&o(t[n],t[n-1])<0;)n++;l(t,e,n)}else for(;n<i&&o(t[n],t[n-1])>=0;)n++;return n-e}function l(t,e,i){for(i--;e<i;){var o=t[e];t[e++]=t[i],t[i--]=o}}function c(t,e,i,o,n){for(o===e&&o++;o<i;o++){for(var r=t[o],s=e,a=o;s<a;){var h=s+a>>>1;n(r,t[h])<0?a=h:s=h+1}var d=o-s;switch(d){case 3:t[s+3]=t[s+2];case 2:t[s+2]=t[s+1];case 1:t[s+1]=t[s];break;default:for(;d>0;)t[s+d]=t[s+d-1],d--}t[s]=r}}function u(t,e,i,o,n,r){var s=0,a=0,h=1;if(r(t,e[i+n])>0){for(a=o-n;h<a&&r(t,e[i+n+h])>0;)s=h,(h=1+(h<<1))<=0&&(h=a);h>a&&(h=a),s+=n,h+=n}else{for(a=n+1;h<a&&r(t,e[i+n-h])<=0;)s=h,(h=1+(h<<1))<=0&&(h=a);h>a&&(h=a);var d=s;s=n-h,h=n-d}for(s++;s<h;){var l=s+(h-s>>>1);r(t,e[i+l])>0?s=l+1:h=l}return h}function f(t,e,i,o,n,r){var s=0,a=0,h=1;if(r(t,e[i+n])<0){for(a=n+1;h<a&&r(t,e[i+n-h])<0;)s=h,(h=1+(h<<1))<=0&&(h=a);h>a&&(h=a);var d=s;s=n-h,h=n-d}else{for(a=o-n;h<a&&r(t,e[i+n+h])>=0;)s=h,(h=1+(h<<1))<=0&&(h=a);h>a&&(h=a),s+=n,h+=n}for(s++;s<h;){var l=s+(h-s>>>1);r(t,e[i+l])<0?h=l:s=l+1}return h}var p=function(){function t(i,r){e(this,t),this.array=null,this.compare=null,this.minGallop=o,this.length=0,this.tmpStorageLength=n,this.stackLength=0,this.runStart=null,this.runLength=null,this.stackSize=0,this.array=i,this.compare=r,this.length=i.length,this.length<2*n&&(this.tmpStorageLength=this.length>>>1),this.tmp=new Array(this.tmpStorageLength),this.stackLength=this.length<120?5:this.length<1542?10:this.length<119151?19:40,this.runStart=new Array(this.stackLength),this.runLength=new Array(this.stackLength)}return t.prototype.pushRun=function(t,e){this.runStart[this.stackSize]=t,this.runLength[this.stackSize]=e,this.stackSize+=1},t.prototype.mergeRuns=function(){for(;this.stackSize>1;){var t=this.stackSize-2;if(t>=1&&this.runLength[t-1]<=this.runLength[t]+this.runLength[t+1]||t>=2&&this.runLength[t-2]<=this.runLength[t]+this.runLength[t-1])this.runLength[t-1]<this.runLength[t+1]&&t--;else if(this.runLength[t]>this.runLength[t+1])break;this.mergeAt(t)}},t.prototype.forceMergeRuns=function(){for(;this.stackSize>1;){var t=this.stackSize-2;t>0&&this.runLength[t-1]<this.runLength[t+1]&&t--,this.mergeAt(t)}},t.prototype.mergeAt=function(t){var e=this.compare,i=this.array,o=this.runStart[t],n=this.runLength[t],r=this.runStart[t+1],s=this.runLength[t+1];this.runLength[t]=n+s,t===this.stackSize-3&&(this.runStart[t+1]=this.runStart[t+2],this.runLength[t+1]=this.runLength[t+2]),this.stackSize--;var a=f(i[r],i,o,n,0,e);o+=a,0!=(n-=a)&&0!==(s=u(i[o+n-1],i,r,s,s-1,e))&&(n<=s?this.mergeLow(o,n,r,s):this.mergeHigh(o,n,r,s))},t.prototype.mergeLow=function(t,e,i,n){var r=this.compare,s=this.array,a=this.tmp,h=0;for(h=0;h<e;h++)a[h]=s[t+h];var d=0,l=i,c=t;if(s[c++]=s[l++],0!=--n)if(1!==e){for(var p=this.minGallop;;){var v=0,g=0,y=!1;do{if(r(s[l],a[d])<0){if(s[c++]=s[l++],g++,v=0,0==--n){y=!0;break}}else if(s[c++]=a[d++],v++,g=0,1==--e){y=!0;break}}while((v|g)<p);if(y)break;do{if(0!==(v=f(s[l],a,d,e,0,r))){for(h=0;h<v;h++)s[c+h]=a[d+h];if(c+=v,d+=v,(e-=v)<=1){y=!0;break}}if(s[c++]=s[l++],0==--n){y=!0;break}if(0!==(g=u(a[d],s,l,n,0,r))){for(h=0;h<g;h++)s[c+h]=s[l+h];if(c+=g,l+=g,0==(n-=g)){y=!0;break}}if(s[c++]=a[d++],1==--e){y=!0;break}p--}while(v>=o||g>=o);if(y)break;p<0&&(p=0),p+=2}if(this.minGallop=p,p<1&&(this.minGallop=1),1===e){for(h=0;h<n;h++)s[c+h]=s[l+h];s[c+n]=a[d]}else{if(0===e)throw new Error("mergeLow preconditions were not respected");for(h=0;h<e;h++)s[c+h]=a[d+h]}}else{for(h=0;h<n;h++)s[c+h]=s[l+h];s[c+n]=a[d]}else for(h=0;h<e;h++)s[c+h]=a[d+h]},t.prototype.mergeHigh=function(t,e,i,n){var r=this.compare,s=this.array,a=this.tmp,h=0;for(h=0;h<n;h++)a[h]=s[i+h];var d=t+e-1,l=n-1,c=i+n-1,p=0,v=0;if(s[c--]=s[d--],0!=--e)if(1!==n){for(var g=this.minGallop;;){var y=0,m=0,b=!1;do{if(r(a[l],s[d])<0){if(s[c--]=s[d--],y++,m=0,0==--e){b=!0;break}}else if(s[c--]=a[l--],m++,y=0,1==--n){b=!0;break}}while((y|m)<g);if(b)break;do{if(0!=(y=e-f(a[l],s,t,e,e-1,r))){for(e-=y,v=1+(c-=y),p=1+(d-=y),h=y-1;h>=0;h--)s[v+h]=s[p+h];if(0===e){b=!0;break}}if(s[c--]=a[l--],1==--n){b=!0;break}if(0!=(m=n-u(s[d],a,0,n,n-1,r))){for(n-=m,v=1+(c-=m),p=1+(l-=m),h=0;h<m;h++)s[v+h]=a[p+h];if(n<=1){b=!0;break}}if(s[c--]=s[d--],0==--e){b=!0;break}g--}while(y>=o||m>=o);if(b)break;g<0&&(g=0),g+=2}if(this.minGallop=g,g<1&&(this.minGallop=1),1===n){for(v=1+(c-=e),p=1+(d-=e),h=e-1;h>=0;h--)s[v+h]=s[p+h];s[c]=a[l]}else{if(0===n)throw new Error("mergeHigh preconditions were not respected");for(p=c-(n-1),h=0;h<n;h++)s[p+h]=a[h]}}else{for(v=1+(c-=e),p=1+(d-=e),h=e-1;h>=0;h--)s[v+h]=s[p+h];s[c]=a[l]}else for(p=c-(n-1),h=0;h<n;h++)s[p+h]=a[h]},t}();function v(t,e,o,n){if(!Array.isArray(t))throw new TypeError("Can only sort arrays");e?"function"!=typeof e&&(n=o,o=e,e=a):e=a,o||(o=0),n||(n=t.length);var r=n-o;if(!(r<2)){var s=0;if(r<i)c(t,o,n,o+(s=d(t,o,n,e)),e);else{var l=new p(t,e),u=h(r);do{if((s=d(t,o,n,e))<u){var f=r;f>u&&(f=u),c(t,o,o+f,o+s,e),s=f}l.pushRun(o,s),l.mergeRuns(),r-=s,o+=s}while(0!==r);l.forceMergeRuns()}}}}(t)}(Bw);var Iw=Bw;function zw(t){var e=function(){if("undefined"==typeof Reflect||!yg)return!1;if(yg.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(yg(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=Eg(t);if(e){var n=Eg(this).constructor;i=yg(o,arguments,n)}else i=o.apply(this,arguments);return _g(this,i)}}var Fw=function(){function t(){Ra(this,t)}return Ha(t,[{key:"abstract",value:function(){throw new Error("Can't instantiate abstract class!")}},{key:"fake_use",value:function(){}},{key:"curveType",value:function(){return this.abstract()}},{key:"getPosition",value:function(t){return this.fake_use(t),this.abstract()}},{key:"setPosition",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;this.fake_use(t,e,i),this.abstract()}},{key:"getTreeSize",value:function(t){return this.fake_use(t),this.abstract()}},{key:"sort",value:function(t){this.fake_use(t),this.abstract()}},{key:"fix",value:function(t,e){this.fake_use(t,e),this.abstract()}},{key:"shift",value:function(t,e){this.fake_use(t,e),this.abstract()}}]),t}(),Nw=function(t){kg(i,t);var e=zw(i);function i(t){var o;return Ra(this,i),(o=e.call(this)).layout=t,o}return Ha(i,[{key:"curveType",value:function(){return"horizontal"}},{key:"getPosition",value:function(t){return t.x}},{key:"setPosition",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;void 0!==i&&this.layout.hierarchical.addToOrdering(t,i),t.x=e}},{key:"getTreeSize",value:function(t){var e=this.layout.hierarchical.getTreeSize(this.layout.body.nodes,t);return{min:e.min_x,max:e.max_x}}},{key:"sort",value:function(t){Iw.sort(t,(function(t,e){return t.x-e.x}))}},{key:"fix",value:function(t,e){t.y=this.layout.options.hierarchical.levelSeparation*e,t.options.fixed.y=!0}},{key:"shift",value:function(t,e){this.layout.body.nodes[t].x+=e}}]),i}(Fw),Aw=function(t){kg(i,t);var e=zw(i);function i(t){var o;return Ra(this,i),(o=e.call(this)).layout=t,o}return Ha(i,[{key:"curveType",value:function(){return"vertical"}},{key:"getPosition",value:function(t){return t.y}},{key:"setPosition",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;void 0!==i&&this.layout.hierarchical.addToOrdering(t,i),t.y=e}},{key:"getTreeSize",value:function(t){var e=this.layout.hierarchical.getTreeSize(this.layout.body.nodes,t);return{min:e.min_y,max:e.max_y}}},{key:"sort",value:function(t){Iw.sort(t,(function(t,e){return t.y-e.y}))}},{key:"fix",value:function(t,e){t.x=this.layout.options.hierarchical.levelSeparation*e,t.options.fixed.x=!0}},{key:"shift",value:function(t,e){this.layout.body.nodes[t].y+=e}}]),i}(Fw),Rw=Jr.every;ue({target:"Array",proto:!0,forced:!Zh("every")},{every:function(t){return Rw(this,t,arguments.length>1?arguments[1]:void 0)}});var jw=oi("Array").every,Lw=Array.prototype,Hw=function(t){var e=t.every;return t===Lw||t instanceof Array&&e===Lw.every?jw:e};function Ww(t,e){var i=void 0!==Nh&&xr(t)||t["@@iterator"];if(!i){if(Hh(t)||(i=function(t,e){var i;if(!t)return;if("string"==typeof t)return Vw(t,e);var o=Lh(i=Object.prototype.toString.call(t)).call(i,8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return rr(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Vw(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,a=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){a=!0,r=t},f:function(){try{s||null==i.return||i.return()}finally{if(a)throw r}}}}function Vw(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}function qw(t,e){var i=new Um;return nd(t).call(t,(function(t){var e;nd(e=t.edges).call(e,(function(t){t.connected&&i.add(t)}))})),nd(i).call(i,(function(t){var i=t.from.id,o=t.to.id;null==e[i]&&(e[i]=0),(null==e[o]||e[i]>=e[o])&&(e[o]=e[i]+1)})),e}function Uw(t,e,i,o){var n,r,s=Bl(null),a=Dw(n=Fh(Jv(o).call(o))).call(n,(function(t,e){return t+1+e.edges.length}),0),h=i+"Id",d="to"===i?1:-1,l=Ww(o);try{var c=function(){var n=Bh(r.value,2),l=n[0],c=n[1];if(!o.has(l)||!t(c))return"continue";s[l]=0;for(var u=[c],f=0,p=void 0,v=function(){var t,n;if(!o.has(l))return"continue";var r=s[p.id]+d;if(nd(t=$d(n=p.edges).call(n,(function(t){return t.connected&&t.to!==t.from&&t[i]!==p&&o.has(t.toId)&&o.has(t.fromId)}))).call(t,(function(t){var o=t[h],n=s[o];(null==n||e(r,n))&&(s[o]=r,u.push(t[i]))})),f>a)return{v:{v:qw(o,s)}};++f};p=u.pop();){var g=v();if("continue"!==g&&"object"===zh(g))return g.v}};for(l.s();!(r=l.n()).done;){var u=c();if("continue"!==u&&"object"===zh(u))return u.v}}catch(t){l.e(t)}finally{l.f()}return s}var Yw=function(){function t(){Ra(this,t),this.childrenReference={},this.parentReference={},this.trees={},this.distributionOrdering={},this.levels={},this.distributionIndex={},this.isTree=!1,this.treeIndex=-1}return Ha(t,[{key:"addRelation",value:function(t,e){void 0===this.childrenReference[t]&&(this.childrenReference[t]=[]),this.childrenReference[t].push(e),void 0===this.parentReference[e]&&(this.parentReference[e]=[]),this.parentReference[e].push(t)}},{key:"checkIfTree",value:function(){for(var t in this.parentReference)if(this.parentReference[t].length>1)return void(this.isTree=!1);this.isTree=!0}},{key:"numTrees",value:function(){return this.treeIndex+1}},{key:"setTreeIndex",value:function(t,e){void 0!==e&&void 0===this.trees[t.id]&&(this.trees[t.id]=e,this.treeIndex=Math.max(e,this.treeIndex))}},{key:"ensureLevel",value:function(t){void 0===this.levels[t]&&(this.levels[t]=0)}},{key:"getMaxLevel",value:function(t){var e=this,i={};return function t(o){if(void 0!==i[o])return i[o];var n=e.levels[o];if(e.childrenReference[o]){var r=e.childrenReference[o];if(r.length>0)for(var s=0;s<r.length;s++)n=Math.max(n,t(r[s]))}return i[o]=n,n}(t)}},{key:"levelDownstream",value:function(t,e){void 0===this.levels[e.id]&&(void 0===this.levels[t.id]&&(this.levels[t.id]=0),this.levels[e.id]=this.levels[t.id]+1)}},{key:"setMinLevelToZero",value:function(t){var e=1e9;for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&void 0!==this.levels[i]&&(e=Math.min(this.levels[i],e));for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&void 0!==this.levels[o]&&(this.levels[o]-=e)}},{key:"getTreeSize",value:function(t,e){var i=1e9,o=-1e9,n=1e9,r=-1e9;for(var s in this.trees)if(Object.prototype.hasOwnProperty.call(this.trees,s)&&this.trees[s]===e){var a=t[s];i=Math.min(a.x,i),o=Math.max(a.x,o),n=Math.min(a.y,n),r=Math.max(a.y,r)}return{min_x:i,max_x:o,min_y:n,max_y:r}}},{key:"hasSameParent",value:function(t,e){var i=this.parentReference[t.id],o=this.parentReference[e.id];if(void 0===i||void 0===o)return!1;for(var n=0;n<i.length;n++)for(var r=0;r<o.length;r++)if(i[n]==o[r])return!0;return!1}},{key:"inSameSubNetwork",value:function(t,e){return this.trees[t.id]===this.trees[e.id]}},{key:"getLevels",value:function(){return Gh(this.distributionOrdering)}},{key:"addToOrdering",value:function(t,e){void 0===this.distributionOrdering[e]&&(this.distributionOrdering[e]=[]);var i=!1,o=this.distributionOrdering[e];for(var n in o)if(o[n]===t){i=!0;break}i||(this.distributionOrdering[e].push(t),this.distributionIndex[t.id]=this.distributionOrdering[e].length-1)}}]),t}(),Xw=function(){function t(e){Ra(this,t),this.body=e,this._resetRNG(Math.random()+":"+Kh()),this.setPhysics=!1,this.options={},this.optionsBackup={physics:{}},this.defaultOptions={randomSeed:void 0,improvedLayout:!0,clusterThreshold:150,hierarchical:{enabled:!1,levelSeparation:150,nodeSpacing:100,treeSpacing:200,blockShifting:!0,edgeMinimization:!0,parentCentralization:!0,direction:"UD",sortMethod:"hubsize"}},Ke(this.options,this.defaultOptions),this.bindEventListeners()}return Ha(t,[{key:"bindEventListeners",value:function(){var t=this;this.body.emitter.on("_dataChanged",(function(){t.setupHierarchicalLayout()})),this.body.emitter.on("_dataLoaded",(function(){t.layoutNetwork()})),this.body.emitter.on("_resetHierarchicalLayout",(function(){t.setupHierarchicalLayout()})),this.body.emitter.on("_adjustEdgesForHierarchicalLayout",(function(){if(!0===t.options.hierarchical.enabled){var e=t.direction.curveType();t.body.emitter.emit("_forceDisableDynamicCurves",e,!1)}}))}},{key:"setOptions",value:function(t,e){if(void 0!==t){var i=this.options.hierarchical,o=i.enabled;if(nf(["randomSeed","improvedLayout","clusterThreshold"],this.options,t),_f(this.options,t,"hierarchical"),void 0!==t.randomSeed&&this._resetRNG(t.randomSeed),!0===i.enabled)return!0===o&&this.body.emitter.emit("refresh",!0),"RL"===i.direction||"DU"===i.direction?i.levelSeparation>0&&(i.levelSeparation*=-1):i.levelSeparation<0&&(i.levelSeparation*=-1),this.setDirectionStrategy(),this.body.emitter.emit("_resetHierarchicalLayout"),this.adaptAllOptionsForHierarchicalLayout(e);if(!0===o)return this.body.emitter.emit("refresh"),sf(e,this.optionsBackup)}return e}},{key:"_resetRNG",value:function(t){this.initialRandomSeed=t,this._rng=Vu(this.initialRandomSeed)}},{key:"adaptAllOptionsForHierarchicalLayout",value:function(t){if(!0===this.options.hierarchical.enabled){var e=this.optionsBackup.physics;void 0===t.physics||!0===t.physics?(t.physics={enabled:void 0===e.enabled||e.enabled,solver:"hierarchicalRepulsion"},e.enabled=void 0===e.enabled||e.enabled,e.solver=e.solver||"barnesHut"):"object"===zh(t.physics)?(e.enabled=void 0===t.physics.enabled||t.physics.enabled,e.solver=t.physics.solver||"barnesHut",t.physics.solver="hierarchicalRepulsion"):!1!==t.physics&&(e.solver="barnesHut",t.physics={solver:"hierarchicalRepulsion"});var i=this.direction.curveType();if(void 0===t.edges)this.optionsBackup.edges={smooth:{enabled:!0,type:"dynamic"}},t.edges={smooth:!1};else if(void 0===t.edges.smooth)this.optionsBackup.edges={smooth:{enabled:!0,type:"dynamic"}},t.edges.smooth=!1;else if("boolean"==typeof t.edges.smooth)this.optionsBackup.edges={smooth:t.edges.smooth},t.edges.smooth={enabled:t.edges.smooth,type:i};else{var o=t.edges.smooth;void 0!==o.type&&"dynamic"!==o.type&&(i=o.type),this.optionsBackup.edges={smooth:{enabled:void 0===o.enabled||o.enabled,type:void 0===o.type?"dynamic":o.type,roundness:void 0===o.roundness?.5:o.roundness,forceDirection:void 0!==o.forceDirection&&o.forceDirection}},t.edges.smooth={enabled:void 0===o.enabled||o.enabled,type:i,roundness:void 0===o.roundness?.5:o.roundness,forceDirection:void 0!==o.forceDirection&&o.forceDirection}}this.body.emitter.emit("_forceDisableDynamicCurves",i)}return t}},{key:"positionInitially",value:function(t){if(!0!==this.options.hierarchical.enabled){this._resetRNG(this.initialRandomSeed);for(var e=t.length+50,i=0;i<t.length;i++){var o=t[i],n=2*Math.PI*this._rng();void 0===o.x&&(o.x=e*Math.cos(n)),void 0===o.y&&(o.y=e*Math.sin(n))}}}},{key:"layoutNetwork",value:function(){if(!0!==this.options.hierarchical.enabled&&!0===this.options.improvedLayout){for(var t=this.body.nodeIndices,e=0,i=0;i<t.length;i++){!0===this.body.nodes[t[i]].predefinedPosition&&(e+=1)}if(e<.5*t.length){var o=0,n=this.options.clusterThreshold,r={clusterNodeProperties:{shape:"ellipse",label:"",group:"",font:{multi:!1}},clusterEdgeProperties:{label:"",font:{multi:!1},smooth:{enabled:!1}}};if(t.length>n){for(var s=t.length;t.length>n&&o<=10;){o+=1;var a=t.length;if(o%3==0?this.body.modules.clustering.clusterBridges(r):this.body.modules.clustering.clusterOutliers(r),a==t.length&&o%3!=0)return this._declusterAll(),this.body.emitter.emit("_layoutFailed"),void console.info("This network could not be positioned by this version of the improved layout algorithm. Please disable improvedLayout for better performance.")}this.body.modules.kamadaKawai.setOptions({springLength:Math.max(150,2*s)})}o>10&&console.info("The clustering didn't succeed within the amount of interations allowed, progressing with partial result."),this.body.modules.kamadaKawai.solve(t,this.body.edgeIndices,!0),this._shiftToCenter();for(var h=0;h<t.length;h++){var d=this.body.nodes[t[h]];!1===d.predefinedPosition&&(d.x+=70*(.5-this._rng()),d.y+=70*(.5-this._rng()))}this._declusterAll(),this.body.emitter.emit("_repositionBezierNodes")}}}},{key:"_shiftToCenter",value:function(){for(var t=Sm.getRangeCore(this.body.nodes,this.body.nodeIndices),e=Sm.findCenter(t),i=0;i<this.body.nodeIndices.length;i++){var o=this.body.nodes[this.body.nodeIndices[i]];o.x-=e.x,o.y-=e.y}}},{key:"_declusterAll",value:function(){for(var t=!0;!0===t;){t=!1;for(var e=0;e<this.body.nodeIndices.length;e++)!0===this.body.nodes[this.body.nodeIndices[e]].isCluster&&(t=!0,this.body.modules.clustering.openCluster(this.body.nodeIndices[e],{},!1));!0===t&&this.body.emitter.emit("_dataChanged")}}},{key:"getSeed",value:function(){return this.initialRandomSeed}},{key:"setupHierarchicalLayout",value:function(){if(!0===this.options.hierarchical.enabled&&this.body.nodeIndices.length>0){var t,e,i=!1,o=!1;for(e in this.lastNodeOnLevel={},this.hierarchical=new Yw,this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,e)&&(void 0!==(t=this.body.nodes[e]).options.level?(i=!0,this.hierarchical.levels[e]=t.options.level):o=!0);if(!0===o&&!0===i)throw new Error("To use the hierarchical layout, nodes require either no predefined levels or levels have to be defined for all nodes.");if(!0===o){var n=this.options.hierarchical.sortMethod;"hubsize"===n?this._determineLevelsByHubsize():"directed"===n?this._determineLevelsDirected():"custom"===n&&this._determineLevelsCustomCallback()}for(var r in this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,r)&&this.hierarchical.ensureLevel(r);var s=this._getDistribution();this._generateMap(),this._placeNodesByHierarchy(s),this._condenseHierarchy(),this._shiftToCenter()}}},{key:"_condenseHierarchy",value:function(){var t=this,e=!1,i={},o=function(e,i){var o=t.hierarchical.trees;for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&o[n]===e&&t.direction.shift(n,i)},n=function(){for(var e=[],i=0;i<t.hierarchical.numTrees();i++)e.push(t.direction.getTreeSize(i));return e},r=function e(i,o){if(!o[i.id]&&(o[i.id]=!0,t.hierarchical.childrenReference[i.id])){var n=t.hierarchical.childrenReference[i.id];if(n.length>0)for(var r=0;r<n.length;r++)e(t.body.nodes[n[r]],o)}},s=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e9,o=1e9,n=1e9,r=1e9,s=-1e9;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var h=t.body.nodes[a],d=t.hierarchical.levels[h.id],l=t.direction.getPosition(h),c=t._getSpaceAroundNode(h,e),u=Bh(c,2),f=u[0],p=u[1];o=Math.min(f,o),n=Math.min(p,n),d<=i&&(r=Math.min(l,r),s=Math.max(l,s))}return[r,s,o,n]},a=function(e,i){var o=t.hierarchical.getMaxLevel(e.id),n=t.hierarchical.getMaxLevel(i.id);return Math.min(o,n)},h=function(e,i,o){for(var n=t.hierarchical,r=0;r<i.length;r++){var s=i[r],a=n.distributionOrdering[s];if(a.length>1)for(var h=0;h<a.length-1;h++){var d=a[h],l=a[h+1];n.hasSameParent(d,l)&&n.inSameSubNetwork(d,l)&&e(d,l,o)}}},d=function(i,o){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],h=t.direction.getPosition(i),d=t.direction.getPosition(o),l=Math.abs(d-h),c=t.options.hierarchical.nodeSpacing;if(l>c){var u={},f={};r(i,u),r(o,f);var p=a(i,o),v=s(u,p),g=s(f,p),y=v[1],m=g[0],b=g[2],w=Math.abs(y-m);if(w>c){var k=y-m+c;k<-b+c&&(k=-b+c),k<0&&(t._shiftBlock(o.id,k),e=!0,!0===n&&t._centerParent(o))}}},l=function(o,n){for(var a=n.id,h=n.edges,d=t.hierarchical.levels[n.id],l=t.options.hierarchical.levelSeparation*t.options.hierarchical.levelSeparation,c={},u=[],f=0;f<h.length;f++){var p=h[f];if(p.toId!=p.fromId){var v=p.toId==a?p.from:p.to;c[h[f].id]=v,t.hierarchical.levels[v.id]<d&&u.push(p)}}var g=function(e,i){for(var o=0,n=0;n<i.length;n++)if(void 0!==c[i[n].id]){var r=t.direction.getPosition(c[i[n].id])-e;o+=r/Math.sqrt(r*r+l)}return o},y=function(e,i){for(var o=0,n=0;n<i.length;n++)if(void 0!==c[i[n].id]){var r=t.direction.getPosition(c[i[n].id])-e;o-=l*Math.pow(r*r+l,-1.5)}return o},m=function(e,i){for(var o=t.direction.getPosition(n),r={},s=0;s<e;s++){var a=g(o,i),h=y(o,i);if(void 0!==r[o-=Math.max(-40,Math.min(40,Math.round(a/h)))])break;r[o]=s}return o},b=m(o,u);!function(o){var a=t.direction.getPosition(n);if(void 0===i[n.id]){var h={};r(n,h),i[n.id]=h}var d=s(i[n.id]),l=d[2],c=d[3],u=o-a,f=0;u>0?f=Math.min(u,c-t.options.hierarchical.nodeSpacing):u<0&&(f=-Math.min(-u,l-t.options.hierarchical.nodeSpacing)),0!=f&&(t._shiftBlock(n.id,f),e=!0)}(b),function(i){var o=t.direction.getPosition(n),r=Bh(t._getSpaceAroundNode(n),2),s=r[0],a=r[1],h=i-o,d=o;h>0?d=Math.min(o+(a-t.options.hierarchical.nodeSpacing),i):h<0&&(d=Math.max(o-(s-t.options.hierarchical.nodeSpacing),i)),d!==o&&(t.direction.setPosition(n,d),e=!0)}(b=m(o,h))};!0===this.options.hierarchical.blockShifting&&(function(i){var o=t.hierarchical.getLevels();o=ld(o).call(o);for(var n=0;n<i&&(e=!1,h(d,o,!0),!0===e);n++);}(5),function(){for(var e in t.body.nodes)Object.prototype.hasOwnProperty.call(t.body.nodes,e)&&t._centerParent(t.body.nodes[e])}()),!0===this.options.hierarchical.edgeMinimization&&function(i){var o=t.hierarchical.getLevels();o=ld(o).call(o);for(var n=0;n<i;n++){e=!1;for(var r=0;r<o.length;r++)for(var s=o[r],a=t.hierarchical.distributionOrdering[s],h=0;h<a.length;h++)l(1e3,a[h]);if(!0!==e)break}}(20),!0===this.options.hierarchical.parentCentralization&&function(){var e=t.hierarchical.getLevels();e=ld(e).call(e);for(var i=0;i<e.length;i++)for(var o=e[i],n=t.hierarchical.distributionOrdering[o],r=0;r<n.length;r++)t._centerParent(n[r])}(),function(){for(var e=n(),i=0,r=0;r<e.length-1;r++){i+=e[r].max-e[r+1].min+t.options.hierarchical.treeSpacing,o(r+1,i)}}()}},{key:"_getSpaceAroundNode",value:function(t,e){var i=!0;void 0===e&&(i=!1);var o=this.hierarchical.levels[t.id];if(void 0!==o){var n=this.hierarchical.distributionIndex[t.id],r=this.direction.getPosition(t),s=this.hierarchical.distributionOrdering[o],a=1e9,h=1e9;if(0!==n){var d=s[n-1];if(!0===i&&void 0===e[d.id]||!1===i)a=r-this.direction.getPosition(d)}if(n!=s.length-1){var l=s[n+1];if(!0===i&&void 0===e[l.id]||!1===i){var c=this.direction.getPosition(l);h=Math.min(h,c-r)}}return[a,h]}return[0,0]}},{key:"_centerParent",value:function(t){if(this.hierarchical.parentReference[t.id])for(var e=this.hierarchical.parentReference[t.id],i=0;i<e.length;i++){var o=e[i],n=this.body.nodes[o],r=this.hierarchical.childrenReference[o];if(void 0!==r){var s=this._getCenterPosition(r),a=this.direction.getPosition(n),h=Bh(this._getSpaceAroundNode(n),2),d=h[0],l=h[1],c=a-s;(c<0&&Math.abs(c)<l-this.options.hierarchical.nodeSpacing||c>0&&Math.abs(c)<d-this.options.hierarchical.nodeSpacing)&&this.direction.setPosition(n,s)}}}},{key:"_placeNodesByHierarchy",value:function(t){for(var e in this.positionedNodes={},t)if(Object.prototype.hasOwnProperty.call(t,e)){var i,o=Gh(t[e]);o=this._indexArrayToNodes(o),mw(i=this.direction).call(i,o);for(var n=0,r=0;r<o.length;r++){var s=o[r];if(void 0===this.positionedNodes[s.id]){var a=this.options.hierarchical.nodeSpacing,h=a*n;n>0&&(h=this.direction.getPosition(o[r-1])+a),this.direction.setPosition(s,h,e),this._validatePositionAndContinue(s,e,h),n++}}}}},{key:"_placeBranchNodes",value:function(t,e){var i,o=this.hierarchical.childrenReference[t];if(void 0!==o){for(var n=[],r=0;r<o.length;r++)n.push(this.body.nodes[o[r]]);mw(i=this.direction).call(i,n);for(var s=0;s<n.length;s++){var a=n[s],h=this.hierarchical.levels[a.id];if(!(h>e&&void 0===this.positionedNodes[a.id]))return;var d=this.options.hierarchical.nodeSpacing,l=void 0;l=0===s?this.direction.getPosition(this.body.nodes[t]):this.direction.getPosition(n[s-1])+d,this.direction.setPosition(a,l,h),this._validatePositionAndContinue(a,h,l)}var c=this._getCenterPosition(n);this.direction.setPosition(this.body.nodes[t],c,e)}}},{key:"_validatePositionAndContinue",value:function(t,e,i){if(this.hierarchical.isTree){if(void 0!==this.lastNodeOnLevel[e]){var o=this.direction.getPosition(this.body.nodes[this.lastNodeOnLevel[e]]);if(i-o<this.options.hierarchical.nodeSpacing){var n=o+this.options.hierarchical.nodeSpacing-i,r=this._findCommonParent(this.lastNodeOnLevel[e],t.id);this._shiftBlock(r.withChild,n)}}this.lastNodeOnLevel[e]=t.id,this.positionedNodes[t.id]=!0,this._placeBranchNodes(t.id,e)}}},{key:"_indexArrayToNodes",value:function(t){for(var e=[],i=0;i<t.length;i++)e.push(this.body.nodes[t[i]]);return e}},{key:"_getDistribution",value:function(){var t,e,i={};for(t in this.body.nodes)if(Object.prototype.hasOwnProperty.call(this.body.nodes,t)){e=this.body.nodes[t];var o=void 0===this.hierarchical.levels[t]?0:this.hierarchical.levels[t];this.direction.fix(e,o),void 0===i[o]&&(i[o]={}),i[o][t]=e}return i}},{key:"_getActiveEdges",value:function(t){var e=this,i=[];return lf(t.edges,(function(t){var o;-1!==Cl(o=e.body.edgeIndices).call(o,t.id)&&i.push(t)})),i}},{key:"_getHubSizes",value:function(){var t=this,e={};lf(this.body.nodeIndices,(function(i){var o=t.body.nodes[i],n=t._getActiveEdges(o).length;e[n]=!0}));var i=[];return lf(e,(function(t){i.push(Number(t))})),mw(Iw).call(Iw,i,(function(t,e){return e-t})),i}},{key:"_determineLevelsByHubsize",value:function(){for(var t=this,e=function(e,i){t.hierarchical.levelDownstream(e,i)},i=this._getHubSizes(),o=function(o){var n=i[o];if(0===n)return"break";lf(t.body.nodeIndices,(function(i){var o=t.body.nodes[i];n===t._getActiveEdges(o).length&&t._crawlNetwork(e,i)}))},n=0;n<i.length;++n){if("break"===o(n))break}}},{key:"_determineLevelsCustomCallback",value:function(){var t=this;this._crawlNetwork((function(e,i,o){var n=t.hierarchical.levels[e.id];void 0===n&&(n=t.hierarchical.levels[e.id]=1e5);var r=(Sm.cloneOptions(e,"node"),Sm.cloneOptions(i,"node"),void Sm.cloneOptions(o,"edge"));t.hierarchical.levels[i.id]=n+r})),this.hierarchical.setMinLevelToZero(this.body.nodes)}},{key:"_determineLevelsDirected",value:function(){var t,e=this,i=Dw(t=this.body.nodeIndices).call(t,(function(t,i){return t.set(i,e.body.nodes[i]),t}),new Cv);"roots"===this.options.hierarchical.shakeTowards?this.hierarchical.levels=function(t){return Uw((function(e){var i,o;return Hw(i=$d(o=e.edges).call(o,(function(e){return t.has(e.toId)}))).call(i,(function(t){return t.from===e}))}),(function(t,e){return e<t}),"to",t)}(i):this.hierarchical.levels=function(t){return Uw((function(e){var i,o;return Hw(i=$d(o=e.edges).call(o,(function(e){return t.has(e.toId)}))).call(i,(function(t){return t.to===e}))}),(function(t,e){return e>t}),"from",t)}(i),this.hierarchical.setMinLevelToZero(this.body.nodes)}},{key:"_generateMap",value:function(){var t=this;this._crawlNetwork((function(e,i){t.hierarchical.levels[i.id]>t.hierarchical.levels[e.id]&&t.hierarchical.addRelation(e.id,i.id)})),this.hierarchical.checkIfTree()}},{key:"_crawlNetwork",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},i=arguments.length>1?arguments[1]:void 0,o={},n=function i(n,r){if(void 0===o[n.id]){var s;t.hierarchical.setTreeIndex(n,r),o[n.id]=!0;for(var a=t._getActiveEdges(n),h=0;h<a.length;h++){var d=a[h];!0===d.connected&&(s=d.toId==n.id?d.from:d.to,n.id!=s.id&&(e(n,s,d),i(s,r)))}}};if(void 0===i)for(var r=0,s=0;s<this.body.nodeIndices.length;s++){var a=this.body.nodeIndices[s];if(void 0===o[a]){var h=this.body.nodes[a];n(h,r),r+=1}}else{var d=this.body.nodes[i];if(void 0===d)return void console.error("Node not found:",i);n(d)}}},{key:"_shiftBlock",value:function(t,e){var i=this,o={};!function t(n){if(!o[n]){o[n]=!0,i.direction.shift(n,e);var r=i.hierarchical.childrenReference[n];if(void 0!==r)for(var s=0;s<r.length;s++)t(r[s])}}(t)}},{key:"_findCommonParent",value:function(t,e){var i=this,o={};return function t(e,o){var n=i.hierarchical.parentReference[o];if(void 0!==n)for(var r=0;r<n.length;r++){var s=n[r];e[s]=!0,t(e,s)}}(o,t),function t(e,o){var n=i.hierarchical.parentReference[o];if(void 0!==n)for(var r=0;r<n.length;r++){var s=n[r];if(void 0!==e[s])return{foundParent:s,withChild:o};var a=t(e,s);if(null!==a.foundParent)return a}return{foundParent:null,withChild:o}}(o,e)}},{key:"setDirectionStrategy",value:function(){var t="UD"===this.options.hierarchical.direction||"DU"===this.options.hierarchical.direction;this.direction=t?new Nw(this):new Aw(this)}},{key:"_getCenterPosition",value:function(t){for(var e=1e9,i=-1e9,o=0;o<t.length;o++){var n=void 0;if(void 0!==t[o].id)n=t[o];else{var r=t[o];n=this.body.nodes[r]}var s=this.direction.getPosition(n);e=Math.min(e,s),i=Math.max(i,s)}return.5*(e+i)}}]),t}();function Gw(t,e){var i=void 0!==Nh&&xr(t)||t["@@iterator"];if(!i){if(Hh(t)||(i=function(t,e){var i;if(!t)return;if("string"==typeof t)return Kw(t,e);var o=Lh(i=Object.prototype.toString.call(t)).call(i,8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return rr(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Kw(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,a=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){a=!0,r=t},f:function(){try{s||null==i.return||i.return()}finally{if(a)throw r}}}}function Kw(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var $w=function(){function t(e,i,o,n){var r,s,a=this;Ra(this,t),this.body=e,this.canvas=i,this.selectionHandler=o,this.interactionHandler=n,this.editMode=!1,this.manipulationDiv=void 0,this.editModeDiv=void 0,this.closeDiv=void 0,this._domEventListenerCleanupQueue=[],this.temporaryUIFunctions={},this.temporaryEventFunctions=[],this.touchTime=0,this.temporaryIds={nodes:[],edges:[]},this.guiEnabled=!1,this.inMode=!1,this.selectedControlNode=void 0,this.options={},this.defaultOptions={enabled:!1,initiallyActive:!1,addNode:!0,addEdge:!0,editNode:void 0,editEdge:!0,deleteNode:!0,deleteEdge:!0,controlNodeStyle:{shape:"dot",size:6,color:{background:"#ff0000",border:"#3c3c3c",highlight:{background:"#07f968",border:"#3c3c3c"}},borderWidth:2,borderWidthSelected:2}},Ke(this.options,this.defaultOptions),this.body.emitter.on("destroy",(function(){a._clean()})),this.body.emitter.on("_dataChanged",si(r=this._restore).call(r,this)),this.body.emitter.on("_resetData",si(s=this._restore).call(s,this))}return Ha(t,[{key:"_restore",value:function(){!1!==this.inMode&&(!0===this.options.initiallyActive?this.enableEditMode():this.disableEditMode())}},{key:"setOptions",value:function(t,e,i){void 0!==e&&(void 0!==e.locale?this.options.locale=e.locale:this.options.locale=i.locale,void 0!==e.locales?this.options.locales=e.locales:this.options.locales=i.locales),void 0!==t&&("boolean"==typeof t?this.options.enabled=t:(this.options.enabled=!0,sf(this.options,t)),!0===this.options.initiallyActive&&(this.editMode=!0),this._setup())}},{key:"toggleEditMode",value:function(){!0===this.editMode?this.disableEditMode():this.enableEditMode()}},{key:"enableEditMode",value:function(){this.editMode=!0,this._clean(),!0===this.guiEnabled&&(this.manipulationDiv.style.display="block",this.closeDiv.style.display="block",this.editModeDiv.style.display="none",this.showManipulatorToolbar())}},{key:"disableEditMode",value:function(){this.editMode=!1,this._clean(),!0===this.guiEnabled&&(this.manipulationDiv.style.display="none",this.closeDiv.style.display="none",this.editModeDiv.style.display="block",this._createEditButton())}},{key:"showManipulatorToolbar",value:function(){if(this._clean(),this.manipulationDOM={},!0===this.guiEnabled){var t,e;this.editMode=!0,this.manipulationDiv.style.display="block",this.closeDiv.style.display="block";var i=this.selectionHandler.getSelectedNodeCount(),o=this.selectionHandler.getSelectedEdgeCount(),n=i+o,r=this.options.locales[this.options.locale],s=!1;!1!==this.options.addNode&&(this._createAddNodeButton(r),s=!0),!1!==this.options.addEdge&&(!0===s?this._createSeperator(1):s=!0,this._createAddEdgeButton(r)),1===i&&"function"==typeof this.options.editNode?(!0===s?this._createSeperator(2):s=!0,this._createEditNodeButton(r)):1===o&&0===i&&!1!==this.options.editEdge&&(!0===s?this._createSeperator(3):s=!0,this._createEditEdgeButton(r)),0!==n&&(i>0&&!1!==this.options.deleteNode||0===i&&!1!==this.options.deleteEdge)&&(!0===s&&this._createSeperator(4),this._createDeleteButton(r)),this._bindElementEvents(this.closeDiv,si(t=this.toggleEditMode).call(t,this)),this._temporaryBindEvent("select",si(e=this.showManipulatorToolbar).call(e,this))}this.body.emitter.emit("_redraw")}},{key:"addNodeMode",value:function(){var t;if(!0!==this.editMode&&this.enableEditMode(),this._clean(),this.inMode="addNode",!0===this.guiEnabled){var e,i=this.options.locales[this.options.locale];this.manipulationDOM={},this._createBackButton(i),this._createSeperator(),this._createDescription(i.addDescription||this.options.locales.en.addDescription),this._bindElementEvents(this.closeDiv,si(e=this.toggleEditMode).call(e,this))}this._temporaryBindEvent("click",si(t=this._performAddNode).call(t,this))}},{key:"editNode",value:function(){var t=this;!0!==this.editMode&&this.enableEditMode(),this._clean();var e=this.selectionHandler.getSelectedNodes()[0];if(void 0!==e){if(this.inMode="editNode","function"!=typeof this.options.editNode)throw new Error("No function has been configured to handle the editing of nodes.");if(!0!==e.isCluster){var i=sf({},e.options,!1);if(i.x=e.x,i.y=e.y,2!==this.options.editNode.length)throw new Error("The function for edit does not support two arguments (data, callback)");this.options.editNode(i,(function(e){null!=e&&"editNode"===t.inMode&&t.body.data.nodes.getDataSet().update(e),t.showManipulatorToolbar()}))}else alert(this.options.locales[this.options.locale].editClusterError||this.options.locales.en.editClusterError)}else this.showManipulatorToolbar()}},{key:"addEdgeMode",value:function(){var t,e,i,o,n;if(!0!==this.editMode&&this.enableEditMode(),this._clean(),this.inMode="addEdge",!0===this.guiEnabled){var r,s=this.options.locales[this.options.locale];this.manipulationDOM={},this._createBackButton(s),this._createSeperator(),this._createDescription(s.edgeDescription||this.options.locales.en.edgeDescription),this._bindElementEvents(this.closeDiv,si(r=this.toggleEditMode).call(r,this))}this._temporaryBindUI("onTouch",si(t=this._handleConnect).call(t,this)),this._temporaryBindUI("onDragEnd",si(e=this._finishConnect).call(e,this)),this._temporaryBindUI("onDrag",si(i=this._dragControlNode).call(i,this)),this._temporaryBindUI("onRelease",si(o=this._finishConnect).call(o,this)),this._temporaryBindUI("onDragStart",si(n=this._dragStartEdge).call(n,this)),this._temporaryBindUI("onHold",(function(){}))}},{key:"editEdgeMode",value:function(){if(!0!==this.editMode&&this.enableEditMode(),this._clean(),this.inMode="editEdge","object"!==zh(this.options.editEdge)||"function"!=typeof this.options.editEdge.editWithoutDrag||(this.edgeBeingEditedId=this.selectionHandler.getSelectedEdgeIds()[0],void 0===this.edgeBeingEditedId)){if(!0===this.guiEnabled){var t,e=this.options.locales[this.options.locale];this.manipulationDOM={},this._createBackButton(e),this._createSeperator(),this._createDescription(e.editEdgeDescription||this.options.locales.en.editEdgeDescription),this._bindElementEvents(this.closeDiv,si(t=this.toggleEditMode).call(t,this))}if(this.edgeBeingEditedId=this.selectionHandler.getSelectedEdgeIds()[0],void 0!==this.edgeBeingEditedId){var i,o,n,r,s=this.body.edges[this.edgeBeingEditedId],a=this._getNewTargetNode(s.from.x,s.from.y),h=this._getNewTargetNode(s.to.x,s.to.y);this.temporaryIds.nodes.push(a.id),this.temporaryIds.nodes.push(h.id),this.body.nodes[a.id]=a,this.body.nodeIndices.push(a.id),this.body.nodes[h.id]=h,this.body.nodeIndices.push(h.id),this._temporaryBindUI("onTouch",si(i=this._controlNodeTouch).call(i,this)),this._temporaryBindUI("onTap",(function(){})),this._temporaryBindUI("onHold",(function(){})),this._temporaryBindUI("onDragStart",si(o=this._controlNodeDragStart).call(o,this)),this._temporaryBindUI("onDrag",si(n=this._controlNodeDrag).call(n,this)),this._temporaryBindUI("onDragEnd",si(r=this._controlNodeDragEnd).call(r,this)),this._temporaryBindUI("onMouseMove",(function(){})),this._temporaryBindEvent("beforeDrawing",(function(t){var e=s.edgeType.findBorderPositions(t);!1===a.selected&&(a.x=e.from.x,a.y=e.from.y),!1===h.selected&&(h.x=e.to.x,h.y=e.to.y)})),this.body.emitter.emit("_redraw")}else this.showManipulatorToolbar()}else{var d=this.body.edges[this.edgeBeingEditedId];this._performEditEdge(d.from.id,d.to.id)}}},{key:"deleteSelected",value:function(){var t=this;!0!==this.editMode&&this.enableEditMode(),this._clean(),this.inMode="delete";var e=this.selectionHandler.getSelectedNodeIds(),i=this.selectionHandler.getSelectedEdgeIds(),o=void 0;if(e.length>0){for(var n=0;n<e.length;n++)if(!0===this.body.nodes[e[n]].isCluster)return void alert(this.options.locales[this.options.locale].deleteClusterError||this.options.locales.en.deleteClusterError);"function"==typeof this.options.deleteNode&&(o=this.options.deleteNode)}else i.length>0&&"function"==typeof this.options.deleteEdge&&(o=this.options.deleteEdge);if("function"==typeof o){var r={nodes:e,edges:i};if(2!==o.length)throw new Error("The function for delete does not support two arguments (data, callback)");o(r,(function(e){null!=e&&"delete"===t.inMode?(t.body.data.edges.getDataSet().remove(e.edges),t.body.data.nodes.getDataSet().remove(e.nodes),t.body.emitter.emit("startSimulation"),t.showManipulatorToolbar()):(t.body.emitter.emit("startSimulation"),t.showManipulatorToolbar())}))}else this.body.data.edges.getDataSet().remove(i),this.body.data.nodes.getDataSet().remove(e),this.body.emitter.emit("startSimulation"),this.showManipulatorToolbar()}},{key:"_setup",value:function(){!0===this.options.enabled?(this.guiEnabled=!0,this._createWrappers(),!1===this.editMode?this._createEditButton():this.showManipulatorToolbar()):(this._removeManipulationDOM(),this.guiEnabled=!1)}},{key:"_createWrappers",value:function(){var t,e;(void 0===this.manipulationDiv&&(this.manipulationDiv=document.createElement("div"),this.manipulationDiv.className="vis-manipulation",!0===this.editMode?this.manipulationDiv.style.display="block":this.manipulationDiv.style.display="none",this.canvas.frame.appendChild(this.manipulationDiv)),void 0===this.editModeDiv&&(this.editModeDiv=document.createElement("div"),this.editModeDiv.className="vis-edit-mode",!0===this.editMode?this.editModeDiv.style.display="none":this.editModeDiv.style.display="block",this.canvas.frame.appendChild(this.editModeDiv)),void 0===this.closeDiv)&&(this.closeDiv=document.createElement("button"),this.closeDiv.className="vis-close",this.closeDiv.setAttribute("aria-label",null!==(t=null===(e=this.options.locales[this.options.locale])||void 0===e?void 0:e.close)&&void 0!==t?t:this.options.locales.en.close),this.closeDiv.style.display=this.manipulationDiv.style.display,this.canvas.frame.appendChild(this.closeDiv))}},{key:"_getNewTargetNode",value:function(t,e){var i=sf({},this.options.controlNodeStyle);i.id="targetNode"+Cm(),i.hidden=!1,i.physics=!1,i.x=t,i.y=e;var o=this.body.functions.createNode(i);return o.shape.boundingBox={left:t,right:t,top:e,bottom:e},o}},{key:"_createEditButton",value:function(){var t;this._clean(),this.manipulationDOM={},Qu(this.editModeDiv);var e=this.options.locales[this.options.locale],i=this._createButton("editMode","vis-edit vis-edit-mode",e.edit||this.options.locales.en.edit);this.editModeDiv.appendChild(i),this._bindElementEvents(i,si(t=this.toggleEditMode).call(t,this))}},{key:"_clean",value:function(){this.inMode=!1,!0===this.guiEnabled&&(Qu(this.editModeDiv),Qu(this.manipulationDiv),this._cleanupDOMEventListeners()),this._cleanupTemporaryNodesAndEdges(),this._unbindTemporaryUIs(),this._unbindTemporaryEvents(),this.body.emitter.emit("restorePhysics")}},{key:"_cleanupDOMEventListeners",value:function(){var t,e,i=Gw(Od(t=this._domEventListenerCleanupQueue).call(t,0));try{for(i.s();!(e=i.n()).done;){(0,e.value)()}}catch(t){i.e(t)}finally{i.f()}}},{key:"_removeManipulationDOM",value:function(){this._clean(),Qu(this.manipulationDiv),Qu(this.editModeDiv),Qu(this.closeDiv),this.manipulationDiv&&this.canvas.frame.removeChild(this.manipulationDiv),this.editModeDiv&&this.canvas.frame.removeChild(this.editModeDiv),this.closeDiv&&this.canvas.frame.removeChild(this.closeDiv),this.manipulationDiv=void 0,this.editModeDiv=void 0,this.closeDiv=void 0}},{key:"_createSeperator",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.manipulationDOM["seperatorLineDiv"+t]=document.createElement("div"),this.manipulationDOM["seperatorLineDiv"+t].className="vis-separator-line",this.manipulationDiv.appendChild(this.manipulationDOM["seperatorLineDiv"+t])}},{key:"_createAddNodeButton",value:function(t){var e,i=this._createButton("addNode","vis-add",t.addNode||this.options.locales.en.addNode);this.manipulationDiv.appendChild(i),this._bindElementEvents(i,si(e=this.addNodeMode).call(e,this))}},{key:"_createAddEdgeButton",value:function(t){var e,i=this._createButton("addEdge","vis-connect",t.addEdge||this.options.locales.en.addEdge);this.manipulationDiv.appendChild(i),this._bindElementEvents(i,si(e=this.addEdgeMode).call(e,this))}},{key:"_createEditNodeButton",value:function(t){var e,i=this._createButton("editNode","vis-edit",t.editNode||this.options.locales.en.editNode);this.manipulationDiv.appendChild(i),this._bindElementEvents(i,si(e=this.editNode).call(e,this))}},{key:"_createEditEdgeButton",value:function(t){var e,i=this._createButton("editEdge","vis-edit",t.editEdge||this.options.locales.en.editEdge);this.manipulationDiv.appendChild(i),this._bindElementEvents(i,si(e=this.editEdgeMode).call(e,this))}},{key:"_createDeleteButton",value:function(t){var e,i;i=this.options.rtl?"vis-delete-rtl":"vis-delete";var o=this._createButton("delete",i,t.del||this.options.locales.en.del);this.manipulationDiv.appendChild(o),this._bindElementEvents(o,si(e=this.deleteSelected).call(e,this))}},{key:"_createBackButton",value:function(t){var e,i=this._createButton("back","vis-back",t.back||this.options.locales.en.back);this.manipulationDiv.appendChild(i),this._bindElementEvents(i,si(e=this.showManipulatorToolbar).call(e,this))}},{key:"_createButton",value:function(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"vis-label";return this.manipulationDOM[t+"Div"]=document.createElement("button"),this.manipulationDOM[t+"Div"].className="vis-button "+e,this.manipulationDOM[t+"Label"]=document.createElement("div"),this.manipulationDOM[t+"Label"].className=o,this.manipulationDOM[t+"Label"].innerText=i,this.manipulationDOM[t+"Div"].appendChild(this.manipulationDOM[t+"Label"]),this.manipulationDOM[t+"Div"]}},{key:"_createDescription",value:function(t){this.manipulationDOM.descriptionLabel=document.createElement("div"),this.manipulationDOM.descriptionLabel.className="vis-none",this.manipulationDOM.descriptionLabel.innerText=t,this.manipulationDiv.appendChild(this.manipulationDOM.descriptionLabel)}},{key:"_temporaryBindEvent",value:function(t,e){this.temporaryEventFunctions.push({event:t,boundFunction:e}),this.body.emitter.on(t,e)}},{key:"_temporaryBindUI",value:function(t,e){if(void 0===this.body.eventListeners[t])throw new Error("This UI function does not exist. Typo? You tried: "+t+" possible are: "+Wl(Gh(this.body.eventListeners)));this.temporaryUIFunctions[t]=this.body.eventListeners[t],this.body.eventListeners[t]=e}},{key:"_unbindTemporaryUIs",value:function(){for(var t in this.temporaryUIFunctions)Object.prototype.hasOwnProperty.call(this.temporaryUIFunctions,t)&&(this.body.eventListeners[t]=this.temporaryUIFunctions[t],delete this.temporaryUIFunctions[t]);this.temporaryUIFunctions={}}},{key:"_unbindTemporaryEvents",value:function(){for(var t=0;t<this.temporaryEventFunctions.length;t++){var e=this.temporaryEventFunctions[t].event,i=this.temporaryEventFunctions[t].boundFunction;this.body.emitter.off(e,i)}this.temporaryEventFunctions=[]}},{key:"_bindElementEvents",value:function(t,e){var i=new If(t,{});Fm(i,e),this._domEventListenerCleanupQueue.push((function(){i.destroy()}));var o=function(t){var i=t.keyCode,o=t.key;"Enter"!==o&&" "!==o&&13!==i&&32!==i||e()};t.addEventListener("keyup",o,!1),this._domEventListenerCleanupQueue.push((function(){t.removeEventListener("keyup",o,!1)}))}},{key:"_cleanupTemporaryNodesAndEdges",value:function(){for(var t=0;t<this.temporaryIds.edges.length;t++){var e;this.body.edges[this.temporaryIds.edges[t]].disconnect(),delete this.body.edges[this.temporaryIds.edges[t]];var i,o=Cl(e=this.body.edgeIndices).call(e,this.temporaryIds.edges[t]);if(-1!==o)Od(i=this.body.edgeIndices).call(i,o,1)}for(var n=0;n<this.temporaryIds.nodes.length;n++){var r;delete this.body.nodes[this.temporaryIds.nodes[n]];var s,a=Cl(r=this.body.nodeIndices).call(r,this.temporaryIds.nodes[n]);if(-1!==a)Od(s=this.body.nodeIndices).call(s,a,1)}this.temporaryIds={nodes:[],edges:[]}}},{key:"_controlNodeTouch",value:function(t){this.selectionHandler.unselectAll(),this.lastTouch=this.body.functions.getPointer(t.center),this.lastTouch.translation=Ke({},this.body.view.translation)}},{key:"_controlNodeDragStart",value:function(){var t=this.lastTouch,e=this.selectionHandler._pointerToPositionObject(t),i=this.body.nodes[this.temporaryIds.nodes[0]],o=this.body.nodes[this.temporaryIds.nodes[1]],n=this.body.edges[this.edgeBeingEditedId];this.selectedControlNode=void 0;var r=i.isOverlappingWith(e),s=o.isOverlappingWith(e);!0===r?(this.selectedControlNode=i,n.edgeType.from=i):!0===s&&(this.selectedControlNode=o,n.edgeType.to=o),void 0!==this.selectedControlNode&&this.selectionHandler.selectObject(this.selectedControlNode),this.body.emitter.emit("_redraw")}},{key:"_controlNodeDrag",value:function(t){this.body.emitter.emit("disablePhysics");var e=this.body.functions.getPointer(t.center),i=this.canvas.DOMtoCanvas(e);void 0!==this.selectedControlNode?(this.selectedControlNode.x=i.x,this.selectedControlNode.y=i.y):this.interactionHandler.onDrag(t),this.body.emitter.emit("_redraw")}},{key:"_controlNodeDragEnd",value:function(t){var e=this.body.functions.getPointer(t.center),i=this.selectionHandler._pointerToPositionObject(e),o=this.body.edges[this.edgeBeingEditedId];if(void 0!==this.selectedControlNode){this.selectionHandler.unselectAll();for(var n=this.selectionHandler._getAllNodesOverlappingWith(i),r=void 0,s=n.length-1;s>=0;s--)if(n[s]!==this.selectedControlNode.id){r=this.body.nodes[n[s]];break}if(void 0!==r&&void 0!==this.selectedControlNode)if(!0===r.isCluster)alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError);else{var a=this.body.nodes[this.temporaryIds.nodes[0]];this.selectedControlNode.id===a.id?this._performEditEdge(r.id,o.to.id):this._performEditEdge(o.from.id,r.id)}else o.updateEdgeType(),this.body.emitter.emit("restorePhysics");this.body.emitter.emit("_redraw")}}},{key:"_handleConnect",value:function(t){if((new Date).valueOf()-this.touchTime>100){this.lastTouch=this.body.functions.getPointer(t.center),this.lastTouch.translation=Ke({},this.body.view.translation),this.interactionHandler.drag.pointer=this.lastTouch,this.interactionHandler.drag.translation=this.lastTouch.translation;var e=this.lastTouch,i=this.selectionHandler.getNodeAt(e);if(void 0!==i)if(!0===i.isCluster)alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError);else{var o=this._getNewTargetNode(i.x,i.y);this.body.nodes[o.id]=o,this.body.nodeIndices.push(o.id);var n=this.body.functions.createEdge({id:"connectionEdge"+Cm(),from:i.id,to:o.id,physics:!1,smooth:{enabled:!0,type:"continuous",roundness:.5}});this.body.edges[n.id]=n,this.body.edgeIndices.push(n.id),this.temporaryIds.nodes.push(o.id),this.temporaryIds.edges.push(n.id)}this.touchTime=(new Date).valueOf()}}},{key:"_dragControlNode",value:function(t){var e=this.body.functions.getPointer(t.center),i=this.selectionHandler._pointerToPositionObject(e),o=void 0;void 0!==this.temporaryIds.edges[0]&&(o=this.body.edges[this.temporaryIds.edges[0]].fromId);for(var n=this.selectionHandler._getAllNodesOverlappingWith(i),r=void 0,s=n.length-1;s>=0;s--){var a;if(-1===Cl(a=this.temporaryIds.nodes).call(a,n[s])){r=this.body.nodes[n[s]];break}}if(t.controlEdge={from:o,to:r?r.id:void 0},this.selectionHandler.generateClickEvent("controlNodeDragging",t,e),void 0!==this.temporaryIds.nodes[0]){var h=this.body.nodes[this.temporaryIds.nodes[0]];h.x=this.canvas._XconvertDOMtoCanvas(e.x),h.y=this.canvas._YconvertDOMtoCanvas(e.y),this.body.emitter.emit("_redraw")}else this.interactionHandler.onDrag(t)}},{key:"_finishConnect",value:function(t){var e=this.body.functions.getPointer(t.center),i=this.selectionHandler._pointerToPositionObject(e),o=void 0;void 0!==this.temporaryIds.edges[0]&&(o=this.body.edges[this.temporaryIds.edges[0]].fromId);for(var n=this.selectionHandler._getAllNodesOverlappingWith(i),r=void 0,s=n.length-1;s>=0;s--){var a;if(-1===Cl(a=this.temporaryIds.nodes).call(a,n[s])){r=this.body.nodes[n[s]];break}}this._cleanupTemporaryNodesAndEdges(),void 0!==r&&(!0===r.isCluster?alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError):void 0!==this.body.nodes[o]&&void 0!==this.body.nodes[r.id]&&this._performAddEdge(o,r.id)),t.controlEdge={from:o,to:r?r.id:void 0},this.selectionHandler.generateClickEvent("controlNodeDragEnd",t,e),this.body.emitter.emit("_redraw")}},{key:"_dragStartEdge",value:function(t){var e=this.lastTouch;this.selectionHandler.generateClickEvent("dragStart",t,e,void 0,!0)}},{key:"_performAddNode",value:function(t){var e=this,i={id:Cm(),x:t.pointer.canvas.x,y:t.pointer.canvas.y,label:"new"};if("function"==typeof this.options.addNode){if(2!==this.options.addNode.length)throw this.showManipulatorToolbar(),new Error("The function for add does not support two arguments (data,callback)");this.options.addNode(i,(function(t){null!=t&&"addNode"===e.inMode&&e.body.data.nodes.getDataSet().add(t),e.showManipulatorToolbar()}))}else this.body.data.nodes.getDataSet().add(i),this.showManipulatorToolbar()}},{key:"_performAddEdge",value:function(t,e){var i=this,o={from:t,to:e};if("function"==typeof this.options.addEdge){if(2!==this.options.addEdge.length)throw new Error("The function for connect does not support two arguments (data,callback)");this.options.addEdge(o,(function(t){null!=t&&"addEdge"===i.inMode&&(i.body.data.edges.getDataSet().add(t),i.selectionHandler.unselectAll(),i.showManipulatorToolbar())}))}else this.body.data.edges.getDataSet().add(o),this.selectionHandler.unselectAll(),this.showManipulatorToolbar()}},{key:"_performEditEdge",value:function(t,e){var i=this,o={id:this.edgeBeingEditedId,from:t,to:e,label:this.body.data.edges.get(this.edgeBeingEditedId).label},n=this.options.editEdge;if("object"===zh(n)&&(n=n.editWithoutDrag),"function"==typeof n){if(2!==n.length)throw new Error("The function for edit does not support two arguments (data, callback)");n(o,(function(t){null==t||"editEdge"!==i.inMode?(i.body.edges[o.id].updateEdgeType(),i.body.emitter.emit("_redraw"),i.showManipulatorToolbar()):(i.body.data.edges.getDataSet().update(t),i.selectionHandler.unselectAll(),i.showManipulatorToolbar())}))}else this.body.data.edges.getDataSet().update(o),this.selectionHandler.unselectAll(),this.showManipulatorToolbar()}}]),t}(),Zw="string",Qw="boolean",Jw="number",tk="array",ek="object",ik=["arrow","bar","box","circle","crow","curve","diamond","image","inv_curve","inv_triangle","triangle","vee"],ok={borderWidth:{number:Jw},borderWidthSelected:{number:Jw,undefined:"undefined"},brokenImage:{string:Zw,undefined:"undefined"},chosen:{label:{boolean:Qw,function:"function"},node:{boolean:Qw,function:"function"},__type__:{object:ek,boolean:Qw}},color:{border:{string:Zw},background:{string:Zw},highlight:{border:{string:Zw},background:{string:Zw},__type__:{object:ek,string:Zw}},hover:{border:{string:Zw},background:{string:Zw},__type__:{object:ek,string:Zw}},__type__:{object:ek,string:Zw}},opacity:{number:Jw,undefined:"undefined"},fixed:{x:{boolean:Qw},y:{boolean:Qw},__type__:{object:ek,boolean:Qw}},font:{align:{string:Zw},color:{string:Zw},size:{number:Jw},face:{string:Zw},background:{string:Zw},strokeWidth:{number:Jw},strokeColor:{string:Zw},vadjust:{number:Jw},multi:{boolean:Qw,string:Zw},bold:{color:{string:Zw},size:{number:Jw},face:{string:Zw},mod:{string:Zw},vadjust:{number:Jw},__type__:{object:ek,string:Zw}},boldital:{color:{string:Zw},size:{number:Jw},face:{string:Zw},mod:{string:Zw},vadjust:{number:Jw},__type__:{object:ek,string:Zw}},ital:{color:{string:Zw},size:{number:Jw},face:{string:Zw},mod:{string:Zw},vadjust:{number:Jw},__type__:{object:ek,string:Zw}},mono:{color:{string:Zw},size:{number:Jw},face:{string:Zw},mod:{string:Zw},vadjust:{number:Jw},__type__:{object:ek,string:Zw}},__type__:{object:ek,string:Zw}},group:{string:Zw,number:Jw,undefined:"undefined"},heightConstraint:{minimum:{number:Jw},valign:{string:Zw},__type__:{object:ek,boolean:Qw,number:Jw}},hidden:{boolean:Qw},icon:{face:{string:Zw},code:{string:Zw},size:{number:Jw},color:{string:Zw},weight:{string:Zw,number:Jw},__type__:{object:ek}},id:{string:Zw,number:Jw},image:{selected:{string:Zw,undefined:"undefined"},unselected:{string:Zw,undefined:"undefined"},__type__:{object:ek,string:Zw}},imagePadding:{top:{number:Jw},right:{number:Jw},bottom:{number:Jw},left:{number:Jw},__type__:{object:ek,number:Jw}},label:{string:Zw,undefined:"undefined"},labelHighlightBold:{boolean:Qw},level:{number:Jw,undefined:"undefined"},margin:{top:{number:Jw},right:{number:Jw},bottom:{number:Jw},left:{number:Jw},__type__:{object:ek,number:Jw}},mass:{number:Jw},physics:{boolean:Qw},scaling:{min:{number:Jw},max:{number:Jw},label:{enabled:{boolean:Qw},min:{number:Jw},max:{number:Jw},maxVisible:{number:Jw},drawThreshold:{number:Jw},__type__:{object:ek,boolean:Qw}},customScalingFunction:{function:"function"},__type__:{object:ek}},shadow:{enabled:{boolean:Qw},color:{string:Zw},size:{number:Jw},x:{number:Jw},y:{number:Jw},__type__:{object:ek,boolean:Qw}},shape:{string:["custom","ellipse","circle","database","box","text","image","circularImage","diamond","dot","star","triangle","triangleDown","square","icon","hexagon"]},ctxRenderer:{function:"function"},shapeProperties:{borderDashes:{boolean:Qw,array:tk},borderRadius:{number:Jw},interpolation:{boolean:Qw},useImageSize:{boolean:Qw},useBorderWithImage:{boolean:Qw},coordinateOrigin:{string:["center","top-left"]},__type__:{object:ek}},size:{number:Jw},title:{string:Zw,dom:"dom",undefined:"undefined"},value:{number:Jw,undefined:"undefined"},widthConstraint:{minimum:{number:Jw},maximum:{number:Jw},__type__:{object:ek,boolean:Qw,number:Jw}},x:{number:Jw},y:{number:Jw},__type__:{object:ek}},nk={configure:{enabled:{boolean:Qw},filter:{boolean:Qw,string:Zw,array:tk,function:"function"},container:{dom:"dom"},showButton:{boolean:Qw},__type__:{object:ek,boolean:Qw,string:Zw,array:tk,function:"function"}},edges:{arrows:{to:{enabled:{boolean:Qw},scaleFactor:{number:Jw},type:{string:ik},imageHeight:{number:Jw},imageWidth:{number:Jw},src:{string:Zw},__type__:{object:ek,boolean:Qw}},middle:{enabled:{boolean:Qw},scaleFactor:{number:Jw},type:{string:ik},imageWidth:{number:Jw},imageHeight:{number:Jw},src:{string:Zw},__type__:{object:ek,boolean:Qw}},from:{enabled:{boolean:Qw},scaleFactor:{number:Jw},type:{string:ik},imageWidth:{number:Jw},imageHeight:{number:Jw},src:{string:Zw},__type__:{object:ek,boolean:Qw}},__type__:{string:["from","to","middle"],object:ek}},endPointOffset:{from:{number:Jw},to:{number:Jw},__type__:{object:ek,number:Jw}},arrowStrikethrough:{boolean:Qw},background:{enabled:{boolean:Qw},color:{string:Zw},size:{number:Jw},dashes:{boolean:Qw,array:tk},__type__:{object:ek,boolean:Qw}},chosen:{label:{boolean:Qw,function:"function"},edge:{boolean:Qw,function:"function"},__type__:{object:ek,boolean:Qw}},color:{color:{string:Zw},highlight:{string:Zw},hover:{string:Zw},inherit:{string:["from","to","both"],boolean:Qw},opacity:{number:Jw},__type__:{object:ek,string:Zw}},dashes:{boolean:Qw,array:tk},font:{color:{string:Zw},size:{number:Jw},face:{string:Zw},background:{string:Zw},strokeWidth:{number:Jw},strokeColor:{string:Zw},align:{string:["horizontal","top","middle","bottom"]},vadjust:{number:Jw},multi:{boolean:Qw,string:Zw},bold:{color:{string:Zw},size:{number:Jw},face:{string:Zw},mod:{string:Zw},vadjust:{number:Jw},__type__:{object:ek,string:Zw}},boldital:{color:{string:Zw},size:{number:Jw},face:{string:Zw},mod:{string:Zw},vadjust:{number:Jw},__type__:{object:ek,string:Zw}},ital:{color:{string:Zw},size:{number:Jw},face:{string:Zw},mod:{string:Zw},vadjust:{number:Jw},__type__:{object:ek,string:Zw}},mono:{color:{string:Zw},size:{number:Jw},face:{string:Zw},mod:{string:Zw},vadjust:{number:Jw},__type__:{object:ek,string:Zw}},__type__:{object:ek,string:Zw}},hidden:{boolean:Qw},hoverWidth:{function:"function",number:Jw},label:{string:Zw,undefined:"undefined"},labelHighlightBold:{boolean:Qw},length:{number:Jw,undefined:"undefined"},physics:{boolean:Qw},scaling:{min:{number:Jw},max:{number:Jw},label:{enabled:{boolean:Qw},min:{number:Jw},max:{number:Jw},maxVisible:{number:Jw},drawThreshold:{number:Jw},__type__:{object:ek,boolean:Qw}},customScalingFunction:{function:"function"},__type__:{object:ek}},selectionWidth:{function:"function",number:Jw},selfReferenceSize:{number:Jw},selfReference:{size:{number:Jw},angle:{number:Jw},renderBehindTheNode:{boolean:Qw},__type__:{object:ek}},shadow:{enabled:{boolean:Qw},color:{string:Zw},size:{number:Jw},x:{number:Jw},y:{number:Jw},__type__:{object:ek,boolean:Qw}},smooth:{enabled:{boolean:Qw},type:{string:["dynamic","continuous","discrete","diagonalCross","straightCross","horizontal","vertical","curvedCW","curvedCCW","cubicBezier"]},roundness:{number:Jw},forceDirection:{string:["horizontal","vertical","none"],boolean:Qw},__type__:{object:ek,boolean:Qw}},title:{string:Zw,undefined:"undefined"},width:{number:Jw},widthConstraint:{maximum:{number:Jw},__type__:{object:ek,boolean:Qw,number:Jw}},value:{number:Jw,undefined:"undefined"},__type__:{object:ek}},groups:{useDefaultGroups:{boolean:Qw},__any__:ok,__type__:{object:ek}},interaction:{dragNodes:{boolean:Qw},dragView:{boolean:Qw},hideEdgesOnDrag:{boolean:Qw},hideEdgesOnZoom:{boolean:Qw},hideNodesOnDrag:{boolean:Qw},hover:{boolean:Qw},keyboard:{enabled:{boolean:Qw},speed:{x:{number:Jw},y:{number:Jw},zoom:{number:Jw},__type__:{object:ek}},bindToWindow:{boolean:Qw},autoFocus:{boolean:Qw},__type__:{object:ek,boolean:Qw}},multiselect:{boolean:Qw},navigationButtons:{boolean:Qw},selectable:{boolean:Qw},selectConnectedEdges:{boolean:Qw},hoverConnectedEdges:{boolean:Qw},tooltipDelay:{number:Jw},zoomView:{boolean:Qw},zoomSpeed:{number:Jw},__type__:{object:ek}},layout:{randomSeed:{undefined:"undefined",number:Jw,string:Zw},improvedLayout:{boolean:Qw},clusterThreshold:{number:Jw},hierarchical:{enabled:{boolean:Qw},levelSeparation:{number:Jw},nodeSpacing:{number:Jw},treeSpacing:{number:Jw},blockShifting:{boolean:Qw},edgeMinimization:{boolean:Qw},parentCentralization:{boolean:Qw},direction:{string:["UD","DU","LR","RL"]},sortMethod:{string:["hubsize","directed"]},shakeTowards:{string:["leaves","roots"]},__type__:{object:ek,boolean:Qw}},__type__:{object:ek}},manipulation:{enabled:{boolean:Qw},initiallyActive:{boolean:Qw},addNode:{boolean:Qw,function:"function"},addEdge:{boolean:Qw,function:"function"},editNode:{function:"function"},editEdge:{editWithoutDrag:{function:"function"},__type__:{object:ek,boolean:Qw,function:"function"}},deleteNode:{boolean:Qw,function:"function"},deleteEdge:{boolean:Qw,function:"function"},controlNodeStyle:ok,__type__:{object:ek,boolean:Qw}},nodes:ok,physics:{enabled:{boolean:Qw},barnesHut:{theta:{number:Jw},gravitationalConstant:{number:Jw},centralGravity:{number:Jw},springLength:{number:Jw},springConstant:{number:Jw},damping:{number:Jw},avoidOverlap:{number:Jw},__type__:{object:ek}},forceAtlas2Based:{theta:{number:Jw},gravitationalConstant:{number:Jw},centralGravity:{number:Jw},springLength:{number:Jw},springConstant:{number:Jw},damping:{number:Jw},avoidOverlap:{number:Jw},__type__:{object:ek}},repulsion:{centralGravity:{number:Jw},springLength:{number:Jw},springConstant:{number:Jw},nodeDistance:{number:Jw},damping:{number:Jw},__type__:{object:ek}},hierarchicalRepulsion:{centralGravity:{number:Jw},springLength:{number:Jw},springConstant:{number:Jw},nodeDistance:{number:Jw},damping:{number:Jw},avoidOverlap:{number:Jw},__type__:{object:ek}},maxVelocity:{number:Jw},minVelocity:{number:Jw},solver:{string:["barnesHut","repulsion","hierarchicalRepulsion","forceAtlas2Based"]},stabilization:{enabled:{boolean:Qw},iterations:{number:Jw},updateInterval:{number:Jw},onlyDynamicEdges:{boolean:Qw},fit:{boolean:Qw},__type__:{object:ek,boolean:Qw}},timestep:{number:Jw},adaptiveTimestep:{boolean:Qw},wind:{x:{number:Jw},y:{number:Jw},__type__:{object:ek}},__type__:{object:ek,boolean:Qw}},autoResize:{boolean:Qw},clickToUse:{boolean:Qw},locale:{string:Zw},locales:{__any__:{any:"any"},__type__:{object:ek}},height:{string:Zw},width:{string:Zw},__type__:{object:ek}},rk={nodes:{borderWidth:[1,0,10,1],borderWidthSelected:[2,0,10,1],color:{border:["color","#2B7CE9"],background:["color","#97C2FC"],highlight:{border:["color","#2B7CE9"],background:["color","#D2E5FF"]},hover:{border:["color","#2B7CE9"],background:["color","#D2E5FF"]}},opacity:[0,0,1,.1],fixed:{x:!1,y:!1},font:{color:["color","#343434"],size:[14,0,100,1],face:["arial","verdana","tahoma"],background:["color","none"],strokeWidth:[0,0,50,1],strokeColor:["color","#ffffff"]},hidden:!1,labelHighlightBold:!0,physics:!0,scaling:{min:[10,0,200,1],max:[30,0,200,1],label:{enabled:!1,min:[14,0,200,1],max:[30,0,200,1],maxVisible:[30,0,200,1],drawThreshold:[5,0,20,1]}},shadow:{enabled:!1,color:"rgba(0,0,0,0.5)",size:[10,0,20,1],x:[5,-30,30,1],y:[5,-30,30,1]},shape:["ellipse","box","circle","database","diamond","dot","square","star","text","triangle","triangleDown","hexagon"],shapeProperties:{borderDashes:!1,borderRadius:[6,0,20,1],interpolation:!0,useImageSize:!1},size:[25,0,200,1]},edges:{arrows:{to:{enabled:!1,scaleFactor:[1,0,3,.05],type:"arrow"},middle:{enabled:!1,scaleFactor:[1,0,3,.05],type:"arrow"},from:{enabled:!1,scaleFactor:[1,0,3,.05],type:"arrow"}},endPointOffset:{from:[0,-10,10,1],to:[0,-10,10,1]},arrowStrikethrough:!0,color:{color:["color","#848484"],highlight:["color","#848484"],hover:["color","#848484"],inherit:["from","to","both",!0,!1],opacity:[1,0,1,.05]},dashes:!1,font:{color:["color","#343434"],size:[14,0,100,1],face:["arial","verdana","tahoma"],background:["color","none"],strokeWidth:[2,0,50,1],strokeColor:["color","#ffffff"],align:["horizontal","top","middle","bottom"]},hidden:!1,hoverWidth:[1.5,0,5,.1],labelHighlightBold:!0,physics:!0,scaling:{min:[1,0,100,1],max:[15,0,100,1],label:{enabled:!0,min:[14,0,200,1],max:[30,0,200,1],maxVisible:[30,0,200,1],drawThreshold:[5,0,20,1]}},selectionWidth:[1.5,0,5,.1],selfReferenceSize:[20,0,200,1],selfReference:{size:[20,0,200,1],angle:[Math.PI/2,-6*Math.PI,6*Math.PI,Math.PI/8],renderBehindTheNode:!0},shadow:{enabled:!1,color:"rgba(0,0,0,0.5)",size:[10,0,20,1],x:[5,-30,30,1],y:[5,-30,30,1]},smooth:{enabled:!0,type:["dynamic","continuous","discrete","diagonalCross","straightCross","horizontal","vertical","curvedCW","curvedCCW","cubicBezier"],forceDirection:["horizontal","vertical","none"],roundness:[.5,0,1,.05]},width:[1,0,30,1]},layout:{hierarchical:{enabled:!1,levelSeparation:[150,20,500,5],nodeSpacing:[100,20,500,5],treeSpacing:[200,20,500,5],blockShifting:!0,edgeMinimization:!0,parentCentralization:!0,direction:["UD","DU","LR","RL"],sortMethod:["hubsize","directed"],shakeTowards:["leaves","roots"]}},interaction:{dragNodes:!0,dragView:!0,hideEdgesOnDrag:!1,hideEdgesOnZoom:!1,hideNodesOnDrag:!1,hover:!1,keyboard:{enabled:!1,speed:{x:[10,0,40,1],y:[10,0,40,1],zoom:[.02,0,.1,.005]},bindToWindow:!0,autoFocus:!0},multiselect:!1,navigationButtons:!1,selectable:!0,selectConnectedEdges:!0,hoverConnectedEdges:!0,tooltipDelay:[300,0,1e3,25],zoomView:!0,zoomSpeed:[1,.1,2,.1]},manipulation:{enabled:!1,initiallyActive:!1},physics:{enabled:!0,barnesHut:{theta:[.5,.1,1,.05],gravitationalConstant:[-2e3,-3e4,0,50],centralGravity:[.3,0,10,.05],springLength:[95,0,500,5],springConstant:[.04,0,1.2,.005],damping:[.09,0,1,.01],avoidOverlap:[0,0,1,.01]},forceAtlas2Based:{theta:[.5,.1,1,.05],gravitationalConstant:[-50,-500,0,1],centralGravity:[.01,0,1,.005],springLength:[95,0,500,5],springConstant:[.08,0,1.2,.005],damping:[.4,0,1,.01],avoidOverlap:[0,0,1,.01]},repulsion:{centralGravity:[.2,0,10,.05],springLength:[200,0,500,5],springConstant:[.05,0,1.2,.005],nodeDistance:[100,0,500,5],damping:[.09,0,1,.01]},hierarchicalRepulsion:{centralGravity:[.2,0,10,.05],springLength:[100,0,500,5],springConstant:[.01,0,1.2,.005],nodeDistance:[120,0,500,5],damping:[.09,0,1,.01],avoidOverlap:[0,0,1,.01]},maxVelocity:[50,0,150,1],minVelocity:[.1,.01,.5,.01],solver:["barnesHut","forceAtlas2Based","repulsion","hierarchicalRepulsion"],timestep:[.5,.01,1,.01],wind:{x:[0,-10,10,.1],y:[0,-10,10,.1]}}},sk=function(t,e,i){var o;return!(!Hd(t).call(t,"physics")||!Hd(o=rk.physics.solver).call(o,e)||i.physics.solver===e||"wind"===e)},ak=Object.freeze({__proto__:null,configuratorHideOption:sk,allOptions:nk,configureOptions:rk}),hk=function(){function t(){Ra(this,t)}return Ha(t,[{key:"getDistances",value:function(t,e,i){for(var o={},n=t.edges,r=0;r<e.length;r++){var s={};o[e[r]]=s;for(var a=0;a<e.length;a++)s[e[a]]=r==a?0:1e9}for(var h=0;h<i.length;h++){var d=n[i[h]];!0===d.connected&&void 0!==o[d.fromId]&&void 0!==o[d.toId]&&(o[d.fromId][d.toId]=1,o[d.toId][d.fromId]=1)}for(var l=e.length,c=0;c<l;c++)for(var u=e[c],f=o[u],p=0;p<l-1;p++)for(var v=e[p],g=o[v],y=p+1;y<l;y++){var m=e[y],b=o[m],w=Math.min(g[m],g[u]+f[m]);g[m]=w,b[v]=w}return o}}]),t}(),dk=function(){function t(e,i,o){Ra(this,t),this.body=e,this.springLength=i,this.springConstant=o,this.distanceSolver=new hk}return Ha(t,[{key:"setOptions",value:function(t){t&&(t.springLength&&(this.springLength=t.springLength),t.springConstant&&(this.springConstant=t.springConstant))}},{key:"solve",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=this.distanceSolver.getDistances(this.body,t,e);this._createL_matrix(o),this._createK_matrix(o),this._createE_matrix();for(var n=.01,r=1,s=0,a=Math.max(1e3,Math.min(10*this.body.nodeIndices.length,6e3)),h=5,d=1e9,l=0,c=0,u=0,f=0,p=0;d>n&&s<a;){s+=1;var v=this._getHighestEnergyNode(i),g=Bh(v,4);for(l=g[0],d=g[1],c=g[2],u=g[3],f=d,p=0;f>r&&p<h;){p+=1,this._moveNode(l,c,u);var y=this._getEnergy(l),m=Bh(y,3);f=m[0],c=m[1],u=m[2]}}}},{key:"_getHighestEnergyNode",value:function(t){for(var e=this.body.nodeIndices,i=this.body.nodes,o=0,n=e[0],r=0,s=0,a=0;a<e.length;a++){var h=e[a];if(!0!==i[h].predefinedPosition||!0===i[h].isCluster&&!0===t||!0!==i[h].options.fixed.x||!0!==i[h].options.fixed.y){var d=Bh(this._getEnergy(h),3),l=d[0],c=d[1],u=d[2];o<l&&(o=l,n=h,r=c,s=u)}}return[n,o,r,s]}},{key:"_getEnergy",value:function(t){var e=Bh(this.E_sums[t],2),i=e[0],o=e[1];return[Math.sqrt(Math.pow(i,2)+Math.pow(o,2)),i,o]}},{key:"_moveNode",value:function(t,e,i){for(var o=this.body.nodeIndices,n=this.body.nodes,r=0,s=0,a=0,h=n[t].x,d=n[t].y,l=this.K_matrix[t],c=this.L_matrix[t],u=0;u<o.length;u++){var f=o[u];if(f!==t){var p=n[f].x,v=n[f].y,g=l[f],y=c[f],m=1/Math.pow(Math.pow(h-p,2)+Math.pow(d-v,2),1.5);r+=g*(1-y*Math.pow(d-v,2)*m),s+=g*(y*(h-p)*(d-v)*m),a+=g*(1-y*Math.pow(h-p,2)*m)}}var b=(e/r+i/s)/(s/r-a/s),w=-(s*b+e)/r;n[t].x+=w,n[t].y+=b,this._updateE_matrix(t)}},{key:"_createL_matrix",value:function(t){var e=this.body.nodeIndices,i=this.springLength;this.L_matrix=[];for(var o=0;o<e.length;o++){this.L_matrix[e[o]]={};for(var n=0;n<e.length;n++)this.L_matrix[e[o]][e[n]]=i*t[e[o]][e[n]]}}},{key:"_createK_matrix",value:function(t){var e=this.body.nodeIndices,i=this.springConstant;this.K_matrix=[];for(var o=0;o<e.length;o++){this.K_matrix[e[o]]={};for(var n=0;n<e.length;n++)this.K_matrix[e[o]][e[n]]=i*Math.pow(t[e[o]][e[n]],-2)}}},{key:"_createE_matrix",value:function(){var t=this.body.nodeIndices,e=this.body.nodes;this.E_matrix={},this.E_sums={};for(var i=0;i<t.length;i++)this.E_matrix[t[i]]=[];for(var o=0;o<t.length;o++){for(var n=t[o],r=e[n].x,s=e[n].y,a=0,h=0,d=o;d<t.length;d++){var l=t[d];if(l!==n){var c=e[l].x,u=e[l].y,f=1/Math.sqrt(Math.pow(r-c,2)+Math.pow(s-u,2));this.E_matrix[n][d]=[this.K_matrix[n][l]*(r-c-this.L_matrix[n][l]*(r-c)*f),this.K_matrix[n][l]*(s-u-this.L_matrix[n][l]*(s-u)*f)],this.E_matrix[l][o]=this.E_matrix[n][d],a+=this.E_matrix[n][d][0],h+=this.E_matrix[n][d][1]}}this.E_sums[n]=[a,h]}}},{key:"_updateE_matrix",value:function(t){for(var e=this.body.nodeIndices,i=this.body.nodes,o=this.E_matrix[t],n=this.K_matrix[t],r=this.L_matrix[t],s=i[t].x,a=i[t].y,h=0,d=0,l=0;l<e.length;l++){var c=e[l];if(c!==t){var u=o[l],f=u[0],p=u[1],v=i[c].x,g=i[c].y,y=1/Math.sqrt(Math.pow(s-v,2)+Math.pow(a-g,2)),m=n[c]*(s-v-r[c]*(s-v)*y),b=n[c]*(a-g-r[c]*(a-g)*y);o[l]=[m,b],h+=m,d+=b;var w=this.E_sums[c];w[0]+=m-f,w[1]+=b-p}}this.E_sums[t]=[h,d]}}]),t}();function lk(t,e,i){var o,n,r,s,a=this;if(!(this instanceof lk))throw new SyntaxError("Constructor must be called with the new operator");this.options={},this.defaultOptions={locale:"en",locales:mp,clickToUse:!1},Ke(this.options,this.defaultOptions),this.body={container:t,nodes:{},nodeIndices:[],edges:{},edgeIndices:[],emitter:{on:si(o=this.on).call(o,this),off:si(n=this.off).call(n,this),emit:si(r=this.emit).call(r,this),once:si(s=this.once).call(s,this)},eventListeners:{onTap:function(){},onTouch:function(){},onDoubleTap:function(){},onHold:function(){},onDragStart:function(){},onDrag:function(){},onDragEnd:function(){},onMouseWheel:function(){},onPinch:function(){},onMouseMove:function(){},onRelease:function(){},onContext:function(){}},data:{nodes:null,edges:null},functions:{createNode:function(){},createEdge:function(){},getPointer:function(){}},modules:{},view:{scale:1,translation:{x:0,y:0}},selectionBox:{show:!1,position:{start:{x:0,y:0},end:{x:0,y:0}}}},this.bindEventListeners(),this.images=new wp((function(){return a.body.emitter.emit("_requestRedraw")})),this.groups=new Sv,this.canvas=new Am(this.body),this.selectionHandler=new Hb(this.body,this.canvas),this.interactionHandler=new qm(this.body,this.canvas,this.selectionHandler),this.view=new jm(this.body,this.canvas),this.renderer=new Im(this.body,this.canvas),this.physics=new bm(this.body),this.layoutEngine=new Xw(this.body),this.clustering=new Pm(this.body),this.manipulation=new $w(this.body,this.canvas,this.selectionHandler,this.interactionHandler),this.nodesHandler=new vy(this.body,this.images,this.groups,this.layoutEngine),this.edgesHandler=new am(this.body,this.images,this.groups),this.body.modules.kamadaKawai=new dk(this.body,150,.05),this.body.modules.clustering=this.clustering,this.canvas._create(),this.setOptions(i),this.setData(e)}pi(lk.prototype),lk.prototype.setOptions=function(t){var e=this;if(null===t&&(t=void 0),void 0!==t){!0===Nf.validate(t,nk)&&console.error("%cErrors have been found in the supplied options object.",Ff);if(nf(["locale","locales","clickToUse"],this.options,t),void 0!==t.locale&&(t.locale=function(t,e){try{var i=Bh(e.split(/[-_ /]/,2),2),o=i[0],n=i[1],r=null!=o?o.toLowerCase():null,s=null!=n?n.toUpperCase():null;if(r&&s){var a,h=r+"-"+s;if(Object.prototype.hasOwnProperty.call(t,h))return h;console.warn(jh(a="Unknown variant ".concat(s," of language ")).call(a,r,"."))}if(r){var d=r;if(Object.prototype.hasOwnProperty.call(t,d))return d;console.warn("Unknown language ".concat(r))}return console.warn("Unknown locale ".concat(e,", falling back to English.")),"en"}catch(t){return console.error(t),console.warn("Unexpected error while normalizing locale ".concat(e,", falling back to English.")),"en"}}(t.locales||this.options.locales,t.locale)),t=this.layoutEngine.setOptions(t.layout,t),this.canvas.setOptions(t),this.groups.setOptions(t.groups),this.nodesHandler.setOptions(t.nodes),this.edgesHandler.setOptions(t.edges),this.physics.setOptions(t.physics),this.manipulation.setOptions(t.manipulation,t,this.options),this.interactionHandler.setOptions(t.interaction),this.renderer.setOptions(t.interaction),this.selectionHandler.setOptions(t.interaction),void 0!==t.groups&&this.body.emitter.emit("refreshNodes"),"configure"in t&&(this.configurator||(this.configurator=new Bf(this,this.body.container,rk,this.canvas.pixelRatio,sk)),this.configurator.setOptions(t.configure)),this.configurator&&!0===this.configurator.options.enabled){var i={nodes:{},edges:{},layout:{},interaction:{},manipulation:{},physics:{},global:{}};sf(i.nodes,this.nodesHandler.options),sf(i.edges,this.edgesHandler.options),sf(i.layout,this.layoutEngine.options),sf(i.interaction,this.selectionHandler.options),sf(i.interaction,this.renderer.options),sf(i.interaction,this.interactionHandler.options),sf(i.manipulation,this.manipulation.options),sf(i.physics,this.physics.options),sf(i.global,this.canvas.options),sf(i.global,this.options),this.configurator.setModuleOptions(i)}void 0!==t.clickToUse?!0===t.clickToUse?void 0===this.activator&&(this.activator=new Df(this.canvas.frame),this.activator.on("change",(function(){e.body.emitter.emit("activate")}))):(void 0!==this.activator&&(this.activator.destroy(),delete this.activator),this.body.emitter.emit("activate")):this.body.emitter.emit("activate"),this.canvas.setSize(),this.body.emitter.emit("startSimulation")}},lk.prototype._updateVisibleIndices=function(){var t=this.body.nodes,e=this.body.edges;for(var i in this.body.nodeIndices=[],this.body.edgeIndices=[],t)Object.prototype.hasOwnProperty.call(t,i)&&(this.clustering._isClusteredNode(i)||!1!==t[i].options.hidden||this.body.nodeIndices.push(t[i].id));for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var n=e[o],r=t[n.fromId],s=t[n.toId],a=void 0!==r&&void 0!==s;!this.clustering._isClusteredEdge(o)&&!1===n.options.hidden&&a&&!1===r.options.hidden&&!1===s.options.hidden&&this.body.edgeIndices.push(n.id)}},lk.prototype.bindEventListeners=function(){var t=this;this.body.emitter.on("_dataChanged",(function(){t.edgesHandler._updateState(),t.body.emitter.emit("_dataUpdated")})),this.body.emitter.on("_dataUpdated",(function(){t.clustering._updateState(),t._updateVisibleIndices(),t._updateValueRange(t.body.nodes),t._updateValueRange(t.body.edges),t.body.emitter.emit("startSimulation"),t.body.emitter.emit("_requestRedraw")}))},lk.prototype.setData=function(t){if(this.body.emitter.emit("resetPhysics"),this.body.emitter.emit("_resetData"),this.selectionHandler.unselectAll(),t&&t.dot&&(t.nodes||t.edges))throw new SyntaxError('Data must contain either parameter "dot" or  parameter pair "nodes" and "edges", but not both.');if(this.setOptions(t&&t.options),t&&t.dot){console.warn("The dot property has been deprecated. Please use the static convertDot method to convert DOT into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertDot(dotString);");var e=pp(t.dot);this.setData(e)}else if(t&&t.gephi){console.warn("The gephi property has been deprecated. Please use the static convertGephi method to convert gephi into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertGephi(gephiJson);");var i=gp(t.gephi);this.setData(i)}else this.nodesHandler.setData(t&&t.nodes,!0),this.edgesHandler.setData(t&&t.edges,!0),this.body.emitter.emit("_dataChanged"),this.body.emitter.emit("_dataLoaded"),this.body.emitter.emit("initPhysics")},lk.prototype.destroy=function(){for(var t in this.body.emitter.emit("destroy"),this.body.emitter.off(),this.off(),delete this.groups,delete this.canvas,delete this.selectionHandler,delete this.interactionHandler,delete this.view,delete this.renderer,delete this.physics,delete this.layoutEngine,delete this.clustering,delete this.manipulation,delete this.nodesHandler,delete this.edgesHandler,delete this.configurator,delete this.images,this.body.nodes)Object.prototype.hasOwnProperty.call(this.body.nodes,t)&&delete this.body.nodes[t];for(var e in this.body.edges)Object.prototype.hasOwnProperty.call(this.body.edges,e)&&delete this.body.edges[e];Qu(this.body.container)},lk.prototype._updateValueRange=function(t){var e,i=void 0,o=void 0,n=0;for(e in t)if(Object.prototype.hasOwnProperty.call(t,e)){var r=t[e].getValue();void 0!==r&&(i=void 0===i?r:Math.min(r,i),o=void 0===o?r:Math.max(r,o),n+=r)}if(void 0!==i&&void 0!==o)for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&t[e].setValueRange(i,o,n)},lk.prototype.isActive=function(){return!this.activator||this.activator.active},lk.prototype.setSize=function(){return this.canvas.setSize.apply(this.canvas,arguments)},lk.prototype.canvasToDOM=function(){return this.canvas.canvasToDOM.apply(this.canvas,arguments)},lk.prototype.DOMtoCanvas=function(){return this.canvas.DOMtoCanvas.apply(this.canvas,arguments)},lk.prototype.findNode=function(){return this.clustering.findNode.apply(this.clustering,arguments)},lk.prototype.isCluster=function(){return this.clustering.isCluster.apply(this.clustering,arguments)},lk.prototype.openCluster=function(){return this.clustering.openCluster.apply(this.clustering,arguments)},lk.prototype.cluster=function(){return this.clustering.cluster.apply(this.clustering,arguments)},lk.prototype.getNodesInCluster=function(){return this.clustering.getNodesInCluster.apply(this.clustering,arguments)},lk.prototype.clusterByConnection=function(){return this.clustering.clusterByConnection.apply(this.clustering,arguments)},lk.prototype.clusterByHubsize=function(){return this.clustering.clusterByHubsize.apply(this.clustering,arguments)},lk.prototype.updateClusteredNode=function(){return this.clustering.updateClusteredNode.apply(this.clustering,arguments)},lk.prototype.getClusteredEdges=function(){return this.clustering.getClusteredEdges.apply(this.clustering,arguments)},lk.prototype.getBaseEdge=function(){return this.clustering.getBaseEdge.apply(this.clustering,arguments)},lk.prototype.getBaseEdges=function(){return this.clustering.getBaseEdges.apply(this.clustering,arguments)},lk.prototype.updateEdge=function(){return this.clustering.updateEdge.apply(this.clustering,arguments)},lk.prototype.clusterOutliers=function(){return this.clustering.clusterOutliers.apply(this.clustering,arguments)},lk.prototype.getSeed=function(){return this.layoutEngine.getSeed.apply(this.layoutEngine,arguments)},lk.prototype.enableEditMode=function(){return this.manipulation.enableEditMode.apply(this.manipulation,arguments)},lk.prototype.disableEditMode=function(){return this.manipulation.disableEditMode.apply(this.manipulation,arguments)},lk.prototype.addNodeMode=function(){return this.manipulation.addNodeMode.apply(this.manipulation,arguments)},lk.prototype.editNode=function(){return this.manipulation.editNode.apply(this.manipulation,arguments)},lk.prototype.editNodeMode=function(){return console.warn("Deprecated: Please use editNode instead of editNodeMode."),this.manipulation.editNode.apply(this.manipulation,arguments)},lk.prototype.addEdgeMode=function(){return this.manipulation.addEdgeMode.apply(this.manipulation,arguments)},lk.prototype.editEdgeMode=function(){return this.manipulation.editEdgeMode.apply(this.manipulation,arguments)},lk.prototype.deleteSelected=function(){return this.manipulation.deleteSelected.apply(this.manipulation,arguments)},lk.prototype.getPositions=function(){return this.nodesHandler.getPositions.apply(this.nodesHandler,arguments)},lk.prototype.getPosition=function(){return this.nodesHandler.getPosition.apply(this.nodesHandler,arguments)},lk.prototype.storePositions=function(){return this.nodesHandler.storePositions.apply(this.nodesHandler,arguments)},lk.prototype.moveNode=function(){return this.nodesHandler.moveNode.apply(this.nodesHandler,arguments)},lk.prototype.getBoundingBox=function(){return this.nodesHandler.getBoundingBox.apply(this.nodesHandler,arguments)},lk.prototype.getConnectedNodes=function(t){return void 0!==this.body.nodes[t]?this.nodesHandler.getConnectedNodes.apply(this.nodesHandler,arguments):this.edgesHandler.getConnectedNodes.apply(this.edgesHandler,arguments)},lk.prototype.getConnectedEdges=function(){return this.nodesHandler.getConnectedEdges.apply(this.nodesHandler,arguments)},lk.prototype.startSimulation=function(){return this.physics.startSimulation.apply(this.physics,arguments)},lk.prototype.stopSimulation=function(){return this.physics.stopSimulation.apply(this.physics,arguments)},lk.prototype.stabilize=function(){return this.physics.stabilize.apply(this.physics,arguments)},lk.prototype.getSelection=function(){return this.selectionHandler.getSelection.apply(this.selectionHandler,arguments)},lk.prototype.setSelection=function(){return this.selectionHandler.setSelection.apply(this.selectionHandler,arguments)},lk.prototype.getSelectedNodes=function(){return this.selectionHandler.getSelectedNodeIds.apply(this.selectionHandler,arguments)},lk.prototype.getSelectedEdges=function(){return this.selectionHandler.getSelectedEdgeIds.apply(this.selectionHandler,arguments)},lk.prototype.getNodeAt=function(){var t=this.selectionHandler.getNodeAt.apply(this.selectionHandler,arguments);return void 0!==t&&void 0!==t.id?t.id:t},lk.prototype.getEdgeAt=function(){var t=this.selectionHandler.getEdgeAt.apply(this.selectionHandler,arguments);return void 0!==t&&void 0!==t.id?t.id:t},lk.prototype.selectNodes=function(){return this.selectionHandler.selectNodes.apply(this.selectionHandler,arguments)},lk.prototype.selectEdges=function(){return this.selectionHandler.selectEdges.apply(this.selectionHandler,arguments)},lk.prototype.unselectAll=function(){this.selectionHandler.unselectAll.apply(this.selectionHandler,arguments),this.selectionHandler.commitWithoutEmitting.apply(this.selectionHandler),this.redraw()},lk.prototype.redraw=function(){return this.renderer.redraw.apply(this.renderer,arguments)},lk.prototype.getScale=function(){return this.view.getScale.apply(this.view,arguments)},lk.prototype.getViewPosition=function(){return this.view.getViewPosition.apply(this.view,arguments)},lk.prototype.fit=function(){return this.view.fit.apply(this.view,arguments)},lk.prototype.moveTo=function(){return this.view.moveTo.apply(this.view,arguments)},lk.prototype.focus=function(){return this.view.focus.apply(this.view,arguments)},lk.prototype.releaseNode=function(){return this.view.releaseNode.apply(this.view,arguments)},lk.prototype.getOptionsFromConfigurator=function(){var t={};return this.configurator&&(t=this.configurator.getOptions.apply(this.configurator)),t};var ck=pp;t.Network=lk,t.NetworkImages=wp,t.networkDOTParser=vp,t.networkGephiParser=yp,t.networkOptions=ak,t.parseDOTNetwork=ck,t.parseGephiNetwork=gp,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=vis-network.min.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./public/components/kbn_network_vis_component.tsx":
/*!*********************************************************!*\
  !*** ./public/components/kbn_network_vis_component.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vis_network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vis-network */ "./node_modules/vis-network/peer/umd/vis-network.min.js");
/* harmony import */ var vis_network__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vis_network__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_network_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/network_data */ "./public/lib/network_data.ts");
/* harmony import */ var _lib_network_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/network_options */ "./public/lib/network_options.ts");
/* harmony import */ var _components_legend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/legend */ "./public/components/legend/index.tsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_6__);
/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








function KbnNetworkComponent({
  visParams,
  visData
}) {
  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const networkContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (networkContainerRef) {
      const networkData = new _lib_network_data__WEBPACK_IMPORTED_MODULE_3__["NetworkData"](visParams);
      const newData = networkData.from(visData);
      const networkOptions = new _lib_network_options__WEBPACK_IMPORTED_MODULE_4__["NetworkOptions"](newData);
      const options = networkOptions.from(visParams);
      new vis_network__WEBPACK_IMPORTED_MODULE_2__["Network"](networkContainerRef.current, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.omit(newData, ['nodeColors']), options);
      setData(newData);
    }
  }, [networkContainerRef, visData, visParams, setData]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%'
    }
  }, visParams.showColorLegend && data && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_legend__WEBPACK_IMPORTED_MODULE_5__["KbnNetworkVisLegend"], {
    colors: data.nodeColors
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    ref: networkContainerRef
  }));
} // eslint-disable-next-line import/no-default-export


/* harmony default export */ __webpack_exports__["default"] = (KbnNetworkComponent);

/***/ }),

/***/ "./public/components/legend/color_indicator.tsx":
/*!******************************************************!*\
  !*** ./public/components/legend/color_indicator.tsx ***!
  \******************************************************/
/*! exports provided: ColorIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorIndicator", function() { return ColorIndicator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function ColorIndicator({
  color
}) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg", {
    width: "16",
    height: "16"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("g", {
    transform: " translate(8, 8) rotate(0) "
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
    d: "M -3.5 0 a 3.5,3.5 0 1,0 7,0 a 3.5,3.5 0 1,0 -7,0",
    stroke: color,
    strokeWidth: "1",
    fill: color,
    opacity: "1"
  })));
}

/***/ }),

/***/ "./public/components/legend/index.tsx":
/*!********************************************!*\
  !*** ./public/components/legend/index.tsx ***!
  \********************************************/
/*! exports provided: KbnNetworkVisLegend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kbn_network_vis_legend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kbn_network_vis_legend */ "./public/components/legend/kbn_network_vis_legend.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KbnNetworkVisLegend", function() { return _kbn_network_vis_legend__WEBPACK_IMPORTED_MODULE_0__["KbnNetworkVisLegend"]; });

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/***/ }),

/***/ "./public/components/legend/kbn_network_vis_legend.tsx":
/*!*************************************************************!*\
  !*** ./public/components/legend/kbn_network_vis_legend.tsx ***!
  \*************************************************************/
/*! exports provided: KbnNetworkVisLegend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KbnNetworkVisLegend", function() { return KbnNetworkVisLegend; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _color_indicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color_indicator */ "./public/components/legend/color_indicator.tsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




function KbnNetworkVisLegend({
  colors
}) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    style: {
      position: 'absolute',
      right: 0,
      zIndex: 10000
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    style: {
      width: '100px',
      maxWidth: '100px',
      marginLeft: '0px',
      marginRight: '0px'
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("ul", {
    style: {
      paddingTop: '0px',
      paddingBottom: '0px'
    }
  }, Object.keys(colors).map(colorId => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexGroup"], {
    alignItems: "center",
    justifyContent: "flexStart",
    gutterSize: "s",
    responsive: false
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
    grow: false
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_color_indicator__WEBPACK_IMPORTED_MODULE_2__["ColorIndicator"], {
    color: colors[colorId]
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiText"], {
    size: "xs"
  }, colorId))))))));
}

/***/ }),

/***/ "./public/lib/network_options.ts":
/*!***************************************!*\
  !*** ./public/lib/network_options.ts ***!
  \***************************************/
/*! exports provided: NetworkOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkOptions", function() { return NetworkOptions; });
/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class NetworkOptions {
  constructor(data) {
    this.data = data;
  }

  getEdgeArrowsConfig(visParams) {
    switch (visParams.posArrow) {
      case 'from':
        return {
          from: {
            enabled: visParams.displayArrow,
            scaleFactor: visParams.scaleArrow,
            type: visParams.shapeArrow
          }
        };

      case 'middle':
        return {
          middle: {
            enabled: visParams.displayArrow,
            scaleFactor: visParams.scaleArrow,
            type: visParams.shapeArrow
          }
        };

      case 'to':
        return {
          to: {
            enabled: visParams.displayArrow,
            scaleFactor: visParams.scaleArrow,
            type: visParams.shapeArrow
          }
        };

      default:
        return {
          from: {
            enabled: visParams.displayArrow,
            scaleFactor: visParams.scaleArrow,
            type: visParams.shapeArrow
          }
        };
    }
  }

  from(visParams) {
    return {
      autoResize: true,
      width: '100%',
      height: '100%',
      physics: {
        barnesHut: {
          gravitationalConstant: visParams.gravitationalConstant,
          springConstant: visParams.springConstant
        }
      },
      edges: {
        arrowStrikethrough: false,
        smooth: {
          type: visParams.smoothType
        },
        scaling: {
          min: visParams.minEdgeSize,
          max: visParams.maxEdgeSize
        },
        arrows: this.getEdgeArrowsConfig(visParams)
      },
      nodes: {
        physics: visParams.nodePhysics,
        scaling: {
          min: visParams.minNodeSize,
          max: visParams.maxNodeSize
        }
      },
      layout: {
        improvedLayout: !(this.data.edges.length > 200)
      },
      interaction: {
        hover: true,
        tooltipDelay: 50
      },
      manipulation: {
        enabled: true
      }
    };
  }

}

/***/ })

}]);
//# sourceMappingURL=kbnNetwork.chunk.0.js.map