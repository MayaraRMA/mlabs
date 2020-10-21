import { shallowMount } from "@vue/test-utils";
import MlHeader from "@/components/MlHeader.vue";

describe("MlHeader.vue", () => {
  it("correctly mounted", () => {
    const wrapper = shallowMount(MlHeader);
    expect(wrapper.exists()).toBeTruthy();
  });
});
