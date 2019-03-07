import React from 'react';
import ParadeQueue from './parade-queue';

function ParadeRoute({ cards, onSelect, cardOnDisplay }) {
  return (
    <div className="parade-route">
      <ParadeQueue cards={cards} onSelect={onSelect} />
    </div>
  );
}

export default ParadeRoute;
