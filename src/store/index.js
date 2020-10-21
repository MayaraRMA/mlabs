import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import post from "./modules/post";
import schedules from "./modules/schedules";
import social_networks from "./modules/social_networks";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { user, post, schedules, social_networks }
});
