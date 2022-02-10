import React, { useState } from 'react'

const App2 = () => {

  const [num, setNum] = useState(0);


  return (
    <div>
      <p>{ num }</p>

      <button type='button' onClick={ ()=> setNum((num)=> num-1)}>-</button>
      <button type='button' onClick={()=> setNum((num)=> num+1)}>+</button>
    </div>
  )
}

export default App2