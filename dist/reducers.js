(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'redux'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('redux'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.redux);
    global.reducers = mod.exports;
  }
})(this, function (exports, _redux) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.requestGroups = requestGroups;


  // groups actionTypes
  var REQUEST_GROUPS = 'REQUEST_GROUPS';

  // groups reducers
  var groups = function groups() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      isFetching: false,
      groups: null
    };
    var action = arguments[1];

    console.log('child action');
    switch (action.type) {
      case REQUEST_GROUPS:
        return Object.assign({}, state, {
          isFetching: true,
          groups: action.groups
        });
      default:
        return state;
    }
  };

  // groups actions
  function requestGroups(groups) {
    return {
      type: REQUEST_GROUPS,
      groups: groups
    };
  }

  var reducers = (0, _redux.combineReducers)({
    groups: groups
  });

  exports.default = reducers;
});