import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../pages/auth/Auth";
import AuthSignup from "../pages/signup/AuthSignup";
import AuthSignin from "../pages/signin/AuthSignin";
import AuthPass from "../pages/pass form/AuthPass";
import Dashboard from "../pages/dashboard/Dashboard";

const RenderRoutes: FC = () => {
    

    return (
        <>
            <Routes>
                <Route path="/" element={<Auth/>} />
                <Route path='/auth/signup' element={<AuthSignup />} />
                <Route path='/auth/signin' element={ <AuthSignin/>}/>
                <Route path='/auth/passcode' element={ <AuthPass/>}/>
           <Route path='/dashboard' element={ <Dashboard/>}/>

          
            </Routes>
        </>
    )
}

export default RenderRoutes