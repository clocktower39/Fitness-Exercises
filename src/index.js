import React from 'react';
import { render } from 'react-dom';
import App from './Components/App'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { orange, deepPurple, grey } from '@material-ui/core/colors';


const theme = createMuiTheme({
    palette: {
        primary: deepPurple,
        secondary: grey,
        type: 'dark'
    }
});

render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root'));