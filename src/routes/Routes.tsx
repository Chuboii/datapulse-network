import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../pages/auth/Auth";
import AuthSignup from "../pages/signup/AuthSignup";
import AuthSignin from "../pages/signin/AuthSignin";
import AuthPass from "../pages/pass form/AuthPass";
import Dashboard from "../pages/dashboard/Dashboard";
import DataServices from '../components/network/DataServices.tsx'
import Services from "../pages/services/Services.tsx";
import History from "../pages/history/History.tsx";
import MoreTab from "../pages/more tab/MoreTab.tsx";
import Airtime2Cash from "../components/airtime2cash/Airtime2Cash.tsx";
import Airtime from "../components/airtime/Airtime.tsx";

const RenderRoutes: FC = () => {
    

    return (
        <>
            <Routes>
                <Route path="/" element={<Auth/>} />
                <Route path='/auth/signup' element={<AuthSignup />} />
                <Route path='/auth/signin' element={ <AuthSignin/>}/>
                <Route path='/auth/passcode' element={<AuthPass />} />
                <Route path='/services' element={<Services />} />
                <Route path='/history' element={<History/>} />
                <Route path='/more' element={<MoreTab/>} />
                
                <Route path='/dashboard' element={<Dashboard />}>  
                <Route index element={<DataServices/>}/> 
                 <Route path="airtime" element={<Airtime/>}/> 
                 <Route path="airtime2cash" element={<Airtime2Cash/>}/> 
                  
                </Route>

          
            </Routes>
        </>
    )
}

export default RenderRoutes