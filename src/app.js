import React, { Component } from 'react';
import ListSelector from './list-selector';
import './app.css';

const t = window.TrelloPowerUp.iframe();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      selectedList: null,
    };
  }
  
  componentDidMount() {
    t.render(async () => {
      const lists = await t.lists('id', 'name');
      this.setState({lists});
    });
  }
  
  onListSelect(evt) {
    this.setState({ selectedList: evt.currentTarget.value });    
  }

  render() {
    return (
      <div className="App">
        <div className="list-selector">
          <ListSelector 
            lists={this.state.lists}
            onChange={this.onListSelect}
          />
        </div>
      </div>
    );
  }
}

export default App;
