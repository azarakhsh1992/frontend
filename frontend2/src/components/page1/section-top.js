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


const SectionTop = ({QrScanned,RequestChecked,SetRequestChecked,setQr,DoorQr,AuthD}) => {

    //request data
    const [reqData,setreqData] = useState(null);
    const classes = useStyles();

    const HandleReject = () => {
        setTimeout(()=>{
            setreqData("cancel");
        },3000);
    }
    return (
        <Container className={clsx(classes.maincontainer)}>
            <Box className={clsx(classes.mainbox)}>
                <Fade in={((RequestChecked !== "accept")&&(RequestChecked!=="counting")&&(RequestChecked!=="onprogress"))} timeout={300}>
                    <Box className={clsx(classes.top_box_sectiontop)}>
                        <Box className={clsx(classes.leftbox)}>
                            <Button variant={"contained"} className={clsx(classes.btn)}>
                                <Typography className={clsx(classes.btn_typo)}>Scan New QrCode</Typography>
                            </Button>

                            <Button variant={"contained"} className={clsx(classes.btn)}>
                                <Typography className={clsx(classes.btn_typo)}>Cabinet Overview</Typography>
                            </Button>

                            <Button variant={"contained"} className={clsx(classes.btn,classes.btn_logout)}>
                                <Typography className={clsx(classes.btn_typo)}>Logout</Typography>
                            </Button>
                        </Box>
                        <Box className={clsx(classes.rightbox)}>
                            <Button variant={"contained"} className={clsx(classes.btn)}>
                                <Typography className={clsx(classes.btn_typo)}>Cabinet XY Hall</Typography>
                            </Button>


                            <Button variant={"contained"} className={clsx(classes.btn)}>
                                <Typography className={clsx(classes.btn_typo)}>My Cabinet</Typography>
                            </Button>

                            {/*<Button variant={"contained"} className={clsx(classes.btn)} onClick={(event)=> {handleButton(event)}}*/}
                            {/*	disabled={QrScanned}>*/}
                            {/*    <Typography className={clsx(classes.btn_typo)}>Zugang anfordem</Typography>*/}
                            {/*</Button>*/}
                            <RequestDialogSlide SetRequestChecked={SetRequestChecked} Qrstate={QrScanned} title={"Request Access"} defclass={classes}
                            	setQr={setQr} AuthD={AuthD} DoorQr={DoorQr} setreqData={setreqData}/>
                        </Box>
                    </Box>
                </Fade>
                {reqData && reqData.access === true ?
                    <Fade in={((RequestChecked !== "cancel")&&(RequestChecked !== "ignored"))} timeout={300}>
                        <Box className={clsx(classes.top_box_sectiontop)}>
                            <SectionRequest SetRequestchecked={SetRequestChecked} Requestchecked={RequestChecked}
                                            AuthD={AuthD} DoorQr={DoorQr} reqData={reqData} setreqData={setreqData}/>
                        </Box>
                    </Fade>
                    :
                    <Fade in={((RequestChecked !== "cancel")&&(RequestChecked !== "ignored"))} timeout={300}>
                        <Box className={clsx(classes.top_box_sectiontop)}>
                            <SectionRequestRejected RejectedData={reqData} SetRequestChecked={SetRequestChecked}/>
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