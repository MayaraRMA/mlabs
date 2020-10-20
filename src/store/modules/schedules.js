export default {
  namespaced: true,
  state: {
    post: {
      id: 3,
      social_network_key: [2, 3],
      media:
        "https://images.unsplash.com/photo-1600025282051-ec0c6bf3137a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      text: "Texto do post",
      publication_date: "2020-09-10T15:59:23.922Z",
      status_key: 1
    },
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
    add_schedules: state => {
      state.schedules = [state.post, ...state.schedules];
    }
  },
  actions: {
    get_schedules: async ({ commit }) => {
      const dadosResponse = await fetch("schedules.json");
      const dataJSON = await dadosResponse.json();

      commit("set_schedules", dataJSON);
      commit("add_schedules");
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
