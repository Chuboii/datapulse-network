export interface History {
    history:{
        history: {
            createdAt: string;
            photoUrl: string;
            deposit: string;
            amount: number;
            _id: string;
            history: string;
            declined: boolean;
            uid: string;
    },
        recentTransaction: object[],
        childHistory: {
            createdAt: string;
            photoUrl: string;
            deposit: string;
            amount: number;
            _id: string;
            history: string;
            declined: boolean;
            uid: string;
        }
}
}


export interface HistoryStateProp {
    history:{
    history: object[],
        recentTransaction: object[],
        childHistory: {
            createdAt: string;
            photoUrl: string;
            deposit: string;
            amount: number;
            _id: string;
            history: string;
            declined: boolean;
            uid: string;
            plan: string;
        }
}
}


