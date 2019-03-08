import React, { Component } from 'react';
import { find } from 'lodash';
import ListSelector from './list-selector';
import ParadeRoute from './parade-route';
import CardOnDisplay from './card-on-display';
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
  
  onCardSelect(card) {
    this.setState({ cardOnDisplay: card });
  }
  
  render() {
    console.log(this.state);
    return (
      <div className="app row">
        <div className="card-on-display col-xs-9">
          { this.state.cardOnDisplay ? <CardOnDisplay card={this.state.cardOnDisplay} /> : null }
        </div>
        <div className="sidebar col-xs-3">
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
      </div>
    );
  }
}

export default App;
