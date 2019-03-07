import React from 'react';
import ParadeQueue from './parade-route';

function ParadeRoute(props) {
  // const { cardOnDisplay } = props;
  return (
    <div className="parade-route">
      <ParadeQueue {...props} />
    </div>
  );
}

export default ParadeRoute;
