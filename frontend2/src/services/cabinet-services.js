import React from 'react';
import {status} from '../utils';

export function GetCabinets(){
    return fetch('https://192.168.137.1:8000/web/cabinet/').then(status).catch(e => {console.log(e);
    })
}