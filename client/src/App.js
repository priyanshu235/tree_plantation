import React from 'react';

import useStyles from './styles';

import logo from './images/logo.png';

import { Container, Typography, Grid, Grow, AppBar } from '@material-ui/core';

const App = () => {
    const classes = useStyles();
    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <img className={classes.image} src={logo} alt='Arts' height='60' />
                <Typography className={classes.heading} variant='h2' align='center'>Arts</Typography>
            </AppBar>
        </Container>
    )
}

export default App;