/* global TrelloPowerUp */

const t = TrelloPowerUp.iframe();

// you can access arguments passed to your iframe like so
const text = t.arg('text');

t.render(async function(){
  const data = await t.getAll();
  console.log(888,data);
});
