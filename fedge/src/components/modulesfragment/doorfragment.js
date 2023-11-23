import React, {useState} from 'react';
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {GetDoor} from "../../services/door_seriveces";

const Doorfragment = () => {

    const [Qr,setQr] = useState(null);

    const HandlerText = (value) => {
        setQr(value);

    }
    const HandlerButton = (event) => {
        const res = GetDoor({'qr':Qr});
        console.log(JSON.stringify(res));
    }

    return (
        <>
            <Box display={'flex'} flexDirection={'column'}>
                <TextField onChange={(event)=>HandlerText(event.target.value)}></TextField>
                <Button onClick={(event) => HandlerButton(event)}>check</Button>
            </Box>
        </>
    );
}

export default Doorfragment;