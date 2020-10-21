export default {
  namespaced: true,
  state: {
    user: {
      name: "Anselmo Carlos"
    }
  },
  getters: {
    user_name: state => state.user.name
  }
};
