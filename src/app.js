import React, { Component } from 'react';
import { find } from 'lodash';
import ListSelector from './list-selector';
import ParadeRoute from './parade-route';
import './app.css';

const t = window.TrelloPowerUp.iframe();
window.TrelloCards.load(document, { compact: false, allAnchors: false });

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
    this.setState({ 
      selectedList: evt.currentTarget.value,
      cards: find(this.state.lists, { id: evt.currentTarget.value }).cards,
    });
  }
  
  onCardSelect() {
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
          <ParadeRoute cards={this.state.cards} onSelect={this.onCardSelect.bind(this)} />
        }
      </div>
    );
  }
}

export default App;
