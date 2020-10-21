import { shallowMount } from "@vue/test-utils";
import MlModal from "@/components/MlModal.vue";

describe("MlModal.vue", () => {
  it("correctly mounted", () => {
    const wrapper = shallowMount(MlModal);
    expect(wrapper.exists()).toBeTruthy();
  });
});
