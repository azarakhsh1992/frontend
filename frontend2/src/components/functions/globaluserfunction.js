import React from 'react';
import {useAuth} from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";


export function Logout(){
    const {AuthD,setAuth}= useAuth();
    const history = useNavigate();

    localStorage.removeItem('signed-user');
}