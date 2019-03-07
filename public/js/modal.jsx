// const { React, ReactDOM } = window;
const t = window.TrelloPowerUp.iframe();

// class Parade extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     console.log(777, this.props);
//     return (
//       <h1>Parade!</h1>
//     );
//   }
// }
t.render(async () => {
  debugger
  const lists = await t.lists('id', 'name');
  console.log('LISTS', lists);
  // ReactDOM.render(
  //   <Parade lists={lists}></Parade>,
  //   document.getElementById('root'),
  //   () => {console.log('component mounted')}
  // );
});
