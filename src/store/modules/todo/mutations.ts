import { MutationTree } from 'vuex';
import { TodoState, Todo } from './types';

type TodoMutationsTree = MutationTree<TodoState>;

export const mutations: TodoMutationsTree = {
    todosLoad(state: TodoState, payload: Todo[]): void {
        state.todos = payload;
    },
    updateTodoStatus(state: TodoState, payload: Todo): void {
        const todo = state.todos.find((t) => t.id = payload.id);
        if (todo) {
            todo.done = !todo.done;
        }
    },
    todosError(state: TodoState, payload: string): void {
        state.errorObj = {
            errorMessage: payload,
            error: true,
        };
    },
};
