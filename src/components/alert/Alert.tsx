import { FC } from "react"
import { Container, H2, Text, Button } from './Alert.style'
import { useDispatch, useSelector } from "react-redux";
import { Toggle } from "../../utils/store/reducers/toggle reducer/toggleInterface";

const Alert: FC = () => {
    const dispatch = useDispatch()
    const toggleAlertComp = useSelector((state:Toggle) => state.toggle.toggleAlert)

    const toggleConfirmTransacPin = () => {
        dispatch({ type: "TOGGLE_CONFIRM_TRANSACTION_PIN_COMP", payload: true });
        dispatch({type:"TOGGLE_ALERT_COMP", payload:false})
    }
  
    return (
        <>
            <Container display={toggleAlertComp ? "flex" :"none"}>
                <H2>Notice!</H2>
                <Text>You'll be redirected to our marketing Handle on whatsapp where you'll be directed on how to proceed in real time. NOTE: This Handle is not customer support</Text>
   <Button onClick={toggleConfirmTransacPin}>Okay</Button>
            </Container>
        </>
    )
}

export default Alert