import React, { useContext} from 'react'
import AuthContext from './AuthContext'
import CompD from './CompD'

const CompC = () => {

  const { auth}  = useContext(AuthContext)
  return (
    <>
      <p>Component C</p>
      <p> Authentication: { auth }</p>
      <CompD/>
    </>
    
  )
}

export default CompC