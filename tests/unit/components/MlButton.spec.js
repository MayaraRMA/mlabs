import { shallowMount } from "@vue/test-utils";
import MlButton from "@/components/MlButton.vue";

describe("MlButton.vue", () => {
  it("correctly mounted", () => {
    const wrapper = shallowMount(MlButton);
    expect(wrapper.exists()).toBeTruthy();
  });
});
