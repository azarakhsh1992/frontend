import React from 'react';
import {status} from '../utils';

export function GetCabinets(){
    return fetch('http://127.0.0.1:8000/web/cabinet/').then(status).catch(e => {console.log(e);
    })
}