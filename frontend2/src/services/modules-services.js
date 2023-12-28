import React from 'react';
import {status} from '../utils';

const API = process.env.API;

export function GetTemp(data){
    return fetch(`https://${API}/web/doors/getdoor/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(status).catch(e => {console.log(e);
    })
}