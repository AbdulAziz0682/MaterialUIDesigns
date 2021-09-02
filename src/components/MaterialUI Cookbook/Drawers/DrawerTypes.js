import React, {useState} from 'react';
import { Drawer, Grid, Button } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

export default function DrawerTypes(props){
    let {classes, variant = 'temporary'} = props;
    let [open, setOpen] = useState(false);
    return (
        <Grid container justifyContent="space-between">
            <Grid item>
                <Drawer elevation={3} variant={variant} open={open} onClose={()=>setOpen(false)}>
                    <List>
                        <ListItem button onClick={()=>setOpen(false)}>
                            <ListItemText>Home</ListItemText>
                        </ListItem>
                        <ListItem button onClick={()=>setOpen(false)}>
                            <ListItemText>Page2</ListItemText>
                        </ListItem>
                        <ListItem button onClick={()=>setOpen(false)}>
                            <ListItemText>Page3</ListItemText>
                        </ListItem>
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