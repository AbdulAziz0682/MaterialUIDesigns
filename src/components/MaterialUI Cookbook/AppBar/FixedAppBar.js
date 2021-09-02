import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
})

const FixedAppBar = withStyles(styles)(({classes}) =>{
    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="subtitle1"
                        color="inherit"
                        className={classes.flex}
                    >Title</Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            {
                new Array(500).fill(null).map((item, idx)=><li key={idx}>{idx}</li>)
            }
        </div>
    )
})

export default FixedAppBar;