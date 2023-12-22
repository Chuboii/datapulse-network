import { FC } from "react";
import RecentTransactions from "../../components/recent transactions/RecentTransactions";
import {Container, Header, Wrap, H2} from './History.style'
import MobileFooterNav from "../../components/mobile footer nav/MobileFooterNav";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';


const History: FC = () => {
    
    return (
        <>
            <Container>
                <Header>
                    <Wrap>
                    <DonutLargeIcon/>
                        <H2>History</H2>
                </Wrap>
                </Header>  
                
                <RecentTransactions/>
            </Container>
            <MobileFooterNav/>
        </>
    )
}

export default History