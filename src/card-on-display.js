import React from 'react';

function CardOnDisplay({ card }) {
  const ytid = card.attachments[0].url.split('=')
  return (
    <iframe 
      width="1280" 
      height="720" 
      src={}
      frameborder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen />
  );
}

export default CardOnDisplay;

<iframe 
  width="1280" 
  height="720" 
  src="https://www.youtube.com/embed/9MNlXalv1B0" 
  frameborder="0" 
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen />