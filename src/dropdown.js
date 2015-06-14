import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

// TODO: make class toggle - menuOpen: React.PropTypes.bool
// TODO: pass link to go to
export default class Dropdown extends React.Component {
  static propTypes: {
    alignment: React.PropTypes.string,
    clickStayOpen: React.PropTypes.bool,
    arrow: React.PropTypes.bool,
    allowHover: React.PropTypes.bool
  }

  static defaultProps = {
    clickStayOpen: true,
    arrow: true,
    hover: true
  }

  handleDropdown() {
    // Find our content node
    let node = React.findDOMNode(this.refs.contents);
    // toggle visabilty of the dropdown menu
    node.style.display = !node.style.display ? 'block' : '';
  }

  render() {
    const {className, name, arrow, hover, clickStayOpen, alignment, ...props} = this.props;
    const elmArrow = arrow ? <i className='arrow'/> : null;
    const handleClickOpen = clickStayOpen ? this.handleDropdown.bind(this) : null;
    const liCls = classNames(
      'menu-dropdown', className,
      alignment === 'right' && 'menu-dropdown-right',
      hover && 'menu-allow-hover'
    );

    return (
      <li className={liCls}>
        <a className='menu-dropdown-heading' onClick={handleClickOpen}><span>{name}</span>{elmArrow}</a>
        <ul className='menu-children' ref='contents' {...props} />
      </li>
    );
  }
}
