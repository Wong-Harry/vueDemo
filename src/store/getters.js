const getters = {
  role: state => {
    console.log(state)

    return state.user.role
  }
}

export default getters
