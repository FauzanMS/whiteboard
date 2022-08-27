"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _fabric = require("fabric");

var _PdfReader = _interopRequireDefault(require("../PdfReader"));

var _cursors = _interopRequireDefault(require("./cursors"));

var _eraser = _interopRequireDefault(require("./images/eraser.svg"));

var _HorizontalRule = _interopRequireDefault(require("@mui/icons-material/HorizontalRule"));

var _Crop = _interopRequireDefault(require("@mui/icons-material/Crop169"));

var _ChangeHistory = _interopRequireDefault(require("@mui/icons-material/ChangeHistory"));

var _Create = _interopRequireDefault(require("@mui/icons-material/Create"));

var _RadioButtonUnchecked = _interopRequireDefault(require("@mui/icons-material/RadioButtonUnchecked"));

var _TitleRounded = _interopRequireDefault(require("@mui/icons-material/TitleRounded"));

var _brush3x = _interopRequireDefault(require("./images/brush@3x.png"));

var _pencilCreate3x = _interopRequireDefault(require("./images/pencil-create@3x.png"));

var _rotateCcw3x = _interopRequireDefault(require("./images/rotate-ccw@3x.png"));

var _rotateCw3x = _interopRequireDefault(require("./images/rotate-cw@3x.png"));

var _Group = _interopRequireDefault(require("./images/Group 6949.png"));

var _Group2 = _interopRequireDefault(require("./images/Group 6948.png"));

var _thickness = _interopRequireDefault(require("./images/thickness.png"));

var _Group3 = _interopRequireDefault(require("./images/Group 6946.png"));

var _ArrowForwardIos = _interopRequireDefault(require("@mui/icons-material/ArrowForwardIos"));

var _ArrowBackIosNew = _interopRequireDefault(require("@mui/icons-material/ArrowBackIosNew"));

var _PictureAsPdf = _interopRequireDefault(require("@mui/icons-material/PictureAsPdf"));

require("./eraserBrush");

