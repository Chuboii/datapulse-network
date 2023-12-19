import { FC } from "react";
import { Container, Text, Follow, Trusted, H2, Wrap, Button, Img, Span, Icons } from './AuthDisplay.style'
import googleImg from '../../assets/google.svg'
import MailIcon from '@mui/icons-material/Mail';
import { Link } from "react-router-dom";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const AuthDisplay: FC = () => {
    
    return (
        <>
            <Container>
            <Trusted>Trusted by 40000 users</Trusted>
            <H2>Sign up for an account</H2>
                <Wrap>
                    <Button>
                        <Img src={googleImg} />
                        <Span>Sign up with Google</Span>
                    </Button>

                    <Button>
                        <MailIcon />
                        <Span>I {"don't" } have a Gmail account</Span>
                    </Button>
        </Wrap>
    
                <Text>Already have an account? <Link to={'/auth/signin'}>Log in</Link></Text>
                <Follow>Follow us:</Follow>
                <Icons>
                    <FacebookOutlinedIcon sx={{marginRight:".8rem"}} />
                    <InstagramIcon sx={{marginRight:".8rem"}} />
                    <TwitterIcon/>
                </Icons>
            </Container>        
        </>
  )
}

export default AuthDisplay