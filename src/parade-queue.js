import React from 'react';

function ParadeQueue({ cards, cardOnDisplay,  onSelect }) {
  return (
    <ul className="parade-queue">
      {cards.map(card => {
        return <li key={card.id} className={`card ${cardOnDisplay && card.id == cardOnDisplay.id ? 'selected-card' : ''}`}>
          <a href={`#${card.id}`} onClick={onSelect.bind(this, card)}>{card.name}</a>
        </li>;
      })}
    </ul>
  );
}

export default ParadeQueue;
