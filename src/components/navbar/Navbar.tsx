import { FC, useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LockIcon from '@mui/icons-material/Lock';
import LightModeIcon from '@mui/icons-material/LightMode';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Nav,Wrap,Span,Icon, Wrapper,WrapDiv, Text} from './Navbar.style'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar: FC = () => {
    const [isNavbarToggled, setIsNavbarToggled] = useState(false)
 
    const toggleNavbar = () => setIsNavbarToggled(!isNavbarToggled)

    
    return (
        <>
            <Nav width={isNavbarToggled ? "320px" : '50px' }>
            <Icon onClick={toggleNavbar}><MenuIcon/> </Icon>    
           <WrapDiv>
                <Wrap>
                    <HomeIcon/>
                <Span>Home</Span>
                </Wrap>
                
                <Wrap>
                    <RocketLaunchIcon/>
                <Span>Services</Span>
                </Wrap>

                <Wrap>
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

                <Wrap>
                    <LogoutOutlinedIcon/>
                <Span>Sign out</Span>
                    </Wrap>
                </WrapDiv>

        </Nav>
        </>
    )
}

export default Navbar