import React from 'react';
import {status} from '../utils';

const API = process.env.API;

export function SetRequest(userData,token){
    return fetch(`https://${API}/web/requests/access_request/`,{
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
    return fetch(`https://${API}/web/requests/cancelling_by_frontend/`,{
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
    return fetch(`https://${API}/web/requests/open_door/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify(requestData)
    }).then(status).catch(e => {console.log(e);
    })
}