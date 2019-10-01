import React from 'react';

import { history } from '../../store';

function Photo() {
  return (
    <div>
      <div className="row">
        <button className="btn-small" onClick={history.goBack}>Back</button>
      </div>
      <img src="https://unsplash.it/900" alt="Random Unsplash"></img>
    </div>
  )
}

export default Photo
