import * as React from "react";
// Material Ui
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// Multi class import
import clsx from "clsx";
// Style
import {useStyles} from "./style/section-door-style";
import PopupDataDoor from "./popup-data-door";


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
                <Box className={clsx(classes.door_box)}>
                    <PopupDataDoor txt={"History"} HistoryData={(historysensor && historysensor)}/>
                    {SensorDatas["Current"] && <Typography className={clsx(classes.door_status_typo)}
                                 sx={{backgroundColor: `${SensorColor[DoorDatas["Current"]]} !important`}}>
                        {SensorDatas["Current"]}
                    </Typography>}
                </Box>
            </Box>
        </Container>
    );
}