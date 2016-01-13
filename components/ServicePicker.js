import React, { Component, PropTypes } from 'react'
import './ServicePicker.css'

class ServicePicker extends Component {
  render() {
    const { services, selectedService, switchService } = this.props;
    return (
      <div className="ServicePicker">
        ServicePicker
        {services.map(service =>
          <span key={service}> <a href="#" className={selectedService === service ? 'active' : ''} onClick={() => switchService(service)}>{service}</a> </span>
        )}
      </div>
    )
  }
}

export default ServicePicker
