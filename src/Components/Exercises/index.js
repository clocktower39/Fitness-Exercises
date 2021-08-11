import React from 'react';
import { 
    Grid,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';
import Form from './Form';

const styles = theme => ({
    paper: { 
        padding: 20, 
        overflowY: 'auto',    
        [theme.breakpoints.up('sm')]:{
            marginTop: 5,
            height: 'calc(100% - 10px)'
        },
        [theme.breakpoints.down('xs')]:{
            height: '100%'
        }        
    },
    '@global': {
        'html, body, #root': {
            height: "100%"
        }
    },
    container: {
        [theme.breakpoints.up('sm')]:{
            height: 'calc(100% - 64px - 48px)'
            
        },
        [theme.breakpoints.down('xs')]:{
            height: 'calc(100% - 56px - 48px)'
        }
    },
    item: {
        maxHeight: '100%',
        
        [theme.breakpoints.down('xs')]:{
            height: '50%'
        }
    }
       
})

export default withStyles(styles)(({ 
    classes,
    muscles,
    exercises,
    category,
    editMode,
    onSelect,
    onDelete,
    onSelectEdit,
    onEdit,
    exercise,
    exercise: {id, title='Welcome!', description='Please select an exercise from the list on the left.' 
} }) => {
    return(
    <Grid container className={classes.container}>
        <Grid item className={classes.item} xs={12} sm={6}>
            <Paper className={classes.paper}>
                {exercises.map(([group, exercises]) => {
                    if(!category || category === group){
                        return(
                            <>
                                <Typography
                                variant="h6"
                                style={{textTransform: 'capitalize'}}
                                >
                                    {group}
                                </Typography>
                                <List component="ul">
                                    {exercises.map(({ id, title }) => {
                                        return (
                                            <ListItem
                                                key={id}
                                                button
                                                onClick={() => onSelect(id)}
                                            >
                                                <ListItemText primary={title} />
                                                <ListItemSecondaryAction>
                                                    <IconButton
                                                        onClick={()=> onSelectEdit(id)}
                                                    >
                                                        <Edit></Edit>
                                                    </IconButton>
                                                    <IconButton
                                                        onClick={()=> onDelete(id)}
                                                    >
                                                        <Delete></Delete>
                                                    </IconButton>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </>
                        )
                    }
                    else{
                        return null;
                    }
                })}
            </Paper>
        </Grid>
        <Grid item className={classes.item} xs={12} sm={6}>
            <Paper className={classes.paper}>
            <Typography
                    variant="h4"
                    gutterBottom
                >
                    {title}
            </Typography>
                {editMode
                ? <Form
                    key={id}
                    muscles={muscles}
                    onSubmit={onEdit}
                    exercise={exercise}
                />
            : <>

                <Typography
                    variant="subtitle1"
                >
                {description}
                </Typography>
            </>}

            </Paper>
        </Grid>
    </Grid>
    );
})