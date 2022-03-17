/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"kbnNetwork": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "kbnNetwork.chunk." + chunkId + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["kbnNetwork_bundle_jsonpfunction"] = window["kbnNetwork_bundle_jsonpfunction"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../node_modules/@kbn/optimizer/target_node/worker/entry_point_creator.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!******************************************************************************************************************!*\
  !*** delegated ./node_modules/@babel/runtime/helpers/defineProperty.js from dll-reference __kbnSharedDeps_npm__ ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference __kbnSharedDeps_npm__ */ "dll-reference __kbnSharedDeps_npm__"))(1064);

/***/ }),

/***/ "../../node_modules/@kbn/optimizer/target_node/worker/entry_point_creator.js":
/*!***********************************************************************************************************************************************!*\
  !*** /home/hawk/development/hawk/7.16.2/infrastructure/hawk_dev/kibana/node_modules/@kbn/optimizer/target_node/worker/entry_point_creator.js ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../../../../../../../../../.cache/bazel/_bazel_hawk/43445bbdc1cf00191adf979420996538/execroot/kibana/node_modules/val-loader/dist/cjs.js?key=kbnNetwork!../../../../../../../../../../../.cache/bazel/_bazel_hawk/43445bbdc1cf00191adf979420996538/execroot/kibana/bazel-out/k8-fastbuild/bin/packages/kbn-ui-shared-deps-npm/target_node/public_path_module_creator.js */ "../../node_modules/val-loader/dist/cjs.js?key=kbnNetwork!../../../../../../../../.cache/bazel/_bazel_hawk/43445bbdc1cf00191adf979420996538/execroot/kibana/bazel-out/k8-fastbuild/bin/packages/kbn-ui-shared-deps-npm/target_node/public_path_module_creator.js");__kbnBundles__.define('plugin/kbnNetwork/public', __webpack_require__, /*require.resolve*/(/*! ../../../../../plugins/kbn_network/public */ "./public/index.ts"))

/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/index.scss?v8dark":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/hawk/development/hawk/7.16.2/infrastructure/hawk_dev/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/hawk/development/hawk/7.16.2/infrastructure/hawk_dev/kibana/node_modules/postcss-loader/src??ref--6-oneOf-0-2!/home/hawk/development/hawk/7.16.2/infrastructure/hawk_dev/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./public/index.scss?v8dark ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n/*\n * Creates the Amsterdam style of button with a transparent background\n */\n/*\n * Creates the Amsterdam style of fill button\n */\n.embPanel__content[data-error], .embPanel__content[data-loading] {\n  pointer-events: all !important;\n  filter: none !important; }\n\n.network-vis {\n  width: 100%;\n  height: 100%; }\n\ndiv.vis-tooltip {\n  position: absolute;\n  visibility: hidden;\n  padding: 5px;\n  white-space: nowrap;\n  font-size: 14px;\n  color: #ecf0f1;\n  background-color: rgba(34, 34, 34, 0.93);\n  border-radius: 3px;\n  border: 1px solid #808074;\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);\n  pointer-events: none; }\n\n#errorHtml h1 {\n  color: white;\n  text-align: center;\n  background-color: red; }\n\n.loading_msg {\n  height: 50px;\n  width: 150px;\n  color: #FFFFFF;\n  background-color: #006BB4;\n  text-align: center;\n  line-height: 40px; }\n", "",{"version":3,"sources":["index.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;;EAEE;AACF;;EAEE;AACF;EACE,8BAA8B;EAC9B,uBAAuB,EAAE;;AAE3B;EACE,WAAW;EACX,YAAY,EAAE;;AAEhB;EACE,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,wCAAwC;EAGxC,kBAAkB;EAClB,yBAAyB;EACzB,2CAA2C;EAC3C,oBAAoB,EAAE;;AAExB;EACE,YAAY;EACZ,kBAAkB;EAClB,qBAAqB,EAAE;;AAEzB;EACE,YAAY;EACZ,YAAY;EACZ,cAAc;EACd,yBAAyB;EACzB,kBAAkB;EAClB,iBAAiB,EAAE","file":"index.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n/*\n * Creates the Amsterdam style of button with a transparent background\n */\n/*\n * Creates the Amsterdam style of fill button\n */\n.embPanel__content[data-error], .embPanel__content[data-loading] {\n  pointer-events: all !important;\n  filter: none !important; }\n\n.network-vis {\n  width: 100%;\n  height: 100%; }\n\ndiv.vis-tooltip {\n  position: absolute;\n  visibility: hidden;\n  padding: 5px;\n  white-space: nowrap;\n  font-size: 14px;\n  color: #ecf0f1;\n  background-color: rgba(34, 34, 34, 0.93);\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n  border-radius: 3px;\n  border: 1px solid #808074;\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);\n  pointer-events: none; }\n\n#errorHtml h1 {\n  color: white;\n  text-align: center;\n  background-color: red; }\n\n.loading_msg {\n  height: 50px;\n  width: 150px;\n  color: #FFFFFF;\n  background-color: #006BB4;\n  text-align: center;\n  line-height: 40px; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/index.scss?v8light":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/hawk/development/hawk/7.16.2/infrastructure/hawk_dev/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/hawk/development/hawk/7.16.2/infrastructure/hawk_dev/kibana/node_modules/postcss-loader/src??ref--6-oneOf-1-2!/home/hawk/development/hawk/7.16.2/infrastructure/hawk_dev/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./public/index.scss?v8light ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n/*\n * Creates the Amsterdam style of button with a transparent background\n */\n/*\n * Creates the Amsterdam style of fill button\n */\n.embPanel__content[data-error], .embPanel__content[data-loading] {\n  pointer-events: all !important;\n  filter: none !important; }\n\n.network-vis {\n  width: 100%;\n  height: 100%; }\n\ndiv.vis-tooltip {\n  position: absolute;\n  visibility: hidden;\n  padding: 5px;\n  white-space: nowrap;\n  font-size: 14px;\n  color: #ecf0f1;\n  background-color: rgba(34, 34, 34, 0.93);\n  border-radius: 3px;\n  border: 1px solid #808074;\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);\n  pointer-events: none; }\n\n#errorHtml h1 {\n  color: white;\n  text-align: center;\n  background-color: red; }\n\n.loading_msg {\n  height: 50px;\n  width: 150px;\n  color: #FFFFFF;\n  background-color: #006BB4;\n  text-align: center;\n  line-height: 40px; }\n", "",{"version":3,"sources":["index.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;;EAEE;AACF;;EAEE;AACF;EACE,8BAA8B;EAC9B,uBAAuB,EAAE;;AAE3B;EACE,WAAW;EACX,YAAY,EAAE;;AAEhB;EACE,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,wCAAwC;EAGxC,kBAAkB;EAClB,yBAAyB;EACzB,2CAA2C;EAC3C,oBAAoB,EAAE;;AAExB;EACE,YAAY;EACZ,kBAAkB;EAClB,qBAAqB,EAAE;;AAEzB;EACE,YAAY;EACZ,YAAY;EACZ,cAAc;EACd,yBAAyB;EACzB,kBAAkB;EAClB,iBAAiB,EAAE","file":"index.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n/*\n * Creates the Amsterdam style of button with a transparent background\n */\n/*\n * Creates the Amsterdam style of fill button\n */\n.embPanel__content[data-error], .embPanel__content[data-loading] {\n  pointer-events: all !important;\n  filter: none !important; }\n\n.network-vis {\n  width: 100%;\n  height: 100%; }\n\ndiv.vis-tooltip {\n  position: absolute;\n  visibility: hidden;\n  padding: 5px;\n  white-space: nowrap;\n  font-size: 14px;\n  color: #ecf0f1;\n  background-color: rgba(34, 34, 34, 0.93);\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n  border-radius: 3px;\n  border: 1px solid #808074;\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);\n  pointer-events: none; }\n\n#errorHtml h1 {\n  color: white;\n  text-align: center;\n  background-color: red; }\n\n.loading_msg {\n  height: 50px;\n  width: 150px;\n  color: #FFFFFF;\n  background-color: #006BB4;\n  text-align: center;\n  line-height: 40px; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************************************************************************!*\
  !*** /home/hawk/development/hawk/7.16.2/infrastructure/hawk_dev/kibana/node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************************************************************************!*\
  !*** /home/hawk/development/hawk/7.16.2/infrastructure/hawk_dev/kibana/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../../node_modules/val-loader/dist/cjs.js?key=kbnNetwork!../../../../../../../../.cache/bazel/_bazel_hawk/43445bbdc1cf00191adf979420996538/execroot/kibana/bazel-out/k8-fastbuild/bin/packages/kbn-ui-shared-deps-npm/target_node/public_path_module_creator.js":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/hawk/development/hawk/7.16.2/infrastructure/hawk_dev/kibana/node_modules/val-loader/dist/cjs.js?key=kbnNetwork!/home/hawk/.cache/bazel/_bazel_hawk/43445bbdc1cf00191adf979420996538/execroot/kibana/bazel-out/k8-fastbuild/bin/packages/kbn-ui-shared-deps-npm/target_node/public_path_module_creator.js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__kbnPublicPath__['kbnNetwork']

/***/ }),

/***/ "../../node_modules/webpack/buildin/module.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/webpack/buildin/module.js from dll-reference __kbnSharedDeps_npm__ ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference __kbnSharedDeps_npm__ */ "dll-reference __kbnSharedDeps_npm__"))(398);

/***/ }),

