import React, { useState } from 'react'

const SayHello = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => { 
    setChangeText(true);
  }
  return (
    <>
      <h1>hello world!</h1>
      {!changeText&&<p>Nice to see you </p>}
      {changeText&&<p> Changed </p>}
      <button onClick={ changeTextHandler}> Change </button>
    </>
  )
}

export default SayHello