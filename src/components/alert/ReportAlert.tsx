import { FC } from "react"
import { Container, Text, Button } from './ReportAlert.style'
import { useDispatch } from "react-redux";

const ReportAlert: FC = () => {
    const dispatch = useDispatch()
    // const toggleAlertComp = useSelector((state:Toggle) => state.toggle.toggleAlert)

    const toggleReportAlert = () => {
        dispatch({type:"TOGGLE_ALERT_COMP", payload:false})
    }
  
    return (
        <>
            <Container display={"flex"}>
                <Text>To report a suspected transaction, please click on the customer support icon by the bottom right and submit your report</Text>
   <Button onClick={toggleReportAlert}>Okay</Button>
            </Container>
        </>
    )
}

export default ReportAlert