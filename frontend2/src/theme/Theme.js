import { createTheme} from '@mui/material/styles';
import {orange} from "@mui/material/colors";

const primary = {
    main: '#1976d2',
    light: '#42a5f5',
    dark: '#1565c0',
    contrastText: '#fff',
};

export const theme = createTheme({
    palette: {
        primary: {
            main: '#662549',
            light: '#AE445A',
            dark: '#451952',
            contrastText: '#1D1A39',
            headercolor:'#E8BCB9',
        },
        secondary: {
            main: '#473e66',
            light: '#BD83B8',
            dark: '#1B3358',
            contrastText: '#06142E',},
    },
    status: {
        danger: orange[500],
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});