import React from "react";
// material ui
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// multi class import
import clsx from "clsx";
// style
import {useStyles} from "./style/section-top-style";


const SectionTop = () => {

    const classes = useStyles();
    return (
        <Container className={clsx(classes.maincontainer)}>
            <Box className={clsx(classes.mainbox)}>
                <Box className={clsx(classes.leftbox)}>
                    <Button variant={"contained"} className={clsx(classes.btn)}>
                        <Typography className={clsx(classes.btn_typo)}>Qr-Code Scannen</Typography>
                    </Button>

                    <Button variant={"contained"} className={clsx(classes.btn)}>
                        <Typography className={clsx(classes.btn_typo)}>Schrankubersicht</Typography>
                    </Button>

                    <Button variant={"contained"} className={clsx(classes.btn)}>
                        <Typography className={clsx(classes.btn_typo)}>meine Schranke</Typography>
                    </Button>

                    <Button variant={"contained"} className={clsx(classes.btn)}>
                        <Typography className={clsx(classes.btn_typo)}>Ausloggen</Typography>
                    </Button>
                </Box>
                <Box className={clsx(classes.rightbox)}>
                    <Button variant={"contained"} className={clsx(classes.btn)}>
                        <Typography className={clsx(classes.btn_typo)}>Schrank XY Halle 16</Typography>
                    </Button>

                    <Button variant={"contained"} className={clsx(classes.btn)}>
                        <Typography className={clsx(classes.btn_typo)}>Zugang anfordem</Typography>
                    </Button>

                    <Button variant={"contained"} className={clsx(classes.btn)}>
                        <Typography className={clsx(classes.btn_typo)}>HomePage</Typography>
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default SectionTop;