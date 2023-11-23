import React from 'react';
import {useAuth} from "../../hooks/useAuth";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const AccountPage = () => {

    const {AuthD , setAuth} = useAuth();
    return (
        <>
            <Box>
                <Typography variant={'h3'}>{AuthD && AuthD.user.username}</Typography>
            </Box>
        </>
    );
}

export default AccountPage;