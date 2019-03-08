import React from 'react';
import _ from 'lodash';

function CardOnDisplay({ card }) {
  debugger
  const ytid = _.find(card.attachments, attachment => /youtu/.test(attachment.url));
  return (
    <>
      { ytid.length > 0 ?
        <iframe 
          className="vid"
          src={`https://www.youtube.com/embed/${ytid.url.split('=')[1]}?autoplay=1`}
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
          allowfullscreen /> :
         <div>YouTube video not attached</div>
      }
    </>
  );
}

export default CardOnDisplay;
