export interface UserForLogin {
    id: number;
    firstname: string;
    middlename: string;
    lastname: string;
    role: string;
    solvedTasksAmount: number;
    correctlySolved: number;
}

export interface UserForLoginSchema {
    allUsers?: UserForLogin[];
    selectedUser?: UserForLogin;
    isLoading: boolean;
    error?: string;
}
