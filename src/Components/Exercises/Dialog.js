import React, { Component } from 'react';
import { 
    IconButton,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Form from './Form';
import { withContext } from '../context'



class CreateDialog extends Component {
    state = {
        open: false,
        exercise: {
            title: '',
            description: '',
            muscles: ''
        }
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleFormSubmit = (exercise) => {
        this.handleToggle();

        this.props.onCreate(exercise);
    }


    render(){
        const { open } = this.state,
            { muscles } = this.props;
        return(
            <>
                <IconButton color='secondary' onClick={this.handleToggle}>
                    <AddCircleIcon />
                </IconButton>
            
                <Dialog
                    open={open}
                    onClose={this.handleToggle}
                    fullWidth
                >
                
                    <DialogTitle>Create a New Exercise</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please fill out the form below.
                        </DialogContentText>
                        <Form
                            muscles={muscles}
                            onSubmit={this.handleFormSubmit}
                        />
                    </DialogContent>
    
                </Dialog>
            </>
        );
    }
    
}

export default withContext(CreateDialog)