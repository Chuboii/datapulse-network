import {
    FC, useEffect, useState
} from "react";
import {Container, See, Icon, Text, Icons, Follow,GButton, H2, Form, Wrap, Input,Button, Img, Span} from './AuthSignin.style'
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
import googleImg from '../../assets/google.svg'

const AuthSignin: FC = () => {
    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm({mode:'onChange'})
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const registerOptions = {
        email: {
            required: true
        },
        password: {
            required:true
        }
    }


    const submitForm = (data) => {
        console.log(data)
    }

    const enablePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible)


    return (
        <>
            <Container>
                <H2>Sign in to your account</H2>
                <Form onSubmit={handleSubmit(submitForm)}>

                    <GButton type='button'>
                   <Img src={googleImg} />
                        <Span>Continue with Google</Span>
                    </GButton>
                    <Wrap>
                   <Icon>
                        <MailIcon sx={{ color: "#777E90" }} />
                 </Icon>
                        <Input className="input" placeholder='joedoe@gmail.com' {...register("email", registerOptions.email)} />
                    </Wrap>
                    <Wrap>
                    <Icon>
                    <LockRoundedIcon  sx={{color:"#777E90"}} />
                   </Icon>
                        <Input placeholder='.......' type={isPasswordVisible ?
                        "text" : "password"} {...register("password",
                        registerOptions.password)}/>
                  <See>
                            
                            {
                          isPasswordVisible ?
                  <VisibilityRoundedIcon onClick={enablePasswordVisibility }
                  sx={{ color: "#777E90" }}/> : <VisibilityOffRoundedIcon
                  onClick={enablePasswordVisibility } sx={{ color: "#777E90" }}
                  />
                            }
                   </See>
                    </Wrap>


                    <Button active={isValid ? "#0363A4" : "transparent"}>Sign up</Button>
                </Form>

                <Text>Already have an account? <Link to={'/'}>Sign up</Link></Text>
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

export default AuthSignin