import { FC, useEffect, useReducer } from "react";
import { Container, Header, Wrapper, Tab, Text, Data, Price, Wrap, Button,Img, Span} from './DataPlan.style'
import img from '../../assets/nigeria-naira-currency-symbol-svgrepo-com.svg'
import PurchaseForm from "../purchase form/PurchaseForm"
import MorePlans from "../more plans/MorePlans"
import { useDispatch, useSelector } from "react-redux";
import { NetworkStateProp } from "../../utils/store/reducers/network reducer/networkInterface";
import Plans from '../../utils/json plans/Plans.json'
import { TransactionStateProp } from "../../utils/store/reducers/transactionReducer/transactionInterface";


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
  

type PlansProp = {
        plan: string;
        id: number;
    price: string;
    network: string;
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
  
  
const DataPlans: FC = () => {
    const enablelMorePlansDispatch = useDispatch()
    const getDataPlans = useSelector((state: NetworkStateProp) => state.network.networkObj)
    const isNetworkBearerClicked = useSelector((state:TransactionStateProp) => state.transaction.isNetworkBearerClicked)
    const [state, dispatch] = useReducer(navigateReducers, INITIAL_REDUCERS)
    const networkDispatch = useDispatch()
    const dataPlansDispatch = useDispatch()

    useEffect(() => {
        networkDispatch({ type: 'GET_NETWORK_OBJECTS', payload: Plans["MTN SME"] })
    }, [networkDispatch])
    
    
    useEffect(() => {
        if (isNetworkBearerClicked) {
            dispatch({ type: 'SELECT_PLAN', payload:'bob' })
            }
    
    }, [dispatch, isNetworkBearerClicked])

    
    const enableMorePlans = () => enablelMorePlansDispatch({ type: 'TOGGLE_MORE_DATA_PLANS', payload: true })

    const selectPlan = (plan:PlansProp, idx:number) => {
        dispatch({ type: 'SELECT_PLAN', payload: `${plan.network}${idx}` })

        dataPlansDispatch({ type: "GET_DATA_PLAN_ID", payload: plan.id })
        dataPlansDispatch({ type: "GET_DATA_PLAN_VALUE", payload: plan.price })
        dataPlansDispatch({type:"GET_DATA_PLAN_DATA", payload:plan.plan})
    }

    const getBackgroundColor = (network: string, idx:number) => {
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
         <MorePlans/>
            <Container>
        <Header>Choose Plan</Header>

                <Wrapper>
                    <Wrap>
                        {
                          getDataPlans ? getDataPlans.map((plan, idx) => {

                                if (idx < 2) {
                                    return (
                                        <Tab key={idx} bg={state.selectedPlan === `${plan.network}${idx}` ? getBackgroundColor(plan.network, idx) : "#141414"} onClick={() => {
                                            selectPlan(plan, idx)
                                        }
                                        }>
                                            <Text>30 days</Text>
                                            <Data>{plan.plan}</Data>
                                            <Price><Img src={img} /> <Span>{plan.price}</Span></Price>
                     
                                        </Tab>
                                    )
                                }
                            }) : ""}
                    </Wrap>
               <Button onClick={enableMorePlans}> See All </Button>
                </Wrapper>          
              <PurchaseForm/>
      </Container>
        </>
    )
}

export default DataPlans