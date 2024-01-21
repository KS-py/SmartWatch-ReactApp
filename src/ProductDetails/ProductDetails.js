import React from 'react';
import './productDetails.css';
import ModalWindow from '../Modal/ModalWindow'

const ProductDetails = (props) => {
    const colorOptions = props.data.colorOptions.map((item, pos) => {
        const classArr = ['productImage'];
        if(pos === props.currentPreviewImagePos){
            classArr.push('selectedProductImage');
        }
        return(
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} 
            onClick={() => {props.onColorOptionClick(pos)}}/>
        );
    })

    const features = props.data.featureList.map((item, pos) => {
        const classArr = ['featureItem'];
        if(pos === props.currentSelectedFeature){
            classArr.push('selectedFeatureItem');
        }
        return(
            <button onClick={() => {props.onFeatureItemClick(pos)}} key={pos} 
            className={classArr.join(' ')}>{item}</button> 
        );
    })

    return(
        <div className='productData'>
            <h1 className='productTitle'>{props.data.title}</h1>
            <p className='productDescription'>{props.data.description}</p>

            <h3 className='sectionHeading'>Select color</h3>
            <div className=''>
                {colorOptions}
            </div>

            <h3 className='sectionHeading'>Features</h3>
            <div>
            {features}
            </div>

            <ModalWindow productImage={props.currentPreviewImage}/>
        </div>
    );
}

export default ProductDetails