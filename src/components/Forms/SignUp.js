import React from 'react';
import { Grid, Button, Paper, Typography, TextField } from '@material-ui/core';

export default function SignUp(props){
    return (
        <Grid container justifyContent="space-around">
            <Grid item xs={10} sm={5} md={4}>
                <Paper elevation={6} className="p-4" style={{borderRadius: "8px"}}>
                    <Grid container justifyContent="space-between" direction="column">
                        <Grid item>
                            <div className="flex justify-between items-center gap-3">
                                <div className="flex">
                                    <Typography variant="subtitle2">Welcome to &nbsp;</Typography>
                                    <Typography variant="subtitle2" color="primary">LOREM</Typography>
                                </div>
                                <div className="flex flex-col md:flex-row">
                                    <Typography variant="caption" className="text-gray-600">Have an account?</Typography>
                                    <Typography variant="caption" color="primary">Sign in</Typography>
                                </div>                                
                            </div>
                        </Grid>
                        <Grid item>
                            <Typography variant="h3" className="pt-2">Sign Up</Typography>
                        </Grid>
                        <Grid item className="py-6 flex flex-col">
                            <TextField label="Email" variant="outlined" size="small" fullWidth />
                            <div className="py-2 w-full flex flex-col justify-end gap-2 md:flex-row md:justify-between">
                                <TextField label="Username" variant="outlined" size="small" />
                                <TextField label="Contact" variant="outlined" size="small" type="number" />
                            </div>
                            <TextField label="Password" variant="outlined" size="small" fullWidth />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" type="submit" fullWidth>Sign Up</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}