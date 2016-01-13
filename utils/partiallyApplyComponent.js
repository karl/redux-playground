import React, { Component } from 'react';

const partiallyApplyComponent = (Component, partialProps) => {
  return class extends Component {
    render() {
      const props = Object.assign({}, partialProps, this.props);
      return (
        <Component {...props} />
      )
    }
  };
}

export default partiallyApplyComponent;
