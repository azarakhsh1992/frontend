import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const MediaQuery = () => {
    const matches = useMediaQuery('(min-width:600px)');
    return matches;
}
export const useStyleFigma = makeStyles((theme) => ({
    root: {
        backgroundColor:`#eee !important`,
        [theme.breakpoints.down('sm')]: {
            margin:'10px'
        },
        borderRadius:'50px',
        padding:'50px 50px',
    },
}));