import { FC } from "react";
import { Container} from './Auth.style'
import AuthServiceTabs from "../../components/auth service tabs/AuthServiceTabs";
import AuthDisplay from '../../components/auth display/AuthDisplay'

const Auth: FC = () => {
    
    return (
        <>
        <Container>
                <AuthServiceTabs />
                <AuthDisplay/>
        </Container>
        </>
    )
}

export default Auth