import { ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

const TaskItem = ({ task}) => {
  return (

				<ListItem>
					<ListItemButton>
						<ListItemText>{task.text}</ListItemText>
					</ListItemButton>
				</ListItem>

	);
}

export default TaskItem