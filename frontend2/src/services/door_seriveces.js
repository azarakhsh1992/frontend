import React from 'react';
import {status} from '../utils';

const API = process.env.REACT_APP_API;

export function GetDoor(qr){
    return fetch(`https://${API}/web/doors/getdoor/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(qr)
    }).then(status).catch(e => {console.log(e);
    })
}