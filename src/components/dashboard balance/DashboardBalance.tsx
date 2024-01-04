import { FC } from "react";
import { Container, Text, Img, Digits } from './DashboardBalance.style'
import naira from '/src/assets/nigeria-naira-currency-symbol-svgrepo-com.svg'
import { useSelector } from "react-redux";
import { StateProp } from "../../utils/store/reducers/user reducer/userInterface";
// import axios from "axios";


const DashboardBalance: FC = () => {
    const { currentUser } = useSelector((state: StateProp) => state.user);
    // const dispatch = useDispatch()
    // https://datapulse-network.onrender.com
    // useEffect(() => {
    //     const getBalance = async () => {
    //         try {
    //             const balance = await axios.get('https://datapulse-network.onrender.com/api/auth/user', {
    //                 params: {
    //                     id: currentUser.user._id
    //                 }
    //             });
    //              dispatch({ type: "GET_USER_DATA", payload: balance.data })
    //             console.log(balance.data)
    //         }
    //         catch (err) {
    //             console.log(err)
    //         }
    //     }

    //     getBalance()
    // }, [dispatch, currentUser.user._id])
    
    return (
        <>
            <Container>
                <Text>Account balance</Text>
                <Digits><Img src={naira} />{currentUser ? currentUser.user.balance : 0 }</Digits>
            </Container>
        </>
    )
}

export default DashboardBalance;
