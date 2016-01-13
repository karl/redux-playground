import { SWITCH_SERVICE, SWITCH_VISUALISATION } from '../constants/ActionTypes'

const initialState = {
  services: [
    'spreadsheet',
    'salesforce',
  ],
  selectedService: 'spreadsheet',
  visualisations: [
    'line',
    'bar',
  ],
  selectedVisualisation: 'line',
}

export default function geckoboard(state = initialState, action) {
  switch (action.type) {
    case SWITCH_VISUALISATION:
      return Object.assign({}, state, { selectedVisualisation: action.selectedVisualisation })

    case SWITCH_SERVICE:
      return Object.assign({}, state, { selectedService: action.selectedService })

    default:
      return state
  }
}
