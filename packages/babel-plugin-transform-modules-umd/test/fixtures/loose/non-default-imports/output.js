(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./lib/render"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./lib/render"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.render);
    global.input = mod.exports;
  }
})(typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : this, function (_render) {
  "use strict";
});
