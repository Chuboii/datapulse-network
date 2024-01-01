import { FC, useEffect } from "react";
import { Container, Header,WrapBox, Wrapper, BoxWrap, Success, DateTime, Time, Img, Text, Wrap, H2, Box } from './History.style'
import MobileFooterNav from "../../components/mobile footer nav/MobileFooterNav";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { StateProp } from "../../utils/store/reducers/user reducer/userInterface";
import { HistoryStateProp } from "../../utils/store/reducers/history/historyInterface";

type HistoryMapProp = {
  photoUrl: string;
  _id:number;
  deposit: string;
  history:string;
  amount:number;
}
const History: FC = () => {
    const {currentUser} = useSelector((state: StateProp) => state.user) 
    const dispatch = useDispatch()
    const historyData = useSelector((state:HistoryStateProp) => state.history.history)
    
    useEffect(() => {
        const getHistoryData = async () => {
            try {
              const history = await axios.get(`http://localhost:8080/api/get/all/history/${currentUser.user._id}`)
                
                dispatch({
                    type: "GET_HISTORY_DATA", payload: history.data
                })
            }
            catch (e) {
                console.log(e)
             }
        }
        getHistoryData()
    }, [dispatch])
    
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
                    {historyData ? historyData.map((history:HistoryMapProp) => {
                        const date = new Date(history.createdAt)

                        return(
                        <Wrapper key={history._id}>
                            <DateTime> {date.toDateString()} </DateTime>
                            <WrapBox>
                                <Wrap>
                                    <Img src={history.photoUrl} />
                                    <BoxWrap>
                                            <Text>{history.deposit ? history.deposit : history.history }</Text>
                                            <Time>{date.toLocaleTimeString()}</Time>
                                    </BoxWrap>
                                </Wrap>
                                <Box>
                                    <Text>
                                        {history.amount}.00
                                    </Text>
                                    <Success>Successful </Success>
                                </Box>
                            </WrapBox>
                        </Wrapper>
                    )}):"nothing to see here..."}
                </Box>
            </Container>
            <MobileFooterNav/>
        </>
    )
}

export default History