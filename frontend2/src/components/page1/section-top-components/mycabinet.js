import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useStyle} from './style/mycabinet-style';
import {useStyles} from "../style/section-top-style";
import clsx from "clsx";
import {useEffect, useState} from "react";
import {GetMyCabinet} from "../../../services/cabinet-services";
import {useAuth} from "../../../hooks/useAuth";
import ColumnGroupingTable from "./section-mycabinet-components/mycabonet-popup";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Mycabinet = () => {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [Datas,setDatas] = useState('');
    const {AuthD,setAuth} = useAuth();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const MyCabinetFetch = async ()=>{
            const datas = await GetMyCabinet({'user':AuthD && AuthD.user['username']});
            if(datas){
                setDatas(datas);
            }
        }
        open && MyCabinetFetch();
    }, [open]);
    return (
            <>
                {/*<Button onClick={handleOpen}>Open modal</Button>*/}
                <Button variant={"contained"} className={clsx(classes.btn)} onClick={handleOpen}>
                    <Typography className={clsx(classes.btn_typo)}>My Cabinets</Typography>
                </Button>
                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="keep-mounted-modal-title" variant="h6" component="h2" marginBottom={'10px !important'}>
                            Cabinet History
                        </Typography>
                        <ColumnGroupingTable MyCabinetData={Datas && Datas}/>
                    </Box>
                </Modal>
            </>

    );
}

export default Mycabinet;