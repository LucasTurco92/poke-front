import React, {  useState,useEffect } from 'react';
import typesImage from '../../assets/images/allTypes.png';
import ImageCropper from '../imageCropper/imageCropper.jsx';
import { getTypeImage } from '../../utils/get-type.js';
import './types.scss';


const Types =({ types })=> {
  const [ croppedImages,setCroppedImages ]=useState([]);

  const cropTypes=()=>{
    
      const originalImage = new Image();
      originalImage.src = typesImage;

      const imagesToCrop = types.map(type =>{
        const { x,y } = getTypeImage[type];

        return {
          imagePath:typesImage, 
          newX:originalImage.width/x, 
          newY:originalImage.height/y, 
          newWidth:originalImage.width/3, 
          newHeight:originalImage.height/6,
          resizeHeight:80,
          type:type
        }
      });
      setCroppedImages(imagesToCrop);
    }
    useEffect(() => {
      cropTypes();
      
    }, [types]);


    return <div className = 'typesContainer'>
            <div className='types'>{croppedImages.map((croppedImage)=>{
                      const {imagePath,
                        newX, 
                        newY, 
                        newWidth, 
                        newHeight,
                        resizeWidth,
                        resizeHeight,
                        type
                      } = croppedImage;
                    return <ImageCropper key={type} data={{imagePath,
                                          newX, 
                                          newY, 
                                          newWidth, 
                                          newHeight,
                                          resizeWidth,
                                          resizeHeight
                                          } }/>
                
                    })}</div>
          </div>;
}


export default Types;