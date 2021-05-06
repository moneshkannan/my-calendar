import React from 'react';

import './stylo.scss';

function Image({ratio, src}) {
    return (
        <div className="image-container">
      <div className="image-inner-container">
        <div
          className="ratio"
          style={{
            paddingTop: ratio * 100 + '%'
          }}
        >
          <div className="ratio-inner">
            <img  src={src} alt="" />
          </div>
        </div>
      </div>
    </div>
    )
}

export default Image
