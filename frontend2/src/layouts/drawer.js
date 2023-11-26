import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useAuth} from "../hooks/useAuth";
import {Divider} from "@mui/material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import LogoutIcon from '@mui/icons-material/Logout';
import ContactMailIcon from '@mui/icons-material/ContactMail';
export default function SwipeableTemporaryDrawer({links,lang}) {
    const {AuthD,setAuth} = useAuth();
    const history = useNavigate();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {

            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const icons = (index) => {
        if(index===0){return <AccountBoxIcon/>}
        else if(index===1){return <HelpCenterIcon/>}
        else{return <LegendToggleIcon/>}
    }
    const handledrawer = (event,index) => {
        if(index===0){
            history('/Account');
        }else if (index===1){
            history('/Request');
        }
        else if (index===2){
            history('/Monitoring');
        }
        else if (index===3){
            localStorage.removeItem('signed-user');history('/');window.location.reload();
        }
        return;
    }
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {AuthD && links.map((text, index) => (
                    <ListItem key={index}>
                        <ListItemButton key={index} onClick={(event)=>handledrawer(event,index)}>
                            <ListItemIcon >
                                {icons(index)}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <Divider/>
                {AuthD && <ListItem key={3}>
                    <ListItemButton key={3} onClick={(event)=>handledrawer(event,3)}>
                        <ListItemIcon >
                            <LogoutIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'logout'} />
                    </ListItemButton>
                </ListItem>}
                <ListItem key={4}>
                    <ListItemButton key={4} onClick={(event)=>handledrawer(event,4)}>
                        <ListItemIcon >
                            <ContactMailIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Contact us'} />
                    </ListItemButton>
                </ListItem>
            </List>
            {/*<Divider />*/}
            {/*<List>*/}
            {/*    {['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
            {/*        <ListItem key={text} disablePadding>*/}
            {/*            <ListItemButton>*/}
            {/*                <ListItemIcon>*/}
            {/*                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
            {/*                </ListItemIcon>*/}
            {/*                <ListItemText primary={text} />*/}
            {/*            </ListItemButton>*/}
            {/*        </ListItem>*/}
            {/*    ))}*/}
            {/*</List>*/}
        </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button variant={'outlined'} onClick={toggleDrawer(anchor, true)} sx={{margin:'20px 0px 0px 20px'}}><MenuIcon sx={{bgcolor:'transparent'}}></MenuIcon></Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                        PaperProps={{ style: { width: 180, overflowX: 'hidden' } }}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}