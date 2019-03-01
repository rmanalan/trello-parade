/* global TrelloPowerUp */

const t = TrelloPowerUp.iframe();

// you can access arguments passed to your iframe like so
const text = t.arg('text');

t.render(async function(){
  const data = await t.lists('id', 'name');
  console.log(888,data);
  
  window.ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
  );
});
