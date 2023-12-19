import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../pages/auth/Auth";
import AuthSignup from "../pages/signup/AuthSignup";
import AuthSignin from "../pages/signin/AuthSignin";
import AuthPass from "../pages/pass form/AuthPass";

const RenderRoutes: FC = () => {
    

    return (
        <>
            <Routes>
                <Route path="/" element={<Auth/>} />
                <Route path='/auth/signup' element={<AuthSignup />} />
                <Route path='/auth/signin' element={ <AuthSignin/>}/>
                <Route path='/auth/passcode' element={ <AuthPass/>}/>
           
            </Routes>
        </>
    )
}

export default RenderRoutes