import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class MenuToggle extends React.Component {
  static propTypes: {
    expanded: React.PropTypes.bool.isRequired
  }

  render() {
    const {className, expanded, ...props} = this.props;
    const cls = classNames(
      'menu-toggle',
      expanded && 'open',
      className
    );

    return (
      <a className={cls} aria-label='menu-toggle' {...props}/>
    );
  }
}
