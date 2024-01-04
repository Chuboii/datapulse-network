
type HistoryProp = {
    history:object[];
    recentTransaction: object[]
    childHistory: object[]
}

type ActionProp = {
    type: string;
    payload: object[]
}
const INITIAL_STATE = {
   history: [],
    recentTransaction: [],
   childHistory: []
}


export const historyReducer = (state: HistoryProp = INITIAL_STATE, action: ActionProp) => {
    const { type, payload } = action
    
    switch (type) {
        case "GET_HISTORY_DATA":
            return {
                ...state,
                history: payload
            }
            case "GET_CHILD_HISTORY_DATA":
                return {
                    ...state,
                    childHistory: payload
                }
            case "GET_RECENT_TRANSACTION":
            return {
                ...state,
                recentTransaction: payload
            }
        default:
            return state
    }
}