
type NetworkProp = {
    networkObj: {
        network: string;
        price: string;
        plan: string;
        id: number;
    }[];
}

type ActionProp = {
    type: string;
    payload: {
        network: string;
        price: string;
        plan: string;
        id: number;
    }; 
}
const INITIAL_STATE = {
   networkObj: []
}


export const networkReducer = (state: NetworkProp = INITIAL_STATE, action: ActionProp) => {
    const { type, payload } = action
    
    switch (type) {
        case "GET_NETWORK_OBJECTS":
            return {
                ...state,
                networkObj: payload
            }
        default:
            return state
    }
}