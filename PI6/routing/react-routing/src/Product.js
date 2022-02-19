import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';


const Product = () => {
  const { product } = useParams(); 
  const navigate = useNavigate()
  
  const goHome = () => { 
      navigate('/')
  }
  return (
		<div>
			<div>Product</div>
			<div>
        <h1>{ product}</h1>
      </div>
      
      <button onClick={ goHome}>Go Home</button>
		</div>
	);
}

export default Product