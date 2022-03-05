import React from 'react'
import { createPortal } from 'react-dom';
import Card from '../Card/Card';
import './Modal.css';


const AppModal = (props) => { 
  return (
  <div className="Modal">
			<Card className="Card">
				{props.children}
				<button onClick={props.onClose}> Close</button>
			</Card>
	</div>
  )
}

const Modal = (props) => {
  return (createPortal(<AppModal {...props}/>, document.getElementById('modal')));
}

export default Modal