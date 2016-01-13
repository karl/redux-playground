import partiallyApplyComponent from '../../utils/partiallyApplyComponent.js'
import SpreadsheetBarConfigForm from './bar/SpreadsheetBarConfigForm'
import SpreadsheetBarVisualisation from './bar/SpreadsheetBarVisualisation'
import SpreadsheetLineConfigForm from './line/SpreadsheetLineConfigForm'
import SpreadsheetLineVisualisation from './line/SpreadsheetLineVisualisation'
import SpreadsheetServiceConfig from './SpreadsheetServiceConfig'

const componentsMap = {
  line: {
    ConfigForm: SpreadsheetLineConfigForm,
    Visualistion: SpreadsheetLineVisualisation,
  },
  bar: {
    ConfigForm: SpreadsheetBarConfigForm,
    Visualistion: SpreadsheetBarVisualisation,
  }
}

const salesforceConfigGenerator = (selectedVisualisation) => {
  const components = componentsMap[selectedVisualisation];
  return partiallyApplyComponent(SpreadsheetServiceConfig, components);
}

export default salesforceConfigGenerator;
