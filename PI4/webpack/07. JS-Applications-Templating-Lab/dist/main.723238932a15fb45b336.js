/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fortawesome/fontawesome/index.es.js":
/*!***********************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome/index.es.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "icon": () => (/* binding */ icon),
/* harmony export */   "noAuto": () => (/* binding */ noAuto),
/* harmony export */   "layer": () => (/* binding */ layer),
/* harmony export */   "text": () => (/* binding */ text),
/* harmony export */   "library": () => (/* binding */ library),
/* harmony export */   "dom": () => (/* binding */ dom),
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "findIconDefinition": () => (/* binding */ findIconDefinition),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*!
 * Font Awesome Free 5.0.13 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER$1 = null;
var _PERFORMANCE = { mark: noop, measure: noop };

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER$1 = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {};
var _ref$userAgent = _ref.userAgent;
var userAgent = _ref$userAgent === undefined ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER$1;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';

var PRODUCTION = function () {
  try {
    return "development" === 'production';
  } catch (e) {
    return false;
  }
}();

var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];

var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter'].concat(oneToTen.map(function (n) {
  return n + 'x';
})).concat(oneToTwenty.map(function (n) {
  return 'w-' + n;
}));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();



var _extends = Object.assign || function (target) {
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



var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var initial = WINDOW.FontAwesomeConfig || {};
var initialKeys = Object.keys(initial);

var _default = _extends({
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
}, initial);

if (!_default.autoReplaceSvg) _default.observeMutations = false;

var config$1 = _extends({}, _default);

WINDOW.FontAwesomeConfig = config$1;

function update(newConfig) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$asNewDefault = params.asNewDefault,
      asNewDefault = _params$asNewDefault === undefined ? false : _params$asNewDefault;

  var validKeys = Object.keys(config$1);
  var ok = asNewDefault ? function (k) {
    return ~validKeys.indexOf(k) && !~initialKeys.indexOf(k);
  } : function (k) {
    return ~validKeys.indexOf(k);
  };

  Object.keys(newConfig).forEach(function (configKey) {
    if (ok(configKey)) config$1[configKey] = newConfig[configKey];
  });
}

function auto(value) {
  update({
    autoReplaceSvg: value,
    observeMutations: value
  });
}

var w = WINDOW || {};

if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];

var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];
var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);

  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

var domready = function (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
};

var d = UNITS_IN_GRID;

var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}

function bunker(fn) {
  try {
    fn();
  } catch (e) {
    if (!PRODUCTION) {
      throw e;
    }
  }
}

function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;

  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();
    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);

  return css;
}

var _uniqueId = 0;

function nextUniqueId() {
  _uniqueId++;

  return _uniqueId;
}

function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}

function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}

function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}

function htmlEscape(str) {
  return ('' + str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + (attributeName + '="' + htmlEscape(attributes[attributeName]) + '" ');
  }, '').trim();
}

function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + (styleName + ': ' + styles[styleName] + ';');
  }, '');
}

function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}

function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;

  var outer = {
    transform: 'translate(' + containerWidth / 2 + ' 256)'
  };
  var innerTranslate = 'translate(' + transform.x * 32 + ', ' + transform.y * 32 + ') ';
  var innerScale = 'scale(' + transform.size / 16 * (transform.flipX ? -1 : 1) + ', ' + transform.size / 16 * (transform.flipY ? -1 : 1) + ') ';
  var innerRotate = 'rotate(' + transform.rotate + ' 0 0)';
  var inner = {
    transform: innerTranslate + ' ' + innerScale + ' ' + innerRotate
  };
  var path = {
    transform: 'translate(' + iconWidth / 2 * -1 + ' -256)'
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}

function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === undefined ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === undefined ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === undefined ? false : _ref2$startCentered;

  var val = '';

  if (startCentered && IS_IE) {
    val += 'translate(' + (transform.x / d - width / 2) + 'em, ' + (transform.y / d - height / 2) + 'em) ';
  } else if (startCentered) {
    val += 'translate(calc(-50% + ' + transform.x / d + 'em), calc(-50% + ' + transform.y / d + 'em)) ';
  } else {
    val += 'translate(' + transform.x / d + 'em, ' + transform.y / d + 'em) ';
  }

  val += 'scale(' + transform.size / d * (transform.flipX ? -1 : 1) + ', ' + transform.size / d * (transform.flipY ? -1 : 1) + ') ';
  val += 'rotate(' + transform.rotate + 'deg) ';

  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

var makeIconMasking = function (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;


  var trans = transformForSvg({ transform: transform, containerWidth: maskWidth, iconWidth: mainWidth });

  var maskRect = {
    tag: 'rect',
    attributes: _extends({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroup = {
    tag: 'g',
    attributes: _extends({}, trans.inner),
    children: [{ tag: 'path', attributes: _extends({}, mainPath.attributes, trans.path, { fill: 'black' }) }]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _extends({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = 'mask-' + nextUniqueId();
  var clipId = 'clip-' + nextUniqueId();
  var maskTag = {
    tag: 'mask',
    attributes: _extends({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{ tag: 'clipPath', attributes: { id: clipId }, children: [maskPath] }, maskTag]
  };

  children.push(defs, { tag: 'rect', attributes: _extends({ fill: 'currentColor', 'clip-path': 'url(#' + clipId + ')', mask: 'url(#' + maskId + ')' }, ALL_SPACE) });

  return {
    children: children,
    attributes: attributes
  };
};

var makeIconStandard = function (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({ transform: transform, containerWidth: main.width, iconWidth: main.width });
    children.push({
      tag: 'g',
      attributes: _extends({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _extends({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _extends({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
};

var asIcon = function (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;

    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_extends({}, styles, {
      'transform-origin': offset.x + transform.x / 16 + 'em ' + (offset.y + transform.y / 16) + 'em'
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
};

var asSymbol = function (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;

  var id = symbol === true ? prefix + '-' + config$1.familyPrefix + '-' + iconName : symbol;

  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _extends({}, attributes, { id: id }),
      children: children
    }]
  }];
};

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === undefined ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var widthClass = 'fa-w-' + Math.ceil(width / height * 16);
  var attrClass = [config$1.replacementClass, iconName ? config$1.familyPrefix + '-' + iconName : '', widthClass].concat(extra.classes).join(' ');

  var content = {
    children: [],
    attributes: _extends({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': '0 0 ' + width + ' ' + height
    })
  };

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({ tag: 'title', attributes: { id: content.attributes['aria-labelledby'] || 'title-' + nextUniqueId() }, children: [title] });

  var args = _extends({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    transform: transform,
    symbol: symbol,
    styles: extra.styles
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}

function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === undefined ? false : _params$watchable2;


  var attributes = _extends({}, extra.attributes, title ? { 'title': title } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _extends({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({ transform: transform, startCentered: true, width: width, height: height });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];

  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [title] });
  }

  return val;
}

var noop$2 = function noop() {};
var p = config$1.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : { mark: noop$2, measure: noop$2 };
var preamble = 'FA "5.0.13"';

var begin = function begin(name) {
  p.mark(preamble + ' ' + name + ' begins');
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark(preamble + ' ' + name + ' ends');
  p.measure(preamble + ' ' + name, preamble + ' ' + name + ' begins', preamble + ' ' + name + ' ends');
};

var perf = { begin: begin, end: end };

'use strict';

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */
var bindInternal4 = function bindInternal4 (func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

'use strict';



/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */
var reduce = function fastReduceObject (subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i, key, result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  }
  else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

var styles$2 = namespace.styles;
var shims = namespace.shims;


var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};

var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles$2, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    acc[icon[3]] = iconName;

    return acc;
  });

  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];

    acc[iconName] = iconName;

    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });

    return acc;
  });

  var hasRegular = 'far' in styles$2;

  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = { prefix: prefix, iconName: iconName };

    return acc;
  }, {});
};

build();

function byUnicode(prefix, unicode) {
  return _byUnicode[prefix][unicode];
}

function byLigature(prefix, ligature) {
  return _byLigature[prefix][ligature];
}

function byOldName(name) {
  return _byOldName[name] || { prefix: null, iconName: null };
}

var styles$1 = namespace.styles;


var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return { prefix: null, iconName: null, rest: [] };
};

function getCanonicalIcon(values) {
  return values.reduce(function (acc, cls) {
    var iconName = getIconName(config$1.familyPrefix, cls);

    if (styles$1[cls]) {
      acc.prefix = cls;
    } else if (iconName) {
      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};

      acc.iconName = shim.iconName || iconName;
      acc.prefix = shim.prefix || acc.prefix;
    } else if (cls !== config$1.replacementClass && cls.indexOf('fa-w-') !== 0) {
      acc.rest.push(cls);
    }

    return acc;
  }, emptyCanonicalIcon());
}

function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === undefined ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === undefined ? [] : _abstractNodes$childr;


  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return '<' + tag + ' ' + joinAttributes(attributes) + '>' + children.map(toHtml).join('') + '</' + tag + '>';
  }
}

var noop$1 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;

  return typeof i2svg === 'string';
}

function getMutator() {
  if (config$1.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config$1.autoReplaceSvg];

  return mutator || mutators.replace;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    var newOuterHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');

    if (node.parentNode && node.outerHTML) {
      node.outerHTML = newOuterHTML + (config$1.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? '<!-- ' + node.outerHTML + ' -->' : '');
    } else if (node.parentNode) {
      var newNode = document.createElement('span');
      node.parentNode.replaceChild(newNode, node);
      newNode.outerHTML = newOuterHTML;
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];

    // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement
    if (~classArray(node).indexOf(config$1.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp(config$1.familyPrefix + '-.*');

    delete abstract[0].attributes.style;

    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
      if (cls === config$1.replacementClass || cls.match(forSvg)) {
        acc.toSvg.push(cls);
      } else {
        acc.toNode.push(cls);
      }

      return acc;
    }, { toNode: [], toSvg: [] });

    abstract[0].attributes.class = splitClasses.toSvg.join(' ');

    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute('class', splitClasses.toNode.join(' '));
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$1;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = WINDOW.requestAnimationFrame || function (op) {
      return op();
    };

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');

      mutations.map(mutator);

      mark();

      callbackFunction();
    });
  }
}

var disabled = false;

function disableObservation(operation) {
  disabled = true;
  operation();
  disabled = false;
}

var mo = null;

function observe(options) {
  if (!MUTATION_OBSERVER) return;

  var treeCallback = options.treeCallback,
      nodeCallback = options.nodeCallback,
      pseudoElementsCallback = options.pseudoElementsCallback;


  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;

    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config$1.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config$1.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class') {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
        } else {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });

  if (!IS_DOM) return;

  mo.observe(DOCUMENT.getElementsByTagName('body')[0], {
    childList: true, attributes: true, characterData: true, subtree: true
  });
}

function disconnect() {
  if (!mo) return;

  mo.disconnect();
}

var styleParser = function (node) {
  var style = node.getAttribute('style');

  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
};

function toHex(unicode) {
  var result = '';

  for (var i = 0; i < unicode.length; i++) {
    var hex = unicode.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
}

var classParser = function (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';

  var val = getCanonicalIcon(classArray(node));

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.prefix && innerText.length > 1) {
    val.iconName = byLigature(val.prefix, node.innerText);
  } else if (val.prefix && innerText.length === 1) {
    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
};

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;
        case 'shrink':
          acc.size = acc.size - rest;
          break;
        case 'left':
          acc.x = acc.x - rest;
          break;
        case 'right':
          acc.x = acc.x + rest;
          break;
        case 'up':
          acc.y = acc.y - rest;
          break;
        case 'down':
          acc.y = acc.y + rest;
          break;
        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};

var transformParser = function (node) {
  return parseTransformString(node.getAttribute('data-fa-transform'));
};

var symbolParser = function (node) {
  var symbol = node.getAttribute('data-fa-symbol');

  return symbol === null ? false : symbol === '' ? true : symbol;
};

var attributesParser = function (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }
    return acc;
  }, {});

  var title = node.getAttribute('title');

  if (config$1.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = config$1.replacementClass + '-title-' + nextUniqueId();
    } else {
      extraAttributes['aria-hidden'] = 'true';
    }
  }

  return extraAttributes;
};

var maskParser = function (node) {
  var mask = node.getAttribute('data-fa-mask');

  if (!mask) {
    return emptyCanonicalIcon();
  } else {
    return getCanonicalIcon(mask.split(' ').map(function (i) {
      return i.trim();
    }));
  }
};

function parseMeta(node) {
  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraStyles = styleParser(node);
  var transform = transformParser(node);
  var symbol = symbolParser(node);
  var extraAttributes = attributesParser(node);
  var mask = maskParser(node);

  return {
    iconName: iconName,
    title: node.getAttribute('title'),
    prefix: prefix,
    transform: transform,
    symbol: symbol,
    mask: mask,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  };
}

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}

MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = { fill: 'currentColor' };
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _extends({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};
var OPACITY_ANIMATE = _extends({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});
var DOT = {
  tag: 'circle',
  attributes: _extends({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{ tag: 'animate', attributes: _extends({}, ANIMATION_BASE, { attributeName: 'r', values: '28;14;28;28;14;28;' }) }, { tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '1;0;1;1;0;1;' }) }]
};
var QUESTION = {
  tag: 'path',
  attributes: _extends({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{ tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '1;0;0;0;0;1;' }) }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _extends({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{ tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '0;0;1;1;0;0;' }) }]
};

var missing = { tag: 'g', children: [RING, DOT, QUESTION, EXCLAMATION] };

var styles = namespace.styles;

var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font Awesome 5 (Solid|Regular|Light|Brands)/;
var STYLE_TO_PREFIX = {
  'Solid': 'fas',
  'Regular': 'far',
  'Light': 'fal',
  'Brands': 'fab'
};

function findIcon(iconName, prefix) {
  var val = {
    found: false,
    width: 512,
    height: 512,
    icon: missing
  };

  if (iconName && prefix && styles[prefix] && styles[prefix][iconName]) {
    var icon = styles[prefix][iconName];
    var width = icon[0];
    var height = icon[1];
    var vectorData = icon.slice(4);

    val = {
      found: true,
      width: width,
      height: height,
      icon: { tag: 'path', attributes: { fill: 'currentColor', d: vectorData[0] } }
    };
  } else if (iconName && prefix && !config$1.showMissingIcons) {
    throw new MissingIcon('Icon is missing for prefix ' + prefix + ' with icon name ' + iconName);
  }

  return val;
}

function generateSvgReplacementMutation(node, nodeMeta) {
  var iconName = nodeMeta.iconName,
      title = nodeMeta.title,
      prefix = nodeMeta.prefix,
      transform = nodeMeta.transform,
      symbol = nodeMeta.symbol,
      mask = nodeMeta.mask,
      extra = nodeMeta.extra;


  return [node, makeInlineSvgAbstract({
    icons: {
      main: findIcon(iconName, prefix),
      mask: findIcon(mask.iconName, mask.prefix)
    },
    prefix: prefix,
    iconName: iconName,
    transform: transform,
    symbol: symbol,
    mask: mask,
    title: title,
    extra: extra,
    watchable: true
  })];
}

function generateLayersText(node, nodeMeta) {
  var title = nodeMeta.title,
      transform = nodeMeta.transform,
      extra = nodeMeta.extra;


  var width = null;
  var height = null;

  if (IS_IE) {
    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
    var boundingClientRect = node.getBoundingClientRect();
    width = boundingClientRect.width / computedFontSize;
    height = boundingClientRect.height / computedFontSize;
  }

  if (config$1.autoA11y && !title) {
    extra.attributes['aria-hidden'] = 'true';
  }

  return [node, makeLayersTextAbstract({
    content: node.innerHTML,
    width: width,
    height: height,
    transform: transform,
    title: title,
    extra: extra,
    watchable: true
  })];
}

function generateMutation(node) {
  var nodeMeta = parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return generateLayersText(node, nodeMeta);
  } else {
    return generateSvgReplacementMutation(node, nodeMeta);
  }
}

function remove(node) {
  if (typeof node.remove === 'function') {
    node.remove();
  } else if (node && node.parentNode) {
    node.parentNode.removeChild(node);
  }
}

function searchPseudoElements(root) {
  if (!IS_DOM) return;

  var end = perf.begin('searchPseudoElements');

  disableObservation(function () {
    toArray(root.querySelectorAll('*')).forEach(function (node) {
      [':before', ':after'].forEach(function (pos) {
        var styles = WINDOW.getComputedStyle(node, pos);
        var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
        var children = toArray(node.children);
        var pseudoElement = children.filter(function (c) {
          return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === pos;
        })[0];

        if (pseudoElement) {
          if (pseudoElement.nextSibling && pseudoElement.nextSibling.textContent.indexOf(DATA_FA_PSEUDO_ELEMENT) > -1) {
            remove(pseudoElement.nextSibling);
          }
          remove(pseudoElement);
          pseudoElement = null;
        }

        if (fontFamily && !pseudoElement) {
          var content = styles.getPropertyValue('content');
          var i = DOCUMENT.createElement('i');
          i.setAttribute('class', '' + STYLE_TO_PREFIX[fontFamily[1]]);
          i.setAttribute(DATA_FA_PSEUDO_ELEMENT, pos);
          i.innerText = content.length === 3 ? content.substr(1, 1) : content;
          if (pos === ':before') {
            node.insertBefore(i, node.firstChild);
          } else {
            node.appendChild(i);
          }
        }
      });
    });
  });

  end();
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!IS_DOM) return;

  var htmlClassList = DOCUMENT.documentElement.classList;
  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add(HTML_CLASS_I2SVG_BASE_CLASS + '-' + suffix);
  };
  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove(HTML_CLASS_I2SVG_BASE_CLASS + '-' + suffix);
  };
  var prefixes = Object.keys(styles);
  var prefixesDomQuery = ['.' + LAYERS_TEXT_CLASSNAME + ':not([' + DATA_FA_I2SVG + '])'].concat(prefixes.map(function (p) {
    return '.' + p + ':not([' + DATA_FA_I2SVG + '])';
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return;
  }

  var candidates = toArray(root.querySelectorAll(prefixesDomQuery));

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return;
  }

  var mark = perf.begin('onTree');

  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e instanceof MissingIcon) {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);

  mark();

  perform(mutations, function () {
    hclAdd('active');
    hclAdd('complete');
    hclRemove('pending');

    if (typeof callback === 'function') callback();
  });
}

function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var mutation = generateMutation(node);

  if (mutation) {
    perform([mutation], callback);
  }
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible; }\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -.125em; }\n  .svg-inline--fa.fa-lg {\n    vertical-align: -.225em; }\n  .svg-inline--fa.fa-w-1 {\n    width: 0.0625em; }\n  .svg-inline--fa.fa-w-2 {\n    width: 0.125em; }\n  .svg-inline--fa.fa-w-3 {\n    width: 0.1875em; }\n  .svg-inline--fa.fa-w-4 {\n    width: 0.25em; }\n  .svg-inline--fa.fa-w-5 {\n    width: 0.3125em; }\n  .svg-inline--fa.fa-w-6 {\n    width: 0.375em; }\n  .svg-inline--fa.fa-w-7 {\n    width: 0.4375em; }\n  .svg-inline--fa.fa-w-8 {\n    width: 0.5em; }\n  .svg-inline--fa.fa-w-9 {\n    width: 0.5625em; }\n  .svg-inline--fa.fa-w-10 {\n    width: 0.625em; }\n  .svg-inline--fa.fa-w-11 {\n    width: 0.6875em; }\n  .svg-inline--fa.fa-w-12 {\n    width: 0.75em; }\n  .svg-inline--fa.fa-w-13 {\n    width: 0.8125em; }\n  .svg-inline--fa.fa-w-14 {\n    width: 0.875em; }\n  .svg-inline--fa.fa-w-15 {\n    width: 0.9375em; }\n  .svg-inline--fa.fa-w-16 {\n    width: 1em; }\n  .svg-inline--fa.fa-w-17 {\n    width: 1.0625em; }\n  .svg-inline--fa.fa-w-18 {\n    width: 1.125em; }\n  .svg-inline--fa.fa-w-19 {\n    width: 1.1875em; }\n  .svg-inline--fa.fa-w-20 {\n    width: 1.25em; }\n  .svg-inline--fa.fa-pull-left {\n    margin-right: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-pull-right {\n    margin-left: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-border {\n    height: 1.5em; }\n  .svg-inline--fa.fa-li {\n    width: 2em; }\n  .svg-inline--fa.fa-fw {\n    width: 1.25em; }\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -.125em;\n  width: 1em; }\n  .fa-layers svg.svg-inline--fa {\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n\n.fa-layers-text, .fa-layers-counter {\n  display: inline-block;\n  position: absolute;\n  text-align: center; }\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center; }\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: .25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right; }\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left; }\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1); }\n\n.fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1em; }\n\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n";

var css = function () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config$1.familyPrefix;
  var rc = config$1.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp('\\.' + dfp + '\\-', 'g');
    var rPatt = new RegExp('\\.' + drc, 'g');

    s = s.replace(dPatt, '.' + fp + '-').replace(rPatt, '.' + rc);
  }

  return s;
};

function define(prefix, icons) {
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }
    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function') {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _extends({}, namespace.styles[prefix] || {}, normalized);
  }

  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */
  if (prefix === 'fas') {
    define('fa', icons);
  }
}

var Library = function () {
  function Library() {
    classCallCheck(this, Library);

    this.definitions = {};
  }

  createClass(Library, [{
    key: 'add',
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});

      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _extends({}, _this.definitions[key] || {}, additions[key]);
        define(key, additions[key]);
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: '_pullDefinitions',
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? { 0: definition } : definition;

      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;


        if (!additions[prefix]) additions[prefix] = {};

        additions[prefix][iconName] = icon;
      });

      return additions;
    }
  }]);
  return Library;
}();

function prepIcon(icon) {
  var width = icon[0];
  var height = icon[1];
  var vectorData = icon.slice(4);

  return {
    found: true,
    width: width,
    height: height,
    icon: { tag: 'path', attributes: { fill: 'currentColor', d: vectorData[0] } }
  };
}

var _cssInserted = false;

function ensureCss() {
  if (!config$1.autoAddCss) {
    return;
  }

  if (!_cssInserted) {
    insertCss(css());
  }

  _cssInserted = true;
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });

  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });

  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;

      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });

  return val;
}

function findIconDefinition(params) {
  var _params$prefix = params.prefix,
      prefix = _params$prefix === undefined ? 'fa' : _params$prefix,
      iconName = params.iconName;


  if (!iconName) return;

  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});

    var mask = params.mask;


    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _extends({}, params, { mask: mask }));
  };
}

var library = new Library();

var noAuto = function noAuto() {
  auto(false);
  disconnect();
};

var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      ensureCss();

      var _params$node = params.node,
          node = _params$node === undefined ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === undefined ? function () {} : _params$callback;


      if (config$1.searchPseudoElements) {
        searchPseudoElements(node);
      }

      onTree(node, callback);
    }
  },

  css: css,

  insertCss: function insertCss$$1() {
    insertCss(css());
  }
};

var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};

var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === undefined ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === undefined ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === undefined ? null : _params$mask,
      _params$title = params.title,
      title = _params$title === undefined ? null : _params$title,
      _params$classes = params.classes,
      classes = _params$classes === undefined ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === undefined ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === undefined ? {} : _params$styles;


  if (!iconDefinition) return;

  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;


  return apiObject(_extends({ type: 'icon' }, iconDefinition), function () {
    ensureCss();

    if (config$1.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = config$1.replacementClass + '-title-' + nextUniqueId();
      } else {
        attributes['aria-hidden'] = 'true';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: prepIcon(icon),
        mask: mask ? prepIcon(mask.icon) : { found: false, width: null, height: null, icon: {} }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _extends({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});

var text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === undefined ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === undefined ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === undefined ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === undefined ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === undefined ? {} : _params$styles2;


  return apiObject({ type: 'text', content: content }, function () {
    ensureCss();

    return makeLayersTextAbstract({
      content: content,
      transform: _extends({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: [config$1.familyPrefix + '-layers-text'].concat(toConsumableArray(classes))
      }
    });
  });
};

var layer = function layer(assembler) {
  return apiObject({ type: 'layer' }, function () {
    ensureCss();

    var children = [];

    assembler(function (args) {
      Array.isArray(args) ? args.map(function (a) {
        children = children.concat(a.abstract);
      }) : children = children.concat(args.abstract);
    });

    return [{
      tag: 'span',
      attributes: { class: config$1.familyPrefix + '-layers' },
      children: children
    }];
  });
};

var api$1 = {
  noAuto: noAuto,
  dom: dom,
  library: library,
  parse: parse,
  findIconDefinition: findIconDefinition,
  icon: icon,
  text: text,
  layer: layer
};

var autoReplace = function autoReplace() {
  if (IS_DOM && config$1.autoReplaceSvg) api$1.dom.i2svg({ node: DOCUMENT });
};

function bootstrap() {
  if (IS_BROWSER) {
    if (!WINDOW.FontAwesome) {
      WINDOW.FontAwesome = api$1;
    }

    domready(function () {
      if (Object.keys(namespace.styles).length > 0) {
        autoReplace();
      }

      if (config$1.observeMutations && typeof MutationObserver === 'function') {
        observe({
          treeCallback: onTree,
          nodeCallback: onNode,
          pseudoElementsCallback: searchPseudoElements
        });
      }
    });
  }

  namespace.hooks = _extends({}, namespace.hooks, {

    addPack: function addPack(prefix, icons) {
      namespace.styles[prefix] = _extends({}, namespace.styles[prefix] || {}, icons);

      build();
      autoReplace();
    },

    addShims: function addShims(shims) {
      var _namespace$shims;

      (_namespace$shims = namespace.shims).push.apply(_namespace$shims, toConsumableArray(shims));

      build();
      autoReplace();
    }
  });
}

Object.defineProperty(api$1, 'config', {
  get: function get() {
    return config$1;
  },

  set: function set(newConfig) {
    update(newConfig);
  }
});

if (IS_DOM) bunker(bootstrap);

var config = api$1.config;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api$1);


/***/ }),

/***/ "./src/data/contacts.js":
/*!******************************!*\
  !*** ./src/data/contacts.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contacts": () => (/* binding */ contacts)
/* harmony export */ });
var contacts = [{
  id: 1,
  name: "John",
  phoneNumber: "0847759632",
  email: "john@john.com"
}, {
  id: 2,
  name: "Merrie",
  phoneNumber: "0845996111",
  email: "merrie@merrie.com"
}, {
  id: 3,
  name: "Adam",
  phoneNumber: "0866592475",
  email: "adam@stamat.com"
}, {
  id: 4,
  name: "Peter",
  phoneNumber: "0866592475",
  email: "peter@peter.com"
}, {
  id: 5,
  name: "Max",
  phoneNumber: "0866592475",
  email: "max@max.com"
}, {
  id: 6,
  name: "David",
  phoneNumber: "0866592475",
  email: "david@david.com"
}];

/***/ }),

/***/ "./src/js/Template.js":
/*!****************************!*\
  !*** ./src/js/Template.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Partial": () => (/* binding */ Partial),
/* harmony export */   "Template": () => (/* binding */ Template)
/* harmony export */ });
/* harmony import */ var _handlebars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlebars */ "./src/js/handlebars.js");
/* harmony import */ var _handlebars__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_handlebars__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @format */

var Partial = /*#__PURE__*/_createClass(function Partial(path, name, data) {
  _classCallCheck(this, Partial);

  this.name = name;
  this.path = path;
  this.data = data;
});
var Template = /*#__PURE__*/function () {
  function Template(path, data, el, partials) {
    _classCallCheck(this, Template);

    this.path = path;
    this.data = data;
    this.el = el;
    this.partials = partials;
  }

  _createClass(Template, [{
    key: "render",
    value: function render() {
      // check if there are partials we need to register or not
      // Load the partials
      _handlebars__WEBPACK_IMPORTED_MODULE_0___default().registerPartial(this.partials.name, this.partials.path());
      var html = this.path();
      var template = _handlebars__WEBPACK_IMPORTED_MODULE_0___default().compile(html);
      var result = template(this.data);
      document.querySelector(this.el).innerHTML = result;
    }
  }]);

  return Template;
}();

/***/ }),

/***/ "./src/js/handlebars.js":
/*!******************************!*\
  !*** ./src/js/handlebars.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**!

 @license
 handlebars v4.7.7

Copyright (C) 2011-2019 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/
      // The require function

      /******/

      function __nested_webpack_require_2184__(moduleId) {
        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId])
          /******/
          return installedModules[moduleId].exports;
        /******/
        // Create a new module (and put it into the cache)

        /******/

        var module = installedModules[moduleId] = {
          /******/
          exports: {},

          /******/
          id: moduleId,

          /******/
          loaded: false
          /******/

        };
        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_2184__);
        /******/
        // Flag the module as loaded

        /******/

        module.loaded = true;
        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __nested_webpack_require_2184__.m = modules;
      /******/
      // expose the module cache

      /******/

      __nested_webpack_require_2184__.c = installedModules;
      /******/
      // __webpack_public_path__

      /******/

      __nested_webpack_require_2184__.p = "";
      /******/
      // Load entry module and return exports

      /******/

      return __nested_webpack_require_2184__(0);
      /******/
    }
    /************************************************************************/

    /******/
    ([
    /* 0 */

    /***/
    function (module, exports, __nested_webpack_require_3757__) {
      'use strict';

      var _interopRequireDefault = __nested_webpack_require_3757__(1)['default'];

      exports.__esModule = true;

      var _handlebarsRuntime = __nested_webpack_require_3757__(2);

      var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime); // Compiler imports


      var _handlebarsCompilerAst = __nested_webpack_require_3757__(45);

      var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);

      var _handlebarsCompilerBase = __nested_webpack_require_3757__(46);

      var _handlebarsCompilerCompiler = __nested_webpack_require_3757__(51);

      var _handlebarsCompilerJavascriptCompiler = __nested_webpack_require_3757__(52);

      var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);

      var _handlebarsCompilerVisitor = __nested_webpack_require_3757__(49);

      var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);

      var _handlebarsNoConflict = __nested_webpack_require_3757__(44);

      var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

      var _create = _handlebarsRuntime2['default'].create;

      function create() {
        var hb = _create();

        hb.compile = function (input, options) {
          return _handlebarsCompilerCompiler.compile(input, options, hb);
        };

        hb.precompile = function (input, options) {
          return _handlebarsCompilerCompiler.precompile(input, options, hb);
        };

        hb.AST = _handlebarsCompilerAst2['default'];
        hb.Compiler = _handlebarsCompilerCompiler.Compiler;
        hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2['default'];
        hb.Parser = _handlebarsCompilerBase.parser;
        hb.parse = _handlebarsCompilerBase.parse;
        hb.parseWithoutProcessing = _handlebarsCompilerBase.parseWithoutProcessing;
        return hb;
      }

      var inst = create();
      inst.create = create;

      _handlebarsNoConflict2['default'](inst);

      inst.Visitor = _handlebarsCompilerVisitor2['default'];
      inst['default'] = inst;
      exports['default'] = inst;
      module.exports = exports['default'];
      /***/
    },
    /* 1 */

    /***/
    function (module, exports) {
      "use strict";

      exports["default"] = function (obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      };

      exports.__esModule = true;
      /***/
    },
    /* 2 */

    /***/
    function (module, exports, __nested_webpack_require_6237__) {
      'use strict';

      var _interopRequireWildcard = __nested_webpack_require_6237__(3)['default'];

      var _interopRequireDefault = __nested_webpack_require_6237__(1)['default'];

      exports.__esModule = true;

      var _handlebarsBase = __nested_webpack_require_6237__(4);

      var base = _interopRequireWildcard(_handlebarsBase); // Each of these augment the Handlebars object. No need to setup here.
      // (This is done to easily share code between commonjs and browse envs)


      var _handlebarsSafeString = __nested_webpack_require_6237__(37);

      var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

      var _handlebarsException = __nested_webpack_require_6237__(6);

      var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

      var _handlebarsUtils = __nested_webpack_require_6237__(5);

      var Utils = _interopRequireWildcard(_handlebarsUtils);

      var _handlebarsRuntime = __nested_webpack_require_6237__(38);

      var runtime = _interopRequireWildcard(_handlebarsRuntime);

      var _handlebarsNoConflict = __nested_webpack_require_6237__(44);

      var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict); // For compatibility and usage outside of module systems, make the Handlebars object a namespace


      function create() {
        var hb = new base.HandlebarsEnvironment();
        Utils.extend(hb, base);
        hb.SafeString = _handlebarsSafeString2['default'];
        hb.Exception = _handlebarsException2['default'];
        hb.Utils = Utils;
        hb.escapeExpression = Utils.escapeExpression;
        hb.VM = runtime;

        hb.template = function (spec) {
          return runtime.template(spec, hb);
        };

        return hb;
      }

      var inst = create();
      inst.create = create;

      _handlebarsNoConflict2['default'](inst);

      inst['default'] = inst;
      exports['default'] = inst;
      module.exports = exports['default'];
      /***/
    },
    /* 3 */

    /***/
    function (module, exports) {
      "use strict";

      exports["default"] = function (obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};

          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }

          newObj["default"] = obj;
          return newObj;
        }
      };

      exports.__esModule = true;
      /***/
    },
    /* 4 */

    /***/
    function (module, exports, __nested_webpack_require_8760__) {
      'use strict';

      var _interopRequireDefault = __nested_webpack_require_8760__(1)['default'];

      exports.__esModule = true;
      exports.HandlebarsEnvironment = HandlebarsEnvironment;

      var _utils = __nested_webpack_require_8760__(5);

      var _exception = __nested_webpack_require_8760__(6);

      var _exception2 = _interopRequireDefault(_exception);

      var _helpers = __nested_webpack_require_8760__(10);

      var _decorators = __nested_webpack_require_8760__(30);

      var _logger = __nested_webpack_require_8760__(32);

      var _logger2 = _interopRequireDefault(_logger);

      var _internalProtoAccess = __nested_webpack_require_8760__(33);

      var VERSION = '4.7.7';
      exports.VERSION = VERSION;
      var COMPILER_REVISION = 8;
      exports.COMPILER_REVISION = COMPILER_REVISION;
      var LAST_COMPATIBLE_COMPILER_REVISION = 7;
      exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
      var REVISION_CHANGES = {
        1: '<= 1.0.rc.2',
        // 1.0.rc.2 is actually rev2 but doesn't report it
        2: '== 1.0.0-rc.3',
        3: '== 1.0.0-rc.4',
        4: '== 1.x.x',
        5: '== 2.0.0-alpha.x',
        6: '>= 2.0.0-beta.1',
        7: '>= 4.0.0 <4.3.0',
        8: '>= 4.3.0'
      };
      exports.REVISION_CHANGES = REVISION_CHANGES;
      var objectType = '[object Object]';

      function HandlebarsEnvironment(helpers, partials, decorators) {
        this.helpers = helpers || {};
        this.partials = partials || {};
        this.decorators = decorators || {};

        _helpers.registerDefaultHelpers(this);

        _decorators.registerDefaultDecorators(this);
      }

      HandlebarsEnvironment.prototype = {
        constructor: HandlebarsEnvironment,
        logger: _logger2['default'],
        log: _logger2['default'].log,
        registerHelper: function registerHelper(name, fn) {
          if (_utils.toString.call(name) === objectType) {
            if (fn) {
              throw new _exception2['default']('Arg not supported with multiple helpers');
            }

            _utils.extend(this.helpers, name);
          } else {
            this.helpers[name] = fn;
          }
        },
        unregisterHelper: function unregisterHelper(name) {
          delete this.helpers[name];
        },
        registerPartial: function registerPartial(name, partial) {
          if (_utils.toString.call(name) === objectType) {
            _utils.extend(this.partials, name);
          } else {
            if (typeof partial === 'undefined') {
              throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
            }

            this.partials[name] = partial;
          }
        },
        unregisterPartial: function unregisterPartial(name) {
          delete this.partials[name];
        },
        registerDecorator: function registerDecorator(name, fn) {
          if (_utils.toString.call(name) === objectType) {
            if (fn) {
              throw new _exception2['default']('Arg not supported with multiple decorators');
            }

            _utils.extend(this.decorators, name);
          } else {
            this.decorators[name] = fn;
          }
        },
        unregisterDecorator: function unregisterDecorator(name) {
          delete this.decorators[name];
        },

        /**
         * Reset the memory of illegal property accesses that have already been logged.
         * @deprecated should only be used in handlebars test-cases
         */
        resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
          _internalProtoAccess.resetLoggedProperties();
        }
      };
      var log = _logger2['default'].log;
      exports.log = log;
      exports.createFrame = _utils.createFrame;
      exports.logger = _logger2['default'];
      /***/
    },
    /* 5 */

    /***/
    function (module, exports) {
      'use strict';

      exports.__esModule = true;
      exports.extend = extend;
      exports.indexOf = indexOf;
      exports.escapeExpression = escapeExpression;
      exports.isEmpty = isEmpty;
      exports.createFrame = createFrame;
      exports.blockParams = blockParams;
      exports.appendContextPath = appendContextPath;
      var escape = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '`': '&#x60;',
        '=': '&#x3D;'
      };
      var badChars = /[&<>"'`=]/g,
          possible = /[&<>"'`=]/;

      function escapeChar(chr) {
        return escape[chr];
      }

      function extend(obj
      /* , ...source */
      ) {
        for (var i = 1; i < arguments.length; i++) {
          for (var key in arguments[i]) {
            if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
              obj[key] = arguments[i][key];
            }
          }
        }

        return obj;
      }

      var toString = Object.prototype.toString;
      exports.toString = toString; // Sourced from lodash
      // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt

      /* eslint-disable func-style */

      var isFunction = function isFunction(value) {
        return typeof value === 'function';
      }; // fallback for older versions of Chrome and Safari

      /* istanbul ignore next */


      if (isFunction(/x/)) {
        exports.isFunction = isFunction = function isFunction(value) {
          return typeof value === 'function' && toString.call(value) === '[object Function]';
        };
      }

      exports.isFunction = isFunction;
      /* eslint-enable func-style */

      /* istanbul ignore next */

      var isArray = Array.isArray || function (value) {
        return value && _typeof(value) === 'object' ? toString.call(value) === '[object Array]' : false;
      };

      exports.isArray = isArray; // Older IE versions do not directly support indexOf so we must implement our own, sadly.

      function indexOf(array, value) {
        for (var i = 0, len = array.length; i < len; i++) {
          if (array[i] === value) {
            return i;
          }
        }

        return -1;
      }

      function escapeExpression(string) {
        if (typeof string !== 'string') {
          // don't escape SafeStrings, since they're already safe
          if (string && string.toHTML) {
            return string.toHTML();
          } else if (string == null) {
            return '';
          } else if (!string) {
            return string + '';
          } // Force a string conversion as this will be done by the append regardless and
          // the regex test will do this transparently behind the scenes, causing issues if
          // an object's to string has escaped characters in it.


          string = '' + string;
        }

        if (!possible.test(string)) {
          return string;
        }

        return string.replace(badChars, escapeChar);
      }

      function isEmpty(value) {
        if (!value && value !== 0) {
          return true;
        } else if (isArray(value) && value.length === 0) {
          return true;
        } else {
          return false;
        }
      }

      function createFrame(object) {
        var frame = extend({}, object);
        frame._parent = object;
        return frame;
      }

      function blockParams(params, ids) {
        params.path = ids;
        return params;
      }

      function appendContextPath(contextPath, id) {
        return (contextPath ? contextPath + '.' : '') + id;
      }
      /***/

    },
    /* 6 */

    /***/
    function (module, exports, __nested_webpack_require_16332__) {
      'use strict';

      var _Object$defineProperty = __nested_webpack_require_16332__(7)['default'];

      exports.__esModule = true;
      var errorProps = ['description', 'fileName', 'lineNumber', 'endLineNumber', 'message', 'name', 'number', 'stack'];

      function Exception(message, node) {
        var loc = node && node.loc,
            line = undefined,
            endLineNumber = undefined,
            column = undefined,
            endColumn = undefined;

        if (loc) {
          line = loc.start.line;
          endLineNumber = loc.end.line;
          column = loc.start.column;
          endColumn = loc.end.column;
          message += ' - ' + line + ':' + column;
        }

        var tmp = Error.prototype.constructor.call(this, message); // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.

        for (var idx = 0; idx < errorProps.length; idx++) {
          this[errorProps[idx]] = tmp[errorProps[idx]];
        }
        /* istanbul ignore else */


        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, Exception);
        }

        try {
          if (loc) {
            this.lineNumber = line;
            this.endLineNumber = endLineNumber; // Work around issue under safari where we can't directly set the column value

            /* istanbul ignore next */

            if (_Object$defineProperty) {
              Object.defineProperty(this, 'column', {
                value: column,
                enumerable: true
              });
              Object.defineProperty(this, 'endColumn', {
                value: endColumn,
                enumerable: true
              });
            } else {
              this.column = column;
              this.endColumn = endColumn;
            }
          }
        } catch (nop) {
          /* Ignore if the browser is very particular */
        }
      }

      Exception.prototype = new Error();
      exports['default'] = Exception;
      module.exports = exports['default'];
      /***/
    },
    /* 7 */

    /***/
    function (module, exports, __nested_webpack_require_18457__) {
      module.exports = {
        "default": __nested_webpack_require_18457__(8),
        __esModule: true
      };
      /***/
    },
    /* 8 */

    /***/
    function (module, exports, __nested_webpack_require_18655__) {
      var $ = __nested_webpack_require_18655__(9);

      module.exports = function defineProperty(it, key, desc) {
        return $.setDesc(it, key, desc);
      };
      /***/

    },
    /* 9 */

    /***/
    function (module, exports) {
      var $Object = Object;
      module.exports = {
        create: $Object.create,
        getProto: $Object.getPrototypeOf,
        isEnum: {}.propertyIsEnumerable,
        getDesc: $Object.getOwnPropertyDescriptor,
        setDesc: $Object.defineProperty,
        setDescs: $Object.defineProperties,
        getKeys: $Object.keys,
        getNames: $Object.getOwnPropertyNames,
        getSymbols: $Object.getOwnPropertySymbols,
        each: [].forEach
      };
      /***/
    },
    /* 10 */

    /***/
    function (module, exports, __nested_webpack_require_19448__) {
      'use strict';

      var _interopRequireDefault = __nested_webpack_require_19448__(1)['default'];

      exports.__esModule = true;
      exports.registerDefaultHelpers = registerDefaultHelpers;
      exports.moveHelperToHooks = moveHelperToHooks;

      var _helpersBlockHelperMissing = __nested_webpack_require_19448__(11);

      var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

      var _helpersEach = __nested_webpack_require_19448__(12);

      var _helpersEach2 = _interopRequireDefault(_helpersEach);

      var _helpersHelperMissing = __nested_webpack_require_19448__(25);

      var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

      var _helpersIf = __nested_webpack_require_19448__(26);

      var _helpersIf2 = _interopRequireDefault(_helpersIf);

      var _helpersLog = __nested_webpack_require_19448__(27);

      var _helpersLog2 = _interopRequireDefault(_helpersLog);

      var _helpersLookup = __nested_webpack_require_19448__(28);

      var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

      var _helpersWith = __nested_webpack_require_19448__(29);

      var _helpersWith2 = _interopRequireDefault(_helpersWith);

      function registerDefaultHelpers(instance) {
        _helpersBlockHelperMissing2['default'](instance);

        _helpersEach2['default'](instance);

        _helpersHelperMissing2['default'](instance);

        _helpersIf2['default'](instance);

        _helpersLog2['default'](instance);

        _helpersLookup2['default'](instance);

        _helpersWith2['default'](instance);
      }

      function moveHelperToHooks(instance, helperName, keepHelper) {
        if (instance.helpers[helperName]) {
          instance.hooks[helperName] = instance.helpers[helperName];

          if (!keepHelper) {
            delete instance.helpers[helperName];
          }
        }
      }
      /***/

    },
    /* 11 */

    /***/
    function (module, exports, __nested_webpack_require_21352__) {
      'use strict';

      exports.__esModule = true;

      var _utils = __nested_webpack_require_21352__(5);

      exports['default'] = function (instance) {
        instance.registerHelper('blockHelperMissing', function (context, options) {
          var inverse = options.inverse,
              fn = options.fn;

          if (context === true) {
            return fn(this);
          } else if (context === false || context == null) {
            return inverse(this);
          } else if (_utils.isArray(context)) {
            if (context.length > 0) {
              if (options.ids) {
                options.ids = [options.name];
              }

              return instance.helpers.each(context, options);
            } else {
              return inverse(this);
            }
          } else {
            if (options.data && options.ids) {
              var data = _utils.createFrame(options.data);

              data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
              options = {
                data: data
              };
            }

            return fn(context, options);
          }
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 12 */

    /***/
    function (module, exports, __nested_webpack_require_22655__) {
      /* WEBPACK VAR INJECTION */
      (function (global) {
        'use strict';

        var _Object$keys = __nested_webpack_require_22655__(13)['default'];

        var _interopRequireDefault = __nested_webpack_require_22655__(1)['default'];

        exports.__esModule = true;

        var _utils = __nested_webpack_require_22655__(5);

        var _exception = __nested_webpack_require_22655__(6);

        var _exception2 = _interopRequireDefault(_exception);

        exports['default'] = function (instance) {
          instance.registerHelper('each', function (context, options) {
            if (!options) {
              throw new _exception2['default']('Must pass iterator to #each');
            }

            var fn = options.fn,
                inverse = options.inverse,
                i = 0,
                ret = '',
                data = undefined,
                contextPath = undefined;

            if (options.data && options.ids) {
              contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
            }

            if (_utils.isFunction(context)) {
              context = context.call(this);
            }

            if (options.data) {
              data = _utils.createFrame(options.data);
            }

            function execIteration(field, index, last) {
              if (data) {
                data.key = field;
                data.index = index;
                data.first = index === 0;
                data.last = !!last;

                if (contextPath) {
                  data.contextPath = contextPath + field;
                }
              }

              ret = ret + fn(context[field], {
                data: data,
                blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
              });
            }

            if (context && _typeof(context) === 'object') {
              if (_utils.isArray(context)) {
                for (var j = context.length; i < j; i++) {
                  if (i in context) {
                    execIteration(i, i, i === context.length - 1);
                  }
                }
              } else if (global.Symbol && context[global.Symbol.iterator]) {
                var newContext = [];
                var iterator = context[global.Symbol.iterator]();

                for (var it = iterator.next(); !it.done; it = iterator.next()) {
                  newContext.push(it.value);
                }

                context = newContext;

                for (var j = context.length; i < j; i++) {
                  execIteration(i, i, i === context.length - 1);
                }
              } else {
                (function () {
                  var priorKey = undefined;

                  _Object$keys(context).forEach(function (key) {
                    // We're running the iterations one step out of sync so we can detect
                    // the last iteration without have to scan the object twice and create
                    // an itermediate keys array.
                    if (priorKey !== undefined) {
                      execIteration(priorKey, i - 1);
                    }

                    priorKey = key;
                    i++;
                  });

                  if (priorKey !== undefined) {
                    execIteration(priorKey, i - 1, true);
                  }
                })();
              }
            }

            if (i === 0) {
              ret = inverse(this);
            }

            return ret;
          });
        };

        module.exports = exports['default'];
        /* WEBPACK VAR INJECTION */
      }).call(exports, function () {
        return this;
      }());
      /***/
    },
    /* 13 */

    /***/
    function (module, exports, __nested_webpack_require_26432__) {
      module.exports = {
        "default": __nested_webpack_require_26432__(14),
        __esModule: true
      };
      /***/
    },
    /* 14 */

    /***/
    function (module, exports, __nested_webpack_require_26632__) {
      __nested_webpack_require_26632__(15);

      module.exports = __nested_webpack_require_26632__(21).Object.keys;
      /***/
    },
    /* 15 */

    /***/
    function (module, exports, __nested_webpack_require_26821__) {
      // 19.1.2.14 Object.keys(O)
      var toObject = __nested_webpack_require_26821__(16);

      __nested_webpack_require_26821__(18)('keys', function ($keys) {
        return function keys(it) {
          return $keys(toObject(it));
        };
      });
      /***/

    },
    /* 16 */

    /***/
    function (module, exports, __nested_webpack_require_27151__) {
      // 7.1.13 ToObject(argument)
      var defined = __nested_webpack_require_27151__(17);

      module.exports = function (it) {
        return Object(defined(it));
      };
      /***/

    },
    /* 17 */

    /***/
    function (module, exports) {
      // 7.2.1 RequireObjectCoercible(argument)
      module.exports = function (it) {
        if (it == undefined) throw TypeError("Can't call method on  " + it);
        return it;
      };
      /***/

    },
    /* 18 */

    /***/
    function (module, exports, __nested_webpack_require_27683__) {
      // most Object methods by ES6 should accept primitives
      var $export = __nested_webpack_require_27683__(19),
          core = __nested_webpack_require_27683__(21),
          fails = __nested_webpack_require_27683__(24);

      module.exports = function (KEY, exec) {
        var fn = (core.Object || {})[KEY] || Object[KEY],
            exp = {};
        exp[KEY] = exec(fn);
        $export($export.S + $export.F * fails(function () {
          fn(1);
        }), 'Object', exp);
      };
      /***/

    },
    /* 19 */

    /***/
    function (module, exports, __nested_webpack_require_28242__) {
      var global = __nested_webpack_require_28242__(20),
          core = __nested_webpack_require_28242__(21),
          ctx = __nested_webpack_require_28242__(22),
          PROTOTYPE = 'prototype';

      var $export = function $export(type, name, source) {
        var IS_FORCED = type & $export.F,
            IS_GLOBAL = type & $export.G,
            IS_STATIC = type & $export.S,
            IS_PROTO = type & $export.P,
            IS_BIND = type & $export.B,
            IS_WRAP = type & $export.W,
            exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
            target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
            key,
            own,
            out;
        if (IS_GLOBAL) source = name;

        for (key in source) {
          // contains in native
          own = !IS_FORCED && target && key in target;
          if (own && key in exports) continue; // export native or passed

          out = own ? target[key] : source[key]; // prevent global pollution for namespaces

          exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] // bind timers to global for call from export context
          : IS_BIND && own ? ctx(out, global) // wrap global constructors for prevent change them in library
          : IS_WRAP && target[key] == out ? function (C) {
            var F = function F(param) {
              return this instanceof C ? new C(param) : C(param);
            };

            F[PROTOTYPE] = C[PROTOTYPE];
            return F; // make static versions for prototype methods
          }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
          if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
        }
      }; // type bitmap


      $export.F = 1; // forced

      $export.G = 2; // global

      $export.S = 4; // static

      $export.P = 8; // proto

      $export.B = 16; // bind

      $export.W = 32; // wrap

      module.exports = $export;
      /***/
    },
    /* 20 */

    /***/
    function (module, exports) {
      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
      if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

      /***/
    },
    /* 21 */

    /***/
    function (module, exports) {
      var core = module.exports = {
        version: '1.2.6'
      };
      if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

      /***/
    },
    /* 22 */

    /***/
    function (module, exports, __nested_webpack_require_30972__) {
      // optional / simple context binding
      var aFunction = __nested_webpack_require_30972__(23);

      module.exports = function (fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;

        switch (length) {
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

        return function
          /* ...args */
        () {
          return fn.apply(that, arguments);
        };
      };
      /***/

    },
    /* 23 */

    /***/
    function (module, exports) {
      module.exports = function (it) {
        if (typeof it != 'function') throw TypeError(it + ' is not a function!');
        return it;
      };
      /***/

    },
    /* 24 */

    /***/
    function (module, exports) {
      module.exports = function (exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };
      /***/

    },
    /* 25 */

    /***/
    function (module, exports, __nested_webpack_require_32230__) {
      'use strict';

      var _interopRequireDefault = __nested_webpack_require_32230__(1)['default'];

      exports.__esModule = true;

      var _exception = __nested_webpack_require_32230__(6);

      var _exception2 = _interopRequireDefault(_exception);

      exports['default'] = function (instance) {
        instance.registerHelper('helperMissing', function ()
        /* [args, ]options */
        {
          if (arguments.length === 1) {
            // A missing field in a {{foo}} construct.
            return undefined;
          } else {
            // Someone is actually trying to call something, blow up.
            throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
          }
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 26 */

    /***/
    function (module, exports, __nested_webpack_require_33115__) {
      'use strict';

      var _interopRequireDefault = __nested_webpack_require_33115__(1)['default'];

      exports.__esModule = true;

      var _utils = __nested_webpack_require_33115__(5);

      var _exception = __nested_webpack_require_33115__(6);

      var _exception2 = _interopRequireDefault(_exception);

      exports['default'] = function (instance) {
        instance.registerHelper('if', function (conditional, options) {
          if (arguments.length != 2) {
            throw new _exception2['default']('#if requires exactly one argument');
          }

          if (_utils.isFunction(conditional)) {
            conditional = conditional.call(this);
          } // Default behavior is to render the positive path if the value is truthy and not empty.
          // The `includeZero` option may be set to treat the condtional as purely not empty based on the
          // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.


          if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
            return options.inverse(this);
          } else {
            return options.fn(this);
          }
        });
        instance.registerHelper('unless', function (conditional, options) {
          if (arguments.length != 2) {
            throw new _exception2['default']('#unless requires exactly one argument');
          }

          return instance.helpers['if'].call(this, conditional, {
            fn: options.inverse,
            inverse: options.fn,
            hash: options.hash
          });
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 27 */

    /***/
    function (module, exports) {
      'use strict';

      exports.__esModule = true;

      exports['default'] = function (instance) {
        instance.registerHelper('log', function ()
        /* message, options */
        {
          var args = [undefined],
              options = arguments[arguments.length - 1];

          for (var i = 0; i < arguments.length - 1; i++) {
            args.push(arguments[i]);
          }

          var level = 1;

          if (options.hash.level != null) {
            level = options.hash.level;
          } else if (options.data && options.data.level != null) {
            level = options.data.level;
          }

          args[0] = level;
          instance.log.apply(instance, args);
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 28 */

    /***/
    function (module, exports) {
      'use strict';

      exports.__esModule = true;

      exports['default'] = function (instance) {
        instance.registerHelper('lookup', function (obj, field, options) {
          if (!obj) {
            // Note for 5.0: Change to "obj == null" in 5.0
            return obj;
          }

          return options.lookupProperty(obj, field);
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 29 */

    /***/
    function (module, exports, __nested_webpack_require_36168__) {
      'use strict';

      var _interopRequireDefault = __nested_webpack_require_36168__(1)['default'];

      exports.__esModule = true;

      var _utils = __nested_webpack_require_36168__(5);

      var _exception = __nested_webpack_require_36168__(6);

      var _exception2 = _interopRequireDefault(_exception);

      exports['default'] = function (instance) {
        instance.registerHelper('with', function (context, options) {
          if (arguments.length != 2) {
            throw new _exception2['default']('#with requires exactly one argument');
          }

          if (_utils.isFunction(context)) {
            context = context.call(this);
          }

          var fn = options.fn;

          if (!_utils.isEmpty(context)) {
            var data = options.data;

            if (options.data && options.ids) {
              data = _utils.createFrame(options.data);
              data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
            }

            return fn(context, {
              data: data,
              blockParams: _utils.blockParams([context], [data && data.contextPath])
            });
          } else {
            return options.inverse(this);
          }
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 30 */

    /***/
    function (module, exports, __nested_webpack_require_37527__) {
      'use strict';

      var _interopRequireDefault = __nested_webpack_require_37527__(1)['default'];

      exports.__esModule = true;
      exports.registerDefaultDecorators = registerDefaultDecorators;

      var _decoratorsInline = __nested_webpack_require_37527__(31);

      var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

      function registerDefaultDecorators(instance) {
        _decoratorsInline2['default'](instance);
      }
      /***/

    },
    /* 31 */

    /***/
    function (module, exports, __nested_webpack_require_38061__) {
      'use strict';

      exports.__esModule = true;

      var _utils = __nested_webpack_require_38061__(5);

      exports['default'] = function (instance) {
        instance.registerDecorator('inline', function (fn, props, container, options) {
          var ret = fn;

          if (!props.partials) {
            props.partials = {};

            ret = function ret(context, options) {
              // Create a new partials stack frame prior to exec.
              var original = container.partials;
              container.partials = _utils.extend({}, original, props.partials);
              var ret = fn(context, options);
              container.partials = original;
              return ret;
            };
          }

          props.partials[options.args[0]] = options.fn;
          return ret;
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 32 */

    /***/
    function (module, exports, __nested_webpack_require_39020__) {
      'use strict';

      exports.__esModule = true;

      var _utils = __nested_webpack_require_39020__(5);

      var logger = {
        methodMap: ['debug', 'info', 'warn', 'error'],
        level: 'info',
        // Maps a given level value to the `methodMap` indexes above.
        lookupLevel: function lookupLevel(level) {
          if (typeof level === 'string') {
            var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());

            if (levelMap >= 0) {
              level = levelMap;
            } else {
              level = parseInt(level, 10);
            }
          }

          return level;
        },
        // Can be overridden in the host environment
        log: function log(level) {
          level = logger.lookupLevel(level);

          if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
            var method = logger.methodMap[level]; // eslint-disable-next-line no-console

            if (!console[method]) {
              method = 'log';
            }

            for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              message[_key - 1] = arguments[_key];
            }

            console[method].apply(console, message); // eslint-disable-line no-console
          }
        }
      };
      exports['default'] = logger;
      module.exports = exports['default'];
      /***/
    },
    /* 33 */

    /***/
    function (module, exports, __nested_webpack_require_40534__) {
      'use strict';

      var _Object$create = __nested_webpack_require_40534__(34)['default'];

      var _Object$keys = __nested_webpack_require_40534__(13)['default'];

      var _interopRequireWildcard = __nested_webpack_require_40534__(3)['default'];

      exports.__esModule = true;
      exports.createProtoAccessControl = createProtoAccessControl;
      exports.resultIsAllowed = resultIsAllowed;
      exports.resetLoggedProperties = resetLoggedProperties;

      var _createNewLookupObject = __nested_webpack_require_40534__(36);

      var _logger = __nested_webpack_require_40534__(32);

      var logger = _interopRequireWildcard(_logger);

      var loggedProperties = _Object$create(null);

      function createProtoAccessControl(runtimeOptions) {
        var defaultMethodWhiteList = _Object$create(null);

        defaultMethodWhiteList['constructor'] = false;
        defaultMethodWhiteList['__defineGetter__'] = false;
        defaultMethodWhiteList['__defineSetter__'] = false;
        defaultMethodWhiteList['__lookupGetter__'] = false;

        var defaultPropertyWhiteList = _Object$create(null); // eslint-disable-next-line no-proto


        defaultPropertyWhiteList['__proto__'] = false;
        return {
          properties: {
            whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
            defaultValue: runtimeOptions.allowProtoPropertiesByDefault
          },
          methods: {
            whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
            defaultValue: runtimeOptions.allowProtoMethodsByDefault
          }
        };
      }

      function resultIsAllowed(result, protoAccessControl, propertyName) {
        if (typeof result === 'function') {
          return checkWhiteList(protoAccessControl.methods, propertyName);
        } else {
          return checkWhiteList(protoAccessControl.properties, propertyName);
        }
      }

      function checkWhiteList(protoAccessControlForType, propertyName) {
        if (protoAccessControlForType.whitelist[propertyName] !== undefined) {
          return protoAccessControlForType.whitelist[propertyName] === true;
        }

        if (protoAccessControlForType.defaultValue !== undefined) {
          return protoAccessControlForType.defaultValue;
        }

        logUnexpecedPropertyAccessOnce(propertyName);
        return false;
      }

      function logUnexpecedPropertyAccessOnce(propertyName) {
        if (loggedProperties[propertyName] !== true) {
          loggedProperties[propertyName] = true;
          logger.log('error', 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + 'You can add a runtime option to disable the check or this warning:\n' + 'See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details');
        }
      }

      function resetLoggedProperties() {
        _Object$keys(loggedProperties).forEach(function (propertyName) {
          delete loggedProperties[propertyName];
        });
      }
      /***/

    },
    /* 34 */

    /***/
    function (module, exports, __nested_webpack_require_43788__) {
      module.exports = {
        "default": __nested_webpack_require_43788__(35),
        __esModule: true
      };
      /***/
    },
    /* 35 */

    /***/
    function (module, exports, __nested_webpack_require_43988__) {
      var $ = __nested_webpack_require_43988__(9);

      module.exports = function create(P, D) {
        return $.create(P, D);
      };
      /***/

    },
    /* 36 */

    /***/
    function (module, exports, __nested_webpack_require_44212__) {
      'use strict';

      var _Object$create = __nested_webpack_require_44212__(34)['default'];

      exports.__esModule = true;
      exports.createNewLookupObject = createNewLookupObject;

      var _utils = __nested_webpack_require_44212__(5);
      /**
       * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
       * The resulting object can be used with "object[property]" to check if a property exists
       * @param {...object} sources a varargs parameter of source objects that will be merged
       * @returns {object}
       */


      function createNewLookupObject() {
        for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
          sources[_key] = arguments[_key];
        }

        return _utils.extend.apply(undefined, [_Object$create(null)].concat(sources));
      }
      /***/

    },
    /* 37 */

    /***/
    function (module, exports) {
      // Build out our basic SafeString type
      'use strict';

      exports.__esModule = true;

      function SafeString(string) {
        this.string = string;
      }

      SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
        return '' + this.string;
      };

      exports['default'] = SafeString;
      module.exports = exports['default'];
      /***/
    },
    /* 38 */

    /***/
    function (module, exports, __nested_webpack_require_45618__) {
      'use strict';

      var _Object$seal = __nested_webpack_require_45618__(39)['default'];

      var _Object$keys = __nested_webpack_require_45618__(13)['default'];

      var _interopRequireWildcard = __nested_webpack_require_45618__(3)['default'];

      var _interopRequireDefault = __nested_webpack_require_45618__(1)['default'];

      exports.__esModule = true;
      exports.checkRevision = checkRevision;
      exports.template = template;
      exports.wrapProgram = wrapProgram;
      exports.resolvePartial = resolvePartial;
      exports.invokePartial = invokePartial;
      exports.noop = noop;

      var _utils = __nested_webpack_require_45618__(5);

      var Utils = _interopRequireWildcard(_utils);

      var _exception = __nested_webpack_require_45618__(6);

      var _exception2 = _interopRequireDefault(_exception);

      var _base = __nested_webpack_require_45618__(4);

      var _helpers = __nested_webpack_require_45618__(10);

      var _internalWrapHelper = __nested_webpack_require_45618__(43);

      var _internalProtoAccess = __nested_webpack_require_45618__(33);

      function checkRevision(compilerInfo) {
        var compilerRevision = compilerInfo && compilerInfo[0] || 1,
            currentRevision = _base.COMPILER_REVISION;

        if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) {
          return;
        }

        if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
          var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
              compilerVersions = _base.REVISION_CHANGES[compilerRevision];
          throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
        } else {
          // Use the embedded version info since the runtime doesn't know about this revision yet
          throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
        }
      }

      function template(templateSpec, env) {
        /* istanbul ignore next */
        if (!env) {
          throw new _exception2['default']('No environment passed to template');
        }

        if (!templateSpec || !templateSpec.main) {
          throw new _exception2['default']('Unknown template object: ' + _typeof(templateSpec));
        }

        templateSpec.main.decorator = templateSpec.main_d; // Note: Using env.VM references rather than local var references throughout this section to allow
        // for external users to override these as pseudo-supported APIs.

        env.VM.checkRevision(templateSpec.compiler); // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)

        var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;

        function invokePartialWrapper(partial, context, options) {
          if (options.hash) {
            context = Utils.extend({}, context, options.hash);

            if (options.ids) {
              options.ids[0] = true;
            }
          }

          partial = env.VM.resolvePartial.call(this, partial, context, options);
          var extendedOptions = Utils.extend({}, options, {
            hooks: this.hooks,
            protoAccessControl: this.protoAccessControl
          });
          var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);

          if (result == null && env.compile) {
            options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
            result = options.partials[options.name](context, extendedOptions);
          }

          if (result != null) {
            if (options.indent) {
              var lines = result.split('\n');

              for (var i = 0, l = lines.length; i < l; i++) {
                if (!lines[i] && i + 1 === l) {
                  break;
                }

                lines[i] = options.indent + lines[i];
              }

              result = lines.join('\n');
            }

            return result;
          } else {
            throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
          }
        } // Just add water


        var container = {
          strict: function strict(obj, name, loc) {
            if (!obj || !(name in obj)) {
              throw new _exception2['default']('"' + name + '" not defined in ' + obj, {
                loc: loc
              });
            }

            return container.lookupProperty(obj, name);
          },
          lookupProperty: function lookupProperty(parent, propertyName) {
            var result = parent[propertyName];

            if (result == null) {
              return result;
            }

            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return result;
            }

            if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) {
              return result;
            }

            return undefined;
          },
          lookup: function lookup(depths, name) {
            var len = depths.length;

            for (var i = 0; i < len; i++) {
              var result = depths[i] && container.lookupProperty(depths[i], name);

              if (result != null) {
                return depths[i][name];
              }
            }
          },
          lambda: function lambda(current, context) {
            return typeof current === 'function' ? current.call(context) : current;
          },
          escapeExpression: Utils.escapeExpression,
          invokePartial: invokePartialWrapper,
          fn: function fn(i) {
            var ret = templateSpec[i];
            ret.decorator = templateSpec[i + '_d'];
            return ret;
          },
          programs: [],
          program: function program(i, data, declaredBlockParams, blockParams, depths) {
            var programWrapper = this.programs[i],
                fn = this.fn(i);

            if (data || depths || blockParams || declaredBlockParams) {
              programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
            } else if (!programWrapper) {
              programWrapper = this.programs[i] = wrapProgram(this, i, fn);
            }

            return programWrapper;
          },
          data: function data(value, depth) {
            while (value && depth--) {
              value = value._parent;
            }

            return value;
          },
          mergeIfNeeded: function mergeIfNeeded(param, common) {
            var obj = param || common;

            if (param && common && param !== common) {
              obj = Utils.extend({}, common, param);
            }

            return obj;
          },
          // An empty object to use as replacement for null-contexts
          nullContext: _Object$seal({}),
          noop: env.VM.noop,
          compilerInfo: templateSpec.compiler
        };

        function ret(context) {
          var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
          var data = options.data;

          ret._setup(options);

          if (!options.partial && templateSpec.useData) {
            data = initData(context, data);
          }

          var depths = undefined,
              blockParams = templateSpec.useBlockParams ? [] : undefined;

          if (templateSpec.useDepths) {
            if (options.depths) {
              depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
            } else {
              depths = [context];
            }
          }

          function main(context
          /*, options*/
          ) {
            return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
          }

          main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
          return main(context, options);
        }

        ret.isTop = true;

        ret._setup = function (options) {
          if (!options.partial) {
            var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
            wrapHelpersToPassLookupProperty(mergedHelpers, container);
            container.helpers = mergedHelpers;

            if (templateSpec.usePartial) {
              // Use mergeIfNeeded here to prevent compiling global partials multiple times
              container.partials = container.mergeIfNeeded(options.partials, env.partials);
            }

            if (templateSpec.usePartial || templateSpec.useDecorators) {
              container.decorators = Utils.extend({}, env.decorators, options.decorators);
            }

            container.hooks = {};
            container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);
            var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;

            _helpers.moveHelperToHooks(container, 'helperMissing', keepHelperInHelpers);

            _helpers.moveHelperToHooks(container, 'blockHelperMissing', keepHelperInHelpers);
          } else {
            container.protoAccessControl = options.protoAccessControl; // internal option

            container.helpers = options.helpers;
            container.partials = options.partials;
            container.decorators = options.decorators;
            container.hooks = options.hooks;
          }
        };

        ret._child = function (i, data, blockParams, depths) {
          if (templateSpec.useBlockParams && !blockParams) {
            throw new _exception2['default']('must pass block params');
          }

          if (templateSpec.useDepths && !depths) {
            throw new _exception2['default']('must pass parent depths');
          }

          return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
        };

        return ret;
      }

      function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
        function prog(context) {
          var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
          var currentDepths = depths;

          if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
            currentDepths = [context].concat(depths);
          }

          return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
        }

        prog = executeDecorators(fn, prog, container, depths, data, blockParams);
        prog.program = i;
        prog.depth = depths ? depths.length : 0;
        prog.blockParams = declaredBlockParams || 0;
        return prog;
      }
      /**
       * This is currently part of the official API, therefore implementation details should not be changed.
       */


      function resolvePartial(partial, context, options) {
        if (!partial) {
          if (options.name === '@partial-block') {
            partial = options.data['partial-block'];
          } else {
            partial = options.partials[options.name];
          }
        } else if (!partial.call && !options.name) {
          // This is a dynamic partial that returned a string
          options.name = partial;
          partial = options.partials[partial];
        }

        return partial;
      }

      function invokePartial(partial, context, options) {
        // Use the current closure context to save the partial-block if this partial
        var currentPartialBlock = options.data && options.data['partial-block'];
        options.partial = true;

        if (options.ids) {
          options.data.contextPath = options.ids[0] || options.data.contextPath;
        }

        var partialBlock = undefined;

        if (options.fn && options.fn !== noop) {
          (function () {
            options.data = _base.createFrame(options.data); // Wrapper function to get access to currentPartialBlock from the closure

            var fn = options.fn;

            partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
              var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1]; // Restore the partial-block from the closure for the execution of the block
              // i.e. the part inside the block of the partial call.

              options.data = _base.createFrame(options.data);
              options.data['partial-block'] = currentPartialBlock;
              return fn(context, options);
            };

            if (fn.partials) {
              options.partials = Utils.extend({}, options.partials, fn.partials);
            }
          })();
        }

        if (partial === undefined && partialBlock) {
          partial = partialBlock;
        }

        if (partial === undefined) {
          throw new _exception2['default']('The partial ' + options.name + ' could not be found');
        } else if (partial instanceof Function) {
          return partial(context, options);
        }
      }

      function noop() {
        return '';
      }

      function initData(context, data) {
        if (!data || !('root' in data)) {
          data = data ? _base.createFrame(data) : {};
          data.root = context;
        }

        return data;
      }

      function executeDecorators(fn, prog, container, depths, data, blockParams) {
        if (fn.decorator) {
          var props = {};
          prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
          Utils.extend(prog, props);
        }

        return prog;
      }

      function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
        _Object$keys(mergedHelpers).forEach(function (helperName) {
          var helper = mergedHelpers[helperName];
          mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
        });
      }

      function passLookupPropertyOption(helper, container) {
        var lookupProperty = container.lookupProperty;
        return _internalWrapHelper.wrapHelper(helper, function (options) {
          return Utils.extend({
            lookupProperty: lookupProperty
          }, options);
        });
      }
      /***/

    },
    /* 39 */

    /***/
    function (module, exports, __nested_webpack_require_60355__) {
      module.exports = {
        "default": __nested_webpack_require_60355__(40),
        __esModule: true
      };
      /***/
    },
    /* 40 */

    /***/
    function (module, exports, __nested_webpack_require_60555__) {
      __nested_webpack_require_60555__(41);

      module.exports = __nested_webpack_require_60555__(21).Object.seal;
      /***/
    },
    /* 41 */

    /***/
    function (module, exports, __nested_webpack_require_60744__) {
      // 19.1.2.17 Object.seal(O)
      var isObject = __nested_webpack_require_60744__(42);

      __nested_webpack_require_60744__(18)('seal', function ($seal) {
        return function seal(it) {
          return $seal && isObject(it) ? $seal(it) : it;
        };
      });
      /***/

    },
    /* 42 */

    /***/
    function (module, exports) {
      module.exports = function (it) {
        return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
      };
      /***/

    },
    /* 43 */

    /***/
    function (module, exports) {
      'use strict';

      exports.__esModule = true;
      exports.wrapHelper = wrapHelper;

      function wrapHelper(helper, transformOptionsFn) {
        if (typeof helper !== 'function') {
          // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
          // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
          return helper;
        }

        var wrapper = function wrapper()
        /* dynamic arguments */
        {
          var options = arguments[arguments.length - 1];
          arguments[arguments.length - 1] = transformOptionsFn(options);
          return helper.apply(this, arguments);
        };

        return wrapper;
      }
      /***/

    },
    /* 44 */

    /***/
    function (module, exports) {
      /* WEBPACK VAR INJECTION */
      (function (global) {
        'use strict';

        exports.__esModule = true;

        exports['default'] = function (Handlebars) {
          /* istanbul ignore next */
          var root = typeof global !== 'undefined' ? global : window,
              $Handlebars = root.Handlebars;
          /* istanbul ignore next */

          Handlebars.noConflict = function () {
            if (root.Handlebars === Handlebars) {
              root.Handlebars = $Handlebars;
            }

            return Handlebars;
          };
        };

        module.exports = exports['default'];
        /* WEBPACK VAR INJECTION */
      }).call(exports, function () {
        return this;
      }());
      /***/
    },
    /* 45 */

    /***/
    function (module, exports) {
      'use strict';

      exports.__esModule = true;
      var AST = {
        // Public API used to evaluate derived attributes regarding AST nodes
        helpers: {
          // a mustache is definitely a helper if:
          // * it is an eligible helper, and
          // * it has at least one parameter or hash segment
          helperExpression: function helperExpression(node) {
            return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
          },
          scopedId: function scopedId(path) {
            return /^\.|this\b/.test(path.original);
          },
          // an ID is simple if it only has one part, and that part is not
          // `..` or `this`.
          simpleId: function simpleId(path) {
            return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
          }
        }
      }; // Must be exported as an object rather than the root of the module as the jison lexer
      // must modify the object to operate properly.

      exports['default'] = AST;
      module.exports = exports['default'];
      /***/
    },
    /* 46 */

    /***/
    function (module, exports, __nested_webpack_require_64192__) {
      'use strict';

      var _interopRequireDefault = __nested_webpack_require_64192__(1)['default'];

      var _interopRequireWildcard = __nested_webpack_require_64192__(3)['default'];

      exports.__esModule = true;
      exports.parseWithoutProcessing = parseWithoutProcessing;
      exports.parse = parse;

      var _parser = __nested_webpack_require_64192__(47);

      var _parser2 = _interopRequireDefault(_parser);

      var _whitespaceControl = __nested_webpack_require_64192__(48);

      var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);

      var _helpers = __nested_webpack_require_64192__(50);

      var Helpers = _interopRequireWildcard(_helpers);

      var _utils = __nested_webpack_require_64192__(5);

      exports.parser = _parser2['default'];
      var yy = {};

      _utils.extend(yy, Helpers);

      function parseWithoutProcessing(input, options) {
        // Just return if an already-compiled AST was passed in.
        if (input.type === 'Program') {
          return input;
        }

        _parser2['default'].yy = yy; // Altering the shared object here, but this is ok as parser is a sync operation

        yy.locInfo = function (locInfo) {
          return new yy.SourceLocation(options && options.srcName, locInfo);
        };

        var ast = _parser2['default'].parse(input);

        return ast;
      }

      function parse(input, options) {
        var ast = parseWithoutProcessing(input, options);
        var strip = new _whitespaceControl2['default'](options);
        return strip.accept(ast);
      }
      /***/

    },
    /* 47 */

    /***/
    function (module, exports) {
      // File ignored in coverage tests via setting in .istanbul.yml

      /* Jison generated parser */
      "use strict";

      exports.__esModule = true;

      var handlebars = function () {
        var parser = {
          trace: function trace() {},
          yy: {},
          symbols_: {
            "error": 2,
            "root": 3,
            "program": 4,
            "EOF": 5,
            "program_repetition0": 6,
            "statement": 7,
            "mustache": 8,
            "block": 9,
            "rawBlock": 10,
            "partial": 11,
            "partialBlock": 12,
            "content": 13,
            "COMMENT": 14,
            "CONTENT": 15,
            "openRawBlock": 16,
            "rawBlock_repetition0": 17,
            "END_RAW_BLOCK": 18,
            "OPEN_RAW_BLOCK": 19,
            "helperName": 20,
            "openRawBlock_repetition0": 21,
            "openRawBlock_option0": 22,
            "CLOSE_RAW_BLOCK": 23,
            "openBlock": 24,
            "block_option0": 25,
            "closeBlock": 26,
            "openInverse": 27,
            "block_option1": 28,
            "OPEN_BLOCK": 29,
            "openBlock_repetition0": 30,
            "openBlock_option0": 31,
            "openBlock_option1": 32,
            "CLOSE": 33,
            "OPEN_INVERSE": 34,
            "openInverse_repetition0": 35,
            "openInverse_option0": 36,
            "openInverse_option1": 37,
            "openInverseChain": 38,
            "OPEN_INVERSE_CHAIN": 39,
            "openInverseChain_repetition0": 40,
            "openInverseChain_option0": 41,
            "openInverseChain_option1": 42,
            "inverseAndProgram": 43,
            "INVERSE": 44,
            "inverseChain": 45,
            "inverseChain_option0": 46,
            "OPEN_ENDBLOCK": 47,
            "OPEN": 48,
            "mustache_repetition0": 49,
            "mustache_option0": 50,
            "OPEN_UNESCAPED": 51,
            "mustache_repetition1": 52,
            "mustache_option1": 53,
            "CLOSE_UNESCAPED": 54,
            "OPEN_PARTIAL": 55,
            "partialName": 56,
            "partial_repetition0": 57,
            "partial_option0": 58,
            "openPartialBlock": 59,
            "OPEN_PARTIAL_BLOCK": 60,
            "openPartialBlock_repetition0": 61,
            "openPartialBlock_option0": 62,
            "param": 63,
            "sexpr": 64,
            "OPEN_SEXPR": 65,
            "sexpr_repetition0": 66,
            "sexpr_option0": 67,
            "CLOSE_SEXPR": 68,
            "hash": 69,
            "hash_repetition_plus0": 70,
            "hashSegment": 71,
            "ID": 72,
            "EQUALS": 73,
            "blockParams": 74,
            "OPEN_BLOCK_PARAMS": 75,
            "blockParams_repetition_plus0": 76,
            "CLOSE_BLOCK_PARAMS": 77,
            "path": 78,
            "dataName": 79,
            "STRING": 80,
            "NUMBER": 81,
            "BOOLEAN": 82,
            "UNDEFINED": 83,
            "NULL": 84,
            "DATA": 85,
            "pathSegments": 86,
            "SEP": 87,
            "$accept": 0,
            "$end": 1
          },
          terminals_: {
            2: "error",
            5: "EOF",
            14: "COMMENT",
            15: "CONTENT",
            18: "END_RAW_BLOCK",
            19: "OPEN_RAW_BLOCK",
            23: "CLOSE_RAW_BLOCK",
            29: "OPEN_BLOCK",
            33: "CLOSE",
            34: "OPEN_INVERSE",
            39: "OPEN_INVERSE_CHAIN",
            44: "INVERSE",
            47: "OPEN_ENDBLOCK",
            48: "OPEN",
            51: "OPEN_UNESCAPED",
            54: "CLOSE_UNESCAPED",
            55: "OPEN_PARTIAL",
            60: "OPEN_PARTIAL_BLOCK",
            65: "OPEN_SEXPR",
            68: "CLOSE_SEXPR",
            72: "ID",
            73: "EQUALS",
            75: "OPEN_BLOCK_PARAMS",
            77: "CLOSE_BLOCK_PARAMS",
            80: "STRING",
            81: "NUMBER",
            82: "BOOLEAN",
            83: "UNDEFINED",
            84: "NULL",
            85: "DATA",
            87: "SEP"
          },
          productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
          performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
            var $0 = $$.length - 1;

            switch (yystate) {
              case 1:
                return $$[$0 - 1];
                break;

              case 2:
                this.$ = yy.prepareProgram($$[$0]);
                break;

              case 3:
                this.$ = $$[$0];
                break;

              case 4:
                this.$ = $$[$0];
                break;

              case 5:
                this.$ = $$[$0];
                break;

              case 6:
                this.$ = $$[$0];
                break;

              case 7:
                this.$ = $$[$0];
                break;

              case 8:
                this.$ = $$[$0];
                break;

              case 9:
                this.$ = {
                  type: 'CommentStatement',
                  value: yy.stripComment($$[$0]),
                  strip: yy.stripFlags($$[$0], $$[$0]),
                  loc: yy.locInfo(this._$)
                };
                break;

              case 10:
                this.$ = {
                  type: 'ContentStatement',
                  original: $$[$0],
                  value: $$[$0],
                  loc: yy.locInfo(this._$)
                };
                break;

              case 11:
                this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                break;

              case 12:
                this.$ = {
                  path: $$[$0 - 3],
                  params: $$[$0 - 2],
                  hash: $$[$0 - 1]
                };
                break;

              case 13:
                this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
                break;

              case 14:
                this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
                break;

              case 15:
                this.$ = {
                  open: $$[$0 - 5],
                  path: $$[$0 - 4],
                  params: $$[$0 - 3],
                  hash: $$[$0 - 2],
                  blockParams: $$[$0 - 1],
                  strip: yy.stripFlags($$[$0 - 5], $$[$0])
                };
                break;

              case 16:
                this.$ = {
                  path: $$[$0 - 4],
                  params: $$[$0 - 3],
                  hash: $$[$0 - 2],
                  blockParams: $$[$0 - 1],
                  strip: yy.stripFlags($$[$0 - 5], $$[$0])
                };
                break;

              case 17:
                this.$ = {
                  path: $$[$0 - 4],
                  params: $$[$0 - 3],
                  hash: $$[$0 - 2],
                  blockParams: $$[$0 - 1],
                  strip: yy.stripFlags($$[$0 - 5], $$[$0])
                };
                break;

              case 18:
                this.$ = {
                  strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]),
                  program: $$[$0]
                };
                break;

              case 19:
                var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
                    program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
                program.chained = true;
                this.$ = {
                  strip: $$[$0 - 2].strip,
                  program: program,
                  chain: true
                };
                break;

              case 20:
                this.$ = $$[$0];
                break;

              case 21:
                this.$ = {
                  path: $$[$0 - 1],
                  strip: yy.stripFlags($$[$0 - 2], $$[$0])
                };
                break;

              case 22:
                this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                break;

              case 23:
                this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                break;

              case 24:
                this.$ = {
                  type: 'PartialStatement',
                  name: $$[$0 - 3],
                  params: $$[$0 - 2],
                  hash: $$[$0 - 1],
                  indent: '',
                  strip: yy.stripFlags($$[$0 - 4], $$[$0]),
                  loc: yy.locInfo(this._$)
                };
                break;

              case 25:
                this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                break;

              case 26:
                this.$ = {
                  path: $$[$0 - 3],
                  params: $$[$0 - 2],
                  hash: $$[$0 - 1],
                  strip: yy.stripFlags($$[$0 - 4], $$[$0])
                };
                break;

              case 27:
                this.$ = $$[$0];
                break;

              case 28:
                this.$ = $$[$0];
                break;

              case 29:
                this.$ = {
                  type: 'SubExpression',
                  path: $$[$0 - 3],
                  params: $$[$0 - 2],
                  hash: $$[$0 - 1],
                  loc: yy.locInfo(this._$)
                };
                break;

              case 30:
                this.$ = {
                  type: 'Hash',
                  pairs: $$[$0],
                  loc: yy.locInfo(this._$)
                };
                break;

              case 31:
                this.$ = {
                  type: 'HashPair',
                  key: yy.id($$[$0 - 2]),
                  value: $$[$0],
                  loc: yy.locInfo(this._$)
                };
                break;

              case 32:
                this.$ = yy.id($$[$0 - 1]);
                break;

              case 33:
                this.$ = $$[$0];
                break;

              case 34:
                this.$ = $$[$0];
                break;

              case 35:
                this.$ = {
                  type: 'StringLiteral',
                  value: $$[$0],
                  original: $$[$0],
                  loc: yy.locInfo(this._$)
                };
                break;

              case 36:
                this.$ = {
                  type: 'NumberLiteral',
                  value: Number($$[$0]),
                  original: Number($$[$0]),
                  loc: yy.locInfo(this._$)
                };
                break;

              case 37:
                this.$ = {
                  type: 'BooleanLiteral',
                  value: $$[$0] === 'true',
                  original: $$[$0] === 'true',
                  loc: yy.locInfo(this._$)
                };
                break;

              case 38:
                this.$ = {
                  type: 'UndefinedLiteral',
                  original: undefined,
                  value: undefined,
                  loc: yy.locInfo(this._$)
                };
                break;

              case 39:
                this.$ = {
                  type: 'NullLiteral',
                  original: null,
                  value: null,
                  loc: yy.locInfo(this._$)
                };
                break;

              case 40:
                this.$ = $$[$0];
                break;

              case 41:
                this.$ = $$[$0];
                break;

              case 42:
                this.$ = yy.preparePath(true, $$[$0], this._$);
                break;

              case 43:
                this.$ = yy.preparePath(false, $$[$0], this._$);
                break;

              case 44:
                $$[$0 - 2].push({
                  part: yy.id($$[$0]),
                  original: $$[$0],
                  separator: $$[$0 - 1]
                });
                this.$ = $$[$0 - 2];
                break;

              case 45:
                this.$ = [{
                  part: yy.id($$[$0]),
                  original: $$[$0]
                }];
                break;

              case 46:
                this.$ = [];
                break;

              case 47:
                $$[$0 - 1].push($$[$0]);
                break;

              case 48:
                this.$ = [];
                break;

              case 49:
                $$[$0 - 1].push($$[$0]);
                break;

              case 50:
                this.$ = [];
                break;

              case 51:
                $$[$0 - 1].push($$[$0]);
                break;

              case 58:
                this.$ = [];
                break;

              case 59:
                $$[$0 - 1].push($$[$0]);
                break;

              case 64:
                this.$ = [];
                break;

              case 65:
                $$[$0 - 1].push($$[$0]);
                break;

              case 70:
                this.$ = [];
                break;

              case 71:
                $$[$0 - 1].push($$[$0]);
                break;

              case 78:
                this.$ = [];
                break;

              case 79:
                $$[$0 - 1].push($$[$0]);
                break;

              case 82:
                this.$ = [];
                break;

              case 83:
                $$[$0 - 1].push($$[$0]);
                break;

              case 86:
                this.$ = [];
                break;

              case 87:
                $$[$0 - 1].push($$[$0]);
                break;

              case 90:
                this.$ = [];
                break;

              case 91:
                $$[$0 - 1].push($$[$0]);
                break;

              case 94:
                this.$ = [];
                break;

              case 95:
                $$[$0 - 1].push($$[$0]);
                break;

              case 98:
                this.$ = [$$[$0]];
                break;

              case 99:
                $$[$0 - 1].push($$[$0]);
                break;

              case 100:
                this.$ = [$$[$0]];
                break;

              case 101:
                $$[$0 - 1].push($$[$0]);
                break;
            }
          },
          table: [{
            3: 1,
            4: 2,
            5: [2, 46],
            6: 3,
            14: [2, 46],
            15: [2, 46],
            19: [2, 46],
            29: [2, 46],
            34: [2, 46],
            48: [2, 46],
            51: [2, 46],
            55: [2, 46],
            60: [2, 46]
          }, {
            1: [3]
          }, {
            5: [1, 4]
          }, {
            5: [2, 2],
            7: 5,
            8: 6,
            9: 7,
            10: 8,
            11: 9,
            12: 10,
            13: 11,
            14: [1, 12],
            15: [1, 20],
            16: 17,
            19: [1, 23],
            24: 15,
            27: 16,
            29: [1, 21],
            34: [1, 22],
            39: [2, 2],
            44: [2, 2],
            47: [2, 2],
            48: [1, 13],
            51: [1, 14],
            55: [1, 18],
            59: 19,
            60: [1, 24]
          }, {
            1: [2, 1]
          }, {
            5: [2, 47],
            14: [2, 47],
            15: [2, 47],
            19: [2, 47],
            29: [2, 47],
            34: [2, 47],
            39: [2, 47],
            44: [2, 47],
            47: [2, 47],
            48: [2, 47],
            51: [2, 47],
            55: [2, 47],
            60: [2, 47]
          }, {
            5: [2, 3],
            14: [2, 3],
            15: [2, 3],
            19: [2, 3],
            29: [2, 3],
            34: [2, 3],
            39: [2, 3],
            44: [2, 3],
            47: [2, 3],
            48: [2, 3],
            51: [2, 3],
            55: [2, 3],
            60: [2, 3]
          }, {
            5: [2, 4],
            14: [2, 4],
            15: [2, 4],
            19: [2, 4],
            29: [2, 4],
            34: [2, 4],
            39: [2, 4],
            44: [2, 4],
            47: [2, 4],
            48: [2, 4],
            51: [2, 4],
            55: [2, 4],
            60: [2, 4]
          }, {
            5: [2, 5],
            14: [2, 5],
            15: [2, 5],
            19: [2, 5],
            29: [2, 5],
            34: [2, 5],
            39: [2, 5],
            44: [2, 5],
            47: [2, 5],
            48: [2, 5],
            51: [2, 5],
            55: [2, 5],
            60: [2, 5]
          }, {
            5: [2, 6],
            14: [2, 6],
            15: [2, 6],
            19: [2, 6],
            29: [2, 6],
            34: [2, 6],
            39: [2, 6],
            44: [2, 6],
            47: [2, 6],
            48: [2, 6],
            51: [2, 6],
            55: [2, 6],
            60: [2, 6]
          }, {
            5: [2, 7],
            14: [2, 7],
            15: [2, 7],
            19: [2, 7],
            29: [2, 7],
            34: [2, 7],
            39: [2, 7],
            44: [2, 7],
            47: [2, 7],
            48: [2, 7],
            51: [2, 7],
            55: [2, 7],
            60: [2, 7]
          }, {
            5: [2, 8],
            14: [2, 8],
            15: [2, 8],
            19: [2, 8],
            29: [2, 8],
            34: [2, 8],
            39: [2, 8],
            44: [2, 8],
            47: [2, 8],
            48: [2, 8],
            51: [2, 8],
            55: [2, 8],
            60: [2, 8]
          }, {
            5: [2, 9],
            14: [2, 9],
            15: [2, 9],
            19: [2, 9],
            29: [2, 9],
            34: [2, 9],
            39: [2, 9],
            44: [2, 9],
            47: [2, 9],
            48: [2, 9],
            51: [2, 9],
            55: [2, 9],
            60: [2, 9]
          }, {
            20: 25,
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            20: 36,
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            4: 37,
            6: 3,
            14: [2, 46],
            15: [2, 46],
            19: [2, 46],
            29: [2, 46],
            34: [2, 46],
            39: [2, 46],
            44: [2, 46],
            47: [2, 46],
            48: [2, 46],
            51: [2, 46],
            55: [2, 46],
            60: [2, 46]
          }, {
            4: 38,
            6: 3,
            14: [2, 46],
            15: [2, 46],
            19: [2, 46],
            29: [2, 46],
            34: [2, 46],
            44: [2, 46],
            47: [2, 46],
            48: [2, 46],
            51: [2, 46],
            55: [2, 46],
            60: [2, 46]
          }, {
            15: [2, 48],
            17: 39,
            18: [2, 48]
          }, {
            20: 41,
            56: 40,
            64: 42,
            65: [1, 43],
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            4: 44,
            6: 3,
            14: [2, 46],
            15: [2, 46],
            19: [2, 46],
            29: [2, 46],
            34: [2, 46],
            47: [2, 46],
            48: [2, 46],
            51: [2, 46],
            55: [2, 46],
            60: [2, 46]
          }, {
            5: [2, 10],
            14: [2, 10],
            15: [2, 10],
            18: [2, 10],
            19: [2, 10],
            29: [2, 10],
            34: [2, 10],
            39: [2, 10],
            44: [2, 10],
            47: [2, 10],
            48: [2, 10],
            51: [2, 10],
            55: [2, 10],
            60: [2, 10]
          }, {
            20: 45,
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            20: 46,
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            20: 47,
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            20: 41,
            56: 48,
            64: 42,
            65: [1, 43],
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            33: [2, 78],
            49: 49,
            65: [2, 78],
            72: [2, 78],
            80: [2, 78],
            81: [2, 78],
            82: [2, 78],
            83: [2, 78],
            84: [2, 78],
            85: [2, 78]
          }, {
            23: [2, 33],
            33: [2, 33],
            54: [2, 33],
            65: [2, 33],
            68: [2, 33],
            72: [2, 33],
            75: [2, 33],
            80: [2, 33],
            81: [2, 33],
            82: [2, 33],
            83: [2, 33],
            84: [2, 33],
            85: [2, 33]
          }, {
            23: [2, 34],
            33: [2, 34],
            54: [2, 34],
            65: [2, 34],
            68: [2, 34],
            72: [2, 34],
            75: [2, 34],
            80: [2, 34],
            81: [2, 34],
            82: [2, 34],
            83: [2, 34],
            84: [2, 34],
            85: [2, 34]
          }, {
            23: [2, 35],
            33: [2, 35],
            54: [2, 35],
            65: [2, 35],
            68: [2, 35],
            72: [2, 35],
            75: [2, 35],
            80: [2, 35],
            81: [2, 35],
            82: [2, 35],
            83: [2, 35],
            84: [2, 35],
            85: [2, 35]
          }, {
            23: [2, 36],
            33: [2, 36],
            54: [2, 36],
            65: [2, 36],
            68: [2, 36],
            72: [2, 36],
            75: [2, 36],
            80: [2, 36],
            81: [2, 36],
            82: [2, 36],
            83: [2, 36],
            84: [2, 36],
            85: [2, 36]
          }, {
            23: [2, 37],
            33: [2, 37],
            54: [2, 37],
            65: [2, 37],
            68: [2, 37],
            72: [2, 37],
            75: [2, 37],
            80: [2, 37],
            81: [2, 37],
            82: [2, 37],
            83: [2, 37],
            84: [2, 37],
            85: [2, 37]
          }, {
            23: [2, 38],
            33: [2, 38],
            54: [2, 38],
            65: [2, 38],
            68: [2, 38],
            72: [2, 38],
            75: [2, 38],
            80: [2, 38],
            81: [2, 38],
            82: [2, 38],
            83: [2, 38],
            84: [2, 38],
            85: [2, 38]
          }, {
            23: [2, 39],
            33: [2, 39],
            54: [2, 39],
            65: [2, 39],
            68: [2, 39],
            72: [2, 39],
            75: [2, 39],
            80: [2, 39],
            81: [2, 39],
            82: [2, 39],
            83: [2, 39],
            84: [2, 39],
            85: [2, 39]
          }, {
            23: [2, 43],
            33: [2, 43],
            54: [2, 43],
            65: [2, 43],
            68: [2, 43],
            72: [2, 43],
            75: [2, 43],
            80: [2, 43],
            81: [2, 43],
            82: [2, 43],
            83: [2, 43],
            84: [2, 43],
            85: [2, 43],
            87: [1, 50]
          }, {
            72: [1, 35],
            86: 51
          }, {
            23: [2, 45],
            33: [2, 45],
            54: [2, 45],
            65: [2, 45],
            68: [2, 45],
            72: [2, 45],
            75: [2, 45],
            80: [2, 45],
            81: [2, 45],
            82: [2, 45],
            83: [2, 45],
            84: [2, 45],
            85: [2, 45],
            87: [2, 45]
          }, {
            52: 52,
            54: [2, 82],
            65: [2, 82],
            72: [2, 82],
            80: [2, 82],
            81: [2, 82],
            82: [2, 82],
            83: [2, 82],
            84: [2, 82],
            85: [2, 82]
          }, {
            25: 53,
            38: 55,
            39: [1, 57],
            43: 56,
            44: [1, 58],
            45: 54,
            47: [2, 54]
          }, {
            28: 59,
            43: 60,
            44: [1, 58],
            47: [2, 56]
          }, {
            13: 62,
            15: [1, 20],
            18: [1, 61]
          }, {
            33: [2, 86],
            57: 63,
            65: [2, 86],
            72: [2, 86],
            80: [2, 86],
            81: [2, 86],
            82: [2, 86],
            83: [2, 86],
            84: [2, 86],
            85: [2, 86]
          }, {
            33: [2, 40],
            65: [2, 40],
            72: [2, 40],
            80: [2, 40],
            81: [2, 40],
            82: [2, 40],
            83: [2, 40],
            84: [2, 40],
            85: [2, 40]
          }, {
            33: [2, 41],
            65: [2, 41],
            72: [2, 41],
            80: [2, 41],
            81: [2, 41],
            82: [2, 41],
            83: [2, 41],
            84: [2, 41],
            85: [2, 41]
          }, {
            20: 64,
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            26: 65,
            47: [1, 66]
          }, {
            30: 67,
            33: [2, 58],
            65: [2, 58],
            72: [2, 58],
            75: [2, 58],
            80: [2, 58],
            81: [2, 58],
            82: [2, 58],
            83: [2, 58],
            84: [2, 58],
            85: [2, 58]
          }, {
            33: [2, 64],
            35: 68,
            65: [2, 64],
            72: [2, 64],
            75: [2, 64],
            80: [2, 64],
            81: [2, 64],
            82: [2, 64],
            83: [2, 64],
            84: [2, 64],
            85: [2, 64]
          }, {
            21: 69,
            23: [2, 50],
            65: [2, 50],
            72: [2, 50],
            80: [2, 50],
            81: [2, 50],
            82: [2, 50],
            83: [2, 50],
            84: [2, 50],
            85: [2, 50]
          }, {
            33: [2, 90],
            61: 70,
            65: [2, 90],
            72: [2, 90],
            80: [2, 90],
            81: [2, 90],
            82: [2, 90],
            83: [2, 90],
            84: [2, 90],
            85: [2, 90]
          }, {
            20: 74,
            33: [2, 80],
            50: 71,
            63: 72,
            64: 75,
            65: [1, 43],
            69: 73,
            70: 76,
            71: 77,
            72: [1, 78],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            72: [1, 79]
          }, {
            23: [2, 42],
            33: [2, 42],
            54: [2, 42],
            65: [2, 42],
            68: [2, 42],
            72: [2, 42],
            75: [2, 42],
            80: [2, 42],
            81: [2, 42],
            82: [2, 42],
            83: [2, 42],
            84: [2, 42],
            85: [2, 42],
            87: [1, 50]
          }, {
            20: 74,
            53: 80,
            54: [2, 84],
            63: 81,
            64: 75,
            65: [1, 43],
            69: 82,
            70: 76,
            71: 77,
            72: [1, 78],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            26: 83,
            47: [1, 66]
          }, {
            47: [2, 55]
          }, {
            4: 84,
            6: 3,
            14: [2, 46],
            15: [2, 46],
            19: [2, 46],
            29: [2, 46],
            34: [2, 46],
            39: [2, 46],
            44: [2, 46],
            47: [2, 46],
            48: [2, 46],
            51: [2, 46],
            55: [2, 46],
            60: [2, 46]
          }, {
            47: [2, 20]
          }, {
            20: 85,
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            4: 86,
            6: 3,
            14: [2, 46],
            15: [2, 46],
            19: [2, 46],
            29: [2, 46],
            34: [2, 46],
            47: [2, 46],
            48: [2, 46],
            51: [2, 46],
            55: [2, 46],
            60: [2, 46]
          }, {
            26: 87,
            47: [1, 66]
          }, {
            47: [2, 57]
          }, {
            5: [2, 11],
            14: [2, 11],
            15: [2, 11],
            19: [2, 11],
            29: [2, 11],
            34: [2, 11],
            39: [2, 11],
            44: [2, 11],
            47: [2, 11],
            48: [2, 11],
            51: [2, 11],
            55: [2, 11],
            60: [2, 11]
          }, {
            15: [2, 49],
            18: [2, 49]
          }, {
            20: 74,
            33: [2, 88],
            58: 88,
            63: 89,
            64: 75,
            65: [1, 43],
            69: 90,
            70: 76,
            71: 77,
            72: [1, 78],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            65: [2, 94],
            66: 91,
            68: [2, 94],
            72: [2, 94],
            80: [2, 94],
            81: [2, 94],
            82: [2, 94],
            83: [2, 94],
            84: [2, 94],
            85: [2, 94]
          }, {
            5: [2, 25],
            14: [2, 25],
            15: [2, 25],
            19: [2, 25],
            29: [2, 25],
            34: [2, 25],
            39: [2, 25],
            44: [2, 25],
            47: [2, 25],
            48: [2, 25],
            51: [2, 25],
            55: [2, 25],
            60: [2, 25]
          }, {
            20: 92,
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            20: 74,
            31: 93,
            33: [2, 60],
            63: 94,
            64: 75,
            65: [1, 43],
            69: 95,
            70: 76,
            71: 77,
            72: [1, 78],
            75: [2, 60],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            20: 74,
            33: [2, 66],
            36: 96,
            63: 97,
            64: 75,
            65: [1, 43],
            69: 98,
            70: 76,
            71: 77,
            72: [1, 78],
            75: [2, 66],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            20: 74,
            22: 99,
            23: [2, 52],
            63: 100,
            64: 75,
            65: [1, 43],
            69: 101,
            70: 76,
            71: 77,
            72: [1, 78],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            20: 74,
            33: [2, 92],
            62: 102,
            63: 103,
            64: 75,
            65: [1, 43],
            69: 104,
            70: 76,
            71: 77,
            72: [1, 78],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            33: [1, 105]
          }, {
            33: [2, 79],
            65: [2, 79],
            72: [2, 79],
            80: [2, 79],
            81: [2, 79],
            82: [2, 79],
            83: [2, 79],
            84: [2, 79],
            85: [2, 79]
          }, {
            33: [2, 81]
          }, {
            23: [2, 27],
            33: [2, 27],
            54: [2, 27],
            65: [2, 27],
            68: [2, 27],
            72: [2, 27],
            75: [2, 27],
            80: [2, 27],
            81: [2, 27],
            82: [2, 27],
            83: [2, 27],
            84: [2, 27],
            85: [2, 27]
          }, {
            23: [2, 28],
            33: [2, 28],
            54: [2, 28],
            65: [2, 28],
            68: [2, 28],
            72: [2, 28],
            75: [2, 28],
            80: [2, 28],
            81: [2, 28],
            82: [2, 28],
            83: [2, 28],
            84: [2, 28],
            85: [2, 28]
          }, {
            23: [2, 30],
            33: [2, 30],
            54: [2, 30],
            68: [2, 30],
            71: 106,
            72: [1, 107],
            75: [2, 30]
          }, {
            23: [2, 98],
            33: [2, 98],
            54: [2, 98],
            68: [2, 98],
            72: [2, 98],
            75: [2, 98]
          }, {
            23: [2, 45],
            33: [2, 45],
            54: [2, 45],
            65: [2, 45],
            68: [2, 45],
            72: [2, 45],
            73: [1, 108],
            75: [2, 45],
            80: [2, 45],
            81: [2, 45],
            82: [2, 45],
            83: [2, 45],
            84: [2, 45],
            85: [2, 45],
            87: [2, 45]
          }, {
            23: [2, 44],
            33: [2, 44],
            54: [2, 44],
            65: [2, 44],
            68: [2, 44],
            72: [2, 44],
            75: [2, 44],
            80: [2, 44],
            81: [2, 44],
            82: [2, 44],
            83: [2, 44],
            84: [2, 44],
            85: [2, 44],
            87: [2, 44]
          }, {
            54: [1, 109]
          }, {
            54: [2, 83],
            65: [2, 83],
            72: [2, 83],
            80: [2, 83],
            81: [2, 83],
            82: [2, 83],
            83: [2, 83],
            84: [2, 83],
            85: [2, 83]
          }, {
            54: [2, 85]
          }, {
            5: [2, 13],
            14: [2, 13],
            15: [2, 13],
            19: [2, 13],
            29: [2, 13],
            34: [2, 13],
            39: [2, 13],
            44: [2, 13],
            47: [2, 13],
            48: [2, 13],
            51: [2, 13],
            55: [2, 13],
            60: [2, 13]
          }, {
            38: 55,
            39: [1, 57],
            43: 56,
            44: [1, 58],
            45: 111,
            46: 110,
            47: [2, 76]
          }, {
            33: [2, 70],
            40: 112,
            65: [2, 70],
            72: [2, 70],
            75: [2, 70],
            80: [2, 70],
            81: [2, 70],
            82: [2, 70],
            83: [2, 70],
            84: [2, 70],
            85: [2, 70]
          }, {
            47: [2, 18]
          }, {
            5: [2, 14],
            14: [2, 14],
            15: [2, 14],
            19: [2, 14],
            29: [2, 14],
            34: [2, 14],
            39: [2, 14],
            44: [2, 14],
            47: [2, 14],
            48: [2, 14],
            51: [2, 14],
            55: [2, 14],
            60: [2, 14]
          }, {
            33: [1, 113]
          }, {
            33: [2, 87],
            65: [2, 87],
            72: [2, 87],
            80: [2, 87],
            81: [2, 87],
            82: [2, 87],
            83: [2, 87],
            84: [2, 87],
            85: [2, 87]
          }, {
            33: [2, 89]
          }, {
            20: 74,
            63: 115,
            64: 75,
            65: [1, 43],
            67: 114,
            68: [2, 96],
            69: 116,
            70: 76,
            71: 77,
            72: [1, 78],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            33: [1, 117]
          }, {
            32: 118,
            33: [2, 62],
            74: 119,
            75: [1, 120]
          }, {
            33: [2, 59],
            65: [2, 59],
            72: [2, 59],
            75: [2, 59],
            80: [2, 59],
            81: [2, 59],
            82: [2, 59],
            83: [2, 59],
            84: [2, 59],
            85: [2, 59]
          }, {
            33: [2, 61],
            75: [2, 61]
          }, {
            33: [2, 68],
            37: 121,
            74: 122,
            75: [1, 120]
          }, {
            33: [2, 65],
            65: [2, 65],
            72: [2, 65],
            75: [2, 65],
            80: [2, 65],
            81: [2, 65],
            82: [2, 65],
            83: [2, 65],
            84: [2, 65],
            85: [2, 65]
          }, {
            33: [2, 67],
            75: [2, 67]
          }, {
            23: [1, 123]
          }, {
            23: [2, 51],
            65: [2, 51],
            72: [2, 51],
            80: [2, 51],
            81: [2, 51],
            82: [2, 51],
            83: [2, 51],
            84: [2, 51],
            85: [2, 51]
          }, {
            23: [2, 53]
          }, {
            33: [1, 124]
          }, {
            33: [2, 91],
            65: [2, 91],
            72: [2, 91],
            80: [2, 91],
            81: [2, 91],
            82: [2, 91],
            83: [2, 91],
            84: [2, 91],
            85: [2, 91]
          }, {
            33: [2, 93]
          }, {
            5: [2, 22],
            14: [2, 22],
            15: [2, 22],
            19: [2, 22],
            29: [2, 22],
            34: [2, 22],
            39: [2, 22],
            44: [2, 22],
            47: [2, 22],
            48: [2, 22],
            51: [2, 22],
            55: [2, 22],
            60: [2, 22]
          }, {
            23: [2, 99],
            33: [2, 99],
            54: [2, 99],
            68: [2, 99],
            72: [2, 99],
            75: [2, 99]
          }, {
            73: [1, 108]
          }, {
            20: 74,
            63: 125,
            64: 75,
            65: [1, 43],
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            5: [2, 23],
            14: [2, 23],
            15: [2, 23],
            19: [2, 23],
            29: [2, 23],
            34: [2, 23],
            39: [2, 23],
            44: [2, 23],
            47: [2, 23],
            48: [2, 23],
            51: [2, 23],
            55: [2, 23],
            60: [2, 23]
          }, {
            47: [2, 19]
          }, {
            47: [2, 77]
          }, {
            20: 74,
            33: [2, 72],
            41: 126,
            63: 127,
            64: 75,
            65: [1, 43],
            69: 128,
            70: 76,
            71: 77,
            72: [1, 78],
            75: [2, 72],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            5: [2, 24],
            14: [2, 24],
            15: [2, 24],
            19: [2, 24],
            29: [2, 24],
            34: [2, 24],
            39: [2, 24],
            44: [2, 24],
            47: [2, 24],
            48: [2, 24],
            51: [2, 24],
            55: [2, 24],
            60: [2, 24]
          }, {
            68: [1, 129]
          }, {
            65: [2, 95],
            68: [2, 95],
            72: [2, 95],
            80: [2, 95],
            81: [2, 95],
            82: [2, 95],
            83: [2, 95],
            84: [2, 95],
            85: [2, 95]
          }, {
            68: [2, 97]
          }, {
            5: [2, 21],
            14: [2, 21],
            15: [2, 21],
            19: [2, 21],
            29: [2, 21],
            34: [2, 21],
            39: [2, 21],
            44: [2, 21],
            47: [2, 21],
            48: [2, 21],
            51: [2, 21],
            55: [2, 21],
            60: [2, 21]
          }, {
            33: [1, 130]
          }, {
            33: [2, 63]
          }, {
            72: [1, 132],
            76: 131
          }, {
            33: [1, 133]
          }, {
            33: [2, 69]
          }, {
            15: [2, 12],
            18: [2, 12]
          }, {
            14: [2, 26],
            15: [2, 26],
            19: [2, 26],
            29: [2, 26],
            34: [2, 26],
            47: [2, 26],
            48: [2, 26],
            51: [2, 26],
            55: [2, 26],
            60: [2, 26]
          }, {
            23: [2, 31],
            33: [2, 31],
            54: [2, 31],
            68: [2, 31],
            72: [2, 31],
            75: [2, 31]
          }, {
            33: [2, 74],
            42: 134,
            74: 135,
            75: [1, 120]
          }, {
            33: [2, 71],
            65: [2, 71],
            72: [2, 71],
            75: [2, 71],
            80: [2, 71],
            81: [2, 71],
            82: [2, 71],
            83: [2, 71],
            84: [2, 71],
            85: [2, 71]
          }, {
            33: [2, 73],
            75: [2, 73]
          }, {
            23: [2, 29],
            33: [2, 29],
            54: [2, 29],
            65: [2, 29],
            68: [2, 29],
            72: [2, 29],
            75: [2, 29],
            80: [2, 29],
            81: [2, 29],
            82: [2, 29],
            83: [2, 29],
            84: [2, 29],
            85: [2, 29]
          }, {
            14: [2, 15],
            15: [2, 15],
            19: [2, 15],
            29: [2, 15],
            34: [2, 15],
            39: [2, 15],
            44: [2, 15],
            47: [2, 15],
            48: [2, 15],
            51: [2, 15],
            55: [2, 15],
            60: [2, 15]
          }, {
            72: [1, 137],
            77: [1, 136]
          }, {
            72: [2, 100],
            77: [2, 100]
          }, {
            14: [2, 16],
            15: [2, 16],
            19: [2, 16],
            29: [2, 16],
            34: [2, 16],
            44: [2, 16],
            47: [2, 16],
            48: [2, 16],
            51: [2, 16],
            55: [2, 16],
            60: [2, 16]
          }, {
            33: [1, 138]
          }, {
            33: [2, 75]
          }, {
            33: [2, 32]
          }, {
            72: [2, 101],
            77: [2, 101]
          }, {
            14: [2, 17],
            15: [2, 17],
            19: [2, 17],
            29: [2, 17],
            34: [2, 17],
            39: [2, 17],
            44: [2, 17],
            47: [2, 17],
            48: [2, 17],
            51: [2, 17],
            55: [2, 17],
            60: [2, 17]
          }],
          defaultActions: {
            4: [2, 1],
            54: [2, 55],
            56: [2, 20],
            60: [2, 57],
            73: [2, 81],
            82: [2, 85],
            86: [2, 18],
            90: [2, 89],
            101: [2, 53],
            104: [2, 93],
            110: [2, 19],
            111: [2, 77],
            116: [2, 97],
            119: [2, 63],
            122: [2, 69],
            135: [2, 75],
            136: [2, 32]
          },
          parseError: function parseError(str, hash) {
            throw new Error(str);
          },
          parse: function parse(input) {
            var self = this,
                stack = [0],
                vstack = [null],
                lstack = [],
                table = this.table,
                yytext = "",
                yylineno = 0,
                yyleng = 0,
                recovering = 0,
                TERROR = 2,
                EOF = 1;
            this.lexer.setInput(input);
            this.lexer.yy = this.yy;
            this.yy.lexer = this.lexer;
            this.yy.parser = this;
            if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
            var yyloc = this.lexer.yylloc;
            lstack.push(yyloc);
            var ranges = this.lexer.options && this.lexer.options.ranges;
            if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;

            function popStack(n) {
              stack.length = stack.length - 2 * n;
              vstack.length = vstack.length - n;
              lstack.length = lstack.length - n;
            }

            function lex() {
              var token;
              token = self.lexer.lex() || 1;

              if (typeof token !== "number") {
                token = self.symbols_[token] || token;
              }

              return token;
            }

            var symbol,
                preErrorSymbol,
                state,
                action,
                a,
                r,
                yyval = {},
                p,
                len,
                newState,
                expected;

            while (true) {
              state = stack[stack.length - 1];

              if (this.defaultActions[state]) {
                action = this.defaultActions[state];
              } else {
                if (symbol === null || typeof symbol == "undefined") {
                  symbol = lex();
                }

                action = table[state] && table[state][symbol];
              }

              if (typeof action === "undefined" || !action.length || !action[0]) {
                var errStr = "";

                if (!recovering) {
                  expected = [];

                  for (p in table[state]) {
                    if (this.terminals_[p] && p > 2) {
                      expected.push("'" + this.terminals_[p] + "'");
                    }
                  }

                  if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                  } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
                  }

                  this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                  });
                }
              }

              if (action[0] instanceof Array && action.length > 1) {
                throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
              }

              switch (action[0]) {
                case 1:
                  stack.push(symbol);
                  vstack.push(this.lexer.yytext);
                  lstack.push(this.lexer.yylloc);
                  stack.push(action[1]);
                  symbol = null;

                  if (!preErrorSymbol) {
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0) recovering--;
                  } else {
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                  }

                  break;

                case 2:
                  len = this.productions_[action[1]][1];
                  yyval.$ = vstack[vstack.length - len];
                  yyval._$ = {
                    first_line: lstack[lstack.length - (len || 1)].first_line,
                    last_line: lstack[lstack.length - 1].last_line,
                    first_column: lstack[lstack.length - (len || 1)].first_column,
                    last_column: lstack[lstack.length - 1].last_column
                  };

                  if (ranges) {
                    yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
                  }

                  r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                  if (typeof r !== "undefined") {
                    return r;
                  }

                  if (len) {
                    stack = stack.slice(0, -1 * len * 2);
                    vstack = vstack.slice(0, -1 * len);
                    lstack = lstack.slice(0, -1 * len);
                  }

                  stack.push(this.productions_[action[1]][0]);
                  vstack.push(yyval.$);
                  lstack.push(yyval._$);
                  newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                  stack.push(newState);
                  break;

                case 3:
                  return true;
              }
            }

            return true;
          }
        };
        /* Jison generated lexer */

        var lexer = function () {
          var lexer = {
            EOF: 1,
            parseError: function parseError(str, hash) {
              if (this.yy.parser) {
                this.yy.parser.parseError(str, hash);
              } else {
                throw new Error(str);
              }
            },
            setInput: function setInput(input) {
              this._input = input;
              this._more = this._less = this.done = false;
              this.yylineno = this.yyleng = 0;
              this.yytext = this.matched = this.match = '';
              this.conditionStack = ['INITIAL'];
              this.yylloc = {
                first_line: 1,
                first_column: 0,
                last_line: 1,
                last_column: 0
              };
              if (this.options.ranges) this.yylloc.range = [0, 0];
              this.offset = 0;
              return this;
            },
            input: function input() {
              var ch = this._input[0];
              this.yytext += ch;
              this.yyleng++;
              this.offset++;
              this.match += ch;
              this.matched += ch;
              var lines = ch.match(/(?:\r\n?|\n).*/g);

              if (lines) {
                this.yylineno++;
                this.yylloc.last_line++;
              } else {
                this.yylloc.last_column++;
              }

              if (this.options.ranges) this.yylloc.range[1]++;
              this._input = this._input.slice(1);
              return ch;
            },
            unput: function unput(ch) {
              var len = ch.length;
              var lines = ch.split(/(?:\r\n?|\n)/g);
              this._input = ch + this._input;
              this.yytext = this.yytext.substr(0, this.yytext.length - len - 1); //this.yyleng -= len;

              this.offset -= len;
              var oldLines = this.match.split(/(?:\r\n?|\n)/g);
              this.match = this.match.substr(0, this.match.length - 1);
              this.matched = this.matched.substr(0, this.matched.length - 1);
              if (lines.length - 1) this.yylineno -= lines.length - 1;
              var r = this.yylloc.range;
              this.yylloc = {
                first_line: this.yylloc.first_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.first_column,
                last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
              };

              if (this.options.ranges) {
                this.yylloc.range = [r[0], r[0] + this.yyleng - len];
              }

              return this;
            },
            more: function more() {
              this._more = true;
              return this;
            },
            less: function less(n) {
              this.unput(this.match.slice(n));
            },
            pastInput: function pastInput() {
              var past = this.matched.substr(0, this.matched.length - this.match.length);
              return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
            },
            upcomingInput: function upcomingInput() {
              var next = this.match;

              if (next.length < 20) {
                next += this._input.substr(0, 20 - next.length);
              }

              return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
            },
            showPosition: function showPosition() {
              var pre = this.pastInput();
              var c = new Array(pre.length + 1).join("-");
              return pre + this.upcomingInput() + "\n" + c + "^";
            },
            next: function next() {
              if (this.done) {
                return this.EOF;
              }

              if (!this._input) this.done = true;
              var token, match, tempMatch, index, col, lines;

              if (!this._more) {
                this.yytext = '';
                this.match = '';
              }

              var rules = this._currentRules();

              for (var i = 0; i < rules.length; i++) {
                tempMatch = this._input.match(this.rules[rules[i]]);

                if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                  match = tempMatch;
                  index = i;
                  if (!this.options.flex) break;
                }
              }

              if (match) {
                lines = match[0].match(/(?:\r\n?|\n).*/g);
                if (lines) this.yylineno += lines.length;
                this.yylloc = {
                  first_line: this.yylloc.last_line,
                  last_line: this.yylineno + 1,
                  first_column: this.yylloc.last_column,
                  last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
                };
                this.yytext += match[0];
                this.match += match[0];
                this.matches = match;
                this.yyleng = this.yytext.length;

                if (this.options.ranges) {
                  this.yylloc.range = [this.offset, this.offset += this.yyleng];
                }

                this._more = false;
                this._input = this._input.slice(match[0].length);
                this.matched += match[0];
                token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
                if (this.done && this._input) this.done = false;
                if (token) return token;else return;
              }

              if (this._input === "") {
                return this.EOF;
              } else {
                return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                  text: "",
                  token: null,
                  line: this.yylineno
                });
              }
            },
            lex: function lex() {
              var r = this.next();

              if (typeof r !== 'undefined') {
                return r;
              } else {
                return this.lex();
              }
            },
            begin: function begin(condition) {
              this.conditionStack.push(condition);
            },
            popState: function popState() {
              return this.conditionStack.pop();
            },
            _currentRules: function _currentRules() {
              return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
            },
            topState: function topState() {
              return this.conditionStack[this.conditionStack.length - 2];
            },
            pushState: function begin(condition) {
              this.begin(condition);
            }
          };
          lexer.options = {};

          lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
            function strip(start, end) {
              return yy_.yytext = yy_.yytext.substring(start, yy_.yyleng - end + start);
            }

            var YYSTATE = YY_START;

            switch ($avoiding_name_collisions) {
              case 0:
                if (yy_.yytext.slice(-2) === "\\\\") {
                  strip(0, 1);
                  this.begin("mu");
                } else if (yy_.yytext.slice(-1) === "\\") {
                  strip(0, 1);
                  this.begin("emu");
                } else {
                  this.begin("mu");
                }

                if (yy_.yytext) return 15;
                break;

              case 1:
                return 15;
                break;

              case 2:
                this.popState();
                return 15;
                break;

              case 3:
                this.begin('raw');
                return 15;
                break;

              case 4:
                this.popState(); // Should be using `this.topState()` below, but it currently
                // returns the second top instead of the first top. Opened an
                // issue about it at https://github.com/zaach/jison/issues/291

                if (this.conditionStack[this.conditionStack.length - 1] === 'raw') {
                  return 15;
                } else {
                  strip(5, 9);
                  return 'END_RAW_BLOCK';
                }

                break;

              case 5:
                return 15;
                break;

              case 6:
                this.popState();
                return 14;
                break;

              case 7:
                return 65;
                break;

              case 8:
                return 68;
                break;

              case 9:
                return 19;
                break;

              case 10:
                this.popState();
                this.begin('raw');
                return 23;
                break;

              case 11:
                return 55;
                break;

              case 12:
                return 60;
                break;

              case 13:
                return 29;
                break;

              case 14:
                return 47;
                break;

              case 15:
                this.popState();
                return 44;
                break;

              case 16:
                this.popState();
                return 44;
                break;

              case 17:
                return 34;
                break;

              case 18:
                return 39;
                break;

              case 19:
                return 51;
                break;

              case 20:
                return 48;
                break;

              case 21:
                this.unput(yy_.yytext);
                this.popState();
                this.begin('com');
                break;

              case 22:
                this.popState();
                return 14;
                break;

              case 23:
                return 48;
                break;

              case 24:
                return 73;
                break;

              case 25:
                return 72;
                break;

              case 26:
                return 72;
                break;

              case 27:
                return 87;
                break;

              case 28:
                // ignore whitespace
                break;

              case 29:
                this.popState();
                return 54;
                break;

              case 30:
                this.popState();
                return 33;
                break;

              case 31:
                yy_.yytext = strip(1, 2).replace(/\\"/g, '"');
                return 80;
                break;

              case 32:
                yy_.yytext = strip(1, 2).replace(/\\'/g, "'");
                return 80;
                break;

              case 33:
                return 85;
                break;

              case 34:
                return 82;
                break;

              case 35:
                return 82;
                break;

              case 36:
                return 83;
                break;

              case 37:
                return 84;
                break;

              case 38:
                return 81;
                break;

              case 39:
                return 75;
                break;

              case 40:
                return 77;
                break;

              case 41:
                return 72;
                break;

              case 42:
                yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, '$1');
                return 72;
                break;

              case 43:
                return 'INVALID';
                break;

              case 44:
                return 5;
                break;
            }
          };

          lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/];
          lexer.conditions = {
            "mu": {
              "rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
              "inclusive": false
            },
            "emu": {
              "rules": [2],
              "inclusive": false
            },
            "com": {
              "rules": [6],
              "inclusive": false
            },
            "raw": {
              "rules": [3, 4, 5],
              "inclusive": false
            },
            "INITIAL": {
              "rules": [0, 1, 44],
              "inclusive": true
            }
          };
          return lexer;
        }();

        parser.lexer = lexer;

        function Parser() {
          this.yy = {};
        }

        Parser.prototype = parser;
        parser.Parser = Parser;
        return new Parser();
      }();

      exports["default"] = handlebars;
      module.exports = exports["default"];
      /***/
    },
    /* 48 */

    /***/
    function (module, exports, __nested_webpack_require_132315__) {
      'use strict';

      var _interopRequireDefault = __nested_webpack_require_132315__(1)['default'];

      exports.__esModule = true;

      var _visitor = __nested_webpack_require_132315__(49);

      var _visitor2 = _interopRequireDefault(_visitor);

      function WhitespaceControl() {
        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        this.options = options;
      }

      WhitespaceControl.prototype = new _visitor2['default']();

      WhitespaceControl.prototype.Program = function (program) {
        var doStandalone = !this.options.ignoreStandalone;
        var isRoot = !this.isRootSeen;
        this.isRootSeen = true;
        var body = program.body;

        for (var i = 0, l = body.length; i < l; i++) {
          var current = body[i],
              strip = this.accept(current);

          if (!strip) {
            continue;
          }

          var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
              _isNextWhitespace = isNextWhitespace(body, i, isRoot),
              openStandalone = strip.openStandalone && _isPrevWhitespace,
              closeStandalone = strip.closeStandalone && _isNextWhitespace,
              inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

          if (strip.close) {
            omitRight(body, i, true);
          }

          if (strip.open) {
            omitLeft(body, i, true);
          }

          if (doStandalone && inlineStandalone) {
            omitRight(body, i);

            if (omitLeft(body, i)) {
              // If we are on a standalone node, save the indent info for partials
              if (current.type === 'PartialStatement') {
                // Pull out the whitespace from the final line
                current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
              }
            }
          }

          if (doStandalone && openStandalone) {
            omitRight((current.program || current.inverse).body); // Strip out the previous content node if it's whitespace only

            omitLeft(body, i);
          }

          if (doStandalone && closeStandalone) {
            // Always strip the next node
            omitRight(body, i);
            omitLeft((current.inverse || current.program).body);
          }
        }

        return program;
      };

      WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function (block) {
        this.accept(block.program);
        this.accept(block.inverse); // Find the inverse program that is involed with whitespace stripping.

        var program = block.program || block.inverse,
            inverse = block.program && block.inverse,
            firstInverse = inverse,
            lastInverse = inverse;

        if (inverse && inverse.chained) {
          firstInverse = inverse.body[0].program; // Walk the inverse chain to find the last inverse that is actually in the chain.

          while (lastInverse.chained) {
            lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
          }
        }

        var strip = {
          open: block.openStrip.open,
          close: block.closeStrip.close,
          // Determine the standalone candiacy. Basically flag our content as being possibly standalone
          // so our parent can determine if we actually are standalone
          openStandalone: isNextWhitespace(program.body),
          closeStandalone: isPrevWhitespace((firstInverse || program).body)
        };

        if (block.openStrip.close) {
          omitRight(program.body, null, true);
        }

        if (inverse) {
          var inverseStrip = block.inverseStrip;

          if (inverseStrip.open) {
            omitLeft(program.body, null, true);
          }

          if (inverseStrip.close) {
            omitRight(firstInverse.body, null, true);
          }

          if (block.closeStrip.open) {
            omitLeft(lastInverse.body, null, true);
          } // Find standalone else statments


          if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
            omitLeft(program.body);
            omitRight(firstInverse.body);
          }
        } else if (block.closeStrip.open) {
          omitLeft(program.body, null, true);
        }

        return strip;
      };

      WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function (mustache) {
        return mustache.strip;
      };

      WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function (node) {
        /* istanbul ignore next */
        var strip = node.strip || {};
        return {
          inlineStandalone: true,
          open: strip.open,
          close: strip.close
        };
      };

      function isPrevWhitespace(body, i, isRoot) {
        if (i === undefined) {
          i = body.length;
        } // Nodes that end with newlines are considered whitespace (but are special
        // cased for strip operations)


        var prev = body[i - 1],
            sibling = body[i - 2];

        if (!prev) {
          return isRoot;
        }

        if (prev.type === 'ContentStatement') {
          return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
        }
      }

      function isNextWhitespace(body, i, isRoot) {
        if (i === undefined) {
          i = -1;
        }

        var next = body[i + 1],
            sibling = body[i + 2];

        if (!next) {
          return isRoot;
        }

        if (next.type === 'ContentStatement') {
          return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
        }
      } // Marks the node to the right of the position as omitted.
      // I.e. {{foo}}' ' will mark the ' ' node as omitted.
      //
      // If i is undefined, then the first child will be marked as such.
      //
      // If mulitple is truthy then all whitespace will be stripped out until non-whitespace
      // content is met.


      function omitRight(body, i, multiple) {
        var current = body[i == null ? 0 : i + 1];

        if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
          return;
        }

        var original = current.value;
        current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
        current.rightStripped = current.value !== original;
      } // Marks the node to the left of the position as omitted.
      // I.e. ' '{{foo}} will mark the ' ' node as omitted.
      //
      // If i is undefined then the last child will be marked as such.
      //
      // If mulitple is truthy then all whitespace will be stripped out until non-whitespace
      // content is met.


      function omitLeft(body, i, multiple) {
        var current = body[i == null ? body.length - 1 : i - 1];

        if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
          return;
        } // We omit the last node if it's whitespace only and not preceded by a non-content node.


        var original = current.value;
        current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
        current.leftStripped = current.value !== original;
        return current.leftStripped;
      }

      exports['default'] = WhitespaceControl;
      module.exports = exports['default'];
      /***/
    },
    /* 49 */

    /***/
    function (module, exports, __nested_webpack_require_139953__) {
      'use strict';

      var _interopRequireDefault = __nested_webpack_require_139953__(1)['default'];

      exports.__esModule = true;

      var _exception = __nested_webpack_require_139953__(6);

      var _exception2 = _interopRequireDefault(_exception);

      function Visitor() {
        this.parents = [];
      }

      Visitor.prototype = {
        constructor: Visitor,
        mutating: false,
        // Visits a given value. If mutating, will replace the value if necessary.
        acceptKey: function acceptKey(node, name) {
          var value = this.accept(node[name]);

          if (this.mutating) {
            // Hacky sanity check: This may have a few false positives for type for the helper
            // methods but will generally do the right thing without a lot of overhead.
            if (value && !Visitor.prototype[value.type]) {
              throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
            }

            node[name] = value;
          }
        },
        // Performs an accept operation with added sanity check to ensure
        // required keys are not removed.
        acceptRequired: function acceptRequired(node, name) {
          this.acceptKey(node, name);

          if (!node[name]) {
            throw new _exception2['default'](node.type + ' requires ' + name);
          }
        },
        // Traverses a given array. If mutating, empty respnses will be removed
        // for child elements.
        acceptArray: function acceptArray(array) {
          for (var i = 0, l = array.length; i < l; i++) {
            this.acceptKey(array, i);

            if (!array[i]) {
              array.splice(i, 1);
              i--;
              l--;
            }
          }
        },
        accept: function accept(object) {
          if (!object) {
            return;
          }
          /* istanbul ignore next: Sanity code */


          if (!this[object.type]) {
            throw new _exception2['default']('Unknown type: ' + object.type, object);
          }

          if (this.current) {
            this.parents.unshift(this.current);
          }

          this.current = object;
          var ret = this[object.type](object);
          this.current = this.parents.shift();

          if (!this.mutating || ret) {
            return ret;
          } else if (ret !== false) {
            return object;
          }
        },
        Program: function Program(program) {
          this.acceptArray(program.body);
        },
        MustacheStatement: visitSubExpression,
        Decorator: visitSubExpression,
        BlockStatement: visitBlock,
        DecoratorBlock: visitBlock,
        PartialStatement: visitPartial,
        PartialBlockStatement: function PartialBlockStatement(partial) {
          visitPartial.call(this, partial);
          this.acceptKey(partial, 'program');
        },
        ContentStatement: function ContentStatement()
        /* content */
        {},
        CommentStatement: function CommentStatement()
        /* comment */
        {},
        SubExpression: visitSubExpression,
        PathExpression: function PathExpression()
        /* path */
        {},
        StringLiteral: function StringLiteral()
        /* string */
        {},
        NumberLiteral: function NumberLiteral()
        /* number */
        {},
        BooleanLiteral: function BooleanLiteral()
        /* bool */
        {},
        UndefinedLiteral: function UndefinedLiteral()
        /* literal */
        {},
        NullLiteral: function NullLiteral()
        /* literal */
        {},
        Hash: function Hash(hash) {
          this.acceptArray(hash.pairs);
        },
        HashPair: function HashPair(pair) {
          this.acceptRequired(pair, 'value');
        }
      };

      function visitSubExpression(mustache) {
        this.acceptRequired(mustache, 'path');
        this.acceptArray(mustache.params);
        this.acceptKey(mustache, 'hash');
      }

      function visitBlock(block) {
        visitSubExpression.call(this, block);
        this.acceptKey(block, 'program');
        this.acceptKey(block, 'inverse');
      }

      function visitPartial(partial) {
        this.acceptRequired(partial, 'name');
        this.acceptArray(partial.params);
        this.acceptKey(partial, 'hash');
      }

      exports['default'] = Visitor;
      module.exports = exports['default'];
      /***/
    },
    /* 50 */

    /***/
    function (module, exports, __nested_webpack_require_144494__) {
      'use strict';

      var _interopRequireDefault = __nested_webpack_require_144494__(1)['default'];

      exports.__esModule = true;
      exports.SourceLocation = SourceLocation;
      exports.id = id;
      exports.stripFlags = stripFlags;
      exports.stripComment = stripComment;
      exports.preparePath = preparePath;
      exports.prepareMustache = prepareMustache;
      exports.prepareRawBlock = prepareRawBlock;
      exports.prepareBlock = prepareBlock;
      exports.prepareProgram = prepareProgram;
      exports.preparePartialBlock = preparePartialBlock;

      var _exception = __nested_webpack_require_144494__(6);

      var _exception2 = _interopRequireDefault(_exception);

      function validateClose(open, close) {
        close = close.path ? close.path.original : close;

        if (open.path.original !== close) {
          var errorNode = {
            loc: open.path.loc
          };
          throw new _exception2['default'](open.path.original + " doesn't match " + close, errorNode);
        }
      }

      function SourceLocation(source, locInfo) {
        this.source = source;
        this.start = {
          line: locInfo.first_line,
          column: locInfo.first_column
        };
        this.end = {
          line: locInfo.last_line,
          column: locInfo.last_column
        };
      }

      function id(token) {
        if (/^\[.*\]$/.test(token)) {
          return token.substring(1, token.length - 1);
        } else {
          return token;
        }
      }

      function stripFlags(open, close) {
        return {
          open: open.charAt(2) === '~',
          close: close.charAt(close.length - 3) === '~'
        };
      }

      function stripComment(comment) {
        return comment.replace(/^\{\{~?!-?-?/, '').replace(/-?-?~?\}\}$/, '');
      }

      function preparePath(data, parts, loc) {
        loc = this.locInfo(loc);
        var original = data ? '@' : '',
            dig = [],
            depth = 0;

        for (var i = 0, l = parts.length; i < l; i++) {
          var part = parts[i].part,
              // If we have [] syntax then we do not treat path references as operators,
          // i.e. foo.[this] resolves to approximately context.foo['this']
          isLiteral = parts[i].original !== part;
          original += (parts[i].separator || '') + part;

          if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
            if (dig.length > 0) {
              throw new _exception2['default']('Invalid path: ' + original, {
                loc: loc
              });
            } else if (part === '..') {
              depth++;
            }
          } else {
            dig.push(part);
          }
        }

        return {
          type: 'PathExpression',
          data: data,
          depth: depth,
          parts: dig,
          original: original,
          loc: loc
        };
      }

      function prepareMustache(path, params, hash, open, strip, locInfo) {
        // Must use charAt to support IE pre-10
        var escapeFlag = open.charAt(3) || open.charAt(2),
            escaped = escapeFlag !== '{' && escapeFlag !== '&';
        var decorator = /\*/.test(open);
        return {
          type: decorator ? 'Decorator' : 'MustacheStatement',
          path: path,
          params: params,
          hash: hash,
          escaped: escaped,
          strip: strip,
          loc: this.locInfo(locInfo)
        };
      }

      function prepareRawBlock(openRawBlock, contents, close, locInfo) {
        validateClose(openRawBlock, close);
        locInfo = this.locInfo(locInfo);
        var program = {
          type: 'Program',
          body: contents,
          strip: {},
          loc: locInfo
        };
        return {
          type: 'BlockStatement',
          path: openRawBlock.path,
          params: openRawBlock.params,
          hash: openRawBlock.hash,
          program: program,
          openStrip: {},
          inverseStrip: {},
          closeStrip: {},
          loc: locInfo
        };
      }

      function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
        if (close && close.path) {
          validateClose(openBlock, close);
        }

        var decorator = /\*/.test(openBlock.open);
        program.blockParams = openBlock.blockParams;
        var inverse = undefined,
            inverseStrip = undefined;

        if (inverseAndProgram) {
          if (decorator) {
            throw new _exception2['default']('Unexpected inverse block on decorator', inverseAndProgram);
          }

          if (inverseAndProgram.chain) {
            inverseAndProgram.program.body[0].closeStrip = close.strip;
          }

          inverseStrip = inverseAndProgram.strip;
          inverse = inverseAndProgram.program;
        }

        if (inverted) {
          inverted = inverse;
          inverse = program;
          program = inverted;
        }

        return {
          type: decorator ? 'DecoratorBlock' : 'BlockStatement',
          path: openBlock.path,
          params: openBlock.params,
          hash: openBlock.hash,
          program: program,
          inverse: inverse,
          openStrip: openBlock.strip,
          inverseStrip: inverseStrip,
          closeStrip: close && close.strip,
          loc: this.locInfo(locInfo)
        };
      }

      function prepareProgram(statements, loc) {
        if (!loc && statements.length) {
          var firstLoc = statements[0].loc,
              lastLoc = statements[statements.length - 1].loc;
          /* istanbul ignore else */

          if (firstLoc && lastLoc) {
            loc = {
              source: firstLoc.source,
              start: {
                line: firstLoc.start.line,
                column: firstLoc.start.column
              },
              end: {
                line: lastLoc.end.line,
                column: lastLoc.end.column
              }
            };
          }
        }

        return {
          type: 'Program',
          body: statements,
          strip: {},
          loc: loc
        };
      }

      function preparePartialBlock(open, program, close, locInfo) {
        validateClose(open, close);
        return {
          type: 'PartialBlockStatement',
          name: open.path,
          params: open.params,
          hash: open.hash,
          program: program,
          openStrip: open.strip,
          closeStrip: close && close.strip,
          loc: this.locInfo(locInfo)
        };
      }
      /***/

    },
    /* 51 */

    /***/
    function (module, exports, __nested_webpack_require_151107__) {
      /* eslint-disable new-cap */
      'use strict';

      var _Object$create = __nested_webpack_require_151107__(34)['default'];

      var _interopRequireDefault = __nested_webpack_require_151107__(1)['default'];

      exports.__esModule = true;
      exports.Compiler = Compiler;
      exports.precompile = precompile;
      exports.compile = compile;

      var _exception = __nested_webpack_require_151107__(6);

      var _exception2 = _interopRequireDefault(_exception);

      var _utils = __nested_webpack_require_151107__(5);

      var _ast = __nested_webpack_require_151107__(45);

      var _ast2 = _interopRequireDefault(_ast);

      var slice = [].slice;

      function Compiler() {} // the foundHelper register will disambiguate helper lookup from finding a
      // function in a context. This is necessary for mustache compatibility, which
      // requires that context functions in blocks are evaluated by blockHelperMissing,
      // and then proceed as if the resulting value was provided to blockHelperMissing.


      Compiler.prototype = {
        compiler: Compiler,
        equals: function equals(other) {
          var len = this.opcodes.length;

          if (other.opcodes.length !== len) {
            return false;
          }

          for (var i = 0; i < len; i++) {
            var opcode = this.opcodes[i],
                otherOpcode = other.opcodes[i];

            if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
              return false;
            }
          } // We know that length is the same between the two arrays because they are directly tied
          // to the opcode behavior above.


          len = this.children.length;

          for (var i = 0; i < len; i++) {
            if (!this.children[i].equals(other.children[i])) {
              return false;
            }
          }

          return true;
        },
        guid: 0,
        compile: function compile(program, options) {
          this.sourceNode = [];
          this.opcodes = [];
          this.children = [];
          this.options = options;
          this.stringParams = options.stringParams;
          this.trackIds = options.trackIds;
          options.blockParams = options.blockParams || [];
          options.knownHelpers = _utils.extend(_Object$create(null), {
            helperMissing: true,
            blockHelperMissing: true,
            each: true,
            'if': true,
            unless: true,
            'with': true,
            log: true,
            lookup: true
          }, options.knownHelpers);
          return this.accept(program);
        },
        compileProgram: function compileProgram(program) {
          var childCompiler = new this.compiler(),
              // eslint-disable-line new-cap
          result = childCompiler.compile(program, this.options),
              guid = this.guid++;
          this.usePartial = this.usePartial || result.usePartial;
          this.children[guid] = result;
          this.useDepths = this.useDepths || result.useDepths;
          return guid;
        },
        accept: function accept(node) {
          /* istanbul ignore next: Sanity code */
          if (!this[node.type]) {
            throw new _exception2['default']('Unknown type: ' + node.type, node);
          }

          this.sourceNode.unshift(node);
          var ret = this[node.type](node);
          this.sourceNode.shift();
          return ret;
        },
        Program: function Program(program) {
          this.options.blockParams.unshift(program.blockParams);
          var body = program.body,
              bodyLength = body.length;

          for (var i = 0; i < bodyLength; i++) {
            this.accept(body[i]);
          }

          this.options.blockParams.shift();
          this.isSimple = bodyLength === 1;
          this.blockParams = program.blockParams ? program.blockParams.length : 0;
          return this;
        },
        BlockStatement: function BlockStatement(block) {
          transformLiteralToPath(block);
          var program = block.program,
              inverse = block.inverse;
          program = program && this.compileProgram(program);
          inverse = inverse && this.compileProgram(inverse);
          var type = this.classifySexpr(block);

          if (type === 'helper') {
            this.helperSexpr(block, program, inverse);
          } else if (type === 'simple') {
            this.simpleSexpr(block); // now that the simple mustache is resolved, we need to
            // evaluate it by executing `blockHelperMissing`

            this.opcode('pushProgram', program);
            this.opcode('pushProgram', inverse);
            this.opcode('emptyHash');
            this.opcode('blockValue', block.path.original);
          } else {
            this.ambiguousSexpr(block, program, inverse); // now that the simple mustache is resolved, we need to
            // evaluate it by executing `blockHelperMissing`

            this.opcode('pushProgram', program);
            this.opcode('pushProgram', inverse);
            this.opcode('emptyHash');
            this.opcode('ambiguousBlockValue');
          }

          this.opcode('append');
        },
        DecoratorBlock: function DecoratorBlock(decorator) {
          var program = decorator.program && this.compileProgram(decorator.program);
          var params = this.setupFullMustacheParams(decorator, program, undefined),
              path = decorator.path;
          this.useDecorators = true;
          this.opcode('registerDecorator', params.length, path.original);
        },
        PartialStatement: function PartialStatement(partial) {
          this.usePartial = true;
          var program = partial.program;

          if (program) {
            program = this.compileProgram(partial.program);
          }

          var params = partial.params;

          if (params.length > 1) {
            throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
          } else if (!params.length) {
            if (this.options.explicitPartialContext) {
              this.opcode('pushLiteral', 'undefined');
            } else {
              params.push({
                type: 'PathExpression',
                parts: [],
                depth: 0
              });
            }
          }

          var partialName = partial.name.original,
              isDynamic = partial.name.type === 'SubExpression';

          if (isDynamic) {
            this.accept(partial.name);
          }

          this.setupFullMustacheParams(partial, program, undefined, true);
          var indent = partial.indent || '';

          if (this.options.preventIndent && indent) {
            this.opcode('appendContent', indent);
            indent = '';
          }

          this.opcode('invokePartial', isDynamic, partialName, indent);
          this.opcode('append');
        },
        PartialBlockStatement: function PartialBlockStatement(partialBlock) {
          this.PartialStatement(partialBlock);
        },
        MustacheStatement: function MustacheStatement(mustache) {
          this.SubExpression(mustache);

          if (mustache.escaped && !this.options.noEscape) {
            this.opcode('appendEscaped');
          } else {
            this.opcode('append');
          }
        },
        Decorator: function Decorator(decorator) {
          this.DecoratorBlock(decorator);
        },
        ContentStatement: function ContentStatement(content) {
          if (content.value) {
            this.opcode('appendContent', content.value);
          }
        },
        CommentStatement: function CommentStatement() {},
        SubExpression: function SubExpression(sexpr) {
          transformLiteralToPath(sexpr);
          var type = this.classifySexpr(sexpr);

          if (type === 'simple') {
            this.simpleSexpr(sexpr);
          } else if (type === 'helper') {
            this.helperSexpr(sexpr);
          } else {
            this.ambiguousSexpr(sexpr);
          }
        },
        ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
          var path = sexpr.path,
              name = path.parts[0],
              isBlock = program != null || inverse != null;
          this.opcode('getContext', path.depth);
          this.opcode('pushProgram', program);
          this.opcode('pushProgram', inverse);
          path.strict = true;
          this.accept(path);
          this.opcode('invokeAmbiguous', name, isBlock);
        },
        simpleSexpr: function simpleSexpr(sexpr) {
          var path = sexpr.path;
          path.strict = true;
          this.accept(path);
          this.opcode('resolvePossibleLambda');
        },
        helperSexpr: function helperSexpr(sexpr, program, inverse) {
          var params = this.setupFullMustacheParams(sexpr, program, inverse),
              path = sexpr.path,
              name = path.parts[0];

          if (this.options.knownHelpers[name]) {
            this.opcode('invokeKnownHelper', params.length, name);
          } else if (this.options.knownHelpersOnly) {
            throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
          } else {
            path.strict = true;
            path.falsy = true;
            this.accept(path);
            this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
          }
        },
        PathExpression: function PathExpression(path) {
          this.addDepth(path.depth);
          this.opcode('getContext', path.depth);

          var name = path.parts[0],
              scoped = _ast2['default'].helpers.scopedId(path),
              blockParamId = !path.depth && !scoped && this.blockParamIndex(name);

          if (blockParamId) {
            this.opcode('lookupBlockParam', blockParamId, path.parts);
          } else if (!name) {
            // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
            this.opcode('pushContext');
          } else if (path.data) {
            this.options.data = true;
            this.opcode('lookupData', path.depth, path.parts, path.strict);
          } else {
            this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
          }
        },
        StringLiteral: function StringLiteral(string) {
          this.opcode('pushString', string.value);
        },
        NumberLiteral: function NumberLiteral(number) {
          this.opcode('pushLiteral', number.value);
        },
        BooleanLiteral: function BooleanLiteral(bool) {
          this.opcode('pushLiteral', bool.value);
        },
        UndefinedLiteral: function UndefinedLiteral() {
          this.opcode('pushLiteral', 'undefined');
        },
        NullLiteral: function NullLiteral() {
          this.opcode('pushLiteral', 'null');
        },
        Hash: function Hash(hash) {
          var pairs = hash.pairs,
              i = 0,
              l = pairs.length;
          this.opcode('pushHash');

          for (; i < l; i++) {
            this.pushParam(pairs[i].value);
          }

          while (i--) {
            this.opcode('assignToHash', pairs[i].key);
          }

          this.opcode('popHash');
        },
        // HELPERS
        opcode: function opcode(name) {
          this.opcodes.push({
            opcode: name,
            args: slice.call(arguments, 1),
            loc: this.sourceNode[0].loc
          });
        },
        addDepth: function addDepth(depth) {
          if (!depth) {
            return;
          }

          this.useDepths = true;
        },
        classifySexpr: function classifySexpr(sexpr) {
          var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);

          var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]); // a mustache is an eligible helper if:
          // * its id is simple (a single part, not `this` or `..`)

          var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr); // if a mustache is an eligible helper but not a definite
          // helper, it is ambiguous, and will be resolved in a later
          // pass or at runtime.


          var isEligible = !isBlockParam && (isHelper || isSimple); // if ambiguous, we can possibly resolve the ambiguity now
          // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.

          if (isEligible && !isHelper) {
            var _name = sexpr.path.parts[0],
                options = this.options;

            if (options.knownHelpers[_name]) {
              isHelper = true;
            } else if (options.knownHelpersOnly) {
              isEligible = false;
            }
          }

          if (isHelper) {
            return 'helper';
          } else if (isEligible) {
            return 'ambiguous';
          } else {
            return 'simple';
          }
        },
        pushParams: function pushParams(params) {
          for (var i = 0, l = params.length; i < l; i++) {
            this.pushParam(params[i]);
          }
        },
        pushParam: function pushParam(val) {
          var value = val.value != null ? val.value : val.original || '';

          if (this.stringParams) {
            if (value.replace) {
              value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
            }

            if (val.depth) {
              this.addDepth(val.depth);
            }

            this.opcode('getContext', val.depth || 0);
            this.opcode('pushStringParam', value, val.type);

            if (val.type === 'SubExpression') {
              // SubExpressions get evaluated and passed in
              // in string params mode.
              this.accept(val);
            }
          } else {
            if (this.trackIds) {
              var blockParamIndex = undefined;

              if (val.parts && !_ast2['default'].helpers.scopedId(val) && !val.depth) {
                blockParamIndex = this.blockParamIndex(val.parts[0]);
              }

              if (blockParamIndex) {
                var blockParamChild = val.parts.slice(1).join('.');
                this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
              } else {
                value = val.original || value;

                if (value.replace) {
                  value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
                }

                this.opcode('pushId', val.type, value);
              }
            }

            this.accept(val);
          }
        },
        setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
          var params = sexpr.params;
          this.pushParams(params);
          this.opcode('pushProgram', program);
          this.opcode('pushProgram', inverse);

          if (sexpr.hash) {
            this.accept(sexpr.hash);
          } else {
            this.opcode('emptyHash', omitEmpty);
          }

          return params;
        },
        blockParamIndex: function blockParamIndex(name) {
          for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
            var blockParams = this.options.blockParams[depth],
                param = blockParams && _utils.indexOf(blockParams, name);

            if (blockParams && param >= 0) {
              return [depth, param];
            }
          }
        }
      };

      function precompile(input, options, env) {
        if (input == null || typeof input !== 'string' && input.type !== 'Program') {
          throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
        }

        options = options || {};

        if (!('data' in options)) {
          options.data = true;
        }

        if (options.compat) {
          options.useDepths = true;
        }

        var ast = env.parse(input, options),
            environment = new env.Compiler().compile(ast, options);
        return new env.JavaScriptCompiler().compile(environment, options);
      }

      function compile(input, options, env) {
        if (options === undefined) options = {};

        if (input == null || typeof input !== 'string' && input.type !== 'Program') {
          throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
        }

        options = _utils.extend({}, options);

        if (!('data' in options)) {
          options.data = true;
        }

        if (options.compat) {
          options.useDepths = true;
        }

        var compiled = undefined;

        function compileInput() {
          var ast = env.parse(input, options),
              environment = new env.Compiler().compile(ast, options),
              templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
          return env.template(templateSpec);
        } // Template is only compiled on first use and cached after that point.


        function ret(context, execOptions) {
          if (!compiled) {
            compiled = compileInput();
          }

          return compiled.call(this, context, execOptions);
        }

        ret._setup = function (setupOptions) {
          if (!compiled) {
            compiled = compileInput();
          }

          return compiled._setup(setupOptions);
        };

        ret._child = function (i, data, blockParams, depths) {
          if (!compiled) {
            compiled = compileInput();
          }

          return compiled._child(i, data, blockParams, depths);
        };

        return ret;
      }

      function argEquals(a, b) {
        if (a === b) {
          return true;
        }

        if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
          for (var i = 0; i < a.length; i++) {
            if (!argEquals(a[i], b[i])) {
              return false;
            }
          }

          return true;
        }
      }

      function transformLiteralToPath(sexpr) {
        if (!sexpr.path.parts) {
          var literal = sexpr.path; // Casting to string here to make false and 0 literal values play nicely with the rest
          // of the system.

          sexpr.path = {
            type: 'PathExpression',
            data: false,
            depth: 0,
            parts: [literal.original + ''],
            original: literal.original + '',
            loc: literal.loc
          };
        }
      }
      /***/

    },
    /* 52 */

    /***/
    function (module, exports, __nested_webpack_require_169794__) {
      'use strict';

      var _Object$keys = __nested_webpack_require_169794__(13)['default'];

      var _interopRequireDefault = __nested_webpack_require_169794__(1)['default'];

      exports.__esModule = true;

      var _base = __nested_webpack_require_169794__(4);

      var _exception = __nested_webpack_require_169794__(6);

      var _exception2 = _interopRequireDefault(_exception);

      var _utils = __nested_webpack_require_169794__(5);

      var _codeGen = __nested_webpack_require_169794__(53);

      var _codeGen2 = _interopRequireDefault(_codeGen);

      function Literal(value) {
        this.value = value;
      }

      function JavaScriptCompiler() {}

      JavaScriptCompiler.prototype = {
        // PUBLIC API: You can override these methods in a subclass to provide
        // alternative compiled forms for name lookup and buffering semantics
        nameLookup: function nameLookup(parent, name
        /*,  type */
        ) {
          return this.internalNameLookup(parent, name);
        },
        depthedLookup: function depthedLookup(name) {
          return [this.aliasable('container.lookup'), '(depths, ', JSON.stringify(name), ')'];
        },
        compilerInfo: function compilerInfo() {
          var revision = _base.COMPILER_REVISION,
              versions = _base.REVISION_CHANGES[revision];
          return [revision, versions];
        },
        appendToBuffer: function appendToBuffer(source, location, explicit) {
          // Force a source as this simplifies the merge logic.
          if (!_utils.isArray(source)) {
            source = [source];
          }

          source = this.source.wrap(source, location);

          if (this.environment.isSimple) {
            return ['return ', source, ';'];
          } else if (explicit) {
            // This is a case where the buffer operation occurs as a child of another
            // construct, generally braces. We have to explicitly output these buffer
            // operations to ensure that the emitted code goes in the correct location.
            return ['buffer += ', source, ';'];
          } else {
            source.appendToBuffer = true;
            return source;
          }
        },
        initializeBuffer: function initializeBuffer() {
          return this.quotedString('');
        },
        // END PUBLIC API
        internalNameLookup: function internalNameLookup(parent, name) {
          this.lookupPropertyFunctionIsUsed = true;
          return ['lookupProperty(', parent, ',', JSON.stringify(name), ')'];
        },
        lookupPropertyFunctionIsUsed: false,
        compile: function compile(environment, options, context, asObject) {
          this.environment = environment;
          this.options = options;
          this.stringParams = this.options.stringParams;
          this.trackIds = this.options.trackIds;
          this.precompile = !asObject;
          this.name = this.environment.name;
          this.isChild = !!context;
          this.context = context || {
            decorators: [],
            programs: [],
            environments: []
          };
          this.preamble();
          this.stackSlot = 0;
          this.stackVars = [];
          this.aliases = {};
          this.registers = {
            list: []
          };
          this.hashes = [];
          this.compileStack = [];
          this.inlineStack = [];
          this.blockParams = [];
          this.compileChildren(environment, options);
          this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
          this.useBlockParams = this.useBlockParams || environment.useBlockParams;
          var opcodes = environment.opcodes,
              opcode = undefined,
              firstLoc = undefined,
              i = undefined,
              l = undefined;

          for (i = 0, l = opcodes.length; i < l; i++) {
            opcode = opcodes[i];
            this.source.currentLocation = opcode.loc;
            firstLoc = firstLoc || opcode.loc;
            this[opcode.opcode].apply(this, opcode.args);
          } // Flush any trailing content that might be pending.


          this.source.currentLocation = firstLoc;
          this.pushSource('');
          /* istanbul ignore next */

          if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
            throw new _exception2['default']('Compile completed with content left on stack');
          }

          if (!this.decorators.isEmpty()) {
            this.useDecorators = true;
            this.decorators.prepend(['var decorators = container.decorators, ', this.lookupPropertyFunctionVarDeclaration(), ';\n']);
            this.decorators.push('return fn;');

            if (asObject) {
              this.decorators = Function.apply(this, ['fn', 'props', 'container', 'depth0', 'data', 'blockParams', 'depths', this.decorators.merge()]);
            } else {
              this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
              this.decorators.push('}\n');
              this.decorators = this.decorators.merge();
            }
          } else {
            this.decorators = undefined;
          }

          var fn = this.createFunctionContext(asObject);

          if (!this.isChild) {
            var ret = {
              compiler: this.compilerInfo(),
              main: fn
            };

            if (this.decorators) {
              ret.main_d = this.decorators; // eslint-disable-line camelcase

              ret.useDecorators = true;
            }

            var _context = this.context;
            var programs = _context.programs;
            var decorators = _context.decorators;

            for (i = 0, l = programs.length; i < l; i++) {
              if (programs[i]) {
                ret[i] = programs[i];

                if (decorators[i]) {
                  ret[i + '_d'] = decorators[i];
                  ret.useDecorators = true;
                }
              }
            }

            if (this.environment.usePartial) {
              ret.usePartial = true;
            }

            if (this.options.data) {
              ret.useData = true;
            }

            if (this.useDepths) {
              ret.useDepths = true;
            }

            if (this.useBlockParams) {
              ret.useBlockParams = true;
            }

            if (this.options.compat) {
              ret.compat = true;
            }

            if (!asObject) {
              ret.compiler = JSON.stringify(ret.compiler);
              this.source.currentLocation = {
                start: {
                  line: 1,
                  column: 0
                }
              };
              ret = this.objectLiteral(ret);

              if (options.srcName) {
                ret = ret.toStringWithSourceMap({
                  file: options.destName
                });
                ret.map = ret.map && ret.map.toString();
              } else {
                ret = ret.toString();
              }
            } else {
              ret.compilerOptions = this.options;
            }

            return ret;
          } else {
            return fn;
          }
        },
        preamble: function preamble() {
          // track the last context pushed into place to allow skipping the
          // getContext opcode when it would be a noop
          this.lastContext = 0;
          this.source = new _codeGen2['default'](this.options.srcName);
          this.decorators = new _codeGen2['default'](this.options.srcName);
        },
        createFunctionContext: function createFunctionContext(asObject) {
          // istanbul ignore next
          var _this = this;

          var varDeclarations = '';
          var locals = this.stackVars.concat(this.registers.list);

          if (locals.length > 0) {
            varDeclarations += ', ' + locals.join(', ');
          } // Generate minimizer alias mappings
          //
          // When using true SourceNodes, this will update all references to the given alias
          // as the source nodes are reused in situ. For the non-source node compilation mode,
          // aliases will not be used, but this case is already being run on the client and
          // we aren't concern about minimizing the template size.


          var aliasCount = 0;

          _Object$keys(this.aliases).forEach(function (alias) {
            var node = _this.aliases[alias];

            if (node.children && node.referenceCount > 1) {
              varDeclarations += ', alias' + ++aliasCount + '=' + alias;
              node.children[0] = 'alias' + aliasCount;
            }
          });

          if (this.lookupPropertyFunctionIsUsed) {
            varDeclarations += ', ' + this.lookupPropertyFunctionVarDeclaration();
          }

          var params = ['container', 'depth0', 'helpers', 'partials', 'data'];

          if (this.useBlockParams || this.useDepths) {
            params.push('blockParams');
          }

          if (this.useDepths) {
            params.push('depths');
          } // Perform a second pass over the output to merge content when possible


          var source = this.mergeSource(varDeclarations);

          if (asObject) {
            params.push(source);
            return Function.apply(this, params);
          } else {
            return this.source.wrap(['function(', params.join(','), ') {\n  ', source, '}']);
          }
        },
        mergeSource: function mergeSource(varDeclarations) {
          var isSimple = this.environment.isSimple,
              appendOnly = !this.forceBuffer,
              appendFirst = undefined,
              sourceSeen = undefined,
              bufferStart = undefined,
              bufferEnd = undefined;
          this.source.each(function (line) {
            if (line.appendToBuffer) {
              if (bufferStart) {
                line.prepend('  + ');
              } else {
                bufferStart = line;
              }

              bufferEnd = line;
            } else {
              if (bufferStart) {
                if (!sourceSeen) {
                  appendFirst = true;
                } else {
                  bufferStart.prepend('buffer += ');
                }

                bufferEnd.add(';');
                bufferStart = bufferEnd = undefined;
              }

              sourceSeen = true;

              if (!isSimple) {
                appendOnly = false;
              }
            }
          });

          if (appendOnly) {
            if (bufferStart) {
              bufferStart.prepend('return ');
              bufferEnd.add(';');
            } else if (!sourceSeen) {
              this.source.push('return "";');
            }
          } else {
            varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());

            if (bufferStart) {
              bufferStart.prepend('return buffer + ');
              bufferEnd.add(';');
            } else {
              this.source.push('return buffer;');
            }
          }

          if (varDeclarations) {
            this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
          }

          return this.source.merge();
        },
        lookupPropertyFunctionVarDeclaration: function lookupPropertyFunctionVarDeclaration() {
          return '\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    '.trim();
        },
        // [blockValue]
        //
        // On stack, before: hash, inverse, program, value
        // On stack, after: return value of blockHelperMissing
        //
        // The purpose of this opcode is to take a block of the form
        // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
        // replace it on the stack with the result of properly
        // invoking blockHelperMissing.
        blockValue: function blockValue(name) {
          var blockHelperMissing = this.aliasable('container.hooks.blockHelperMissing'),
              params = [this.contextName(0)];
          this.setupHelperArgs(name, 0, params);
          var blockName = this.popStack();
          params.splice(1, 0, blockName);
          this.push(this.source.functionCall(blockHelperMissing, 'call', params));
        },
        // [ambiguousBlockValue]
        //
        // On stack, before: hash, inverse, program, value
        // Compiler value, before: lastHelper=value of last found helper, if any
        // On stack, after, if no lastHelper: same as [blockValue]
        // On stack, after, if lastHelper: value
        ambiguousBlockValue: function ambiguousBlockValue() {
          // We're being a bit cheeky and reusing the options value from the prior exec
          var blockHelperMissing = this.aliasable('container.hooks.blockHelperMissing'),
              params = [this.contextName(0)];
          this.setupHelperArgs('', 0, params, true);
          this.flushInline();
          var current = this.topStack();
          params.splice(1, 0, current);
          this.pushSource(['if (!', this.lastHelper, ') { ', current, ' = ', this.source.functionCall(blockHelperMissing, 'call', params), '}']);
        },
        // [appendContent]
        //
        // On stack, before: ...
        // On stack, after: ...
        //
        // Appends the string value of `content` to the current buffer
        appendContent: function appendContent(content) {
          if (this.pendingContent) {
            content = this.pendingContent + content;
          } else {
            this.pendingLocation = this.source.currentLocation;
          }

          this.pendingContent = content;
        },
        // [append]
        //
        // On stack, before: value, ...
        // On stack, after: ...
        //
        // Coerces `value` to a String and appends it to the current buffer.
        //
        // If `value` is truthy, or 0, it is coerced into a string and appended
        // Otherwise, the empty string is appended
        append: function append() {
          if (this.isInline()) {
            this.replaceStack(function (current) {
              return [' != null ? ', current, ' : ""'];
            });
            this.pushSource(this.appendToBuffer(this.popStack()));
          } else {
            var local = this.popStack();
            this.pushSource(['if (', local, ' != null) { ', this.appendToBuffer(local, undefined, true), ' }']);

            if (this.environment.isSimple) {
              this.pushSource(['else { ', this.appendToBuffer("''", undefined, true), ' }']);
            }
          }
        },
        // [appendEscaped]
        //
        // On stack, before: value, ...
        // On stack, after: ...
        //
        // Escape `value` and append it to the buffer
        appendEscaped: function appendEscaped() {
          this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'), '(', this.popStack(), ')']));
        },
        // [getContext]
        //
        // On stack, before: ...
        // On stack, after: ...
        // Compiler value, after: lastContext=depth
        //
        // Set the value of the `lastContext` compiler value to the depth
        getContext: function getContext(depth) {
          this.lastContext = depth;
        },
        // [pushContext]
        //
        // On stack, before: ...
        // On stack, after: currentContext, ...
        //
        // Pushes the value of the current context onto the stack.
        pushContext: function pushContext() {
          this.pushStackLiteral(this.contextName(this.lastContext));
        },
        // [lookupOnContext]
        //
        // On stack, before: ...
        // On stack, after: currentContext[name], ...
        //
        // Looks up the value of `name` on the current context and pushes
        // it onto the stack.
        lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
          var i = 0;

          if (!scoped && this.options.compat && !this.lastContext) {
            // The depthed query is expected to handle the undefined logic for the root level that
            // is implemented below, so we evaluate that directly in compat mode
            this.push(this.depthedLookup(parts[i++]));
          } else {
            this.pushContext();
          }

          this.resolvePath('context', parts, i, falsy, strict);
        },
        // [lookupBlockParam]
        //
        // On stack, before: ...
        // On stack, after: blockParam[name], ...
        //
        // Looks up the value of `parts` on the given block param and pushes
        // it onto the stack.
        lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
          this.useBlockParams = true;
          this.push(['blockParams[', blockParamId[0], '][', blockParamId[1], ']']);
          this.resolvePath('context', parts, 1);
        },
        // [lookupData]
        //
        // On stack, before: ...
        // On stack, after: data, ...
        //
        // Push the data lookup operator
        lookupData: function lookupData(depth, parts, strict) {
          if (!depth) {
            this.pushStackLiteral('data');
          } else {
            this.pushStackLiteral('container.data(data, ' + depth + ')');
          }

          this.resolvePath('data', parts, 0, true, strict);
        },
        resolvePath: function resolvePath(type, parts, i, falsy, strict) {
          // istanbul ignore next
          var _this2 = this;

          if (this.options.strict || this.options.assumeObjects) {
            this.push(strictLookup(this.options.strict && strict, this, parts, type));
            return;
          }

          var len = parts.length;

          for (; i < len; i++) {
            /* eslint-disable no-loop-func */
            this.replaceStack(function (current) {
              var lookup = _this2.nameLookup(current, parts[i], type); // We want to ensure that zero and false are handled properly if the context (falsy flag)
              // needs to have the special handling for these values.


              if (!falsy) {
                return [' != null ? ', lookup, ' : ', current];
              } else {
                // Otherwise we can use generic falsy handling
                return [' && ', lookup];
              }
            });
            /* eslint-enable no-loop-func */
          }
        },
        // [resolvePossibleLambda]
        //
        // On stack, before: value, ...
        // On stack, after: resolved value, ...
        //
        // If the `value` is a lambda, replace it on the stack by
        // the return value of the lambda
        resolvePossibleLambda: function resolvePossibleLambda() {
          this.push([this.aliasable('container.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')']);
        },
        // [pushStringParam]
        //
        // On stack, before: ...
        // On stack, after: string, currentContext, ...
        //
        // This opcode is designed for use in string mode, which
        // provides the string value of a parameter along with its
        // depth rather than resolving it immediately.
        pushStringParam: function pushStringParam(string, type) {
          this.pushContext();
          this.pushString(type); // If it's a subexpression, the string result
          // will be pushed after this opcode.

          if (type !== 'SubExpression') {
            if (typeof string === 'string') {
              this.pushString(string);
            } else {
              this.pushStackLiteral(string);
            }
          }
        },
        emptyHash: function emptyHash(omitEmpty) {
          if (this.trackIds) {
            this.push('{}'); // hashIds
          }

          if (this.stringParams) {
            this.push('{}'); // hashContexts

            this.push('{}'); // hashTypes
          }

          this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
        },
        pushHash: function pushHash() {
          if (this.hash) {
            this.hashes.push(this.hash);
          }

          this.hash = {
            values: {},
            types: [],
            contexts: [],
            ids: []
          };
        },
        popHash: function popHash() {
          var hash = this.hash;
          this.hash = this.hashes.pop();

          if (this.trackIds) {
            this.push(this.objectLiteral(hash.ids));
          }

          if (this.stringParams) {
            this.push(this.objectLiteral(hash.contexts));
            this.push(this.objectLiteral(hash.types));
          }

          this.push(this.objectLiteral(hash.values));
        },
        // [pushString]
        //
        // On stack, before: ...
        // On stack, after: quotedString(string), ...
        //
        // Push a quoted version of `string` onto the stack
        pushString: function pushString(string) {
          this.pushStackLiteral(this.quotedString(string));
        },
        // [pushLiteral]
        //
        // On stack, before: ...
        // On stack, after: value, ...
        //
        // Pushes a value onto the stack. This operation prevents
        // the compiler from creating a temporary variable to hold
        // it.
        pushLiteral: function pushLiteral(value) {
          this.pushStackLiteral(value);
        },
        // [pushProgram]
        //
        // On stack, before: ...
        // On stack, after: program(guid), ...
        //
        // Push a program expression onto the stack. This takes
        // a compile-time guid and converts it into a runtime-accessible
        // expression.
        pushProgram: function pushProgram(guid) {
          if (guid != null) {
            this.pushStackLiteral(this.programExpression(guid));
          } else {
            this.pushStackLiteral(null);
          }
        },
        // [registerDecorator]
        //
        // On stack, before: hash, program, params..., ...
        // On stack, after: ...
        //
        // Pops off the decorator's parameters, invokes the decorator,
        // and inserts the decorator into the decorators list.
        registerDecorator: function registerDecorator(paramSize, name) {
          var foundDecorator = this.nameLookup('decorators', name, 'decorator'),
              options = this.setupHelperArgs(name, paramSize);
          this.decorators.push(['fn = ', this.decorators.functionCall(foundDecorator, '', ['fn', 'props', 'container', options]), ' || fn;']);
        },
        // [invokeHelper]
        //
        // On stack, before: hash, inverse, program, params..., ...
        // On stack, after: result of helper invocation
        //
        // Pops off the helper's parameters, invokes the helper,
        // and pushes the helper's return value onto the stack.
        //
        // If the helper is not found, `helperMissing` is called.
        invokeHelper: function invokeHelper(paramSize, name, isSimple) {
          var nonHelper = this.popStack(),
              helper = this.setupHelper(paramSize, name);
          var possibleFunctionCalls = [];

          if (isSimple) {
            // direct call to helper
            possibleFunctionCalls.push(helper.name);
          } // call a function from the input object


          possibleFunctionCalls.push(nonHelper);

          if (!this.options.strict) {
            possibleFunctionCalls.push(this.aliasable('container.hooks.helperMissing'));
          }

          var functionLookupCode = ['(', this.itemsSeparatedBy(possibleFunctionCalls, '||'), ')'];
          var functionCall = this.source.functionCall(functionLookupCode, 'call', helper.callParams);
          this.push(functionCall);
        },
        itemsSeparatedBy: function itemsSeparatedBy(items, separator) {
          var result = [];
          result.push(items[0]);

          for (var i = 1; i < items.length; i++) {
            result.push(separator, items[i]);
          }

          return result;
        },
        // [invokeKnownHelper]
        //
        // On stack, before: hash, inverse, program, params..., ...
        // On stack, after: result of helper invocation
        //
        // This operation is used when the helper is known to exist,
        // so a `helperMissing` fallback is not required.
        invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
          var helper = this.setupHelper(paramSize, name);
          this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
        },
        // [invokeAmbiguous]
        //
        // On stack, before: hash, inverse, program, params..., ...
        // On stack, after: result of disambiguation
        //
        // This operation is used when an expression like `{{foo}}`
        // is provided, but we don't know at compile-time whether it
        // is a helper or a path.
        //
        // This operation emits more code than the other options,
        // and can be avoided by passing the `knownHelpers` and
        // `knownHelpersOnly` flags at compile-time.
        invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
          this.useRegister('helper');
          var nonHelper = this.popStack();
          this.emptyHash();
          var helper = this.setupHelper(0, name, helperCall);
          var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');
          var lookup = ['(', '(helper = ', helperName, ' || ', nonHelper, ')'];

          if (!this.options.strict) {
            lookup[0] = '(helper = ';
            lookup.push(' != null ? helper : ', this.aliasable('container.hooks.helperMissing'));
          }

          this.push(['(', lookup, helper.paramsInit ? ['),(', helper.paramsInit] : [], '),', '(typeof helper === ', this.aliasable('"function"'), ' ? ', this.source.functionCall('helper', 'call', helper.callParams), ' : helper))']);
        },
        // [invokePartial]
        //
        // On stack, before: context, ...
        // On stack after: result of partial invocation
        //
        // This operation pops off a context, invokes a partial with that context,
        // and pushes the result of the invocation back.
        invokePartial: function invokePartial(isDynamic, name, indent) {
          var params = [],
              options = this.setupParams(name, 1, params);

          if (isDynamic) {
            name = this.popStack();
            delete options.name;
          }

          if (indent) {
            options.indent = JSON.stringify(indent);
          }

          options.helpers = 'helpers';
          options.partials = 'partials';
          options.decorators = 'container.decorators';

          if (!isDynamic) {
            params.unshift(this.nameLookup('partials', name, 'partial'));
          } else {
            params.unshift(name);
          }

          if (this.options.compat) {
            options.depths = 'depths';
          }

          options = this.objectLiteral(options);
          params.push(options);
          this.push(this.source.functionCall('container.invokePartial', '', params));
        },
        // [assignToHash]
        //
        // On stack, before: value, ..., hash, ...
        // On stack, after: ..., hash, ...
        //
        // Pops a value off the stack and assigns it to the current hash
        assignToHash: function assignToHash(key) {
          var value = this.popStack(),
              context = undefined,
              type = undefined,
              id = undefined;

          if (this.trackIds) {
            id = this.popStack();
          }

          if (this.stringParams) {
            type = this.popStack();
            context = this.popStack();
          }

          var hash = this.hash;

          if (context) {
            hash.contexts[key] = context;
          }

          if (type) {
            hash.types[key] = type;
          }

          if (id) {
            hash.ids[key] = id;
          }

          hash.values[key] = value;
        },
        pushId: function pushId(type, name, child) {
          if (type === 'BlockParam') {
            this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
          } else if (type === 'PathExpression') {
            this.pushString(name);
          } else if (type === 'SubExpression') {
            this.pushStackLiteral('true');
          } else {
            this.pushStackLiteral('null');
          }
        },
        // HELPERS
        compiler: JavaScriptCompiler,
        compileChildren: function compileChildren(environment, options) {
          var children = environment.children,
              child = undefined,
              compiler = undefined;

          for (var i = 0, l = children.length; i < l; i++) {
            child = children[i];
            compiler = new this.compiler(); // eslint-disable-line new-cap

            var existing = this.matchExistingProgram(child);

            if (existing == null) {
              this.context.programs.push(''); // Placeholder to prevent name conflicts for nested children

              var index = this.context.programs.length;
              child.index = index;
              child.name = 'program' + index;
              this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
              this.context.decorators[index] = compiler.decorators;
              this.context.environments[index] = child;
              this.useDepths = this.useDepths || compiler.useDepths;
              this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
              child.useDepths = this.useDepths;
              child.useBlockParams = this.useBlockParams;
            } else {
              child.index = existing.index;
              child.name = 'program' + existing.index;
              this.useDepths = this.useDepths || existing.useDepths;
              this.useBlockParams = this.useBlockParams || existing.useBlockParams;
            }
          }
        },
        matchExistingProgram: function matchExistingProgram(child) {
          for (var i = 0, len = this.context.environments.length; i < len; i++) {
            var environment = this.context.environments[i];

            if (environment && environment.equals(child)) {
              return environment;
            }
          }
        },
        programExpression: function programExpression(guid) {
          var child = this.environment.children[guid],
              programParams = [child.index, 'data', child.blockParams];

          if (this.useBlockParams || this.useDepths) {
            programParams.push('blockParams');
          }

          if (this.useDepths) {
            programParams.push('depths');
          }

          return 'container.program(' + programParams.join(', ') + ')';
        },
        useRegister: function useRegister(name) {
          if (!this.registers[name]) {
            this.registers[name] = true;
            this.registers.list.push(name);
          }
        },
        push: function push(expr) {
          if (!(expr instanceof Literal)) {
            expr = this.source.wrap(expr);
          }

          this.inlineStack.push(expr);
          return expr;
        },
        pushStackLiteral: function pushStackLiteral(item) {
          this.push(new Literal(item));
        },
        pushSource: function pushSource(source) {
          if (this.pendingContent) {
            this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
            this.pendingContent = undefined;
          }

          if (source) {
            this.source.push(source);
          }
        },
        replaceStack: function replaceStack(callback) {
          var prefix = ['('],
              stack = undefined,
              createdStack = undefined,
              usedLiteral = undefined;
          /* istanbul ignore next */

          if (!this.isInline()) {
            throw new _exception2['default']('replaceStack on non-inline');
          } // We want to merge the inline statement into the replacement statement via ','


          var top = this.popStack(true);

          if (top instanceof Literal) {
            // Literals do not need to be inlined
            stack = [top.value];
            prefix = ['(', stack];
            usedLiteral = true;
          } else {
            // Get or create the current stack name for use by the inline
            createdStack = true;

            var _name = this.incrStack();

            prefix = ['((', this.push(_name), ' = ', top, ')'];
            stack = this.topStack();
          }

          var item = callback.call(this, stack);

          if (!usedLiteral) {
            this.popStack();
          }

          if (createdStack) {
            this.stackSlot--;
          }

          this.push(prefix.concat(item, ')'));
        },
        incrStack: function incrStack() {
          this.stackSlot++;

          if (this.stackSlot > this.stackVars.length) {
            this.stackVars.push('stack' + this.stackSlot);
          }

          return this.topStackName();
        },
        topStackName: function topStackName() {
          return 'stack' + this.stackSlot;
        },
        flushInline: function flushInline() {
          var inlineStack = this.inlineStack;
          this.inlineStack = [];

          for (var i = 0, len = inlineStack.length; i < len; i++) {
            var entry = inlineStack[i];
            /* istanbul ignore if */

            if (entry instanceof Literal) {
              this.compileStack.push(entry);
            } else {
              var stack = this.incrStack();
              this.pushSource([stack, ' = ', entry, ';']);
              this.compileStack.push(stack);
            }
          }
        },
        isInline: function isInline() {
          return this.inlineStack.length;
        },
        popStack: function popStack(wrapped) {
          var inline = this.isInline(),
              item = (inline ? this.inlineStack : this.compileStack).pop();

          if (!wrapped && item instanceof Literal) {
            return item.value;
          } else {
            if (!inline) {
              /* istanbul ignore next */
              if (!this.stackSlot) {
                throw new _exception2['default']('Invalid stack pop');
              }

              this.stackSlot--;
            }

            return item;
          }
        },
        topStack: function topStack() {
          var stack = this.isInline() ? this.inlineStack : this.compileStack,
              item = stack[stack.length - 1];
          /* istanbul ignore if */

          if (item instanceof Literal) {
            return item.value;
          } else {
            return item;
          }
        },
        contextName: function contextName(context) {
          if (this.useDepths && context) {
            return 'depths[' + context + ']';
          } else {
            return 'depth' + context;
          }
        },
        quotedString: function quotedString(str) {
          return this.source.quotedString(str);
        },
        objectLiteral: function objectLiteral(obj) {
          return this.source.objectLiteral(obj);
        },
        aliasable: function aliasable(name) {
          var ret = this.aliases[name];

          if (ret) {
            ret.referenceCount++;
            return ret;
          }

          ret = this.aliases[name] = this.source.wrap(name);
          ret.aliasable = true;
          ret.referenceCount = 1;
          return ret;
        },
        setupHelper: function setupHelper(paramSize, name, blockHelper) {
          var params = [],
              paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
          var foundHelper = this.nameLookup('helpers', name, 'helper'),
              callContext = this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : (container.nullContext || {})');
          return {
            params: params,
            paramsInit: paramsInit,
            name: foundHelper,
            callParams: [callContext].concat(params)
          };
        },
        setupParams: function setupParams(helper, paramSize, params) {
          var options = {},
              contexts = [],
              types = [],
              ids = [],
              objectArgs = !params,
              param = undefined;

          if (objectArgs) {
            params = [];
          }

          options.name = this.quotedString(helper);
          options.hash = this.popStack();

          if (this.trackIds) {
            options.hashIds = this.popStack();
          }

          if (this.stringParams) {
            options.hashTypes = this.popStack();
            options.hashContexts = this.popStack();
          }

          var inverse = this.popStack(),
              program = this.popStack(); // Avoid setting fn and inverse if neither are set. This allows
          // helpers to do a check for `if (options.fn)`

          if (program || inverse) {
            options.fn = program || 'container.noop';
            options.inverse = inverse || 'container.noop';
          } // The parameters go on to the stack in order (making sure that they are evaluated in order)
          // so we need to pop them off the stack in reverse order


          var i = paramSize;

          while (i--) {
            param = this.popStack();
            params[i] = param;

            if (this.trackIds) {
              ids[i] = this.popStack();
            }

            if (this.stringParams) {
              types[i] = this.popStack();
              contexts[i] = this.popStack();
            }
          }

          if (objectArgs) {
            options.args = this.source.generateArray(params);
          }

          if (this.trackIds) {
            options.ids = this.source.generateArray(ids);
          }

          if (this.stringParams) {
            options.types = this.source.generateArray(types);
            options.contexts = this.source.generateArray(contexts);
          }

          if (this.options.data) {
            options.data = 'data';
          }

          if (this.useBlockParams) {
            options.blockParams = 'blockParams';
          }

          return options;
        },
        setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
          var options = this.setupParams(helper, paramSize, params);
          options.loc = JSON.stringify(this.source.currentLocation);
          options = this.objectLiteral(options);

          if (useRegister) {
            this.useRegister('options');
            params.push('options');
            return ['options=', options];
          } else if (params) {
            params.push(options);
            return '';
          } else {
            return options;
          }
        }
      };

      (function () {
        var reservedWords = ('break else new var' + ' case finally return void' + ' catch for switch while' + ' continue function this with' + ' default if throw' + ' delete in try' + ' do instanceof typeof' + ' abstract enum int short' + ' boolean export interface static' + ' byte extends long super' + ' char final native synchronized' + ' class float package throws' + ' const goto private transient' + ' debugger implements protected volatile' + ' double import public let yield await' + ' null true false').split(' ');
        var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

        for (var i = 0, l = reservedWords.length; i < l; i++) {
          compilerWords[reservedWords[i]] = true;
        }
      })();
      /**
       * @deprecated May be removed in the next major version
       */


      JavaScriptCompiler.isValidJavaScriptVariableName = function (name) {
        return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
      };

      function strictLookup(requireTerminal, compiler, parts, type) {
        var stack = compiler.popStack(),
            i = 0,
            len = parts.length;

        if (requireTerminal) {
          len--;
        }

        for (; i < len; i++) {
          stack = compiler.nameLookup(stack, parts[i], type);
        }

        if (requireTerminal) {
          return [compiler.aliasable('container.strict'), '(', stack, ', ', compiler.quotedString(parts[i]), ', ', JSON.stringify(compiler.source.currentLocation), ' )'];
        } else {
          return stack;
        }
      }

      exports['default'] = JavaScriptCompiler;
      module.exports = exports['default'];
      /***/
    },
    /* 53 */

    /***/
    function (module, exports, __nested_webpack_require_210793__) {
      /* global define */
      'use strict';

      var _Object$keys = __nested_webpack_require_210793__(13)['default'];

      exports.__esModule = true;

      var _utils = __nested_webpack_require_210793__(5);

      var SourceNode = undefined;

      try {
        /* istanbul ignore next */
        if (false) { var SourceMap; }
      } catch (err) {}
      /* NOP */

      /* istanbul ignore if: tested but not covered in istanbul due to dist build  */


      if (!SourceNode) {
        SourceNode = function SourceNode(line, column, srcFile, chunks) {
          this.src = '';

          if (chunks) {
            this.add(chunks);
          }
        };
        /* istanbul ignore next */


        SourceNode.prototype = {
          add: function add(chunks) {
            if (_utils.isArray(chunks)) {
              chunks = chunks.join('');
            }

            this.src += chunks;
          },
          prepend: function prepend(chunks) {
            if (_utils.isArray(chunks)) {
              chunks = chunks.join('');
            }

            this.src = chunks + this.src;
          },
          toStringWithSourceMap: function toStringWithSourceMap() {
            return {
              code: this.toString()
            };
          },
          toString: function toString() {
            return this.src;
          }
        };
      }

      function castChunk(chunk, codeGen, loc) {
        if (_utils.isArray(chunk)) {
          var ret = [];

          for (var i = 0, len = chunk.length; i < len; i++) {
            ret.push(codeGen.wrap(chunk[i], loc));
          }

          return ret;
        } else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
          // Handle primitives that the SourceNode will throw up on
          return chunk + '';
        }

        return chunk;
      }

      function CodeGen(srcFile) {
        this.srcFile = srcFile;
        this.source = [];
      }

      CodeGen.prototype = {
        isEmpty: function isEmpty() {
          return !this.source.length;
        },
        prepend: function prepend(source, loc) {
          this.source.unshift(this.wrap(source, loc));
        },
        push: function push(source, loc) {
          this.source.push(this.wrap(source, loc));
        },
        merge: function merge() {
          var source = this.empty();
          this.each(function (line) {
            source.add(['  ', line, '\n']);
          });
          return source;
        },
        each: function each(iter) {
          for (var i = 0, len = this.source.length; i < len; i++) {
            iter(this.source[i]);
          }
        },
        empty: function empty() {
          var loc = this.currentLocation || {
            start: {}
          };
          return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
        },
        wrap: function wrap(chunk) {
          var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || {
            start: {}
          } : arguments[1];

          if (chunk instanceof SourceNode) {
            return chunk;
          }

          chunk = castChunk(chunk, this, loc);
          return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
        },
        functionCall: function functionCall(fn, type, params) {
          params = this.generateList(params);
          return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
        },
        quotedString: function quotedString(str) {
          return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, "\\u2028") // Per Ecma-262 7.3 + 7.8.4
          .replace(/\u2029/g, "\\u2029") + '"';
        },
        objectLiteral: function objectLiteral(obj) {
          // istanbul ignore next
          var _this = this;

          var pairs = [];

          _Object$keys(obj).forEach(function (key) {
            var value = castChunk(obj[key], _this);

            if (value !== 'undefined') {
              pairs.push([_this.quotedString(key), ':', value]);
            }
          });

          var ret = this.generateList(pairs);
          ret.prepend('{');
          ret.add('}');
          return ret;
        },
        generateList: function generateList(entries) {
          var ret = this.empty();

          for (var i = 0, len = entries.length; i < len; i++) {
            if (i) {
              ret.add(',');
            }

            ret.add(castChunk(entries[i], this));
          }

          return ret;
        },
        generateArray: function generateArray(entries) {
          var ret = this.generateList(entries);
          ret.prepend('[');
          ret.add(']');
          return ret;
        }
      };
      exports['default'] = CodeGen;
      module.exports = exports['default'];
      /***/
    }
    /******/
    ])
  );
});

;

/***/ }),

/***/ "./src/views/header.js":
/*!*****************************!*\
  !*** ./src/views/header.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
function Header() {
  return ' <h1>{{title}}</h1>';
}

/***/ }),

/***/ "./src/views/main.js":
/*!***************************!*\
  !*** ./src/views/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _fortawesome_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome */ "./node_modules/@fortawesome/fontawesome/index.es.js");
/** @format */

function Main() {
  return "\n  {{> appTitle}}\n\n{{#each usersContacts}}\n\t<div class=\"contact card\">\n\t\t<div>\n\t\t\t<i class=\"far fa-user-circle gravatar\"></i>\n\t\t</div>\n\t\t<div class=\"info\">\n\t\t\t<h2>Name: {{name}}</h2>\n\t\t\t<button class=\"detailsBtn\" onclick=\"toggleDetails({{id}})\">Details</button>\n\t\t\t<div class=\"details\" id=\"{{id}}\">\n\t\t\t\t<p>Phone number: {{phoneNumber}}</p>\n\t\t\t\t<p>Email: {{email}}</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n{{/each}}";
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\r\n  font-family: \"Raleway\", arial, sans-serif;\r\n  color: rgba(0, 0, 0, 0.5);\r\n  background-size: cover;\r\n  background: linear-gradient(45deg, #3b3b7a, #91617e);\r\n}\r\n\r\n#contacts {\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n\r\nbutton {\r\n  color: rgba(0, 0, 0, 0.45);\r\n  outline: none;\r\n  border: none;\r\n  box-shadow: 3px 5px 10px 2px rgba(0, 0, 0, 0.2), inset 0 -5px 4px -1px rgba(0, 0, 0, 0.1), 0 -10px 15px -1px rgba(255, 255, 255, 0.6), inset 0 3px 4px -1px rgba(255, 255, 255, 0.2), inset 0 0 5px 1px rgba(255, 255, 253, 0.8), inset 0 20px 30px 0 rgba(255, 255, 255, 0.2);\r\n  border-radius: 8px;\r\n  margin: 0 2px;\r\n  text-align: center;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  padding: 16px;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton:hover {\r\n  cursor: pointer;\r\n  background: #F0F0F0;\r\n}\r\n\r\n.details {\r\n  text-align: left;\r\n  padding: 1.3em 0 0 1.3em;\r\n}\r\n\r\n.card {\r\n  margin: 2rem;\r\n  width: 21%;\r\n  display: inline-block;\r\n  text-align: center;\r\n  background: linear-gradient(10deg, #ccc, #fff 50%);\r\n  box-shadow: 0 1.25rem 2.625rem 0.375rem rgba(0, 0, 0, 0.18);\r\n  border-radius: 0.5rem;\r\n  padding: 29px 0px;\r\n  vertical-align: top;\r\n}\r\n\r\n.gravatar {\r\n  font-size: 6rem;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  color: white;\r\n  font-weight: 200;\r\n  text-transform: uppercase;\r\n  margin: 3rem;\r\n}\r\n\r\n\r\ndiv.details{\r\n\tdisplay: none;\r\n}\r\n\r\ndiv.show{\r\n  display: block;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,yCAAyC;EACzC,yBAAyB;EACzB,sBAAsB;EACtB,oDAAoD;AACtD;;AAEA;EACE,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B,aAAa;EACb,YAAY;EACZ,8QAA8Q;EAC9Q,kBAAkB;EAClB,aAAa;EACb,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,qBAAqB;EACrB,kBAAkB;EAClB,kDAAkD;EAClD,2DAA2D;EAC3D,qBAAqB;EACrB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,yBAAyB;EACzB,YAAY;AACd;;;AAGA;CACC,aAAa;AACd;;AAEA;EACE,cAAc;AAChB","sourcesContent":["html {\r\n  font-family: \"Raleway\", arial, sans-serif;\r\n  color: rgba(0, 0, 0, 0.5);\r\n  background-size: cover;\r\n  background: linear-gradient(45deg, #3b3b7a, #91617e);\r\n}\r\n\r\n#contacts {\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n\r\nbutton {\r\n  color: rgba(0, 0, 0, 0.45);\r\n  outline: none;\r\n  border: none;\r\n  box-shadow: 3px 5px 10px 2px rgba(0, 0, 0, 0.2), inset 0 -5px 4px -1px rgba(0, 0, 0, 0.1), 0 -10px 15px -1px rgba(255, 255, 255, 0.6), inset 0 3px 4px -1px rgba(255, 255, 255, 0.2), inset 0 0 5px 1px rgba(255, 255, 253, 0.8), inset 0 20px 30px 0 rgba(255, 255, 255, 0.2);\r\n  border-radius: 8px;\r\n  margin: 0 2px;\r\n  text-align: center;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  padding: 16px;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton:hover {\r\n  cursor: pointer;\r\n  background: #F0F0F0;\r\n}\r\n\r\n.details {\r\n  text-align: left;\r\n  padding: 1.3em 0 0 1.3em;\r\n}\r\n\r\n.card {\r\n  margin: 2rem;\r\n  width: 21%;\r\n  display: inline-block;\r\n  text-align: center;\r\n  background: linear-gradient(10deg, #ccc, #fff 50%);\r\n  box-shadow: 0 1.25rem 2.625rem 0.375rem rgba(0, 0, 0, 0.18);\r\n  border-radius: 0.5rem;\r\n  padding: 29px 0px;\r\n  vertical-align: top;\r\n}\r\n\r\n.gravatar {\r\n  font-size: 6rem;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  color: white;\r\n  font-weight: 200;\r\n  text-transform: uppercase;\r\n  margin: 3rem;\r\n}\r\n\r\n\r\ndiv.details{\r\n\tdisplay: none;\r\n}\r\n\r\ndiv.show{\r\n  display: block;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_Template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Template */ "./src/js/Template.js");
/* harmony import */ var _data_contacts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/contacts */ "./src/data/contacts.js");
/* harmony import */ var _views_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/header.js */ "./src/views/header.js");
/* harmony import */ var _views_main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/main.js */ "./src/views/main.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _fortawesome_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome */ "./node_modules/@fortawesome/fontawesome/index.es.js");






var partials = new _js_Template__WEBPACK_IMPORTED_MODULE_0__.Partial(_views_header_js__WEBPACK_IMPORTED_MODULE_2__["default"], 'appTitle', {
  title: 'My Contacts'
});
var mainTemp = new _js_Template__WEBPACK_IMPORTED_MODULE_0__.Template(_views_main_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
  usersContacts: _data_contacts__WEBPACK_IMPORTED_MODULE_1__.contacts
}, '#contacts', partials);
mainTemp.render();

function toggleDetails(id) {
  document.getElementById(id).classList.toggle('show');
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMsWUFBWTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQjs7QUFFckI7QUFDQSxHQUFHLElBQUk7QUFDUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9COztBQUVBOzs7QUFHQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQSxLQUFLLElBQUksdUJBQXVCOztBQUVoQzs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUssSUFBSTtBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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azovL0xhYi1Tb2x1dGlvbi8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUvaW5kZXguZXMuanMiLCJ3ZWJwYWNrOi8vTGFiLVNvbHV0aW9uLy4vc3JjL2RhdGEvY29udGFjdHMuanMiLCJ3ZWJwYWNrOi8vTGFiLVNvbHV0aW9uLy4vc3JjL2pzL1RlbXBsYXRlLmpzIiwid2VicGFjazovL0xhYi1Tb2x1dGlvbi8uL3NyYy9qcy9oYW5kbGViYXJzLmpzIiwid2VicGFjazovL0xhYi1Tb2x1dGlvbi8uL3NyYy92aWV3cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vTGFiLVNvbHV0aW9uLy4vc3JjL3ZpZXdzL21haW4uanMiLCJ3ZWJwYWNrOi8vTGFiLVNvbHV0aW9uLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9MYWItU29sdXRpb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0xhYi1Tb2x1dGlvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL0xhYi1Tb2x1dGlvbi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9MYWItU29sdXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vTGFiLVNvbHV0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9MYWItU29sdXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vTGFiLVNvbHV0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL0xhYi1Tb2x1dGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL0xhYi1Tb2x1dGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL0xhYi1Tb2x1dGlvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9MYWItU29sdXRpb24vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vTGFiLVNvbHV0aW9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9MYWItU29sdXRpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9MYWItU29sdXRpb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9MYWItU29sdXRpb24vd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9MYWItU29sdXRpb24vLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogRm9udCBBd2Vzb21lIEZyZWUgNS4wLjEzIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tXG4gKiBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoSWNvbnM6IENDIEJZIDQuMCwgRm9udHM6IFNJTCBPRkwgMS4xLCBDb2RlOiBNSVQgTGljZW5zZSlcbiAqL1xudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5cbnZhciBfV0lORE9XID0ge307XG52YXIgX0RPQ1VNRU5UID0ge307XG52YXIgX01VVEFUSU9OX09CU0VSVkVSJDEgPSBudWxsO1xudmFyIF9QRVJGT1JNQU5DRSA9IHsgbWFyazogbm9vcCwgbWVhc3VyZTogbm9vcCB9O1xuXG50cnkge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIF9XSU5ET1cgPSB3aW5kb3c7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSBfRE9DVU1FTlQgPSBkb2N1bWVudDtcbiAgaWYgKHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJykgX01VVEFUSU9OX09CU0VSVkVSJDEgPSBNdXRhdGlvbk9ic2VydmVyO1xuICBpZiAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJykgX1BFUkZPUk1BTkNFID0gcGVyZm9ybWFuY2U7XG59IGNhdGNoIChlKSB7fVxuXG52YXIgX3JlZiA9IF9XSU5ET1cubmF2aWdhdG9yIHx8IHt9O1xudmFyIF9yZWYkdXNlckFnZW50ID0gX3JlZi51c2VyQWdlbnQ7XG52YXIgdXNlckFnZW50ID0gX3JlZiR1c2VyQWdlbnQgPT09IHVuZGVmaW5lZCA/ICcnIDogX3JlZiR1c2VyQWdlbnQ7XG5cbnZhciBXSU5ET1cgPSBfV0lORE9XO1xudmFyIERPQ1VNRU5UID0gX0RPQ1VNRU5UO1xudmFyIE1VVEFUSU9OX09CU0VSVkVSID0gX01VVEFUSU9OX09CU0VSVkVSJDE7XG52YXIgUEVSRk9STUFOQ0UgPSBfUEVSRk9STUFOQ0U7XG52YXIgSVNfQlJPV1NFUiA9ICEhV0lORE9XLmRvY3VtZW50O1xudmFyIElTX0RPTSA9ICEhRE9DVU1FTlQuZG9jdW1lbnRFbGVtZW50ICYmICEhRE9DVU1FTlQuaGVhZCAmJiB0eXBlb2YgRE9DVU1FTlQuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgRE9DVU1FTlQuY3JlYXRlRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJztcbnZhciBJU19JRSA9IH51c2VyQWdlbnQuaW5kZXhPZignTVNJRScpIHx8IH51c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudC8nKTtcblxudmFyIE5BTUVTUEFDRV9JREVOVElGSUVSID0gJ19fX0ZPTlRfQVdFU09NRV9fXyc7XG52YXIgVU5JVFNfSU5fR1JJRCA9IDE2O1xudmFyIERFRkFVTFRfRkFNSUxZX1BSRUZJWCA9ICdmYSc7XG52YXIgREVGQVVMVF9SRVBMQUNFTUVOVF9DTEFTUyA9ICdzdmctaW5saW5lLS1mYSc7XG52YXIgREFUQV9GQV9JMlNWRyA9ICdkYXRhLWZhLWkyc3ZnJztcbnZhciBEQVRBX0ZBX1BTRVVET19FTEVNRU5UID0gJ2RhdGEtZmEtcHNldWRvLWVsZW1lbnQnO1xudmFyIEhUTUxfQ0xBU1NfSTJTVkdfQkFTRV9DTEFTUyA9ICdmb250YXdlc29tZS1pMnN2Zyc7XG5cbnZhciBQUk9EVUNUSU9OID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59KCk7XG5cbnZhciBvbmVUb1RlbiA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF07XG52YXIgb25lVG9Ud2VudHkgPSBvbmVUb1Rlbi5jb25jYXQoWzExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwXSk7XG5cbnZhciBBVFRSSUJVVEVTX1dBVENIRURfRk9SX01VVEFUSU9OID0gWydjbGFzcycsICdkYXRhLXByZWZpeCcsICdkYXRhLWljb24nLCAnZGF0YS1mYS10cmFuc2Zvcm0nLCAnZGF0YS1mYS1tYXNrJ107XG5cbnZhciBSRVNFUlZFRF9DTEFTU0VTID0gWyd4cycsICdzbScsICdsZycsICdmdycsICd1bCcsICdsaScsICdib3JkZXInLCAncHVsbC1sZWZ0JywgJ3B1bGwtcmlnaHQnLCAnc3BpbicsICdwdWxzZScsICdyb3RhdGUtOTAnLCAncm90YXRlLTE4MCcsICdyb3RhdGUtMjcwJywgJ2ZsaXAtaG9yaXpvbnRhbCcsICdmbGlwLXZlcnRpY2FsJywgJ3N0YWNrJywgJ3N0YWNrLTF4JywgJ3N0YWNrLTJ4JywgJ2ludmVyc2UnLCAnbGF5ZXJzJywgJ2xheWVycy10ZXh0JywgJ2xheWVycy1jb3VudGVyJ10uY29uY2F0KG9uZVRvVGVuLm1hcChmdW5jdGlvbiAobikge1xuICByZXR1cm4gbiArICd4Jztcbn0pKS5jb25jYXQob25lVG9Ud2VudHkubWFwKGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiAndy0nICsgbjtcbn0pKTtcblxudmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbnZhciBjcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxuXG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cblxudmFyIHRvQ29uc3VtYWJsZUFycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGFycik7XG4gIH1cbn07XG5cbnZhciBpbml0aWFsID0gV0lORE9XLkZvbnRBd2Vzb21lQ29uZmlnIHx8IHt9O1xudmFyIGluaXRpYWxLZXlzID0gT2JqZWN0LmtleXMoaW5pdGlhbCk7XG5cbnZhciBfZGVmYXVsdCA9IF9leHRlbmRzKHtcbiAgZmFtaWx5UHJlZml4OiBERUZBVUxUX0ZBTUlMWV9QUkVGSVgsXG4gIHJlcGxhY2VtZW50Q2xhc3M6IERFRkFVTFRfUkVQTEFDRU1FTlRfQ0xBU1MsXG4gIGF1dG9SZXBsYWNlU3ZnOiB0cnVlLFxuICBhdXRvQWRkQ3NzOiB0cnVlLFxuICBhdXRvQTExeTogdHJ1ZSxcbiAgc2VhcmNoUHNldWRvRWxlbWVudHM6IGZhbHNlLFxuICBvYnNlcnZlTXV0YXRpb25zOiB0cnVlLFxuICBrZWVwT3JpZ2luYWxTb3VyY2U6IHRydWUsXG4gIG1lYXN1cmVQZXJmb3JtYW5jZTogZmFsc2UsXG4gIHNob3dNaXNzaW5nSWNvbnM6IHRydWVcbn0sIGluaXRpYWwpO1xuXG5pZiAoIV9kZWZhdWx0LmF1dG9SZXBsYWNlU3ZnKSBfZGVmYXVsdC5vYnNlcnZlTXV0YXRpb25zID0gZmFsc2U7XG5cbnZhciBjb25maWckMSA9IF9leHRlbmRzKHt9LCBfZGVmYXVsdCk7XG5cbldJTkRPVy5Gb250QXdlc29tZUNvbmZpZyA9IGNvbmZpZyQxO1xuXG5mdW5jdGlvbiB1cGRhdGUobmV3Q29uZmlnKSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgX3BhcmFtcyRhc05ld0RlZmF1bHQgPSBwYXJhbXMuYXNOZXdEZWZhdWx0LFxuICAgICAgYXNOZXdEZWZhdWx0ID0gX3BhcmFtcyRhc05ld0RlZmF1bHQgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3BhcmFtcyRhc05ld0RlZmF1bHQ7XG5cbiAgdmFyIHZhbGlkS2V5cyA9IE9iamVjdC5rZXlzKGNvbmZpZyQxKTtcbiAgdmFyIG9rID0gYXNOZXdEZWZhdWx0ID8gZnVuY3Rpb24gKGspIHtcbiAgICByZXR1cm4gfnZhbGlkS2V5cy5pbmRleE9mKGspICYmICF+aW5pdGlhbEtleXMuaW5kZXhPZihrKTtcbiAgfSA6IGZ1bmN0aW9uIChrKSB7XG4gICAgcmV0dXJuIH52YWxpZEtleXMuaW5kZXhPZihrKTtcbiAgfTtcblxuICBPYmplY3Qua2V5cyhuZXdDb25maWcpLmZvckVhY2goZnVuY3Rpb24gKGNvbmZpZ0tleSkge1xuICAgIGlmIChvayhjb25maWdLZXkpKSBjb25maWckMVtjb25maWdLZXldID0gbmV3Q29uZmlnW2NvbmZpZ0tleV07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhdXRvKHZhbHVlKSB7XG4gIHVwZGF0ZSh7XG4gICAgYXV0b1JlcGxhY2VTdmc6IHZhbHVlLFxuICAgIG9ic2VydmVNdXRhdGlvbnM6IHZhbHVlXG4gIH0pO1xufVxuXG52YXIgdyA9IFdJTkRPVyB8fCB7fTtcblxuaWYgKCF3W05BTUVTUEFDRV9JREVOVElGSUVSXSkgd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0gPSB7fTtcbmlmICghd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uc3R5bGVzKSB3W05BTUVTUEFDRV9JREVOVElGSUVSXS5zdHlsZXMgPSB7fTtcbmlmICghd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uaG9va3MpIHdbTkFNRVNQQUNFX0lERU5USUZJRVJdLmhvb2tzID0ge307XG5pZiAoIXdbTkFNRVNQQUNFX0lERU5USUZJRVJdLnNoaW1zKSB3W05BTUVTUEFDRV9JREVOVElGSUVSXS5zaGltcyA9IFtdO1xuXG52YXIgbmFtZXNwYWNlID0gd1tOQU1FU1BBQ0VfSURFTlRJRklFUl07XG5cbnZhciBmdW5jdGlvbnMgPSBbXTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICBET0NVTUVOVC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbGlzdGVuZXIpO1xuICBsb2FkZWQgPSAxO1xuICBmdW5jdGlvbnMubWFwKGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiBmbigpO1xuICB9KTtcbn07XG5cbnZhciBsb2FkZWQgPSBmYWxzZTtcblxuaWYgKElTX0RPTSkge1xuICBsb2FkZWQgPSAoRE9DVU1FTlQuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsID8gL15sb2FkZWR8XmMvIDogL15sb2FkZWR8Xml8XmMvKS50ZXN0KERPQ1VNRU5ULnJlYWR5U3RhdGUpO1xuXG4gIGlmICghbG9hZGVkKSBET0NVTUVOVC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbGlzdGVuZXIpO1xufVxuXG52YXIgZG9tcmVhZHkgPSBmdW5jdGlvbiAoZm4pIHtcbiAgaWYgKCFJU19ET00pIHJldHVybjtcbiAgbG9hZGVkID8gc2V0VGltZW91dChmbiwgMCkgOiBmdW5jdGlvbnMucHVzaChmbik7XG59O1xuXG52YXIgZCA9IFVOSVRTX0lOX0dSSUQ7XG5cbnZhciBtZWFuaW5nbGVzc1RyYW5zZm9ybSA9IHtcbiAgc2l6ZTogMTYsXG4gIHg6IDAsXG4gIHk6IDAsXG4gIHJvdGF0ZTogMCxcbiAgZmxpcFg6IGZhbHNlLFxuICBmbGlwWTogZmFsc2Vcbn07XG5cbmZ1bmN0aW9uIGlzUmVzZXJ2ZWQobmFtZSkge1xuICByZXR1cm4gflJFU0VSVkVEX0NMQVNTRVMuaW5kZXhPZihuYW1lKTtcbn1cblxuZnVuY3Rpb24gYnVua2VyKGZuKSB7XG4gIHRyeSB7XG4gICAgZm4oKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmICghUFJPRFVDVElPTikge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0Q3NzKGNzcykge1xuICBpZiAoIWNzcyB8fCAhSVNfRE9NKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHN0eWxlID0gRE9DVU1FTlQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gIHN0eWxlLmlubmVySFRNTCA9IGNzcztcblxuICB2YXIgaGVhZENoaWxkcmVuID0gRE9DVU1FTlQuaGVhZC5jaGlsZE5vZGVzO1xuICB2YXIgYmVmb3JlQ2hpbGQgPSBudWxsO1xuXG4gIGZvciAodmFyIGkgPSBoZWFkQ2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcbiAgICB2YXIgY2hpbGQgPSBoZWFkQ2hpbGRyZW5baV07XG4gICAgdmFyIHRhZ05hbWUgPSAoY2hpbGQudGFnTmFtZSB8fCAnJykudG9VcHBlckNhc2UoKTtcbiAgICBpZiAoWydTVFlMRScsICdMSU5LJ10uaW5kZXhPZih0YWdOYW1lKSA+IC0xKSB7XG4gICAgICBiZWZvcmVDaGlsZCA9IGNoaWxkO1xuICAgIH1cbiAgfVxuXG4gIERPQ1VNRU5ULmhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBiZWZvcmVDaGlsZCk7XG5cbiAgcmV0dXJuIGNzcztcbn1cblxudmFyIF91bmlxdWVJZCA9IDA7XG5cbmZ1bmN0aW9uIG5leHRVbmlxdWVJZCgpIHtcbiAgX3VuaXF1ZUlkKys7XG5cbiAgcmV0dXJuIF91bmlxdWVJZDtcbn1cblxuZnVuY3Rpb24gdG9BcnJheShvYmopIHtcbiAgdmFyIGFycmF5ID0gW107XG5cbiAgZm9yICh2YXIgaSA9IChvYmogfHwgW10pLmxlbmd0aCA+Pj4gMDsgaS0tOykge1xuICAgIGFycmF5W2ldID0gb2JqW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBjbGFzc0FycmF5KG5vZGUpIHtcbiAgaWYgKG5vZGUuY2xhc3NMaXN0KSB7XG4gICAgcmV0dXJuIHRvQXJyYXkobm9kZS5jbGFzc0xpc3QpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAobm9kZS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpLnNwbGl0KCcgJykuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRJY29uTmFtZShmYW1pbHlQcmVmaXgsIGNscykge1xuICB2YXIgcGFydHMgPSBjbHMuc3BsaXQoJy0nKTtcbiAgdmFyIHByZWZpeCA9IHBhcnRzWzBdO1xuICB2YXIgaWNvbk5hbWUgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCctJyk7XG5cbiAgaWYgKHByZWZpeCA9PT0gZmFtaWx5UHJlZml4ICYmIGljb25OYW1lICE9PSAnJyAmJiAhaXNSZXNlcnZlZChpY29uTmFtZSkpIHtcbiAgICByZXR1cm4gaWNvbk5hbWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gaHRtbEVzY2FwZShzdHIpIHtcbiAgcmV0dXJuICgnJyArIHN0cikucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JykucmVwbGFjZSgvJy9nLCAnJiMzOTsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xufVxuXG5mdW5jdGlvbiBqb2luQXR0cmlidXRlcyhhdHRyaWJ1dGVzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzIHx8IHt9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgYXR0cmlidXRlTmFtZSkge1xuICAgIHJldHVybiBhY2MgKyAoYXR0cmlidXRlTmFtZSArICc9XCInICsgaHRtbEVzY2FwZShhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKSArICdcIiAnKTtcbiAgfSwgJycpLnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gam9pblN0eWxlcyhzdHlsZXMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlcyB8fCB7fSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHN0eWxlTmFtZSkge1xuICAgIHJldHVybiBhY2MgKyAoc3R5bGVOYW1lICsgJzogJyArIHN0eWxlc1tzdHlsZU5hbWVdICsgJzsnKTtcbiAgfSwgJycpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Jc01lYW5pbmdmdWwodHJhbnNmb3JtKSB7XG4gIHJldHVybiB0cmFuc2Zvcm0uc2l6ZSAhPT0gbWVhbmluZ2xlc3NUcmFuc2Zvcm0uc2l6ZSB8fCB0cmFuc2Zvcm0ueCAhPT0gbWVhbmluZ2xlc3NUcmFuc2Zvcm0ueCB8fCB0cmFuc2Zvcm0ueSAhPT0gbWVhbmluZ2xlc3NUcmFuc2Zvcm0ueSB8fCB0cmFuc2Zvcm0ucm90YXRlICE9PSBtZWFuaW5nbGVzc1RyYW5zZm9ybS5yb3RhdGUgfHwgdHJhbnNmb3JtLmZsaXBYIHx8IHRyYW5zZm9ybS5mbGlwWTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtRm9yU3ZnKF9yZWYpIHtcbiAgdmFyIHRyYW5zZm9ybSA9IF9yZWYudHJhbnNmb3JtLFxuICAgICAgY29udGFpbmVyV2lkdGggPSBfcmVmLmNvbnRhaW5lcldpZHRoLFxuICAgICAgaWNvbldpZHRoID0gX3JlZi5pY29uV2lkdGg7XG5cbiAgdmFyIG91dGVyID0ge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgnICsgY29udGFpbmVyV2lkdGggLyAyICsgJyAyNTYpJ1xuICB9O1xuICB2YXIgaW5uZXJUcmFuc2xhdGUgPSAndHJhbnNsYXRlKCcgKyB0cmFuc2Zvcm0ueCAqIDMyICsgJywgJyArIHRyYW5zZm9ybS55ICogMzIgKyAnKSAnO1xuICB2YXIgaW5uZXJTY2FsZSA9ICdzY2FsZSgnICsgdHJhbnNmb3JtLnNpemUgLyAxNiAqICh0cmFuc2Zvcm0uZmxpcFggPyAtMSA6IDEpICsgJywgJyArIHRyYW5zZm9ybS5zaXplIC8gMTYgKiAodHJhbnNmb3JtLmZsaXBZID8gLTEgOiAxKSArICcpICc7XG4gIHZhciBpbm5lclJvdGF0ZSA9ICdyb3RhdGUoJyArIHRyYW5zZm9ybS5yb3RhdGUgKyAnIDAgMCknO1xuICB2YXIgaW5uZXIgPSB7XG4gICAgdHJhbnNmb3JtOiBpbm5lclRyYW5zbGF0ZSArICcgJyArIGlubmVyU2NhbGUgKyAnICcgKyBpbm5lclJvdGF0ZVxuICB9O1xuICB2YXIgcGF0aCA9IHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoJyArIGljb25XaWR0aCAvIDIgKiAtMSArICcgLTI1NiknXG4gIH07XG4gIHJldHVybiB7XG4gICAgb3V0ZXI6IG91dGVyLFxuICAgIGlubmVyOiBpbm5lcixcbiAgICBwYXRoOiBwYXRoXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUZvckNzcyhfcmVmMikge1xuICB2YXIgdHJhbnNmb3JtID0gX3JlZjIudHJhbnNmb3JtLFxuICAgICAgX3JlZjIkd2lkdGggPSBfcmVmMi53aWR0aCxcbiAgICAgIHdpZHRoID0gX3JlZjIkd2lkdGggPT09IHVuZGVmaW5lZCA/IFVOSVRTX0lOX0dSSUQgOiBfcmVmMiR3aWR0aCxcbiAgICAgIF9yZWYyJGhlaWdodCA9IF9yZWYyLmhlaWdodCxcbiAgICAgIGhlaWdodCA9IF9yZWYyJGhlaWdodCA9PT0gdW5kZWZpbmVkID8gVU5JVFNfSU5fR1JJRCA6IF9yZWYyJGhlaWdodCxcbiAgICAgIF9yZWYyJHN0YXJ0Q2VudGVyZWQgPSBfcmVmMi5zdGFydENlbnRlcmVkLFxuICAgICAgc3RhcnRDZW50ZXJlZCA9IF9yZWYyJHN0YXJ0Q2VudGVyZWQgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZjIkc3RhcnRDZW50ZXJlZDtcblxuICB2YXIgdmFsID0gJyc7XG5cbiAgaWYgKHN0YXJ0Q2VudGVyZWQgJiYgSVNfSUUpIHtcbiAgICB2YWwgKz0gJ3RyYW5zbGF0ZSgnICsgKHRyYW5zZm9ybS54IC8gZCAtIHdpZHRoIC8gMikgKyAnZW0sICcgKyAodHJhbnNmb3JtLnkgLyBkIC0gaGVpZ2h0IC8gMikgKyAnZW0pICc7XG4gIH0gZWxzZSBpZiAoc3RhcnRDZW50ZXJlZCkge1xuICAgIHZhbCArPSAndHJhbnNsYXRlKGNhbGMoLTUwJSArICcgKyB0cmFuc2Zvcm0ueCAvIGQgKyAnZW0pLCBjYWxjKC01MCUgKyAnICsgdHJhbnNmb3JtLnkgLyBkICsgJ2VtKSkgJztcbiAgfSBlbHNlIHtcbiAgICB2YWwgKz0gJ3RyYW5zbGF0ZSgnICsgdHJhbnNmb3JtLnggLyBkICsgJ2VtLCAnICsgdHJhbnNmb3JtLnkgLyBkICsgJ2VtKSAnO1xuICB9XG5cbiAgdmFsICs9ICdzY2FsZSgnICsgdHJhbnNmb3JtLnNpemUgLyBkICogKHRyYW5zZm9ybS5mbGlwWCA/IC0xIDogMSkgKyAnLCAnICsgdHJhbnNmb3JtLnNpemUgLyBkICogKHRyYW5zZm9ybS5mbGlwWSA/IC0xIDogMSkgKyAnKSAnO1xuICB2YWwgKz0gJ3JvdGF0ZSgnICsgdHJhbnNmb3JtLnJvdGF0ZSArICdkZWcpICc7XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxudmFyIEFMTF9TUEFDRSA9IHtcbiAgeDogMCxcbiAgeTogMCxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnMTAwJSdcbn07XG5cbnZhciBtYWtlSWNvbk1hc2tpbmcgPSBmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgIG1haW4gPSBfcmVmLm1haW4sXG4gICAgICBtYXNrID0gX3JlZi5tYXNrLFxuICAgICAgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm07XG4gIHZhciBtYWluV2lkdGggPSBtYWluLndpZHRoLFxuICAgICAgbWFpblBhdGggPSBtYWluLmljb247XG4gIHZhciBtYXNrV2lkdGggPSBtYXNrLndpZHRoLFxuICAgICAgbWFza1BhdGggPSBtYXNrLmljb247XG5cblxuICB2YXIgdHJhbnMgPSB0cmFuc2Zvcm1Gb3JTdmcoeyB0cmFuc2Zvcm06IHRyYW5zZm9ybSwgY29udGFpbmVyV2lkdGg6IG1hc2tXaWR0aCwgaWNvbldpZHRoOiBtYWluV2lkdGggfSk7XG5cbiAgdmFyIG1hc2tSZWN0ID0ge1xuICAgIHRhZzogJ3JlY3QnLFxuICAgIGF0dHJpYnV0ZXM6IF9leHRlbmRzKHt9LCBBTExfU1BBQ0UsIHtcbiAgICAgIGZpbGw6ICd3aGl0ZSdcbiAgICB9KVxuICB9O1xuICB2YXIgbWFza0lubmVyR3JvdXAgPSB7XG4gICAgdGFnOiAnZycsXG4gICAgYXR0cmlidXRlczogX2V4dGVuZHMoe30sIHRyYW5zLmlubmVyKSxcbiAgICBjaGlsZHJlbjogW3sgdGFnOiAncGF0aCcsIGF0dHJpYnV0ZXM6IF9leHRlbmRzKHt9LCBtYWluUGF0aC5hdHRyaWJ1dGVzLCB0cmFucy5wYXRoLCB7IGZpbGw6ICdibGFjaycgfSkgfV1cbiAgfTtcbiAgdmFyIG1hc2tPdXRlckdyb3VwID0ge1xuICAgIHRhZzogJ2cnLFxuICAgIGF0dHJpYnV0ZXM6IF9leHRlbmRzKHt9LCB0cmFucy5vdXRlciksXG4gICAgY2hpbGRyZW46IFttYXNrSW5uZXJHcm91cF1cbiAgfTtcbiAgdmFyIG1hc2tJZCA9ICdtYXNrLScgKyBuZXh0VW5pcXVlSWQoKTtcbiAgdmFyIGNsaXBJZCA9ICdjbGlwLScgKyBuZXh0VW5pcXVlSWQoKTtcbiAgdmFyIG1hc2tUYWcgPSB7XG4gICAgdGFnOiAnbWFzaycsXG4gICAgYXR0cmlidXRlczogX2V4dGVuZHMoe30sIEFMTF9TUEFDRSwge1xuICAgICAgaWQ6IG1hc2tJZCxcbiAgICAgIG1hc2tVbml0czogJ3VzZXJTcGFjZU9uVXNlJyxcbiAgICAgIG1hc2tDb250ZW50VW5pdHM6ICd1c2VyU3BhY2VPblVzZSdcbiAgICB9KSxcbiAgICBjaGlsZHJlbjogW21hc2tSZWN0LCBtYXNrT3V0ZXJHcm91cF1cbiAgfTtcbiAgdmFyIGRlZnMgPSB7XG4gICAgdGFnOiAnZGVmcycsXG4gICAgY2hpbGRyZW46IFt7IHRhZzogJ2NsaXBQYXRoJywgYXR0cmlidXRlczogeyBpZDogY2xpcElkIH0sIGNoaWxkcmVuOiBbbWFza1BhdGhdIH0sIG1hc2tUYWddXG4gIH07XG5cbiAgY2hpbGRyZW4ucHVzaChkZWZzLCB7IHRhZzogJ3JlY3QnLCBhdHRyaWJ1dGVzOiBfZXh0ZW5kcyh7IGZpbGw6ICdjdXJyZW50Q29sb3InLCAnY2xpcC1wYXRoJzogJ3VybCgjJyArIGNsaXBJZCArICcpJywgbWFzazogJ3VybCgjJyArIG1hc2tJZCArICcpJyB9LCBBTExfU1BBQ0UpIH0pO1xuXG4gIHJldHVybiB7XG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXNcbiAgfTtcbn07XG5cbnZhciBtYWtlSWNvblN0YW5kYXJkID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG4gICAgICBtYWluID0gX3JlZi5tYWluLFxuICAgICAgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm0sXG4gICAgICBzdHlsZXMgPSBfcmVmLnN0eWxlcztcblxuICB2YXIgc3R5bGVTdHJpbmcgPSBqb2luU3R5bGVzKHN0eWxlcyk7XG5cbiAgaWYgKHN0eWxlU3RyaW5nLmxlbmd0aCA+IDApIHtcbiAgICBhdHRyaWJ1dGVzWydzdHlsZSddID0gc3R5bGVTdHJpbmc7XG4gIH1cblxuICBpZiAodHJhbnNmb3JtSXNNZWFuaW5nZnVsKHRyYW5zZm9ybSkpIHtcbiAgICB2YXIgdHJhbnMgPSB0cmFuc2Zvcm1Gb3JTdmcoeyB0cmFuc2Zvcm06IHRyYW5zZm9ybSwgY29udGFpbmVyV2lkdGg6IG1haW4ud2lkdGgsIGljb25XaWR0aDogbWFpbi53aWR0aCB9KTtcbiAgICBjaGlsZHJlbi5wdXNoKHtcbiAgICAgIHRhZzogJ2cnLFxuICAgICAgYXR0cmlidXRlczogX2V4dGVuZHMoe30sIHRyYW5zLm91dGVyKSxcbiAgICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICB0YWc6ICdnJyxcbiAgICAgICAgYXR0cmlidXRlczogX2V4dGVuZHMoe30sIHRyYW5zLmlubmVyKSxcbiAgICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgICAgdGFnOiBtYWluLmljb24udGFnLFxuICAgICAgICAgIGNoaWxkcmVuOiBtYWluLmljb24uY2hpbGRyZW4sXG4gICAgICAgICAgYXR0cmlidXRlczogX2V4dGVuZHMoe30sIG1haW4uaWNvbi5hdHRyaWJ1dGVzLCB0cmFucy5wYXRoKVxuICAgICAgICB9XVxuICAgICAgfV1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjaGlsZHJlbi5wdXNoKG1haW4uaWNvbik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzXG4gIH07XG59O1xuXG52YXIgYXNJY29uID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIG1haW4gPSBfcmVmLm1haW4sXG4gICAgICBtYXNrID0gX3JlZi5tYXNrLFxuICAgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgIHN0eWxlcyA9IF9yZWYuc3R5bGVzLFxuICAgICAgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm07XG5cbiAgaWYgKHRyYW5zZm9ybUlzTWVhbmluZ2Z1bCh0cmFuc2Zvcm0pICYmIG1haW4uZm91bmQgJiYgIW1hc2suZm91bmQpIHtcbiAgICB2YXIgd2lkdGggPSBtYWluLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBtYWluLmhlaWdodDtcblxuICAgIHZhciBvZmZzZXQgPSB7XG4gICAgICB4OiB3aWR0aCAvIGhlaWdodCAvIDIsXG4gICAgICB5OiAwLjVcbiAgICB9O1xuICAgIGF0dHJpYnV0ZXNbJ3N0eWxlJ10gPSBqb2luU3R5bGVzKF9leHRlbmRzKHt9LCBzdHlsZXMsIHtcbiAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogb2Zmc2V0LnggKyB0cmFuc2Zvcm0ueCAvIDE2ICsgJ2VtICcgKyAob2Zmc2V0LnkgKyB0cmFuc2Zvcm0ueSAvIDE2KSArICdlbSdcbiAgICB9KSk7XG4gIH1cblxuICByZXR1cm4gW3tcbiAgICB0YWc6ICdzdmcnLFxuICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gIH1dO1xufTtcblxudmFyIGFzU3ltYm9sID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIHByZWZpeCA9IF9yZWYucHJlZml4LFxuICAgICAgaWNvbk5hbWUgPSBfcmVmLmljb25OYW1lLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgIHN5bWJvbCA9IF9yZWYuc3ltYm9sO1xuXG4gIHZhciBpZCA9IHN5bWJvbCA9PT0gdHJ1ZSA/IHByZWZpeCArICctJyArIGNvbmZpZyQxLmZhbWlseVByZWZpeCArICctJyArIGljb25OYW1lIDogc3ltYm9sO1xuXG4gIHJldHVybiBbe1xuICAgIHRhZzogJ3N2ZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgc3R5bGU6ICdkaXNwbGF5OiBub25lOydcbiAgICB9LFxuICAgIGNoaWxkcmVuOiBbe1xuICAgICAgdGFnOiAnc3ltYm9sJyxcbiAgICAgIGF0dHJpYnV0ZXM6IF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7IGlkOiBpZCB9KSxcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgIH1dXG4gIH1dO1xufTtcblxuZnVuY3Rpb24gbWFrZUlubGluZVN2Z0Fic3RyYWN0KHBhcmFtcykge1xuICB2YXIgX3BhcmFtcyRpY29ucyA9IHBhcmFtcy5pY29ucyxcbiAgICAgIG1haW4gPSBfcGFyYW1zJGljb25zLm1haW4sXG4gICAgICBtYXNrID0gX3BhcmFtcyRpY29ucy5tYXNrLFxuICAgICAgcHJlZml4ID0gcGFyYW1zLnByZWZpeCxcbiAgICAgIGljb25OYW1lID0gcGFyYW1zLmljb25OYW1lLFxuICAgICAgdHJhbnNmb3JtID0gcGFyYW1zLnRyYW5zZm9ybSxcbiAgICAgIHN5bWJvbCA9IHBhcmFtcy5zeW1ib2wsXG4gICAgICB0aXRsZSA9IHBhcmFtcy50aXRsZSxcbiAgICAgIGV4dHJhID0gcGFyYW1zLmV4dHJhLFxuICAgICAgX3BhcmFtcyR3YXRjaGFibGUgPSBwYXJhbXMud2F0Y2hhYmxlLFxuICAgICAgd2F0Y2hhYmxlID0gX3BhcmFtcyR3YXRjaGFibGUgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3BhcmFtcyR3YXRjaGFibGU7XG5cbiAgdmFyIF9yZWYgPSBtYXNrLmZvdW5kID8gbWFzayA6IG1haW4sXG4gICAgICB3aWR0aCA9IF9yZWYud2lkdGgsXG4gICAgICBoZWlnaHQgPSBfcmVmLmhlaWdodDtcblxuICB2YXIgd2lkdGhDbGFzcyA9ICdmYS13LScgKyBNYXRoLmNlaWwod2lkdGggLyBoZWlnaHQgKiAxNik7XG4gIHZhciBhdHRyQ2xhc3MgPSBbY29uZmlnJDEucmVwbGFjZW1lbnRDbGFzcywgaWNvbk5hbWUgPyBjb25maWckMS5mYW1pbHlQcmVmaXggKyAnLScgKyBpY29uTmFtZSA6ICcnLCB3aWR0aENsYXNzXS5jb25jYXQoZXh0cmEuY2xhc3Nlcykuam9pbignICcpO1xuXG4gIHZhciBjb250ZW50ID0ge1xuICAgIGNoaWxkcmVuOiBbXSxcbiAgICBhdHRyaWJ1dGVzOiBfZXh0ZW5kcyh7fSwgZXh0cmEuYXR0cmlidXRlcywge1xuICAgICAgJ2RhdGEtcHJlZml4JzogcHJlZml4LFxuICAgICAgJ2RhdGEtaWNvbic6IGljb25OYW1lLFxuICAgICAgJ2NsYXNzJzogYXR0ckNsYXNzLFxuICAgICAgJ3JvbGUnOiAnaW1nJyxcbiAgICAgICd4bWxucyc6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG4gICAgICAndmlld0JveCc6ICcwIDAgJyArIHdpZHRoICsgJyAnICsgaGVpZ2h0XG4gICAgfSlcbiAgfTtcblxuICBpZiAod2F0Y2hhYmxlKSB7XG4gICAgY29udGVudC5hdHRyaWJ1dGVzW0RBVEFfRkFfSTJTVkddID0gJyc7XG4gIH1cblxuICBpZiAodGl0bGUpIGNvbnRlbnQuY2hpbGRyZW4ucHVzaCh7IHRhZzogJ3RpdGxlJywgYXR0cmlidXRlczogeyBpZDogY29udGVudC5hdHRyaWJ1dGVzWydhcmlhLWxhYmVsbGVkYnknXSB8fCAndGl0bGUtJyArIG5leHRVbmlxdWVJZCgpIH0sIGNoaWxkcmVuOiBbdGl0bGVdIH0pO1xuXG4gIHZhciBhcmdzID0gX2V4dGVuZHMoe30sIGNvbnRlbnQsIHtcbiAgICBwcmVmaXg6IHByZWZpeCxcbiAgICBpY29uTmFtZTogaWNvbk5hbWUsXG4gICAgbWFpbjogbWFpbixcbiAgICBtYXNrOiBtYXNrLFxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgIHN5bWJvbDogc3ltYm9sLFxuICAgIHN0eWxlczogZXh0cmEuc3R5bGVzXG4gIH0pO1xuXG4gIHZhciBfcmVmMiA9IG1hc2suZm91bmQgJiYgbWFpbi5mb3VuZCA/IG1ha2VJY29uTWFza2luZyhhcmdzKSA6IG1ha2VJY29uU3RhbmRhcmQoYXJncyksXG4gICAgICBjaGlsZHJlbiA9IF9yZWYyLmNoaWxkcmVuLFxuICAgICAgYXR0cmlidXRlcyA9IF9yZWYyLmF0dHJpYnV0ZXM7XG5cbiAgYXJncy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICBhcmdzLmF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuXG4gIGlmIChzeW1ib2wpIHtcbiAgICByZXR1cm4gYXNTeW1ib2woYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFzSWNvbihhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYWtlTGF5ZXJzVGV4dEFic3RyYWN0KHBhcmFtcykge1xuICB2YXIgY29udGVudCA9IHBhcmFtcy5jb250ZW50LFxuICAgICAgd2lkdGggPSBwYXJhbXMud2lkdGgsXG4gICAgICBoZWlnaHQgPSBwYXJhbXMuaGVpZ2h0LFxuICAgICAgdHJhbnNmb3JtID0gcGFyYW1zLnRyYW5zZm9ybSxcbiAgICAgIHRpdGxlID0gcGFyYW1zLnRpdGxlLFxuICAgICAgZXh0cmEgPSBwYXJhbXMuZXh0cmEsXG4gICAgICBfcGFyYW1zJHdhdGNoYWJsZTIgPSBwYXJhbXMud2F0Y2hhYmxlLFxuICAgICAgd2F0Y2hhYmxlID0gX3BhcmFtcyR3YXRjaGFibGUyID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9wYXJhbXMkd2F0Y2hhYmxlMjtcblxuXG4gIHZhciBhdHRyaWJ1dGVzID0gX2V4dGVuZHMoe30sIGV4dHJhLmF0dHJpYnV0ZXMsIHRpdGxlID8geyAndGl0bGUnOiB0aXRsZSB9IDoge30sIHtcbiAgICAnY2xhc3MnOiBleHRyYS5jbGFzc2VzLmpvaW4oJyAnKVxuICB9KTtcblxuICBpZiAod2F0Y2hhYmxlKSB7XG4gICAgYXR0cmlidXRlc1tEQVRBX0ZBX0kyU1ZHXSA9ICcnO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IF9leHRlbmRzKHt9LCBleHRyYS5zdHlsZXMpO1xuXG4gIGlmICh0cmFuc2Zvcm1Jc01lYW5pbmdmdWwodHJhbnNmb3JtKSkge1xuICAgIHN0eWxlc1sndHJhbnNmb3JtJ10gPSB0cmFuc2Zvcm1Gb3JDc3MoeyB0cmFuc2Zvcm06IHRyYW5zZm9ybSwgc3RhcnRDZW50ZXJlZDogdHJ1ZSwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9KTtcbiAgICBzdHlsZXNbJy13ZWJraXQtdHJhbnNmb3JtJ10gPSBzdHlsZXNbJ3RyYW5zZm9ybSddO1xuICB9XG5cbiAgdmFyIHN0eWxlU3RyaW5nID0gam9pblN0eWxlcyhzdHlsZXMpO1xuXG4gIGlmIChzdHlsZVN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgYXR0cmlidXRlc1snc3R5bGUnXSA9IHN0eWxlU3RyaW5nO1xuICB9XG5cbiAgdmFyIHZhbCA9IFtdO1xuXG4gIHZhbC5wdXNoKHtcbiAgICB0YWc6ICdzcGFuJyxcbiAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgIGNoaWxkcmVuOiBbY29udGVudF1cbiAgfSk7XG5cbiAgaWYgKHRpdGxlKSB7XG4gICAgdmFsLnB1c2goeyB0YWc6ICdzcGFuJywgYXR0cmlidXRlczogeyBjbGFzczogJ3NyLW9ubHknIH0sIGNoaWxkcmVuOiBbdGl0bGVdIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxudmFyIG5vb3AkMiA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcbnZhciBwID0gY29uZmlnJDEubWVhc3VyZVBlcmZvcm1hbmNlICYmIFBFUkZPUk1BTkNFICYmIFBFUkZPUk1BTkNFLm1hcmsgJiYgUEVSRk9STUFOQ0UubWVhc3VyZSA/IFBFUkZPUk1BTkNFIDogeyBtYXJrOiBub29wJDIsIG1lYXN1cmU6IG5vb3AkMiB9O1xudmFyIHByZWFtYmxlID0gJ0ZBIFwiNS4wLjEzXCInO1xuXG52YXIgYmVnaW4gPSBmdW5jdGlvbiBiZWdpbihuYW1lKSB7XG4gIHAubWFyayhwcmVhbWJsZSArICcgJyArIG5hbWUgKyAnIGJlZ2lucycpO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBlbmQobmFtZSk7XG4gIH07XG59O1xuXG52YXIgZW5kID0gZnVuY3Rpb24gZW5kKG5hbWUpIHtcbiAgcC5tYXJrKHByZWFtYmxlICsgJyAnICsgbmFtZSArICcgZW5kcycpO1xuICBwLm1lYXN1cmUocHJlYW1ibGUgKyAnICcgKyBuYW1lLCBwcmVhbWJsZSArICcgJyArIG5hbWUgKyAnIGJlZ2lucycsIHByZWFtYmxlICsgJyAnICsgbmFtZSArICcgZW5kcycpO1xufTtcblxudmFyIHBlcmYgPSB7IGJlZ2luOiBiZWdpbiwgZW5kOiBlbmQgfTtcblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEludGVybmFsIGhlbHBlciB0byBiaW5kIGEgZnVuY3Rpb24ga25vd24gdG8gaGF2ZSA0IGFyZ3VtZW50c1xuICogdG8gYSBnaXZlbiBjb250ZXh0LlxuICovXG52YXIgYmluZEludGVybmFsNCA9IGZ1bmN0aW9uIGJpbmRJbnRlcm5hbDQgKGZ1bmMsIHRoaXNDb250ZXh0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0NvbnRleHQsIGEsIGIsIGMsIGQpO1xuICB9O1xufTtcblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuLyoqXG4gKiAjIFJlZHVjZVxuICpcbiAqIEEgZmFzdCBvYmplY3QgYC5yZWR1Y2UoKWAgaW1wbGVtZW50YXRpb24uXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHN1YmplY3QgICAgICBUaGUgb2JqZWN0IHRvIHJlZHVjZSBvdmVyLlxuICogQHBhcmFtICB7RnVuY3Rpb259IGZuICAgICAgICAgICBUaGUgcmVkdWNlciBmdW5jdGlvbi5cbiAqIEBwYXJhbSAge21peGVkfSAgICBpbml0aWFsVmFsdWUgVGhlIGluaXRpYWwgdmFsdWUgZm9yIHRoZSByZWR1Y2VyLCBkZWZhdWx0cyB0byBzdWJqZWN0WzBdLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHRoaXNDb250ZXh0ICBUaGUgY29udGV4dCBmb3IgdGhlIHJlZHVjZXIuXG4gKiBAcmV0dXJuIHttaXhlZH0gICAgICAgICAgICAgICAgIFRoZSBmaW5hbCByZXN1bHQuXG4gKi9cbnZhciByZWR1Y2UgPSBmdW5jdGlvbiBmYXN0UmVkdWNlT2JqZWN0IChzdWJqZWN0LCBmbiwgaW5pdGlhbFZhbHVlLCB0aGlzQ29udGV4dCkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHN1YmplY3QpLFxuICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGgsXG4gICAgICBpdGVyYXRvciA9IHRoaXNDb250ZXh0ICE9PSB1bmRlZmluZWQgPyBiaW5kSW50ZXJuYWw0KGZuLCB0aGlzQ29udGV4dCkgOiBmbixcbiAgICAgIGksIGtleSwgcmVzdWx0O1xuXG4gIGlmIChpbml0aWFsVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIGkgPSAxO1xuICAgIHJlc3VsdCA9IHN1YmplY3Rba2V5c1swXV07XG4gIH1cbiAgZWxzZSB7XG4gICAgaSA9IDA7XG4gICAgcmVzdWx0ID0gaW5pdGlhbFZhbHVlO1xuICB9XG5cbiAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGtleSA9IGtleXNbaV07XG4gICAgcmVzdWx0ID0gaXRlcmF0b3IocmVzdWx0LCBzdWJqZWN0W2tleV0sIGtleSwgc3ViamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIHN0eWxlcyQyID0gbmFtZXNwYWNlLnN0eWxlcztcbnZhciBzaGltcyA9IG5hbWVzcGFjZS5zaGltcztcblxuXG52YXIgX2J5VW5pY29kZSA9IHt9O1xudmFyIF9ieUxpZ2F0dXJlID0ge307XG52YXIgX2J5T2xkTmFtZSA9IHt9O1xuXG52YXIgYnVpbGQgPSBmdW5jdGlvbiBidWlsZCgpIHtcbiAgdmFyIGxvb2t1cCA9IGZ1bmN0aW9uIGxvb2t1cChyZWR1Y2VyKSB7XG4gICAgcmV0dXJuIHJlZHVjZShzdHlsZXMkMiwgZnVuY3Rpb24gKG8sIHN0eWxlLCBwcmVmaXgpIHtcbiAgICAgIG9bcHJlZml4XSA9IHJlZHVjZShzdHlsZSwgcmVkdWNlciwge30pO1xuICAgICAgcmV0dXJuIG87XG4gICAgfSwge30pO1xuICB9O1xuXG4gIF9ieVVuaWNvZGUgPSBsb29rdXAoZnVuY3Rpb24gKGFjYywgaWNvbiwgaWNvbk5hbWUpIHtcbiAgICBhY2NbaWNvblszXV0gPSBpY29uTmFtZTtcblxuICAgIHJldHVybiBhY2M7XG4gIH0pO1xuXG4gIF9ieUxpZ2F0dXJlID0gbG9va3VwKGZ1bmN0aW9uIChhY2MsIGljb24sIGljb25OYW1lKSB7XG4gICAgdmFyIGxpZ2F0dXJlcyA9IGljb25bMl07XG5cbiAgICBhY2NbaWNvbk5hbWVdID0gaWNvbk5hbWU7XG5cbiAgICBsaWdhdHVyZXMuZm9yRWFjaChmdW5jdGlvbiAobGlnYXR1cmUpIHtcbiAgICAgIGFjY1tsaWdhdHVyZV0gPSBpY29uTmFtZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBhY2M7XG4gIH0pO1xuXG4gIHZhciBoYXNSZWd1bGFyID0gJ2ZhcicgaW4gc3R5bGVzJDI7XG5cbiAgX2J5T2xkTmFtZSA9IHJlZHVjZShzaGltcywgZnVuY3Rpb24gKGFjYywgc2hpbSkge1xuICAgIHZhciBvbGROYW1lID0gc2hpbVswXTtcbiAgICB2YXIgcHJlZml4ID0gc2hpbVsxXTtcbiAgICB2YXIgaWNvbk5hbWUgPSBzaGltWzJdO1xuXG4gICAgaWYgKHByZWZpeCA9PT0gJ2ZhcicgJiYgIWhhc1JlZ3VsYXIpIHtcbiAgICAgIHByZWZpeCA9ICdmYXMnO1xuICAgIH1cblxuICAgIGFjY1tvbGROYW1lXSA9IHsgcHJlZml4OiBwcmVmaXgsIGljb25OYW1lOiBpY29uTmFtZSB9O1xuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufTtcblxuYnVpbGQoKTtcblxuZnVuY3Rpb24gYnlVbmljb2RlKHByZWZpeCwgdW5pY29kZSkge1xuICByZXR1cm4gX2J5VW5pY29kZVtwcmVmaXhdW3VuaWNvZGVdO1xufVxuXG5mdW5jdGlvbiBieUxpZ2F0dXJlKHByZWZpeCwgbGlnYXR1cmUpIHtcbiAgcmV0dXJuIF9ieUxpZ2F0dXJlW3ByZWZpeF1bbGlnYXR1cmVdO1xufVxuXG5mdW5jdGlvbiBieU9sZE5hbWUobmFtZSkge1xuICByZXR1cm4gX2J5T2xkTmFtZVtuYW1lXSB8fCB7IHByZWZpeDogbnVsbCwgaWNvbk5hbWU6IG51bGwgfTtcbn1cblxudmFyIHN0eWxlcyQxID0gbmFtZXNwYWNlLnN0eWxlcztcblxuXG52YXIgZW1wdHlDYW5vbmljYWxJY29uID0gZnVuY3Rpb24gZW1wdHlDYW5vbmljYWxJY29uKCkge1xuICByZXR1cm4geyBwcmVmaXg6IG51bGwsIGljb25OYW1lOiBudWxsLCByZXN0OiBbXSB9O1xufTtcblxuZnVuY3Rpb24gZ2V0Q2Fub25pY2FsSWNvbih2YWx1ZXMpIHtcbiAgcmV0dXJuIHZhbHVlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY2xzKSB7XG4gICAgdmFyIGljb25OYW1lID0gZ2V0SWNvbk5hbWUoY29uZmlnJDEuZmFtaWx5UHJlZml4LCBjbHMpO1xuXG4gICAgaWYgKHN0eWxlcyQxW2Nsc10pIHtcbiAgICAgIGFjYy5wcmVmaXggPSBjbHM7XG4gICAgfSBlbHNlIGlmIChpY29uTmFtZSkge1xuICAgICAgdmFyIHNoaW0gPSBhY2MucHJlZml4ID09PSAnZmEnID8gYnlPbGROYW1lKGljb25OYW1lKSA6IHt9O1xuXG4gICAgICBhY2MuaWNvbk5hbWUgPSBzaGltLmljb25OYW1lIHx8IGljb25OYW1lO1xuICAgICAgYWNjLnByZWZpeCA9IHNoaW0ucHJlZml4IHx8IGFjYy5wcmVmaXg7XG4gICAgfSBlbHNlIGlmIChjbHMgIT09IGNvbmZpZyQxLnJlcGxhY2VtZW50Q2xhc3MgJiYgY2xzLmluZGV4T2YoJ2ZhLXctJykgIT09IDApIHtcbiAgICAgIGFjYy5yZXN0LnB1c2goY2xzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCBlbXB0eUNhbm9uaWNhbEljb24oKSk7XG59XG5cbmZ1bmN0aW9uIGljb25Gcm9tTWFwcGluZyhtYXBwaW5nLCBwcmVmaXgsIGljb25OYW1lKSB7XG4gIGlmIChtYXBwaW5nICYmIG1hcHBpbmdbcHJlZml4XSAmJiBtYXBwaW5nW3ByZWZpeF1baWNvbk5hbWVdKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgICAgaWNvbjogbWFwcGluZ1twcmVmaXhdW2ljb25OYW1lXVxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9IdG1sKGFic3RyYWN0Tm9kZXMpIHtcbiAgdmFyIHRhZyA9IGFic3RyYWN0Tm9kZXMudGFnLFxuICAgICAgX2Fic3RyYWN0Tm9kZXMkYXR0cmliID0gYWJzdHJhY3ROb2Rlcy5hdHRyaWJ1dGVzLFxuICAgICAgYXR0cmlidXRlcyA9IF9hYnN0cmFjdE5vZGVzJGF0dHJpYiA9PT0gdW5kZWZpbmVkID8ge30gOiBfYWJzdHJhY3ROb2RlcyRhdHRyaWIsXG4gICAgICBfYWJzdHJhY3ROb2RlcyRjaGlsZHIgPSBhYnN0cmFjdE5vZGVzLmNoaWxkcmVuLFxuICAgICAgY2hpbGRyZW4gPSBfYWJzdHJhY3ROb2RlcyRjaGlsZHIgPT09IHVuZGVmaW5lZCA/IFtdIDogX2Fic3RyYWN0Tm9kZXMkY2hpbGRyO1xuXG5cbiAgaWYgKHR5cGVvZiBhYnN0cmFjdE5vZGVzID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBodG1sRXNjYXBlKGFic3RyYWN0Tm9kZXMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnPCcgKyB0YWcgKyAnICcgKyBqb2luQXR0cmlidXRlcyhhdHRyaWJ1dGVzKSArICc+JyArIGNoaWxkcmVuLm1hcCh0b0h0bWwpLmpvaW4oJycpICsgJzwvJyArIHRhZyArICc+JztcbiAgfVxufVxuXG52YXIgbm9vcCQxID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG5mdW5jdGlvbiBpc1dhdGNoZWQobm9kZSkge1xuICB2YXIgaTJzdmcgPSBub2RlLmdldEF0dHJpYnV0ZSA/IG5vZGUuZ2V0QXR0cmlidXRlKERBVEFfRkFfSTJTVkcpIDogbnVsbDtcblxuICByZXR1cm4gdHlwZW9mIGkyc3ZnID09PSAnc3RyaW5nJztcbn1cblxuZnVuY3Rpb24gZ2V0TXV0YXRvcigpIHtcbiAgaWYgKGNvbmZpZyQxLmF1dG9SZXBsYWNlU3ZnID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIG11dGF0b3JzLnJlcGxhY2U7XG4gIH1cblxuICB2YXIgbXV0YXRvciA9IG11dGF0b3JzW2NvbmZpZyQxLmF1dG9SZXBsYWNlU3ZnXTtcblxuICByZXR1cm4gbXV0YXRvciB8fCBtdXRhdG9ycy5yZXBsYWNlO1xufVxuXG52YXIgbXV0YXRvcnMgPSB7XG4gIHJlcGxhY2U6IGZ1bmN0aW9uIHJlcGxhY2UobXV0YXRpb24pIHtcbiAgICB2YXIgbm9kZSA9IG11dGF0aW9uWzBdO1xuICAgIHZhciBhYnN0cmFjdCA9IG11dGF0aW9uWzFdO1xuICAgIHZhciBuZXdPdXRlckhUTUwgPSBhYnN0cmFjdC5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgfSkuam9pbignXFxuJyk7XG5cbiAgICBpZiAobm9kZS5wYXJlbnROb2RlICYmIG5vZGUub3V0ZXJIVE1MKSB7XG4gICAgICBub2RlLm91dGVySFRNTCA9IG5ld091dGVySFRNTCArIChjb25maWckMS5rZWVwT3JpZ2luYWxTb3VyY2UgJiYgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdzdmcnID8gJzwhLS0gJyArIG5vZGUub3V0ZXJIVE1MICsgJyAtLT4nIDogJycpO1xuICAgIH0gZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICB2YXIgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Tm9kZSwgbm9kZSk7XG4gICAgICBuZXdOb2RlLm91dGVySFRNTCA9IG5ld091dGVySFRNTDtcbiAgICB9XG4gIH0sXG4gIG5lc3Q6IGZ1bmN0aW9uIG5lc3QobXV0YXRpb24pIHtcbiAgICB2YXIgbm9kZSA9IG11dGF0aW9uWzBdO1xuICAgIHZhciBhYnN0cmFjdCA9IG11dGF0aW9uWzFdO1xuXG4gICAgLy8gSWYgd2UgYWxyZWFkeSBoYXZlIGEgcmVwbGFjZWQgbm9kZSB3ZSBkbyBub3Qgd2FudCB0byBjb250aW51ZSBuZXN0aW5nIHdpdGhpbiBpdC5cbiAgICAvLyBTaG9ydC1jaXJjdWl0IHRvIHRoZSBzdGFuZGFyZCByZXBsYWNlbWVudFxuICAgIGlmICh+Y2xhc3NBcnJheShub2RlKS5pbmRleE9mKGNvbmZpZyQxLnJlcGxhY2VtZW50Q2xhc3MpKSB7XG4gICAgICByZXR1cm4gbXV0YXRvcnMucmVwbGFjZShtdXRhdGlvbik7XG4gICAgfVxuXG4gICAgdmFyIGZvclN2ZyA9IG5ldyBSZWdFeHAoY29uZmlnJDEuZmFtaWx5UHJlZml4ICsgJy0uKicpO1xuXG4gICAgZGVsZXRlIGFic3RyYWN0WzBdLmF0dHJpYnV0ZXMuc3R5bGU7XG5cbiAgICB2YXIgc3BsaXRDbGFzc2VzID0gYWJzdHJhY3RbMF0uYXR0cmlidXRlcy5jbGFzcy5zcGxpdCgnICcpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjbHMpIHtcbiAgICAgIGlmIChjbHMgPT09IGNvbmZpZyQxLnJlcGxhY2VtZW50Q2xhc3MgfHwgY2xzLm1hdGNoKGZvclN2ZykpIHtcbiAgICAgICAgYWNjLnRvU3ZnLnB1c2goY2xzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjYy50b05vZGUucHVzaChjbHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHsgdG9Ob2RlOiBbXSwgdG9Tdmc6IFtdIH0pO1xuXG4gICAgYWJzdHJhY3RbMF0uYXR0cmlidXRlcy5jbGFzcyA9IHNwbGl0Q2xhc3Nlcy50b1N2Zy5qb2luKCcgJyk7XG5cbiAgICB2YXIgbmV3SW5uZXJIVE1MID0gYWJzdHJhY3QubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gdG9IdG1sKGEpO1xuICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIHNwbGl0Q2xhc3Nlcy50b05vZGUuam9pbignICcpKTtcbiAgICBub2RlLnNldEF0dHJpYnV0ZShEQVRBX0ZBX0kyU1ZHLCAnJyk7XG4gICAgbm9kZS5pbm5lckhUTUwgPSBuZXdJbm5lckhUTUw7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHBlcmZvcm0obXV0YXRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgY2FsbGJhY2tGdW5jdGlvbiA9IHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrIDogbm9vcCQxO1xuXG4gIGlmIChtdXRhdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgY2FsbGJhY2tGdW5jdGlvbigpO1xuICB9IGVsc2Uge1xuICAgIHZhciBmcmFtZSA9IFdJTkRPVy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24gKG9wKSB7XG4gICAgICByZXR1cm4gb3AoKTtcbiAgICB9O1xuXG4gICAgZnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG11dGF0b3IgPSBnZXRNdXRhdG9yKCk7XG4gICAgICB2YXIgbWFyayA9IHBlcmYuYmVnaW4oJ211dGF0ZScpO1xuXG4gICAgICBtdXRhdGlvbnMubWFwKG11dGF0b3IpO1xuXG4gICAgICBtYXJrKCk7XG5cbiAgICAgIGNhbGxiYWNrRnVuY3Rpb24oKTtcbiAgICB9KTtcbiAgfVxufVxuXG52YXIgZGlzYWJsZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gZGlzYWJsZU9ic2VydmF0aW9uKG9wZXJhdGlvbikge1xuICBkaXNhYmxlZCA9IHRydWU7XG4gIG9wZXJhdGlvbigpO1xuICBkaXNhYmxlZCA9IGZhbHNlO1xufVxuXG52YXIgbW8gPSBudWxsO1xuXG5mdW5jdGlvbiBvYnNlcnZlKG9wdGlvbnMpIHtcbiAgaWYgKCFNVVRBVElPTl9PQlNFUlZFUikgcmV0dXJuO1xuXG4gIHZhciB0cmVlQ2FsbGJhY2sgPSBvcHRpb25zLnRyZWVDYWxsYmFjayxcbiAgICAgIG5vZGVDYWxsYmFjayA9IG9wdGlvbnMubm9kZUNhbGxiYWNrLFxuICAgICAgcHNldWRvRWxlbWVudHNDYWxsYmFjayA9IG9wdGlvbnMucHNldWRvRWxlbWVudHNDYWxsYmFjaztcblxuXG4gIG1vID0gbmV3IE1VVEFUSU9OX09CU0VSVkVSKGZ1bmN0aW9uIChvYmplY3RzKSB7XG4gICAgaWYgKGRpc2FibGVkKSByZXR1cm47XG5cbiAgICB0b0FycmF5KG9iamVjdHMpLmZvckVhY2goZnVuY3Rpb24gKG11dGF0aW9uUmVjb3JkKSB7XG4gICAgICBpZiAobXV0YXRpb25SZWNvcmQudHlwZSA9PT0gJ2NoaWxkTGlzdCcgJiYgbXV0YXRpb25SZWNvcmQuYWRkZWROb2Rlcy5sZW5ndGggPiAwICYmICFpc1dhdGNoZWQobXV0YXRpb25SZWNvcmQuYWRkZWROb2Rlc1swXSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZyQxLnNlYXJjaFBzZXVkb0VsZW1lbnRzKSB7XG4gICAgICAgICAgcHNldWRvRWxlbWVudHNDYWxsYmFjayhtdXRhdGlvblJlY29yZC50YXJnZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJlZUNhbGxiYWNrKG11dGF0aW9uUmVjb3JkLnRhcmdldCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtdXRhdGlvblJlY29yZC50eXBlID09PSAnYXR0cmlidXRlcycgJiYgbXV0YXRpb25SZWNvcmQudGFyZ2V0LnBhcmVudE5vZGUgJiYgY29uZmlnJDEuc2VhcmNoUHNldWRvRWxlbWVudHMpIHtcbiAgICAgICAgcHNldWRvRWxlbWVudHNDYWxsYmFjayhtdXRhdGlvblJlY29yZC50YXJnZXQucGFyZW50Tm9kZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtdXRhdGlvblJlY29yZC50eXBlID09PSAnYXR0cmlidXRlcycgJiYgaXNXYXRjaGVkKG11dGF0aW9uUmVjb3JkLnRhcmdldCkgJiYgfkFUVFJJQlVURVNfV0FUQ0hFRF9GT1JfTVVUQVRJT04uaW5kZXhPZihtdXRhdGlvblJlY29yZC5hdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgICBpZiAobXV0YXRpb25SZWNvcmQuYXR0cmlidXRlTmFtZSA9PT0gJ2NsYXNzJykge1xuICAgICAgICAgIHZhciBfZ2V0Q2Fub25pY2FsSWNvbiA9IGdldENhbm9uaWNhbEljb24oY2xhc3NBcnJheShtdXRhdGlvblJlY29yZC50YXJnZXQpKSxcbiAgICAgICAgICAgICAgcHJlZml4ID0gX2dldENhbm9uaWNhbEljb24ucHJlZml4LFxuICAgICAgICAgICAgICBpY29uTmFtZSA9IF9nZXRDYW5vbmljYWxJY29uLmljb25OYW1lO1xuXG4gICAgICAgICAgaWYgKHByZWZpeCkgbXV0YXRpb25SZWNvcmQudGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1wcmVmaXgnLCBwcmVmaXgpO1xuICAgICAgICAgIGlmIChpY29uTmFtZSkgbXV0YXRpb25SZWNvcmQudGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1pY29uJywgaWNvbk5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGVDYWxsYmFjayhtdXRhdGlvblJlY29yZC50YXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGlmICghSVNfRE9NKSByZXR1cm47XG5cbiAgbW8ub2JzZXJ2ZShET0NVTUVOVC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLCB7XG4gICAgY2hpbGRMaXN0OiB0cnVlLCBhdHRyaWJ1dGVzOiB0cnVlLCBjaGFyYWN0ZXJEYXRhOiB0cnVlLCBzdWJ0cmVlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICBpZiAoIW1vKSByZXR1cm47XG5cbiAgbW8uZGlzY29ubmVjdCgpO1xufVxuXG52YXIgc3R5bGVQYXJzZXIgPSBmdW5jdGlvbiAobm9kZSkge1xuICB2YXIgc3R5bGUgPSBub2RlLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcblxuICB2YXIgdmFsID0gW107XG5cbiAgaWYgKHN0eWxlKSB7XG4gICAgdmFsID0gc3R5bGUuc3BsaXQoJzsnKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgc3R5bGUpIHtcbiAgICAgIHZhciBzdHlsZXMgPSBzdHlsZS5zcGxpdCgnOicpO1xuICAgICAgdmFyIHByb3AgPSBzdHlsZXNbMF07XG4gICAgICB2YXIgdmFsdWUgPSBzdHlsZXMuc2xpY2UoMSk7XG5cbiAgICAgIGlmIChwcm9wICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYWNjW3Byb3BdID0gdmFsdWUuam9pbignOicpLnRyaW0oKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufTtcblxuZnVuY3Rpb24gdG9IZXgodW5pY29kZSkge1xuICB2YXIgcmVzdWx0ID0gJyc7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB1bmljb2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGhleCA9IHVuaWNvZGUuY2hhckNvZGVBdChpKS50b1N0cmluZygxNik7XG4gICAgcmVzdWx0ICs9ICgnMDAwJyArIGhleCkuc2xpY2UoLTQpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxudmFyIGNsYXNzUGFyc2VyID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmFyIGV4aXN0aW5nUHJlZml4ID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJlZml4Jyk7XG4gIHZhciBleGlzdGluZ0ljb25OYW1lID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWNvbicpO1xuICB2YXIgaW5uZXJUZXh0ID0gbm9kZS5pbm5lclRleHQgIT09IHVuZGVmaW5lZCA/IG5vZGUuaW5uZXJUZXh0LnRyaW0oKSA6ICcnO1xuXG4gIHZhciB2YWwgPSBnZXRDYW5vbmljYWxJY29uKGNsYXNzQXJyYXkobm9kZSkpO1xuXG4gIGlmIChleGlzdGluZ1ByZWZpeCAmJiBleGlzdGluZ0ljb25OYW1lKSB7XG4gICAgdmFsLnByZWZpeCA9IGV4aXN0aW5nUHJlZml4O1xuICAgIHZhbC5pY29uTmFtZSA9IGV4aXN0aW5nSWNvbk5hbWU7XG4gIH1cblxuICBpZiAodmFsLnByZWZpeCAmJiBpbm5lclRleHQubGVuZ3RoID4gMSkge1xuICAgIHZhbC5pY29uTmFtZSA9IGJ5TGlnYXR1cmUodmFsLnByZWZpeCwgbm9kZS5pbm5lclRleHQpO1xuICB9IGVsc2UgaWYgKHZhbC5wcmVmaXggJiYgaW5uZXJUZXh0Lmxlbmd0aCA9PT0gMSkge1xuICAgIHZhbC5pY29uTmFtZSA9IGJ5VW5pY29kZSh2YWwucHJlZml4LCB0b0hleChub2RlLmlubmVyVGV4dCkpO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn07XG5cbnZhciBwYXJzZVRyYW5zZm9ybVN0cmluZyA9IGZ1bmN0aW9uIHBhcnNlVHJhbnNmb3JtU3RyaW5nKHRyYW5zZm9ybVN0cmluZykge1xuICB2YXIgdHJhbnNmb3JtID0ge1xuICAgIHNpemU6IDE2LFxuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICBmbGlwWDogZmFsc2UsXG4gICAgZmxpcFk6IGZhbHNlLFxuICAgIHJvdGF0ZTogMFxuICB9O1xuXG4gIGlmICghdHJhbnNmb3JtU3RyaW5nKSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtU3RyaW5nLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbikge1xuICAgICAgdmFyIHBhcnRzID0gbi50b0xvd2VyQ2FzZSgpLnNwbGl0KCctJyk7XG4gICAgICB2YXIgZmlyc3QgPSBwYXJ0c1swXTtcbiAgICAgIHZhciByZXN0ID0gcGFydHMuc2xpY2UoMSkuam9pbignLScpO1xuXG4gICAgICBpZiAoZmlyc3QgJiYgcmVzdCA9PT0gJ2gnKSB7XG4gICAgICAgIGFjYy5mbGlwWCA9IHRydWU7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaXJzdCAmJiByZXN0ID09PSAndicpIHtcbiAgICAgICAgYWNjLmZsaXBZID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cblxuICAgICAgcmVzdCA9IHBhcnNlRmxvYXQocmVzdCk7XG5cbiAgICAgIGlmIChpc05hTihyZXN0KSkge1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGZpcnN0KSB7XG4gICAgICAgIGNhc2UgJ2dyb3cnOlxuICAgICAgICAgIGFjYy5zaXplID0gYWNjLnNpemUgKyByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzaHJpbmsnOlxuICAgICAgICAgIGFjYy5zaXplID0gYWNjLnNpemUgLSByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICBhY2MueCA9IGFjYy54IC0gcmVzdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgIGFjYy54ID0gYWNjLnggKyByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd1cCc6XG4gICAgICAgICAgYWNjLnkgPSBhY2MueSAtIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgICAgIGFjYy55ID0gYWNjLnkgKyByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyb3RhdGUnOlxuICAgICAgICAgIGFjYy5yb3RhdGUgPSBhY2Mucm90YXRlICsgcmVzdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB0cmFuc2Zvcm0pO1xuICB9XG59O1xuXG52YXIgdHJhbnNmb3JtUGFyc2VyID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgcmV0dXJuIHBhcnNlVHJhbnNmb3JtU3RyaW5nKG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWZhLXRyYW5zZm9ybScpKTtcbn07XG5cbnZhciBzeW1ib2xQYXJzZXIgPSBmdW5jdGlvbiAobm9kZSkge1xuICB2YXIgc3ltYm9sID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmEtc3ltYm9sJyk7XG5cbiAgcmV0dXJuIHN5bWJvbCA9PT0gbnVsbCA/IGZhbHNlIDogc3ltYm9sID09PSAnJyA/IHRydWUgOiBzeW1ib2w7XG59O1xuXG52YXIgYXR0cmlidXRlc1BhcnNlciA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciBleHRyYUF0dHJpYnV0ZXMgPSB0b0FycmF5KG5vZGUuYXR0cmlidXRlcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGF0dHIpIHtcbiAgICBpZiAoYWNjLm5hbWUgIT09ICdjbGFzcycgJiYgYWNjLm5hbWUgIT09ICdzdHlsZScpIHtcbiAgICAgIGFjY1thdHRyLm5hbWVdID0gYXR0ci52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4gIHZhciB0aXRsZSA9IG5vZGUuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xuXG4gIGlmIChjb25maWckMS5hdXRvQTExeSkge1xuICAgIGlmICh0aXRsZSkge1xuICAgICAgZXh0cmFBdHRyaWJ1dGVzWydhcmlhLWxhYmVsbGVkYnknXSA9IGNvbmZpZyQxLnJlcGxhY2VtZW50Q2xhc3MgKyAnLXRpdGxlLScgKyBuZXh0VW5pcXVlSWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXh0cmFBdHRyaWJ1dGVzWydhcmlhLWhpZGRlbiddID0gJ3RydWUnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBleHRyYUF0dHJpYnV0ZXM7XG59O1xuXG52YXIgbWFza1BhcnNlciA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciBtYXNrID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmEtbWFzaycpO1xuXG4gIGlmICghbWFzaykge1xuICAgIHJldHVybiBlbXB0eUNhbm9uaWNhbEljb24oKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0Q2Fub25pY2FsSWNvbihtYXNrLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gaS50cmltKCk7XG4gICAgfSkpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBwYXJzZU1ldGEobm9kZSkge1xuICB2YXIgX2NsYXNzUGFyc2VyID0gY2xhc3NQYXJzZXIobm9kZSksXG4gICAgICBpY29uTmFtZSA9IF9jbGFzc1BhcnNlci5pY29uTmFtZSxcbiAgICAgIHByZWZpeCA9IF9jbGFzc1BhcnNlci5wcmVmaXgsXG4gICAgICBleHRyYUNsYXNzZXMgPSBfY2xhc3NQYXJzZXIucmVzdDtcblxuICB2YXIgZXh0cmFTdHlsZXMgPSBzdHlsZVBhcnNlcihub2RlKTtcbiAgdmFyIHRyYW5zZm9ybSA9IHRyYW5zZm9ybVBhcnNlcihub2RlKTtcbiAgdmFyIHN5bWJvbCA9IHN5bWJvbFBhcnNlcihub2RlKTtcbiAgdmFyIGV4dHJhQXR0cmlidXRlcyA9IGF0dHJpYnV0ZXNQYXJzZXIobm9kZSk7XG4gIHZhciBtYXNrID0gbWFza1BhcnNlcihub2RlKTtcblxuICByZXR1cm4ge1xuICAgIGljb25OYW1lOiBpY29uTmFtZSxcbiAgICB0aXRsZTogbm9kZS5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyksXG4gICAgcHJlZml4OiBwcmVmaXgsXG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgbWFzazogbWFzayxcbiAgICBleHRyYToge1xuICAgICAgY2xhc3NlczogZXh0cmFDbGFzc2VzLFxuICAgICAgc3R5bGVzOiBleHRyYVN0eWxlcyxcbiAgICAgIGF0dHJpYnV0ZXM6IGV4dHJhQXR0cmlidXRlc1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gTWlzc2luZ0ljb24oZXJyb3IpIHtcbiAgdGhpcy5uYW1lID0gJ01pc3NpbmdJY29uJztcbiAgdGhpcy5tZXNzYWdlID0gZXJyb3IgfHwgJ0ljb24gdW5hdmFpbGFibGUnO1xuICB0aGlzLnN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG59XG5cbk1pc3NpbmdJY29uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbk1pc3NpbmdJY29uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1pc3NpbmdJY29uO1xuXG52YXIgRklMTCA9IHsgZmlsbDogJ2N1cnJlbnRDb2xvcicgfTtcbnZhciBBTklNQVRJT05fQkFTRSA9IHtcbiAgYXR0cmlidXRlVHlwZTogJ1hNTCcsXG4gIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZScsXG4gIGR1cjogJzJzJ1xufTtcbnZhciBSSU5HID0ge1xuICB0YWc6ICdwYXRoJyxcbiAgYXR0cmlidXRlczogX2V4dGVuZHMoe30sIEZJTEwsIHtcbiAgICBkOiAnTTE1Ni41LDQ0Ny43bC0xMi42LDI5LjVjLTE4LjctOS41LTM1LjktMjEuMi01MS41LTM0LjlsMjIuNy0yMi43QzEyNy42LDQzMC41LDE0MS41LDQ0MCwxNTYuNSw0NDcuN3ogTTQwLjYsMjcySDguNSBjMS40LDIxLjIsNS40LDQxLjcsMTEuNyw2MS4xTDUwLDMyMS4yQzQ1LjEsMzA1LjUsNDEuOCwyODksNDAuNiwyNzJ6IE00MC42LDI0MGMxLjQtMTguOCw1LjItMzcsMTEuMS01NC4xbC0yOS41LTEyLjYgQzE0LjcsMTk0LjMsMTAsMjE2LjcsOC41LDI0MEg0MC42eiBNNjQuMywxNTYuNWM3LjgtMTQuOSwxNy4yLTI4LjgsMjguMS00MS41TDY5LjcsOTIuM2MtMTMuNywxNS42LTI1LjUsMzIuOC0zNC45LDUxLjUgTDY0LjMsMTU2LjV6IE0zOTcsNDE5LjZjLTEzLjksMTItMjkuNCwyMi4zLTQ2LjEsMzAuNGwxMS45LDI5LjhjMjAuNy05LjksMzkuOC0yMi42LDU2LjktMzcuNkwzOTcsNDE5LjZ6IE0xMTUsOTIuNCBjMTMuOS0xMiwyOS40LTIyLjMsNDYuMS0zMC40bC0xMS45LTI5LjhjLTIwLjcsOS45LTM5LjgsMjIuNi01Ni44LDM3LjZMMTE1LDkyLjR6IE00NDcuNywzNTUuNWMtNy44LDE0LjktMTcuMiwyOC44LTI4LjEsNDEuNSBsMjIuNywyMi43YzEzLjctMTUuNiwyNS41LTMyLjksMzQuOS01MS41TDQ0Ny43LDM1NS41eiBNNDcxLjQsMjcyYy0xLjQsMTguOC01LjIsMzctMTEuMSw1NC4xbDI5LjUsMTIuNiBjNy41LTIxLjEsMTIuMi00My41LDEzLjYtNjYuOEg0NzEuNHogTTMyMS4yLDQ2MmMtMTUuNyw1LTMyLjIsOC4yLTQ5LjIsOS40djMyLjFjMjEuMi0xLjQsNDEuNy01LjQsNjEuMS0xMS43TDMyMS4yLDQ2MnogTTI0MCw0NzEuNGMtMTguOC0xLjQtMzctNS4yLTU0LjEtMTEuMWwtMTIuNiwyOS41YzIxLjEsNy41LDQzLjUsMTIuMiw2Ni44LDEzLjZWNDcxLjR6IE00NjIsMTkwLjhjNSwxNS43LDguMiwzMi4yLDkuNCw0OS4yaDMyLjEgYy0xLjQtMjEuMi01LjQtNDEuNy0xMS43LTYxLjFMNDYyLDE5MC44eiBNOTIuNCwzOTdjLTEyLTEzLjktMjIuMy0yOS40LTMwLjQtNDYuMWwtMjkuOCwxMS45YzkuOSwyMC43LDIyLjYsMzkuOCwzNy42LDU2LjkgTDkyLjQsMzk3eiBNMjcyLDQwLjZjMTguOCwxLjQsMzYuOSw1LjIsNTQuMSwxMS4xbDEyLjYtMjkuNUMzMTcuNywxNC43LDI5NS4zLDEwLDI3Miw4LjVWNDAuNnogTTE5MC44LDUwIGMxNS43LTUsMzIuMi04LjIsNDkuMi05LjRWOC41Yy0yMS4yLDEuNC00MS43LDUuNC02MS4xLDExLjdMMTkwLjgsNTB6IE00NDIuMyw5Mi4zTDQxOS42LDExNWMxMiwxMy45LDIyLjMsMjkuNCwzMC41LDQ2LjEgbDI5LjgtMTEuOUM0NzAsMTI4LjUsNDU3LjMsMTA5LjQsNDQyLjMsOTIuM3ogTTM5Nyw5Mi40bDIyLjctMjIuN2MtMTUuNi0xMy43LTMyLjgtMjUuNS01MS41LTM0LjlsLTEyLjYsMjkuNSBDMzcwLjQsNzIuMSwzODQuNCw4MS41LDM5Nyw5Mi40eidcbiAgfSlcbn07XG52YXIgT1BBQ0lUWV9BTklNQVRFID0gX2V4dGVuZHMoe30sIEFOSU1BVElPTl9CQVNFLCB7XG4gIGF0dHJpYnV0ZU5hbWU6ICdvcGFjaXR5J1xufSk7XG52YXIgRE9UID0ge1xuICB0YWc6ICdjaXJjbGUnLFxuICBhdHRyaWJ1dGVzOiBfZXh0ZW5kcyh7fSwgRklMTCwge1xuICAgIGN4OiAnMjU2JyxcbiAgICBjeTogJzM2NCcsXG4gICAgcjogJzI4J1xuICB9KSxcbiAgY2hpbGRyZW46IFt7IHRhZzogJ2FuaW1hdGUnLCBhdHRyaWJ1dGVzOiBfZXh0ZW5kcyh7fSwgQU5JTUFUSU9OX0JBU0UsIHsgYXR0cmlidXRlTmFtZTogJ3InLCB2YWx1ZXM6ICcyODsxNDsyODsyODsxNDsyODsnIH0pIH0sIHsgdGFnOiAnYW5pbWF0ZScsIGF0dHJpYnV0ZXM6IF9leHRlbmRzKHt9LCBPUEFDSVRZX0FOSU1BVEUsIHsgdmFsdWVzOiAnMTswOzE7MTswOzE7JyB9KSB9XVxufTtcbnZhciBRVUVTVElPTiA9IHtcbiAgdGFnOiAncGF0aCcsXG4gIGF0dHJpYnV0ZXM6IF9leHRlbmRzKHt9LCBGSUxMLCB7XG4gICAgb3BhY2l0eTogJzEnLFxuICAgIGQ6ICdNMjYzLjcsMzEyaC0xNmMtNi42LDAtMTItNS40LTEyLTEyYzAtNzEsNzcuNC02My45LDc3LjQtMTA3LjhjMC0yMC0xNy44LTQwLjItNTcuNC00MC4yYy0yOS4xLDAtNDQuMyw5LjYtNTkuMiwyOC43IGMtMy45LDUtMTEuMSw2LTE2LjIsMi40bC0xMy4xLTkuMmMtNS42LTMuOS02LjktMTEuOC0yLjYtMTcuMmMyMS4yLTI3LjIsNDYuNC00NC43LDkxLjItNDQuN2M1Mi4zLDAsOTcuNCwyOS44LDk3LjQsODAuMiBjMCw2Ny42LTc3LjQsNjMuNS03Ny40LDEwNy44QzI3NS43LDMwNi42LDI3MC4zLDMxMiwyNjMuNywzMTJ6J1xuICB9KSxcbiAgY2hpbGRyZW46IFt7IHRhZzogJ2FuaW1hdGUnLCBhdHRyaWJ1dGVzOiBfZXh0ZW5kcyh7fSwgT1BBQ0lUWV9BTklNQVRFLCB7IHZhbHVlczogJzE7MDswOzA7MDsxOycgfSkgfV1cbn07XG52YXIgRVhDTEFNQVRJT04gPSB7XG4gIHRhZzogJ3BhdGgnLFxuICBhdHRyaWJ1dGVzOiBfZXh0ZW5kcyh7fSwgRklMTCwge1xuICAgIG9wYWNpdHk6ICcwJyxcbiAgICBkOiAnTTIzMi41LDEzNC41bDcsMTY4YzAuMyw2LjQsNS42LDExLjUsMTIsMTEuNWg5YzYuNCwwLDExLjctNS4xLDEyLTExLjVsNy0xNjhjMC4zLTYuOC01LjItMTIuNS0xMi0xMi41aC0yMyBDMjM3LjcsMTIyLDIzMi4yLDEyNy43LDIzMi41LDEzNC41eidcbiAgfSksXG4gIGNoaWxkcmVuOiBbeyB0YWc6ICdhbmltYXRlJywgYXR0cmlidXRlczogX2V4dGVuZHMoe30sIE9QQUNJVFlfQU5JTUFURSwgeyB2YWx1ZXM6ICcwOzA7MTsxOzA7MDsnIH0pIH1dXG59O1xuXG52YXIgbWlzc2luZyA9IHsgdGFnOiAnZycsIGNoaWxkcmVuOiBbUklORywgRE9ULCBRVUVTVElPTiwgRVhDTEFNQVRJT05dIH07XG5cbnZhciBzdHlsZXMgPSBuYW1lc3BhY2Uuc3R5bGVzO1xuXG52YXIgTEFZRVJTX1RFWFRfQ0xBU1NOQU1FID0gJ2ZhLWxheWVycy10ZXh0JztcbnZhciBGT05UX0ZBTUlMWV9QQVRURVJOID0gL0ZvbnQgQXdlc29tZSA1IChTb2xpZHxSZWd1bGFyfExpZ2h0fEJyYW5kcykvO1xudmFyIFNUWUxFX1RPX1BSRUZJWCA9IHtcbiAgJ1NvbGlkJzogJ2ZhcycsXG4gICdSZWd1bGFyJzogJ2ZhcicsXG4gICdMaWdodCc6ICdmYWwnLFxuICAnQnJhbmRzJzogJ2ZhYidcbn07XG5cbmZ1bmN0aW9uIGZpbmRJY29uKGljb25OYW1lLCBwcmVmaXgpIHtcbiAgdmFyIHZhbCA9IHtcbiAgICBmb3VuZDogZmFsc2UsXG4gICAgd2lkdGg6IDUxMixcbiAgICBoZWlnaHQ6IDUxMixcbiAgICBpY29uOiBtaXNzaW5nXG4gIH07XG5cbiAgaWYgKGljb25OYW1lICYmIHByZWZpeCAmJiBzdHlsZXNbcHJlZml4XSAmJiBzdHlsZXNbcHJlZml4XVtpY29uTmFtZV0pIHtcbiAgICB2YXIgaWNvbiA9IHN0eWxlc1twcmVmaXhdW2ljb25OYW1lXTtcbiAgICB2YXIgd2lkdGggPSBpY29uWzBdO1xuICAgIHZhciBoZWlnaHQgPSBpY29uWzFdO1xuICAgIHZhciB2ZWN0b3JEYXRhID0gaWNvbi5zbGljZSg0KTtcblxuICAgIHZhbCA9IHtcbiAgICAgIGZvdW5kOiB0cnVlLFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICBpY29uOiB7IHRhZzogJ3BhdGgnLCBhdHRyaWJ1dGVzOiB7IGZpbGw6ICdjdXJyZW50Q29sb3InLCBkOiB2ZWN0b3JEYXRhWzBdIH0gfVxuICAgIH07XG4gIH0gZWxzZSBpZiAoaWNvbk5hbWUgJiYgcHJlZml4ICYmICFjb25maWckMS5zaG93TWlzc2luZ0ljb25zKSB7XG4gICAgdGhyb3cgbmV3IE1pc3NpbmdJY29uKCdJY29uIGlzIG1pc3NpbmcgZm9yIHByZWZpeCAnICsgcHJlZml4ICsgJyB3aXRoIGljb24gbmFtZSAnICsgaWNvbk5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVTdmdSZXBsYWNlbWVudE11dGF0aW9uKG5vZGUsIG5vZGVNZXRhKSB7XG4gIHZhciBpY29uTmFtZSA9IG5vZGVNZXRhLmljb25OYW1lLFxuICAgICAgdGl0bGUgPSBub2RlTWV0YS50aXRsZSxcbiAgICAgIHByZWZpeCA9IG5vZGVNZXRhLnByZWZpeCxcbiAgICAgIHRyYW5zZm9ybSA9IG5vZGVNZXRhLnRyYW5zZm9ybSxcbiAgICAgIHN5bWJvbCA9IG5vZGVNZXRhLnN5bWJvbCxcbiAgICAgIG1hc2sgPSBub2RlTWV0YS5tYXNrLFxuICAgICAgZXh0cmEgPSBub2RlTWV0YS5leHRyYTtcblxuXG4gIHJldHVybiBbbm9kZSwgbWFrZUlubGluZVN2Z0Fic3RyYWN0KHtcbiAgICBpY29uczoge1xuICAgICAgbWFpbjogZmluZEljb24oaWNvbk5hbWUsIHByZWZpeCksXG4gICAgICBtYXNrOiBmaW5kSWNvbihtYXNrLmljb25OYW1lLCBtYXNrLnByZWZpeClcbiAgICB9LFxuICAgIHByZWZpeDogcHJlZml4LFxuICAgIGljb25OYW1lOiBpY29uTmFtZSxcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICBzeW1ib2w6IHN5bWJvbCxcbiAgICBtYXNrOiBtYXNrLFxuICAgIHRpdGxlOiB0aXRsZSxcbiAgICBleHRyYTogZXh0cmEsXG4gICAgd2F0Y2hhYmxlOiB0cnVlXG4gIH0pXTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVMYXllcnNUZXh0KG5vZGUsIG5vZGVNZXRhKSB7XG4gIHZhciB0aXRsZSA9IG5vZGVNZXRhLnRpdGxlLFxuICAgICAgdHJhbnNmb3JtID0gbm9kZU1ldGEudHJhbnNmb3JtLFxuICAgICAgZXh0cmEgPSBub2RlTWV0YS5leHRyYTtcblxuXG4gIHZhciB3aWR0aCA9IG51bGw7XG4gIHZhciBoZWlnaHQgPSBudWxsO1xuXG4gIGlmIChJU19JRSkge1xuICAgIHZhciBjb21wdXRlZEZvbnRTaXplID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5mb250U2l6ZSwgMTApO1xuICAgIHZhciBib3VuZGluZ0NsaWVudFJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHdpZHRoID0gYm91bmRpbmdDbGllbnRSZWN0LndpZHRoIC8gY29tcHV0ZWRGb250U2l6ZTtcbiAgICBoZWlnaHQgPSBib3VuZGluZ0NsaWVudFJlY3QuaGVpZ2h0IC8gY29tcHV0ZWRGb250U2l6ZTtcbiAgfVxuXG4gIGlmIChjb25maWckMS5hdXRvQTExeSAmJiAhdGl0bGUpIHtcbiAgICBleHRyYS5hdHRyaWJ1dGVzWydhcmlhLWhpZGRlbiddID0gJ3RydWUnO1xuICB9XG5cbiAgcmV0dXJuIFtub2RlLCBtYWtlTGF5ZXJzVGV4dEFic3RyYWN0KHtcbiAgICBjb250ZW50OiBub2RlLmlubmVySFRNTCxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgdGl0bGU6IHRpdGxlLFxuICAgIGV4dHJhOiBleHRyYSxcbiAgICB3YXRjaGFibGU6IHRydWVcbiAgfSldO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZU11dGF0aW9uKG5vZGUpIHtcbiAgdmFyIG5vZGVNZXRhID0gcGFyc2VNZXRhKG5vZGUpO1xuXG4gIGlmICh+bm9kZU1ldGEuZXh0cmEuY2xhc3Nlcy5pbmRleE9mKExBWUVSU19URVhUX0NMQVNTTkFNRSkpIHtcbiAgICByZXR1cm4gZ2VuZXJhdGVMYXllcnNUZXh0KG5vZGUsIG5vZGVNZXRhKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2VuZXJhdGVTdmdSZXBsYWNlbWVudE11dGF0aW9uKG5vZGUsIG5vZGVNZXRhKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmUobm9kZSkge1xuICBpZiAodHlwZW9mIG5vZGUucmVtb3ZlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbm9kZS5yZW1vdmUoKTtcbiAgfSBlbHNlIGlmIChub2RlICYmIG5vZGUucGFyZW50Tm9kZSkge1xuICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZWFyY2hQc2V1ZG9FbGVtZW50cyhyb290KSB7XG4gIGlmICghSVNfRE9NKSByZXR1cm47XG5cbiAgdmFyIGVuZCA9IHBlcmYuYmVnaW4oJ3NlYXJjaFBzZXVkb0VsZW1lbnRzJyk7XG5cbiAgZGlzYWJsZU9ic2VydmF0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICB0b0FycmF5KHJvb3QucXVlcnlTZWxlY3RvckFsbCgnKicpKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBbJzpiZWZvcmUnLCAnOmFmdGVyJ10uZm9yRWFjaChmdW5jdGlvbiAocG9zKSB7XG4gICAgICAgIHZhciBzdHlsZXMgPSBXSU5ET1cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBwb3MpO1xuICAgICAgICB2YXIgZm9udEZhbWlseSA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdmb250LWZhbWlseScpLm1hdGNoKEZPTlRfRkFNSUxZX1BBVFRFUk4pO1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSB0b0FycmF5KG5vZGUuY2hpbGRyZW4pO1xuICAgICAgICB2YXIgcHNldWRvRWxlbWVudCA9IGNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgICAgICAgIHJldHVybiBjLmdldEF0dHJpYnV0ZShEQVRBX0ZBX1BTRVVET19FTEVNRU5UKSA9PT0gcG9zO1xuICAgICAgICB9KVswXTtcblxuICAgICAgICBpZiAocHNldWRvRWxlbWVudCkge1xuICAgICAgICAgIGlmIChwc2V1ZG9FbGVtZW50Lm5leHRTaWJsaW5nICYmIHBzZXVkb0VsZW1lbnQubmV4dFNpYmxpbmcudGV4dENvbnRlbnQuaW5kZXhPZihEQVRBX0ZBX1BTRVVET19FTEVNRU5UKSA+IC0xKSB7XG4gICAgICAgICAgICByZW1vdmUocHNldWRvRWxlbWVudC5uZXh0U2libGluZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlbW92ZShwc2V1ZG9FbGVtZW50KTtcbiAgICAgICAgICBwc2V1ZG9FbGVtZW50ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb250RmFtaWx5ICYmICFwc2V1ZG9FbGVtZW50KSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnQgPSBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnY29udGVudCcpO1xuICAgICAgICAgIHZhciBpID0gRE9DVU1FTlQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgIGkuc2V0QXR0cmlidXRlKCdjbGFzcycsICcnICsgU1RZTEVfVE9fUFJFRklYW2ZvbnRGYW1pbHlbMV1dKTtcbiAgICAgICAgICBpLnNldEF0dHJpYnV0ZShEQVRBX0ZBX1BTRVVET19FTEVNRU5ULCBwb3MpO1xuICAgICAgICAgIGkuaW5uZXJUZXh0ID0gY29udGVudC5sZW5ndGggPT09IDMgPyBjb250ZW50LnN1YnN0cigxLCAxKSA6IGNvbnRlbnQ7XG4gICAgICAgICAgaWYgKHBvcyA9PT0gJzpiZWZvcmUnKSB7XG4gICAgICAgICAgICBub2RlLmluc2VydEJlZm9yZShpLCBub2RlLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGVuZCgpO1xufVxuXG5mdW5jdGlvbiBvblRyZWUocm9vdCkge1xuICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG5cbiAgaWYgKCFJU19ET00pIHJldHVybjtcblxuICB2YXIgaHRtbENsYXNzTGlzdCA9IERPQ1VNRU5ULmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3Q7XG4gIHZhciBoY2xBZGQgPSBmdW5jdGlvbiBoY2xBZGQoc3VmZml4KSB7XG4gICAgcmV0dXJuIGh0bWxDbGFzc0xpc3QuYWRkKEhUTUxfQ0xBU1NfSTJTVkdfQkFTRV9DTEFTUyArICctJyArIHN1ZmZpeCk7XG4gIH07XG4gIHZhciBoY2xSZW1vdmUgPSBmdW5jdGlvbiBoY2xSZW1vdmUoc3VmZml4KSB7XG4gICAgcmV0dXJuIGh0bWxDbGFzc0xpc3QucmVtb3ZlKEhUTUxfQ0xBU1NfSTJTVkdfQkFTRV9DTEFTUyArICctJyArIHN1ZmZpeCk7XG4gIH07XG4gIHZhciBwcmVmaXhlcyA9IE9iamVjdC5rZXlzKHN0eWxlcyk7XG4gIHZhciBwcmVmaXhlc0RvbVF1ZXJ5ID0gWycuJyArIExBWUVSU19URVhUX0NMQVNTTkFNRSArICc6bm90KFsnICsgREFUQV9GQV9JMlNWRyArICddKSddLmNvbmNhdChwcmVmaXhlcy5tYXAoZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gJy4nICsgcCArICc6bm90KFsnICsgREFUQV9GQV9JMlNWRyArICddKSc7XG4gIH0pKS5qb2luKCcsICcpO1xuXG4gIGlmIChwcmVmaXhlc0RvbVF1ZXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBjYW5kaWRhdGVzID0gdG9BcnJheShyb290LnF1ZXJ5U2VsZWN0b3JBbGwocHJlZml4ZXNEb21RdWVyeSkpO1xuXG4gIGlmIChjYW5kaWRhdGVzLmxlbmd0aCA+IDApIHtcbiAgICBoY2xBZGQoJ3BlbmRpbmcnKTtcbiAgICBoY2xSZW1vdmUoJ2NvbXBsZXRlJyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG1hcmsgPSBwZXJmLmJlZ2luKCdvblRyZWUnKTtcblxuICB2YXIgbXV0YXRpb25zID0gY2FuZGlkYXRlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbm9kZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgbXV0YXRpb24gPSBnZW5lcmF0ZU11dGF0aW9uKG5vZGUpO1xuXG4gICAgICBpZiAobXV0YXRpb24pIHtcbiAgICAgICAgYWNjLnB1c2gobXV0YXRpb24pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghUFJPRFVDVElPTikge1xuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIE1pc3NpbmdJY29uKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIFtdKTtcblxuICBtYXJrKCk7XG5cbiAgcGVyZm9ybShtdXRhdGlvbnMsIGZ1bmN0aW9uICgpIHtcbiAgICBoY2xBZGQoJ2FjdGl2ZScpO1xuICAgIGhjbEFkZCgnY29tcGxldGUnKTtcbiAgICBoY2xSZW1vdmUoJ3BlbmRpbmcnKTtcblxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvbk5vZGUobm9kZSkge1xuICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG5cbiAgdmFyIG11dGF0aW9uID0gZ2VuZXJhdGVNdXRhdGlvbihub2RlKTtcblxuICBpZiAobXV0YXRpb24pIHtcbiAgICBwZXJmb3JtKFttdXRhdGlvbl0sIGNhbGxiYWNrKTtcbiAgfVxufVxuXG52YXIgYmFzZVN0eWxlcyA9IFwic3ZnOm5vdCg6cm9vdCkuc3ZnLWlubGluZS0tZmEge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cXG5cXG4uc3ZnLWlubGluZS0tZmEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgaGVpZ2h0OiAxZW07XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIHZlcnRpY2FsLWFsaWduOiAtLjEyNWVtOyB9XFxuICAuc3ZnLWlubGluZS0tZmEuZmEtbGcge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogLS4yMjVlbTsgfVxcbiAgLnN2Zy1pbmxpbmUtLWZhLmZhLXctMSB7XFxuICAgIHdpZHRoOiAwLjA2MjVlbTsgfVxcbiAgLnN2Zy1pbmxpbmUtLWZhLmZhLXctMiB7XFxuICAgIHdpZHRoOiAwLjEyNWVtOyB9XFxuICAuc3ZnLWlubGluZS0tZmEuZmEtdy0zIHtcXG4gICAgd2lkdGg6IDAuMTg3NWVtOyB9XFxuICAuc3ZnLWlubGluZS0tZmEuZmEtdy00IHtcXG4gICAgd2lkdGg6IDAuMjVlbTsgfVxcbiAgLnN2Zy1pbmxpbmUtLWZhLmZhLXctNSB7XFxuICAgIHdpZHRoOiAwLjMxMjVlbTsgfVxcbiAgLnN2Zy1pbmxpbmUtLWZhLmZhLXctNiB7XFxuICAgIHdpZHRoOiAwLjM3NWVtOyB9XFxuICAuc3ZnLWlubGluZS0tZmEuZmEtdy03IHtcXG4gICAgd2lkdGg6IDAuNDM3NWVtOyB9XFxuICAuc3ZnLWlubGluZS0tZmEuZmEtdy04IHtcXG4gICAgd2lkdGg6IDAuNWVtOyB9XFxuICAuc3ZnLWlubGluZS0tZmEuZmEtdy05IHtcXG4gICAgd2lkdGg6IDAuNTYyNWVtOyB9XFxuICAuc3ZnLWlubGluZS0tZmEuZmEtdy0xMCB7XFxuICAgIHdpZHRoOiAwLjYyNWVtOyB9XFxuICAuc3ZnLWlubGluZS0tZmEuZmEtdy0xMSB7XFxuICAgIHdpZHRoOiAwLjY4NzVlbTsgfVxcbiAgLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTIge1xcbiAgICB3aWR0aDogMC43NWVtOyB9XFxuICAuc3ZnLWlubGluZS0tZmEuZmEtdy0xMyB7XFxuICAgIHdpZHRoOiAwLjgxMjVlbTsgfVxcbiAgLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTQge1xcbiAgICB3aWR0aDogMC44NzVlbTsgfVxcbiAgLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTUge1xcbiAgICB3aWR0aDogMC45Mzc1ZW07IH1cXG4gIC5zdmctaW5saW5lLS1mYS5mYS13LTE2IHtcXG4gICAgd2lkdGg6IDFlbTsgfVxcbiAgLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTcge1xcbiAgICB3aWR0aDogMS4wNjI1ZW07IH1cXG4gIC5zdmctaW5saW5lLS1mYS5mYS13LTE4IHtcXG4gICAgd2lkdGg6IDEuMTI1ZW07IH1cXG4gIC5zdmctaW5saW5lLS1mYS5mYS13LTE5IHtcXG4gICAgd2lkdGg6IDEuMTg3NWVtOyB9XFxuICAuc3ZnLWlubGluZS0tZmEuZmEtdy0yMCB7XFxuICAgIHdpZHRoOiAxLjI1ZW07IH1cXG4gIC5zdmctaW5saW5lLS1mYS5mYS1wdWxsLWxlZnQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IC4zZW07XFxuICAgIHdpZHRoOiBhdXRvOyB9XFxuICAuc3ZnLWlubGluZS0tZmEuZmEtcHVsbC1yaWdodCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAuM2VtO1xcbiAgICB3aWR0aDogYXV0bzsgfVxcbiAgLnN2Zy1pbmxpbmUtLWZhLmZhLWJvcmRlciB7XFxuICAgIGhlaWdodDogMS41ZW07IH1cXG4gIC5zdmctaW5saW5lLS1mYS5mYS1saSB7XFxuICAgIHdpZHRoOiAyZW07IH1cXG4gIC5zdmctaW5saW5lLS1mYS5mYS1mdyB7XFxuICAgIHdpZHRoOiAxLjI1ZW07IH1cXG5cXG4uZmEtbGF5ZXJzIHN2Zy5zdmctaW5saW5lLS1mYSB7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7IH1cXG5cXG4uZmEtbGF5ZXJzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMWVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IC0uMTI1ZW07XFxuICB3aWR0aDogMWVtOyB9XFxuICAuZmEtbGF5ZXJzIHN2Zy5zdmctaW5saW5lLS1mYSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyOyB9XFxuXFxuLmZhLWxheWVycy10ZXh0LCAuZmEtbGF5ZXJzLWNvdW50ZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmZhLWxheWVycy10ZXh0IHtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7IH1cXG5cXG4uZmEtbGF5ZXJzLWNvdW50ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMjUzYTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgaGVpZ2h0OiAxLjVlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgbWF4LXdpZHRoOiA1ZW07XFxuICBtaW4td2lkdGg6IDEuNWVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IC4yNWVtO1xcbiAgcmlnaHQ6IDA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHRvcDogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7IH1cXG5cXG4uZmEtbGF5ZXJzLWJvdHRvbS1yaWdodCB7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogYXV0bztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7IH1cXG5cXG4uZmEtbGF5ZXJzLWJvdHRvbS1sZWZ0IHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogYXV0bztcXG4gIHRvcDogYXV0bztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0OyB9XFxuXFxuLmZhLWxheWVycy10b3AtcmlnaHQge1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0OyB9XFxuXFxuLmZhLWxheWVycy10b3AtbGVmdCB7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IGF1dG87XFxuICB0b3A6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDsgfVxcblxcbi5mYS1sZyB7XFxuICBmb250LXNpemU6IDEuMzMzMzNlbTtcXG4gIGxpbmUtaGVpZ2h0OiAwLjc1ZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogLS4wNjY3ZW07IH1cXG5cXG4uZmEteHMge1xcbiAgZm9udC1zaXplOiAuNzVlbTsgfVxcblxcbi5mYS1zbSB7XFxuICBmb250LXNpemU6IC44NzVlbTsgfVxcblxcbi5mYS0xeCB7XFxuICBmb250LXNpemU6IDFlbTsgfVxcblxcbi5mYS0yeCB7XFxuICBmb250LXNpemU6IDJlbTsgfVxcblxcbi5mYS0zeCB7XFxuICBmb250LXNpemU6IDNlbTsgfVxcblxcbi5mYS00eCB7XFxuICBmb250LXNpemU6IDRlbTsgfVxcblxcbi5mYS01eCB7XFxuICBmb250LXNpemU6IDVlbTsgfVxcblxcbi5mYS02eCB7XFxuICBmb250LXNpemU6IDZlbTsgfVxcblxcbi5mYS03eCB7XFxuICBmb250LXNpemU6IDdlbTsgfVxcblxcbi5mYS04eCB7XFxuICBmb250LXNpemU6IDhlbTsgfVxcblxcbi5mYS05eCB7XFxuICBmb250LXNpemU6IDllbTsgfVxcblxcbi5mYS0xMHgge1xcbiAgZm9udC1zaXplOiAxMGVtOyB9XFxuXFxuLmZhLWZ3IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxLjI1ZW07IH1cXG5cXG4uZmEtdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDIuNWVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XFxuICAuZmEtdWwgPiBsaSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5mYS1saSB7XFxuICBsZWZ0OiAtMmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDJlbTtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuXFxuLmZhLWJvcmRlciB7XFxuICBib3JkZXI6IHNvbGlkIDAuMDhlbSAjZWVlO1xcbiAgYm9yZGVyLXJhZGl1czogLjFlbTtcXG4gIHBhZGRpbmc6IC4yZW0gLjI1ZW0gLjE1ZW07IH1cXG5cXG4uZmEtcHVsbC1sZWZ0IHtcXG4gIGZsb2F0OiBsZWZ0OyB9XFxuXFxuLmZhLXB1bGwtcmlnaHQge1xcbiAgZmxvYXQ6IHJpZ2h0OyB9XFxuXFxuLmZhLmZhLXB1bGwtbGVmdCxcXG4uZmFzLmZhLXB1bGwtbGVmdCxcXG4uZmFyLmZhLXB1bGwtbGVmdCxcXG4uZmFsLmZhLXB1bGwtbGVmdCxcXG4uZmFiLmZhLXB1bGwtbGVmdCB7XFxuICBtYXJnaW4tcmlnaHQ6IC4zZW07IH1cXG5cXG4uZmEuZmEtcHVsbC1yaWdodCxcXG4uZmFzLmZhLXB1bGwtcmlnaHQsXFxuLmZhci5mYS1wdWxsLXJpZ2h0LFxcbi5mYWwuZmEtcHVsbC1yaWdodCxcXG4uZmFiLmZhLXB1bGwtcmlnaHQge1xcbiAgbWFyZ2luLWxlZnQ6IC4zZW07IH1cXG5cXG4uZmEtc3BpbiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmEtc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZmEtc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7IH1cXG5cXG4uZmEtcHVsc2Uge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhLXNwaW4gMXMgaW5maW5pdGUgc3RlcHMoOCk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZmEtc3BpbiAxcyBpbmZpbml0ZSBzdGVwcyg4KTsgfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYS1zcGluIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhLXNwaW4ge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxcblxcbi5mYS1yb3RhdGUtOTAge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTEpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7IH1cXG5cXG4uZmEtcm90YXRlLTE4MCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MilcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyB9XFxuXFxuLmZhLXJvdGF0ZS0yNzAge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTMpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTsgfVxcblxcbi5mYS1mbGlwLWhvcml6b250YWwge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTAsIG1pcnJvcj0xKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTsgfVxcblxcbi5mYS1mbGlwLXZlcnRpY2FsIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yLCBtaXJyb3I9MSlcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7IH1cXG5cXG4uZmEtZmxpcC1ob3Jpem9udGFsLmZhLWZsaXAtdmVydGljYWwge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIsIG1pcnJvcj0xKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLTEsIC0xKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgLTEpOyB9XFxuXFxuOnJvb3QgLmZhLXJvdGF0ZS05MCxcXG46cm9vdCAuZmEtcm90YXRlLTE4MCxcXG46cm9vdCAuZmEtcm90YXRlLTI3MCxcXG46cm9vdCAuZmEtZmxpcC1ob3Jpem9udGFsLFxcbjpyb290IC5mYS1mbGlwLXZlcnRpY2FsIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBub25lO1xcbiAgICAgICAgICBmaWx0ZXI6IG5vbmU7IH1cXG5cXG4uZmEtc3RhY2sge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMmVtOyB9XFxuXFxuLmZhLXN0YWNrLTF4LFxcbi5mYS1zdGFjay0yeCB7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7IH1cXG5cXG4uc3ZnLWlubGluZS0tZmEuZmEtc3RhY2stMXgge1xcbiAgaGVpZ2h0OiAxZW07XFxuICB3aWR0aDogMWVtOyB9XFxuXFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXN0YWNrLTJ4IHtcXG4gIGhlaWdodDogMmVtO1xcbiAgd2lkdGg6IDJlbTsgfVxcblxcbi5mYS1pbnZlcnNlIHtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLnNyLW9ubHkge1xcbiAgYm9yZGVyOiAwO1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4OyB9XFxuXFxuLnNyLW9ubHktZm9jdXNhYmxlOmFjdGl2ZSwgLnNyLW9ubHktZm9jdXNhYmxlOmZvY3VzIHtcXG4gIGNsaXA6IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxuICB3aWR0aDogYXV0bzsgfVxcblwiO1xuXG52YXIgY3NzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZGZwID0gREVGQVVMVF9GQU1JTFlfUFJFRklYO1xuICB2YXIgZHJjID0gREVGQVVMVF9SRVBMQUNFTUVOVF9DTEFTUztcbiAgdmFyIGZwID0gY29uZmlnJDEuZmFtaWx5UHJlZml4O1xuICB2YXIgcmMgPSBjb25maWckMS5yZXBsYWNlbWVudENsYXNzO1xuICB2YXIgcyA9IGJhc2VTdHlsZXM7XG5cbiAgaWYgKGZwICE9PSBkZnAgfHwgcmMgIT09IGRyYykge1xuICAgIHZhciBkUGF0dCA9IG5ldyBSZWdFeHAoJ1xcXFwuJyArIGRmcCArICdcXFxcLScsICdnJyk7XG4gICAgdmFyIHJQYXR0ID0gbmV3IFJlZ0V4cCgnXFxcXC4nICsgZHJjLCAnZycpO1xuXG4gICAgcyA9IHMucmVwbGFjZShkUGF0dCwgJy4nICsgZnAgKyAnLScpLnJlcGxhY2UoclBhdHQsICcuJyArIHJjKTtcbiAgfVxuXG4gIHJldHVybiBzO1xufTtcblxuZnVuY3Rpb24gZGVmaW5lKHByZWZpeCwgaWNvbnMpIHtcbiAgdmFyIG5vcm1hbGl6ZWQgPSBPYmplY3Qua2V5cyhpY29ucykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGljb25OYW1lKSB7XG4gICAgdmFyIGljb24gPSBpY29uc1tpY29uTmFtZV07XG4gICAgdmFyIGV4cGFuZGVkID0gISFpY29uLmljb247XG5cbiAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgIGFjY1tpY29uLmljb25OYW1lXSA9IGljb24uaWNvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgYWNjW2ljb25OYW1lXSA9IGljb247XG4gICAgfVxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcblxuICBpZiAodHlwZW9mIG5hbWVzcGFjZS5ob29rcy5hZGRQYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbmFtZXNwYWNlLmhvb2tzLmFkZFBhY2socHJlZml4LCBub3JtYWxpemVkKTtcbiAgfSBlbHNlIHtcbiAgICBuYW1lc3BhY2Uuc3R5bGVzW3ByZWZpeF0gPSBfZXh0ZW5kcyh7fSwgbmFtZXNwYWNlLnN0eWxlc1twcmVmaXhdIHx8IHt9LCBub3JtYWxpemVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb250IEF3ZXNvbWUgNCB1c2VkIHRoZSBwcmVmaXggb2YgYGZhYCBmb3IgYWxsIGljb25zLiBXaXRoIHRoZSBpbnRyb2R1Y3Rpb25cbiAgICogb2YgbmV3IHN0eWxlcyB3ZSBuZWVkZWQgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIHRoZW0uIFByZWZpeCBgZmFgIGlzIG5vdyBhbiBhbGlhc1xuICAgKiBmb3IgYGZhc2Agc28gd2UnbGwgZWFzeSB0aGUgdXBncmFkZSBwcm9jZXNzIGZvciBvdXIgdXNlcnMgYnkgYXV0b21hdGljYWxseSBkZWZpbmluZ1xuICAgKiB0aGlzIGFzIHdlbGwuXG4gICAqL1xuICBpZiAocHJlZml4ID09PSAnZmFzJykge1xuICAgIGRlZmluZSgnZmEnLCBpY29ucyk7XG4gIH1cbn1cblxudmFyIExpYnJhcnkgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIExpYnJhcnkoKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgTGlicmFyeSk7XG5cbiAgICB0aGlzLmRlZmluaXRpb25zID0ge307XG4gIH1cblxuICBjcmVhdGVDbGFzcyhMaWJyYXJ5LCBbe1xuICAgIGtleTogJ2FkZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBkZWZpbml0aW9ucyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBkZWZpbml0aW9uc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFkZGl0aW9ucyA9IGRlZmluaXRpb25zLnJlZHVjZSh0aGlzLl9wdWxsRGVmaW5pdGlvbnMsIHt9KTtcblxuICAgICAgT2JqZWN0LmtleXMoYWRkaXRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX3RoaXMuZGVmaW5pdGlvbnNba2V5XSA9IF9leHRlbmRzKHt9LCBfdGhpcy5kZWZpbml0aW9uc1trZXldIHx8IHt9LCBhZGRpdGlvbnNba2V5XSk7XG4gICAgICAgIGRlZmluZShrZXksIGFkZGl0aW9uc1trZXldKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Jlc2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB0aGlzLmRlZmluaXRpb25zID0ge307XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX3B1bGxEZWZpbml0aW9ucycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9wdWxsRGVmaW5pdGlvbnMoYWRkaXRpb25zLCBkZWZpbml0aW9uKSB7XG4gICAgICB2YXIgbm9ybWFsaXplZCA9IGRlZmluaXRpb24ucHJlZml4ICYmIGRlZmluaXRpb24uaWNvbk5hbWUgJiYgZGVmaW5pdGlvbi5pY29uID8geyAwOiBkZWZpbml0aW9uIH0gOiBkZWZpbml0aW9uO1xuXG4gICAgICBPYmplY3Qua2V5cyhub3JtYWxpemVkKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgX25vcm1hbGl6ZWQka2V5ID0gbm9ybWFsaXplZFtrZXldLFxuICAgICAgICAgICAgcHJlZml4ID0gX25vcm1hbGl6ZWQka2V5LnByZWZpeCxcbiAgICAgICAgICAgIGljb25OYW1lID0gX25vcm1hbGl6ZWQka2V5Lmljb25OYW1lLFxuICAgICAgICAgICAgaWNvbiA9IF9ub3JtYWxpemVkJGtleS5pY29uO1xuXG5cbiAgICAgICAgaWYgKCFhZGRpdGlvbnNbcHJlZml4XSkgYWRkaXRpb25zW3ByZWZpeF0gPSB7fTtcblxuICAgICAgICBhZGRpdGlvbnNbcHJlZml4XVtpY29uTmFtZV0gPSBpY29uO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBhZGRpdGlvbnM7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBMaWJyYXJ5O1xufSgpO1xuXG5mdW5jdGlvbiBwcmVwSWNvbihpY29uKSB7XG4gIHZhciB3aWR0aCA9IGljb25bMF07XG4gIHZhciBoZWlnaHQgPSBpY29uWzFdO1xuICB2YXIgdmVjdG9yRGF0YSA9IGljb24uc2xpY2UoNCk7XG5cbiAgcmV0dXJuIHtcbiAgICBmb3VuZDogdHJ1ZSxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgaWNvbjogeyB0YWc6ICdwYXRoJywgYXR0cmlidXRlczogeyBmaWxsOiAnY3VycmVudENvbG9yJywgZDogdmVjdG9yRGF0YVswXSB9IH1cbiAgfTtcbn1cblxudmFyIF9jc3NJbnNlcnRlZCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBlbnN1cmVDc3MoKSB7XG4gIGlmICghY29uZmlnJDEuYXV0b0FkZENzcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghX2Nzc0luc2VydGVkKSB7XG4gICAgaW5zZXJ0Q3NzKGNzcygpKTtcbiAgfVxuXG4gIF9jc3NJbnNlcnRlZCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIGFwaU9iamVjdCh2YWwsIGFic3RyYWN0Q3JlYXRvcikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsLCAnYWJzdHJhY3QnLCB7XG4gICAgZ2V0OiBhYnN0cmFjdENyZWF0b3JcbiAgfSk7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbCwgJ2h0bWwnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdmFsLmFic3RyYWN0Lm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gdG9IdG1sKGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsLCAnbm9kZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICghSVNfRE9NKSByZXR1cm47XG5cbiAgICAgIHZhciBjb250YWluZXIgPSBET0NVTUVOVC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSB2YWwuaHRtbDtcbiAgICAgIHJldHVybiBjb250YWluZXIuY2hpbGRyZW47XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdmFsO1xufVxuXG5mdW5jdGlvbiBmaW5kSWNvbkRlZmluaXRpb24ocGFyYW1zKSB7XG4gIHZhciBfcGFyYW1zJHByZWZpeCA9IHBhcmFtcy5wcmVmaXgsXG4gICAgICBwcmVmaXggPSBfcGFyYW1zJHByZWZpeCA9PT0gdW5kZWZpbmVkID8gJ2ZhJyA6IF9wYXJhbXMkcHJlZml4LFxuICAgICAgaWNvbk5hbWUgPSBwYXJhbXMuaWNvbk5hbWU7XG5cblxuICBpZiAoIWljb25OYW1lKSByZXR1cm47XG5cbiAgcmV0dXJuIGljb25Gcm9tTWFwcGluZyhsaWJyYXJ5LmRlZmluaXRpb25zLCBwcmVmaXgsIGljb25OYW1lKSB8fCBpY29uRnJvbU1hcHBpbmcobmFtZXNwYWNlLnN0eWxlcywgcHJlZml4LCBpY29uTmFtZSk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVJY29ucyhuZXh0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAobWF5YmVJY29uRGVmaW5pdGlvbikge1xuICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgdmFyIGljb25EZWZpbml0aW9uID0gKG1heWJlSWNvbkRlZmluaXRpb24gfHwge30pLmljb24gPyBtYXliZUljb25EZWZpbml0aW9uIDogZmluZEljb25EZWZpbml0aW9uKG1heWJlSWNvbkRlZmluaXRpb24gfHwge30pO1xuXG4gICAgdmFyIG1hc2sgPSBwYXJhbXMubWFzaztcblxuXG4gICAgaWYgKG1hc2spIHtcbiAgICAgIG1hc2sgPSAobWFzayB8fCB7fSkuaWNvbiA/IG1hc2sgOiBmaW5kSWNvbkRlZmluaXRpb24obWFzayB8fCB7fSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQoaWNvbkRlZmluaXRpb24sIF9leHRlbmRzKHt9LCBwYXJhbXMsIHsgbWFzazogbWFzayB9KSk7XG4gIH07XG59XG5cbnZhciBsaWJyYXJ5ID0gbmV3IExpYnJhcnkoKTtcblxudmFyIG5vQXV0byA9IGZ1bmN0aW9uIG5vQXV0bygpIHtcbiAgYXV0byhmYWxzZSk7XG4gIGRpc2Nvbm5lY3QoKTtcbn07XG5cbnZhciBkb20gPSB7XG4gIGkyc3ZnOiBmdW5jdGlvbiBpMnN2ZygpIHtcbiAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIGlmIChJU19ET00pIHtcbiAgICAgIGVuc3VyZUNzcygpO1xuXG4gICAgICB2YXIgX3BhcmFtcyRub2RlID0gcGFyYW1zLm5vZGUsXG4gICAgICAgICAgbm9kZSA9IF9wYXJhbXMkbm9kZSA9PT0gdW5kZWZpbmVkID8gRE9DVU1FTlQgOiBfcGFyYW1zJG5vZGUsXG4gICAgICAgICAgX3BhcmFtcyRjYWxsYmFjayA9IHBhcmFtcy5jYWxsYmFjayxcbiAgICAgICAgICBjYWxsYmFjayA9IF9wYXJhbXMkY2FsbGJhY2sgPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uICgpIHt9IDogX3BhcmFtcyRjYWxsYmFjaztcblxuXG4gICAgICBpZiAoY29uZmlnJDEuc2VhcmNoUHNldWRvRWxlbWVudHMpIHtcbiAgICAgICAgc2VhcmNoUHNldWRvRWxlbWVudHMobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIG9uVHJlZShub2RlLCBjYWxsYmFjayk7XG4gICAgfVxuICB9LFxuXG4gIGNzczogY3NzLFxuXG4gIGluc2VydENzczogZnVuY3Rpb24gaW5zZXJ0Q3NzJCQxKCkge1xuICAgIGluc2VydENzcyhjc3MoKSk7XG4gIH1cbn07XG5cbnZhciBwYXJzZSA9IHtcbiAgdHJhbnNmb3JtOiBmdW5jdGlvbiB0cmFuc2Zvcm0odHJhbnNmb3JtU3RyaW5nKSB7XG4gICAgcmV0dXJuIHBhcnNlVHJhbnNmb3JtU3RyaW5nKHRyYW5zZm9ybVN0cmluZyk7XG4gIH1cbn07XG5cbnZhciBpY29uID0gcmVzb2x2ZUljb25zKGZ1bmN0aW9uIChpY29uRGVmaW5pdGlvbikge1xuICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIF9wYXJhbXMkdHJhbnNmb3JtID0gcGFyYW1zLnRyYW5zZm9ybSxcbiAgICAgIHRyYW5zZm9ybSA9IF9wYXJhbXMkdHJhbnNmb3JtID09PSB1bmRlZmluZWQgPyBtZWFuaW5nbGVzc1RyYW5zZm9ybSA6IF9wYXJhbXMkdHJhbnNmb3JtLFxuICAgICAgX3BhcmFtcyRzeW1ib2wgPSBwYXJhbXMuc3ltYm9sLFxuICAgICAgc3ltYm9sID0gX3BhcmFtcyRzeW1ib2wgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3BhcmFtcyRzeW1ib2wsXG4gICAgICBfcGFyYW1zJG1hc2sgPSBwYXJhbXMubWFzayxcbiAgICAgIG1hc2sgPSBfcGFyYW1zJG1hc2sgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBfcGFyYW1zJG1hc2ssXG4gICAgICBfcGFyYW1zJHRpdGxlID0gcGFyYW1zLnRpdGxlLFxuICAgICAgdGl0bGUgPSBfcGFyYW1zJHRpdGxlID09PSB1bmRlZmluZWQgPyBudWxsIDogX3BhcmFtcyR0aXRsZSxcbiAgICAgIF9wYXJhbXMkY2xhc3NlcyA9IHBhcmFtcy5jbGFzc2VzLFxuICAgICAgY2xhc3NlcyA9IF9wYXJhbXMkY2xhc3NlcyA9PT0gdW5kZWZpbmVkID8gW10gOiBfcGFyYW1zJGNsYXNzZXMsXG4gICAgICBfcGFyYW1zJGF0dHJpYnV0ZXMgPSBwYXJhbXMuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcGFyYW1zJGF0dHJpYnV0ZXMgPT09IHVuZGVmaW5lZCA/IHt9IDogX3BhcmFtcyRhdHRyaWJ1dGVzLFxuICAgICAgX3BhcmFtcyRzdHlsZXMgPSBwYXJhbXMuc3R5bGVzLFxuICAgICAgc3R5bGVzID0gX3BhcmFtcyRzdHlsZXMgPT09IHVuZGVmaW5lZCA/IHt9IDogX3BhcmFtcyRzdHlsZXM7XG5cblxuICBpZiAoIWljb25EZWZpbml0aW9uKSByZXR1cm47XG5cbiAgdmFyIHByZWZpeCA9IGljb25EZWZpbml0aW9uLnByZWZpeCxcbiAgICAgIGljb25OYW1lID0gaWNvbkRlZmluaXRpb24uaWNvbk5hbWUsXG4gICAgICBpY29uID0gaWNvbkRlZmluaXRpb24uaWNvbjtcblxuXG4gIHJldHVybiBhcGlPYmplY3QoX2V4dGVuZHMoeyB0eXBlOiAnaWNvbicgfSwgaWNvbkRlZmluaXRpb24pLCBmdW5jdGlvbiAoKSB7XG4gICAgZW5zdXJlQ3NzKCk7XG5cbiAgICBpZiAoY29uZmlnJDEuYXV0b0ExMXkpIHtcbiAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICBhdHRyaWJ1dGVzWydhcmlhLWxhYmVsbGVkYnknXSA9IGNvbmZpZyQxLnJlcGxhY2VtZW50Q2xhc3MgKyAnLXRpdGxlLScgKyBuZXh0VW5pcXVlSWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF0dHJpYnV0ZXNbJ2FyaWEtaGlkZGVuJ10gPSAndHJ1ZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ha2VJbmxpbmVTdmdBYnN0cmFjdCh7XG4gICAgICBpY29uczoge1xuICAgICAgICBtYWluOiBwcmVwSWNvbihpY29uKSxcbiAgICAgICAgbWFzazogbWFzayA/IHByZXBJY29uKG1hc2suaWNvbikgOiB7IGZvdW5kOiBmYWxzZSwgd2lkdGg6IG51bGwsIGhlaWdodDogbnVsbCwgaWNvbjoge30gfVxuICAgICAgfSxcbiAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgICAgdHJhbnNmb3JtOiBfZXh0ZW5kcyh7fSwgbWVhbmluZ2xlc3NUcmFuc2Zvcm0sIHRyYW5zZm9ybSksXG4gICAgICBzeW1ib2w6IHN5bWJvbCxcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGV4dHJhOiB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgICAgIHN0eWxlczogc3R5bGVzLFxuICAgICAgICBjbGFzc2VzOiBjbGFzc2VzXG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbnZhciB0ZXh0ID0gZnVuY3Rpb24gdGV4dChjb250ZW50KSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgX3BhcmFtcyR0cmFuc2Zvcm0yID0gcGFyYW1zLnRyYW5zZm9ybSxcbiAgICAgIHRyYW5zZm9ybSA9IF9wYXJhbXMkdHJhbnNmb3JtMiA9PT0gdW5kZWZpbmVkID8gbWVhbmluZ2xlc3NUcmFuc2Zvcm0gOiBfcGFyYW1zJHRyYW5zZm9ybTIsXG4gICAgICBfcGFyYW1zJHRpdGxlMiA9IHBhcmFtcy50aXRsZSxcbiAgICAgIHRpdGxlID0gX3BhcmFtcyR0aXRsZTIgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBfcGFyYW1zJHRpdGxlMixcbiAgICAgIF9wYXJhbXMkY2xhc3NlczIgPSBwYXJhbXMuY2xhc3NlcyxcbiAgICAgIGNsYXNzZXMgPSBfcGFyYW1zJGNsYXNzZXMyID09PSB1bmRlZmluZWQgPyBbXSA6IF9wYXJhbXMkY2xhc3NlczIsXG4gICAgICBfcGFyYW1zJGF0dHJpYnV0ZXMyID0gcGFyYW1zLmF0dHJpYnV0ZXMsXG4gICAgICBhdHRyaWJ1dGVzID0gX3BhcmFtcyRhdHRyaWJ1dGVzMiA9PT0gdW5kZWZpbmVkID8ge30gOiBfcGFyYW1zJGF0dHJpYnV0ZXMyLFxuICAgICAgX3BhcmFtcyRzdHlsZXMyID0gcGFyYW1zLnN0eWxlcyxcbiAgICAgIHN0eWxlcyA9IF9wYXJhbXMkc3R5bGVzMiA9PT0gdW5kZWZpbmVkID8ge30gOiBfcGFyYW1zJHN0eWxlczI7XG5cblxuICByZXR1cm4gYXBpT2JqZWN0KHsgdHlwZTogJ3RleHQnLCBjb250ZW50OiBjb250ZW50IH0sIGZ1bmN0aW9uICgpIHtcbiAgICBlbnN1cmVDc3MoKTtcblxuICAgIHJldHVybiBtYWtlTGF5ZXJzVGV4dEFic3RyYWN0KHtcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICB0cmFuc2Zvcm06IF9leHRlbmRzKHt9LCBtZWFuaW5nbGVzc1RyYW5zZm9ybSwgdHJhbnNmb3JtKSxcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGV4dHJhOiB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgICAgIHN0eWxlczogc3R5bGVzLFxuICAgICAgICBjbGFzc2VzOiBbY29uZmlnJDEuZmFtaWx5UHJlZml4ICsgJy1sYXllcnMtdGV4dCddLmNvbmNhdCh0b0NvbnN1bWFibGVBcnJheShjbGFzc2VzKSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG52YXIgbGF5ZXIgPSBmdW5jdGlvbiBsYXllcihhc3NlbWJsZXIpIHtcbiAgcmV0dXJuIGFwaU9iamVjdCh7IHR5cGU6ICdsYXllcicgfSwgZnVuY3Rpb24gKCkge1xuICAgIGVuc3VyZUNzcygpO1xuXG4gICAgdmFyIGNoaWxkcmVuID0gW107XG5cbiAgICBhc3NlbWJsZXIoZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgIEFycmF5LmlzQXJyYXkoYXJncykgPyBhcmdzLm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLmNvbmNhdChhLmFic3RyYWN0KTtcbiAgICAgIH0pIDogY2hpbGRyZW4gPSBjaGlsZHJlbi5jb25jYXQoYXJncy5hYnN0cmFjdCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gW3tcbiAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgYXR0cmlidXRlczogeyBjbGFzczogY29uZmlnJDEuZmFtaWx5UHJlZml4ICsgJy1sYXllcnMnIH0sXG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICB9XTtcbiAgfSk7XG59O1xuXG52YXIgYXBpJDEgPSB7XG4gIG5vQXV0bzogbm9BdXRvLFxuICBkb206IGRvbSxcbiAgbGlicmFyeTogbGlicmFyeSxcbiAgcGFyc2U6IHBhcnNlLFxuICBmaW5kSWNvbkRlZmluaXRpb246IGZpbmRJY29uRGVmaW5pdGlvbixcbiAgaWNvbjogaWNvbixcbiAgdGV4dDogdGV4dCxcbiAgbGF5ZXI6IGxheWVyXG59O1xuXG52YXIgYXV0b1JlcGxhY2UgPSBmdW5jdGlvbiBhdXRvUmVwbGFjZSgpIHtcbiAgaWYgKElTX0RPTSAmJiBjb25maWckMS5hdXRvUmVwbGFjZVN2ZykgYXBpJDEuZG9tLmkyc3ZnKHsgbm9kZTogRE9DVU1FTlQgfSk7XG59O1xuXG5mdW5jdGlvbiBib290c3RyYXAoKSB7XG4gIGlmIChJU19CUk9XU0VSKSB7XG4gICAgaWYgKCFXSU5ET1cuRm9udEF3ZXNvbWUpIHtcbiAgICAgIFdJTkRPVy5Gb250QXdlc29tZSA9IGFwaSQxO1xuICAgIH1cblxuICAgIGRvbXJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhuYW1lc3BhY2Uuc3R5bGVzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGF1dG9SZXBsYWNlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWckMS5vYnNlcnZlTXV0YXRpb25zICYmIHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9ic2VydmUoe1xuICAgICAgICAgIHRyZWVDYWxsYmFjazogb25UcmVlLFxuICAgICAgICAgIG5vZGVDYWxsYmFjazogb25Ob2RlLFxuICAgICAgICAgIHBzZXVkb0VsZW1lbnRzQ2FsbGJhY2s6IHNlYXJjaFBzZXVkb0VsZW1lbnRzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmFtZXNwYWNlLmhvb2tzID0gX2V4dGVuZHMoe30sIG5hbWVzcGFjZS5ob29rcywge1xuXG4gICAgYWRkUGFjazogZnVuY3Rpb24gYWRkUGFjayhwcmVmaXgsIGljb25zKSB7XG4gICAgICBuYW1lc3BhY2Uuc3R5bGVzW3ByZWZpeF0gPSBfZXh0ZW5kcyh7fSwgbmFtZXNwYWNlLnN0eWxlc1twcmVmaXhdIHx8IHt9LCBpY29ucyk7XG5cbiAgICAgIGJ1aWxkKCk7XG4gICAgICBhdXRvUmVwbGFjZSgpO1xuICAgIH0sXG5cbiAgICBhZGRTaGltczogZnVuY3Rpb24gYWRkU2hpbXMoc2hpbXMpIHtcbiAgICAgIHZhciBfbmFtZXNwYWNlJHNoaW1zO1xuXG4gICAgICAoX25hbWVzcGFjZSRzaGltcyA9IG5hbWVzcGFjZS5zaGltcykucHVzaC5hcHBseShfbmFtZXNwYWNlJHNoaW1zLCB0b0NvbnN1bWFibGVBcnJheShzaGltcykpO1xuXG4gICAgICBidWlsZCgpO1xuICAgICAgYXV0b1JlcGxhY2UoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoYXBpJDEsICdjb25maWcnLCB7XG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBjb25maWckMTtcbiAgfSxcblxuICBzZXQ6IGZ1bmN0aW9uIHNldChuZXdDb25maWcpIHtcbiAgICB1cGRhdGUobmV3Q29uZmlnKTtcbiAgfVxufSk7XG5cbmlmIChJU19ET00pIGJ1bmtlcihib290c3RyYXApO1xuXG52YXIgY29uZmlnID0gYXBpJDEuY29uZmlnO1xuXG5leHBvcnQgeyBjb25maWcsIGljb24sIG5vQXV0bywgbGF5ZXIsIHRleHQsIGxpYnJhcnksIGRvbSwgcGFyc2UsIGZpbmRJY29uRGVmaW5pdGlvbiB9O1xuZXhwb3J0IGRlZmF1bHQgYXBpJDE7XG4iLCJleHBvcnQgY29uc3QgY29udGFjdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogXCJKb2huXCIsXHJcbiAgICAgICAgcGhvbmVOdW1iZXI6IFwiMDg0Nzc1OTYzMlwiLFxyXG4gICAgICAgIGVtYWlsOiBcImpvaG5Aam9obi5jb21cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiBcIk1lcnJpZVwiLFxyXG4gICAgICAgIHBob25lTnVtYmVyOiBcIjA4NDU5OTYxMTFcIixcclxuICAgICAgICBlbWFpbDogXCJtZXJyaWVAbWVycmllLmNvbVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5hbWU6IFwiQWRhbVwiLFxyXG4gICAgICAgIHBob25lTnVtYmVyOiBcIjA4NjY1OTI0NzVcIixcclxuICAgICAgICBlbWFpbDogXCJhZGFtQHN0YW1hdC5jb21cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNCxcclxuICAgICAgICBuYW1lOiBcIlBldGVyXCIsXHJcbiAgICAgICAgcGhvbmVOdW1iZXI6IFwiMDg2NjU5MjQ3NVwiLFxyXG4gICAgICAgIGVtYWlsOiBcInBldGVyQHBldGVyLmNvbVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA1LFxyXG4gICAgICAgIG5hbWU6IFwiTWF4XCIsXHJcbiAgICAgICAgcGhvbmVOdW1iZXI6IFwiMDg2NjU5MjQ3NVwiLFxyXG4gICAgICAgIGVtYWlsOiBcIm1heEBtYXguY29tXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDYsXHJcbiAgICAgICAgbmFtZTogXCJEYXZpZFwiLFxyXG4gICAgICAgIHBob25lTnVtYmVyOiBcIjA4NjY1OTI0NzVcIixcclxuICAgICAgICBlbWFpbDogXCJkYXZpZEBkYXZpZC5jb21cIlxyXG4gICAgfVxyXG5dOyIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgIEhhbmRsZWJhcnMgIGZyb20gXCIuL2hhbmRsZWJhcnNcIjtcclxuZXhwb3J0IGNsYXNzIFBhcnRpYWwge1xyXG5cdGNvbnN0cnVjdG9yKHBhdGgsIG5hbWUsIGRhdGEpIHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLnBhdGggPSBwYXRoO1xyXG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZSB7XHJcblx0Y29uc3RydWN0b3IocGF0aCwgZGF0YSwgZWwsIHBhcnRpYWxzKSB7XHJcblx0XHR0aGlzLnBhdGggPSBwYXRoO1xyXG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcclxuXHRcdHRoaXMuZWwgPSBlbDtcclxuXHRcdHRoaXMucGFydGlhbHMgPSBwYXJ0aWFscztcclxuXHR9XHJcblxyXG4gICAgIFxyXG4gIHJlbmRlcigpIHtcclxuXHRcdC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBwYXJ0aWFscyB3ZSBuZWVkIHRvIHJlZ2lzdGVyIG9yIG5vdFxyXG5cdFx0XHQvLyBMb2FkIHRoZSBwYXJ0aWFsc1xyXG5cclxuICAgICAgICBIYW5kbGViYXJzLnJlZ2lzdGVyUGFydGlhbCh0aGlzLnBhcnRpYWxzLm5hbWUsIHRoaXMucGFydGlhbHMucGF0aCgpKTtcclxuICAgICBjb25zdCBodG1sICA9IHRoaXMucGF0aCgpXHJcblx0XHRcdGNvbnN0IHRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKGh0bWwpO1xyXG5cdFx0XHRjb25zdCByZXN1bHQgPSB0ZW1wbGF0ZSh0aGlzLmRhdGEpO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZWwpLmlubmVySFRNTCA9IHJlc3VsdDtcclxuXHR9XHJcblxyXG59XHJcbiIsIi8qKiFcblxuIEBsaWNlbnNlXG4gaGFuZGxlYmFycyB2NC43LjdcblxuQ29weXJpZ2h0IChDKSAyMDExLTIwMTkgYnkgWWVodWRhIEthdHpcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLlxuXG4qL1xuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSGFuZGxlYmFyc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJIYW5kbGViYXJzXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcblxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cblxuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX2hhbmRsZWJhcnNSdW50aW1lID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNSdW50aW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNSdW50aW1lKTtcblxuXHQvLyBDb21waWxlciBpbXBvcnRzXG5cblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJBc3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ1KTtcblxuXHR2YXIgX2hhbmRsZWJhcnNDb21waWxlckFzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzQ29tcGlsZXJBc3QpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0NvbXBpbGVyQmFzZSA9IF9fd2VicGFja19yZXF1aXJlX18oNDYpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0NvbXBpbGVyQ29tcGlsZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUxKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNDb21waWxlckphdmFzY3JpcHRDb21waWxlciA9IF9fd2VicGFja19yZXF1aXJlX18oNTIpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0NvbXBpbGVySmF2YXNjcmlwdENvbXBpbGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNDb21waWxlckphdmFzY3JpcHRDb21waWxlcik7XG5cblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJWaXNpdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0OSk7XG5cblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJWaXNpdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNDb21waWxlclZpc2l0b3IpO1xuXG5cdHZhciBfaGFuZGxlYmFyc05vQ29uZmxpY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ0KTtcblxuXHR2YXIgX2hhbmRsZWJhcnNOb0NvbmZsaWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNOb0NvbmZsaWN0KTtcblxuXHR2YXIgX2NyZWF0ZSA9IF9oYW5kbGViYXJzUnVudGltZTJbJ2RlZmF1bHQnXS5jcmVhdGU7XG5cdGZ1bmN0aW9uIGNyZWF0ZSgpIHtcblx0ICB2YXIgaGIgPSBfY3JlYXRlKCk7XG5cblx0ICBoYi5jb21waWxlID0gZnVuY3Rpb24gKGlucHV0LCBvcHRpb25zKSB7XG5cdCAgICByZXR1cm4gX2hhbmRsZWJhcnNDb21waWxlckNvbXBpbGVyLmNvbXBpbGUoaW5wdXQsIG9wdGlvbnMsIGhiKTtcblx0ICB9O1xuXHQgIGhiLnByZWNvbXBpbGUgPSBmdW5jdGlvbiAoaW5wdXQsIG9wdGlvbnMpIHtcblx0ICAgIHJldHVybiBfaGFuZGxlYmFyc0NvbXBpbGVyQ29tcGlsZXIucHJlY29tcGlsZShpbnB1dCwgb3B0aW9ucywgaGIpO1xuXHQgIH07XG5cblx0ICBoYi5BU1QgPSBfaGFuZGxlYmFyc0NvbXBpbGVyQXN0MlsnZGVmYXVsdCddO1xuXHQgIGhiLkNvbXBpbGVyID0gX2hhbmRsZWJhcnNDb21waWxlckNvbXBpbGVyLkNvbXBpbGVyO1xuXHQgIGhiLkphdmFTY3JpcHRDb21waWxlciA9IF9oYW5kbGViYXJzQ29tcGlsZXJKYXZhc2NyaXB0Q29tcGlsZXIyWydkZWZhdWx0J107XG5cdCAgaGIuUGFyc2VyID0gX2hhbmRsZWJhcnNDb21waWxlckJhc2UucGFyc2VyO1xuXHQgIGhiLnBhcnNlID0gX2hhbmRsZWJhcnNDb21waWxlckJhc2UucGFyc2U7XG5cdCAgaGIucGFyc2VXaXRob3V0UHJvY2Vzc2luZyA9IF9oYW5kbGViYXJzQ29tcGlsZXJCYXNlLnBhcnNlV2l0aG91dFByb2Nlc3Npbmc7XG5cblx0ICByZXR1cm4gaGI7XG5cdH1cblxuXHR2YXIgaW5zdCA9IGNyZWF0ZSgpO1xuXHRpbnN0LmNyZWF0ZSA9IGNyZWF0ZTtcblxuXHRfaGFuZGxlYmFyc05vQ29uZmxpY3QyWydkZWZhdWx0J10oaW5zdCk7XG5cblx0aW5zdC5WaXNpdG9yID0gX2hhbmRsZWJhcnNDb21waWxlclZpc2l0b3IyWydkZWZhdWx0J107XG5cblx0aW5zdFsnZGVmYXVsdCddID0gaW5zdDtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBpbnN0O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqKSB7XG5cdCAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcblx0ICAgIFwiZGVmYXVsdFwiOiBvYmpcblx0ICB9O1xuXHR9O1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpWydkZWZhdWx0J107XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX2hhbmRsZWJhcnNCYXNlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxuXHR2YXIgYmFzZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9oYW5kbGViYXJzQmFzZSk7XG5cblx0Ly8gRWFjaCBvZiB0aGVzZSBhdWdtZW50IHRoZSBIYW5kbGViYXJzIG9iamVjdC4gTm8gbmVlZCB0byBzZXR1cCBoZXJlLlxuXHQvLyAoVGhpcyBpcyBkb25lIHRvIGVhc2lseSBzaGFyZSBjb2RlIGJldHdlZW4gY29tbW9uanMgYW5kIGJyb3dzZSBlbnZzKVxuXG5cdHZhciBfaGFuZGxlYmFyc1NhZmVTdHJpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM3KTtcblxuXHR2YXIgX2hhbmRsZWJhcnNTYWZlU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNTYWZlU3RyaW5nKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNFeGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzRXhjZXB0aW9uKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNVdGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0dmFyIFV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hhbmRsZWJhcnNVdGlscyk7XG5cblx0dmFyIF9oYW5kbGViYXJzUnVudGltZSA9IF9fd2VicGFja19yZXF1aXJlX18oMzgpO1xuXG5cdHZhciBydW50aW1lID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hhbmRsZWJhcnNSdW50aW1lKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNOb0NvbmZsaWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0NCk7XG5cblx0dmFyIF9oYW5kbGViYXJzTm9Db25mbGljdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzTm9Db25mbGljdCk7XG5cblx0Ly8gRm9yIGNvbXBhdGliaWxpdHkgYW5kIHVzYWdlIG91dHNpZGUgb2YgbW9kdWxlIHN5c3RlbXMsIG1ha2UgdGhlIEhhbmRsZWJhcnMgb2JqZWN0IGEgbmFtZXNwYWNlXG5cdGZ1bmN0aW9uIGNyZWF0ZSgpIHtcblx0ICB2YXIgaGIgPSBuZXcgYmFzZS5IYW5kbGViYXJzRW52aXJvbm1lbnQoKTtcblxuXHQgIFV0aWxzLmV4dGVuZChoYiwgYmFzZSk7XG5cdCAgaGIuU2FmZVN0cmluZyA9IF9oYW5kbGViYXJzU2FmZVN0cmluZzJbJ2RlZmF1bHQnXTtcblx0ICBoYi5FeGNlcHRpb24gPSBfaGFuZGxlYmFyc0V4Y2VwdGlvbjJbJ2RlZmF1bHQnXTtcblx0ICBoYi5VdGlscyA9IFV0aWxzO1xuXHQgIGhiLmVzY2FwZUV4cHJlc3Npb24gPSBVdGlscy5lc2NhcGVFeHByZXNzaW9uO1xuXG5cdCAgaGIuVk0gPSBydW50aW1lO1xuXHQgIGhiLnRlbXBsYXRlID0gZnVuY3Rpb24gKHNwZWMpIHtcblx0ICAgIHJldHVybiBydW50aW1lLnRlbXBsYXRlKHNwZWMsIGhiKTtcblx0ICB9O1xuXG5cdCAgcmV0dXJuIGhiO1xuXHR9XG5cblx0dmFyIGluc3QgPSBjcmVhdGUoKTtcblx0aW5zdC5jcmVhdGUgPSBjcmVhdGU7XG5cblx0X2hhbmRsZWJhcnNOb0NvbmZsaWN0MlsnZGVmYXVsdCddKGluc3QpO1xuXG5cdGluc3RbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gaW5zdDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9iaikge1xuXHQgIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcblx0ICAgIHJldHVybiBvYmo7XG5cdCAgfSBlbHNlIHtcblx0ICAgIHZhciBuZXdPYmogPSB7fTtcblxuXHQgICAgaWYgKG9iaiAhPSBudWxsKSB7XG5cdCAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcblx0ICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXHQgICAgcmV0dXJuIG5ld09iajtcblx0ICB9XG5cdH07XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMuSGFuZGxlYmFyc0Vudmlyb25tZW50ID0gSGFuZGxlYmFyc0Vudmlyb25tZW50O1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdHZhciBfaGVscGVycyA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXG5cdHZhciBfZGVjb3JhdG9ycyA9IF9fd2VicGFja19yZXF1aXJlX18oMzApO1xuXG5cdHZhciBfbG9nZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMik7XG5cblx0dmFyIF9sb2dnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9nZ2VyKTtcblxuXHR2YXIgX2ludGVybmFsUHJvdG9BY2Nlc3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMzKTtcblxuXHR2YXIgVkVSU0lPTiA9ICc0LjcuNyc7XG5cdGV4cG9ydHMuVkVSU0lPTiA9IFZFUlNJT047XG5cdHZhciBDT01QSUxFUl9SRVZJU0lPTiA9IDg7XG5cdGV4cG9ydHMuQ09NUElMRVJfUkVWSVNJT04gPSBDT01QSUxFUl9SRVZJU0lPTjtcblx0dmFyIExBU1RfQ09NUEFUSUJMRV9DT01QSUxFUl9SRVZJU0lPTiA9IDc7XG5cblx0ZXhwb3J0cy5MQVNUX0NPTVBBVElCTEVfQ09NUElMRVJfUkVWSVNJT04gPSBMQVNUX0NPTVBBVElCTEVfQ09NUElMRVJfUkVWSVNJT047XG5cdHZhciBSRVZJU0lPTl9DSEFOR0VTID0ge1xuXHQgIDE6ICc8PSAxLjAucmMuMicsIC8vIDEuMC5yYy4yIGlzIGFjdHVhbGx5IHJldjIgYnV0IGRvZXNuJ3QgcmVwb3J0IGl0XG5cdCAgMjogJz09IDEuMC4wLXJjLjMnLFxuXHQgIDM6ICc9PSAxLjAuMC1yYy40Jyxcblx0ICA0OiAnPT0gMS54LngnLFxuXHQgIDU6ICc9PSAyLjAuMC1hbHBoYS54Jyxcblx0ICA2OiAnPj0gMi4wLjAtYmV0YS4xJyxcblx0ICA3OiAnPj0gNC4wLjAgPDQuMy4wJyxcblx0ICA4OiAnPj0gNC4zLjAnXG5cdH07XG5cblx0ZXhwb3J0cy5SRVZJU0lPTl9DSEFOR0VTID0gUkVWSVNJT05fQ0hBTkdFUztcblx0dmFyIG9iamVjdFR5cGUgPSAnW29iamVjdCBPYmplY3RdJztcblxuXHRmdW5jdGlvbiBIYW5kbGViYXJzRW52aXJvbm1lbnQoaGVscGVycywgcGFydGlhbHMsIGRlY29yYXRvcnMpIHtcblx0ICB0aGlzLmhlbHBlcnMgPSBoZWxwZXJzIHx8IHt9O1xuXHQgIHRoaXMucGFydGlhbHMgPSBwYXJ0aWFscyB8fCB7fTtcblx0ICB0aGlzLmRlY29yYXRvcnMgPSBkZWNvcmF0b3JzIHx8IHt9O1xuXG5cdCAgX2hlbHBlcnMucmVnaXN0ZXJEZWZhdWx0SGVscGVycyh0aGlzKTtcblx0ICBfZGVjb3JhdG9ycy5yZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzKHRoaXMpO1xuXHR9XG5cblx0SGFuZGxlYmFyc0Vudmlyb25tZW50LnByb3RvdHlwZSA9IHtcblx0ICBjb25zdHJ1Y3RvcjogSGFuZGxlYmFyc0Vudmlyb25tZW50LFxuXG5cdCAgbG9nZ2VyOiBfbG9nZ2VyMlsnZGVmYXVsdCddLFxuXHQgIGxvZzogX2xvZ2dlcjJbJ2RlZmF1bHQnXS5sb2csXG5cblx0ICByZWdpc3RlckhlbHBlcjogZnVuY3Rpb24gcmVnaXN0ZXJIZWxwZXIobmFtZSwgZm4pIHtcblx0ICAgIGlmIChfdXRpbHMudG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuXHQgICAgICBpZiAoZm4pIHtcblx0ICAgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnQXJnIG5vdCBzdXBwb3J0ZWQgd2l0aCBtdWx0aXBsZSBoZWxwZXJzJyk7XG5cdCAgICAgIH1cblx0ICAgICAgX3V0aWxzLmV4dGVuZCh0aGlzLmhlbHBlcnMsIG5hbWUpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5oZWxwZXJzW25hbWVdID0gZm47XG5cdCAgICB9XG5cdCAgfSxcblx0ICB1bnJlZ2lzdGVySGVscGVyOiBmdW5jdGlvbiB1bnJlZ2lzdGVySGVscGVyKG5hbWUpIHtcblx0ICAgIGRlbGV0ZSB0aGlzLmhlbHBlcnNbbmFtZV07XG5cdCAgfSxcblxuXHQgIHJlZ2lzdGVyUGFydGlhbDogZnVuY3Rpb24gcmVnaXN0ZXJQYXJ0aWFsKG5hbWUsIHBhcnRpYWwpIHtcblx0ICAgIGlmIChfdXRpbHMudG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuXHQgICAgICBfdXRpbHMuZXh0ZW5kKHRoaXMucGFydGlhbHMsIG5hbWUpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgaWYgKHR5cGVvZiBwYXJ0aWFsID09PSAndW5kZWZpbmVkJykge1xuXHQgICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdBdHRlbXB0aW5nIHRvIHJlZ2lzdGVyIGEgcGFydGlhbCBjYWxsZWQgXCInICsgbmFtZSArICdcIiBhcyB1bmRlZmluZWQnKTtcblx0ICAgICAgfVxuXHQgICAgICB0aGlzLnBhcnRpYWxzW25hbWVdID0gcGFydGlhbDtcblx0ICAgIH1cblx0ICB9LFxuXHQgIHVucmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbiB1bnJlZ2lzdGVyUGFydGlhbChuYW1lKSB7XG5cdCAgICBkZWxldGUgdGhpcy5wYXJ0aWFsc1tuYW1lXTtcblx0ICB9LFxuXG5cdCAgcmVnaXN0ZXJEZWNvcmF0b3I6IGZ1bmN0aW9uIHJlZ2lzdGVyRGVjb3JhdG9yKG5hbWUsIGZuKSB7XG5cdCAgICBpZiAoX3V0aWxzLnRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcblx0ICAgICAgaWYgKGZuKSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgZGVjb3JhdG9ycycpO1xuXHQgICAgICB9XG5cdCAgICAgIF91dGlscy5leHRlbmQodGhpcy5kZWNvcmF0b3JzLCBuYW1lKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMuZGVjb3JhdG9yc1tuYW1lXSA9IGZuO1xuXHQgICAgfVxuXHQgIH0sXG5cdCAgdW5yZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24gdW5yZWdpc3RlckRlY29yYXRvcihuYW1lKSB7XG5cdCAgICBkZWxldGUgdGhpcy5kZWNvcmF0b3JzW25hbWVdO1xuXHQgIH0sXG5cdCAgLyoqXG5cdCAgICogUmVzZXQgdGhlIG1lbW9yeSBvZiBpbGxlZ2FsIHByb3BlcnR5IGFjY2Vzc2VzIHRoYXQgaGF2ZSBhbHJlYWR5IGJlZW4gbG9nZ2VkLlxuXHQgICAqIEBkZXByZWNhdGVkIHNob3VsZCBvbmx5IGJlIHVzZWQgaW4gaGFuZGxlYmFycyB0ZXN0LWNhc2VzXG5cdCAgICovXG5cdCAgcmVzZXRMb2dnZWRQcm9wZXJ0eUFjY2Vzc2VzOiBmdW5jdGlvbiByZXNldExvZ2dlZFByb3BlcnR5QWNjZXNzZXMoKSB7XG5cdCAgICBfaW50ZXJuYWxQcm90b0FjY2Vzcy5yZXNldExvZ2dlZFByb3BlcnRpZXMoKTtcblx0ICB9XG5cdH07XG5cblx0dmFyIGxvZyA9IF9sb2dnZXIyWydkZWZhdWx0J10ubG9nO1xuXG5cdGV4cG9ydHMubG9nID0gbG9nO1xuXHRleHBvcnRzLmNyZWF0ZUZyYW1lID0gX3V0aWxzLmNyZWF0ZUZyYW1lO1xuXHRleHBvcnRzLmxvZ2dlciA9IF9sb2dnZXIyWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzLmV4dGVuZCA9IGV4dGVuZDtcblx0ZXhwb3J0cy5pbmRleE9mID0gaW5kZXhPZjtcblx0ZXhwb3J0cy5lc2NhcGVFeHByZXNzaW9uID0gZXNjYXBlRXhwcmVzc2lvbjtcblx0ZXhwb3J0cy5pc0VtcHR5ID0gaXNFbXB0eTtcblx0ZXhwb3J0cy5jcmVhdGVGcmFtZSA9IGNyZWF0ZUZyYW1lO1xuXHRleHBvcnRzLmJsb2NrUGFyYW1zID0gYmxvY2tQYXJhbXM7XG5cdGV4cG9ydHMuYXBwZW5kQ29udGV4dFBhdGggPSBhcHBlbmRDb250ZXh0UGF0aDtcblx0dmFyIGVzY2FwZSA9IHtcblx0ICAnJic6ICcmYW1wOycsXG5cdCAgJzwnOiAnJmx0OycsXG5cdCAgJz4nOiAnJmd0OycsXG5cdCAgJ1wiJzogJyZxdW90OycsXG5cdCAgXCInXCI6ICcmI3gyNzsnLFxuXHQgICdgJzogJyYjeDYwOycsXG5cdCAgJz0nOiAnJiN4M0Q7J1xuXHR9O1xuXG5cdHZhciBiYWRDaGFycyA9IC9bJjw+XCInYD1dL2csXG5cdCAgICBwb3NzaWJsZSA9IC9bJjw+XCInYD1dLztcblxuXHRmdW5jdGlvbiBlc2NhcGVDaGFyKGNocikge1xuXHQgIHJldHVybiBlc2NhcGVbY2hyXTtcblx0fVxuXG5cdGZ1bmN0aW9uIGV4dGVuZChvYmogLyogLCAuLi5zb3VyY2UgKi8pIHtcblx0ICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHQgICAgZm9yICh2YXIga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuXHQgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3VtZW50c1tpXSwga2V5KSkge1xuXHQgICAgICAgIG9ialtrZXldID0gYXJndW1lbnRzW2ldW2tleV07XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9XG5cblx0ICByZXR1cm4gb2JqO1xuXHR9XG5cblx0dmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuXHRleHBvcnRzLnRvU3RyaW5nID0gdG9TdHJpbmc7XG5cdC8vIFNvdXJjZWQgZnJvbSBsb2Rhc2hcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2Jlc3RpZWpzL2xvZGFzaC9ibG9iL21hc3Rlci9MSUNFTlNFLnR4dFxuXHQvKiBlc2xpbnQtZGlzYWJsZSBmdW5jLXN0eWxlICovXG5cdHZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuXHQgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG5cdH07XG5cdC8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuXHQvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHRpZiAoaXNGdW5jdGlvbigveC8pKSB7XG5cdCAgZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0ICB9O1xuXHR9XG5cdGV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cblx0LyogZXNsaW50LWVuYWJsZSBmdW5jLXN0eWxlICovXG5cblx0LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0dmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScgOiBmYWxzZTtcblx0fTtcblxuXHRleHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXHQvLyBPbGRlciBJRSB2ZXJzaW9ucyBkbyBub3QgZGlyZWN0bHkgc3VwcG9ydCBpbmRleE9mIHNvIHdlIG11c3QgaW1wbGVtZW50IG91ciBvd24sIHNhZGx5LlxuXG5cdGZ1bmN0aW9uIGluZGV4T2YoYXJyYXksIHZhbHVlKSB7XG5cdCAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICBpZiAoYXJyYXlbaV0gPT09IHZhbHVlKSB7XG5cdCAgICAgIHJldHVybiBpO1xuXHQgICAgfVxuXHQgIH1cblx0ICByZXR1cm4gLTE7XG5cdH1cblxuXHRmdW5jdGlvbiBlc2NhcGVFeHByZXNzaW9uKHN0cmluZykge1xuXHQgIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuXHQgICAgLy8gZG9uJ3QgZXNjYXBlIFNhZmVTdHJpbmdzLCBzaW5jZSB0aGV5J3JlIGFscmVhZHkgc2FmZVxuXHQgICAgaWYgKHN0cmluZyAmJiBzdHJpbmcudG9IVE1MKSB7XG5cdCAgICAgIHJldHVybiBzdHJpbmcudG9IVE1MKCk7XG5cdCAgICB9IGVsc2UgaWYgKHN0cmluZyA9PSBudWxsKSB7XG5cdCAgICAgIHJldHVybiAnJztcblx0ICAgIH0gZWxzZSBpZiAoIXN0cmluZykge1xuXHQgICAgICByZXR1cm4gc3RyaW5nICsgJyc7XG5cdCAgICB9XG5cblx0ICAgIC8vIEZvcmNlIGEgc3RyaW5nIGNvbnZlcnNpb24gYXMgdGhpcyB3aWxsIGJlIGRvbmUgYnkgdGhlIGFwcGVuZCByZWdhcmRsZXNzIGFuZFxuXHQgICAgLy8gdGhlIHJlZ2V4IHRlc3Qgd2lsbCBkbyB0aGlzIHRyYW5zcGFyZW50bHkgYmVoaW5kIHRoZSBzY2VuZXMsIGNhdXNpbmcgaXNzdWVzIGlmXG5cdCAgICAvLyBhbiBvYmplY3QncyB0byBzdHJpbmcgaGFzIGVzY2FwZWQgY2hhcmFjdGVycyBpbiBpdC5cblx0ICAgIHN0cmluZyA9ICcnICsgc3RyaW5nO1xuXHQgIH1cblxuXHQgIGlmICghcG9zc2libGUudGVzdChzdHJpbmcpKSB7XG5cdCAgICByZXR1cm4gc3RyaW5nO1xuXHQgIH1cblx0ICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoYmFkQ2hhcnMsIGVzY2FwZUNoYXIpO1xuXHR9XG5cblx0ZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZSkge1xuXHQgIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcblx0ICAgIHJldHVybiB0cnVlO1xuXHQgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKSB7XG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0ICB9IGVsc2Uge1xuXHQgICAgcmV0dXJuIGZhbHNlO1xuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZUZyYW1lKG9iamVjdCkge1xuXHQgIHZhciBmcmFtZSA9IGV4dGVuZCh7fSwgb2JqZWN0KTtcblx0ICBmcmFtZS5fcGFyZW50ID0gb2JqZWN0O1xuXHQgIHJldHVybiBmcmFtZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJsb2NrUGFyYW1zKHBhcmFtcywgaWRzKSB7XG5cdCAgcGFyYW1zLnBhdGggPSBpZHM7XG5cdCAgcmV0dXJuIHBhcmFtcztcblx0fVxuXG5cdGZ1bmN0aW9uIGFwcGVuZENvbnRleHRQYXRoKGNvbnRleHRQYXRoLCBpZCkge1xuXHQgIHJldHVybiAoY29udGV4dFBhdGggPyBjb250ZXh0UGF0aCArICcuJyA6ICcnKSArIGlkO1xuXHR9XG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSA9IF9fd2VicGFja19yZXF1aXJlX18oNylbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHR2YXIgZXJyb3JQcm9wcyA9IFsnZGVzY3JpcHRpb24nLCAnZmlsZU5hbWUnLCAnbGluZU51bWJlcicsICdlbmRMaW5lTnVtYmVyJywgJ21lc3NhZ2UnLCAnbmFtZScsICdudW1iZXInLCAnc3RhY2snXTtcblxuXHRmdW5jdGlvbiBFeGNlcHRpb24obWVzc2FnZSwgbm9kZSkge1xuXHQgIHZhciBsb2MgPSBub2RlICYmIG5vZGUubG9jLFxuXHQgICAgICBsaW5lID0gdW5kZWZpbmVkLFxuXHQgICAgICBlbmRMaW5lTnVtYmVyID0gdW5kZWZpbmVkLFxuXHQgICAgICBjb2x1bW4gPSB1bmRlZmluZWQsXG5cdCAgICAgIGVuZENvbHVtbiA9IHVuZGVmaW5lZDtcblxuXHQgIGlmIChsb2MpIHtcblx0ICAgIGxpbmUgPSBsb2Muc3RhcnQubGluZTtcblx0ICAgIGVuZExpbmVOdW1iZXIgPSBsb2MuZW5kLmxpbmU7XG5cdCAgICBjb2x1bW4gPSBsb2Muc3RhcnQuY29sdW1uO1xuXHQgICAgZW5kQ29sdW1uID0gbG9jLmVuZC5jb2x1bW47XG5cblx0ICAgIG1lc3NhZ2UgKz0gJyAtICcgKyBsaW5lICsgJzonICsgY29sdW1uO1xuXHQgIH1cblxuXHQgIHZhciB0bXAgPSBFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXNzYWdlKTtcblxuXHQgIC8vIFVuZm9ydHVuYXRlbHkgZXJyb3JzIGFyZSBub3QgZW51bWVyYWJsZSBpbiBDaHJvbWUgKGF0IGxlYXN0KSwgc28gYGZvciBwcm9wIGluIHRtcGAgZG9lc24ndCB3b3JrLlxuXHQgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IGVycm9yUHJvcHMubGVuZ3RoOyBpZHgrKykge1xuXHQgICAgdGhpc1tlcnJvclByb3BzW2lkeF1dID0gdG1wW2Vycm9yUHJvcHNbaWR4XV07XG5cdCAgfVxuXG5cdCAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cblx0ICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcblx0ICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIEV4Y2VwdGlvbik7XG5cdCAgfVxuXG5cdCAgdHJ5IHtcblx0ICAgIGlmIChsb2MpIHtcblx0ICAgICAgdGhpcy5saW5lTnVtYmVyID0gbGluZTtcblx0ICAgICAgdGhpcy5lbmRMaW5lTnVtYmVyID0gZW5kTGluZU51bWJlcjtcblxuXHQgICAgICAvLyBXb3JrIGFyb3VuZCBpc3N1ZSB1bmRlciBzYWZhcmkgd2hlcmUgd2UgY2FuJ3QgZGlyZWN0bHkgc2V0IHRoZSBjb2x1bW4gdmFsdWVcblx0ICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICAgICAgaWYgKF9PYmplY3QkZGVmaW5lUHJvcGVydHkpIHtcblx0ICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2NvbHVtbicsIHtcblx0ICAgICAgICAgIHZhbHVlOiBjb2x1bW4sXG5cdCAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG5cdCAgICAgICAgfSk7XG5cdCAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdlbmRDb2x1bW4nLCB7XG5cdCAgICAgICAgICB2YWx1ZTogZW5kQ29sdW1uLFxuXHQgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuXHQgICAgICAgIH0pO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuXHQgICAgICAgIHRoaXMuZW5kQ29sdW1uID0gZW5kQ29sdW1uO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSBjYXRjaCAobm9wKSB7XG5cdCAgICAvKiBJZ25vcmUgaWYgdGhlIGJyb3dzZXIgaXMgdmVyeSBwYXJ0aWN1bGFyICovXG5cdCAgfVxuXHR9XG5cblx0RXhjZXB0aW9uLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEV4Y2VwdGlvbjtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogX193ZWJwYWNrX3JlcXVpcmVfXyg4KSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG4vKioqLyB9KSxcbi8qIDggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgJCA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG5cdCAgcmV0dXJuICQuc2V0RGVzYyhpdCwga2V5LCBkZXNjKTtcblx0fTtcblxuLyoqKi8gfSksXG4vKiA5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0dmFyICRPYmplY3QgPSBPYmplY3Q7XG5cdG1vZHVsZS5leHBvcnRzID0ge1xuXHQgIGNyZWF0ZTogICAgICRPYmplY3QuY3JlYXRlLFxuXHQgIGdldFByb3RvOiAgICRPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG5cdCAgaXNFbnVtOiAgICAge30ucHJvcGVydHlJc0VudW1lcmFibGUsXG5cdCAgZ2V0RGVzYzogICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG5cdCAgc2V0RGVzYzogICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0eSxcblx0ICBzZXREZXNjczogICAkT2JqZWN0LmRlZmluZVByb3BlcnRpZXMsXG5cdCAgZ2V0S2V5czogICAgJE9iamVjdC5rZXlzLFxuXHQgIGdldE5hbWVzOiAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcblx0ICBnZXRTeW1ib2xzOiAkT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcblx0ICBlYWNoOiAgICAgICBbXS5mb3JFYWNoXG5cdH07XG5cbi8qKiovIH0pLFxuLyogMTAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5yZWdpc3RlckRlZmF1bHRIZWxwZXJzID0gcmVnaXN0ZXJEZWZhdWx0SGVscGVycztcblx0ZXhwb3J0cy5tb3ZlSGVscGVyVG9Ib29rcyA9IG1vdmVIZWxwZXJUb0hvb2tzO1xuXG5cdHZhciBfaGVscGVyc0Jsb2NrSGVscGVyTWlzc2luZyA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXG5cdHZhciBfaGVscGVyc0Jsb2NrSGVscGVyTWlzc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzQmxvY2tIZWxwZXJNaXNzaW5nKTtcblxuXHR2YXIgX2hlbHBlcnNFYWNoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG5cblx0dmFyIF9oZWxwZXJzRWFjaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzRWFjaCk7XG5cblx0dmFyIF9oZWxwZXJzSGVscGVyTWlzc2luZyA9IF9fd2VicGFja19yZXF1aXJlX18oMjUpO1xuXG5cdHZhciBfaGVscGVyc0hlbHBlck1pc3NpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0hlbHBlck1pc3NpbmcpO1xuXG5cdHZhciBfaGVscGVyc0lmID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNik7XG5cblx0dmFyIF9oZWxwZXJzSWYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0lmKTtcblxuXHR2YXIgX2hlbHBlcnNMb2cgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI3KTtcblxuXHR2YXIgX2hlbHBlcnNMb2cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0xvZyk7XG5cblx0dmFyIF9oZWxwZXJzTG9va3VwID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOCk7XG5cblx0dmFyIF9oZWxwZXJzTG9va3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNMb29rdXApO1xuXG5cdHZhciBfaGVscGVyc1dpdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI5KTtcblxuXHR2YXIgX2hlbHBlcnNXaXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNXaXRoKTtcblxuXHRmdW5jdGlvbiByZWdpc3RlckRlZmF1bHRIZWxwZXJzKGluc3RhbmNlKSB7XG5cdCAgX2hlbHBlcnNCbG9ja0hlbHBlck1pc3NpbmcyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuXHQgIF9oZWxwZXJzRWFjaDJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG5cdCAgX2hlbHBlcnNIZWxwZXJNaXNzaW5nMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcblx0ICBfaGVscGVyc0lmMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcblx0ICBfaGVscGVyc0xvZzJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG5cdCAgX2hlbHBlcnNMb29rdXAyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuXHQgIF9oZWxwZXJzV2l0aDJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBtb3ZlSGVscGVyVG9Ib29rcyhpbnN0YW5jZSwgaGVscGVyTmFtZSwga2VlcEhlbHBlcikge1xuXHQgIGlmIChpbnN0YW5jZS5oZWxwZXJzW2hlbHBlck5hbWVdKSB7XG5cdCAgICBpbnN0YW5jZS5ob29rc1toZWxwZXJOYW1lXSA9IGluc3RhbmNlLmhlbHBlcnNbaGVscGVyTmFtZV07XG5cdCAgICBpZiAoIWtlZXBIZWxwZXIpIHtcblx0ICAgICAgZGVsZXRlIGluc3RhbmNlLmhlbHBlcnNbaGVscGVyTmFtZV07XG5cdCAgICB9XG5cdCAgfVxuXHR9XG5cbi8qKiovIH0pLFxuLyogMTEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcblx0ICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignYmxvY2tIZWxwZXJNaXNzaW5nJywgZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcblx0ICAgIHZhciBpbnZlcnNlID0gb3B0aW9ucy5pbnZlcnNlLFxuXHQgICAgICAgIGZuID0gb3B0aW9ucy5mbjtcblxuXHQgICAgaWYgKGNvbnRleHQgPT09IHRydWUpIHtcblx0ICAgICAgcmV0dXJuIGZuKHRoaXMpO1xuXHQgICAgfSBlbHNlIGlmIChjb250ZXh0ID09PSBmYWxzZSB8fCBjb250ZXh0ID09IG51bGwpIHtcblx0ICAgICAgcmV0dXJuIGludmVyc2UodGhpcyk7XG5cdCAgICB9IGVsc2UgaWYgKF91dGlscy5pc0FycmF5KGNvbnRleHQpKSB7XG5cdCAgICAgIGlmIChjb250ZXh0Lmxlbmd0aCA+IDApIHtcblx0ICAgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcblx0ICAgICAgICAgIG9wdGlvbnMuaWRzID0gW29wdGlvbnMubmFtZV07XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICByZXR1cm4gaW52ZXJzZSh0aGlzKTtcblx0ICAgICAgfVxuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuXHQgICAgICAgIHZhciBkYXRhID0gX3V0aWxzLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG5cdCAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IF91dGlscy5hcHBlbmRDb250ZXh0UGF0aChvcHRpb25zLmRhdGEuY29udGV4dFBhdGgsIG9wdGlvbnMubmFtZSk7XG5cdCAgICAgICAgb3B0aW9ucyA9IHsgZGF0YTogZGF0YSB9O1xuXHQgICAgICB9XG5cblx0ICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuXHQgICAgfVxuXHQgIH0pO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDEyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKGdsb2JhbCkgeyd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX09iamVjdCRrZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMylbJ2RlZmF1bHQnXTtcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHQgIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdlYWNoJywgZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcblx0ICAgIGlmICghb3B0aW9ucykge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnTXVzdCBwYXNzIGl0ZXJhdG9yIHRvICNlYWNoJyk7XG5cdCAgICB9XG5cblx0ICAgIHZhciBmbiA9IG9wdGlvbnMuZm4sXG5cdCAgICAgICAgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZSxcblx0ICAgICAgICBpID0gMCxcblx0ICAgICAgICByZXQgPSAnJyxcblx0ICAgICAgICBkYXRhID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIGNvbnRleHRQYXRoID0gdW5kZWZpbmVkO1xuXG5cdCAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG5cdCAgICAgIGNvbnRleHRQYXRoID0gX3V0aWxzLmFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5pZHNbMF0pICsgJy4nO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoX3V0aWxzLmlzRnVuY3Rpb24oY29udGV4dCkpIHtcblx0ICAgICAgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTtcblx0ICAgIH1cblxuXHQgICAgaWYgKG9wdGlvbnMuZGF0YSkge1xuXHQgICAgICBkYXRhID0gX3V0aWxzLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIGV4ZWNJdGVyYXRpb24oZmllbGQsIGluZGV4LCBsYXN0KSB7XG5cdCAgICAgIGlmIChkYXRhKSB7XG5cdCAgICAgICAgZGF0YS5rZXkgPSBmaWVsZDtcblx0ICAgICAgICBkYXRhLmluZGV4ID0gaW5kZXg7XG5cdCAgICAgICAgZGF0YS5maXJzdCA9IGluZGV4ID09PSAwO1xuXHQgICAgICAgIGRhdGEubGFzdCA9ICEhbGFzdDtcblxuXHQgICAgICAgIGlmIChjb250ZXh0UGF0aCkge1xuXHQgICAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGNvbnRleHRQYXRoICsgZmllbGQ7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cblx0ICAgICAgcmV0ID0gcmV0ICsgZm4oY29udGV4dFtmaWVsZF0sIHtcblx0ICAgICAgICBkYXRhOiBkYXRhLFxuXHQgICAgICAgIGJsb2NrUGFyYW1zOiBfdXRpbHMuYmxvY2tQYXJhbXMoW2NvbnRleHRbZmllbGRdLCBmaWVsZF0sIFtjb250ZXh0UGF0aCArIGZpZWxkLCBudWxsXSlcblx0ICAgICAgfSk7XG5cdCAgICB9XG5cblx0ICAgIGlmIChjb250ZXh0ICYmIHR5cGVvZiBjb250ZXh0ID09PSAnb2JqZWN0Jykge1xuXHQgICAgICBpZiAoX3V0aWxzLmlzQXJyYXkoY29udGV4dCkpIHtcblx0ICAgICAgICBmb3IgKHZhciBqID0gY29udGV4dC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcblx0ICAgICAgICAgIGlmIChpIGluIGNvbnRleHQpIHtcblx0ICAgICAgICAgICAgZXhlY0l0ZXJhdGlvbihpLCBpLCBpID09PSBjb250ZXh0Lmxlbmd0aCAtIDEpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgfSBlbHNlIGlmIChnbG9iYWwuU3ltYm9sICYmIGNvbnRleHRbZ2xvYmFsLlN5bWJvbC5pdGVyYXRvcl0pIHtcblx0ICAgICAgICB2YXIgbmV3Q29udGV4dCA9IFtdO1xuXHQgICAgICAgIHZhciBpdGVyYXRvciA9IGNvbnRleHRbZ2xvYmFsLlN5bWJvbC5pdGVyYXRvcl0oKTtcblx0ICAgICAgICBmb3IgKHZhciBpdCA9IGl0ZXJhdG9yLm5leHQoKTsgIWl0LmRvbmU7IGl0ID0gaXRlcmF0b3IubmV4dCgpKSB7XG5cdCAgICAgICAgICBuZXdDb250ZXh0LnB1c2goaXQudmFsdWUpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBjb250ZXh0ID0gbmV3Q29udGV4dDtcblx0ICAgICAgICBmb3IgKHZhciBqID0gY29udGV4dC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcblx0ICAgICAgICAgIGV4ZWNJdGVyYXRpb24oaSwgaSwgaSA9PT0gY29udGV4dC5sZW5ndGggLSAxKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgIHZhciBwcmlvcktleSA9IHVuZGVmaW5lZDtcblxuXHQgICAgICAgICAgX09iamVjdCRrZXlzKGNvbnRleHQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHQgICAgICAgICAgICAvLyBXZSdyZSBydW5uaW5nIHRoZSBpdGVyYXRpb25zIG9uZSBzdGVwIG91dCBvZiBzeW5jIHNvIHdlIGNhbiBkZXRlY3Rcblx0ICAgICAgICAgICAgLy8gdGhlIGxhc3QgaXRlcmF0aW9uIHdpdGhvdXQgaGF2ZSB0byBzY2FuIHRoZSBvYmplY3QgdHdpY2UgYW5kIGNyZWF0ZVxuXHQgICAgICAgICAgICAvLyBhbiBpdGVybWVkaWF0ZSBrZXlzIGFycmF5LlxuXHQgICAgICAgICAgICBpZiAocHJpb3JLZXkgIT09IHVuZGVmaW5lZCkge1xuXHQgICAgICAgICAgICAgIGV4ZWNJdGVyYXRpb24ocHJpb3JLZXksIGkgLSAxKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBwcmlvcktleSA9IGtleTtcblx0ICAgICAgICAgICAgaSsrO1xuXHQgICAgICAgICAgfSk7XG5cdCAgICAgICAgICBpZiAocHJpb3JLZXkgIT09IHVuZGVmaW5lZCkge1xuXHQgICAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSwgdHJ1ZSk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfSkoKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBpZiAoaSA9PT0gMCkge1xuXHQgICAgICByZXQgPSBpbnZlcnNlKHRoaXMpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gcmV0O1xuXHQgIH0pO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSgpKSkpXG5cbi8qKiovIH0pLFxuLyogMTMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IF9fd2VicGFja19yZXF1aXJlX18oMTQpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cbi8qKiovIH0pLFxuLyogMTQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcblx0bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIxKS5PYmplY3Qua2V5cztcblxuLyoqKi8gfSksXG4vKiAxNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxuXHR2YXIgdG9PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KSgna2V5cycsIGZ1bmN0aW9uKCRrZXlzKXtcblx0ICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG5cdCAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcblx0ICB9O1xuXHR9KTtcblxuLyoqKi8gfSksXG4vKiAxNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcblx0dmFyIGRlZmluZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG5cdCAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG5cdH07XG5cbi8qKiovIH0pLFxuLyogMTcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcblx0ICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuXHQgIHJldHVybiBpdDtcblx0fTtcblxuLyoqKi8gfSksXG4vKiAxOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpXG5cdCAgLCBjb3JlICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMSlcblx0ICAsIGZhaWxzICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI0KTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuXHQgIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cblx0ICAgICwgZXhwID0ge307XG5cdCAgZXhwW0tFWV0gPSBleGVjKGZuKTtcblx0ICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG5cdH07XG5cbi8qKiovIH0pLFxuLyogMTkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgZ2xvYmFsICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMClcblx0ICAsIGNvcmUgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjEpXG5cdCAgLCBjdHggICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyKVxuXHQgICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cblx0dmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuXHQgIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG5cdCAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkdcblx0ICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuXHQgICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG5cdCAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcblx0ICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuXHQgICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuXHQgICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG5cdCAgICAsIGtleSwgb3duLCBvdXQ7XG5cdCAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG5cdCAgZm9yKGtleSBpbiBzb3VyY2Upe1xuXHQgICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG5cdCAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiBrZXkgaW4gdGFyZ2V0O1xuXHQgICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuXHQgICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcblx0ICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG5cdCAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcblx0ICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG5cdCAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuXHQgICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcblx0ICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG5cdCAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuXHQgICAgICB2YXIgRiA9IGZ1bmN0aW9uKHBhcmFtKXtcblx0ICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEMgPyBuZXcgQyhwYXJhbSkgOiBDKHBhcmFtKTtcblx0ICAgICAgfTtcblx0ICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuXHQgICAgICByZXR1cm4gRjtcblx0ICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuXHQgICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuXHQgICAgaWYoSVNfUFJPVE8pKGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pKVtrZXldID0gb3V0O1xuXHQgIH1cblx0fTtcblx0Ly8gdHlwZSBiaXRtYXBcblx0JGV4cG9ydC5GID0gMTsgIC8vIGZvcmNlZFxuXHQkZXhwb3J0LkcgPSAyOyAgLy8gZ2xvYmFsXG5cdCRleHBvcnQuUyA9IDQ7ICAvLyBzdGF0aWNcblx0JGV4cG9ydC5QID0gODsgIC8vIHByb3RvXG5cdCRleHBvcnQuQiA9IDE2OyAvLyBiaW5kXG5cdCRleHBvcnQuVyA9IDMyOyAvLyB3cmFwXG5cdG1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuLyoqKi8gfSksXG4vKiAyMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5cdHZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuXHQgID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0aWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuLyoqKi8gfSksXG4vKiAyMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdHZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzEuMi42J307XG5cdGlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4vKioqLyB9KSxcbi8qIDIyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG5cdHZhciBhRnVuY3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcblx0ICBhRnVuY3Rpb24oZm4pO1xuXHQgIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG5cdCAgc3dpdGNoKGxlbmd0aCl7XG5cdCAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcblx0ICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG5cdCAgICB9O1xuXHQgICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG5cdCAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuXHQgICAgfTtcblx0ICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuXHQgICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcblx0ICAgIH07XG5cdCAgfVxuXHQgIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcblx0ICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuXHQgIH07XG5cdH07XG5cbi8qKiovIH0pLFxuLyogMjMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcblx0ICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuXHQgIHJldHVybiBpdDtcblx0fTtcblxuLyoqKi8gfSksXG4vKiAyNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG5cdCAgdHJ5IHtcblx0ICAgIHJldHVybiAhIWV4ZWMoKTtcblx0ICB9IGNhdGNoKGUpe1xuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfVxuXHR9O1xuXG4vKioqLyB9KSxcbi8qIDI1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF9leGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdHZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdCAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbiAoKSAvKiBbYXJncywgXW9wdGlvbnMgKi97XG5cdCAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuXHQgICAgICAvLyBBIG1pc3NpbmcgZmllbGQgaW4gYSB7e2Zvb319IGNvbnN0cnVjdC5cblx0ICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIC8vIFNvbWVvbmUgaXMgYWN0dWFsbHkgdHJ5aW5nIHRvIGNhbGwgc29tZXRoaW5nLCBibG93IHVwLlxuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnTWlzc2luZyBoZWxwZXI6IFwiJyArIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV0ubmFtZSArICdcIicpO1xuXHQgICAgfVxuXHQgIH0pO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDI2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0dmFyIF9leGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdHZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdCAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2lmJywgZnVuY3Rpb24gKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XG5cdCAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPSAyKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCcjaWYgcmVxdWlyZXMgZXhhY3RseSBvbmUgYXJndW1lbnQnKTtcblx0ICAgIH1cblx0ICAgIGlmIChfdXRpbHMuaXNGdW5jdGlvbihjb25kaXRpb25hbCkpIHtcblx0ICAgICAgY29uZGl0aW9uYWwgPSBjb25kaXRpb25hbC5jYWxsKHRoaXMpO1xuXHQgICAgfVxuXG5cdCAgICAvLyBEZWZhdWx0IGJlaGF2aW9yIGlzIHRvIHJlbmRlciB0aGUgcG9zaXRpdmUgcGF0aCBpZiB0aGUgdmFsdWUgaXMgdHJ1dGh5IGFuZCBub3QgZW1wdHkuXG5cdCAgICAvLyBUaGUgYGluY2x1ZGVaZXJvYCBvcHRpb24gbWF5IGJlIHNldCB0byB0cmVhdCB0aGUgY29uZHRpb25hbCBhcyBwdXJlbHkgbm90IGVtcHR5IGJhc2VkIG9uIHRoZVxuXHQgICAgLy8gYmVoYXZpb3Igb2YgaXNFbXB0eS4gRWZmZWN0aXZlbHkgdGhpcyBkZXRlcm1pbmVzIGlmIDAgaXMgaGFuZGxlZCBieSB0aGUgcG9zaXRpdmUgcGF0aCBvciBuZWdhdGl2ZS5cblx0ICAgIGlmICghb3B0aW9ucy5oYXNoLmluY2x1ZGVaZXJvICYmICFjb25kaXRpb25hbCB8fCBfdXRpbHMuaXNFbXB0eShjb25kaXRpb25hbCkpIHtcblx0ICAgICAgcmV0dXJuIG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiBvcHRpb25zLmZuKHRoaXMpO1xuXHQgICAgfVxuXHQgIH0pO1xuXG5cdCAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3VubGVzcycsIGZ1bmN0aW9uIChjb25kaXRpb25hbCwgb3B0aW9ucykge1xuXHQgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggIT0gMikge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnI3VubGVzcyByZXF1aXJlcyBleGFjdGx5IG9uZSBhcmd1bWVudCcpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnNbJ2lmJ10uY2FsbCh0aGlzLCBjb25kaXRpb25hbCwge1xuXHQgICAgICBmbjogb3B0aW9ucy5pbnZlcnNlLFxuXHQgICAgICBpbnZlcnNlOiBvcHRpb25zLmZuLFxuXHQgICAgICBoYXNoOiBvcHRpb25zLmhhc2hcblx0ICAgIH0pO1xuXHQgIH0pO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDI3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdCAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uICgpIC8qIG1lc3NhZ2UsIG9wdGlvbnMgKi97XG5cdCAgICB2YXIgYXJncyA9IFt1bmRlZmluZWRdLFxuXHQgICAgICAgIG9wdGlvbnMgPSBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdO1xuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdCAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgbGV2ZWwgPSAxO1xuXHQgICAgaWYgKG9wdGlvbnMuaGFzaC5sZXZlbCAhPSBudWxsKSB7XG5cdCAgICAgIGxldmVsID0gb3B0aW9ucy5oYXNoLmxldmVsO1xuXHQgICAgfSBlbHNlIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5kYXRhLmxldmVsICE9IG51bGwpIHtcblx0ICAgICAgbGV2ZWwgPSBvcHRpb25zLmRhdGEubGV2ZWw7XG5cdCAgICB9XG5cdCAgICBhcmdzWzBdID0gbGV2ZWw7XG5cblx0ICAgIGluc3RhbmNlLmxvZy5hcHBseShpbnN0YW5jZSwgYXJncyk7XG5cdCAgfSk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMjggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcblx0ICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9va3VwJywgZnVuY3Rpb24gKG9iaiwgZmllbGQsIG9wdGlvbnMpIHtcblx0ICAgIGlmICghb2JqKSB7XG5cdCAgICAgIC8vIE5vdGUgZm9yIDUuMDogQ2hhbmdlIHRvIFwib2JqID09IG51bGxcIiBpbiA1LjBcblx0ICAgICAgcmV0dXJuIG9iajtcblx0ICAgIH1cblx0ICAgIHJldHVybiBvcHRpb25zLmxvb2t1cFByb3BlcnR5KG9iaiwgZmllbGQpO1xuXHQgIH0pO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDI5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0dmFyIF9leGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdHZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdCAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3dpdGgnLCBmdW5jdGlvbiAoY29udGV4dCwgb3B0aW9ucykge1xuXHQgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggIT0gMikge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnI3dpdGggcmVxdWlyZXMgZXhhY3RseSBvbmUgYXJndW1lbnQnKTtcblx0ICAgIH1cblx0ICAgIGlmIChfdXRpbHMuaXNGdW5jdGlvbihjb250ZXh0KSkge1xuXHQgICAgICBjb250ZXh0ID0gY29udGV4dC5jYWxsKHRoaXMpO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgZm4gPSBvcHRpb25zLmZuO1xuXG5cdCAgICBpZiAoIV91dGlscy5pc0VtcHR5KGNvbnRleHQpKSB7XG5cdCAgICAgIHZhciBkYXRhID0gb3B0aW9ucy5kYXRhO1xuXHQgICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG5cdCAgICAgICAgZGF0YSA9IF91dGlscy5jcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuXHQgICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBfdXRpbHMuYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSk7XG5cdCAgICAgIH1cblxuXHQgICAgICByZXR1cm4gZm4oY29udGV4dCwge1xuXHQgICAgICAgIGRhdGE6IGRhdGEsXG5cdCAgICAgICAgYmxvY2tQYXJhbXM6IF91dGlscy5ibG9ja1BhcmFtcyhbY29udGV4dF0sIFtkYXRhICYmIGRhdGEuY29udGV4dFBhdGhdKVxuXHQgICAgICB9KTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG5cdCAgICB9XG5cdCAgfSk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMzAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5yZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzID0gcmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycztcblxuXHR2YXIgX2RlY29yYXRvcnNJbmxpbmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMxKTtcblxuXHR2YXIgX2RlY29yYXRvcnNJbmxpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVjb3JhdG9yc0lubGluZSk7XG5cblx0ZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyhpbnN0YW5jZSkge1xuXHQgIF9kZWNvcmF0b3JzSW5saW5lMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcblx0fVxuXG4vKioqLyB9KSxcbi8qIDMxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdCAgaW5zdGFuY2UucmVnaXN0ZXJEZWNvcmF0b3IoJ2lubGluZScsIGZ1bmN0aW9uIChmbiwgcHJvcHMsIGNvbnRhaW5lciwgb3B0aW9ucykge1xuXHQgICAgdmFyIHJldCA9IGZuO1xuXHQgICAgaWYgKCFwcm9wcy5wYXJ0aWFscykge1xuXHQgICAgICBwcm9wcy5wYXJ0aWFscyA9IHt9O1xuXHQgICAgICByZXQgPSBmdW5jdGlvbiAoY29udGV4dCwgb3B0aW9ucykge1xuXHQgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBwYXJ0aWFscyBzdGFjayBmcmFtZSBwcmlvciB0byBleGVjLlxuXHQgICAgICAgIHZhciBvcmlnaW5hbCA9IGNvbnRhaW5lci5wYXJ0aWFscztcblx0ICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBfdXRpbHMuZXh0ZW5kKHt9LCBvcmlnaW5hbCwgcHJvcHMucGFydGlhbHMpO1xuXHQgICAgICAgIHZhciByZXQgPSBmbihjb250ZXh0LCBvcHRpb25zKTtcblx0ICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBvcmlnaW5hbDtcblx0ICAgICAgICByZXR1cm4gcmV0O1xuXHQgICAgICB9O1xuXHQgICAgfVxuXG5cdCAgICBwcm9wcy5wYXJ0aWFsc1tvcHRpb25zLmFyZ3NbMF1dID0gb3B0aW9ucy5mbjtcblxuXHQgICAgcmV0dXJuIHJldDtcblx0ICB9KTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAzMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBsb2dnZXIgPSB7XG5cdCAgbWV0aG9kTWFwOiBbJ2RlYnVnJywgJ2luZm8nLCAnd2FybicsICdlcnJvciddLFxuXHQgIGxldmVsOiAnaW5mbycsXG5cblx0ICAvLyBNYXBzIGEgZ2l2ZW4gbGV2ZWwgdmFsdWUgdG8gdGhlIGBtZXRob2RNYXBgIGluZGV4ZXMgYWJvdmUuXG5cdCAgbG9va3VwTGV2ZWw6IGZ1bmN0aW9uIGxvb2t1cExldmVsKGxldmVsKSB7XG5cdCAgICBpZiAodHlwZW9mIGxldmVsID09PSAnc3RyaW5nJykge1xuXHQgICAgICB2YXIgbGV2ZWxNYXAgPSBfdXRpbHMuaW5kZXhPZihsb2dnZXIubWV0aG9kTWFwLCBsZXZlbC50b0xvd2VyQ2FzZSgpKTtcblx0ICAgICAgaWYgKGxldmVsTWFwID49IDApIHtcblx0ICAgICAgICBsZXZlbCA9IGxldmVsTWFwO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gbGV2ZWw7XG5cdCAgfSxcblxuXHQgIC8vIENhbiBiZSBvdmVycmlkZGVuIGluIHRoZSBob3N0IGVudmlyb25tZW50XG5cdCAgbG9nOiBmdW5jdGlvbiBsb2cobGV2ZWwpIHtcblx0ICAgIGxldmVsID0gbG9nZ2VyLmxvb2t1cExldmVsKGxldmVsKTtcblxuXHQgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBsb2dnZXIubG9va3VwTGV2ZWwobG9nZ2VyLmxldmVsKSA8PSBsZXZlbCkge1xuXHQgICAgICB2YXIgbWV0aG9kID0gbG9nZ2VyLm1ldGhvZE1hcFtsZXZlbF07XG5cdCAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cdCAgICAgIGlmICghY29uc29sZVttZXRob2RdKSB7XG5cdCAgICAgICAgbWV0aG9kID0gJ2xvZyc7XG5cdCAgICAgIH1cblxuXHQgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWVzc2FnZSA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcblx0ICAgICAgICBtZXNzYWdlW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcblx0ICAgICAgfVxuXG5cdCAgICAgIGNvbnNvbGVbbWV0aG9kXS5hcHBseShjb25zb2xlLCBtZXNzYWdlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG5cdCAgICB9XG5cdCAgfVxuXHR9O1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGxvZ2dlcjtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMzMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9PYmplY3QkY3JlYXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNClbJ2RlZmF1bHQnXTtcblxuXHR2YXIgX09iamVjdCRrZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMylbJ2RlZmF1bHQnXTtcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5jcmVhdGVQcm90b0FjY2Vzc0NvbnRyb2wgPSBjcmVhdGVQcm90b0FjY2Vzc0NvbnRyb2w7XG5cdGV4cG9ydHMucmVzdWx0SXNBbGxvd2VkID0gcmVzdWx0SXNBbGxvd2VkO1xuXHRleHBvcnRzLnJlc2V0TG9nZ2VkUHJvcGVydGllcyA9IHJlc2V0TG9nZ2VkUHJvcGVydGllcztcblxuXHR2YXIgX2NyZWF0ZU5ld0xvb2t1cE9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMzYpO1xuXG5cdHZhciBfbG9nZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMik7XG5cblx0dmFyIGxvZ2dlciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9sb2dnZXIpO1xuXG5cdHZhciBsb2dnZWRQcm9wZXJ0aWVzID0gX09iamVjdCRjcmVhdGUobnVsbCk7XG5cblx0ZnVuY3Rpb24gY3JlYXRlUHJvdG9BY2Nlc3NDb250cm9sKHJ1bnRpbWVPcHRpb25zKSB7XG5cdCAgdmFyIGRlZmF1bHRNZXRob2RXaGl0ZUxpc3QgPSBfT2JqZWN0JGNyZWF0ZShudWxsKTtcblx0ICBkZWZhdWx0TWV0aG9kV2hpdGVMaXN0Wydjb25zdHJ1Y3RvciddID0gZmFsc2U7XG5cdCAgZGVmYXVsdE1ldGhvZFdoaXRlTGlzdFsnX19kZWZpbmVHZXR0ZXJfXyddID0gZmFsc2U7XG5cdCAgZGVmYXVsdE1ldGhvZFdoaXRlTGlzdFsnX19kZWZpbmVTZXR0ZXJfXyddID0gZmFsc2U7XG5cdCAgZGVmYXVsdE1ldGhvZFdoaXRlTGlzdFsnX19sb29rdXBHZXR0ZXJfXyddID0gZmFsc2U7XG5cblx0ICB2YXIgZGVmYXVsdFByb3BlcnR5V2hpdGVMaXN0ID0gX09iamVjdCRjcmVhdGUobnVsbCk7XG5cdCAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvXG5cdCAgZGVmYXVsdFByb3BlcnR5V2hpdGVMaXN0WydfX3Byb3RvX18nXSA9IGZhbHNlO1xuXG5cdCAgcmV0dXJuIHtcblx0ICAgIHByb3BlcnRpZXM6IHtcblx0ICAgICAgd2hpdGVsaXN0OiBfY3JlYXRlTmV3TG9va3VwT2JqZWN0LmNyZWF0ZU5ld0xvb2t1cE9iamVjdChkZWZhdWx0UHJvcGVydHlXaGl0ZUxpc3QsIHJ1bnRpbWVPcHRpb25zLmFsbG93ZWRQcm90b1Byb3BlcnRpZXMpLFxuXHQgICAgICBkZWZhdWx0VmFsdWU6IHJ1bnRpbWVPcHRpb25zLmFsbG93UHJvdG9Qcm9wZXJ0aWVzQnlEZWZhdWx0XG5cdCAgICB9LFxuXHQgICAgbWV0aG9kczoge1xuXHQgICAgICB3aGl0ZWxpc3Q6IF9jcmVhdGVOZXdMb29rdXBPYmplY3QuY3JlYXRlTmV3TG9va3VwT2JqZWN0KGRlZmF1bHRNZXRob2RXaGl0ZUxpc3QsIHJ1bnRpbWVPcHRpb25zLmFsbG93ZWRQcm90b01ldGhvZHMpLFxuXHQgICAgICBkZWZhdWx0VmFsdWU6IHJ1bnRpbWVPcHRpb25zLmFsbG93UHJvdG9NZXRob2RzQnlEZWZhdWx0XG5cdCAgICB9XG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlc3VsdElzQWxsb3dlZChyZXN1bHQsIHByb3RvQWNjZXNzQ29udHJvbCwgcHJvcGVydHlOYW1lKSB7XG5cdCAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdmdW5jdGlvbicpIHtcblx0ICAgIHJldHVybiBjaGVja1doaXRlTGlzdChwcm90b0FjY2Vzc0NvbnRyb2wubWV0aG9kcywgcHJvcGVydHlOYW1lKTtcblx0ICB9IGVsc2Uge1xuXHQgICAgcmV0dXJuIGNoZWNrV2hpdGVMaXN0KHByb3RvQWNjZXNzQ29udHJvbC5wcm9wZXJ0aWVzLCBwcm9wZXJ0eU5hbWUpO1xuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIGNoZWNrV2hpdGVMaXN0KHByb3RvQWNjZXNzQ29udHJvbEZvclR5cGUsIHByb3BlcnR5TmFtZSkge1xuXHQgIGlmIChwcm90b0FjY2Vzc0NvbnRyb2xGb3JUeXBlLndoaXRlbGlzdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQpIHtcblx0ICAgIHJldHVybiBwcm90b0FjY2Vzc0NvbnRyb2xGb3JUeXBlLndoaXRlbGlzdFtwcm9wZXJ0eU5hbWVdID09PSB0cnVlO1xuXHQgIH1cblx0ICBpZiAocHJvdG9BY2Nlc3NDb250cm9sRm9yVHlwZS5kZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHQgICAgcmV0dXJuIHByb3RvQWNjZXNzQ29udHJvbEZvclR5cGUuZGVmYXVsdFZhbHVlO1xuXHQgIH1cblx0ICBsb2dVbmV4cGVjZWRQcm9wZXJ0eUFjY2Vzc09uY2UocHJvcGVydHlOYW1lKTtcblx0ICByZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRmdW5jdGlvbiBsb2dVbmV4cGVjZWRQcm9wZXJ0eUFjY2Vzc09uY2UocHJvcGVydHlOYW1lKSB7XG5cdCAgaWYgKGxvZ2dlZFByb3BlcnRpZXNbcHJvcGVydHlOYW1lXSAhPT0gdHJ1ZSkge1xuXHQgICAgbG9nZ2VkUHJvcGVydGllc1twcm9wZXJ0eU5hbWVdID0gdHJ1ZTtcblx0ICAgIGxvZ2dlci5sb2coJ2Vycm9yJywgJ0hhbmRsZWJhcnM6IEFjY2VzcyBoYXMgYmVlbiBkZW5pZWQgdG8gcmVzb2x2ZSB0aGUgcHJvcGVydHkgXCInICsgcHJvcGVydHlOYW1lICsgJ1wiIGJlY2F1c2UgaXQgaXMgbm90IGFuIFwib3duIHByb3BlcnR5XCIgb2YgaXRzIHBhcmVudC5cXG4nICsgJ1lvdSBjYW4gYWRkIGEgcnVudGltZSBvcHRpb24gdG8gZGlzYWJsZSB0aGUgY2hlY2sgb3IgdGhpcyB3YXJuaW5nOlxcbicgKyAnU2VlIGh0dHBzOi8vaGFuZGxlYmFyc2pzLmNvbS9hcGktcmVmZXJlbmNlL3J1bnRpbWUtb3B0aW9ucy5odG1sI29wdGlvbnMtdG8tY29udHJvbC1wcm90b3R5cGUtYWNjZXNzIGZvciBkZXRhaWxzJyk7XG5cdCAgfVxuXHR9XG5cblx0ZnVuY3Rpb24gcmVzZXRMb2dnZWRQcm9wZXJ0aWVzKCkge1xuXHQgIF9PYmplY3Qka2V5cyhsb2dnZWRQcm9wZXJ0aWVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eU5hbWUpIHtcblx0ICAgIGRlbGV0ZSBsb2dnZWRQcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG5cdCAgfSk7XG5cdH1cblxuLyoqKi8gfSksXG4vKiAzNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogX193ZWJwYWNrX3JlcXVpcmVfXygzNSksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuLyoqKi8gfSksXG4vKiAzNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciAkID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCl7XG5cdCAgcmV0dXJuICQuY3JlYXRlKFAsIEQpO1xuXHR9O1xuXG4vKioqLyB9KSxcbi8qIDM2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfT2JqZWN0JGNyZWF0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oMzQpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5jcmVhdGVOZXdMb29rdXBPYmplY3QgPSBjcmVhdGVOZXdMb29rdXBPYmplY3Q7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIG5ldyBvYmplY3Qgd2l0aCBcIm51bGxcIi1wcm90b3R5cGUgdG8gYXZvaWQgdHJ1dGh5IHJlc3VsdHMgb24gcHJvdG90eXBlIHByb3BlcnRpZXMuXG5cdCAqIFRoZSByZXN1bHRpbmcgb2JqZWN0IGNhbiBiZSB1c2VkIHdpdGggXCJvYmplY3RbcHJvcGVydHldXCIgdG8gY2hlY2sgaWYgYSBwcm9wZXJ0eSBleGlzdHNcblx0ICogQHBhcmFtIHsuLi5vYmplY3R9IHNvdXJjZXMgYSB2YXJhcmdzIHBhcmFtZXRlciBvZiBzb3VyY2Ugb2JqZWN0cyB0aGF0IHdpbGwgYmUgbWVyZ2VkXG5cdCAqIEByZXR1cm5zIHtvYmplY3R9XG5cdCAqL1xuXG5cdGZ1bmN0aW9uIGNyZWF0ZU5ld0xvb2t1cE9iamVjdCgpIHtcblx0ICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgc291cmNlcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuXHQgICAgc291cmNlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcblx0ICB9XG5cblx0ICByZXR1cm4gX3V0aWxzLmV4dGVuZC5hcHBseSh1bmRlZmluZWQsIFtfT2JqZWN0JGNyZWF0ZShudWxsKV0uY29uY2F0KHNvdXJjZXMpKTtcblx0fVxuXG4vKioqLyB9KSxcbi8qIDM3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0Ly8gQnVpbGQgb3V0IG91ciBiYXNpYyBTYWZlU3RyaW5nIHR5cGVcblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGZ1bmN0aW9uIFNhZmVTdHJpbmcoc3RyaW5nKSB7XG5cdCAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG5cdH1cblxuXHRTYWZlU3RyaW5nLnByb3RvdHlwZS50b1N0cmluZyA9IFNhZmVTdHJpbmcucHJvdG90eXBlLnRvSFRNTCA9IGZ1bmN0aW9uICgpIHtcblx0ICByZXR1cm4gJycgKyB0aGlzLnN0cmluZztcblx0fTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTYWZlU3RyaW5nO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAzOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX09iamVjdCRzZWFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOSlbJ2RlZmF1bHQnXTtcblxuXHR2YXIgX09iamVjdCRrZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMylbJ2RlZmF1bHQnXTtcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpWydkZWZhdWx0J107XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5jaGVja1JldmlzaW9uID0gY2hlY2tSZXZpc2lvbjtcblx0ZXhwb3J0cy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXHRleHBvcnRzLndyYXBQcm9ncmFtID0gd3JhcFByb2dyYW07XG5cdGV4cG9ydHMucmVzb2x2ZVBhcnRpYWwgPSByZXNvbHZlUGFydGlhbDtcblx0ZXhwb3J0cy5pbnZva2VQYXJ0aWFsID0gaW52b2tlUGFydGlhbDtcblx0ZXhwb3J0cy5ub29wID0gbm9vcDtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHR2YXIgVXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbHMpO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdHZhciBfYmFzZSA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cblx0dmFyIF9oZWxwZXJzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cblx0dmFyIF9pbnRlcm5hbFdyYXBIZWxwZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQzKTtcblxuXHR2YXIgX2ludGVybmFsUHJvdG9BY2Nlc3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMzKTtcblxuXHRmdW5jdGlvbiBjaGVja1JldmlzaW9uKGNvbXBpbGVySW5mbykge1xuXHQgIHZhciBjb21waWxlclJldmlzaW9uID0gY29tcGlsZXJJbmZvICYmIGNvbXBpbGVySW5mb1swXSB8fCAxLFxuXHQgICAgICBjdXJyZW50UmV2aXNpb24gPSBfYmFzZS5DT01QSUxFUl9SRVZJU0lPTjtcblxuXHQgIGlmIChjb21waWxlclJldmlzaW9uID49IF9iYXNlLkxBU1RfQ09NUEFUSUJMRV9DT01QSUxFUl9SRVZJU0lPTiAmJiBjb21waWxlclJldmlzaW9uIDw9IF9iYXNlLkNPTVBJTEVSX1JFVklTSU9OKSB7XG5cdCAgICByZXR1cm47XG5cdCAgfVxuXG5cdCAgaWYgKGNvbXBpbGVyUmV2aXNpb24gPCBfYmFzZS5MQVNUX0NPTVBBVElCTEVfQ09NUElMRVJfUkVWSVNJT04pIHtcblx0ICAgIHZhciBydW50aW1lVmVyc2lvbnMgPSBfYmFzZS5SRVZJU0lPTl9DSEFOR0VTW2N1cnJlbnRSZXZpc2lvbl0sXG5cdCAgICAgICAgY29tcGlsZXJWZXJzaW9ucyA9IF9iYXNlLlJFVklTSU9OX0NIQU5HRVNbY29tcGlsZXJSZXZpc2lvbl07XG5cdCAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVGVtcGxhdGUgd2FzIHByZWNvbXBpbGVkIHdpdGggYW4gb2xkZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArICdQbGVhc2UgdXBkYXRlIHlvdXIgcHJlY29tcGlsZXIgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgcnVudGltZVZlcnNpb25zICsgJykgb3IgZG93bmdyYWRlIHlvdXIgcnVudGltZSB0byBhbiBvbGRlciB2ZXJzaW9uICgnICsgY29tcGlsZXJWZXJzaW9ucyArICcpLicpO1xuXHQgIH0gZWxzZSB7XG5cdCAgICAvLyBVc2UgdGhlIGVtYmVkZGVkIHZlcnNpb24gaW5mbyBzaW5jZSB0aGUgcnVudGltZSBkb2Vzbid0IGtub3cgYWJvdXQgdGhpcyByZXZpc2lvbiB5ZXRcblx0ICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhIG5ld2VyIHZlcnNpb24gb2YgSGFuZGxlYmFycyB0aGFuIHRoZSBjdXJyZW50IHJ1bnRpbWUuICcgKyAnUGxlYXNlIHVwZGF0ZSB5b3VyIHJ1bnRpbWUgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgY29tcGlsZXJJbmZvWzFdICsgJykuJyk7XG5cdCAgfVxuXHR9XG5cblx0ZnVuY3Rpb24gdGVtcGxhdGUodGVtcGxhdGVTcGVjLCBlbnYpIHtcblx0ICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHQgIGlmICghZW52KSB7XG5cdCAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnTm8gZW52aXJvbm1lbnQgcGFzc2VkIHRvIHRlbXBsYXRlJyk7XG5cdCAgfVxuXHQgIGlmICghdGVtcGxhdGVTcGVjIHx8ICF0ZW1wbGF0ZVNwZWMubWFpbikge1xuXHQgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1Vua25vd24gdGVtcGxhdGUgb2JqZWN0OiAnICsgdHlwZW9mIHRlbXBsYXRlU3BlYyk7XG5cdCAgfVxuXG5cdCAgdGVtcGxhdGVTcGVjLm1haW4uZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjLm1haW5fZDtcblxuXHQgIC8vIE5vdGU6IFVzaW5nIGVudi5WTSByZWZlcmVuY2VzIHJhdGhlciB0aGFuIGxvY2FsIHZhciByZWZlcmVuY2VzIHRocm91Z2hvdXQgdGhpcyBzZWN0aW9uIHRvIGFsbG93XG5cdCAgLy8gZm9yIGV4dGVybmFsIHVzZXJzIHRvIG92ZXJyaWRlIHRoZXNlIGFzIHBzZXVkby1zdXBwb3J0ZWQgQVBJcy5cblx0ICBlbnYuVk0uY2hlY2tSZXZpc2lvbih0ZW1wbGF0ZVNwZWMuY29tcGlsZXIpO1xuXG5cdCAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZm9yIHByZWNvbXBpbGVkIHRlbXBsYXRlcyB3aXRoIGNvbXBpbGVyLXZlcnNpb24gNyAoPDQuMy4wKVxuXHQgIHZhciB0ZW1wbGF0ZVdhc1ByZWNvbXBpbGVkV2l0aENvbXBpbGVyVjcgPSB0ZW1wbGF0ZVNwZWMuY29tcGlsZXIgJiYgdGVtcGxhdGVTcGVjLmNvbXBpbGVyWzBdID09PSA3O1xuXG5cdCAgZnVuY3Rpb24gaW52b2tlUGFydGlhbFdyYXBwZXIocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuXHQgICAgaWYgKG9wdGlvbnMuaGFzaCkge1xuXHQgICAgICBjb250ZXh0ID0gVXRpbHMuZXh0ZW5kKHt9LCBjb250ZXh0LCBvcHRpb25zLmhhc2gpO1xuXHQgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcblx0ICAgICAgICBvcHRpb25zLmlkc1swXSA9IHRydWU7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICAgIHBhcnRpYWwgPSBlbnYuVk0ucmVzb2x2ZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcblxuXHQgICAgdmFyIGV4dGVuZGVkT3B0aW9ucyA9IFV0aWxzLmV4dGVuZCh7fSwgb3B0aW9ucywge1xuXHQgICAgICBob29rczogdGhpcy5ob29rcyxcblx0ICAgICAgcHJvdG9BY2Nlc3NDb250cm9sOiB0aGlzLnByb3RvQWNjZXNzQ29udHJvbFxuXHQgICAgfSk7XG5cblx0ICAgIHZhciByZXN1bHQgPSBlbnYuVk0uaW52b2tlUGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwsIGNvbnRleHQsIGV4dGVuZGVkT3B0aW9ucyk7XG5cblx0ICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiBlbnYuY29tcGlsZSkge1xuXHQgICAgICBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV0gPSBlbnYuY29tcGlsZShwYXJ0aWFsLCB0ZW1wbGF0ZVNwZWMuY29tcGlsZXJPcHRpb25zLCBlbnYpO1xuXHQgICAgICByZXN1bHQgPSBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV0oY29udGV4dCwgZXh0ZW5kZWRPcHRpb25zKTtcblx0ICAgIH1cblx0ICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuXHQgICAgICBpZiAob3B0aW9ucy5pbmRlbnQpIHtcblx0ICAgICAgICB2YXIgbGluZXMgPSByZXN1bHQuc3BsaXQoJ1xcbicpO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGluZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICAgICAgICBpZiAoIWxpbmVzW2ldICYmIGkgKyAxID09PSBsKSB7XG5cdCAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgfVxuXG5cdCAgICAgICAgICBsaW5lc1tpXSA9IG9wdGlvbnMuaW5kZW50ICsgbGluZXNbaV07XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJlc3VsdCA9IGxpbmVzLmpvaW4oJ1xcbicpO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVGhlIHBhcnRpYWwgJyArIG9wdGlvbnMubmFtZSArICcgY291bGQgbm90IGJlIGNvbXBpbGVkIHdoZW4gcnVubmluZyBpbiBydW50aW1lLW9ubHkgbW9kZScpO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIC8vIEp1c3QgYWRkIHdhdGVyXG5cdCAgdmFyIGNvbnRhaW5lciA9IHtcblx0ICAgIHN0cmljdDogZnVuY3Rpb24gc3RyaWN0KG9iaiwgbmFtZSwgbG9jKSB7XG5cdCAgICAgIGlmICghb2JqIHx8ICEobmFtZSBpbiBvYmopKSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1wiJyArIG5hbWUgKyAnXCIgbm90IGRlZmluZWQgaW4gJyArIG9iaiwge1xuXHQgICAgICAgICAgbG9jOiBsb2Ncblx0ICAgICAgICB9KTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5KG9iaiwgbmFtZSk7XG5cdCAgICB9LFxuXHQgICAgbG9va3VwUHJvcGVydHk6IGZ1bmN0aW9uIGxvb2t1cFByb3BlcnR5KHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG5cdCAgICAgIHZhciByZXN1bHQgPSBwYXJlbnRbcHJvcGVydHlOYW1lXTtcblx0ICAgICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XG5cdCAgICAgICAgcmV0dXJuIHJlc3VsdDtcblx0ICAgICAgfVxuXHQgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuXHQgICAgICAgIHJldHVybiByZXN1bHQ7XG5cdCAgICAgIH1cblxuXHQgICAgICBpZiAoX2ludGVybmFsUHJvdG9BY2Nlc3MucmVzdWx0SXNBbGxvd2VkKHJlc3VsdCwgY29udGFpbmVyLnByb3RvQWNjZXNzQ29udHJvbCwgcHJvcGVydHlOYW1lKSkge1xuXHQgICAgICAgIHJldHVybiByZXN1bHQ7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblx0ICAgIH0sXG5cdCAgICBsb29rdXA6IGZ1bmN0aW9uIGxvb2t1cChkZXB0aHMsIG5hbWUpIHtcblx0ICAgICAgdmFyIGxlbiA9IGRlcHRocy5sZW5ndGg7XG5cdCAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgICB2YXIgcmVzdWx0ID0gZGVwdGhzW2ldICYmIGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eShkZXB0aHNbaV0sIG5hbWUpO1xuXHQgICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuXHQgICAgICAgICAgcmV0dXJuIGRlcHRoc1tpXVtuYW1lXTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH0sXG5cdCAgICBsYW1iZGE6IGZ1bmN0aW9uIGxhbWJkYShjdXJyZW50LCBjb250ZXh0KSB7XG5cdCAgICAgIHJldHVybiB0eXBlb2YgY3VycmVudCA9PT0gJ2Z1bmN0aW9uJyA/IGN1cnJlbnQuY2FsbChjb250ZXh0KSA6IGN1cnJlbnQ7XG5cdCAgICB9LFxuXG5cdCAgICBlc2NhcGVFeHByZXNzaW9uOiBVdGlscy5lc2NhcGVFeHByZXNzaW9uLFxuXHQgICAgaW52b2tlUGFydGlhbDogaW52b2tlUGFydGlhbFdyYXBwZXIsXG5cblx0ICAgIGZuOiBmdW5jdGlvbiBmbihpKSB7XG5cdCAgICAgIHZhciByZXQgPSB0ZW1wbGF0ZVNwZWNbaV07XG5cdCAgICAgIHJldC5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWNbaSArICdfZCddO1xuXHQgICAgICByZXR1cm4gcmV0O1xuXHQgICAgfSxcblxuXHQgICAgcHJvZ3JhbXM6IFtdLFxuXHQgICAgcHJvZ3JhbTogZnVuY3Rpb24gcHJvZ3JhbShpLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG5cdCAgICAgIHZhciBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0sXG5cdCAgICAgICAgICBmbiA9IHRoaXMuZm4oaSk7XG5cdCAgICAgIGlmIChkYXRhIHx8IGRlcHRocyB8fCBibG9ja1BhcmFtcyB8fCBkZWNsYXJlZEJsb2NrUGFyYW1zKSB7XG5cdCAgICAgICAgcHJvZ3JhbVdyYXBwZXIgPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbiwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG5cdCAgICAgIH0gZWxzZSBpZiAoIXByb2dyYW1XcmFwcGVyKSB7XG5cdCAgICAgICAgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldID0gd3JhcFByb2dyYW0odGhpcywgaSwgZm4pO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBwcm9ncmFtV3JhcHBlcjtcblx0ICAgIH0sXG5cblx0ICAgIGRhdGE6IGZ1bmN0aW9uIGRhdGEodmFsdWUsIGRlcHRoKSB7XG5cdCAgICAgIHdoaWxlICh2YWx1ZSAmJiBkZXB0aC0tKSB7XG5cdCAgICAgICAgdmFsdWUgPSB2YWx1ZS5fcGFyZW50O1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiB2YWx1ZTtcblx0ICAgIH0sXG5cdCAgICBtZXJnZUlmTmVlZGVkOiBmdW5jdGlvbiBtZXJnZUlmTmVlZGVkKHBhcmFtLCBjb21tb24pIHtcblx0ICAgICAgdmFyIG9iaiA9IHBhcmFtIHx8IGNvbW1vbjtcblxuXHQgICAgICBpZiAocGFyYW0gJiYgY29tbW9uICYmIHBhcmFtICE9PSBjb21tb24pIHtcblx0ICAgICAgICBvYmogPSBVdGlscy5leHRlbmQoe30sIGNvbW1vbiwgcGFyYW0pO1xuXHQgICAgICB9XG5cblx0ICAgICAgcmV0dXJuIG9iajtcblx0ICAgIH0sXG5cdCAgICAvLyBBbiBlbXB0eSBvYmplY3QgdG8gdXNlIGFzIHJlcGxhY2VtZW50IGZvciBudWxsLWNvbnRleHRzXG5cdCAgICBudWxsQ29udGV4dDogX09iamVjdCRzZWFsKHt9KSxcblxuXHQgICAgbm9vcDogZW52LlZNLm5vb3AsXG5cdCAgICBjb21waWxlckluZm86IHRlbXBsYXRlU3BlYy5jb21waWxlclxuXHQgIH07XG5cblx0ICBmdW5jdGlvbiByZXQoY29udGV4dCkge1xuXHQgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuXHQgICAgdmFyIGRhdGEgPSBvcHRpb25zLmRhdGE7XG5cblx0ICAgIHJldC5fc2V0dXAob3B0aW9ucyk7XG5cdCAgICBpZiAoIW9wdGlvbnMucGFydGlhbCAmJiB0ZW1wbGF0ZVNwZWMudXNlRGF0YSkge1xuXHQgICAgICBkYXRhID0gaW5pdERhdGEoY29udGV4dCwgZGF0YSk7XG5cdCAgICB9XG5cdCAgICB2YXIgZGVwdGhzID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIGJsb2NrUGFyYW1zID0gdGVtcGxhdGVTcGVjLnVzZUJsb2NrUGFyYW1zID8gW10gOiB1bmRlZmluZWQ7XG5cdCAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocykge1xuXHQgICAgICBpZiAob3B0aW9ucy5kZXB0aHMpIHtcblx0ICAgICAgICBkZXB0aHMgPSBjb250ZXh0ICE9IG9wdGlvbnMuZGVwdGhzWzBdID8gW2NvbnRleHRdLmNvbmNhdChvcHRpb25zLmRlcHRocykgOiBvcHRpb25zLmRlcHRocztcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBkZXB0aHMgPSBbY29udGV4dF07XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gbWFpbihjb250ZXh0IC8qLCBvcHRpb25zKi8pIHtcblx0ICAgICAgcmV0dXJuICcnICsgdGVtcGxhdGVTcGVjLm1haW4oY29udGFpbmVyLCBjb250ZXh0LCBjb250YWluZXIuaGVscGVycywgY29udGFpbmVyLnBhcnRpYWxzLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcblx0ICAgIH1cblxuXHQgICAgbWFpbiA9IGV4ZWN1dGVEZWNvcmF0b3JzKHRlbXBsYXRlU3BlYy5tYWluLCBtYWluLCBjb250YWluZXIsIG9wdGlvbnMuZGVwdGhzIHx8IFtdLCBkYXRhLCBibG9ja1BhcmFtcyk7XG5cdCAgICByZXR1cm4gbWFpbihjb250ZXh0LCBvcHRpb25zKTtcblx0ICB9XG5cblx0ICByZXQuaXNUb3AgPSB0cnVlO1xuXG5cdCAgcmV0Ll9zZXR1cCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdCAgICBpZiAoIW9wdGlvbnMucGFydGlhbCkge1xuXHQgICAgICB2YXIgbWVyZ2VkSGVscGVycyA9IFV0aWxzLmV4dGVuZCh7fSwgZW52LmhlbHBlcnMsIG9wdGlvbnMuaGVscGVycyk7XG5cdCAgICAgIHdyYXBIZWxwZXJzVG9QYXNzTG9va3VwUHJvcGVydHkobWVyZ2VkSGVscGVycywgY29udGFpbmVyKTtcblx0ICAgICAgY29udGFpbmVyLmhlbHBlcnMgPSBtZXJnZWRIZWxwZXJzO1xuXG5cdCAgICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlUGFydGlhbCkge1xuXHQgICAgICAgIC8vIFVzZSBtZXJnZUlmTmVlZGVkIGhlcmUgdG8gcHJldmVudCBjb21waWxpbmcgZ2xvYmFsIHBhcnRpYWxzIG11bHRpcGxlIHRpbWVzXG5cdCAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gY29udGFpbmVyLm1lcmdlSWZOZWVkZWQob3B0aW9ucy5wYXJ0aWFscywgZW52LnBhcnRpYWxzKTtcblx0ICAgICAgfVxuXHQgICAgICBpZiAodGVtcGxhdGVTcGVjLnVzZVBhcnRpYWwgfHwgdGVtcGxhdGVTcGVjLnVzZURlY29yYXRvcnMpIHtcblx0ICAgICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IFV0aWxzLmV4dGVuZCh7fSwgZW52LmRlY29yYXRvcnMsIG9wdGlvbnMuZGVjb3JhdG9ycyk7XG5cdCAgICAgIH1cblxuXHQgICAgICBjb250YWluZXIuaG9va3MgPSB7fTtcblx0ICAgICAgY29udGFpbmVyLnByb3RvQWNjZXNzQ29udHJvbCA9IF9pbnRlcm5hbFByb3RvQWNjZXNzLmNyZWF0ZVByb3RvQWNjZXNzQ29udHJvbChvcHRpb25zKTtcblxuXHQgICAgICB2YXIga2VlcEhlbHBlckluSGVscGVycyA9IG9wdGlvbnMuYWxsb3dDYWxsc1RvSGVscGVyTWlzc2luZyB8fCB0ZW1wbGF0ZVdhc1ByZWNvbXBpbGVkV2l0aENvbXBpbGVyVjc7XG5cdCAgICAgIF9oZWxwZXJzLm1vdmVIZWxwZXJUb0hvb2tzKGNvbnRhaW5lciwgJ2hlbHBlck1pc3NpbmcnLCBrZWVwSGVscGVySW5IZWxwZXJzKTtcblx0ICAgICAgX2hlbHBlcnMubW92ZUhlbHBlclRvSG9va3MoY29udGFpbmVyLCAnYmxvY2tIZWxwZXJNaXNzaW5nJywga2VlcEhlbHBlckluSGVscGVycyk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBjb250YWluZXIucHJvdG9BY2Nlc3NDb250cm9sID0gb3B0aW9ucy5wcm90b0FjY2Vzc0NvbnRyb2w7IC8vIGludGVybmFsIG9wdGlvblxuXHQgICAgICBjb250YWluZXIuaGVscGVycyA9IG9wdGlvbnMuaGVscGVycztcblx0ICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3B0aW9ucy5wYXJ0aWFscztcblx0ICAgICAgY29udGFpbmVyLmRlY29yYXRvcnMgPSBvcHRpb25zLmRlY29yYXRvcnM7XG5cdCAgICAgIGNvbnRhaW5lci5ob29rcyA9IG9wdGlvbnMuaG9va3M7XG5cdCAgICB9XG5cdCAgfTtcblxuXHQgIHJldC5fY2hpbGQgPSBmdW5jdGlvbiAoaSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuXHQgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VCbG9ja1BhcmFtcyAmJiAhYmxvY2tQYXJhbXMpIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ211c3QgcGFzcyBibG9jayBwYXJhbXMnKTtcblx0ICAgIH1cblx0ICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlRGVwdGhzICYmICFkZXB0aHMpIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ211c3QgcGFzcyBwYXJlbnQgZGVwdGhzJyk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIHRlbXBsYXRlU3BlY1tpXSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG5cdCAgfTtcblx0ICByZXR1cm4gcmV0O1xuXHR9XG5cblx0ZnVuY3Rpb24gd3JhcFByb2dyYW0oY29udGFpbmVyLCBpLCBmbiwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuXHQgIGZ1bmN0aW9uIHByb2coY29udGV4dCkge1xuXHQgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuXHQgICAgdmFyIGN1cnJlbnREZXB0aHMgPSBkZXB0aHM7XG5cdCAgICBpZiAoZGVwdGhzICYmIGNvbnRleHQgIT0gZGVwdGhzWzBdICYmICEoY29udGV4dCA9PT0gY29udGFpbmVyLm51bGxDb250ZXh0ICYmIGRlcHRoc1swXSA9PT0gbnVsbCkpIHtcblx0ICAgICAgY3VycmVudERlcHRocyA9IFtjb250ZXh0XS5jb25jYXQoZGVwdGhzKTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIGZuKGNvbnRhaW5lciwgY29udGV4dCwgY29udGFpbmVyLmhlbHBlcnMsIGNvbnRhaW5lci5wYXJ0aWFscywgb3B0aW9ucy5kYXRhIHx8IGRhdGEsIGJsb2NrUGFyYW1zICYmIFtvcHRpb25zLmJsb2NrUGFyYW1zXS5jb25jYXQoYmxvY2tQYXJhbXMpLCBjdXJyZW50RGVwdGhzKTtcblx0ICB9XG5cblx0ICBwcm9nID0gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcyk7XG5cblx0ICBwcm9nLnByb2dyYW0gPSBpO1xuXHQgIHByb2cuZGVwdGggPSBkZXB0aHMgPyBkZXB0aHMubGVuZ3RoIDogMDtcblx0ICBwcm9nLmJsb2NrUGFyYW1zID0gZGVjbGFyZWRCbG9ja1BhcmFtcyB8fCAwO1xuXHQgIHJldHVybiBwcm9nO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoaXMgaXMgY3VycmVudGx5IHBhcnQgb2YgdGhlIG9mZmljaWFsIEFQSSwgdGhlcmVmb3JlIGltcGxlbWVudGF0aW9uIGRldGFpbHMgc2hvdWxkIG5vdCBiZSBjaGFuZ2VkLlxuXHQgKi9cblxuXHRmdW5jdGlvbiByZXNvbHZlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG5cdCAgaWYgKCFwYXJ0aWFsKSB7XG5cdCAgICBpZiAob3B0aW9ucy5uYW1lID09PSAnQHBhcnRpYWwtYmxvY2snKSB7XG5cdCAgICAgIHBhcnRpYWwgPSBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV07XG5cdCAgICB9XG5cdCAgfSBlbHNlIGlmICghcGFydGlhbC5jYWxsICYmICFvcHRpb25zLm5hbWUpIHtcblx0ICAgIC8vIFRoaXMgaXMgYSBkeW5hbWljIHBhcnRpYWwgdGhhdCByZXR1cm5lZCBhIHN0cmluZ1xuXHQgICAgb3B0aW9ucy5uYW1lID0gcGFydGlhbDtcblx0ICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW3BhcnRpYWxdO1xuXHQgIH1cblx0ICByZXR1cm4gcGFydGlhbDtcblx0fVxuXG5cdGZ1bmN0aW9uIGludm9rZVBhcnRpYWwocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuXHQgIC8vIFVzZSB0aGUgY3VycmVudCBjbG9zdXJlIGNvbnRleHQgdG8gc2F2ZSB0aGUgcGFydGlhbC1ibG9jayBpZiB0aGlzIHBhcnRpYWxcblx0ICB2YXIgY3VycmVudFBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcblx0ICBvcHRpb25zLnBhcnRpYWwgPSB0cnVlO1xuXHQgIGlmIChvcHRpb25zLmlkcykge1xuXHQgICAgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoID0gb3B0aW9ucy5pZHNbMF0gfHwgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoO1xuXHQgIH1cblxuXHQgIHZhciBwYXJ0aWFsQmxvY2sgPSB1bmRlZmluZWQ7XG5cdCAgaWYgKG9wdGlvbnMuZm4gJiYgb3B0aW9ucy5mbiAhPT0gbm9vcCkge1xuXHQgICAgKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgb3B0aW9ucy5kYXRhID0gX2Jhc2UuY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcblx0ICAgICAgLy8gV3JhcHBlciBmdW5jdGlvbiB0byBnZXQgYWNjZXNzIHRvIGN1cnJlbnRQYXJ0aWFsQmxvY2sgZnJvbSB0aGUgY2xvc3VyZVxuXHQgICAgICB2YXIgZm4gPSBvcHRpb25zLmZuO1xuXHQgICAgICBwYXJ0aWFsQmxvY2sgPSBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IGZ1bmN0aW9uIHBhcnRpYWxCbG9ja1dyYXBwZXIoY29udGV4dCkge1xuXHQgICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cblx0ICAgICAgICAvLyBSZXN0b3JlIHRoZSBwYXJ0aWFsLWJsb2NrIGZyb20gdGhlIGNsb3N1cmUgZm9yIHRoZSBleGVjdXRpb24gb2YgdGhlIGJsb2NrXG5cdCAgICAgICAgLy8gaS5lLiB0aGUgcGFydCBpbnNpZGUgdGhlIGJsb2NrIG9mIHRoZSBwYXJ0aWFsIGNhbGwuXG5cdCAgICAgICAgb3B0aW9ucy5kYXRhID0gX2Jhc2UuY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcblx0ICAgICAgICBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IGN1cnJlbnRQYXJ0aWFsQmxvY2s7XG5cdCAgICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuXHQgICAgICB9O1xuXHQgICAgICBpZiAoZm4ucGFydGlhbHMpIHtcblx0ICAgICAgICBvcHRpb25zLnBhcnRpYWxzID0gVXRpbHMuZXh0ZW5kKHt9LCBvcHRpb25zLnBhcnRpYWxzLCBmbi5wYXJ0aWFscyk7XG5cdCAgICAgIH1cblx0ICAgIH0pKCk7XG5cdCAgfVxuXG5cdCAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCAmJiBwYXJ0aWFsQmxvY2spIHtcblx0ICAgIHBhcnRpYWwgPSBwYXJ0aWFsQmxvY2s7XG5cdCAgfVxuXG5cdCAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCkge1xuXHQgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1RoZSBwYXJ0aWFsICcgKyBvcHRpb25zLm5hbWUgKyAnIGNvdWxkIG5vdCBiZSBmb3VuZCcpO1xuXHQgIH0gZWxzZSBpZiAocGFydGlhbCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG5cdCAgICByZXR1cm4gcGFydGlhbChjb250ZXh0LCBvcHRpb25zKTtcblx0ICB9XG5cdH1cblxuXHRmdW5jdGlvbiBub29wKCkge1xuXHQgIHJldHVybiAnJztcblx0fVxuXG5cdGZ1bmN0aW9uIGluaXREYXRhKGNvbnRleHQsIGRhdGEpIHtcblx0ICBpZiAoIWRhdGEgfHwgISgncm9vdCcgaW4gZGF0YSkpIHtcblx0ICAgIGRhdGEgPSBkYXRhID8gX2Jhc2UuY3JlYXRlRnJhbWUoZGF0YSkgOiB7fTtcblx0ICAgIGRhdGEucm9vdCA9IGNvbnRleHQ7XG5cdCAgfVxuXHQgIHJldHVybiBkYXRhO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcykge1xuXHQgIGlmIChmbi5kZWNvcmF0b3IpIHtcblx0ICAgIHZhciBwcm9wcyA9IHt9O1xuXHQgICAgcHJvZyA9IGZuLmRlY29yYXRvcihwcm9nLCBwcm9wcywgY29udGFpbmVyLCBkZXB0aHMgJiYgZGVwdGhzWzBdLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcblx0ICAgIFV0aWxzLmV4dGVuZChwcm9nLCBwcm9wcyk7XG5cdCAgfVxuXHQgIHJldHVybiBwcm9nO1xuXHR9XG5cblx0ZnVuY3Rpb24gd3JhcEhlbHBlcnNUb1Bhc3NMb29rdXBQcm9wZXJ0eShtZXJnZWRIZWxwZXJzLCBjb250YWluZXIpIHtcblx0ICBfT2JqZWN0JGtleXMobWVyZ2VkSGVscGVycykuZm9yRWFjaChmdW5jdGlvbiAoaGVscGVyTmFtZSkge1xuXHQgICAgdmFyIGhlbHBlciA9IG1lcmdlZEhlbHBlcnNbaGVscGVyTmFtZV07XG5cdCAgICBtZXJnZWRIZWxwZXJzW2hlbHBlck5hbWVdID0gcGFzc0xvb2t1cFByb3BlcnR5T3B0aW9uKGhlbHBlciwgY29udGFpbmVyKTtcblx0ICB9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIHBhc3NMb29rdXBQcm9wZXJ0eU9wdGlvbihoZWxwZXIsIGNvbnRhaW5lcikge1xuXHQgIHZhciBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eTtcblx0ICByZXR1cm4gX2ludGVybmFsV3JhcEhlbHBlci53cmFwSGVscGVyKGhlbHBlciwgZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0ICAgIHJldHVybiBVdGlscy5leHRlbmQoeyBsb29rdXBQcm9wZXJ0eTogbG9va3VwUHJvcGVydHkgfSwgb3B0aW9ucyk7XG5cdCAgfSk7XG5cdH1cblxuLyoqKi8gfSksXG4vKiAzOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogX193ZWJwYWNrX3JlcXVpcmVfXyg0MCksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuLyoqKi8gfSksXG4vKiA0MCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oNDEpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMjEpLk9iamVjdC5zZWFsO1xuXG4vKioqLyB9KSxcbi8qIDQxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMTkuMS4yLjE3IE9iamVjdC5zZWFsKE8pXG5cdHZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oNDIpO1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTgpKCdzZWFsJywgZnVuY3Rpb24oJHNlYWwpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBzZWFsKGl0KXtcblx0ICAgIHJldHVybiAkc2VhbCAmJiBpc09iamVjdChpdCkgPyAkc2VhbChpdCkgOiBpdDtcblx0ICB9O1xuXHR9KTtcblxuLyoqKi8gfSksXG4vKiA0MiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuXHQgIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG5cdH07XG5cbi8qKiovIH0pLFxuLyogNDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy53cmFwSGVscGVyID0gd3JhcEhlbHBlcjtcblxuXHRmdW5jdGlvbiB3cmFwSGVscGVyKGhlbHBlciwgdHJhbnNmb3JtT3B0aW9uc0ZuKSB7XG5cdCAgaWYgKHR5cGVvZiBoZWxwZXIgIT09ICdmdW5jdGlvbicpIHtcblx0ICAgIC8vIFRoaXMgc2hvdWxkIG5vdCBoYXBwZW4sIGJ1dCBhcHBhcmVudGx5IGl0IGRvZXMgaW4gaHR0cHM6Ly9naXRodWIuY29tL3d5Y2F0cy9oYW5kbGViYXJzLmpzL2lzc3Vlcy8xNjM5XG5cdCAgICAvLyBXZSB0cnkgdG8gbWFrZSB0aGUgd3JhcHBlciBsZWFzdC1pbnZhc2l2ZSBieSBub3Qgd3JhcHBpbmcgaXQsIGlmIHRoZSBoZWxwZXIgaXMgbm90IGEgZnVuY3Rpb24uXG5cdCAgICByZXR1cm4gaGVscGVyO1xuXHQgIH1cblx0ICB2YXIgd3JhcHBlciA9IGZ1bmN0aW9uIHdyYXBwZXIoKSAvKiBkeW5hbWljIGFyZ3VtZW50cyAqL3tcblx0ICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcblx0ICAgIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV0gPSB0cmFuc2Zvcm1PcHRpb25zRm4ob3B0aW9ucyk7XG5cdCAgICByZXR1cm4gaGVscGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdCAgfTtcblx0ICByZXR1cm4gd3JhcHBlcjtcblx0fVxuXG4vKioqLyB9KSxcbi8qIDQ0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKGdsb2JhbCkgeyd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChIYW5kbGViYXJzKSB7XG5cdCAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICB2YXIgcm9vdCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93LFxuXHQgICAgICAkSGFuZGxlYmFycyA9IHJvb3QuSGFuZGxlYmFycztcblx0ICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHQgIEhhbmRsZWJhcnMubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIGlmIChyb290LkhhbmRsZWJhcnMgPT09IEhhbmRsZWJhcnMpIHtcblx0ICAgICAgcm9vdC5IYW5kbGViYXJzID0gJEhhbmRsZWJhcnM7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gSGFuZGxlYmFycztcblx0ICB9O1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSgpKSkpXG5cbi8qKiovIH0pLFxuLyogNDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0dmFyIEFTVCA9IHtcblx0ICAvLyBQdWJsaWMgQVBJIHVzZWQgdG8gZXZhbHVhdGUgZGVyaXZlZCBhdHRyaWJ1dGVzIHJlZ2FyZGluZyBBU1Qgbm9kZXNcblx0ICBoZWxwZXJzOiB7XG5cdCAgICAvLyBhIG11c3RhY2hlIGlzIGRlZmluaXRlbHkgYSBoZWxwZXIgaWY6XG5cdCAgICAvLyAqIGl0IGlzIGFuIGVsaWdpYmxlIGhlbHBlciwgYW5kXG5cdCAgICAvLyAqIGl0IGhhcyBhdCBsZWFzdCBvbmUgcGFyYW1ldGVyIG9yIGhhc2ggc2VnbWVudFxuXHQgICAgaGVscGVyRXhwcmVzc2lvbjogZnVuY3Rpb24gaGVscGVyRXhwcmVzc2lvbihub2RlKSB7XG5cdCAgICAgIHJldHVybiBub2RlLnR5cGUgPT09ICdTdWJFeHByZXNzaW9uJyB8fCAobm9kZS50eXBlID09PSAnTXVzdGFjaGVTdGF0ZW1lbnQnIHx8IG5vZGUudHlwZSA9PT0gJ0Jsb2NrU3RhdGVtZW50JykgJiYgISEobm9kZS5wYXJhbXMgJiYgbm9kZS5wYXJhbXMubGVuZ3RoIHx8IG5vZGUuaGFzaCk7XG5cdCAgICB9LFxuXG5cdCAgICBzY29wZWRJZDogZnVuY3Rpb24gc2NvcGVkSWQocGF0aCkge1xuXHQgICAgICByZXR1cm4gKC9eXFwufHRoaXNcXGIvLnRlc3QocGF0aC5vcmlnaW5hbClcblx0ICAgICAgKTtcblx0ICAgIH0sXG5cblx0ICAgIC8vIGFuIElEIGlzIHNpbXBsZSBpZiBpdCBvbmx5IGhhcyBvbmUgcGFydCwgYW5kIHRoYXQgcGFydCBpcyBub3Rcblx0ICAgIC8vIGAuLmAgb3IgYHRoaXNgLlxuXHQgICAgc2ltcGxlSWQ6IGZ1bmN0aW9uIHNpbXBsZUlkKHBhdGgpIHtcblx0ICAgICAgcmV0dXJuIHBhdGgucGFydHMubGVuZ3RoID09PSAxICYmICFBU1QuaGVscGVycy5zY29wZWRJZChwYXRoKSAmJiAhcGF0aC5kZXB0aDtcblx0ICAgIH1cblx0ICB9XG5cdH07XG5cblx0Ly8gTXVzdCBiZSBleHBvcnRlZCBhcyBhbiBvYmplY3QgcmF0aGVyIHRoYW4gdGhlIHJvb3Qgb2YgdGhlIG1vZHVsZSBhcyB0aGUgamlzb24gbGV4ZXJcblx0Ly8gbXVzdCBtb2RpZnkgdGhlIG9iamVjdCB0byBvcGVyYXRlIHByb3Blcmx5LlxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBBU1Q7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDQ2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IF9fd2VicGFja19yZXF1aXJlX18oMylbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzLnBhcnNlV2l0aG91dFByb2Nlc3NpbmcgPSBwYXJzZVdpdGhvdXRQcm9jZXNzaW5nO1xuXHRleHBvcnRzLnBhcnNlID0gcGFyc2U7XG5cblx0dmFyIF9wYXJzZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ3KTtcblxuXHR2YXIgX3BhcnNlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJzZXIpO1xuXG5cdHZhciBfd2hpdGVzcGFjZUNvbnRyb2wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ4KTtcblxuXHR2YXIgX3doaXRlc3BhY2VDb250cm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3doaXRlc3BhY2VDb250cm9sKTtcblxuXHR2YXIgX2hlbHBlcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUwKTtcblxuXHR2YXIgSGVscGVycyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9oZWxwZXJzKTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHRleHBvcnRzLnBhcnNlciA9IF9wYXJzZXIyWydkZWZhdWx0J107XG5cblx0dmFyIHl5ID0ge307XG5cdF91dGlscy5leHRlbmQoeXksIEhlbHBlcnMpO1xuXG5cdGZ1bmN0aW9uIHBhcnNlV2l0aG91dFByb2Nlc3NpbmcoaW5wdXQsIG9wdGlvbnMpIHtcblx0ICAvLyBKdXN0IHJldHVybiBpZiBhbiBhbHJlYWR5LWNvbXBpbGVkIEFTVCB3YXMgcGFzc2VkIGluLlxuXHQgIGlmIChpbnB1dC50eXBlID09PSAnUHJvZ3JhbScpIHtcblx0ICAgIHJldHVybiBpbnB1dDtcblx0ICB9XG5cblx0ICBfcGFyc2VyMlsnZGVmYXVsdCddLnl5ID0geXk7XG5cblx0ICAvLyBBbHRlcmluZyB0aGUgc2hhcmVkIG9iamVjdCBoZXJlLCBidXQgdGhpcyBpcyBvayBhcyBwYXJzZXIgaXMgYSBzeW5jIG9wZXJhdGlvblxuXHQgIHl5LmxvY0luZm8gPSBmdW5jdGlvbiAobG9jSW5mbykge1xuXHQgICAgcmV0dXJuIG5ldyB5eS5Tb3VyY2VMb2NhdGlvbihvcHRpb25zICYmIG9wdGlvbnMuc3JjTmFtZSwgbG9jSW5mbyk7XG5cdCAgfTtcblxuXHQgIHZhciBhc3QgPSBfcGFyc2VyMlsnZGVmYXVsdCddLnBhcnNlKGlucHV0KTtcblxuXHQgIHJldHVybiBhc3Q7XG5cdH1cblxuXHRmdW5jdGlvbiBwYXJzZShpbnB1dCwgb3B0aW9ucykge1xuXHQgIHZhciBhc3QgPSBwYXJzZVdpdGhvdXRQcm9jZXNzaW5nKGlucHV0LCBvcHRpb25zKTtcblx0ICB2YXIgc3RyaXAgPSBuZXcgX3doaXRlc3BhY2VDb250cm9sMlsnZGVmYXVsdCddKG9wdGlvbnMpO1xuXG5cdCAgcmV0dXJuIHN0cmlwLmFjY2VwdChhc3QpO1xuXHR9XG5cbi8qKiovIH0pLFxuLyogNDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvLyBGaWxlIGlnbm9yZWQgaW4gY292ZXJhZ2UgdGVzdHMgdmlhIHNldHRpbmcgaW4gLmlzdGFuYnVsLnltbFxuXHQvKiBKaXNvbiBnZW5lcmF0ZWQgcGFyc2VyICovXG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdHZhciBoYW5kbGViYXJzID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgIHZhciBwYXJzZXIgPSB7IHRyYWNlOiBmdW5jdGlvbiB0cmFjZSgpIHt9LFxuXHQgICAgICAgIHl5OiB7fSxcblx0ICAgICAgICBzeW1ib2xzXzogeyBcImVycm9yXCI6IDIsIFwicm9vdFwiOiAzLCBcInByb2dyYW1cIjogNCwgXCJFT0ZcIjogNSwgXCJwcm9ncmFtX3JlcGV0aXRpb24wXCI6IDYsIFwic3RhdGVtZW50XCI6IDcsIFwibXVzdGFjaGVcIjogOCwgXCJibG9ja1wiOiA5LCBcInJhd0Jsb2NrXCI6IDEwLCBcInBhcnRpYWxcIjogMTEsIFwicGFydGlhbEJsb2NrXCI6IDEyLCBcImNvbnRlbnRcIjogMTMsIFwiQ09NTUVOVFwiOiAxNCwgXCJDT05URU5UXCI6IDE1LCBcIm9wZW5SYXdCbG9ja1wiOiAxNiwgXCJyYXdCbG9ja19yZXBldGl0aW9uMFwiOiAxNywgXCJFTkRfUkFXX0JMT0NLXCI6IDE4LCBcIk9QRU5fUkFXX0JMT0NLXCI6IDE5LCBcImhlbHBlck5hbWVcIjogMjAsIFwib3BlblJhd0Jsb2NrX3JlcGV0aXRpb24wXCI6IDIxLCBcIm9wZW5SYXdCbG9ja19vcHRpb24wXCI6IDIyLCBcIkNMT1NFX1JBV19CTE9DS1wiOiAyMywgXCJvcGVuQmxvY2tcIjogMjQsIFwiYmxvY2tfb3B0aW9uMFwiOiAyNSwgXCJjbG9zZUJsb2NrXCI6IDI2LCBcIm9wZW5JbnZlcnNlXCI6IDI3LCBcImJsb2NrX29wdGlvbjFcIjogMjgsIFwiT1BFTl9CTE9DS1wiOiAyOSwgXCJvcGVuQmxvY2tfcmVwZXRpdGlvbjBcIjogMzAsIFwib3BlbkJsb2NrX29wdGlvbjBcIjogMzEsIFwib3BlbkJsb2NrX29wdGlvbjFcIjogMzIsIFwiQ0xPU0VcIjogMzMsIFwiT1BFTl9JTlZFUlNFXCI6IDM0LCBcIm9wZW5JbnZlcnNlX3JlcGV0aXRpb24wXCI6IDM1LCBcIm9wZW5JbnZlcnNlX29wdGlvbjBcIjogMzYsIFwib3BlbkludmVyc2Vfb3B0aW9uMVwiOiAzNywgXCJvcGVuSW52ZXJzZUNoYWluXCI6IDM4LCBcIk9QRU5fSU5WRVJTRV9DSEFJTlwiOiAzOSwgXCJvcGVuSW52ZXJzZUNoYWluX3JlcGV0aXRpb24wXCI6IDQwLCBcIm9wZW5JbnZlcnNlQ2hhaW5fb3B0aW9uMFwiOiA0MSwgXCJvcGVuSW52ZXJzZUNoYWluX29wdGlvbjFcIjogNDIsIFwiaW52ZXJzZUFuZFByb2dyYW1cIjogNDMsIFwiSU5WRVJTRVwiOiA0NCwgXCJpbnZlcnNlQ2hhaW5cIjogNDUsIFwiaW52ZXJzZUNoYWluX29wdGlvbjBcIjogNDYsIFwiT1BFTl9FTkRCTE9DS1wiOiA0NywgXCJPUEVOXCI6IDQ4LCBcIm11c3RhY2hlX3JlcGV0aXRpb24wXCI6IDQ5LCBcIm11c3RhY2hlX29wdGlvbjBcIjogNTAsIFwiT1BFTl9VTkVTQ0FQRURcIjogNTEsIFwibXVzdGFjaGVfcmVwZXRpdGlvbjFcIjogNTIsIFwibXVzdGFjaGVfb3B0aW9uMVwiOiA1MywgXCJDTE9TRV9VTkVTQ0FQRURcIjogNTQsIFwiT1BFTl9QQVJUSUFMXCI6IDU1LCBcInBhcnRpYWxOYW1lXCI6IDU2LCBcInBhcnRpYWxfcmVwZXRpdGlvbjBcIjogNTcsIFwicGFydGlhbF9vcHRpb24wXCI6IDU4LCBcIm9wZW5QYXJ0aWFsQmxvY2tcIjogNTksIFwiT1BFTl9QQVJUSUFMX0JMT0NLXCI6IDYwLCBcIm9wZW5QYXJ0aWFsQmxvY2tfcmVwZXRpdGlvbjBcIjogNjEsIFwib3BlblBhcnRpYWxCbG9ja19vcHRpb24wXCI6IDYyLCBcInBhcmFtXCI6IDYzLCBcInNleHByXCI6IDY0LCBcIk9QRU5fU0VYUFJcIjogNjUsIFwic2V4cHJfcmVwZXRpdGlvbjBcIjogNjYsIFwic2V4cHJfb3B0aW9uMFwiOiA2NywgXCJDTE9TRV9TRVhQUlwiOiA2OCwgXCJoYXNoXCI6IDY5LCBcImhhc2hfcmVwZXRpdGlvbl9wbHVzMFwiOiA3MCwgXCJoYXNoU2VnbWVudFwiOiA3MSwgXCJJRFwiOiA3MiwgXCJFUVVBTFNcIjogNzMsIFwiYmxvY2tQYXJhbXNcIjogNzQsIFwiT1BFTl9CTE9DS19QQVJBTVNcIjogNzUsIFwiYmxvY2tQYXJhbXNfcmVwZXRpdGlvbl9wbHVzMFwiOiA3NiwgXCJDTE9TRV9CTE9DS19QQVJBTVNcIjogNzcsIFwicGF0aFwiOiA3OCwgXCJkYXRhTmFtZVwiOiA3OSwgXCJTVFJJTkdcIjogODAsIFwiTlVNQkVSXCI6IDgxLCBcIkJPT0xFQU5cIjogODIsIFwiVU5ERUZJTkVEXCI6IDgzLCBcIk5VTExcIjogODQsIFwiREFUQVwiOiA4NSwgXCJwYXRoU2VnbWVudHNcIjogODYsIFwiU0VQXCI6IDg3LCBcIiRhY2NlcHRcIjogMCwgXCIkZW5kXCI6IDEgfSxcblx0ICAgICAgICB0ZXJtaW5hbHNfOiB7IDI6IFwiZXJyb3JcIiwgNTogXCJFT0ZcIiwgMTQ6IFwiQ09NTUVOVFwiLCAxNTogXCJDT05URU5UXCIsIDE4OiBcIkVORF9SQVdfQkxPQ0tcIiwgMTk6IFwiT1BFTl9SQVdfQkxPQ0tcIiwgMjM6IFwiQ0xPU0VfUkFXX0JMT0NLXCIsIDI5OiBcIk9QRU5fQkxPQ0tcIiwgMzM6IFwiQ0xPU0VcIiwgMzQ6IFwiT1BFTl9JTlZFUlNFXCIsIDM5OiBcIk9QRU5fSU5WRVJTRV9DSEFJTlwiLCA0NDogXCJJTlZFUlNFXCIsIDQ3OiBcIk9QRU5fRU5EQkxPQ0tcIiwgNDg6IFwiT1BFTlwiLCA1MTogXCJPUEVOX1VORVNDQVBFRFwiLCA1NDogXCJDTE9TRV9VTkVTQ0FQRURcIiwgNTU6IFwiT1BFTl9QQVJUSUFMXCIsIDYwOiBcIk9QRU5fUEFSVElBTF9CTE9DS1wiLCA2NTogXCJPUEVOX1NFWFBSXCIsIDY4OiBcIkNMT1NFX1NFWFBSXCIsIDcyOiBcIklEXCIsIDczOiBcIkVRVUFMU1wiLCA3NTogXCJPUEVOX0JMT0NLX1BBUkFNU1wiLCA3NzogXCJDTE9TRV9CTE9DS19QQVJBTVNcIiwgODA6IFwiU1RSSU5HXCIsIDgxOiBcIk5VTUJFUlwiLCA4MjogXCJCT09MRUFOXCIsIDgzOiBcIlVOREVGSU5FRFwiLCA4NDogXCJOVUxMXCIsIDg1OiBcIkRBVEFcIiwgODc6IFwiU0VQXCIgfSxcblx0ICAgICAgICBwcm9kdWN0aW9uc186IFswLCBbMywgMl0sIFs0LCAxXSwgWzcsIDFdLCBbNywgMV0sIFs3LCAxXSwgWzcsIDFdLCBbNywgMV0sIFs3LCAxXSwgWzcsIDFdLCBbMTMsIDFdLCBbMTAsIDNdLCBbMTYsIDVdLCBbOSwgNF0sIFs5LCA0XSwgWzI0LCA2XSwgWzI3LCA2XSwgWzM4LCA2XSwgWzQzLCAyXSwgWzQ1LCAzXSwgWzQ1LCAxXSwgWzI2LCAzXSwgWzgsIDVdLCBbOCwgNV0sIFsxMSwgNV0sIFsxMiwgM10sIFs1OSwgNV0sIFs2MywgMV0sIFs2MywgMV0sIFs2NCwgNV0sIFs2OSwgMV0sIFs3MSwgM10sIFs3NCwgM10sIFsyMCwgMV0sIFsyMCwgMV0sIFsyMCwgMV0sIFsyMCwgMV0sIFsyMCwgMV0sIFsyMCwgMV0sIFsyMCwgMV0sIFs1NiwgMV0sIFs1NiwgMV0sIFs3OSwgMl0sIFs3OCwgMV0sIFs4NiwgM10sIFs4NiwgMV0sIFs2LCAwXSwgWzYsIDJdLCBbMTcsIDBdLCBbMTcsIDJdLCBbMjEsIDBdLCBbMjEsIDJdLCBbMjIsIDBdLCBbMjIsIDFdLCBbMjUsIDBdLCBbMjUsIDFdLCBbMjgsIDBdLCBbMjgsIDFdLCBbMzAsIDBdLCBbMzAsIDJdLCBbMzEsIDBdLCBbMzEsIDFdLCBbMzIsIDBdLCBbMzIsIDFdLCBbMzUsIDBdLCBbMzUsIDJdLCBbMzYsIDBdLCBbMzYsIDFdLCBbMzcsIDBdLCBbMzcsIDFdLCBbNDAsIDBdLCBbNDAsIDJdLCBbNDEsIDBdLCBbNDEsIDFdLCBbNDIsIDBdLCBbNDIsIDFdLCBbNDYsIDBdLCBbNDYsIDFdLCBbNDksIDBdLCBbNDksIDJdLCBbNTAsIDBdLCBbNTAsIDFdLCBbNTIsIDBdLCBbNTIsIDJdLCBbNTMsIDBdLCBbNTMsIDFdLCBbNTcsIDBdLCBbNTcsIDJdLCBbNTgsIDBdLCBbNTgsIDFdLCBbNjEsIDBdLCBbNjEsIDJdLCBbNjIsIDBdLCBbNjIsIDFdLCBbNjYsIDBdLCBbNjYsIDJdLCBbNjcsIDBdLCBbNjcsIDFdLCBbNzAsIDFdLCBbNzAsIDJdLCBbNzYsIDFdLCBbNzYsIDJdXSxcblx0ICAgICAgICBwZXJmb3JtQWN0aW9uOiBmdW5jdGlvbiBhbm9ueW1vdXMoeXl0ZXh0LCB5eWxlbmcsIHl5bGluZW5vLCB5eSwgeXlzdGF0ZSwgJCQsIF8kKSB7XG5cblx0ICAgICAgICAgICAgdmFyICQwID0gJCQubGVuZ3RoIC0gMTtcblx0ICAgICAgICAgICAgc3dpdGNoICh5eXN0YXRlKSB7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQkWyQwIC0gMV07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZVByb2dyYW0oJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA1OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDc6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA4OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgOTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdDb21tZW50U3RhdGVtZW50Jyxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHl5LnN0cmlwQ29tbWVudCgkJFskMF0pLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdHJpcDogeXkuc3RyaXBGbGFncygkJFskMF0sICQkWyQwXSksXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKVxuXHQgICAgICAgICAgICAgICAgICAgIH07XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTA6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0ge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnQ29udGVudFN0YXRlbWVudCcsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsOiAkJFskMF0sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAkJFskMF0sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKVxuXHQgICAgICAgICAgICAgICAgICAgIH07XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTE6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZVJhd0Jsb2NrKCQkWyQwIC0gMl0sICQkWyQwIC0gMV0sICQkWyQwXSwgdGhpcy5fJCk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDEyOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgcGF0aDogJCRbJDAgLSAzXSwgcGFyYW1zOiAkJFskMCAtIDJdLCBoYXNoOiAkJFskMCAtIDFdIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDEzOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHl5LnByZXBhcmVCbG9jaygkJFskMCAtIDNdLCAkJFskMCAtIDJdLCAkJFskMCAtIDFdLCAkJFskMF0sIGZhbHNlLCB0aGlzLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTQ6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZUJsb2NrKCQkWyQwIC0gM10sICQkWyQwIC0gMl0sICQkWyQwIC0gMV0sICQkWyQwXSwgdHJ1ZSwgdGhpcy5fJCk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE1OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgb3BlbjogJCRbJDAgLSA1XSwgcGF0aDogJCRbJDAgLSA0XSwgcGFyYW1zOiAkJFskMCAtIDNdLCBoYXNoOiAkJFskMCAtIDJdLCBibG9ja1BhcmFtczogJCRbJDAgLSAxXSwgc3RyaXA6IHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSA1XSwgJCRbJDBdKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHBhdGg6ICQkWyQwIC0gNF0sIHBhcmFtczogJCRbJDAgLSAzXSwgaGFzaDogJCRbJDAgLSAyXSwgYmxvY2tQYXJhbXM6ICQkWyQwIC0gMV0sIHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwIC0gNV0sICQkWyQwXSkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTc6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyBwYXRoOiAkJFskMCAtIDRdLCBwYXJhbXM6ICQkWyQwIC0gM10sIGhhc2g6ICQkWyQwIC0gMl0sIGJsb2NrUGFyYW1zOiAkJFskMCAtIDFdLCBzdHJpcDogeXkuc3RyaXBGbGFncygkJFskMCAtIDVdLCAkJFskMF0pIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE4OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgc3RyaXA6IHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSAxXSwgJCRbJDAgLSAxXSksIHByb2dyYW06ICQkWyQwXSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxOTpcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgaW52ZXJzZSA9IHl5LnByZXBhcmVCbG9jaygkJFskMCAtIDJdLCAkJFskMCAtIDFdLCAkJFskMF0sICQkWyQwXSwgZmFsc2UsIHRoaXMuXyQpLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtID0geXkucHJlcGFyZVByb2dyYW0oW2ludmVyc2VdLCAkJFskMCAtIDFdLmxvYyk7XG5cdCAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbS5jaGFpbmVkID0gdHJ1ZTtcblxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgc3RyaXA6ICQkWyQwIC0gMl0uc3RyaXAsIHByb2dyYW06IHByb2dyYW0sIGNoYWluOiB0cnVlIH07XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjA6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyMTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHBhdGg6ICQkWyQwIC0gMV0sIHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwIC0gMl0sICQkWyQwXSkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjI6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZU11c3RhY2hlKCQkWyQwIC0gM10sICQkWyQwIC0gMl0sICQkWyQwIC0gMV0sICQkWyQwIC0gNF0sIHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSA0XSwgJCRbJDBdKSwgdGhpcy5fJCk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDIzOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHl5LnByZXBhcmVNdXN0YWNoZSgkJFskMCAtIDNdLCAkJFskMCAtIDJdLCAkJFskMCAtIDFdLCAkJFskMCAtIDRdLCB5eS5zdHJpcEZsYWdzKCQkWyQwIC0gNF0sICQkWyQwXSksIHRoaXMuXyQpO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyNDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQYXJ0aWFsU3RhdGVtZW50Jyxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJCRbJDAgLSAzXSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiAkJFskMCAtIDJdLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBoYXNoOiAkJFskMCAtIDFdLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBpbmRlbnQ6ICcnLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdHJpcDogeXkuc3RyaXBGbGFncygkJFskMCAtIDRdLCAkJFskMF0pLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHl5LmxvY0luZm8odGhpcy5fJClcblx0ICAgICAgICAgICAgICAgICAgICB9O1xuXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI1OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHl5LnByZXBhcmVQYXJ0aWFsQmxvY2soJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSwgJCRbJDBdLCB0aGlzLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjY6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyBwYXRoOiAkJFskMCAtIDNdLCBwYXJhbXM6ICQkWyQwIC0gMl0sIGhhc2g6ICQkWyQwIC0gMV0sIHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwIC0gNF0sICQkWyQwXSkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjc6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyODpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI5OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1N1YkV4cHJlc3Npb24nLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiAkJFskMCAtIDNdLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6ICQkWyQwIC0gMl0sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGhhc2g6ICQkWyQwIC0gMV0sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKVxuXHQgICAgICAgICAgICAgICAgICAgIH07XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzA6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyB0eXBlOiAnSGFzaCcsIHBhaXJzOiAkJFskMF0sIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzMTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHR5cGU6ICdIYXNoUGFpcicsIGtleTogeXkuaWQoJCRbJDAgLSAyXSksIHZhbHVlOiAkJFskMF0sIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzMjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5pZCgkJFskMCAtIDFdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzM6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzNDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM1OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgdHlwZTogJ1N0cmluZ0xpdGVyYWwnLCB2YWx1ZTogJCRbJDBdLCBvcmlnaW5hbDogJCRbJDBdLCBsb2M6IHl5LmxvY0luZm8odGhpcy5fJCkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzY6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyB0eXBlOiAnTnVtYmVyTGl0ZXJhbCcsIHZhbHVlOiBOdW1iZXIoJCRbJDBdKSwgb3JpZ2luYWw6IE51bWJlcigkJFskMF0pLCBsb2M6IHl5LmxvY0luZm8odGhpcy5fJCkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzc6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyB0eXBlOiAnQm9vbGVhbkxpdGVyYWwnLCB2YWx1ZTogJCRbJDBdID09PSAndHJ1ZScsIG9yaWdpbmFsOiAkJFskMF0gPT09ICd0cnVlJywgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM4OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgdHlwZTogJ1VuZGVmaW5lZExpdGVyYWwnLCBvcmlnaW5hbDogdW5kZWZpbmVkLCB2YWx1ZTogdW5kZWZpbmVkLCBsb2M6IHl5LmxvY0luZm8odGhpcy5fJCkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzk6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyB0eXBlOiAnTnVsbExpdGVyYWwnLCBvcmlnaW5hbDogbnVsbCwgdmFsdWU6IG51bGwsIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0MDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQxOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDI6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZVBhdGgodHJ1ZSwgJCRbJDBdLCB0aGlzLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDM6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZVBhdGgoZmFsc2UsICQkWyQwXSwgdGhpcy5fJCk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ0OlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMl0ucHVzaCh7IHBhcnQ6IHl5LmlkKCQkWyQwXSksIG9yaWdpbmFsOiAkJFskMF0sIHNlcGFyYXRvcjogJCRbJDAgLSAxXSB9KTt0aGlzLiQgPSAkJFskMCAtIDJdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0NTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbeyBwYXJ0OiB5eS5pZCgkJFskMF0pLCBvcmlnaW5hbDogJCRbJDBdIH1dO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0Njpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDc6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ4OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0OTpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNTA6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDUxOlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA1ODpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNTk6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDY0OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA2NTpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNzA6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDcxOlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA3ODpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNzk6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDgyOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA4Mzpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgODY6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDg3OlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA5MDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgOTE6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDk0OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA5NTpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgOTg6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gWyQkWyQwXV07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDk5OlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxMDA6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gWyQkWyQwXV07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDEwMTpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cdCAgICAgICAgdGFibGU6IFt7IDM6IDEsIDQ6IDIsIDU6IFsyLCA0Nl0sIDY6IDMsIDE0OiBbMiwgNDZdLCAxNTogWzIsIDQ2XSwgMTk6IFsyLCA0Nl0sIDI5OiBbMiwgNDZdLCAzNDogWzIsIDQ2XSwgNDg6IFsyLCA0Nl0sIDUxOiBbMiwgNDZdLCA1NTogWzIsIDQ2XSwgNjA6IFsyLCA0Nl0gfSwgeyAxOiBbM10gfSwgeyA1OiBbMSwgNF0gfSwgeyA1OiBbMiwgMl0sIDc6IDUsIDg6IDYsIDk6IDcsIDEwOiA4LCAxMTogOSwgMTI6IDEwLCAxMzogMTEsIDE0OiBbMSwgMTJdLCAxNTogWzEsIDIwXSwgMTY6IDE3LCAxOTogWzEsIDIzXSwgMjQ6IDE1LCAyNzogMTYsIDI5OiBbMSwgMjFdLCAzNDogWzEsIDIyXSwgMzk6IFsyLCAyXSwgNDQ6IFsyLCAyXSwgNDc6IFsyLCAyXSwgNDg6IFsxLCAxM10sIDUxOiBbMSwgMTRdLCA1NTogWzEsIDE4XSwgNTk6IDE5LCA2MDogWzEsIDI0XSB9LCB7IDE6IFsyLCAxXSB9LCB7IDU6IFsyLCA0N10sIDE0OiBbMiwgNDddLCAxNTogWzIsIDQ3XSwgMTk6IFsyLCA0N10sIDI5OiBbMiwgNDddLCAzNDogWzIsIDQ3XSwgMzk6IFsyLCA0N10sIDQ0OiBbMiwgNDddLCA0NzogWzIsIDQ3XSwgNDg6IFsyLCA0N10sIDUxOiBbMiwgNDddLCA1NTogWzIsIDQ3XSwgNjA6IFsyLCA0N10gfSwgeyA1OiBbMiwgM10sIDE0OiBbMiwgM10sIDE1OiBbMiwgM10sIDE5OiBbMiwgM10sIDI5OiBbMiwgM10sIDM0OiBbMiwgM10sIDM5OiBbMiwgM10sIDQ0OiBbMiwgM10sIDQ3OiBbMiwgM10sIDQ4OiBbMiwgM10sIDUxOiBbMiwgM10sIDU1OiBbMiwgM10sIDYwOiBbMiwgM10gfSwgeyA1OiBbMiwgNF0sIDE0OiBbMiwgNF0sIDE1OiBbMiwgNF0sIDE5OiBbMiwgNF0sIDI5OiBbMiwgNF0sIDM0OiBbMiwgNF0sIDM5OiBbMiwgNF0sIDQ0OiBbMiwgNF0sIDQ3OiBbMiwgNF0sIDQ4OiBbMiwgNF0sIDUxOiBbMiwgNF0sIDU1OiBbMiwgNF0sIDYwOiBbMiwgNF0gfSwgeyA1OiBbMiwgNV0sIDE0OiBbMiwgNV0sIDE1OiBbMiwgNV0sIDE5OiBbMiwgNV0sIDI5OiBbMiwgNV0sIDM0OiBbMiwgNV0sIDM5OiBbMiwgNV0sIDQ0OiBbMiwgNV0sIDQ3OiBbMiwgNV0sIDQ4OiBbMiwgNV0sIDUxOiBbMiwgNV0sIDU1OiBbMiwgNV0sIDYwOiBbMiwgNV0gfSwgeyA1OiBbMiwgNl0sIDE0OiBbMiwgNl0sIDE1OiBbMiwgNl0sIDE5OiBbMiwgNl0sIDI5OiBbMiwgNl0sIDM0OiBbMiwgNl0sIDM5OiBbMiwgNl0sIDQ0OiBbMiwgNl0sIDQ3OiBbMiwgNl0sIDQ4OiBbMiwgNl0sIDUxOiBbMiwgNl0sIDU1OiBbMiwgNl0sIDYwOiBbMiwgNl0gfSwgeyA1OiBbMiwgN10sIDE0OiBbMiwgN10sIDE1OiBbMiwgN10sIDE5OiBbMiwgN10sIDI5OiBbMiwgN10sIDM0OiBbMiwgN10sIDM5OiBbMiwgN10sIDQ0OiBbMiwgN10sIDQ3OiBbMiwgN10sIDQ4OiBbMiwgN10sIDUxOiBbMiwgN10sIDU1OiBbMiwgN10sIDYwOiBbMiwgN10gfSwgeyA1OiBbMiwgOF0sIDE0OiBbMiwgOF0sIDE1OiBbMiwgOF0sIDE5OiBbMiwgOF0sIDI5OiBbMiwgOF0sIDM0OiBbMiwgOF0sIDM5OiBbMiwgOF0sIDQ0OiBbMiwgOF0sIDQ3OiBbMiwgOF0sIDQ4OiBbMiwgOF0sIDUxOiBbMiwgOF0sIDU1OiBbMiwgOF0sIDYwOiBbMiwgOF0gfSwgeyA1OiBbMiwgOV0sIDE0OiBbMiwgOV0sIDE1OiBbMiwgOV0sIDE5OiBbMiwgOV0sIDI5OiBbMiwgOV0sIDM0OiBbMiwgOV0sIDM5OiBbMiwgOV0sIDQ0OiBbMiwgOV0sIDQ3OiBbMiwgOV0sIDQ4OiBbMiwgOV0sIDUxOiBbMiwgOV0sIDU1OiBbMiwgOV0sIDYwOiBbMiwgOV0gfSwgeyAyMDogMjUsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjA6IDM2LCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDQ6IDM3LCA2OiAzLCAxNDogWzIsIDQ2XSwgMTU6IFsyLCA0Nl0sIDE5OiBbMiwgNDZdLCAyOTogWzIsIDQ2XSwgMzQ6IFsyLCA0Nl0sIDM5OiBbMiwgNDZdLCA0NDogWzIsIDQ2XSwgNDc6IFsyLCA0Nl0sIDQ4OiBbMiwgNDZdLCA1MTogWzIsIDQ2XSwgNTU6IFsyLCA0Nl0sIDYwOiBbMiwgNDZdIH0sIHsgNDogMzgsIDY6IDMsIDE0OiBbMiwgNDZdLCAxNTogWzIsIDQ2XSwgMTk6IFsyLCA0Nl0sIDI5OiBbMiwgNDZdLCAzNDogWzIsIDQ2XSwgNDQ6IFsyLCA0Nl0sIDQ3OiBbMiwgNDZdLCA0ODogWzIsIDQ2XSwgNTE6IFsyLCA0Nl0sIDU1OiBbMiwgNDZdLCA2MDogWzIsIDQ2XSB9LCB7IDE1OiBbMiwgNDhdLCAxNzogMzksIDE4OiBbMiwgNDhdIH0sIHsgMjA6IDQxLCA1NjogNDAsIDY0OiA0MiwgNjU6IFsxLCA0M10sIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgNDogNDQsIDY6IDMsIDE0OiBbMiwgNDZdLCAxNTogWzIsIDQ2XSwgMTk6IFsyLCA0Nl0sIDI5OiBbMiwgNDZdLCAzNDogWzIsIDQ2XSwgNDc6IFsyLCA0Nl0sIDQ4OiBbMiwgNDZdLCA1MTogWzIsIDQ2XSwgNTU6IFsyLCA0Nl0sIDYwOiBbMiwgNDZdIH0sIHsgNTogWzIsIDEwXSwgMTQ6IFsyLCAxMF0sIDE1OiBbMiwgMTBdLCAxODogWzIsIDEwXSwgMTk6IFsyLCAxMF0sIDI5OiBbMiwgMTBdLCAzNDogWzIsIDEwXSwgMzk6IFsyLCAxMF0sIDQ0OiBbMiwgMTBdLCA0NzogWzIsIDEwXSwgNDg6IFsyLCAxMF0sIDUxOiBbMiwgMTBdLCA1NTogWzIsIDEwXSwgNjA6IFsyLCAxMF0gfSwgeyAyMDogNDUsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjA6IDQ2LCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDIwOiA0NywgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyMDogNDEsIDU2OiA0OCwgNjQ6IDQyLCA2NTogWzEsIDQzXSwgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAzMzogWzIsIDc4XSwgNDk6IDQ5LCA2NTogWzIsIDc4XSwgNzI6IFsyLCA3OF0sIDgwOiBbMiwgNzhdLCA4MTogWzIsIDc4XSwgODI6IFsyLCA3OF0sIDgzOiBbMiwgNzhdLCA4NDogWzIsIDc4XSwgODU6IFsyLCA3OF0gfSwgeyAyMzogWzIsIDMzXSwgMzM6IFsyLCAzM10sIDU0OiBbMiwgMzNdLCA2NTogWzIsIDMzXSwgNjg6IFsyLCAzM10sIDcyOiBbMiwgMzNdLCA3NTogWzIsIDMzXSwgODA6IFsyLCAzM10sIDgxOiBbMiwgMzNdLCA4MjogWzIsIDMzXSwgODM6IFsyLCAzM10sIDg0OiBbMiwgMzNdLCA4NTogWzIsIDMzXSB9LCB7IDIzOiBbMiwgMzRdLCAzMzogWzIsIDM0XSwgNTQ6IFsyLCAzNF0sIDY1OiBbMiwgMzRdLCA2ODogWzIsIDM0XSwgNzI6IFsyLCAzNF0sIDc1OiBbMiwgMzRdLCA4MDogWzIsIDM0XSwgODE6IFsyLCAzNF0sIDgyOiBbMiwgMzRdLCA4MzogWzIsIDM0XSwgODQ6IFsyLCAzNF0sIDg1OiBbMiwgMzRdIH0sIHsgMjM6IFsyLCAzNV0sIDMzOiBbMiwgMzVdLCA1NDogWzIsIDM1XSwgNjU6IFsyLCAzNV0sIDY4OiBbMiwgMzVdLCA3MjogWzIsIDM1XSwgNzU6IFsyLCAzNV0sIDgwOiBbMiwgMzVdLCA4MTogWzIsIDM1XSwgODI6IFsyLCAzNV0sIDgzOiBbMiwgMzVdLCA4NDogWzIsIDM1XSwgODU6IFsyLCAzNV0gfSwgeyAyMzogWzIsIDM2XSwgMzM6IFsyLCAzNl0sIDU0OiBbMiwgMzZdLCA2NTogWzIsIDM2XSwgNjg6IFsyLCAzNl0sIDcyOiBbMiwgMzZdLCA3NTogWzIsIDM2XSwgODA6IFsyLCAzNl0sIDgxOiBbMiwgMzZdLCA4MjogWzIsIDM2XSwgODM6IFsyLCAzNl0sIDg0OiBbMiwgMzZdLCA4NTogWzIsIDM2XSB9LCB7IDIzOiBbMiwgMzddLCAzMzogWzIsIDM3XSwgNTQ6IFsyLCAzN10sIDY1OiBbMiwgMzddLCA2ODogWzIsIDM3XSwgNzI6IFsyLCAzN10sIDc1OiBbMiwgMzddLCA4MDogWzIsIDM3XSwgODE6IFsyLCAzN10sIDgyOiBbMiwgMzddLCA4MzogWzIsIDM3XSwgODQ6IFsyLCAzN10sIDg1OiBbMiwgMzddIH0sIHsgMjM6IFsyLCAzOF0sIDMzOiBbMiwgMzhdLCA1NDogWzIsIDM4XSwgNjU6IFsyLCAzOF0sIDY4OiBbMiwgMzhdLCA3MjogWzIsIDM4XSwgNzU6IFsyLCAzOF0sIDgwOiBbMiwgMzhdLCA4MTogWzIsIDM4XSwgODI6IFsyLCAzOF0sIDgzOiBbMiwgMzhdLCA4NDogWzIsIDM4XSwgODU6IFsyLCAzOF0gfSwgeyAyMzogWzIsIDM5XSwgMzM6IFsyLCAzOV0sIDU0OiBbMiwgMzldLCA2NTogWzIsIDM5XSwgNjg6IFsyLCAzOV0sIDcyOiBbMiwgMzldLCA3NTogWzIsIDM5XSwgODA6IFsyLCAzOV0sIDgxOiBbMiwgMzldLCA4MjogWzIsIDM5XSwgODM6IFsyLCAzOV0sIDg0OiBbMiwgMzldLCA4NTogWzIsIDM5XSB9LCB7IDIzOiBbMiwgNDNdLCAzMzogWzIsIDQzXSwgNTQ6IFsyLCA0M10sIDY1OiBbMiwgNDNdLCA2ODogWzIsIDQzXSwgNzI6IFsyLCA0M10sIDc1OiBbMiwgNDNdLCA4MDogWzIsIDQzXSwgODE6IFsyLCA0M10sIDgyOiBbMiwgNDNdLCA4MzogWzIsIDQzXSwgODQ6IFsyLCA0M10sIDg1OiBbMiwgNDNdLCA4NzogWzEsIDUwXSB9LCB7IDcyOiBbMSwgMzVdLCA4NjogNTEgfSwgeyAyMzogWzIsIDQ1XSwgMzM6IFsyLCA0NV0sIDU0OiBbMiwgNDVdLCA2NTogWzIsIDQ1XSwgNjg6IFsyLCA0NV0sIDcyOiBbMiwgNDVdLCA3NTogWzIsIDQ1XSwgODA6IFsyLCA0NV0sIDgxOiBbMiwgNDVdLCA4MjogWzIsIDQ1XSwgODM6IFsyLCA0NV0sIDg0OiBbMiwgNDVdLCA4NTogWzIsIDQ1XSwgODc6IFsyLCA0NV0gfSwgeyA1MjogNTIsIDU0OiBbMiwgODJdLCA2NTogWzIsIDgyXSwgNzI6IFsyLCA4Ml0sIDgwOiBbMiwgODJdLCA4MTogWzIsIDgyXSwgODI6IFsyLCA4Ml0sIDgzOiBbMiwgODJdLCA4NDogWzIsIDgyXSwgODU6IFsyLCA4Ml0gfSwgeyAyNTogNTMsIDM4OiA1NSwgMzk6IFsxLCA1N10sIDQzOiA1NiwgNDQ6IFsxLCA1OF0sIDQ1OiA1NCwgNDc6IFsyLCA1NF0gfSwgeyAyODogNTksIDQzOiA2MCwgNDQ6IFsxLCA1OF0sIDQ3OiBbMiwgNTZdIH0sIHsgMTM6IDYyLCAxNTogWzEsIDIwXSwgMTg6IFsxLCA2MV0gfSwgeyAzMzogWzIsIDg2XSwgNTc6IDYzLCA2NTogWzIsIDg2XSwgNzI6IFsyLCA4Nl0sIDgwOiBbMiwgODZdLCA4MTogWzIsIDg2XSwgODI6IFsyLCA4Nl0sIDgzOiBbMiwgODZdLCA4NDogWzIsIDg2XSwgODU6IFsyLCA4Nl0gfSwgeyAzMzogWzIsIDQwXSwgNjU6IFsyLCA0MF0sIDcyOiBbMiwgNDBdLCA4MDogWzIsIDQwXSwgODE6IFsyLCA0MF0sIDgyOiBbMiwgNDBdLCA4MzogWzIsIDQwXSwgODQ6IFsyLCA0MF0sIDg1OiBbMiwgNDBdIH0sIHsgMzM6IFsyLCA0MV0sIDY1OiBbMiwgNDFdLCA3MjogWzIsIDQxXSwgODA6IFsyLCA0MV0sIDgxOiBbMiwgNDFdLCA4MjogWzIsIDQxXSwgODM6IFsyLCA0MV0sIDg0OiBbMiwgNDFdLCA4NTogWzIsIDQxXSB9LCB7IDIwOiA2NCwgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyNjogNjUsIDQ3OiBbMSwgNjZdIH0sIHsgMzA6IDY3LCAzMzogWzIsIDU4XSwgNjU6IFsyLCA1OF0sIDcyOiBbMiwgNThdLCA3NTogWzIsIDU4XSwgODA6IFsyLCA1OF0sIDgxOiBbMiwgNThdLCA4MjogWzIsIDU4XSwgODM6IFsyLCA1OF0sIDg0OiBbMiwgNThdLCA4NTogWzIsIDU4XSB9LCB7IDMzOiBbMiwgNjRdLCAzNTogNjgsIDY1OiBbMiwgNjRdLCA3MjogWzIsIDY0XSwgNzU6IFsyLCA2NF0sIDgwOiBbMiwgNjRdLCA4MTogWzIsIDY0XSwgODI6IFsyLCA2NF0sIDgzOiBbMiwgNjRdLCA4NDogWzIsIDY0XSwgODU6IFsyLCA2NF0gfSwgeyAyMTogNjksIDIzOiBbMiwgNTBdLCA2NTogWzIsIDUwXSwgNzI6IFsyLCA1MF0sIDgwOiBbMiwgNTBdLCA4MTogWzIsIDUwXSwgODI6IFsyLCA1MF0sIDgzOiBbMiwgNTBdLCA4NDogWzIsIDUwXSwgODU6IFsyLCA1MF0gfSwgeyAzMzogWzIsIDkwXSwgNjE6IDcwLCA2NTogWzIsIDkwXSwgNzI6IFsyLCA5MF0sIDgwOiBbMiwgOTBdLCA4MTogWzIsIDkwXSwgODI6IFsyLCA5MF0sIDgzOiBbMiwgOTBdLCA4NDogWzIsIDkwXSwgODU6IFsyLCA5MF0gfSwgeyAyMDogNzQsIDMzOiBbMiwgODBdLCA1MDogNzEsIDYzOiA3MiwgNjQ6IDc1LCA2NTogWzEsIDQzXSwgNjk6IDczLCA3MDogNzYsIDcxOiA3NywgNzI6IFsxLCA3OF0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyA3MjogWzEsIDc5XSB9LCB7IDIzOiBbMiwgNDJdLCAzMzogWzIsIDQyXSwgNTQ6IFsyLCA0Ml0sIDY1OiBbMiwgNDJdLCA2ODogWzIsIDQyXSwgNzI6IFsyLCA0Ml0sIDc1OiBbMiwgNDJdLCA4MDogWzIsIDQyXSwgODE6IFsyLCA0Ml0sIDgyOiBbMiwgNDJdLCA4MzogWzIsIDQyXSwgODQ6IFsyLCA0Ml0sIDg1OiBbMiwgNDJdLCA4NzogWzEsIDUwXSB9LCB7IDIwOiA3NCwgNTM6IDgwLCA1NDogWzIsIDg0XSwgNjM6IDgxLCA2NDogNzUsIDY1OiBbMSwgNDNdLCA2OTogODIsIDcwOiA3NiwgNzE6IDc3LCA3MjogWzEsIDc4XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDI2OiA4MywgNDc6IFsxLCA2Nl0gfSwgeyA0NzogWzIsIDU1XSB9LCB7IDQ6IDg0LCA2OiAzLCAxNDogWzIsIDQ2XSwgMTU6IFsyLCA0Nl0sIDE5OiBbMiwgNDZdLCAyOTogWzIsIDQ2XSwgMzQ6IFsyLCA0Nl0sIDM5OiBbMiwgNDZdLCA0NDogWzIsIDQ2XSwgNDc6IFsyLCA0Nl0sIDQ4OiBbMiwgNDZdLCA1MTogWzIsIDQ2XSwgNTU6IFsyLCA0Nl0sIDYwOiBbMiwgNDZdIH0sIHsgNDc6IFsyLCAyMF0gfSwgeyAyMDogODUsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgNDogODYsIDY6IDMsIDE0OiBbMiwgNDZdLCAxNTogWzIsIDQ2XSwgMTk6IFsyLCA0Nl0sIDI5OiBbMiwgNDZdLCAzNDogWzIsIDQ2XSwgNDc6IFsyLCA0Nl0sIDQ4OiBbMiwgNDZdLCA1MTogWzIsIDQ2XSwgNTU6IFsyLCA0Nl0sIDYwOiBbMiwgNDZdIH0sIHsgMjY6IDg3LCA0NzogWzEsIDY2XSB9LCB7IDQ3OiBbMiwgNTddIH0sIHsgNTogWzIsIDExXSwgMTQ6IFsyLCAxMV0sIDE1OiBbMiwgMTFdLCAxOTogWzIsIDExXSwgMjk6IFsyLCAxMV0sIDM0OiBbMiwgMTFdLCAzOTogWzIsIDExXSwgNDQ6IFsyLCAxMV0sIDQ3OiBbMiwgMTFdLCA0ODogWzIsIDExXSwgNTE6IFsyLCAxMV0sIDU1OiBbMiwgMTFdLCA2MDogWzIsIDExXSB9LCB7IDE1OiBbMiwgNDldLCAxODogWzIsIDQ5XSB9LCB7IDIwOiA3NCwgMzM6IFsyLCA4OF0sIDU4OiA4OCwgNjM6IDg5LCA2NDogNzUsIDY1OiBbMSwgNDNdLCA2OTogOTAsIDcwOiA3NiwgNzE6IDc3LCA3MjogWzEsIDc4XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDY1OiBbMiwgOTRdLCA2NjogOTEsIDY4OiBbMiwgOTRdLCA3MjogWzIsIDk0XSwgODA6IFsyLCA5NF0sIDgxOiBbMiwgOTRdLCA4MjogWzIsIDk0XSwgODM6IFsyLCA5NF0sIDg0OiBbMiwgOTRdLCA4NTogWzIsIDk0XSB9LCB7IDU6IFsyLCAyNV0sIDE0OiBbMiwgMjVdLCAxNTogWzIsIDI1XSwgMTk6IFsyLCAyNV0sIDI5OiBbMiwgMjVdLCAzNDogWzIsIDI1XSwgMzk6IFsyLCAyNV0sIDQ0OiBbMiwgMjVdLCA0NzogWzIsIDI1XSwgNDg6IFsyLCAyNV0sIDUxOiBbMiwgMjVdLCA1NTogWzIsIDI1XSwgNjA6IFsyLCAyNV0gfSwgeyAyMDogOTIsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjA6IDc0LCAzMTogOTMsIDMzOiBbMiwgNjBdLCA2MzogOTQsIDY0OiA3NSwgNjU6IFsxLCA0M10sIDY5OiA5NSwgNzA6IDc2LCA3MTogNzcsIDcyOiBbMSwgNzhdLCA3NTogWzIsIDYwXSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDIwOiA3NCwgMzM6IFsyLCA2Nl0sIDM2OiA5NiwgNjM6IDk3LCA2NDogNzUsIDY1OiBbMSwgNDNdLCA2OTogOTgsIDcwOiA3NiwgNzE6IDc3LCA3MjogWzEsIDc4XSwgNzU6IFsyLCA2Nl0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyMDogNzQsIDIyOiA5OSwgMjM6IFsyLCA1Ml0sIDYzOiAxMDAsIDY0OiA3NSwgNjU6IFsxLCA0M10sIDY5OiAxMDEsIDcwOiA3NiwgNzE6IDc3LCA3MjogWzEsIDc4XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDIwOiA3NCwgMzM6IFsyLCA5Ml0sIDYyOiAxMDIsIDYzOiAxMDMsIDY0OiA3NSwgNjU6IFsxLCA0M10sIDY5OiAxMDQsIDcwOiA3NiwgNzE6IDc3LCA3MjogWzEsIDc4XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDMzOiBbMSwgMTA1XSB9LCB7IDMzOiBbMiwgNzldLCA2NTogWzIsIDc5XSwgNzI6IFsyLCA3OV0sIDgwOiBbMiwgNzldLCA4MTogWzIsIDc5XSwgODI6IFsyLCA3OV0sIDgzOiBbMiwgNzldLCA4NDogWzIsIDc5XSwgODU6IFsyLCA3OV0gfSwgeyAzMzogWzIsIDgxXSB9LCB7IDIzOiBbMiwgMjddLCAzMzogWzIsIDI3XSwgNTQ6IFsyLCAyN10sIDY1OiBbMiwgMjddLCA2ODogWzIsIDI3XSwgNzI6IFsyLCAyN10sIDc1OiBbMiwgMjddLCA4MDogWzIsIDI3XSwgODE6IFsyLCAyN10sIDgyOiBbMiwgMjddLCA4MzogWzIsIDI3XSwgODQ6IFsyLCAyN10sIDg1OiBbMiwgMjddIH0sIHsgMjM6IFsyLCAyOF0sIDMzOiBbMiwgMjhdLCA1NDogWzIsIDI4XSwgNjU6IFsyLCAyOF0sIDY4OiBbMiwgMjhdLCA3MjogWzIsIDI4XSwgNzU6IFsyLCAyOF0sIDgwOiBbMiwgMjhdLCA4MTogWzIsIDI4XSwgODI6IFsyLCAyOF0sIDgzOiBbMiwgMjhdLCA4NDogWzIsIDI4XSwgODU6IFsyLCAyOF0gfSwgeyAyMzogWzIsIDMwXSwgMzM6IFsyLCAzMF0sIDU0OiBbMiwgMzBdLCA2ODogWzIsIDMwXSwgNzE6IDEwNiwgNzI6IFsxLCAxMDddLCA3NTogWzIsIDMwXSB9LCB7IDIzOiBbMiwgOThdLCAzMzogWzIsIDk4XSwgNTQ6IFsyLCA5OF0sIDY4OiBbMiwgOThdLCA3MjogWzIsIDk4XSwgNzU6IFsyLCA5OF0gfSwgeyAyMzogWzIsIDQ1XSwgMzM6IFsyLCA0NV0sIDU0OiBbMiwgNDVdLCA2NTogWzIsIDQ1XSwgNjg6IFsyLCA0NV0sIDcyOiBbMiwgNDVdLCA3MzogWzEsIDEwOF0sIDc1OiBbMiwgNDVdLCA4MDogWzIsIDQ1XSwgODE6IFsyLCA0NV0sIDgyOiBbMiwgNDVdLCA4MzogWzIsIDQ1XSwgODQ6IFsyLCA0NV0sIDg1OiBbMiwgNDVdLCA4NzogWzIsIDQ1XSB9LCB7IDIzOiBbMiwgNDRdLCAzMzogWzIsIDQ0XSwgNTQ6IFsyLCA0NF0sIDY1OiBbMiwgNDRdLCA2ODogWzIsIDQ0XSwgNzI6IFsyLCA0NF0sIDc1OiBbMiwgNDRdLCA4MDogWzIsIDQ0XSwgODE6IFsyLCA0NF0sIDgyOiBbMiwgNDRdLCA4MzogWzIsIDQ0XSwgODQ6IFsyLCA0NF0sIDg1OiBbMiwgNDRdLCA4NzogWzIsIDQ0XSB9LCB7IDU0OiBbMSwgMTA5XSB9LCB7IDU0OiBbMiwgODNdLCA2NTogWzIsIDgzXSwgNzI6IFsyLCA4M10sIDgwOiBbMiwgODNdLCA4MTogWzIsIDgzXSwgODI6IFsyLCA4M10sIDgzOiBbMiwgODNdLCA4NDogWzIsIDgzXSwgODU6IFsyLCA4M10gfSwgeyA1NDogWzIsIDg1XSB9LCB7IDU6IFsyLCAxM10sIDE0OiBbMiwgMTNdLCAxNTogWzIsIDEzXSwgMTk6IFsyLCAxM10sIDI5OiBbMiwgMTNdLCAzNDogWzIsIDEzXSwgMzk6IFsyLCAxM10sIDQ0OiBbMiwgMTNdLCA0NzogWzIsIDEzXSwgNDg6IFsyLCAxM10sIDUxOiBbMiwgMTNdLCA1NTogWzIsIDEzXSwgNjA6IFsyLCAxM10gfSwgeyAzODogNTUsIDM5OiBbMSwgNTddLCA0MzogNTYsIDQ0OiBbMSwgNThdLCA0NTogMTExLCA0NjogMTEwLCA0NzogWzIsIDc2XSB9LCB7IDMzOiBbMiwgNzBdLCA0MDogMTEyLCA2NTogWzIsIDcwXSwgNzI6IFsyLCA3MF0sIDc1OiBbMiwgNzBdLCA4MDogWzIsIDcwXSwgODE6IFsyLCA3MF0sIDgyOiBbMiwgNzBdLCA4MzogWzIsIDcwXSwgODQ6IFsyLCA3MF0sIDg1OiBbMiwgNzBdIH0sIHsgNDc6IFsyLCAxOF0gfSwgeyA1OiBbMiwgMTRdLCAxNDogWzIsIDE0XSwgMTU6IFsyLCAxNF0sIDE5OiBbMiwgMTRdLCAyOTogWzIsIDE0XSwgMzQ6IFsyLCAxNF0sIDM5OiBbMiwgMTRdLCA0NDogWzIsIDE0XSwgNDc6IFsyLCAxNF0sIDQ4OiBbMiwgMTRdLCA1MTogWzIsIDE0XSwgNTU6IFsyLCAxNF0sIDYwOiBbMiwgMTRdIH0sIHsgMzM6IFsxLCAxMTNdIH0sIHsgMzM6IFsyLCA4N10sIDY1OiBbMiwgODddLCA3MjogWzIsIDg3XSwgODA6IFsyLCA4N10sIDgxOiBbMiwgODddLCA4MjogWzIsIDg3XSwgODM6IFsyLCA4N10sIDg0OiBbMiwgODddLCA4NTogWzIsIDg3XSB9LCB7IDMzOiBbMiwgODldIH0sIHsgMjA6IDc0LCA2MzogMTE1LCA2NDogNzUsIDY1OiBbMSwgNDNdLCA2NzogMTE0LCA2ODogWzIsIDk2XSwgNjk6IDExNiwgNzA6IDc2LCA3MTogNzcsIDcyOiBbMSwgNzhdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMzM6IFsxLCAxMTddIH0sIHsgMzI6IDExOCwgMzM6IFsyLCA2Ml0sIDc0OiAxMTksIDc1OiBbMSwgMTIwXSB9LCB7IDMzOiBbMiwgNTldLCA2NTogWzIsIDU5XSwgNzI6IFsyLCA1OV0sIDc1OiBbMiwgNTldLCA4MDogWzIsIDU5XSwgODE6IFsyLCA1OV0sIDgyOiBbMiwgNTldLCA4MzogWzIsIDU5XSwgODQ6IFsyLCA1OV0sIDg1OiBbMiwgNTldIH0sIHsgMzM6IFsyLCA2MV0sIDc1OiBbMiwgNjFdIH0sIHsgMzM6IFsyLCA2OF0sIDM3OiAxMjEsIDc0OiAxMjIsIDc1OiBbMSwgMTIwXSB9LCB7IDMzOiBbMiwgNjVdLCA2NTogWzIsIDY1XSwgNzI6IFsyLCA2NV0sIDc1OiBbMiwgNjVdLCA4MDogWzIsIDY1XSwgODE6IFsyLCA2NV0sIDgyOiBbMiwgNjVdLCA4MzogWzIsIDY1XSwgODQ6IFsyLCA2NV0sIDg1OiBbMiwgNjVdIH0sIHsgMzM6IFsyLCA2N10sIDc1OiBbMiwgNjddIH0sIHsgMjM6IFsxLCAxMjNdIH0sIHsgMjM6IFsyLCA1MV0sIDY1OiBbMiwgNTFdLCA3MjogWzIsIDUxXSwgODA6IFsyLCA1MV0sIDgxOiBbMiwgNTFdLCA4MjogWzIsIDUxXSwgODM6IFsyLCA1MV0sIDg0OiBbMiwgNTFdLCA4NTogWzIsIDUxXSB9LCB7IDIzOiBbMiwgNTNdIH0sIHsgMzM6IFsxLCAxMjRdIH0sIHsgMzM6IFsyLCA5MV0sIDY1OiBbMiwgOTFdLCA3MjogWzIsIDkxXSwgODA6IFsyLCA5MV0sIDgxOiBbMiwgOTFdLCA4MjogWzIsIDkxXSwgODM6IFsyLCA5MV0sIDg0OiBbMiwgOTFdLCA4NTogWzIsIDkxXSB9LCB7IDMzOiBbMiwgOTNdIH0sIHsgNTogWzIsIDIyXSwgMTQ6IFsyLCAyMl0sIDE1OiBbMiwgMjJdLCAxOTogWzIsIDIyXSwgMjk6IFsyLCAyMl0sIDM0OiBbMiwgMjJdLCAzOTogWzIsIDIyXSwgNDQ6IFsyLCAyMl0sIDQ3OiBbMiwgMjJdLCA0ODogWzIsIDIyXSwgNTE6IFsyLCAyMl0sIDU1OiBbMiwgMjJdLCA2MDogWzIsIDIyXSB9LCB7IDIzOiBbMiwgOTldLCAzMzogWzIsIDk5XSwgNTQ6IFsyLCA5OV0sIDY4OiBbMiwgOTldLCA3MjogWzIsIDk5XSwgNzU6IFsyLCA5OV0gfSwgeyA3MzogWzEsIDEwOF0gfSwgeyAyMDogNzQsIDYzOiAxMjUsIDY0OiA3NSwgNjU6IFsxLCA0M10sIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgNTogWzIsIDIzXSwgMTQ6IFsyLCAyM10sIDE1OiBbMiwgMjNdLCAxOTogWzIsIDIzXSwgMjk6IFsyLCAyM10sIDM0OiBbMiwgMjNdLCAzOTogWzIsIDIzXSwgNDQ6IFsyLCAyM10sIDQ3OiBbMiwgMjNdLCA0ODogWzIsIDIzXSwgNTE6IFsyLCAyM10sIDU1OiBbMiwgMjNdLCA2MDogWzIsIDIzXSB9LCB7IDQ3OiBbMiwgMTldIH0sIHsgNDc6IFsyLCA3N10gfSwgeyAyMDogNzQsIDMzOiBbMiwgNzJdLCA0MTogMTI2LCA2MzogMTI3LCA2NDogNzUsIDY1OiBbMSwgNDNdLCA2OTogMTI4LCA3MDogNzYsIDcxOiA3NywgNzI6IFsxLCA3OF0sIDc1OiBbMiwgNzJdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgNTogWzIsIDI0XSwgMTQ6IFsyLCAyNF0sIDE1OiBbMiwgMjRdLCAxOTogWzIsIDI0XSwgMjk6IFsyLCAyNF0sIDM0OiBbMiwgMjRdLCAzOTogWzIsIDI0XSwgNDQ6IFsyLCAyNF0sIDQ3OiBbMiwgMjRdLCA0ODogWzIsIDI0XSwgNTE6IFsyLCAyNF0sIDU1OiBbMiwgMjRdLCA2MDogWzIsIDI0XSB9LCB7IDY4OiBbMSwgMTI5XSB9LCB7IDY1OiBbMiwgOTVdLCA2ODogWzIsIDk1XSwgNzI6IFsyLCA5NV0sIDgwOiBbMiwgOTVdLCA4MTogWzIsIDk1XSwgODI6IFsyLCA5NV0sIDgzOiBbMiwgOTVdLCA4NDogWzIsIDk1XSwgODU6IFsyLCA5NV0gfSwgeyA2ODogWzIsIDk3XSB9LCB7IDU6IFsyLCAyMV0sIDE0OiBbMiwgMjFdLCAxNTogWzIsIDIxXSwgMTk6IFsyLCAyMV0sIDI5OiBbMiwgMjFdLCAzNDogWzIsIDIxXSwgMzk6IFsyLCAyMV0sIDQ0OiBbMiwgMjFdLCA0NzogWzIsIDIxXSwgNDg6IFsyLCAyMV0sIDUxOiBbMiwgMjFdLCA1NTogWzIsIDIxXSwgNjA6IFsyLCAyMV0gfSwgeyAzMzogWzEsIDEzMF0gfSwgeyAzMzogWzIsIDYzXSB9LCB7IDcyOiBbMSwgMTMyXSwgNzY6IDEzMSB9LCB7IDMzOiBbMSwgMTMzXSB9LCB7IDMzOiBbMiwgNjldIH0sIHsgMTU6IFsyLCAxMl0sIDE4OiBbMiwgMTJdIH0sIHsgMTQ6IFsyLCAyNl0sIDE1OiBbMiwgMjZdLCAxOTogWzIsIDI2XSwgMjk6IFsyLCAyNl0sIDM0OiBbMiwgMjZdLCA0NzogWzIsIDI2XSwgNDg6IFsyLCAyNl0sIDUxOiBbMiwgMjZdLCA1NTogWzIsIDI2XSwgNjA6IFsyLCAyNl0gfSwgeyAyMzogWzIsIDMxXSwgMzM6IFsyLCAzMV0sIDU0OiBbMiwgMzFdLCA2ODogWzIsIDMxXSwgNzI6IFsyLCAzMV0sIDc1OiBbMiwgMzFdIH0sIHsgMzM6IFsyLCA3NF0sIDQyOiAxMzQsIDc0OiAxMzUsIDc1OiBbMSwgMTIwXSB9LCB7IDMzOiBbMiwgNzFdLCA2NTogWzIsIDcxXSwgNzI6IFsyLCA3MV0sIDc1OiBbMiwgNzFdLCA4MDogWzIsIDcxXSwgODE6IFsyLCA3MV0sIDgyOiBbMiwgNzFdLCA4MzogWzIsIDcxXSwgODQ6IFsyLCA3MV0sIDg1OiBbMiwgNzFdIH0sIHsgMzM6IFsyLCA3M10sIDc1OiBbMiwgNzNdIH0sIHsgMjM6IFsyLCAyOV0sIDMzOiBbMiwgMjldLCA1NDogWzIsIDI5XSwgNjU6IFsyLCAyOV0sIDY4OiBbMiwgMjldLCA3MjogWzIsIDI5XSwgNzU6IFsyLCAyOV0sIDgwOiBbMiwgMjldLCA4MTogWzIsIDI5XSwgODI6IFsyLCAyOV0sIDgzOiBbMiwgMjldLCA4NDogWzIsIDI5XSwgODU6IFsyLCAyOV0gfSwgeyAxNDogWzIsIDE1XSwgMTU6IFsyLCAxNV0sIDE5OiBbMiwgMTVdLCAyOTogWzIsIDE1XSwgMzQ6IFsyLCAxNV0sIDM5OiBbMiwgMTVdLCA0NDogWzIsIDE1XSwgNDc6IFsyLCAxNV0sIDQ4OiBbMiwgMTVdLCA1MTogWzIsIDE1XSwgNTU6IFsyLCAxNV0sIDYwOiBbMiwgMTVdIH0sIHsgNzI6IFsxLCAxMzddLCA3NzogWzEsIDEzNl0gfSwgeyA3MjogWzIsIDEwMF0sIDc3OiBbMiwgMTAwXSB9LCB7IDE0OiBbMiwgMTZdLCAxNTogWzIsIDE2XSwgMTk6IFsyLCAxNl0sIDI5OiBbMiwgMTZdLCAzNDogWzIsIDE2XSwgNDQ6IFsyLCAxNl0sIDQ3OiBbMiwgMTZdLCA0ODogWzIsIDE2XSwgNTE6IFsyLCAxNl0sIDU1OiBbMiwgMTZdLCA2MDogWzIsIDE2XSB9LCB7IDMzOiBbMSwgMTM4XSB9LCB7IDMzOiBbMiwgNzVdIH0sIHsgMzM6IFsyLCAzMl0gfSwgeyA3MjogWzIsIDEwMV0sIDc3OiBbMiwgMTAxXSB9LCB7IDE0OiBbMiwgMTddLCAxNTogWzIsIDE3XSwgMTk6IFsyLCAxN10sIDI5OiBbMiwgMTddLCAzNDogWzIsIDE3XSwgMzk6IFsyLCAxN10sIDQ0OiBbMiwgMTddLCA0NzogWzIsIDE3XSwgNDg6IFsyLCAxN10sIDUxOiBbMiwgMTddLCA1NTogWzIsIDE3XSwgNjA6IFsyLCAxN10gfV0sXG5cdCAgICAgICAgZGVmYXVsdEFjdGlvbnM6IHsgNDogWzIsIDFdLCA1NDogWzIsIDU1XSwgNTY6IFsyLCAyMF0sIDYwOiBbMiwgNTddLCA3MzogWzIsIDgxXSwgODI6IFsyLCA4NV0sIDg2OiBbMiwgMThdLCA5MDogWzIsIDg5XSwgMTAxOiBbMiwgNTNdLCAxMDQ6IFsyLCA5M10sIDExMDogWzIsIDE5XSwgMTExOiBbMiwgNzddLCAxMTY6IFsyLCA5N10sIDExOTogWzIsIDYzXSwgMTIyOiBbMiwgNjldLCAxMzU6IFsyLCA3NV0sIDEzNjogWzIsIDMyXSB9LFxuXHQgICAgICAgIHBhcnNlRXJyb3I6IGZ1bmN0aW9uIHBhcnNlRXJyb3Ioc3RyLCBoYXNoKSB7XG5cdCAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzdHIpO1xuXHQgICAgICAgIH0sXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlKGlucHV0KSB7XG5cdCAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcyxcblx0ICAgICAgICAgICAgICAgIHN0YWNrID0gWzBdLFxuXHQgICAgICAgICAgICAgICAgdnN0YWNrID0gW251bGxdLFxuXHQgICAgICAgICAgICAgICAgbHN0YWNrID0gW10sXG5cdCAgICAgICAgICAgICAgICB0YWJsZSA9IHRoaXMudGFibGUsXG5cdCAgICAgICAgICAgICAgICB5eXRleHQgPSBcIlwiLFxuXHQgICAgICAgICAgICAgICAgeXlsaW5lbm8gPSAwLFxuXHQgICAgICAgICAgICAgICAgeXlsZW5nID0gMCxcblx0ICAgICAgICAgICAgICAgIHJlY292ZXJpbmcgPSAwLFxuXHQgICAgICAgICAgICAgICAgVEVSUk9SID0gMixcblx0ICAgICAgICAgICAgICAgIEVPRiA9IDE7XG5cdCAgICAgICAgICAgIHRoaXMubGV4ZXIuc2V0SW5wdXQoaW5wdXQpO1xuXHQgICAgICAgICAgICB0aGlzLmxleGVyLnl5ID0gdGhpcy55eTtcblx0ICAgICAgICAgICAgdGhpcy55eS5sZXhlciA9IHRoaXMubGV4ZXI7XG5cdCAgICAgICAgICAgIHRoaXMueXkucGFyc2VyID0gdGhpcztcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmxleGVyLnl5bGxvYyA9PSBcInVuZGVmaW5lZFwiKSB0aGlzLmxleGVyLnl5bGxvYyA9IHt9O1xuXHQgICAgICAgICAgICB2YXIgeXlsb2MgPSB0aGlzLmxleGVyLnl5bGxvYztcblx0ICAgICAgICAgICAgbHN0YWNrLnB1c2goeXlsb2MpO1xuXHQgICAgICAgICAgICB2YXIgcmFuZ2VzID0gdGhpcy5sZXhlci5vcHRpb25zICYmIHRoaXMubGV4ZXIub3B0aW9ucy5yYW5nZXM7XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy55eS5wYXJzZUVycm9yID09PSBcImZ1bmN0aW9uXCIpIHRoaXMucGFyc2VFcnJvciA9IHRoaXMueXkucGFyc2VFcnJvcjtcblx0ICAgICAgICAgICAgZnVuY3Rpb24gcG9wU3RhY2sobikge1xuXHQgICAgICAgICAgICAgICAgc3RhY2subGVuZ3RoID0gc3RhY2subGVuZ3RoIC0gMiAqIG47XG5cdCAgICAgICAgICAgICAgICB2c3RhY2subGVuZ3RoID0gdnN0YWNrLmxlbmd0aCAtIG47XG5cdCAgICAgICAgICAgICAgICBsc3RhY2subGVuZ3RoID0gbHN0YWNrLmxlbmd0aCAtIG47XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgZnVuY3Rpb24gbGV4KCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIHRva2VuO1xuXHQgICAgICAgICAgICAgICAgdG9rZW4gPSBzZWxmLmxleGVyLmxleCgpIHx8IDE7XG5cdCAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuICE9PSBcIm51bWJlclwiKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSBzZWxmLnN5bWJvbHNfW3Rva2VuXSB8fCB0b2tlbjtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbjtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB2YXIgc3ltYm9sLFxuXHQgICAgICAgICAgICAgICAgcHJlRXJyb3JTeW1ib2wsXG5cdCAgICAgICAgICAgICAgICBzdGF0ZSxcblx0ICAgICAgICAgICAgICAgIGFjdGlvbixcblx0ICAgICAgICAgICAgICAgIGEsXG5cdCAgICAgICAgICAgICAgICByLFxuXHQgICAgICAgICAgICAgICAgeXl2YWwgPSB7fSxcblx0ICAgICAgICAgICAgICAgIHAsXG5cdCAgICAgICAgICAgICAgICBsZW4sXG5cdCAgICAgICAgICAgICAgICBuZXdTdGF0ZSxcblx0ICAgICAgICAgICAgICAgIGV4cGVjdGVkO1xuXHQgICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuXHQgICAgICAgICAgICAgICAgc3RhdGUgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcblx0ICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRBY3Rpb25zW3N0YXRlXSkge1xuXHQgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IHRoaXMuZGVmYXVsdEFjdGlvbnNbc3RhdGVdO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoc3ltYm9sID09PSBudWxsIHx8IHR5cGVvZiBzeW1ib2wgPT0gXCJ1bmRlZmluZWRcIikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2wgPSBsZXgoKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0gdGFibGVbc3RhdGVdICYmIHRhYmxlW3N0YXRlXVtzeW1ib2xdO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09IFwidW5kZWZpbmVkXCIgfHwgIWFjdGlvbi5sZW5ndGggfHwgIWFjdGlvblswXSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBlcnJTdHIgPSBcIlwiO1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICghcmVjb3ZlcmluZykge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHAgaW4gdGFibGVbc3RhdGVdKSBpZiAodGhpcy50ZXJtaW5hbHNfW3BdICYmIHAgPiAyKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZC5wdXNoKFwiJ1wiICsgdGhpcy50ZXJtaW5hbHNfW3BdICsgXCInXCIpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxleGVyLnNob3dQb3NpdGlvbikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyU3RyID0gXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKHl5bGluZW5vICsgMSkgKyBcIjpcXG5cIiArIHRoaXMubGV4ZXIuc2hvd1Bvc2l0aW9uKCkgKyBcIlxcbkV4cGVjdGluZyBcIiArIGV4cGVjdGVkLmpvaW4oXCIsIFwiKSArIFwiLCBnb3QgJ1wiICsgKHRoaXMudGVybWluYWxzX1tzeW1ib2xdIHx8IHN5bWJvbCkgKyBcIidcIjtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyclN0ciA9IFwiUGFyc2UgZXJyb3Igb24gbGluZSBcIiArICh5eWxpbmVubyArIDEpICsgXCI6IFVuZXhwZWN0ZWQgXCIgKyAoc3ltYm9sID09IDEgPyBcImVuZCBvZiBpbnB1dFwiIDogXCInXCIgKyAodGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sKSArIFwiJ1wiKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlRXJyb3IoZXJyU3RyLCB7IHRleHQ6IHRoaXMubGV4ZXIubWF0Y2gsIHRva2VuOiB0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wsIGxpbmU6IHRoaXMubGV4ZXIueXlsaW5lbm8sIGxvYzogeXlsb2MsIGV4cGVjdGVkOiBleHBlY3RlZCB9KTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBpZiAoYWN0aW9uWzBdIGluc3RhbmNlb2YgQXJyYXkgJiYgYWN0aW9uLmxlbmd0aCA+IDEpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXJzZSBFcnJvcjogbXVsdGlwbGUgYWN0aW9ucyBwb3NzaWJsZSBhdCBzdGF0ZTogXCIgKyBzdGF0ZSArIFwiLCB0b2tlbjogXCIgKyBzeW1ib2wpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgc3dpdGNoIChhY3Rpb25bMF0pIHtcblx0ICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goc3ltYm9sKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdnN0YWNrLnB1c2godGhpcy5sZXhlci55eXRleHQpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBsc3RhY2sucHVzaCh0aGlzLmxleGVyLnl5bGxvYyk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goYWN0aW9uWzFdKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sID0gbnVsbDtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwcmVFcnJvclN5bWJvbCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgeXlsZW5nID0gdGhpcy5sZXhlci55eWxlbmc7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB5eXRleHQgPSB0aGlzLmxleGVyLnl5dGV4dDtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHl5bGluZW5vID0gdGhpcy5sZXhlci55eWxpbmVubztcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHl5bG9jID0gdGhpcy5sZXhlci55eWxsb2M7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjb3ZlcmluZyA+IDApIHJlY292ZXJpbmctLTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbCA9IHByZUVycm9yU3ltYm9sO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlRXJyb3JTeW1ib2wgPSBudWxsO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbGVuID0gdGhpcy5wcm9kdWN0aW9uc19bYWN0aW9uWzFdXVsxXTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgeXl2YWwuJCA9IHZzdGFja1t2c3RhY2subGVuZ3RoIC0gbGVuXTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgeXl2YWwuXyQgPSB7IGZpcnN0X2xpbmU6IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0uZmlyc3RfbGluZSwgbGFzdF9saW5lOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIDFdLmxhc3RfbGluZSwgZmlyc3RfY29sdW1uOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIChsZW4gfHwgMSldLmZpcnN0X2NvbHVtbiwgbGFzdF9jb2x1bW46IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gMV0ubGFzdF9jb2x1bW4gfTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJhbmdlcykge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgeXl2YWwuXyQucmFuZ2UgPSBbbHN0YWNrW2xzdGFjay5sZW5ndGggLSAobGVuIHx8IDEpXS5yYW5nZVswXSwgbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5yYW5nZVsxXV07XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgciA9IHRoaXMucGVyZm9ybUFjdGlvbi5jYWxsKHl5dmFsLCB5eXRleHQsIHl5bGVuZywgeXlsaW5lbm8sIHRoaXMueXksIGFjdGlvblsxXSwgdnN0YWNrLCBsc3RhY2spO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHIgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZW4pIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrID0gc3RhY2suc2xpY2UoMCwgLTEgKiBsZW4gKiAyKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZzdGFjayA9IHZzdGFjay5zbGljZSgwLCAtMSAqIGxlbik7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBsc3RhY2sgPSBsc3RhY2suc2xpY2UoMCwgLTEgKiBsZW4pO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2godGhpcy5wcm9kdWN0aW9uc19bYWN0aW9uWzFdXVswXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHZzdGFjay5wdXNoKHl5dmFsLiQpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBsc3RhY2sucHVzaCh5eXZhbC5fJCk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlID0gdGFibGVbc3RhY2tbc3RhY2subGVuZ3RoIC0gMl1dW3N0YWNrW3N0YWNrLmxlbmd0aCAtIDFdXTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChuZXdTdGF0ZSk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcblx0ICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIC8qIEppc29uIGdlbmVyYXRlZCBsZXhlciAqL1xuXHQgICAgdmFyIGxleGVyID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgbGV4ZXIgPSB7IEVPRjogMSxcblx0ICAgICAgICAgICAgcGFyc2VFcnJvcjogZnVuY3Rpb24gcGFyc2VFcnJvcihzdHIsIGhhc2gpIHtcblx0ICAgICAgICAgICAgICAgIGlmICh0aGlzLnl5LnBhcnNlcikge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMueXkucGFyc2VyLnBhcnNlRXJyb3Ioc3RyLCBoYXNoKTtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHN0cik7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHNldElucHV0OiBmdW5jdGlvbiBzZXRJbnB1dChpbnB1dCkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5faW5wdXQgPSBpbnB1dDtcblx0ICAgICAgICAgICAgICAgIHRoaXMuX21vcmUgPSB0aGlzLl9sZXNzID0gdGhpcy5kb25lID0gZmFsc2U7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnl5bGluZW5vID0gdGhpcy55eWxlbmcgPSAwO1xuXHQgICAgICAgICAgICAgICAgdGhpcy55eXRleHQgPSB0aGlzLm1hdGNoZWQgPSB0aGlzLm1hdGNoID0gJyc7XG5cdCAgICAgICAgICAgICAgICB0aGlzLmNvbmRpdGlvblN0YWNrID0gWydJTklUSUFMJ107XG5cdCAgICAgICAgICAgICAgICB0aGlzLnl5bGxvYyA9IHsgZmlyc3RfbGluZTogMSwgZmlyc3RfY29sdW1uOiAwLCBsYXN0X2xpbmU6IDEsIGxhc3RfY29sdW1uOiAwIH07XG5cdCAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykgdGhpcy55eWxsb2MucmFuZ2UgPSBbMCwgMF07XG5cdCAgICAgICAgICAgICAgICB0aGlzLm9mZnNldCA9IDA7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uIGlucHV0KCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGNoID0gdGhpcy5faW5wdXRbMF07XG5cdCAgICAgICAgICAgICAgICB0aGlzLnl5dGV4dCArPSBjaDtcblx0ICAgICAgICAgICAgICAgIHRoaXMueXlsZW5nKys7XG5cdCAgICAgICAgICAgICAgICB0aGlzLm9mZnNldCsrO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5tYXRjaCArPSBjaDtcblx0ICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hlZCArPSBjaDtcblx0ICAgICAgICAgICAgICAgIHZhciBsaW5lcyA9IGNoLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKTtcblx0ICAgICAgICAgICAgICAgIGlmIChsaW5lcykge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsaW5lbm8rKztcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnl5bGxvYy5sYXN0X2xpbmUrKztcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eWxsb2MubGFzdF9jb2x1bW4rKztcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB0aGlzLnl5bGxvYy5yYW5nZVsxXSsrO1xuXG5cdCAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKDEpO1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGNoO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICB1bnB1dDogZnVuY3Rpb24gdW5wdXQoY2gpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBsZW4gPSBjaC5sZW5ndGg7XG5cdCAgICAgICAgICAgICAgICB2YXIgbGluZXMgPSBjaC5zcGxpdCgvKD86XFxyXFxuP3xcXG4pL2cpO1xuXG5cdCAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dCA9IGNoICsgdGhpcy5faW5wdXQ7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnl5dGV4dCA9IHRoaXMueXl0ZXh0LnN1YnN0cigwLCB0aGlzLnl5dGV4dC5sZW5ndGggLSBsZW4gLSAxKTtcblx0ICAgICAgICAgICAgICAgIC8vdGhpcy55eWxlbmcgLT0gbGVuO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5vZmZzZXQgLT0gbGVuO1xuXHQgICAgICAgICAgICAgICAgdmFyIG9sZExpbmVzID0gdGhpcy5tYXRjaC5zcGxpdCgvKD86XFxyXFxuP3xcXG4pL2cpO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5tYXRjaCA9IHRoaXMubWF0Y2guc3Vic3RyKDAsIHRoaXMubWF0Y2gubGVuZ3RoIC0gMSk7XG5cdCAgICAgICAgICAgICAgICB0aGlzLm1hdGNoZWQgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGggLSAxKTtcblxuXHQgICAgICAgICAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCAtIDEpIHRoaXMueXlsaW5lbm8gLT0gbGluZXMubGVuZ3RoIC0gMTtcblx0ICAgICAgICAgICAgICAgIHZhciByID0gdGhpcy55eWxsb2MucmFuZ2U7XG5cblx0ICAgICAgICAgICAgICAgIHRoaXMueXlsbG9jID0geyBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5maXJzdF9saW5lLFxuXHQgICAgICAgICAgICAgICAgICAgIGxhc3RfbGluZTogdGhpcy55eWxpbmVubyArIDEsXG5cdCAgICAgICAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4sXG5cdCAgICAgICAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IGxpbmVzID8gKGxpbmVzLmxlbmd0aCA9PT0gb2xkTGluZXMubGVuZ3RoID8gdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIDogMCkgKyBvbGRMaW5lc1tvbGRMaW5lcy5sZW5ndGggLSBsaW5lcy5sZW5ndGhdLmxlbmd0aCAtIGxpbmVzWzBdLmxlbmd0aCA6IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbiAtIGxlblxuXHQgICAgICAgICAgICAgICAgfTtcblxuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZSA9IFtyWzBdLCByWzBdICsgdGhpcy55eWxlbmcgLSBsZW5dO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIG1vcmU6IGZ1bmN0aW9uIG1vcmUoKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9tb3JlID0gdHJ1ZTtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBsZXNzOiBmdW5jdGlvbiBsZXNzKG4pIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMudW5wdXQodGhpcy5tYXRjaC5zbGljZShuKSk7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHBhc3RJbnB1dDogZnVuY3Rpb24gcGFzdElucHV0KCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIHBhc3QgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGggLSB0aGlzLm1hdGNoLmxlbmd0aCk7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gKHBhc3QubGVuZ3RoID4gMjAgPyAnLi4uJyA6ICcnKSArIHBhc3Quc3Vic3RyKC0yMCkucmVwbGFjZSgvXFxuL2csIFwiXCIpO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICB1cGNvbWluZ0lucHV0OiBmdW5jdGlvbiB1cGNvbWluZ0lucHV0KCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIG5leHQgPSB0aGlzLm1hdGNoO1xuXHQgICAgICAgICAgICAgICAgaWYgKG5leHQubGVuZ3RoIDwgMjApIHtcblx0ICAgICAgICAgICAgICAgICAgICBuZXh0ICs9IHRoaXMuX2lucHV0LnN1YnN0cigwLCAyMCAtIG5leHQubGVuZ3RoKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIHJldHVybiAobmV4dC5zdWJzdHIoMCwgMjApICsgKG5leHQubGVuZ3RoID4gMjAgPyAnLi4uJyA6ICcnKSkucmVwbGFjZSgvXFxuL2csIFwiXCIpO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBzaG93UG9zaXRpb246IGZ1bmN0aW9uIHNob3dQb3NpdGlvbigpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBwcmUgPSB0aGlzLnBhc3RJbnB1dCgpO1xuXHQgICAgICAgICAgICAgICAgdmFyIGMgPSBuZXcgQXJyYXkocHJlLmxlbmd0aCArIDEpLmpvaW4oXCItXCIpO1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHByZSArIHRoaXMudXBjb21pbmdJbnB1dCgpICsgXCJcXG5cIiArIGMgKyBcIl5cIjtcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dCgpIHtcblx0ICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbmUpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5FT0Y7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2lucHV0KSB0aGlzLmRvbmUgPSB0cnVlO1xuXG5cdCAgICAgICAgICAgICAgICB2YXIgdG9rZW4sIG1hdGNoLCB0ZW1wTWF0Y2gsIGluZGV4LCBjb2wsIGxpbmVzO1xuXHQgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9tb3JlKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eXRleHQgPSAnJztcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoID0gJyc7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB2YXIgcnVsZXMgPSB0aGlzLl9jdXJyZW50UnVsZXMoKTtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICB0ZW1wTWF0Y2ggPSB0aGlzLl9pbnB1dC5tYXRjaCh0aGlzLnJ1bGVzW3J1bGVzW2ldXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBNYXRjaCAmJiAoIW1hdGNoIHx8IHRlbXBNYXRjaFswXS5sZW5ndGggPiBtYXRjaFswXS5sZW5ndGgpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gdGVtcE1hdGNoO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLmZsZXgpIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGlmIChtYXRjaCkge1xuXHQgICAgICAgICAgICAgICAgICAgIGxpbmVzID0gbWF0Y2hbMF0ubWF0Y2goLyg/Olxcclxcbj98XFxuKS4qL2cpO1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChsaW5lcykgdGhpcy55eWxpbmVubyArPSBsaW5lcy5sZW5ndGg7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eWxsb2MgPSB7IGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmxhc3RfbGluZSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbixcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9jb2x1bW46IGxpbmVzID8gbGluZXNbbGluZXMubGVuZ3RoIC0gMV0ubGVuZ3RoIC0gbGluZXNbbGluZXMubGVuZ3RoIC0gMV0ubWF0Y2goL1xccj9cXG4/LylbMF0ubGVuZ3RoIDogdGhpcy55eWxsb2MubGFzdF9jb2x1bW4gKyBtYXRjaFswXS5sZW5ndGggfTtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnl5dGV4dCArPSBtYXRjaFswXTtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoICs9IG1hdGNoWzBdO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hlcyA9IG1hdGNoO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoO1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlID0gW3RoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArPSB0aGlzLnl5bGVuZ107XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vcmUgPSBmYWxzZTtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKG1hdGNoWzBdLmxlbmd0aCk7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaGVkICs9IG1hdGNoWzBdO1xuXHQgICAgICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5wZXJmb3JtQWN0aW9uLmNhbGwodGhpcywgdGhpcy55eSwgdGhpcywgcnVsZXNbaW5kZXhdLCB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRvbmUgJiYgdGhpcy5faW5wdXQpIHRoaXMuZG9uZSA9IGZhbHNlO1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbikgcmV0dXJuIHRva2VuO2Vsc2UgcmV0dXJuO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lucHV0ID09PSBcIlwiKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRU9GO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUVycm9yKCdMZXhpY2FsIGVycm9yIG9uIGxpbmUgJyArICh0aGlzLnl5bGluZW5vICsgMSkgKyAnLiBVbnJlY29nbml6ZWQgdGV4dC5cXG4nICsgdGhpcy5zaG93UG9zaXRpb24oKSwgeyB0ZXh0OiBcIlwiLCB0b2tlbjogbnVsbCwgbGluZTogdGhpcy55eWxpbmVubyB9KTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgbGV4OiBmdW5jdGlvbiBsZXgoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgciA9IHRoaXMubmV4dCgpO1xuXHQgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByICE9PSAndW5kZWZpbmVkJykge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiByO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sZXgoKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgYmVnaW46IGZ1bmN0aW9uIGJlZ2luKGNvbmRpdGlvbikge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5jb25kaXRpb25TdGFjay5wdXNoKGNvbmRpdGlvbik7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHBvcFN0YXRlOiBmdW5jdGlvbiBwb3BTdGF0ZSgpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrLnBvcCgpO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBfY3VycmVudFJ1bGVzOiBmdW5jdGlvbiBfY3VycmVudFJ1bGVzKCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uc1t0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV1dLnJ1bGVzO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICB0b3BTdGF0ZTogZnVuY3Rpb24gdG9wU3RhdGUoKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDJdO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBwdXNoU3RhdGU6IGZ1bmN0aW9uIGJlZ2luKGNvbmRpdGlvbikge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5iZWdpbihjb25kaXRpb24pO1xuXHQgICAgICAgICAgICB9IH07XG5cdCAgICAgICAgbGV4ZXIub3B0aW9ucyA9IHt9O1xuXHQgICAgICAgIGxleGVyLnBlcmZvcm1BY3Rpb24gPSBmdW5jdGlvbiBhbm9ueW1vdXMoeXksIHl5XywgJGF2b2lkaW5nX25hbWVfY29sbGlzaW9ucywgWVlfU1RBUlQpIHtcblxuXHQgICAgICAgICAgICBmdW5jdGlvbiBzdHJpcChzdGFydCwgZW5kKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4geXlfLnl5dGV4dCA9IHl5Xy55eXRleHQuc3Vic3RyaW5nKHN0YXJ0LCB5eV8ueXlsZW5nIC0gZW5kICsgc3RhcnQpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgdmFyIFlZU1RBVEUgPSBZWV9TVEFSVDtcblx0ICAgICAgICAgICAgc3dpdGNoICgkYXZvaWRpbmdfbmFtZV9jb2xsaXNpb25zKSB7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDA6XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHl5Xy55eXRleHQuc2xpY2UoLTIpID09PSBcIlxcXFxcXFxcXCIpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RyaXAoMCwgMSk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJtdVwiKTtcblx0ICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHl5Xy55eXRleHQuc2xpY2UoLTEpID09PSBcIlxcXFxcIikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdHJpcCgwLCAxKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWdpbihcImVtdVwiKTtcblx0ICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKFwibXVcIik7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgIGlmICh5eV8ueXl0ZXh0KSByZXR1cm4gMTU7XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTU7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAxNTtcblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW4oJ3JhdycpO3JldHVybiAxNTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgLy8gU2hvdWxkIGJlIHVzaW5nIGB0aGlzLnRvcFN0YXRlKClgIGJlbG93LCBidXQgaXQgY3VycmVudGx5XG5cdCAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJucyB0aGUgc2Vjb25kIHRvcCBpbnN0ZWFkIG9mIHRoZSBmaXJzdCB0b3AuIE9wZW5lZCBhblxuXHQgICAgICAgICAgICAgICAgICAgIC8vIGlzc3VlIGFib3V0IGl0IGF0IGh0dHBzOi8vZ2l0aHViLmNvbS96YWFjaC9qaXNvbi9pc3N1ZXMvMjkxXG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSA9PT0gJ3JhdycpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE1O1xuXHQgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwKDUsIDkpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0VORF9SQVdfQkxPQ0snO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA1OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAxNTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE0O1xuXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDc6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDY1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA4OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA2ODtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgOTpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDEwOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKCdyYXcnKTtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMjM7XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTE6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDU1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxMjpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNjA7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDEzOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAyOTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTQ6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDQ3O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7cmV0dXJuIDQ0O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7cmV0dXJuIDQ0O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMzQ7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE4OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAzOTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTk6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDUxO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyMDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNDg7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDIxOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMudW5wdXQoeXlfLnl5dGV4dCk7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW4oJ2NvbScpO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDIyOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTQ7XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjM6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDQ4O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyNDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNzM7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI1OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA3Mjtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjY6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDcyO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyNzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gODc7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI4OlxuXHQgICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZSB3aGl0ZXNwYWNlXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI5OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtyZXR1cm4gNTQ7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDMwOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtyZXR1cm4gMzM7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDMxOlxuXHQgICAgICAgICAgICAgICAgICAgIHl5Xy55eXRleHQgPSBzdHJpcCgxLCAyKS5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJyk7cmV0dXJuIDgwO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzMjpcblx0ICAgICAgICAgICAgICAgICAgICB5eV8ueXl0ZXh0ID0gc3RyaXAoMSwgMikucmVwbGFjZSgvXFxcXCcvZywgXCInXCIpO3JldHVybiA4MDtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzM6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDg1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzNDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gODI7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM1OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA4Mjtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzY6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDgzO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzNzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gODQ7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM4OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA4MTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzk6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDc1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0MDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNzc7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQxOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA3Mjtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDI6XG5cdCAgICAgICAgICAgICAgICAgICAgeXlfLnl5dGV4dCA9IHl5Xy55eXRleHQucmVwbGFjZSgvXFxcXChbXFxcXFxcXV0pL2csICckMScpO3JldHVybiA3Mjtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDM6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdJTlZBTElEJztcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDQ6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDU7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgICAgIGxleGVyLnJ1bGVzID0gWy9eKD86W15cXHgwMF0qPyg/PShcXHtcXHspKSkvLCAvXig/OlteXFx4MDBdKykvLCAvXig/OlteXFx4MDBdezIsfT8oPz0oXFx7XFx7fFxcXFxcXHtcXHt8XFxcXFxcXFxcXHtcXHt8JCkpKS8sIC9eKD86XFx7XFx7XFx7XFx7KD89W15cXC9dKSkvLCAvXig/Olxce1xce1xce1xce1xcL1teXFxzIVwiIyUtLFxcLlxcLzstPkBcXFstXFxeYFxcey1+XSsoPz1bPX1cXHNcXC8uXSlcXH1cXH1cXH1cXH0pLywgL14oPzpbXlxceDAwXSs/KD89KFxce1xce1xce1xceykpKS8sIC9eKD86W1xcc1xcU10qPy0tKH4pP1xcfVxcfSkvLCAvXig/OlxcKCkvLCAvXig/OlxcKSkvLCAvXig/Olxce1xce1xce1xceykvLCAvXig/OlxcfVxcfVxcfVxcfSkvLCAvXig/Olxce1xceyh+KT8+KS8sIC9eKD86XFx7XFx7KH4pPyM+KS8sIC9eKD86XFx7XFx7KH4pPyNcXCo/KS8sIC9eKD86XFx7XFx7KH4pP1xcLykvLCAvXig/Olxce1xceyh+KT9cXF5cXHMqKH4pP1xcfVxcfSkvLCAvXig/Olxce1xceyh+KT9cXHMqZWxzZVxccyoofik/XFx9XFx9KS8sIC9eKD86XFx7XFx7KH4pP1xcXikvLCAvXig/Olxce1xceyh+KT9cXHMqZWxzZVxcYikvLCAvXig/Olxce1xceyh+KT9cXHspLywgL14oPzpcXHtcXHsofik/JikvLCAvXig/Olxce1xceyh+KT8hLS0pLywgL14oPzpcXHtcXHsofik/IVtcXHNcXFNdKj9cXH1cXH0pLywgL14oPzpcXHtcXHsofik/XFwqPykvLCAvXig/Oj0pLywgL14oPzpcXC5cXC4pLywgL14oPzpcXC4oPz0oWz1+fVxcc1xcLy4pfF0pKSkvLCAvXig/OltcXC8uXSkvLCAvXig/OlxccyspLywgL14oPzpcXH0ofik/XFx9XFx9KS8sIC9eKD86KH4pP1xcfVxcfSkvLCAvXig/OlwiKFxcXFxbXCJdfFteXCJdKSpcIikvLCAvXig/OicoXFxcXFsnXXxbXiddKSonKS8sIC9eKD86QCkvLCAvXig/OnRydWUoPz0oW359XFxzKV0pKSkvLCAvXig/OmZhbHNlKD89KFt+fVxccyldKSkpLywgL14oPzp1bmRlZmluZWQoPz0oW359XFxzKV0pKSkvLCAvXig/Om51bGwoPz0oW359XFxzKV0pKSkvLCAvXig/Oi0/WzAtOV0rKD86XFwuWzAtOV0rKT8oPz0oW359XFxzKV0pKSkvLCAvXig/OmFzXFxzK1xcfCkvLCAvXig/OlxcfCkvLCAvXig/OihbXlxccyFcIiMlLSxcXC5cXC87LT5AXFxbLVxcXmBcXHstfl0rKD89KFs9fn1cXHNcXC8uKXxdKSkpKS8sIC9eKD86XFxbKFxcXFxcXF18W15cXF1dKSpcXF0pLywgL14oPzouKS8sIC9eKD86JCkvXTtcblx0ICAgICAgICBsZXhlci5jb25kaXRpb25zID0geyBcIm11XCI6IHsgXCJydWxlc1wiOiBbNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwLCAyMSwgMjIsIDIzLCAyNCwgMjUsIDI2LCAyNywgMjgsIDI5LCAzMCwgMzEsIDMyLCAzMywgMzQsIDM1LCAzNiwgMzcsIDM4LCAzOSwgNDAsIDQxLCA0MiwgNDMsIDQ0XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJlbXVcIjogeyBcInJ1bGVzXCI6IFsyXSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJjb21cIjogeyBcInJ1bGVzXCI6IFs2XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJyYXdcIjogeyBcInJ1bGVzXCI6IFszLCA0LCA1XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJJTklUSUFMXCI6IHsgXCJydWxlc1wiOiBbMCwgMSwgNDRdLCBcImluY2x1c2l2ZVwiOiB0cnVlIH0gfTtcblx0ICAgICAgICByZXR1cm4gbGV4ZXI7XG5cdCAgICB9KSgpO1xuXHQgICAgcGFyc2VyLmxleGVyID0gbGV4ZXI7XG5cdCAgICBmdW5jdGlvbiBQYXJzZXIoKSB7XG5cdCAgICAgICAgdGhpcy55eSA9IHt9O1xuXHQgICAgfVBhcnNlci5wcm90b3R5cGUgPSBwYXJzZXI7cGFyc2VyLlBhcnNlciA9IFBhcnNlcjtcblx0ICAgIHJldHVybiBuZXcgUGFyc2VyKCk7XG5cdH0pKCk7ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBoYW5kbGViYXJzO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG4vKioqLyB9KSxcbi8qIDQ4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF92aXNpdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0OSk7XG5cblx0dmFyIF92aXNpdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Zpc2l0b3IpO1xuXG5cdGZ1bmN0aW9uIFdoaXRlc3BhY2VDb250cm9sKCkge1xuXHQgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cblx0ICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHR9XG5cdFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZSA9IG5ldyBfdmlzaXRvcjJbJ2RlZmF1bHQnXSgpO1xuXG5cdFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5Qcm9ncmFtID0gZnVuY3Rpb24gKHByb2dyYW0pIHtcblx0ICB2YXIgZG9TdGFuZGFsb25lID0gIXRoaXMub3B0aW9ucy5pZ25vcmVTdGFuZGFsb25lO1xuXG5cdCAgdmFyIGlzUm9vdCA9ICF0aGlzLmlzUm9vdFNlZW47XG5cdCAgdGhpcy5pc1Jvb3RTZWVuID0gdHJ1ZTtcblxuXHQgIHZhciBib2R5ID0gcHJvZ3JhbS5ib2R5O1xuXHQgIGZvciAodmFyIGkgPSAwLCBsID0gYm9keS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgIHZhciBjdXJyZW50ID0gYm9keVtpXSxcblx0ICAgICAgICBzdHJpcCA9IHRoaXMuYWNjZXB0KGN1cnJlbnQpO1xuXG5cdCAgICBpZiAoIXN0cmlwKSB7XG5cdCAgICAgIGNvbnRpbnVlO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgX2lzUHJldldoaXRlc3BhY2UgPSBpc1ByZXZXaGl0ZXNwYWNlKGJvZHksIGksIGlzUm9vdCksXG5cdCAgICAgICAgX2lzTmV4dFdoaXRlc3BhY2UgPSBpc05leHRXaGl0ZXNwYWNlKGJvZHksIGksIGlzUm9vdCksXG5cdCAgICAgICAgb3BlblN0YW5kYWxvbmUgPSBzdHJpcC5vcGVuU3RhbmRhbG9uZSAmJiBfaXNQcmV2V2hpdGVzcGFjZSxcblx0ICAgICAgICBjbG9zZVN0YW5kYWxvbmUgPSBzdHJpcC5jbG9zZVN0YW5kYWxvbmUgJiYgX2lzTmV4dFdoaXRlc3BhY2UsXG5cdCAgICAgICAgaW5saW5lU3RhbmRhbG9uZSA9IHN0cmlwLmlubGluZVN0YW5kYWxvbmUgJiYgX2lzUHJldldoaXRlc3BhY2UgJiYgX2lzTmV4dFdoaXRlc3BhY2U7XG5cblx0ICAgIGlmIChzdHJpcC5jbG9zZSkge1xuXHQgICAgICBvbWl0UmlnaHQoYm9keSwgaSwgdHJ1ZSk7XG5cdCAgICB9XG5cdCAgICBpZiAoc3RyaXAub3Blbikge1xuXHQgICAgICBvbWl0TGVmdChib2R5LCBpLCB0cnVlKTtcblx0ICAgIH1cblxuXHQgICAgaWYgKGRvU3RhbmRhbG9uZSAmJiBpbmxpbmVTdGFuZGFsb25lKSB7XG5cdCAgICAgIG9taXRSaWdodChib2R5LCBpKTtcblxuXHQgICAgICBpZiAob21pdExlZnQoYm9keSwgaSkpIHtcblx0ICAgICAgICAvLyBJZiB3ZSBhcmUgb24gYSBzdGFuZGFsb25lIG5vZGUsIHNhdmUgdGhlIGluZGVudCBpbmZvIGZvciBwYXJ0aWFsc1xuXHQgICAgICAgIGlmIChjdXJyZW50LnR5cGUgPT09ICdQYXJ0aWFsU3RhdGVtZW50Jykge1xuXHQgICAgICAgICAgLy8gUHVsbCBvdXQgdGhlIHdoaXRlc3BhY2UgZnJvbSB0aGUgZmluYWwgbGluZVxuXHQgICAgICAgICAgY3VycmVudC5pbmRlbnQgPSAvKFsgXFx0XSskKS8uZXhlYyhib2R5W2kgLSAxXS5vcmlnaW5hbClbMV07XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgICBpZiAoZG9TdGFuZGFsb25lICYmIG9wZW5TdGFuZGFsb25lKSB7XG5cdCAgICAgIG9taXRSaWdodCgoY3VycmVudC5wcm9ncmFtIHx8IGN1cnJlbnQuaW52ZXJzZSkuYm9keSk7XG5cblx0ICAgICAgLy8gU3RyaXAgb3V0IHRoZSBwcmV2aW91cyBjb250ZW50IG5vZGUgaWYgaXQncyB3aGl0ZXNwYWNlIG9ubHlcblx0ICAgICAgb21pdExlZnQoYm9keSwgaSk7XG5cdCAgICB9XG5cdCAgICBpZiAoZG9TdGFuZGFsb25lICYmIGNsb3NlU3RhbmRhbG9uZSkge1xuXHQgICAgICAvLyBBbHdheXMgc3RyaXAgdGhlIG5leHQgbm9kZVxuXHQgICAgICBvbWl0UmlnaHQoYm9keSwgaSk7XG5cblx0ICAgICAgb21pdExlZnQoKGN1cnJlbnQuaW52ZXJzZSB8fCBjdXJyZW50LnByb2dyYW0pLmJvZHkpO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIHJldHVybiBwcm9ncmFtO1xuXHR9O1xuXG5cdFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5CbG9ja1N0YXRlbWVudCA9IFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5EZWNvcmF0b3JCbG9jayA9IFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5QYXJ0aWFsQmxvY2tTdGF0ZW1lbnQgPSBmdW5jdGlvbiAoYmxvY2spIHtcblx0ICB0aGlzLmFjY2VwdChibG9jay5wcm9ncmFtKTtcblx0ICB0aGlzLmFjY2VwdChibG9jay5pbnZlcnNlKTtcblxuXHQgIC8vIEZpbmQgdGhlIGludmVyc2UgcHJvZ3JhbSB0aGF0IGlzIGludm9sZWQgd2l0aCB3aGl0ZXNwYWNlIHN0cmlwcGluZy5cblx0ICB2YXIgcHJvZ3JhbSA9IGJsb2NrLnByb2dyYW0gfHwgYmxvY2suaW52ZXJzZSxcblx0ICAgICAgaW52ZXJzZSA9IGJsb2NrLnByb2dyYW0gJiYgYmxvY2suaW52ZXJzZSxcblx0ICAgICAgZmlyc3RJbnZlcnNlID0gaW52ZXJzZSxcblx0ICAgICAgbGFzdEludmVyc2UgPSBpbnZlcnNlO1xuXG5cdCAgaWYgKGludmVyc2UgJiYgaW52ZXJzZS5jaGFpbmVkKSB7XG5cdCAgICBmaXJzdEludmVyc2UgPSBpbnZlcnNlLmJvZHlbMF0ucHJvZ3JhbTtcblxuXHQgICAgLy8gV2FsayB0aGUgaW52ZXJzZSBjaGFpbiB0byBmaW5kIHRoZSBsYXN0IGludmVyc2UgdGhhdCBpcyBhY3R1YWxseSBpbiB0aGUgY2hhaW4uXG5cdCAgICB3aGlsZSAobGFzdEludmVyc2UuY2hhaW5lZCkge1xuXHQgICAgICBsYXN0SW52ZXJzZSA9IGxhc3RJbnZlcnNlLmJvZHlbbGFzdEludmVyc2UuYm9keS5sZW5ndGggLSAxXS5wcm9ncmFtO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIHZhciBzdHJpcCA9IHtcblx0ICAgIG9wZW46IGJsb2NrLm9wZW5TdHJpcC5vcGVuLFxuXHQgICAgY2xvc2U6IGJsb2NrLmNsb3NlU3RyaXAuY2xvc2UsXG5cblx0ICAgIC8vIERldGVybWluZSB0aGUgc3RhbmRhbG9uZSBjYW5kaWFjeS4gQmFzaWNhbGx5IGZsYWcgb3VyIGNvbnRlbnQgYXMgYmVpbmcgcG9zc2libHkgc3RhbmRhbG9uZVxuXHQgICAgLy8gc28gb3VyIHBhcmVudCBjYW4gZGV0ZXJtaW5lIGlmIHdlIGFjdHVhbGx5IGFyZSBzdGFuZGFsb25lXG5cdCAgICBvcGVuU3RhbmRhbG9uZTogaXNOZXh0V2hpdGVzcGFjZShwcm9ncmFtLmJvZHkpLFxuXHQgICAgY2xvc2VTdGFuZGFsb25lOiBpc1ByZXZXaGl0ZXNwYWNlKChmaXJzdEludmVyc2UgfHwgcHJvZ3JhbSkuYm9keSlcblx0ICB9O1xuXG5cdCAgaWYgKGJsb2NrLm9wZW5TdHJpcC5jbG9zZSkge1xuXHQgICAgb21pdFJpZ2h0KHByb2dyYW0uYm9keSwgbnVsbCwgdHJ1ZSk7XG5cdCAgfVxuXG5cdCAgaWYgKGludmVyc2UpIHtcblx0ICAgIHZhciBpbnZlcnNlU3RyaXAgPSBibG9jay5pbnZlcnNlU3RyaXA7XG5cblx0ICAgIGlmIChpbnZlcnNlU3RyaXAub3Blbikge1xuXHQgICAgICBvbWl0TGVmdChwcm9ncmFtLmJvZHksIG51bGwsIHRydWUpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoaW52ZXJzZVN0cmlwLmNsb3NlKSB7XG5cdCAgICAgIG9taXRSaWdodChmaXJzdEludmVyc2UuYm9keSwgbnVsbCwgdHJ1ZSk7XG5cdCAgICB9XG5cdCAgICBpZiAoYmxvY2suY2xvc2VTdHJpcC5vcGVuKSB7XG5cdCAgICAgIG9taXRMZWZ0KGxhc3RJbnZlcnNlLmJvZHksIG51bGwsIHRydWUpO1xuXHQgICAgfVxuXG5cdCAgICAvLyBGaW5kIHN0YW5kYWxvbmUgZWxzZSBzdGF0bWVudHNcblx0ICAgIGlmICghdGhpcy5vcHRpb25zLmlnbm9yZVN0YW5kYWxvbmUgJiYgaXNQcmV2V2hpdGVzcGFjZShwcm9ncmFtLmJvZHkpICYmIGlzTmV4dFdoaXRlc3BhY2UoZmlyc3RJbnZlcnNlLmJvZHkpKSB7XG5cdCAgICAgIG9taXRMZWZ0KHByb2dyYW0uYm9keSk7XG5cdCAgICAgIG9taXRSaWdodChmaXJzdEludmVyc2UuYm9keSk7XG5cdCAgICB9XG5cdCAgfSBlbHNlIGlmIChibG9jay5jbG9zZVN0cmlwLm9wZW4pIHtcblx0ICAgIG9taXRMZWZ0KHByb2dyYW0uYm9keSwgbnVsbCwgdHJ1ZSk7XG5cdCAgfVxuXG5cdCAgcmV0dXJuIHN0cmlwO1xuXHR9O1xuXG5cdFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5EZWNvcmF0b3IgPSBXaGl0ZXNwYWNlQ29udHJvbC5wcm90b3R5cGUuTXVzdGFjaGVTdGF0ZW1lbnQgPSBmdW5jdGlvbiAobXVzdGFjaGUpIHtcblx0ICByZXR1cm4gbXVzdGFjaGUuc3RyaXA7XG5cdH07XG5cblx0V2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlLlBhcnRpYWxTdGF0ZW1lbnQgPSBXaGl0ZXNwYWNlQ29udHJvbC5wcm90b3R5cGUuQ29tbWVudFN0YXRlbWVudCA9IGZ1bmN0aW9uIChub2RlKSB7XG5cdCAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICB2YXIgc3RyaXAgPSBub2RlLnN0cmlwIHx8IHt9O1xuXHQgIHJldHVybiB7XG5cdCAgICBpbmxpbmVTdGFuZGFsb25lOiB0cnVlLFxuXHQgICAgb3Blbjogc3RyaXAub3Blbixcblx0ICAgIGNsb3NlOiBzdHJpcC5jbG9zZVxuXHQgIH07XG5cdH07XG5cblx0ZnVuY3Rpb24gaXNQcmV2V2hpdGVzcGFjZShib2R5LCBpLCBpc1Jvb3QpIHtcblx0ICBpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdCAgICBpID0gYm9keS5sZW5ndGg7XG5cdCAgfVxuXG5cdCAgLy8gTm9kZXMgdGhhdCBlbmQgd2l0aCBuZXdsaW5lcyBhcmUgY29uc2lkZXJlZCB3aGl0ZXNwYWNlIChidXQgYXJlIHNwZWNpYWxcblx0ICAvLyBjYXNlZCBmb3Igc3RyaXAgb3BlcmF0aW9ucylcblx0ICB2YXIgcHJldiA9IGJvZHlbaSAtIDFdLFxuXHQgICAgICBzaWJsaW5nID0gYm9keVtpIC0gMl07XG5cdCAgaWYgKCFwcmV2KSB7XG5cdCAgICByZXR1cm4gaXNSb290O1xuXHQgIH1cblxuXHQgIGlmIChwcmV2LnR5cGUgPT09ICdDb250ZW50U3RhdGVtZW50Jykge1xuXHQgICAgcmV0dXJuIChzaWJsaW5nIHx8ICFpc1Jvb3QgPyAvXFxyP1xcblxccyo/JC8gOiAvKF58XFxyP1xcbilcXHMqPyQvKS50ZXN0KHByZXYub3JpZ2luYWwpO1xuXHQgIH1cblx0fVxuXHRmdW5jdGlvbiBpc05leHRXaGl0ZXNwYWNlKGJvZHksIGksIGlzUm9vdCkge1xuXHQgIGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0ICAgIGkgPSAtMTtcblx0ICB9XG5cblx0ICB2YXIgbmV4dCA9IGJvZHlbaSArIDFdLFxuXHQgICAgICBzaWJsaW5nID0gYm9keVtpICsgMl07XG5cdCAgaWYgKCFuZXh0KSB7XG5cdCAgICByZXR1cm4gaXNSb290O1xuXHQgIH1cblxuXHQgIGlmIChuZXh0LnR5cGUgPT09ICdDb250ZW50U3RhdGVtZW50Jykge1xuXHQgICAgcmV0dXJuIChzaWJsaW5nIHx8ICFpc1Jvb3QgPyAvXlxccyo/XFxyP1xcbi8gOiAvXlxccyo/KFxccj9cXG58JCkvKS50ZXN0KG5leHQub3JpZ2luYWwpO1xuXHQgIH1cblx0fVxuXG5cdC8vIE1hcmtzIHRoZSBub2RlIHRvIHRoZSByaWdodCBvZiB0aGUgcG9zaXRpb24gYXMgb21pdHRlZC5cblx0Ly8gSS5lLiB7e2Zvb319JyAnIHdpbGwgbWFyayB0aGUgJyAnIG5vZGUgYXMgb21pdHRlZC5cblx0Ly9cblx0Ly8gSWYgaSBpcyB1bmRlZmluZWQsIHRoZW4gdGhlIGZpcnN0IGNoaWxkIHdpbGwgYmUgbWFya2VkIGFzIHN1Y2guXG5cdC8vXG5cdC8vIElmIG11bGl0cGxlIGlzIHRydXRoeSB0aGVuIGFsbCB3aGl0ZXNwYWNlIHdpbGwgYmUgc3RyaXBwZWQgb3V0IHVudGlsIG5vbi13aGl0ZXNwYWNlXG5cdC8vIGNvbnRlbnQgaXMgbWV0LlxuXHRmdW5jdGlvbiBvbWl0UmlnaHQoYm9keSwgaSwgbXVsdGlwbGUpIHtcblx0ICB2YXIgY3VycmVudCA9IGJvZHlbaSA9PSBudWxsID8gMCA6IGkgKyAxXTtcblx0ICBpZiAoIWN1cnJlbnQgfHwgY3VycmVudC50eXBlICE9PSAnQ29udGVudFN0YXRlbWVudCcgfHwgIW11bHRpcGxlICYmIGN1cnJlbnQucmlnaHRTdHJpcHBlZCkge1xuXHQgICAgcmV0dXJuO1xuXHQgIH1cblxuXHQgIHZhciBvcmlnaW5hbCA9IGN1cnJlbnQudmFsdWU7XG5cdCAgY3VycmVudC52YWx1ZSA9IGN1cnJlbnQudmFsdWUucmVwbGFjZShtdWx0aXBsZSA/IC9eXFxzKy8gOiAvXlsgXFx0XSpcXHI/XFxuPy8sICcnKTtcblx0ICBjdXJyZW50LnJpZ2h0U3RyaXBwZWQgPSBjdXJyZW50LnZhbHVlICE9PSBvcmlnaW5hbDtcblx0fVxuXG5cdC8vIE1hcmtzIHRoZSBub2RlIHRvIHRoZSBsZWZ0IG9mIHRoZSBwb3NpdGlvbiBhcyBvbWl0dGVkLlxuXHQvLyBJLmUuICcgJ3t7Zm9vfX0gd2lsbCBtYXJrIHRoZSAnICcgbm9kZSBhcyBvbWl0dGVkLlxuXHQvL1xuXHQvLyBJZiBpIGlzIHVuZGVmaW5lZCB0aGVuIHRoZSBsYXN0IGNoaWxkIHdpbGwgYmUgbWFya2VkIGFzIHN1Y2guXG5cdC8vXG5cdC8vIElmIG11bGl0cGxlIGlzIHRydXRoeSB0aGVuIGFsbCB3aGl0ZXNwYWNlIHdpbGwgYmUgc3RyaXBwZWQgb3V0IHVudGlsIG5vbi13aGl0ZXNwYWNlXG5cdC8vIGNvbnRlbnQgaXMgbWV0LlxuXHRmdW5jdGlvbiBvbWl0TGVmdChib2R5LCBpLCBtdWx0aXBsZSkge1xuXHQgIHZhciBjdXJyZW50ID0gYm9keVtpID09IG51bGwgPyBib2R5Lmxlbmd0aCAtIDEgOiBpIC0gMV07XG5cdCAgaWYgKCFjdXJyZW50IHx8IGN1cnJlbnQudHlwZSAhPT0gJ0NvbnRlbnRTdGF0ZW1lbnQnIHx8ICFtdWx0aXBsZSAmJiBjdXJyZW50LmxlZnRTdHJpcHBlZCkge1xuXHQgICAgcmV0dXJuO1xuXHQgIH1cblxuXHQgIC8vIFdlIG9taXQgdGhlIGxhc3Qgbm9kZSBpZiBpdCdzIHdoaXRlc3BhY2Ugb25seSBhbmQgbm90IHByZWNlZGVkIGJ5IGEgbm9uLWNvbnRlbnQgbm9kZS5cblx0ICB2YXIgb3JpZ2luYWwgPSBjdXJyZW50LnZhbHVlO1xuXHQgIGN1cnJlbnQudmFsdWUgPSBjdXJyZW50LnZhbHVlLnJlcGxhY2UobXVsdGlwbGUgPyAvXFxzKyQvIDogL1sgXFx0XSskLywgJycpO1xuXHQgIGN1cnJlbnQubGVmdFN0cmlwcGVkID0gY3VycmVudC52YWx1ZSAhPT0gb3JpZ2luYWw7XG5cdCAgcmV0dXJuIGN1cnJlbnQubGVmdFN0cmlwcGVkO1xuXHR9XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gV2hpdGVzcGFjZUNvbnRyb2w7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDQ5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF9leGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdHZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cblx0ZnVuY3Rpb24gVmlzaXRvcigpIHtcblx0ICB0aGlzLnBhcmVudHMgPSBbXTtcblx0fVxuXG5cdFZpc2l0b3IucHJvdG90eXBlID0ge1xuXHQgIGNvbnN0cnVjdG9yOiBWaXNpdG9yLFxuXHQgIG11dGF0aW5nOiBmYWxzZSxcblxuXHQgIC8vIFZpc2l0cyBhIGdpdmVuIHZhbHVlLiBJZiBtdXRhdGluZywgd2lsbCByZXBsYWNlIHRoZSB2YWx1ZSBpZiBuZWNlc3NhcnkuXG5cdCAgYWNjZXB0S2V5OiBmdW5jdGlvbiBhY2NlcHRLZXkobm9kZSwgbmFtZSkge1xuXHQgICAgdmFyIHZhbHVlID0gdGhpcy5hY2NlcHQobm9kZVtuYW1lXSk7XG5cdCAgICBpZiAodGhpcy5tdXRhdGluZykge1xuXHQgICAgICAvLyBIYWNreSBzYW5pdHkgY2hlY2s6IFRoaXMgbWF5IGhhdmUgYSBmZXcgZmFsc2UgcG9zaXRpdmVzIGZvciB0eXBlIGZvciB0aGUgaGVscGVyXG5cdCAgICAgIC8vIG1ldGhvZHMgYnV0IHdpbGwgZ2VuZXJhbGx5IGRvIHRoZSByaWdodCB0aGluZyB3aXRob3V0IGEgbG90IG9mIG92ZXJoZWFkLlxuXHQgICAgICBpZiAodmFsdWUgJiYgIVZpc2l0b3IucHJvdG90eXBlW3ZhbHVlLnR5cGVdKSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1VuZXhwZWN0ZWQgbm9kZSB0eXBlIFwiJyArIHZhbHVlLnR5cGUgKyAnXCIgZm91bmQgd2hlbiBhY2NlcHRpbmcgJyArIG5hbWUgKyAnIG9uICcgKyBub2RlLnR5cGUpO1xuXHQgICAgICB9XG5cdCAgICAgIG5vZGVbbmFtZV0gPSB2YWx1ZTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgLy8gUGVyZm9ybXMgYW4gYWNjZXB0IG9wZXJhdGlvbiB3aXRoIGFkZGVkIHNhbml0eSBjaGVjayB0byBlbnN1cmVcblx0ICAvLyByZXF1aXJlZCBrZXlzIGFyZSBub3QgcmVtb3ZlZC5cblx0ICBhY2NlcHRSZXF1aXJlZDogZnVuY3Rpb24gYWNjZXB0UmVxdWlyZWQobm9kZSwgbmFtZSkge1xuXHQgICAgdGhpcy5hY2NlcHRLZXkobm9kZSwgbmFtZSk7XG5cblx0ICAgIGlmICghbm9kZVtuYW1lXSkge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXShub2RlLnR5cGUgKyAnIHJlcXVpcmVzICcgKyBuYW1lKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgLy8gVHJhdmVyc2VzIGEgZ2l2ZW4gYXJyYXkuIElmIG11dGF0aW5nLCBlbXB0eSByZXNwbnNlcyB3aWxsIGJlIHJlbW92ZWRcblx0ICAvLyBmb3IgY2hpbGQgZWxlbWVudHMuXG5cdCAgYWNjZXB0QXJyYXk6IGZ1bmN0aW9uIGFjY2VwdEFycmF5KGFycmF5KSB7XG5cdCAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFycmF5Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHQgICAgICB0aGlzLmFjY2VwdEtleShhcnJheSwgaSk7XG5cblx0ICAgICAgaWYgKCFhcnJheVtpXSkge1xuXHQgICAgICAgIGFycmF5LnNwbGljZShpLCAxKTtcblx0ICAgICAgICBpLS07XG5cdCAgICAgICAgbC0tO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIGFjY2VwdDogZnVuY3Rpb24gYWNjZXB0KG9iamVjdCkge1xuXHQgICAgaWYgKCFvYmplY3QpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXG5cdCAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogU2FuaXR5IGNvZGUgKi9cblx0ICAgIGlmICghdGhpc1tvYmplY3QudHlwZV0pIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1Vua25vd24gdHlwZTogJyArIG9iamVjdC50eXBlLCBvYmplY3QpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAodGhpcy5jdXJyZW50KSB7XG5cdCAgICAgIHRoaXMucGFyZW50cy51bnNoaWZ0KHRoaXMuY3VycmVudCk7XG5cdCAgICB9XG5cdCAgICB0aGlzLmN1cnJlbnQgPSBvYmplY3Q7XG5cblx0ICAgIHZhciByZXQgPSB0aGlzW29iamVjdC50eXBlXShvYmplY3QpO1xuXG5cdCAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnBhcmVudHMuc2hpZnQoKTtcblxuXHQgICAgaWYgKCF0aGlzLm11dGF0aW5nIHx8IHJldCkge1xuXHQgICAgICByZXR1cm4gcmV0O1xuXHQgICAgfSBlbHNlIGlmIChyZXQgIT09IGZhbHNlKSB7XG5cdCAgICAgIHJldHVybiBvYmplY3Q7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIFByb2dyYW06IGZ1bmN0aW9uIFByb2dyYW0ocHJvZ3JhbSkge1xuXHQgICAgdGhpcy5hY2NlcHRBcnJheShwcm9ncmFtLmJvZHkpO1xuXHQgIH0sXG5cblx0ICBNdXN0YWNoZVN0YXRlbWVudDogdmlzaXRTdWJFeHByZXNzaW9uLFxuXHQgIERlY29yYXRvcjogdmlzaXRTdWJFeHByZXNzaW9uLFxuXG5cdCAgQmxvY2tTdGF0ZW1lbnQ6IHZpc2l0QmxvY2ssXG5cdCAgRGVjb3JhdG9yQmxvY2s6IHZpc2l0QmxvY2ssXG5cblx0ICBQYXJ0aWFsU3RhdGVtZW50OiB2aXNpdFBhcnRpYWwsXG5cdCAgUGFydGlhbEJsb2NrU3RhdGVtZW50OiBmdW5jdGlvbiBQYXJ0aWFsQmxvY2tTdGF0ZW1lbnQocGFydGlhbCkge1xuXHQgICAgdmlzaXRQYXJ0aWFsLmNhbGwodGhpcywgcGFydGlhbCk7XG5cblx0ICAgIHRoaXMuYWNjZXB0S2V5KHBhcnRpYWwsICdwcm9ncmFtJyk7XG5cdCAgfSxcblxuXHQgIENvbnRlbnRTdGF0ZW1lbnQ6IGZ1bmN0aW9uIENvbnRlbnRTdGF0ZW1lbnQoKSAvKiBjb250ZW50ICove30sXG5cdCAgQ29tbWVudFN0YXRlbWVudDogZnVuY3Rpb24gQ29tbWVudFN0YXRlbWVudCgpIC8qIGNvbW1lbnQgKi97fSxcblxuXHQgIFN1YkV4cHJlc3Npb246IHZpc2l0U3ViRXhwcmVzc2lvbixcblxuXHQgIFBhdGhFeHByZXNzaW9uOiBmdW5jdGlvbiBQYXRoRXhwcmVzc2lvbigpIC8qIHBhdGggKi97fSxcblxuXHQgIFN0cmluZ0xpdGVyYWw6IGZ1bmN0aW9uIFN0cmluZ0xpdGVyYWwoKSAvKiBzdHJpbmcgKi97fSxcblx0ICBOdW1iZXJMaXRlcmFsOiBmdW5jdGlvbiBOdW1iZXJMaXRlcmFsKCkgLyogbnVtYmVyICove30sXG5cdCAgQm9vbGVhbkxpdGVyYWw6IGZ1bmN0aW9uIEJvb2xlYW5MaXRlcmFsKCkgLyogYm9vbCAqL3t9LFxuXHQgIFVuZGVmaW5lZExpdGVyYWw6IGZ1bmN0aW9uIFVuZGVmaW5lZExpdGVyYWwoKSAvKiBsaXRlcmFsICove30sXG5cdCAgTnVsbExpdGVyYWw6IGZ1bmN0aW9uIE51bGxMaXRlcmFsKCkgLyogbGl0ZXJhbCAqL3t9LFxuXG5cdCAgSGFzaDogZnVuY3Rpb24gSGFzaChoYXNoKSB7XG5cdCAgICB0aGlzLmFjY2VwdEFycmF5KGhhc2gucGFpcnMpO1xuXHQgIH0sXG5cdCAgSGFzaFBhaXI6IGZ1bmN0aW9uIEhhc2hQYWlyKHBhaXIpIHtcblx0ICAgIHRoaXMuYWNjZXB0UmVxdWlyZWQocGFpciwgJ3ZhbHVlJyk7XG5cdCAgfVxuXHR9O1xuXG5cdGZ1bmN0aW9uIHZpc2l0U3ViRXhwcmVzc2lvbihtdXN0YWNoZSkge1xuXHQgIHRoaXMuYWNjZXB0UmVxdWlyZWQobXVzdGFjaGUsICdwYXRoJyk7XG5cdCAgdGhpcy5hY2NlcHRBcnJheShtdXN0YWNoZS5wYXJhbXMpO1xuXHQgIHRoaXMuYWNjZXB0S2V5KG11c3RhY2hlLCAnaGFzaCcpO1xuXHR9XG5cdGZ1bmN0aW9uIHZpc2l0QmxvY2soYmxvY2spIHtcblx0ICB2aXNpdFN1YkV4cHJlc3Npb24uY2FsbCh0aGlzLCBibG9jayk7XG5cblx0ICB0aGlzLmFjY2VwdEtleShibG9jaywgJ3Byb2dyYW0nKTtcblx0ICB0aGlzLmFjY2VwdEtleShibG9jaywgJ2ludmVyc2UnKTtcblx0fVxuXHRmdW5jdGlvbiB2aXNpdFBhcnRpYWwocGFydGlhbCkge1xuXHQgIHRoaXMuYWNjZXB0UmVxdWlyZWQocGFydGlhbCwgJ25hbWUnKTtcblx0ICB0aGlzLmFjY2VwdEFycmF5KHBhcnRpYWwucGFyYW1zKTtcblx0ICB0aGlzLmFjY2VwdEtleShwYXJ0aWFsLCAnaGFzaCcpO1xuXHR9XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gVmlzaXRvcjtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogNTAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5Tb3VyY2VMb2NhdGlvbiA9IFNvdXJjZUxvY2F0aW9uO1xuXHRleHBvcnRzLmlkID0gaWQ7XG5cdGV4cG9ydHMuc3RyaXBGbGFncyA9IHN0cmlwRmxhZ3M7XG5cdGV4cG9ydHMuc3RyaXBDb21tZW50ID0gc3RyaXBDb21tZW50O1xuXHRleHBvcnRzLnByZXBhcmVQYXRoID0gcHJlcGFyZVBhdGg7XG5cdGV4cG9ydHMucHJlcGFyZU11c3RhY2hlID0gcHJlcGFyZU11c3RhY2hlO1xuXHRleHBvcnRzLnByZXBhcmVSYXdCbG9jayA9IHByZXBhcmVSYXdCbG9jaztcblx0ZXhwb3J0cy5wcmVwYXJlQmxvY2sgPSBwcmVwYXJlQmxvY2s7XG5cdGV4cG9ydHMucHJlcGFyZVByb2dyYW0gPSBwcmVwYXJlUHJvZ3JhbTtcblx0ZXhwb3J0cy5wcmVwYXJlUGFydGlhbEJsb2NrID0gcHJlcGFyZVBhcnRpYWxCbG9jaztcblxuXHR2YXIgX2V4Y2VwdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0dmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxuXHRmdW5jdGlvbiB2YWxpZGF0ZUNsb3NlKG9wZW4sIGNsb3NlKSB7XG5cdCAgY2xvc2UgPSBjbG9zZS5wYXRoID8gY2xvc2UucGF0aC5vcmlnaW5hbCA6IGNsb3NlO1xuXG5cdCAgaWYgKG9wZW4ucGF0aC5vcmlnaW5hbCAhPT0gY2xvc2UpIHtcblx0ICAgIHZhciBlcnJvck5vZGUgPSB7IGxvYzogb3Blbi5wYXRoLmxvYyB9O1xuXG5cdCAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXShvcGVuLnBhdGgub3JpZ2luYWwgKyBcIiBkb2Vzbid0IG1hdGNoIFwiICsgY2xvc2UsIGVycm9yTm9kZSk7XG5cdCAgfVxuXHR9XG5cblx0ZnVuY3Rpb24gU291cmNlTG9jYXRpb24oc291cmNlLCBsb2NJbmZvKSB7XG5cdCAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdCAgdGhpcy5zdGFydCA9IHtcblx0ICAgIGxpbmU6IGxvY0luZm8uZmlyc3RfbGluZSxcblx0ICAgIGNvbHVtbjogbG9jSW5mby5maXJzdF9jb2x1bW5cblx0ICB9O1xuXHQgIHRoaXMuZW5kID0ge1xuXHQgICAgbGluZTogbG9jSW5mby5sYXN0X2xpbmUsXG5cdCAgICBjb2x1bW46IGxvY0luZm8ubGFzdF9jb2x1bW5cblx0ICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gaWQodG9rZW4pIHtcblx0ICBpZiAoL15cXFsuKlxcXSQvLnRlc3QodG9rZW4pKSB7XG5cdCAgICByZXR1cm4gdG9rZW4uc3Vic3RyaW5nKDEsIHRva2VuLmxlbmd0aCAtIDEpO1xuXHQgIH0gZWxzZSB7XG5cdCAgICByZXR1cm4gdG9rZW47XG5cdCAgfVxuXHR9XG5cblx0ZnVuY3Rpb24gc3RyaXBGbGFncyhvcGVuLCBjbG9zZSkge1xuXHQgIHJldHVybiB7XG5cdCAgICBvcGVuOiBvcGVuLmNoYXJBdCgyKSA9PT0gJ34nLFxuXHQgICAgY2xvc2U6IGNsb3NlLmNoYXJBdChjbG9zZS5sZW5ndGggLSAzKSA9PT0gJ34nXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHN0cmlwQ29tbWVudChjb21tZW50KSB7XG5cdCAgcmV0dXJuIGNvbW1lbnQucmVwbGFjZSgvXlxce1xce34/IS0/LT8vLCAnJykucmVwbGFjZSgvLT8tP34/XFx9XFx9JC8sICcnKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHByZXBhcmVQYXRoKGRhdGEsIHBhcnRzLCBsb2MpIHtcblx0ICBsb2MgPSB0aGlzLmxvY0luZm8obG9jKTtcblxuXHQgIHZhciBvcmlnaW5hbCA9IGRhdGEgPyAnQCcgOiAnJyxcblx0ICAgICAgZGlnID0gW10sXG5cdCAgICAgIGRlcHRoID0gMDtcblxuXHQgIGZvciAodmFyIGkgPSAwLCBsID0gcGFydHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICB2YXIgcGFydCA9IHBhcnRzW2ldLnBhcnQsXG5cblx0ICAgIC8vIElmIHdlIGhhdmUgW10gc3ludGF4IHRoZW4gd2UgZG8gbm90IHRyZWF0IHBhdGggcmVmZXJlbmNlcyBhcyBvcGVyYXRvcnMsXG5cdCAgICAvLyBpLmUuIGZvby5bdGhpc10gcmVzb2x2ZXMgdG8gYXBwcm94aW1hdGVseSBjb250ZXh0LmZvb1sndGhpcyddXG5cdCAgICBpc0xpdGVyYWwgPSBwYXJ0c1tpXS5vcmlnaW5hbCAhPT0gcGFydDtcblx0ICAgIG9yaWdpbmFsICs9IChwYXJ0c1tpXS5zZXBhcmF0b3IgfHwgJycpICsgcGFydDtcblxuXHQgICAgaWYgKCFpc0xpdGVyYWwgJiYgKHBhcnQgPT09ICcuLicgfHwgcGFydCA9PT0gJy4nIHx8IHBhcnQgPT09ICd0aGlzJykpIHtcblx0ICAgICAgaWYgKGRpZy5sZW5ndGggPiAwKSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0ludmFsaWQgcGF0aDogJyArIG9yaWdpbmFsLCB7IGxvYzogbG9jIH0pO1xuXHQgICAgICB9IGVsc2UgaWYgKHBhcnQgPT09ICcuLicpIHtcblx0ICAgICAgICBkZXB0aCsrO1xuXHQgICAgICB9XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBkaWcucHVzaChwYXJ0KTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICByZXR1cm4ge1xuXHQgICAgdHlwZTogJ1BhdGhFeHByZXNzaW9uJyxcblx0ICAgIGRhdGE6IGRhdGEsXG5cdCAgICBkZXB0aDogZGVwdGgsXG5cdCAgICBwYXJ0czogZGlnLFxuXHQgICAgb3JpZ2luYWw6IG9yaWdpbmFsLFxuXHQgICAgbG9jOiBsb2Ncblx0ICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gcHJlcGFyZU11c3RhY2hlKHBhdGgsIHBhcmFtcywgaGFzaCwgb3Blbiwgc3RyaXAsIGxvY0luZm8pIHtcblx0ICAvLyBNdXN0IHVzZSBjaGFyQXQgdG8gc3VwcG9ydCBJRSBwcmUtMTBcblx0ICB2YXIgZXNjYXBlRmxhZyA9IG9wZW4uY2hhckF0KDMpIHx8IG9wZW4uY2hhckF0KDIpLFxuXHQgICAgICBlc2NhcGVkID0gZXNjYXBlRmxhZyAhPT0gJ3snICYmIGVzY2FwZUZsYWcgIT09ICcmJztcblxuXHQgIHZhciBkZWNvcmF0b3IgPSAvXFwqLy50ZXN0KG9wZW4pO1xuXHQgIHJldHVybiB7XG5cdCAgICB0eXBlOiBkZWNvcmF0b3IgPyAnRGVjb3JhdG9yJyA6ICdNdXN0YWNoZVN0YXRlbWVudCcsXG5cdCAgICBwYXRoOiBwYXRoLFxuXHQgICAgcGFyYW1zOiBwYXJhbXMsXG5cdCAgICBoYXNoOiBoYXNoLFxuXHQgICAgZXNjYXBlZDogZXNjYXBlZCxcblx0ICAgIHN0cmlwOiBzdHJpcCxcblx0ICAgIGxvYzogdGhpcy5sb2NJbmZvKGxvY0luZm8pXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHByZXBhcmVSYXdCbG9jayhvcGVuUmF3QmxvY2ssIGNvbnRlbnRzLCBjbG9zZSwgbG9jSW5mbykge1xuXHQgIHZhbGlkYXRlQ2xvc2Uob3BlblJhd0Jsb2NrLCBjbG9zZSk7XG5cblx0ICBsb2NJbmZvID0gdGhpcy5sb2NJbmZvKGxvY0luZm8pO1xuXHQgIHZhciBwcm9ncmFtID0ge1xuXHQgICAgdHlwZTogJ1Byb2dyYW0nLFxuXHQgICAgYm9keTogY29udGVudHMsXG5cdCAgICBzdHJpcDoge30sXG5cdCAgICBsb2M6IGxvY0luZm9cblx0ICB9O1xuXG5cdCAgcmV0dXJuIHtcblx0ICAgIHR5cGU6ICdCbG9ja1N0YXRlbWVudCcsXG5cdCAgICBwYXRoOiBvcGVuUmF3QmxvY2sucGF0aCxcblx0ICAgIHBhcmFtczogb3BlblJhd0Jsb2NrLnBhcmFtcyxcblx0ICAgIGhhc2g6IG9wZW5SYXdCbG9jay5oYXNoLFxuXHQgICAgcHJvZ3JhbTogcHJvZ3JhbSxcblx0ICAgIG9wZW5TdHJpcDoge30sXG5cdCAgICBpbnZlcnNlU3RyaXA6IHt9LFxuXHQgICAgY2xvc2VTdHJpcDoge30sXG5cdCAgICBsb2M6IGxvY0luZm9cblx0ICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gcHJlcGFyZUJsb2NrKG9wZW5CbG9jaywgcHJvZ3JhbSwgaW52ZXJzZUFuZFByb2dyYW0sIGNsb3NlLCBpbnZlcnRlZCwgbG9jSW5mbykge1xuXHQgIGlmIChjbG9zZSAmJiBjbG9zZS5wYXRoKSB7XG5cdCAgICB2YWxpZGF0ZUNsb3NlKG9wZW5CbG9jaywgY2xvc2UpO1xuXHQgIH1cblxuXHQgIHZhciBkZWNvcmF0b3IgPSAvXFwqLy50ZXN0KG9wZW5CbG9jay5vcGVuKTtcblxuXHQgIHByb2dyYW0uYmxvY2tQYXJhbXMgPSBvcGVuQmxvY2suYmxvY2tQYXJhbXM7XG5cblx0ICB2YXIgaW52ZXJzZSA9IHVuZGVmaW5lZCxcblx0ICAgICAgaW52ZXJzZVN0cmlwID0gdW5kZWZpbmVkO1xuXG5cdCAgaWYgKGludmVyc2VBbmRQcm9ncmFtKSB7XG5cdCAgICBpZiAoZGVjb3JhdG9yKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdVbmV4cGVjdGVkIGludmVyc2UgYmxvY2sgb24gZGVjb3JhdG9yJywgaW52ZXJzZUFuZFByb2dyYW0pO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoaW52ZXJzZUFuZFByb2dyYW0uY2hhaW4pIHtcblx0ICAgICAgaW52ZXJzZUFuZFByb2dyYW0ucHJvZ3JhbS5ib2R5WzBdLmNsb3NlU3RyaXAgPSBjbG9zZS5zdHJpcDtcblx0ICAgIH1cblxuXHQgICAgaW52ZXJzZVN0cmlwID0gaW52ZXJzZUFuZFByb2dyYW0uc3RyaXA7XG5cdCAgICBpbnZlcnNlID0gaW52ZXJzZUFuZFByb2dyYW0ucHJvZ3JhbTtcblx0ICB9XG5cblx0ICBpZiAoaW52ZXJ0ZWQpIHtcblx0ICAgIGludmVydGVkID0gaW52ZXJzZTtcblx0ICAgIGludmVyc2UgPSBwcm9ncmFtO1xuXHQgICAgcHJvZ3JhbSA9IGludmVydGVkO1xuXHQgIH1cblxuXHQgIHJldHVybiB7XG5cdCAgICB0eXBlOiBkZWNvcmF0b3IgPyAnRGVjb3JhdG9yQmxvY2snIDogJ0Jsb2NrU3RhdGVtZW50Jyxcblx0ICAgIHBhdGg6IG9wZW5CbG9jay5wYXRoLFxuXHQgICAgcGFyYW1zOiBvcGVuQmxvY2sucGFyYW1zLFxuXHQgICAgaGFzaDogb3BlbkJsb2NrLmhhc2gsXG5cdCAgICBwcm9ncmFtOiBwcm9ncmFtLFxuXHQgICAgaW52ZXJzZTogaW52ZXJzZSxcblx0ICAgIG9wZW5TdHJpcDogb3BlbkJsb2NrLnN0cmlwLFxuXHQgICAgaW52ZXJzZVN0cmlwOiBpbnZlcnNlU3RyaXAsXG5cdCAgICBjbG9zZVN0cmlwOiBjbG9zZSAmJiBjbG9zZS5zdHJpcCxcblx0ICAgIGxvYzogdGhpcy5sb2NJbmZvKGxvY0luZm8pXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHByZXBhcmVQcm9ncmFtKHN0YXRlbWVudHMsIGxvYykge1xuXHQgIGlmICghbG9jICYmIHN0YXRlbWVudHMubGVuZ3RoKSB7XG5cdCAgICB2YXIgZmlyc3RMb2MgPSBzdGF0ZW1lbnRzWzBdLmxvYyxcblx0ICAgICAgICBsYXN0TG9jID0gc3RhdGVtZW50c1tzdGF0ZW1lbnRzLmxlbmd0aCAtIDFdLmxvYztcblxuXHQgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cblx0ICAgIGlmIChmaXJzdExvYyAmJiBsYXN0TG9jKSB7XG5cdCAgICAgIGxvYyA9IHtcblx0ICAgICAgICBzb3VyY2U6IGZpcnN0TG9jLnNvdXJjZSxcblx0ICAgICAgICBzdGFydDoge1xuXHQgICAgICAgICAgbGluZTogZmlyc3RMb2Muc3RhcnQubGluZSxcblx0ICAgICAgICAgIGNvbHVtbjogZmlyc3RMb2Muc3RhcnQuY29sdW1uXG5cdCAgICAgICAgfSxcblx0ICAgICAgICBlbmQ6IHtcblx0ICAgICAgICAgIGxpbmU6IGxhc3RMb2MuZW5kLmxpbmUsXG5cdCAgICAgICAgICBjb2x1bW46IGxhc3RMb2MuZW5kLmNvbHVtblxuXHQgICAgICAgIH1cblx0ICAgICAgfTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICByZXR1cm4ge1xuXHQgICAgdHlwZTogJ1Byb2dyYW0nLFxuXHQgICAgYm9keTogc3RhdGVtZW50cyxcblx0ICAgIHN0cmlwOiB7fSxcblx0ICAgIGxvYzogbG9jXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHByZXBhcmVQYXJ0aWFsQmxvY2sob3BlbiwgcHJvZ3JhbSwgY2xvc2UsIGxvY0luZm8pIHtcblx0ICB2YWxpZGF0ZUNsb3NlKG9wZW4sIGNsb3NlKTtcblxuXHQgIHJldHVybiB7XG5cdCAgICB0eXBlOiAnUGFydGlhbEJsb2NrU3RhdGVtZW50Jyxcblx0ICAgIG5hbWU6IG9wZW4ucGF0aCxcblx0ICAgIHBhcmFtczogb3Blbi5wYXJhbXMsXG5cdCAgICBoYXNoOiBvcGVuLmhhc2gsXG5cdCAgICBwcm9ncmFtOiBwcm9ncmFtLFxuXHQgICAgb3BlblN0cmlwOiBvcGVuLnN0cmlwLFxuXHQgICAgY2xvc2VTdHJpcDogY2xvc2UgJiYgY2xvc2Uuc3RyaXAsXG5cdCAgICBsb2M6IHRoaXMubG9jSW5mbyhsb2NJbmZvKVxuXHQgIH07XG5cdH1cblxuLyoqKi8gfSksXG4vKiA1MSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIG5ldy1jYXAgKi9cblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9PYmplY3QkY3JlYXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNClbJ2RlZmF1bHQnXTtcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzLkNvbXBpbGVyID0gQ29tcGlsZXI7XG5cdGV4cG9ydHMucHJlY29tcGlsZSA9IHByZWNvbXBpbGU7XG5cdGV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG5cblx0dmFyIF9leGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdHZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0dmFyIF9hc3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ1KTtcblxuXHR2YXIgX2FzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3QpO1xuXG5cdHZhciBzbGljZSA9IFtdLnNsaWNlO1xuXG5cdGZ1bmN0aW9uIENvbXBpbGVyKCkge31cblxuXHQvLyB0aGUgZm91bmRIZWxwZXIgcmVnaXN0ZXIgd2lsbCBkaXNhbWJpZ3VhdGUgaGVscGVyIGxvb2t1cCBmcm9tIGZpbmRpbmcgYVxuXHQvLyBmdW5jdGlvbiBpbiBhIGNvbnRleHQuIFRoaXMgaXMgbmVjZXNzYXJ5IGZvciBtdXN0YWNoZSBjb21wYXRpYmlsaXR5LCB3aGljaFxuXHQvLyByZXF1aXJlcyB0aGF0IGNvbnRleHQgZnVuY3Rpb25zIGluIGJsb2NrcyBhcmUgZXZhbHVhdGVkIGJ5IGJsb2NrSGVscGVyTWlzc2luZyxcblx0Ly8gYW5kIHRoZW4gcHJvY2VlZCBhcyBpZiB0aGUgcmVzdWx0aW5nIHZhbHVlIHdhcyBwcm92aWRlZCB0byBibG9ja0hlbHBlck1pc3NpbmcuXG5cblx0Q29tcGlsZXIucHJvdG90eXBlID0ge1xuXHQgIGNvbXBpbGVyOiBDb21waWxlcixcblxuXHQgIGVxdWFsczogZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG5cdCAgICB2YXIgbGVuID0gdGhpcy5vcGNvZGVzLmxlbmd0aDtcblx0ICAgIGlmIChvdGhlci5vcGNvZGVzLmxlbmd0aCAhPT0gbGVuKSB7XG5cdCAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgIH1cblxuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICB2YXIgb3Bjb2RlID0gdGhpcy5vcGNvZGVzW2ldLFxuXHQgICAgICAgICAgb3RoZXJPcGNvZGUgPSBvdGhlci5vcGNvZGVzW2ldO1xuXHQgICAgICBpZiAob3Bjb2RlLm9wY29kZSAhPT0gb3RoZXJPcGNvZGUub3Bjb2RlIHx8ICFhcmdFcXVhbHMob3Bjb2RlLmFyZ3MsIG90aGVyT3Bjb2RlLmFyZ3MpKSB7XG5cdCAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIC8vIFdlIGtub3cgdGhhdCBsZW5ndGggaXMgdGhlIHNhbWUgYmV0d2VlbiB0aGUgdHdvIGFycmF5cyBiZWNhdXNlIHRoZXkgYXJlIGRpcmVjdGx5IHRpZWRcblx0ICAgIC8vIHRvIHRoZSBvcGNvZGUgYmVoYXZpb3IgYWJvdmUuXG5cdCAgICBsZW4gPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgaWYgKCF0aGlzLmNoaWxkcmVuW2ldLmVxdWFscyhvdGhlci5jaGlsZHJlbltpXSkpIHtcblx0ICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfSxcblxuXHQgIGd1aWQ6IDAsXG5cblx0ICBjb21waWxlOiBmdW5jdGlvbiBjb21waWxlKHByb2dyYW0sIG9wdGlvbnMpIHtcblx0ICAgIHRoaXMuc291cmNlTm9kZSA9IFtdO1xuXHQgICAgdGhpcy5vcGNvZGVzID0gW107XG5cdCAgICB0aGlzLmNoaWxkcmVuID0gW107XG5cdCAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHQgICAgdGhpcy5zdHJpbmdQYXJhbXMgPSBvcHRpb25zLnN0cmluZ1BhcmFtcztcblx0ICAgIHRoaXMudHJhY2tJZHMgPSBvcHRpb25zLnRyYWNrSWRzO1xuXG5cdCAgICBvcHRpb25zLmJsb2NrUGFyYW1zID0gb3B0aW9ucy5ibG9ja1BhcmFtcyB8fCBbXTtcblxuXHQgICAgb3B0aW9ucy5rbm93bkhlbHBlcnMgPSBfdXRpbHMuZXh0ZW5kKF9PYmplY3QkY3JlYXRlKG51bGwpLCB7XG5cdCAgICAgIGhlbHBlck1pc3Npbmc6IHRydWUsXG5cdCAgICAgIGJsb2NrSGVscGVyTWlzc2luZzogdHJ1ZSxcblx0ICAgICAgZWFjaDogdHJ1ZSxcblx0ICAgICAgJ2lmJzogdHJ1ZSxcblx0ICAgICAgdW5sZXNzOiB0cnVlLFxuXHQgICAgICAnd2l0aCc6IHRydWUsXG5cdCAgICAgIGxvZzogdHJ1ZSxcblx0ICAgICAgbG9va3VwOiB0cnVlXG5cdCAgICB9LCBvcHRpb25zLmtub3duSGVscGVycyk7XG5cblx0ICAgIHJldHVybiB0aGlzLmFjY2VwdChwcm9ncmFtKTtcblx0ICB9LFxuXG5cdCAgY29tcGlsZVByb2dyYW06IGZ1bmN0aW9uIGNvbXBpbGVQcm9ncmFtKHByb2dyYW0pIHtcblx0ICAgIHZhciBjaGlsZENvbXBpbGVyID0gbmV3IHRoaXMuY29tcGlsZXIoKSxcblx0ICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcblx0ICAgIHJlc3VsdCA9IGNoaWxkQ29tcGlsZXIuY29tcGlsZShwcm9ncmFtLCB0aGlzLm9wdGlvbnMpLFxuXHQgICAgICAgIGd1aWQgPSB0aGlzLmd1aWQrKztcblxuXHQgICAgdGhpcy51c2VQYXJ0aWFsID0gdGhpcy51c2VQYXJ0aWFsIHx8IHJlc3VsdC51c2VQYXJ0aWFsO1xuXG5cdCAgICB0aGlzLmNoaWxkcmVuW2d1aWRdID0gcmVzdWx0O1xuXHQgICAgdGhpcy51c2VEZXB0aHMgPSB0aGlzLnVzZURlcHRocyB8fCByZXN1bHQudXNlRGVwdGhzO1xuXG5cdCAgICByZXR1cm4gZ3VpZDtcblx0ICB9LFxuXG5cdCAgYWNjZXB0OiBmdW5jdGlvbiBhY2NlcHQobm9kZSkge1xuXHQgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IFNhbml0eSBjb2RlICovXG5cdCAgICBpZiAoIXRoaXNbbm9kZS50eXBlXSkge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVW5rbm93biB0eXBlOiAnICsgbm9kZS50eXBlLCBub2RlKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5zb3VyY2VOb2RlLnVuc2hpZnQobm9kZSk7XG5cdCAgICB2YXIgcmV0ID0gdGhpc1tub2RlLnR5cGVdKG5vZGUpO1xuXHQgICAgdGhpcy5zb3VyY2VOb2RlLnNoaWZ0KCk7XG5cdCAgICByZXR1cm4gcmV0O1xuXHQgIH0sXG5cblx0ICBQcm9ncmFtOiBmdW5jdGlvbiBQcm9ncmFtKHByb2dyYW0pIHtcblx0ICAgIHRoaXMub3B0aW9ucy5ibG9ja1BhcmFtcy51bnNoaWZ0KHByb2dyYW0uYmxvY2tQYXJhbXMpO1xuXG5cdCAgICB2YXIgYm9keSA9IHByb2dyYW0uYm9keSxcblx0ICAgICAgICBib2R5TGVuZ3RoID0gYm9keS5sZW5ndGg7XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZHlMZW5ndGg7IGkrKykge1xuXHQgICAgICB0aGlzLmFjY2VwdChib2R5W2ldKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5vcHRpb25zLmJsb2NrUGFyYW1zLnNoaWZ0KCk7XG5cblx0ICAgIHRoaXMuaXNTaW1wbGUgPSBib2R5TGVuZ3RoID09PSAxO1xuXHQgICAgdGhpcy5ibG9ja1BhcmFtcyA9IHByb2dyYW0uYmxvY2tQYXJhbXMgPyBwcm9ncmFtLmJsb2NrUGFyYW1zLmxlbmd0aCA6IDA7XG5cblx0ICAgIHJldHVybiB0aGlzO1xuXHQgIH0sXG5cblx0ICBCbG9ja1N0YXRlbWVudDogZnVuY3Rpb24gQmxvY2tTdGF0ZW1lbnQoYmxvY2spIHtcblx0ICAgIHRyYW5zZm9ybUxpdGVyYWxUb1BhdGgoYmxvY2spO1xuXG5cdCAgICB2YXIgcHJvZ3JhbSA9IGJsb2NrLnByb2dyYW0sXG5cdCAgICAgICAgaW52ZXJzZSA9IGJsb2NrLmludmVyc2U7XG5cblx0ICAgIHByb2dyYW0gPSBwcm9ncmFtICYmIHRoaXMuY29tcGlsZVByb2dyYW0ocHJvZ3JhbSk7XG5cdCAgICBpbnZlcnNlID0gaW52ZXJzZSAmJiB0aGlzLmNvbXBpbGVQcm9ncmFtKGludmVyc2UpO1xuXG5cdCAgICB2YXIgdHlwZSA9IHRoaXMuY2xhc3NpZnlTZXhwcihibG9jayk7XG5cblx0ICAgIGlmICh0eXBlID09PSAnaGVscGVyJykge1xuXHQgICAgICB0aGlzLmhlbHBlclNleHByKGJsb2NrLCBwcm9ncmFtLCBpbnZlcnNlKTtcblx0ICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3NpbXBsZScpIHtcblx0ICAgICAgdGhpcy5zaW1wbGVTZXhwcihibG9jayk7XG5cblx0ICAgICAgLy8gbm93IHRoYXQgdGhlIHNpbXBsZSBtdXN0YWNoZSBpcyByZXNvbHZlZCwgd2UgbmVlZCB0b1xuXHQgICAgICAvLyBldmFsdWF0ZSBpdCBieSBleGVjdXRpbmcgYGJsb2NrSGVscGVyTWlzc2luZ2Bcblx0ICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgcHJvZ3JhbSk7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIGludmVyc2UpO1xuXHQgICAgICB0aGlzLm9wY29kZSgnZW1wdHlIYXNoJyk7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdibG9ja1ZhbHVlJywgYmxvY2sucGF0aC5vcmlnaW5hbCk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLmFtYmlndW91c1NleHByKGJsb2NrLCBwcm9ncmFtLCBpbnZlcnNlKTtcblxuXHQgICAgICAvLyBub3cgdGhhdCB0aGUgc2ltcGxlIG11c3RhY2hlIGlzIHJlc29sdmVkLCB3ZSBuZWVkIHRvXG5cdCAgICAgIC8vIGV2YWx1YXRlIGl0IGJ5IGV4ZWN1dGluZyBgYmxvY2tIZWxwZXJNaXNzaW5nYFxuXHQgICAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBwcm9ncmFtKTtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgaW52ZXJzZSk7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdlbXB0eUhhc2gnKTtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2FtYmlndW91c0Jsb2NrVmFsdWUnKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5vcGNvZGUoJ2FwcGVuZCcpO1xuXHQgIH0sXG5cblx0ICBEZWNvcmF0b3JCbG9jazogZnVuY3Rpb24gRGVjb3JhdG9yQmxvY2soZGVjb3JhdG9yKSB7XG5cdCAgICB2YXIgcHJvZ3JhbSA9IGRlY29yYXRvci5wcm9ncmFtICYmIHRoaXMuY29tcGlsZVByb2dyYW0oZGVjb3JhdG9yLnByb2dyYW0pO1xuXHQgICAgdmFyIHBhcmFtcyA9IHRoaXMuc2V0dXBGdWxsTXVzdGFjaGVQYXJhbXMoZGVjb3JhdG9yLCBwcm9ncmFtLCB1bmRlZmluZWQpLFxuXHQgICAgICAgIHBhdGggPSBkZWNvcmF0b3IucGF0aDtcblxuXHQgICAgdGhpcy51c2VEZWNvcmF0b3JzID0gdHJ1ZTtcblx0ICAgIHRoaXMub3Bjb2RlKCdyZWdpc3RlckRlY29yYXRvcicsIHBhcmFtcy5sZW5ndGgsIHBhdGgub3JpZ2luYWwpO1xuXHQgIH0sXG5cblx0ICBQYXJ0aWFsU3RhdGVtZW50OiBmdW5jdGlvbiBQYXJ0aWFsU3RhdGVtZW50KHBhcnRpYWwpIHtcblx0ICAgIHRoaXMudXNlUGFydGlhbCA9IHRydWU7XG5cblx0ICAgIHZhciBwcm9ncmFtID0gcGFydGlhbC5wcm9ncmFtO1xuXHQgICAgaWYgKHByb2dyYW0pIHtcblx0ICAgICAgcHJvZ3JhbSA9IHRoaXMuY29tcGlsZVByb2dyYW0ocGFydGlhbC5wcm9ncmFtKTtcblx0ICAgIH1cblxuXHQgICAgdmFyIHBhcmFtcyA9IHBhcnRpYWwucGFyYW1zO1xuXHQgICAgaWYgKHBhcmFtcy5sZW5ndGggPiAxKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdVbnN1cHBvcnRlZCBudW1iZXIgb2YgcGFydGlhbCBhcmd1bWVudHM6ICcgKyBwYXJhbXMubGVuZ3RoLCBwYXJ0aWFsKTtcblx0ICAgIH0gZWxzZSBpZiAoIXBhcmFtcy5sZW5ndGgpIHtcblx0ICAgICAgaWYgKHRoaXMub3B0aW9ucy5leHBsaWNpdFBhcnRpYWxDb250ZXh0KSB7XG5cdCAgICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hMaXRlcmFsJywgJ3VuZGVmaW5lZCcpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHBhcmFtcy5wdXNoKHsgdHlwZTogJ1BhdGhFeHByZXNzaW9uJywgcGFydHM6IFtdLCBkZXB0aDogMCB9KTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICB2YXIgcGFydGlhbE5hbWUgPSBwYXJ0aWFsLm5hbWUub3JpZ2luYWwsXG5cdCAgICAgICAgaXNEeW5hbWljID0gcGFydGlhbC5uYW1lLnR5cGUgPT09ICdTdWJFeHByZXNzaW9uJztcblx0ICAgIGlmIChpc0R5bmFtaWMpIHtcblx0ICAgICAgdGhpcy5hY2NlcHQocGFydGlhbC5uYW1lKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5zZXR1cEZ1bGxNdXN0YWNoZVBhcmFtcyhwYXJ0aWFsLCBwcm9ncmFtLCB1bmRlZmluZWQsIHRydWUpO1xuXG5cdCAgICB2YXIgaW5kZW50ID0gcGFydGlhbC5pbmRlbnQgfHwgJyc7XG5cdCAgICBpZiAodGhpcy5vcHRpb25zLnByZXZlbnRJbmRlbnQgJiYgaW5kZW50KSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdhcHBlbmRDb250ZW50JywgaW5kZW50KTtcblx0ICAgICAgaW5kZW50ID0gJyc7XG5cdCAgICB9XG5cblx0ICAgIHRoaXMub3Bjb2RlKCdpbnZva2VQYXJ0aWFsJywgaXNEeW5hbWljLCBwYXJ0aWFsTmFtZSwgaW5kZW50KTtcblx0ICAgIHRoaXMub3Bjb2RlKCdhcHBlbmQnKTtcblx0ICB9LFxuXHQgIFBhcnRpYWxCbG9ja1N0YXRlbWVudDogZnVuY3Rpb24gUGFydGlhbEJsb2NrU3RhdGVtZW50KHBhcnRpYWxCbG9jaykge1xuXHQgICAgdGhpcy5QYXJ0aWFsU3RhdGVtZW50KHBhcnRpYWxCbG9jayk7XG5cdCAgfSxcblxuXHQgIE11c3RhY2hlU3RhdGVtZW50OiBmdW5jdGlvbiBNdXN0YWNoZVN0YXRlbWVudChtdXN0YWNoZSkge1xuXHQgICAgdGhpcy5TdWJFeHByZXNzaW9uKG11c3RhY2hlKTtcblxuXHQgICAgaWYgKG11c3RhY2hlLmVzY2FwZWQgJiYgIXRoaXMub3B0aW9ucy5ub0VzY2FwZSkge1xuXHQgICAgICB0aGlzLm9wY29kZSgnYXBwZW5kRXNjYXBlZCcpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2FwcGVuZCcpO1xuXHQgICAgfVxuXHQgIH0sXG5cdCAgRGVjb3JhdG9yOiBmdW5jdGlvbiBEZWNvcmF0b3IoZGVjb3JhdG9yKSB7XG5cdCAgICB0aGlzLkRlY29yYXRvckJsb2NrKGRlY29yYXRvcik7XG5cdCAgfSxcblxuXHQgIENvbnRlbnRTdGF0ZW1lbnQ6IGZ1bmN0aW9uIENvbnRlbnRTdGF0ZW1lbnQoY29udGVudCkge1xuXHQgICAgaWYgKGNvbnRlbnQudmFsdWUpIHtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2FwcGVuZENvbnRlbnQnLCBjb250ZW50LnZhbHVlKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgQ29tbWVudFN0YXRlbWVudDogZnVuY3Rpb24gQ29tbWVudFN0YXRlbWVudCgpIHt9LFxuXG5cdCAgU3ViRXhwcmVzc2lvbjogZnVuY3Rpb24gU3ViRXhwcmVzc2lvbihzZXhwcikge1xuXHQgICAgdHJhbnNmb3JtTGl0ZXJhbFRvUGF0aChzZXhwcik7XG5cdCAgICB2YXIgdHlwZSA9IHRoaXMuY2xhc3NpZnlTZXhwcihzZXhwcik7XG5cblx0ICAgIGlmICh0eXBlID09PSAnc2ltcGxlJykge1xuXHQgICAgICB0aGlzLnNpbXBsZVNleHByKHNleHByKTtcblx0ICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2hlbHBlcicpIHtcblx0ICAgICAgdGhpcy5oZWxwZXJTZXhwcihzZXhwcik7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLmFtYmlndW91c1NleHByKHNleHByKTtcblx0ICAgIH1cblx0ICB9LFxuXHQgIGFtYmlndW91c1NleHByOiBmdW5jdGlvbiBhbWJpZ3VvdXNTZXhwcihzZXhwciwgcHJvZ3JhbSwgaW52ZXJzZSkge1xuXHQgICAgdmFyIHBhdGggPSBzZXhwci5wYXRoLFxuXHQgICAgICAgIG5hbWUgPSBwYXRoLnBhcnRzWzBdLFxuXHQgICAgICAgIGlzQmxvY2sgPSBwcm9ncmFtICE9IG51bGwgfHwgaW52ZXJzZSAhPSBudWxsO1xuXG5cdCAgICB0aGlzLm9wY29kZSgnZ2V0Q29udGV4dCcsIHBhdGguZGVwdGgpO1xuXG5cdCAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBwcm9ncmFtKTtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIGludmVyc2UpO1xuXG5cdCAgICBwYXRoLnN0cmljdCA9IHRydWU7XG5cdCAgICB0aGlzLmFjY2VwdChwYXRoKTtcblxuXHQgICAgdGhpcy5vcGNvZGUoJ2ludm9rZUFtYmlndW91cycsIG5hbWUsIGlzQmxvY2spO1xuXHQgIH0sXG5cblx0ICBzaW1wbGVTZXhwcjogZnVuY3Rpb24gc2ltcGxlU2V4cHIoc2V4cHIpIHtcblx0ICAgIHZhciBwYXRoID0gc2V4cHIucGF0aDtcblx0ICAgIHBhdGguc3RyaWN0ID0gdHJ1ZTtcblx0ICAgIHRoaXMuYWNjZXB0KHBhdGgpO1xuXHQgICAgdGhpcy5vcGNvZGUoJ3Jlc29sdmVQb3NzaWJsZUxhbWJkYScpO1xuXHQgIH0sXG5cblx0ICBoZWxwZXJTZXhwcjogZnVuY3Rpb24gaGVscGVyU2V4cHIoc2V4cHIsIHByb2dyYW0sIGludmVyc2UpIHtcblx0ICAgIHZhciBwYXJhbXMgPSB0aGlzLnNldHVwRnVsbE11c3RhY2hlUGFyYW1zKHNleHByLCBwcm9ncmFtLCBpbnZlcnNlKSxcblx0ICAgICAgICBwYXRoID0gc2V4cHIucGF0aCxcblx0ICAgICAgICBuYW1lID0gcGF0aC5wYXJ0c1swXTtcblxuXHQgICAgaWYgKHRoaXMub3B0aW9ucy5rbm93bkhlbHBlcnNbbmFtZV0pIHtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2ludm9rZUtub3duSGVscGVyJywgcGFyYW1zLmxlbmd0aCwgbmFtZSk7XG5cdCAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5rbm93bkhlbHBlcnNPbmx5KSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdZb3Ugc3BlY2lmaWVkIGtub3duSGVscGVyc09ubHksIGJ1dCB1c2VkIHRoZSB1bmtub3duIGhlbHBlciAnICsgbmFtZSwgc2V4cHIpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcGF0aC5zdHJpY3QgPSB0cnVlO1xuXHQgICAgICBwYXRoLmZhbHN5ID0gdHJ1ZTtcblxuXHQgICAgICB0aGlzLmFjY2VwdChwYXRoKTtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2ludm9rZUhlbHBlcicsIHBhcmFtcy5sZW5ndGgsIHBhdGgub3JpZ2luYWwsIF9hc3QyWydkZWZhdWx0J10uaGVscGVycy5zaW1wbGVJZChwYXRoKSk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIFBhdGhFeHByZXNzaW9uOiBmdW5jdGlvbiBQYXRoRXhwcmVzc2lvbihwYXRoKSB7XG5cdCAgICB0aGlzLmFkZERlcHRoKHBhdGguZGVwdGgpO1xuXHQgICAgdGhpcy5vcGNvZGUoJ2dldENvbnRleHQnLCBwYXRoLmRlcHRoKTtcblxuXHQgICAgdmFyIG5hbWUgPSBwYXRoLnBhcnRzWzBdLFxuXHQgICAgICAgIHNjb3BlZCA9IF9hc3QyWydkZWZhdWx0J10uaGVscGVycy5zY29wZWRJZChwYXRoKSxcblx0ICAgICAgICBibG9ja1BhcmFtSWQgPSAhcGF0aC5kZXB0aCAmJiAhc2NvcGVkICYmIHRoaXMuYmxvY2tQYXJhbUluZGV4KG5hbWUpO1xuXG5cdCAgICBpZiAoYmxvY2tQYXJhbUlkKSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdsb29rdXBCbG9ja1BhcmFtJywgYmxvY2tQYXJhbUlkLCBwYXRoLnBhcnRzKTtcblx0ICAgIH0gZWxzZSBpZiAoIW5hbWUpIHtcblx0ICAgICAgLy8gQ29udGV4dCByZWZlcmVuY2UsIGkuZS4gYHt7Zm9vIC59fWAgb3IgYHt7Zm9vIC4ufX1gXG5cdCAgICAgIHRoaXMub3Bjb2RlKCdwdXNoQ29udGV4dCcpO1xuXHQgICAgfSBlbHNlIGlmIChwYXRoLmRhdGEpIHtcblx0ICAgICAgdGhpcy5vcHRpb25zLmRhdGEgPSB0cnVlO1xuXHQgICAgICB0aGlzLm9wY29kZSgnbG9va3VwRGF0YScsIHBhdGguZGVwdGgsIHBhdGgucGFydHMsIHBhdGguc3RyaWN0KTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdsb29rdXBPbkNvbnRleHQnLCBwYXRoLnBhcnRzLCBwYXRoLmZhbHN5LCBwYXRoLnN0cmljdCwgc2NvcGVkKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgU3RyaW5nTGl0ZXJhbDogZnVuY3Rpb24gU3RyaW5nTGl0ZXJhbChzdHJpbmcpIHtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoU3RyaW5nJywgc3RyaW5nLnZhbHVlKTtcblx0ICB9LFxuXG5cdCAgTnVtYmVyTGl0ZXJhbDogZnVuY3Rpb24gTnVtYmVyTGl0ZXJhbChudW1iZXIpIHtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoTGl0ZXJhbCcsIG51bWJlci52YWx1ZSk7XG5cdCAgfSxcblxuXHQgIEJvb2xlYW5MaXRlcmFsOiBmdW5jdGlvbiBCb29sZWFuTGl0ZXJhbChib29sKSB7XG5cdCAgICB0aGlzLm9wY29kZSgncHVzaExpdGVyYWwnLCBib29sLnZhbHVlKTtcblx0ICB9LFxuXG5cdCAgVW5kZWZpbmVkTGl0ZXJhbDogZnVuY3Rpb24gVW5kZWZpbmVkTGl0ZXJhbCgpIHtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoTGl0ZXJhbCcsICd1bmRlZmluZWQnKTtcblx0ICB9LFxuXG5cdCAgTnVsbExpdGVyYWw6IGZ1bmN0aW9uIE51bGxMaXRlcmFsKCkge1xuXHQgICAgdGhpcy5vcGNvZGUoJ3B1c2hMaXRlcmFsJywgJ251bGwnKTtcblx0ICB9LFxuXG5cdCAgSGFzaDogZnVuY3Rpb24gSGFzaChoYXNoKSB7XG5cdCAgICB2YXIgcGFpcnMgPSBoYXNoLnBhaXJzLFxuXHQgICAgICAgIGkgPSAwLFxuXHQgICAgICAgIGwgPSBwYWlycy5sZW5ndGg7XG5cblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoSGFzaCcpO1xuXG5cdCAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuXHQgICAgICB0aGlzLnB1c2hQYXJhbShwYWlyc1tpXS52YWx1ZSk7XG5cdCAgICB9XG5cdCAgICB3aGlsZSAoaS0tKSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdhc3NpZ25Ub0hhc2gnLCBwYWlyc1tpXS5rZXkpO1xuXHQgICAgfVxuXHQgICAgdGhpcy5vcGNvZGUoJ3BvcEhhc2gnKTtcblx0ICB9LFxuXG5cdCAgLy8gSEVMUEVSU1xuXHQgIG9wY29kZTogZnVuY3Rpb24gb3Bjb2RlKG5hbWUpIHtcblx0ICAgIHRoaXMub3Bjb2Rlcy5wdXNoKHtcblx0ICAgICAgb3Bjb2RlOiBuYW1lLFxuXHQgICAgICBhcmdzOiBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXG5cdCAgICAgIGxvYzogdGhpcy5zb3VyY2VOb2RlWzBdLmxvY1xuXHQgICAgfSk7XG5cdCAgfSxcblxuXHQgIGFkZERlcHRoOiBmdW5jdGlvbiBhZGREZXB0aChkZXB0aCkge1xuXHQgICAgaWYgKCFkZXB0aCkge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cblx0ICAgIHRoaXMudXNlRGVwdGhzID0gdHJ1ZTtcblx0ICB9LFxuXG5cdCAgY2xhc3NpZnlTZXhwcjogZnVuY3Rpb24gY2xhc3NpZnlTZXhwcihzZXhwcikge1xuXHQgICAgdmFyIGlzU2ltcGxlID0gX2FzdDJbJ2RlZmF1bHQnXS5oZWxwZXJzLnNpbXBsZUlkKHNleHByLnBhdGgpO1xuXG5cdCAgICB2YXIgaXNCbG9ja1BhcmFtID0gaXNTaW1wbGUgJiYgISF0aGlzLmJsb2NrUGFyYW1JbmRleChzZXhwci5wYXRoLnBhcnRzWzBdKTtcblxuXHQgICAgLy8gYSBtdXN0YWNoZSBpcyBhbiBlbGlnaWJsZSBoZWxwZXIgaWY6XG5cdCAgICAvLyAqIGl0cyBpZCBpcyBzaW1wbGUgKGEgc2luZ2xlIHBhcnQsIG5vdCBgdGhpc2Agb3IgYC4uYClcblx0ICAgIHZhciBpc0hlbHBlciA9ICFpc0Jsb2NrUGFyYW0gJiYgX2FzdDJbJ2RlZmF1bHQnXS5oZWxwZXJzLmhlbHBlckV4cHJlc3Npb24oc2V4cHIpO1xuXG5cdCAgICAvLyBpZiBhIG11c3RhY2hlIGlzIGFuIGVsaWdpYmxlIGhlbHBlciBidXQgbm90IGEgZGVmaW5pdGVcblx0ICAgIC8vIGhlbHBlciwgaXQgaXMgYW1iaWd1b3VzLCBhbmQgd2lsbCBiZSByZXNvbHZlZCBpbiBhIGxhdGVyXG5cdCAgICAvLyBwYXNzIG9yIGF0IHJ1bnRpbWUuXG5cdCAgICB2YXIgaXNFbGlnaWJsZSA9ICFpc0Jsb2NrUGFyYW0gJiYgKGlzSGVscGVyIHx8IGlzU2ltcGxlKTtcblxuXHQgICAgLy8gaWYgYW1iaWd1b3VzLCB3ZSBjYW4gcG9zc2libHkgcmVzb2x2ZSB0aGUgYW1iaWd1aXR5IG5vd1xuXHQgICAgLy8gQW4gZWxpZ2libGUgaGVscGVyIGlzIG9uZSB0aGF0IGRvZXMgbm90IGhhdmUgYSBjb21wbGV4IHBhdGgsIGkuZS4gYHRoaXMuZm9vYCwgYC4uL2Zvb2AgZXRjLlxuXHQgICAgaWYgKGlzRWxpZ2libGUgJiYgIWlzSGVscGVyKSB7XG5cdCAgICAgIHZhciBfbmFtZSA9IHNleHByLnBhdGgucGFydHNbMF0sXG5cdCAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXHQgICAgICBpZiAob3B0aW9ucy5rbm93bkhlbHBlcnNbX25hbWVdKSB7XG5cdCAgICAgICAgaXNIZWxwZXIgPSB0cnVlO1xuXHQgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMua25vd25IZWxwZXJzT25seSkge1xuXHQgICAgICAgIGlzRWxpZ2libGUgPSBmYWxzZTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBpZiAoaXNIZWxwZXIpIHtcblx0ICAgICAgcmV0dXJuICdoZWxwZXInO1xuXHQgICAgfSBlbHNlIGlmIChpc0VsaWdpYmxlKSB7XG5cdCAgICAgIHJldHVybiAnYW1iaWd1b3VzJztcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiAnc2ltcGxlJztcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgcHVzaFBhcmFtczogZnVuY3Rpb24gcHVzaFBhcmFtcyhwYXJhbXMpIHtcblx0ICAgIGZvciAodmFyIGkgPSAwLCBsID0gcGFyYW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHQgICAgICB0aGlzLnB1c2hQYXJhbShwYXJhbXNbaV0pO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBwdXNoUGFyYW06IGZ1bmN0aW9uIHB1c2hQYXJhbSh2YWwpIHtcblx0ICAgIHZhciB2YWx1ZSA9IHZhbC52YWx1ZSAhPSBudWxsID8gdmFsLnZhbHVlIDogdmFsLm9yaWdpbmFsIHx8ICcnO1xuXG5cdCAgICBpZiAodGhpcy5zdHJpbmdQYXJhbXMpIHtcblx0ICAgICAgaWYgKHZhbHVlLnJlcGxhY2UpIHtcblx0ICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL14oXFwuP1xcLlxcLykqL2csICcnKS5yZXBsYWNlKC9cXC8vZywgJy4nKTtcblx0ICAgICAgfVxuXG5cdCAgICAgIGlmICh2YWwuZGVwdGgpIHtcblx0ICAgICAgICB0aGlzLmFkZERlcHRoKHZhbC5kZXB0aCk7XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5vcGNvZGUoJ2dldENvbnRleHQnLCB2YWwuZGVwdGggfHwgMCk7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdwdXNoU3RyaW5nUGFyYW0nLCB2YWx1ZSwgdmFsLnR5cGUpO1xuXG5cdCAgICAgIGlmICh2YWwudHlwZSA9PT0gJ1N1YkV4cHJlc3Npb24nKSB7XG5cdCAgICAgICAgLy8gU3ViRXhwcmVzc2lvbnMgZ2V0IGV2YWx1YXRlZCBhbmQgcGFzc2VkIGluXG5cdCAgICAgICAgLy8gaW4gc3RyaW5nIHBhcmFtcyBtb2RlLlxuXHQgICAgICAgIHRoaXMuYWNjZXB0KHZhbCk7XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGlmICh0aGlzLnRyYWNrSWRzKSB7XG5cdCAgICAgICAgdmFyIGJsb2NrUGFyYW1JbmRleCA9IHVuZGVmaW5lZDtcblx0ICAgICAgICBpZiAodmFsLnBhcnRzICYmICFfYXN0MlsnZGVmYXVsdCddLmhlbHBlcnMuc2NvcGVkSWQodmFsKSAmJiAhdmFsLmRlcHRoKSB7XG5cdCAgICAgICAgICBibG9ja1BhcmFtSW5kZXggPSB0aGlzLmJsb2NrUGFyYW1JbmRleCh2YWwucGFydHNbMF0pO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAoYmxvY2tQYXJhbUluZGV4KSB7XG5cdCAgICAgICAgICB2YXIgYmxvY2tQYXJhbUNoaWxkID0gdmFsLnBhcnRzLnNsaWNlKDEpLmpvaW4oJy4nKTtcblx0ICAgICAgICAgIHRoaXMub3Bjb2RlKCdwdXNoSWQnLCAnQmxvY2tQYXJhbScsIGJsb2NrUGFyYW1JbmRleCwgYmxvY2tQYXJhbUNoaWxkKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgdmFsdWUgPSB2YWwub3JpZ2luYWwgfHwgdmFsdWU7XG5cdCAgICAgICAgICBpZiAodmFsdWUucmVwbGFjZSkge1xuXHQgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL150aGlzKD86XFwufCQpLywgJycpLnJlcGxhY2UoL15cXC5cXC8vLCAnJykucmVwbGFjZSgvXlxcLiQvLCAnJyk7XG5cdCAgICAgICAgICB9XG5cblx0ICAgICAgICAgIHRoaXMub3Bjb2RlKCdwdXNoSWQnLCB2YWwudHlwZSwgdmFsdWUpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICB0aGlzLmFjY2VwdCh2YWwpO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBzZXR1cEZ1bGxNdXN0YWNoZVBhcmFtczogZnVuY3Rpb24gc2V0dXBGdWxsTXVzdGFjaGVQYXJhbXMoc2V4cHIsIHByb2dyYW0sIGludmVyc2UsIG9taXRFbXB0eSkge1xuXHQgICAgdmFyIHBhcmFtcyA9IHNleHByLnBhcmFtcztcblx0ICAgIHRoaXMucHVzaFBhcmFtcyhwYXJhbXMpO1xuXG5cdCAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBwcm9ncmFtKTtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIGludmVyc2UpO1xuXG5cdCAgICBpZiAoc2V4cHIuaGFzaCkge1xuXHQgICAgICB0aGlzLmFjY2VwdChzZXhwci5oYXNoKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdlbXB0eUhhc2gnLCBvbWl0RW1wdHkpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gcGFyYW1zO1xuXHQgIH0sXG5cblx0ICBibG9ja1BhcmFtSW5kZXg6IGZ1bmN0aW9uIGJsb2NrUGFyYW1JbmRleChuYW1lKSB7XG5cdCAgICBmb3IgKHZhciBkZXB0aCA9IDAsIGxlbiA9IHRoaXMub3B0aW9ucy5ibG9ja1BhcmFtcy5sZW5ndGg7IGRlcHRoIDwgbGVuOyBkZXB0aCsrKSB7XG5cdCAgICAgIHZhciBibG9ja1BhcmFtcyA9IHRoaXMub3B0aW9ucy5ibG9ja1BhcmFtc1tkZXB0aF0sXG5cdCAgICAgICAgICBwYXJhbSA9IGJsb2NrUGFyYW1zICYmIF91dGlscy5pbmRleE9mKGJsb2NrUGFyYW1zLCBuYW1lKTtcblx0ICAgICAgaWYgKGJsb2NrUGFyYW1zICYmIHBhcmFtID49IDApIHtcblx0ICAgICAgICByZXR1cm4gW2RlcHRoLCBwYXJhbV07XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9XG5cdH07XG5cblx0ZnVuY3Rpb24gcHJlY29tcGlsZShpbnB1dCwgb3B0aW9ucywgZW52KSB7XG5cdCAgaWYgKGlucHV0ID09IG51bGwgfHwgdHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJyAmJiBpbnB1dC50eXBlICE9PSAnUHJvZ3JhbScpIHtcblx0ICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdZb3UgbXVzdCBwYXNzIGEgc3RyaW5nIG9yIEhhbmRsZWJhcnMgQVNUIHRvIEhhbmRsZWJhcnMucHJlY29tcGlsZS4gWW91IHBhc3NlZCAnICsgaW5wdXQpO1xuXHQgIH1cblxuXHQgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHQgIGlmICghKCdkYXRhJyBpbiBvcHRpb25zKSkge1xuXHQgICAgb3B0aW9ucy5kYXRhID0gdHJ1ZTtcblx0ICB9XG5cdCAgaWYgKG9wdGlvbnMuY29tcGF0KSB7XG5cdCAgICBvcHRpb25zLnVzZURlcHRocyA9IHRydWU7XG5cdCAgfVxuXG5cdCAgdmFyIGFzdCA9IGVudi5wYXJzZShpbnB1dCwgb3B0aW9ucyksXG5cdCAgICAgIGVudmlyb25tZW50ID0gbmV3IGVudi5Db21waWxlcigpLmNvbXBpbGUoYXN0LCBvcHRpb25zKTtcblx0ICByZXR1cm4gbmV3IGVudi5KYXZhU2NyaXB0Q29tcGlsZXIoKS5jb21waWxlKGVudmlyb25tZW50LCBvcHRpb25zKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNvbXBpbGUoaW5wdXQsIG9wdGlvbnMsIGVudikge1xuXHQgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQpIG9wdGlvbnMgPSB7fTtcblxuXHQgIGlmIChpbnB1dCA9PSBudWxsIHx8IHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycgJiYgaW5wdXQudHlwZSAhPT0gJ1Byb2dyYW0nKSB7XG5cdCAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnWW91IG11c3QgcGFzcyBhIHN0cmluZyBvciBIYW5kbGViYXJzIEFTVCB0byBIYW5kbGViYXJzLmNvbXBpbGUuIFlvdSBwYXNzZWQgJyArIGlucHV0KTtcblx0ICB9XG5cblx0ICBvcHRpb25zID0gX3V0aWxzLmV4dGVuZCh7fSwgb3B0aW9ucyk7XG5cdCAgaWYgKCEoJ2RhdGEnIGluIG9wdGlvbnMpKSB7XG5cdCAgICBvcHRpb25zLmRhdGEgPSB0cnVlO1xuXHQgIH1cblx0ICBpZiAob3B0aW9ucy5jb21wYXQpIHtcblx0ICAgIG9wdGlvbnMudXNlRGVwdGhzID0gdHJ1ZTtcblx0ICB9XG5cblx0ICB2YXIgY29tcGlsZWQgPSB1bmRlZmluZWQ7XG5cblx0ICBmdW5jdGlvbiBjb21waWxlSW5wdXQoKSB7XG5cdCAgICB2YXIgYXN0ID0gZW52LnBhcnNlKGlucHV0LCBvcHRpb25zKSxcblx0ICAgICAgICBlbnZpcm9ubWVudCA9IG5ldyBlbnYuQ29tcGlsZXIoKS5jb21waWxlKGFzdCwgb3B0aW9ucyksXG5cdCAgICAgICAgdGVtcGxhdGVTcGVjID0gbmV3IGVudi5KYXZhU2NyaXB0Q29tcGlsZXIoKS5jb21waWxlKGVudmlyb25tZW50LCBvcHRpb25zLCB1bmRlZmluZWQsIHRydWUpO1xuXHQgICAgcmV0dXJuIGVudi50ZW1wbGF0ZSh0ZW1wbGF0ZVNwZWMpO1xuXHQgIH1cblxuXHQgIC8vIFRlbXBsYXRlIGlzIG9ubHkgY29tcGlsZWQgb24gZmlyc3QgdXNlIGFuZCBjYWNoZWQgYWZ0ZXIgdGhhdCBwb2ludC5cblx0ICBmdW5jdGlvbiByZXQoY29udGV4dCwgZXhlY09wdGlvbnMpIHtcblx0ICAgIGlmICghY29tcGlsZWQpIHtcblx0ICAgICAgY29tcGlsZWQgPSBjb21waWxlSW5wdXQoKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjb21waWxlZC5jYWxsKHRoaXMsIGNvbnRleHQsIGV4ZWNPcHRpb25zKTtcblx0ICB9XG5cdCAgcmV0Ll9zZXR1cCA9IGZ1bmN0aW9uIChzZXR1cE9wdGlvbnMpIHtcblx0ICAgIGlmICghY29tcGlsZWQpIHtcblx0ICAgICAgY29tcGlsZWQgPSBjb21waWxlSW5wdXQoKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjb21waWxlZC5fc2V0dXAoc2V0dXBPcHRpb25zKTtcblx0ICB9O1xuXHQgIHJldC5fY2hpbGQgPSBmdW5jdGlvbiAoaSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuXHQgICAgaWYgKCFjb21waWxlZCkge1xuXHQgICAgICBjb21waWxlZCA9IGNvbXBpbGVJbnB1dCgpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGNvbXBpbGVkLl9jaGlsZChpLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcblx0ICB9O1xuXHQgIHJldHVybiByZXQ7XG5cdH1cblxuXHRmdW5jdGlvbiBhcmdFcXVhbHMoYSwgYikge1xuXHQgIGlmIChhID09PSBiKSB7XG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0ICB9XG5cblx0ICBpZiAoX3V0aWxzLmlzQXJyYXkoYSkgJiYgX3V0aWxzLmlzQXJyYXkoYikgJiYgYS5sZW5ndGggPT09IGIubGVuZ3RoKSB7XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgaWYgKCFhcmdFcXVhbHMoYVtpXSwgYltpXSkpIHtcblx0ICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICAgIHJldHVybiB0cnVlO1xuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIHRyYW5zZm9ybUxpdGVyYWxUb1BhdGgoc2V4cHIpIHtcblx0ICBpZiAoIXNleHByLnBhdGgucGFydHMpIHtcblx0ICAgIHZhciBsaXRlcmFsID0gc2V4cHIucGF0aDtcblx0ICAgIC8vIENhc3RpbmcgdG8gc3RyaW5nIGhlcmUgdG8gbWFrZSBmYWxzZSBhbmQgMCBsaXRlcmFsIHZhbHVlcyBwbGF5IG5pY2VseSB3aXRoIHRoZSByZXN0XG5cdCAgICAvLyBvZiB0aGUgc3lzdGVtLlxuXHQgICAgc2V4cHIucGF0aCA9IHtcblx0ICAgICAgdHlwZTogJ1BhdGhFeHByZXNzaW9uJyxcblx0ICAgICAgZGF0YTogZmFsc2UsXG5cdCAgICAgIGRlcHRoOiAwLFxuXHQgICAgICBwYXJ0czogW2xpdGVyYWwub3JpZ2luYWwgKyAnJ10sXG5cdCAgICAgIG9yaWdpbmFsOiBsaXRlcmFsLm9yaWdpbmFsICsgJycsXG5cdCAgICAgIGxvYzogbGl0ZXJhbC5sb2Ncblx0ICAgIH07XG5cdCAgfVxuXHR9XG5cbi8qKiovIH0pLFxuLyogNTIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9PYmplY3Qka2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpWydkZWZhdWx0J107XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX2Jhc2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBfY29kZUdlbiA9IF9fd2VicGFja19yZXF1aXJlX18oNTMpO1xuXG5cdHZhciBfY29kZUdlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2RlR2VuKTtcblxuXHRmdW5jdGlvbiBMaXRlcmFsKHZhbHVlKSB7XG5cdCAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0ZnVuY3Rpb24gSmF2YVNjcmlwdENvbXBpbGVyKCkge31cblxuXHRKYXZhU2NyaXB0Q29tcGlsZXIucHJvdG90eXBlID0ge1xuXHQgIC8vIFBVQkxJQyBBUEk6IFlvdSBjYW4gb3ZlcnJpZGUgdGhlc2UgbWV0aG9kcyBpbiBhIHN1YmNsYXNzIHRvIHByb3ZpZGVcblx0ICAvLyBhbHRlcm5hdGl2ZSBjb21waWxlZCBmb3JtcyBmb3IgbmFtZSBsb29rdXAgYW5kIGJ1ZmZlcmluZyBzZW1hbnRpY3Ncblx0ICBuYW1lTG9va3VwOiBmdW5jdGlvbiBuYW1lTG9va3VwKHBhcmVudCwgbmFtZSAvKiwgIHR5cGUgKi8pIHtcblx0ICAgIHJldHVybiB0aGlzLmludGVybmFsTmFtZUxvb2t1cChwYXJlbnQsIG5hbWUpO1xuXHQgIH0sXG5cdCAgZGVwdGhlZExvb2t1cDogZnVuY3Rpb24gZGVwdGhlZExvb2t1cChuYW1lKSB7XG5cdCAgICByZXR1cm4gW3RoaXMuYWxpYXNhYmxlKCdjb250YWluZXIubG9va3VwJyksICcoZGVwdGhzLCAnLCBKU09OLnN0cmluZ2lmeShuYW1lKSwgJyknXTtcblx0ICB9LFxuXG5cdCAgY29tcGlsZXJJbmZvOiBmdW5jdGlvbiBjb21waWxlckluZm8oKSB7XG5cdCAgICB2YXIgcmV2aXNpb24gPSBfYmFzZS5DT01QSUxFUl9SRVZJU0lPTixcblx0ICAgICAgICB2ZXJzaW9ucyA9IF9iYXNlLlJFVklTSU9OX0NIQU5HRVNbcmV2aXNpb25dO1xuXHQgICAgcmV0dXJuIFtyZXZpc2lvbiwgdmVyc2lvbnNdO1xuXHQgIH0sXG5cblx0ICBhcHBlbmRUb0J1ZmZlcjogZnVuY3Rpb24gYXBwZW5kVG9CdWZmZXIoc291cmNlLCBsb2NhdGlvbiwgZXhwbGljaXQpIHtcblx0ICAgIC8vIEZvcmNlIGEgc291cmNlIGFzIHRoaXMgc2ltcGxpZmllcyB0aGUgbWVyZ2UgbG9naWMuXG5cdCAgICBpZiAoIV91dGlscy5pc0FycmF5KHNvdXJjZSkpIHtcblx0ICAgICAgc291cmNlID0gW3NvdXJjZV07XG5cdCAgICB9XG5cdCAgICBzb3VyY2UgPSB0aGlzLnNvdXJjZS53cmFwKHNvdXJjZSwgbG9jYXRpb24pO1xuXG5cdCAgICBpZiAodGhpcy5lbnZpcm9ubWVudC5pc1NpbXBsZSkge1xuXHQgICAgICByZXR1cm4gWydyZXR1cm4gJywgc291cmNlLCAnOyddO1xuXHQgICAgfSBlbHNlIGlmIChleHBsaWNpdCkge1xuXHQgICAgICAvLyBUaGlzIGlzIGEgY2FzZSB3aGVyZSB0aGUgYnVmZmVyIG9wZXJhdGlvbiBvY2N1cnMgYXMgYSBjaGlsZCBvZiBhbm90aGVyXG5cdCAgICAgIC8vIGNvbnN0cnVjdCwgZ2VuZXJhbGx5IGJyYWNlcy4gV2UgaGF2ZSB0byBleHBsaWNpdGx5IG91dHB1dCB0aGVzZSBidWZmZXJcblx0ICAgICAgLy8gb3BlcmF0aW9ucyB0byBlbnN1cmUgdGhhdCB0aGUgZW1pdHRlZCBjb2RlIGdvZXMgaW4gdGhlIGNvcnJlY3QgbG9jYXRpb24uXG5cdCAgICAgIHJldHVybiBbJ2J1ZmZlciArPSAnLCBzb3VyY2UsICc7J107XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBzb3VyY2UuYXBwZW5kVG9CdWZmZXIgPSB0cnVlO1xuXHQgICAgICByZXR1cm4gc291cmNlO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBpbml0aWFsaXplQnVmZmVyOiBmdW5jdGlvbiBpbml0aWFsaXplQnVmZmVyKCkge1xuXHQgICAgcmV0dXJuIHRoaXMucXVvdGVkU3RyaW5nKCcnKTtcblx0ICB9LFxuXHQgIC8vIEVORCBQVUJMSUMgQVBJXG5cdCAgaW50ZXJuYWxOYW1lTG9va3VwOiBmdW5jdGlvbiBpbnRlcm5hbE5hbWVMb29rdXAocGFyZW50LCBuYW1lKSB7XG5cdCAgICB0aGlzLmxvb2t1cFByb3BlcnR5RnVuY3Rpb25Jc1VzZWQgPSB0cnVlO1xuXHQgICAgcmV0dXJuIFsnbG9va3VwUHJvcGVydHkoJywgcGFyZW50LCAnLCcsIEpTT04uc3RyaW5naWZ5KG5hbWUpLCAnKSddO1xuXHQgIH0sXG5cblx0ICBsb29rdXBQcm9wZXJ0eUZ1bmN0aW9uSXNVc2VkOiBmYWxzZSxcblxuXHQgIGNvbXBpbGU6IGZ1bmN0aW9uIGNvbXBpbGUoZW52aXJvbm1lbnQsIG9wdGlvbnMsIGNvbnRleHQsIGFzT2JqZWN0KSB7XG5cdCAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG5cdCAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHQgICAgdGhpcy5zdHJpbmdQYXJhbXMgPSB0aGlzLm9wdGlvbnMuc3RyaW5nUGFyYW1zO1xuXHQgICAgdGhpcy50cmFja0lkcyA9IHRoaXMub3B0aW9ucy50cmFja0lkcztcblx0ICAgIHRoaXMucHJlY29tcGlsZSA9ICFhc09iamVjdDtcblxuXHQgICAgdGhpcy5uYW1lID0gdGhpcy5lbnZpcm9ubWVudC5uYW1lO1xuXHQgICAgdGhpcy5pc0NoaWxkID0gISFjb250ZXh0O1xuXHQgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dCB8fCB7XG5cdCAgICAgIGRlY29yYXRvcnM6IFtdLFxuXHQgICAgICBwcm9ncmFtczogW10sXG5cdCAgICAgIGVudmlyb25tZW50czogW11cblx0ICAgIH07XG5cblx0ICAgIHRoaXMucHJlYW1ibGUoKTtcblxuXHQgICAgdGhpcy5zdGFja1Nsb3QgPSAwO1xuXHQgICAgdGhpcy5zdGFja1ZhcnMgPSBbXTtcblx0ICAgIHRoaXMuYWxpYXNlcyA9IHt9O1xuXHQgICAgdGhpcy5yZWdpc3RlcnMgPSB7IGxpc3Q6IFtdIH07XG5cdCAgICB0aGlzLmhhc2hlcyA9IFtdO1xuXHQgICAgdGhpcy5jb21waWxlU3RhY2sgPSBbXTtcblx0ICAgIHRoaXMuaW5saW5lU3RhY2sgPSBbXTtcblx0ICAgIHRoaXMuYmxvY2tQYXJhbXMgPSBbXTtcblxuXHQgICAgdGhpcy5jb21waWxlQ2hpbGRyZW4oZW52aXJvbm1lbnQsIG9wdGlvbnMpO1xuXG5cdCAgICB0aGlzLnVzZURlcHRocyA9IHRoaXMudXNlRGVwdGhzIHx8IGVudmlyb25tZW50LnVzZURlcHRocyB8fCBlbnZpcm9ubWVudC51c2VEZWNvcmF0b3JzIHx8IHRoaXMub3B0aW9ucy5jb21wYXQ7XG5cdCAgICB0aGlzLnVzZUJsb2NrUGFyYW1zID0gdGhpcy51c2VCbG9ja1BhcmFtcyB8fCBlbnZpcm9ubWVudC51c2VCbG9ja1BhcmFtcztcblxuXHQgICAgdmFyIG9wY29kZXMgPSBlbnZpcm9ubWVudC5vcGNvZGVzLFxuXHQgICAgICAgIG9wY29kZSA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBmaXJzdExvYyA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBpID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIGwgPSB1bmRlZmluZWQ7XG5cblx0ICAgIGZvciAoaSA9IDAsIGwgPSBvcGNvZGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHQgICAgICBvcGNvZGUgPSBvcGNvZGVzW2ldO1xuXG5cdCAgICAgIHRoaXMuc291cmNlLmN1cnJlbnRMb2NhdGlvbiA9IG9wY29kZS5sb2M7XG5cdCAgICAgIGZpcnN0TG9jID0gZmlyc3RMb2MgfHwgb3Bjb2RlLmxvYztcblx0ICAgICAgdGhpc1tvcGNvZGUub3Bjb2RlXS5hcHBseSh0aGlzLCBvcGNvZGUuYXJncyk7XG5cdCAgICB9XG5cblx0ICAgIC8vIEZsdXNoIGFueSB0cmFpbGluZyBjb250ZW50IHRoYXQgbWlnaHQgYmUgcGVuZGluZy5cblx0ICAgIHRoaXMuc291cmNlLmN1cnJlbnRMb2NhdGlvbiA9IGZpcnN0TG9jO1xuXHQgICAgdGhpcy5wdXNoU291cmNlKCcnKTtcblxuXHQgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICAgIGlmICh0aGlzLnN0YWNrU2xvdCB8fCB0aGlzLmlubGluZVN0YWNrLmxlbmd0aCB8fCB0aGlzLmNvbXBpbGVTdGFjay5sZW5ndGgpIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0NvbXBpbGUgY29tcGxldGVkIHdpdGggY29udGVudCBsZWZ0IG9uIHN0YWNrJyk7XG5cdCAgICB9XG5cblx0ICAgIGlmICghdGhpcy5kZWNvcmF0b3JzLmlzRW1wdHkoKSkge1xuXHQgICAgICB0aGlzLnVzZURlY29yYXRvcnMgPSB0cnVlO1xuXG5cdCAgICAgIHRoaXMuZGVjb3JhdG9ycy5wcmVwZW5kKFsndmFyIGRlY29yYXRvcnMgPSBjb250YWluZXIuZGVjb3JhdG9ycywgJywgdGhpcy5sb29rdXBQcm9wZXJ0eUZ1bmN0aW9uVmFyRGVjbGFyYXRpb24oKSwgJztcXG4nXSk7XG5cdCAgICAgIHRoaXMuZGVjb3JhdG9ycy5wdXNoKCdyZXR1cm4gZm47Jyk7XG5cblx0ICAgICAgaWYgKGFzT2JqZWN0KSB7XG5cdCAgICAgICAgdGhpcy5kZWNvcmF0b3JzID0gRnVuY3Rpb24uYXBwbHkodGhpcywgWydmbicsICdwcm9wcycsICdjb250YWluZXInLCAnZGVwdGgwJywgJ2RhdGEnLCAnYmxvY2tQYXJhbXMnLCAnZGVwdGhzJywgdGhpcy5kZWNvcmF0b3JzLm1lcmdlKCldKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLmRlY29yYXRvcnMucHJlcGVuZCgnZnVuY3Rpb24oZm4sIHByb3BzLCBjb250YWluZXIsIGRlcHRoMCwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocykge1xcbicpO1xuXHQgICAgICAgIHRoaXMuZGVjb3JhdG9ycy5wdXNoKCd9XFxuJyk7XG5cdCAgICAgICAgdGhpcy5kZWNvcmF0b3JzID0gdGhpcy5kZWNvcmF0b3JzLm1lcmdlKCk7XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMuZGVjb3JhdG9ycyA9IHVuZGVmaW5lZDtcblx0ICAgIH1cblxuXHQgICAgdmFyIGZuID0gdGhpcy5jcmVhdGVGdW5jdGlvbkNvbnRleHQoYXNPYmplY3QpO1xuXHQgICAgaWYgKCF0aGlzLmlzQ2hpbGQpIHtcblx0ICAgICAgdmFyIHJldCA9IHtcblx0ICAgICAgICBjb21waWxlcjogdGhpcy5jb21waWxlckluZm8oKSxcblx0ICAgICAgICBtYWluOiBmblxuXHQgICAgICB9O1xuXG5cdCAgICAgIGlmICh0aGlzLmRlY29yYXRvcnMpIHtcblx0ICAgICAgICByZXQubWFpbl9kID0gdGhpcy5kZWNvcmF0b3JzOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuXHQgICAgICAgIHJldC51c2VEZWNvcmF0b3JzID0gdHJ1ZTtcblx0ICAgICAgfVxuXG5cdCAgICAgIHZhciBfY29udGV4dCA9IHRoaXMuY29udGV4dDtcblx0ICAgICAgdmFyIHByb2dyYW1zID0gX2NvbnRleHQucHJvZ3JhbXM7XG5cdCAgICAgIHZhciBkZWNvcmF0b3JzID0gX2NvbnRleHQuZGVjb3JhdG9ycztcblxuXHQgICAgICBmb3IgKGkgPSAwLCBsID0gcHJvZ3JhbXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICAgICAgaWYgKHByb2dyYW1zW2ldKSB7XG5cdCAgICAgICAgICByZXRbaV0gPSBwcm9ncmFtc1tpXTtcblx0ICAgICAgICAgIGlmIChkZWNvcmF0b3JzW2ldKSB7XG5cdCAgICAgICAgICAgIHJldFtpICsgJ19kJ10gPSBkZWNvcmF0b3JzW2ldO1xuXHQgICAgICAgICAgICByZXQudXNlRGVjb3JhdG9ycyA9IHRydWU7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cblx0ICAgICAgaWYgKHRoaXMuZW52aXJvbm1lbnQudXNlUGFydGlhbCkge1xuXHQgICAgICAgIHJldC51c2VQYXJ0aWFsID0gdHJ1ZTtcblx0ICAgICAgfVxuXHQgICAgICBpZiAodGhpcy5vcHRpb25zLmRhdGEpIHtcblx0ICAgICAgICByZXQudXNlRGF0YSA9IHRydWU7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHRoaXMudXNlRGVwdGhzKSB7XG5cdCAgICAgICAgcmV0LnVzZURlcHRocyA9IHRydWU7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHRoaXMudXNlQmxvY2tQYXJhbXMpIHtcblx0ICAgICAgICByZXQudXNlQmxvY2tQYXJhbXMgPSB0cnVlO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICh0aGlzLm9wdGlvbnMuY29tcGF0KSB7XG5cdCAgICAgICAgcmV0LmNvbXBhdCA9IHRydWU7XG5cdCAgICAgIH1cblxuXHQgICAgICBpZiAoIWFzT2JqZWN0KSB7XG5cdCAgICAgICAgcmV0LmNvbXBpbGVyID0gSlNPTi5zdHJpbmdpZnkocmV0LmNvbXBpbGVyKTtcblxuXHQgICAgICAgIHRoaXMuc291cmNlLmN1cnJlbnRMb2NhdGlvbiA9IHsgc3RhcnQ6IHsgbGluZTogMSwgY29sdW1uOiAwIH0gfTtcblx0ICAgICAgICByZXQgPSB0aGlzLm9iamVjdExpdGVyYWwocmV0KTtcblxuXHQgICAgICAgIGlmIChvcHRpb25zLnNyY05hbWUpIHtcblx0ICAgICAgICAgIHJldCA9IHJldC50b1N0cmluZ1dpdGhTb3VyY2VNYXAoeyBmaWxlOiBvcHRpb25zLmRlc3ROYW1lIH0pO1xuXHQgICAgICAgICAgcmV0Lm1hcCA9IHJldC5tYXAgJiYgcmV0Lm1hcC50b1N0cmluZygpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICByZXQgPSByZXQudG9TdHJpbmcoKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgcmV0LmNvbXBpbGVyT3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblx0ICAgICAgfVxuXG5cdCAgICAgIHJldHVybiByZXQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXR1cm4gZm47XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIHByZWFtYmxlOiBmdW5jdGlvbiBwcmVhbWJsZSgpIHtcblx0ICAgIC8vIHRyYWNrIHRoZSBsYXN0IGNvbnRleHQgcHVzaGVkIGludG8gcGxhY2UgdG8gYWxsb3cgc2tpcHBpbmcgdGhlXG5cdCAgICAvLyBnZXRDb250ZXh0IG9wY29kZSB3aGVuIGl0IHdvdWxkIGJlIGEgbm9vcFxuXHQgICAgdGhpcy5sYXN0Q29udGV4dCA9IDA7XG5cdCAgICB0aGlzLnNvdXJjZSA9IG5ldyBfY29kZUdlbjJbJ2RlZmF1bHQnXSh0aGlzLm9wdGlvbnMuc3JjTmFtZSk7XG5cdCAgICB0aGlzLmRlY29yYXRvcnMgPSBuZXcgX2NvZGVHZW4yWydkZWZhdWx0J10odGhpcy5vcHRpb25zLnNyY05hbWUpO1xuXHQgIH0sXG5cblx0ICBjcmVhdGVGdW5jdGlvbkNvbnRleHQ6IGZ1bmN0aW9uIGNyZWF0ZUZ1bmN0aW9uQ29udGV4dChhc09iamVjdCkge1xuXHQgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuXHQgICAgdmFyIF90aGlzID0gdGhpcztcblxuXHQgICAgdmFyIHZhckRlY2xhcmF0aW9ucyA9ICcnO1xuXG5cdCAgICB2YXIgbG9jYWxzID0gdGhpcy5zdGFja1ZhcnMuY29uY2F0KHRoaXMucmVnaXN0ZXJzLmxpc3QpO1xuXHQgICAgaWYgKGxvY2Fscy5sZW5ndGggPiAwKSB7XG5cdCAgICAgIHZhckRlY2xhcmF0aW9ucyArPSAnLCAnICsgbG9jYWxzLmpvaW4oJywgJyk7XG5cdCAgICB9XG5cblx0ICAgIC8vIEdlbmVyYXRlIG1pbmltaXplciBhbGlhcyBtYXBwaW5nc1xuXHQgICAgLy9cblx0ICAgIC8vIFdoZW4gdXNpbmcgdHJ1ZSBTb3VyY2VOb2RlcywgdGhpcyB3aWxsIHVwZGF0ZSBhbGwgcmVmZXJlbmNlcyB0byB0aGUgZ2l2ZW4gYWxpYXNcblx0ICAgIC8vIGFzIHRoZSBzb3VyY2Ugbm9kZXMgYXJlIHJldXNlZCBpbiBzaXR1LiBGb3IgdGhlIG5vbi1zb3VyY2Ugbm9kZSBjb21waWxhdGlvbiBtb2RlLFxuXHQgICAgLy8gYWxpYXNlcyB3aWxsIG5vdCBiZSB1c2VkLCBidXQgdGhpcyBjYXNlIGlzIGFscmVhZHkgYmVpbmcgcnVuIG9uIHRoZSBjbGllbnQgYW5kXG5cdCAgICAvLyB3ZSBhcmVuJ3QgY29uY2VybiBhYm91dCBtaW5pbWl6aW5nIHRoZSB0ZW1wbGF0ZSBzaXplLlxuXHQgICAgdmFyIGFsaWFzQ291bnQgPSAwO1xuXHQgICAgX09iamVjdCRrZXlzKHRoaXMuYWxpYXNlcykuZm9yRWFjaChmdW5jdGlvbiAoYWxpYXMpIHtcblx0ICAgICAgdmFyIG5vZGUgPSBfdGhpcy5hbGlhc2VzW2FsaWFzXTtcblx0ICAgICAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5yZWZlcmVuY2VDb3VudCA+IDEpIHtcblx0ICAgICAgICB2YXJEZWNsYXJhdGlvbnMgKz0gJywgYWxpYXMnICsgKythbGlhc0NvdW50ICsgJz0nICsgYWxpYXM7XG5cdCAgICAgICAgbm9kZS5jaGlsZHJlblswXSA9ICdhbGlhcycgKyBhbGlhc0NvdW50O1xuXHQgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgaWYgKHRoaXMubG9va3VwUHJvcGVydHlGdW5jdGlvbklzVXNlZCkge1xuXHQgICAgICB2YXJEZWNsYXJhdGlvbnMgKz0gJywgJyArIHRoaXMubG9va3VwUHJvcGVydHlGdW5jdGlvblZhckRlY2xhcmF0aW9uKCk7XG5cdCAgICB9XG5cblx0ICAgIHZhciBwYXJhbXMgPSBbJ2NvbnRhaW5lcicsICdkZXB0aDAnLCAnaGVscGVycycsICdwYXJ0aWFscycsICdkYXRhJ107XG5cblx0ICAgIGlmICh0aGlzLnVzZUJsb2NrUGFyYW1zIHx8IHRoaXMudXNlRGVwdGhzKSB7XG5cdCAgICAgIHBhcmFtcy5wdXNoKCdibG9ja1BhcmFtcycpO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMudXNlRGVwdGhzKSB7XG5cdCAgICAgIHBhcmFtcy5wdXNoKCdkZXB0aHMnKTtcblx0ICAgIH1cblxuXHQgICAgLy8gUGVyZm9ybSBhIHNlY29uZCBwYXNzIG92ZXIgdGhlIG91dHB1dCB0byBtZXJnZSBjb250ZW50IHdoZW4gcG9zc2libGVcblx0ICAgIHZhciBzb3VyY2UgPSB0aGlzLm1lcmdlU291cmNlKHZhckRlY2xhcmF0aW9ucyk7XG5cblx0ICAgIGlmIChhc09iamVjdCkge1xuXHQgICAgICBwYXJhbXMucHVzaChzb3VyY2UpO1xuXG5cdCAgICAgIHJldHVybiBGdW5jdGlvbi5hcHBseSh0aGlzLCBwYXJhbXMpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIHRoaXMuc291cmNlLndyYXAoWydmdW5jdGlvbignLCBwYXJhbXMuam9pbignLCcpLCAnKSB7XFxuICAnLCBzb3VyY2UsICd9J10pO1xuXHQgICAgfVxuXHQgIH0sXG5cdCAgbWVyZ2VTb3VyY2U6IGZ1bmN0aW9uIG1lcmdlU291cmNlKHZhckRlY2xhcmF0aW9ucykge1xuXHQgICAgdmFyIGlzU2ltcGxlID0gdGhpcy5lbnZpcm9ubWVudC5pc1NpbXBsZSxcblx0ICAgICAgICBhcHBlbmRPbmx5ID0gIXRoaXMuZm9yY2VCdWZmZXIsXG5cdCAgICAgICAgYXBwZW5kRmlyc3QgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgc291cmNlU2VlbiA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBidWZmZXJTdGFydCA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBidWZmZXJFbmQgPSB1bmRlZmluZWQ7XG5cdCAgICB0aGlzLnNvdXJjZS5lYWNoKGZ1bmN0aW9uIChsaW5lKSB7XG5cdCAgICAgIGlmIChsaW5lLmFwcGVuZFRvQnVmZmVyKSB7XG5cdCAgICAgICAgaWYgKGJ1ZmZlclN0YXJ0KSB7XG5cdCAgICAgICAgICBsaW5lLnByZXBlbmQoJyAgKyAnKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgYnVmZmVyU3RhcnQgPSBsaW5lO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBidWZmZXJFbmQgPSBsaW5lO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGlmIChidWZmZXJTdGFydCkge1xuXHQgICAgICAgICAgaWYgKCFzb3VyY2VTZWVuKSB7XG5cdCAgICAgICAgICAgIGFwcGVuZEZpcnN0ID0gdHJ1ZTtcblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIGJ1ZmZlclN0YXJ0LnByZXBlbmQoJ2J1ZmZlciArPSAnKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICAgIGJ1ZmZlckVuZC5hZGQoJzsnKTtcblx0ICAgICAgICAgIGJ1ZmZlclN0YXJ0ID0gYnVmZmVyRW5kID0gdW5kZWZpbmVkO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHNvdXJjZVNlZW4gPSB0cnVlO1xuXHQgICAgICAgIGlmICghaXNTaW1wbGUpIHtcblx0ICAgICAgICAgIGFwcGVuZE9ubHkgPSBmYWxzZTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICBpZiAoYXBwZW5kT25seSkge1xuXHQgICAgICBpZiAoYnVmZmVyU3RhcnQpIHtcblx0ICAgICAgICBidWZmZXJTdGFydC5wcmVwZW5kKCdyZXR1cm4gJyk7XG5cdCAgICAgICAgYnVmZmVyRW5kLmFkZCgnOycpO1xuXHQgICAgICB9IGVsc2UgaWYgKCFzb3VyY2VTZWVuKSB7XG5cdCAgICAgICAgdGhpcy5zb3VyY2UucHVzaCgncmV0dXJuIFwiXCI7Jyk7XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHZhckRlY2xhcmF0aW9ucyArPSAnLCBidWZmZXIgPSAnICsgKGFwcGVuZEZpcnN0ID8gJycgOiB0aGlzLmluaXRpYWxpemVCdWZmZXIoKSk7XG5cblx0ICAgICAgaWYgKGJ1ZmZlclN0YXJ0KSB7XG5cdCAgICAgICAgYnVmZmVyU3RhcnQucHJlcGVuZCgncmV0dXJuIGJ1ZmZlciArICcpO1xuXHQgICAgICAgIGJ1ZmZlckVuZC5hZGQoJzsnKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLnNvdXJjZS5wdXNoKCdyZXR1cm4gYnVmZmVyOycpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIGlmICh2YXJEZWNsYXJhdGlvbnMpIHtcblx0ICAgICAgdGhpcy5zb3VyY2UucHJlcGVuZCgndmFyICcgKyB2YXJEZWNsYXJhdGlvbnMuc3Vic3RyaW5nKDIpICsgKGFwcGVuZEZpcnN0ID8gJycgOiAnO1xcbicpKTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIHRoaXMuc291cmNlLm1lcmdlKCk7XG5cdCAgfSxcblxuXHQgIGxvb2t1cFByb3BlcnR5RnVuY3Rpb25WYXJEZWNsYXJhdGlvbjogZnVuY3Rpb24gbG9va3VwUHJvcGVydHlGdW5jdGlvblZhckRlY2xhcmF0aW9uKCkge1xuXHQgICAgcmV0dXJuICdcXG4gICAgICBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcXG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xcbiAgICAgICAgfVxcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxcbiAgICB9XFxuICAgICcudHJpbSgpO1xuXHQgIH0sXG5cblx0ICAvLyBbYmxvY2tWYWx1ZV1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IGhhc2gsIGludmVyc2UsIHByb2dyYW0sIHZhbHVlXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiByZXR1cm4gdmFsdWUgb2YgYmxvY2tIZWxwZXJNaXNzaW5nXG5cdCAgLy9cblx0ICAvLyBUaGUgcHVycG9zZSBvZiB0aGlzIG9wY29kZSBpcyB0byB0YWtlIGEgYmxvY2sgb2YgdGhlIGZvcm1cblx0ICAvLyBge3sjdGhpcy5mb299fS4uLnt7L3RoaXMuZm9vfX1gLCByZXNvbHZlIHRoZSB2YWx1ZSBvZiBgZm9vYCwgYW5kXG5cdCAgLy8gcmVwbGFjZSBpdCBvbiB0aGUgc3RhY2sgd2l0aCB0aGUgcmVzdWx0IG9mIHByb3Blcmx5XG5cdCAgLy8gaW52b2tpbmcgYmxvY2tIZWxwZXJNaXNzaW5nLlxuXHQgIGJsb2NrVmFsdWU6IGZ1bmN0aW9uIGJsb2NrVmFsdWUobmFtZSkge1xuXHQgICAgdmFyIGJsb2NrSGVscGVyTWlzc2luZyA9IHRoaXMuYWxpYXNhYmxlKCdjb250YWluZXIuaG9va3MuYmxvY2tIZWxwZXJNaXNzaW5nJyksXG5cdCAgICAgICAgcGFyYW1zID0gW3RoaXMuY29udGV4dE5hbWUoMCldO1xuXHQgICAgdGhpcy5zZXR1cEhlbHBlckFyZ3MobmFtZSwgMCwgcGFyYW1zKTtcblxuXHQgICAgdmFyIGJsb2NrTmFtZSA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgIHBhcmFtcy5zcGxpY2UoMSwgMCwgYmxvY2tOYW1lKTtcblxuXHQgICAgdGhpcy5wdXNoKHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbChibG9ja0hlbHBlck1pc3NpbmcsICdjYWxsJywgcGFyYW1zKSk7XG5cdCAgfSxcblxuXHQgIC8vIFthbWJpZ3VvdXNCbG9ja1ZhbHVlXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgaW52ZXJzZSwgcHJvZ3JhbSwgdmFsdWVcblx0ICAvLyBDb21waWxlciB2YWx1ZSwgYmVmb3JlOiBsYXN0SGVscGVyPXZhbHVlIG9mIGxhc3QgZm91bmQgaGVscGVyLCBpZiBhbnlcblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXIsIGlmIG5vIGxhc3RIZWxwZXI6IHNhbWUgYXMgW2Jsb2NrVmFsdWVdXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyLCBpZiBsYXN0SGVscGVyOiB2YWx1ZVxuXHQgIGFtYmlndW91c0Jsb2NrVmFsdWU6IGZ1bmN0aW9uIGFtYmlndW91c0Jsb2NrVmFsdWUoKSB7XG5cdCAgICAvLyBXZSdyZSBiZWluZyBhIGJpdCBjaGVla3kgYW5kIHJldXNpbmcgdGhlIG9wdGlvbnMgdmFsdWUgZnJvbSB0aGUgcHJpb3IgZXhlY1xuXHQgICAgdmFyIGJsb2NrSGVscGVyTWlzc2luZyA9IHRoaXMuYWxpYXNhYmxlKCdjb250YWluZXIuaG9va3MuYmxvY2tIZWxwZXJNaXNzaW5nJyksXG5cdCAgICAgICAgcGFyYW1zID0gW3RoaXMuY29udGV4dE5hbWUoMCldO1xuXHQgICAgdGhpcy5zZXR1cEhlbHBlckFyZ3MoJycsIDAsIHBhcmFtcywgdHJ1ZSk7XG5cblx0ICAgIHRoaXMuZmx1c2hJbmxpbmUoKTtcblxuXHQgICAgdmFyIGN1cnJlbnQgPSB0aGlzLnRvcFN0YWNrKCk7XG5cdCAgICBwYXJhbXMuc3BsaWNlKDEsIDAsIGN1cnJlbnQpO1xuXG5cdCAgICB0aGlzLnB1c2hTb3VyY2UoWydpZiAoIScsIHRoaXMubGFzdEhlbHBlciwgJykgeyAnLCBjdXJyZW50LCAnID0gJywgdGhpcy5zb3VyY2UuZnVuY3Rpb25DYWxsKGJsb2NrSGVscGVyTWlzc2luZywgJ2NhbGwnLCBwYXJhbXMpLCAnfSddKTtcblx0ICB9LFxuXG5cdCAgLy8gW2FwcGVuZENvbnRlbnRdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IC4uLlxuXHQgIC8vXG5cdCAgLy8gQXBwZW5kcyB0aGUgc3RyaW5nIHZhbHVlIG9mIGBjb250ZW50YCB0byB0aGUgY3VycmVudCBidWZmZXJcblx0ICBhcHBlbmRDb250ZW50OiBmdW5jdGlvbiBhcHBlbmRDb250ZW50KGNvbnRlbnQpIHtcblx0ICAgIGlmICh0aGlzLnBlbmRpbmdDb250ZW50KSB7XG5cdCAgICAgIGNvbnRlbnQgPSB0aGlzLnBlbmRpbmdDb250ZW50ICsgY29udGVudDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMucGVuZGluZ0xvY2F0aW9uID0gdGhpcy5zb3VyY2UuY3VycmVudExvY2F0aW9uO1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLnBlbmRpbmdDb250ZW50ID0gY29udGVudDtcblx0ICB9LFxuXG5cdCAgLy8gW2FwcGVuZF1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IHZhbHVlLCAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IC4uLlxuXHQgIC8vXG5cdCAgLy8gQ29lcmNlcyBgdmFsdWVgIHRvIGEgU3RyaW5nIGFuZCBhcHBlbmRzIGl0IHRvIHRoZSBjdXJyZW50IGJ1ZmZlci5cblx0ICAvL1xuXHQgIC8vIElmIGB2YWx1ZWAgaXMgdHJ1dGh5LCBvciAwLCBpdCBpcyBjb2VyY2VkIGludG8gYSBzdHJpbmcgYW5kIGFwcGVuZGVkXG5cdCAgLy8gT3RoZXJ3aXNlLCB0aGUgZW1wdHkgc3RyaW5nIGlzIGFwcGVuZGVkXG5cdCAgYXBwZW5kOiBmdW5jdGlvbiBhcHBlbmQoKSB7XG5cdCAgICBpZiAodGhpcy5pc0lubGluZSgpKSB7XG5cdCAgICAgIHRoaXMucmVwbGFjZVN0YWNrKGZ1bmN0aW9uIChjdXJyZW50KSB7XG5cdCAgICAgICAgcmV0dXJuIFsnICE9IG51bGwgPyAnLCBjdXJyZW50LCAnIDogXCJcIiddO1xuXHQgICAgICB9KTtcblxuXHQgICAgICB0aGlzLnB1c2hTb3VyY2UodGhpcy5hcHBlbmRUb0J1ZmZlcih0aGlzLnBvcFN0YWNrKCkpKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHZhciBsb2NhbCA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgICAgdGhpcy5wdXNoU291cmNlKFsnaWYgKCcsIGxvY2FsLCAnICE9IG51bGwpIHsgJywgdGhpcy5hcHBlbmRUb0J1ZmZlcihsb2NhbCwgdW5kZWZpbmVkLCB0cnVlKSwgJyB9J10pO1xuXHQgICAgICBpZiAodGhpcy5lbnZpcm9ubWVudC5pc1NpbXBsZSkge1xuXHQgICAgICAgIHRoaXMucHVzaFNvdXJjZShbJ2Vsc2UgeyAnLCB0aGlzLmFwcGVuZFRvQnVmZmVyKFwiJydcIiwgdW5kZWZpbmVkLCB0cnVlKSwgJyB9J10pO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIC8vIFthcHBlbmRFc2NhcGVkXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogdmFsdWUsIC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogLi4uXG5cdCAgLy9cblx0ICAvLyBFc2NhcGUgYHZhbHVlYCBhbmQgYXBwZW5kIGl0IHRvIHRoZSBidWZmZXJcblx0ICBhcHBlbmRFc2NhcGVkOiBmdW5jdGlvbiBhcHBlbmRFc2NhcGVkKCkge1xuXHQgICAgdGhpcy5wdXNoU291cmNlKHRoaXMuYXBwZW5kVG9CdWZmZXIoW3RoaXMuYWxpYXNhYmxlKCdjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbicpLCAnKCcsIHRoaXMucG9wU3RhY2soKSwgJyknXSkpO1xuXHQgIH0sXG5cblx0ICAvLyBbZ2V0Q29udGV4dF1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogLi4uXG5cdCAgLy8gQ29tcGlsZXIgdmFsdWUsIGFmdGVyOiBsYXN0Q29udGV4dD1kZXB0aFxuXHQgIC8vXG5cdCAgLy8gU2V0IHRoZSB2YWx1ZSBvZiB0aGUgYGxhc3RDb250ZXh0YCBjb21waWxlciB2YWx1ZSB0byB0aGUgZGVwdGhcblx0ICBnZXRDb250ZXh0OiBmdW5jdGlvbiBnZXRDb250ZXh0KGRlcHRoKSB7XG5cdCAgICB0aGlzLmxhc3RDb250ZXh0ID0gZGVwdGg7XG5cdCAgfSxcblxuXHQgIC8vIFtwdXNoQ29udGV4dF1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogY3VycmVudENvbnRleHQsIC4uLlxuXHQgIC8vXG5cdCAgLy8gUHVzaGVzIHRoZSB2YWx1ZSBvZiB0aGUgY3VycmVudCBjb250ZXh0IG9udG8gdGhlIHN0YWNrLlxuXHQgIHB1c2hDb250ZXh0OiBmdW5jdGlvbiBwdXNoQ29udGV4dCgpIHtcblx0ICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCh0aGlzLmNvbnRleHROYW1lKHRoaXMubGFzdENvbnRleHQpKTtcblx0ICB9LFxuXG5cdCAgLy8gW2xvb2t1cE9uQ29udGV4dF1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogY3VycmVudENvbnRleHRbbmFtZV0sIC4uLlxuXHQgIC8vXG5cdCAgLy8gTG9va3MgdXAgdGhlIHZhbHVlIG9mIGBuYW1lYCBvbiB0aGUgY3VycmVudCBjb250ZXh0IGFuZCBwdXNoZXNcblx0ICAvLyBpdCBvbnRvIHRoZSBzdGFjay5cblx0ICBsb29rdXBPbkNvbnRleHQ6IGZ1bmN0aW9uIGxvb2t1cE9uQ29udGV4dChwYXJ0cywgZmFsc3ksIHN0cmljdCwgc2NvcGVkKSB7XG5cdCAgICB2YXIgaSA9IDA7XG5cblx0ICAgIGlmICghc2NvcGVkICYmIHRoaXMub3B0aW9ucy5jb21wYXQgJiYgIXRoaXMubGFzdENvbnRleHQpIHtcblx0ICAgICAgLy8gVGhlIGRlcHRoZWQgcXVlcnkgaXMgZXhwZWN0ZWQgdG8gaGFuZGxlIHRoZSB1bmRlZmluZWQgbG9naWMgZm9yIHRoZSByb290IGxldmVsIHRoYXRcblx0ICAgICAgLy8gaXMgaW1wbGVtZW50ZWQgYmVsb3csIHNvIHdlIGV2YWx1YXRlIHRoYXQgZGlyZWN0bHkgaW4gY29tcGF0IG1vZGVcblx0ICAgICAgdGhpcy5wdXNoKHRoaXMuZGVwdGhlZExvb2t1cChwYXJ0c1tpKytdKSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLnB1c2hDb250ZXh0KCk7XG5cdCAgICB9XG5cblx0ICAgIHRoaXMucmVzb2x2ZVBhdGgoJ2NvbnRleHQnLCBwYXJ0cywgaSwgZmFsc3ksIHN0cmljdCk7XG5cdCAgfSxcblxuXHQgIC8vIFtsb29rdXBCbG9ja1BhcmFtXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiBibG9ja1BhcmFtW25hbWVdLCAuLi5cblx0ICAvL1xuXHQgIC8vIExvb2tzIHVwIHRoZSB2YWx1ZSBvZiBgcGFydHNgIG9uIHRoZSBnaXZlbiBibG9jayBwYXJhbSBhbmQgcHVzaGVzXG5cdCAgLy8gaXQgb250byB0aGUgc3RhY2suXG5cdCAgbG9va3VwQmxvY2tQYXJhbTogZnVuY3Rpb24gbG9va3VwQmxvY2tQYXJhbShibG9ja1BhcmFtSWQsIHBhcnRzKSB7XG5cdCAgICB0aGlzLnVzZUJsb2NrUGFyYW1zID0gdHJ1ZTtcblxuXHQgICAgdGhpcy5wdXNoKFsnYmxvY2tQYXJhbXNbJywgYmxvY2tQYXJhbUlkWzBdLCAnXVsnLCBibG9ja1BhcmFtSWRbMV0sICddJ10pO1xuXHQgICAgdGhpcy5yZXNvbHZlUGF0aCgnY29udGV4dCcsIHBhcnRzLCAxKTtcblx0ICB9LFxuXG5cdCAgLy8gW2xvb2t1cERhdGFdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IGRhdGEsIC4uLlxuXHQgIC8vXG5cdCAgLy8gUHVzaCB0aGUgZGF0YSBsb29rdXAgb3BlcmF0b3Jcblx0ICBsb29rdXBEYXRhOiBmdW5jdGlvbiBsb29rdXBEYXRhKGRlcHRoLCBwYXJ0cywgc3RyaWN0KSB7XG5cdCAgICBpZiAoIWRlcHRoKSB7XG5cdCAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCgnZGF0YScpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKCdjb250YWluZXIuZGF0YShkYXRhLCAnICsgZGVwdGggKyAnKScpO1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLnJlc29sdmVQYXRoKCdkYXRhJywgcGFydHMsIDAsIHRydWUsIHN0cmljdCk7XG5cdCAgfSxcblxuXHQgIHJlc29sdmVQYXRoOiBmdW5jdGlvbiByZXNvbHZlUGF0aCh0eXBlLCBwYXJ0cywgaSwgZmFsc3ksIHN0cmljdCkge1xuXHQgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuXHQgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cblx0ICAgIGlmICh0aGlzLm9wdGlvbnMuc3RyaWN0IHx8IHRoaXMub3B0aW9ucy5hc3N1bWVPYmplY3RzKSB7XG5cdCAgICAgIHRoaXMucHVzaChzdHJpY3RMb29rdXAodGhpcy5vcHRpb25zLnN0cmljdCAmJiBzdHJpY3QsIHRoaXMsIHBhcnRzLCB0eXBlKSk7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblxuXHQgICAgdmFyIGxlbiA9IHBhcnRzLmxlbmd0aDtcblx0ICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tbG9vcC1mdW5jICovXG5cdCAgICAgIHRoaXMucmVwbGFjZVN0YWNrKGZ1bmN0aW9uIChjdXJyZW50KSB7XG5cdCAgICAgICAgdmFyIGxvb2t1cCA9IF90aGlzMi5uYW1lTG9va3VwKGN1cnJlbnQsIHBhcnRzW2ldLCB0eXBlKTtcblx0ICAgICAgICAvLyBXZSB3YW50IHRvIGVuc3VyZSB0aGF0IHplcm8gYW5kIGZhbHNlIGFyZSBoYW5kbGVkIHByb3Blcmx5IGlmIHRoZSBjb250ZXh0IChmYWxzeSBmbGFnKVxuXHQgICAgICAgIC8vIG5lZWRzIHRvIGhhdmUgdGhlIHNwZWNpYWwgaGFuZGxpbmcgZm9yIHRoZXNlIHZhbHVlcy5cblx0ICAgICAgICBpZiAoIWZhbHN5KSB7XG5cdCAgICAgICAgICByZXR1cm4gWycgIT0gbnVsbCA/ICcsIGxvb2t1cCwgJyA6ICcsIGN1cnJlbnRdO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAvLyBPdGhlcndpc2Ugd2UgY2FuIHVzZSBnZW5lcmljIGZhbHN5IGhhbmRsaW5nXG5cdCAgICAgICAgICByZXR1cm4gWycgJiYgJywgbG9va3VwXTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0pO1xuXHQgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWxvb3AtZnVuYyAqL1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICAvLyBbcmVzb2x2ZVBvc3NpYmxlTGFtYmRhXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogdmFsdWUsIC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogcmVzb2x2ZWQgdmFsdWUsIC4uLlxuXHQgIC8vXG5cdCAgLy8gSWYgdGhlIGB2YWx1ZWAgaXMgYSBsYW1iZGEsIHJlcGxhY2UgaXQgb24gdGhlIHN0YWNrIGJ5XG5cdCAgLy8gdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgbGFtYmRhXG5cdCAgcmVzb2x2ZVBvc3NpYmxlTGFtYmRhOiBmdW5jdGlvbiByZXNvbHZlUG9zc2libGVMYW1iZGEoKSB7XG5cdCAgICB0aGlzLnB1c2goW3RoaXMuYWxpYXNhYmxlKCdjb250YWluZXIubGFtYmRhJyksICcoJywgdGhpcy5wb3BTdGFjaygpLCAnLCAnLCB0aGlzLmNvbnRleHROYW1lKDApLCAnKSddKTtcblx0ICB9LFxuXG5cdCAgLy8gW3B1c2hTdHJpbmdQYXJhbV1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogc3RyaW5nLCBjdXJyZW50Q29udGV4dCwgLi4uXG5cdCAgLy9cblx0ICAvLyBUaGlzIG9wY29kZSBpcyBkZXNpZ25lZCBmb3IgdXNlIGluIHN0cmluZyBtb2RlLCB3aGljaFxuXHQgIC8vIHByb3ZpZGVzIHRoZSBzdHJpbmcgdmFsdWUgb2YgYSBwYXJhbWV0ZXIgYWxvbmcgd2l0aCBpdHNcblx0ICAvLyBkZXB0aCByYXRoZXIgdGhhbiByZXNvbHZpbmcgaXQgaW1tZWRpYXRlbHkuXG5cdCAgcHVzaFN0cmluZ1BhcmFtOiBmdW5jdGlvbiBwdXNoU3RyaW5nUGFyYW0oc3RyaW5nLCB0eXBlKSB7XG5cdCAgICB0aGlzLnB1c2hDb250ZXh0KCk7XG5cdCAgICB0aGlzLnB1c2hTdHJpbmcodHlwZSk7XG5cblx0ICAgIC8vIElmIGl0J3MgYSBzdWJleHByZXNzaW9uLCB0aGUgc3RyaW5nIHJlc3VsdFxuXHQgICAgLy8gd2lsbCBiZSBwdXNoZWQgYWZ0ZXIgdGhpcyBvcGNvZGUuXG5cdCAgICBpZiAodHlwZSAhPT0gJ1N1YkV4cHJlc3Npb24nKSB7XG5cdCAgICAgIGlmICh0eXBlb2Ygc3RyaW5nID09PSAnc3RyaW5nJykge1xuXHQgICAgICAgIHRoaXMucHVzaFN0cmluZyhzdHJpbmcpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbChzdHJpbmcpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIGVtcHR5SGFzaDogZnVuY3Rpb24gZW1wdHlIYXNoKG9taXRFbXB0eSkge1xuXHQgICAgaWYgKHRoaXMudHJhY2tJZHMpIHtcblx0ICAgICAgdGhpcy5wdXNoKCd7fScpOyAvLyBoYXNoSWRzXG5cdCAgICB9XG5cdCAgICBpZiAodGhpcy5zdHJpbmdQYXJhbXMpIHtcblx0ICAgICAgdGhpcy5wdXNoKCd7fScpOyAvLyBoYXNoQ29udGV4dHNcblx0ICAgICAgdGhpcy5wdXNoKCd7fScpOyAvLyBoYXNoVHlwZXNcblx0ICAgIH1cblx0ICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbChvbWl0RW1wdHkgPyAndW5kZWZpbmVkJyA6ICd7fScpO1xuXHQgIH0sXG5cdCAgcHVzaEhhc2g6IGZ1bmN0aW9uIHB1c2hIYXNoKCkge1xuXHQgICAgaWYgKHRoaXMuaGFzaCkge1xuXHQgICAgICB0aGlzLmhhc2hlcy5wdXNoKHRoaXMuaGFzaCk7XG5cdCAgICB9XG5cdCAgICB0aGlzLmhhc2ggPSB7IHZhbHVlczoge30sIHR5cGVzOiBbXSwgY29udGV4dHM6IFtdLCBpZHM6IFtdIH07XG5cdCAgfSxcblx0ICBwb3BIYXNoOiBmdW5jdGlvbiBwb3BIYXNoKCkge1xuXHQgICAgdmFyIGhhc2ggPSB0aGlzLmhhc2g7XG5cdCAgICB0aGlzLmhhc2ggPSB0aGlzLmhhc2hlcy5wb3AoKTtcblxuXHQgICAgaWYgKHRoaXMudHJhY2tJZHMpIHtcblx0ICAgICAgdGhpcy5wdXNoKHRoaXMub2JqZWN0TGl0ZXJhbChoYXNoLmlkcykpO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMuc3RyaW5nUGFyYW1zKSB7XG5cdCAgICAgIHRoaXMucHVzaCh0aGlzLm9iamVjdExpdGVyYWwoaGFzaC5jb250ZXh0cykpO1xuXHQgICAgICB0aGlzLnB1c2godGhpcy5vYmplY3RMaXRlcmFsKGhhc2gudHlwZXMpKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5wdXNoKHRoaXMub2JqZWN0TGl0ZXJhbChoYXNoLnZhbHVlcykpO1xuXHQgIH0sXG5cblx0ICAvLyBbcHVzaFN0cmluZ11cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogcXVvdGVkU3RyaW5nKHN0cmluZyksIC4uLlxuXHQgIC8vXG5cdCAgLy8gUHVzaCBhIHF1b3RlZCB2ZXJzaW9uIG9mIGBzdHJpbmdgIG9udG8gdGhlIHN0YWNrXG5cdCAgcHVzaFN0cmluZzogZnVuY3Rpb24gcHVzaFN0cmluZyhzdHJpbmcpIHtcblx0ICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCh0aGlzLnF1b3RlZFN0cmluZyhzdHJpbmcpKTtcblx0ICB9LFxuXG5cdCAgLy8gW3B1c2hMaXRlcmFsXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiB2YWx1ZSwgLi4uXG5cdCAgLy9cblx0ICAvLyBQdXNoZXMgYSB2YWx1ZSBvbnRvIHRoZSBzdGFjay4gVGhpcyBvcGVyYXRpb24gcHJldmVudHNcblx0ICAvLyB0aGUgY29tcGlsZXIgZnJvbSBjcmVhdGluZyBhIHRlbXBvcmFyeSB2YXJpYWJsZSB0byBob2xkXG5cdCAgLy8gaXQuXG5cdCAgcHVzaExpdGVyYWw6IGZ1bmN0aW9uIHB1c2hMaXRlcmFsKHZhbHVlKSB7XG5cdCAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwodmFsdWUpO1xuXHQgIH0sXG5cblx0ICAvLyBbcHVzaFByb2dyYW1dXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHByb2dyYW0oZ3VpZCksIC4uLlxuXHQgIC8vXG5cdCAgLy8gUHVzaCBhIHByb2dyYW0gZXhwcmVzc2lvbiBvbnRvIHRoZSBzdGFjay4gVGhpcyB0YWtlc1xuXHQgIC8vIGEgY29tcGlsZS10aW1lIGd1aWQgYW5kIGNvbnZlcnRzIGl0IGludG8gYSBydW50aW1lLWFjY2Vzc2libGVcblx0ICAvLyBleHByZXNzaW9uLlxuXHQgIHB1c2hQcm9ncmFtOiBmdW5jdGlvbiBwdXNoUHJvZ3JhbShndWlkKSB7XG5cdCAgICBpZiAoZ3VpZCAhPSBudWxsKSB7XG5cdCAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCh0aGlzLnByb2dyYW1FeHByZXNzaW9uKGd1aWQpKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbChudWxsKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgLy8gW3JlZ2lzdGVyRGVjb3JhdG9yXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgcHJvZ3JhbSwgcGFyYW1zLi4uLCAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IC4uLlxuXHQgIC8vXG5cdCAgLy8gUG9wcyBvZmYgdGhlIGRlY29yYXRvcidzIHBhcmFtZXRlcnMsIGludm9rZXMgdGhlIGRlY29yYXRvcixcblx0ICAvLyBhbmQgaW5zZXJ0cyB0aGUgZGVjb3JhdG9yIGludG8gdGhlIGRlY29yYXRvcnMgbGlzdC5cblx0ICByZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24gcmVnaXN0ZXJEZWNvcmF0b3IocGFyYW1TaXplLCBuYW1lKSB7XG5cdCAgICB2YXIgZm91bmREZWNvcmF0b3IgPSB0aGlzLm5hbWVMb29rdXAoJ2RlY29yYXRvcnMnLCBuYW1lLCAnZGVjb3JhdG9yJyksXG5cdCAgICAgICAgb3B0aW9ucyA9IHRoaXMuc2V0dXBIZWxwZXJBcmdzKG5hbWUsIHBhcmFtU2l6ZSk7XG5cblx0ICAgIHRoaXMuZGVjb3JhdG9ycy5wdXNoKFsnZm4gPSAnLCB0aGlzLmRlY29yYXRvcnMuZnVuY3Rpb25DYWxsKGZvdW5kRGVjb3JhdG9yLCAnJywgWydmbicsICdwcm9wcycsICdjb250YWluZXInLCBvcHRpb25zXSksICcgfHwgZm47J10pO1xuXHQgIH0sXG5cblx0ICAvLyBbaW52b2tlSGVscGVyXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgaW52ZXJzZSwgcHJvZ3JhbSwgcGFyYW1zLi4uLCAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHJlc3VsdCBvZiBoZWxwZXIgaW52b2NhdGlvblxuXHQgIC8vXG5cdCAgLy8gUG9wcyBvZmYgdGhlIGhlbHBlcidzIHBhcmFtZXRlcnMsIGludm9rZXMgdGhlIGhlbHBlcixcblx0ICAvLyBhbmQgcHVzaGVzIHRoZSBoZWxwZXIncyByZXR1cm4gdmFsdWUgb250byB0aGUgc3RhY2suXG5cdCAgLy9cblx0ICAvLyBJZiB0aGUgaGVscGVyIGlzIG5vdCBmb3VuZCwgYGhlbHBlck1pc3NpbmdgIGlzIGNhbGxlZC5cblx0ICBpbnZva2VIZWxwZXI6IGZ1bmN0aW9uIGludm9rZUhlbHBlcihwYXJhbVNpemUsIG5hbWUsIGlzU2ltcGxlKSB7XG5cdCAgICB2YXIgbm9uSGVscGVyID0gdGhpcy5wb3BTdGFjaygpLFxuXHQgICAgICAgIGhlbHBlciA9IHRoaXMuc2V0dXBIZWxwZXIocGFyYW1TaXplLCBuYW1lKTtcblxuXHQgICAgdmFyIHBvc3NpYmxlRnVuY3Rpb25DYWxscyA9IFtdO1xuXG5cdCAgICBpZiAoaXNTaW1wbGUpIHtcblx0ICAgICAgLy8gZGlyZWN0IGNhbGwgdG8gaGVscGVyXG5cdCAgICAgIHBvc3NpYmxlRnVuY3Rpb25DYWxscy5wdXNoKGhlbHBlci5uYW1lKTtcblx0ICAgIH1cblx0ICAgIC8vIGNhbGwgYSBmdW5jdGlvbiBmcm9tIHRoZSBpbnB1dCBvYmplY3Rcblx0ICAgIHBvc3NpYmxlRnVuY3Rpb25DYWxscy5wdXNoKG5vbkhlbHBlcik7XG5cdCAgICBpZiAoIXRoaXMub3B0aW9ucy5zdHJpY3QpIHtcblx0ICAgICAgcG9zc2libGVGdW5jdGlvbkNhbGxzLnB1c2godGhpcy5hbGlhc2FibGUoJ2NvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nJykpO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgZnVuY3Rpb25Mb29rdXBDb2RlID0gWycoJywgdGhpcy5pdGVtc1NlcGFyYXRlZEJ5KHBvc3NpYmxlRnVuY3Rpb25DYWxscywgJ3x8JyksICcpJ107XG5cdCAgICB2YXIgZnVuY3Rpb25DYWxsID0gdGhpcy5zb3VyY2UuZnVuY3Rpb25DYWxsKGZ1bmN0aW9uTG9va3VwQ29kZSwgJ2NhbGwnLCBoZWxwZXIuY2FsbFBhcmFtcyk7XG5cdCAgICB0aGlzLnB1c2goZnVuY3Rpb25DYWxsKTtcblx0ICB9LFxuXG5cdCAgaXRlbXNTZXBhcmF0ZWRCeTogZnVuY3Rpb24gaXRlbXNTZXBhcmF0ZWRCeShpdGVtcywgc2VwYXJhdG9yKSB7XG5cdCAgICB2YXIgcmVzdWx0ID0gW107XG5cdCAgICByZXN1bHQucHVzaChpdGVtc1swXSk7XG5cdCAgICBmb3IgKHZhciBpID0gMTsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgIHJlc3VsdC5wdXNoKHNlcGFyYXRvciwgaXRlbXNbaV0pO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIHJlc3VsdDtcblx0ICB9LFxuXHQgIC8vIFtpbnZva2VLbm93bkhlbHBlcl1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IGhhc2gsIGludmVyc2UsIHByb2dyYW0sIHBhcmFtcy4uLiwgLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiByZXN1bHQgb2YgaGVscGVyIGludm9jYXRpb25cblx0ICAvL1xuXHQgIC8vIFRoaXMgb3BlcmF0aW9uIGlzIHVzZWQgd2hlbiB0aGUgaGVscGVyIGlzIGtub3duIHRvIGV4aXN0LFxuXHQgIC8vIHNvIGEgYGhlbHBlck1pc3NpbmdgIGZhbGxiYWNrIGlzIG5vdCByZXF1aXJlZC5cblx0ICBpbnZva2VLbm93bkhlbHBlcjogZnVuY3Rpb24gaW52b2tlS25vd25IZWxwZXIocGFyYW1TaXplLCBuYW1lKSB7XG5cdCAgICB2YXIgaGVscGVyID0gdGhpcy5zZXR1cEhlbHBlcihwYXJhbVNpemUsIG5hbWUpO1xuXHQgICAgdGhpcy5wdXNoKHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbChoZWxwZXIubmFtZSwgJ2NhbGwnLCBoZWxwZXIuY2FsbFBhcmFtcykpO1xuXHQgIH0sXG5cblx0ICAvLyBbaW52b2tlQW1iaWd1b3VzXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgaW52ZXJzZSwgcHJvZ3JhbSwgcGFyYW1zLi4uLCAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHJlc3VsdCBvZiBkaXNhbWJpZ3VhdGlvblxuXHQgIC8vXG5cdCAgLy8gVGhpcyBvcGVyYXRpb24gaXMgdXNlZCB3aGVuIGFuIGV4cHJlc3Npb24gbGlrZSBge3tmb299fWBcblx0ICAvLyBpcyBwcm92aWRlZCwgYnV0IHdlIGRvbid0IGtub3cgYXQgY29tcGlsZS10aW1lIHdoZXRoZXIgaXRcblx0ICAvLyBpcyBhIGhlbHBlciBvciBhIHBhdGguXG5cdCAgLy9cblx0ICAvLyBUaGlzIG9wZXJhdGlvbiBlbWl0cyBtb3JlIGNvZGUgdGhhbiB0aGUgb3RoZXIgb3B0aW9ucyxcblx0ICAvLyBhbmQgY2FuIGJlIGF2b2lkZWQgYnkgcGFzc2luZyB0aGUgYGtub3duSGVscGVyc2AgYW5kXG5cdCAgLy8gYGtub3duSGVscGVyc09ubHlgIGZsYWdzIGF0IGNvbXBpbGUtdGltZS5cblx0ICBpbnZva2VBbWJpZ3VvdXM6IGZ1bmN0aW9uIGludm9rZUFtYmlndW91cyhuYW1lLCBoZWxwZXJDYWxsKSB7XG5cdCAgICB0aGlzLnVzZVJlZ2lzdGVyKCdoZWxwZXInKTtcblxuXHQgICAgdmFyIG5vbkhlbHBlciA9IHRoaXMucG9wU3RhY2soKTtcblxuXHQgICAgdGhpcy5lbXB0eUhhc2goKTtcblx0ICAgIHZhciBoZWxwZXIgPSB0aGlzLnNldHVwSGVscGVyKDAsIG5hbWUsIGhlbHBlckNhbGwpO1xuXG5cdCAgICB2YXIgaGVscGVyTmFtZSA9IHRoaXMubGFzdEhlbHBlciA9IHRoaXMubmFtZUxvb2t1cCgnaGVscGVycycsIG5hbWUsICdoZWxwZXInKTtcblxuXHQgICAgdmFyIGxvb2t1cCA9IFsnKCcsICcoaGVscGVyID0gJywgaGVscGVyTmFtZSwgJyB8fCAnLCBub25IZWxwZXIsICcpJ107XG5cdCAgICBpZiAoIXRoaXMub3B0aW9ucy5zdHJpY3QpIHtcblx0ICAgICAgbG9va3VwWzBdID0gJyhoZWxwZXIgPSAnO1xuXHQgICAgICBsb29rdXAucHVzaCgnICE9IG51bGwgPyBoZWxwZXIgOiAnLCB0aGlzLmFsaWFzYWJsZSgnY29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcnKSk7XG5cdCAgICB9XG5cblx0ICAgIHRoaXMucHVzaChbJygnLCBsb29rdXAsIGhlbHBlci5wYXJhbXNJbml0ID8gWycpLCgnLCBoZWxwZXIucGFyYW1zSW5pdF0gOiBbXSwgJyksJywgJyh0eXBlb2YgaGVscGVyID09PSAnLCB0aGlzLmFsaWFzYWJsZSgnXCJmdW5jdGlvblwiJyksICcgPyAnLCB0aGlzLnNvdXJjZS5mdW5jdGlvbkNhbGwoJ2hlbHBlcicsICdjYWxsJywgaGVscGVyLmNhbGxQYXJhbXMpLCAnIDogaGVscGVyKSknXSk7XG5cdCAgfSxcblxuXHQgIC8vIFtpbnZva2VQYXJ0aWFsXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogY29udGV4dCwgLi4uXG5cdCAgLy8gT24gc3RhY2sgYWZ0ZXI6IHJlc3VsdCBvZiBwYXJ0aWFsIGludm9jYXRpb25cblx0ICAvL1xuXHQgIC8vIFRoaXMgb3BlcmF0aW9uIHBvcHMgb2ZmIGEgY29udGV4dCwgaW52b2tlcyBhIHBhcnRpYWwgd2l0aCB0aGF0IGNvbnRleHQsXG5cdCAgLy8gYW5kIHB1c2hlcyB0aGUgcmVzdWx0IG9mIHRoZSBpbnZvY2F0aW9uIGJhY2suXG5cdCAgaW52b2tlUGFydGlhbDogZnVuY3Rpb24gaW52b2tlUGFydGlhbChpc0R5bmFtaWMsIG5hbWUsIGluZGVudCkge1xuXHQgICAgdmFyIHBhcmFtcyA9IFtdLFxuXHQgICAgICAgIG9wdGlvbnMgPSB0aGlzLnNldHVwUGFyYW1zKG5hbWUsIDEsIHBhcmFtcyk7XG5cblx0ICAgIGlmIChpc0R5bmFtaWMpIHtcblx0ICAgICAgbmFtZSA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgICAgZGVsZXRlIG9wdGlvbnMubmFtZTtcblx0ICAgIH1cblxuXHQgICAgaWYgKGluZGVudCkge1xuXHQgICAgICBvcHRpb25zLmluZGVudCA9IEpTT04uc3RyaW5naWZ5KGluZGVudCk7XG5cdCAgICB9XG5cdCAgICBvcHRpb25zLmhlbHBlcnMgPSAnaGVscGVycyc7XG5cdCAgICBvcHRpb25zLnBhcnRpYWxzID0gJ3BhcnRpYWxzJztcblx0ICAgIG9wdGlvbnMuZGVjb3JhdG9ycyA9ICdjb250YWluZXIuZGVjb3JhdG9ycyc7XG5cblx0ICAgIGlmICghaXNEeW5hbWljKSB7XG5cdCAgICAgIHBhcmFtcy51bnNoaWZ0KHRoaXMubmFtZUxvb2t1cCgncGFydGlhbHMnLCBuYW1lLCAncGFydGlhbCcpKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHBhcmFtcy51bnNoaWZ0KG5hbWUpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhdCkge1xuXHQgICAgICBvcHRpb25zLmRlcHRocyA9ICdkZXB0aHMnO1xuXHQgICAgfVxuXHQgICAgb3B0aW9ucyA9IHRoaXMub2JqZWN0TGl0ZXJhbChvcHRpb25zKTtcblx0ICAgIHBhcmFtcy5wdXNoKG9wdGlvbnMpO1xuXG5cdCAgICB0aGlzLnB1c2godGhpcy5zb3VyY2UuZnVuY3Rpb25DYWxsKCdjb250YWluZXIuaW52b2tlUGFydGlhbCcsICcnLCBwYXJhbXMpKTtcblx0ICB9LFxuXG5cdCAgLy8gW2Fzc2lnblRvSGFzaF1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IHZhbHVlLCAuLi4sIGhhc2gsIC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogLi4uLCBoYXNoLCAuLi5cblx0ICAvL1xuXHQgIC8vIFBvcHMgYSB2YWx1ZSBvZmYgdGhlIHN0YWNrIGFuZCBhc3NpZ25zIGl0IHRvIHRoZSBjdXJyZW50IGhhc2hcblx0ICBhc3NpZ25Ub0hhc2g6IGZ1bmN0aW9uIGFzc2lnblRvSGFzaChrZXkpIHtcblx0ICAgIHZhciB2YWx1ZSA9IHRoaXMucG9wU3RhY2soKSxcblx0ICAgICAgICBjb250ZXh0ID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIHR5cGUgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgaWQgPSB1bmRlZmluZWQ7XG5cblx0ICAgIGlmICh0aGlzLnRyYWNrSWRzKSB7XG5cdCAgICAgIGlkID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMuc3RyaW5nUGFyYW1zKSB7XG5cdCAgICAgIHR5cGUgPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICAgIGNvbnRleHQgPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICB9XG5cblx0ICAgIHZhciBoYXNoID0gdGhpcy5oYXNoO1xuXHQgICAgaWYgKGNvbnRleHQpIHtcblx0ICAgICAgaGFzaC5jb250ZXh0c1trZXldID0gY29udGV4dDtcblx0ICAgIH1cblx0ICAgIGlmICh0eXBlKSB7XG5cdCAgICAgIGhhc2gudHlwZXNba2V5XSA9IHR5cGU7XG5cdCAgICB9XG5cdCAgICBpZiAoaWQpIHtcblx0ICAgICAgaGFzaC5pZHNba2V5XSA9IGlkO1xuXHQgICAgfVxuXHQgICAgaGFzaC52YWx1ZXNba2V5XSA9IHZhbHVlO1xuXHQgIH0sXG5cblx0ICBwdXNoSWQ6IGZ1bmN0aW9uIHB1c2hJZCh0eXBlLCBuYW1lLCBjaGlsZCkge1xuXHQgICAgaWYgKHR5cGUgPT09ICdCbG9ja1BhcmFtJykge1xuXHQgICAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwoJ2Jsb2NrUGFyYW1zWycgKyBuYW1lWzBdICsgJ10ucGF0aFsnICsgbmFtZVsxXSArICddJyArIChjaGlsZCA/ICcgKyAnICsgSlNPTi5zdHJpbmdpZnkoJy4nICsgY2hpbGQpIDogJycpKTtcblx0ICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1BhdGhFeHByZXNzaW9uJykge1xuXHQgICAgICB0aGlzLnB1c2hTdHJpbmcobmFtZSk7XG5cdCAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdTdWJFeHByZXNzaW9uJykge1xuXHQgICAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwoJ3RydWUnKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCgnbnVsbCcpO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICAvLyBIRUxQRVJTXG5cblx0ICBjb21waWxlcjogSmF2YVNjcmlwdENvbXBpbGVyLFxuXG5cdCAgY29tcGlsZUNoaWxkcmVuOiBmdW5jdGlvbiBjb21waWxlQ2hpbGRyZW4oZW52aXJvbm1lbnQsIG9wdGlvbnMpIHtcblx0ICAgIHZhciBjaGlsZHJlbiA9IGVudmlyb25tZW50LmNoaWxkcmVuLFxuXHQgICAgICAgIGNoaWxkID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIGNvbXBpbGVyID0gdW5kZWZpbmVkO1xuXG5cdCAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHQgICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXHQgICAgICBjb21waWxlciA9IG5ldyB0aGlzLmNvbXBpbGVyKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbmV3LWNhcFxuXG5cdCAgICAgIHZhciBleGlzdGluZyA9IHRoaXMubWF0Y2hFeGlzdGluZ1Byb2dyYW0oY2hpbGQpO1xuXG5cdCAgICAgIGlmIChleGlzdGluZyA9PSBudWxsKSB7XG5cdCAgICAgICAgdGhpcy5jb250ZXh0LnByb2dyYW1zLnB1c2goJycpOyAvLyBQbGFjZWhvbGRlciB0byBwcmV2ZW50IG5hbWUgY29uZmxpY3RzIGZvciBuZXN0ZWQgY2hpbGRyZW5cblx0ICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNvbnRleHQucHJvZ3JhbXMubGVuZ3RoO1xuXHQgICAgICAgIGNoaWxkLmluZGV4ID0gaW5kZXg7XG5cdCAgICAgICAgY2hpbGQubmFtZSA9ICdwcm9ncmFtJyArIGluZGV4O1xuXHQgICAgICAgIHRoaXMuY29udGV4dC5wcm9ncmFtc1tpbmRleF0gPSBjb21waWxlci5jb21waWxlKGNoaWxkLCBvcHRpb25zLCB0aGlzLmNvbnRleHQsICF0aGlzLnByZWNvbXBpbGUpO1xuXHQgICAgICAgIHRoaXMuY29udGV4dC5kZWNvcmF0b3JzW2luZGV4XSA9IGNvbXBpbGVyLmRlY29yYXRvcnM7XG5cdCAgICAgICAgdGhpcy5jb250ZXh0LmVudmlyb25tZW50c1tpbmRleF0gPSBjaGlsZDtcblxuXHQgICAgICAgIHRoaXMudXNlRGVwdGhzID0gdGhpcy51c2VEZXB0aHMgfHwgY29tcGlsZXIudXNlRGVwdGhzO1xuXHQgICAgICAgIHRoaXMudXNlQmxvY2tQYXJhbXMgPSB0aGlzLnVzZUJsb2NrUGFyYW1zIHx8IGNvbXBpbGVyLnVzZUJsb2NrUGFyYW1zO1xuXHQgICAgICAgIGNoaWxkLnVzZURlcHRocyA9IHRoaXMudXNlRGVwdGhzO1xuXHQgICAgICAgIGNoaWxkLnVzZUJsb2NrUGFyYW1zID0gdGhpcy51c2VCbG9ja1BhcmFtcztcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBjaGlsZC5pbmRleCA9IGV4aXN0aW5nLmluZGV4O1xuXHQgICAgICAgIGNoaWxkLm5hbWUgPSAncHJvZ3JhbScgKyBleGlzdGluZy5pbmRleDtcblxuXHQgICAgICAgIHRoaXMudXNlRGVwdGhzID0gdGhpcy51c2VEZXB0aHMgfHwgZXhpc3RpbmcudXNlRGVwdGhzO1xuXHQgICAgICAgIHRoaXMudXNlQmxvY2tQYXJhbXMgPSB0aGlzLnVzZUJsb2NrUGFyYW1zIHx8IGV4aXN0aW5nLnVzZUJsb2NrUGFyYW1zO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSxcblx0ICBtYXRjaEV4aXN0aW5nUHJvZ3JhbTogZnVuY3Rpb24gbWF0Y2hFeGlzdGluZ1Byb2dyYW0oY2hpbGQpIHtcblx0ICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmNvbnRleHQuZW52aXJvbm1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgIHZhciBlbnZpcm9ubWVudCA9IHRoaXMuY29udGV4dC5lbnZpcm9ubWVudHNbaV07XG5cdCAgICAgIGlmIChlbnZpcm9ubWVudCAmJiBlbnZpcm9ubWVudC5lcXVhbHMoY2hpbGQpKSB7XG5cdCAgICAgICAgcmV0dXJuIGVudmlyb25tZW50O1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIHByb2dyYW1FeHByZXNzaW9uOiBmdW5jdGlvbiBwcm9ncmFtRXhwcmVzc2lvbihndWlkKSB7XG5cdCAgICB2YXIgY2hpbGQgPSB0aGlzLmVudmlyb25tZW50LmNoaWxkcmVuW2d1aWRdLFxuXHQgICAgICAgIHByb2dyYW1QYXJhbXMgPSBbY2hpbGQuaW5kZXgsICdkYXRhJywgY2hpbGQuYmxvY2tQYXJhbXNdO1xuXG5cdCAgICBpZiAodGhpcy51c2VCbG9ja1BhcmFtcyB8fCB0aGlzLnVzZURlcHRocykge1xuXHQgICAgICBwcm9ncmFtUGFyYW1zLnB1c2goJ2Jsb2NrUGFyYW1zJyk7XG5cdCAgICB9XG5cdCAgICBpZiAodGhpcy51c2VEZXB0aHMpIHtcblx0ICAgICAgcHJvZ3JhbVBhcmFtcy5wdXNoKCdkZXB0aHMnKTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuICdjb250YWluZXIucHJvZ3JhbSgnICsgcHJvZ3JhbVBhcmFtcy5qb2luKCcsICcpICsgJyknO1xuXHQgIH0sXG5cblx0ICB1c2VSZWdpc3RlcjogZnVuY3Rpb24gdXNlUmVnaXN0ZXIobmFtZSkge1xuXHQgICAgaWYgKCF0aGlzLnJlZ2lzdGVyc1tuYW1lXSkge1xuXHQgICAgICB0aGlzLnJlZ2lzdGVyc1tuYW1lXSA9IHRydWU7XG5cdCAgICAgIHRoaXMucmVnaXN0ZXJzLmxpc3QucHVzaChuYW1lKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgcHVzaDogZnVuY3Rpb24gcHVzaChleHByKSB7XG5cdCAgICBpZiAoIShleHByIGluc3RhbmNlb2YgTGl0ZXJhbCkpIHtcblx0ICAgICAgZXhwciA9IHRoaXMuc291cmNlLndyYXAoZXhwcik7XG5cdCAgICB9XG5cblx0ICAgIHRoaXMuaW5saW5lU3RhY2sucHVzaChleHByKTtcblx0ICAgIHJldHVybiBleHByO1xuXHQgIH0sXG5cblx0ICBwdXNoU3RhY2tMaXRlcmFsOiBmdW5jdGlvbiBwdXNoU3RhY2tMaXRlcmFsKGl0ZW0pIHtcblx0ICAgIHRoaXMucHVzaChuZXcgTGl0ZXJhbChpdGVtKSk7XG5cdCAgfSxcblxuXHQgIHB1c2hTb3VyY2U6IGZ1bmN0aW9uIHB1c2hTb3VyY2Uoc291cmNlKSB7XG5cdCAgICBpZiAodGhpcy5wZW5kaW5nQ29udGVudCkge1xuXHQgICAgICB0aGlzLnNvdXJjZS5wdXNoKHRoaXMuYXBwZW5kVG9CdWZmZXIodGhpcy5zb3VyY2UucXVvdGVkU3RyaW5nKHRoaXMucGVuZGluZ0NvbnRlbnQpLCB0aGlzLnBlbmRpbmdMb2NhdGlvbikpO1xuXHQgICAgICB0aGlzLnBlbmRpbmdDb250ZW50ID0gdW5kZWZpbmVkO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoc291cmNlKSB7XG5cdCAgICAgIHRoaXMuc291cmNlLnB1c2goc291cmNlKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgcmVwbGFjZVN0YWNrOiBmdW5jdGlvbiByZXBsYWNlU3RhY2soY2FsbGJhY2spIHtcblx0ICAgIHZhciBwcmVmaXggPSBbJygnXSxcblx0ICAgICAgICBzdGFjayA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBjcmVhdGVkU3RhY2sgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgdXNlZExpdGVyYWwgPSB1bmRlZmluZWQ7XG5cblx0ICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdCAgICBpZiAoIXRoaXMuaXNJbmxpbmUoKSkge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgncmVwbGFjZVN0YWNrIG9uIG5vbi1pbmxpbmUnKTtcblx0ICAgIH1cblxuXHQgICAgLy8gV2Ugd2FudCB0byBtZXJnZSB0aGUgaW5saW5lIHN0YXRlbWVudCBpbnRvIHRoZSByZXBsYWNlbWVudCBzdGF0ZW1lbnQgdmlhICcsJ1xuXHQgICAgdmFyIHRvcCA9IHRoaXMucG9wU3RhY2sodHJ1ZSk7XG5cblx0ICAgIGlmICh0b3AgaW5zdGFuY2VvZiBMaXRlcmFsKSB7XG5cdCAgICAgIC8vIExpdGVyYWxzIGRvIG5vdCBuZWVkIHRvIGJlIGlubGluZWRcblx0ICAgICAgc3RhY2sgPSBbdG9wLnZhbHVlXTtcblx0ICAgICAgcHJlZml4ID0gWycoJywgc3RhY2tdO1xuXHQgICAgICB1c2VkTGl0ZXJhbCA9IHRydWU7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICAvLyBHZXQgb3IgY3JlYXRlIHRoZSBjdXJyZW50IHN0YWNrIG5hbWUgZm9yIHVzZSBieSB0aGUgaW5saW5lXG5cdCAgICAgIGNyZWF0ZWRTdGFjayA9IHRydWU7XG5cdCAgICAgIHZhciBfbmFtZSA9IHRoaXMuaW5jclN0YWNrKCk7XG5cblx0ICAgICAgcHJlZml4ID0gWycoKCcsIHRoaXMucHVzaChfbmFtZSksICcgPSAnLCB0b3AsICcpJ107XG5cdCAgICAgIHN0YWNrID0gdGhpcy50b3BTdGFjaygpO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgaXRlbSA9IGNhbGxiYWNrLmNhbGwodGhpcywgc3RhY2spO1xuXG5cdCAgICBpZiAoIXVzZWRMaXRlcmFsKSB7XG5cdCAgICAgIHRoaXMucG9wU3RhY2soKTtcblx0ICAgIH1cblx0ICAgIGlmIChjcmVhdGVkU3RhY2spIHtcblx0ICAgICAgdGhpcy5zdGFja1Nsb3QtLTtcblx0ICAgIH1cblx0ICAgIHRoaXMucHVzaChwcmVmaXguY29uY2F0KGl0ZW0sICcpJykpO1xuXHQgIH0sXG5cblx0ICBpbmNyU3RhY2s6IGZ1bmN0aW9uIGluY3JTdGFjaygpIHtcblx0ICAgIHRoaXMuc3RhY2tTbG90Kys7XG5cdCAgICBpZiAodGhpcy5zdGFja1Nsb3QgPiB0aGlzLnN0YWNrVmFycy5sZW5ndGgpIHtcblx0ICAgICAgdGhpcy5zdGFja1ZhcnMucHVzaCgnc3RhY2snICsgdGhpcy5zdGFja1Nsb3QpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIHRoaXMudG9wU3RhY2tOYW1lKCk7XG5cdCAgfSxcblx0ICB0b3BTdGFja05hbWU6IGZ1bmN0aW9uIHRvcFN0YWNrTmFtZSgpIHtcblx0ICAgIHJldHVybiAnc3RhY2snICsgdGhpcy5zdGFja1Nsb3Q7XG5cdCAgfSxcblx0ICBmbHVzaElubGluZTogZnVuY3Rpb24gZmx1c2hJbmxpbmUoKSB7XG5cdCAgICB2YXIgaW5saW5lU3RhY2sgPSB0aGlzLmlubGluZVN0YWNrO1xuXHQgICAgdGhpcy5pbmxpbmVTdGFjayA9IFtdO1xuXHQgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGlubGluZVN0YWNrLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgIHZhciBlbnRyeSA9IGlubGluZVN0YWNrW2ldO1xuXHQgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cblx0ICAgICAgaWYgKGVudHJ5IGluc3RhbmNlb2YgTGl0ZXJhbCkge1xuXHQgICAgICAgIHRoaXMuY29tcGlsZVN0YWNrLnB1c2goZW50cnkpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHZhciBzdGFjayA9IHRoaXMuaW5jclN0YWNrKCk7XG5cdCAgICAgICAgdGhpcy5wdXNoU291cmNlKFtzdGFjaywgJyA9ICcsIGVudHJ5LCAnOyddKTtcblx0ICAgICAgICB0aGlzLmNvbXBpbGVTdGFjay5wdXNoKHN0YWNrKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sXG5cdCAgaXNJbmxpbmU6IGZ1bmN0aW9uIGlzSW5saW5lKCkge1xuXHQgICAgcmV0dXJuIHRoaXMuaW5saW5lU3RhY2subGVuZ3RoO1xuXHQgIH0sXG5cblx0ICBwb3BTdGFjazogZnVuY3Rpb24gcG9wU3RhY2sod3JhcHBlZCkge1xuXHQgICAgdmFyIGlubGluZSA9IHRoaXMuaXNJbmxpbmUoKSxcblx0ICAgICAgICBpdGVtID0gKGlubGluZSA/IHRoaXMuaW5saW5lU3RhY2sgOiB0aGlzLmNvbXBpbGVTdGFjaykucG9wKCk7XG5cblx0ICAgIGlmICghd3JhcHBlZCAmJiBpdGVtIGluc3RhbmNlb2YgTGl0ZXJhbCkge1xuXHQgICAgICByZXR1cm4gaXRlbS52YWx1ZTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGlmICghaW5saW5lKSB7XG5cdCAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICAgICAgICBpZiAoIXRoaXMuc3RhY2tTbG90KSB7XG5cdCAgICAgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnSW52YWxpZCBzdGFjayBwb3AnKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdGhpcy5zdGFja1Nsb3QtLTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gaXRlbTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgdG9wU3RhY2s6IGZ1bmN0aW9uIHRvcFN0YWNrKCkge1xuXHQgICAgdmFyIHN0YWNrID0gdGhpcy5pc0lubGluZSgpID8gdGhpcy5pbmxpbmVTdGFjayA6IHRoaXMuY29tcGlsZVN0YWNrLFxuXHQgICAgICAgIGl0ZW0gPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcblxuXHQgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5cdCAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIExpdGVyYWwpIHtcblx0ICAgICAgcmV0dXJuIGl0ZW0udmFsdWU7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXR1cm4gaXRlbTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgY29udGV4dE5hbWU6IGZ1bmN0aW9uIGNvbnRleHROYW1lKGNvbnRleHQpIHtcblx0ICAgIGlmICh0aGlzLnVzZURlcHRocyAmJiBjb250ZXh0KSB7XG5cdCAgICAgIHJldHVybiAnZGVwdGhzWycgKyBjb250ZXh0ICsgJ10nO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuICdkZXB0aCcgKyBjb250ZXh0O1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBxdW90ZWRTdHJpbmc6IGZ1bmN0aW9uIHF1b3RlZFN0cmluZyhzdHIpIHtcblx0ICAgIHJldHVybiB0aGlzLnNvdXJjZS5xdW90ZWRTdHJpbmcoc3RyKTtcblx0ICB9LFxuXG5cdCAgb2JqZWN0TGl0ZXJhbDogZnVuY3Rpb24gb2JqZWN0TGl0ZXJhbChvYmopIHtcblx0ICAgIHJldHVybiB0aGlzLnNvdXJjZS5vYmplY3RMaXRlcmFsKG9iaik7XG5cdCAgfSxcblxuXHQgIGFsaWFzYWJsZTogZnVuY3Rpb24gYWxpYXNhYmxlKG5hbWUpIHtcblx0ICAgIHZhciByZXQgPSB0aGlzLmFsaWFzZXNbbmFtZV07XG5cdCAgICBpZiAocmV0KSB7XG5cdCAgICAgIHJldC5yZWZlcmVuY2VDb3VudCsrO1xuXHQgICAgICByZXR1cm4gcmV0O1xuXHQgICAgfVxuXG5cdCAgICByZXQgPSB0aGlzLmFsaWFzZXNbbmFtZV0gPSB0aGlzLnNvdXJjZS53cmFwKG5hbWUpO1xuXHQgICAgcmV0LmFsaWFzYWJsZSA9IHRydWU7XG5cdCAgICByZXQucmVmZXJlbmNlQ291bnQgPSAxO1xuXG5cdCAgICByZXR1cm4gcmV0O1xuXHQgIH0sXG5cblx0ICBzZXR1cEhlbHBlcjogZnVuY3Rpb24gc2V0dXBIZWxwZXIocGFyYW1TaXplLCBuYW1lLCBibG9ja0hlbHBlcikge1xuXHQgICAgdmFyIHBhcmFtcyA9IFtdLFxuXHQgICAgICAgIHBhcmFtc0luaXQgPSB0aGlzLnNldHVwSGVscGVyQXJncyhuYW1lLCBwYXJhbVNpemUsIHBhcmFtcywgYmxvY2tIZWxwZXIpO1xuXHQgICAgdmFyIGZvdW5kSGVscGVyID0gdGhpcy5uYW1lTG9va3VwKCdoZWxwZXJzJywgbmFtZSwgJ2hlbHBlcicpLFxuXHQgICAgICAgIGNhbGxDb250ZXh0ID0gdGhpcy5hbGlhc2FibGUodGhpcy5jb250ZXh0TmFtZSgwKSArICcgIT0gbnVsbCA/ICcgKyB0aGlzLmNvbnRleHROYW1lKDApICsgJyA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pJyk7XG5cblx0ICAgIHJldHVybiB7XG5cdCAgICAgIHBhcmFtczogcGFyYW1zLFxuXHQgICAgICBwYXJhbXNJbml0OiBwYXJhbXNJbml0LFxuXHQgICAgICBuYW1lOiBmb3VuZEhlbHBlcixcblx0ICAgICAgY2FsbFBhcmFtczogW2NhbGxDb250ZXh0XS5jb25jYXQocGFyYW1zKVxuXHQgICAgfTtcblx0ICB9LFxuXG5cdCAgc2V0dXBQYXJhbXM6IGZ1bmN0aW9uIHNldHVwUGFyYW1zKGhlbHBlciwgcGFyYW1TaXplLCBwYXJhbXMpIHtcblx0ICAgIHZhciBvcHRpb25zID0ge30sXG5cdCAgICAgICAgY29udGV4dHMgPSBbXSxcblx0ICAgICAgICB0eXBlcyA9IFtdLFxuXHQgICAgICAgIGlkcyA9IFtdLFxuXHQgICAgICAgIG9iamVjdEFyZ3MgPSAhcGFyYW1zLFxuXHQgICAgICAgIHBhcmFtID0gdW5kZWZpbmVkO1xuXG5cdCAgICBpZiAob2JqZWN0QXJncykge1xuXHQgICAgICBwYXJhbXMgPSBbXTtcblx0ICAgIH1cblxuXHQgICAgb3B0aW9ucy5uYW1lID0gdGhpcy5xdW90ZWRTdHJpbmcoaGVscGVyKTtcblx0ICAgIG9wdGlvbnMuaGFzaCA9IHRoaXMucG9wU3RhY2soKTtcblxuXHQgICAgaWYgKHRoaXMudHJhY2tJZHMpIHtcblx0ICAgICAgb3B0aW9ucy5oYXNoSWRzID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMuc3RyaW5nUGFyYW1zKSB7XG5cdCAgICAgIG9wdGlvbnMuaGFzaFR5cGVzID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgICBvcHRpb25zLmhhc2hDb250ZXh0cyA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgIH1cblxuXHQgICAgdmFyIGludmVyc2UgPSB0aGlzLnBvcFN0YWNrKCksXG5cdCAgICAgICAgcHJvZ3JhbSA9IHRoaXMucG9wU3RhY2soKTtcblxuXHQgICAgLy8gQXZvaWQgc2V0dGluZyBmbiBhbmQgaW52ZXJzZSBpZiBuZWl0aGVyIGFyZSBzZXQuIFRoaXMgYWxsb3dzXG5cdCAgICAvLyBoZWxwZXJzIHRvIGRvIGEgY2hlY2sgZm9yIGBpZiAob3B0aW9ucy5mbilgXG5cdCAgICBpZiAocHJvZ3JhbSB8fCBpbnZlcnNlKSB7XG5cdCAgICAgIG9wdGlvbnMuZm4gPSBwcm9ncmFtIHx8ICdjb250YWluZXIubm9vcCc7XG5cdCAgICAgIG9wdGlvbnMuaW52ZXJzZSA9IGludmVyc2UgfHwgJ2NvbnRhaW5lci5ub29wJztcblx0ICAgIH1cblxuXHQgICAgLy8gVGhlIHBhcmFtZXRlcnMgZ28gb24gdG8gdGhlIHN0YWNrIGluIG9yZGVyIChtYWtpbmcgc3VyZSB0aGF0IHRoZXkgYXJlIGV2YWx1YXRlZCBpbiBvcmRlcilcblx0ICAgIC8vIHNvIHdlIG5lZWQgdG8gcG9wIHRoZW0gb2ZmIHRoZSBzdGFjayBpbiByZXZlcnNlIG9yZGVyXG5cdCAgICB2YXIgaSA9IHBhcmFtU2l6ZTtcblx0ICAgIHdoaWxlIChpLS0pIHtcblx0ICAgICAgcGFyYW0gPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICAgIHBhcmFtc1tpXSA9IHBhcmFtO1xuXG5cdCAgICAgIGlmICh0aGlzLnRyYWNrSWRzKSB7XG5cdCAgICAgICAgaWRzW2ldID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICh0aGlzLnN0cmluZ1BhcmFtcykge1xuXHQgICAgICAgIHR5cGVzW2ldID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgICAgIGNvbnRleHRzW2ldID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIGlmIChvYmplY3RBcmdzKSB7XG5cdCAgICAgIG9wdGlvbnMuYXJncyA9IHRoaXMuc291cmNlLmdlbmVyYXRlQXJyYXkocGFyYW1zKTtcblx0ICAgIH1cblxuXHQgICAgaWYgKHRoaXMudHJhY2tJZHMpIHtcblx0ICAgICAgb3B0aW9ucy5pZHMgPSB0aGlzLnNvdXJjZS5nZW5lcmF0ZUFycmF5KGlkcyk7XG5cdCAgICB9XG5cdCAgICBpZiAodGhpcy5zdHJpbmdQYXJhbXMpIHtcblx0ICAgICAgb3B0aW9ucy50eXBlcyA9IHRoaXMuc291cmNlLmdlbmVyYXRlQXJyYXkodHlwZXMpO1xuXHQgICAgICBvcHRpb25zLmNvbnRleHRzID0gdGhpcy5zb3VyY2UuZ2VuZXJhdGVBcnJheShjb250ZXh0cyk7XG5cdCAgICB9XG5cblx0ICAgIGlmICh0aGlzLm9wdGlvbnMuZGF0YSkge1xuXHQgICAgICBvcHRpb25zLmRhdGEgPSAnZGF0YSc7XG5cdCAgICB9XG5cdCAgICBpZiAodGhpcy51c2VCbG9ja1BhcmFtcykge1xuXHQgICAgICBvcHRpb25zLmJsb2NrUGFyYW1zID0gJ2Jsb2NrUGFyYW1zJztcblx0ICAgIH1cblx0ICAgIHJldHVybiBvcHRpb25zO1xuXHQgIH0sXG5cblx0ICBzZXR1cEhlbHBlckFyZ3M6IGZ1bmN0aW9uIHNldHVwSGVscGVyQXJncyhoZWxwZXIsIHBhcmFtU2l6ZSwgcGFyYW1zLCB1c2VSZWdpc3Rlcikge1xuXHQgICAgdmFyIG9wdGlvbnMgPSB0aGlzLnNldHVwUGFyYW1zKGhlbHBlciwgcGFyYW1TaXplLCBwYXJhbXMpO1xuXHQgICAgb3B0aW9ucy5sb2MgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnNvdXJjZS5jdXJyZW50TG9jYXRpb24pO1xuXHQgICAgb3B0aW9ucyA9IHRoaXMub2JqZWN0TGl0ZXJhbChvcHRpb25zKTtcblx0ICAgIGlmICh1c2VSZWdpc3Rlcikge1xuXHQgICAgICB0aGlzLnVzZVJlZ2lzdGVyKCdvcHRpb25zJyk7XG5cdCAgICAgIHBhcmFtcy5wdXNoKCdvcHRpb25zJyk7XG5cdCAgICAgIHJldHVybiBbJ29wdGlvbnM9Jywgb3B0aW9uc107XG5cdCAgICB9IGVsc2UgaWYgKHBhcmFtcykge1xuXHQgICAgICBwYXJhbXMucHVzaChvcHRpb25zKTtcblx0ICAgICAgcmV0dXJuICcnO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIG9wdGlvbnM7XG5cdCAgICB9XG5cdCAgfVxuXHR9O1xuXG5cdChmdW5jdGlvbiAoKSB7XG5cdCAgdmFyIHJlc2VydmVkV29yZHMgPSAoJ2JyZWFrIGVsc2UgbmV3IHZhcicgKyAnIGNhc2UgZmluYWxseSByZXR1cm4gdm9pZCcgKyAnIGNhdGNoIGZvciBzd2l0Y2ggd2hpbGUnICsgJyBjb250aW51ZSBmdW5jdGlvbiB0aGlzIHdpdGgnICsgJyBkZWZhdWx0IGlmIHRocm93JyArICcgZGVsZXRlIGluIHRyeScgKyAnIGRvIGluc3RhbmNlb2YgdHlwZW9mJyArICcgYWJzdHJhY3QgZW51bSBpbnQgc2hvcnQnICsgJyBib29sZWFuIGV4cG9ydCBpbnRlcmZhY2Ugc3RhdGljJyArICcgYnl0ZSBleHRlbmRzIGxvbmcgc3VwZXInICsgJyBjaGFyIGZpbmFsIG5hdGl2ZSBzeW5jaHJvbml6ZWQnICsgJyBjbGFzcyBmbG9hdCBwYWNrYWdlIHRocm93cycgKyAnIGNvbnN0IGdvdG8gcHJpdmF0ZSB0cmFuc2llbnQnICsgJyBkZWJ1Z2dlciBpbXBsZW1lbnRzIHByb3RlY3RlZCB2b2xhdGlsZScgKyAnIGRvdWJsZSBpbXBvcnQgcHVibGljIGxldCB5aWVsZCBhd2FpdCcgKyAnIG51bGwgdHJ1ZSBmYWxzZScpLnNwbGl0KCcgJyk7XG5cblx0ICB2YXIgY29tcGlsZXJXb3JkcyA9IEphdmFTY3JpcHRDb21waWxlci5SRVNFUlZFRF9XT1JEUyA9IHt9O1xuXG5cdCAgZm9yICh2YXIgaSA9IDAsIGwgPSByZXNlcnZlZFdvcmRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHQgICAgY29tcGlsZXJXb3Jkc1tyZXNlcnZlZFdvcmRzW2ldXSA9IHRydWU7XG5cdCAgfVxuXHR9KSgpO1xuXG5cdC8qKlxuXHQgKiBAZGVwcmVjYXRlZCBNYXkgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uXG5cdCAqL1xuXHRKYXZhU2NyaXB0Q29tcGlsZXIuaXNWYWxpZEphdmFTY3JpcHRWYXJpYWJsZU5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuXHQgIHJldHVybiAhSmF2YVNjcmlwdENvbXBpbGVyLlJFU0VSVkVEX1dPUkRTW25hbWVdICYmIC9eW2EtekEtWl8kXVswLTlhLXpBLVpfJF0qJC8udGVzdChuYW1lKTtcblx0fTtcblxuXHRmdW5jdGlvbiBzdHJpY3RMb29rdXAocmVxdWlyZVRlcm1pbmFsLCBjb21waWxlciwgcGFydHMsIHR5cGUpIHtcblx0ICB2YXIgc3RhY2sgPSBjb21waWxlci5wb3BTdGFjaygpLFxuXHQgICAgICBpID0gMCxcblx0ICAgICAgbGVuID0gcGFydHMubGVuZ3RoO1xuXHQgIGlmIChyZXF1aXJlVGVybWluYWwpIHtcblx0ICAgIGxlbi0tO1xuXHQgIH1cblxuXHQgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgIHN0YWNrID0gY29tcGlsZXIubmFtZUxvb2t1cChzdGFjaywgcGFydHNbaV0sIHR5cGUpO1xuXHQgIH1cblxuXHQgIGlmIChyZXF1aXJlVGVybWluYWwpIHtcblx0ICAgIHJldHVybiBbY29tcGlsZXIuYWxpYXNhYmxlKCdjb250YWluZXIuc3RyaWN0JyksICcoJywgc3RhY2ssICcsICcsIGNvbXBpbGVyLnF1b3RlZFN0cmluZyhwYXJ0c1tpXSksICcsICcsIEpTT04uc3RyaW5naWZ5KGNvbXBpbGVyLnNvdXJjZS5jdXJyZW50TG9jYXRpb24pLCAnICknXTtcblx0ICB9IGVsc2Uge1xuXHQgICAgcmV0dXJuIHN0YWNrO1xuXHQgIH1cblx0fVxuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEphdmFTY3JpcHRDb21waWxlcjtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogNTMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvKiBnbG9iYWwgZGVmaW5lICovXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX09iamVjdCRrZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMylbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBTb3VyY2VOb2RlID0gdW5kZWZpbmVkO1xuXG5cdHRyeSB7XG5cdCAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICBpZiAoZmFsc2UpIHtcblx0ICAgIC8vIFdlIGRvbid0IHN1cHBvcnQgdGhpcyBpbiBBTUQgZW52aXJvbm1lbnRzLiBGb3IgdGhlc2UgZW52aXJvbm1lbnRzLCB3ZSBhc3VzbWUgdGhhdFxuXHQgICAgLy8gdGhleSBhcmUgcnVubmluZyBvbiB0aGUgYnJvd3NlciBhbmQgdGh1cyBoYXZlIG5vIG5lZWQgZm9yIHRoZSBzb3VyY2UtbWFwIGxpYnJhcnkuXG5cdCAgICB2YXIgU291cmNlTWFwID0gcmVxdWlyZSgnc291cmNlLW1hcCcpO1xuXHQgICAgU291cmNlTm9kZSA9IFNvdXJjZU1hcC5Tb3VyY2VOb2RlO1xuXHQgIH1cblx0fSBjYXRjaCAoZXJyKSB7fVxuXHQvKiBOT1AgKi9cblxuXHQvKiBpc3RhbmJ1bCBpZ25vcmUgaWY6IHRlc3RlZCBidXQgbm90IGNvdmVyZWQgaW4gaXN0YW5idWwgZHVlIHRvIGRpc3QgYnVpbGQgICovXG5cdGlmICghU291cmNlTm9kZSkge1xuXHQgIFNvdXJjZU5vZGUgPSBmdW5jdGlvbiAobGluZSwgY29sdW1uLCBzcmNGaWxlLCBjaHVua3MpIHtcblx0ICAgIHRoaXMuc3JjID0gJyc7XG5cdCAgICBpZiAoY2h1bmtzKSB7XG5cdCAgICAgIHRoaXMuYWRkKGNodW5rcyk7XG5cdCAgICB9XG5cdCAgfTtcblx0ICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHQgIFNvdXJjZU5vZGUucHJvdG90eXBlID0ge1xuXHQgICAgYWRkOiBmdW5jdGlvbiBhZGQoY2h1bmtzKSB7XG5cdCAgICAgIGlmIChfdXRpbHMuaXNBcnJheShjaHVua3MpKSB7XG5cdCAgICAgICAgY2h1bmtzID0gY2h1bmtzLmpvaW4oJycpO1xuXHQgICAgICB9XG5cdCAgICAgIHRoaXMuc3JjICs9IGNodW5rcztcblx0ICAgIH0sXG5cdCAgICBwcmVwZW5kOiBmdW5jdGlvbiBwcmVwZW5kKGNodW5rcykge1xuXHQgICAgICBpZiAoX3V0aWxzLmlzQXJyYXkoY2h1bmtzKSkge1xuXHQgICAgICAgIGNodW5rcyA9IGNodW5rcy5qb2luKCcnKTtcblx0ICAgICAgfVxuXHQgICAgICB0aGlzLnNyYyA9IGNodW5rcyArIHRoaXMuc3JjO1xuXHQgICAgfSxcblx0ICAgIHRvU3RyaW5nV2l0aFNvdXJjZU1hcDogZnVuY3Rpb24gdG9TdHJpbmdXaXRoU291cmNlTWFwKCkge1xuXHQgICAgICByZXR1cm4geyBjb2RlOiB0aGlzLnRvU3RyaW5nKCkgfTtcblx0ICAgIH0sXG5cdCAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdCAgICAgIHJldHVybiB0aGlzLnNyYztcblx0ICAgIH1cblx0ICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gY2FzdENodW5rKGNodW5rLCBjb2RlR2VuLCBsb2MpIHtcblx0ICBpZiAoX3V0aWxzLmlzQXJyYXkoY2h1bmspKSB7XG5cdCAgICB2YXIgcmV0ID0gW107XG5cblx0ICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjaHVuay5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICByZXQucHVzaChjb2RlR2VuLndyYXAoY2h1bmtbaV0sIGxvYykpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIHJldDtcblx0ICB9IGVsc2UgaWYgKHR5cGVvZiBjaHVuayA9PT0gJ2Jvb2xlYW4nIHx8IHR5cGVvZiBjaHVuayA9PT0gJ251bWJlcicpIHtcblx0ICAgIC8vIEhhbmRsZSBwcmltaXRpdmVzIHRoYXQgdGhlIFNvdXJjZU5vZGUgd2lsbCB0aHJvdyB1cCBvblxuXHQgICAgcmV0dXJuIGNodW5rICsgJyc7XG5cdCAgfVxuXHQgIHJldHVybiBjaHVuaztcblx0fVxuXG5cdGZ1bmN0aW9uIENvZGVHZW4oc3JjRmlsZSkge1xuXHQgIHRoaXMuc3JjRmlsZSA9IHNyY0ZpbGU7XG5cdCAgdGhpcy5zb3VyY2UgPSBbXTtcblx0fVxuXG5cdENvZGVHZW4ucHJvdG90eXBlID0ge1xuXHQgIGlzRW1wdHk6IGZ1bmN0aW9uIGlzRW1wdHkoKSB7XG5cdCAgICByZXR1cm4gIXRoaXMuc291cmNlLmxlbmd0aDtcblx0ICB9LFxuXHQgIHByZXBlbmQ6IGZ1bmN0aW9uIHByZXBlbmQoc291cmNlLCBsb2MpIHtcblx0ICAgIHRoaXMuc291cmNlLnVuc2hpZnQodGhpcy53cmFwKHNvdXJjZSwgbG9jKSk7XG5cdCAgfSxcblx0ICBwdXNoOiBmdW5jdGlvbiBwdXNoKHNvdXJjZSwgbG9jKSB7XG5cdCAgICB0aGlzLnNvdXJjZS5wdXNoKHRoaXMud3JhcChzb3VyY2UsIGxvYykpO1xuXHQgIH0sXG5cblx0ICBtZXJnZTogZnVuY3Rpb24gbWVyZ2UoKSB7XG5cdCAgICB2YXIgc291cmNlID0gdGhpcy5lbXB0eSgpO1xuXHQgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChsaW5lKSB7XG5cdCAgICAgIHNvdXJjZS5hZGQoWycgICcsIGxpbmUsICdcXG4nXSk7XG5cdCAgICB9KTtcblx0ICAgIHJldHVybiBzb3VyY2U7XG5cdCAgfSxcblxuXHQgIGVhY2g6IGZ1bmN0aW9uIGVhY2goaXRlcikge1xuXHQgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuc291cmNlLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgIGl0ZXIodGhpcy5zb3VyY2VbaV0pO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBlbXB0eTogZnVuY3Rpb24gZW1wdHkoKSB7XG5cdCAgICB2YXIgbG9jID0gdGhpcy5jdXJyZW50TG9jYXRpb24gfHwgeyBzdGFydDoge30gfTtcblx0ICAgIHJldHVybiBuZXcgU291cmNlTm9kZShsb2Muc3RhcnQubGluZSwgbG9jLnN0YXJ0LmNvbHVtbiwgdGhpcy5zcmNGaWxlKTtcblx0ICB9LFxuXHQgIHdyYXA6IGZ1bmN0aW9uIHdyYXAoY2h1bmspIHtcblx0ICAgIHZhciBsb2MgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB0aGlzLmN1cnJlbnRMb2NhdGlvbiB8fCB7IHN0YXJ0OiB7fSB9IDogYXJndW1lbnRzWzFdO1xuXG5cdCAgICBpZiAoY2h1bmsgaW5zdGFuY2VvZiBTb3VyY2VOb2RlKSB7XG5cdCAgICAgIHJldHVybiBjaHVuaztcblx0ICAgIH1cblxuXHQgICAgY2h1bmsgPSBjYXN0Q2h1bmsoY2h1bmssIHRoaXMsIGxvYyk7XG5cblx0ICAgIHJldHVybiBuZXcgU291cmNlTm9kZShsb2Muc3RhcnQubGluZSwgbG9jLnN0YXJ0LmNvbHVtbiwgdGhpcy5zcmNGaWxlLCBjaHVuayk7XG5cdCAgfSxcblxuXHQgIGZ1bmN0aW9uQ2FsbDogZnVuY3Rpb24gZnVuY3Rpb25DYWxsKGZuLCB0eXBlLCBwYXJhbXMpIHtcblx0ICAgIHBhcmFtcyA9IHRoaXMuZ2VuZXJhdGVMaXN0KHBhcmFtcyk7XG5cdCAgICByZXR1cm4gdGhpcy53cmFwKFtmbiwgdHlwZSA/ICcuJyArIHR5cGUgKyAnKCcgOiAnKCcsIHBhcmFtcywgJyknXSk7XG5cdCAgfSxcblxuXHQgIHF1b3RlZFN0cmluZzogZnVuY3Rpb24gcXVvdGVkU3RyaW5nKHN0cikge1xuXHQgICAgcmV0dXJuICdcIicgKyAoc3RyICsgJycpLnJlcGxhY2UoL1xcXFwvZywgJ1xcXFxcXFxcJykucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKS5yZXBsYWNlKC9cXHIvZywgJ1xcXFxyJykucmVwbGFjZSgvXFx1MjAyOC9nLCAnXFxcXHUyMDI4JykgLy8gUGVyIEVjbWEtMjYyIDcuMyArIDcuOC40XG5cdCAgICAucmVwbGFjZSgvXFx1MjAyOS9nLCAnXFxcXHUyMDI5JykgKyAnXCInO1xuXHQgIH0sXG5cblx0ICBvYmplY3RMaXRlcmFsOiBmdW5jdGlvbiBvYmplY3RMaXRlcmFsKG9iaikge1xuXHQgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuXHQgICAgdmFyIF90aGlzID0gdGhpcztcblxuXHQgICAgdmFyIHBhaXJzID0gW107XG5cblx0ICAgIF9PYmplY3Qka2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHQgICAgICB2YXIgdmFsdWUgPSBjYXN0Q2h1bmsob2JqW2tleV0sIF90aGlzKTtcblx0ICAgICAgaWYgKHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuXHQgICAgICAgIHBhaXJzLnB1c2goW190aGlzLnF1b3RlZFN0cmluZyhrZXkpLCAnOicsIHZhbHVlXSk7XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICB2YXIgcmV0ID0gdGhpcy5nZW5lcmF0ZUxpc3QocGFpcnMpO1xuXHQgICAgcmV0LnByZXBlbmQoJ3snKTtcblx0ICAgIHJldC5hZGQoJ30nKTtcblx0ICAgIHJldHVybiByZXQ7XG5cdCAgfSxcblxuXHQgIGdlbmVyYXRlTGlzdDogZnVuY3Rpb24gZ2VuZXJhdGVMaXN0KGVudHJpZXMpIHtcblx0ICAgIHZhciByZXQgPSB0aGlzLmVtcHR5KCk7XG5cblx0ICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBlbnRyaWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgIGlmIChpKSB7XG5cdCAgICAgICAgcmV0LmFkZCgnLCcpO1xuXHQgICAgICB9XG5cblx0ICAgICAgcmV0LmFkZChjYXN0Q2h1bmsoZW50cmllc1tpXSwgdGhpcykpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gcmV0O1xuXHQgIH0sXG5cblx0ICBnZW5lcmF0ZUFycmF5OiBmdW5jdGlvbiBnZW5lcmF0ZUFycmF5KGVudHJpZXMpIHtcblx0ICAgIHZhciByZXQgPSB0aGlzLmdlbmVyYXRlTGlzdChlbnRyaWVzKTtcblx0ICAgIHJldC5wcmVwZW5kKCdbJyk7XG5cdCAgICByZXQuYWRkKCddJyk7XG5cblx0ICAgIHJldHVybiByZXQ7XG5cdCAgfVxuXHR9O1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IENvZGVHZW47XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSlcbn0pO1xuOyIsIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKXtcclxuICByZXR1cm4gJyA8aDE+e3t0aXRsZX19PC9oMT4nXHJcbn0gIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCBmb250YXdlc29tZSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xyXG5cdHJldHVybiBgXHJcbiAge3s+IGFwcFRpdGxlfX1cclxuXHJcbnt7I2VhY2ggdXNlcnNDb250YWN0c319XHJcblx0PGRpdiBjbGFzcz1cImNvbnRhY3QgY2FyZFwiPlxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGkgY2xhc3M9XCJmYXIgZmEtdXNlci1jaXJjbGUgZ3JhdmF0YXJcIj48L2k+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJpbmZvXCI+XHJcblx0XHRcdDxoMj5OYW1lOiB7e25hbWV9fTwvaDI+XHJcblx0XHRcdDxidXR0b24gY2xhc3M9XCJkZXRhaWxzQnRuXCIgb25jbGljaz1cInRvZ2dsZURldGFpbHMoe3tpZH19KVwiPkRldGFpbHM8L2J1dHRvbj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImRldGFpbHNcIiBpZD1cInt7aWR9fVwiPlxyXG5cdFx0XHRcdDxwPlBob25lIG51bWJlcjoge3twaG9uZU51bWJlcn19PC9wPlxyXG5cdFx0XHRcdDxwPkVtYWlsOiB7e2VtYWlsfX08L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbnt7L2VhY2h9fWA7XHJcbn1cclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMzYjNiN2EsICM5MTYxN2UpO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdHMge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3gtc2hhZG93OiAzcHggNXB4IDEwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgMCAtNXB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAtMTBweCAxNXB4IC0xcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCBpbnNldCAwIDNweCA0cHggLTFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIGluc2V0IDAgMCA1cHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1MywgMC44KSwgaW5zZXQgMCAyMHB4IDMwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBtYXJnaW46IDAgMnB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6ICNGMEYwRjA7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzIHtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBwYWRkaW5nOiAxLjNlbSAwIDAgMS4zZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIG1hcmdpbjogMnJlbTtcXHJcXG4gIHdpZHRoOiAyMSU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTBkZWcsICNjY2MsICNmZmYgNTAlKTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMS4yNXJlbSAyLjYyNXJlbSAwLjM3NXJlbSByZ2JhKDAsIDAsIDAsIDAuMTgpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgcGFkZGluZzogMjlweCAwcHg7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JhdmF0YXIge1xcclxcbiAgZm9udC1zaXplOiA2cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIG1hcmdpbjogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuZGl2LmRldGFpbHN7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnNob3d7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlDQUF5QztFQUN6Qyx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLFlBQVk7RUFDWiw4UUFBOFE7RUFDOVEsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixrREFBa0Q7RUFDbEQsMkRBQTJEO0VBQzNELHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7OztBQUdBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMzYjNiN2EsICM5MTYxN2UpO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdHMge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3gtc2hhZG93OiAzcHggNXB4IDEwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgMCAtNXB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAtMTBweCAxNXB4IC0xcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCBpbnNldCAwIDNweCA0cHggLTFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIGluc2V0IDAgMCA1cHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1MywgMC44KSwgaW5zZXQgMCAyMHB4IDMwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBtYXJnaW46IDAgMnB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6ICNGMEYwRjA7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzIHtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBwYWRkaW5nOiAxLjNlbSAwIDAgMS4zZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIG1hcmdpbjogMnJlbTtcXHJcXG4gIHdpZHRoOiAyMSU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTBkZWcsICNjY2MsICNmZmYgNTAlKTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMS4yNXJlbSAyLjYyNXJlbSAwLjM3NXJlbSByZ2JhKDAsIDAsIDAsIDAuMTgpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgcGFkZGluZzogMjlweCAwcHg7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JhdmF0YXIge1xcclxcbiAgZm9udC1zaXplOiA2cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIG1hcmdpbjogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuZGl2LmRldGFpbHN7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnNob3d7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiaW1wb3J0IHtQYXJ0aWFsLCBUZW1wbGF0ZX0gZnJvbSBcIi4vanMvVGVtcGxhdGVcIjtcclxuaW1wb3J0IHsgY29udGFjdHMgfSBmcm9tICcuL2RhdGEvY29udGFjdHMnO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL3ZpZXdzL2hlYWRlci5qcyc7XHJcbmltcG9ydCBNYWluIGZyb20gJy4vdmlld3MvbWFpbi5qcydcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZVwiO1xyXG5cclxuY29uc3QgcGFydGlhbHMgPSBuZXcgUGFydGlhbChIZWFkZXIsICdhcHBUaXRsZScsIHsgdGl0bGU6ICdNeSBDb250YWN0cycgfSlcclxuXHJcbmNvbnN0IG1haW5UZW1wID0gbmV3IFRlbXBsYXRlKE1haW4sIHsgdXNlcnNDb250YWN0czogY29udGFjdHMgfSwgJyNjb250YWN0cycsIHBhcnRpYWxzKTtcclxuXHJcbm1haW5UZW1wLnJlbmRlcigpO1xyXG5cclxuZnVuY3Rpb24gdG9nZ2xlRGV0YWlscyhpZCkgeyBcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpXHJcbn0iXSwibmFtZXMiOlsiY29udGFjdHMiLCJpZCIsIm5hbWUiLCJwaG9uZU51bWJlciIsImVtYWlsIiwiSGFuZGxlYmFycyIsIlBhcnRpYWwiLCJwYXRoIiwiZGF0YSIsIlRlbXBsYXRlIiwiZWwiLCJwYXJ0aWFscyIsInJlZ2lzdGVyUGFydGlhbCIsImh0bWwiLCJ0ZW1wbGF0ZSIsImNvbXBpbGUiLCJyZXN1bHQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJ3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsInJvb3QiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsIm1vZHVsZXMiLCJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwibG9hZGVkIiwiY2FsbCIsIm0iLCJjIiwicCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfX2VzTW9kdWxlIiwiX2hhbmRsZWJhcnNSdW50aW1lIiwiX2hhbmRsZWJhcnNSdW50aW1lMiIsIl9oYW5kbGViYXJzQ29tcGlsZXJBc3QiLCJfaGFuZGxlYmFyc0NvbXBpbGVyQXN0MiIsIl9oYW5kbGViYXJzQ29tcGlsZXJCYXNlIiwiX2hhbmRsZWJhcnNDb21waWxlckNvbXBpbGVyIiwiX2hhbmRsZWJhcnNDb21waWxlckphdmFzY3JpcHRDb21waWxlciIsIl9oYW5kbGViYXJzQ29tcGlsZXJKYXZhc2NyaXB0Q29tcGlsZXIyIiwiX2hhbmRsZWJhcnNDb21waWxlclZpc2l0b3IiLCJfaGFuZGxlYmFyc0NvbXBpbGVyVmlzaXRvcjIiLCJfaGFuZGxlYmFyc05vQ29uZmxpY3QiLCJfaGFuZGxlYmFyc05vQ29uZmxpY3QyIiwiX2NyZWF0ZSIsImNyZWF0ZSIsImhiIiwiaW5wdXQiLCJvcHRpb25zIiwicHJlY29tcGlsZSIsIkFTVCIsIkNvbXBpbGVyIiwiSmF2YVNjcmlwdENvbXBpbGVyIiwiUGFyc2VyIiwicGFyc2VyIiwicGFyc2UiLCJwYXJzZVdpdGhvdXRQcm9jZXNzaW5nIiwiaW5zdCIsIlZpc2l0b3IiLCJvYmoiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9oYW5kbGViYXJzQmFzZSIsImJhc2UiLCJfaGFuZGxlYmFyc1NhZmVTdHJpbmciLCJfaGFuZGxlYmFyc1NhZmVTdHJpbmcyIiwiX2hhbmRsZWJhcnNFeGNlcHRpb24iLCJfaGFuZGxlYmFyc0V4Y2VwdGlvbjIiLCJfaGFuZGxlYmFyc1V0aWxzIiwiVXRpbHMiLCJydW50aW1lIiwiSGFuZGxlYmFyc0Vudmlyb25tZW50IiwiZXh0ZW5kIiwiU2FmZVN0cmluZyIsIkV4Y2VwdGlvbiIsImVzY2FwZUV4cHJlc3Npb24iLCJWTSIsInNwZWMiLCJuZXdPYmoiLCJrZXkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsIl91dGlscyIsIl9leGNlcHRpb24iLCJfZXhjZXB0aW9uMiIsIl9oZWxwZXJzIiwiX2RlY29yYXRvcnMiLCJfbG9nZ2VyIiwiX2xvZ2dlcjIiLCJfaW50ZXJuYWxQcm90b0FjY2VzcyIsIlZFUlNJT04iLCJDT01QSUxFUl9SRVZJU0lPTiIsIkxBU1RfQ09NUEFUSUJMRV9DT01QSUxFUl9SRVZJU0lPTiIsIlJFVklTSU9OX0NIQU5HRVMiLCJvYmplY3RUeXBlIiwiaGVscGVycyIsImRlY29yYXRvcnMiLCJyZWdpc3RlckRlZmF1bHRIZWxwZXJzIiwicmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyIsImNvbnN0cnVjdG9yIiwibG9nZ2VyIiwibG9nIiwicmVnaXN0ZXJIZWxwZXIiLCJmbiIsInRvU3RyaW5nIiwidW5yZWdpc3RlckhlbHBlciIsInBhcnRpYWwiLCJ1bnJlZ2lzdGVyUGFydGlhbCIsInJlZ2lzdGVyRGVjb3JhdG9yIiwidW5yZWdpc3RlckRlY29yYXRvciIsInJlc2V0TG9nZ2VkUHJvcGVydHlBY2Nlc3NlcyIsInJlc2V0TG9nZ2VkUHJvcGVydGllcyIsImNyZWF0ZUZyYW1lIiwiaW5kZXhPZiIsImlzRW1wdHkiLCJibG9ja1BhcmFtcyIsImFwcGVuZENvbnRleHRQYXRoIiwiZXNjYXBlIiwiYmFkQ2hhcnMiLCJwb3NzaWJsZSIsImVzY2FwZUNoYXIiLCJjaHIiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiaXNGdW5jdGlvbiIsInZhbHVlIiwiaXNBcnJheSIsIkFycmF5IiwiYXJyYXkiLCJsZW4iLCJzdHJpbmciLCJ0b0hUTUwiLCJ0ZXN0IiwicmVwbGFjZSIsIm9iamVjdCIsImZyYW1lIiwiX3BhcmVudCIsInBhcmFtcyIsImlkcyIsImNvbnRleHRQYXRoIiwiX09iamVjdCRkZWZpbmVQcm9wZXJ0eSIsImVycm9yUHJvcHMiLCJtZXNzYWdlIiwibm9kZSIsImxvYyIsImxpbmUiLCJ1bmRlZmluZWQiLCJlbmRMaW5lTnVtYmVyIiwiY29sdW1uIiwiZW5kQ29sdW1uIiwic3RhcnQiLCJlbmQiLCJ0bXAiLCJFcnJvciIsImlkeCIsImNhcHR1cmVTdGFja1RyYWNlIiwibGluZU51bWJlciIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsIm5vcCIsIiQiLCJpdCIsImRlc2MiLCJzZXREZXNjIiwiJE9iamVjdCIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJpc0VudW0iLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImdldERlc2MiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJzZXREZXNjcyIsImRlZmluZVByb3BlcnRpZXMiLCJnZXRLZXlzIiwia2V5cyIsImdldE5hbWVzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImdldFN5bWJvbHMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJlYWNoIiwiZm9yRWFjaCIsIm1vdmVIZWxwZXJUb0hvb2tzIiwiX2hlbHBlcnNCbG9ja0hlbHBlck1pc3NpbmciLCJfaGVscGVyc0Jsb2NrSGVscGVyTWlzc2luZzIiLCJfaGVscGVyc0VhY2giLCJfaGVscGVyc0VhY2gyIiwiX2hlbHBlcnNIZWxwZXJNaXNzaW5nIiwiX2hlbHBlcnNIZWxwZXJNaXNzaW5nMiIsIl9oZWxwZXJzSWYiLCJfaGVscGVyc0lmMiIsIl9oZWxwZXJzTG9nIiwiX2hlbHBlcnNMb2cyIiwiX2hlbHBlcnNMb29rdXAiLCJfaGVscGVyc0xvb2t1cDIiLCJfaGVscGVyc1dpdGgiLCJfaGVscGVyc1dpdGgyIiwiaW5zdGFuY2UiLCJoZWxwZXJOYW1lIiwia2VlcEhlbHBlciIsImhvb2tzIiwiY29udGV4dCIsImludmVyc2UiLCJnbG9iYWwiLCJfT2JqZWN0JGtleXMiLCJyZXQiLCJleGVjSXRlcmF0aW9uIiwiZmllbGQiLCJpbmRleCIsImxhc3QiLCJmaXJzdCIsImoiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm5ld0NvbnRleHQiLCJuZXh0IiwiZG9uZSIsInB1c2giLCJwcmlvcktleSIsInRvT2JqZWN0IiwiJGtleXMiLCJkZWZpbmVkIiwiVHlwZUVycm9yIiwiJGV4cG9ydCIsImNvcmUiLCJmYWlscyIsIktFWSIsImV4ZWMiLCJleHAiLCJTIiwiRiIsImN0eCIsIlBST1RPVFlQRSIsInR5cGUiLCJzb3VyY2UiLCJJU19GT1JDRUQiLCJJU19HTE9CQUwiLCJHIiwiSVNfU1RBVElDIiwiSVNfUFJPVE8iLCJQIiwiSVNfQklORCIsIkIiLCJJU19XUkFQIiwiVyIsInRhcmdldCIsIm93biIsIm91dCIsIkMiLCJwYXJhbSIsIkZ1bmN0aW9uIiwid2luZG93IiwiTWF0aCIsInNlbGYiLCJfX2ciLCJ2ZXJzaW9uIiwiX19lIiwiYUZ1bmN0aW9uIiwidGhhdCIsImEiLCJiIiwiYXBwbHkiLCJlIiwiY29uZGl0aW9uYWwiLCJoYXNoIiwiaW5jbHVkZVplcm8iLCJhcmdzIiwibGV2ZWwiLCJsb29rdXBQcm9wZXJ0eSIsIl9kZWNvcmF0b3JzSW5saW5lIiwiX2RlY29yYXRvcnNJbmxpbmUyIiwicHJvcHMiLCJjb250YWluZXIiLCJvcmlnaW5hbCIsIm1ldGhvZE1hcCIsImxvb2t1cExldmVsIiwibGV2ZWxNYXAiLCJ0b0xvd2VyQ2FzZSIsInBhcnNlSW50IiwiY29uc29sZSIsIm1ldGhvZCIsIl9sZW4iLCJfa2V5IiwiX09iamVjdCRjcmVhdGUiLCJjcmVhdGVQcm90b0FjY2Vzc0NvbnRyb2wiLCJyZXN1bHRJc0FsbG93ZWQiLCJfY3JlYXRlTmV3TG9va3VwT2JqZWN0IiwibG9nZ2VkUHJvcGVydGllcyIsInJ1bnRpbWVPcHRpb25zIiwiZGVmYXVsdE1ldGhvZFdoaXRlTGlzdCIsImRlZmF1bHRQcm9wZXJ0eVdoaXRlTGlzdCIsInByb3BlcnRpZXMiLCJ3aGl0ZWxpc3QiLCJjcmVhdGVOZXdMb29rdXBPYmplY3QiLCJhbGxvd2VkUHJvdG9Qcm9wZXJ0aWVzIiwiZGVmYXVsdFZhbHVlIiwiYWxsb3dQcm90b1Byb3BlcnRpZXNCeURlZmF1bHQiLCJtZXRob2RzIiwiYWxsb3dlZFByb3RvTWV0aG9kcyIsImFsbG93UHJvdG9NZXRob2RzQnlEZWZhdWx0IiwicHJvdG9BY2Nlc3NDb250cm9sIiwicHJvcGVydHlOYW1lIiwiY2hlY2tXaGl0ZUxpc3QiLCJwcm90b0FjY2Vzc0NvbnRyb2xGb3JUeXBlIiwibG9nVW5leHBlY2VkUHJvcGVydHlBY2Nlc3NPbmNlIiwiRCIsInNvdXJjZXMiLCJjb25jYXQiLCJfT2JqZWN0JHNlYWwiLCJjaGVja1JldmlzaW9uIiwid3JhcFByb2dyYW0iLCJyZXNvbHZlUGFydGlhbCIsImludm9rZVBhcnRpYWwiLCJub29wIiwiX2Jhc2UiLCJfaW50ZXJuYWxXcmFwSGVscGVyIiwiY29tcGlsZXJJbmZvIiwiY29tcGlsZXJSZXZpc2lvbiIsImN1cnJlbnRSZXZpc2lvbiIsInJ1bnRpbWVWZXJzaW9ucyIsImNvbXBpbGVyVmVyc2lvbnMiLCJ0ZW1wbGF0ZVNwZWMiLCJlbnYiLCJtYWluIiwiZGVjb3JhdG9yIiwibWFpbl9kIiwiY29tcGlsZXIiLCJ0ZW1wbGF0ZVdhc1ByZWNvbXBpbGVkV2l0aENvbXBpbGVyVjciLCJpbnZva2VQYXJ0aWFsV3JhcHBlciIsImV4dGVuZGVkT3B0aW9ucyIsImNvbXBpbGVyT3B0aW9ucyIsImluZGVudCIsImxpbmVzIiwic3BsaXQiLCJsIiwiam9pbiIsInN0cmljdCIsInBhcmVudCIsImxvb2t1cCIsImRlcHRocyIsImxhbWJkYSIsImN1cnJlbnQiLCJwcm9ncmFtcyIsInByb2dyYW0iLCJkZWNsYXJlZEJsb2NrUGFyYW1zIiwicHJvZ3JhbVdyYXBwZXIiLCJkZXB0aCIsIm1lcmdlSWZOZWVkZWQiLCJjb21tb24iLCJudWxsQ29udGV4dCIsIl9zZXR1cCIsInVzZURhdGEiLCJpbml0RGF0YSIsInVzZUJsb2NrUGFyYW1zIiwidXNlRGVwdGhzIiwiZXhlY3V0ZURlY29yYXRvcnMiLCJpc1RvcCIsIm1lcmdlZEhlbHBlcnMiLCJ3cmFwSGVscGVyc1RvUGFzc0xvb2t1cFByb3BlcnR5IiwidXNlUGFydGlhbCIsInVzZURlY29yYXRvcnMiLCJrZWVwSGVscGVySW5IZWxwZXJzIiwiYWxsb3dDYWxsc1RvSGVscGVyTWlzc2luZyIsIl9jaGlsZCIsInByb2ciLCJjdXJyZW50RGVwdGhzIiwiY3VycmVudFBhcnRpYWxCbG9jayIsInBhcnRpYWxCbG9jayIsInBhcnRpYWxCbG9ja1dyYXBwZXIiLCJoZWxwZXIiLCJwYXNzTG9va3VwUHJvcGVydHlPcHRpb24iLCJ3cmFwSGVscGVyIiwic2VhbCIsImlzT2JqZWN0IiwiJHNlYWwiLCJ0cmFuc2Zvcm1PcHRpb25zRm4iLCJ3cmFwcGVyIiwiJEhhbmRsZWJhcnMiLCJub0NvbmZsaWN0IiwiaGVscGVyRXhwcmVzc2lvbiIsInNjb3BlZElkIiwic2ltcGxlSWQiLCJwYXJ0cyIsIl9wYXJzZXIiLCJfcGFyc2VyMiIsIl93aGl0ZXNwYWNlQ29udHJvbCIsIl93aGl0ZXNwYWNlQ29udHJvbDIiLCJIZWxwZXJzIiwieXkiLCJsb2NJbmZvIiwiU291cmNlTG9jYXRpb24iLCJzcmNOYW1lIiwiYXN0Iiwic3RyaXAiLCJhY2NlcHQiLCJoYW5kbGViYXJzIiwidHJhY2UiLCJzeW1ib2xzXyIsInRlcm1pbmFsc18iLCJwcm9kdWN0aW9uc18iLCJwZXJmb3JtQWN0aW9uIiwiYW5vbnltb3VzIiwieXl0ZXh0IiwieXlsZW5nIiwieXlsaW5lbm8iLCJ5eXN0YXRlIiwiJCQiLCJfJCIsIiQwIiwicHJlcGFyZVByb2dyYW0iLCJzdHJpcENvbW1lbnQiLCJzdHJpcEZsYWdzIiwicHJlcGFyZVJhd0Jsb2NrIiwicHJlcGFyZUJsb2NrIiwib3BlbiIsImNoYWluZWQiLCJjaGFpbiIsInByZXBhcmVNdXN0YWNoZSIsInByZXBhcmVQYXJ0aWFsQmxvY2siLCJwYWlycyIsIk51bWJlciIsInByZXBhcmVQYXRoIiwicGFydCIsInNlcGFyYXRvciIsInRhYmxlIiwiZGVmYXVsdEFjdGlvbnMiLCJwYXJzZUVycm9yIiwic3RyIiwic3RhY2siLCJ2c3RhY2siLCJsc3RhY2siLCJyZWNvdmVyaW5nIiwiVEVSUk9SIiwiRU9GIiwibGV4ZXIiLCJzZXRJbnB1dCIsInl5bGxvYyIsInl5bG9jIiwicmFuZ2VzIiwicG9wU3RhY2siLCJuIiwibGV4IiwidG9rZW4iLCJzeW1ib2wiLCJwcmVFcnJvclN5bWJvbCIsInN0YXRlIiwiYWN0aW9uIiwiciIsInl5dmFsIiwibmV3U3RhdGUiLCJleHBlY3RlZCIsImVyclN0ciIsInNob3dQb3NpdGlvbiIsInRleHQiLCJtYXRjaCIsImZpcnN0X2xpbmUiLCJsYXN0X2xpbmUiLCJmaXJzdF9jb2x1bW4iLCJsYXN0X2NvbHVtbiIsInJhbmdlIiwic2xpY2UiLCJfaW5wdXQiLCJfbW9yZSIsIl9sZXNzIiwibWF0Y2hlZCIsImNvbmRpdGlvblN0YWNrIiwib2Zmc2V0IiwiY2giLCJ1bnB1dCIsInN1YnN0ciIsIm9sZExpbmVzIiwibW9yZSIsImxlc3MiLCJwYXN0SW5wdXQiLCJwYXN0IiwidXBjb21pbmdJbnB1dCIsInByZSIsInRlbXBNYXRjaCIsImNvbCIsInJ1bGVzIiwiX2N1cnJlbnRSdWxlcyIsImZsZXgiLCJtYXRjaGVzIiwiYmVnaW4iLCJjb25kaXRpb24iLCJwb3BTdGF0ZSIsInBvcCIsImNvbmRpdGlvbnMiLCJ0b3BTdGF0ZSIsInB1c2hTdGF0ZSIsInl5XyIsIiRhdm9pZGluZ19uYW1lX2NvbGxpc2lvbnMiLCJZWV9TVEFSVCIsInN1YnN0cmluZyIsIllZU1RBVEUiLCJfdmlzaXRvciIsIl92aXNpdG9yMiIsIldoaXRlc3BhY2VDb250cm9sIiwiUHJvZ3JhbSIsImRvU3RhbmRhbG9uZSIsImlnbm9yZVN0YW5kYWxvbmUiLCJpc1Jvb3QiLCJpc1Jvb3RTZWVuIiwiYm9keSIsIl9pc1ByZXZXaGl0ZXNwYWNlIiwiaXNQcmV2V2hpdGVzcGFjZSIsIl9pc05leHRXaGl0ZXNwYWNlIiwiaXNOZXh0V2hpdGVzcGFjZSIsIm9wZW5TdGFuZGFsb25lIiwiY2xvc2VTdGFuZGFsb25lIiwiaW5saW5lU3RhbmRhbG9uZSIsImNsb3NlIiwib21pdFJpZ2h0Iiwib21pdExlZnQiLCJCbG9ja1N0YXRlbWVudCIsIkRlY29yYXRvckJsb2NrIiwiUGFydGlhbEJsb2NrU3RhdGVtZW50IiwiYmxvY2siLCJmaXJzdEludmVyc2UiLCJsYXN0SW52ZXJzZSIsIm9wZW5TdHJpcCIsImNsb3NlU3RyaXAiLCJpbnZlcnNlU3RyaXAiLCJEZWNvcmF0b3IiLCJNdXN0YWNoZVN0YXRlbWVudCIsIm11c3RhY2hlIiwiUGFydGlhbFN0YXRlbWVudCIsIkNvbW1lbnRTdGF0ZW1lbnQiLCJwcmV2Iiwic2libGluZyIsIm11bHRpcGxlIiwicmlnaHRTdHJpcHBlZCIsImxlZnRTdHJpcHBlZCIsInBhcmVudHMiLCJtdXRhdGluZyIsImFjY2VwdEtleSIsImFjY2VwdFJlcXVpcmVkIiwiYWNjZXB0QXJyYXkiLCJzcGxpY2UiLCJ1bnNoaWZ0Iiwic2hpZnQiLCJ2aXNpdFN1YkV4cHJlc3Npb24iLCJ2aXNpdEJsb2NrIiwidmlzaXRQYXJ0aWFsIiwiQ29udGVudFN0YXRlbWVudCIsIlN1YkV4cHJlc3Npb24iLCJQYXRoRXhwcmVzc2lvbiIsIlN0cmluZ0xpdGVyYWwiLCJOdW1iZXJMaXRlcmFsIiwiQm9vbGVhbkxpdGVyYWwiLCJVbmRlZmluZWRMaXRlcmFsIiwiTnVsbExpdGVyYWwiLCJIYXNoIiwiSGFzaFBhaXIiLCJwYWlyIiwidmFsaWRhdGVDbG9zZSIsImVycm9yTm9kZSIsImNoYXJBdCIsImNvbW1lbnQiLCJkaWciLCJpc0xpdGVyYWwiLCJlc2NhcGVGbGFnIiwiZXNjYXBlZCIsIm9wZW5SYXdCbG9jayIsImNvbnRlbnRzIiwib3BlbkJsb2NrIiwiaW52ZXJzZUFuZFByb2dyYW0iLCJpbnZlcnRlZCIsInN0YXRlbWVudHMiLCJmaXJzdExvYyIsImxhc3RMb2MiLCJfYXN0IiwiX2FzdDIiLCJlcXVhbHMiLCJvdGhlciIsIm9wY29kZXMiLCJvcGNvZGUiLCJvdGhlck9wY29kZSIsImFyZ0VxdWFscyIsImNoaWxkcmVuIiwiZ3VpZCIsInNvdXJjZU5vZGUiLCJzdHJpbmdQYXJhbXMiLCJ0cmFja0lkcyIsImtub3duSGVscGVycyIsImhlbHBlck1pc3NpbmciLCJibG9ja0hlbHBlck1pc3NpbmciLCJ1bmxlc3MiLCJjb21waWxlUHJvZ3JhbSIsImNoaWxkQ29tcGlsZXIiLCJib2R5TGVuZ3RoIiwiaXNTaW1wbGUiLCJ0cmFuc2Zvcm1MaXRlcmFsVG9QYXRoIiwiY2xhc3NpZnlTZXhwciIsImhlbHBlclNleHByIiwic2ltcGxlU2V4cHIiLCJhbWJpZ3VvdXNTZXhwciIsInNldHVwRnVsbE11c3RhY2hlUGFyYW1zIiwiZXhwbGljaXRQYXJ0aWFsQ29udGV4dCIsInBhcnRpYWxOYW1lIiwiaXNEeW5hbWljIiwicHJldmVudEluZGVudCIsIm5vRXNjYXBlIiwiY29udGVudCIsInNleHByIiwiaXNCbG9jayIsImtub3duSGVscGVyc09ubHkiLCJmYWxzeSIsImFkZERlcHRoIiwic2NvcGVkIiwiYmxvY2tQYXJhbUlkIiwiYmxvY2tQYXJhbUluZGV4IiwibnVtYmVyIiwiYm9vbCIsInB1c2hQYXJhbSIsImlzQmxvY2tQYXJhbSIsImlzSGVscGVyIiwiaXNFbGlnaWJsZSIsIl9uYW1lIiwicHVzaFBhcmFtcyIsInZhbCIsImJsb2NrUGFyYW1DaGlsZCIsIm9taXRFbXB0eSIsImNvbXBhdCIsImVudmlyb25tZW50IiwiY29tcGlsZWQiLCJjb21waWxlSW5wdXQiLCJleGVjT3B0aW9ucyIsInNldHVwT3B0aW9ucyIsImxpdGVyYWwiLCJfY29kZUdlbiIsIl9jb2RlR2VuMiIsIkxpdGVyYWwiLCJuYW1lTG9va3VwIiwiaW50ZXJuYWxOYW1lTG9va3VwIiwiZGVwdGhlZExvb2t1cCIsImFsaWFzYWJsZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXZpc2lvbiIsInZlcnNpb25zIiwiYXBwZW5kVG9CdWZmZXIiLCJsb2NhdGlvbiIsImV4cGxpY2l0Iiwid3JhcCIsImluaXRpYWxpemVCdWZmZXIiLCJxdW90ZWRTdHJpbmciLCJsb29rdXBQcm9wZXJ0eUZ1bmN0aW9uSXNVc2VkIiwiYXNPYmplY3QiLCJpc0NoaWxkIiwiZW52aXJvbm1lbnRzIiwicHJlYW1ibGUiLCJzdGFja1Nsb3QiLCJzdGFja1ZhcnMiLCJhbGlhc2VzIiwicmVnaXN0ZXJzIiwibGlzdCIsImhhc2hlcyIsImNvbXBpbGVTdGFjayIsImlubGluZVN0YWNrIiwiY29tcGlsZUNoaWxkcmVuIiwiY3VycmVudExvY2F0aW9uIiwicHVzaFNvdXJjZSIsInByZXBlbmQiLCJsb29rdXBQcm9wZXJ0eUZ1bmN0aW9uVmFyRGVjbGFyYXRpb24iLCJtZXJnZSIsImNyZWF0ZUZ1bmN0aW9uQ29udGV4dCIsIl9jb250ZXh0Iiwib2JqZWN0TGl0ZXJhbCIsInRvU3RyaW5nV2l0aFNvdXJjZU1hcCIsImZpbGUiLCJkZXN0TmFtZSIsIm1hcCIsImxhc3RDb250ZXh0IiwiX3RoaXMiLCJ2YXJEZWNsYXJhdGlvbnMiLCJsb2NhbHMiLCJhbGlhc0NvdW50IiwiYWxpYXMiLCJyZWZlcmVuY2VDb3VudCIsIm1lcmdlU291cmNlIiwiYXBwZW5kT25seSIsImZvcmNlQnVmZmVyIiwiYXBwZW5kRmlyc3QiLCJzb3VyY2VTZWVuIiwiYnVmZmVyU3RhcnQiLCJidWZmZXJFbmQiLCJhZGQiLCJ0cmltIiwiYmxvY2tWYWx1ZSIsImNvbnRleHROYW1lIiwic2V0dXBIZWxwZXJBcmdzIiwiYmxvY2tOYW1lIiwiZnVuY3Rpb25DYWxsIiwiYW1iaWd1b3VzQmxvY2tWYWx1ZSIsImZsdXNoSW5saW5lIiwidG9wU3RhY2siLCJsYXN0SGVscGVyIiwiYXBwZW5kQ29udGVudCIsInBlbmRpbmdDb250ZW50IiwicGVuZGluZ0xvY2F0aW9uIiwiYXBwZW5kIiwiaXNJbmxpbmUiLCJyZXBsYWNlU3RhY2siLCJsb2NhbCIsImFwcGVuZEVzY2FwZWQiLCJnZXRDb250ZXh0IiwicHVzaENvbnRleHQiLCJwdXNoU3RhY2tMaXRlcmFsIiwibG9va3VwT25Db250ZXh0IiwicmVzb2x2ZVBhdGgiLCJsb29rdXBCbG9ja1BhcmFtIiwibG9va3VwRGF0YSIsIl90aGlzMiIsImFzc3VtZU9iamVjdHMiLCJzdHJpY3RMb29rdXAiLCJyZXNvbHZlUG9zc2libGVMYW1iZGEiLCJwdXNoU3RyaW5nUGFyYW0iLCJwdXNoU3RyaW5nIiwiZW1wdHlIYXNoIiwicHVzaEhhc2giLCJ2YWx1ZXMiLCJ0eXBlcyIsImNvbnRleHRzIiwicG9wSGFzaCIsInB1c2hMaXRlcmFsIiwicHVzaFByb2dyYW0iLCJwcm9ncmFtRXhwcmVzc2lvbiIsInBhcmFtU2l6ZSIsImZvdW5kRGVjb3JhdG9yIiwiaW52b2tlSGVscGVyIiwibm9uSGVscGVyIiwic2V0dXBIZWxwZXIiLCJwb3NzaWJsZUZ1bmN0aW9uQ2FsbHMiLCJmdW5jdGlvbkxvb2t1cENvZGUiLCJpdGVtc1NlcGFyYXRlZEJ5IiwiY2FsbFBhcmFtcyIsIml0ZW1zIiwiaW52b2tlS25vd25IZWxwZXIiLCJpbnZva2VBbWJpZ3VvdXMiLCJoZWxwZXJDYWxsIiwidXNlUmVnaXN0ZXIiLCJwYXJhbXNJbml0Iiwic2V0dXBQYXJhbXMiLCJhc3NpZ25Ub0hhc2giLCJwdXNoSWQiLCJjaGlsZCIsImV4aXN0aW5nIiwibWF0Y2hFeGlzdGluZ1Byb2dyYW0iLCJwcm9ncmFtUGFyYW1zIiwiZXhwciIsIml0ZW0iLCJjYWxsYmFjayIsInByZWZpeCIsImNyZWF0ZWRTdGFjayIsInVzZWRMaXRlcmFsIiwidG9wIiwiaW5jclN0YWNrIiwidG9wU3RhY2tOYW1lIiwiZW50cnkiLCJ3cmFwcGVkIiwiaW5saW5lIiwiYmxvY2tIZWxwZXIiLCJmb3VuZEhlbHBlciIsImNhbGxDb250ZXh0Iiwib2JqZWN0QXJncyIsImhhc2hJZHMiLCJoYXNoVHlwZXMiLCJoYXNoQ29udGV4dHMiLCJnZW5lcmF0ZUFycmF5IiwicmVzZXJ2ZWRXb3JkcyIsImNvbXBpbGVyV29yZHMiLCJSRVNFUlZFRF9XT1JEUyIsImlzVmFsaWRKYXZhU2NyaXB0VmFyaWFibGVOYW1lIiwicmVxdWlyZVRlcm1pbmFsIiwiU291cmNlTm9kZSIsIlNvdXJjZU1hcCIsInJlcXVpcmUiLCJlcnIiLCJzcmNGaWxlIiwiY2h1bmtzIiwic3JjIiwiY29kZSIsImNhc3RDaHVuayIsImNodW5rIiwiY29kZUdlbiIsIkNvZGVHZW4iLCJlbXB0eSIsIml0ZXIiLCJnZW5lcmF0ZUxpc3QiLCJlbnRyaWVzIiwiSGVhZGVyIiwiZm9udGF3ZXNvbWUiLCJNYWluIiwidGl0bGUiLCJtYWluVGVtcCIsInVzZXJzQ29udGFjdHMiLCJyZW5kZXIiLCJ0b2dnbGVEZXRhaWxzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiXSwic291cmNlUm9vdCI6IiJ9