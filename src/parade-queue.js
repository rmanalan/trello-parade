import React from 'react';

function ParadeQueue({ cards, cardOnDisplay,  onSelect }) {
  return (
    <ul className="parade-queue">
      {cards.map(card => 
        <li key={card.id} className={`trello-card-compact ${cardOnDisplay && card.id === cardOnDisplay.id ? 'selected-card' : ''}`}>
          <a href={`#${card.id}`} onClick={onSelect.bind(this, card)}>{card.name}</a>
        </li>)}
      <script src="https://p.trellocdn.com/embed.min.js"></script>
    </ul>
  );
}

export default ParadeQueue;
