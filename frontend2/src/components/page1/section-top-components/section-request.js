import * as React from "react";
// Material Ui
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// Multi class import
import clsx from "clsx";
// Style
import {useStyles} from "./style/section-request-style";



const SectionRequest = ({Requestunchecked}) => {

    const classes = useStyles();
    //

    const handleRequest = (event) => {
        Requestunchecked(false);
    }
    return (
        <Container className={clsx(classes.maincontainer)}>
            <Box className={clsx(classes.mainbox)}>
                <Button variant={"outlined"} onClick={(event)=>{handleRequest(event)}}>
                    Section Request
                </Button>
        	</Box>
        </Container>
    );
}

export default SectionRequest;