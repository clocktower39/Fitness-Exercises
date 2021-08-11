import React, { Component } from 'react';
import { Button, TextField, MenuItem } from '@material-ui/core';

export default class extends Component {
    state = this.getInitState();

    getInitState() {
        const { exercise } = this.props;

        return exercise ? exercise : {
            title: '',
            description: '',
            muscles: ''
        }
    }


    handleChange = name => ({ target: { value } }) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        //TODO Validate


        this.props.onSubmit({
            
            id: this.state.title.toLowerCase().replace(/ /g, '-'),
            ...this.state
        });
    }

    render(){
        const { title, description, muscles } = this.state,
        { exercise, muscles: categories } = this.props;
        return (
            <form>
                <TextField
                    label="Title"
                    value={title}
                    onChange={this.handleChange('title')}
                    margin="normal"
                    fullWidth
                />
                <br />

                <TextField
                    fullWidth
                    select
                    label="Muscles"
                    value={muscles}
                    helperText="Please select your muscle group"
                    onChange={this.handleChange('muscles')}
                >
                    {categories.map(category => <MenuItem key={category} value={category}>{category.charAt(0).toUpperCase()}{category.substr(1,category.length)}</MenuItem>)}
                </TextField>

                <br />
                <TextField
                    fullWidth
                    label="Description"
                    value={description}
                    onChange={this.handleChange('description')}
                    margin="normal"
                    multiline
                    rows={4}
                />
                <br />
                <Button
                        color="primary"
                        variant="contained"
                        onClick={this.handleSubmit}
                        disabled={!title || !muscles}
                    >
                    {exercise ? 'Edit' : 'Create'}
                </Button>
            </form>
        );
    }
    
}