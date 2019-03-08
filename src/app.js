import React, { Component } from 'react';
import { find } from 'lodash';
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
      cardOnDisplay: null,
    };
  }
  
  componentDidMount() {
    t.lists('all')
      .then(lists => this.setState({lists}));
  }
  
  onListSelect(evt) {
    const list = find(this.state.lists, { id: evt.currentTarget.value })
    this.setState({ 
      selectedList: evt.currentTarget.value,
      cards: list.cards,
    });
  }
  
  onCardSelect() {
  }
  
  render() {
    console.log(this.state);
    return (
      <div className="app">
        { !this.state.selectedList ?
          <ListSelector 
            lists={this.state.lists}
            onChange={this.onListSelect.bind(this)}
          /> :
          <ParadeRoute 
            cards={this.state.cards} 
            onSelect={this.onCardSelect.bind(this)}
            cardOnDisplay={this.state.cardOnDisplay}
          />
        }
      </div>
    );
  }
}

export default App;