/***/ "./node_modules/randomcolor/randomColor.js":
/*!*************************************************!*\
  !*** ./node_modules/randomcolor/randomColor.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {// randomColor by David Merfield under the CC0 license
// https://github.com/davidmerfield/randomColor/

;(function(root, factory) {

  // Support CommonJS
  if (true) {
    var randomColor = factory();

    // Support NodeJS & Component, which allow module.exports to be a function
    if ( true && module && module.exports) {
      exports = module.exports = randomColor;
    }

    // Support CommonJS 1.1.1 spec
    exports.randomColor = randomColor;

  // Support AMD
  } else {}

}(this, function() {

  // Seed to get repeatable colors
  var seed = null;

  // Shared color dictionary
  var colorDictionary = {};

  // Populate the color dictionary
  loadColorBounds();

  // check if a range is taken
  var colorRanges = [];

  var randomColor = function (options) {

    options = options || {};

    // Check if there is a seed and ensure it's an
    // integer. Otherwise, reset the seed value.
    if (options.seed !== undefined && options.seed !== null && options.seed === parseInt(options.seed, 10)) {
      seed = options.seed;

    // A string was passed as a seed
    } else if (typeof options.seed === 'string') {
      seed = stringToInteger(options.seed);

    // Something was passed as a seed but it wasn't an integer or string
    } else if (options.seed !== undefined && options.seed !== null) {
      throw new TypeError('The seed value must be an integer or string');

    // No seed, reset the value outside.
    } else {
      seed = null;
    }

    var H,S,B;

    // Check if we need to generate multiple colors
    if (options.count !== null && options.count !== undefined) {

      var totalColors = options.count,
          colors = [];
      // Value false at index i means the range i is not taken yet.
      for (var i = 0; i < options.count; i++) {
        colorRanges.push(false)
        }
      options.count = null;

      while (totalColors > colors.length) {

        var color = randomColor(options);

        if (seed !== null) {
          options.seed = seed;
        }

        colors.push(color);
      }

      options.count = totalColors;

      return colors;
    }

    // First we pick a hue (H)
    H = pickHue(options);

    // Then use H to determine saturation (S)
    S = pickSaturation(H, options);

    // Then use S and H to determine brightness (B).
    B = pickBrightness(H, S, options);

    // Then we return the HSB color in the desired format
    return setFormat([H,S,B], options);
  };

  function pickHue(options) {
    if (colorRanges.length > 0) {
      var hueRange = getRealHueRange(options.hue)

      var hue = randomWithin(hueRange)

      //Each of colorRanges.length ranges has a length equal approximatelly one step
      var step = (hueRange[1] - hueRange[0]) / colorRanges.length

      var j = parseInt((hue - hueRange[0]) / step)

      //Check if the range j is taken
      if (colorRanges[j] === true) {
        j = (j + 2) % colorRanges.length
      }
      else {
        colorRanges[j] = true
           }

      var min = (hueRange[0] + j * step) % 359,
          max = (hueRange[0] + (j + 1) * step) % 359;

      hueRange = [min, max]

      hue = randomWithin(hueRange)

      if (hue < 0) {hue = 360 + hue;}
      return hue
    }
    else {
      var hueRange = getHueRange(options.hue)

      hue = randomWithin(hueRange);
      // Instead of storing red as two seperate ranges,
      // we group them, using negative numbers
      if (hue < 0) {
        hue = 360 + hue;
      }

      return hue;
    }
  }

  function pickSaturation (hue, options) {

    if (options.hue === 'monochrome') {
      return 0;
    }

    if (options.luminosity === 'random') {
      return randomWithin([0,100]);
    }

    var saturationRange = getSaturationRange(hue);

    var sMin = saturationRange[0],
        sMax = saturationRange[1];

    switch (options.luminosity) {

      case 'bright':
        sMin = 55;
        break;

      case 'dark':
        sMin = sMax - 10;
        break;

      case 'light':
        sMax = 55;
        break;
   }

    return randomWithin([sMin, sMax]);

  }

  function pickBrightness (H, S, options) {

    var bMin = getMinimumBrightness(H, S),
        bMax = 100;

    switch (options.luminosity) {

      case 'dark':
        bMax = bMin + 20;
        break;

      case 'light':
        bMin = (bMax + bMin)/2;
        break;

      case 'random':
        bMin = 0;
        bMax = 100;
        break;
    }

    return randomWithin([bMin, bMax]);
  }

  function setFormat (hsv, options) {

    switch (options.format) {

      case 'hsvArray':
        return hsv;

      case 'hslArray':
        return HSVtoHSL(hsv);

      case 'hsl':
        var hsl = HSVtoHSL(hsv);
        return 'hsl('+hsl[0]+', '+hsl[1]+'%, '+hsl[2]+'%)';

      case 'hsla':
        var hslColor = HSVtoHSL(hsv);
        var alpha = options.alpha || Math.random();
        return 'hsla('+hslColor[0]+', '+hslColor[1]+'%, '+hslColor[2]+'%, ' + alpha + ')';

      case 'rgbArray':
        return HSVtoRGB(hsv);

      case 'rgb':
        var rgb = HSVtoRGB(hsv);
        return 'rgb(' + rgb.join(', ') + ')';

      case 'rgba':
        var rgbColor = HSVtoRGB(hsv);
        var alpha = options.alpha || Math.random();
        return 'rgba(' + rgbColor.join(', ') + ', ' + alpha + ')';

      default:
        return HSVtoHex(hsv);
    }

  }

  function getMinimumBrightness(H, S) {

    var lowerBounds = getColorInfo(H).lowerBounds;

    for (var i = 0; i < lowerBounds.length - 1; i++) {

      var s1 = lowerBounds[i][0],
          v1 = lowerBounds[i][1];

      var s2 = lowerBounds[i+1][0],
          v2 = lowerBounds[i+1][1];

      if (S >= s1 && S <= s2) {

         var m = (v2 - v1)/(s2 - s1),
             b = v1 - m*s1;

         return m*S + b;
      }

    }

    return 0;
  }

  function getHueRange (colorInput) {

    if (typeof parseInt(colorInput) === 'number') {

      var number = parseInt(colorInput);

      if (number < 360 && number > 0) {
        return [number, number];
      }

    }

    if (typeof colorInput === 'string') {

      if (colorDictionary[colorInput]) {
        var color = colorDictionary[colorInput];
        if (color.hueRange) {return color.hueRange;}
      } else if (colorInput.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
        var hue = HexToHSB(colorInput)[0];
        return [ hue, hue ];
      }
    }

    return [0,360];

  }

  function getSaturationRange (hue) {
    return getColorInfo(hue).saturationRange;
  }

  function getColorInfo (hue) {

    // Maps red colors to make picking hue easier
    if (hue >= 334 && hue <= 360) {
      hue-= 360;
    }

    for (var colorName in colorDictionary) {
       var color = colorDictionary[colorName];
       if (color.hueRange &&
           hue >= color.hueRange[0] &&
           hue <= color.hueRange[1]) {
          return colorDictionary[colorName];
       }
    } return 'Color not found';
  }

  function randomWithin (range) {
    if (seed === null) {
      //generate random evenly destinct number from : https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
      var golden_ratio = 0.618033988749895
      var r=Math.random()
      r += golden_ratio
      r %= 1
      return Math.floor(range[0] + r*(range[1] + 1 - range[0]));
    } else {
      //Seeded random algorithm from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
      var max = range[1] || 1;
      var min = range[0] || 0;
      seed = (seed * 9301 + 49297) % 233280;
      var rnd = seed / 233280.0;
      return Math.floor(min + rnd * (max - min));
}
  }

  function HSVtoHex (hsv){

    var rgb = HSVtoRGB(hsv);

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? '0' + hex : hex;
    }

    var hex = '#' + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);

    return hex;

  }

  function defineColor (name, hueRange, lowerBounds) {

    var sMin = lowerBounds[0][0],
        sMax = lowerBounds[lowerBounds.length - 1][0],

        bMin = lowerBounds[lowerBounds.length - 1][1],
        bMax = lowerBounds[0][1];

    colorDictionary[name] = {
      hueRange: hueRange,
      lowerBounds: lowerBounds,
      saturationRange: [sMin, sMax],
      brightnessRange: [bMin, bMax]
    };

  }

  function loadColorBounds () {

    defineColor(
      'monochrome',
      null,
      [[0,0],[100,0]]
    );

    defineColor(
      'red',
      [-26,18],
      [[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]
    );

    defineColor(
      'orange',
      [18,46],
      [[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]
    );

    defineColor(
      'yellow',
      [46,62],
      [[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]
    );

    defineColor(
      'green',
      [62,178],
      [[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]
    );

    defineColor(
      'blue',
      [178, 257],
      [[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]
    );

    defineColor(
      'purple',
      [257, 282],
      [[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]
    );

    defineColor(
      'pink',
      [282, 334],
      [[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]
    );

  }

  function HSVtoRGB (hsv) {

    // this doesn't work for the values of 0 and 360
    // here's the hacky fix
    var h = hsv[0];
    if (h === 0) {h = 1;}
    if (h === 360) {h = 359;}

    // Rebase the h,s,v values
    h = h/360;
    var s = hsv[1]/100,
        v = hsv[2]/100;

    var h_i = Math.floor(h*6),
      f = h * 6 - h_i,
      p = v * (1 - s),
      q = v * (1 - f*s),
      t = v * (1 - (1 - f)*s),
      r = 256,
      g = 256,
      b = 256;

    switch(h_i) {
      case 0: r = v; g = t; b = p;  break;
      case 1: r = q; g = v; b = p;  break;
      case 2: r = p; g = v; b = t;  break;
      case 3: r = p; g = q; b = v;  break;
      case 4: r = t; g = p; b = v;  break;
      case 5: r = v; g = p; b = q;  break;
    }

    var result = [Math.floor(r*255), Math.floor(g*255), Math.floor(b*255)];
    return result;
  }

  function HexToHSB (hex) {
    hex = hex.replace(/^#/, '');
    hex = hex.length === 3 ? hex.replace(/(.)/g, '$1$1') : hex;

    var red = parseInt(hex.substr(0, 2), 16) / 255,
          green = parseInt(hex.substr(2, 2), 16) / 255,
          blue = parseInt(hex.substr(4, 2), 16) / 255;

    var cMax = Math.max(red, green, blue),
          delta = cMax - Math.min(red, green, blue),
          saturation = cMax ? (delta / cMax) : 0;

    switch (cMax) {
      case red: return [ 60 * (((green - blue) / delta) % 6) || 0, saturation, cMax ];
      case green: return [ 60 * (((blue - red) / delta) + 2) || 0, saturation, cMax ];
      case blue: return [ 60 * (((red - green) / delta) + 4) || 0, saturation, cMax ];
    }
  }

  function HSVtoHSL (hsv) {
    var h = hsv[0],
      s = hsv[1]/100,
      v = hsv[2]/100,
      k = (2-s)*v;

    return [
      h,
      Math.round(s*v / (k<1 ? k : 2-k) * 10000) / 100,
      k/2 * 100
    ];
  }

  function stringToInteger (string) {
    var total = 0
    for (var i = 0; i !== string.length; i++) {
      if (total >= Number.MAX_SAFE_INTEGER) break;
      total += string.charCodeAt(i)
    }
    return total
  }

  // get The range of given hue when options.count!=0
  function getRealHueRange(colorHue)
  { if (!isNaN(colorHue)) {
    var number = parseInt(colorHue);

    if (number < 360 && number > 0) {
      return getColorInfo(colorHue).hueRange
    }
  }
    else if (typeof colorHue === 'string') {

      if (colorDictionary[colorHue]) {
        var color = colorDictionary[colorHue];

        if (color.hueRange) {
          return color.hueRange
       }
    } else if (colorHue.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
        var hue = HexToHSB(colorHue)[0]
        return getColorInfo(hue).hueRange
    }
  }

    return [0,360]
}
  return randomColor;
}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./public/components/editor/color_section.tsx":
/*!****************************************************!*\
  !*** ./public/components/editor/color_section.tsx ***!
  \****************************************************/
