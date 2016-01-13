import React, { Component, PropTypes } from 'react'
import './MainSection.css'

class MainSection extends Component {
  render() {
    const { ServiceConfig, actions } = this.props

    return (
      <div className="MainSection">
        <ServiceConfig />
      </div>
    )
  }
}

export default MainSection
