import RenderRoutes from "./routes/Routes"
import {FC, useState, useEffect} from "react"
import {useLocation, useNavigate } from "react-router-dom"

type TimeInterval = ReturnType<typeof setInterval>;


const App:FC = () => {

  const location = useLocation();
  const [timer, setTimer] = useState<number>(0);
  const navigate = useNavigate();

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
    </>
  )
}

export default App
