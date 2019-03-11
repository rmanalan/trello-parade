import React from 'react';
import _ from 'lodash';

function CardOnDisplay({ card }) {
  let ytid;
  const re = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/(.+)$/s;
  
  // Look in attachments first
  const ytAttachment = _.find(card.attachments, attachment => re.test(attachment.url));
  
  ytid = ytAttachment ? ytAttachment.url.match(re)[4] : null;
  ytid = ytid ? ytid.split('=').slice(-1) : null;
  
  // Can't find in attachments... look in description
  if (!ytid) {
    debugger;
    ytid = card.desc.match(re)[4];
    ytid = ytid ? ytid.split('=').slice(-1) : null;
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
         <div className="presenting-live">No YouTube video attached. Presenting live!</div>
      }
    </>
  );
}

export default CardOnDisplay;
