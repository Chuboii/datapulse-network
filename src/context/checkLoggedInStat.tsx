import { FC, createContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { StateProp } from "../utils/store/reducers/userInterface";
import { useNavigate } from "react-router-dom";

interface ChildrenProp {
    children?: string;
}

export const CheckLoggedInStatContext = createContext('')

export const CheckLoggedInProvider: FC<ChildrenProp> = ({ children }) => {
    const { currentUser } = useSelector((state: StateProp) => state.user)
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!currentUser) {
            navigate("/")
        }
    }, [currentUser])

    const value = ''

    return (
        <CheckLoggedInStatContext.Provider value={value}>
     {children}
        </CheckLoggedInStatContext.Provider>
    )
}