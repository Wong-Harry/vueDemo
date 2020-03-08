import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    count1: 0
  },
  mutations: {
    increment(state) {
      state.count += 1;
    }
  },
  actions: {},
  modules: {}
});

export default store;
