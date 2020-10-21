export default {
  namespaced: true,
  state: {
    schedules: [],
    schedules_status: []
  },
  mutations: {
    set_schedules: (state, value) => {
      state.schedules = value;
    },
    set_schedules_status: (state, value) => {
      state.schedules_status = value;
    },
    add_schedules: (state, value) => {
      state.schedules = [value, ...state.schedules];
    }
  },
  actions: {
    get_schedules: async ({ commit }) => {
      const dadosResponse = await fetch("schedules.json");
      const dataJSON = await dadosResponse.json();

      commit("set_schedules", dataJSON);
    },
    get_schedules_status: async ({ commit }) => {
      const dadosResponse = await fetch("schedules-status.json");
      const dataJSON = await dadosResponse.json();

      commit("set_schedules_status", dataJSON);
    }
  },
  getters: {
    post: state => state.post,
    social_network_key: state => state.post.social_network_key,
    publication_date: state => state.post.publication_date,
    text: state => state.post,
    media: state => state.post.media,
    schedules: state => state.schedules,
    schedules_status: state => state.schedules_status
  }
};
