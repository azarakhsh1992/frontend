import * as React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import {useStyles} from "./style/_style";

const TempDev = () => {
    const classes = useStyles();
    return (
        <>
            <Container>
                <Typography>lorem lorem lorem</Typography>
                <Box>
                    <Stack direction="column" spacing={1}>
                        <Stack direction="row" spacing={1}>
                                <Chip label="section 1" variant="contained" className={classes.root}/>
                            <Stack direction="column" spacing={1}>
                                    <Chip label="Innen" variant="outlined" className={classes.tempin}/>
                                    <Chip label="auBen" variant="outlined" className={classes.tempout}/>
                            </Stack>
                            <Stack direction="column" spacing={1}>
                                <Chip label="item 2-1" variant="outlined" />
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