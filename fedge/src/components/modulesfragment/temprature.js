import React, {useEffect, useState} from 'react';
import {useFetchTemps} from "../../fetches/modules-fetch";
import Box from "@mui/material/Box";




const TempView = () => {

    const [temps, setTemps] = useState(null);
    useEffect( async () => {
        const [temps, loading, error] = useFetchTemps();

    },[]);

    return (
        <>
            <Box>

            </Box>
        </>
    );
}

export default TempView;