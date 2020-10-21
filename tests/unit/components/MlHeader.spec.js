import { mount } from "@vue/test-utils";
import MlHeader from "@/components/MlHeader.vue";

const $route = {
  path: "/some/path"
};
describe("MlHeader.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(MlHeader, {
      stubs: ["router-link", "font-awesome-icon"],
      mocks: {
        $route
      }
    });
  });
  it("correctly mounted", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
