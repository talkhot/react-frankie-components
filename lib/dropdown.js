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

// TODO: make class toggle - menuOpen: React.PropTypes.bool
// TODO: pass link to go to

var Dropdown = (function (_React$Component) {
  function Dropdown() {
    _classCallCheck(this, Dropdown);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Dropdown, _React$Component);

  _createClass(Dropdown, [{
    key: 'handleDropdown',
    value: function handleDropdown() {
      // Find our content node
      var node = _react2['default'].findDOMNode(this.refs.contents);
      // toggle visabilty of the dropdown menu
      node.style.display = !node.style.display ? 'block' : '';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var name = _props.name;
      var arrow = _props.arrow;
      var hover = _props.hover;
      var clickStayOpen = _props.clickStayOpen;
      var alignment = _props.alignment;

      var props = _objectWithoutProperties(_props, ['className', 'name', 'arrow', 'hover', 'clickStayOpen', 'alignment']);

      var elmArrow = arrow ? _react2['default'].createElement('i', { className: 'arrow' }) : null;
      var handleClickOpen = clickStayOpen ? this.handleDropdown.bind(this) : null;
      var liCls = (0, _classnames2['default'])('menu-dropdown', className, alignment === 'right' && 'menu-dropdown-right', hover && 'menu-allow-hover');

      return _react2['default'].createElement(
        'li',
        { className: liCls },
        _react2['default'].createElement(
          'a',
          { className: 'menu-dropdown-heading', onClick: handleClickOpen },
          _react2['default'].createElement(
            'span',
            null,
            name
          ),
          elmArrow
        ),
        _react2['default'].createElement('ul', _extends({ className: 'menu-children', ref: 'contents' }, props))
      );
    }
  }], [{
    key: 'defaultProps',
    value: {
      clickStayOpen: true,
      arrow: true,
      hover: true
    },
    enumerable: true
  }]);

  return Dropdown;
})(_react2['default'].Component);

exports['default'] = Dropdown;
module.exports = exports['default'];