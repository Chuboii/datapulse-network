import { FC } from "react";
import { Container, Text, Img, Digits } from './DashboardBalance.style'
import naira from '/src/assets/nigeria-naira-currency-symbol-svgrepo-com.svg'

const DashboardBalance: FC = () => {

    
    return (
        <>
            <Container>
                <Text>Account balance</Text>
                <Digits><Img src={naira } />0.00</Digits>
            </Container>
        </>
    )
}

export default DashboardBalance