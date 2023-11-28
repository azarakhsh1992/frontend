import React from 'react';
import SignIn from "../components/sign-in/signing-in";
import {Route, Routes} from "react-router-dom";
import Header from "./Header";
import AccountPage from "../components/sign-in/account";
import RequestUser from "../components/request/Request";
import Container from "@mui/material/Container";
import Page1 from "../components/SASS/page1";
import SectionTop from "../components/page1/section-top";
import SectionMiddle from "../components/page1/section-middle";
import SectionMain from "../components/page1/section-main";

function Main() {
    return (
        <>
            {/*<Header/>*/}
            <Routes >
                <Route exact path="/" Component={SignIn}/>
                <Route exact path="/sectionmain" Component={SectionMain}/>   // under develop
                {/*<Route exact path="/" Component={Page1}/>   // under develop*/}
                {/*<Route exact path={"/account"} Component={AccountPage}/>*/}
                {/*<Route exact path={"/request"} Component={RequestUser}/>*/}
            </Routes >
        </>
            );
}

export default Main;
