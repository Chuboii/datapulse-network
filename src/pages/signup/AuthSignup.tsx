import { FC, useState } from "react";
import { Container, See, Icon, Text, Icons, Follow, H2, Form, Wrap, Input, Button } from './AuthSignup.style';
import { useForm } from "react-hook-form";
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageLoader from "../../components/page loader/PageLoader";
import { useDispatch } from "react-redux";

type FormData = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const AuthSignup: FC = () => {
    const { register, handleSubmit, reset, formState: { isValid } } = useForm<FormData>();
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState<boolean>(false);
    const [isDataLoading, setIsDataLoading] = useState<boolean>(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const registerOptions = {
        username: {
            required: true
        },
        email: {
            required: true,
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
            } 
        },
        password: {
            required: true
        },
        confirmPassword: {
            required: true
        }
    };

    const submitForm = async (data: FormData) => {
        try {
            if (data.password === data.confirmPassword) {

                if (data.password.length >= 6) {
                    setIsDataLoading(true);

                    const formData: {
                        username: string;
                        email: string;
                        password: string;
                        photoUrl: string;
                    } = {
                        username: data.username,
                        email: data.email,
                        password: data.password,
                        photoUrl: "https://firebasestorage.googleapis.com/v0/b/datapulse-network.appspot.com/o/cartoon-face-transparent-1.png?alt=media&token=60a774e8-af48-49bd-89dc-39f8da3613eb"
                    }

                    const res = await axios.post("https://datapulse-network.onrender.com/api/auth/signup", formData)

                    console.log(res)

                    dispatch({type:"GET_USER_DATA", payload:res.data})

                    setIsDataLoading(false)

                    toast.success("Success! You will be redirected to create a pin", {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    reset()
                    setTimeout(() => {
                        navigate("/auth/createpasscode")
                    }, 1500)
                }
                else {
                    toast.error('Password length must be greater or equal to six', {
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
            else {
                toast.error('Passwords does not match', {
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
        catch (err) {
            setIsDataLoading(false)
            console.log(err)

            if (axios.isAxiosError(err)) {
                if (err?.response?.data?.message === "Ooops! username has already been taken") {
                    toast.error("Username is taken", {
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
                else if (err?.response?.data?.message === "Email is already taken") {
                    toast.error("Email is taken", {
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

    const enableConfirmPasswordVisibility = () =>
        setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

    return (
        <>
            {isDataLoading && <PageLoader />}
            <ToastContainer/>
            <Container>
                <H2>Sign up with password</H2>
                <Form onSubmit={handleSubmit(submitForm)}>
                    <Wrap>
                        <Icon>
                            <PersonIcon sx={{ color: "#777E90" }} />
                        </Icon>
                        <Input placeholder='username' {...register("username", registerOptions.username)} />
                    </Wrap>
                    <Wrap>
                        <Icon>
                            <MailIcon sx={{ color: "#777E90" }} />
                        </Icon>
                        <Input placeholder='joedoe@gmail.com' {...register("email", registerOptions.email)} />
                    </Wrap>
                    <Wrap>
                        <Icon>
                            <LockRoundedIcon sx={{ color: "#777E90" }} />
                        </Icon>
                        <Input placeholder='.......'
                            type={isPasswordVisible ? "text" : "password"}
                            {...register("password", registerOptions.password)}
                        />
                        <See>
                            {
                                isPasswordVisible ? <VisibilityRoundedIcon
                                    sx={{ color: "#777E90" }} onClick={enablePasswordVisibility}
                                />
                                    : <VisibilityOffRoundedIcon sx={{ color: "#777E90" }}
                                        onClick={enablePasswordVisibility} />
                            }
                        </See>
                    </Wrap>

                    <Wrap>
                        <Icon>
                            <LockRoundedIcon sx={{ color: "#777E90" }} />
                        </Icon>
                        <Input placeholder='.......' type={isConfirmPasswordVisible
                            ? "text" : "password"}
                            {...register("confirmPassword", registerOptions.confirmPassword)}
                        />
                        <See>
                            {
                                isConfirmPasswordVisible ? <VisibilityRoundedIcon
                                    sx={{ color: "#777E90" }} onClick={enableConfirmPasswordVisibility}
                                /> : <VisibilityOffRoundedIcon sx={{ color: "#777E90" }}
                                    onClick={enableConfirmPasswordVisibility} />
                            }
                        </See>
                    </Wrap>

                    <Button active={isValid ? "#0363A4" : "transparent"}>Sign up</Button>
                </Form>

                <Text>Already have an account? <Link to={'/auth/signin'}>Log in</Link></Text>
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

export default AuthSignup;
