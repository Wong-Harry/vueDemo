const user = {
  state: {
    sidebar: {
      isOpen: true
    }
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      state.sidebar.isOpen = !state.sidebar.isOpen
    }
  },
  actions: {
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    }
  }
}

export default user
