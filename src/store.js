import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        voteCount: 0,
        voteAbleTime: ''
    },
    getters: {
        isVoteAble: state => {
            if (state.voteAbleTime) {
                state.voteAbleTime = new Date();
                console.log(123);
            }
            state.voteCount;
        }
    },
    mutations: {},
    actions: {}
})
