import * as React from "react";
// Material Ui
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// Multi class import
import clsx from "clsx";
// Style
import {useStyles} from "./style/section-temp-style";
import PopupData from "./popup-data";


export const SectionTemp = () => {

    const classes = useStyles();
    return (
        <Container className={clsx(classes.maincontainer)}>
            <Box className={clsx(classes.mainbox)}>
                <Box className={clsx(classes.btn_box)}>
                    <Box className={clsx(classes.title_box)}>
                        <Typography className={clsx(classes.title_typo)}>
                            Top
                        </Typography>
                        <PopupData txt={"Top"}/>
                    </Box>
                    <Box className={clsx(classes.btn_box_temp)}>
                        <Typography className={clsx(classes.temp_typo)}>
                            Max
                        </Typography>
                        <Typography  className={clsx(classes.temp_typo)}>
                            X&deg;C
                        </Typography>
                    </Box>
                    <Box className={clsx(classes.btn_box_temp)}>
                        <Typography  className={clsx(classes.temp_typo)}>
                            Min
                        </Typography>
                        <Typography  className={clsx(classes.temp_typo)}>
                            X&deg;C
                        </Typography>
                    </Box>
                    <Box className={clsx(classes.btn_box_temp)}>
                        <Typography  className={clsx(classes.temp_typo)}>
                            Current
                        </Typography>
                        <Typography  className={clsx(classes.temp_typo)}>
                            X&deg;C
                        </Typography>
                    </Box>
                    <Box className={clsx(classes.btn_box_temp)}>
                        <Typography  className={clsx(classes.temp_typo)}>
                            Humidity
                        </Typography>
                        <Typography  className={clsx(classes.temp_typo)}>
                            X%RH
                        </Typography>
                    </Box>
                </Box>
                <Box className={clsx(classes.btn_box)}>
                    <Typography className={clsx(classes.title_typo)}>
                        Mid
                    </Typography>
                    <PopupData txt={"Middle"}/>
                    <Box className={clsx(classes.btn_box_temp)}>
                        <Typography className={clsx(classes.temp_typo)}>
                            Max
                        </Typography>
                        <Typography  className={clsx(classes.temp_typo)}>
                            X&deg;C
                        </Typography>
                    </Box>
                    <Box className={clsx(classes.btn_box_temp)}>
                        <Typography  className={clsx(classes.temp_typo)}>
                            Min
                        </Typography>
                        <Typography  className={clsx(classes.temp_typo)}>
                            X&deg;C
                        </Typography>
                    </Box>
                    <Box className={clsx(classes.btn_box_temp)}>
                        <Typography  className={clsx(classes.temp_typo)}>
                            Current
                        </Typography>
                        <Typography  className={clsx(classes.temp_typo)}>
                            X&deg;C
                        </Typography>
                    </Box>
                    <Box className={clsx(classes.btn_box_temp)}>
                        <Typography  className={clsx(classes.temp_typo)}>
                            Humidity
                        </Typography>
                        <Typography  className={clsx(classes.temp_typo)}>
                            X%RH
                        </Typography>
                    </Box>
                </Box>
                <Box className={clsx(classes.btn_box)}>
                    <Typography className={clsx(classes.title_typo)}>
                        Bot
                    </Typography>
                    <PopupData txt={"Bottom"}/>
                    <Box className={clsx(classes.btn_box_temp)}>
                        <Typography className={clsx(classes.temp_typo)}>
                            Max
                        </Typography>
                        <Typography  className={clsx(classes.temp_typo)}>
                            X&deg;C
                        </Typography>
                    </Box>
                    <Box className={clsx(classes.btn_box_temp)}>
                        <Typography  className={clsx(classes.temp_typo)}>
                            Min
                        </Typography>
                        <Typography  className={clsx(classes.temp_typo)}>
                            X&deg;C
                        </Typography>
                    </Box>
                    <Box className={clsx(classes.btn_box_temp)}>
                        <Typography  className={clsx(classes.temp_typo)}>
                            Current
                        </Typography>
                        <Typography  className={clsx(classes.temp_typo)}>
                            X&deg;C
                        </Typography>
                    </Box>
                    <Box className={clsx(classes.btn_box_temp)}>
                        <Typography  className={clsx(classes.temp_typo)}>
                            Humidity
                        </Typography>
                        <Typography  className={clsx(classes.temp_typo)}>
                            X%RH
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}