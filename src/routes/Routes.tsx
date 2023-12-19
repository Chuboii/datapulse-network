import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../pages/auth/Auth";
import AuthSignup from "../pages/signup/AuthSignup.style";

const RenderRoutes: FC = () => {
    

    return (
        <>
            <Routes>
                <Route path="/" element={<Auth/>} />
                <Route path='/auth/signup' element={ <AuthSignup/>}/>
            </Routes>
        </>
    )
}

export default RenderRoutes