import { makeStyles } from '@mui/styles';

export const useStylesTemp = makeStyles((theme) => ({
    root: {
        margin:'auto auto',
        height: 'auto !important',
        width: '10em  !important',
        display: 'flex  !important',         // Use flexbox for alignment
        alignItems: 'center  !important',    // Align items vertically in the center
        justifyContent: 'center  !important',// Align items horizontally in the center
        borderRadius: '5em  !important',
        backgroundColor: `${theme.palette.tertiary.blue} !important`,
        color: 'white  !important',
        fontSize: 'large  !important',
        [theme.breakpoints.down('sm')] : {
            width: '6em  !important',
            fontSize: 'small  !important',
        }
    },
    tempin: {
        backgroundColor: `${theme.palette.tertiary.bluelight} !important`,
        display:'flex',
        width:'10em',
        color:'white !important',
        fontSize: "large",
        [theme.breakpoints.down('sm')] : {
            width: '6em  !important',
            fontSize: 'small  !important',
        }
    },
    tempout: {
        backgroundColor: `${theme.palette.tertiary.yellow} !important`,
        display:'flex',
        width:'10em',
        color:'white !important',
        fontSize: "large",
        [theme.breakpoints.down('sm')] : {
            width: '6em  !important',
            fontSize: 'small  !important',
        }
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
        [theme.breakpoints.down('sm')] : {
            width: '7em  !important',
            fontSize: 'small  !important',
            spacing:'5'
        }
    },
    door: {
        backgroundColor: `${theme.palette.tertiary.red2} !important`,
        display:'flex',
        width:'10em',
        color:'white !important',
        fontSize: "large",
        [theme.breakpoints.down('sm')] : {
            width: '6em  !important',
            fontSize: 'small  !important',
        }
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
        [theme.breakpoints.down('sm')] : {
            width: '6em  !important',
            fontSize: 'small  !important',
        }
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
        [theme.breakpoints.down('sm')] : {
            width: '6em  !important',
            fontSize: 'small  !important',
        }
    },
    energy1: {
        backgroundColor: `${theme.palette.tertiary.red3} !important`,
        display:'flex',
        height: '4em !important',
        width: '10em  !important',
        borderRadius: '5em  !important',
        color:'white !important',
        fontSize: "large",
        [theme.breakpoints.down('sm')] : {
            width: '6em  !important',
            fontSize: 'small  !important',
        }
    },
    energy2: {
        backgroundColor: `${theme.palette.tertiary.green2} !important`,
        display:'flex',
        height: '4em !important',
        width: '10em  !important',
        borderRadius: '5em  !important',
        color:'white !important',
        fontSize: "large",
        [theme.breakpoints.down('sm')] : {
            width: '6em  !important',
            fontSize: 'small  !important',
        }
    },
}));
