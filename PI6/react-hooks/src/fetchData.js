import React, { useEffect, useState } from 'react'

const FetchData = () => {
  const [todos, setTodos] = useState([])
  
  useEffect(async() => { 
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    setTodos(data);
  }, [])
  
  return (
    <div>
      { todos.map(todo => <li key={ todo.id }>{ todo.title}</li>)}
    </div>
  )
}

export default FetchData