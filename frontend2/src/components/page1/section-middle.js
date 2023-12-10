import * as React from "react";
// material ui
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// multi class import
import clsx from "clsx";
// style
import {useStyles} from "./style/section-middle-style";
// components
import {SectionTemp} from "./section-middle-components/section-temp";
import {SectionDoor} from "./section-middle-components/section-door";
import {SectionEnergy} from "./section-middle-components/section-energy";
import {useEffect} from "react";
import {useHistoryDoor, useHistoryEnergy, useHistoryTemp} from "../../fetches/monitoring-fetches";


const SectionMiddle = ({MonitoringDatas,DoorQr}) => {
    // Door ArrayList
    const DoorTab = ["Edge_A_Front","Edge_A_Rear","Edge_B_Front","Edge_B_Rear","Cooling_Front",
                                "Cooling_Rear","Network_Network","Energy_Energy"];
    // Style Class
    const classes = useStyles();
    // Tabs Control
    const [value_tmp, setValue_tmp] = React.useState('1');
    const [value_door, setValue_door] = React.useState('1');
    const [value_energy, setValue_energy] = React.useState('1');
	// Histories
    const [historyTemp, loadingTemp, errorTemp] = useHistoryTemp({'qr':DoorQr});
    const [historyDoor, loadingDoor, errorDoor] = useHistoryDoor({"qr":DoorQr})
    const [historyEnergy, loadingEnergy, errorEnergy] = useHistoryEnergy({"qr":DoorQr})


    const handleChange_tmp = (event, newValue) => {
        setValue_tmp(newValue);
    };
    const handleChange_door = (event, newValue) => {
        setValue_door(newValue);
    };
    const handleChange_energy = (event, newValue) => {
        setValue_energy(newValue);
    };
    return (
        <Container className={clsx(classes.maincontainer)}>
            <Box className={clsx(classes.mainbox)}>
				{/*TEMP START*/}
                <Box className={clsx(classes.temp_box)}>
                    <TabContext value={value_tmp}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList variant={"scrollable"} scrollButtons={"auto"} onChange={handleChange_tmp} aria-label="lab API tabs example">
                                {Object.keys(MonitoringDatas.Temperature).map((value, index) => {
                                    return (
                                        <Tab label={value} value={`${index+1}`}/>
                                    );
                                })}
                            </TabList>
                        </Box>
                        {Object.keys(MonitoringDatas.Temperature).map((value, index,array)=>{
                             // Object.keys(MonitoringDatas.Temperature[value]).map()
                            return (
                                <TabPanel value={`${index+1}`}>
                                    <SectionTemp TemperatureData={MonitoringDatas.Temperature[value]} HistoryTemp={(historyTemp && historyTemp[value])}/>
                                </TabPanel>
                            );
                        })}
                    </TabContext>
                </Box>
                {/*TEMP END*/}
                {/*DOOR START*/}
                <Box className={clsx(classes.door_box)}>
                    <TabContext value={value_door}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList variant={"scrollable"} scrollButtons={"auto"} onChange={handleChange_door} aria-label="lab API tabs example">
                                {DoorTab.map((value, index) => {
                                    // console.log(MonitoringDatas.Door_Sensors);
                                    if(MonitoringDatas.Door_Sensors[value]){
                                        return (<Tab label={value} value={`${index+1}`} />);
                                    }
                                    else {
                                        return null;
                                    }
                                })}
                            </TabList>
                        </Box>
                        {DoorTab.map((value, index) => {
                            if(MonitoringDatas.Door_Sensors[value]){
                                return (
                                    <TabPanel value={`${index+1}`}>
                                        <SectionDoor DoorDatas={MonitoringDatas.Door_Sensors[value]} historydoor={historyDoor && historyDoor[value]}/>
                                    </TabPanel>);
                            }
                            else {
                                return null;
                            }
                        })}
                    </TabContext>
                </Box>
                {/*DOOR END*/}
                {/*ENERGY START*/}
                <Box className={clsx(classes.energy_box)}>
                    <TabContext value={value_energy}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList variant={"scrollable"} scrollButtons={"auto"} onChange={handleChange_energy} aria-label="lab API tabs example">
                                {Object.keys(MonitoringDatas.Energy).map((value, index) => {
                                    // console.log(MonitoringDatas.Door_Sensors);
                                    if(MonitoringDatas.Energy[value]){
                                        return (<Tab label={value} value={`${index+1}`} />);
                                    }
                                    else {
                                        return null;
                                    }
                                })}
                            </TabList>
                        </Box>
                        {Object.keys(MonitoringDatas.Energy).map((value, index) => {
                            if(MonitoringDatas.Energy[value]){
                                return (
                                    <TabPanel value={`${index+1}`}>
                                        {/*<SectionDoor DoorDatas={MonitoringDatas.Door_Sensors[value]}/>*/}
                                        <SectionEnergy EnergyData={MonitoringDatas.Energy[value]} DoorQr={DoorQr} historyEnergy={historyEnergy && historyEnergy[value]}/>
                                    </TabPanel>);
                            }
                            else {
                                return null;
                            }
                        })}
                    </TabContext>
                    {/*<SectionEnergy EnergyData={MonitoringDatas.Energy}/>*/}
                </Box>
            	{/*ENERGY END*/}
            </Box>
        </Container>
    );
}

export default SectionMiddle;