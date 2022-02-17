import React from 'react'

const ListItem = (props) => {
  return (
    <li> { props.listText }<button onClick={ ()=>props.onDelete(props.id)}> Delete </button> </li>
  )
}

export default ListItem