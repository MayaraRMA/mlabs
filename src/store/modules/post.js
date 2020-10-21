export default {
  namespaced: true,
  state: {
    date: "",
    time: "",
    post: {
      id: 2,
      social_network_key: [],
      media:
        "https://images.unsplash.com/photo-1600025282051-ec0c6bf3137a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      text: "Texto do post",
      publication_date: "",
      status_key: 1
    }
  },
  mutations: {
    set_post: (state, value) => {
      state.post = Object.assign(state.post, value);
    },
    set_time: (state, value) => {
      state.time = value;
    },
    set_date: (state, value) => {
      state.date = value;
    }
  },
  getters: {
    time: state => state.time,
    date: state => state.date,
    post: state => state.post,
    social_network_key: state => state.post.social_network_key,
    text: state => state.post,
    media: state => state.post.media
  }
};
