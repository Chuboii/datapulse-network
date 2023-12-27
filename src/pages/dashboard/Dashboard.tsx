import {FC, useState, useEffect} from "react"
import DashboardHeader from "../../components/dashboard header/DashboardHeader"
import {Container, Wrapper } from './Dashboard.style'
import Navbar from "../../components/navbar/Navbar"
import MobileFooterNav from "../../components/mobile footer nav/MobileFooterNav"
import DashboardBalance from "../../components/dashboard balance/DashboardBalance"
import DashboardTransferBtns from "../../components/dashboard buttons/DashboardTransferBtns"
import DashboardQuickAccess from "../../components/dashboard quick access/DashboardQuickAccess"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import DataPlans from "../../components/plans/DataPlans"
import RecentTransactions from "../../components/recent transactions/RecentTransactions"


const Dashboard: FC = () =>{
  const location = useLocation()
  const [timer, setTimer] = useState(0)
  const navigate = useNavigate()
  
  
  useEffect(()=>{
    let interval;
    
   interval = setInterval(() =>{
      setTimer(c => c + 1)
    },1000)
    
    if(timer > 120){
      navigate("/auth/passcode")
    }
    
    function isUserActive(){
        setTimer(0)
    }
    
    document.body.addEventListener("mousemove", isUserActive)
    
    
    return ()=>{
      clearInterval(interval)
      document.body.removeEventListener("mouseover", isUserActive)
    }
  }, [timer])
  
  console.log(timer)
  
  return(
    <>
      <Container>
        <Navbar />
        <Wrapper>
          <DashboardHeader />
          <DashboardBalance />
          <DashboardTransferBtns />
          <DashboardQuickAccess/>
          <Outlet/>
        <MobileFooterNav/>
      
    
        {location.pathname === '/dashboard' &&<DataPlans />}
          <RecentTransactions />
          </Wrapper>
  </Container>
    </>
    )
}

export default Dashboard