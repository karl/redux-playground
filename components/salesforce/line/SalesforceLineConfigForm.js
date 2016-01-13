import React, { Component, PropTypes } from 'react'
// import './SalesforceLineConfigForm.css'

class SalesforceLineConfigForm extends Component {
  updateConfig(update) {
    this.props.updateConfig(update);
  }

  render() {
    const { config, meta } = this.props;
    const { xAxis } = config;
    const { groups } = meta;

    return (
      <div className="SalesforceLineConfigForm">
        <div style={ { margin: 5, border: '1px solid #555' } }>
          <h3>X Axis</h3>
          {groups.map(group => {
            const check = xAxis === group ? '☑' : '☐'
            return <div key={group} onClick={() => this.updateConfig({ xAxis: group })}>{check} {group}</div>
          })}
        </div>
      </div>
    )
  }
}

export default SalesforceLineConfigForm
