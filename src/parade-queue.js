import React from 'react';

function ParadeQueue({ cards, onSelect }) {
  return (
    <ul className="parade-queue">
      {cards.map(card => 
        <li key={card.id} className="trello-card-compact">
          <a href={card.url}>{card.name}</a>
        </li>)}
      <script src="https://p.trellocdn.com/embed.min.js"></script>
    </ul>
  );
}

export default ParadeQueue;
