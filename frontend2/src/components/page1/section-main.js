import * as React from "react";
import SectionTop from "./section-top";
import SectionMiddle from "./section-middle";
import clsx from "clsx";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useStyles} from "./style/section-main-style";
import QrReaderd from "../qrcode/ReactQrReader";
import {useState} from "react";
import {useAuth} from "../../hooks/useAuth";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {GetData} from "../../services/monitoring-services";



const SectionMain = () => {
//
    const [QrScanned,SetQrScanned] = useState(null);
    const [RequestChecked,SetRequestChecked] = useState("cancel");
    const [MonitoringData,SetMonitoringData] = useState(null);
// authentication
    const {AuthD,setAuth} = useAuth();

// use textfield instead qr
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const datas = await GetData({'qr':data.get('qrcode')});
        SetQrScanned(data.get('qrcode'));
        if(datas !== undefined){
            SetMonitoringData(datas);
        }
        else {
            SetMonitoringData(null);
        }
    }


    const classes = useStyles();
    return (
        <>
            {
                AuthD ?
                    <Container className={clsx(classes.maincontainer)}>
                        <Box className={clsx(classes.mainbox)}>
                            <Box className={clsx(classes.top_box)}>
                                <SectionTop QrScanned={(MonitoringData === null ? true : false)} RequestChecked={RequestChecked}
                                            SetRequestChecked={SetRequestChecked} setQr={SetQrScanned} AuthD={AuthD} DoorQr={QrScanned}/>
                            </Box>
                            {
                                (MonitoringData !== null) ?
                                    <Box>
                                        <SectionMiddle className={clsx(classes.middle_box)} MonitoringDatas={MonitoringData} DoorQr={QrScanned}/>
                                    </Box>
                                    :
                                    <Box>
                                        {/*<QrReaderd onSetQr={SetQrScanned}/>*/}
                                        // begin using textfield instead qrcode reader
                                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
                                                sx={{ mt: 3, mb: 2 }}
                                            >
                                                Send QR
                                            </Button>
                                        </Box>
                                        // end using textfield instead qrcode reader
                                    </Box>
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