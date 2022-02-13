import { ListItem, ListItemButton, ListItemText } from '@mui/material'
import React, { useContext } from 'react'
import TasksContext from './context/TasksContext';

const TaskItem = ({ task }) => {

  const { deleteTask} = useContext(TasksContext) 

  return (

				<ListItem>
					<ListItemButton>
        <ListItemText>{ task.text }</ListItemText>
            <button onClick={ ()=> deleteTask(task.id)}> Delete </button>
					</ListItemButton>
				</ListItem>

	);
}

export default TaskItem