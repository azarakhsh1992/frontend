import { makeStyles } from '@mui/styles';

export const useStylesTemp = makeStyles((theme) => ({
    root: {
        height: 'auto !important',
        width: '10em  !important',
        display: 'flex  !important',         // Use flexbox for alignment
        alignItems: 'center  !important',    // Align items vertically in the center
        justifyContent: 'center  !important',// Align items horizontally in the center
        borderRadius: '5em  !important',
        backgroundColor: `${theme.palette.tertiary.blue} !important`,
        color: 'white  !important',
        fontSize: 'large  !important',
    },
    tempin: {
        backgroundColor: `${theme.palette.tertiary.bluelight} !important`,
        display:'flex',
        width:'10em',
        color:'white !important',
        fontSize: "large",
    },
    tempout: {
        backgroundColor: `${theme.palette.tertiary.yellow} !important`,
        display:'flex',
        width:'10em',
        color:'white !important',
        fontSize: "large",
    },
}));

export const useStylesDoor = makeStyles((theme) => ({
    root: {
        height: 'auto !important',
        width: '10em  !important',
        display: 'flex  !important',         // Use flexbox for alignment
        alignItems: 'center  !important',    // Align items vertically in the center
        justifyContent: 'center  !important',// Align items horizontally in the center
        borderRadius: '5em  !important',
        backgroundColor: `${theme.palette.tertiary.blue} !important`,
        color: 'white  !important',
        fontSize: 'large  !important',
    },
    door: {
        backgroundColor: `${theme.palette.tertiary.red2} !important`,
        display:'flex',
        width:'10em',
        color:'white !important',
        fontSize: "large",
    },
}));

export const useStylesEnergy = makeStyles((theme) => ({
    root1: {
        height: '3em !important',
        width: '10em  !important',
        display: 'flex  !important',         // Use flexbox for alignment
        alignItems: 'center  !important',    // Align items vertically in the center
        justifyContent: 'center  !important',// Align items horizontally in the center
        borderRadius: '5em  !important',
        backgroundColor: `${theme.palette.tertiary.red3} !important`,
        color: 'white  !important',
        fontSize: 'large  !important',
    },
    root2: {
        height: '3em !important',
        width: '10em  !important',
        display: 'flex  !important',         // Use flexbox for alignment
        alignItems: 'center  !important',    // Align items vertically in the center
        justifyContent: 'center  !important',// Align items horizontally in the center
        borderRadius: '5em  !important',
        backgroundColor: `${theme.palette.tertiary.green2} !important`,
        color: 'white  !important',
        fontSize: 'large  !important',
    },
    energy1: {
        backgroundColor: `${theme.palette.tertiary.red3} !important`,
        display:'flex',
        height: '4em !important',
        width: '10em  !important',
        borderRadius: '5em  !important',
        color:'white !important',
        fontSize: "large",
    },
    energy2: {
        backgroundColor: `${theme.palette.tertiary.green2} !important`,
        display:'flex',
        height: '4em !important',
        width: '10em  !important',
        borderRadius: '5em  !important',
        color:'white !important',
        fontSize: "large",
    },
}));
