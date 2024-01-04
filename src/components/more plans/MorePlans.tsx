import { FC, useEffect, useReducer } from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Container, Icon, Header, Wrapper, Tab, Text, Data, Price, Wrap, Img, Span } from './MorePlans.style';
import img from '/src/assets/nigeria-naira-currency-symbol-svgrepo-com.svg';
import { useDispatch, useSelector } from "react-redux";
import { Toggle } from "../../utils/store/reducers/toggle reducer/toggleInterface";
import { NetworkStateProp } from "../../utils/store/reducers/network reducer/networkInterface";
import PreventScroll from "../../components/prevent scroll/PreventScroll"

interface InitialReducerProp {
  selectedPlan: string | null;
}

interface ActionProp {
  type: string;
  payload: string | null;
}

const INITIAL_REDUCERS: InitialReducerProp = {
  selectedPlan: null,
}

const navigateReducers = (state: InitialReducerProp, action: ActionProp) => {
  const { type, payload } = action

  switch (type) {
    case "SELECT_PLAN":
      return {
        ...state,
        selectedPlan: payload
      }
    default:
      return state
  }
}

type SelectPlanProp = {
    network: string;
    price: string;
    plan: string;
    id: number;
};

const MorePlans: FC = () => {
  const disableMorePlansDispatch = useDispatch()
  const toggleMoreDataPlans = useSelector((state: Toggle) => state.toggle.toggleMoreDataPlans)
  const getDataPlans = useSelector((state: NetworkStateProp) => state.network.networkObj)
  const [state, dispatch] = useReducer(navigateReducers, INITIAL_REDUCERS)
  const transactionDispatch = useDispatch()
  const morePlanNetwork = useSelector((state:Toggle) => state.toggle.toggleMoreDataNetworkPlan)
 
  const disableMoreDataPlans = () => disableMorePlansDispatch({ type: "TOGGLE_MORE_DATA_PLANS", payload: false })

  useEffect(() => {
    transactionDispatch({type:"TOGGLE_MORE_DATA_NETWORK_PLAN", payload:true})

  }, [transactionDispatch])

  const selectPlan = (plan: SelectPlanProp, idx: number) => {
    transactionDispatch({ type: "TOGGLE_DATA_PLANS", payload: true })
    transactionDispatch({type:"TOGGLE_MORE_DATA_NETWORK_PLAN", payload:false})
    dispatch({ type: 'SELECT_PLAN', payload: `${plan.network}${idx}` })
    transactionDispatch({ type: "GET_DATA_PLAN_ID", payload: plan.id })
    transactionDispatch({ type: "GET_DATA_PLAN_VALUE", payload: plan.price })
    transactionDispatch({ type: "GET_DATA_PLAN_DATA", payload: plan.plan })
  }

  const getBackgroundColor = (network: string, idx: number) => {
    switch (`${network}${idx}`) {
      case `AIRTEL${idx}`:
        return "#FD8080";
      case `9MOBILE${idx}`:
        return "#D4E956";
      case `MTN${idx}`:
        return "#fecf5773";
      case `GLO${idx}`:
        return "#50B651";
      default:
        return "#141414";
    }
  };

  return (
    <>
  { toggleMoreDataPlans && <PreventScroll/> }
      <Container display={toggleMoreDataPlans ? "0" : "5000px"}>
        <Header>
          <Icon onClick={disableMoreDataPlans}>
            <KeyboardArrowLeftIcon />
          </Icon>
          <Text> MTN (SME) data plans</Text>
        </Header>

        <Wrapper>
          <Wrap>
            {getDataPlans ? getDataPlans.map((plan, idx: number) => (
              <Tab key={idx} bg={
                morePlanNetwork ? "#141414" :
                state.selectedPlan === `${plan.network}${idx}` ? getBackgroundColor(plan.network, idx) : '#141414'} onClick={() => {
                selectPlan(plan, idx)
              }}>
                <Text>30 days</Text>
                <Data>{plan.plan}</Data>
                <Price><Img src={img} /> <Span>{plan.price}</Span></Price>
              </Tab>
            )) : ""}
          </Wrap>
        </Wrapper>
      </Container>
    </>
  )
}

export default MorePlans;
