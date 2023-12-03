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
import {useAuth} from "../../hooks/useAuth";



const SectionMain = () => {

    const [QrScanned,SetQrScanned] = useState(null);
    const [RequestChecked,SetRequestChecked] = useState("cancel");
// authentication
    const {AuthD,setAuth} = useAuth();


    const classes = useStyles();
    return (
        <>
            {
                AuthD ?
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
                    :
                    <Container className={clsx(classes.maincontainer)}>
                        <Box className={clsx(classes.mainbox)}>
                            <Box className={clsx(classes.not_logged_in_box)}>
                                <Typography className={clsx(classes.not_logged_in_typo)}>
                                    You are not logged in !!!
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
            }
        </>
    );
}

export default SectionMain;