import * as React from "react";
// Material Ui
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// Multi class import
import clsx from "clsx";
// Style
import {useStyles} from "./style/section-energy-style";
import {useHistoryEnergy} from "../../../fetches/monitoring-fetches";
import PopupDataEnergy from "./popup-data-energy";


export const SectionEnergy = ({EnergyData,DoorQr,historyEnergy}) => {

    const classes = useStyles();

    return (
        <Container className={clsx(classes.maincontainer)}>
            <Box className={clsx(classes.mainbox)}>
                <Box className={clsx(classes.strom_box)}>
                    <Typography className={clsx(classes.energy_typo,classes.energy_typo_strom)} >Strom</Typography>
                    <Typography className={clsx(classes.energy_typo,classes.energy_typo_strom_val)} >{EnergyData["Power"]} KW</Typography>
                </Box>
                <Box className={clsx(classes.energie_box)}>
                    <Typography className={clsx(classes.energy_typo,classes.energy_typo_energie)} >Energie</Typography>
                    <Typography className={clsx(classes.energy_typo,classes.energy_typo_energie_val)} >{EnergyData["Energy"]} KWh</Typography>
                </Box>
                <Box>
                    <PopupDataEnergy txt={"history"} HistoryData={(historyEnergy && historyEnergy[""])}/>
                </Box>
            </Box>
        </Container>
    );
}