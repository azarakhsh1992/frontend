import {enqueueSnackbar} from "notistack";

// export function status(res){
//     if(res.status >= 200 && res.status <300){
//         return res.json().then(data => {
//             const message = data.message;
//             enqueueSnackbar(message, {variant:'success',anchorOrigin:{
//                     vertical:"top",
//                     horizontal:"right",
//                 }});;
//             return data;
//         });}
//     throw new Error(res.statusText);
// }

const credentialMessages = {
    "signup":"username",
    "signin":"non_field_errors"
}

const enquUser = async (e)=>{
    const error = await e;
    const key = Object.keys(error);
    const _enque = enqueueSnackbar((error && error[key[0]][0]), {variant:'error',style:{borderRadius:'17px',},anchorOrigin:{
            vertical:"top",
            horizontal:"right",
        }});
    // return (_enque);
}

export function status(res){
    if(res.status >= 200 && res.status <300){
        return res.json();}
    throw new Error(res.statusText);
}

export function statusUser(res,obj){
    if(res.status >= 200 && res.status <300){
        return res.json();}
    enquUser(res.json());
}