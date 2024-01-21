import React, { Component } from 'react';
import Modal from './Modal.js'
import './modalWindow.css'
import link_icon from './link.png'

class ModalWindow extends Component{
	constructor(){
		super();
		this.state = {
			show: false
		}

		this.showModal = this.showModal.bind(this)
		this.hideModal = this.hideModal.bind(this)
	}
	
	showModal = () => {
		this.setState({show: true})
	}

	hideModal = () => {
		this.setState({show: false})
	}

	render(){
		return (
			<main>
		        <Modal handleClose={this.hideModal} show={this.state.show}>
		        	<img src={this.props.productImage} alt=""/>
		        	<div>
		        		<p> $99.99 </p>
		        		<button> Checkout <img src={link_icon} alt=""></img></button>
		        	</div>
		        </Modal>
		        <button type="button" className="buyNowBtn" onClick={this.showModal}>
		        	Buy Now
		        </button>
	       </main>
    	);
	}

}

export default ModalWindow;



