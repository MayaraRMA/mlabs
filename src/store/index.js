import Vue from "vue";
import Vuex from "vuex";
import schedules from "./modules/schedules";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { schedules }
});
