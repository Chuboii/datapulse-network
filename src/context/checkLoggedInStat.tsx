import { FC, createContext } from "react";
// import { useSelector } from "react-redux";
// import { StateProp } from "../utils/store/reducers/user reducer/userInterface";
// import { useLocation, useNavigate } from "react-router-dom";

interface ChildrenProp {
    children?: string;
}

export const CheckLoggedInStatContext = createContext('')

export const CheckLoggedInProvider: FC<ChildrenProp> = ({ children }) => {
    // const { currentUser } = useSelector((state: StateProp) => state.user)
    // const navigate = useNavigate()
    // const location = useLocation()

    // useEffect(() => {
    //     if (!currentUser) {
    //         navigate("/")
    //     }
    //     else {
    //         if (location.pathname === "/auth/createpasscode") {
    //             navigate("/auth/createpasscode")
    //         }
    //         else if (location.pathname === "/auth/resetpasscode") {
    //             navigate('/auth/resetpasscode')   
    //         }
    //         else {
    //             navigate('/auth/passcode')
    //         }
    //     }
    // }, [])

    const value = ''

    return (
        <CheckLoggedInStatContext.Provider value={value}>
     {children}
        </CheckLoggedInStatContext.Provider>
    )
}