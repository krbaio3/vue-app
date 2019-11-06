import {Component, Vue} from 'vue-property-decorator';
import {TodoList} from '@/components/TodoList/component';
import {TodoForm} from '@/components/TodoForm/component';
import {Action, Getter, State} from 'vuex-class';
import {Todo} from '@/store/modules/todo/types';
import Template from './template.vue';

const namespace: string = 'todoModule';

@Component({
    mixins: [Template],
    components: {
        TodoList, TodoForm,
    },
})
export default class TodoApp extends Vue {
    @Action('fetchData', {namespace}) public fetchData!: () => void;
    @Getter('todos', {namespace}) public todos!: Todo[];
    @Getter('done', {namespace}) public done!: Todo[];
    @State('error', {namespace}) public errorLoadingTodos!: boolean;
    @State('errorMessage', {namespace}) public errorMessage!: string;


    private mounted() {
     this.fetchData();
    }
}
