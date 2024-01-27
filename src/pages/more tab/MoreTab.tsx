import { FC, useState } from "react";
import {  Container,
    Wrapper,
    Icon, Wrap, WrapHeader, Span, Box, H2, Text, Button, Header } from './MoreTab.style'
import MobileFooterNav from "../../components/mobile footer nav/MobileFooterNav";
import CelebrationIcon from '@mui/icons-material/Celebration';
import HttpsIcon from '@mui/icons-material/Https';
import LogoutIcon from '@mui/icons-material/Logout';
import LightModeIcon from '@mui/icons-material/LightMode';
import DashboardIcon from "@mui/icons-material/Dashboard";
import axios from "axios";
import PageLoader from "../../components/page loader/PageLoader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const MoreTab: FC = () => {
    const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutBtn = async () => {
        try {
            setIsDataLoaded(true)
            await axios.post("https://datapulse-network.onrender.com/api/auth/logout", { body: null })
            dispatch({ type: "GET_USER_DATA", payload: null })
            navigate('/')
            
            setIsDataLoaded(false)
        }
        catch (err) {
            setIsDataLoaded(false)
            toast.error('Oops! Connection Timeout... Try again', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    }

    const clickButton = () => {
        toast.info('Feature coming soon!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }

    return (
        <>
            <ToastContainer/>
            {isDataLoaded && <PageLoader/>}
            <Container>
            <Header>
                    <WrapHeader>
                    <DashboardIcon/>
                        <H2>More Offers</H2>
                </WrapHeader>
                </Header>  

                <Wrapper>
                    <Box>
                    <Icon><CelebrationIcon/></Icon>
                    <Wrap>
                        <Span>Get a website like this in minutes</Span>
                        </Wrap>
                        <Button style={{fontSize:"11px"}}><a href=" https://wa.me/qr/WZOSJI2E7RMLJ1">Click to get started</a></Button>
                    </Box>
        
                </Wrapper>

                <Wrapper>
                    <Box>
                    <Icon><CelebrationIcon/></Icon>
                    <Wrap>
                        <Span>Invite Friends</Span>
                    <Text>Get paid when you spread the world!</Text>
                        </Wrap>
                    </Box>
                    <Button onClick={clickButton}>Invite</Button>
                </Wrapper>
                
                <Wrapper>
                    <Box onClick={clickButton}>
                    <Icon><HttpsIcon/></Icon>
                    <Wrap>
                        <Span>Protect yourself from intruders</Span>
                    <Text>Security</Text>
                        </Wrap>
                </Box>
      </Wrapper>
   
                <Wrapper>
                    <Box>
                    <Icon><LightModeIcon/></Icon>
                    <Wrap>
                        <Span>Dark Theme</Span>
                        <Text>Toggle on dark mode</Text>
                        </Wrap>
                    </Box>
                    <Button>System</Button>
                </Wrapper>
                
                <Wrapper onClick={logoutBtn}>
                    <Box>
                    <Icon><LogoutIcon/></Icon>
                    <Wrap>
                        <Span>Sign out</Span>
                        </Wrap>
                    </Box>
                </Wrapper>
                
            </Container>
            <MobileFooterNav/>
        </>
    )
}

export default MoreTab


