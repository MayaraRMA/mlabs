import { shallowMount } from "@vue/test-utils";
import MlTime from "@/components/MlTime.vue";

describe("MlTime.vue", () => {
  it("correctly mounted", () => {
    const wrapper = shallowMount(MlTime);
    expect(wrapper.exists()).toMatchSnapshot();
  });
});
