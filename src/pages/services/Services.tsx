import { FC } from "react";
import {Container, Header, Wrap, H2, Tab, Wrapper, Box, Icon, TabText,Span} from './Services.style'


const Services: FC = () => {

    return (
        <>
            <Container>
                <Header>
                    <Wrap>

                        <H2>Services</H2>
                    </Wrap>
                </Header>
                
                <Wrapper>
                    <Tab>
                        <Icon></Icon>
                        <Box>
                            <TabText>Buy Data</TabText>
                          <Span>Subscribe data to any network</Span>
                        </Box>
                    </Tab>

                    <Tab>
                        <Icon></Icon>
                        <Box>
                            <TabText>Buy Data</TabText>
                          <Span>Subscribe data to any network</Span>
                        </Box>
                    </Tab>

                    <Tab>
                        <Icon></Icon>
                        <Box>
                            <TabText>Buy Data</TabText>
                          <Span>Subscribe data to any network</Span>
                        </Box>
                    </Tab>

                    
                </Wrapper>
        </Container>
        </>
    )
}

export default Services