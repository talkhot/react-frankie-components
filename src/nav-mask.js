import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class NavMask extends React.Component {
  static propTypes: {
    expanded: React.PropTypes.bool.isRequired,
    lockBodyScroll: React.PropTypes.bool
  }

  static defaultProps = {
    expanded: false,
    lockBodyScroll: true
  }

  componentDidUpdate() {
    (this.props.expanded && this.props.lockBodyScroll) ? this.disableBodyScroll() : this.enableBodyScroll();
  }

  // TODO: we could make a component out of this
  enableBodyScroll() {
    document.body.style.overflow = '';
  }

  disableBodyScroll() {
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
