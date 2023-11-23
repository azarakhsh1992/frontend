import {Html5QrcodeScanner} from 'html5-qrcode';
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import {GetDoor} from "../../services/door_seriveces";

const QrReader = () => {

    const [scanResult,setScanResult] = useState(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader',{
            qrbox:{
                width:500,
                height:500,
            },
            fps:5,
        })
        scanner.render(success,error);
        function success(result){
            scanner.clear();
            setScanResult(result);
        }
        function  error(err){
            console.warn(err);
        }
    }, []);

    const HandlerButton = (event) => {
        const res = GetDoor({'qr':scanResult});
        setScanResult(null);
        setTimeout(()=>{window.location.reload();},1000);

    }
    return (
        <div>
            <h1>Qr Code Scanning</h1>
            {scanResult
            ? <Button onClick={(event) => HandlerButton(event)}> send to backend</Button>
            : <div id={'reader'}></div>
            }
        </div>
    );
}

export default QrReader;