import { combineReducers } from "redux"
import userReducer from "../reducers/user reducer/userReducers"
import toggleReducer from "../reducers/toggle reducer/toggleReducer"
import { transactionReducer } from "../reducers/transactionReducer/transactionReducer"
import { networkReducer } from "../reducers/network reducer/networkReducer"

export const rootReducer = combineReducers({
   user: userReducer,
   toggle: toggleReducer,
   transaction: transactionReducer,
   network: networkReducer
})