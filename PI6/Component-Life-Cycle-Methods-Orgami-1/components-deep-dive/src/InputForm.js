import React, { useRef } from 'react';

const InputForm = (props) => {

  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAdd({id: Date.now(), text: inputRef.current.value})
    inputRef.current.value = '';
   }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" ref={ inputRef}/>
      <button type="submit">ADD</button>
    </form>
  )
}

export default InputForm