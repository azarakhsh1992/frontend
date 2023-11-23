import makeStyles from '@mui/styles/makeStyles';
export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    content: {
        flex: 1,
        paddingTop: theme.spacing(2),  // Optional padding at the top after the header
        paddingBottom: theme.spacing(2),  // Optional padding at the bottom before the footer
    },
    header: {
        background: '#555',
        color: 'white',
    },
}));