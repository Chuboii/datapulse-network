import { FC } from "react";
import {Container, Header, Icon, Button, H2, Wrap, To, Name, Amount, AmtText, Amt, Wrapper, Tab, Text, SubText } from './Checkout.style'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Airtime2CashCheckout: FC = () => {
    
    return (
        <>
            <Container>
                <Header>
                    <Icon><ArrowBackIosNewIcon/></Icon>
                    <H2>Airtime to Cash</H2>
                </Header>
                <Wrap>
                    <To>To</To>
                    <Name>Joe Doe</Name>
                    <Amount>
                        <AmtText>Amount</AmtText>
                        <Amt>NGN 9,999</Amt>
                    </Amount>
                </Wrap>

                <Wrapper>
                    <Tab>
                        <Text>Conversion Rate</Text>
                        <SubText>80%</SubText>
                    </Tab>
                    <Tab>
                        <Text>Conversion Rate</Text>
                        <SubText>80%</SubText>
                    </Tab>
                    <Tab>
                        <Text>Payment Amount</Text>
                        <SubText>NGN 7888</SubText>
                    </Tab>
                    <Tab>
                        <Text>Network</Text>
                        <SubText>MTN Airtime Conversion</SubText>
                    </Tab>
                    <Tab>
                        <Text>Phone Number</Text>
                        <SubText>8039914037</SubText>
                    </Tab>
                    <Tab>
                        <Text>Bank</Text>
                        <SubText>Kuda</SubText>
                    </Tab>
                    <Tab>
                        <Text>Account Number</Text>
                        <SubText>21012345567</SubText>
                    </Tab>
                    
                </Wrapper>

                <Button>Confirm</Button>
        </Container>
        
        </>
    )
}

export default Airtime2CashCheckout