import { namespace } from '@/utils/namespace';

export const todoTypes = namespace('todo', {
    actions: [
        'fetchData',
        'addTodo',
        'updateTodoStatus',
        'deleteTodo',
    ],
    getters: [
        'done',
        'todos',
    ],
    mutations: [
        'todosLoad',
        'updateTodoStatus',
        'todosError',
    ],
});
