import { FC } from "react";
import {  Container,
    Wrapper,
    Icon, Wrap, Span, Box, Text, Button } from './MoreTab.style'
import MobileFooterNav from "../../components/mobile footer nav/MobileFooterNav";
import CelebrationIcon from '@mui/icons-material/Celebration';
import HttpsIcon from '@mui/icons-material/Https';
import LogoutIcon from '@mui/icons-material/Logout';
import LightModeIcon from '@mui/icons-material/LightMode';

const MoreTab: FC = () => {
    
    return (
        <>
            <Container>

                <Wrapper>
                    <Box>
                    <Icon><CelebrationIcon/></Icon>
                    <Wrap>
                        <Span>Invite Friends</Span>
                    <Text>Get paid when you spread the world!</Text>
                        </Wrap>
                    </Box>
                    <Button>Invite</Button>
                </Wrapper>
                
                <Wrapper>
                    <Box>
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
                
                <Wrapper>
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


