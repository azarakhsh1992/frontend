import makeStyles from '@mui/styles/makeStyles';
export const useStyles = makeStyles((theme) => ({

    maincontainer:{
        alignItems:'center',
        height:'300px',
        display:'flex',
        justifyContent:'center !important',
        alignContent:'center !important'
    },
    mainbox:{
        height:'100%',
        width:'100%',
        // backgroundColor:'red',
        display:'flex',
        flexDirection:'column',
        alignItems:'center !important'
    },
    strom_box:{
        marginBottom:'20px !important',
        display:'flex',
        flexDirection:'row'
    },
    energie_box:{
        marginBottom:'20px !important',
        display:'flex',
        flexDirection:'row'
    },
    energy_typo:{
        width:'120px',
        height:'30px',
        marginLeft:'30px !important',
        alignItems:'center !important',
        justifyContent:'center !important',
        border:'2px solid red',
        borderRadius:'20px',
        textAlign:'center !important',
        fontSize:'small !important',
        display:'flex',
        boxShadow:'2px 5px 10px rgba(0,0,0,.4)',
        '&:not(:last-child)':{
            marginRight:'20px !important'
        }
    },
    energy_typo_strom:{
        borderColor:'red !important',
    },
    energy_typo_energie:{
        borderColor:'green !important',
    },
    energy_typo_strom_val:{
        backgroundColor:'red',
        color:'white !important'
    },
    energy_typo_energie_val:{
        borderColor:'green !important',
        backgroundColor:'green',
        color:'white !important'
    }
}));