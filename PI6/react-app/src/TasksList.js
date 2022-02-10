import { CardContent, List , Card} from '@mui/material'
import React from 'react'
import TaskItem from './TaskItem'

const TasksList = (props) => {
  const { tasks} = props
  return (
    <Card sx={ { marginTop: '1rem'}}>
			<CardContent>
				<List>
					{tasks.map((task) => (
						<TaskItem task={task} key={task.id} />
					))}
				</List>
			</CardContent>
		</Card>
	);
}

export default TasksList