import { useState } from "react";
import InputForm from "../InputForm";
import TodosList from "./TodosList";

const dummyTodos = [
  { id: 't1', text: 'Finish my project' },
  { id: 't2', text: 'Do my homework' }
]


function App() {
  const [todos, setTodos] = useState(dummyTodos);

  const addTodo = (todo) => { 
    setTodos([todo, ...todos])
  }  

  const removeTodo = (id) => { 
    setTodos(todos.filter(t=> t.id !== id))
  }
 
  return (

    <>
      <InputForm onAdd={ addTodo}/>
      <TodosList todos={ todos } onDelete={ removeTodo}/>
    </>


    
  );
}

export default App;
