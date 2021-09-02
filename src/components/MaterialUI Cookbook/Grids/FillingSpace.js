import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid, Chip } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
});

function FillingSpace({classes}){
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <Grid container justifyContent="space-around">
                            <Grid item>
                                <Chip label="xs=12" />
                            </Grid>
                            <Grid item>
                                <Chip label="sm=6" />
                            </Grid>
                            <Grid item>
                                <Chip label="md=3" />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <Grid container justifyContent="space-around">
                            <Grid item>
                                <Chip label="xs=12" />
                            </Grid>
                            <Grid item>
                                <Chip label="sm=6" />
                            </Grid>
                            <Grid item>
                                <Chip label="md=3" />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <Grid container justifyContent="space-around">
                            <Grid item>
                                <Chip label="xs=12" />
                            </Grid>
                            <Grid item>
                                <Chip label="sm=6" />
                            </Grid>
                            <Grid item>
                                <Chip label="md=3" />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <Grid container justifyContent="space-around">
                            <Grid item>
                                <Chip label="xs=12" />
                            </Grid>
                            <Grid item>
                                <Chip label="sm=6" />
                            </Grid>
                            <Grid item>
                                <Chip label="md=3" />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(FillingSpace);