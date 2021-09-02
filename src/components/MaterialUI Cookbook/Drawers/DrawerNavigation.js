import React, {useState} from 'react';
import {Route, Link, Switch, NavLink} from 'react-router-dom';

import {withStyles} from '@material-ui/core/styles';
import { Drawer, Grid, Button } from '@material-ui/core';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import WebIcon from '@material-ui/icons/Web';

const styles = theme => ({
    alignContent: {
        alignSelf: 'center'
    },
    activeListItem: {
        color: theme.palette.primary.main
    }
});

const NavListItem = withStyles(styles)(({classes, Icon, text, active, ...other})=>{
    return (
        <ListItem component={NavLink} {...other}>
            <ListItemIcon className={active ? classes.activeListItem : ''}>
                <Icon />
            </ListItemIcon>
            <ListItemText className={active ? classes.activeListItem : ''}>
                {text}
            </ListItemText>
        </ListItem>
    )
});

const NavItem = props => {
    return (
        <Switch>
            <Route exact path={props.to} render={()=><NavListItem active={true} {...props} />} />
            <Route path="/" render={() => <NavListItem {...props} />} />
        </Switch>
    )
}

function DrawerNavigation({classes}){
    let [open, setOpen] = useState(false);
    return (
        <Grid container justifyContent="space-between">
            <Grid item className={classes.alignContent}>
                <Route exact path="/" render={()=><Typography>Home</Typography>} />
                <Route exact path="/page2" render={()=><Typography>Page2</Typography>} />
                <Route exact path="/page3" render={()=><Typography>Page3</Typography>} />
            </Grid>
            <Grid item>
                <Drawer className={classes.drawerWidth} open={open} onClose={()=>setOpen(false)}>
                    <List>
                        <NavItem to="/" text="Home" Icon={HomeIcon} onClick={()=>setOpen(false)} />
                        <NavItem to="/page2" text="Page 2" Icon={WebIcon} onClick={()=>setOpen(false)} />
                        <NavItem to="/page3" text="Page 3" Icon={WebIcon} onClick={()=>setOpen(false)} />
                    </List>
                </Drawer>
            </Grid>
            <Grid item>
                <Button onClick={()=>setOpen(!open)}>
                    {open ? 'Hide' : 'Show'} Drawer
                </Button>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(DrawerNavigation);