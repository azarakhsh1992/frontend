import * as React from 'react';
// Material
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Typography from "@mui/material/Typography";
// multiple class
import clsx from "clsx";
import {useSetRequest} from "../../../../fetches/request-fetch";
import {useEffect} from "react";
import {SetRequest} from "../../../../services/request-services";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" timeout={2000} ref={ref} {...props} />;
});

export default function RequestDialogSlide({SetRequestChecked,Qrstate,title,defclass,onClick,setQr,DoorQr,AuthD,setreqData}) {

    const [open, setOpen] = React.useState(false);
    const [requestState,SetrequestState] = React.useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const HandleClose = async (event,res) => {
        setOpen(false);
        SetRequestChecked(res);
        if(res === "scan"){
            setQr(null);
            SetrequestState(res);
            window.location.reload();
        }
        else if(res === "accept"){
            SetrequestState(res);
            const datas = await SetRequest({"user":AuthD.user.username,"qr":DoorQr},AuthD.token);
            if(datas){
                setreqData(datas);
                console.log(datas);
            };
        }
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen} disabled={Qrstate} className={clsx(defclass.btn)}>
                <Typography className={clsx(defclass.btn_typo)}>{title}</Typography>
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                transitionDuration={500}
                keepMounted
                onClose={(event) => HandleClose(event,"cancel")}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Requesting Access"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Are you sure u want open felandoor
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={(event)=>{HandleClose(event,"cancel")}}>Disagree</Button>
                    <Button onClick={(event)=>{HandleClose(event,"accept")}}>Agree</Button>
                    <Button onClick={(event)=>{HandleClose(event,"scan")}}>Scan Qr</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
