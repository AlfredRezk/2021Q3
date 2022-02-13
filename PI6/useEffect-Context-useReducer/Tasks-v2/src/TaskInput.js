import React, { useContext, useState} from 'react'
import TasksContext from './context/TasksContext'
import { Card, CardContent, Button, Typography, TextField } from "@mui/material";

const TaskInput = (props) => {

  const [enteredTask, setEnteredTask] = useState('');
  const [isValid, setIsValid] = useState(true);
  const { addTask} = useContext(TasksContext)

  const inputHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true)
    } else { 
      setIsValid(false)
    }
      setEnteredTask(e.target.value)
	};

  const submitHandler = (e) => { 
    e.preventDefault();
    const task = { id: Date.now().toString(), text: enteredTask };
    addTask(task)
    setEnteredTask('')
  }

  return (
    <Card sx={ {marginTop:'1rem'}} raised>
      <CardContent>
        <form onSubmit={ submitHandler}>
          <Typography color="text.secondary" gutterBottom variant='h4' align="center"> ADD TASK </Typography>
          <TextField error={ isValid? false :true}
            id="outlined-basic"
            helperText={ !isValid&&"Incorrect entry." }
            label="Enter a Task"
            variant="outlined"
            sx={ { width: '100%', marginTop: '1rem' } }
            onChange={ inputHandler }
            value={ enteredTask}/>
          <div className="text-center">
            <Button variant="contained" type="submit" color="primary" sx={ { margin: '1rem auto' } }
              disabled={ isValid ? false : true }> ADD</Button>
          </div>
        </form>
     </CardContent>
			
		</Card>
	);
}

export default TaskInput