

interface ToggleMoreDataPlans {
    toggleMoreDataPlans: boolean;
    togglePaymentForm: boolean;
    toggleCheckoutComp: boolean;    
    toggleConfirmationTransactionPinComp: boolean;
}

interface StateProp {
    toggleMoreDataPlans: boolean;
    togglePaymentForm: boolean;
    toggleCheckoutComp: boolean;
    toggleConfirmationTransactionPinComp: boolean;
}

interface ActionProp {
    type: string;
    payload: boolean | null
}
const INITIAL_STATE : ToggleMoreDataPlans = {
    toggleMoreDataPlans: false,
    togglePaymentForm: false,
    toggleCheckoutComp: false,
    toggleConfirmationTransactionPinComp: false
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
