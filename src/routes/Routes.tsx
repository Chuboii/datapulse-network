import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../pages/auth/Auth";
import AuthSignup from "../pages/signup/AuthSignup";
import AuthSignin from "../pages/signin/AuthSignin";
import AuthPass from "../pages/pass form/AuthPass";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardQuickAccess from "../components/dashboard quick access/DashboardQuickAccess";
import DataServices from '../components/services/data/network/DataServices.tsx'

const RenderRoutes: FC = () => {
    

    return (
        <>
            <Routes>
                <Route path="/" element={<Auth/>} />
                <Route path='/auth/signup' element={<AuthSignup />} />
                <Route path='/auth/signin' element={ <AuthSignin/>}/>
                <Route path='/auth/passcode' element={ <AuthPass/>}/>
                <Route path='/dashboard' element={<Dashboard />}>
                <Route index element={<DataServices/>}/> 
                 <Route path="airtime" element={<DashboardQuickAccess/>}/> 
                 <Route path="airtime2cash" element={<DashboardQuickAccess/>}/> 
                  
                </Route>
                <Route path='/services' element={<Dashboard />} />
                <Route path='/history' element={ <Dashboard/>}/>
                <Route path='/more' element={ <Dashboard/>}/>

          
            </Routes>
        </>
    )
}

export default RenderRoutes