export default {
  namespaced: true,
  state: {
    post: {
      rede_social: "",
      date: "",
      time: "",
      post_text: "",
      img: ""
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
    rede_social: state => state.post.rede_social,
    date: state => state.post.date,
    time: state => state.post.time,
    post_text: state => state.post_text,
    img: state => state.post.img,
    schedules: state => state.schedules,
    schedules_status: state => state.schedules_status
  }
};
