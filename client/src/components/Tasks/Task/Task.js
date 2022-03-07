import React from 'react';
import { Card,CardActions,Button,Typography,CardContent } from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import { deleteTask  } from '../../../actions/tasks';

import useStyles from './styles';

const Task = ({ task,setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Card className={classes.card}>
            <div className={classes.overlay2}>
                <Button style={{color:'white'}} size="small" onClick={() => {setCurrentId(task._id)}}>
                    <MoreHorizIcon fontSize="small" />
                </Button>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{task.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{task.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => {dispatch(deleteTask(task._id))}}>
                    <CheckBoxIcon fontSize="small" />
                    COMPLETED
                </Button>
            </CardActions>
        </Card> 
    );
}

export default Task;