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


export const SectionTemp = () => {

    const classes = useStyles();
    return (
        <Container classname={clsx(classes.maincontainer)}>
            <Box className={clsx(classes.mainbox)}>
                <Box className={clsx(classes.btn_box)}>
                    <Button variant={"contained"} className={clsx(classes.btn)}>
                        <Typography>
                            Top
                        </Typography>
                    </Button>
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
                    <Button variant={"contained"} className={clsx(classes.btn)}>
                        <Typography>
                            Middle
                        </Typography>
                    </Button>
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
                    <Button variant={"contained"} className={clsx(classes.btn)}>
                        <Typography>
                            Bottom
                        </Typography>
                    </Button>
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