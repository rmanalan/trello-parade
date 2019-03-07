import React, { Component } from 'react';
import './app.css';

const t = window.TrelloPowerUp.iframe();

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    t.render(async () => {
      const lists = await t.lists('id', 'name');
      console.log('LISTS', lists);
    });
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
