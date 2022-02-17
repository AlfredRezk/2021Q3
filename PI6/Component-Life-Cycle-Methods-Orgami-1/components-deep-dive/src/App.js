import React, { Component } from 'react'
import TodosList from './TodosList';

// import logged from './HOC.JS'

function logged(InputComponent) {
	return class extends Component {
		constructor(props) {
			super();
		}
		// js code

    componentDidMount() {
      console.log(`Component Mounted ${InputComponent.displayName}`);
		}

		render() {
			return <InputComponent {...this.props} />;
		}
	};
}

function Wrapper(InputComponent) { 
  return class extends Component { 
    constructor(props) { 
      super();
    }
    render() { 
      console.log(new Date().toLocaleString('en-US', { hour12: false }));
      return <InputComponent { ...this.props } />;
    }
  }
}


class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() { 
    this.fetchTodos();
  }


  async fetchTodos() { 
    try { 
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const todos = await res.json();
  	this.setState({ todos });
    } catch (err) {
      console.log(err)
    }
	
  }

  render() {
    const EnhancedList = logged(TodosList)
    const MyComponent = Wrapper(EnhancedList);
    return <MyComponent todos={ this.state.todos } /> 
      
  }
}

export default App