/*! exports provided: ColorSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorSection", function() { return ColorSection; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
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




function ColorSection({
  stateParams,
  setValue
}) {
  const [firstNodeColor, setFirstNodeColor, firstNodeColorErrors] = Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["useColorPickerState"])(stateParams.firstNodeColor);
  const [secondNodeColor, setSecondNodeColor, secondNodeColorErrors] = Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["useColorPickerState"])(stateParams.secondNodeColor);
  const [labelColor, setLabelColor, labelColorErrors] = Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["useColorPickerState"])(stateParams.labelColor);
  const [edgeColor, setEdgeColor, edgeColorErrors] = Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["useColorPickerState"])(stateParams.edgeColor);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setValue('firstNodeColor', firstNodeColor);
  }, [firstNodeColor, setValue]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setValue('secondNodeColor', secondNodeColor);
  }, [secondNodeColor, setValue]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setValue('labelColor', labelColor);
  }, [labelColor, setValue]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setValue('edgeColor', edgeColor);
  }, [edgeColor, setValue]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiPanel"], {
    paddingSize: "s"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiTitle"], {
    size: "xs"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h3", null, _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeKbnNetwork.params.colorOptionsSection', {
    defaultMessage: 'Color options'
  }))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSpacer"], {
    size: "m"
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiForm"], null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFormRow"], {
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeKbnNetwork.params.firstNodeColor', {
      defaultMessage: 'First node color'
    })
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiColorPicker"], {
    onChange: setFirstNodeColor,
    color: firstNodeColor,
    isInvalid: !!firstNodeColorErrors
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFormRow"], {
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeKbnNetwork.params.secondNodeColor', {
      defaultMessage: 'Second node color'
    })
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiColorPicker"], {
    onChange: setSecondNodeColor,
    color: secondNodeColor,
    isInvalid: !!secondNodeColorErrors
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFormRow"], {
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeKbnNetwork.params.labelColor', {
      defaultMessage: 'Label color'
    })
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiColorPicker"], {
    onChange: setLabelColor,
    color: labelColor,
    isInvalid: !!labelColorErrors
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFormRow"], {
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeKbnNetwork.params.edgeColor', {
      defaultMessage: 'Edge color'
    })
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiColorPicker"], {
    onChange: setEdgeColor,
    color: edgeColor,
    isInvalid: !!edgeColorErrors
  }))));
}

/***/ }),

/***/ "./public/components/editor/directional_edges_section.tsx":
/*!****************************************************************!*\
  !*** ./public/components/editor/directional_edges_section.tsx ***!
  \****************************************************************/
