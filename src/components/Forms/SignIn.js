import React from 'react';
import { Typography, Grid, Paper, InputAdornment } from '@material-ui/core';
import { TextField, Button, Checkbox, FormControlLabel, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VpnKeyIcon from '@material-ui/icons/VpnKey'

const useStyles = makeStyles(theme => ({
    paper: {
        width: "30%", 
        minWidth: "230px",
        backgroundColor: theme.palette.primary.main,
        borderRadius: 4
    },
    left: {
        display: "flex", 
        flexDirection: "column", 
        width: "100%", 
        height: "100%",
        justifyContent: "center", 
        alignItems: "center",
        color: "white",
        marginTop: '2em',
        marginBottom: '2em',
        borderRadius: 4
    },
    right: {
        borderRadius: 4,
        backgroundColor: "white",
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        paddingInline: '5%',
        marginTop: '0.5em',
        marginBottom: '0.5em'
    },
    my: {
        marginTop: '0.5em',
        marginBottom: '0.5em'
    },
    loginButton: {
        marginTop: '0.5em',
        marginBottom: '0.5em',
        color: "white",
    },
    borderRadius: {
    }
}))

export default function SignIn(props){
    const styles = useStyles();
    return (
        <Paper elevation={3} className={styles.paper}>
            <Grid container direction="column">
                <Grid item>
                    <div className={styles.left}>
                        <Typography variant="h4">
                            Login
                        </Typography>
                    </div>
                </Grid>
                <Grid item className={styles.right}>
                    <form className={styles.form}>
                        <TextField 
                            id="email" size="small" 
                            variant="outlined" 
                            label="Email" 
                            className={styles.my}    
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MailOutlineIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                        <TextField 
                            id="password" size="small" 
                            type="password"
                            variant="outlined" 
                            label="Password" 
                            className={styles.my}   
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <VpnKeyIcon />
                                    </InputAdornment>
                                )
                            }}  
                        />
                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <FormControlLabel
                                control={<Checkbox name="rememberMe" />}
                                label="Remember Me"
                            />
                            <Link>
                                Forgot Password
                            </Link>
                        </div>
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary" 
                            className={styles.loginButton}
                        >Log in</Button>
                     </form>
                </Grid>
            </Grid>
        </Paper>
    )
}