/* global TrelloPowerUp */

const { React, ReactDOM } = window;
const t = TrelloPowerUp.iframe();

// you can access arguments passed to your iframe like so
const text = t.arg('text');


class Parade extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(777, this);
    return (
      <h1>Parade!</h1>
    );
  }
}

t.render(async () => {
  const lists = await t.lists('id', 'name');
  ReactDOM.render(
    <Parade lists={lists}></Parade>,
    document.getElementById('root')
  );
});

