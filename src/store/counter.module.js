import {
    INCREASE_COUNT,
    DECREASE_COUNT
} from './action.type';
import {
    ADD,
    MINUS
} from './mutations.type'

export const state = () => ({
    counter: 0
})

export const getters = {
    counter(state) {
        return state.counter;
    }
}

export const mutations = {
    [ADD](state) {
        state.counter = state.counter + 1;
    },
    [MINUS](state) {
        state.counter = state.counter - 1;
    }
}

export const actions = {
    [INCREASE_COUNT]({ commit }) {
        commit(ADD);
    },
    [DECREASE_COUNT]({ commit }) {
        commit(MINUS)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
};