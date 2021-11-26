import React, { Component } from "react";
import { colors } from "./colors";
import Box from "./Box";
import "./BoxContainer.css";

class BoxContainer extends Component {
  static defaultProps = {
    mappingData: {'mapping_config': {}, 'cell_data': []}
  };

  getCellColor(mappingConfig, cellData){
    console.log('cellData', cellData);
    console.log('mappingConfig', mappingConfig);
    var cellType = cellData['type']
    if (mappingConfig['color_mapping'].hasOwnProperty(cellType)){
      return mappingConfig['color_mapping'][cellType];
    }
    return "#ff00ff";
  }

  render() {
    return (
      <div className="BoxContainer">
        {this.props.mappingData["cell_data"].map((individualCellData) => (
          <Box color={this.getCellColor(this.props.mappingData["mapping_config"], individualCellData)} isJson={individualCellData["is_json"]} cellType={individualCellData["type"]} cellName={individualCellData["name"]} cellDetails={individualCellData["details"]} cellActions={individualCellData["actions"]}  />
          ))}
      </div>
    );
  }
}

export default BoxContainer;
