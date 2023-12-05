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
import {useStyles} from "./style/section-request-style";
// components
import AlertDialogSlide from "./section-request-components/request-dialogbox";
import {CircularProgress} from "@mui/material";
import {useSetRequest} from "../../../fetches/request-fetch";



const SectionRequest = ({SetRequestchecked,Requestchecked,DoorQr,AuthD}) => {

    // style
    const classes = useStyles();
    //state to make request
    // countdown state
    const [count, setCount] = useState(10);
    console.log(Requestchecked);
    //coutdown
    useEffect(()=>{
        if(Requestchecked === "accept"){
            setCount(10);
            SetRequestchecked("counting");
        }
        const interval = setInterval(() => {
            if(Requestchecked === "counting"){
                setCount(prevCount => {
                    // You can add any additional logic here if needed
                    // For example, stopping the countdown when it reaches zero
                    if (prevCount <= 0) {
                        clearInterval(interval);
                        SetRequestchecked("ignored");
                        return 0; // Stop at zero
                    }
                    return prevCount - 1;
                });
            }
        }, 1000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    },[]);


    const handleRequest = (event) => {
        SetRequestchecked("cancel");
    }
    return (
        <Container className={clsx(classes.maincontainer)}>
            <Box className={clsx(classes.mainbox)}>
                <Box className={clsx(classes.message_box)}>
                    <Typography className={clsx(classes.message_typo)}>
                        Please push the button to confirm request
                    </Typography>
                    <CircularProgress/>
                </Box>
                <Box className={clsx(classes.btn_box)}>
                    <Button variant={"outlined"} onClick={(event)=>{handleRequest(event)}} className={clsx(classes.btn)}>
                        {/*<Typography className={clsx(classes.btn_typo)}>*/}
                        {/*    Waiting*/}
                        {/*</Typography>*/}
                        <Typography>
                            {Requestchecked === "countdown" ? count : "Request Ignored"}
                        </Typography>
                    </Button>
                </Box>
        	</Box>
        </Container>
    );
}

export default SectionRequest;