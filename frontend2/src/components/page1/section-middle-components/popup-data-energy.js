import * as React from "react";
// Material ui
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
// multiple import class
import clsx from "clsx";
//style
import {useStyles} from "./style/popup-data-style";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import {SectionTemp} from "./section-temp";
import TabContext from "@mui/lab/TabContext";
import {useEffect, useState} from "react";
import DataTableEnergy from "./datatable-energy";


const PopupDataEnergy = ({txt,HistoryData}) => {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [HistData,setHistData] = useState(null);
    // DataToShow ArrayList
    const EnergyTab = ["hour","day","week","month"];

    const [value_tmp, setValue_tmp] = React.useState('1');

    const handleChange_tmp = (event, newValue) => {
        setValue_tmp(newValue);
    };
    const EnergyTableDatas = (data) => {
        if(data["Maximum Power"] !== null){
            const customData ={
                "MaxPow":{
                    "Maximum Power":data["Maximum Power"],
                    "last time at maximum power":data["last time at maximum power"]
                },
                "MinPow":{
                    "Minimum Power":data["Minimum Power"],
                    "last time at minimum power":data["last time at minimum power"]
                },
                "Avg":{
                    "Average Power":data["Average Power"],
                    "Average Energy":data["Average Energy"]
                }
            };
            return customData;
        }
        return "not_Defined";
    }

    return (
        <div>
            <Button variant={"contained"} className={clsx(classes.btn)} onClick={handleOpen}>History</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                // onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box className={clsx(classes.modal_box)}>
                        <Box className={clsx(classes.modal_box_top)}>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                {txt}
                            </Typography>
                            <Button variant={"contained"} className={clsx(classes.btn,classes.btn_modal_close)} onClick={handleClose}>
                                <CloseIcon></CloseIcon>
                            </Button>
                        </Box>
                        <Box className={clsx(classes.modal_box_bot)}>
                            <TabContext value={value_tmp}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList variant={"scrollable"} scrollButtons={"auto"} onChange={handleChange_tmp} aria-label="lab API tabs example">
                                        {EnergyTab.map((value, index)=>{

                                                return (
                                                    <Tab label={value} value={`${index}`} />
                                                );

                                        })}
                                    </TabList>
                                </Box>
                                {EnergyTab.map((value, index)=>{

                                    let _data;
                                    if(HistoryData){
                                        _data = EnergyTableDatas(HistoryData[value]);
                                    }

                                    return (
                                        <TabPanel value={`${index}`}>
                                            <Box className={clsx(classes.history_box)}>
                                                <Box className={clsx(classes.history_box_element)}>
                                                    {HistoryData && <DataTableEnergy Data={_data}/>}
                                                </Box>
                                            </Box>
                                        </TabPanel>
                                    );
                                })}
                            </TabContext>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default PopupDataEnergy;