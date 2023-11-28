import makeStyles from '@mui/styles/makeStyles';
export const useStyles = makeStyles((theme) => ({

    maincontainer:{
        alignItems:'center',
        height:'500px'
    },
    mainbox:{
        height:'100%',
        width:'100%',
        display:'flex',
        flexDirection:'column !important'
    },
    btn_box:{
        display:'flex',
        alignItems:'center !important',
        marginTop:'5px !important',
        flexDirection:'row !important'
    },
    btn:{
        height:'auto !important',
        width:'40%',
        backgroundColor: `${theme.palette.tertiary.gray} !important`,
        color: `white !important`,
        borderRadius:'20px !important',
        margin:'auto auto !important',
        '&:focus':{
            backgroundColor: `rgba(0,0,0,.8) !important`,
        }
    },
    btn_typo:{
        textTransform:'none !important',
    }
}));