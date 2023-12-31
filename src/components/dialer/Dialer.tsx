import { FC, useState, useEffect } from "react";
import { Container, Delete, Wrap, Text, DotWrapper, Dot, Pad, Grid, Span } from './Dialer.style';
import LockIcon from '@mui/icons-material/Lock';
import axios from "axios"
import PageLoader from "../page loader/PageLoader"
import {useSelector} from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
;
import {useLocation, useNavigate} from "react-router-dom"
import { StateProp } from "../../utils/store/reducers/user reducer/userInterface";

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

type UrlProp = {
    url: string;
}

const Dialer: FC<UrlProp> = ({url}) => {
    const [pin, setPin] = useState<number[]>([]);
    const [count, setCount] = useState<number>(0);
    const [isDigitPresent, setIsDigitPresent] = useState<boolean>(false);
const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false)
   const {currentUser} = useSelector((state:StateProp) => state.user)
    const navigate = useNavigate()
    const location = useLocation()
   
   useEffect(()=>{
    const verifyPin = async() => {
        if (pin.length === 4) {
            try {
                if (location.pathname === '/auth/signup' || location.pathname === '/auth/createpasscode') {
                    setIsDataLoaded(true)
         
                    await axios.post(url, {
                        userId: currentUser.user._id,
                        username: currentUser.user.username,
                        pin

                    })
                    setIsDataLoaded(false)
                    navigate("/auth/signin")
                }
                else if (location.pathname === '/auth/signin' || location.pathname === '/auth/passcode') {
                    setIsDataLoaded(true)
         
                    await axios.post(url, {
                        userId: currentUser.user._id,
                        username: currentUser.user.username,
                        pin
                    })
                    setIsDataLoaded(false)
                    navigate("/dashboard")   
                }
                else if (location.pathname === '/auth/resetpasscode') {
                    setIsDataLoaded(true)
                   
                    await axios.put(url, {
                        userId: currentUser.user._id,
                        pin
                   })
                    
                    toast.success("Success!, Your pin have been changed.", {
                        position: "top-right",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    setIsDataLoaded(false)
                    setTimeout(() => {
                        navigate("/auth/passcode")
                    },1500)
                }
         
         }
         catch (err) {
             console.log(err)
             if (axios.isAxiosError(err)) {
                 if (err?.response?.data.message === "Pin incorrect") {
                     toast.error("Pin incorrect!", {
                         position: "top-right",
                         autoClose: 500,
                         hideProgressBar: false,
                         closeOnClick: true,
                         pauseOnHover: true,
                         draggable: true,
                         progress: undefined,
                         theme: "colored",
                     });
                
                     setPin([])
                     setCount(0)
        
                     const dots = document.querySelectorAll(".dot") as
                         NodeListOf<HTMLElement>;
         
                     dots.forEach(dot => {
                         dot.style.backgroundColor = "#2A2F3A"
                         dot.style.width = "10px"
                         dot.style.height = "10px"
                     })
          
                     setIsDataLoaded(false)
                 }
                 else {
                     toast.error("Oops! Connection Timeout! Try again!", {
                         position: "top-right",
                         autoClose: 500,
                         hideProgressBar: false,
                         closeOnClick: true,
                         pauseOnHover: true,
                         draggable: true,
                         progress: undefined,
                         theme: "colored",
                     });
                
                     setPin([])
                     setCount(0)
        
                     const dots = document.querySelectorAll(".dot") as
                         NodeListOf<HTMLElement>;
         
                     dots.forEach(dot => {
                         dot.style.backgroundColor = "#2A2F3A"
                         dot.style.width = "10px"
                         dot.style.height = "10px"
                     })
          
                     setIsDataLoaded(false)
                 }
             }
         }
     }
    }
    verifyPin()
   },[pin])


    const insertPin = (el: number) => {
        setIsDigitPresent(true);
        setPin(prev => {
            if (prev.length < 4) {
                return [...prev, el];
            } else {
                return prev;
            }
        });

        setCount(c => {
            if (c < 3) {
                return c + 1;
            } else {
                return c;
            }
        });

        if (count < 4) {
            console.log("effect", count);
            const dots = document.querySelectorAll(".dot") as NodeListOf<HTMLElement>;
            dots[count].style.backgroundColor = '#359758';
            dots[count].style.width = '18px';
            dots[count].style.height = '18px';
        }
    };

    const deletePin = () => {
        const removedPin = pin.slice(0, pin.length - 1);
        setPin(removedPin);

        setCount(c => {
            if (c > 0) {
                return c - 1;
            } else {
                return c;
            }
        });

        if (count >= 0) {
            const dots = document.querySelectorAll(".dot") as NodeListOf<HTMLElement>;
            dots[count].style.backgroundColor = '#2A2F3A';
            dots[count].style.width = '10px';
            dots[count].style.height = '10px';
        }

        if (count === 0) {
            setIsDigitPresent(false);
        }
    };

    const forgotPin = async () => {
        try {
            console.log(currentUser.user.username)
            console.log(currentUser.user.email);
            
            setIsDataLoaded(true)
            await axios.post("http://localhost:8080/api/forgotpin", {
                name: currentUser.user.username,
                email: currentUser.user.email
            })
            setIsDataLoaded(false)
            toast.info("An email have been sent to you, follow the intructions to reset your pin", {
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
        catch (err) {
            setIsDataLoaded(false)

            toast.error("Oops! Connection Timeout! Try again!", {
                position: "top-right",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            console.error(err);
        }
    }

    return (
        <>
        <ToastContainer/>
       {isDataLoaded && <PageLoader/> }
            <Container>
                <Wrap>
                    <LockIcon sx={{ fontSize: '18px', color: "#359758" }} />
                    <Text>Enter PIN</Text>
                </Wrap>

                <DotWrapper>
                    <Dot className="dot"></Dot>
                    <Dot className="dot"></Dot>
                    <Dot className="dot"></Dot>
                    <Dot className="dot"></Dot>
                </DotWrapper>

                <Pad>
                    {nums.map((el, id) => (
                        <Grid
                            onClick={() => {
                                insertPin(el);
                            }}
                            className='grid'
                            key={id}
                        >
                            {el}
                        </Grid>
                    ))}
                </Pad>
                {location.pathname === '/auth/passcode' ?
                    <Span onClick={forgotPin}>Forgot PIN?</Span>
               :"" }
                {isDigitPresent && <Delete onClick={deletePin}>Delete</Delete>}
            </Container>
        </>
    );
};

export default Dialer;
