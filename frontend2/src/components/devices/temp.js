import * as React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import {useStylesTemp} from "./style/style";
import clsx from "clsx";

const TempDev = () => {
    const classes = useStylesTemp();
    return (
        <>
            <Container>
                    <Stack direction="column" spacing={1}>
                        <Stack direction="row" spacing={3}>
                            <Chip label="section 1" variant="outlined" className={clsx(classes.root)}/>
                            <Stack direction="column" spacing={1}>
                                <Chip label="innen" variant="outlined" className={clsx(classes.tempin)}/>
                                <Chip label="auBen" variant="outlined" className={clsx(classes.tempout)}/>
                            </Stack>
                            <Stack direction="column" spacing={1}>
                                <Chip label="X&deg; C" variant="outlined" className={clsx(classes.tempin)}/>
                                <Chip label="Y&deg; C" variant="outlined" className={clsx(classes.tempout)}/>
                            </Stack>
                        </Stack>
                    </Stack>
            </Container>
        </>
    );
}

export default TempDev;