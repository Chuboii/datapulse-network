import { FC } from "react";
import RecentTransactions from "../../components/recent transactions/RecentTransactions";
import {Container, Header, Wrap, H2, Box} from './History.style'
import MobileFooterNav from "../../components/mobile footer nav/MobileFooterNav";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import Navbar from "../../components/navbar/Navbar";


const History: FC = () => {
    
    return (
        <>
            <Container>
                <Navbar />
                <Box>
                <Header>
                    <Wrap>
                    <DonutLargeIcon/>
                        <H2>History</H2>
                </Wrap>
                </Header>  
                
                    <RecentTransactions />
                </Box>
            </Container>
            <MobileFooterNav/>
        </>
    )
}

export default History