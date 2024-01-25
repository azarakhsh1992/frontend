import React,{useState} from "react";
import clsx from "clsx";
import {useStyles} from "./style/section-request-accessed-style";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from "@mui/material/TextField";
import {ServiceLog} from "../../../services/request-services";
import {useAuth} from "../../../hooks/useAuth";
import {enqueueSnackbar} from "notistack";
import {theme} from "../../../theme/Theme";


// const ArrayAccess = ['None','message 1','message 2','message 3','other']
// const ObjectAccess = {
//     'None':'NOTHING',
//     'message 1':'MSG 1',
//     'message 2':'MSG 2',
//     'message 3':'MSG 3',
//     'other':'Other'
// }


const ArrayAccess = ['Disturbance','Cleaning','Exchange','Maintenance','Measurement','other']
const ObjectAccess = {
    'Disturbance':'MSG 1',
    'Cleaning':'MSG 2',
    'Exchange':'MSG 3',
    'Maintenance':'MSG 4',
    'Measurement':'MSG 5',
    'other':'Other'
}
const SectionRequestAccessed = ({reqData,SetRequestchecked,setactiveReq,setShouldStopCountdown,setFetchResult,setServiceLog,setCount,setIsIgnored,reqResData}) => {

    const classes = useStyles();
    const [Message, setMessage] = React.useState('');
    const [Service,setService] = useState('');
    const [TextfieldMsg,setTextfieldMsg] = useState('');
    const {AuthD,setAuth} = useAuth();

    const setDefault = () =>{
        setCount(60);
        setactiveReq(null);
        setFetchResult(false);
        setServiceLog(false);
        setShouldStopCountdown(false);
        setIsIgnored(false);
    }
    const handleChange = (event) => {
        setMessage(event.target.value);
        setService(ObjectAccess[event.target.value]);
    };

    const handleButton = async (event)=>{
        const serviceLog = () => {
            let _serviceMsg = '';
            if(Message && (Message === 'other')){
                _serviceMsg = TextfieldMsg;
                return _serviceMsg;
            }
            _serviceMsg = Message;
            return _serviceMsg;
        }
        const ServiceMsg = serviceLog();
        console.log(ServiceMsg);
        const ReqId = reqData.id;
        const UserId = AuthD.user["id"];
        if(ServiceMsg==="None" || ServiceMsg===''){
            enqueueSnackbar("Please Select A service Message", {variant:'error',style:{borderRadius:'17px',},anchorOrigin:{
                    vertical:"top",
                    horizontal:"right",
                }});
            return;
        }
        const datas = await ServiceLog({'request':ReqId,"service":ServiceMsg,"user_id":UserId});
        if(datas){
            enqueueSnackbar("Service Log submitted successfully", {variant:'success',style:{borderRadius:'17px',},anchorOrigin:{
                    vertical:"top",
                    horizontal:"right",
                }});
            SetRequestchecked("completed");
        }
        setDefault();

    }
    return (
        <Container className={clsx(classes.maincontainer)}>
            <Box className={clsx(classes.mainbox)}>
                <FormControl sx={{ m: 1, minWidth: 100 }}>
                    <InputLabel id="demo-simple-select-autowidth-label" size={'normal'}><Typography fontSize={'11px'} fontWeight={'bold'}>Service Log</Typography></InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={Message}
                        onChange={handleChange}
                        autoWidth
                        label="Service Log"
                    >
                        {
                            Object.keys(ObjectAccess).map((value, index) => {
                                return (
                                    <MenuItem value={value}>{value}</MenuItem>
                                );
                            })
                        }
                    </Select>
                </FormControl>
                {Message === 'other' ? <TextField placeholder={"Please Write Service log"} multiline minRows={5}  sx={{minWidth:'300px'}} onChange={(event,value)=>{setTextfieldMsg(event.target.value);}}></TextField> : <></>}
                <Button variant={'outlined'} sx={{marginTop:'10px !important'}} onClick={(event)=>{handleButton(event);}}>
                    <Typography>
                        Submit
                    </Typography>
                </Button>
                {
                  reqResData && reqResData.message ?
                    <Box className={clsx(classes.message_response_box)}>
                        <Typography className={clsx(classes.message_response_typo)}>{reqResData && reqResData.message}</Typography>
                    </Box>
                    :
                    <></>
                }
            </Box>
        </Container>
    );
}

export default SectionRequestAccessed;