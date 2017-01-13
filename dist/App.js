(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-redux', './reducers'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-redux'), require('./reducers'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactRedux, global.reducers);
    global.App = mod.exports;
  }
})(this, function (exports, _react, _reactRedux, _reducers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
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

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
      _classCallCheck(this, App);

      return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(
          'div',
          { className: 'App', onClick: function onClick() {
              console.log('child click');
              _this2.props.getGroups('groups');
            } },
          _react2.default.createElement(
            'p',
            { className: 'App-intro' },
            'I\'m the child Component. You can do what you want with me!'
          )
        );
      }
    }]);

    return App;
  }(_react.Component);

  var mapStateToProps = function mapStateToProps(state) {
    return {
      groups: state.groups
    };
  };
  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
      getGroups: function getGroups(resolved) {
        dispatch((0, _reducers.requestGroups)(resolved));
      }
    };
  };
  exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);
});