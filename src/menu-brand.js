import React, {Component} from 'react';
import classNames from 'classnames';

export default class MenuBrand extends React.Component {
  render() {
    const {className, ...props} = this.props;
    const cls = classNames('menu-brand', className);

    return (
      <div className={cls} {...props}/>
    );
  }
}
