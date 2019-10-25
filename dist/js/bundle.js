/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_test_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_test_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_test_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__es6_js__ = __webpack_require__(10);




document.write("5201314" + '<br />');
document.write(Object(__WEBPACK_IMPORTED_MODULE_0__math__["b" /* foo */])(2) + '<br />');
document.write(Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* bar */])(2) + '<br />');
document.write(__WEBPACK_IMPORTED_MODULE_2__es6_js__["a" /* default */].show() + '<br />');

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = foo;
/* harmony export (immutable) */ __webpack_exports__["a"] = bar;
function foo(x) {
    return x * x;
}

function bar(x) {
    return x ** x;
}

class Test {
    constructor(uname, say) {
        this.uname = uname;
        this.say = say;
    }
    show() {
        return this.uname + "喜欢唱" + this.say;
    }
}

// 暴露单个模块
/* unused harmony default export */ var _unused_webpack_default_export = (new Test("Msea", "我爱北京天安门"));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(3);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(8)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./test.css", function() {
		var newContent = require("!!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./test.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Imports
var getUrl = __webpack_require__(5);
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(6));
var ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(7));
// Module
exports.push([module.i, "#pox{width:300px;height:300px;background:palegoldenrod}#pox h1{color:red}#box{width:200px;height:200px;background:url(" + ___CSS_LOADER_URL___0___ + ")}#pic{width:200px;height:200px;background:url(" + ___CSS_LOADER_URL___1___ + ")}\n", ""]);


/***/ }),
/* 4 */
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
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
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
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, needQuotes) {
  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "81ad9aff73497d5528882afae1df280a.jpg";

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {
		return null;
	}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Test {
    constructor(uname, say) {
        this.uname = uname;
        this.say = say;
    }
    show() {
        return this.uname + "喜欢唱" + this.say;
    }
}

// 暴露单个模块
/* harmony default export */ __webpack_exports__["a"] = (new Test("果儿", "见覅资金迪欧"));

/***/ })
/******/ ]);