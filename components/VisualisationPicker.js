import React, { PropTypes, Component } from 'react'
import './VisualisationPicker.css'

class VisualisationPicker extends Component {
  render() {
    const { visualisations, selectedVisualisation, switchVisualisation } = this.props;
    return (
      <div className="VisualisationPicker">
        VisualisationPicker
        {visualisations.map(visualisation =>
          <span key={visualisation}> <a href="#" className={selectedVisualisation === visualisation ? 'active' : ''} onClick={() => switchVisualisation(visualisation)}>{visualisation}</a> </span>
        )}
      </div>
    )
  }
}

export default VisualisationPicker
