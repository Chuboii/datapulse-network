import {FC, useEffect} from "react"
import {Container, Wrapper, Header, DateTime, Wrap, Img, Box, Button, Text,Success, Time} from "./RecentTransactions.style"
import img from "/src/assets/devildoesnotbargain.jpeg"
import { useSelector, useDispatch} from "react-redux"
import { HistoryStateProp } from "../../utils/store/reducers/history/historyInterface"
import axios from "axios"
import {useLocation} from "react-router-dom"


const RecentTransactions: FC = ({history}) =>{
 const dispatch = useDispatch()
    const historyData = useSelector((state:HistoryStateProp) =>
    state.history.recentTransaction)
const location = useLocation()
  const {currentUser} = useSelector((state) => state.user)
  
  useEffect(() => {
        const getRecentTransacData = async () => {
            try {
              const history = await
              axios.get(`http://localhost:8080/api/get/limited/history/${currentUser.user._id}`)
                console.log(history.data)
                dispatch({type: "GET_RECENT_TRANSACTION", payload: history.data})
            }
            catch (e) {
                console.log(e)
             }
        }
        getRecentTransacData()
    }, [dispatch, location.pathname])

const loadMore = async () =>{
  try{
    const history = await
              axios.get(`http://localhost:8080/api/get/limited/history/${currentUser.user._id}`)
                console.log(history.data)
                dispatch({type: "GET_RECENT_TRANSACTION", payload:
                history.data})
  }
  catch(err){
    console.log(err)
  }
}

  return (
    <>
    <Container>
    <Header> Recent Transactions</Header>
    {
      historyData ? historyData.map((history) => {
      const date = new Date(history.createdAt)
      return (
    <Wrapper>
    <DateTime>{ date.toDateString()}</DateTime>
    <Wrap>
    <Img src={history.photoUrl}/>
    <Box> 
    <Text>{history.deposit ? history.deposit : history.history }</Text>
    <Time>{date.toLocaleTimeString()}</Time>
    </Box>
    <Box>
    <Text>
    {history.amount}.00
    </Text>
    <Success>Successful </Success>
    </Box>
    </Wrap>
    </Wrapper>
    
      )}):"" }
    <Button onClick={loadMore}> View more </Button>
    </Container>
    </>
    )
}

export default RecentTransactions