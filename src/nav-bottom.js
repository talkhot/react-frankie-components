import React, {Component} from 'react';
import classNames from 'classnames';

export default class NavBottom extends React.Component {
  render() {
    const {className, ...props} = this.props;
    const cls = classNames('nav-bottom', className);

    return (
      <div className={cls} {...props}/>
    );
  }
}
