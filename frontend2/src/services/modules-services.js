import React from 'react';
import {status} from '../utils';

export function GetTemp(data){
    return fetch('http://127.0.0.1:8000/web/doors/getdoor/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(status).catch(e => {console.log(e);
    })
}