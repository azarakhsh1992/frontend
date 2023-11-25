import * as React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import {useStylesEnergy} from "./style/style";
import clsx from "clsx";

const EnergyDev = ({text}) => {
    const classes = useStylesEnergy();
    return (
        <>
            <Container>
                <Stack direction="column" spacing={1}>
                    <Stack direction="row" spacing={10}>
                        <Chip label="Strom" variant="outlined" className={clsx(classes.root1)}/>
                        <Chip label="XY KW" variant="outlined" className={clsx(classes.energy1)}/>
                    </Stack>
                    <Stack direction="row" spacing={10}>
                        <Chip label="Energie" variant="outlined" className={clsx(classes.root2)}/>
                        <Chip label="XY KWh" variant="outlined" className={clsx(classes.energy2)}/>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}

export default EnergyDev;