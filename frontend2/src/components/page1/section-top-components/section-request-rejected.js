import * as React from "react";
import {useEffect, useState} from "react";
// Material Ui
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// Multi class import
import clsx from "clsx";
// Style
import {useStyles} from "./style/section-request-rejected-style";

const SectionRequestRejected = ({RejectedData,SetRequestChecked}) => {
    const classes = useStyles();


    const handleButton = () => {
        setTimeout(()=>{
            SetRequestChecked("cancel");
            window.location.reload();
        },2500);
    }
    return (
        <Container className={clsx(classes.maincontainer)}>
            <Box className={clsx(classes.mainbox)}>
                {RejectedData && Object.keys(RejectedData.message).map((value, index) => {
                    return (
                        <Typography>{RejectedData.message[value]}</Typography>
                    );
                })
                }
                <Button onClick={handleButton}>
                    reload
                </Button>
            </Box>
        </Container>
    );
}

export default SectionRequestRejected;