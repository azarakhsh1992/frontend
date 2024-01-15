import React from 'react';
import {status} from '../utils';

const API = process.env.REACT_APP_API;

export function GetCabinets(){
    return fetch(`https://${API}/web/cabinet/`).then(status).catch(e => {console.log(e);
    })
}


export function GetMyCabinet(requestData,token) {
    return fetch(`https://${API}/web/userhistory/mycabinets/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Token ${token}`
        },
        body: JSON.stringify(requestData)
    }).then(status).catch(e => {console.log(e);
    })
}