import React, { useState,useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import { createTask,updateTask } from '../../actions/tasks';

const Form = ({ currentId, setCurrentId }) => {
    const [taskData, setTaskData] = useState({ title: ' ', description: ' ' });
    const task = useSelector((state) => currentId ? state.tasks.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(task) setTaskData(task);
    }, [task])


    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId) {
            dispatch(updateTask(currentId, taskData));
        } else {
            dispatch(createTask(taskData));
        }
        clear();
        
    }

    const clear = () => {
        setCurrentId(null);
        setTaskData({ title: ' ', description: ' ' });
    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{currentId ? 'Editing' : 'Creating' } Task</Typography>
            <TextField name="title" variant="outlined" label="Title" fullWidth value={taskData.title} onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}/>
            <TextField name="description" variant="outlined" label="Description" fullWidth multiline rows={4} value={taskData.description} onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}/>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;