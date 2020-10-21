import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import PreviewLinkedin from "@/components/PreviewLinkedin.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("PreviewLinkedin.vue", () => {
  it("correctly mounted", () => {
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
        post: () => {},
        date: () => "date"
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
    const wrapper = shallowMount(PreviewLinkedin, {
      localVue,
      store
    });
    expect(wrapper.exists()).toBeTruthy();
  });
});
