import { AxiosStatic } from 'axios';

declare module 'vue/types/vue' {
    interface VueConstructor {
        axios: AxiosStatic;
    }
}
