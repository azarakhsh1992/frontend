import React from 'react';
import SignIn from "../sign-in/signing-in";
import {Route, Routes} from "react-router-dom";
import Header from "./Header";
import AccountPage from "../sign-in/account";
import RequestUser from "../request/Request";
import FigmaApp from "./figmalayout";

function Main() {
    return (
        <>
        <Header/>
        <Routes >
            {/*<Route exact path="/" Component={SignIn}/>*/}
            <Route exact path="/" Component={FigmaApp}/>   // under develop
            {/*<Route exact path={"/account"} Component={AccountPage}/>*/}
            {/*<Route exact path={"/request"} Component={RequestUser}/>*/}
        </Routes >
        </>
            );
}

export default Main;
