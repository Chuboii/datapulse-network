import {FC, useEffect, useState} from "react"
import {Container, Wrapper, Failure, Header, DateTime, Wrap, Img, Box, Button, Text,Success, Time} from "./RecentTransactions.style"
import { useSelector, useDispatch} from "react-redux"
import { HistoryStateProp } from "../../utils/store/reducers/history/historyInterface"
import axios from "axios"
import {useLocation} from "react-router-dom"
import { StateProp } from "../../utils/store/reducers/user reducer/userInterface"
import TransactionSummary from "../transaction summary/TransactionSummary"

type RecentTransacMapProp = {
  createdAt: string;
  photoUrl: string;
  deposit: string;
  amount: number;
  _id: string;
  history: string;
  declined: boolean;
  uid: string;
  plan: string;

}
const RecentTransactions: FC = () =>{
 const dispatch = useDispatch()
    const historyData = useSelector((state:HistoryStateProp) =>
    state.history.recentTransaction) as RecentTransacMapProp[]
const location = useLocation()
  const {currentUser} = useSelector((state: StateProp) => state.user)
  const [count, setCount] = useState(0)


  useEffect(() => {
        const getRecentTransacData = async () => {
            try {
              const history = await
              axios.get(`http://localhost:8080/api/get/limited/history/${currentUser.user._id}/${0}`)
                dispatch({type: "GET_RECENT_TRANSACTION", payload: history.data})
            }
            catch (e) {
                console.log(e)
             }
        }
        getRecentTransacData()
  }, [dispatch, location.pathname, currentUser.user._id])
  
  useEffect(() => {
    const loadMore = async () => {
    try{
      const history = await
                axios.get(`http://localhost:8080/api/get/limited/history/${currentUser.user._id}/${count}`)
                  dispatch({type: "GET_RECENT_TRANSACTION", payload:
                    history.data
                  })
    }
    catch(err){
      console.log(err)
    }
    }
    
    loadMore()
  }, [count, currentUser.user._id, dispatch])

  const increaseCount = async () => {
    setCount(c => c + 4)
  }


  const enableTransactionSummary = (history: RecentTransacMapProp) => {
    dispatch({type:"GET_CHILD_HISTORY_DATA", payload:history})
    dispatch({ type: "TOGGLE_TRANSACTION_SUMMARY", payload: true })
  }
  return (
    <>
      <TransactionSummary/>
    <Container>
    <Header> Recent Transactions</Header>
    {
      historyData ? historyData.map((history:RecentTransacMapProp) => {
      const date = new Date(history.createdAt)
      return (
        <Wrapper key={history._id} onClick={() => {
          enableTransactionSummary(history)
    }}>
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
              {history.declined ? <Failure>Failed</Failure>:
                <Success>Successful</Success>
              }
    </Box>
    </Wrap>
    </Wrapper>
    
      )}):"" }
    <Button onClick={increaseCount}> View more </Button>
    </Container>
    </>
    )
}

export default RecentTransactions