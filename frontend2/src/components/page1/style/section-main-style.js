import makeStyles from '@mui/styles/makeStyles';
export const useStyles = makeStyles((theme) => ({

    maincontainer:{
        alignItems:'center',
        height:'900px'
    },
    mainbox:{
        height:'100%',
        width:'100%',
        display:'flex',
        flexDirection:'column !important'
    },
    top_box:{
        marginTop:'60px !important',
        marginBottom:'30px !important',
    },
    middle_box:{
        marginTop:'60px !important',
        marginBottom:'30px !important',
    },
    not_logged_in_box:{
        margin:'50px auto !important',
        padding:"100px 50px !important",
        backgroundColor:'#eee !important',
        boxShadow:'3px 3px 3px #000 !important'
    },
    not_logged_in_typo:{
        fontSize:'Large !important',
        color:'white !important',
    }
}));