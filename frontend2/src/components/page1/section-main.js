import * as React from "react";
import SectionTop from "./section-top";
import SectionMiddle from "./section-middle";
import clsx from "clsx";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useStyles} from "./style/section-main-style";
import QrReaderd from "../qrcode/ReactQrReader";
import {useEffect, useState} from "react";
import {useAuth} from "../../hooks/useAuth";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {GetData} from "../../services/monitoring-services";



const SectionMain = () => {
//
    const [QrScanned,SetQrScanned] = useState(null);
    const [RequestChecked,SetRequestChecked] = useState("cancel");
    const [MonitoringData,SetMonitoringData] = useState(null);
    const [homePageState , setHomePageState] = useState(true);
// authentication
    const {AuthD,setAuth} = useAuth();

    // interval for fetching monitoring data
    const myInterval = 3500;

// use textfield instead qr
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        SetQrScanned(data.get('qrcode'));
        // const datas = await GetData({'qr':data.get('qrcode')});
        // if(datas !== undefined){
        //     SetMonitoringData(datas);
        // }
        // else {
        //     SetMonitoringData(null);
        // }
    }

    useEffect(() => {
        // If QrScanned is null, don't set up the interval
        if (QrScanned === null) {
            return;
        }

        const fetchInterval = setInterval(async () => {
            if (QrScanned) {
                const _datas = await GetData({'qr': QrScanned});
                if (_datas !== undefined) {
                    SetMonitoringData(_datas);
                } else {
                    SetMonitoringData(null);
                }
            }
        }, myInterval);

        // Clean-up function to clear the interval when the component unmounts or QrScanned changes
        return () => clearInterval(fetchInterval);

    }, [QrScanned]);



    const classes = useStyles();
    return (
        <>
            {
                AuthD ?
                    <Container className={clsx(classes.maincontainer)}>
                        <Box className={clsx(classes.mainbox)}>
                            <Box className={clsx(classes.top_box)}>
                                <SectionTop QrScanned={(MonitoringData === null ? true : false)}
                                            RequestChecked={RequestChecked}
                                            SetRequestChecked={SetRequestChecked} setQr={SetQrScanned} AuthD={AuthD}
                                            DoorQr={QrScanned}
                                            MonitoringData={MonitoringData && MonitoringData}
                                            setHomePageState={setHomePageState}
                                            SetMonitoringData={SetMonitoringData}
                                            SetQrScanned={SetQrScanned}
                                />
                            </Box>
                            {
                                homePageState === false ?
                                    <>
                                        {(MonitoringData !== null) ?
                                            <Box>
                                                <SectionMiddle className={clsx(classes.middle_box)}
                                                               MonitoringDatas={MonitoringData} DoorQr={QrScanned}/>
                                            </Box>
                                            :
                                            <Box>
                                                {/*<QrReaderd onSetQr={SetQrScanned}/>*/}
                                                // begin using textfield instead qrcode reader
                                                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                                                    <TextField
                                                        margin="normal"
                                                        required
                                                        fullWidth
                                                        id="qrcode"
                                                        label="qrcode"
                                                        name="qrcode"
                                                        autoFocus
                                                    />
                                                    <Button
                                                        type="submit"
                                                        fullWidth
                                                        variant="contained"
                                                        sx={{mt: 3, mb: 2}}
                                                    >
                                                        Send QR
                                                    </Button>
                                                </Box>
                                                // end using textfield instead qrcode reader
                                            </Box>}
                                    </>
                                    :
                                    <>
                                        <Typography variant={"h3"}>Factory Edge Cabinet Monitoring Website</Typography>
                                    </>
                            }

                        </Box>
                    </Container>
                    :
                    <Container className={clsx(classes.maincontainer)}>
                        <Box className={clsx(classes.mainbox)}>
                            <Box className={clsx(classes.not_logged_in_box)}>
                                <Typography className={clsx(classes.not_logged_in_typo)}>
                                    You are not logged in !!!
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
            }
        </>
    );
}

export default SectionMain;