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


const SectionMiddle = () => {
    // Temp ArrayList
    const TempTab = ["Rack Edge A","Rack Edge B","Network","Energy"];
    // Door ArrayList
    const DoorTab = ["Rack_Edge_A_Front","Rack_Edge_A_Rear","Rack_Edge_B_Front","Rack_Edge_B_Rear","Rack_AC_Front",
                                "Rack_AC_Rear","Rack_Network","Rack_Energy"];
    // Style Class
    const classes = useStyles();
    // Tabs Control
    const [value_tmp, setValue_tmp] = React.useState('1');
    const [value_door, setValue_door] = React.useState('1');

    const handleChange_tmp = (event, newValue) => {
        setValue_tmp(newValue);
    };
    const handleChange_door = (event, newValue) => {
        setValue_door(newValue);
    };
    return (
        <Container className={clsx(classes.maincontainer)}>
            <Box className={clsx(classes.mainbox)}>
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
                        return (
                            <TabPanel value={`${index}`}>
                                <SectionTemp/>
                            </TabPanel>
                        );
                    })}
                </TabContext>

                <TabContext value={value_door}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList variant={"scrollable"} scrollButtons={"auto"} onChange={handleChange_door} aria-label="lab API tabs example">
                            {DoorTab.map((value, index) => {
                                return (<Tab label={value} value={`${index}`} />);
                            })}
                        </TabList>
                    </Box>
                    {DoorTab.map((value, index) => {
                        return (<TabPanel value={`${index}`}>
                            <SectionDoor/>
                        </TabPanel>);
                    })}
                </TabContext>

                <Box className={clsx(classes.energy_box)}>

                </Box>
            </Box>
        </Container>
    );
}

export default SectionMiddle;