import React, { useState} from 'react';
import NavBar from './Navbar';
import TasksList from './TasksList';
import TaskInput from './TaskInput';
import { Container } from '@mui/material';


const dummyTasks = [{id:'t1', text:'Clean dishes'}, {id:'t2', text:'do my project'}]

const App = () => {

  const [tasks, setTasks] = useState(dummyTasks)

  const addTask = (task) => { 
    setTasks((tasks)=> [task, ...tasks])
  }
  return (
		<>
      <NavBar />
      <Container>  
        <TaskInput addTask={ addTask}/>
        <TasksList tasks={ tasks}/>
      </Container>
		</>
	);
}

export default App