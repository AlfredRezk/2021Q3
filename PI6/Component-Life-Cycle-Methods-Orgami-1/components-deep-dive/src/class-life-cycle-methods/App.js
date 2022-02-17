import InputForm from "../function-components/InputForm";
import TodosList from "../function-components/TodosList";
import { Component } from "react";

const dummyTodos = [
  { id: 't1', text: 'Finish my project' },
  { id: 't2', text: 'Do my homework' }
]


class App extends Component{ 


  constructor() { 
    super();
    console.log('App constructor running')
  }
  state = {
    todos: dummyTodos
  }

  // useEffect(()=>{}, [])
  componentDidMount() { 
    console.log('component Did mount')
  }


  // useEffect(()=>{}, [todos])
  componentDidUpdate() { 
    console.log('Component Updated')
  }
 

  // useEffect(()=>{ return ()=>{}})
  componentWillUnmount() { 
    console.log('Component un mounted ')
  }
  

  addTodo(todo) { 
    this.setState({ todos: [todo, ...this.state.todos]})
  }
  removeTodo(id) { 
    this.setState({ todos: this.state.todos.filter(t => t.id !== id) })
  }

  render() { 
    console.log('App is rendered');
    return (
     <>
      <InputForm onAdd={ this.addTodo.bind(this)}/>
      <TodosList todos={ this.state.todos } onDelete={ this.removeTodo.bind(this)}/>
    </>
    )
  }

}

export default App;
