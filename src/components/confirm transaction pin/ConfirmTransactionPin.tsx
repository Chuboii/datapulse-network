import { FC, useState, useEffect } from "react";
import { Container, Delete, Wrap, Text, DotWrapper, Dot, Pad, Grid } from './ConfirmTransactionPin.style';
import LockIcon from '@mui/icons-material/Lock';
import axios, {AxiosResponse} from "axios"
import PageLoader from "../page loader/PageLoader"
import {useSelector} from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
;
import { StateProp } from "../../utils/store/reducers/user reducer/userInterface";
import { Toggle } from "../../utils/store/reducers/toggle reducer/toggleInterface";
import { useLocation } from "react-router-dom";

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

interface Prop {
    data: string;
    status: number;
    statusText: string;
    headers: string[];
    config: string;
}

const ConfirmTransactionPin: FC = () => {
    const [pin, setPin] = useState<number[]>([]);
    const [count, setCount] = useState<number>(0);
    const [isDigitPresent, setIsDigitPresent] = useState<boolean>(false);
const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false)
   const {currentUser} = useSelector((state:StateProp) => state.user)
    const toggleConfirmTransacPin = useSelector((state: Toggle)=> state.toggle.toggleConfirmationTransactionPinComp)
    const location = useLocation()


   useEffect(()=>{
    const verifyPin = async() => {
        if (pin.length === 4) {
            try {
                    setIsDataLoaded(true)
                    await axios.post("http://localhost:8080/api/auth/passcode", {
                        userId: currentUser.user._id,
                        username: currentUser.user.username,
                        pin
                    })
        
                if (location.pathname === "/dashboard") {
                    const apiUrl = 'https://n3tdata.com/api/data';
        
                    const payload = {
                        network: '1',
                        phone: "08039914037",
                        data_plan: '1',
                        bypass: false,
                        plan_type: "",
                        amount: 100,
                        'request-id': String(Date.now())
                    };
                
                    // Request headers
                    const headers = {
                        'Authorization': 'Token 75ea7594745bb22aa90022f5f7cbc0d24a61a59f242d763985e6e412b6d1',
                        'Content-Type': 'application/json',
                    };
                
            
                    const res = await axios.post(apiUrl, payload, { headers }) as AxiosResponse<Prop>;
        
                    setIsDataLoaded(false)
                    console.log('API Response:', res.data);
                }
                else if (location.pathname === "/dashboard/airtime") {
                    const apiUrl = 'https://n3tdata.com/api/topup/';
                    
                    const payload = {
                        network: '1',
                        phone: "08039914037",
                        plan_type: '1',
                        bypass: false,
                        amount: 100,
                        'request-id': String(Date.now())
                    };
                
                    // Request headers
                    const headers = {
                        'Authorization': 'Token 75ea7594745bb22aa90022f5f7cbc0d24a61a59f242d763985e6e412b6d1',
                        'Content-Type': 'application/json',
                    };
                
            
                    const res = await axios.post(apiUrl, payload, { headers }) as AxiosResponse<Prop>;
        
                    setIsDataLoaded(false)
                    console.log('API Response:', res.data);
                }
                else {
                    console.log("")
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
   },[pin, currentUser.user.username, currentUser.user._id])


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



    return (
        <>
        <ToastContainer/>
       {isDataLoaded && <PageLoader/> }
            <Container display={toggleConfirmTransacPin ? "0" : "-5000px"}>
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
                {isDigitPresent && <Delete onClick={deletePin}>Delete</Delete>}
            </Container>
        </>
    );
};

export default ConfirmTransactionPin;
