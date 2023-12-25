import { FC, useReducer } from "react";
import mtn from '/src/assets/mtn-3.svg'
import airtel from '/src/assets/airtel-logo.svg'
import glo from '/src/assets/glo-logo.svg'
import etisalat from '/src/assets/9mobile_logo.svg'
import {Container, Header, Wrapper, Tab, Text, Img } from './DataServices.style'

interface InitialReducerProp {
    isMtn: boolean;
    isAirtel: boolean;
    isGlo: boolean;
    is9mobile: boolean;
}

interface ActionProp {
    type: string;
    payload:boolean;
}
const INITIAL_REDUCERS: InitialReducerProp = {
    isMtn: false,
    isAirtel: false,
    isGlo: false,
    is9mobile: false
}


const navigateReducers = (state: InitialReducerProp, action: ActionProp) => {
   const {type, payload}= action

  
    switch (type) {
        case 'MTN_ACTIVE':
            return {
                ...state,
                isMtn:payload
            }
        case 'AIRTEL_ACTIVE':
            return {
                ...state,
                isAirtel:payload
            }
        case 'GLO_ACTIVE':
            return {
                ...state,
                isGlo:payload
            }
        case '9MOBILE_ACTIVE':
            return {
                ...state,
                is9mobile:payload
            }
        default:
            return state
    }
  }



const DataServices: FC = () => {
    const [state, dispatch] = useReducer(navigateReducers, INITIAL_REDUCERS)


    const mtnClicked = () => {
        dispatch({ type: "MTN_ACTIVE", payload: true })
        dispatch({ type: "AIRTEL_ACTIVE", payload: false })
        dispatch({ type: "GLO_ACTIVE", payload: false })
        dispatch({type:"9MOBILE_ACTIVE", payload:false})
    }
    
    const airtelClicked = () => {
        dispatch({ type: "MTN_ACTIVE", payload: false })
        dispatch({ type: "AIRTEL_ACTIVE", payload: true })
        dispatch({ type: "GLO_ACTIVE", payload: false })
        dispatch({type:"9MOBILE_ACTIVE", payload:false})
    }
    
    const gloClicked = () => {
        dispatch({ type: "MTN_ACTIVE", payload: false })
        dispatch({ type: "AIRTEL_ACTIVE", payload: false })
        dispatch({ type: "GLO_ACTIVE", payload: true })
        dispatch({type:"9MOBILE_ACTIVE", payload:false})
    }
    
    const etisaletClicked = () => {
        dispatch({ type: "MTN_ACTIVE", payload: false })
        dispatch({ type: "AIRTEL_ACTIVE", payload: false })
        dispatch({ type: "GLO_ACTIVE", payload: false })
        dispatch({type:"9MOBILE_ACTIVE", payload:true})
    }
    
    
    return (
        <>
            <Container>
                
        <Header>Select Network</Header>

                <Wrapper>
                    <Tab onClick={mtnClicked} bg={state.isMtn ? "#fecf5773" : "#141414" }>
                        <Text>mtn sme</Text>
                        <Img src={mtn}/>
                    </Tab>

                    <Tab onClick={airtelClicked} bg={state.isAirtel ? "#FD8080" : "#141414" }>
                        <Text>airtel</Text>
                        <Img src={airtel}/>
                    </Tab>

                    <Tab onClick={gloClicked} bg={state.isGlo ? "#50B651" : "#141414" }>
                        <Text>glo</Text>
                        <Img src={glo}/>
                    </Tab>

                    <Tab onClick={etisaletClicked} bg={state.is9mobile ? "#D4E956" : "#141414" }>
                        <Text>9mobile</Text>
                        <Img src={etisalat}/>
                    </Tab>
                </Wrapper>  
                
              
      </Container>
        </>
    )
}

export default DataServices