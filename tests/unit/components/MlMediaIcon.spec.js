import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import MlMediaIcon from "@/components/MlMediaIcon.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
describe("MlMediaIcon.vue", () => {
  let gettersSocialNetworks;
  let gettersPost;
  let actions;
  let social_networks;
  let post;
  let store;

  beforeEach(() => {
    actions = {
      get_social_networks: jest.fn()
    };
    gettersSocialNetworks = {
      social_networks: () => []
    };
    gettersPost = {
      social_network_key: () => []
    };
    social_networks = {
      namespaced: true,
      getters: gettersSocialNetworks,
      actions
    };
    post = {
      namespaced: true,
      getters: gettersPost
    };
    store = new Vuex.Store({
      modules: {
        social_networks,
        post
      }
    });
  });
  it("correctly mounted", () => {
    const wrapper = shallowMount(MlMediaIcon, {
      localVue,
      store
    });
    expect(wrapper.exists()).toBeTruthy();
  });
});
