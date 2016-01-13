import partiallyApplyComponent from '../../utils/partiallyApplyComponent.js'
import SalesforceBarConfigForm from './bar/SalesforceBarConfigForm'
import SalesforceBarVisualisation from './bar/SalesforceBarVisualisation'
import SalesforceLineConfigForm from './line/SalesforceLineConfigForm'
import SalesforceLineVisualisation from './line/SalesforceLineVisualisation'
import SalesforceServiceConfig from './SalesforceServiceConfig'

const componentsMap = {
  line: {
    ConfigForm: SalesforceLineConfigForm,
    Visualistion: SalesforceLineVisualisation,
  },
  bar: {
    ConfigForm: SalesforceBarConfigForm,
    Visualistion: SalesforceBarVisualisation,
  }
}

const salesforceConfigGenerator = (selectedVisualisation) => {
  const components = componentsMap[selectedVisualisation];
  return partiallyApplyComponent(SalesforceServiceConfig, components);
}

export default salesforceConfigGenerator;
