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
    publicKey: "pk_test_c50b4674fe806e57ac9232d139a235df8dd03ed6",
    text: "Pay Now",
    onSuccess: () => {
      async function increWallet() {
        const data = await axios.put("https://datapulse-network.onrender.com/api/incre/balance", {
          id: currentUser.user._id,
          amount
        })
    
        await axios.post("https://datapulse-network.onrender.com/api/add/history", {
          userId: currentUser.user._id,
          photoUrl:"/src/assets/2aKlhqaw0tYWfRTBxyvbVLm1iax.svg",
          amount,
          deposit: 'Deposit',
          history: "",
          plan:"Deposit"
        })

       dispatch({ type: "GET_USER_DATA", payload: data.data })
        dispatch({type:"TOGGLE_PAYMENT_FORM", payload:false})
        navigate("/dashboard")
      }
      increWallet()
    },
    onError: () => {
      alert("oops")
      console.log("error")
    }
  }

  return (
    <PaystackButton {...componentProps} className='paystack-button'/>
  )
}
  
export default Paystack
