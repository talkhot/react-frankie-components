import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class Nav extends React.Component {
  static propTypes: {
    expanded: React.PropTypes.bool,
    // classes
    noGutter: React.PropTypes.bool,
    noContainer: React.PropTypes.bool,
    fluidContainer: React.PropTypes.bool
  }

  static defaultProps = {
    noGutter: false,
    noContainer: false,
    fluidContainer: true
  }

  static initialState = {
    expanded: true
  }

  render() {
    const {className, noGutter, noContainer, fluidContainer, ...props} = this.props;
    const fluidCls = !noContainer ? fluidContainer ? 'container-fluid' : 'container' : null;

    const wrapperCls = classNames('nav-wrapper', className);
    const containerCls = classNames('nav-container', fluidCls, noGutter && 'no-gutter');

    return (
      <nav className={wrapperCls}>
        <div className={containerCls} {...props}/>
      </nav>
    );
  }
}
