import React, { useState} from 'react'

const InputFunc = () => {
  const [enteredInput, setEnteredInput] = useState('');

  const inputHandler = (e) => { 
      setEnteredInput(e.target.value)
  }

  return (
		<>
      <input type="text" onChange={ inputHandler } />
      <p>{ enteredInput}</p>
		</>
	);
}


export default InputFunc