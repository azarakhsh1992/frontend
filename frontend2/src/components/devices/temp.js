import * as React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import {useStyles} from "./style/style";
import clsx from "clsx";

const TempDev = () => {
    const classes = useStyles();
    return (
        <>
            <Container>
                <Typography>lorem lorem lorem</Typography>
                <Box>
                    <Stack direction="column" spacing={1}>
                        <Stack direction="row" spacing={1}>
                            <Typography className={classes.rootfda}>hi</Typography>
                            <Stack direction="column" spacing={1} sx={{paddingTop:'5px'}}>
                                    <Typography className={clsx(classes.rootfda,classes.tempin)}>Innen</Typography>
                                    <Typography className={clsx(classes.rootfda,classes.tempout)}>auBen</Typography>
                            </Stack>
                            <Stack direction="column" spacing={1}>
                                <Chip label="item 2-1" variant="outlined" className={clsx(classes.customChip)}/>
                                <Chip label="item 2-2" variant="outlined" />
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Container>
        </>
    );
}

export default TempDev;