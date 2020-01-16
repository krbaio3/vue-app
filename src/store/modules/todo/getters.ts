import { GetterTree } from 'vuex';
import { TodoState, Todo } from './types';
import { RootState } from '@/store/types';


type TodoGetter = GetterTree<TodoState, RootState>;

export const getters: TodoGetter = {
    done (state: TodoState): Todo[] {
        const { todos } = state;
        return todos.filter((todo) => todo.done);
    },
    todos (state: TodoState): Todo[] {
        const { todos } = state;
        return todos.filter((todo) => !todo.done);
    },
};
