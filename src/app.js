import React, { Component } from 'react';
import ListSelector from './list-selector';
import './app.css';

const t = window.TrelloPowerUp.iframe();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: []
    };
  }
  
  componentDidMount() {
    t.render(async () => {
      const lists = await t.lists('id', 'name');
      this.setState({lists});
    });
  }

  render() {
    return (
      <div className="App">
        <div className="
        <ListSelector lists={this.state.lists} />
      </div>
    );
  }
}

export default App;
