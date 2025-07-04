import { FC, useState, useEffect } from "react";
import { Container, Box, Logout, ProfileImg, Welcome, Wrap, Circle, ProfileName } from './AuthPass.style'
import Dialer from "../../components/dialer/Dialer";
import {useSelector, useDispatch} from "react-redux"
import {useLocation, useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import PageLoader from "../../components/page loader/PageLoader"
import { StateProp } from "../../utils/store/reducers/user reducer/userInterface";


const AuthPass: FC = () => {
 const {currentUser} = useSelector((state:StateProp)=> state.user)
 const location = useLocation()
 const [url, setUrl] = useState('')
const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
 
 useEffect(()=>{
   if(location.pathname === "/auth/createpasscode"){
     setUrl("https://datapulse-network.onrender.com/api/auth/createpasscode")
  
   }
   else if (location.pathname === "/auth/resetpasscode") {
    setUrl("https://datapulse-network.onrender.com/api/auth/resetpasscode")
   }
   else if(location.pathname === "/auth/passcode"){
     setUrl("https://datapulse-network.onrender.com/api/auth/passcode")
   }

 },[location.pathname])

const logoutBtn = async () => {
        try {
            setIsDataLoaded(true)
            await axios.post("https://datapulse-network.onrender.com/api/auth/logout", { body: null })
          dispatch({ type: "GET_USER_DATA", payload: null })
          navigate('/')
            setIsDataLoaded(false)
        }
        catch (err) {
            setIsDataLoaded(false)
            toast.error('Oops! Connection Timeout... Try again', {
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

  // logoutBtn()
    return (
        <>
        {isDataLoaded && <PageLoader />}
       
        <ToastContainer/>
             <Logout onClick={logoutBtn}>Logout</Logout>
            <Container>
            <Box>
            {location.pathname === "/auth/passcode" ?
            <>
            <ProfileImg src={currentUser ? currentUser.user.photoUrl : "" } />
                <Welcome>Welcome Back</Welcome>
                <Wrap>
                    <Circle></Circle>
                    <ProfileName>{currentUser ? currentUser.user.username : ""}</ProfileName>
                </Wrap>
              </>
              : location.pathname === "/auth/resetpasscode" ? <Welcome>Reset Pin</Welcome>
               : <Welcome>Create your Pin</Welcome>
            } 
                <Dialer url={url}/>
</Box>
            </Container>    
        </>
    )
}

export default AuthPass