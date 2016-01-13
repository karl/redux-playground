import * as AllActions from '../actions/all'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ServicePicker from '../components/ServicePicker'
import MainSection from '../components/MainSection'
import Page from '../components/Page'
import VisualisationPicker from '../components/VisualisationPicker'
import spreadsheetConfigGenerator from '../components/spreadsheet/spreadsheetConfigGenerator'
import salesforceConfigGenerator from '../components/salesforce/salesforceConfigGenerator'

const SERVICE_CONFIGS = {
  spreadsheet: spreadsheetConfigGenerator,
  salesforce: salesforceConfigGenerator,
}

class App extends Component {
  render() {
    const { state, actions } = this.props

    const generator = SERVICE_CONFIGS[state.selectedService];
    const ServiceConfig = generator(state.selectedVisualisation, state, actions);

    return (
      <Page>
        <ServicePicker
          services={state.services}
          selectedService={state.selectedService}
          switchService={actions.switchService}
        />
        <VisualisationPicker
          visualisations={state.visualisations}
          selectedVisualisation={state.selectedVisualisation}
          switchVisualisation={actions.switchVisualisation}
        />
        <MainSection
          ServiceConfig={ServiceConfig}
          actions={actions}
        />
      </Page>
    )
  }
}

function mapStateToProps(state) {

  return {
    state: state.geckoboard
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AllActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
