import { AuthState } from './types';

export const state: AuthState = {
    user: null,
    isLogged: false,
    error: false,
    errorMessage: '',
};
