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
        alignItems:'center'
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
        backgroundColor: `${theme.palette.volkswagen.blue} !important`,
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
    },
    message_response_box:{
        minHeight:'50px !important',
        minWidth:'100% !important',
        backgroundColor:`${theme.palette.volkswagen.blue} !important`,
        border:'1px solid !important',
        borderRadius:'30px !important',
        justifyContent:'center !important',
        alignItems:'center !important',
        display:'flex',
        marginTop:'10px !important',
        marginBottom:'5px !important'
    },
    message_response_typo:{
        color:'white !important',
        maxWidth: '80% !important', // Adjust this value based on the desired number of characters and font size
        wordWrap: 'break-word',
        textAlign: 'center !important',
        fontSize:'small !important',
    }
}));