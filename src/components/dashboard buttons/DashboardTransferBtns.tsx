import { FC } from "react";
import { Container, Button, Span, Icon } from './DashboardTransferBtn.style'
import SendIcon from '@mui/icons-material/Send';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PaymentForm from "../fund wallet form/FundWalletForm";
import { useDispatch } from "react-redux";

const DashboardTransferBtns: FC = () => {
    const dispatch = useDispatch()
 
    const enablePaymentForm = () => dispatch({type:"TOGGLE_PAYMENT_FORM", payload:true})
    
    return (
        <>
            <PaymentForm/>
            <Container>
                <Button><Icon><SendIcon /></Icon> <Span>Send</Span></Button>
                
   
                <Button onClick={enablePaymentForm}><AddBoxIcon/><Span>Add money</Span></Button>
            </Container>
        
        </>
    )
}

export default DashboardTransferBtns