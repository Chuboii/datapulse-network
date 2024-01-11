import { FC, useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LockIcon from '@mui/icons-material/Lock';
import LightModeIcon from '@mui/icons-material/LightMode';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Nav,Wrap,Span,Icon, Wrapper,WrapDiv, Text} from './Navbar.style'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import axios from "axios";
import PageLoader from "../page loader/PageLoader";

const Navbar: FC = () => {
    const [isNavbarToggled, setIsNavbarToggled] = useState<boolean>(false)
    const navigate = useNavigate()
    const toggleNavbar = () => setIsNavbarToggled(!isNavbarToggled)
    const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false)
    const dispatch = useDispatch()

    const navigateToServices = () => navigate("/services");
    const navigateToHistory = () => navigate("/history");
    const navigateToHome = () => navigate("/dashboard");


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
   
  
    
    return (
        <>
            <ToastContainer />
            {isDataLoaded && <PageLoader/>}
            <Nav width={isNavbarToggled ? "60px" : '350px' }>
            <Icon onClick={toggleNavbar}><MenuIcon/> </Icon>    
           <WrapDiv>
                <Wrap onClick={navigateToHome}>
                    <HomeIcon/>
                <Span>Home</Span>
                </Wrap>
                
                <Wrap onClick={navigateToServices}>
                    <RocketLaunchIcon/>
                <Span>Services</Span>
                </Wrap>

                <Wrap onClick={navigateToHistory}>
                    <AccessTimeIcon/>
                <Span>History</Span>
                </Wrap>

                <Wrap>
                    <LockIcon />
                    <Wrapper>
          
                        <Span>Security</Span>
                
                    </Wrapper>
              
                </Wrap>

                <Wrap>

                    <LightModeIcon />
            <Wrapper>
            
                 <Text>Toggle on dark mode</Text>
                    </Wrapper>
                </Wrap>

                <Wrap onClick={logoutBtn}>
                    <LogoutOutlinedIcon/>
                <Span>Sign out</Span>
                    </Wrap>
                </WrapDiv>

        </Nav>
        </>
    )
}

export default Navbar