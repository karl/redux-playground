import partiallyApplyComponent from '../../utils/partiallyApplyComponent.js'
import SalesforceBarConfigForm from './bar/SalesforceBarConfigForm'
import SalesforceBarVisualisation from './bar/SalesforceBarVisualisation'
import SalesforceLineConfigForm from './line/SalesforceLineConfigForm'
import SalesforceLineVisualisation from './line/SalesforceLineVisualisation'
import SalesforceServiceConfig from './SalesforceServiceConfig'

const propsGenerators = {
  line: (state, actions) => {
    return {
      ConfigForm: partiallyApplyComponent(SalesforceLineConfigForm, {
        config: state.config,
        meta: state.meta,
        updateConfig: actions.updateConfig,
      }),
      Visualistion: SalesforceLineVisualisation,
    };
  },
  bar: () => {
    return {
      ConfigForm: SalesforceBarConfigForm,
      Visualistion: SalesforceBarVisualisation,
    };
  }
}

const salesforceConfigGenerator = (selectedVisualisation, state, actions) => {
  const generator = propsGenerators[selectedVisualisation];
  const props = generator(state, actions);
  return partiallyApplyComponent(SalesforceServiceConfig, props);
}

export default salesforceConfigGenerator;
