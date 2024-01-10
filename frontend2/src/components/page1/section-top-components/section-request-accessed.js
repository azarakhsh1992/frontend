import React,{useState} from "react";
import clsx from "clsx";
import {useStyles} from "./style/section-request-accessed-style";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from "@mui/material/TextField";


const ArrayAccess = ['None','message 1','message 2','message 3','other']
const SectionRequestAccessed = () => {

    const classes = useStyles();
    const [Message, setMessage] = React.useState('');
    const handleChange = (event) => {
        setMessage(event.target.value);
    };
    return (
        <Container className={clsx(classes.maincontainer)}>
            <Box className={clsx(classes.mainbox)}>
                <FormControl sx={{ m: 1, minWidth: 100 }}>
                    <InputLabel id="demo-simple-select-autowidth-label" size={'normal'}><Typography fontSize={'11px'} fontWeight={'bold'}>Service Log</Typography></InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={Message}
                        onChange={handleChange}
                        autoWidth
                        label="Service Log"
                    >
                        {
                            ArrayAccess.map((value, index) => {
                                return (
                                    <MenuItem value={index}>{ArrayAccess[index]}</MenuItem>
                                );
                            })
                        }
                    </Select>
                </FormControl>
                {Message === 4 ? <TextField placeholder={"Please Write Service log"} multiline minRows={5}  sx={{minWidth:'300px'}}></TextField> : <></>}
            </Box>
        </Container>
    );
}

export default SectionRequestAccessed;