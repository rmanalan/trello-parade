import React from 'react';
import _ from 'lodash';
import Plyr from 'react-plyr';

const ytRegEx = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/(.+)$/sim;
const movRegEx = /^https:\/\/trello-attachments\.s3\.amazonaws\.com\/(.+).mov$/;

function getYTId(url) {
  let ytid, movAttachment;
  const params = new URL(url);
  ytid = params.searchParams.get('v');
  if (!ytid) {
    ytid = url.match(ytRegEx)[4];
    ytid = ytid ? ytid.split('=').slice(-1)[0] : null;
  }
  return ytid;
}

function CardOnDisplay({ card }) {
  let ytid;
  
  // Look in attachments first
  const ytAttachment = _.find(card.attachments, attachment => ytRegEx.test(attachment.url));  
  if (ytAttachment) {
    ytid = getYTId(ytAttachment.url);
  }
  
  // Can't find in attachments... look in description
  if (!ytid) {
    const url = ytRegEx.test(card.desc) ? card.desc.match(ytRegEx)[0] : null;
    ytid = url ? getYTId(url) : null;
  }
  
  // TODO add support for mov/mp4
  if (!ytid) {
    movAttachment = _.find(card.attachments, attachment => movRegEx.test(attachment.url));  
  };
  
    
  return (
    <>
      { ytid ?
        <iframe 
          className="vid"
          title={card.name}
          src={`https://www.youtube.com/embed/${ytid}?autoplay=1`}
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
          allowFullScreen /> : {presentingLive}
         
      }
    </>
  );
}

export default CardOnDisplay;
