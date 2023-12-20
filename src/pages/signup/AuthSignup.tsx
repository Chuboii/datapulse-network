import { FC, useState} from "react";
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
    const { register, handleSubmit, formState: { errors, isValid}, reset } = useForm()
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false)
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
            required:true
        }
    }

    const submitForm = (data) => {
        try {
            
        }
        catch (e) {
            
        }
    }
    
const enablePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible)

const enableConfirmPasswordVisibility = () =>
setIsConfirmPasswordVisible(!isConfirmPasswordVisible)

    return (
        <>
            <Container>
                <H2>Sign up with password</H2>
                <Form>
                    <Wrap>
                    <Icon>
                    <PersonIcon  sx={{color:"#777E90"}} />
                   </Icon>
                            <Input placeholder='username' {...register("username",
                        registerOptions.username)}/>
                    </Wrap>
                    <Wrap>
                   <Icon>
                        <MailIcon sx={{ color: "#777E90" }} />
                 </Icon>
                            <Input
                            placeholder='joedoe@gmail.com'{...register("email",
                        registerOptions.email)}/>
                    </Wrap>
                    <Wrap>
                    <Icon>
                    <LockRoundedIcon  sx={{color:"#777E90"}} />
                   </Icon>
                            <Input placeholder='.......'
                      type={isPasswordVisible ? "text" : "password"}
            {...register("password",
                        registerOptions.password)}
                      />
                  <See>
                       {
                      isPasswordVisible ? <VisibilityRoundedIcon 
                      sx={{ color: "#777E90"}}   onClick={enablePasswordVisibility}
                      />
                      : <VisibilityOffRoundedIcon sx={{ color: "#777E90" }}
                        onClick={enablePasswordVisibility}/>
                       }
                   </See>
                    </Wrap>

                    <Wrap>
                    <Icon>
                        <LockRoundedIcon sx={{ color: "#777E90" }} />
                    </Icon>
                            <Input placeholder='.......' type={isConfirmPasswordVisible
                            ? "text" : "password"}
                            {...register("confirmPassword",
                        registerOptions.confirmPassword)}
                            
                            />
                        <See>
                            {
                    isConfirmPasswordVisible ? <VisibilityRoundedIcon
                      sx={{ color: "#777E90" }}  onClick={enableConfirmPasswordVisibility}
                      /> : <VisibilityOffRoundedIcon sx={{ color: "#777E90" }}
                     onClick={enableConfirmPasswordVisibility}/>
                            }
                    </See>
                    </Wrap>

                    <Button active={isValid ? "#0363A4" : "transparent"}>Sign up</Button>
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