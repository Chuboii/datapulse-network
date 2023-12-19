import { FC } from "react";
import { Container, Logout, ProfileImg, Welcome, Wrap, Circle, ProfileName } from './AuthPass.style'
import Dialer from "../../components/dialer/Dialer";
import img from '../../assets/devildoesnotbargain.jpeg'



const AuthPass: FC = () => {

    return (
        <>
             <Logout>Logout</Logout>
            <Container>
           
                <ProfileImg src={img } />
                <Welcome>Welcome Back</Welcome>
                <Wrap>
                    <Circle></Circle>
                    <ProfileName>Joe Doe</ProfileName>
                </Wrap>
                <Dialer/>

            </Container>    
        </>
    )
}

export default AuthPass