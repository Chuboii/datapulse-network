import RenderRoutes from "./routes/Routes"
import {FC, useState, useEffect} from "react"
import {useLocation, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import { StateProp } from "./utils/store/reducers/user reducer/userInterface";
// import PublicAlert from "./components/alert/PublicAlert";
type TimeInterval = ReturnType<typeof setInterval>;


const App:FC = () => {

  const location = useLocation();
  const [timer, setTimer] = useState<number>(0);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: StateProp) => state.user)



  useEffect(() => {
      if (!currentUser) {
          navigate("/")
      }
      else {
          if (location.pathname === "/auth/createpasscode") {
              navigate("/auth/createpasscode")
          }
          else if (location.pathname === "/auth/resetpasscode") {
              navigate('/auth/resetpasscode')   
          }
          else {
              // navigate('/auth/passcode')
          }
      }
  }, [])


  useEffect(() => {
    const interval: TimeInterval = setInterval(() => {
      setTimer((c) => c + 1);
    }, 1000);

    if (timer > 180) {
      navigate('/auth/passcode');
    }

    function isUserActive() {
      setTimer(0);
    }

    document.body.addEventListener('mousemove', isUserActive);

    return () => {
      clearInterval(interval);
      document.body.removeEventListener('mousemove', isUserActive);
    };
  }, [timer, navigate, location]);
  

  
  
  return (
    <>
      <RenderRoutes/>
      {/* <PublicAlert/> */}
    </>
  )
}

export default App
