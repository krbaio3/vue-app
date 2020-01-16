import Template from './template.vue';
import { User } from '../../store/modules/auth/types';
import { Vue, Component } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import Router from 'vue-router';


const namespace: string = 'authModule';

Component.registerHooks([
    'beforeRouteEnter',
]);

@Component({
    name: 'Login',
    mixins: [Template],
})
export default class Login extends Vue {
    public user: Partial<User> = {};
    @Action('login', { namespace }) public login!: (user: Partial<User>) => Promise<any>;
    @State('isLogged', { namespace }) private isLogged!: boolean;
    @State('error', { namespace }) private error!: boolean;
    @State('errorMessage', { namespace }) private errorMessage!: boolean;

    public signIn (): void {
        this.login(this.user).then(() => {
            if (!this.error) {
                this.$router.push('/secret');
            }
        });
    }

    private beforeRouteEnter (to: Router, from: Router, next: any) {
        next((vm: Login) => {
            if(vm.isLogged) {
                next('/secret');
            }
        });
    }

}
