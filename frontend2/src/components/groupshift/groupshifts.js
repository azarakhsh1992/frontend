import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {Autocomplete} from "@mui/material";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import dayjs from "dayjs";
import {ShiftRegister} from '../../services/group-services';
import {DaysOfMonth} from './groupcustomfunctions';




const defaultTheme = createTheme();
export default function GroupShifts() {




    const [selectedDate, setSelectedDate] = useState({});
    const [selectedShift, setSelectedShift] = useState({});
    const [groups,setGroups] = useState();
    const [Len,setLen] = useState(0);
    const [Month,setMonth] = useState(0);
    const [Year,setYear] = useState(0);


    const Shift = [
        { label: 'FRUEH'},
        { label: 'SPAET'},
        { label: 'NACHT'}];
    const Group = [
        { label: 'GROUP1', key:1},
        { label: 'GROUP2', key:2},
        { label: 'GROUP3', key:3}];

    const monthNames = [
        {label: 'January', key: 1},
        {label: 'February', key: 2},
        {label: 'March', key: 3},
        {label: 'April', key: 4},
        {label: 'May', key: 5},
        {label: 'June', key: 6},
        {label: 'July', key: 7},
        {label: 'August', key: 8},
        {label: 'September', key: 9},
        {label: 'September', key: 10},
        {label: 'November', key: 11},
        {label: 'December', key: 12},
    ];
    const yearNames = [
        {label: 'Current Year', key: 0},
        {label: 'Next Year', key: 1},
    ]

    const changeHandlerdate = (index,data,name)=> {
        setSelectedDate(prevObj=> {
            return ({...prevObj,[index]:{[name]:data,}})})}
    const changeHandlershift = (index,data,name)=> {
        setSelectedShift(prevObj=> {
            return ({...prevObj,[index]:{[name]:data,}})})}

    const YearHandle = (value) => {
        const year = dayjs().year();
        setYear(year + value);
    }
    const MonthHandle = (value) => {
        const month = value;
        setMonth(value);
        const days = dayjs(`${Year}-${month}`).daysInMonth();
        setLen(days-29);
        for(let i = 0; i < days-29; i++){
            setSelectedDate(prevObj=> {
                return ({...prevObj,[i]:{'date':dayjs(`${Year}-${month}-${i+1}`).format("YYYY-MM-DD"),}})});
        }
    }

    const handleSubmit = async (event,group) => {
        event.preventDefault();
        let mergedObj = {};
        try {
            Object.keys(selectedDate).forEach(key => {
                mergedObj[key] = {
                    groups,
                    ...selectedDate[key],
                    ...selectedShift[key]
                };
            });
            console.log(mergedObj);
        }catch (error){
            console.log(error);
        }
        // const regData = await ShiftRegister(mergedObj);
        mergedObj = {};
    }
    //
    const gridItems = Array.from({ length: Len }, (_, index) => (
        <div key={index}>
            <Grid container columns={12} sx={{marginTop:'5px'}}>
                <Grid item xs={5} sm={5}>
                    <DatePicker
                        value={dayjs(`${Year}-${Month}-${index+1}`)}
                        onChange={(newDate) => {changeHandlerdate(index,dayjs(newDate).format("YYYY-MM-DD"),'date')}}
                    />
                </Grid>
                <Grid item xs={5} sm={5}>
                    <Autocomplete
                        name="shift"
                        id="shift_selector"
                        options={Shift}
                        renderInput={(params) => <TextField {...params} label={index+1} required/>}
                        onChange={(e,newValue) => {changeHandlershift(index,newValue.label,'shift')}}/>
                </Grid>
            </Grid>
        </div>
    ));
    //
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component={"main"}>
                <Box component="form" onSubmit={(event)=>{handleSubmit(event,groups)}} sx={{display:'flex',flexDirection:'row',marginTop:8}}>
                    <Grid container spacing={2} columns={12} >
                        <Grid item xs={11} sm={4}>
                        <Autocomplete
                            name="group"
                            id="group_selector"
                            options={Group}
                            renderInput={(params) => <TextField {...params} label={'group'} required/>}
                            onChange={(e,newValue) => {setGroups(newValue.key)}}
                        />
                        </Grid>
                        <Grid item xs={11} sm={4}>
                            <Autocomplete
                                name="years"
                                id="year_selector"
                                options={yearNames}
                                renderInput={(params) => <TextField {...params} label={'year'} required/>}
                                onChange={(e,newValue) => {YearHandle(newValue.key)}}
                            />
                        </Grid>
                        <Grid item xs={11} sm={4}>
                            <Autocomplete
                                name="months"
                                id="month_selector"
                                options={monthNames}
                                renderInput={(params) => <TextField {...params} label={'month'} required/>}
                                onChange={(e,newValue) => {MonthHandle(newValue.key)}}
                            />
                        </Grid>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        {gridItems}
                        </LocalizationProvider>
                    <br/>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Set Shifts
                    </Button>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    );
}