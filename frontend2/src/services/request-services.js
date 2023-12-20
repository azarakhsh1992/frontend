import React from 'react';
import {status} from '../utils';

export function SetRequest(userData,token){
    return fetch('http://127.0.0.1:8000/web/requests/access_request/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify(userData)
    }).then(status).catch(e => {console.log(e);
    })
}

export function CancelRequest(requestData,token){
    return fetch('http://127.0.0.1:8000/web/requests/cancelling_by_frontend/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify(requestData)
    }).then(status).catch(e => {console.log(e);
    })
}

// TODO: correct url

export function CheckRequestButton(requestData,token){
    return fetch('http://127.0.0.1:8000/web/requests/open_door/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify(requestData)
    }).then(status).catch(e => {console.log(e);
    })
}