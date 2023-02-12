export interface UserForLogin {
    id: number;
    firstname: string;
    middlename: string;
    lastname: string;
    role: string;
}

export interface UserForLoginSchema {
    allUsers?: UserForLogin[];
    selectedUser?: UserForLogin;
    isLoading: boolean;
    error?: string;
}
