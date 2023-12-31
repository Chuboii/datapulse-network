export interface User {
    _id: string;
    balance: number,
    photoUrl: string;
    username: string;
    email: string;
}

export interface CurrentUser {
    user: User
}


export interface StateProp {
    user: {
        currentUser: CurrentUser;
    }
}


