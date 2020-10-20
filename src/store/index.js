import Vue from "vue";
import Vuex from "vuex";
import schedules from "./modules/schedules";
import social_networks from "./modules/social_networks";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { schedules, social_networks }
});
