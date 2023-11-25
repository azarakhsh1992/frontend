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
            contrastText: '#06142E',
        },
        tertiary: {
            blue:'#29429C',
            bluelight: '#1A9EA7',
            bluelight2: '#6DA8FF',
            gray: '#5B6673',
            red:'#A23E3E',
            green: '#18A648',
            yellow:'#A7901A',
            red2:'#C60202',
            red3:'#F06161',
            green2:'#7AA71A',
            blue2:'#2B2E4A',
        },
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