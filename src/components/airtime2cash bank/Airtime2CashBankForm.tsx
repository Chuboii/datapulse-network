import { FC, useEffect, useState } from "react";
import { Wrapper, Icon, Wrap, Header,Box, Input, Button } from './Airtime2CashBankForm.style'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from "react-redux";
import { TransactionStateProp } from "../../utils/store/reducers/transactionReducer/transactionInterface";
import Checkout from "../checkout/Checkout";

type InputProps = {
    target: {
        value:string
    }
}
const Airtime2CashBankForm: FC = () => {
    const dispatch = useDispatch()
    const [isFormValid, setIsFormValid] = useState(false)
    const bankInputValue = useSelector((state: TransactionStateProp) => state.transaction.airtime2CashBankValue)
    const accountNumberInputValue = useSelector((state: TransactionStateProp) => state.transaction.airtime2CashAccountNumberValue)
    const accountNameInputValue = useSelector((state: TransactionStateProp) => state.transaction.airtime2CashAccountNameValue)

    useEffect(() => {
        dispatch({ type: "GET_AIRTIME2CASH_BANK_VALUE", payload: null })
   dispatch({ type: "GET_AIRTIME2CASH_ACCOUNT_NUMBER_VALUE", payload: null})
   dispatch({ type: "GET_AIRTIME2CASH_ACCOUNT_NAME_VALUE", payload:null })
       }, [dispatch])


    const bankInput = (e: InputProps) => dispatch({ type: "GET_AIRTIME2CASH_BANK_VALUE", payload: e.target.value })
    const accountNumberInput = (e: InputProps) => dispatch({ type: "GET_AIRTIME2CASH_ACCOUNT_NUMBER_VALUE", payload: e.target.value })
    const accountNameInput = (e: InputProps) => dispatch({ type: "GET_AIRTIME2CASH_ACCOUNT_NAME_VALUE", payload: e.target.value })

    useEffect(() => {
        setIsFormValid(false)
        if (bankInputValue && accountNameInputValue && accountNumberInputValue) {
         setIsFormValid(true)   
        }
        else {
            setIsFormValid(false)
        }
    }, [isFormValid, bankInputValue, accountNumberInputValue, accountNameInputValue])
    
    const returnBackToForm = () => dispatch({ type: "TOGGLE_AIRTIME2CASH_BANK", payload: false })
    
    const enableCheckoutForm = () => {
        if (bankInputValue && accountNameInputValue && accountNumberInputValue) {
            console.log('clicked')
            dispatch({ type: "TOGGLE_CHECKOUT_COMP", payload: true })
        }
    }
   
    return (
        <>
            <Checkout/>
            <Wrapper>
                <Wrap>
                    <Header>Bank</Header>
                    <Input onChange={bankInput} type="text" placeholder="E.g. Kuda"/>
                </Wrap>

                <Wrap>
                    <Header>Account Name</Header>
                    <Input onChange={accountNumberInput} type="text" placeholder="E.g. Chidera"/>
                </Wrap>

                <Wrap>
                    <Header>Account Number</Header>
                    <Input onChange={accountNameInput} type="number" placeholder="20123 456 789"/>
                </Wrap>

                <Box>
                    <Icon onClick={returnBackToForm}>
                        <ArrowBackIcon />
                    </Icon>
                    <Button bg={isFormValid ? "#0363A4" : "transparent"} type="submit" onClick={enableCheckoutForm}>Continue</Button>
                </Box>
        </Wrapper>
        </>
    )
}

export default Airtime2CashBankForm