/*! exports provided: DirectionalEdgesSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionalEdgesSection", function() { return DirectionalEdgesSection; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
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




function DirectionalEdgesSection({
  stateParams,
  setValue
}) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiPanel"], {
    paddingSize: "s"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiTitle"], {
    size: "xs"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h3", null, _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeKbnNetwork.params.directionalEdgesSection', {
    defaultMessage: 'Directional edges'
  }))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSpacer"], {
    size: "m"
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiForm"], null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFormRow"], null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSwitch"], {
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeKbnNetwork.params.displayArrow', {
      defaultMessage: 'Display directional edge'
    }),
    checked: stateParams.displayArrow,
    onChange: e => setValue('displayArrow', e.target.checked)
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFormRow"], {
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeKbnNetwork.params.posArrow', {
      defaultMessage: 'Endpoint position'
    })
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSelect"], {
    value: stateParams.posArrow,
    options: [{
      text: 'End Side',
      value: 'to'
    }, {
      text: 'Beginning',
      value: 'from'
    }, {
      text: 'Middle',
      value: 'middle'
    }],
    onChange: e => setValue('posArrow', e.target.value)
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFormRow"], {
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeKbnNetwork.params.shapeArrow', {
      defaultMessage: 'Endpoint type'
    })
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSelect"], {
    value: stateParams.shapeArrow,
    options: [{
      text: 'Arrow',
      value: 'arrow'
    }, {
      text: 'Circle',
      value: 'circle'
    }],
    onChange: e => setValue('shapeArrow', e.target.value)
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFormRow"], {
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeKbnNetwork.params.scaleArrow', {
      defaultMessage: 'Scale factor'
    })
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFieldNumber"], {
    value: stateParams.scaleArrow,
    onChange: e => setValue('scaleArrow', e.target.value)
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFormRow"], {
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeKbnNetwork.params.shapeArrow', {
      defaultMessage: 'Endpoint type'
    })
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSelect"], {
    value: stateParams.smoothType,
    options: [{
      text: 'Dynamic',
      value: 'dynamic'
    }, {
      text: 'Continuous Anchor',
      value: 'continuous'
    }, {
      text: 'Discrete Anchor',
      value: 'discrete'
    }, {
      text: 'Diagonal Anchor',
      value: 'diagonalCross'
    }, {
      text: 'Straight Line',
      value: 'straightCross'
    }, {
      text: 'Horizontal Anchor',
      value: 'horizontal'
    }, {
      text: 'Vertical Anchor',
      value: 'vertical'
    }, {
      text: 'Clock-wise Curve',
      value: 'curvedCW'
    }, {
      text: 'Counter-Clock-wise Curve',
      value: 'curvedCCW'
    }, {
      text: 'Cubic Bezier',
      value: 'cubicBezier'
    }],
    onChange: e => setValue('smoothType', e.target.value)
  }))));
}

/***/ }),

/***/ "./public/components/editor/extra_section.tsx":
/*!****************************************************!*\
  !*** ./public/components/editor/extra_section.tsx ***!
  \****************************************************/
/*! exports provided: ExtraSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraSection", function() { return ExtraSection; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
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




function ExtraSection({
  stateParams,
  setValue
}) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiPanel"], {
    paddingSize: "s"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiTitle"], {
    size: "xs"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h3", null, _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeKbnNetwork.params.extraSection', {
    defaultMessage: 'Extra'
  }))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSpacer"], {
    size: "m"
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiForm"], null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFormRow"], null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSwitch"], {
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeKbnNetwork.params.showLabels', {
      defaultMessage: 'Show Labels'
    }),
    checked: stateParams.showLabels,
    onChange: e => setValue('showLabels', e.target.checked)
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFormRow"], null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSwitch"], {
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeKbnNetwork.params.showPopup', {
      defaultMessage: 'Show Popup'
    }),
    checked: stateParams.showPopup,
    onChange: e => setValue('showPopup', e.target.checked)
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFormRow"], null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSwitch"], {
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeKbnNetwork.params.showColorLegend', {
      defaultMessage: 'Show Color Legend (Node Color selected)'
    }),
    checked: stateParams.showColorLegend,
    onChange: e => setValue('showColorLegend', e.target.checked)
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFormRow"], null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSwitch"], {
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeKbnNetwork.params.nodePhysics', {
      defaultMessage: 'Node Acting like Springs'
    }),
    checked: stateParams.nodePhysics,
    onChange: e => setValue('nodePhysics', e.target.checked)
  }))));
}

/***/ }),

/***/ "./public/components/editor/kbn_network_vis_options.tsx":
/*!**************************************************************!*\
  !*** ./public/components/editor/kbn_network_vis_options.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KbnNetworkOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _color_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color_section */ "./public/components/editor/color_section.tsx");
/* harmony import */ var _directional_edges_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directional_edges_section */ "./public/components/editor/directional_edges_section.tsx");
/* harmony import */ var _size_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./size_section */ "./public/components/editor/size_section.tsx");
/* harmony import */ var _node_shape_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_shape_section */ "./public/components/editor/node_shape_section.tsx");
/* harmony import */ var _extra_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extra_section */ "./public/components/editor/extra_section.tsx");
/* harmony import */ var _network_constants_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./network_constants_section */ "./public/components/editor/network_constants_section.tsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_8__);
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










function KbnNetworkOptions(props) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
    className: "kbn-network-vis-params"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_color_section__WEBPACK_IMPORTED_MODULE_2__["ColorSection"], props), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], null), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_size_section__WEBPACK_IMPORTED_MODULE_4__["SizeSection"], props), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], null), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_node_shape_section__WEBPACK_IMPORTED_MODULE_5__["NodeShapeSection"], props), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], null), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_directional_edges_section__WEBPACK_IMPORTED_MODULE_3__["DirectionalEdgesSection"], props), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], null), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_extra_section__WEBPACK_IMPORTED_MODULE_6__["ExtraSection"], props), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], null), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_network_constants_section__WEBPACK_IMPORTED_MODULE_7__["NetworkConstantsSection"], props));
} // default export required for React.Lazy
// eslint-disable-next-line import/no-default-export




/***/ }),

/***/ "./public/components/editor/network_constants_section.tsx":
/*!****************************************************************!*\
  !*** ./public/components/editor/network_constants_section.tsx ***!
  \****************************************************************/
/*! exports provided: NetworkConstantsSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkConstantsSection", function() { return NetworkConstantsSection; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
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




function NetworkConstantsSection({
  stateParams,
  setValue
}) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiPanel"], {
    paddingSize: "s"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiTitle"], {
    size: "xs"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h3", null, _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeKbnNetwork.params.networkConstantsSection', {
    defaultMessage: 'Network constants'
  }))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSpacer"], {
    size: "m"
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiForm"], null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFormRow"], {
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeKbnNetwork.params.gravitationalConstant', {
      defaultMessage: 'Attraction Force'
    })
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFieldNumber"], {
    value: stateParams.gravitationalConstant,
    onChange: e => setValue('gravitationalConstant', e.target.value)
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFormRow"], {
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeKbnNetwork.params.springConstant', {
      defaultMessage: 'Spring Force'
    })
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFieldNumber"], {
    value: stateParams.springConstant,
    onChange: e => setValue('springConstant', e.target.value)
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFormRow"], {
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeKbnNetwork.params.minCutMetricSizeNode', {
      defaultMessage: 'Hide nodes under size'
    })
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFieldNumber"], {
    value: stateParams.minCutMetricSizeNode,
    onChange: e => setValue('minCutMetricSizeNode', e.target.value)
  }))));
}

/***/ }),

/***/ "./public/components/editor/node_shape_section.tsx":
/*!*********************************************************!*\
  !*** ./public/components/editor/node_shape_section.tsx ***!
  \*********************************************************/
/*! exports provided: NodeShapeSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeShapeSection", function() { return NodeShapeSection; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_network_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/network_data */ "./public/lib/network_data.ts");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_5__);
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






const options = _lib_network_data__WEBPACK_IMPORTED_MODULE_4__["nodeShapes"].map(nodeShape => ({
  value: nodeShape,
  text: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.capitalize(nodeShape)
}));
function NodeShapeSection({
  stateParams,
  setValue
}) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], {
    paddingSize: "s"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "xs"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h3", null, _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeKbnNetwork.params.nodeShapeSection', {
    defaultMessage: 'Node shape'
  }))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "m"
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiForm"], null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeKbnNetwork.params.shapeFirtNode', {
      defaultMessage: 'First nodes shape'
    })
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSelect"], {
    options: options,
    value: stateParams.shapeFirstNode,
    onChange: e => setValue('shapeFirstNode', e.target.value),
    "aria-label": "Set the shape of the primary node"
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeKbnNetwork.params.shapeSecondNode', {
      defaultMessage: 'Second nodes shape'
    })
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSelect"], {
    options: options,
    value: stateParams.shapeSecondNode,
    onChange: e => setValue('shapeSecondNode', e.target.value),
    "aria-label": "Set the shape of the secondary node"
  }))));
}

/***/ }),

/***/ "./public/components/editor/size_section.tsx":
/*!***************************************************!*\
  !*** ./public/components/editor/size_section.tsx ***!
  \***************************************************/
