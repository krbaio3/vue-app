import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { User } from '@/store/modules/auth/types';
import Template from './template.vue';
import AuthMixin from '@/mixins/AuthMixin';
import { Route } from 'vue-router';

const namespace: string = 'authModule';

Component.registerHooks([
    'beforeRouteEnter',
]);

@Component({
    name: 'Secret',
    mixins: [Template, AuthMixin],
})
export default class Secret extends Vue {
    @State('user', { namespace }) public user!: User;
    @State('isLogged', { namespace }) private isLogged!: boolean;

    public async beforeRouteEnter (to: Route, from: Route, next: any) {
        // ...
        next((vm: Secret) => {
            if (!vm.isLogged) {
                Vue.$log.warn('No permitido');
                next('/login');
            }
        });
    }

    public get fullUser (): string {
        return `${this.user.email}`;
    }
}
