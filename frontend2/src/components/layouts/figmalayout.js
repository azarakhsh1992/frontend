import React from 'react';
import TempDev from "../devices/temp";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import DoorDev from "../devices/door";
import EnergyDev from "../devices/energy";
import {useStyleFigma} from "./style/style";
import clsx from "clsx";
import Container from "@mui/material/Container";
import Homepage from "./homepage";

const FigmaApp = () => {
    const classes = useStyleFigma();
    return (
        <Container sx={{alignItems:'center'}}>
            <Stack direction="column" spacing={6}>
                <Homepage/>
                <Stack direction="column" spacing={3} className={clsx(classes.root)}>
                    <Typography variant={'h4'}>Temperatur</Typography>
                    <TempDev/>
                    <TempDev/>
                    <TempDev/>
                </Stack>
                <Stack direction="column" spacing={3} className={clsx(classes.root)}>
                    <Typography variant={'h4'}>Turzustande</Typography>
                    <DoorDev text={'vordere Tur'}/>
                    <DoorDev text={'hintere Tur'}/>
                </Stack>
                <Stack direction="column" spacing={3} className={clsx(classes.root)}>
                    <Typography variant={'h4'}>Energiverbrauch</Typography>
                    <EnergyDev/>
                </Stack>
            </Stack>
        </Container>
    );
}

export default FigmaApp;