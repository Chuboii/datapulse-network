

interface CurrentUser {
    currentUser: string | null
}

interface StateProp {
    currentUser: string | null
}

interface ActionProp {
    type: string;
    payload: string | null
}
const INITIAL_STATE : CurrentUser = {
    currentUser:null
}


const userReducer = (state: StateProp = INITIAL_STATE, action: ActionProp) => {
    const { type, payload } = action
    
    switch (type) {
        case "GET_USER_DATA":
            return {
                ...state,
                currentUser:payload
            }
        default:
        return state
    }
}

export default userReducer
