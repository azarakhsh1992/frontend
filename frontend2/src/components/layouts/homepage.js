import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {useStyleHomePage} from "./style/style";
import clsx from "clsx";
import Typography from "@mui/material/Typography";

const Homepage = () => {

    const classes = useStyleHomePage();

    return (
        <Container className={clsx(classes.containermain)}>
            <Container className={clsx(classes.containerchild1)}>
                <Button variant={"contained"} className={clsx(classes.btn)}>
                    <Typography className={clsx(classes.btnqr_typo)}>QR-Code scannen</Typography>
                </Button>
                <Button variant={"contained"} className={clsx(classes.btn)}>
                    <Typography className={clsx(classes.btnqr_typo)}>Schrankubersicht</Typography>
                </Button>
                <Button variant={"contained"} className={clsx(classes.btn)}>
                    <Typography className={clsx(classes.btnqr_typo)}>meine Schranke</Typography>
                </Button>
                <Button variant={"contained"} className={clsx(classes.btn,classes.btnlogout)}>
                    <Typography className={clsx(classes.btnqr_typo)}>ausloggen</Typography>
                </Button>
            </Container>

            <Container className={clsx(classes.containerchild2)}>
                <Button variant={"contained"} className={clsx(classes.btn)}>
                    <Typography className={clsx(classes.btnqr_typo)}>Schrank XY halle 16</Typography>
                </Button>
                <Button variant={"contained"} className={clsx(classes.btn)} sx={{display:'flex',flexDirection:'column'}}>
                    <Typography className={clsx(classes.btnqr_typo)}>Tur 1 ist gescannt</Typography>
                    <Typography className={clsx(classes.btnqr_typo)} sx={{backgroundColor:'red',borderRadius:'20px',padding:'10px 10px'}}>Zugang anforden</Typography>
                </Button>
                <Container className={clsx(classes.containerchild3)}>
                    <Button variant={"contained"} className={clsx(classes.btn,classes.btn_homepage)}>
                        <Typography className={clsx(classes.btnqr_typo,classes.typo_section2)}>vom Schrank abmeiden</Typography>
                    </Button>
                    <Button variant={"contained"} className={clsx(classes.btn,classes.btn_homepage)}>
                        <Typography className={clsx(classes.btnqr_typo,classes.typo_section2)}>Home Page</Typography>
                    </Button>
                </Container>
            </Container>
        </Container>
    );
}

export default Homepage;