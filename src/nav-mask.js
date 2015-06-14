import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class NavMask extends React.Component {
  static propTypes: {
    expanded: React.PropTypes.bool.isRequired
  }

  componentWillUpdate() {
    // do we hide the body scrollbars on expand?
    (this.props.expanded & this.props.lockBodyScroll) ? this._enableBodyScroll() : this._disableBodyScroll();
  }

  // TODO: we could make a component out of this
  _enableBodyScroll() {
    document.body.style.overflow = '';
  }

  _disableBodyScroll() {
    document.body.style.overflow = 'hidden';
  }

  render() {
    const {className, expanded, ...props} = this.props;
    const cls = classNames(
      'nav-mask',
      expanded && 'visible',
      className
    );

    return (
      <a className={cls} aria-label='hidden' {...props}/>
    );
  }
}
