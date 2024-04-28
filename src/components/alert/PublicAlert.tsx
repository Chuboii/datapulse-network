import { FC } from "react"
import { Container, H2, Text } from './Alert.style'

const PublicAlert: FC = () => {

  
    return (
        <>
            <Container display={"flex"}>
                <H2>Public Alert!</H2>
                <Text>The site is temporarily down. We are currently working on it to fix it.</Text>
            </Container>
        </>
    )
}

export default PublicAlert