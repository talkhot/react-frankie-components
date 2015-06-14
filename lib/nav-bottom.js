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

var NavBottom = (function (_React$Component) {
  function NavBottom() {
    _classCallCheck(this, NavBottom);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(NavBottom, _React$Component);

  _createClass(NavBottom, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;

      var props = _objectWithoutProperties(_props, ['className']);

      var cls = (0, _classnames2['default'])('nav-bottom', className);

      return _react2['default'].createElement('div', _extends({ className: cls }, props));
    }
  }]);

  return NavBottom;
})(_react2['default'].Component);

exports['default'] = NavBottom;
module.exports = exports['default'];