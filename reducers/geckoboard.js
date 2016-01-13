import { SWITCH_SERVICE, SWITCH_VISUALISATION, UPDATE_CONFIG } from '../constants/ActionTypes'

const initialState = {
  services: [
    'spreadsheet',
    'salesforce',
  ],
  selectedService: 'salesforce',
  visualisations: [
    'line',
    'bar',
  ],
  selectedVisualisation: 'line',
  config: {
    xAxis: 'first',
  },
  meta: {
    groups: [
      'first',
      'second',
    ]
  }
}

export default function geckoboard(state = initialState, action) {
  switch (action.type) {
    case SWITCH_VISUALISATION:
      return Object.assign({}, state, { selectedVisualisation: action.selectedVisualisation })

    case SWITCH_SERVICE:
      return Object.assign({}, state, { selectedService: action.selectedService })

    case UPDATE_CONFIG:
      return Object.assign({}, state, { config: Object.assign({}, state.config, action.update) })

    default:
      return state
  }
}
