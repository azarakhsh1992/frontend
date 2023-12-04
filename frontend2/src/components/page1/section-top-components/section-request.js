import * as React from "react";
import {useState} from "react";
// Material Ui
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// Multi class import
import clsx from "clsx";
// Style
import {useStyles} from "./style/section-request-style";
// components
import AlertDialogSlide from "./section-request-components/request-dialogbox";
import {CircularProgress} from "@mui/material";
import {useSetRequest} from "../../../fetches/request-fetch";



const SectionRequest = ({Requestchecked,DoorQr,AuthD}) => {

    // style
    const classes = useStyles();
    //state to make request


    const handleRequest = (event) => {
        Requestchecked("cancel");
    }
    return (
        <Container className={clsx(classes.maincontainer)}>
            <Box className={clsx(classes.mainbox)}>
                <Box className={clsx(classes.message_box)}>
                    <Typography className={clsx(classes.message_typo)}>
                        Bitte drucken Sie die Turtaste
                    </Typography>
                    <CircularProgress/>
                </Box>
                <Box className={clsx(classes.btn_box)}>
                    <Button variant={"outlined"} onClick={(event)=>{handleRequest(event)}} className={clsx(classes.btn)}>
                        {/*<Typography className={clsx(classes.btn_typo)}>*/}
                        {/*    Waiting*/}
                        {/*</Typography>*/}
                        <Typography>
                            {DoorQr}
                        </Typography>
                    </Button>
                </Box>
        	</Box>
        </Container>
    );
}

export default SectionRequest;