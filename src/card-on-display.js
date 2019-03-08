import React from 'react';

function CardOnDisplay({ card }) {
  const ytid = card.attachments[0].url.split('=')[1];
  return (
    <iframe 
      className="vid"
      src={`https://www.youtube.com/embed/${ytid}`}
      frameborder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen />
  );
}

export default CardOnDisplay;
