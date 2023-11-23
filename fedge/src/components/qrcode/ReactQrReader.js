import React, { useState } from 'react';
import {QrReader} from 'react-qr-reader';
import Button from '@mui/material/Button';
import { GetDoor } from '../../services/door_seriveces';
import {enqueueSnackbar} from "notistack";

const QrReaderd = ({onSetQr}) => {
    const [scanResult, setScanResult] = useState(null);

    const handleScan = (data) => {
        if (data) {
            setScanResult(data.text);
            enqueueSnackbar(data.text, {variant:'success',style:{borderRadius:'17px',},anchorOrigin:{
                    vertical:"top",
                    horizontal:"right",
                }});
            onSetQr(data.text);
        }
    };

    const handleError = (error) => {
        console.error(error);
    };

    const handleButton = async () => {
        if (scanResult) {
            const data = await GetDoor({ qr: scanResult });

            setTimeout(() => {
                // setScanResult(null);
                // window.location.reload();
                enqueueSnackbar(data.message, {variant:'warning',style:{borderRadius:'17px',},anchorOrigin:{
                        vertical:"top",
                        horizontal:"right",
                    }});
            }, 1000);
        }
    };

    return (
        <div>
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
            {/*{scanResult ? (*/}
            {/*    <Button onClick={handleButton}>Send to backend</Button>*/}
            {/*) : (*/}
            {/*    <p>Waiting for QR code...</p>*/}
            {/*)}*/}
        </div>
    );
};

export default QrReaderd;