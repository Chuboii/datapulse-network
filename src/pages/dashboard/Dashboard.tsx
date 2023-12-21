import {FC} from "react"
import DashboardHeader from "../../components/dashboard header/DashboardHeader"
import {Container, Wrapper,Box } from './Dashboard.style'
import Navbar from "../../components/navbar/Navbar"
import MobileFooterNav from "../../components/mobile footer nav/MobileFooterNav"
import DashboardBalance from "../../components/dashboard balance/DashboardBalance"
import DashboardTransferBtns from "../../components/dashboard buttons/DashboardTransferBtns"
import DashboardQuickAccess from "../../components/dashboard quick access/DashboardQuickAccess"
import { Outlet } from "react-router-dom"
import DataPlans from "../../components/services/data/plans/DataPlans"
import RecentTransactions from "../../components/recent transactions/RecentTransactions"


const Dashboard: FC = () =>{
  
  
  
  return(
    <>
      <Container>
        <Box>
        <Navbar />
        <Wrapper>
          <DashboardHeader />
          <DashboardBalance />
          <DashboardTransferBtns />
          <DashboardQuickAccess/>
          <Outlet/>
        <MobileFooterNav/>
        </Wrapper>
        </Box>
        <DataPlans/>
      <RecentTransactions/>
  </Container>
    </>
    )
}

export default Dashboard