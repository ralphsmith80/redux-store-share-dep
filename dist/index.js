(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './AppProvider', './configureStore'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./AppProvider'), require('./configureStore'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.AppProvider, global.configureStore);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _AppProvider, _configureStore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _AppProvider2 = _interopRequireDefault(_AppProvider);

  var _configureStore2 = _interopRequireDefault(_configureStore);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var store = (0, _configureStore2.default)();

  var AppProvider = function AppProvider(props) {
    console.log(props);
    return _react2.default.createElement(_AppProvider2.default, { store: props.store || store });
  };
  exports.default = AppProvider;
});