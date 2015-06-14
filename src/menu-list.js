import React, {Component} from 'react';

export default class MenuList extends React.Component {
  render() {
    return (
      <ul {...this.props}/>
    );
  }
}
