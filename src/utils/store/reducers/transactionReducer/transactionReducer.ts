
type TransactionProp = {
    wallet: null;
    dataPlanId: null;
    phoneNumberValue?: string[];
    dataPlanValue: null;
    dataPlanData: null;
    networkBearer: null;
    isNetworkBearerClicked: boolean;
}

type ActionProp = {
    type: string;
    payload: string | null | number | string[]
}
const INITIAL_STATE = {
    wallet: null,
    dataPlanId: null,
    phoneNumberValue: [],
    dataPlanValue: null,
    dataPlanData: null,
    networkBearer: null,
    isNetworkBearerClicked:false,
}


export const transactionReducer = (state: TransactionProp = INITIAL_STATE, action: ActionProp) => {
    const { type, payload } = action
    
    switch (type) {
        case "GET_WALLET_BALANCE":
            return {
                ...state,
                wallet: payload
            }
         case "GET_DATA_PLAN_ID":
                return {
                    ...state,
                    dataPlanId:payload
            }
            case "GET_DATA_PLAN_VALUE":
                return {
                    ...state,
                    dataPlanValue:payload
            }
            case "GET_DATA_PLAN_DATA":
                return {
                    ...state,
                    dataPlanData:payload
            }
            case "GET_NETWORK_VALUE":
                return {
                    ...state,
                    networkBearer:payload
            }
            case "IS_NETWORK_BEARER_CLICKED":
                return {
                    ...state,
                    isNetworkBearerClicked:payload
            }
         case "GET_PHONE_NUMBER_VALUE":
            return {
                ...state,
                phoneNumberValue:payload
            }
        default:
            return state
    }
}