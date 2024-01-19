import makeStyles from '@mui/styles/makeStyles';
export const useStyles = makeStyles((theme) => ({

    maincontainer:{
        alignItems:'center',
        height:'300px',
    },
    mainbox:{
        height:'100%',
        width:'100%',
        // backgroundColor:'red',
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start'
    },
    btn_box:{
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-start !important',
        '&:not(:last-child)':{
            marginBottom:"30px",
        },
    },
    btn_box_temp:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginLeft:"10px",
        '&:not(:last-child)':{
            marginRight:'10px'
        }
    },
    title_box:{
        display:'flex',
        flexDirection:'row !important',
    },
    btn:{
        height:'auto !important',
        width:'70px',
        backgroundColor: `${theme.palette.volkswagen.blue} !important`,
        color: `white !important`,
        borderRadius:'20px !important',
        margin:'auto 0 !important',
        '&:focus':{
            backgroundColor: `rgba(0,0,0,.8) !important`,
        }
    },
    btn_typo:{
        textTransform:'none !important',
    },
    temp_typo:{
        textOverflow:"ellipsis !important",
        overflow:"hidden",
        whiteSpace:"nowrap",
    },
    title_typo:{
        height:'30px !important',
        display:'flex',
        justifyContent:'center !important',
        alignItems:'center !important',
        marginRight:'5px !important',
        marginLeft:'0px !important'
    },
    title_key:{
        borderRadius:'20px !important',
        minWidth:'80px !important',
        border:`2px solid ${theme.palette.volkswagen.blue} !important`,
    }
}));