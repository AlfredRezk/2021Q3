import React, { useEffect, useState } from 'react'
import StopWatch from './StopWatch'

const App = () => {

  const [show, setShow] = useState(true);

  return (
		<>
			{show && <StopWatch />}

      <button onClick={()=>setShow(prev=> !prev) }> {show ? "Hide" : "Show"}</button>
		</>
	);
}

export default App