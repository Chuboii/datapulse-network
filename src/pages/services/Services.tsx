import { FC } from "react";
import {Container, Header,BoxWrap, Wrap, H2, Tab, Wrapper, Box, Icon, TabText,Span} from './Services.style'
import MobileFooterNav from "../../components/mobile footer nav/MobileFooterNav";
import SendIcon from '@mui/icons-material/Send';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";


const Services: FC = () => {
    const navigate = useNavigate()

    const navigateToData = () => navigate("/dashboard")

    const navigateToAirtime = () => navigate("/dashboard/airtime")

    const navigateToAirtime2Cash = () => navigate("/dashboard/airtime2cash")

    return (
        <>
            <Container>
                <Navbar />
                <BoxWrap>
                <Header>
                    <Wrap>
                      <SendIcon/>
                        <H2>Services</H2>
                    </Wrap>
                </Header>
                
                    <Wrapper>
                    <Tab onClick={navigateToData}>
                        <Icon><ChatIcon/></Icon>
                        <Box>
                            <TabText>Buy Data</TabText>
                          <Span>Subscribe data to any network</Span>
                        </Box>
                    </Tab>

                    <Tab onClick={navigateToAirtime}>
                        <Icon><SendIcon/></Icon>
                        <Box>
                            <TabText>Buy Airtime</TabText>
                          <Span>Recharge any phone easily</Span>
                        </Box>
                    </Tab>

                    <Tab onClick={navigateToAirtime2Cash}>
                        <Icon><DonutLargeIcon/></Icon>
                        <Box>
                            <TabText>Sell Airtime</TabText>
                          <Span>Convert airtime to cash</Span>
                        </Box>
                    </Tab>

                    
                </Wrapper>
</BoxWrap>
        </Container>
            <MobileFooterNav />
            
        </>
    )
}

export default Services