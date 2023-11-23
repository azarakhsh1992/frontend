import * as React from 'react';
import {useState} from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Autocomplete} from "@mui/material";
import {ProfileSet, SignUp} from "../../services/user-services";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function ProfileSubmit() {

    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    // const [password, setPassword] = useState(null);
    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [accesscabin, setAccesscabin] = useState(null);
    const [role, setRole] = useState(null);
    const [bereich, setBereich] = useState(null);
    const [telephone, setTelephone] = useState(null);
    const [group, setGroup] = useState(null);


    const Role = [
        { label: 'TECHNICIAN'},
        { label: 'PLANT_OPERATOR'},
        { label: 'IT_SHOPFLOOR'}];
    const Bereich = [
        { label: 'Karosseriebau', val:'K'},
        { label: 'Foerdertechnik', val:'F'},
        { label: 'Montage', val:'M'},
        { label: 'Inhouse Logistik', val:'I'},
        { label: 'Presswerk', val:'P'},
        { label: 'Lackiererei', val:'L'},
        { label: 'Batteriefertigung', val:'B'},
        { label: 'Komponente', val:'C'}
    ];
    const Group = [
        { label: 'GROUP1', key:1},
        { label: 'GROUP2', key:2},
        { label: 'GROUP3', key:3}];



    const handleSubmit = async (event) => {
        event.preventDefault();
        const regData = await ProfileSet({
            "username": username,
            "email": email,
            // "password": password,
            "profile": {
                "firstname": firstname,
                "lastname": lastname,
                "accessable_cabinets": accesscabin,
                "role": role,
                "bereich": bereich,
                "telephone": telephone,
                "group": group
            }
        });
    };



    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component={"main"}>
                <Box component="form" onSubmit={handleSubmit} sx={{display:'flex',flexDirection:'row', marginTop:8}} >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="username"
                                required
                                fullWidth
                                id="userName"
                                label="UserName"
                                autoFocus
                                onChange={(e)=>setUsername(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </Grid>
                        {/*<Grid item xs={12} sm={6}>*/}
                        {/*    <TextField*/}
                        {/*        required*/}
                        {/*        fullWidth*/}
                        {/*        name="password"*/}
                        {/*        label="Password"*/}
                        {/*        type="password"*/}
                        {/*        id="password"*/}
                        {/*        autoComplete="new-password"*/}
                        {/*        onChange={(e)=>setPassword(e.target.value)}*/}
                        {/*    />*/}
                        {/*</Grid>*/}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="FirstName"
                                label="First Name"
                                autoFocus
                                onChange={(e)=>setFirstname(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="lastname"
                                required
                                fullWidth
                                id="LastName"
                                label="Last Name"
                                autoFocus
                                onChange={(e)=>setLastname(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="accessable_cabinets"
                                required
                                fullWidth
                                id="accessable_cabinets"
                                label="Accessable Cabinets"
                                autoFocus
                                onChange={(e)=>setAccesscabin(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Autocomplete
                                disablePortal
                                name="role_selector"
                                required
                                fullWidth
                                id="role_selector"
                                options={Role}
                                fullWidth
                                renderInput={(params) => <TextField {...params} label="Role" required/>}
                                onChange={(e,newValue)=>setRole(newValue.label)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Autocomplete
                                disablePortal
                                name="bereich"
                                required
                                fullWidth
                                id="bereich_selector"
                                options={Bereich}
                                fullWidth
                                renderInput={(params) => <TextField {...params} label="Bereich" required/>}
                                onChange={(e,newValue)=>setBereich(newValue.val)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="telephone"
                                required
                                fullWidth
                                id="telephone"
                                label="Telephone"
                                autoFocus
                                onChange={(e)=>setTelephone(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Autocomplete
                                disablePortal
                                name="group"
                                required
                                fullWidth
                                id="shift_selector"
                                options={Group}
                                fullWidth
                                renderInput={(params) => <TextField {...params} label="Group" required/>}
                                onChange={(e,newValue)=>setGroup(newValue.key)}
                            />
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit Profile
                        </Button>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    );
}