export default {
  namespaced: true,
  state: {
    social_networks: []
  },
  mutations: {
    set_social_networks: (state, value) => {
      state.social_networks = value;
    }
  },
  actions: {
    get_social_networks: async ({ commit }) => {
      const dadosResponse = await fetch("social-networks.json");
      const dataJSON = await dadosResponse.json();

      commit("set_social_networks", dataJSON);
    }
  },
  getters: {
    social_networks: state => state.social_networks
  }
};
