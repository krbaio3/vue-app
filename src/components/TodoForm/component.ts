import { Component, Vue, Ref } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import Template from './template.vue';
import { ValidationObserver } from 'vee-validate';

@Component({
    name: 'ToDoForm',
    mixins: [Template],
})
export class TodoForm extends Vue {
    public todo!: string;
    @Ref() public readonly observer!: InstanceType<typeof ValidationObserver>;

    @Action('addTodo', { namespace: 'todoModule' }) private addTodo!: (todo: string) => Promise<any>;
    constructor () {
        super();
        this.todo = '';
    }

    public async validate () {
        const isValid = await this.observer.validate();
        // some heavy work/network request.
        if (isValid) {
            // 🐿 ship it
            Vue.$log.debug('insertar en BBDD');
            this.submitTodo(this.todo);
        }
    }

    public submitTodo (todo: string): void {
        this.addTodo(todo).then(() => { this.todo = ''; });
    }

}
