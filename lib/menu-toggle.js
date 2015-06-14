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

var MenuToggle = (function (_React$Component) {
  function MenuToggle() {
    _classCallCheck(this, MenuToggle);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(MenuToggle, _React$Component);

  _createClass(MenuToggle, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var expanded = _props.expanded;

      var props = _objectWithoutProperties(_props, ['className', 'expanded']);

      var cls = (0, _classnames2['default'])('menu-toggle', expanded && 'open', className);

      return _react2['default'].createElement('a', _extends({ className: cls, 'aria-label': 'menu-toggle' }, props));
    }
  }]);

  return MenuToggle;
})(_react2['default'].Component);

exports['default'] = MenuToggle;
module.exports = exports['default'];