

interface ToggleMoreDataPlans {
    toggleMoreDataPlans: boolean;
    togglePaymentForm: boolean;
    toggleCheckoutComp: boolean;    
    toggleConfirmationTransactionPinComp: boolean;
    toggleDataPlans: boolean;
    toggleMoreDataNetworkPlan: boolean;
    toggleAirtime2CashBank: boolean;
}

interface StateProp {
    toggleMoreDataPlans: boolean;
    togglePaymentForm: boolean;
    toggleCheckoutComp: boolean;
    toggleConfirmationTransactionPinComp: boolean;
    toggleDataPlans: boolean;
    toggleMoreDataNetworkPlan: boolean;
    toggleAirtime2CashBank: boolean;
}

interface ActionProp {
    type: string;
    payload: boolean | null
}
const INITIAL_STATE : ToggleMoreDataPlans = {
    toggleMoreDataPlans: false,
    togglePaymentForm: false,
    toggleCheckoutComp: false,
    toggleConfirmationTransactionPinComp: false,
    toggleDataPlans: false,
    toggleMoreDataNetworkPlan: false,
    toggleAirtime2CashBank: false
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
            case 'TOGGLE_CONFIRM_TRANSACTION_PIN_COMP':
                return {
                    ...state,
                    toggleConfirmationTransactionPinComp: payload
            }
            case 'TOGGLE_DATA_PLANS':
                return {
                    ...state,
                    toggleDataPlans: payload
            }
        case 'TOGGLE_MORE_DATA_NETWORK_PLAN':
            return {
                ...state,
                toggleMoreDataNetworkPlan:payload
            }
         case 'TOGGLE_AIRTIME2CASH_BANK':
                return {
                    ...state,
                    toggleAirtime2CashBank:payload
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