/*! exports provided: SizeSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeSection", function() { return SizeSection; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
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




function SizeSection({
  stateParams,
  setValue
}) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiPanel"], {
    paddingSize: "s"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiTitle"], {
    size: "xs"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h3", null, _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeKbnNetwork.params.sizeSection', {
    defaultMessage: 'Size'
  }))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSpacer"], {
    size: "m"
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiForm"], null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFormRow"], {
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeTable.params.maxNodeSize', {
      defaultMessage: 'Max node size'
    })
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFieldNumber"], {
    value: stateParams.maxNodeSize,
    onChange: e => setValue('maxNodeSize', e.target.value),
    "aria-label": "Set the max node size"
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFormRow"], {
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeTable.params.minNodeSize', {
      defaultMessage: 'Min node size'
    })
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFieldNumber"], {
    value: stateParams.minNodeSize,
    onChange: e => setValue('minNodeSize', e.target.value),
    "aria-label": "Set the min node size"
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFormRow"], {
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeTable.params.maxEdgeSize', {
      defaultMessage: 'Max edge size'
    })
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFieldNumber"], {
    value: stateParams.maxEdgeSize,
    onChange: e => setValue('maxEdgeSize', e.target.value),
    "aria-label": "Set the max edge size"
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFormRow"], {
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeTable.params.minEdgeSize', {
      defaultMessage: 'Min edge size'
    })
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFieldNumber"], {
    value: stateParams.minEdgeSize,
    onChange: e => setValue('minEdgeSize', e.target.value),
    "aria-label": "Set the min edge size"
  }))));
}

/***/ }),

/***/ "./public/images/icon-network.svg":
/*!****************************************!*\
  !*** ./public/images/icon-network.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgd2lkdGg9IjY4cHgiIGhlaWdodD0iNTdweCIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMSA1MTEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMSA1MTE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGQ9Ik00NzEuNSwxNjhjLTEyLjUxOSwwLTIyLjc4LDkuODQtMjMuNDYyLDIyLjE5MmwtMTczLjE2LDQ3Ljc2OEMyNjguNDA2LDIyNC45NTksMjU0Ljk4MywyMTYsMjM5LjUsMjE2DQoJYy0wLjYwNiwwLTEuMjA4LDAuMDE5LTEuODA4LDAuMDQ2TDE5Ni4wMTMsNDMuMzc3QzIwMi42MDgsMzkuMjEsMjA3LDMxLjg2MSwyMDcsMjMuNUMyMDcsMTAuNTQyLDE5Ni40NTgsMCwxODMuNSwwDQoJUzE2MCwxMC41NDIsMTYwLDIzLjVjMCwxMi4yNjEsOS40NDEsMjIuMzU0LDIxLjQzNCwyMy40MDRsNDEuNjc5LDE3Mi42N2MtOS41Niw0LjM3OC0xNy4wODcsMTIuNDUzLTIwLjcyNCwyMi4zOTNMNjIuNjczLDIxOS42MTINCglDNjAuODE0LDIwOC40OTksNTEuMTMzLDIwMCwzOS41LDIwMEMyNi41NDIsMjAwLDE2LDIxMC41NDIsMTYsMjIzLjVTMjYuNTQyLDI0NywzOS41LDI0N2M5LjAxNiwwLDE2Ljg1OC01LjEwNywyMC43OTgtMTIuNTc3DQoJbDEzOS43MzUsMjIuMzU3YzAuMjk5LDkuMzA5LDMuODMsMTcuODEsOS41MSwyNC40MjFMNjMuNDYyLDQ2NS4zOTFDNjAuOTc0LDQ2NC40OTIsNTguMjk0LDQ2NCw1NS41LDQ2NA0KCUM0Mi41NDIsNDY0LDMyLDQ3NC41NDIsMzIsNDg3LjVTNDIuNTQyLDUxMSw1NS41LDUxMVM3OSw1MDAuNDU4LDc5LDQ4Ny41YzAtNC43MS0xLjM5OC05LjA5Ny0zLjc5My0xMi43NzhsMTQ2LjA4MS0xODQuMTg5DQoJQzIyNi43NDIsMjkzLjM4LDIzMi45MzQsMjk1LDIzOS41LDI5NWM2LjExNywwLDExLjkxMy0xLjM5OCwxNy4wODYtMy44OTFjMC4xNiwwLjI5LDAuMzMzLDAuNTc1LDAuNTM1LDAuODQ5TDM1Ni4yNCw0MjYuMDYNCgljLTIuNjY4LDMuODEyLTQuMjQsOC40NDUtNC4yNCwxMy40NGMwLDEyLjk1OCwxMC41NDIsMjMuNSwyMy41LDIzLjVzMjMuNS0xMC41NDIsMjMuNS0yMy41UzM4OC40NTgsNDE2LDM3NS41LDQxNg0KCWMtMi41MTMsMC00LjkzMywwLjQwMS03LjIwNSwxLjEzNGwtOTkuMTEyLTEzNC4wOTJjLTAuMjA2LTAuMjc5LTAuNDMzLTAuNTMzLTAuNjY5LTAuNzc1QzI3NS4wMTgsMjc1LjIyNCwyNzksMjY1LjgyLDI3OSwyNTUuNQ0KCWMwLTEuMDM4LTAuMDUzLTIuMDYyLTAuMTMyLTMuMDhsMTczLjE2NS00Ny43N0M0NTYuMjYyLDIxMC44OTEsNDYzLjQxLDIxNSw0NzEuNSwyMTVjMTIuOTU4LDAsMjMuNS0xMC41NDIsMjMuNS0yMy41DQoJUzQ4NC40NTgsMTY4LDQ3MS41LDE2OHogTTE3NSwyMy41YzAtNC42ODcsMy44MTMtOC41LDguNS04LjVzOC41LDMuODEzLDguNSw4LjVzLTMuODEzLDguNS04LjUsOC41UzE3NSwyOC4xODcsMTc1LDIzLjV6DQoJIE0zODQsNDM5LjVjMCw0LjY4Ny0zLjgxMyw4LjUtOC41LDguNXMtOC41LTMuODEzLTguNS04LjVzMy44MTMtOC41LDguNS04LjVTMzg0LDQzNC44MTMsMzg0LDQzOS41eiBNMzkuNSwyMzINCgljLTQuNjg3LDAtOC41LTMuODEzLTguNS04LjVzMy44MTMtOC41LDguNS04LjVzOC41LDMuODEzLDguNSw4LjVTNDQuMTg3LDIzMiwzOS41LDIzMnogTTU1LjUsNDk2Yy00LjY4NywwLTguNS0zLjgxMy04LjUtOC41DQoJczMuODEzLTguNSw4LjUtOC41czguNSwzLjgxMyw4LjUsOC41UzYwLjE4Nyw0OTYsNTUuNSw0OTZ6IE0yMTUsMjU1LjVjMC0xMy41MDksMTAuOTkxLTI0LjUsMjQuNS0yNC41czI0LjUsMTAuOTkxLDI0LjUsMjQuNQ0KCVMyNTMuMDA5LDI4MCwyMzkuNSwyODBTMjE1LDI2OS4wMDksMjE1LDI1NS41eiBNNDcxLjUsMjAwYy00LjY4NywwLTguNS0zLjgxMy04LjUtOC41czMuODEzLTguNSw4LjUtOC41czguNSwzLjgxMyw4LjUsOC41DQoJUzQ3Ni4xODcsMjAwLDQ3MS41LDIwMHoiIGZpbGw9IiMwMzdENzMiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./public/index.scss":
/*!***************************!*\
  !*** ./public/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__kbnThemeTag__) {
  case 'v7dark':
    console.error(new Error("SASS files in [kbnNetwork] were not built for theme [v7dark]. Styles were compiled using the [v8dark] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7dark] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./index.scss?v8dark */ "./public/index.scss?v8dark")

  case 'v7light':
    console.error(new Error("SASS files in [kbnNetwork] were not built for theme [v7light]. Styles were compiled using the [v8light] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7light] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./index.scss?v8light */ "./public/index.scss?v8light")

  case 'v8dark':
    return __webpack_require__(/*! ./index.scss?v8dark */ "./public/index.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./index.scss?v8light */ "./public/index.scss?v8light");
}

/***/ }),

