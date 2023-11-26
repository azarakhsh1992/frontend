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
    btn:{
        height:'auto !important',
        width:'100px',
        backgroundColor: `${theme.palette.tertiary.gray} !important`,
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
    }
}));