import axios from 'axios';
import { FC } from 'react';
import {PaystackButton} from 'react-paystack';
import { useDispatch, useSelector } from 'react-redux';
import { StateProp } from '../store/reducers/user reducer/userInterface';
import { useNavigate } from 'react-router-dom';

type ComponentProp = {
  email: string;
  amount: number;
  name: string;
  phone: number;
}

type PaystackProps = {
  email: string;
  amount: number;
    name: string;
    phone: number;
  publicKey: string;
  text: string;
  onSuccess: () => void;
  onError: () => void;
  onClose: () => void;
}
const Paystack: FC<ComponentProp> = ({email, amount, name, phone}) => {
  const dispatch = useDispatch()
  const {currentUser} = useSelector((state:StateProp) => state.user)
  const navigate = useNavigate()
   
  
  const componentProps: PaystackProps = {
    email,
    amount: amount * 100,
      name,
      phone,
    publicKey:'pk_live_dfe2e7ff6743f9f8bc24ff270b7cc667af80164d',
    text: "Pay Now",
    onSuccess: () => {
      async function increWallet() {
        dispatch({ type: "TOGGLE_PAGE_LOADER", payload: true })
        
        const data = await axios.put("https://datapulse-network.onrender.com/api/incre/balance", {
          id: currentUser.user._id,
          amount: amount - 30
        })
    
        await axios.post("https://datapulse-network.onrender.com/api/add/history", {
          userId: currentUser.user._id,
          photoUrl:"https://firebasestorage.googleapis.com/v0/b/datapulse-network.appspot.com/o/%E2%80%94Pngtree%E2%80%94money%20savings%20glyph%20icon%20vector_5058355%20(1).png?alt=media&token=d1a708cc-7cb0-4c2d-b2d6-faf22b49cf27",
          amount,
          deposit: 'Deposit',
          history: "",
          plan:"Deposit"
        })

        dispatch({type:"TOGGLE_PAGE_LOADER", payload:false})
       dispatch({ type: "GET_USER_DATA", payload: data.data })
        dispatch({type:"TOGGLE_PAYMENT_FORM", payload:false})
        navigate("/dashboard")
      }
      increWallet()
    },
    onError: () => {
      dispatch({type:"TOGGLE_PAGE_LOADER", payload:false})
    },
    onClose: () => {
      dispatch({type:"TOGGLE_PAGE_LOADER", payload:false});
    }
  }

  return (
    <PaystackButton {...componentProps} className='paystack-button'/>
  )
}
  
export default Paystack
