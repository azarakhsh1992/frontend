import React from 'react';
import SignIn from "../sign-in/signing-in";
import {Route, Routes} from "react-router-dom";
import Header from "./Header";
import AccountPage from "../sign-in/account";
import RequestUser from "../request/Request";
import FigmaApp from "./figmalayout";
import Container from "@mui/material/Container";
import Homepage from "./homepage";
import Page1 from "../SASS/page1";

function Main() {
    return (
        <Container sx={{alignItems:'center', padding:'auto auto'}}>
        {/*<Header/>*/}
        <Routes >
            {/*<Route exact path="/" Component={SignIn}/>*/}
            <Route exact path="/" Component={FigmaApp}/>   // under develop
            {/*<Route exact path="/" Component={Page1}/>   // under develop*/}
            {/*<Route exact path={"/account"} Component={AccountPage}/>*/}
            {/*<Route exact path={"/request"} Component={RequestUser}/>*/}
        </Routes >
        </Container>
            );
}

export default Main;
