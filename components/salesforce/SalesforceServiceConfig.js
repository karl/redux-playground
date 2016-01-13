import React, { Component, PropTypes } from 'react'
// import './SalesforceServiceConfig.css'

class SalesforceServiceConfig extends Component {
  render() {
    const { ConfigForm, Visualistion } = this.props;

    return (
      <div className="SalesforceServiceConfig">
        <ConfigForm />
        <Visualistion />
      </div>
    )
  }
}

export default SalesforceServiceConfig
