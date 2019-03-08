import React from 'react';
import _ from 'lodash';

function CardOnDisplay({ card }) {
  let ytid;
  const re = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/(.+)$/;
  let ytAttachment = _.find(card.attachments, attachment => re.test(attachment.url));
  
  if (ytAttachment) {
    ytid = ytAttachment.url.match(re)
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
