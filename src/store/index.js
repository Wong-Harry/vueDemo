import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    count1: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTods: state => id => state.todos.find(todo => todo.id === id)
  },
  mutations: {
    increment(state) {
      state.count += 1
    },
    incrementAsync(state, n) {
      console.log(n)
      state.count1 += n.amount
    }
  },
  actions: {
    increment({ commit }) {
      console.log({ commit })
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
    incrementAsync(context, n) {
      context.commit('incrementAsync', n)
      console.log(n)
    },
    actionPromise({ commit, state }, n) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 1000)
      })
    }
  },
  modules: {}
})

export default store
