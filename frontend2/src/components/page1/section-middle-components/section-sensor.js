import * as React from "react";
// Material Ui
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// Multi class import
import clsx from "clsx";
// Style
import {useStyles} from "./style/section-sensor-style";
import PopupDataSensor from "./popup-data-sensor";


export const SectionSensor = ({SensorDatas,historysensor}) => {

    const SensorColor = {
        'Open':"red",
        'Locked':"green",
        'Unlocked':"orange",
        'Faulted':"yellow",
        'No Data':"gray"
    }
    const classes = useStyles();
    return (
        <Container className={clsx(classes.maincontainer)}>
            <Box className={clsx(classes.mainbox)}>
                    {/*{SensorDatas["AC 1"] && <Typography className={clsx(classes.door_status_typo)}>*/}
              {/*    {SensorDatas["AC 1"]}*/}
              {/*</Typography>}*/}
              {/*<Box className={clsx(classes.strom_box)}>*/}
              {/*    <Typography className={clsx(classes.energy_typo,classes.energy_typo_strom)} >Time</Typography>*/}
              {/*    <Typography className={clsx(classes.energy_typo,classes.energy_typo_strom_val)} >{SensorDatas["Time"]}</Typography>*/}
              {/*</Box>*/}
              <Box className={clsx(classes.energie_box)}>
                <Typography className={clsx(classes.energy_typo,classes.energy_typo_energie)} >Triggered</Typography>
                <Typography className={clsx(classes.energy_typo,classes.energy_typo_energie_val)} >{SensorDatas["Triggered"]}</Typography>
              </Box>
              <PopupDataSensor txt={"History"} HistoryData={(historysensor && historysensor)}/>
            </Box>
        </Container>
    );
}