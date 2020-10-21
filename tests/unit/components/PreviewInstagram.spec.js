import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import PreviewInstagram from "@/components/PreviewInstagram.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
describe("PreviewInstagram.vue", () => {
  let gettersUser;
  let gettersPost;
  let user;
  let post;
  let store;

  beforeEach(() => {
    gettersUser = {
      user_name: () => "user_name"
    };
    gettersPost = {
      post: () => ({ media: "" })
    };
    user = {
      namespaced: true,
      getters: gettersUser
    };
    post = {
      namespaced: true,
      getters: gettersPost
    };
    store = new Vuex.Store({
      modules: {
        user,
        post
      }
    });
  });
  it("correctly mounted", () => {
    const wrapper = shallowMount(PreviewInstagram, {
      localVue,
      store
    });
    expect(wrapper.exists()).toBeTruthy();
  });
});
