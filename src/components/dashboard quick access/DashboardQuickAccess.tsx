import { FC, useReducer, useEffect} from "react";
import {Container, Header, Wrapper, Span, Tab, Icon, Text} from './DashboardQuickAccess.style'
import BoltIcon from '@mui/icons-material/Bolt';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import SendIcon from '@mui/icons-material/Send';
import {useLocation, useNavigate} from 'react-router-dom'


interface InitialReducerProp {
    data: boolean;
    airtime2cash: boolean;
    airtime: boolean;
}

interface ActionProp {
    type: string;
    payload:boolean;
}
const INITIAL_REDUCERS: InitialReducerProp = {
    data: false,
    airtime2cash: false,
    airtime: false
}


const navigateReducers = (state: InitialReducerProp, action: ActionProp) => {
   const {type, payload}= action

  
    switch (type) {
        case 'DATA_ACTIVE':
            return {
                ...state,
                data:payload
            }
        case 'AIRTIME2CASH_ACTIVE':
            return {
                ...state,
                airtime2cash:payload
            }
        case 'AIRTIME_ACTIVE':
            return {
                ...state,
                airtime:payload
            }
        default:
            return state
    }
  }


const DashboardQuickAccess: FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(navigateReducers, INITIAL_REDUCERS)

    useEffect(() => {
        if (location.pathname === "/dashboard/airtime") {
            dispatch({ type: "DATA_ACTIVE", payload: false })
            dispatch({ type: "AIRTIME_ACTIVE", payload: true })
            dispatch({ type: "AIRTIME2CASH_ACTIVE", payload: false })
        }
        else if (location.pathname === "/dashboard") {
            dispatch({ type: "DATA_ACTIVE", payload: true })
            dispatch({ type: "AIRTIME_ACTIVE", payload: false })
            dispatch({ type: "AIRTIME2CASH_ACTIVE", payload: false })
        }
        else if (location.pathname === "/dashboard/airtime2cash") {
            dispatch({ type: "DATA_ACTIVE", payload: false })
            dispatch({ type: "AIRTIME_ACTIVE", payload: false })
            dispatch({ type: "AIRTIME2CASH_ACTIVE", payload: true })
        }

    }, [location])
    

    const navigateToData = () => navigate("/dashboard");
    const navigateToAirtime = () => navigate("/dashboard/airtime");
    const navigateToAirtime2Cash = () => navigate("/dashboard/airtime2cash");


 

    return (
        <>
            <Container>
                <Header>
                    <BoltIcon sx={{color:"#4ED77C"}} />
        <Span>Quick Access</Span>
                </Header>
                
                <Wrapper>
                    <Tab active={state.data ? "#0F2337" : "#1a1a1a"} onClick={navigateToData}>
                    <Icon><ChatIcon/> </Icon>
                    <Text> Data</Text>
                </Tab>

                <Tab active={state.airtime2cash ? "#0F2337" : "#1a1a1a"} onClick={navigateToAirtime2Cash}>
                    <Icon><DonutLargeIcon/> </Icon>
                    <Text> Airtime2Cash</Text>
                </Tab>

                <Tab  active={state.airtime ? "#0F2337" : "#1a1a1a"} onClick={navigateToAirtime}>
                    <Icon><SendIcon/> </Icon>
                    <Text> Airtime</Text>
                </Tab>
</Wrapper>

    </Container>
    </>
    )
}

export default DashboardQuickAccess