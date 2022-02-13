import React, { useState, useEffect, useReducer} from 'react';
import NavBar from './Navbar';
import TasksList from './TasksList';
import TaskInput from './TaskInput';
import { Container } from '@mui/material';
import TasksContext from './context/TasksContext';

const tasksReducer = (state, { type, value }) => { 
  switch (type) { 
    case 'GET_TASKS': return JSON.parse(localStorage.getItem('tasks'));
    case 'ADD_TASK': return [value, ...state]
    case 'DELETE_TASK': return state.filter((t) => t.id !== value);
    default: return [];
  }

}

const App = () => {

  const [tasks, dispatchTasks] = useReducer(tasksReducer, [])

  useEffect(() => {
		if (localStorage.getItem('tasks')) {
      dispatchTasks({type: 'GET_TASKS'})
		}
	}, [])

  const addTask = (task) => { 
    dispatchTasks({type:'ADD_TASK', value: task})
    localStorage.setItem("tasks", JSON.stringify([task, ...tasks]));
  }

  const deleteTask = (id) => { 
    const updatedTasks = tasks.filter(t => t.id !== id)
    dispatchTasks({type:'DELETE_TASK', value: id})
    localStorage.setItem("tasks", JSON.stringify(tasks.filter(t => t.id !== id)));
  }


  return (
		<>
      <TasksContext.Provider value={ {tasks, addTask, deleteTask}}>
				<NavBar />
				<Container>
					<TaskInput/>
					<TasksList />
				</Container>
			</TasksContext.Provider>
		</>
	);
}

export default App