import React, {useState} from 'react';
import QrReaderd from "../qrcode/ReactQrReader";
import Button from "@mui/material/Button";
import {useCancelRequest, useSetRequest} from "../../fetches/request-fetch";
import {useAuth} from "../../hooks/useAuth";
import {useStyles} from "./style/_style";



const Requestfrg = () => {

    const classes = useStyles();

    const {AuthD,setAuth} = useAuth();
    const [Qr, setQr] = useState(null);
    const [btnSet, setBtnSet] = useState(null);


    const handlebtnset = async (event) => {
        //const [request, loading, error] = useSetRequest({'user': AuthD.user, 'qr':Qr});
        setQr(null);
        setBtnSet(null);
    }

    const handlebtnclr = async (event) => {
        //const [canceledReq, loading, error] = useCancelRequest({'user': AuthD.user, 'qr':Qr});
        setQr(null);
        setBtnSet(null);
    }

    const handlebtncnl = async (event) => {
        // [canceledReq, loading, error] = useCancelRequest({'user': AuthD.user, 'qr':Qr});
        setQr(null);
        setBtnSet(null);
    }


    return (
        <>
            {
                Qr===null ? <QrReaderd onSetQr={setQr}/> :
                    <div>
                    {btnSet === null ?
                        <div>
                        <Button variant={"contained"} onClick={event => handlebtnset(event)}>Confirm Request</Button>
                        <Button variant={"contained"} onClick={event => handlebtnclr(event)}>Cancel Request</Button>
                        </div>
                    :
                        <Button variant={"contained"} onClick={event => handlebtncnl(event)}>Cancel Request</Button>
                    }
                </div>
            }
        </>
    );
}

export default Requestfrg;