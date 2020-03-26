const getters = {
  role: state => state.user.role,

  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,

  sidebar: state => state.app.sidebar
}

export default getters