/***/ "./public/index.scss?v8dark":
/*!**********************************!*\
  !*** ./public/index.scss?v8dark ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../node_modules/postcss-loader/src??ref--6-oneOf-0-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./index.scss?v8dark */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/index.scss?v8dark");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./public/index.scss?v8light":
/*!***********************************!*\
  !*** ./public/index.scss?v8light ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./index.scss?v8light */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/index.scss?v8light");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./public/index.ts":
/*!*************************!*\
  !*** ./public/index.ts ***!
  \*************************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./public/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


function plugin(initializerContext) {
  return new _plugin__WEBPACK_IMPORTED_MODULE_1__["KbnNetworkPlugin"](initializerContext);
}

/***/ }),

/***/ "./public/kbn_network_vis_fn.ts":
/*!**************************************!*\
  !*** ./public/kbn_network_vis_fn.ts ***!
  \**************************************/
/*! exports provided: createKbnNetworkVisFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createKbnNetworkVisFn", function() { return createKbnNetworkVisFn; });
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_plugins_visualizations_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/plugins/visualizations/public */ "plugin/visualizations/public");
/* harmony import */ var _src_plugins_visualizations_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_visualizations_public__WEBPACK_IMPORTED_MODULE_2__);
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



const createKbnNetworkVisFn = () => ({
  name: 'kbnNetwork',
  type: 'render',
  inputTypes: ['datatable'],
  help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('kbnNetwork.function.help', {
    defaultMessage: 'Network visualization'
  }),
  args: {
    sizeNode: {
      types: ['vis_dimension'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('kbnNetwork.function.metric.help', {
        defaultMessage: 'Size node metric dimension configuration'
      }),
      multi: true
    },
    sizeEdge: {
      types: ['vis_dimension'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('kbnNetwork.function.bucket.help', {
        defaultMessage: 'Size edge metric dimension configuration'
      }),
      multi: true
    },
    node: {
      types: ['vis_dimension'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('kbnNetwork.function.bucket.help', {
        defaultMessage: 'Node bucket dimension configuration'
      }),
      multi: true
    },
    relation: {
      types: ['vis_dimension'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('kbnNetwork.function.bucket.help', {
        defaultMessage: 'Relation bucket dimension configuration'
      }),
      multi: true
    },
    colorNode: {
      types: ['vis_dimension'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('kbnNetwork.function.bucket.help', {
        defaultMessage: 'Color node bucket dimension configuration'
      })
    },
    firstNodeColor: {
      types: ['string'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeKbnNetwork.params.firstNodeColor', {
        defaultMessage: 'First node color configuration'
      })
    },
    secondNodeColor: {
      types: ['string'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeKbnNetwork.params.secondNodeColor', {
        defaultMessage: 'Second node color configuration'
      })
    },
    edgeColor: {
      types: ['string'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeKbnNetwork.params.edgeColor', {
        defaultMessage: 'Edge color configuration'
      })
    },
    labelColor: {
      types: ['string'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeKbnNetwork.params.labelColor', {
        defaultMessage: 'Label color configuration'
      })
    },
    displayArrow: {
      types: ['boolean'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeKbnNetwork.params.displayArrow', {
        defaultMessage: 'Display directional edge'
      })
    },
    posArrow: {
      types: ['string'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeKbnNetwork.params.posArrow', {
        defaultMessage: 'Endpoint position'
      })
    },
    scaleArrow: {
      types: ['number'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeKbnNetwork.params.scaleArrow', {
        defaultMessage: 'Scale arrow'
      })
    },
    shapeArrow: {
      types: ['string'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeKbnNetwork.params.shapeArrow', {
        defaultMessage: 'Shape arrow'
      })
    },
    smoothType: {
      types: ['string'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeKbnNetwork.params.smoothType', {
        defaultMessage: 'Smooth type'
      })
    },
    maxNodeSize: {
      types: ['number'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeKbnNetwork.params.maxNodeSize', {
        defaultMessage: 'Max node size'
      })
    },
    minNodeSize: {
      types: ['number'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeKbnNetwork.params.minNodeSize', {
        defaultMessage: 'Min node size'
      })
    },
    maxEdgeSize: {
      types: ['number'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeKbnNetwork.params.maxEdgeSize', {
        defaultMessage: 'Max edge size'
      })
    },
    minEdgeSize: {
      types: ['number'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeKbnNetwork.params.minEdgeSize', {
        defaultMessage: 'Min edge size'
      })
    },
    shapeFirstNode: {
      types: ['string'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeKbnNetwork.params.shapeFirstNode', {
        defaultMessage: 'Primary node shape'
      })
    },
    shapeSecondNode: {
      types: ['string'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeKbnNetwork.params.shapeFirstNode', {
        defaultMessage: 'Secondary node shape'
      })
    },
    showLabels: {
      types: ['boolean'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeKbnNetwork.params.showLabels', {
        defaultMessage: 'Show labels'
      })
    },
    showPopup: {
      types: ['boolean'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeKbnNetwork.params.showPopup', {
        defaultMessage: 'Show popup'
      })
    },
    showColorLegend: {
      types: ['boolean'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeKbnNetwork.params.showColorLegend', {
        defaultMessage: 'Show color legend'
      })
    },
    nodePhysics: {
      types: ['boolean'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeKbnNetwork.params.nodePhysics', {
        defaultMessage: 'Node acting like springs'
      })
    },
    gravitationalConstant: {
      types: ['number'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeKbnNetwork.params.gravitationalConstant', {
        defaultMessage: 'Attraction force'
      })
    },
    springConstant: {
      types: ['number'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeKbnNetwork.params.springConstant', {
        defaultMessage: 'Spring force'
      })
    },
    minCutMetricSizeNode: {
      types: ['number'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeKbnNetwork.params.minCutMetricSizeNode', {
        defaultMessage: 'Hide nodes under size value'
      })
    }
  },

  fn(input, args, handlers) {
    var _handlers$inspectorAd;

    if (handlers !== null && handlers !== void 0 && (_handlers$inspectorAd = handlers.inspectorAdapters) !== null && _handlers$inspectorAd !== void 0 && _handlers$inspectorAd.tables) {
      const argsTable = [];

      if (args.sizeNode) {
        argsTable.push([args.sizeNode, _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('kbnNetwork.function.dimension.sizeNode', {
          defaultMessage: 'Size node metric'
        })]);
      }

      if (args.sizeEdge) {
        argsTable.push([args.sizeEdge, _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('kbnNetwork.function.dimension.sizeEdge', {
          defaultMessage: 'Size edge metric'
        })]);
      }

      if (args.sizeEdge) {
        argsTable.push([args.sizeEdge, _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('kbnNetwork.function.dimension.sizeEdge', {
          defaultMessage: 'Size edge metric'
        })]);
      }

      if (args.node) {
        argsTable.push([args.node, _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('kbnNetwork.function.dimension.node', {
          defaultMessage: 'Node buckets'
        })]);
      }

      if (args.relation) {
        argsTable.push([args.relation, _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('kbnNetwork.function.dimension.relation', {
          defaultMessage: 'Relation bucket'
        })]);
      }

      const logTable = Object(_src_plugins_visualizations_public__WEBPACK_IMPORTED_MODULE_2__["prepareLogTable"])(input, argsTable);
      handlers.inspectorAdapters.tables.logDatatable('default', logTable);
    }

    const visParams = {
      aggs: {
        sizeNode: args.sizeNode,
        sizeEdge: args.sizeEdge,
        node: args.node,
        relation: args.relation,
        colorNode: args.colorNode
      },
      ...lodash__WEBPACK_IMPORTED_MODULE_1___default.a.omit(args, ['sizeNode', 'sizeEdge', 'node', 'relation', 'colorNode'])
    };
    return {
      type: 'render',
      as: 'kbn_network',
      value: {
        visData: input,
        visParams
      }
    };
  }

});

/***/ }),

/***/ "./public/kbn_network_vis_renderer.tsx":
/*!*********************************************!*\
  !*** ./public/kbn_network_vis_renderer.tsx ***!
  \*********************************************/
/*! exports provided: getKbnNetworkVisRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKbnNetworkVisRenderer", function() { return getKbnNetworkVisRenderer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_plugins_visualizations_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/plugins/visualizations/public */ "plugin/visualizations/public");
/* harmony import */ var _src_plugins_visualizations_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_visualizations_public__WEBPACK_IMPORTED_MODULE_2__);
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




