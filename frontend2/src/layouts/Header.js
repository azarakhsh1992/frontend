import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {AppBar, Box, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme} from "@mui/material";
import ApiIcon from '@mui/icons-material/Api';
import SwipeableTemporaryDrawer from './drawer';
import Headerfirst from './headercomponents/headerfirst';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {useAuth} from "../hooks/useAuth";


const links = ["History","Scan QrCode"];
const dulinks = ["Geschäft","Galerie","über uns"];

const Header = () => {

    const {AuthD, setAuth} = useAuth();
    const muiTheme = useTheme();
    const isMatch = useMediaQuery(muiTheme.breakpoints.down('md'));
    const [lang,setLang] = useState('en');
    const [tab,setTabs] = useState('');

    const history = useNavigate();
    const TabHandler = (event,value) => {
        let newValue = value;
    };
    const ContactUs = (event) => {
        window.open('https://wa.me/', '_blank');
    };
    const Callus = (event) => {
        window.location.href = 'tel:';
    }
    const heighApp = isMatch ? '80px':'150px';
    return (
        <AppBar sx={{height:heighApp,bgcolor:'#333133', boxShadow:'0', position:'sticky'}}>
            <Grid position={'absolute'} justifyContent={'center'} width={'100%'} height={'100px'}>
                <Typography variant="h4" align="center" marginTop={'20px'} color={'white'}>
                    VOLKSWAGEN
                </Typography>
            </Grid>
            {!isMatch ?
                <Toolbar>
                    <Headerfirst links={(AuthD && (lang === 'en' ? links : dulinks))} lang={lang}/>
                    {/*<Box display={'flex'} flexDirection={'column'} sx={{marginRight:2, color:'white'}} marginTop={'50px'}>*/}
                    {/*    <Button variant={'outlined'} sx={{height:'7px',width:'7px' , marginBot:'10px'}}>du</Button>*/}
                    {/*    <Button variant={'contained'} sx={{height:'7px',width:'7px' , marginTop:'10px'}}>en</Button>*/}
                    {/*</Box>*/}
                </Toolbar>
                :
                <Box sx={{display:'flex',width:'100%', height:'100%', marginTop:'2px'}}>
                    <SwipeableTemporaryDrawer links={(AuthD && (lang === 'en' ? links : dulinks))} lang={lang}/>
                </Box>
            }
        </AppBar>
    );
}

export default Header;