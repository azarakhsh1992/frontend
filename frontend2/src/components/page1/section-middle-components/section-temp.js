import * as React from "react";
// Material Ui
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// Multi class import
import clsx from "clsx";
// Style
import {useStyles} from "./style/section-temp-style";
import PopupDataTemp from "./popup-data-temp";


export const SectionTemp = ({TemperatureData,HistoryTemp}) => {
    const classes = useStyles();
    const sectionTempArray = ["Top section","Middle section","Bottom section","Main section"];
    return (
        <Container className={clsx(classes.maincontainer)}>
            <Box className={clsx(classes.mainbox)}>
                {
                    sectionTempArray.map( (value, index,array) => {
                        if(TemperatureData[value]){
                            // console.log(HistoryTemp && HistoryTemp["top"]);
                            return (
                                <Box className={clsx(classes.btn_box)} id={index}>
                                    <Box className={clsx(classes.title_box)}>
                                        <Typography className={clsx(classes.title_typo,classes.title_key)}>
                                            {value}
                                        </Typography>
                                        <PopupDataTemp txt={value} HistoryData={(HistoryTemp && HistoryTemp[value])}/>
                                    </Box>
                                    <Box className={clsx(classes.btn_box_temp)}>
                                        <Typography  className={clsx(classes.temp_typo)}>
                                            Temperature
                                        </Typography>
                                        <Typography  className={clsx(classes.temp_typo)}>
                                            {TemperatureData[value]["Temperature"]}
                                        </Typography>
                                    </Box>
                                    <Box className={clsx(classes.btn_box_temp)}>
                                        <Typography  className={clsx(classes.temp_typo)}>
                                            Humidity
                                        </Typography>
                                        <Typography  className={clsx(classes.temp_typo)}>
                                            {TemperatureData[value]["Humidity"]}
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