import React, { Component } from 'react';

import './App.css';
import ProductData from './ProductData';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductPreview from './ProductPreview/ProductPreview';
import Topbar from './Topbar/Topbar';

class App extends Component{
  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0,
  }

  onColorOptionClick = (pos) => {
    this.setState({currentPreviewImagePos: pos});
  }

  onFeatureItemClick = (pos) => {
    this.setState({currentSelectedFeature: pos})
  }

  render(){
  return (
    <div className="App">
      <Topbar/>

      <div className='mainContainer'>
        <div className='productPreview'>
          <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} 
          currentSelectedFeature={this.state.currentSelectedFeature} />
        </div>

        <div className='productData'>
          <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} 
          currentPreviewImagePos={this.state.currentPreviewImagePos} 
          onFeatureItemClick={this.onFeatureItemClick} currentSelectedFeature={this.state.currentSelectedFeature}
          currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl}/>
        </div>
      </div>
    </div>
   );
  }
}

export default App;
