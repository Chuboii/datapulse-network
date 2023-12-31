

interface ToggleMoreDataPlans {
    toggleMoreDataPlans: boolean;
    togglePaymentForm: boolean;
    toggleCheckoutComp: boolean;    
}

interface StateProp {
    toggleMoreDataPlans: boolean;
    togglePaymentForm: boolean;
    toggleCheckoutComp: boolean;
}

interface ActionProp {
    type: string;
    payload: boolean | null
}
const INITIAL_STATE : ToggleMoreDataPlans = {
    toggleMoreDataPlans: false,
    togglePaymentForm: false,
    toggleCheckoutComp:false
}


const toggleReducer = (state: StateProp = INITIAL_STATE, action: ActionProp) => {
    const { type, payload } = action
    
    switch (type) {
        case "TOGGLE_MORE_DATA_PLANS":
            return {
                ...state,
                toggleMoreDataPlans:payload
            }
        case 'TOGGLE_PAYMENT_FORM':
            return {
                ...state,
                togglePaymentForm: payload
            }
         case 'TOGGLE_CHECKOUT_COMP':
                return {
                    ...state,
                    toggleCheckoutComp: payload
                }
        default:
        return state
    }
}

export default toggleReducer
