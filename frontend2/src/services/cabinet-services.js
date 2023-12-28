import React from 'react';
import {status} from '../utils';

const API = process.env.API;

export function GetCabinets(){
    return fetch(`https://${API}/web/cabinet/`).then(status).catch(e => {console.log(e);
    })
}