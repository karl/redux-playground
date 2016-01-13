import * as types from '../constants/ActionTypes'

export function switchService(selectedService) {
  return {
    type: types.SWITCH_SERVICE,
    selectedService,
  };
}

export function switchVisualisation(selectedVisualisation) {
  return {
    type: types.SWITCH_VISUALISATION,
    selectedVisualisation,
  };
}

export function updateConfig(update) {
  return {
    type: types.UPDATE_CONFIG,
    update,
  };
}
