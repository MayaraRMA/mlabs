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
    schedules: []
  },
  mutations: {
    set_schedules: (state, value) => {
      state.schedules = value;
    }
  },
  actions: {
    get_schedules: async ({ commit }) => {
      const dadosResponse = await fetch("schedules.json");
      const dataJSON = await dadosResponse.json();

      commit("set_schedules", dataJSON);
    }
  },
  getters: {
    rede_social: state => state.post.rede_social,
    date: state => state.post.date,
    time: state => state.post.time,
    post_text: state => state.post_text,
    img: state => state.post.img,
    schedules: state => state.schedules
  }
};
