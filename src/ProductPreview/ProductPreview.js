import React from 'react';
import './productPreview.css';
import logo from "./red-heart-icon.jpg"

const ProductPreview = (props) => {
    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0'+new Date().getHours();
    const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0'+new Date().getMinutes();

    return (
    <div className='productPreview'>
        <img src={props.currentPreviewImage} alt="Product Preview"/>
        {props.currentSelectedFeature === 1 ?
              <div className='heartbeatDisplay'>
                <div className="heart">
                  <img src={logo} alt="heart"/>
                </div>
                <div className="number">
                  <p> 80 </p>
                </div>
              </div> 
              :  
              <div className="timeDisplay">
                <p> {`${currentHour}:${currentMinute}`} </p>
              </div> 
        }
    </div>
    );
}

export default ProductPreview;