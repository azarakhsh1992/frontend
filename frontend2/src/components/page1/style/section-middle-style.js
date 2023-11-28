import makeStyles from '@mui/styles/makeStyles';
export const useStyles = makeStyles((theme) => ({

    maincontainer:{
        alignItems:'center',
        height:'900px'
    },
    mainbox:{
        height:'100%',
        width:'100%',
        padding:'auto auto !important'
    },
    temp_box:{
        height:'300px',
        width:'100%',
        marginBottom:'10px !important'
    }
    ,
    door_box:{
        height:'200px',
        width:'100%',
        marginBottom:'10px !important'
        // backgroundColor:'red'
    },
    energy_box:{
        height:'200px',
        width:'100%',
        // backgroundColor:'blue'
    }
}));