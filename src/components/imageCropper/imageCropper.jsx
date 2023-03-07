import React, { useRef, useEffect } from 'react';
import './imageCropper.scss';

const ImageCropper =({data:{ imagePath, newX, newY, newWidth, newHeight,resizeHeight }})=> {
    const canvasRef = useRef(null);
    const originalImage = new Image();
    originalImage.src = imagePath;
    const style = {height:resizeHeight}

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        originalImage.addEventListener('load', ()=> {
            canvas.width = newWidth;
            canvas.height = newHeight;
            ctx.drawImage(originalImage, newX, newY, newWidth, newHeight, 0, 0, newWidth, newHeight); 
        });

    }, []);

    return <canvas ref={canvasRef} style={style}/>;
}

export default ImageCropper;