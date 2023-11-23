import React from 'react';
import SignIn from "../sign-in/signing-in";
import {Route, Routes} from "react-router-dom";
import Header from "./Header";
import AccountPage from "../sign-in/account";
import ColumnGroupingTable from "../modulesfragment/cabinetfragment";
import Doorfragment from "../modulesfragment/doorfragment";
import QrReader from "../qrcode/html5qrcodereader";
import QrReaderd from "../qrcode/ReactQrReader";
import RequestUser from "../request/Request";
import TempDev from "../devices/temp";

function Main() {
    return (
        <>
        <Header/>
        <Routes >
            {/*<Route exact path="/" Component={SignIn}/>*/}
            <Route exact path="/" Component={TempDev}/>   // under develop
            <Route exact path={"/account"} Component={AccountPage}/>
            <Route exact path={"/request"} Component={RequestUser}/>
        </Routes >
        </>
            );
}

export default Main;
