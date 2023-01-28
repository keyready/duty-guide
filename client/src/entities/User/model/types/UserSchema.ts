export interface User {
    id: number;
    login: string;
    role: string;
}

export interface UserSchema {
    authData?: User
}
