import makeStyles from '@mui/styles/makeStyles';
export const useStyles = makeStyles((theme) => ({

    maincontainer:{
        alignItems:'center',
        height:'900px',
        display:'flex !important',
        flexDirection:'column !imortant'
    },
    mainbox:{
        height:'100%',
        width:'100%',
        padding:'auto auto !important',
        display:'inline-block !important'
    },
    temp_box:{
        height:'300px',
        width:'100%',
        marginBottom:'10px !important',
        display:'inline-block !important'
    }
    ,
    door_box:{
        height:'200px',
        width:'100%',
        marginBottom:'10px !important',
        display:'inline-block !important'
        // backgroundColor:'red'
    },
    energy_box:{
        height:'200px',
        width:'100%',
        display:'inline-block !important'
        // backgroundColor:'blue'
    },
    cooling_sensor_box:{
        height:'200px',
        width:'100%',
        // backgroundColor:'blue',
        marginTop:'100px !important',
        display:'inline-block !important'
    }
}));