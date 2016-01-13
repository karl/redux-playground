import React, { Component, PropTypes } from 'react'
// import './SpreadsheetServiceConfig.css'

class SpreadsheetServiceConfig extends Component {
  render() {
    const { ConfigForm, Visualistion } = this.props;

    return (
      <div className="SpreadsheetServiceConfig">
        <ConfigForm />
        <Visualistion />
      </div>
    )
  }
}

export default SpreadsheetServiceConfig
