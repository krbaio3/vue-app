import Vue from 'vue';
import { ActionTree, ActionContext } from 'vuex';
import { AuthState, User } from './types';
import { RootState } from '../../types';
import { AxiosResponse } from 'axios';

type AuthActionContext = ActionContext<AuthState, RootState>;
type AuthActionTree = ActionTree<AuthState, RootState>;

export const actions: AuthActionTree = {
    async login (context: AuthActionContext, payload: User): Promise<any> {
        Vue.$log.debug('start blockUI');
        try {
            const response: AxiosResponse = await Vue.axios({
                method: 'POST',
                url: '/login',
                data: payload,
            });
            context.commit('setUser', payload);
        } catch (e) {
            context.commit('authError', e.message);
        } finally {
            Vue.$log.debug('remove blockUI');
        }
    },
};
