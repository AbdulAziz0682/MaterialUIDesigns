import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import DrawerNavigation from './components/MaterialUI Cookbook/Drawers/DrawerNavigation';
import { BrowserRouter } from 'react-router-dom';
//import DrawerTypes from './components/MaterialUI Cookbook/Drawers/DrawerTypes';
//import FixedAppBar from './components/MaterialUI Cookbook/AppBar/FixedAppBar';
//import SignIn from './components/Forms/SignIn';
//import SignIn from './components/SignIn';
//import FillingSpace from './components/MaterialUI Cookbook/Grids/FillingSpace';

const useStyles = makeStyles({
    formsContainer: {
        display: 'flex',
        justifyContent: 'space-arround',
        alignItems: 'center'
    }
})

export default function App(){
    //const styles = useStyles();
    return (
        <div style={{display: 'flex', width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center", backgroundColor: "skyblue"}}>
            <BrowserRouter>
                <DrawerNavigation />
            </BrowserRouter>
        </div>
    )
}