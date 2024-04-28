import {FC, useEffect, useRef, useState} from "react"
import DashboardHeader from "../../components/dashboard header/DashboardHeader"
import {Container, Wrapper } from './Dashboard.style'
import Navbar from "../../components/navbar/Navbar"
import MobileFooterNav from "../../components/mobile footer nav/MobileFooterNav"
import DashboardBalance from "../../components/dashboard balance/DashboardBalance"
import DashboardTransferBtns from "../../components/dashboard buttons/DashboardTransferBtns"
import DashboardQuickAccess from "../../components/dashboard quick access/DashboardQuickAccess"
import { Outlet } from "react-router-dom"
import DataPlans from "../../components/plans/DataPlans"
import RecentTransactions from "../../components/recent transactions/RecentTransactions"
import { useDispatch } from "react-redux"
import UserAlert from "../../components/alert/UserAlert"

const Dashboard: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch()
  const [loadOnce, setLoadOnce] = useState(false)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    dispatch({ type: "TOGGLE_TRANSACTION_SUMMARY", payload: false })
    dispatch({ type: "TOGGLE_CONFIRM_TRANSACTION_PIN_COMP", payload: false });
   dispatch({ type: "TOGGLE_CHECKOUT_COMP", payload: false });
  }, [dispatch])
  
  useEffect(() => {
    setLoadOnce(true)
  }, [])
  return(
    <>
      {loadOnce && <UserAlert />}
      <Container ref={containerRef}>
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