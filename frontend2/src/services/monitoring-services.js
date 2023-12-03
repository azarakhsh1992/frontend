import React from 'react';
import {status} from '../utils';

export function GetData(qr){
    return fetch('http://127.0.0.1:8000/web/monitoring/monitoring_current_data/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(qr)
    }).then(status).catch(e => {console.log(e);
    })
}