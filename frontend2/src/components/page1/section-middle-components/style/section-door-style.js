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
        flexDirection:'row',
        alignItems:'flex-start'
    },
    door_box:{
        display:'flex',
        flexDirection:'row',
    },
    btn:{
        height:'auto !important',
        width:'50px',
        backgroundColor: `${theme.palette.tertiary.gray} !important`,
        color: `white !important`,
        borderRadius:'20px !important',
        margin:'auto 20px !important',
        '&:focus':{
            backgroundColor: `rgba(0,0,0,.8) !important`,
        }
    },
    door_status_typo:{
        marginLeft:'30px !important',
        alignItems:'center !important',
        justifyContent:'center !important',
        backgroundColor:'red',
        borderRadius:'20px',
        padding:"6px 16px !important"
    }
}));