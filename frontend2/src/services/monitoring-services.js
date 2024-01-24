import React from 'react';
import {status} from '../utils';

const API = process.env.REACT_APP_API;

export function GetData(qr){
    return fetch(`https://${API}/web/monitoring/monitoring_current_data/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(qr)
    }).then(status).catch(e => {console.log(e);
    })
}


export function GetHistoryTemp(qr){
    return fetch(`https://${API}/web/monitoring/history_temp/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(qr)
    }).then(status).catch(e => {console.log(e);
    })
}

export function GetHistoryEnergy(qr){
    return fetch(`https://${API}/web/monitoring/history_energy/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(qr)
    }).then(status).catch(e => {console.log(e);
    })
}

export function GetHistoryDoor(qr){
    return fetch(`https://${API}/web/monitoring/history_doorsensor/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(qr)
    }).then(status).catch(e => {console.log(e);
    })
}

export function GetHistorySensor(qr){
    return fetch(`https://${API}/web/monitoring/history_cooling_sensor/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(qr)
    }).then(status).catch(e => {console.log(e);
    })
}