import { CardContent, List , Card, Typography} from '@mui/material'
import React, { Fragment, useContext}from 'react'
import TasksContext from './context/TasksContext'
import TaskItem from './TaskItem'

const TasksList = (props) => {

  const { tasks} = useContext(TasksContext)
  
  
  return (
		<Fragment>
			{tasks.length > 0 && <Card sx={{ marginTop: "1rem" }}>
					<CardContent>
						<List>
							{tasks.map((task) => (
								<TaskItem task={task} key={task.id} />
							))}
						</List>
					</CardContent>
				</Card>
      }
      
      { tasks.length === 0 && <Typography variant="h6" align="center" style={ {marginTop: '2rem'}}> No Tasks </Typography>}
		</Fragment>
	);
}

export default TasksList