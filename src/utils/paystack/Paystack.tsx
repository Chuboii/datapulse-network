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
        const data = await axios.put("http://localhost:8080/api/incre/balance", {
          id: currentUser.user._id,
          amount
        })
        dispatch({ type: "GET_USER_DATA", payload: data.data })
        dispatch({type:"TOGGLE_PAYMENT_FORM", payload:false})
        navigate("/dashboard")
      }
      increWallet()
    }
  }

  return (
    <PaystackButton {...componentProps} className='paystack-button'/>
  )
}
  
export default Paystack
