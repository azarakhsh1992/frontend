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


const SectionTop = ({QrScanned,RequestChecked,SetRequestChecked,setQr,DoorQr,AuthD}) => {

    //request data
    const [reqData,setreqData] = useState(null);
    const classes = useStyles();
    // const handleButton = (event) => {
    //     SetRequestChecked(true);
    // }
    return (
        <Container className={clsx(classes.maincontainer)}>
            <Box className={clsx(classes.mainbox)}>
                <Fade in={((RequestChecked !== "accept")&&(RequestChecked!=="counting")&&(RequestChecked!=="onprogress"))} timeout={300}>
                    <Box className={clsx(classes.top_box_sectiontop)}>
                        <Box className={clsx(classes.leftbox)}>
                            <Button variant={"contained"} className={clsx(classes.btn)}>
                                <Typography className={clsx(classes.btn_typo)}>Qr-Code Scannen</Typography>
                            </Button>

                            <Button variant={"contained"} className={clsx(classes.btn)}>
                                <Typography className={clsx(classes.btn_typo)}>Schrankubersicht</Typography>
                            </Button>

                            <Button variant={"contained"} className={clsx(classes.btn)}>
                                <Typography className={clsx(classes.btn_typo)}>meine Schranke</Typography>
                            </Button>

                            <Button variant={"contained"} className={clsx(classes.btn,classes.btn_logout)}>
                                <Typography className={clsx(classes.btn_typo)}>Ausloggen</Typography>
                            </Button>
                        </Box>
                        <Box className={clsx(classes.rightbox)}>
                            <Button variant={"contained"} className={clsx(classes.btn)}>
                                <Typography className={clsx(classes.btn_typo)}>Schrank XY Halle 16</Typography>
                            </Button>

                            {/*<Button variant={"contained"} className={clsx(classes.btn)} onClick={(event)=> {handleButton(event)}}*/}
                            {/*	disabled={QrScanned}>*/}
                            {/*    <Typography className={clsx(classes.btn_typo)}>Zugang anfordem</Typography>*/}
                            {/*</Button>*/}
                            <RequestDialogSlide SetRequestChecked={SetRequestChecked} Qrstate={QrScanned} title={"Zugang anfordem"} defclass={classes}
                            	setQr={setQr} AuthD={AuthD} DoorQr={DoorQr} setreqData={setreqData}/>

                            <Button variant={"contained"} className={clsx(classes.btn)}>
                                <Typography className={clsx(classes.btn_typo)}>HomePage</Typography>
                            </Button>
                        </Box>
                    </Box>
                </Fade>
                <Fade in={((RequestChecked !== "cancel")&&(RequestChecked !== "ignored"))} timeout={300}>
                    <Box className={clsx(classes.top_box_sectiontop)}>
                        <SectionRequest SetRequestchecked={SetRequestChecked} Requestchecked={RequestChecked}
                                        AuthD={AuthD} DoorQr={DoorQr} reqData={reqData} setreqData={setreqData}/>
                    </Box>
                </Fade>
                <Box>

                </Box>
            </Box>
        </Container>
    );
}

export default SectionTop;