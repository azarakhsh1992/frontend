import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    rootfda: {
        height: 'auto',
        width: '10em',
        display: 'flex',         // Use flexbox for alignment
        alignItems: 'center',    // Align items vertically in the center
        justifyContent: 'center',// Align items horizontally in the center
        borderRadius: '1em',
        backgroundColor: theme.palette.primary.light,
        color: 'white',
        fontSize: 'large',
    },
    tempin: {
        backgroundColor: theme.palette.warning.light,
        color: "white",
        fontSize: "large",
    },
    tempout: {
        backgroundColor: theme.palette.error.light,
        color: "white",
        fontSize: "large",
    }
}));
