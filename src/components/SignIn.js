import React from 'react';
import { Typography, Container, InputAdornment, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '50vh',
        paddingInline: '10%'
    },
    heading: {
        backgroundColor: 'blueviolet',
        textAlign: 'center',
        color: 'white',
        borderRadius: '0 0 50% 50%',
        width: '100%',
        height: '30%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default function SignIn(props){
    const styles = useStyles();
    return (
        <Container maxWidth="md" component="main" className={styles.form}>
            <Typography variant="h4" className={styles.heading}>
                Welcome
            </Typography>
            <TextField 
                type="text" 
                variant="outlined" 
                label="Email" 
                fullWidth
                
            />
            <TextField type="password" variant="outlined" label="Password" fullWidth/>
            <Button type="button" variant="contained" fullWidth style={{backgroundColor: 'blueviolet', color: "white"}}>Sign In</Button>
        </Container>
    )
}