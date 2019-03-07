import React from 'react';

function ParadeQueue({ cards, onSelect }) {
  return (
    <div className="parade-queue">
      {cards.map(card => 
        <blockquote className="trello-card-compact">
          <a href={card.url}>{card.name}</a>
        </blockquote>)}
      <script src="https://p.trellocdn.com/embed.min.js"></script>
    </div>
  );
}

export default ParadeQueue;
