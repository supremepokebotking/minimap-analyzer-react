import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import BoxContainer from "./BoxContainer";

class App extends Component {


    constructor(){
      super()

      var mapping_config = {
          'rows': 10,
          'cols': 10,
          'empty_cell_color': '#ff00ff',
          'color_mapping':
          {
              'active_monster': '#ff00fc',
              'enemy_active_monster': '#fa00ff',
              'active_stats_modifier_monster': '#ff00ff',
              'enemy_active_stats_modifier_monster': '#ff00ff',
              'p1_field': '#ff00ff',
              'p2_field': '#ff00ff',
          }
      }

      var cell_data_1 = [
        {
            'row': 1,
            'col': 1,
            'is_json': false,
            'type': 'active_monster',
            'name': 'Pikachu',
            'details': '{"stats":{"atk":254,"def":206,"spa":134,"spd":174,"spe":150}',
            'actions': ['Thunder', 'Thunder Wave', 'Thundershock', 'Agility', ],
        },
        {
            'row': 1,
            'col': 1,
            'is_json': false,
            'type': 'active_monster',
            'name': 'Pikachu',
            'details': '{"stats":{"atk":254,"def":206,"spa":134,"spd":174,"spe":150}',
            'actions': ['Thunder', 'Thunder Wave', 'Thundershock', 'Agility', ],
        },
        {
            'row': 1,
            'col': 1,
            'is_json': false,
            'type': 'active_monster',
            'name': 'Pikachu',
            'details': '{"stats":{"atk":254,"def":206,"spa":134,"spd":174,"spe":150}',
            'actions': ['Thunder', 'Thunder Wave', 'Thundershock', 'Agility', ],
        },
        {
            'row': 1,
            'col': 1,
            'is_json': false,
            'type': 'active_monster',
            'name': 'Pikachu',
            'details': '{"stats":{"atk":254,"def":206,"spa":134,"spd":174,"spe":150}',
            'actions': ['Thunder', 'Thunder Wave', 'Thundershock', 'Agility', ],
        },
        {
            'row': 1,
            'col': 1,
            'is_json': false,
            'type': 'active_monster',
            'name': 'Pikachu',
            'details': '{"stats":{"atk":254,"def":206,"spa":134,"spd":174,"spe":150}',
            'actions': ['Thunder', 'Thunder Wave', 'Thundershock', 'Agility', ],
        },
      ]

      this.state = {
        mappingData: {'mapping_config': mapping_config, 'cell_data': cell_data_1},
        service_base_url: "http://localhost:5114",
        matchStyle:"get_test_map_data",
        matchStyleIndex: 0,
        matchStyleItems: ["get_test_map_data", "get_map_data"],
      }
      console.log("October")

      this.fetchMapUpdate();

    }

  fetchMapUpdate(){

    const config = {
        headers: { 'content-type': 'application/json',
        mode: 'no-cors',
      }
    }

    fetch(this.state.service_base_url+'/api/'+this.state.matchStyle, {
      method: 'post',
      headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Accept": "application/json",
      },
      mode: 'cors',
      }).then(res=>res.json())
      .then(res => {
        console.log("fetchMapUpdate");
        console.log(res);

        this.setState({
          mappingData: {'mapping_config': {}, 'cell_data': []}
        });
        this.setState({
          mappingData: res
        });
        this.state.mappingData = res;
        let wait = 1333
//        console.log('ddd',this.state.mappingData);
        setTimeout(this.fetchMapUpdate.bind(this), wait);

    });
  }

  handleMatchStylePick(event){
    var valueIndex = event.target.value

    var matchStyleValue = this.state.matchStyleItems[valueIndex]

    console.log('event.target', event.target.value)
    console.log('matchStyle', matchStyleValue);
    console.log('this.state.matchStyle', this.state.matchStyle);

    this.setState({
      matchStyle: matchStyleValue,
      matchStyleIndex: valueIndex
    });

  }

  createMatchStyleItems = () => {
    var match_style_items = []
    this.state.matchStyleItems.map((item, index) => (
      match_style_items.push(
            <option value={index}>{item}</option>)
        ));
    return match_style_items
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <label>
          Pick Match Style:
          <select value={this.state.matchStyleIndex} onChange={this.handleMatchStylePick.bind(this)} placeholder="Select a match style" >
              {this.createMatchStyleItems()}{' '}
          </select>
          </label>{' '}
        <BoxContainer mappingData={this.state.mappingData}/>
      </div>
    );
  }
}
export default App;
