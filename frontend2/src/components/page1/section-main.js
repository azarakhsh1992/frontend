import * as React from "react";
import SectionTop from "./section-top";
import SectionMiddle from "./section-middle";
import clsx from "clsx";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useStyles} from "./style/section-main-style";
import QrReaderd from "../qrcode/ReactQrReader";
import {useState} from "react";



const SectionMain = () => {

    const [QrScanned,SetQrScanned] = useState(null);
    const [RequestChecked,SetRequestChecked] = useState("cancel");


    const classes = useStyles();
    return (
        <>
            <Container className={clsx(classes.maincontainer)}>
                <Box className={clsx(classes.mainbox)}>
                            <Box className={clsx(classes.top_box)}>
                                <SectionTop QrScanned={(QrScanned === null ? true : false)} RequestChecked={RequestChecked}
                                	SetRequestChecked={SetRequestChecked} setQr={SetQrScanned}/>
                            </Box>
                    {
                        QrScanned !== null ?
                            <Box>
                                <SectionMiddle className={clsx(classes.middle_box)}/>
                            </Box>
                            :
                            <Box>
                                <QrReaderd onSetQr={SetQrScanned}/>
                            </Box>
                    }

                </Box>
            </Container>
        </>
    );
}

export default SectionMain;