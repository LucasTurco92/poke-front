import React, { useState } from 'react';
import  './ImageWithSpinner.scss';

function ImageWithSpinner({ src }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <div className="loading">Loading...</div> }
      <img
      className='image-animation'
        src={src}
        onLoad={() => setIsLoading(false)}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </>
  );
}

export default ImageWithSpinner;