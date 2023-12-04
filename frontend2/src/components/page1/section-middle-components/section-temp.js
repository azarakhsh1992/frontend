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


export const SectionTemp = ({TemperatureData}) => {

    const classes = useStyles();

    const sectionTempArray = ["top","middle","bottom",""];
    return (
        <Container className={clsx(classes.maincontainer)}>
            <Box className={clsx(classes.mainbox)}>
                {
                    sectionTempArray.map( (value, index,array) => {
                        if(TemperatureData[value]){
                            return (
                                <Box className={clsx(classes.btn_box)} id={index}>
                                    <Box className={clsx(classes.title_box)}>
                                        <Typography className={clsx(classes.title_typo)}>
                                            {value.slice(0,3)}
                                        </Typography>
                                        <PopupData txt={value}/>
                                    </Box>
                                    <Box className={clsx(classes.btn_box_temp)}>
                                        <Typography className={clsx(classes.temp_typo)}>
                                            Max
                                        </Typography>
                                        <Typography  className={clsx(classes.temp_typo)}>
                                            {TemperatureData[value]["Max"]}&deg;C
                                        </Typography>
                                    </Box>
                                    <Box className={clsx(classes.btn_box_temp)}>
                                        <Typography  className={clsx(classes.temp_typo)}>
                                            Min
                                        </Typography>
                                        <Typography  className={clsx(classes.temp_typo)}>
                                            {TemperatureData[value]["Min"]}&deg;C
                                        </Typography>
                                    </Box>
                                    <Box className={clsx(classes.btn_box_temp)}>
                                        <Typography  className={clsx(classes.temp_typo)}>
                                            Current
                                        </Typography>
                                        <Typography  className={clsx(classes.temp_typo)}>
                                            {TemperatureData[value]["Current"]}&deg;C
                                        </Typography>
                                    </Box>
                                    <Box className={clsx(classes.btn_box_temp)}>
                                        <Typography  className={clsx(classes.temp_typo)}>
                                            Humidity
                                        </Typography>
                                        <Typography  className={clsx(classes.temp_typo)}>
                                            {TemperatureData[value]["Humidity"]} %RH
                                        </Typography>
                                    </Box>
                                </Box>
                            );
                        }
                        else {
                            return null;
                        }
                    })}
            </Box>
        </Container>
    );
}