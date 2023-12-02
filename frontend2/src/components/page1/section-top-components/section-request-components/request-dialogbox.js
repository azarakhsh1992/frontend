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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" timeout={2000} ref={ref} {...props} />;
});

export default function AlertDialogSlide({setState,Qrstate,title,defclass,onClick,setQr}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event,res) => {
        setOpen(false);
        setState(res);
        if(res === "scan"){
            setQr(null);
            window.location.reload();
        };
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
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Making Request"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Are You Sure that want open this door ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={(event)=>{handleClose(event,"cancel")}}>Disagree</Button>
                    <Button onClick={(event)=>{handleClose(event,"accept")}}>Agree</Button>
                    <Button onClick={(event)=>{handleClose(event,"scan")}}>Scan Qr</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
