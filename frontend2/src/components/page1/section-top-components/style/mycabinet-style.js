import makeStyles from '@mui/styles/makeStyles';
export const useStyles = makeStyles((theme) => ({

    maincontainer:{
        alignItems:'center',
    },
    mainbox:{
        height:'30vh',
        width:'100%',
        // backgroundColor:'red',
        position:'relative'
    },
    top_box_sectiontop:{
        height:'100%',
        width:'100%',
        display:'flex',
        flexDirection:'row',
        position:'absolute'
    },
    leftbox:{
        height:'100%',
        width:'50%',
        // backgroundColor:'black',
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start'
    },
    rightbox:{
        height:'100%',
        width:'50%',
        // backgroundColor:'blue',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    btn:{
        height:'auto !important',
        width:'60%',
        backgroundColor: `${theme.palette.tertiary.gray} !important`,
        color: `white !important`,
        borderRadius:'20px !important',
        margin:'auto auto !important',
        '&:focus':{
            backgroundColor: `rgba(0,0,0,.8) !important`,
        }
    },
    btn_logout:{
        backgroundColor:'red !important'
    },
    btn_typo:{
        textTransform:'none !important',
    }
}));