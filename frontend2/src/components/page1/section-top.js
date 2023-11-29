import React, {useState} from "react";
// material ui
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// multi class import
import clsx from "clsx";
// style
import {useStyles} from "./style/section-top-style";
import Fade from "@mui/material/Fade";
import SectionRequest from "./section-top-components/section-request";


const SectionTop = ({QrScanned}) => {
    const [RequestChecked,SetRequestChecked] = useState(false);
    const classes = useStyles();
    const handleButton = (event) => {
        SetRequestChecked(true);
    }
    return (
        <Container className={clsx(classes.maincontainer)}>
            <Box className={clsx(classes.mainbox)}>
                <Fade in={!RequestChecked} timeout={300}>
                    <Box className={clsx(classes.top_box_sectiontop)}>
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

                            <Button variant={"contained"} className={clsx(classes.btn,classes.btn_logout)}>
                                <Typography className={clsx(classes.btn_typo)}>Ausloggen</Typography>
                            </Button>
                        </Box>
                        <Box className={clsx(classes.rightbox)}>
                            <Button variant={"contained"} className={clsx(classes.btn)}>
                                <Typography className={clsx(classes.btn_typo)}>Schrank XY Halle 16</Typography>
                            </Button>

                            <Button variant={"contained"} className={clsx(classes.btn)} onClick={(event)=> {handleButton(event)}}
                            	disabled={QrScanned}>
                                <Typography className={clsx(classes.btn_typo)}>Zugang anfordem</Typography>
                            </Button>

                            <Button variant={"contained"} className={clsx(classes.btn)}>
                                <Typography className={clsx(classes.btn_typo)}>HomePage</Typography>
                            </Button>
                        </Box>
                    </Box>
                </Fade>
                <Fade in={RequestChecked} timeout={300}>
                    <Box className={clsx(classes.top_box_sectiontop)}>
                        <SectionRequest Requestunchecked={SetRequestChecked}/>
                    </Box>
                </Fade>
                <Box>

                </Box>
            </Box>
        </Container>
    );
}

export default SectionTop;