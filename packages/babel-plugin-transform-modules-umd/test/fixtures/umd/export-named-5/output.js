(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.input = mod.exports;
  }
})(typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.bar = _exports.foo = void 0;
  var foo, bar;
  _exports.bar = bar;
  _exports.foo = foo;
});
