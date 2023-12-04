import React from 'react';
import {status} from '../utils';

export function SetRequest(userData,token){
    return fetch('http://127.0.0.1:8000/web/requests/userrequest/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify(userData)
    }).then(status).catch(e => {console.log(e);
    })
}

export function CancelRequest(requestData){
    return fetch('http://127.0.0.1:8000/web/request/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
    }).then(status).catch(e => {console.log(e);
    })
}

// TODO: correct url