import React from 'react';

function ParadeQueue({ cards, onSelect }) {
  console.log(999, cards);
  cards.map(card => {
    window.TrelloCards.create(card.id, document.querySelector('#cards'));
  });
  return (
    <div className="parade-queue">
    </div>
  );
}

export default ParadeQueue;
