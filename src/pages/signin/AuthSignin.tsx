import { FC, useState } from "react";
import { Container, See, Icon, Text, Icons, Follow, GButton, H2, Form, Wrap, Input, Button, Img, Span } from './AuthSignin.style';
import { useForm } from "react-hook-form";
import MailIcon from '@mui/icons-material/Mail';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link, useNavigate } from "react-router-dom";
import googleImg from '../../assets/google.svg';
import axios from "axios";
import PageLoader from "../../components/page loader/PageLoader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";

type FormValues = {
    username: string;
    password: string;
};

const AuthSignin: FC = () => {
    const { register, handleSubmit, formState: { isValid } } = useForm<FormValues>({ mode: 'onChange' });
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const registerOptions = {
        username: {
            required: true
        },
        password: {
            required: true
        }
    };

    const submitForm = async (data: FormValues) => {
        try {
            setIsDataLoaded(true)
            const formData: {
                username: string;
                password: string;
            } = {
                username: data.username,
                password: data.password
            }

            const userData = await axios.post("http://localhost:8080/api/auth/login", formData)
            
            dispatch({type:"GET_USER_DATA", payload: userData.data})
            setIsDataLoaded(false)

            toast.success("Success! You're all set", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

            setTimeout(() => {
                navigate('/auth/passcode')
            }, 3000)
     
        }
        catch (err) {
            setIsDataLoaded(false)
            console.log(err);
            if (axios.isAxiosError(err)) {
                if (err?.response?.data?.message.message === "Password or username is incorrect") {
                    toast.error("Password or username is incorrect", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
            }
        }
    };

    const enablePasswordVisibility = () =>
        setIsPasswordVisible(!isPasswordVisible);

    return (
        <>
            {isDataLoaded && <PageLoader />}
            <ToastContainer />
            
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
                        <Input className="input" placeholder='username' {...register("username", registerOptions.username)} />
                    </Wrap>
                    <Wrap>
                        <Icon>
                            <LockRoundedIcon sx={{ color: "#777E90" }} />
                        </Icon>
                        <Input placeholder='.......' type={isPasswordVisible ?
                            "text" : "password"} {...register("password",
                                registerOptions.password)} />
                        <See>

                            {
                                isPasswordVisible ?
                                    <VisibilityRoundedIcon onClick={enablePasswordVisibility}
                                        sx={{ color: "#777E90" }} /> : <VisibilityOffRoundedIcon
                                            onClick={enablePasswordVisibility} sx={{ color: "#777E90" }}
                                        />
                            }
                        </See>
                    </Wrap>

                    <Button active={isValid ? "#0363A4" : "transparent"}>Sign in</Button>
                </Form>

                <Text>Already have an account? <Link to={'/'}>Sign up</Link></Text>
                <Follow>Follow us:</Follow>
                <Icons>
                    <FacebookOutlinedIcon sx={{ marginRight: ".8rem", color: "#777E90" }} />
                    <InstagramIcon sx={{ marginRight: ".8rem", color: "#777E90" }} />
                    <TwitterIcon sx={{ color: "#777E90" }} />
                </Icons>
            </Container>
        </>
    );
};

export default AuthSignin;
