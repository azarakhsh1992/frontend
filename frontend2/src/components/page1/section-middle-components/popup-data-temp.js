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
import DataTableTemp from "./datatable-temp";


const PopupDataTemp = ({txt,HistoryData}) => {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [HistData,setHistData] = useState(null);
    // DataToShow ArrayList
    const TempTab = ["hour","day","week","month"];

    const [value_tmp, setValue_tmp] = React.useState('1');

    const [TableData,setTableData] = React.useState(null);
    const handleChange_tmp = (event, newValue) => {
        setValue_tmp(newValue);
    };

    const TempTableDatas = (data) => {
        if(data["Maximum temperature"] !== null){
            const customData ={
                "MaxTemp":{
                    "Maximum temperature":data["Maximum temperature"],
                    "last time at maximum temperature":data["last time at maximum temperature"]
                },
                "MinTemp":{
                    "Minimum temperature":data["Minimum temperature"],
                    "last time at minimum temperature":data["last time at minimum temperature"]
                },
                "MaxHum":{
                    "Maximum humidity":data["Maximum humidity"],
                    "last time at maximum humidity":data["last time at maximum humidity"]
                },
                "MinHum":{
                    "Minimum humidity":data["Minimum humidity"],
                    "last time at minimum humidity":data["last time at minimum humidity"]
                },
                "Avg":{
                    "Average temperature":data["Average temperature"],
                    "Average humidity":data["Average humidity"]
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
                                        {TempTab.map((value, index)=>{

                                                return (
                                                    <Tab label={value} value={`${index}`} />
                                                );

                                        })}
                                    </TabList>
                                </Box>
                                {TempTab.map((value, index)=>{

                                    let _data;
                                    if(HistoryData){
                                        _data = TempTableDatas(HistoryData[value]);
                                        console.log(_data);
                                    }
                                    return (
                                        <TabPanel value={`${index}`}>
                                            <Box className={clsx(classes.history_box)}>
                                                <Box className={clsx(classes.history_box_element)}>
                                                    {HistoryData && <DataTableTemp Data={_data}/>}
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

export default PopupDataTemp;