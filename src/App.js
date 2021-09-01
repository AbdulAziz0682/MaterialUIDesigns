import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import SignIn from './components/SignIn';

const useStyles = makeStyles({
    formsContainer: {
        display: 'flex',
        justifyContent: 'space-arround',
        alignItems: 'center'
    }
})

export default function App(){
    const styles = useStyles();
    return (
        <div>
            <Typography variant="h3" align="center" color="textPrimary">Forms</Typography>
            <div className={styles.formsContainer}>
                <SignIn />
            </div>
        </div>
    )
}