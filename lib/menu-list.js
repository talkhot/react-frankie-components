'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var MenuList = (function (_React$Component) {
  function MenuList() {
    _classCallCheck(this, MenuList);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(MenuList, _React$Component);

  _createClass(MenuList, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('ul', this.props);
    }
  }]);

  return MenuList;
})(_react2['default'].Component);

exports['default'] = MenuList;
module.exports = exports['default'];