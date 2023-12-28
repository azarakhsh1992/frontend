import React from 'react';
import {status} from '../utils';

const API = process.env.API;

export function ShiftRegister(userData){
    return fetch(`https://${API}/web/shifts/CustomFunc/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    }).then(status).catch(e => {console.log(e);
    })
}