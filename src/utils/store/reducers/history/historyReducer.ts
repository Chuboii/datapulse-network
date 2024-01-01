
type HistoryProp = {
    history:object[]
}

type ActionProp = {
    type: string;
    payload: object[]
}
const INITIAL_STATE = {
   history: []
}


export const historyReducer = (state: HistoryProp = INITIAL_STATE, action: ActionProp) => {
    const { type, payload } = action
    
    switch (type) {
        case "GET_HISTORY_DATA":
            return {
                ...state,
                history: payload
            }
        default:
            return state
    }
}