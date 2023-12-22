import { FC } from "react";
import {Container, Header, Wrap, H2, Tab, Wrapper, Box, Icon, TabText,Span} from './Services.style'
import MobileFooterNav from "../../components/mobile footer nav/MobileFooterNav";
import SendIcon from '@mui/icons-material/Send';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';


const Services: FC = () => {

    return (
        <>
            <Container>
                <Header>
                    <Wrap>
                      <SendIcon/>
                        <H2>Services</H2>
                    </Wrap>
                </Header>
                
                <Wrapper>
                    <Tab>
                        <Icon><ChatIcon/></Icon>
                        <Box>
                            <TabText>Buy Data</TabText>
                          <Span>Subscribe data to any network</Span>
                        </Box>
                    </Tab>

                    <Tab>
                        <Icon><SendIcon/></Icon>
                        <Box>
                            <TabText>Buy Airtime</TabText>
                          <Span>Recharge any phone easily</Span>
                        </Box>
                    </Tab>

                    <Tab>
                        <Icon><DonutLargeIcon/></Icon>
                        <Box>
                            <TabText>Sell Airtime</TabText>
                          <Span>Convert airtime to cash</Span>
                        </Box>
                    </Tab>

                    
                </Wrapper>

        </Container>
            <MobileFooterNav />
            
        </>
    )
}

export default Services