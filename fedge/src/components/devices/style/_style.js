import makeStyles from '@mui/styles/makeStyles';
export const useStyles = makeStyles((theme) => ({
    root:{
        height: 'auto',
        width:'200px',
        borderRadius:"200px",
        backgroundColor:theme.palette.primary.light,
        color: "white",
        fontSize:"large",
    },
    tempin:{
        backgroundColor: theme.palette.warning.light,
        color: "white",
        fontSize:"large",
    },
    tempout:{
        backgroundColor: theme.palette.error.light,
        color: "white",
        fontSize:"large",
    }

}));