var _indexModule = _interopRequireDefault(require("./index.module.scss"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _Button = _interopRequireDefault(require("@mui/material/Button"));

var _SpeedDial = _interopRequireDefault(require("@mui/material/SpeedDial"));

var _SpeedDialAction = _interopRequireDefault(require("@mui/material/SpeedDialAction"));

var _SpeedDialIcon = _interopRequireDefault(require("@mui/material/SpeedDialIcon"));

var _fileSaver = require("file-saver");

var _Slider = _interopRequireDefault(require("./components/Slider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var drawInstance = null;
var origX;
var origY;
var mouseDown = false;
var options = {
  currentMode: '',
  currentColor: "#000000",
  currentWidth: 5,
  fill: false,
  group: {}
};
var backUpCanvas = "";
var modes = {
  RECTANGLE: 'RECTANGLE',
  TRIANGLE: 'TRIANGLE',
  ELLIPSE: 'ELLIPSE',
  LINE: 'LINE',
  PENCIL: 'PENCIL',
  ERASER: 'ERASER'
};

var initCanvas = function initCanvas(width, height) {
  var canvas = new _fabric.fabric.Canvas('canvas', {
    height: height,
    width: width
  });
  _fabric.fabric.Object.prototype.transparentCorners = false;
  _fabric.fabric.Object.prototype.cornerStyle = 'circle';
  _fabric.fabric.Object.prototype.borderColor = '#4447A9';
  _fabric.fabric.Object.prototype.cornerColor = '#4447A9';
  _fabric.fabric.Object.prototype.cornerSize = 6;
  _fabric.fabric.Object.prototype.padding = 10;
  _fabric.fabric.Object.prototype.borderDashArray = [5, 5];
  canvas.on('object:added', function (e) {
    e.target.on('mousedown', removeObject(canvas));
  });
  canvas.on('path:created', function (e) {
    e.path.on('mousedown', removeObject(canvas));
  });
  return canvas;
};

function removeObject(canvas) {
  return function (e) {
    backUpCanvas = canvas.toJSON();

    if (options.currentMode === modes.ERASER) {
      canvas.remove(e.target);
    }
  };
}

function stopDrawing() {
  mouseDown = false;
}

function removeCanvasListener(canvas) {
  canvas.off('mouse:down');
  canvas.off('mouse:move');
  canvas.off('mouse:up');
}
/*  ==== line  ==== */


function createLine(canvas) {
  if (modes.currentMode !== modes.LINE) {
    options.currentMode = modes.LINE;
    removeCanvasListener(canvas);
    canvas.on('mouse:down', startAddLine(canvas));
    canvas.on('mouse:move', startDrawingLine(canvas));
    canvas.on('mouse:up', stopDrawing);
    canvas.selection = false;
    canvas.hoverCursor = 'auto';
    canvas.isDrawingMode = false;
    canvas.getObjects().map(function (item) {
      return item.set({
        selectable: false
      });
    });
    canvas.discardActiveObject().requestRenderAll();
  }
}

function startAddLine(canvas) {
  return function (_ref) {
    var e = _ref.e;
    mouseDown = true;
    var pointer = canvas.getPointer(e);
    drawInstance = new _fabric.fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y], {
      strokeWidth: options.currentWidth,
      stroke: options.currentColor,
      selectable: false
    });
    canvas.add(drawInstance);
    canvas.requestRenderAll();
  };
}

function startDrawingLine(canvas) {
  return function (_ref2) {
    var e = _ref2.e;

    if (mouseDown) {
      var pointer = canvas.getPointer(e);
      drawInstance.set({
        x2: pointer.x,
        y2: pointer.y
      });
      drawInstance.setCoords();
      canvas.requestRenderAll();
    }
  };
}
/* ==== rectangle ==== */


function createRect(canvas) {
  if (options.currentMode !== modes.RECTANGLE) {
    options.currentMode = modes.RECTANGLE;
    removeCanvasListener(canvas);
    canvas.on('mouse:down', startAddRect(canvas));
    canvas.on('mouse:move', startDrawingRect(canvas));
    canvas.on('mouse:up', stopDrawing);
    canvas.selection = false;
    canvas.hoverCursor = 'auto';
    canvas.isDrawingMode = false;
    canvas.getObjects().map(function (item) {
      return item.set({
        selectable: false
      });
    });
    canvas.discardActiveObject().requestRenderAll();
  }
}

function startAddRect(canvas) {
  return function (_ref3) {
    var e = _ref3.e;
    mouseDown = true;
    var pointer = canvas.getPointer(e);
    origX = pointer.x;
    origY = pointer.y;
    drawInstance = new _fabric.fabric.Rect({
      stroke: options.currentColor,
      strokeWidth: options.currentWidth,
      fill: options.fill ? options.currentColor : 'transparent',
      left: origX,
      top: origY,
      width: 0,
      height: 0,
      selectable: false
    });
    canvas.add(drawInstance);
    drawInstance.on('mousedown', function (e) {
      if (options.currentMode === modes.ERASER) {
        canvas.remove(e.target);
      }
    });
  };
}

function startDrawingRect(canvas) {
  return function (_ref4) {
    var e = _ref4.e;

    if (mouseDown) {
      var pointer = canvas.getPointer(e);

      if (pointer.x < origX) {
        drawInstance.set('left', pointer.x);
      }

      if (pointer.y < origY) {
        drawInstance.set('top', pointer.y);
      }

      drawInstance.set({
        width: Math.abs(pointer.x - origX),
        height: Math.abs(pointer.y - origY)
      });
      drawInstance.setCoords();
      canvas.renderAll();
    }
  };
}
/* ==== Ellipse ==== */


function createEllipse(canvas) {
  if (options.currentMode !== modes.ELLIPSE) {
    options.currentMode = modes.ELLIPSE;
    removeCanvasListener(canvas);
    canvas.on('mouse:down', startAddEllipse(canvas));
    canvas.on('mouse:move', startDrawingEllipse(canvas));
    canvas.on('mouse:up', stopDrawing);
    canvas.selection = false;
    canvas.hoverCursor = 'auto';
    canvas.isDrawingMode = false;
    canvas.getObjects().map(function (item) {
      return item.set({
        selectable: false
      });
    });
    canvas.discardActiveObject().requestRenderAll();
  }
}

function startAddEllipse(canvas) {
  return function (_ref5) {
    var e = _ref5.e;
    mouseDown = true;
    var pointer = canvas.getPointer(e);
    origX = pointer.x;
    origY = pointer.y;
    drawInstance = new _fabric.fabric.Ellipse({
      stroke: options.currentColor,
      strokeWidth: options.currentWidth,
      fill: options.fill ? options.currentColor : 'transparent',
      left: origX,
      top: origY,
      cornerSize: 7,
      objectCaching: false,
      selectable: false
    });
    canvas.add(drawInstance);
  };
}

function startDrawingEllipse(canvas) {
  return function (_ref6) {
    var e = _ref6.e;

    if (mouseDown) {
      var pointer = canvas.getPointer(e);

      if (pointer.x < origX) {
        drawInstance.set('left', pointer.x);
      }

      if (pointer.y < origY) {
        drawInstance.set('top', pointer.y);
      }

      drawInstance.set({
        rx: Math.abs(pointer.x - origX) / 2,
        ry: Math.abs(pointer.y - origY) / 2
      });
      drawInstance.setCoords();
      canvas.renderAll();
    }
  };
}
/* === triangle === */


function createTriangle(canvas) {
  removeCanvasListener(canvas);
  canvas.on('mouse:down', startAddTriangle(canvas));
  canvas.on('mouse:move', startDrawingTriangle(canvas));
  canvas.on('mouse:up', stopDrawing);
  canvas.selection = false;
  canvas.hoverCursor = 'auto';
  canvas.isDrawingMode = false;
  canvas.getObjects().map(function (item) {
    return item.set({
      selectable: false
    });
  });
  canvas.discardActiveObject().requestRenderAll();
}

function startAddTriangle(canvas) {
  return function (_ref7) {
    var e = _ref7.e;
    mouseDown = true;
    options.currentMode = modes.TRIANGLE;
    var pointer = canvas.getPointer(e);
    origX = pointer.x;
    origY = pointer.y;
    drawInstance = new _fabric.fabric.Triangle({
      stroke: options.currentColor,
      strokeWidth: options.currentWidth,
      fill: options.fill ? options.currentColor : 'transparent',
      left: origX,
      top: origY,
      width: 0,
      height: 0,
      selectable: false
    });
    canvas.add(drawInstance);
  };
}

function startDrawingTriangle(canvas) {
  return function (_ref8) {
    var e = _ref8.e;

    if (mouseDown) {
      var pointer = canvas.getPointer(e);

      if (pointer.x < origX) {
        drawInstance.set('left', pointer.x);
      }

      if (pointer.y < origY) {
        drawInstance.set('top', pointer.y);
      }

      drawInstance.set({
        width: Math.abs(pointer.x - origX),
        height: Math.abs(pointer.y - origY)
      });
      drawInstance.setCoords();
      canvas.renderAll();
    }
  };
}

function createText(canvas) {
  removeCanvasListener(canvas);
  canvas.isDrawingMode = false;
  var text = new _fabric.fabric.Textbox('text', {
    left: 100,
    top: 100,
    fill: options.currentColor,
    editable: true
  });
  canvas.add(text);
  canvas.renderAll();
}

function changeToErasingMode(canvas) {
  if (options.currentMode !== modes.ERASER) {
    removeCanvasListener(canvas);
    canvas.isDrawingMode = false;
    options.currentMode = modes.ERASER;
    canvas.hoverCursor = "url(" + (0, _cursors.default)({
      type: 'eraser'
    }) + "), default";
  }
}

function onSelectMode(canvas) {
  options.currentMode = '';
  canvas.isDrawingMode = false;
  removeCanvasListener(canvas);
  canvas.getObjects().map(function (item) {
    return item.set({
      selectable: true
    });
  });
  canvas.hoverCursor = 'all-scroll';
}

function clearCanvas(canvas) {
  canvas.getObjects().forEach(function (item) {
    if (item !== canvas.backgroundImage) {
      canvas.remove(item);
    }
  });
}

function clearCanvasNextPage(canvas) {
  canvas.getObjects().forEach(function (item) {
    canvas.remove(item);
  });
}

function draw(canvas) {
  if (options.currentMode !== modes.PENCIL) {
    removeCanvasListener(canvas);
    options.currentMode = modes.PENCIL; // canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);

    canvas.freeDrawingBrush.width = parseInt(options.currentWidth, 10) || 1;
    canvas.freeDrawingBrush.color = options.currentColor;
    canvas.isDrawingMode = true;
  }
}

function handleResize(callback) {
  var resize_ob = new ResizeObserver(callback);
  return resize_ob;
}

function resizeCanvas(canvas, whiteboard) {
  return function () {
    var ratio = canvas.getWidth() / canvas.getHeight();
    var whiteboardWidth = whiteboard.clientWidth;
    var scale = whiteboardWidth / canvas.getWidth();
    var zoom = canvas.getZoom() * scale;
    canvas.setDimensions({
      width: whiteboardWidth,
      height: whiteboardWidth / ratio
    });
    canvas.setViewportTransform([zoom, 0, 0, zoom, 0, 0]);
  };
}

var Whiteboard = function Whiteboard(_ref9) {
  var _color$;

  var _ref9$aspectRatio = _ref9.aspectRatio,
      aspectRatio = _ref9$aspectRatio === void 0 ? 4 / 3 : _ref9$aspectRatio,
      setFiles = _ref9.setFiles,
      color = _ref9.color,
      setJSON = _ref9.setJSON,
      _ref9$src = _ref9.src,
      src = _ref9$src === void 0 ? undefined : _ref9$src,
      json = _ref9.json;

  var _useState = (0, _react.useState)((_color$ = color[0]) == null ? void 0 : _color$.color),
      currColor = _useState[0],
      setCurrColor = _useState[1];

  var _useState2 = (0, _react.useState)(null),
      canvas = _useState2[0],
      setCanvas = _useState2[1];

  var _useState3 = (0, _react.useState)(5),
      brushWidth = _useState3[0],
      setBrushWidth = _useState3[1];

  var _useState4 = (0, _react.useState)({}),
      pages = _useState4[0],
      setPages = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      canvasPage = _useState5[0],
      setCanvasPage = _useState5[1];

  var _useState6 = (0, _react.useState)(0),
      index = _useState6[0],
      setIndex = _useState6[1];

  var _useState7 = (0, _react.useState)({
    file: '',
    totalPages: null,
    currentPageNumber: 1,
    currentPage: ''
  }),
      fileReaderInfo = _useState7[0],
      setFileReaderInfo = _useState7[1];

  (0, _react.useEffect)(function () {
    options.currentColor = currColor;
  }, [color]);
  var canvasRef = (0, _react.useRef)(null);
  var whiteboardRef = (0, _react.useRef)(null);
  var uploadPdfRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (!canvas && canvasRef.current) {
      var _canvas = initCanvas(whiteboardRef.current.clientWidth, whiteboardRef.current.clientWidth / aspectRatio);

      setCanvas(function () {
        return _canvas;
      });
      handleResize(resizeCanvas(_canvas, whiteboardRef.current)).observe(whiteboardRef.current);
    }
  }, [canvasRef]);
  (0, _react.useEffect)(function () {
    if (canvas) {
      var center = canvas.getCenter();

      _fabric.fabric.Image.fromURL(fileReaderInfo.currentPage, function (img) {
        img.scaleToHeight(canvas.height);
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
          top: center.top,
          left: center.left,
          originX: 'center',
          originY: 'center'
        });
        canvas.renderAll();
      });
    }
  }, [fileReaderInfo.currentPage]);
  (0, _react.useEffect)(function () {
    var fetchImg = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                clearCanvasNextPage(canvas);
                fetch(src).then(function (response) {
                  return response.blob();
                }).then(function (imageBlob) {
                  var imageObjectURL = URL.createObjectURL(imageBlob);

                  _fabric.fabric.Image.fromURL(imageObjectURL, function (img) {
                    img.scaleToHeight(window.innerWidth > 500 ? window.innerWidth : 360);
                    img.scaleToWidth(window.innerWidth > 500 ? window.innerHeight - 150 > 1000 ? 900 : window.innerHeight - 150 : 360);
                    img.evented = false;
                    img.selectable = false;
                    img.center().setCoords(); // canvas.add(img);

                    canvas.centerObject(img);
                    canvas.setBackgroundImage(img);
                    canvas.setBackgroundColor("#fff");
                  });
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchImg() {
        return _ref10.apply(this, arguments);
      };
    }();

    if (src && canvas) fetchImg();
  }, [src, canvas]);
  (0, _react.useEffect)(function () {
    var fetchImg = /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                clearCanvas(canvas);
                canvas.loadFromJSON(json, canvas.renderAll.bind(canvas), function (o, object) {
                  object.set('selectable', false);
                  object.set('evented', false);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function fetchImg() {
        return _ref11.apply(this, arguments);
      };
    }();

    if (json && canvas) fetchImg();
  }, [json, canvas]);

  function changeCurrentWidth(value) {
    var intValue = parseInt(value);
    options.currentWidth = intValue;
    canvas.freeDrawingBrush.width = intValue;
    setBrushWidth(function () {
      return intValue;
    });
  }

  function changeCurrentColor(e) {
    options.currentColor = e;
    canvas.freeDrawingBrush.color = e;
    setCurrColor(e);
  }

  function onSaveCanvasAsImage() {
    var _extends4;

    if (src) {
      var imageURI = canvas.toDataURL("image/jpg");
      (0, _fileSaver.saveAs)(imageURI, 'pic.jpg');
    }

    canvasRef.current.toBlob(function (blob) {
      var _extends2, _extends3;

      setPages(_extends({}, pages, (_extends2 = {}, _extends2[index] = blob, _extends2)));
      setFiles(_extends({}, pages, (_extends3 = {}, _extends3[index] = blob, _extends3)));
    });
    setJSON(_extends({}, canvasPage, (_extends4 = {}, _extends4[index] = canvas.toJSON(), _extends4)));
    setPages({});
    clearCanvas(canvas);
    updateFileReaderInfo({
      file: "",
      currentPageNumber: 1
    });
  }

  function nextPage(canvas) {
    var _extends5;

    backUpCanvas = "";
    setCanvasPage(_extends({}, canvasPage, (_extends5 = {}, _extends5[index] = canvas.toJSON(), _extends5)));
    canvasRef.current.toBlob(function (blob) {
      var _extends6;

      setPages(_extends({}, pages, (_extends6 = {}, _extends6[index] = blob, _extends6)));
    });
    if (canvasPage[index + 1] !== undefined) canvas.loadFromJSON(canvasPage[index + 1]);else clearCanvasNextPage(canvas);
    setIndex(index + 1);
  }

  function previousPage(canvas) {
    var _extends7;

    backUpCanvas = "";

    if (index - 1 < 0) {
      return;
    }

    setCanvasPage(_extends({}, canvasPage, (_extends7 = {}, _extends7[index] = canvas.toJSON(), _extends7)));
    canvasRef.current.toBlob(function (blob) {
      var _extends8;

      setPages(_extends({}, pages, (_extends8 = {}, _extends8[index] = blob, _extends8)));
    });
    canvas.loadFromJSON(canvasPage[index - 1]);
    setIndex(index - 1);
  }

  function redoAll() {
    canvas.loadFromJSON(backUpCanvas);
  }

  function undoCanvas(canvas) {
    var length = canvas.getObjects().length - 1;
    backUpCanvas = canvas.toJSON();

    if (canvas.getObjects()[length] !== canvas.backgroundImage || canvas.getObjects()[length] !== canvas.Image) {
      canvas.remove(canvas.getObjects()[length]);
    }
  }

  function onFileChange(event) {
    updateFileReaderInfo({
      file: event.target.files[0],
      currentPageNumber: 1
    });
  }

  var _React$useState = _react.default.useState(false),
      pdfViewer = _React$useState[0],
      setPdfViewer = _React$useState[1];

  function updateFileReaderInfo(data) {
    setFileReaderInfo(_extends({}, fileReaderInfo, data));
  }

  var toolbarCommander = function toolbarCommander(props, canvas, options) {
    setOpenDraw(false);

    switch (props) {
      case modes.LINE:
        createLine(canvas);
        break;

      case modes.RECTANGLE:
        createRect(canvas);
        break;

      case modes.ELLIPSE:
        createEllipse(canvas);
        break;

      case modes.TRIANGLE:
        createTriangle(canvas, options);
        break;

      case modes.PENCIL:
        draw(canvas);
        break;

      case "TEXT":
        createText(canvas);
        break;

      case "SELECT":
        onSelectMode(canvas);
        break;

      case modes.ERASER:
        changeToErasingMode(canvas);
        break;

      case "CLEAR":
        clearCanvas(canvas);
        break;
    }
  };

  var _useState8 = (0, _react.useState)(false),
      openDraw = _useState8[0],
      setOpenDraw = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      openThickness = _useState9[0],
      setOpenThickness = _useState9[1];

  var _useState10 = (0, _react.useState)(false),
      openColor = _useState10[0],
      setOpenColor = _useState10[1];

  return /*#__PURE__*/_react.default.createElement("div", {
    ref: whiteboardRef,
    className: _indexModule.default.whiteboard
  }, /*#__PURE__*/_react.default.createElement("canvas", {
    ref: canvasRef,
    id: "canvas"
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, !src && /*#__PURE__*/_react.default.createElement("div", {
    className: _indexModule.default.nextFixedButton
  }, " ", /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: _indexModule.default.floatingButtonsNextPrev,
    onClick: function onClick() {
      return previousPage(canvas);
    }
  }, /*#__PURE__*/_react.default.createElement(_ArrowBackIosNew.default, {
    className: _indexModule.default.blackIcon
  })), " ", /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: _indexModule.default.floatingButtonsNextPrev,
    onClick: function onClick() {
      return nextPage(canvas);
    }
  }, /*#__PURE__*/_react.default.createElement(_ArrowForwardIos.default, {
    className: _indexModule.default.blackIcon
  })), " ")), pdfViewer && /*#__PURE__*/_react.default.createElement(_PdfReader.default, {
    savePage: function savePage() {
      return nextPage(canvas);
    },
    fileReaderInfo: fileReaderInfo,
    updateFileReaderInfo: updateFileReaderInfo
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _indexModule.default.toolbarWithColor,
    style: {
      backgroundColor: openDraw || openColor ? 'transparent' : 'white'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _indexModule.default.toolbar
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: openThickness ? _indexModule.default.speeddialDivOpen : _indexModule.default.speeddialDivClose
  }, /*#__PURE__*/_react.default.createElement(_SpeedDial.default, {
    open: false,
    direction: "up",
    ariaLabel: "SpeedDial openIcon example",
    onClick: function onClick() {
      return setOpenThickness(!openThickness);
    },
    icon: /*#__PURE__*/_react.default.createElement(_SpeedDialIcon.default, {
      icon: /*#__PURE__*/_react.default.createElement(_Box.default, {
        className: _indexModule.default.flexDiv
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: _thickness.default
      }))
    })
  }), /*#__PURE__*/_react.default.createElement(_Slider.default, {
    changeHandler: function changeHandler(v) {
      return changeCurrentWidth(v);
    },
    open: openThickness && !openDraw && !openColor,
    value: options.currentWidth
  })), /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: openDraw ? _indexModule.default.speeddialDivOpen : _indexModule.default.speeddialDivClose
  }, /*#__PURE__*/_react.default.createElement(_SpeedDial.default, {
    open: openDraw,
    onClick: function onClick() {
      setOpenDraw(!openDraw);
      setOpenColor(false);
      setOpenThickness(false);
    },
    direction: "up",
    ariaLabel: "SpeedDial openIcon example",
    icon: /*#__PURE__*/_react.default.createElement(_SpeedDialIcon.default, {
      icon: /*#__PURE__*/_react.default.createElement(_Box.default, {
        className: _indexModule.default.flexDiv
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: _pencilCreate3x.default
      }))
    })
  }, /*#__PURE__*/_react.default.createElement(_SpeedDialAction.default, {
    FabProps: {
      style: {
        boxShadow: 'none'
      }
    },
    icon: /*#__PURE__*/_react.default.createElement(_HorizontalRule.default, {
      className: _indexModule.default.blackSlantedIcon
    }),
    tooltipTitle: "Line",
    onClick: function onClick() {
      return toolbarCommander(modes.LINE, canvas);
    }
  }), /*#__PURE__*/_react.default.createElement(_SpeedDialAction.default, {
    FabProps: {
      style: {
        boxShadow: 'none'
      }
    },
    icon: /*#__PURE__*/_react.default.createElement(_Crop.default, {
      className: _indexModule.default.blackIcon
    }),
    tooltipTitle: "Rectangle",
    onClick: function onClick() {
      return toolbarCommander(modes.RECTANGLE, canvas);
    }
  }), /*#__PURE__*/_react.default.createElement(_SpeedDialAction.default, {
    FabProps: {
      style: {
        boxShadow: 'none'
      }
    },
    icon: /*#__PURE__*/_react.default.createElement(_RadioButtonUnchecked.default, {
      className: _indexModule.default.blackIcon
    }),
    tooltipTitle: "Ellipse",
    onClick: function onClick() {
      return toolbarCommander(modes.ELLIPSE, canvas);
    }
  }), /*#__PURE__*/_react.default.createElement(_SpeedDialAction.default, {
    FabProps: {
      style: {
        boxShadow: 'none'
      }
    },
    icon: /*#__PURE__*/_react.default.createElement(_ChangeHistory.default, {
      className: _indexModule.default.blackIcon
    }),
    tooltipTitle: "Triangle",
    onClick: function onClick() {
      return toolbarCommander(modes.TRIANGLE, canvas, options);
    }
  }), /*#__PURE__*/_react.default.createElement(_SpeedDialAction.default, {
    FabProps: {
      style: {
        boxShadow: 'none'
      }
    },
    icon: /*#__PURE__*/_react.default.createElement(_Create.default, {
      className: _indexModule.default.blackIcon
    }),
    tooltipTitle: "Pencil",
    onClick: function onClick() {
      return toolbarCommander(modes.PENCIL, canvas);
    }
  }), /*#__PURE__*/_react.default.createElement(_SpeedDialAction.default, {
    FabProps: {
      style: {
        boxShadow: 'none'
      }
    },
    icon: /*#__PURE__*/_react.default.createElement(_TitleRounded.default, {
      className: _indexModule.default.blackIcon
    }),
    tooltipTitle: "Text",
    onClick: function onClick() {
      return toolbarCommander("TEXT", canvas);
    }
  }))), /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: openColor ? _indexModule.default.speeddialColorDivOpen : _indexModule.default.speeddialColorDivClose
  }, /*#__PURE__*/_react.default.createElement(_SpeedDial.default, {
    open: openColor,
    onClick: function onClick() {
      setOpenColor(!openColor);
      setOpenDraw(false);
      setOpenThickness(false);
    },
    direction: "up",
    ariaLabel: "SpeedDial openIcon example",
    icon: /*#__PURE__*/_react.default.createElement(_SpeedDialIcon.default, {
      icon: /*#__PURE__*/_react.default.createElement(_Box.default, {
        className: _indexModule.default.flexDiv
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: _brush3x.default
      }))
    })
  }, color.map(function (col) {
    return /*#__PURE__*/_react.default.createElement(_SpeedDialAction.default, {
      key: col.color,
      FabProps: {
        style: {
          background: col.color,
          boxShadow: currColor === col.color && "0 0 10px black"
        }
      },
      className: "floating_buttons",
      tooltipTitle: col.title,
      onClick: function onClick() {
        changeCurrentColor(col.color);
        setOpenColor(!openColor);
      }
    });
  }))), /*#__PURE__*/_react.default.createElement(_SpeedDial.default, {
    open: false,
    onClick: function onClick() {
      return toolbarCommander(modes.ERASER, canvas);
    },
    direction: "up",
    icon: /*#__PURE__*/_react.default.createElement(_SpeedDialIcon.default, {
      icon: /*#__PURE__*/_react.default.createElement(_Box.default, {
        className: _indexModule.default.flexDiv
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: _eraser.default
      }))
    }),
    ariaLabel: "SpeedDial openIcon example"
  }), /*#__PURE__*/_react.default.createElement(_SpeedDial.default, {
    open: false,
    onClick: function onClick() {
      return undoCanvas(canvas);
    },
    direction: "up",
    ariaLabel: "SpeedDial openIcon example",
    icon: /*#__PURE__*/_react.default.createElement(_SpeedDialIcon.default, {
      icon: /*#__PURE__*/_react.default.createElement(_Box.default, {
        className: _indexModule.default.flexDiv
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: _rotateCcw3x.default
      }))
    })
  }), /*#__PURE__*/_react.default.createElement(_SpeedDial.default, {
    open: false,
    onClick: function onClick() {
      return redoAll(canvas);
    },
    direction: "up",
    icon: /*#__PURE__*/_react.default.createElement(_SpeedDialIcon.default, {
      icon: /*#__PURE__*/_react.default.createElement(_Box.default, {
        className: _indexModule.default.flexDiv
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: _rotateCw3x.default
      }))
    }),
    ariaLabel: "SpeedDial openIcon example"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _indexModule.default.upperToolBar
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _indexModule.default.uploadDropdown
  }, /*#__PURE__*/_react.default.createElement("input", {
    ref: uploadPdfRef,
    accept: ".pdf",
    type: "file",
    onChange: onFileChange
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: function onClick() {
      uploadPdfRef.current.click();
      setPdfViewer(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_PictureAsPdf.default, null))), /*#__PURE__*/_react.default.createElement("div", {
    className: _indexModule.default.upperToolBarFlex
  }, /*#__PURE__*/_react.default.createElement(_Button.default, null, /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: _indexModule.default.flexDiv
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _Group3.default
  }))), /*#__PURE__*/_react.default.createElement(_Button.default, null, /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: _indexModule.default.flexDiv
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _Group2.default
  }))), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: onSaveCanvasAsImage
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: _indexModule.default.flexDiv
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _Group.default
  }))))))));
};

Whiteboard.propTypes = {
  aspectRatio: _propTypes.default.number,
  setFiles: _propTypes.default.any,
  color: _propTypes.default.any,
  setJSON: _propTypes.default.any,
  src: _propTypes.default.any,
  json: _propTypes.default.any
};
var _default = Whiteboard;
exports.default = _default;