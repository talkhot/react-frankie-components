'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Nav = (function (_React$Component) {
  function Nav() {
    _classCallCheck(this, Nav);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Nav, _React$Component);

  _createClass(Nav, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var noGutter = _props.noGutter;
      var noContainer = _props.noContainer;
      var fluidContainer = _props.fluidContainer;

      var props = _objectWithoutProperties(_props, ['className', 'noGutter', 'noContainer', 'fluidContainer']);

      var fluidCls = !noContainer ? fluidContainer ? 'container-fluid' : 'container' : null;

      var wrapperCls = (0, _classnames2['default'])('nav-wrapper', className);
      var containerCls = (0, _classnames2['default'])('nav-container', fluidCls, noGutter && 'no-gutter');

      return _react2['default'].createElement(
        'nav',
        { className: wrapperCls },
        _react2['default'].createElement('div', _extends({ className: containerCls }, props))
      );
    }
  }], [{
    key: 'defaultProps',
    value: {
      noGutter: false,
      noContainer: false,
      fluidContainer: true
    },
    enumerable: true
  }, {
    key: 'initialState',
    value: {
      expanded: true
    },
    enumerable: true
  }]);

  return Nav;
})(_react2['default'].Component);

exports['default'] = Nav;
module.exports = exports['default'];

// classes