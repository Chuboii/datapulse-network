import { FC, useEffect, useReducer } from "react";
import { Footer, Span, Wrap } from "./MobileFooterNav.style";
import HomeIcon from "@mui/icons-material/Home";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useLocation, useNavigate } from "react-router-dom";

interface InitialReducerProp {
    isHome: boolean;
    isServices: boolean;
    isHistory: boolean;
    isMore: boolean;
}

interface ActionProp {
    type: string;
    payload:boolean;
}
const INITIAL_REDUCERS: InitialReducerProp = {
    isHome: false,
    isServices: false,
    isHistory: false,
    isMore: false
}


const navigateReducers = (state: InitialReducerProp, action: ActionProp) => {
   const {type, payload}= action

  
    switch (type) {
        case 'HOME_ACTIVE':
            return {
                ...state,
                isHome:payload
            }
        case 'SERVICES_ACTIVE':
            return {
                ...state,
                isServices:payload
            }
        case 'HISTORY_ACTIVE':
            return {
                ...state,
                isHistory:payload
            }
        case 'MORE_ACTIVE':
            return {
                ...state,
                isMore:payload
            }
        default:
            return state
    }
  }


const MobileFooterNav: FC = () => {
  const location = useLocation();
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(navigateReducers, INITIAL_REDUCERS)

  useEffect(() => {
      if (location.pathname === "/services") {
          dispatch({ type: "SERVICES_ACTIVE", payload: true }) 
          dispatch({ type: "HOME_ACTIVE", payload: false }) 
          dispatch({ type: "HISTORY_ACTIVE", payload: false }) 
          dispatch({ type: "MORE_ACTIVE", payload: false }) 
          
      }
      else if (location.pathname === "/dashboard") {
        dispatch({ type: "SERVICES_ACTIVE", payload: false }) 
        dispatch({ type: "HOME_ACTIVE", payload: true }) 
        dispatch({ type: "HISTORY_ACTIVE", payload: false }) 
        dispatch({ type: "MORE_ACTIVE", payload: false }) 
        
      }
      else if (location.pathname === "/history") {
    dispatch({ type: "SERVICES_ACTIVE", payload: false }) 
    dispatch({ type: "HOME_ACTIVE", payload: false }) 
    dispatch({ type: "HISTORY_ACTIVE", payload: true }) 
    dispatch({ type: "MORE_ACTIVE", payload: false }) 
    
      }
      else if (location.pathname === "/more") {
    dispatch({ type: "SERVICES_ACTIVE", payload: false }) 
    dispatch({ type: "HOME_ACTIVE", payload: false }) 
    dispatch({ type: "HISTORY_ACTIVE", payload: false }) 
    dispatch({ type: "MORE_ACTIVE", payload: true }) 
    
      }
      
  }, [location]);

  const navigateToServices = () => navigate("/services");
  const navigateToHistory = () => navigate("/history");
  const navigateToHome = () => navigate("/dashboard");
  const navigateToMore = () => navigate("/more");

  return (
    <>
      <Footer>
              <Wrap active={state.isHome ? "white" : "#2D2D2D"} onClick={navigateToHome }>
          <HomeIcon />
          <Span>Home</Span>
        </Wrap>

        <Wrap active={state.isServices ? "white" : "#2D2D2D"} onClick={navigateToServices}>
          <RocketLaunchIcon />
          <Span>Services</Span>
        </Wrap>

        <Wrap active={state.isHistory ? "white" : "#2D2D2D"}  onClick={navigateToHistory}>
          <AccessTimeIcon />
          <Span>History</Span>
        </Wrap>

        <Wrap active={state.isMore ? "white" : "#2D2D2D"} onClick={navigateToMore}>
          <DashboardIcon />
          <Span>More</Span>
        </Wrap>
      </Footer>
    </>
  );
};

export default MobileFooterNav;
