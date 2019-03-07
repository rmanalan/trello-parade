const { 
  React, 
  ReactDOM, 
  TrelloPowerUp 
} = window;

const t = TrelloPowerUp.iframe();

class Parade extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    console.log('loading lists');
    t.render(async () => {
      debugger
      const lists = await t.lists('id', 'name');
      console.log('LISTS', lists);
    });
  }
  
  
  render() {
    console.log(777, this.props);
    return (
      <h1>Parade!</h1>
    );
  }
}

ReactDOM.render(
  <Parade></Parade>,
  document.getElementById('root'),
  () => {console.log('component mounted')}
);
