import { FC } from "react"
import {Container, Image, Success, Text, Button } from './TransactionStatus.style'
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { TransactionStateProp } from "../../utils/store/reducers/transactionReducer/transactionInterface"

const TransactionStatus:FC = () => {
    const navigate = useNavigate()
    const transactionStatus = useSelector((state:TransactionStateProp) => state.transaction.transactionStatus)
    const isTransactionSuccessful = useSelector((state:TransactionStateProp) => state.transaction.isTransactionSuccessful)
    const navigateToDashboard = () => navigate("/dashboard")


    return (
        <>
            <Container>
                {isTransactionSuccessful ?
                    <>
                <Image src={"https://firebasestorage.googleapis.com/v0/b/datapulse-network.appspot.com/o/success-svgrepo-com.svg?alt=media&token=f2dc690b-fab3-46da-9799-a23322a0382a"} />
                <Success>Success</Success>
                        <Text>{transactionStatus}</Text>
                    </>
                    : 
                    <>
                             <Image src={"https://firebasestorage.googleapis.com/v0/b/datapulse-network.appspot.com/o/error-svgrepo-com.svg?alt=media&token=9689c936-4338-4494-b209-fe7ab996e17c"} />
                <Success>Failure</Success>
                        <Text>{transactionStatus}</Text>
                    </>
                }
         <Button onClick={navigateToDashboard}>Go To Dashboard</Button>
            </Container>
         </>
  )
}

export default TransactionStatus