import { FC } from "react";
import { Wrapper, Icon, Wrap, Header,Box, Input, Button } from './Airtime2CashBankForm.style'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Airtime2CashCheckout from "../checkout/Checkout";

const Airtime2CashBankForm: FC = () => {
    
    return (
        <>
            <Airtime2CashCheckout/>
            <Wrapper>
                <Wrap>
                    <Header>Bank</Header>
                    <Input placeholder="E.g. Kuda"/>
                </Wrap>

                <Wrap>
                    <Header>Account Name</Header>
                    <Input placeholder="E.g. Chidera"/>
                </Wrap>

                <Wrap>
                    <Header>Account Number</Header>
                    <Input placeholder="20123 456 789"/>
                </Wrap>

                <Box>
                    <Icon>
                        <ArrowBackIcon />
                    </Icon>
                    <Button>Continue</Button>
                </Box>
        </Wrapper>
        </>
    )
}

export default Airtime2CashBankForm