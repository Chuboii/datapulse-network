import { FC, useCallback } from "react";
import { Container, Text, Follow, Trusted, H2, Wrap, Button, Img, Span, Icons } from './AuthDisplay.style'
import googleImg from '../../assets/google.svg'
import MailIcon from '@mui/icons-material/Mail';
import { Link, useNavigate } from "react-router-dom";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import axios from "axios";

const AuthDisplay: FC = () => {
    const navigate = useNavigate()

    const navigateToSignup = useCallback(() => {
        navigate("/auth/signup")
    }, [navigate])

    const testing = () => {
        try {
            const apiUrl = 'https://n3tdata.com/api';

            const payload = {
                network: 1,
                phone: 8039914037, // Replace with the actual phone number
                plan_type: 'VTU',
                bypass: false,
                amount: 100,
                'request-id': 'Airtime_12345678900'
            };
        
            // Request headers
            const headers = {
              'Authorization': 'b9d09d4523aa5d77f2d9206f3b3f9e06cfeb6a8f676106bda2a4e1aaa73d', 
              'Content-Type': 'application/json',
            };
        
    
            axios.post(apiUrl, payload, { headers, withCredentials:true })
              .then(response => {
                console.log('API Response:', response.data);
              })
              .catch(error => {
                console.error('API Error:', error.message);
              });
        }
        catch (e) {
            console.log(e)
        }
    }
    
    return (
        <>
            <Container>
            <Trusted>Trusted by 40000 users</Trusted>
            <H2>Sign up for an account</H2>
                <Wrap>
                    <Button onClick={testing}>
                        <Img src={googleImg} />
                        <Span>Sign up with Google</Span>
                    </Button>

                    <Button  onClick={navigateToSignup } >
                        <MailIcon/>
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