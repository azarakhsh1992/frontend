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


export const SectionDoor = () => {

    const classes = useStyles();
    return (
        <Container className={clsx(classes.maincontainer)}>
            <Box className={clsx(classes.mainbox)}>
                <Box className={clsx(classes.door_box)}>
                    <Button variant={"contained"} className={clsx(classes.btn)}>
                        <Typography>
                            Status
                        </Typography>
                    </Button>
                    <Typography className={clsx(classes.door_status_typo)}>
                        OPEN OR CLOSE
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}