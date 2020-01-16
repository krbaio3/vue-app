import { Component, Prop, Vue } from 'vue-property-decorator';
import { Todo } from '@/store/modules/todo/types';
import { Action } from 'vuex-class';
import Template from './template.vue';

const namespace: string = 'todoModule';

@Component({
    name: 'ToDoList',
    mixins: [Template],
})
export class TodoList extends Vue {
    @Prop({
        type: Array,
        required: true,
    }) public todos!: Todo[];
    @Action('updateTodoStatus', {namespace}) public updateTodoStatus!: () => void;
    @Action('deleteTodo', {namespace}) public deleteTodo!: () => void;

    /**
     * fields
     */
    public fields: Array<{key: string, label: string, sortable?: boolean}> = [
        {key: 'text', label: 'Todo', sortable: true},
        {key: 'done', label: 'Estado'},
        {key: 'actions', label: 'Actions'},
    ];

}
