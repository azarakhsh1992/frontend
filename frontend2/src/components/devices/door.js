import * as React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import {useStylesDoor} from "./style/style";
import clsx from "clsx";

const DoorDev = ({text}) => {
    const classes = useStylesDoor();
    return (
        <>
            <Container>
                <Stack direction="column" spacing={1}>
                    <Stack direction="row" spacing={22}>
                        <Chip label={text} variant="outlined" className={clsx(classes.root)}/>
                        <Chip label="zu" variant="outlined" className={clsx(classes.door)}/>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}

export default DoorDev;