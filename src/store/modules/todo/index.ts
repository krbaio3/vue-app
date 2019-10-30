import { Module } from 'vuex';
import { RootState } from '@/store/types';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { state } from './state';
import { TodoState } from './types';

const namespaced: boolean = true;

export const todoModule: Module<TodoState, RootState> = {
    namespaced,
    actions,
    getters,
    mutations,
    state,
};
