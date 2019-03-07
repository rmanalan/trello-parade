import React, { Component } from 'react';
import {  } from 'lodash';
import ListSelector from './list-selector';
import ParadeRoute from './parade-route';
import './app.css';

const t = window.TrelloPowerUp.iframe();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      selectedList: null,
      cards: [],
    };
  }
  
  componentDidMount() {
    t.lists('all')
      .then(lists => this.setState({lists}));
  }
  
  onListSelect(evt) {
    this.setState({ 
      selectedList: evt.currentTarget.value,
      cards: 
    });
  }
  
  render() {
    console.log(this.state);
    return (
      <div className="App">
        { !this.state.selectedList ?
          <ListSelector 
            lists={this.state.lists}
            onChange={this.onListSelect.bind(this)}
          /> :
          <ParadeRoute cards={this.state.cards}/>
        }
      </div>
    );
  }
}

export default App;
