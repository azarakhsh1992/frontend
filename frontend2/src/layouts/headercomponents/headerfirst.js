import React from 'react';
import {Box, Button, Tab, Tabs, Typography} from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";
import {useAuth} from "../../hooks/useAuth";
import {Logout} from '../../components/functions/globaluserfunction';
import {useNavigate} from "react-router-dom";


const Headerfirst = ({links,lang}) => {
    const {AuthD,setAuth}=useAuth();
    const history = useNavigate();
    return (
        <Box sx={{display:'flex',width:'100%',alignItems:'center', height:'100%'}}>
            <Box height={'100%'} marginTop={'100px'}>
                <ApiIcon sx={{color:'white' , marginRight:'20px'}}/>
            </Box>
            <Box height={'100%'} marginTop={'100px'}>
                <Tabs sx={{textDecoration:'none'}} >
                    {AuthD && links.map((link,index)=>(<Tab  label={link} key={index} sx={{color:'white',fontWeight:'bold',textDecoration:'none',
                        ':hover':{textDecoration:'underline', textUnderlineOffset:'5px'}}}/>))}
                </Tabs>
            </Box>
            <Box display={'flex'} marginLeft={'auto'} height={'100%'}>
                <Box height={'30%'} marginTop={'50px'}>
                    <Button variant={'outlined'} sx={{marginRight:2, color:'#19999F'}}><Typography  color={'white'} fontSize={'15px'} fontWeight={'bold'}>{lang === 'en' ? 'contact us' : 'kontaktiere uns'}</Typography></Button>
                    {AuthD && <Button variant={'contained'} sx={{marginLeft:2, marginRight:2, color:'#19999F'}} onClick={event => {
                        localStorage.removeItem('signed-user');history('/');window.location.reload();
                    }}><Typography  color={'white'} fontSize={'15px'} fontWeight={'bold'}>{lang === 'en' ? 'logout' : 'LogOut'}</Typography></Button>}
                </Box>
            </Box>
        </Box>
    );
}

export default Headerfirst;