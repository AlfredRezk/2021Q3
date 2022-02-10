import React, { useState} from 'react'

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [isValid, setIsValid] = useState(true);


  const submitHandler = (e) => { 
    e.preventDefault();
    if (isValid && task.length>0) { 
     const enteredTask = { id: Date.now().toString(), title: task };
		  setTasks((p) => [enteredTask, ...p]);
		  setTask("");
    }
  }

  const inputHandler = (e) => {

    if (e.target.value.trim().length>0) {
      setIsValid(true)      
    } else {
      setIsValid(false);
    }
     setTask(e.target.value);
  }  


  let errorContent = <small style={ {color: 'red'}}>Please enter a valid task</small>;

  if (isValid) { 
    errorContent = ''
  } 

  return (
    <div>
      <h1>Tasks App</h1>
      <form onSubmit={ submitHandler}>
        <input type="text"
          placeholder='Enter a Task'
          onChange={ inputHandler }
          value={ task }
          style={ { borderColor: isValid ? '#ccc' : 'red', outline: 'none' } } />

        <br />
        { errorContent}
        <br />
        <button type="submit">ADD TASK</button> <br />
      </form>
      <ul>
        { tasks.map(task => <li key={ task.id}>{ task.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
