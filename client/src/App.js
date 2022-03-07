import React, { useEffect,useState } from 'react';
import { Container, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getTasks } from './actions/tasks';
import Tasks from './components/Tasks/Tasks';
import Form from './components/Form/Form';
import useStyles from './styles';
import './index.css';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasks());
    }, [currentId,dispatch]);
    return (
        <div>
            <Container>
                <Typography variant="h4" className={classes.heading}>Tasks Management</Typography>
            </Container>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={8}>
                            <Tasks setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </div>
        
    );
}

export default App;