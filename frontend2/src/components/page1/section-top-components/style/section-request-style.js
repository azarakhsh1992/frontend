import makeStyles from '@mui/styles/makeStyles';
export const useStyles = makeStyles((theme) => ({

    maincontainer:{
        alignItems:'center',
        height:'auto !important',
    },
    mainbox:{
        height:'100%',
        width:'100%',
        // backgroundColor:'red',
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start'
    },
    message_box:{
        display:'flex',
        flexDirection:'column',
        width:'300px !important',
        height:'100px !important',
        backgroundColor:`${theme.palette.tertiary.blue}`,
        alignItems:'center !important',
        borderRadius:'30px !important',
    },
    btn_box:{
        display:'flex',
        flexDirection:'column',
        width:'100% !important',
        alignItems:'center !important',
    },
    btn:{
        height:'auto !important',
        width:'70px',
        backgroundColor: `${theme.palette.tertiary.gray} !important`,
        color: `white !important`,
        borderRadius:'20px !important',
        margin:'10px 0 !important',
        '&:focus':{
            backgroundColor: `rgba(0,0,0,.8) !important`,
        }
    },
    btn_typo:{
        textTransform:'none !important',
    },
    message_typo:{
        textTransform:'none !important',
        margin:'20px !important',
        color:'white !important'
    }
}));