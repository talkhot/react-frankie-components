import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class Menu extends Component {
  static propTypes = {
    horizontal: PropTypes.bool,
    scrollable: PropTypes.bool
  }

  static defaultProps = {
    horizontal: true,
    scrollable: false
  }

  render() {
    const {className, horizontal, scrollable, ...props} = this.props;
    const cls = classNames(
        'menu', className,
        horizontal && 'menu-horizontal',
        scrollable && 'menu-scrollable'
    );

    return (
      <div className={cls} {...props}/>
    );
  }
}
