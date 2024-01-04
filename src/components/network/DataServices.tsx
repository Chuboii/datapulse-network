import { FC, useReducer, useState } from "react";
import { Container, Header, Wrapper, Tab, Text, Img } from './DataServices.style'
import Plans from '../../utils/json plans/Plans.json'
import { useDispatch } from "react-redux";
import 'animate.css';


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
    img:"https://firebasestorage.googleapis.com/v0/b/datapulse-network.appspot.com/o/mtn-3.svg?alt=media&token=6319745b-7105-413f-80fc-adba589f18e1"
  },
  {
    id:2,
    network: "AIRTEL",
    img:"https://firebasestorage.googleapis.com/v0/b/datapulse-network.appspot.com/o/airtel-logo.svg?alt=media&token=21313382-0f20-43fb-81fe-34cf891163ba"
  },
  {
    id: 3,
    network: "GLO",
    img:"https://firebasestorage.googleapis.com/v0/b/datapulse-network.appspot.com/o/glo-logo.svg?alt=media&token=7f0d4744-b978-4483-b92b-f2d02e056c33"
  },
  {
    id: 4,
    network: "9MOBILE",
    img:"https://firebasestorage.googleapis.com/v0/b/datapulse-network.appspot.com/o/9mobile_logo.svg?alt=media&token=f5ac1dca-e8b6-4cc8-9faf-35a2c36e18ed"
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
  const [isClicked, setIsClicked] = useState(false)

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

    
  const handleNetworkClicks = (net: string, idx: number) => {
    setIsClicked(true)
        transactionDispatch({
            type: "TOGGLE_DATA_PLANS", payload: true
        })
      transactionDispatch({ type: "TOGGLE_MORE_DATA_NETWORK_PLAN", payload: true })
      
        networkDispatch({ type: 'GET_NETWORK_OBJECTS', payload: Plans[net as keyof typeof Plans] })
        // console.log(Plans[net])
        transactionDispatch({
            type: "GET_NETWORK_VALUE", payload: net
        })
    
    transactionDispatch({ type: "GET_NETWORK_ID", payload: idx })
    
        transactionDispatch({
            type: "GET_DATA_PLAN_ID", payload: null
        })
        transactionDispatch({
            type: "GET_DATA_PLAN_VALUE", payload: null
        })
    
        transactionDispatch({
          type: "GET_NETWORK_IMG", payload: Plans[net as keyof typeof Plans][0].image
      })
  
        
        dispatch({ type: "SELECT_NETWORK", payload: net })
  }

  const handleAirtimeNetworkClicks = (net:string, id:number, img:string) => {
    transactionDispatch({
      type: "GET_DATA_PLAN_ID", payload: id
    })
    transactionDispatch({
      type: "GET_NETWORK_VALUE", payload: net
  })
    dispatch({ type: "SELECT_NETWORK", payload: net })

    transactionDispatch({
      type: "GET_NETWORK_IMG", payload: img
  })
  }


  return (
    <>
      <Container>
        <Header>Select Network</Header>
        <Wrapper>

          {
            location.pathname === "/dashboard"
              ?
              Object.keys(Plans).map((network, idx) => (
                <Tab
                  className={isClicked ? 'animate__animated animate__backInUp' : 'animate__animated animate__backInUp'}
                  key={Plans[network as keyof typeof Plans][0].id}
                  onClick={() => handleNetworkClicks(network, idx)}
                  bg={state.selectedNetwork === network ? getBackgroundColor(network) : "#141414"}>
                  <Text>{network}</Text>
                  <Img src={Plans[network as keyof typeof Plans][0].image} alt={`${network} logo`} />
                </Tab>
              ))
              :
           
              networkForAirtime.map(network => (
                <Tab key={network.id}
                className='animate__animated animate__backInUp'
                  onClick={() => {
                    handleAirtimeNetworkClicks(network.network, network.id, network.img)
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
