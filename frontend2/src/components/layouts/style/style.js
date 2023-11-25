import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const useStyleFigma = makeStyles((theme) => ({
    root: {
        backgroundColor:`#eee !important`,
        [theme.breakpoints.down('sm')]: {
            margin:'10px'
        },
        borderRadius:'50px',
        padding:'50px 50px',
    },
}));

export const useStyleHomePage = makeStyles((theme) => ({
    containermain:{
        alignItems:'center !important',
        display:'flex !important',
        flexDirection:'row !important',
        margin:'50px 0px !important',
        // paddingLeft:'500px !important',
    },
    containerchild1:{
        alignItems:'center !important',
        display:'flex !important',
        flexDirection:'column !important',
        // paddingLeft:'500px !important',
    },
    containerchild2:{
        alignItems:'center !important',
        display:'flex !important',
        flexDirection:'column !important',
        height:'auto !important',
        // paddingLeft:'500px !important',
    },
    containerchild3:{
        alignItems:'center !important',
        display:'flex !important',
        flexDirection:'row !important',
        justifyContent:'center',
        // paddingLeft:'500px !important',
    },
    btn: {
        backgroundColor:`#ddd !important`,
        borderRadius:'30px !important',
        width:'250px',
        '&:not(:last-child)':{
            marginBottom:'20px',
        },
        '&:focus':{
            backgroundColor:'#f3f3f3 !important',
        },
        [theme.breakpoints.down('sm')]: {
            margin:'10px'
        },
    },
    btnlogout:{
        backgroundColor:`${theme.palette.tertiary.red} !important`,
    },
    btn_homepage:{
        margin:'auto auto !important',
        padding:'auto auto !important',
        width:'auto !important',
        display:'inline-block !important',
    },
    btnqr_typo: {
        fontSize:'small !important',
        textDecoration:'none !important',
        textTransform:'none',
    },
    typo_section2: {
        textDecoration:'none !important',
        textTransform:'none',
    }
}));