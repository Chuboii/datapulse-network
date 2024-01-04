import { FC, useState, useEffect } from "react";
import { Container, Delete, Wrap, Text, DotWrapper, Dot, Pad, Grid } from './ConfirmTransactionPin.style';
import LockIcon from '@mui/icons-material/Lock';
import axios, {AxiosResponse} from "axios"
import PageLoader from "../page loader/PageLoader"
import {useDispatch, useSelector} from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
;
import { StateProp } from "../../utils/store/reducers/user reducer/userInterface";
import { Toggle } from "../../utils/store/reducers/toggle reducer/toggleInterface";
import { useLocation, useNavigate } from "react-router-dom";
import { TransactionStateProp } from "../../utils/store/reducers/transactionReducer/transactionInterface";

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
    const buyAirtimeNetworkId = useSelector((state: TransactionStateProp) => state.transaction.dataPlanId)
    const buyDataId = useSelector((state:TransactionStateProp)=> state.transaction.dataPlanId)
    const networkValue = useSelector((state: TransactionStateProp) => state.transaction.networkBearer)
    const phoneNumberValue = useSelector((state: TransactionStateProp) => state.transaction.phoneNumberValue)
    const amountValue = useSelector((state: TransactionStateProp) => state.transaction.airtimeValue)
    const bankInputValue = useSelector((state: TransactionStateProp) => state.transaction.airtime2CashBankValue)
    const accountNumberInputValue = useSelector((state: TransactionStateProp) => state.transaction.airtime2CashAccountNumberValue)
    const accountNameInputValue = useSelector((state: TransactionStateProp) => state.transaction.airtime2CashAccountNameValue)
    const airtime2cashAmount = useSelector((state: TransactionStateProp) => state.transaction.airtime2CashAmountValue)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const dataPlanValue = useSelector((state: TransactionStateProp) => state.transaction.dataPlanValue)
    const dataPlanData = useSelector((state: TransactionStateProp) => state.transaction.dataPlanData)
    const networkImg = useSelector((state:TransactionStateProp) => state.transaction.networkImg)
    


   useEffect(()=>{
    const verifyPin = async() => {
        if (pin.length === 4) {
                try {

                    setIsDataLoaded(true)
                    await axios.post("https://datapulse-network.onrender.com/api/auth/passcode", {
                        userId: currentUser.user._id,
                        username: currentUser.user.username,
                        pin
                    })
    
      const dataPrice =  dataPlanValue && (dataPlanValue as string)?.split("₦")?.[1]?.split(".")?.[0];

   
             if (location.pathname === "/dashboard") {
                if (dataPrice && +dataPrice <= currentUser.user.balance) {
                  
                        const networkId = networkValue === "MTN SME" || networkValue === "MTN GIFTING" || networkValue === "MTN COOPERATE GIFTING" ? "1" : networkValue === "AIRTEL" ? "2" : networkValue === "GLO COOPERATE GIFTING" || networkValue === "GLO GIFTING" ? '3' : networkValue === "9MOBILE COOPERATE GIFTING" || networkValue === "9MOBILE GIFTING" ? "4" : ''
                            
                   
                        const apiUrl = 'https://n3tdata.com/api/data';
        
                        const payload = {
                            network: networkId,
                            phone: phoneNumberValue && phoneNumberValue[0],
                            data_plan: buyDataId,
                            bypass: false,
                            'request-id': String(Date.now())
                    };
    
                        const headers = {
                            'Authorization': 'Token 75ea7594745bb22aa90022f5f7cbc0d24a61a59f242d763985e6e412b6d1',
                            'Content-Type': 'application/json',
                        };
                
            
                        const res = await axios.post(apiUrl, payload, { headers }) as AxiosResponse<Prop>;
        
                    
                        console.log('API Response:', res.data);
        
                        dispatch({ type: "IS_TRANSACTION_SUCCESSFUL", payload: true })
            
                        dispatch({type:"TRANSACTION_STATUS", payload:`You have successfully purchased ${dataPlanData} to ${phoneNumberValue}`})
                        
                        await axios.post("https://datapulse-network.onrender.com/api/add/history", {
                            userId: currentUser.user._id,
                            photoUrl:networkImg,
                            amount:dataPrice,
                            deposit: null,
                            plan:"Data",
                            history: `${dataPlanData} to ${phoneNumberValue}`,
                            declined:false
                        })
                        
                       const newBalance = await axios.put("https://datapulse-network.onrender.com/api/decre/balance", {
                            id: currentUser.user._id,
                            amount: dataPrice
                       })
                        
                        dispatch({ type: 'GET_USER_DATA', payload: newBalance.data })
                        setIsDataLoaded(false)
                        
                        setPin([])
                        setCount(0)

                        const dots = document.querySelectorAll(".dot") as
                            NodeListOf<HTMLElement>;

                        dots.forEach(dot => {
                            dot.style.backgroundColor = "#2A2F3A"
                            dot.style.width = "10px"
                            dot.style.height = "10px"
                        })
                 
                      navigate("/transaction/status")
                    }
                    else {
                        setIsDataLoaded(false)
                        setPin([])
                        setCount(0)
           
                        const dots = document.querySelectorAll(".dot") as
                            NodeListOf<HTMLElement>;
           
                        dots.forEach(dot => {
                            dot.style.backgroundColor = "#2A2F3A"
                            dot.style.width = "10px"
                            dot.style.height = "10px"
                        })
           
                        toast.error("Insufficient funds!", {
                           position: "top-right",
                           autoClose: 500,
                           hideProgressBar: false,
                           closeOnClick: true,
                           pauseOnHover: true,
                           draggable: true,
                           progress: undefined,
                           theme: "colored",
                       });
           
                       }
                    }
     else if (location.pathname === "/dashboard/airtime") {
                 if (amountValue && +amountValue <= currentUser.user.balance) {
                    
                   const apiUrl = 'https://n3tdata.com/api/topup/';

                        const payload = {
                            network: buyAirtimeNetworkId,
                            phone: phoneNumberValue && phoneNumberValue[0],
                            plan_type: 'VTU',
                            bypass: false,
                            amount: amountValue,
                            'request-id': String(Date.now())
                     };
                     
                        const headers = {
                            'Authorization': 'Token 75ea7594745bb22aa90022f5f7cbc0d24a61a59f242d763985e6e412b6d1',
                            'Content-Type': 'application/json',
                        };
                
            
                       await axios.post(apiUrl, payload, { headers }) as AxiosResponse<Prop>;
        
                        dispatch({ type: "IS_TRANSACTION_SUCCESSFUL", payload: true })
            
                        dispatch({type:"TRANSACTION_STATUS", payload:`You have successfully purchased ${amountValue} airtime to ${phoneNumberValue}`})
                        
                        await axios.post("https://datapulse-network.onrender.com/api/add/history", {
                            userId: currentUser.user._id,
                            photoUrl:networkImg,
                            amount:amountValue,
                            deposit: null,
                            plan:"Airtime",
                            history: `${amountValue} airtime to ${phoneNumberValue}`,
                            declined:false
                        })
                        
                       const newBalance = await axios.put("https://datapulse-network.onrender.com/api/decre/balance", {
                            id: currentUser.user._id,
                            amount: amountValue
                       })
                        
                        dispatch({ type: 'GET_USER_DATA', payload: newBalance.data })

                        setIsDataLoaded(false)
                        // console.log('API Response:', res.data);
                        setPin([])
                        setCount(0)

                        const dots = document.querySelectorAll(".dot") as
                            NodeListOf<HTMLElement>;

                        dots.forEach(dot => {
                            dot.style.backgroundColor = "#2A2F3A"
                            dot.style.width = "10px"
                            dot.style.height = "10px"
                        })
                        navigate("/transaction/status")

                    }
                    else {
                        setIsDataLoaded(false)
                        setPin([])
                        setCount(0)
           
                        const dots = document.querySelectorAll(".dot") as
                            NodeListOf<HTMLElement>;
           
                        dots.forEach(dot => {
                            dot.style.backgroundColor = "#2A2F3A"
                            dot.style.width = "10px"
                            dot.style.height = "10px"
                        })
           
                        toast.error("Insufficient funds!", {
                           position: "top-right",
                           autoClose: 500,
                           hideProgressBar: false,
                           closeOnClick: true,
                           pauseOnHover: true,
                           draggable: true,
                           progress: undefined,
                           theme: "colored",
                       });
           
                       }
                    }
                    else if (location.pathname === "/dashboard/airtime2cash") {
                        setIsDataLoaded(true)
                        window.open(`https://api.whatsapp.com/send/?phone=%2B2348075075032&text=%0A++++++%2AAIRTIME+2+CASH+Order%3A%2A%0A++%0A++++++%2ANetwork%3A%2A+_${networkValue}_%0A++++++%2AAmount%3A%2A+_${airtime2cashAmount}_%0A++++++%2APhone%3A%2A+_${phoneNumberValue && phoneNumberValue[0]}_%0A++%0A++++++%2ABank%3A%2A+_${bankInputValue}_%0A++++++%2AAcct+No%3A%2A+_${accountNumberInputValue}_%0A++++++%2AAcct+Name%3A%2A+_${accountNameInputValue}_&type=phone_number&app_absent=0`)
                        navigate('/dashboard/airtime2cash')
                        setIsDataLoaded(false)
                        dispatch({ type: "TOGGLE_CHECKOUT_COMP", payload: false })
                        dispatch({ type: "TOGGLE_CONFIRM_TRANSACTION_PIN_COMP", payload: false });
                        setPin([])
                        setCount(0)

                        const dots = document.querySelectorAll(".dot") as
                            NodeListOf<HTMLElement>;

                        dots.forEach(dot => {
                            dot.style.backgroundColor = "#2A2F3A"
                            dot.style.width = "10px"
                            dot.style.height = "10px"
                        })

             }
    
                }
            catch (err) {
                 
                    setIsDataLoaded(false)
                    console.log(err)
                                   
                    setPin([])
                    setCount(0)

                    const dots = document.querySelectorAll(".dot") as
                        NodeListOf<HTMLElement>;

                    dots.forEach(dot => {
                        dot.style.backgroundColor = "#2A2F3A"
                        dot.style.width = "10px"
                        dot.style.height = "10px"
                    })

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
                            else if (err?.response?.data.message === `${networkValue} is not available right now`) {
                                
                                await axios.post("https://datapulse-network.onrender.com/api/add/history", {
                                    userId: currentUser.user._id,
                                    photoUrl:"https://firebasestorage.googleapis.com/v0/b/datapulse-network.appspot.com/o/error-svgrepo-com.svg?alt=media&token=9689c936-4338-4494-b209-fe7ab996e17c",
                                    amount:amountValue,
                                    deposit: null,
                                    plan:"Data",
                                    history: `${amountValue} to ${phoneNumberValue} failed`,
                                    declined:true
                                })
                                
                                dispatch({ type: "IS_TRANSACTION_SUCCESSFUL", payload: false })
            
                                dispatch({type:"TRANSACTION_STATUS", payload:`${networkValue} is not available right now`})
                                setPin([])
                                setCount(0)
       
                                const dots = document.querySelectorAll(".dot") as
                                    NodeListOf<HTMLElement>;
        
                                dots.forEach(dot => {
                                    dot.style.backgroundColor = "#2A2F3A"
                                    dot.style.width = "10px"
                                    dot.style.height = "10px"
                                })
         
                                navigate("/transaction/status")
                                setIsDataLoaded(false)
                            }
                     
                            else if (err?.response?.data.message === `Invalid Phone Number ${phoneNumberValue}`) {
                               
                                dispatch({ type: "IS_TRANSACTION_SUCCESSFUL", payload: false })
            
                                dispatch({type:"TRANSACTION_STATUS", payload:`Invalid phone Number => ${phoneNumberValue}`})
                                setPin([])
                                setCount(0)
       
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
                                navigate("/transaction/status")
                            }
                            else if (err?.response?.data.message === `This is not a ${networkValue} Number => ${phoneNumberValue}`) {

                                await axios.post("https://datapulse-network.onrender.com/api/add/history", {
                                    userId: currentUser.user._id,
                                    photoUrl:"https://firebasestorage.googleapis.com/v0/b/datapulse-network.appspot.com/o/error-svgrepo-com.svg?alt=media&token=9689c936-4338-4494-b209-fe7ab996e17c",
                                    amount:amountValue,
                                    deposit: null,
                                    plan:"Airtime",
                                    history: `This is not a ${networkValue} Number => ${phoneNumberValue}`,
                                    declined:true
                                })

                                dispatch({ type: "IS_TRANSACTION_SUCCESSFUL", payload: false })
            
                                dispatch({ type: "TRANSACTION_STATUS", payload: `This is not a ${networkValue} Number => ${phoneNumberValue}` })
                                
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
                                
                                navigate("/transaction/status")
                            }
                                //"Minimum Airtime Purchase for this account is => ₦50.00
                            else if (err?.response?.data.message === `Minimum Airtime Purchase for this account is => ₦50.00`) {
                                await axios.post("https://datapulse-network.onrender.com/api/add/history", {
                                    userId: currentUser.user._id,
                                    photoUrl:"/src/assets/error-svgrepo-com.svg",
                                    amount:amountValue,
                                    deposit: null,
                                    plan:"Airtime",
                                    history: `${amountValue} airtime to ${phoneNumberValue} failed`,
                                    declined:true
                                })

                                dispatch({ type: "IS_TRANSACTION_SUCCESSFUL", payload: false })
            
                                dispatch({ type: "TRANSACTION_STATUS", payload: `Minimum Airtime Purchase for this account is => ₦50.00 ` })
                                
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
        
                                navigate("/transaction/status")
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
   },[pin, currentUser.user.username, currentUser.user._id, dispatch])


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
