import { FC } from "react";
import {Container, See, Icon, Text, Icons, Follow, H2, Form, Wrap, Input,Button } from './AuthSignup.style'
import { useForm } from "react-hook-form";
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import { TryRounded } from "@mui/icons-material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from "react-router-dom";


const AuthSignup: FC = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    
    const registerOptions = {
        username: {
            required: true
        },
        email: {
            required: true
        },
        password: {
            required:true
        },
        confirmPassword: {
            required:TryRounded
        }
    }

    const submitForm = (data) => {
        try {
            
        }
        catch (e) {
            
        }
    }

    return (
        <>
            <Container>
                <H2>Sign up with password</H2>
                <Form>
                    <Wrap>
                    <Icon>
                    <PersonIcon  sx={{color:"#777E90"}} />
                   </Icon>
                            <Input placeholder='username' />
                    </Wrap>
                    <Wrap>
                   <Icon>
                        <MailIcon sx={{ color: "#777E90" }} />
                 </Icon>
                            <Input placeholder='joedoe@gmail.com' />
                    </Wrap>
                    <Wrap>
                    <Icon>
                    <LockRoundedIcon  sx={{color:"#777E90"}} />
                   </Icon>
                            <Input placeholder='.......' />
                  <See>
                        <VisibilityOffRoundedIcon sx={{ color: "#777E90" }} />
                   </See>
                    </Wrap>

                    <Wrap>
                    <Icon>
                        <LockRoundedIcon sx={{ color: "#777E90" }} />
                    </Icon>
                            <Input placeholder='.......' />
                        <See>
                            <VisibilityOffRoundedIcon sx={{ color: "#777E90" }} />
                    </See>
                    </Wrap>

                    <Button>Sign up</Button>
                </Form>

                <Text>Already have an account? <Link to={'/auth/signin'}>Log in</Link></Text>
                <Follow>Follow us:</Follow>
                <Icons>
                    <FacebookOutlinedIcon sx={{marginRight:".8rem", color:"#777E90"}} />
                    <InstagramIcon sx={{marginRight:".8rem", color:"#777E90"}} />
                    <TwitterIcon sx={{color:"#777E90"}} />
                </Icons>
        </Container>
        </>
  )  
}

export default AuthSignup