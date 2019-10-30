export interface Todo {
    id: number;
    text: string;
    done: boolean;
}

export interface TodoState {
    todos: Todo[];
    errorObj: Error;
}

export interface Error {
    error: boolean;
    errorMessage: string;
}
