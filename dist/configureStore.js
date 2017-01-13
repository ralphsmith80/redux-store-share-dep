(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'redux', 'redux-thunk', 'redux-devtools-extension/developmentOnly', './reducers'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('redux'), require('redux-thunk'), require('redux-devtools-extension/developmentOnly'), require('./reducers'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.redux, global.reduxThunk, global.developmentOnly, global.reducers);
    global.configureStore = mod.exports;
  }
})(this, function (exports, _redux, _reduxThunk, _developmentOnly, _reducers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = configureStore;

  var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

  var _reducers2 = _interopRequireDefault(_reducers);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var middlewares = [_reduxThunk2.default];
  var middlewareEnhancer = _redux.applyMiddleware.apply(undefined, middlewares);
  var storeEnhancers = [middlewareEnhancer];
  var composedEnhancer = _developmentOnly.composeWithDevTools.apply(undefined, storeEnhancers);

  function configureStore() {
    return (0, _redux.createStore)(_reducers2.default, composedEnhancer);
  }
});