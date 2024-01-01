import { FC, useReducer } from "react";
import { Container, Header, Wrapper, Tab, Text, Img } from './DataServices.style'
import Plans from '../../utils/json plans/Plans.json'
import { useDispatch } from "react-redux";


interface InitialReducerProp {
  selectedNetwork: string | null;
}

interface ActionProp {
  type: string;
  payload: string | null;
}

const INITIAL_REDUCERS: InitialReducerProp = {
  selectedNetwork: null,
}

const networkForAirtime: {
  id: number;
  network: string;
  img: string;
}[] = [
  {
    id: 1,
    network: "MTN",
    img:"/src/assets/mtn-3.svg"
  },
  {
    id:2,
    network: "AIRTEL",
    img:"/src/assets/airtel-logo.svg"
  },
  {
    id: 3,
    network: "GLO",
    img:"/src/assets/glo-logo.svg"
  },
  {
    id: 4,
    network: "9MOBILE",
    img:"/src/assets/9mobile_logo.svg"
  }
  ]


const navigateReducers = (state: InitialReducerProp, action: ActionProp) => {
  const { type, payload } = action

  switch (type) {
    case "SELECT_NETWORK":
      return {
        ...state,
        selectedNetwork: payload
      }
    default:
      return state
  }
}


  
const DataServices: FC = () => {
  const [state, dispatch] = useReducer(navigateReducers, INITIAL_REDUCERS)
  const transactionDispatch = useDispatch()
    const networkDispatch = useDispatch()

  const getBackgroundColor = (network: string) => {
    switch (network) {
      case "AIRTEL":
        return "#FD8080";
      case "9MOBILE":
      case "9MOBILE GIFTING":
      case "9MOBILE COOPERATE GIFTING":
        return "#D4E956";
      case "MTN":
      case "MTN SME":
      case "MTN COOPERATE GIFTING":
      case "MTN GIFTING":
        return "#fecf5773";
      case 'GLO':
      case "GLO GIFTING":
      case "GLO COOPERATE GIFTING":
        return "#50B651";
      default:
        return "#141414";
    }
    };

    
    const handleNetworkClicks = (net: string) => {
        transactionDispatch({
            type: "TOGGLE_DATA_PLANS", payload: true
        })
      transactionDispatch({ type: "TOGGLE_MORE_DATA_NETWORK_PLAN", payload: true })
      
        networkDispatch({ type: 'GET_NETWORK_OBJECTS', payload: Plans[net as keyof typeof Plans] })
        // console.log(Plans[net])
        transactionDispatch({
            type: "GET_NETWORK_VALUE", payload: net
        })
        transactionDispatch({
            type: "GET_DATA_PLAN_ID", payload: null
        })
        transactionDispatch({
            type: "GET_DATA_PLAN_VALUE", payload: null
        })
    
        
        dispatch({ type: "SELECT_NETWORK", payload: net })
  }

  const handleAirtimeNetworkClicks = (net:string, id:number) => {
    transactionDispatch({
      type: "GET_DATA_PLAN_ID", payload: id
    })
    transactionDispatch({
      type: "GET_NETWORK_VALUE", payload: net
  })
    dispatch({ type: "SELECT_NETWORK", payload: net })
  }


  return (
    <>
      <Container>
        <Header>Select Network</Header>
        <Wrapper>

          {
            location.pathname === "/dashboard"
              ? 
              Object.keys(Plans).map(network => (
                <Tab
                  key={Plans[network as keyof typeof Plans][0].id}
                  onClick={() => handleNetworkClicks(network)}
                  bg={state.selectedNetwork === network ? getBackgroundColor(network) : "#141414"}>
                  <Text>{network}</Text>
                  <Img src={Plans[network as keyof typeof Plans][0].image} alt={`${network} logo`} />
                </Tab>
              ))
              :
           
              networkForAirtime.map(network => (
                <Tab key={network.id}
                  onClick={() => {
                    handleAirtimeNetworkClicks(network.network, network.id)
                  }
                  }
                  bg={state.selectedNetwork === network.network ? getBackgroundColor(network.network) : "#141414"}>
              <Text>{network.network}</Text>
              <Img src={network.img} alt={`${network.network} logo`} />
              </Tab>
               ))
          }
        </Wrapper>
      </Container>
    </>
  )
}

export default DataServices;
