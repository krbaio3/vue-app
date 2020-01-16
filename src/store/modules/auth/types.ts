export interface User {
    id: number;
    email: string;
    password: string;
}

export interface AuthState {
    user: User | null;
    isLogged: boolean;
    error: boolean;
    errorMessage: string | null;
}
