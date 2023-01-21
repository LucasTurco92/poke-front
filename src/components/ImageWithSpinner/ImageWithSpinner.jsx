import React, { useState,useEffect } from 'react';
import  './ImageWithSpinner.scss';

function ImageWithSpinner({ src, srcError }) {
  const [isLoading, setIsLoading] = useState(true);
  const [image, setIImage] = useState();

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {setIsLoading(false);setIImage(src)};
    img.onerror = () => {setIsLoading(false);setIImage(srcError)}

  }, [src]);

  return (
    <>
      {isLoading && <div className="loading">Loading...</div> }
      <img
        className='image-animation'
        src={image}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </>
  );
}

export default ImageWithSpinner;