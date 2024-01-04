
type TransactionProp = {
    wallet: null;
    dataPlanId: null;
    phoneNumberValue?: string[];
    dataPlanValue: null;
    dataPlanData: null;
    networkBearer: null;
    networkImg: null;
    isNetworkBearerClicked: boolean;
    airtimeValue: null;
    airtime2CashAmountValue: null;
    airtime2CashBankValue: null;
    airtime2CashAccountNameValue: null;
    airtime2CashAccountNumberValue: null;
    networkId: null;
    transactionStatus: null;
    isTransactionSuccessful: boolean;
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
    isNetworkBearerClicked: false,
    airtimeValue: null,
    airtime2CashAmountValue: null,
    airtime2CashBankValue: null,
    airtime2CashAccountNameValue: null,
    airtime2CashAccountNumberValue: null,
    networkId: null,
    networkImg: null,
    transactionStatus: null,
    isTransactionSuccessful: false
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
            case "GET_NETWORK_ID":
                return {
                    ...state,
                    networkId:payload
            }
            case "GET_NETWORK_IMG":
                return {
                    ...state,
                    networkImg:payload
            }
            case "IS_TRANSACTION_SUCCESSFUL":
                return {
                    ...state,
                    isTransactionSuccessful:payload
            }
            case "GET_AIRTIME_VALUE":
                return {
                    ...state,
                    airtimeValue:payload
            }
            case "GET_AIRTIME2CASH_AMOUNT_VALUE":
                return {
                    ...state,
                    airtime2CashAmountValue:payload
            }
            case "GET_AIRTIME2CASH_ACCOUNT_NAME_VALUE":
                return {
                    ...state,
                    airtime2CashAccountNameValue:payload
            }
            case "GET_AIRTIME2CASH_BANK_VALUE":
                return {
                    ...state,
                    airtime2CashBankValue:payload
            }
        case "GET_AIRTIME2CASH_ACCOUNT_NUMBER_VALUE":
                return {
                    ...state,
                    airtime2CashAccountNumberValue:payload
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
            case "TRANSACTION_STATUS":
                return {
                    ...state,
                    transactionStatus:payload
                }
        default:
            return state
    }
}