// @ts-ignore
const KbnNetworkVisComponent = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./components/kbn_network_vis_component */ "./public/components/kbn_network_vis_component.tsx")));
const getKbnNetworkVisRenderer = () => ({
  name: 'kbn_network',
  displayName: 'Network visualization',
  reuseDomNode: true,
  render: async (domNode, {
    visData,
    visParams
  }, handlers) => {
    handlers.onDestroy(() => {
      Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["unmountComponentAtNode"])(domNode);
    });
    let error = '';

    if (visParams.aggs.relation && visParams.aggs.node.length > 1) {
      error = 'You can only choose Node-Node or Node-Relation';
    }

    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_src_plugins_visualizations_public__WEBPACK_IMPORTED_MODULE_2__["VisualizationContainer"], {
      className: "kbnNetworkVis",
      showNoResult: visData.rows.length === 0,
      error: error,
      handlers: handlers
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(KbnNetworkVisComponent, {
      visParams: visParams,
      visData: visData
    })), domNode);
  }
});

/***/ }),

/***/ "./public/kbn_network_vis_type.ts":
/*!****************************************!*\
  !*** ./public/kbn_network_vis_type.ts ***!
  \****************************************/
/*! exports provided: kbnNetworkVisTypeDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kbnNetworkVisTypeDefinition", function() { return kbnNetworkVisTypeDefinition; });
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/plugins/data/public */ "plugin/data/public");
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./public/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_icon_network_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/icon-network.svg */ "./public/images/icon-network.svg");
/* harmony import */ var _images_icon_network_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_icon_network_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _to_ast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./to_ast */ "./public/to_ast.ts");
/* harmony import */ var _components_editor_kbn_network_vis_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/editor/kbn_network_vis_options */ "./public/components/editor/kbn_network_vis_options.tsx");
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





 // define the visType object, which kibana will use to display and configure new Vis object of this type.

const kbnNetworkVisTypeDefinition = {
  name: 'kbn_network',
  title: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeKbnNetwork.visTitle', {
    defaultMessage: 'Network'
  }),
  icon: _images_icon_network_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
  toExpressionAst: _to_ast__WEBPACK_IMPORTED_MODULE_4__["toExpressionAst"],
  requiresSearch: true,
  description: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeKbnNetwork.visDescription', {
    defaultMessage: 'Network plugin for visualizing data as networks'
  }),
  // getSupportedTriggers: () => {
  //   return [VIS_EVENT_TO_TRIGGER.filter];
  // },
  visConfig: {
    defaults: {
      showLabels: true,
      showPopup: true,
      showColorLegend: true,
      nodePhysics: true,
      firstNodeColor: '#6F86D7',
      secondNodeColor: '#DAA05D',
      edgeColor: '#6F86D7',
      shapeFirstNode: 'dot',
      shapeSecondNode: 'box',
      displayArrow: false,
      posArrow: 'to',
      shapeArrow: 'arrow',
      smoothType: 'continuous',
      scaleArrow: 1,
      minCutMetricSizeNode: 0,
      maxNodeSize: 80,
      minNodeSize: 8,
      maxEdgeSize: 20,
      minEdgeSize: 0.1,
      springConstant: 0.001,
      gravitationalConstant: -35000,
      labelColor: '#000000'
    }
  },
  editorConfig: {
    optionsTemplate: _components_editor_kbn_network_vis_options__WEBPACK_IMPORTED_MODULE_5__["default"],
    schemas: [{
      group: _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_1__["AggGroupNames"].Metrics,
      name: 'size_node',
      title: 'Node Size',
      aggFilter: ['!geo_centroid', '!geo_bounds'],
      aggSettings: {
        top_hits: {
          allowStrings: false
        }
      },
      mustBeFirst: true,
      min: 1,
      max: 1,
      defaults: [{
        type: 'count',
        schema: 'size_node'
      }]
    }, {
      group: _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_1__["AggGroupNames"].Metrics,
      name: 'size_edge',
      title: 'Edge Size',
      aggFilter: ['!geo_centroid', '!geo_bounds'],
      aggSettings: {
        top_hits: {
          allowStrings: false
        }
      },
      min: 0,
      max: 1
    }, {
      group: _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_1__["AggGroupNames"].Buckets,
      name: 'first',
      title: 'Node',
      mustBeFirst: true,
      min: 1,
      max: 2,
      aggFilter: ['terms']
    }, {
      group: _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_1__["AggGroupNames"].Buckets,
      name: 'second',
      title: 'Relation',
      max: 1,
      aggFilter: ['terms']
    }, {
      group: _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_1__["AggGroupNames"].Buckets,
      name: 'colornode',
      title: 'Node Color',
      max: 1,
      aggFilter: ['terms']
    }]
  }
};

/***/ }),

/***/ "./public/lib/network_data.ts":
/*!************************************!*\
  !*** ./public/lib/network_data.ts ***!
  \************************************/
/*! exports provided: nodeShapes, NetworkData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeShapes", function() { return nodeShapes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkData", function() { return NetworkData; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! randomcolor */ "./node_modules/randomcolor/randomColor.js");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_1__);
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


const nodeShapes = ['dot', 'circle', 'ellipse', 'database', 'box', 'text', 'diamond', 'start', 'triangle', 'triangleDown', 'square'];
class NetworkData {
  constructor(visParams) {
    this.visParams = visParams;
  }

  getTooltipTitle(termName, termValue, sizeTerm = null, sizeValue = null) {
    let tooltipTitle = `${termName}: ${termValue}`;

    if (sizeTerm !== null) {
      tooltipTitle += `\n${sizeTerm}: ${sizeValue}`;
    }

    return tooltipTitle;
  }

  getColumns(visData) {
    return {
      sizeNodeMetric: visData.columns.find(column => column.meta.sourceParams.schema === 'size_node'),
      sizeEdgeMetric: visData.columns.find(column => column.meta.sourceParams.schema === 'size_edge'),
      nodeBuckets: visData.columns.filter(column => column.meta.sourceParams.schema === 'first'),
      relationBucket: visData.columns.find(column => column.meta.sourceParams.schema === 'second'),
      colorNodeBucket: visData.columns.find(column => column.meta.sourceParams.schema === 'colornode')
    };
  }

  getNodes(column, visData, options) {
    if (!column) {
      return [];
    }

    const nodes = visData.rows.map(row => {
      const value = options.value(row);

      if (value >= this.visParams.minCutMetricSizeNode) {
        return {
          id: row[column.id],
          key: row[column.id],
          ...options,
          value,
          title: options.title && this.visParams.showPopup ? options.title(row) : undefined,
          label: this.visParams.showLabels ? row[column.id] : undefined,
          color: options.color(row)
        };
      }
    });
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.compact(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.uniqBy(nodes, 'id'));
  }

  getEdges(sourceColumn, destColumn, visData, options) {
    return visData.rows.map(row => ({
      from: row[sourceColumn.id],
      to: row[destColumn.id],
      color: options.color(row),
      value: options.value(row)
    }));
  }

  getRandomColor(unvailableColors) {
    while (true) {
      const color = randomcolor__WEBPACK_IMPORTED_MODULE_1___default()();

      if (unvailableColors.indexOf(color) === -1) {
        return color;
      }
    }
  }

  getNodeColors(visData, colorNodeColumn) {
    const colors = {};

    if (colorNodeColumn) {
      for (const row of visData.rows) {
        const rowValue = row[colorNodeColumn.id];

        if (!colors[rowValue]) {
          colors[rowValue] = this.getRandomColor(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.toArray(colors));
        }
      }
    }

    return colors;
  }

