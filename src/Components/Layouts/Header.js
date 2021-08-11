import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core/';
import CreateDialog from '../Exercises/Dialog';
import { withStyles } from '@material-ui/styles';

const styles = {
    flex: {
        flex: 1
    }
}

export default withStyles(styles)(({ classes }) => {
    return(
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h5" color="inherit" className={classes.flex}>
                Fitness Exercises
            </Typography>
            <CreateDialog />
            </Toolbar>
        </AppBar>
    );
})