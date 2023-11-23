import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Grid from "@mui/material/Grid";

export function GroupShiftItem(){
    return(

        <Grid item xs={12} sm={6}>
            <DatePicker />
        </Grid>

    )

}