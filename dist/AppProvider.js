(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-redux', './App'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-redux'), require('./App'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactRedux, global.App);
    global.AppProvider = mod.exports;
  }
})(this, function (exports, _react, _reactRedux, _App) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _App2 = _interopRequireDefault(_App);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var AppProvider = function AppProvider(props) {
    return _react2.default.createElement(
      _reactRedux.Provider,
      { store: props.store },
      _react2.default.createElement(_App2.default, null)
    );
  };
  exports.default = AppProvider;
});