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

var ElmCloseIcon = (function (_Component) {
  function ElmCloseIcon() {
    _classCallCheck(this, ElmCloseIcon);

    if (_Component != null) {
      _Component.apply(this, arguments);
    }
  }

  _inherits(ElmCloseIcon, _Component);

  _createClass(ElmCloseIcon, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'span',
        { className: 'close-icon' },
        _react2['default'].createElement('s', { className: 'bar' }),
        _react2['default'].createElement('s', { className: 'bar' })
      );
    }
  }]);

  return ElmCloseIcon;
})(_react.Component);

exports['default'] = ElmCloseIcon;
module.exports = exports['default'];