import React from 'react';
import _ from 'lodash';

const re = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/(.+)$/s;

function getYTId(url) {
  let ytid;
  const params = new URLSearchParams(url);
  ytid = params.get('v');
  if (!ytid) {
    ytid = url.match(re)[4];
    ytid = ytid ? ytid.split('=').slice(-1)[0] : null;
  }
  return ytid;
}

function CardOnDisplay({ card }) {
  let ytid;
  
  // Look in attachments first
  const ytAttachment = _.find(card.attachments, attachment => re.test(attachment.url));  
  if (ytAttachment) {
    debugger;
    ytid = getYTId(ytAttachment.url);
  }
  
  // Can't find in attachments... look in description
  if (!ytid) {
    const url = re.test(card.desc) ? card.desc.match(re)[0] : null;
    ytid = url ? getYTId(url) : null;
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
         <div className="row center-xs middle-xs presenting-live">
           <div class="col-xs-6">
             <div class="box">
               No YouTube video attached. Presenting live!
             </div>
           </div>
         </div>
         
      }
    </>
  );
}

export default CardOnDisplay;
