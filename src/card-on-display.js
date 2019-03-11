import React from 'react';
import _ from 'lodash';

function CardOnDisplay({ card }) {
  let ytid;
  const re = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/(.+)$/s;
  
  // Look in attachments first
  const ytAttachment = _.find(card.attachments, attachment => re.test(attachment.url));
  
  ytid = ytAttachment ? ytAttachment.url.match(re)[4] : null;
  ytid = ytid ? ytid.split('=').slice(-1)[0] : null;
  
  if (ytAttachment) {
    const params = new URLSearchParams(ytAttachment.url);
    if (params) {
      ytid = params.get('v');
    } else {
      ytid = ytAttachment ? ytAttachment.url.match(re)[4] : null;
      ytid = ytid ? ytid.split('=').slice(-1)[0] : null;
    }
  }
  
  // Can't find in attachments... look in description
  if (!ytid) {
    debugger
    ytid = re.test(card.desc) ? card.desc.match(re)[4] : null;
    ytid = ytid ? ytid.split('=').slice(-1)[0] : null;
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
