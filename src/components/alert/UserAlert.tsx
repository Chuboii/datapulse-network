import { useState } from "react"
import { Container, Title, Text } from "./UserAlert.style"


function UserAlert() {
    const [disable, setDisable] = useState(false)

    const disbaleUserAlert = () => setDisable(true)


  return (
    <Container display={disable ? "none" : "flex"}>
          <Title>Attention!</Title>
          <Text>30 naira will be deducted from your account each time you fund due to network charges</Text>
    </Container>
  )
}

export default UserAlert