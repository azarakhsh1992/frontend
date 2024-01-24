import React from 'react';
import {status, statusUser, statusUserSignin, statusUserSignup} from '../utils';

const API = process.env.REACT_APP_API;

export function SignUp(userData){
    return fetch(`https://${API}/web/users/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    }).then((res)=>statusUser(res)).catch(e => {console.log(e);
    })
}

export function auth(credentials){
    console.log(`${API}`);
    return fetch(`https://${API}/web/authenticate/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then((res)=>statusUser(res)).catch(e => {console.log(e);
    })
}

// export function auth(credentials){
//     return fetch('http://192.168.88.251:8000/web/authenticate/',{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(credentials)
//     }).then(status).catch(e => {console.log(e);
//     })
// }

export function ProfileSet(userData){
    return fetch(`https://${API}/web/users/profiles/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    }).then(status).catch(e => {console.log(e);
    })
}