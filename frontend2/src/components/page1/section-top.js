import React, {useState} from "react";
// material ui
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
// multi class import
import clsx from "clsx";
// style
import {useStyles} from "./style/section-top-style";
//components
import SectionRequest from "./section-top-components/section-request";
import RequestDialogSlide from "./section-top-components/section-request-components/request-dialogbox";
import SectionRequestRejected from "./section-top-components/section-request-rejected";
import Mycabinet from "./section-top-components/mycabinet";


const SectionTop = ({QrScanned,SetQrScanned,RequestChecked,SetRequestChecked,setQr,DoorQr,AuthD,MonitoringData,SetMonitoringData,setHomePageState}) => {

    //request data
    const [reqData,setreqData] = useState(null);
    const [myCabinetopen,setMyCabinetOpen] = useState(false);
    const [requestRejected,setRequestRejected] = useState(true);
    const classes = useStyles();

    const HandleReject = () => {
        setTimeout(()=>{
            setreqData("cancel");
        },3000);
    }

    const HandleHomePage = (val) => {
        setHomePageState(val);
        // window.location.reload();
    }

    const HandleQrScan = (val) => {
        setHomePageState(val);
        SetQrScanned(null);
        SetMonitoringData(null);
        // window.location.reload();
    }

    return (
        <Container className={clsx(classes.maincontainer)}>
            <Box className={clsx(classes.mainbox)}>
                <Fade in={((RequestChecked !== "accept")&&(RequestChecked!=="counting")&&(RequestChecked!=="onprogress"))} timeout={300}>
                    <Box className={clsx(classes.top_box_sectiontop)}>
                        <Box className={clsx(classes.leftbox)}>
                            <Button variant={"contained"} className={clsx(classes.btn)} onClick={(event)=>HandleQrScan(false)}>
                                <Typography className={clsx(classes.btn_typo)}>Scan New QrCode</Typography>
                            </Button>

                            <Mycabinet />

                            <Button variant={"contained"} className={clsx(classes.btn)}>
                                {
                                    MonitoringData && MonitoringData.scanned_door.Rack
                                    ?
                                    <Typography className={clsx(classes.btn_typo)}>{MonitoringData && MonitoringData.scanned_door.Rack}, {MonitoringData && MonitoringData.scanned_door.Door}</Typography>
                                      :
                                      <Typography className={clsx(classes.btn_typo)}>No Door Scanned</Typography>
                                }
                            </Button>
                        </Box>
                        <Box className={clsx(classes.rightbox)}>
                            <Button variant={"contained"} className={clsx(classes.btn)}>
                                <Typography className={clsx(classes.btn_typo)} onClick={(event)=>HandleHomePage(true)}>Home Page</Typography>
                            </Button>


                            <Button variant={"contained"} className={clsx(classes.btn,classes.btn_logout)}>
                                <Typography className={clsx(classes.btn_typo)}>Logout</Typography>
                            </Button>

                            <RequestDialogSlide SetRequestChecked={SetRequestChecked} Qrstate={QrScanned} title={"Request Access"} defclass={classes}
                            	setQr={setQr} AuthD={AuthD} DoorQr={DoorQr} setreqData={setreqData} ScannedDoor={MonitoringData && MonitoringData.scanned_door}/>
                        </Box>
                    </Box>
                </Fade>
                {reqData && reqData.access === true ?
                    <Fade in={((RequestChecked !== "cancel")&&(RequestChecked !== "ignored")&&(RequestChecked !== "completed"))} timeout={300}>
                        <Box className={clsx(classes.top_box_sectiontop)}>
                            <SectionRequest SetRequestchecked={SetRequestChecked} Requestchecked={RequestChecked}
                                            AuthD={AuthD} DoorQr={DoorQr} reqData={reqData} setreqData={setreqData}/>
                        </Box>
                    </Fade>
                    :
                    <Fade in={((RequestChecked !== "cancel")&&(RequestChecked !== "ignored")&&(RequestChecked !== "completed")&&(RequestChecked!=="rejected"))} timeout={300}>
                        <Box className={clsx(classes.top_box_sectiontop)}>
                            <SectionRequestRejected RejectedData={reqData} SetRequestChecked={SetRequestChecked} requestRejected={requestRejected} setRequestRejected={setRequestRejected}/>
                        </Box>
                    </Fade>
                }
                <Box>

                </Box>
            </Box>
        </Container>
    );
}

export default SectionTop;