import React, { useState } from 'react';
import {QrReader} from 'react-qr-reader';
import { GetDoor } from '../../services/door_seriveces';
// Material Ui
import Button from '@mui/material/Button';
import {enqueueSnackbar} from "notistack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// Style
import {useStyles} from "./style/ReactQR-style";
// multi class import
import clsx from "clsx";
const QrReaderd = ({onSetQr}) => {

    const classes = useStyles();

    const [scanResult, setScanResult] = useState(null);

    const handleScan = (data) => {
        if (data) {
            setScanResult(data.text);
            enqueueSnackbar(data.text, {variant:'success',style:{borderRadius:'17px',},anchorOrigin:{
                    vertical:"top",
                    horizontal:"right",
                }});
        }
    };

    const handleError = (error) => {
        console.error(error);
    };

    // const handleButton = async () => {
    //     if (scanResult) {
    //         const data = await GetDoor({ qr: scanResult });
    //
    //         setTimeout(() => {
    //             // setScanResult(null);
    //             // window.location.reload();
    //             enqueueSnackbar(data.message, {variant:'warning',style:{borderRadius:'17px',},anchorOrigin:{
    //                     vertical:"top",
    //                     horizontal:"right",
    //                 }});
    //         }, 1000);
    //     }
    // };
    const handleButton = () => {
        onSetQr(scanResult);
    };

    const handleReset = (event) => {
        // #TODO: RESET QR for scan again
        setScanResult(null);
        window.location.reload();
    };
    return (
        <Container className={clsx(classes.maincontainer)}>
            <Box className={clsx(classes.mainbox)}>
                <QrReader
                    delay={300}
                    onError={handleError}
                    onResult={(res) => handleScan(res)}
                    constraints={{
                        facingMode: 'environment',
                        frameRate: 5,
                    }}
                    style={{ width: '100%' }}
                />
                <Box className={clsx(classes.btn_box)}>
                    <Button variant={"contained"} className={clsx(classes.btn)} onClick={(event)=>handleReset(event)}>
                        Reset
                    </Button>
                    {
                        scanResult !== null ? <Button variant={"contained"} className={clsx(classes.btn)} onClick={(event)=>handleButton(event)}>
                        Send Request
                        </Button> : <></>
                    }
                </Box>
            </Box>
        </Container>
    );
};

export default QrReaderd;