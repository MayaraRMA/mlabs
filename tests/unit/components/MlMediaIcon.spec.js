import { shallowMount } from "@vue/test-utils";
import MlMediaIcon from "@/components/MlMediaIcon.vue";

describe("MlMediaIcon.vue", () => {
  it("correctly mounted", () => {
    const wrapper = shallowMount(MlMediaIcon);
    expect(wrapper.exists()).toMatchSnapshot();
  });
});