  from(visData) {
    const columns = this.getColumns(visData);
    const sourceNodeColumn = columns.nodeBuckets[0];
    const nodeSizeColumn = columns.sizeNodeMetric;
    const edgeSizeColumn = columns.sizeEdgeMetric;
    const destNodeColumn = columns.nodeBuckets[1] || columns.relationBucket;
    const colorNodeColumn = columns.colorNodeBucket;
    const nodeColors = this.getNodeColors(visData, colorNodeColumn);
    const sourceNodes = this.getNodes(sourceNodeColumn, visData, {
      shape: this.visParams.shapeFirstNode,
      value: row => nodeSizeColumn ? row[nodeSizeColumn.id] : 1,
      color: row => colorNodeColumn && nodeColors[row[colorNodeColumn.id]] || this.visParams.firstNodeColor,
      font: {
        color: this.visParams.labelColor
      },
      title: row => this.getTooltipTitle(sourceNodeColumn.meta.field || sourceNodeColumn.name, row[sourceNodeColumn.id], (nodeSizeColumn === null || nodeSizeColumn === void 0 ? void 0 : nodeSizeColumn.meta.field) || (nodeSizeColumn === null || nodeSizeColumn === void 0 ? void 0 : nodeSizeColumn.name), row[nodeSizeColumn === null || nodeSizeColumn === void 0 ? void 0 : nodeSizeColumn.id])
    });
    let destNodes = [];
    let edges = [];

    if (destNodeColumn) {
      destNodes = this.getNodes(destNodeColumn, visData, {
        shape: this.visParams.shapeSecondNode,
        value: _row => 1,
        color: row => colorNodeColumn && nodeColors[row[colorNodeColumn.id]] || this.visParams.secondNodeColor,
        font: {
          color: this.visParams.labelColor
        }
      });
      edges = this.getEdges(sourceNodeColumn, destNodeColumn, visData, {
        value: row => edgeSizeColumn ? row[edgeSizeColumn.id] : 1,
        color: row => colorNodeColumn && nodeColors[row[colorNodeColumn.id]] || this.visParams.edgeColor
      });

      if (columns.relationBucket) {
        edges = edges.filter(edge => !!sourceNodes.find(sourceNode => sourceNode.id === edge.to));
      }
    }

    const nodes = columns.relationBucket ? sourceNodes : lodash__WEBPACK_IMPORTED_MODULE_0___default.a.unionBy([...sourceNodes, ...destNodes], 'id');
    return {
      nodes,
      edges,
      nodeColors
    };
  }

}

/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: KbnNetworkPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KbnNetworkPlugin", function() { return KbnNetworkPlugin; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_network_vis_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kbn_network_vis_renderer */ "./public/kbn_network_vis_renderer.tsx");
/* harmony import */ var _kbn_network_vis_fn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kbn_network_vis_fn */ "./public/kbn_network_vis_fn.ts");
/* harmony import */ var _kbn_network_vis_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kbn_network_vis_type */ "./public/kbn_network_vis_type.ts");


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
// import {
//   setFormatService,
//   setKibanaLegacy,
//   setNotifications,
//   setQueryService,
//   setSearchService,
// } from './services';



/** @internal */

/** @internal */
class KbnNetworkPlugin {
  constructor(initializerContext) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "initializerContext", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "createBaseVisualization", void 0);

    this.initializerContext = initializerContext;
  }

  async setup(core, {
    visualizations,
    expressions
  }) {
    visualizations.createBaseVisualization(_kbn_network_vis_type__WEBPACK_IMPORTED_MODULE_3__["kbnNetworkVisTypeDefinition"]);
    expressions.registerFunction(Object(_kbn_network_vis_fn__WEBPACK_IMPORTED_MODULE_2__["createKbnNetworkVisFn"])());
    expressions.registerRenderer(Object(_kbn_network_vis_renderer__WEBPACK_IMPORTED_MODULE_1__["getKbnNetworkVisRenderer"])());
  }

  start(core, {}) {// setFormatService(data.fieldFormats);
    // setKibanaLegacy(kibanaLegacy);
    // setNotifications(core.notifications);
    // setQueryService(data.query);
    // setSearchService(data.search);
  }

}

/***/ }),

/***/ "./public/to_ast.ts":
/*!**************************!*\
  !*** ./public/to_ast.ts ***!
  \**************************/
/*! exports provided: toExpressionAst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toExpressionAst", function() { return toExpressionAst; });
/* harmony import */ var _src_plugins_expressions_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/plugins/expressions/public */ "plugin/expressions/public");
/* harmony import */ var _src_plugins_expressions_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_expressions_public__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_plugins_visualizations_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/plugins/visualizations/public */ "plugin/visualizations/public");
/* harmony import */ var _src_plugins_visualizations_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_visualizations_public__WEBPACK_IMPORTED_MODULE_1__);
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



const prepareDimension = params => {
  const visdimension = Object(_src_plugins_expressions_public__WEBPACK_IMPORTED_MODULE_0__["buildExpressionFunction"])('visdimension', {
    accessor: params.accessor
  });

  if (params.format) {
    visdimension.addArgument('format', params.format.id);
    visdimension.addArgument('formatParams', JSON.stringify(params.format.params));
  }

  return Object(_src_plugins_expressions_public__WEBPACK_IMPORTED_MODULE_0__["buildExpression"])([visdimension]);
};

const toExpressionAst = (vis, params) => {
  var _schemas$size_node, _schemas$size_edge, _schemas$first, _schemas$second;

  const esaggs = Object(_src_plugins_expressions_public__WEBPACK_IMPORTED_MODULE_0__["buildExpressionFunction"])('esaggs', {
    index: Object(_src_plugins_expressions_public__WEBPACK_IMPORTED_MODULE_0__["buildExpression"])([Object(_src_plugins_expressions_public__WEBPACK_IMPORTED_MODULE_0__["buildExpressionFunction"])('indexPatternLoad', {
      id: vis.data.indexPattern.id
    })]),
    metricsAtAllLevels: vis.isHierarchical(),
    partialRows: false,
    aggs: vis.data.aggs.aggs.map(agg => Object(_src_plugins_expressions_public__WEBPACK_IMPORTED_MODULE_0__["buildExpression"])(agg.toExpressionAst()))
  });
  const schemas = Object(_src_plugins_visualizations_public__WEBPACK_IMPORTED_MODULE_1__["getVisSchemas"])(vis, params);
  const args = {
    sizeNode: (_schemas$size_node = schemas.size_node) === null || _schemas$size_node === void 0 ? void 0 : _schemas$size_node.map(prepareDimension),
    sizeEdge: (_schemas$size_edge = schemas.size_edge) === null || _schemas$size_edge === void 0 ? void 0 : _schemas$size_edge.map(prepareDimension),
    node: (_schemas$first = schemas.first) === null || _schemas$first === void 0 ? void 0 : _schemas$first.map(prepareDimension),
    relation: (_schemas$second = schemas.second) === null || _schemas$second === void 0 ? void 0 : _schemas$second.map(prepareDimension),
    colorNode: schemas.colornode ? prepareDimension(schemas.colornode[0]) : undefined,
    ...vis.params
  };
  const kbnNetworkType = Object(_src_plugins_expressions_public__WEBPACK_IMPORTED_MODULE_0__["buildExpressionFunction"])('kbnNetwork', args);
  const ast = Object(_src_plugins_expressions_public__WEBPACK_IMPORTED_MODULE_0__["buildExpression"])([esaggs, kbnNetworkType]);
  return ast.toAst();
};

/***/ }),

/***/ "@elastic/eui":
/*!***********************************************!*\
  !*** external "__kbnSharedDeps__.ElasticEui" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.ElasticEui;

/***/ }),

/***/ "@emotion/react":
/*!*************************************************!*\
  !*** external "__kbnSharedDeps__.EmotionReact" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.EmotionReact;

/***/ }),

/***/ "@kbn/i18n":
/*!********************************************!*\
  !*** external "__kbnSharedDeps__.KbnI18n" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.KbnI18n;

/***/ }),

/***/ "dll-reference __kbnSharedDeps_npm__":
/*!****************************************!*\
  !*** external "__kbnSharedDeps_npm__" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps_npm__;

/***/ }),

/***/ "lodash":
/*!*******************************************!*\
  !*** external "__kbnSharedDeps__.Lodash" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.Lodash;

/***/ }),

/***/ "plugin/data/public":
/*!*******************************************!*\
  !*** @kbn/bundleRef "plugin/data/public" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/data/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/expressions/public":
/*!**************************************************!*\
  !*** @kbn/bundleRef "plugin/expressions/public" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/expressions/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/visualizations/public":
/*!*****************************************************!*\
  !*** @kbn/bundleRef "plugin/visualizations/public" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/visualizations/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "react":
/*!******************************************!*\
  !*** external "__kbnSharedDeps__.React" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.React;

/***/ }),

/***/ "react-dom":
/*!*********************************************!*\
  !*** external "__kbnSharedDeps__.ReactDom" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.ReactDom;

/***/ })

/******/ });
//# sourceMappingURL=kbnNetwork.plugin.js.map