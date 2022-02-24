/** @format */

import { useReducer, useState } from "react";
const initialState = {
  value: '', 
  touched: false
}

// {type: '', value: ''}
const reducer = (state, action) => { 
  switch (action.type) { 
    case 'INPUT': return {value: action.value, touched: true}
    case 'BLUR': return {value:state.value, touched: true }
    case 'RESET': return initialState; 
    default:  return initialState
  }
}

const useInput = (validation) => {
  const [inputState, dispatch] =useReducer(reducer, initialState) 
  const {value, touched } = inputState 
  
  const valid = validation(value);
	const hasError = !valid && touched;

	const changeHandler = (e) => dispatch({type:'INPUT',value: e.target.value })
  const blurHandler = (e) => dispatch({ type: 'BLUR' });
  const reset = () => dispatch({ type: 'RESET' })


	return {
		value,
		hasError,
		valid,
		changeHandler,
		blurHandler,
		reset,
	};
};

export default useInput;
