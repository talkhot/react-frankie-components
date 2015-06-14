import React, {Component} from 'react';
import classNames from 'classnames';

export default class NavToggle extends React.Component {
  render() {
    const {className, ...props} = this.props;
    const cls = classNames('nav-top', className);

    return (
      <div className={cls} {...props}/>
    );
  }
}
