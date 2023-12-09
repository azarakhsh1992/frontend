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
    modal_box:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "90%",
        height:'500px',
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        display:'flex',
        flexDirection:'column',
        padding:'10px 10px !important'
        // p: 4,
    },
    modal_box_top:{
        display:'flex !important',
        flexDirection:'row !important',
    },
    modal_box_bot:{
        display:'flex !important',
        flexDirection:"column !important"
    },
    history_box:{
        display:"flex",
        flexDirection:'column',
    },
    history_box_element:{
        display:'flex',
        flexDirection:'row',
    },
    btn:{
        height:'auto !important',
        width:'70px',
        backgroundColor: `${theme.palette.tertiary.gray} !important`,
        color: `white !important`,
        borderRadius:'20px !important',
        margin:'auto 0 !important',
        '&:focus':{
            backgroundColor: `rgba(0,0,0,.8) !important`,
        }
    },
    btn_modal_close:{
        margin:'10px 0 0 220px !important',
        width:'auto !important'
    },
    btn_typo:{
        textTransform:'none !important',
    },
    temp_typo:{
        textOverflow:"ellipsis !important",
        overflow:"hidden",
        whiteSpace:"nowrap",
    },
    history_typo:{
        marginTop:'10px !important',
        '&:not(:last-child)':{
            marginRight:'50px !important'
        }
    }
}));