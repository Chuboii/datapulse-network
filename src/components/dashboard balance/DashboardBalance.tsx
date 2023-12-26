import { FC } from "react";
import { Container, Text, Img, Digits } from './DashboardBalance.style'
import naira from '/src/assets/nigeria-naira-currency-symbol-svgrepo-com.svg'
import { useSelector } from "react-redux";
import { StateProp } from "../../utils/store/reducers/userInterface";


const DashboardBalance: FC = () => {
    const { currentUser } = useSelector((state: StateProp) => state.user);

    return (
        <>
            <Container>
                <Text>Account balance</Text>
                <Digits><Img src={naira} />{currentUser ? currentUser.user.balance : 0 }</Digits>
            </Container>
        </>
    )
}

export default DashboardBalance;
