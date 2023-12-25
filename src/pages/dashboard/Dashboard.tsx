import {FC} from "react"
import DashboardHeader from "../../components/dashboard header/DashboardHeader"
import {Container, Wrapper } from './Dashboard.style'
import Navbar from "../../components/navbar/Navbar"
import MobileFooterNav from "../../components/mobile footer nav/MobileFooterNav"
import DashboardBalance from "../../components/dashboard balance/DashboardBalance"
import DashboardTransferBtns from "../../components/dashboard buttons/DashboardTransferBtns"
import DashboardQuickAccess from "../../components/dashboard quick access/DashboardQuickAccess"
import { Outlet, useLocation } from "react-router-dom"
import DataPlans from "../../components/plans/DataPlans"
import RecentTransactions from "../../components/recent transactions/RecentTransactions"


const Dashboard: FC = () =>{
  const location = useLocation()
  
  
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