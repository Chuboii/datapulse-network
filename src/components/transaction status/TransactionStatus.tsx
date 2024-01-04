import { FC } from "react"
import {Container, Image, Success, Text, Button } from './TransactionStatus.style'
import successImg from '../../assets/success-svgrepo-com.svg'
import failureImg from '../../assets/error-svgrepo-com.svg'
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
                <Image src={successImg} />
                <Success>Success</Success>
                        <Text>{transactionStatus}</Text>
                    </>
                    : 
                    <>
                             <Image src={failureImg} />
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