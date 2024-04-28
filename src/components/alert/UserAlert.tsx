import { useState } from "react"
import { Container, Title, Text } from "./UserAlert.style"
import ClearIcon from '@mui/icons-material/Clear';

function UserAlert() {
    const [disable, setDisable] = useState(false)

    const disbaleUserAlert = () => setDisable(true)


  return (
    <Container display={disable ? "none" : "flex"}>
         <ClearIcon onClick={disbaleUserAlert} style={{position:"absolute", right:"1.5rem", fontSize:"30px"}}/> 
          <Title>Attention!</Title>
          <Text>30 naira will be deducted from your account each time you fund due to network charges</Text>
    </Container>
  )
}

export default UserAlert