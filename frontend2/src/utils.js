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

const enquesignup = async (e)=>{
    const error = await e;
    const _enque = enqueueSnackbar((error && error.username[0]), {variant:'error',style:{borderRadius:'17px',},anchorOrigin:{
            vertical:"top",
            horizontal:"right",
        }});
    console.log(error);
    // return (_enque);
}

const enquesignin = async (e)=>{
    const error = await e;
    const _enque = enqueueSnackbar((error && error.non_field_errors[0]), {variant:'error',style:{borderRadius:'17px',},anchorOrigin:{
            vertical:"top",
            horizontal:"right",
        }});
    console.log(error);
    // return (_enque);
}

export function status(res){
    if(res.status >= 200 && res.status <300){
        return res.json();}
    throw new Error(res.statusText);
}

export function statusUserSignup(res){
    if(res.status >= 200 && res.status <300){
        return res.json();}
    enquesignup(res.json());
}

export function statusUserSignin(res){
    if(res.status >= 200 && res.status <300){
        return res.json();}
    enquesignin(res.json());
}