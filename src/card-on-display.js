import React from 'react';
import _ from 'lodash';

function CardOnDisplay({ card }) {
  let ytid = _.find(card.attachments, attachment => /youtube/.test(attachment.url));
  
  // 2nd pass
  if (!ytid) {
    ytid = _.find(card.attachments, attachment => /youtu.be/.test(attachment.url));
    ytid = ytid ? ytid.split('/').slice(-1)[0] : null;
  } else {
    ytid = ytid.url.split('=').slice(-1)[0];
  }
  
  // 3rd pass
  if (!ytid) {
    ytid = /https?:\/\/youtube/
  }
    
  return (
    <>
      { ytid ?
        <iframe 
          className="vid"
          src={`https://www.youtube.com/embed/${ytid}?autoplay=1`}
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
          allowfullscreen /> :
         <div>YouTube video not attached</div>
      }
    </>
  );
}

export default CardOnDisplay;
