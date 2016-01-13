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

class App extends Component {
  render() {
    const { state, actions } = this.props
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
          ServiceConfig={state.ServiceConfig}
          actions={actions}
        />
      </Page>
    )
  }
}

const SERVICE_CONFIGS = {
  spreadsheet: spreadsheetConfigGenerator,
  salesforce: salesforceConfigGenerator,
}

function mapStateToProps(state) {
  const generator = SERVICE_CONFIGS[state.geckoboard.selectedService];
  const ServiceConfig = generator(state.geckoboard.selectedVisualisation);

  return {
    state: Object.assign({}, state.geckoboard, {
      ServiceConfig,
    })
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
