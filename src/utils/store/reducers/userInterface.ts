export interface User {
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


