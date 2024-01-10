import * as React from "react";
import {useEffect, useState} from "react";
// Material Ui
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// Multi class import
import clsx from "clsx";
// Style
import {useStyles} from "./style/section-request-style";
// components
import AlertDialogSlide from "./section-request-components/request-dialogbox";
import {CircularProgress} from "@mui/material";
import {CancelRequest, CheckRequestButton, SetRequest} from "../../../services/request-services";
import SectionRequestAccessed from "./section-request-accessed";



const SectionRequest = ({SetRequestchecked,Requestchecked,DoorQr,AuthD, reqData, setreqData}) => {

    // style
    const classes = useStyles();
    //state to make request
    // countdown state
    const [count, setCount] = useState(60);
    // active request
    const [activeReq,setactiveReq] = useState(null);
    //stop condition
    const [fetchResult, setFetchResult] = useState(false);
    const [shouldStopCountdown, setShouldStopCountdown] = useState(false);
    const [isIgnored, setIsIgnored] = useState(false);
    //active service log
    const [serviceLog,setServiceLog] = useState(false);
    console.log(Requestchecked);
    useEffect(()=>{
        if(DoorQr !== null){
            if(Requestchecked === "accept"  && !serviceLog){
                setCount(60);
                SetRequestchecked("counting");
                console.log(Requestchecked);
            }
            let interval = setInterval(() => {
                if(Requestchecked==="counting"  && !serviceLog){
                    setCount(prevCount => {
                        // You can add any additional logic here if needed
                        // For example, stopping the countdown when it reaches zero
                        if (prevCount < 1) {
                            clearInterval(interval);
                            SetRequestchecked("ignored");
                            return 0; // Stop at zero
                        }
                        return prevCount - 1;
                    });
                }
            }, 1000);

            // Clear interval on component unmount
            return () => clearInterval(interval);
        }
    },[Requestchecked]);

// Stop countdown if needed
    useEffect(() => {
        if (shouldStopCountdown) {
            setCount(0);
        }
    }, [shouldStopCountdown]);

// Fetch data every 3 seconds
    useEffect(() => {
        const fetchDataInterval = setInterval(() => {
            if(Requestchecked === "counting"  && !serviceLog){
                const getData = async () => {
                    const data = await CheckRequestButton({"request":{
                            'id': `${reqData ? reqData.id : null}`,
                        }},AuthD.token);
                    if(data && data.access == true){
                        SetRequestchecked("onprogress");
                        setCount(0);
                        setServiceLog(true);
                    }
                }
                getData();
            }
        }, 3000);

        return () => clearInterval(fetchDataInterval);
    }, [Requestchecked,reqData]);

    // Set ignored state if countdown reaches zero
    useEffect(() => {
        if (count === 0 && !shouldStopCountdown) {
            setIsIgnored(true);
        }
    }, [count, shouldStopCountdown]);

    useEffect(()=>{
        if(Requestchecked==="ignored" && reqData && !serviceLog){
            setreqData(null);
            console.log(reqData);
            const getData = async () => {
                const data = await CancelRequest({"request":{
                        'id': `${reqData.id}`,
                    }},AuthD.token);
            }
            getData();
        }
    },[Requestchecked])

    const handleRequest = (event) => {
        // SetRequestchecked("cancel");
        setCount(0);
        // setIsIgnored(true);
    }
    return (
            <Container className={clsx(classes.maincontainer)}>
                <Box className={clsx(classes.mainbox)}>
                    {
                        serviceLog === false ?
                            <>
                                <Box className={clsx(classes.message_box)}>
                                    <Typography className={clsx(classes.message_typo)}>
                                        {Requestchecked === "onprogress" ? "u can open the door" : `Access granted \n Please Push the Button `}
                                    </Typography>
                                    {/*<Typography>${count}</Typography>*/}
                                    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                                    <CircularProgress/>
                                    <Box
                                        sx={{
                                            top: 0,
                                            left: 0,
                                            bottom: 0,
                                            right: 0,
                                            position: 'absolute',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Typography variant="caption" component="div" color="white" fontWeight={'bold'} fontSize={'medium'}>
                                            {count}
                                        </Typography>
                                    </Box>
                                </Box>
                                </Box>
                                <Box className={clsx(classes.btn_box)}>
                                    <Button variant={"outlined"} className={clsx(classes.btn)} onClick={(event)=>{handleRequest(event)}}>
                                        <Typography>Cancel</Typography>
                                    </Button>
                                </Box>
                            </>
                        :
                        <>
                            <SectionRequestAccessed/>
                        </>
                    }
                </Box>
            </Container>
    );
}

export default SectionRequest;